import React, { useState, useEffect } from 'react';
import './Imageslider.css';
import logof from '../../assets/foundationlogo.png'
import logom from '../../assets/apj.png'
const images = [
  { id: 1, src: logof , alt: 'Image 1' },
  { id: 2, src: logom, alt: 'Image 2' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
      <div className="image-slider">
          <div className="image-slider__container">
             
              <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="image-slider__image"
              />
           
          </div>
      </div>
  );
};

export default ImageSlider;