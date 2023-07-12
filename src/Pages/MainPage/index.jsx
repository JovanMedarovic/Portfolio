import './style.scss';
import Navigation from '../../Shared/Components/Navigation';
import Hero from './Components/Hero';
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
