import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/kurthi.css";

import handbag1 from "../assets/images/handbag1.jpeg";
import handbag2 from "../assets/images/handbag2.jpeg";
import handbag3 from "../assets/images/handbag3.jpeg";
import handbag4 from "../assets/images/handbag4.jpeg";
import handbag5 from "../assets/images/handbag5.jpeg";
import handbag6 from "../assets/images/handbag6.jpeg";

const products = [
  {
    id: 1,
    name: "Leather Handbag",
    price: 2999,
    category: "Handbag",
    image: handbag1
  },
  {
    id: 2,
    name: "Designer Clutch",
    price: 1999,
    category: "Handbag",
    image: handbag2
  },
  {
    id: 3,
    name: "Canvas Tote Bag",
    price: 1499,
    category: "Handbag",
    image: handbag3
  },
  {
    id: 4,
    name: "Evening Bag",
    price: 2499,
    category: "Handbag",
    image: handbag4
  },
  {
    id: 5,
    name: "Messenger Bag",
    price: 1799,
    category: "Handbag",
    image: handbag5
  },
  {
    id: 6,
    name: "Backpack Purse",
    price: 2199,
    category: "Handbag",
    image: handbag6
  }
];

function Handbag() {
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

      <h1>Handbag Collection</h1>

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

export default Handbag;
