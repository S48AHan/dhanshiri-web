import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Card/Carrowsel";
import Image from "next/image";
import React from "react";

const TopProducts = () => {
  return (
    <section className="p-4v mx-10 xl:mx-[320px] my-3 md:my-5 xl:my-10">
      <h1 className="font-semibold leading-none tracking-tight text-2xl">Top Products</h1>
      {/* <Carrowsel></Carrowsel> */}
      <Carousel>
        <CarouselContent>
          <CarouselItem className="relative">
            <p className="absolute">Printed Label</p>
            <Image
              height={300}
              width={400}
              alt="Printed Label"
              src={"/Hero/Banner.jpg"}
            />
          </CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default TopProducts;
