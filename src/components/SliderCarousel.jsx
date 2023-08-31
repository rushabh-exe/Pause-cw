import React, { useState, useEffect } from 'react';
import './style/SliderCarousel.css';

const SliderCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    "./assets/side1.jpg",
    "./assets/side1.jpg",
    "./assets/side1.jpg"
  ];
  const resst = [
    "./assets/test.jpg",
    "./assets/test.jpg",
    "./assets/test.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flexcontainer">
      <section className="container">
        <div className="panel1">
          <div>
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
          </div>
          <div className="panelchild1">
            <div className="slider">
              {resst.map((slide, index) => (
                <div
                  key={index}
                  className={`slide ${index === activeIndex ? 'active-slide' : ''}`}
                >
                  <img src={slide} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="panel2">
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
        </div>
      </section>
    </div>
  );
};

export default SliderCarousel;
