import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us-container">
      <div className="about-header">
        <div className="about-header-left">
          <h1>About Us</h1>
        </div>
        <div className="about-header-right">
          <img src="/about.jpg" alt="About Us" className="about-image" />
        </div>
      </div>

      <div className="about-cards">
        <div className="card">
          <h3>Vision</h3>
          <p>
          Empowering health through precision diagnostics, building trust, and promoting well-being for every life we touch.
          </p>
        </div>
        <div className="card">
          <h3>Mission</h3>
          <p>
          To become the preferred leader in diagnostics by delivering accessible, affordable, and timely healthcare solutions, leveraging advanced technology and data-driven insights to ensure quality and value for all stakeholders.
          </p>
        </div>
      </div>

      <div className='our-journey'>
        <h1>Our Journey</h1>
        <p className='coming-soon'>Coming Soon!</p>
      </div>
    </section>
  );
};

export default AboutUs;
