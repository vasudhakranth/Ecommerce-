import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/kurthi.css";

import top1 from "../assets/images/wtop1.jpeg";
import top2 from "../assets/images/wtop2.jpeg";
import top3 from "../assets/images/wtop3.jpeg";
import top4 from "../assets/images/wtop4.jpeg";
import top5 from "../assets/images/wtop5.jpeg";
import top6 from "../assets/images/wtop6.jpeg";

const products = [
  {
    id: 1,
    name: "Casual Yellow Top",
    price: 599,
    category: "Tops",
    image: top1
  },
  {
    id: 2,
    name: "Floral Summer Top",
    price: 799,
    category: "Tops",
    image: top2
  },
  {
    id: 3,
    name: "White Cotton Top",
    price: 499,
    category: "Tops",
    image: top3
  },
  {
    id: 4,
    name: "Party Wear Top",
    price: 999,
    category: "Tops",
    image: top4
  },
  {
    id: 5,
    name: "Sleeveless Trendy Top",
    price: 699,
    category: "Tops",
    image: top5
  },
  {
    id: 6,
    name: "Printed Casual Top",
    price: 549,
    category: "Tops",
    image: top6
  }
];

function Tops() {
  const navigate = useNavigate();
  const { addToCart, cartCount } = useCart();

  const handleProductClick = (product) => {
    navigate("/product-details", { state: { product } });
  };

  return (
    <div className="women-container">

      {/* Navbar */}
      <nav className="navbar">
        <div
          className="nav-logo"
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        >
          𝓙𝔂𝓸𝓡𝓾𝓷𝓪
        </div>

        <div className="nav-buttons">
          <button onClick={() => navigate("/home")} className="home-btn">
            Home
          </button>
          <button onClick={() => navigate("/womens-fashion")} className="back-btn">
            Back
          </button>
          <button onClick={() => navigate("/profile")} className="profile-btn">
            Profile
          </button>
          <button onClick={() => navigate("/cart")} className="cart-btn">
            Cart ({cartCount})
          </button>
          <button onClick={() => navigate("/login")} className="logout-btn">
            Logout
          </button>
        </div>
      </nav>

      <h1>Women Tops Collection</h1>

      {/* Products Grid */}
      <div className="grid">
        {products.map(item => (
          <div className="card" key={item.id}>
            <img 
              src={item.image} 
              alt={item.name} 
              onClick={() => handleProductClick(item)}
              style={{ cursor: "pointer" }}
            />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Tops;
