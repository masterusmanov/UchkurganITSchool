// src/ContinuousScrollGallery.js
import React from 'react';
import './Slider.css';

const images = [
  'https://via.placeholder.com/200?text=Image+1',
  'https://via.placeholder.com/200?text=Image+2',
  'https://via.placeholder.com/200?text=Image+3',
  'https://via.placeholder.com/200?text=Image+4',
  'https://via.placeholder.com/200?text=Image+5',
  'https://via.placeholder.com/200?text=Image+6',
  'https://via.placeholder.com/200?text=Image+7',
  'https://via.placeholder.com/200?text=Image+8',
  'https://via.placeholder.com/200?text=Image+9',
  'https://via.placeholder.com/200?text=Image+10',
  // Duplicate images to create the seamless scroll effect
  'https://via.placeholder.com/200?text=Image+1',
  'https://via.placeholder.com/200?text=Image+2',
  'https://via.placeholder.com/200?text=Image+3',
  'https://via.placeholder.com/200?text=Image+4',
  'https://via.placeholder.com/200?text=Image+5',
  'https://via.placeholder.com/200?text=Image+6',
  'https://via.placeholder.com/200?text=Image+7',
  'https://via.placeholder.com/200?text=Image+8',
  'https://via.placeholder.com/200?text=Image+9',
  'https://via.placeholder.com/200?text=Image+10'
];

const Slider = () => {
  return (
    <div className="gallery-container">
      <div className="gallery">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
