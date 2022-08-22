import React from "react";


import "./banner.css"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  all: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
};
export const Banner = () => {


    const img = []
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        rewind={true}
        keyBoardControl={true}
        customTransition="transform 1000ms ease-in-out"
        removeArrowOnDeviceType={["all"]}
        className="banner"
      >

        {
            img.map((item)=>{
                return(
                    <img src={item} alt="" />
                )
            })
        }


      </Carousel>
    </>
  );
};
