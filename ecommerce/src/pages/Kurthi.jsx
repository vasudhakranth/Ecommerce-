import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/kurthi.css";

import kurthi1 from "../assets/images/kurthi1.jpeg";
import kurthi2 from "../assets/images/kurthi2.jpeg";
import kurthi3 from "../assets/images/kurthi3.jpeg";
import kurthi4 from "../assets/images/kurthi4.jpeg";
import kurthi5 from "../assets/images/kurthi5.jpeg";
import kurthi6 from "../assets/images/kurthi6.jpeg";

const products = [
  {
    id: 1,
    name: "Designer Kurti",
    price: 999,
    category: "Kurti",
    image: kurthi1
  },
  {
    id: 2,
    name: "Silk Kurti",
    price: 1499,
    category: "Kurti",
    image: kurthi2
  },
  {
    id: 3,
    name: "Cotton Kurti",
    price: 799,
    category: "Kurti",
    image: kurthi3
  },
  {
    id: 4,
    name: "Floral Print Kurti",
    price: 1,
    category: "Kurti",
    image: kurthi4
  },
  {
    id: 5,
    name: "Party Wear Kurti",
    price: 1299,
    category: "Kurti",
    image: kurthi5
  },
  {
    id: 6,
    name: "Casual Kurti",
    price: 699,
    category: "Kurti",
    image: kurthi6
  }
];

function Kurthi() {
  const navigate = useNavigate();
  const { addToCart, cartCount } = useCart();
  const [filter, setFilter] = useState("Kurti");

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

      <h1>Kurti Collection</h1>

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

export default Kurthi;
