import React from "react";

import rainbow from "../../../assets/img/nike_rainbow.png"


import "./chooseus.css"

export const ChooseUs = () => {
  return (
    <>
      <div className="chooseUs">
        <div className="chooseUs-card">
          <img src={rainbow} alt="" />
        </div>
        <div className="chooseUs-text">
            <p>About us</p>
            <h1>We provide High Quality Footwear</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod magnam animi sapiente reiciendis dolore possimus, blanditiis fuga, autem veritatis similique cumque! Dolores voluptate modi ipsum voluptas accusamus temporibus perferendis quo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iure quaerat quo ipsum soluta blanditiis quod </p>
            
            <img src={rainbow} alt="" />
            
            <button>Join the Youez, it's for you</button>
        </div>
      </div>
    </>
  );
};
