import React from 'react';
import './Booking.css';
import { SOCIAL_LINKS } from '../config';

const Booking = () => {
  return (
    <section id="book" className="booking-section">
      <div className="booking-content">
        <h1 className="booking-title">BOOK YOUR CUT</h1>
        <p className="booking-description">
          We make it easy to reserve your seat — book a time that works for you and let our barbers handle the rest.
        </p>
        <div className="booking-buttons">
          <a
            href={SOCIAL_LINKS.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="booking-btn"
          >
            BOOK NOW →
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="booking-btn"
          >
            SEE OUR WORK →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Booking;
