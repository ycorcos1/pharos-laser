import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logo from '../imgs/pharos_logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events to toggle navbar visibility
  const handleScroll = () => {
    if (window.scrollY > 50) {  // Adjust scroll distance for visibility toggle
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add event listener on mount
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        {!isScrolled && (
          <div className="top-bar">
            <p>216 W 99th St., New York, NY 10025 | +1 (908) 300-3978 | help@pharoslaserrepair.com</p>
          </div>
        )}
        {!isScrolled && (
          <div className="navbar-logo">
            <img src={logo} alt="Pharos Laser Repair Logo" />
          </div>
        )}

        {/* Navigation Links Section */}
        <div className="navbar-links-container">
          <ul className="navbar-links">
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
