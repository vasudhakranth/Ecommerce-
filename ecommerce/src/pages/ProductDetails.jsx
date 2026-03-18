import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart, cartCount } = useCart();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    // First try to get product from location state
    const stateProduct = location.state?.product;
    
    if (stateProduct) {
      setProduct(stateProduct);
      setLoading(false);
    } else if (id) {
      // If no state, try to get from URL params or show error
      // For now, we'll show an error message
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [location.state, id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert("Added to cart!");
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addToCart(product);
      navigate("/cart");
    }
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    alert(isWishlisted ? "Removed from wishlist!" : "Added to wishlist!");
  };

  // Loading state
  if (loading) {
    return (
      <div className="details-page">
        <div style={{ padding: "50px", textAlign: "center" }}>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // No product found
  if (!product) {
    return (
      <div className="details-page">
        <nav className="navbar">
          <div 
            className="nav-logo" 
            onClick={() => navigate("/home")}
            style={{ cursor: "pointer" }}
          >
            𝓙𝔂𝓸𝓡𝓾𝓷𝓪
          </div>
          <div className="nav-buttons">
            <button onClick={() => navigate("/home")} className="home-btn">Home</button>
            <button onClick={() => navigate("/cart")} className="cart-btn">Cart ({cartCount})</button>
          </div>
        </nav>
        <div className="details-container" style={{ flexDirection: "column", textAlign: "center" }}>
          <h2>Product Not Found</h2>
          <p>Please select a product from the product listing page.</p>
          <button 
            onClick={() => navigate("/home")}
            style={{ 
              padding: "15px 30px", 
              backgroundColor: "#d4a373", 
              border: "none", 
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="details-page">
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
          <button onClick={() => navigate("/home")} className="home-btn">Home</button>
          <button onClick={() => navigate("/profile")} className="profile-btn">Profile</button>
          <button onClick={() => navigate("/cart")} className="cart-btn">Cart ({cartCount})</button>
          <button onClick={() => navigate("/login")} className="logout-btn">Logout</button>
        </div>
      </nav>

      <div className="details-container">
        {/* Left Side - Image */}
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Right Side - Details */}
        <div className="details-info">
          <p className="category">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="price">₹{product.price}</p>
          
          <div className="description">
            <h3>Description</h3>
            <p>
              This is a premium quality {product.name?.toLowerCase() || "product"} from our exclusive collection. 
              Perfect for any occasion, it offers both style and comfort. Made with high-quality 
              materials to ensure durability and long-lasting use.
            </p>
          </div>

          <div className="product-details">
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Availability:</strong> In Stock</p>
            <p><strong>Shipping:</strong> Free delivery</p>
          </div>

          {/* Wishlist Button */}
          <div className="wishlist" onClick={handleWishlist}>
            <span style={{ 
              color: isWishlisted ? "red" : "gray",
              fontSize: "24px",
              marginRight: "10px"
            }}>
              {isWishlisted ? "❤️" : "🤍"}
            </span>
            {isWishlisted ? "Added to Wishlist" : "Add to Wishlist"}
          </div>

          {/* Action Buttons */}
          <div className="buttons">
            <button className="cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
