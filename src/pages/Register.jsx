import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import './Register.css';

const Register = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageTransition>
      <div className="register-page">

        {/* ── LEFT — CONTENT ── */}
        <div className="register-left">
          <motion.div 
            className="register-form-wrap"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="register-tag">{t('register.tag')}</span>
            <h1 className="register-title">
              {t('register.titlePart1')}<br />
              <span className="outline-text">{t('register.titlePart2')}</span>
            </h1>
            <p className="register-desc">{t('register.desc')}</p>

            <form className="register-form">
              <div className="form-row">
                <input type="text" placeholder={t('register.fullName')} required />
                <input type="text" placeholder={t('register.jobTitle')} required />
              </div>
              <div className="form-row">
                <input type="text" placeholder={t('register.organization')} required />
                <select required>
                  <option value="">{t('register.sectorPlaceholder')}</option>
                  <option>{t('about.sector1')}</option>
                  <option>{t('about.sector2')}</option>
                  <option>{t('about.sector3')}</option>
                  <option>{t('about.sector4')}</option>
                </select>
              </div>
              <div className="form-row">
                <input type="email" placeholder={t('register.email')} required />
                <input type="tel" placeholder={t('register.phone')} />
              </div>

              <motion.button 
                type="submit" 
                className="register-btn"
                whileHover={{ x: 5 }}
              >
                <span>{t('register.submit')}</span>
                <ArrowRight size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* ── RIGHT — VISUAL MASK ── */}
        <div className="register-right">
          <div className="register-mask-container">
            <img src="/assets/new_administrative_capital.png" alt="Infrastructure" />
              {/* Unique Smooth Curve Mask for Register */}
              <svg className="register-mask-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 L40,0 C60,20 40,50 60,80 C70,95 30,100 0,100 Z" fill="white" />
              </svg>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default Register;
