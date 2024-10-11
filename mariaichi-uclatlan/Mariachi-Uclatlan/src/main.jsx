// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Creating the root node for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component wrapped in React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optionally, you can remove this if you don't need it
// If you want to measure performance in your app, log results or send to an analytics endpoint
// reportWebVitals(console.log);
// reportWebVitals();  // Comment out or remove if you're not using it
