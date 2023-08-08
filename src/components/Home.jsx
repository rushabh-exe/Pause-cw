import React, { useState } from 'react';
import './style/home.css';

function Home() {
  const images = ['./assets/side1.jpg', './assets/slide2.jpg', './assets/slide3.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const showImage = (index) => {
    const imgElements = document.querySelectorAll(".mem-img img");
    imgElements.forEach((image, i) => {
      if (i === index) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    showImage(currentIndex);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    showImage(currentIndex);
  };

  return (
    <main>
      <div className="club-info">
        <p> <strong>Lorem ipsum ad quisquam</strong> repellendus voluptate explicabo sed sunt vel sapiente itaque
          saepe.</p>
        <img className="logo-b" src='./assets/pause-logo.jpg' alt='logo' style={{ height: '300px' }} />
      </div>
      <div className="club-description">
        <div className="about-us">
          <div className="head">About Us</div>
          <hr style={{ width: '50%', marginLeft: '25%' }} />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At dolorem nostrum voluptates placeat
            similique cum vero nam libero deserunt, odit quaerat necessitatibus, nihil magnam molestiae fugiat!
            Velit magnam rem esse.</p>
        </div>
        <div className="slide-section">
          <img id="prevBtn" src="./assets/EpArrowLeftBold.svg" alt="" onClick={prevImage} />
          <div className="mem-img">
            {images.map((image, index) => (
              <img key={index} src={image} alt="" style={{ display: index === currentIndex ? "block" : "none" }} />
            ))}
          </div>
          <img id="nextBtn" src="./assets/EpArrowRightBold.svg" alt="" onClick={nextImage} />
        </div>
      </div>
      <div className="image-slideshow">
        <div>
          <img src="./assets/side1.jpg" alt="1" />
        </div>
        <div>
          <img src="./assets/slide2.jpg" alt="2" />
        </div>
        <div>
          <img src="./assets/slide3.jpg" alt="3" />
        </div>
      </div>
    </main>
  );
}

export default Home;
