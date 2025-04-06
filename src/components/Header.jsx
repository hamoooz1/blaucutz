import React from 'react';
import './Header.css';
import { SOCIAL_LINKS } from "../config";

const Header = () => {
  return (
    <header className="header">
      <video 
        className="header-video" 
        src={require('../../src/videos/hype.mp4')} 
        autoPlay 
        muted 
        loop 
        playsInline
      />
      <div className="video-overlay" />
      <div className="header-content">
        <a
          href={SOCIAL_LINKS.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="popup-btn-header"
        >
          Book Appointment
        </a>
      </div>
    </header>
  );
};

export default Header;
