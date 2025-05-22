"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ImageSlider = () => {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="http://picsum.photos/g/400/200" alt="Random placeholder image 1" />
        </div>
        <div>
          <img src="http://picsum.photos/g/400/200" alt="Random placeholder image 2" />
        </div>
        <div>
          <img src="http://picsum.photos/g/400/200" alt="Random placeholder image 3" />
        </div>
        <div>
          <img src="http://picsum.photos/g/400/200" alt="Random placeholder image 4" />
        </div>
      </Slider>
    </div>
  );
}
