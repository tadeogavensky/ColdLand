import React from "react";

import PropTypes from "prop-types";

import { AiFillStar } from "react-icons/ai";

import defaultImg from "../../assets/img/backpack.png";

import "./product.css";

export const Product = (props) => {
  return (
    <>
      <div className="product-card">
        <div className="img-gradient-card">
          <img src={props.img} alt="" />
        </div>

        <div className="info">
          <div className="rating">
            <AiFillStar />
            <p>({props.rating})</p>
          </div>

          <p id="name">{props.name}</p>

          <div className="meta">
            <p>${props.price}</p>
            <button className="btn-gradient">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

Product.propTypes = {
  img: PropTypes.string,
  rating: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
};

Product.defaultProps = {
  img: defaultImg,
  rating: "4.5",
  name: "Backpack",
  price: "235",
};
