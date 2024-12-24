import React from 'react';
import '../styles/HoursOfOperation.css'; // Create and import a CSS file for styling

const HoursOfOperation = () => {
  return (
    <section className="hours-of-operation">
      <h2>Hours of Operation</h2>
      <ul>
        <li><strong>Monday - Thursday:</strong> 7:00 AM - 7:00 PM</li>
        <li><strong>Friday:</strong> 7:00 AM - 3:30 PM</li>
      </ul>
    </section>
  );
};

export default HoursOfOperation;
