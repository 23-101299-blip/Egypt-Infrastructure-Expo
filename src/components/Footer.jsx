import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2, Mail, Phone, MapPin, Send, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const navLinks = [
    { name: t('common.home'), path: '/' },
    { name: t('common.about'), path: '/about' },
    { name: t('common.exhibitors'), path: '/exhibitors' },
    { name: t('common.agenda'), path: '/agenda' },
    { name: t('common.register'), path: '/register' },
  ];

  return (
    <>
      {/* ══════════ RESTORED: CTA MARQUEE BANNER ══════════ */}
      <section className="footer-cta-banner">
        <div className="footer-marquee-wrap">
          <div className="footer-sliding-block">
            <div className="footer-cta-text">
              <span className="tag-line">Join The Expo</span>
              <h2 className="footer-cta-title">
                EGYPT<br /><span>INFRA 2026</span>
              </h2>
            </div>
          </div>
        </div>
        
        <div className="footer-button-right">
          <Link to="/register" className="footer-cta-btn">
            {t('home.cta')} <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>

      {/* ══════════ SYMMETRICAL DOUBLE-WAVE LAYOUT ══════════ */}
      <footer className={`split-signature-footer centered ${isRTL ? 'rtl' : ''}`}>
        
        {/* Symmetrical Background Waves */}
        <div className="footer-split-bg">
          {/* Left wave cutout */}
          <div className="bg-dark-part left-part" />
          <svg className="footer-wave-svg left-wave" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M0,0 L15,0 C25,15 5,35 25,55 C45,75 15,90 20,100 L0,100 Z" 
              fill="var(--bg-deep)" 
            />
          </svg>

          {/* Right wave cutout */}
          <div className="bg-dark-part right-part" />
          <svg className="footer-wave-svg right-wave" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M100,0 L85,0 C75,15 95,35 75,55 C55,75 85,90 80,100 L100,100 Z" 
              fill="var(--bg-deep)" 
            />
          </svg>
        </div>

        <div className="footer-center-container container-wide">
          
          <div className="footer-main-columns">
            
            {/* COLUMN 1: BRAND IDENTITY (Now in White Center) */}
            <div className="footer-col brand-central-col">
              <div className="sig-profile-container">
                <div className="profile-img-wrap">
                  <img src="/assets/logo.png" alt="EIE Logo" />
                </div>
                <div className="profile-ring" />
                <div className="profile-dot" />
              </div>
              <div className="brand-labels">
                <h3 className="brand-main-title dark-text">EGYPT INFRA</h3>
                <span className="brand-subtitle">INFRASTRUCTURE EXPO 2026</span>
              </div>
              <div className="sig-social-links">
                <a href="#" className="sig-soc dark"><Share2 size={15} /></a>
                <a href="#" className="sig-soc dark"><Globe size={15} /></a>
                <a href="#" className="sig-soc dark"><MessageCircle size={15} /></a>
              </div>
            </div>

            {/* COLUMN 2: QUICK LINKS */}
            <div className="footer-col">
              <h4 className="col-label">{t('footer.quickLinks')}</h4>
              <div className="col-links">
                {navLinks.map((link, idx) => (
                  <Link key={link.path} to={link.path} className="col-link">
                    <span className="col-idx">0{idx+1}</span>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* COLUMN 3: CONTACT */}
            <div className="footer-col contact-col">
              <h4 className="col-label">{t('footer.contact')}</h4>
              <div className="contact-info-list">
                <div className="c-info-item">
                  <Mail size={14} className="text-primary" />
                  <span>info@egyptinfra.com</span>
                </div>
                <div className="c-info-item">
                  <Phone size={14} className="text-primary" />
                  <span>+20 2 2736 1234</span>
                </div>
                <div className="c-info-item">
                  <MapPin size={14} className="text-primary" />
                  <span>Cairo, Egypt</span>
                </div>
              </div>
            </div>

          </div>

          <div className="footer-newsletter-row centered compact">
            <div className="nl-box">
              <p className="nl-tagline">STAY UPDATED WITH OUR LATEST NEWS</p>
              <div className="nl-form-wrap">
                <input type="email" placeholder={t('footer.placeholder')} />
                <button className="nl-btn"><Send size={16} /></button>
              </div>
            </div>
          </div>

          <div className="footer-bottom-legal mini centered">
            <p>&copy; 2026 EGYPT INFRASTRUCTURE EXPO. {t('footer.rights')}</p>
            <div className="legal-subs">
              <a href="#">PRIVACY POLICY</a>
              <span>|</span>
              <a href="#">TERMS OF USE</a>
            </div>
          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;

