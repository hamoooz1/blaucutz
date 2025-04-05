import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    '/cuts/fade1.jpg',
    '/cuts/taper2.jpg',
    '/cuts/lineup3.jpg'
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Our Cuts</h2>
      <div className="grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Cut ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
