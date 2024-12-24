import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ConfirmationPage from "./components/ConfirmationPage";
import HoursOfOperation from "./components/HoursOfOperation"; // Import HoursOfOperation
import "./styles/Responsiveness.css";
import "./App.css"; // Global styles

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Routes for different pages */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <HeroSection />
                {/* About Us Section */}
                <AboutUs id="about-us" />
                {/* Services Section */}
                <Services id="services" />
                {/* Contact Form */}
                <ContactForm id="contact-form" />
                {/* Hours of Operation Section */}
                <HoursOfOperation id="hours-of-operation" />
              </>
            }
          />

          {/* Confirmation Page after form submission */}
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
