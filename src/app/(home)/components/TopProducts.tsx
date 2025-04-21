import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Card/Carrowsel";
import React from "react";

const TopProducts = () => {
  return (
    <section className="p-4v mx-3 md:mx-10 xl:mx-[300px] my-3 md:my-5 xl:my-10">
      <h1>Top Products</h1>
      {/* <Carrowsel></Carrowsel> */}
      <Carousel>
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
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
