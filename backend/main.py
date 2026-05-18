from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import engine, SessionLocal, Base
import model as models
import schemas
from passlib.context import CryptContext
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],

)
# Create tables
Base.metadata.create_all(bind=engine)

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    password = password[:72]   # truncate to 72 chars
    return pwd_context.hash(password)

# DB Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ========================
# SIGNUP API
# ========================
@app.post("/signup", response_model=schemas.UserResponse)
def signup(user: schemas.UserCreate, db: Session = Depends(get_db)):

    # Check if email already exists
    existing_user = db.query(models.User).filter(models.User.email == user.email).first()

    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Hash password
    hashed_password = hash_password(user.password)

    new_user = models.User(
        username=user.username,
        email=user.email,
        password=hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

@app.post("/login")
def login(user: schemas.UserLogin, db: Session = Depends(get_db)):

    db_user = db.query(models.User).filter(
        models.User.username == user.username
    ).first()

    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid username")

    if not verify_password(user.password, db_user.password):
        raise HTTPException(status_code=400, detail="Invalid password")

    return {
        "message": "Login successful",
        "user_id": db_user.id,
        "username": db_user.username
    }

@app.get("/user/{user_id}")
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == user_id).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return {
        "id": user.id,
        "username": user.username,
        "email": user.email
    }

@app.get("/cart/count/{user_id}")
def get_cart_count(user_id: int, db: Session = Depends(get_db)):
    count = db.query(models.Cart).filter(models.Cart.user_id == user_id).count()
    return {"cart_count": count}

@app.post("/cart/add")
def add_to_cart(item: dict, db: Session = Depends(get_db)):

    existing = db.query(models.Cart).filter(
        models.Cart.user_id == item["user_id"],
        models.Cart.product_id == item["product_id"]
    ).first()

    if existing:
        existing.quantity += 1
    else:
        new_item = models.Cart(
            user_id=item["user_id"],
            product_id=item["product_id"],
            name=item["name"],
            price=item["price"],
            quantity=1,
            image=item["image"]
        )
        db.add(new_item)

    db.commit()
    return {"message": "Item added to cart"}


@app.get("/cart/{user_id}")
def get_cart(user_id: int, db: Session = Depends(get_db)):
    items = db.query(models.Cart).filter(models.Cart.user_id == user_id).all()

    return items


@app.delete("/cart/remove/{item_id}")
def remove_item(item_id: int, db: Session = Depends(get_db)):
    item = db.query(models.Cart).filter(models.Cart.id == item_id).first()

    if not item:
        raise HTTPException(status_code=404, detail="Item not found")

    db.delete(item)
    db.commit()

    return {"message": "Item removed"}


@app.delete("/cart/clear/{user_id}")
def clear_cart(user_id: int, db: Session = Depends(get_db)):
    db.query(models.Cart).filter(models.Cart.user_id == user_id).delete()
    db.commit()

    return {"message": "Cart cleared"}