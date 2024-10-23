import React from 'react';
import './userProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <h1>Profile Information</h1>
      <div className="profile-section">
        <h2>Personal Information</h2>
        <p>
          <strong>Name:</strong> Angel Ramirez
        </p>
        <p>
          <strong>Degree:</strong> Applied Math
        </p>
        <p>
          <strong>School:</strong> UCLA
        </p>
      </div>
      <div className="profile-section">
        <h2>Skills</h2>
        <ul>
          <li>C++</li>
          <li>JavaScript</li>
          <li>Java</li>
          <li>Python</li>
        </ul>
      </div>
      <div className="profile-section">
        <h2>Experience</h2>
        <ul>
          <li>Internship at XYZ Corp</li>
          <li>Projects in digital signal processing</li>
          <li>Leadership roles in tutoring and organizations</li>
        </ul>
      </div>
    </div>
  );
};

export default userProfile;
