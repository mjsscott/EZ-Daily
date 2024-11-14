import { useState } from "react";
import './HomePage.css';
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";



function HomePage() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div className="home-container">
      {/* Navbar */}
      <div className="navbar">

        <div className="navbar-left">
          <span className="app-name">EZ-Daily</span>
          <a href="/" className="nav-link">Are you a daily?</a>
          <a href="/" className="nav-link">Are you a recruiter?</a>
        </div>

        <div className="navbar-right">
        <button className="btn"  onClick={() => setLoginOpen(true)}>Login</button>
        <button className="btn" onClick={() => setSignupOpen(true)}>Sign Up</button>
        </div>
      </div>

      <div className="hero">
        {/* Left Side - Slogan and Buttons */}
        <div className="hero-left">
          <h1>Find a daily the EZ way!</h1>
          <p>Sign up to search for costume staff looking for work... 
          <br/>  It's EZ to find a daily available in your location!</p>

          <div className="hero-buttons">
            <button className="btn" onClick={() => setLoginOpen(true)}>Login</button>
            <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)}>Login Modal</LoginModal>
            <button className="btn" onClick={() => setSignupOpen(true)}>Sign Up</button>
            <SignupModal open={signupOpen} onClose={() => setSignupOpen(false)}>Signup Modal</SignupModal>
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