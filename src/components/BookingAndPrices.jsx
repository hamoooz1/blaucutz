import './BookingAndPrices.css';
import { Scissors, PenLine, Sprout } from 'lucide-react';
import { SOCIAL_LINKS } from '../config';
import React, { useEffect, useRef, useState } from 'react';

const PriceBox = ({ title, Icon, amount }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // element is at least 50% visible
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Run the counter when visible
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    setCount(0); // reset every time it becomes visible
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / amount), 40);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= amount) clearInterval(counter);
    }, stepTime);

    return () => clearInterval(counter);
  }, [isVisible, amount]);

  return (
    <div className="price-box" ref={ref}>
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
