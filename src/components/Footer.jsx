import React from "react";
import "./Footer.css";
import { Instagram, Calendar } from "lucide-react";
import { SOCIAL_LINKS } from "../config";

const Footer = () => {
  return (
    <div className="footer">
      <a
        href={SOCIAL_LINKS.instagram}
        className="footer-icon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </a>
      <a
        href={SOCIAL_LINKS.calendly}  
        className="footer-icon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book via Calendly"
      >
        <Calendar size={20} />
      </a>
    </div>
  );
};

export default Footer;
