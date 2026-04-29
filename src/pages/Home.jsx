import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../data';
import PageTransition from '../components/PageTransition';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.5]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    })
  };

  // Localized project titles mapping with CORRECT IDs from data.js
  const getProjectTitle = (id) => {
    switch(id) {
      case "new-administrative-capital": return t('projects.project1');
      case "new-alamein-city": return t('projects.project2');
      case "ras-el-hekma": return t('projects.project3');
      default: return "";
    }
  };

  return (
    <PageTransition>
      <div className="home-page">
        {/* Cinematic Hero */}
        <section className="hero-spline">
          <motion.div className="hero-vertical-title" style={{ opacity }}>EGYPT INFRA</motion.div>
          
          <div className="hero-left">
            <motion.h1 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.1, 1] }}
            >
              {t('home.heroTitle1')} <span>{t('home.heroTitle2')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              {t('home.heroDesc')}
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/register" className="btn-premium">
                {t('home.cta')} <ArrowUpRight size={20} />
              </Link>
            </motion.div>
          </div>

          <div className="hero-right">
            <motion.img 
              style={{ scale }}
              src="/assets/new_alamein_hero_v2.png" 
              alt="New Alamein Skyline" 
              className="hero-img-main"
            />
            
            <motion.div 
              className="hero-stats-overlay"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="hero-stat">
                <h2>$400B</h2>
                <p>{t('home.opportunity')}</p>
              </div>
              <div className="hero-stat">
                <h2>{t('home.vision')}</h2>
                <p>2030</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="projects-section" id="mega-projects">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '3.5rem', marginBottom: '80px', lineHeight: 1 }}>
                {t('home.megaProjects').split(' ')[0]} <span style={{ color: 'var(--primary)' }}>{t('home.megaProjects').split(' ')[1] || ''}</span>
              </h2>
            </motion.div>

            <div className="projects-grid">
              {projects.slice(0, 3).map((project, idx) => (
                <motion.div 
                  key={project.id}
                  custom={idx}
                  className={`project-wrap ${idx === 0 ? 'large' : idx === 1 ? 'small' : 'full'}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={cardVariants}
                >
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-overlay">
                    <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '10px' }}>0{idx + 1}</div>
                    <h3>{getProjectTitle(project.id)}</h3>
                    <Link to={`/project/${project.id}`} style={{ color: 'white', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontWeight: '800' }}>
                      {t('common.explore')} <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
