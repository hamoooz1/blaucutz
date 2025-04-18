import React from 'react';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import NavBar from './components/NavBar';
import Prices from './components/Prices';
import Footer from './components/Footer';
import BookingAndPrices from './components/BookingAndPrices';

function App() {
  return (
    <>
      <div className="app-container">
        <NavBar />
        <section id="home"><Header /></section>
        <section id="gallery"><Gallery /></section>
        <section id="prices"><BookingAndPrices /></section>
        <section id="footer" ><Footer /></section>
      </div>

    </>
  );
}

export default App;
