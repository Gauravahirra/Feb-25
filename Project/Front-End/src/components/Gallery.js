import React from 'react';
import { FaSearchPlus } from 'react-icons/fa';

const Gallery = () => {
  const galleryItems = [
    { id: 1, image: "/assets/5.jpeg", alt: "Wedding Ceremony" },
    { id: 2, image: "/assets/13.jpg", alt: "Bride and Groom" },
    { id: 3, image: "/assets/3.jpg", alt: "Wedding Decoration" },
    { id: 4, image: "/assets/14.jpg", alt: "Wedding Venue" },
    { id: 5, image: "/assets/15.jpg", alt: "Wedding Rings" },
    { id: 6, image: "/assets/6.jpg", alt: "Wedding Cake" }
  ];

  return (
    <section className="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Our Gallery</h2>
        <p>Browse through some of our beautiful wedding moments</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.alt} />
              <div className="overlay">
                <FaSearchPlus />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;