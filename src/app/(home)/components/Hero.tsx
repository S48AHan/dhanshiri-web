"use client";
import React from "react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex justify-center items-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true} // Enable infinite looping
        onSwiper={(swiper) => {
          // Force start autoplay if needed
          if (swiper.autoplay && swiper.autoplay.start) {
            swiper.autoplay.start();
          }
        }}
        className="w-full h-[600px]"
      >
        <SwiperSlide>
          <div className="flex justify-center h-full">
            <Image
              width={1800}
              height={600}
              src="/Hero/Banner.jpg"
              alt="image 1"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center h-full">
            <Image
              width={1800}
              height={600}
              src="/Hero/Banner.png"
              alt="image 2"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
