import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h2>ShopSphere</h2>

      <Link to="/cart" className="cart-icon">
      <Link to="/profile">Profile</Link>
        <FaShoppingCart size={25} />
        <span className="cart-count">
          {cartItems.reduce((total, item) => total + item.quantity, 0)}
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;