import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Vehicle from './pages/Vehicle';
import Testimonial from './pages/Testimonial';
import Team from './pages/Team';
import Contact from './pages/Contact';
import './App.scss';


function App() {
  return (
    <>
    <BrowserRouter basename={'/car-rental/'} >
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
  