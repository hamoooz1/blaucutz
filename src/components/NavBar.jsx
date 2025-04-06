import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Instagram } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Close menu on nav link click (mobile)
  const handleNavClick = () => {
    setMenuOpen(false);
  };

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
        <a href="#home" className="navbar-link home-link" onClick={handleNavClick}>
          Home
        </a>
        <a href="#prices" className="navbar-link" onClick={handleNavClick}>
          Prices
        </a>
        <a href="#booking" className="navbar-link" onClick={handleNavClick}>
          Book Appointment
        </a>
        <a href="#gallery" className="navbar-link" onClick={handleNavClick}>
          Gallery
        </a>
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
