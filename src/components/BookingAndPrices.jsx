import React, { useEffect, useState } from 'react';
import './BookingAndPrices.css';
import { Scissors, PenLine, Sprout } from 'lucide-react';
import { SOCIAL_LINKS } from '../config';

const PriceBox = ({ title, Icon, amount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / amount), 40);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= amount) clearInterval(counter);
    }, stepTime);

    return () => clearInterval(counter);
  }, [amount]);

  return (
    <div className="price-box">
      <Icon size={32} strokeWidth={1.5} />
      <h3>{title}</h3>
      <p className="price">${count}</p>
    </div>
  );
};

const BookingAndPrices = () => {
  return (
    <section className="booking-prices-section">
      {/* BOOKING */}
      <div className="booking-panel">
        <h2 className="booking-title">BOOK YOUR CUT</h2>
        <div className="booking-testimonials">
          <div className="testimonial">
            <p className="quote">“Booking with BLAU is the easiest part of my week.”</p>
            <p className="author">— Malik J.</p>
          </div>
          <div className="testimonial">
            <p className="quote">“Always fresh, always on time. They never miss.”</p>
            <p className="author">— Devon C.</p>
          </div>
          <div className="testimonial">
            <p className="quote">“Top-tier service. I don’t go anywhere else.”</p>
            <p className="author">— Jalen P.</p>
          </div>
        </div>

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
            SEE WORK →
          </a>
        </div>
      </div>

      {/* PRICES */}
      <div className="prices-panel">
        <h2 className="section-title">OUR PRICES</h2>
        <div className="prices-grid">
          <PriceBox title="Cuts" Icon={Scissors} amount={25} />
          <PriceBox title="Design" Icon={PenLine} amount={5} />
          <PriceBox title="Powder" Icon={Sprout} amount={20} />
        </div>
      </div>
    </section>
  );
};

export default BookingAndPrices;
