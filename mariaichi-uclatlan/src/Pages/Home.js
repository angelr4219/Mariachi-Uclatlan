// src/Pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import UclaNavbar from '../components/UclaNavbar';
import UclaFooter from '../components/UclaFooter';

function Home() {
  return (
    <div className="home-page">
     
      <UclaNavbar />
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
          <Link to="/login" className="home-button">Login</Link>
        </div>
        
      </div>
      <UclaFooter />
    </div>
  );
}

export default Home;