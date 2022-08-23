import React from "react";


import banner2 from "../../assets/img/banner2.jpg"
import banner3 from "../../assets/img/banner3.jpg"
import banner4 from "../../assets/img/banner4.jpg"
import banner6 from "../../assets/img/banner6.jpg"
import banner7 from "../../assets/img/banner7.jpg"






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


    const img = [banner2,banner3,banner4,banner6,banner7]
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        rewind={true}
        autoPlay={true}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
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
