import React from 'react'
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ContactUss from './Pages/ContactUss/ContactUss'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Services from './Pages/Services/Services';
import TestDetails from './Pages/TestDetails/TestDetails';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUss/>} /> 
        <Route path='/test-detail/:id' element={<TestDetails />} />
      </Routes>
      <Footer /> 
    </Router>
  )
}

export default App