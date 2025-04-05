import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="nav">
        <div className="logo">BlauCutz</div>
        <div className="nav-links">
          <a href="#gallery">Gallery</a>
          <a href="#book">Book</a>
          <a href="https://www.instagram.com/blaucutz" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
      <div className="hero">
        <h1>Stay Sharp.</h1>
        <p>Modern cuts with classic vibes.</p>
        <a href="#book" className="book-cta">Book Now</a>
      </div>
    </header>
  );
};

export default Header;
