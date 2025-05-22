"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useThema } from '../components/theme-provide';
import { clientSideFunction } from '@/src/utils/client-utils';

export default function ClientRouterPage() {
  const settings = {
    dots: true,
  };

  const tema = useThema()
  const result = clientSideFunction();

  return (
    <div className="container flex-col text-white" style={{backgroundColor: tema.colors.secondary}}>
      <h1>{result}</h1>
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
    </div>
  );
}
