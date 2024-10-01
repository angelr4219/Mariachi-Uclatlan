import React from 'react';
import './Navbar.css'; // Create a separate CSS file for styling

const Navbar = () => {
  return (
    <nav>
      <a href="index.html">Home</a>
      <div className="drop-down">
        <a href="members.html">About</a>
        <a href="members.html">Our Class</a>
        <a href="#">Our Instructor</a>
      </div>
      <img className="logo" src="/PicUclatlan/UclatlanB.png" alt="Logo" />
      <a href="about.html">Members</a>
      <div className="drop-down">
        <a href="Contact.html">Contact</a>
        <a href="#">Option 1</a>
        <a href="#">Option 2</a>
      </div>
      <span className="button-background"></span>
    </nav>
  );
};

export default Navbar;
