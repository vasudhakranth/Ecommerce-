import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  // Load cart from backend on mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.user_id) {
      loadCart(user.user_id);
    } else {
      setLoading(false);
    }
  }, []);

  const loadCart = async (userId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/cart/${userId}`);
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error('Failed to load cart:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate cart count from cartItems (total quantity of all items)
  const cartCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  }, [cartItems]);

  const addToCart = async (product) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.user_id) {
      alert('Please login first');
      return;
    }

    try {
      await fetch("http://127.0.0.1:8000/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.user_id,
          product_id: product.id || Date.now(), // fallback id
          name: product.name,
          price: product.price,
          image: product.image || '',
        }),
      });
      // Reload cart
      await loadCart(user.user_id);
      alert("Added to cart 🛒");
    } catch (error) {
      console.error('Failed to add to cart:', error);
      alert('Failed to add item');
    }
  };

  const removeFromCart = async (productId) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return;

    try {
      await fetch(`http://127.0.0.1:8000/cart/remove/${productId}`, {
        method: "DELETE",
      });
      // Reload cart
      await loadCart(user.user_id);
    } catch (error) {
      console.error('Failed to remove from cart:', error);
    }
  };

  const clearCart = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.user_id) return;

    try {
      await fetch(`http://127.0.0.1:8000/cart/clear/${user.user_id}`, {
        method: "DELETE",
      });
      setCartItems([]);
    } catch (error) {
      console.error('Failed to clear cart:', error);
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
