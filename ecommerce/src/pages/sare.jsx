import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/saree.css";

import sare1 from "../assets/images/sare1.jpeg";
import sare2 from "../assets/images/sare2.jpeg";
import sare3 from "../assets/images/sare3.jpeg";
import sare4 from "../assets/images/sare4.jpeg";
import sare5 from "../assets/images/sare5.jpeg";
import sare6 from "../assets/images/sare6.jpeg";
import sare7 from "../assets/images/sare7.jpeg";

const products = [
  {
    id: 1,
    name: "Traditional Silk Saree",
    price: 2999,
    category: "Saree",
    image: sare1
  },
  {
    id: 2,
    name: "Banarasi Saree",
    price: 3499,
    category: "Saree",
    image: sare2
  },
  {
    id: 3,
    name: "Designer Saree",
    price: 2499,
    category: "Saree",
    image: sare3
  },
  {
    id: 4,
    name: "Floral Print Saree",
    price: 1999,
    category: "Saree",
    image: sare4
  },
  {
    id: 5,
    name: "Party Wear Saree",
    price: 3999,
    category: "Saree",
    image: sare5
  },
  {
    id: 6,
    name: "Casual Saree",
    price: 1499,
    category: "Saree",
    image: sare6
  },
  {
    id: 7,
    name: "Green Saree",
    price: 1499,
    category: "Saree",
    image: sare7
  },
];

function Saree() {
  const navigate = useNavigate();
  const { addToCart, cartCount } = useCart();
  const [filter, setFilter] = useState("Saree");

  const filteredProducts = products;

  const handleProductClick = (product) => {
    navigate("/product-details", { state: { product } });
  };

  return (
    <div className="women-container">

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => navigate("/home")} style={{cursor: "pointer"}}>𝓙𝔂𝓸𝓡𝓾𝓷𝓪</div>
        <div className="nav-buttons">
          <button onClick={() => navigate("/home")} className="home-btn">Home</button>
          <button onClick={() => navigate("/womens-fashion")} className="back-btn">Back</button>
          <button onClick={() => navigate("/profile")} className="profile-btn">Profile</button>
          <button onClick={() => navigate("/cart")} className="cart-btn">Cart ({cartCount})</button>
          <button onClick={() => navigate("/login")} className="logout-btn">Logout</button>
        </div>
      </nav>

      <h1>Saree Collection</h1>

      {/* Products */}
      <div className="grid">
        {filteredProducts.map(item => (
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

export default Saree;
