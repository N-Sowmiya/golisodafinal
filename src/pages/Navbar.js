import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close navbar when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="Images/MAASI FINAL LOGO-02.jpg" alt="Goli Soda" />
      </div>

      {/* Hamburger button in the right corner */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#products" onClick={handleLinkClick}>Products</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
