// Banner.js
import React from 'react';
import './Banner.css';
import bannerImage from './banner1.jpg';
 
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h2 className="banner-heading">Explore The Book Store</h2>
          <p className="banner-description">Get ready to uncover the magical world called books</p>
          <a href="https://www.pinterest.com.au/pin/15833036179404835/">
          <button className="banner-button">Explore More</button>
          </a>
        </div>
      </div>
      <div className="banner-image">
        <img src={bannerImage} alt="Banner" />
      </div>
    </div>
  );
};
 
export default Banner