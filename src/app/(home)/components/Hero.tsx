"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay
        className="w-full"
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <Image
              width={1800}
              height={300}
              src={"/Machineries/MACHINERIES1.jpg"}
              alt="image 1"
              className="object-contain h-[]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">Slide 4</div>
        </SwiperSlide>

        {/* Custom navigation buttons */}
        <div className="swiper-button-prev bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center"></div>
        <div className="swiper-button-next bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center"></div>
      </Swiper>
    </section>
  );
};

export default Hero;
