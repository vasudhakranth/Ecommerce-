import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/WomensFashion.css";

import floralDress from "../assets/images/wgrown1.jpeg";
import silkSaree from "../assets/images/sare1.jpeg";
import kurti from "../assets/images/kurthi1.jpeg";
import top from "../assets/images/wtop1.jpeg";

const WomensFashion = () => {
  const navigate = useNavigate();
  const { addToCart, cartCount } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleLogout = () => {
    navigate("/login");
  };

  const products = [
    { id: 1, name: "Floral Summer Dress", price: 1499, image: floralDress, category: "Dress" },
    { id: 2, name: "Traditional Silk Saree", price: 2999, image: silkSaree, category: "Saree" },
    { id: 3, name: "Designer Kurti", price: 999, image: kurti, category: "Kurti" },
    { id: 4, name: "Casual Yellow Top", price: 599, image: top, category: "Tops" },
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
          <button onClick={() => navigate("/profile")} className="profile-btn">Profile</button>
          <button onClick={() => navigate("/cart")} className="cart-btn">Cart ({cartCount})</button>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="breadcrumb">
         <span>Women&apos;s Fashion</span>
      </div>

      {/* Title */}
      <h1 className="fashion-title">Women&apos;s Fashion</h1>
      <p className="fashion-subtitle">
        Explore the latest trending women&apos;s wear
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
          className={selectedCategory === "Saree" ? "active" : ""} 
          onClick={() => navigate("/saree")}
        >
          Saree
        </button>
        <button 
          className={selectedCategory === "Kurti" ? "active" : ""} 
          onClick={() => navigate("/kurthi")}
        >
          Kurti
        </button>
        <button 
          className={selectedCategory === "Tops" ? "active" : ""} 
          onClick={() => navigate("/tops")}
        >
          Tops
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
        <button>3</button>
        <button>Next</button>
      </div>

    </div>
  );
};

export default WomensFashion;
