import React from "react";

import "./navbar.css";

import { FaSearch } from "react-icons/fa";

import { FiShoppingCart } from "react-icons/fi";

import { GiMountainClimbing, GiHamburgerMenu } from "react-icons/gi";

import { BiCartAlt } from "react-icons/bi";

export const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="mobile-menu">
          <GiHamburgerMenu size={40} />
        </div>

    

        <div className="nav-center">
          <a href="">Home</a>
          <a href="">Products</a>
          <a href="">Brands</a>
          <a href="">Sale</a>
          <a href="">New arrivals</a>
        </div>

        <div className="nav-right">
          {/*  <input type="text" />  */}
          <FaSearch size={15} />
          <BiCartAlt size={15} />

          <a href="">
            <button>Shop now</button>
          </a>
        </div>

        <FaSearch id="search" size={40} />
      </nav>
    </>
  );
};
