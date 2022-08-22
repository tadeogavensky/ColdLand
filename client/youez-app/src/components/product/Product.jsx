import React from "react";

import PropTypes from "prop-types";


import defaultImg from "../../assets/img/Nike-Red.png";

import "./product.css";

export const Product = (props) => {
  const colors = ["#00e41b", "#f5ff00", "#ff0037", "#08c9ff"];

  const imgGradient = document.querySelector(".randomBg");

  return (
    <>
      <div className="product-card">
        <div className="img-gradient-card">
          <img src={props.img} alt="" />
        </div>

        <div className="info">
          <div className="meta-info-hover">
            <div className="rating">
             {/*  <AiFillStar />
              <p>({props.rating})</p> */}

              <p id="name">{props.name}</p>
            </div>

            
          </div>

          <div className="meta">
            <p>${props.price}</p>
            <button className="">Add to cart</button>
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
  name: "Nike AirMax Red",
  price: "235",
};
