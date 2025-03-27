import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Sitemap from './pages/Sitemap';
import Error404 from './pages/Error404';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Nosotros from "./pages/nosotros";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/ayuda" element={<Help />} />
            <Route path="/mapa-sitio" element={<Sitemap />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/privacidad-politicas" element={<PrivacyPolicy/>} />
            
           
            

          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;