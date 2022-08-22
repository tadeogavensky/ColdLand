import React from "react";

import "./category.css";

import PropTypes from "prop-types";

import { GiCampingTent } from "react-icons/gi";

export const Category = (props) => {
  return (
    <>
      <a href="">
        <div className="category-card">
          <h4>{props.category}</h4>
          <div className="image"><img src={props.shoes} alt="" /></div>
        </div>
      </a>
    </>
  );
};

Category.propTypes = {
  category: PropTypes.string,
};

Category.defaultProps = {
  category: "Camping",
  icon: <GiCampingTent size={40} />,
};
