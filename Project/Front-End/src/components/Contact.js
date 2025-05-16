import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch with our wedding planning experts</p>
        </div>
        <div className="contact-container">

          <div className="contact-info">
            <h3>Let's Plan Your Dream Wedding</h3>
            <p>Have questions or ready to start planning your special day? Reach out to our team of wedding experts who are ready to assist you with all your wedding planning needs.</p>

            {/* Removed: Address info */}
            {/* 
            <div className="info-item">
              <FaMapMarkerAlt />
              <div>
                <h4>Our Office</h4>
                <p>123 Wedding Plaza, Bandra West, Mumbai, Maharashtra 400050</p>
              </div>
            </div>
            */}

            {/* Removed: Phone number +91 9876543210 */}
            <div className="info-item">
              <FaPhone />
              <div>
                <h4>Call Us</h4>
                <p>+91 9876543211</p> {/* Only this number remains */}
              </div>
            </div>

            {/* Removed: Email info@shubhvivah.com */}
            <div className="info-item">
              <FaEnvelope />
              <div>
                <h4>Email Us</h4>
                <p>support@shubhvivah.com</p> {/* Only support email remains */}
              </div>
            </div>

            <div className="info-item">
              <FaClock />
              <div>
                <h4>Working Hours</h4>
                <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                <p>Sunday: 11:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" className="form-control" placeholder="Your Phone" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
