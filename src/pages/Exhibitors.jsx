import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { exhibitors } from '../data';
import PageTransition from '../components/PageTransition';
import './Exhibitors.css';

const Exhibitors = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="exhibitors-page">

        {/* ══════════════ SIGNATURE HERO — CONSISTENT WAVY MASK ══════════════ */}
        <section className="asymmetric-hero">
          <div className="hero-content-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="hero-tag">EIE PARTNERS 2026</span>
              <h1 className="hero-title">ARCHITECTS<br /><span className="outline-text">OF MODERN</span><br />EGYPT</h1>
              <div className="hero-divider" />
              
              <div className="ex-stats">
                <div className="stat-box">
                  <h3>{exhibitors.length}</h3>
                  <p>Featured Partners</p>
                </div>
                <div className="stat-box">
                  <h3>12+</h3>
                  <p>Mega Sectors</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="hero-visual-right">
            <motion.div 
              className="hero-mask-wrap"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hero-image-masked">
                <img src="/assets/ras_el_hekma.png" alt="Exhibitors Backdrop" />
                <div className="hero-image-overlay" />
              </div>
              
              {/* Home-style Wavy Mask with Dynamic Path Animation */}
              <svg className="hero-mask-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path 
                  initial={{ d: "M0,0 L35,0 C55,10 15,40 45,50 C75,60 35,90 55,100 L0,100 Z" }}
                  animate={{ 
                    d: [
                      "M0,0 L35,0 C55,10 15,40 45,50 C75,60 35,90 55,100 L0,100 Z",
                      "M0,0 L42,0 C62,18 22,48 52,58 C82,68 42,88 62,100 L0,100 Z",
                      "M0,0 L35,0 C55,10 15,40 45,50 C75,60 35,90 55,100 L0,100 Z"
                    ]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  fill="white" 
                />
              </svg>
            </motion.div>
          </div>
        </section>


        {/* ══════════════ ZIGZAG SHOWCASE ══════════════ */}
        <section className="ex-showcase-section">
          <div className="ex-showcase-grid">
            {exhibitors.map((ex, idx) => (
              <motion.div 
                key={ex.id}
                className={`ex-showcase-item ${idx % 2 !== 0 ? 'reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="item-visual">
                  <img src={ex.logo} alt={ex.name} />
                </div>
                <div className="item-details">
                  <span className="item-category">FEATURED EXHIBITOR</span>
                  <h2 className="item-name">{ex.name}</h2>
                  <p className="item-desc">{ex.description}</p>
                  
                  <div className="item-footer">
                    <span className="item-loc">{ex.location}</span>
                    <a href="#" className="item-link">LEARN MORE +</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Exhibitors;
