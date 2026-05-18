import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCart, getCartTotal, cartCount } = useCart();

  const handleCheckout = async () => {
    await clearCart();
    alert('Proceeding to checkout!');
    navigate('/home');
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    }
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
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
          <span>{cartCount}</span>
        </div>
        <div className="summary-row total">
          <span>Total Amount:</span>
          <span>₹{getCartTotal()}</span>
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
