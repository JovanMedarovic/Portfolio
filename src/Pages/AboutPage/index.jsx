import './style.scss';
import Navigation from '../../Shared/Components/Navigation';
import Footer from '../../Shared/Components/Footer';
import Hero from './Components/Hero';
import TechConcepts from './Components/TechConcepts';
import Contact from '../../Shared/Components/Contact';




function AboutPage() {
  return (
    <div className='App' >
      <Navigation />
      <Hero/>
      <TechConcepts/>
      <Contact/>
      <Footer/>
  
    </div>
  );
}

export default AboutPage;