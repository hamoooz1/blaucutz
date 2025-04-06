import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';

import burst1 from '../videos/burst1.mp4';
import burst2 from '../videos/burst2.mp4';

import taper1 from '../videos/taper1.mp4';
import taper2 from '../videos/taper2.mp4';
import taper3 from '../videos/taper3.mp4';

import design1 from '../videos/design1.mp4';
import design2 from '../videos/design2.jpeg';

const categorizedBursts = {
  Fades: [
    { src: burst1, type: 'video' },
    { src: burst2, type: 'video' },
  ],
  Tapers: [
    { src: taper1, type: 'video' },
    { src: taper2, type: 'video' },
    { src: taper3, type: 'video' },
  ],
  Designs: [
    { src: design1, type: 'video' },
    { src: design2, type: 'image' },
  ]
};

const Gallery = () => {
  const mediaRefs = useRef({});
  const [modalMedia, setModalMedia] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Fades');
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
      Object.values(mediaRefs.current).forEach(el => {
        if (el?.tagName === 'VIDEO') {
          el.play().catch(() => {});
        }
      });
    }
  }, []);

  const handleMouseEnter = (key) => {
    const el = mediaRefs.current[key];
    if (el?.tagName === 'VIDEO' && !/Mobi|Android/i.test(navigator.userAgent)) {
      el.play().catch(() => {});
    }
  };

  const handleMouseLeave = (key) => {
    const el = mediaRefs.current[key];
    if (
      el?.tagName === 'VIDEO' &&
      !/Mobi|Android/i.test(navigator.userAgent) &&
      !el.paused
    ) {
      el.pause();
      el.currentTime = 0;
    }
  };

  return (
    <>
      {/* Mobile Tabs */}
      {isMobile && (
        <div className="gallery-tabs">
          {Object.keys(categorizedBursts).map((cat) => (
            <button
              key={cat}
              className={`gallery-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <section id="gallery" className="gallery">
        {Object.entries(categorizedBursts)
          .filter(([category]) => !isMobile || category === activeCategory)
          .map(([category, items]) => (
            <div key={category} className="gallery-category">
              <h2 className="gallery-title">{category}</h2>
              <div className="grid">
                {items.map((item, idx) => {
                  const key = `${category}-${idx}`;
                  return item.type === 'video' ? (
                    <video
                      key={key}
                      ref={(el) => (mediaRefs.current[key] = el)}
                      src={item.src}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="cut-video"
                      onMouseEnter={() => handleMouseEnter(key)}
                      onMouseLeave={() => handleMouseLeave(key)}
                      onClick={() => setModalMedia({ type: 'video', src: item.src })}
                      controls={/Mobi|Android/i.test(navigator.userAgent)}
                    />
                  ) : (
                    <img
                      key={key}
                      ref={(el) => (mediaRefs.current[key] = el)}
                      src={item.src}
                      alt={category}
                      className="cut-video"
                      onClick={() => setModalMedia({ type: 'image', src: item.src })}
                    />
                  );
                })}
              </div>
            </div>
          ))}
      </section>

      {/* MODAL VIEWER */}
      {modalMedia && (
        <div className="gallery-modal" onClick={() => setModalMedia(null)}>
          {modalMedia.type === 'video' ? (
            <video src={modalMedia.src} controls autoPlay className="modal-media" />
          ) : (
            <img src={modalMedia.src} alt="burst" className="modal-media" />
          )}
        </div>
      )}
    </>
  );
};

export default Gallery;
