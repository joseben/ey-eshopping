// BookInventory.js
import React from 'react';
import './BookInventory.css';
import logo from './logo.png'
 
const BookInventory = () => {
  return (
    <nav className="book-nav">
      <div className="book-inventory-logo">
        <img src= { logo } alt="Logo" />
        <span className="name">BookHub</span>
      </div>
      <div className="book-inventory-explore">
        <a href="./BookTable">
        <button>Home</button>
        </a>
      </div>
    </nav>
  );
};
 
export default BookInventory;