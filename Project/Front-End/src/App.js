import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VendorsPage from './pages/VendorsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage';
import Dashboard from "./pages/Dashboard";


import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vendors" element={<VendorsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/register" element={<AuthPage type="register" />} />
         <Route path="/dashboard" element={<Dashboard />} />
        

      </Routes>
    </Router>
  );
}

export default App;