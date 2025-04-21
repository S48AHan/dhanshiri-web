import React from "react";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import TopProducts from "./components/TopProducts";

const page = () => {
  return (
    <div>
      <Hero />
      <Summary />
        <TopProducts />
    </div>
  );
};

export default page;
