import React from "react";

import { AiFillStar } from "react-icons/ai";

import "./product_detail.css";
export const ProductDetail = (props) => {
  return (
    <>
      <div className="product-detail-container">
        <img src={props.img} alt="" />

        <div className="meta-info-card">
          <h1>{props.name}</h1>

          <div className="rating">
            <AiFillStar color="yellow" />
            <h6>{props.rating}</h6>
            <p>({props.reviews} Reviews)</p>
          </div>
          
          <p>{props.description}</p>

          <div className="sizes">
            <h3>Select Size:</h3>
            <div className="size-row">
              <div className="size-option">
                <button src={props.sizeOption} alt="" />
              </div>
            </div>
          </div>

          <div className="colors">
            <h3>Select Color:</h3>
            <div className="color-row">
              <div className="color-option">
                <img src={props.colorOption} alt="" />
              </div>
            </div>
          </div>

          
        </div>

    <div className="meta-checkout-card">

      <p>${props.price}</p>

      <button>Add to cart</button>
    </div>
        
      </div>
    </>
  );
};
