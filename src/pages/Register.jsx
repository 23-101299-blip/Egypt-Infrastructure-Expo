import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import './Register.css';

const Register = () => {
  const { t, i18n } = useTranslation();
  const springX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const springY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 20;
    const moveY = (clientY - window.innerHeight / 2) / 20;
    springX.set(moveX);
    springY.set(moveY);
  };

  return (
    <PageTransition>
      <div className="register-page" onMouseMove={handleMouseMove}>
        <motion.div 
          className="reg-card-ultra"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* LEFT: THE FORM */}
          <div className="reg-form-side">
            <h2>{t('common.register').split(' ')[0]} <span style={{ color: 'var(--primary)' }}>{t('common.register').split(' ')[1]}</span></h2>
            <p>{t('home.heroDesc').substring(0, 50)}...</p>
            
            <form className="reg-actual-form">
              <div className="reg-input-group">
                <div className="pill-input-wrap">
                  <input type="text" placeholder={i18n.language === 'en' ? "Full Name" : "الاسم بالكامل"} required />
                </div>
                <div className="pill-input-wrap">
                  <input type="text" placeholder={i18n.language === 'en' ? "Job Title" : "المسمى الوظيفي"} required />
                </div>
              </div>

              <div className="reg-input-group">
                <div className="pill-input-wrap">
                  <input type="text" placeholder={i18n.language === 'en' ? "Organization" : "المؤسسة"} required />
                </div>
                <div className="pill-input-wrap">
                  <select required>
                    <option value="">{i18n.language === 'en' ? "Sector of Interest" : "القطاع المهتم به"}</option>
                    <option>{t('about.sector1')}</option>
                    <option>{t('about.sector4')}</option>
                    <option>{t('about.sector3')}</option>
                  </select>
                </div>
              </div>

              <motion.button 
                type="submit" 
                className="reg-submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('home.cta')} <ChevronRight size={20} style={{ marginInlineStart: '10px' }} />
              </motion.button>
            </form>
          </div>

          {/* RIGHT: THE VISUAL */}
          <div className="reg-visual-side">
            <motion.img 
              src="/assets/new_administrative_capital.png" 
              alt="Infrastructure" 
              className="reg-visual-img"
              style={{ scale: 1.1 }}
            />
            <motion.div 
              className="reg-floating-sphere" 
              style={{ x: springX, y: springY }}
            />
            
            <div className="reg-visual-text">
              <motion.h3>{i18n.language === 'en' ? 'NATION REBORN.' : 'نهضة أمة.'}</motion.h3>
              <motion.p>{t('exhibitors.sidebarTitle')}</motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Register;
