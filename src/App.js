import React from 'react';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Header />
      <Gallery />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
