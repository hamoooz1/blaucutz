import React, { useEffect, useRef } from 'react';
import './Gallery.css';

import fade1 from '../videos/cut1.mp4';
import taper2 from '../videos/cut2.mp4';
import lineup3 from '../videos/cut3.mp4';

const Gallery = () => {
  const videos = [fade1, taper2, lineup3];
  const videoRefs = useRef([]);

  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
      videoRefs.current.forEach(video => {
        if (video) {
          video.play().catch(() => {}); // autoPlay might be blocked without user interaction
        }
      });
    }
  }, []);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video && !/Mobi|Android/i.test(navigator.userAgent)) {
      video.play();
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video && !/Mobi|Android/i.test(navigator.userAgent)) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section id="gallery" className="gallery">
      <h2>Our Cuts</h2>
      <div className="grid">
        {videos.map((src, index) => (
          <video
            key={index}
            ref={(el) => (videoRefs.current[index] = el)}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            className="cut-video"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            controls={/Mobi|Android/i.test(navigator.userAgent)} // Show controls on mobile
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
