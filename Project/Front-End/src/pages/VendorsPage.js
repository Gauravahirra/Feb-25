import React from 'react';
import Header from '../components/Header';
import Vendors from '../components/Vendors';
import Footer from '../components/Footer';

const VendorsPage = () => {
  return (
    <>
      <Header />
      <main>
        <Vendors />
      </main>
      <Footer />
    </>
  );
};

export default VendorsPage;