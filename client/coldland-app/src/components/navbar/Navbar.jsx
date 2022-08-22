import React from 'react'



import "./navbar.css"

import {FaSearch} from "react-icons/fa"

import {FiShoppingCart} from "react-icons/fi"

import {GiMountainClimbing,GiHamburgerMenu} from "react-icons/gi"

import {BiCartAlt} from "react-icons/bi"

export const NavBar = () => {
  return (
    <>
    
    <nav className='nav'>
        <GiMountainClimbing scale={10} size={40} className='logo'/>

        <div className='nav-center'>
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">Camping</a>
            <a href="">Hiking</a>
            <a href="">Gear</a>
            <a href="">Sale</a> 
            <a href="">New arrivals</a>
        </div>

        <div className='nav-right'>
           {/*  <input type="text" />  */}
           <FaSearch size={15}/>
           <BiCartAlt size={15}/>

           <a href=""><button >Shop now</button></a>

        </div>


        <div className="mobile-menu">
            <GiHamburgerMenu size={40}/>
        </div>
    </nav>
    
    
    </>
  )
}
