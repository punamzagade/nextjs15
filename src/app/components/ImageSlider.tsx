"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ServerRoutePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="image-slider-container w-full max-w-lg mx-auto">
      <Slider {...settings}>
        <div className="relative w-full h-[200px]">
          <Image
            src="https://picsum.photos/400/200"
            alt="Random Image 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-[200px]">
          <Image
            src="https://picsum.photos/400/200"
            alt="Random Image 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-[200px]">
          <Image
            src="https://picsum.photos/400/200"
            alt="Random Image 3"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-[200px]">
          <Image
            src="https://picsum.photos/400/200"
            alt="Random Image 4"
            fill
            className="object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}
