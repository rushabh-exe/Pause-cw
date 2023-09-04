import React, { useState, useEffect } from 'react';
import './style/home.css';
// import Carousel from 'react-material-ui-carousel';
// import { Paper } from '@material-ui/core';

function Home(props) {
  // const images = [
  //   { src: './assets/side1.jpg', alt: 'Image 1' },
  //   { src: './assets/side1.jpg', alt: 'Image 2' },
  //   { src: './assets/side1.jpg', alt: 'Image 3' },
  // ];

  const [activeDiv, setActiveDiv] = useState(0);

  const handlePrev = () => {
    setActiveDiv((prevActiveDiv) => Math.max(0, prevActiveDiv - 1));
  };

  const handleNext = () => {
    setActiveDiv((prevActiveDiv) => Math.min(2, prevActiveDiv + 1));
  };

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
    <>
      <main>
      </main>
      <div className="main2">
        <div className="club-info">
          <p> <strong>Lorem ipsum ad quisquam</strong> repellendus voluptate explicabo sed sunt vel sapiente itaque
            saepe.</p>
          <img className="logo-b" src='./assets/pause-logo.jpg' alt='logo' style={{ height: '300px' }} />
        </div>
        <div className="club-description">
          <div className="about-us">
            <div
              className={`${activeDiv === 0 ? '' : 'slide-out'
                }`}
              style={{ display: activeDiv === 0 ? 'block' : 'none' }}
            >
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nesciunt provident, voluptatum facilis modi perferendis! Hic dolorum modi non veniam?</p>
            </div>
            <div
              className={`${activeDiv === 1 ? '' : 'slide-out'
                }`}
              style={{ display: activeDiv === 1 ? 'block' : 'none' }}
            >
              <h3>What can you do here:</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis placeat nesciunt aperiam nostrum, magni sapiente?</p>
            </div>
            <div
              className={`${activeDiv === 2 ? '' : 'slide-out'
                }`}
              style={{ display: activeDiv === 2 ? 'block' : 'none' }}
            ><h3>Opportunities:</h3>
              <p>
                <button>events</button>
                <button>compitions</button>
                <button>prices</button>
                <button>more</button>
              </p>
            </div>
          </div>
          <div className="navigation-buttons">
            <button onClick={handlePrev} disabled={activeDiv === 0}>Previous</button>
            <button onClick={handleNext} disabled={activeDiv === 2}>Next</button>
          </div>
        </div>
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
        {/* <Carousel>
          {images.map((image, index) => (
            <Paper key={index}>
              <img src={image.src} alt={image.alt} />
            </Paper>
          ))}
        </Carousel> */}
      </div>
    </>
  );
}

export default Home;
