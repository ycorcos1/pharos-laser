import React from 'react';
import '../styles/AboutUs.css'; // Styling for About Us section
import pharosA from '../imgs/pharosA.jpg'; // Importing the actual image

const AboutUs = () => {
  return (
    <section className="about-us-section" id="about-us">
      <div className="about-us-container">
        <h2>About Us</h2>
        <p>
          At Pharos Laser Repair, we specialize in providing top-quality repair and maintenance services for laser equipment. 
          With years of experience and a team of certified technicians, we ensure your machines operate at their peak performance. 
          Customer satisfaction and equipment safety are our highest priorities.
        </p>
        <p>
          From diagnostics to full-scale repairs, we deliver reliable and efficient solutions tailored to your needs. 
          Trust us to keep your business running smoothly.
        </p>
      </div>

      {/* Pharos 308nm Laser Description Section */}
      <div className="laser-description">
        <div className="laser-image">
          <img src={pharosA} alt="Pharos 308nm Laser" />
        </div>
        
        <div className="laser-info">
          <h2>The Pharos 308nm Laser</h2>
          <p>
            The Pharos 308nm laser, originally produced by Ra Medical Systems, is an extremely valuable treatment device
            used by dermatologists to treat psoriasis and other skin conditions. If your Pharos laser is in need of maintenance,
            or is even no longer working, we can help you get it back to its original condition in just days!
          </p>
          <p>Call us at <strong>(908) 300-3978</strong> and we will be thrilled to get your laser back to work for you!</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
