import React from 'react';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import NavBar from './components/NavBar';
import Prices from './components/Prices';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Header />
      <Gallery />
      <Prices />
      <Booking />
    </div>
  );
}

export default App;
