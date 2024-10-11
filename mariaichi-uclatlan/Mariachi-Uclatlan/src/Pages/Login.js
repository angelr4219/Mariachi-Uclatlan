// src/Pages/Login.js
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import necessary functions
import Navbar from '../components/Navbar';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import './Login.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

import UclaNavbar from '../components/UclaNavbar';


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
    <div>
      <UclaNavbar />
    <div className="background">
      
      <div className="shape"></div>
      <div className="shape"></div>
      
      <form>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button type="button">Log In</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Login;
