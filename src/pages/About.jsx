import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layout, Smartphone, Code, PenTool, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import './About.css';

const About = () => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <PageTransition>
      <div className="about-page">
        {/* ORANGE GHOST HERO */}
        <section className="about-hero" style={{ textAlign: 'center' }}>
          <motion.h1 
            style={{ y: titleY }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            {t('about.heroTitle').split(' ')[0]}<br />{t('about.heroTitle').split(' ')[1]}
          </motion.h1>
        </section>

        {/* WHO ARE WE SECTION */}
        <section className="who-we-are">
          <motion.div 
            className="who-img-wrap"
            initial={{ opacity: 0, clipPath: 'inset(0% 100% 0% 0%)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img 
              style={{ scale: imgScale }}
              src="/assets/new_administrative_capital.png" 
              alt="Who We Are" 
              className="who-img-main" 
            />
            <div className="who-img-shadow" />
          </motion.div>

          <motion.div 
            className="who-content"
            initial={{ opacity: 0, x: i18n.language === 'ar' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.h4 
              initial={{ letterSpacing: '10px', opacity: 0 }}
              whileInView={{ letterSpacing: '3px', opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {t('about.whoSub')}
            </motion.h4>
            <h2>{t('about.whoTitle').split(' ')[0]} {t('about.whoTitle').split(' ')[1]} <span>{t('about.whoTitle').split(' ')[2]}</span></h2>
            <p>{t('about.whoDesc')}</p>
            
            <motion.div className="who-stats" variants={containerVariants} initial="hidden" whileInView="visible">
              <motion.div className="who-stat-item" variants={itemVariants}>
                <div className="float-anim"><Award size={40} color="var(--primary)" style={{ marginBottom: '15px' }} /></div>
                <h5>{t('about.stat1Title')}</h5>
                <p>{t('about.stat1Desc')}</p>
              </motion.div>
              <motion.div className="who-stat-item" variants={itemVariants}>
                <div className="float-anim" style={{ animationDelay: '1s' }}><Layout size={40} color="var(--primary)" style={{ marginBottom: '15px' }} /></div>
                <h5>{t('about.stat2Title')}</h5>
                <p>{t('about.stat2Desc')}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* WHAT WE DO SECTION */}
        <section className="what-we-do">
          <div className="container">
            <div className="wwd-container">
              <div className="wwd-header">
                <h4>{t('about.serviceSub')}</h4>
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  {t('about.serviceTitle').split(' ')[0]} {t('about.serviceTitle').split(' ')[1]} <span>{t('about.serviceTitle').split(' ')[2]}</span>
                </motion.h2>
                <p>{t('about.serviceDesc')}</p>
              </div>

              <motion.div className="wwd-grid" variants={containerVariants} initial="hidden" whileInView="visible">
                {[
                  { title: t('about.service1Title'), desc: t('about.service1Desc'), icon: <Layout size={40} /> },
                  { title: t('about.service2Title'), desc: t('about.service2Desc'), icon: <Smartphone size={40} /> },
                  { title: t('about.service3Title'), desc: t('about.service3Desc'), icon: <Code size={40} /> },
                  { title: t('about.service4Title'), desc: t('about.service4Desc'), icon: <PenTool size={40} /> }
                ].map((item, idx) => (
                  <motion.div key={idx} className="wwd-card" variants={itemVariants} whileHover={{ y: -10, backgroundColor: 'rgba(255, 77, 0, 0.08)' }}>
                    <div className="wwd-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* MOSAIC SECTORS */}
        <section className="sector-section">
          <div className="container">
            <h2 style={{ marginBottom: '60px', fontSize: '3rem' }}>{t('about.sectorTitle').split(' ')[0]} <span style={{ color: 'var(--primary)' }}>{t('about.sectorTitle').split(' ')[1]}</span></h2>
            <div className="sector-mosaic">
              {[
                { label: "01", title: t('about.sector1'), img: "/assets/new_administrative_capital.png" },
                { label: "02", title: t('about.sector2'), img: "/assets/ras_el_hekma.png" },
                { label: "03", title: t('about.sector3'), img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop" },
                { label: "04", title: t('about.sector4'), img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="mosaic-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <img src={item.img} className="mosaic-img" alt={item.title} />
                  <div className="mosaic-content">
                    <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{item.label}</div>
                    <h3>{item.title}</h3>
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

export default About;
