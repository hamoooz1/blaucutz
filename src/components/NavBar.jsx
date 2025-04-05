import React from "react";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import "./NavBar.css";
import {useState} from 'react';
import { PopupButton } from 'react-calendly';

const NavBar = () => {
  const [showCalender, setShowCalendar] = useState(false);

  const showCalendarHandler = () => {
    if(!showCalender) {
      setShowCalendar(true);
    } else {
      setShowCalendar(false);
    }
  }

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
        <PopupButton
        url="https://calendly.com/kaderidev"
        rootElement={document.getElementById('root')}
        text="Book Now"
        className="book-button"
      />
      </div>
    </nav>
  );
};

export default NavBar;
