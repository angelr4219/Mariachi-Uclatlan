// src/components/Members.js
import React from 'react';
import './Members.css';
import Navbar from '../components/Navbar';

const StaffData = [
    {
      name: 'Chuy',
      image: 'mariaichi-uclatlan\src\components\Images\lebron.jpg', // Replace with your actual image path
      description: 'John is the President and oversees all operations.',
    },
    {
        name: 'Elias',
        image: 'path/to/image1.jpg', // Replace with your actual image path
        description: 'John is the President and oversees all operations.',
      },
    
    // Add more administrative members as needed
  ];
const adminData = [
    {
        name: 'Bobby',
        image: 'path/to/image1.jpg', // Replace with your actual image path
        description: 'Bobby plays the Violin, is a 3rd year studying Music.',
      },
      {
        name: 'Enrique',
        image: 'path/to/image2.jpg', // Replace with your actual image path
        description: 'Enrique plays the trumpet, is a 2nd year studying Music.',
      },
      {
        name: 'Sylvia',
        image: 'path/to/image2.jpg', // Replace with your actual image path
        description: 'Sylvia plays the Trumpet, is a 1st year studying Music.',
      },
      {
        name: 'Camila',
        image: 'path/to/image2.jpg', // Replace with your actual image path
        description: 'Camila plays the Violin, is a 4th year studying Music.',
      },
    // Add more administrative members as needed
  ];
  
  const teamData = [
    {
        name: 'Angel Ramirez',
        image: 'path/to/image3.jpg', // Replace with your actual image path
        description: 'Angel plays the guitarron, is a 3rd year studying Applied Math.',
      },
      {
        name: 'Dayanara Bravo',
        image: 'path/to/image4.jpg', // Replace with your actual image path
        description: 'Dayanara plays the Guitarron, is a 2nd year studying Music.',
      },
    
      {
        name: 'Gabriella Cardona',
        image: 'path/to/image4.jpg', // Replace with your actual image path
        description: 'Gabriella plays the Guitar, is a 1st year studying Music.',
      },
      {
        name: 'Paulina Perez',
        image: 'path/to/image3.jpg', // Replace with your actual image path
        description: 'Paulina plays the Guitar, is a 4th year studying Music.',
      },
      {
        name: 'Brandon Hernandez',
        image: 'path/to/image4.jpg', // Replace with your actual image path
        description: 'Brandon plays the guitar, is a 2nd year studying Music.',
      },
      {
        name: 'Alaina Stark',
        image: 'path/to/image3.jpg', // Replace with your actual image path
        description: 'Alaina plays the Harp, is a 1st year studying Music.',
      },
      {
        name: 'April Zavala',
        image: 'path/to/image4.jpg', // Replace with your actual image path
        description: 'April plays the violin, is a 3rd year studying Music.',
      },
      {
        name: 'Saúl Gutierrez',
        image: 'path/to/image3.jpg', // Replace with your actual image path
        description: 'Saúl plays the violin, is a 2nd year studying Music.',
      },
      {
        name: 'Jake Sherry',
        image: 'path/to/image4.jpg', // Replace with your actual image path
        description: 'Jake plays the violin, is a 1st year studying Music.',
      },
      {
        name: 'Ariel Villaroya',
        image: 'path/to/image3.jpg', // Replace with your actual image path
        description: 'Ariel plays the violin, is a 3rd year studying Music.',
      },
      {
        name: 'Elizabeth Robles Petrick',
        image: 'path/to/image4.jpg', // Replace with your actual image path
        description: 'Elizabeth plays the violin, is a 2nd year studying Music.',
      },
      {
        name: 'Andrew Dela Peña',
        image: 'path/to/image4.jpg', // Replace with your actual image path
        description: 'Andrew plays the violin, is a 1st year studying Music.',
      },
    // Add more team members as needed
  ];
  
  const DanzaData = [

    {
        name: 'Alfredo Morán',
        image: 'path/to/image4.jpg', // Replace with your actual image path
        description: 'Ana is a talented singer who loves mariachi.',
      },
    {
      name: 'Andrea Tarelo',
      image: 'path/to/image4.jpg', // Replace with your actual image path
      description: 'Ana is a talented singer who loves mariachi.',
    },
    {
        name: 'Joseph R',
        image: 'path/to/image4.jpg', // Replace with your actual image path
        description: 'Ana is a talented singer who loves mariachi.',
      },
    {
        name: 'Sarah Ward',
        image: 'path/to/image4.jpg', // Replace with your actual image path
        description: 'Ana is a talented singer who loves mariachi.',
      },
    {
        name: 'Alondra Banda',
        image: 'path/to/image4.jpg', // Replace with your actual image path
        description: 'Ana is a talented singer who loves mariachi.',
      },
    {
        name: 'America Barrera',
        image: 'path/to/image4.jpg', // Replace with your actual image path
        description: 'Ana is a talented singer who loves mariachi.',
      },
    // Add more team members as needed
  ];
  
  function Members() {
    return (
      <div className="members-page">
        <Navbar />
        
        <h1>Meet Our Members</h1>

        <h2>Our Administration</h2>
      <div className="members-grid">
        {StaffData.map((member, index) => (
          <div key={index} className="member-card">
            <div className="card-inner">
              <div className="card-front">
                <img src={`./Images/${member.image}`} alt={member.name} className="member-image" />
                <h3>{member.name}</h3>
              </div>
              <div className="card-back">
                <p>{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Our Student Directors</h2>
      <div className="members-grid">
        {adminData.map((member, index) => (
          <div key={index} className="member-card">
            <div className="card-inner">
              <div className="card-front">
                <img src={`./Images/${member.image}`} alt={member.name} className="member-image" />
                <h3>{member.name}</h3>
              </div>
              <div className="card-back">
                <p>{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Our Muscicians</h2>
      <div className="members-grid">
        {teamData.map((member, index) => (
          <div key={index} className="member-card">
            <div className="card-inner">
              <div className="card-front">
                <img src={`./Images/${member.image}`} alt={member.name} className="member-image" />
                <h3>{member.name}</h3>
              </div>
              <div className="card-back">
                <p>{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2>Our Danza</h2>
      <div className="members-grid">
        {DanzaData.map((member, index) => (
          <div key={index} className="member-card">
            <div className="card-inner">
              <div className="card-front">
                <img src={`./Images/${member.image}`} alt={member.name} className="member-image" />
                <h3>{member.name}</h3>
              </div>
              <div className="card-back">
                <p>{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  
      </div>
    );
  }
  
  export default Members;