import React, { useState, useRef, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const cards = ['1', '2', '3', '4', '5', '6'];
  const visibleCount = 3;
  const cardWidth = 310;

  const [startIndex, setStartIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handleNext = () => {
    if (startIndex + visibleCount < cards.length) {
      setStartIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    setTranslateX(-startIndex * cardWidth);
  }, [startIndex]);

  return (
    <div className="carousel-container">
      <button className="nav left" onClick={handlePrev} disabled={startIndex === 0}>
        &#10094;
      </button>

      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          <div className="card"><a href=""><img className='project' src="https://karolo.com/wp-content/uploads/2025/02/nisien-thumbnail.jpg" alt="" /></a></div>
          <div className="card"><a href=""><img className='project' src="https://intersmart.ae/wp-content/uploads/2024/10/What-is-web-designing.webp" alt="" /></a></div>
          <div className="card"><a href=""><img className='project' src="https://cdn.sanity.io/images/r115idoc/production/c34eb6bb72db15ac433719d21f0b712fb88a24e1-768x492.png?w=1920&q=75&fit=clip&auto=format" alt="" /></a></div>
          <div className="card"><a href=""><img className='project' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUAkegq5EoZHtaTc3XzwinQU09D3k622N-w&s" alt="" /></a></div>
          <div className="card"><a href=""><img className='project' src="https://cdn.mos.cms.futurecdn.net/xCSAEp8DjjrT2UQB87AoFN.jpg" alt="" /></a></div>
          <div className="card"><a href=""><img className='project' src="https://assets.justinmind.com/wp-content/uploads/2021/09/web-design-brain-station-bootcamp.png" alt="" /></a></div>
        </div>
      </div>

      <button
        className="nav right"
        onClick={handleNext}
        disabled={startIndex + visibleCount >= cards.length}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
