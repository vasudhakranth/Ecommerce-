import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/WomensFashion.css";

import flat1 from "../assets/images/flat1.jpeg";
import flat2 from "../assets/images/flat2.jpeg";
import flat3 from "../assets/images/flat3.jpeg";
import flat4 from "../assets/images/flat4.jpeg";
import flat5 from "../assets/images/flat5.jpeg";
import flat6 from "../assets/images/flat6.jpeg";
import heel1 from "../assets/images/heel1.jpeg";
import heel2 from "../assets/images/heel2.jpeg";
import heel3 from "../assets/images/heel3.jpeg";
import heel4 from "../assets/images/heel4.jpeg";
import heel5 from "../assets/images/heel5.jpeg";
import heel6 from "../assets/images/heel6.jpeg";
import boot1 from "../assets/images/boots1.jpeg";
import boot2 from "../assets/images/boots2.jpeg";
import boot3 from "../assets/images/boots3.jpeg";
import boot4 from "../assets/images/boots4.jpeg";
import boot5 from "../assets/images/boots5.jpeg";
import boot6 from "../assets/images/boots6.jpeg";

const Footwear = () => {
  const navigate = useNavigate();
  const { addToCart, cartCount } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { id: 1, name: "Comfortable Flats", price: 999, image: flat1, category: "Flats" },
    { id: 2, name: "Ballerina Flats", price: 1299, image: flat2, category: "Flats" },
    { id: 3, name: "Pointed Toe Flats", price: 1499, image: flat3, category: "Flats" },
    { id: 4, name: "Loafer Flats", price: 1799, image: flat4, category: "Flats" },
    { id: 5, name: "Slip-on Flats", price: 899, image: flat5, category: "Flats" },
    { id: 6, name: "Moccasin Flats", price: 1199, image: flat6, category: "Flats" },
    { id: 7, name: "Stiletto Heels", price: 2499, image: heel1, category: "Heels" },
    { id: 8, name: "Block Heels", price: 1999, image: heel2, category: "Heels" },
    { id: 9, name: "Wedge Heels", price: 2299, image: heel3, category: "Heels" },
    { id: 10, name: "Platform Heels", price: 2799, image: heel4, category: "Heels" },
    { id: 11, name: "Kitten Heels", price: 1699, image: heel5, category: "Heels" },
    { id: 12, name: "Pump Heels", price: 2199, image: heel6, category: "Heels" },
    { id: 13, name: "Ankle Boots", price: 2499, image: boot1, category: "Boots" },
    { id: 14, name: "Long Boots", price: 2999, image: boot2, category: "Boots" },
    { id: 15, name: "Winter Boots", price: 2799, image: boot3, category: "Boots" },
    { id: 16, name: "Combat Boots", price: 2599, image: boot4, category: "Boots" },
    { id: 17, name: "Fashion Boots", price: 2899, image: boot5, category: "Boots" },
    { id: 18, name: "Rider Boots", price: 3199, image: boot6, category: "Boots" },
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
         <span>Women&apos;s Footwear</span>
      </div>

      {/* Title */}
      <h1 className="fashion-title">Women&apos;s Footwear</h1>
      <p className="fashion-subtitle">
        Explore the latest trending footwear
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
          className={selectedCategory === "Flats" ? "active" : ""} 
          onClick={() => navigate("/flats")}
        >
          Flats
        </button>
        <button 
          className={selectedCategory === "Heels" ? "active" : ""} 
          onClick={() => navigate("/heels")}
        >
          Heels
        </button>
        <button 
          className={selectedCategory === "Boots" ? "active" : ""} 
          onClick={() => navigate("/boots")}
        >
          Boots
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

export default Footwear;
