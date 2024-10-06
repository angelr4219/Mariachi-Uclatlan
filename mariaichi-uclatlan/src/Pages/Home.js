// src/Pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <div className="welcome-section">
        <h1>Welcome to Mariachi de Uclatlán</h1>
        <p>
          We are UCLA's premier mariachi ensemble dedicated to preserving the rich
          traditions of Mexican music and culture. Explore more about us below.
        </p>
        <div className="button-container">
          <Link to="/about" className="home-button">About Us</Link>
          <Link to="/members" className="home-button">Meet Our Members</Link>
          <Link to="/contact" className="home-button">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;