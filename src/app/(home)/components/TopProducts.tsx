"use client";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const productImages = [
  { src: "/Hero/Banner.jpg", title: "Printed Label" },
  { src: "/Manufacturing Unit/Manufacturing unit 2.jpg", title: "Woven Label" },
  { src: "/Manufacturing Unit/Manufacturing unit 5.jpg", title: "Hang Tag" },
  { src: "/Manufacturing Unit/Manufacturing unit 9.jpg", title: "Poly" },
  { src: "/Manufacturing Unit/images (1).jpeg", title: "Box" },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 4 },
  desktop: { breakpoint: { max: 1280, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 2 },
};

const TopProducts = () => {
  return (
    <section className=" my-6 md:my-10">
      <h1 className="font-semibold text-2xl mb-4 px-4 md:px-10 xl:px-[300px]">
        Top Products
      </h1>
      <div className="px-4 md:px-10 xl:px-[300px]">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          draggable
          keyBoardControl
          arrows
          showDots  
          containerClass="carousel-container"
          itemClass="px-2"
          dotListClass="custom-dot-list-style"

        >
          {productImages.map((item, idx) => (
            <div key={idx} className="relative rounded overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                width={400}
                height={200}
                className="w-full h-[300px] object-cover rounded"
              />
              <p className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
                {item.title}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TopProducts;
