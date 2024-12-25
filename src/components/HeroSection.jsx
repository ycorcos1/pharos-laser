import React, { useState, useEffect } from 'react';
import '../styles/HeroSection.css';
import pharos1 from '../imgs/pharos1.jpg';
import pharos2 from '../imgs/pharos2.jpg';
import pharos3 from '../imgs/pharos3.jpg';
import pharos4 from '../imgs/pharos4.jpg';
import pharos5 from '../imgs/pharos5.jpg';

const images = [
    pharos1,
    pharos2,
    pharos3,
    pharos4,
    pharos5
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Automatically change image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000); // Change image every 5 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-us');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Laser Repair Experts</h1>
        <p>We provide the best solutions for your laser equipment.</p>
        <button className="cta-button" onClick={scrollToAbout}>Learn More</button>
      </div>
      <div className="hero-background" style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
    </section>
  );
};

export default HeroSection;
