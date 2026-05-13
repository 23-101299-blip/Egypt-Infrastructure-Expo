import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import './Register.css';

const Register = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const fields = i18n.language === 'en'
    ? ['Full Name', 'Job Title', 'Organization']
    : ['الاسم بالكامل', 'المسمى الوظيفي', 'المؤسسة'];

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
            <span className="register-tag">REGISTRATION 2026</span>
            <h1 className="register-title">
              JOIN THE<br />
              <span className="outline-text">MOVEMENT</span>
            </h1>
            <p className="register-desc">Secure your place among the industry leaders and visionaries shaping the future of Egypt.</p>

            <form className="register-form">
              <div className="form-row">
                <input type="text" placeholder={fields[0]} required />
                <input type="text" placeholder={fields[1]} required />
              </div>
              <div className="form-row">
                <input type="text" placeholder={fields[2]} required />
                <select required>
                  <option value="">{i18n.language === 'en' ? 'Sector of Interest' : 'القطاع المهتم به'}</option>
                  <option>{t('about.sector1')}</option>
                  <option>{t('about.sector2')}</option>
                  <option>{t('about.sector3')}</option>
                  <option>{t('about.sector4')}</option>
                </select>
              </div>
              <div className="form-row">
                <input type="email" placeholder={i18n.language === 'en' ? 'Email Address' : 'البريد الإلكتروني'} required />
                <input type="tel" placeholder={i18n.language === 'en' ? 'Phone Number' : 'رقم الهاتف'} />
              </div>

              <motion.button 
                type="submit" 
                className="register-btn"
                whileHover={{ x: 5 }}
              >
                <span>CONFIRM ATTENDANCE</span>
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
