/* This file contains the code for the routes controller */

// Required imports
import React from 'react'; // Import React namespace and its related functions
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import routing-related functions
import { useState } from "react"; // Import functions to control states

// Import reset css
import "./styles/Reset.css";
import './styles/GlobalStyles.css'; // Import style sheet
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import all pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Error404 from './pages/404';

// Import all components
import Header from './components/Header';
import Footer from './components/Footer';
import { navbarName } from '@constants/Constant';

/**
 * @name App
 * @summary Controls the majority of the web application
 * @returns The web app's elements, including the routes
 */
export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className = "page-contents">
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
            <Route path="*" element={<Error404/>} />
          </Routes>

        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
