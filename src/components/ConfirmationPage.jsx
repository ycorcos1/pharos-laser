import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/ConfirmationPage.css'

const ConfirmationPage = () => {
  return (
    <div className="confirmation-page">
      <h1>Thank You for Contacting Us!</h1>
      <p>Your message has been successfully submitted. We will get back to you shortly.</p>
      <Link to="/" className="home-link">Return to Home</Link>
    </div>
  );
};

export default ConfirmationPage;
