// src/components/Members.js
import React from 'react';
import './Members.css';
import Navbar from '../components/Navbar';


const StaffData = [
    {
      name: 'Chuy',
      image: 'mariaichi-uclatlan\src\components\Images\Chuy.jpg', // Replace with your actual image path
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
      description: 'John is the President and oversees all operations.',
    },
    {
      name: 'Enrique',
      image: 'path/to/image2.jpg', // Replace with your actual image path
      description: 'Jane is the Treasurer and manages the finances.',
    },
    {
        name: 'Sylvia',
        image: 'path/to/image2.jpg', // Replace with your actual image path
        description: 'Jane is the Treasurer and manages the finances.',
      },
      {
        name: 'Camila',
        image: 'path/to/image2.jpg', // Replace with your actual image path
        description: 'Jane is the Treasurer and manages the finances.',
      },
    // Add more administrative members as needed
  ];
  
  const teamData = [
    {
      name: 'Angel Ramirez',
      image: 'path/to/image3.jpg', // Replace with your actual image path
      description: 'Carlos is a guitarist with a passion for traditional music.',
    },
    {
      name: 'Dayanara Bravo',
      image: 'path/to/image4.jpg', // Replace with your actual image path
      description: 'Ana is a talented singer who loves mariachi.',
    },
    {
        name: 'Charlie Zhang',
        image: 'path/to/image3.jpg', // Replace with your actual image path
        description: 'Carlos is a guitarist with a passion for traditional music.',
      },
      {
        name: 'Gabriella Cardona',
        image: 'path/to/image4.jpg', // Replace with your actual image path
        description: 'Ana is a talented singer who loves mariachi.',
      },
    {
      name: 'Paulina Perez',
      image: 'path/to/image3.jpg', // Replace with your actual image path
      description: 'Carlos is a guitarist with a passion for traditional music.',
    },
    {
      name: 'Brandon Hernandez',
      image: 'path/to/image4.jpg', // Replace with your actual image path
      description: 'Ana is a talented singer who loves mariachi.',
    },
    {
        name: 'Alaina Stark',
        image: 'path/to/image3.jpg', // Replace with your actual image path
        description: 'Carlos is a guitarist with a passion for traditional music.',
      },
      {
        name: 'April Zavala',
        image: 'path/to/image4.jpg', // Replace with your actual image path
        description: 'Ana is a talented singer who loves mariachi.',
      },
      {
          name: 'Saúl Gutierrez',
          image: 'path/to/image3.jpg', // Replace with your actual image path
          description: 'Carlos is a guitarist with a passion for traditional music.',
        },
        {
          name: 'Jake Sherry',
          image: 'path/to/image4.jpg', // Replace with your actual image path
          description: 'Ana is a talented singer who loves mariachi.',
        },
      {
        name: 'Ariel Villaroya',
        image: 'path/to/image3.jpg', // Replace with your actual image path
        description: 'Carlos is a guitarist with a passion for traditional music.',
      },
      {
        name: 'Elizabeth Robles Petrick',
        image: 'path/to/image4.jpg', // Replace with your actual image path
        description: 'Ana is a talented singer who loves mariachi.',
      },
      {
        name: 'Andrew Dela Peña',
        image: 'path/to/image4.jpg', // Replace with your actual image path
        description: 'Ana is a talented singer who loves mariachi.',
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