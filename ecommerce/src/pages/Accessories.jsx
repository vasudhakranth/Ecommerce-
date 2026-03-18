import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/WomensFashion.css";

import jewelry1 from "../assets/images/jewelry1.jpeg";
import handbag1 from "../assets/images/handbag1.jpeg";
import watch1 from "../assets/images/watche1.jpeg";

const Accessories = () => {
  const navigate = useNavigate();
  const { addToCart, cartCount } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { id: 1, name: "Gold Necklace Set", price: 5999, image: jewelry1, category: "Jewelry" },
    { id: 2, name: "Leather Handbag", price: 2999, image: handbag1, category: "Handbag" },
    { id: 3, name: "Gold Analog Watch", price: 2999, image: watch1, category: "Watches" },
  ];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product) => {
    navigate("/product-details", { state: { product } });
  };

  return (
    <div className="fashion-container">

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

      {/* Breadcrumb */}
      <div className="breadcrumb">
         <span>Accessories</span>
      </div>

      {/* Title */}
      <h1 className="fashion-title">Accessories</h1>
      <p className="fashion-subtitle">
        Explore the latest trending accessories
      </p>

      {/* Category Filters */}
      <div className="category-filters">
        <button 
          className={selectedCategory === "All" ? "active" : ""} 
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button 
          className={selectedCategory === "Jewelry" ? "active" : ""} 
          onClick={() => navigate("/jewelry")}
        >
          Jewelry
        </button>
        <button 
          className={selectedCategory === "Handbag" ? "active" : ""} 
          onClick={() => navigate("/handbag")}
        >
          Handbag
        </button>
        <button 
          className={selectedCategory === "Watches" ? "active" : ""} 
          onClick={() => navigate("/watches")}
        >
          Watches
        </button>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img 
              src={product.image} 
              alt={product.name} 
              onClick={() => handleProductClick(product)}
              style={{ cursor: "pointer" }}
            />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            <button className="cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="active">1</button>
        <button>2</button>
        <button>Next</button>
      </div>

    </div>
  );
};

export default Accessories;
