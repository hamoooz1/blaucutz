import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import taper1 from '../videos/taper1.mp4';
import taper2 from '../videos/taper2.mp4';
import design1 from '../videos/design1.mp4';

const mediaItems = [
  { src: taper1, type: 'video' },
  { src: taper2, type: 'video' },
  { src: design1, type: 'video' },
];

const Gallery = () => {
  const mediaRefs = useRef({});
  const [modalMedia, setModalMedia] = useState(null);
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  useEffect(() => {
    if (isMobile) {
      Object.values(mediaRefs.current).forEach((el) => {
        if (el?.tagName === 'VIDEO') {
          el.play().catch(() => { });
        }
      });
    }
  }, [isMobile]);

  const handleMouseEnter = (key) => {
    const el = mediaRefs.current[key];
    if (el?.tagName === 'VIDEO' && !isMobile) {
      el.play().catch(() => { });
    }
  };

  const handleMouseLeave = (key) => {
    const el = mediaRefs.current[key];
    if (el?.tagName === 'VIDEO' && !isMobile && !el.paused) {
      el.pause();
      el.currentTime = 0;
    }
  };

  return (
    <>
      <section id="gallery" className="gallery">
        <div className="gallery-container">
          {!isMobile ? (
            <div className="desktop-gallery">
              {mediaItems.map((item, idx) => {
                const key = `media-${idx}`;
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
                    controls={false}
                  />
                ) : (
                  <img
                    key={key}
                    ref={(el) => (mediaRefs.current[key] = el)}
                    src={item.src}
                    alt="cut"
                    className="cut-video"
                    onClick={() => setModalMedia({ type: 'image', src: item.src })}
                  />
                );
              })}
            </div>
          ) : (
            <Swiper spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }}>
              {mediaItems.map((item, idx) => (
                <SwiperSlide key={`slide-${idx}`}>
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      muted
                      loop
                      autoPlay
                      playsInline
                      controls
                      className="cut-video"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt="cut"
                      className="cut-video"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

          )}
        </div>

      </section>

      {modalMedia && (
        <div className="gallery-modal" onClick={() => setModalMedia(null)}>
          {modalMedia.type === 'video' ? (
            <video src={modalMedia.src} controls autoPlay className="modal-media" />
          ) : (
            <img src={modalMedia.src} alt="cut" className="modal-media" />
          )}
        </div>
      )}
    </>
  );
};

export default Gallery;
