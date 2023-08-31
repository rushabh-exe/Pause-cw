import React, { useState, useEffect } from 'react';
import './style/SliderCarousel.css';

const SliderCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    "./assets/side1.jpg",
    "./assets/slide2.jpg",
    "./assets/slide3.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 1000); // Change slide every 5 seconds

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? 'active-slide' : ''}`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? 'active-slide' : ''}`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SliderCarousel;
