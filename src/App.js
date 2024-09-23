import React from 'react';
import Header from './components/Header';
import CourseSection from './components/CourseSection';
import CampusSection from './components/CampusSection';
import FacilitiesSection from './components/FacilitiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import './styles/style.css'; // Adjust the path based on where you placed the CSS file

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CourseSection />
      <Gallery />
      <CampusSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
