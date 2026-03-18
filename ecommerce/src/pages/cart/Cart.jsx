import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);


  const handleCheckout = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  await fetch(`http://127.0.0.1:8000/cart/clear/${user.user_id}`, {
    method: "DELETE",
  });

  setCartItems([]);
  alert('Proceeding to checkout!');
  navigate('/home');
};

  useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate("/login");
    return;
  }

  fetch(`http://127.0.0.1:8000/cart/${user.user_id}`)
    .then(res => res.json())
    .then(data => setCartItems(data));
}, []);

const handleRemove = async (id) => {
  await fetch(`http://127.0.0.1:8000/cart/remove/${id}`, {
    method: "DELETE",
  });

  setCartItems(cartItems.filter(item => item.id !== id));
};

const addToCart = async (product) => {
  const user = JSON.parse(localStorage.getItem("user"));

  await fetch("http://127.0.0.1:8000/cart/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: user.user_id,
      product_id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }),
  });

  alert("Added to cart 🛒");
};

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart is Empty</h2>
        <p>Add some products to your cart to see them here!</p>
        <button onClick={() => navigate('/home')} className="continue-shopping">
          Continue Shopping
        </button>
      </div>
    );
  }

  

  return (
    <div className="cart-container">
      <nav className="cart-navbar">
        <div
          className="nav-logo"
          onClick={() => navigate('/home')}
          style={{ cursor: 'pointer' }}
        >
          𝓙𝔂𝓸𝓡𝓾𝓷𝓪
        </div>
        <div className="nav-buttons">
          <button onClick={() => navigate('/home')} className="home-btn">
            Home
          </button>
        </div>
      </nav>

      <h1>Shopping Cart</h1>
      
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>
              <p className="quantity">Quantity: {item.quantity}</p>
              <p className="subtotal">Subtotal: ₹{item.price * item.quantity}</p>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <span>Total Items:</span>
          <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
        </div>
        <div className="summary-row total">
          <span>Total Amount:</span>
          <span>₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
        </div>
        <button onClick={handleCheckout} className="checkout-btn">
          Proceed to Checkout
        </button>
        <button onClick={() => navigate('/home')} className="continue-shopping">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
