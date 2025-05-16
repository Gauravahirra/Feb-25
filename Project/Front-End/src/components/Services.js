import React from 'react';
import { FaMapMarkerAlt, FaUtensils, FaCamera, FaVest, FaMusic, FaSpa } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Venue Selection",
      description: "Find the perfect venue that matches your style and budget from our extensive collection."
    },
    {
      icon: <FaUtensils />,
      title: "Catering",
      description: "Delicious food options for all your wedding events, customized to your preferences."
    },
    {
      icon: <FaCamera />,
      title: "Photography",
      description: "Capture your precious moments with our expert photographers and videographers."
    },
    {
      icon: <FaVest />,
      title: "Attire",
      description: "Traditional and contemporary outfits for bride and groom from top designers."
    },
    {
      icon: <FaMusic />,
      title: "Entertainment",
      description: "DJs, live bands, and performers to keep your guests entertained throughout."
    },
    {
      icon: <FaSpa />,
      title: "Makeup & Hair",
      description: "Professional makeup artists and hairstylists to make you look your best."
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We offer comprehensive wedding planning services to make your special day unforgettable</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
