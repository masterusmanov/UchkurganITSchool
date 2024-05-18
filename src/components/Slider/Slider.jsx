// src/ContinuousScrollGallery.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import one from "../../assets/images/events/1.jpg"
import two from "../../assets/images/events/2.jpg"
import three from "../../assets/images/events/3.jpg"
import four from "../../assets/images/events/4.jpg"
import five from "../../assets/images/events/5.jpg"
import six from "../../assets/images/events/6.jpg"
import seven from "../../assets/images/events/7.jpg"
import eight from "../../assets/images/events/8.jpg"
import nine from "../../assets/images/events/9.jpg"
import ten from "../../assets/images/events/10.jpg"
import './Slider.css';

const images = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  // Duplicate images to create the seamless scroll effect
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
];

const Slider = () => {
  return (
    <div className="gallery-container my-[100px]">
      <div className="gallery">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} className='rounded-xl object-cover'/>
        ))}
      </div>
    </div>
  );
};

export default Slider;
