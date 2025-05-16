import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/2.jpg';
import image2 from '../assets/14.jpg';
import image3 from '../assets/10.jpg';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };

const slides = [
  {
    id: 1,
    bgImage: image1,
    title: 'Plan Your Dream Wedding',
    text: 'From venues to catering, we handle everything so you can enjoy your special day',
    buttonText: 'Get Started',
    buttonLink: '/register'
  },
  {
    id: 2,
    bgImage: image2,
    title: 'Beautiful Wedding Venues',
    text: 'Discover the perfect venue that matches your style and budget',
    buttonText: 'Explore Venues',
    buttonLink: '/vendors'
  },
  {
    id: 3,
    bgImage: image3,
    title: 'Expert Wedding Planners',
    text: 'Let our experienced team handle all the details of your big day',
    buttonText: 'Contact Us',
    buttonLink: '/contact'
  }
];

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map(slide => (
          <div
  key={slide.id}
  className="slide"
  style={{
    backgroundImage: `url(${slide.bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200vh' // or any height you need
  }}
>

   <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <a href={slide.buttonLink} className="btn">{slide.buttonText}</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default HeroSlider;