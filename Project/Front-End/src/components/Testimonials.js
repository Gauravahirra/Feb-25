import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false
  };

  const testimonials = [
    {
      id: 1,
      text: "शुभ विवाह/Shubh Vivah made our wedding planning so easy! Everything was perfect and exceeded our expectations.",
      author: "Priya & Rahul Sharma",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      text: "We couldn't have asked for a better wedding planning experience. From venue selection to catering, every detail was taken care of beautifully.",
      author: "Arjun & Neha Patel",
      image: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      id: 3,
      text: "As a busy professional couple, we didn't have time to plan our wedding. शुभ विवाह/Shubh Vivah understood our vision and executed it perfectly.",
      author: "Ananya & Vikram Gupta",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>What Couples Say</h2>
        <p>Hear from couples who trusted us with their special day</p>
        </div>
        <div className="testimonial-slider">
          <Slider {...settings}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial">
                <p>{testimonial.text}</p>
                <div className="author">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <span>{testimonial.author}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;