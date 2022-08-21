import React from "react";

import jacket from "../../assets/img/jacket.png";

import "./main.css";
export const Main = () => {
  return (
    <>
      <main className="main">
        <div className="main-left">
          <h1>
            Winter Collections <span style={{ color: "#0C2454" }}>2022</span>
          </h1>
          <div className="main-img mobile">
            <img src={jacket} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
            accusantium. Laborum ad maxime nihil optio id. Est veritatis
            asperiores amet debitis consequuntur expedita at, unde voluptatem
            laboriosam ducimus, dolorem soluta!
          </p>
          <button>Shop Now</button>
        </div>

        <div className="main-img desktop">
          <img src={jacket} style={{ transform: "rotate(-10deg)" }} alt="" />
        </div>
      </main>
    </>
  );
};
