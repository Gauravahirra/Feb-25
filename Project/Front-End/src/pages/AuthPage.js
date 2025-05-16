import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AuthPage = ({ type }) => {
  return (
    <>
      <Header />
      <main>
        {type === 'login' ? <Login /> : <Register />}
      </main>
      <Footer />
    </>
  );
};

export default AuthPage;