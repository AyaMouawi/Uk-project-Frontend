import React, { useState } from 'react';
import './styles/header.css';

const Header=()=> {
  return (
    <div className='hero-header'> <div className='header-back' >
       <div className='left-side-of-header'><h1>Learn And Cooperate</h1>
       <p>Find the best online and On-site Courses, Workshops and Conferences</p>
       <button className='left-side-of-header-button'>Explore Courses</button></div>
       <div className='right-side-of-header'><img className='right-side-of-header-img' src='./images/girlMain.png'/></div>
    </div>

    </div>
   
  );
}

export default Header;
