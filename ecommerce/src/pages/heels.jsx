import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/kurthi.css";

import heel1 from "../assets/images/heel1.jpeg";
import heel2 from "../assets/images/heel2.jpeg";
import heel3 from "../assets/images/heel3.jpeg";
import heel4 from "../assets/images/heel4.jpeg";
import heel5 from "../assets/images/heel5.jpeg";
import heel6 from "../assets/images/heel6.jpeg";

const products = [
  {
    id: 1,
    name: "Stiletto Heels",
    price: 1999,
    category: "Heels",
    image: heel1
  },
  {
    id: 2,
    name: "Block Heels",
    price: 1499,
    category: "Heels",
    image: heel2
  },
  {
    id: 3,
    name: "Wedge Heels",
    price: 1799,
    category: "Heels",
    image: heel3
  },
  {
    id: 4,
    name: "Party Heels",
    price: 2299,
    category: "Heels",
    image: heel4
  },
  {
    id: 5,
    name: "Designer Heels",
    price: 2499,
    category: "Heels",
    image: heel5
  },
  {
    id: 6,
    name: "Casual Heels",
    price: 1299,
    category: "Heels",
    image: heel6
  }
];

function Heels() {
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
          <button onClick={() => navigate("/womens-footwear")} className="back-btn">
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

      <h1>Heels Collection</h1>

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

export default Heels;
