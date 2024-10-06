// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './/Images/UclatlanB.png'; // Adjust the path based on your project structure


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Links */}
        <ul className="nav-menu left">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">About</Link>
          </li>
        </ul>

        {/* Center Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Mariachi de Uclatlán Logo" className="logo-image" />
          </Link>
        </div>

        {/* Right Links */}
        <ul className="nav-menu right">
          <li className="nav-item">
            <Link to="/members" className="nav-links">Members</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;