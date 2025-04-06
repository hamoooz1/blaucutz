import React, { useState } from "react";
import "./NavBar.css";
import { Instagram } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <span className="navbar-link">Home</span>
        <span className="navbar-link">Prices</span>
        <span className="navbar-link">Book Appointment</span>
        <span className="navbar-link">Gallery</span>
        <span className="divider">|</span>
        <a
          className="navbar-link icon-link"
          href="https://instagram.com/blcuttz/" // replace with actual handle
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
