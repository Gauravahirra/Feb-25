import React from 'react';
import image4 from '../assets/27.jpg';
const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About शुभ विवाह/Shubh Vivah</h2>
           <p>Your trusted partner in creating unforgettable wedding experiences</p>
          
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src={image4} alt="About Shubh Vivah" />
          </div>
          <div className="about-text">
            <h2>We Make Your Wedding Dreams Come True</h2>
            <p>Founded in 2010, शुभ विवाह/Shubh Vivah has grown to become one of India's most trusted wedding planning platforms. Our mission is to make wedding planning stress-free, enjoyable, and memorable for couples and their families.</p>
            <p>With a team of experienced wedding planners and a network of over 5,000 verified vendors across the country, we've successfully planned more than 2,500 weddings of various scales and budgets.</p>
            <p>What sets us apart is our personalized approach. We understand that every couple is unique, and we tailor our services to match your vision, preferences, and budget. From intimate gatherings to grand celebrations, we've got you covered.</p>
            <div className="stats">
              <div className="stat-item">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>2,500+</h3>
                <p>Weddings Planned</p>
              </div>
              <div className="stat-item">
                <h3>5,000+</h3>
                <p>Verified Vendors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;