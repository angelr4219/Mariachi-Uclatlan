// src/Pages/Login.js
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import necessary functions
import Navbar from '../components/Navbar';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import './Login.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const auth = getAuth();
 

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
  try {
      // Firebase logic to sign in a user
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/members-only'); // Redirect to MembersOnly page on successful login
    } catch (error) {
      setError(error.message); // Set error message if login fails
    }
    
  };

  return (
    <div className="login-container">
      <Navbar />
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
          className="input-field"
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
          className="input-field"
        />
        <button type="submit" className="submit-button">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      
      <div className="register-link">
        <p>Don't have an account? <a href="/register">Create a new profile</a></p>
      </div>
    </div>
  );
}

export default Login;
