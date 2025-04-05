import React from "react";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import "./NavBar.css";

const NavBar = ({ onBookClick }) => {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <a href="/" className="logo-link">
          <img src="/logo.jpeg" alt="BlauCutz Logo" className="navbar-logo" />
        </a>
      </div>

      {/* Right: Instagram + Book Now */}
      <div className="navbar-right">
        <a
          href="https://www.instagram.com/blcuttz/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Instagram className="social-icon" />
        </a>
        <motion.button
          className="book-button"
          whileTap={{ scale: 0.95 }}
          onClick={onBookClick}
        >
          Book Now
        </motion.button>
      </div>
    </nav>
  );
};

export default NavBar;
