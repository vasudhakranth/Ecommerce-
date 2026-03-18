import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/kurthi.css";

import flat1 from "../assets/images/flat1.jpeg";
import flat2 from "../assets/images/flat2.jpeg";
import flat3 from "../assets/images/flat3.jpeg";
import flat4 from "../assets/images/flat4.jpeg";
import flat5 from "../assets/images/flat5.jpeg";
import flat6 from "../assets/images/flat6.jpeg";

const products = [
  {
    id: 1,
    name: "Comfortable Flats",
    price: 999,
    category: "Flats",
    image: flat1
  },
  {
    id: 2,
    name: "Ballerina Flats",
    price: 1299,
    category: "Flats",
    image: flat2
  },
  {
    id: 3,
    name: "Party Wear Flats",
    price: 1499,
    category: "Flats",
    image: flat3
  },
  {
    id: 4,
    name: "Casual Slip-ons",
    price: 899,
    category: "Flats",
    image: flat4
  },
  {
    id: 5,
    name: "Designer Flats",
    price: 1799,
    category: "Flats",
    image: flat5
  },
  {
    id: 6,
    name: "Traditional Mojaris",
    price: 1199,
    category: "Flats",
    image: flat6
  }
];

function Flats() {
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

      <h1>Flats Collection</h1>

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

export default Flats;
