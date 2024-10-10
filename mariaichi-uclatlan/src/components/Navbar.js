// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './/Images/UclatlanB.png'; // Adjust the path based on your project structure


function Navbar() {
  return (
    
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            
          </div>
          <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/members">Members</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
  );
}

export default Navbar;