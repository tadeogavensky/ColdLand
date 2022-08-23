import React from "react";

import "./categories.css";

import { Category } from "../category/Category";


import running from "../../assets/img/Nike-Airmax.png"
import sportwear from "../../assets/img/nike-air-jordan-1-retro-unc.png"
import croc from "../../assets/img/Imagen-1-removebg-preview.png"



import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Categories = () => {
  const categories = [
    {
      name: "Running",
      shoes: running,
    },
    {
      name: "Sportwear",
      shoes: sportwear,
    },
    {
      name: "Crocs",
      shoes: croc,
    },
  ];


  return (
    <>
      <div className="categories">
        <Carousel
          responsive={responsive}
          infinite={true}
          rewind={true}
          keyBoardControl={true}
          customTransition="transform 1000ms ease-in-out"
          removeArrowOnDeviceType={[, "tablet", "mobile"]}
        >
          {
            categories.map((index, value)=>{
              return(
                <Category category={index.name} shoes={index.shoes}/>
              )
            })
          }
        </Carousel>
      </div>
    </>
  );
};
