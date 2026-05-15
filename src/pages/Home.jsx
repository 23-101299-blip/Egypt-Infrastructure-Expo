import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../data';
import PageTransition from '../components/PageTransition';
import './Home.css';

const Home = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageTransition>
      <div className="home-page">

        <section className="asymmetric-hero">
          <div className="hero-content-left">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="hero-tag">{t('home.heroTag')}</span>
              <h1 className="hero-title">
                {t('home.heroTitle1')}<br />
                <span className="outline-text">{t('home.heroTitle2')}</span>
              </h1>
              <div className="hero-divider" />
              <p className="hero-desc">{t('home.heroDesc')}</p>
              <Link to="/register" className="hero-cta-btn">
                <span>{t('home.cta')}</span>
                <ArrowUpRight size={20} />
              </Link>
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
                <img src="/assets/new_alamein_hero_v2.png" alt="Egypt Infrastructure" />
                <div className="hero-image-overlay" />
              </div>
              
              {/* Unique Wavy Mask with Path Animation */}
              <svg className="hero-mask-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path 
                  initial={{ d: "M0,0 L35,0 C55,10 15,40 45,50 C75,60 35,90 55,100 L0,100 Z" }}
                  animate={{ 
                    d: [
                      "M0,0 L35,0 C55,10 15,40 45,50 C75,60 35,90 55,100 L0,100 Z",
                      "M0,0 L40,0 C60,15 20,45 50,55 C80,65 40,85 60,100 L0,100 Z",
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


        {/* ══════════════ GEOMETRIC EDITORIAL — MEGA PROJECTS ══════════════ */}
        <section className="geometric-projects-section">
          {/* Background Decorative Layer */}
          <div className="section-bg-blobs">
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />
            <div className="blob blob-4" />
          </div>

          <div className="section-header-minimal">
            <h2 className="editorial-main-title">
              {t('home.megaProjects').split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word}
                  {i === 0 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div>

          <div className="projects-modern-stack">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                className={`g-project-row ${idx % 2 !== 0 ? 'row-reverse slant-left' : 'slant-right'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1 }}
              >
                {/* Background Layer (for color blocking without hiding blobs) */}
                <div className="g-row-bg" />

                {/* Decorative Elements */}
                <div className={`g-floating-shape ${idx === 0 ? 'shape-1' : idx === 1 ? 'shape-2' : 'shape-3'}`} />
                
                <div className={`g-plus-cluster ${idx % 2 === 0 ? 'cluster-1' : 'cluster-2'}`}>
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="plus-icon" />
                  ))}
                </div>

                <div className="g-image-col">
                  <div className="g-image-mask wavy-mask-container">
                    <img src={project.image} alt={project.title} className="wavy-project-img" />
                    
                    {/* Organic Wavy Mask for Projects */}
                    <svg className="project-mask-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <motion.path 
                        initial={{ d: "M0,0 L100,0 L100,100 L0,100 Z" }}
                        animate={{ 
                          d: idx % 2 === 0 ? [
                            "M25,0 L100,0 L100,100 L45,100 C25,80 55,60 25,50 C-5,40 45,20 25,0 Z",
                            "M30,0 L100,0 L100,100 L50,100 C30,85 60,65 30,55 C0,45 50,25 30,0 Z",
                            "M25,0 L100,0 L100,100 L45,100 C25,80 55,60 25,50 C-5,40 45,20 25,0 Z"
                          ] : [
                            "M0,0 L75,0 C55,15 85,35 65,50 C45,65 75,85 55,100 L0,100 L0,0 Z",
                            "M0,0 L80,0 C60,20 90,40 70,55 C50,70 80,90 60,100 L0,100 L0,0 Z",
                            "M0,0 L75,0 C55,15 85,35 65,50 C45,65 75,85 55,100 L0,100 L0,0 Z"
                          ]
                        }}
                        transition={{
                          duration: 8 + idx,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>

                <div className="g-content-col">
                  <span className="g-category">{t('home.projectLabel')} / 0{idx + 1}</span>
                  <h3 className="g-title">{t(`projects.${project.id === 'new-administrative-capital' ? 'nac' : project.id === 'new-alamein-city' ? 'alamein' : 'ras'}.title`)}</h3>
                  <p className="g-desc">{t(`projects.${project.id === 'new-administrative-capital' ? 'nac' : project.id === 'new-alamein-city' ? 'alamein' : 'ras'}.desc`)}</p>
                  <Link to={`/projects/${project.id}`} className="g-cta-link">
                    {t('common.viewDetails')}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Home;
