// src/components/About.js
import React from 'react';
import './About.css'; // Create a CSS file for styling
import Navbar from '../components/Navbar';

function About() {
  return (
    
    <div className="about-page">
      <Navbar />
      
      <h1>About Us</h1>
      <p>
        Welcome to Mariachi de Uclatlán! We are UCLA's premier mariachi ensemble dedicated to 
        preserving the rich traditions of Mexican music and culture. Founded in 1961, our 
        ensemble has a long history of excellence and passion for mariachi music.
      </p>
      <p>
        Our mission is to promote the art of mariachi music, engage with our community, 
        and foster a love for Mexican heritage. We perform a variety of styles, including 
        son jalisciense, son huasteco, bolero, ranchera, and huapango.
      </p>
      <h2>Our History</h2>
      <p>
        Mariachi de Uclatlán was established to provide students with an opportunity to 
        experience and perform traditional Mexican music while also promoting cultural 
        awareness. Over the years, we have participated in numerous events and competitions, 
        showcasing the talent and dedication of our members.
      </p>
      <h2>Join Us</h2>
      <p>
        Whether you are a musician, dancer, or simply a lover of mariachi music, we invite you 
        to join us! Together, we can share our passion and keep the traditions alive.
      </p>
    </div>
  );
}

export default About;
