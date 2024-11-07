import React from "react";
import './HomePage.css';
function HomePage() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <div className="navbar">

        <div className="navbar-left">
          <span className="app-name">EZ-Daily</span>
          <a href="/user-type-1" className="nav-link">Are you a daily?</a>
          <a href="/user-type-2" className="nav-link">Are you a recruiter?</a>
        </div>

        <div className="navbar-right">
        <button className="btn">Login</button>
        <button className="btn">Sign Up</button>
        </div>
      </div>

      <div className="hero">
        {/* Left Side - Slogan and Buttons */}
        <div className="hero-left">
          <h1>Find a daily the EZ way!</h1>
          <p>Sign up to search for costume staff looking for work... 
          <br/>  It's EZ to find a daily available in your location!</p>
          <div className="hero-buttons">
            <button className="btn">Login</button>
            <button className="btn">Sign Up</button>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="hero-right">
        <img src="/images/fitting.jpg" alt="LOGO" className="logo" />
        </div>

      </div>
    </div>
  )
}

export default HomePage;