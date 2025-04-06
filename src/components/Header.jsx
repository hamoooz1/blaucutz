import React from 'react';
import './Header.css';

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
          href="https://calendly.com/kaderidev"
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
