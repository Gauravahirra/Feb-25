import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'traditional', name: 'Traditional' },
    { id: 'destination', name: 'Destination' },
    { id: 'haldi', name: 'Haldi' },
    { id: 'intimate', name: 'Intimate Weddings' }
  ];

  const galleryItems = [
    { id: 1, category: 'traditional', image: 'assets/26.jpg', alt: 'Traditional Wedding' },
     { id: 2, category: 'traditional', image: 'assets/25.jpeg', alt: 'Traditional Wedding' },
      { id: 3, category: 'traditional', image: 'assets/24.jpg', alt: 'Traditional Wedding' },
       { id: 4, category: 'traditional', image: 'assets/30.jpg', alt: 'Traditional Wedding' },
        { id: 5, category: 'traditional', image: 'assets/31.jpg', alt: 'Traditional Wedding' },

         { id: 1, category: 'destination', image: 'assets/18.jpg', alt: 'Destination Wedding' },
          { id: 2, category: 'destination', image: 'assets/23.jpg', alt: 'Destination Wedding' },
           { id: 3, category: 'destination', image: 'assets/32.jpg', alt: 'Destination Wedding' },

            { id: 1, category: 'haldi', image: 'assets/11.jpeg', alt: 'Haldi' },
             { id: 2, category: 'haldi', image: 'assets/22.jpeg', alt: 'Haldi' },
              { id: 3, category: 'haldi', image: 'assets/20.jpg', alt: 'Haldi' },
               { id: 4, category: 'haldi', image: 'assets/12.jpg', alt: 'Haldi' },

                { id: 1, category: 'intimate', image: 'assets/7.jpg', alt: 'Intimate Weddings' },
                { id: 2, category: 'intimate', image: 'assets/8.jpg', alt: 'Intimate Weddings' },


            
   

    // Add more gallery items as needed
  ];

  return (
    <>
      <Header />
      <main>
        <section className="gallery-page">
          <div className="container">
            <div className="section-title">
              <h2>Wedding Gallery</h2>
             <p>Browse through some of our beautiful wedding moments</p>
            </div>
            <div className="gallery-filter">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.name}
                </button>
              ))}
            </div>
            <div className="masonry-grid">
              {galleryItems
                .filter(item => activeFilter === 'all' || item.category === activeFilter)
                .map(item => (
                  <div key={item.id} className="masonry-item" data-category={item.category}>
                    <img src={item.image} alt={item.alt} />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;