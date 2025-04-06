import React from 'react';
import './Booking.css';
import { SOCIAL_LINKS } from "../config";

const Booking = () => {
  return (
    <section id="book" className="booking">
      <h2>Book Your Appointment</h2>
      <a
          href={SOCIAL_LINKS.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="popup-btn-header"
        >
          Book Appointment
        </a>
    </section>
  );
};

export default Booking;
