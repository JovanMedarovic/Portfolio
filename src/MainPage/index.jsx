import './style.scss';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import SimpleProject from './Components/SingleProject';
import AllProjects from './Components/AllProjects';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
     <AllProjects />
    </div>
  );
}

export default App;
