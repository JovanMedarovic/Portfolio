import './style.scss';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import SimpleProject from './Components/SingleProject';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <SimpleProject />
    </div>
  );
}

export default App;
