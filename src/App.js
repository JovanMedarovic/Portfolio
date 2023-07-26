import './App.scss';
import MainPage from './Pages/MainPage';
import AboutPage from './Pages/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { urls } from './Shared/constants';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={urls.root} element={<MainPage />}/>
      <Route path={urls.about} element={<AboutPage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
