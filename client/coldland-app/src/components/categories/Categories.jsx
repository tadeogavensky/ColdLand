import React from "react";

import "./categories.css";

import { Category } from "../category/Category";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { GiCampingTent,GiFireAxe,GiMonclerJacket } from "react-icons/gi";

import {BsSnow} from "react-icons/bs"

import {FaHiking} from "react-icons/fa"

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
      name: "Camping",
      icon: <GiCampingTent size={20}/>,
    },
    {
      name: "Hiking",
      icon: <FaHiking size={20}/>,
    },
    {
      name: "Snow",
      icon: <BsSnow size={20}/>,
    },
    {
      name: "Gear",
      icon: <GiFireAxe size={20}/>,
    },
    {
      name: "Jackets",
      icon: <GiMonclerJacket size={20}/>,
    },
  ];
  const icons = [];

  return (
    <>
      <div className="categories">
        <h1>Shop by</h1>
        <Carousel
          responsive={responsive}
          infinite={true}
          rewind={true}
          keyBoardControl={true}
          customTransition="transform 1000ms ease-in-out"
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
          {
            categories.map((index, value)=>{
              return(
                <Category category={index.name} icon={index.icon}/>
              )
            })
          }
        </Carousel>
      </div>
    </>
  );
};
