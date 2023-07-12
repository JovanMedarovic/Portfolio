import React from 'react';
import './style.scss';
import Navigation from '../../Shared/Components/Navigation';
import Hero from './Components/Hero';
import AllProjects from './Components/AllProjects';
import Footer from './Components/Footer';

function MainPage() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
     <AllProjects />
     <Footer/>
    </div>
  );
}

export default MainPage;
