import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    { title: 'Consultation', description: 'Have a question about the functioning and use of your Pharos laser? We are pleased to now offer a free 15-minute consultation! Just give us a call at (908) 300-3978.' },
    { title: 'Pharos laser repair', description: 'We are qualified technicians specializing in the repair of Pharos 308nm lasers, and are the leading provider of their repair services in the United States.' },
    { title: 'On-site diagnostics', description: 'Not sure if there is an issue with your Pharos 308nm laser? Let us come to your clinic and provide a diagnostic report. We will be happy to guide you through the next steps and available options.' },
    { title: 'Routine laser maintenance', description: 'Downtime on your laser means lost business. Let us help you get ahead of future downtime by providing routine laser maintenance.' },
    { title: 'Loaner laser', description: 'Do you need a Pharos 308nm laser for an interim period, or just want to try it out before committing? We offer rentals of the laser on both a short-term and long-term basis, which will be credited back to you for use of our other services.' },
    { title: 'Trade-in', description: 'Do you no longer need your Pharos 308nm laser? We\'re happy to purchase it back from you.' }
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
