import React from "react";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import TopProducts from "./components/TopProducts";
import Map from "./components/Map";

const page = () => {
  return (
    <div>
      <Hero />
      <Summary />
        <TopProducts />
        <Map />
    </div>
  );
};

export default page;
