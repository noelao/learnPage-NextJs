"use client"

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

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
            <Image
              src="http://picsum.photos/g/400/200"
              alt="Random placeholder image"
              width={400}
              height={200}/>
          </div>
          <div>
            <Image
              src="http://picsum.photos/g/400/200"
              alt="Random placeholder image 2"
              width={400}
              height={200}/>
          </div>
          <div>
            <Image
              src="http://picsum.photos/g/400/200"
              alt="Random placeholder image 3"
              width={400}
              height={200}/>
          </div>
          <div>
            <Image
              src="http://picsum.photos/g/400/200"
              alt="Random placeholder image 3"
              width={400}
              height={200}/>
          </div>
        </Slider>
      </div>
    </div>
  );
}
