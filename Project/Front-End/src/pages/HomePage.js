import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <Services />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default Home;