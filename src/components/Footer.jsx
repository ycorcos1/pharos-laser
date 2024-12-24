import React from 'react';
import '../styles/Footer.css'; // Footer-specific styles
import logo from '../imgs/pharos_logo.png'; // Path to your logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Pharos Laser Repair Logo" />
      </div>
      <p>&copy; {new Date().getFullYear()} Pharos Laser Repair. All rights reserved.</p>
      <p>
        Designed by <a href="https://example.com" target="_blank" rel="noopener noreferrer">Yahav Corcos</a>
      </p>
    </footer>
  );
};

export default Footer;
