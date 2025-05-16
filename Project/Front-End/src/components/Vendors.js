import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Vendors = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Vendors' },
    { id: 'venues', name: 'Venues' },
    { id: 'catering', name: 'Catering' },
    { id: 'photography', name: 'Photography' },
    { id: 'attire', name: 'Attire' },
    { id: 'makeup', name: 'Makeup' },
    { id: 'decor', name: 'Decor' }
  ];

  const vendors = [
    {
      id: 1,
      category: 'venues',
      image: '/assets/16.jpg',
      name: 'Grand Palace',
      description: 'Luxury wedding venue with royal ambiance and excellent facilities',
      rating: 4.5,
      price: '₹2,50,000'
    },
    {
      id: 2,
      category: 'catering',
      image: '/assets/10.jpg',
      name: 'Royal Caterers',
      description: 'Premium catering service with customizable menus for all occasions',
      rating: 5,
      price: '₹800/plate'
    },


    {
    id: 3,
    category: 'photography',
    image: '/assets/19.jpg',
    name: 'Memories Studio',
    description: 'Capturing timeless wedding memories with creativity and precision',
    rating: 4.8,
    price: '₹1,00,000'
  },

  {
    id: 4,
    category: 'attire',
    image: '/assets/28.jpg',
    name: 'Elegance Bridal Wear',
    description: 'Exclusive designer wedding attire for brides and grooms',
    rating: 4.6,
    price: '₹75,000'
  },

  {
    id: 5,
    category: 'makeup',
    image: '/assets/21.jpg',
    name: 'Glow Up Studio',
    description: 'Professional makeup artists to make you shine on your big day',
    rating: 4.7,
    price: '₹20,000'
  },

  {
    id: 6,
    category: 'decor',
    image: '/assets/29.jpg',
    name: 'Blissful Decor',
    description: 'Elegant and theme-based wedding decorations to suit every taste',
    rating: 4.9,
    price: '₹1,50,000'
  }
    // Add more vendors as needed
  ];

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    
    return stars;
  };

  return (
    <section className="vendors-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Trusted Vendors</h2>
          <p>Find the best wedding vendors for your special day</p>
        </div>
        <div className="vendor-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="vendors-grid">
          {vendors
            .filter(vendor => activeCategory === 'all' || vendor.category === activeCategory)
            .map(vendor => (
              <div key={vendor.id} className="vendor-card" data-category={vendor.category}>
                <div className="vendor-img">
                  <img src={vendor.image} alt={vendor.name} />
                </div>
                <div className="vendor-info">
                  <h3>{vendor.name}</h3>
                  <p>{vendor.description}</p>
                  <div className="vendor-meta">
                    <div className="vendor-rating">
                      {renderRating(vendor.rating)}
                      <span>{vendor.rating}</span>
                    </div>
                    <div className="vendor-price">
                      Starting at {vendor.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Vendors;