import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/kurthi.css";

import watch1 from "../assets/images/watche1.jpeg";
import watch2 from "../assets/images/watche2.jpeg";
import watch3 from "../assets/images/watche3.jpeg";
import watch4 from "../assets/images/watche4.jpeg";
import watch5 from "../assets/images/watche5.jpeg";
import watch6 from "../assets/images/watche6.jpeg";

const products = [
  {
    id: 1,
    name: "Gold Analog Watch",
    price: 2999,
    category: "Watches",
    image: watch1
  },
  {
    id: 2,
    name: "Silver Digital Watch",
    price: 2499,
    category: "Watches",
    image: watch2
  },
  {
    id: 3,
    name: "Leather Strap Watch",
    price: 1999,
    category: "Watches",
    image: watch3
  },
  {
    id: 4,
    name: "Diamond Encrusted Watch",
    price: 9999,
    category: "Watches",
    image: watch4
  },
  {
    id: 5,
    name: "Sports Watch",
    price: 3499,
    category: "Watches",
    image: watch5
  },
  {
    id: 6,
    name: "Designer Chronograph",
    price: 5999,
    category: "Watches",
    image: watch6
  }
];

function Watches() {
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

      <h1>Watches Collection</h1>

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

export default Watches;
