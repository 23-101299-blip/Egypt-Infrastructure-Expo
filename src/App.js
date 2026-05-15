import React, { useState, useEffect, useRef } from 'react';
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
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const animFrame = useRef(null);

  // RTL / LTR
  useEffect(() => {
    const isAr = i18n.language.startsWith('ar');
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    if (isAr) {
      document.body.classList.add('arabic-font');
    } else {
      document.body.classList.remove('arabic-font');
    }
  }, [i18n.language]);

  // Custom cursor
  useEffect(() => {
    const handleMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const handleEnter = () => {
      dotRef.current?.classList.add('hovering');
      ringRef.current?.classList.add('hovering');
    };
    const handleLeave = () => {
      dotRef.current?.classList.remove('hovering');
      ringRef.current?.classList.remove('hovering');
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
      }
      animFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove);
    animFrame.current = requestAnimationFrame(animate);

    // Add hover class for interactive elements
    const interactives = document.querySelectorAll('a, button, [class*="card"], [class*="item"], [class*="row"]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(animFrame.current);
    };
  }, []);

  return (
    <Router>
      {/* Custom Cursor */}
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />

      {/* Noise film grain */}
      <div className="noise-overlay" />

      <Preloader />
      <PopupAd />
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
