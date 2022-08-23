import React from "react";


import airmax from "../../assets/img/Nike-Airmax.png";

import {  BsFillArrowRightCircleFill } from "react-icons/bs";

import "./main.css";
export const Main = () => {
  return (
    <>
      <main className="main">
        <div className="main-left">
          <h1>
            Winter Collections <span style={{ color: "black" }}>2022</span>
          </h1>
          <div className="main-img mobile">
            <img src={airmax} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
            accusantium. Laborum ad maxime nihil optio id. Est veritatis
            asperiores amet debitis consequuntur expedita at, unde voluptatem
            laboriosam ducimus, dolorem soluta!
          </p>
          <button className="btn-gradient" style={{textAlign:'left'}}>Shop Now <BsFillArrowRightCircleFill/></button>
        </div>

        <div className="main-img desktop">
          <img src={airmax} style={{ transform: "rotate(-10deg)" }} alt="" />
        </div>
      </main>
    </>
  );
};
