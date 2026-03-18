import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/kurthi.css";

import boot1 from "../assets/images/boots1.jpeg";
import boot2 from "../assets/images/boots2.jpeg";
import boot3 from "../assets/images/boots3.jpeg";
import boot4 from "../assets/images/boots4.jpeg";
import boot5 from "../assets/images/boots5.jpeg";
import boot6 from "../assets/images/boots6.jpeg";

const products = [
  {
    id: 1,
    name: "Classic Ankle Boots",
    price: 2499,
    category: "Boots",
    image: boot1
  },
  {
    id: 2,
    name: "Leather Long Boots",
    price: 2999,
    category: "Boots",
    image: boot2
  },
  {
    id: 3,
    name: "Winter Fur Boots",
    price: 2799,
    category: "Boots",
    image: boot3
  },
  {
    id: 4,
    name: "Block Heel Boots",
    price: 2599,
    category: "Boots",
    image: boot4
  },
  {
    id: 5,
    name: "Stylish Zip Boots",
    price: 2899,
    category: "Boots",
    image: boot5
  },
  {
    id: 6,
    name: "Designer Party Boots",
    price: 3199,
    category: "Boots",
    image: boot6
  }
];

function Boots() {
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
          <button onClick={() => navigate("/footwear")} className="back-btn">
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

      <h1>Boots Collection</h1>

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

export default Boots;
