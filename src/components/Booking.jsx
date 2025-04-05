import React from 'react';
import { PopupButton } from 'react-calendly';
import './Booking.css';

const Booking = () => {
  return (
    <section id="book" className="booking">
      <h2>Book Your Appointment</h2>
      <PopupButton
        url="https://calendly.com/kaderidev"
        rootElement={document.getElementById('root')}
        text="Launch Calendar"
        className="popup-btn"
      />
    </section>
  );
};

export default Booking;
