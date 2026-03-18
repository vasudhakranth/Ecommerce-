import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/kurthi.css";

import jewelry1 from "../assets/images/jewelry1.jpeg";
import jewelry2 from "../assets/images/jewelry2.jpeg";
import jewelry3 from "../assets/images/jewelry3.jpeg";
import jewelry4 from "../assets/images/jewelry4.jpeg";
import jewelry5 from "../assets/images/jewelry5.jpeg";
import jewelry6 from "../assets/images/jewelry6.jpeg";

const products = [
  {
    id: 1,
    name: "Gold Necklace",
    price: 5999,
    category: "Jewelry",
    image: jewelry1
  },
  {
    id: 2,
    name: "Diamond Earrings",
    price: 7999,
    category: "Jewelry",
    image: jewelry2
  },
  {
    id: 3,
    name: "Pearl Bracelet",
    price: 2999,
    category: "Jewelry",
    image: jewelry3
  },
  {
    id: 4,
    name: "Kundan Set",
    price: 4999,
    category: "Jewelry",
    image: jewelry4
  },
  {
    id: 5,
    name: "Silver Ring",
    price: 1999,
    category: "Jewelry",
    image: jewelry5
  },
  {
    id: 6,
    name: "Oxidized Earrings",
    price: 999,
    category: "Jewelry",
    image: jewelry6
  }
];

function Jewelry() {
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

      <h1>Jewelry Collection</h1>

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

export default Jewelry;
