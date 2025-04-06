import React, { useEffect, useState } from 'react';
import './Prices.css';
import { Scissors, PenLine, Sprout } from 'lucide-react';

const PriceBox = ({ title, Icon, amount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // slower: 2 seconds
    const stepTime = Math.max(Math.floor(duration / amount), 40); // slower steps
  
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

const Prices = () => {
  return (
    <section className="prices-section">
      <PriceBox title="Cuts" Icon={Scissors} amount={25} />
      <PriceBox title="Design" Icon={PenLine} amount={5} />
      <PriceBox title="Powder" Icon={Sprout} amount={20} />
    </section>
  );
};

export default Prices;
