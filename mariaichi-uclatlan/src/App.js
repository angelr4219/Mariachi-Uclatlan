import React from 'react';
import './App.css'; // Global CSS
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card-grid">
        <Card imageClass="Carlos" name="Carlos Oliva" role="Student Director" description="Some description about Carlos." />
        <Card imageClass="bobby" name="Bobby" role="Member" description="Some description about Bobby." />
        <Card imageClass="Sylvia" name="Sylvia" role="Member" description="Some description about Sylvia." />
        <Card imageClass="Aviv" name="Aviv" role="Member" description="Some description about Aviv." />
      </div>
    </div>
  );
}

export default App;
