import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Team from '../components/Team';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Team />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;