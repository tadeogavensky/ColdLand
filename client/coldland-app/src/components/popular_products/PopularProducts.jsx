import React from "react";

import "./pp.css"
import { Product } from "../product/Product";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const PopularProducts = () => {
  return (
    <div  className="popular-products">
      <h1>
        Popular <span style={{ color: "#0C2454" }}> Products </span>
      </h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        rewind={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="transform 1000ms ease-in-out"
        removeArrowOnDeviceType={["tablet", "mobile"]}
       
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Carousel>
    </div>
  );
};
