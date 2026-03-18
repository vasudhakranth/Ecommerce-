import React from "react";
import { Link } from "react-router-dom"; // Import the CSS file for styling
import '../../styles/LandingPage.css'
const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">𝓙𝔂𝓸𝓡𝓾𝓷𝓪</div>
        <div className="nav-auth">
          <Link to="/login" className="nav-btn login">Login</Link>
          <Link to="/register" className="nav-btn signup">Sign Up</Link>
        </div>
      </nav>

      {/* Main Hero Section */}
      <main className="hero-section">
        <div className="hero-left">
          <div className="image-wrapper">
            {/* Replace with your actual image path */}
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
              alt="Shopping Model" 
            />
          </div>
        </div>

        <div className="hero-right">
          <h1 className="hero-title">Unlock Your Style.</h1>
          <p className="hero-subtitle">
            Shop the latest trends and discover exclusive deals tailored just for you.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;