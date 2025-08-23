import React, { useRef } from "react";
import './Carousel.css'
import img1 from './image/card1.png'


export default function Carousel() {
  const scrollRef = useRef(null);

  // Function to scroll
  const scroll = (direction, step) => {
    let scrollAmount = 0;
    if (step === "small") scrollAmount = 310; // ~1 card

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      
      <div className="pointer-events-none absolute left-0 top-0 h-full w-15 bg-gradient-to-r from-white to-transparent z-10" />
      
      <div className="pointer-events-none absolute right-0 top-0 h-full w-15 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="carousel-wrapper absolute left-2 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
        
        <button
          onClick={() => scroll("left", "small")}
          className="scroll-btn btn-left"
        >
          <img src="https://static.thenounproject.com/png/2963798-200.png" alt="" />
        </button>
      </div>

      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
        
        <button
          onClick={() => scroll("right", "small")}
          className="scroll-btn btn-right"
        >
          <img src="https://static.thenounproject.com/png/swipe-right-icon-2963799-512.png" alt="" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="carousel-container flex gap-4 scroll-smooth no-scrollbar px-6"
      >
        <div className="cards">
          <div className="card1 card"><a href="https://harshkhokhar63.github.io/Portfolio-Demo-Website/" target="_blank"><img src={img1} alt="" /></a></div>
          <div className="card2 card"><a href=""><img src="" alt="" /></a></div>
          <div className="card3 card"><a href=""><img src="" alt="" /></a></div>
          <div className="card4 card"><a href=""><img src="" alt="" /></a></div>
          <div className="card5 card"><a href=""><img src="" alt="" /></a></div>
          <div className="card6 card"><a href=""><img src="" alt="" /></a></div>
        </div>
      </div>
    </div>
  );
}
