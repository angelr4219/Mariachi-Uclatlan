import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Adjust the path according to your project structure
import './Register.css'; // Import the CSS file
import { auth } from '../FireBaseConfig'; // Adjust the path according to your project structure
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import necessary functions
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      // Firebase logic to create a new user
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage('Registration successful! You can now log in.');
      setEmail('');
      setPassword('');
      navigate('/members-only'); // Redirect to MembersOnly page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register-container">
      <Navbar />
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p>{error}</p>}
          {successMessage && <p>{successMessage}</p>}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;