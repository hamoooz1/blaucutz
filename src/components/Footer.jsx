import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-bar">
      <div className="footer-text">
        © {new Date().getFullYear()} BlauCutz. All rights reserved.
      </div>

      <a
        href="https://calendly.com/kaderidev"
        target="_blank"
        rel="noreferrer"
        className="footer-btn"
      >
        Book Appointment
      </a>
    </footer>
  );
};

export default Footer;
