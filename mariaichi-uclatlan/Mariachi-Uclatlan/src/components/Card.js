import React from 'react';
import './Card.css'; // Separate CSS file for card styling

const Card = ({ imageClass, name, role, description }) => {
  return (
    <div className="container">
      <div className="card">
        <div className={`front ${imageClass}`}></div>
        <div className="back">
          <h2>{name}</h2>
          <h2>{role}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
