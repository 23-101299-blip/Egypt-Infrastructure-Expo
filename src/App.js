import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Preloader from './components/Preloader.jsx';
import PopupAd from './components/PopupAd.jsx';
import AppRoutes from './path.jsx';
import './index.css';

function App() {
  const { i18n } = useTranslation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle RTL/LTR Direction
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    
    // Update body font for Arabic
    if (i18n.language === 'ar') {
      document.body.classList.add('arabic-font');
    } else {
      document.body.classList.remove('arabic-font');
    }
  }, [i18n.language]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <Preloader />
      <PopupAd />
      
      {/* Dynamic Background Glow */}
      <div 
        className="follow-glow" 
        style={{ 
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)` 
        }} 
      />

      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
