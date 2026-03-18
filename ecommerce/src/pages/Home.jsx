import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Home.css";
import fashionImage from "../assets/images/fashion image.jpeg";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [cartCountState, setCartCountState] = useState(0);
  const [user, setUser] = useState(null);
  const { cartCount } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        navigate("/login");
        return;
      }

      setUser(storedUser);
    };

    fetchData();
    window.addEventListener("focus", fetchData);

    return () => window.removeEventListener("focus", fetchData);
  }, []);

  useEffect(() => {
    if (!user) return;

    const userId = user.user_id;

    // Fetch username
    fetch(`http://127.0.0.1:8000/user/${userId}`)
      .then(res => res.json())
      .then(data => setUsername(data.username));

    // Fetch cart count  
      fetch(`http://127.0.0.1:8000/cart/${userId}`)
        .then(res => res.json())
        .then(data => setCartCountState(data.length));
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-logo">𝓙𝔂𝓸𝓡𝓾𝓷𝓪</div>
        <div className="nav-auth">
          <button onClick={() => navigate("/profile")} className="nav-btn profile">
            Profile
          </button>
          <button onClick={() => navigate("/cart")} className="nav-btn cart">
            Cart ({cartCountState})
          </button>
          <button onClick={handleLogout} className="nav-btn logout">
            Logout
          </button>
        </div>
      </nav>

      <main className="home-content">
        <h1>Welcome {username}! 🛍️</h1>
        <p>Your one-stop shop for the latest fashion trends</p>

        <div className="hero-section">
          <img
            src={fashionImage}
            alt="Women Fashion"
            className="hero-image"
          />

        </div>

        <div className="categories-section">
          <h2>Shop by Category</h2>
          <div className="category-grid">

            <div className="category-card" onClick={() => navigate("/womens-fashion")}>
              <h3>Women's Fashion</h3>
              <p>Discover trending women's wear</p>
            </div>

            <div className="category-card" onClick={() => navigate("/footwear")}>
              <h3>Footwear</h3>
              <p>Step into style with our collection</p>
            </div>

            <div className="category-card" onClick={() => navigate("/accessories")}>
              <h3>Accessories</h3>
              <p>Complete your look with accessories</p>
            </div>

          </div>
        </div>
      </main>
      {/* 🔥 Footer Section */}
<footer className="footer">
  <div className="footer-container">

    {/* About Section */}
    <div className="footer-column">
      <h3>About</h3>
      <p>Contact Us</p>
      <p>About Us</p>
      <p>Careers</p>
      <p>Press</p>
    </div>

    {/* Help Section */}
    <div className="footer-column">
      <h3>Help</h3>
      <p>Payments</p>
      <p>Shipping</p>
      <p>Cancellation & Returns</p>
      <p>FAQ</p>
    </div>

    {/* Consumer Policy Section */}
    <div className="footer-column">
      <h3>Consumer Policy</h3>
      <p>Cancellation Policy</p>
      <p>Terms of Use</p>
      <p>Security</p>
      <p>Privacy</p>
    </div>

  </div>

  <div className="footer-bottom">
    © 2026 JyoRuna. All Rights Reserved.
  </div>
</footer>
    </div>
  );
};

export default Home;
