import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Instagram } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Optional: prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <nav className="navbar">
      {/* Hamburger Menu */}
      <button
        className={`menu-icon ${menuOpen ? "hide" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      {/* Nav Links */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <span className="navbar-link">Home</span>
        <span className="navbar-link">Prices</span>
        <span className="navbar-link">Book Appointment</span>
        <span className="navbar-link">Gallery</span>
        <span className="divider">|</span>
        <a
          className="navbar-link icon-link"
          href="https://instagram.com/blcuttz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={20} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
