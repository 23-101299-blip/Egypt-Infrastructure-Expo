import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2, Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-top">
        {/* BRANDING */}
        <div className="footer-brand">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <img src="/assets/logo.png" alt="Logo" style={{ height: '35px' }} />
              <h2 style={{ margin: 0 }}>EIE 2026</h2>
            </div>
          </Link>
          <p>{t('footer.desc')}</p>
          <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
            <a href="#" style={{ color: 'var(--text-muted)' }}><Share2 size={18} /></a>
            <a href="#" style={{ color: 'var(--text-muted)' }}><Globe size={18} /></a>
            <a href="#" style={{ color: 'var(--text-muted)' }}><MessageCircle size={18} /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>{t('footer.quickLinks')}</h4>
          <ul className="footer-links">
            <li><Link to="/">{t('common.home')}</Link></li>
            <li><Link to="/about">{t('common.about')}</Link></li>
            <li><Link to="/exhibitors">{t('common.exhibitors')}</Link></li>
            <li><Link to="/agenda">{t('common.agenda')}</Link></li>
            <li><Link to="/register">{t('common.register')}</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>{t('footer.contact')}</h4>
          <ul className="footer-links" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Mail size={14} /> info@egyptinfra.com</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Phone size={14} /> +20 2 2736 1234</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={14} /> Cairo, Egypt</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-newsletter">
          <h4>{t('footer.newsletter')}</h4>
          <div className="pill-input-wrap" style={{ marginBottom: '15px' }}>
            <input type="email" placeholder={t('footer.placeholder')} style={{ width: '100%', padding: '15px', borderRadius: '5px', border: '1px solid var(--glass-border)', background: 'var(--bg-deep)', color: 'white' }} />
          </div>
          <button className="nav-cta-btn" style={{ width: '100%', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            {t('common.explore')} <Send size={16} />
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 EGYPT INFRASTRUCTURE EXPO. {t('footer.rights')}</p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>PRIVACY POLICY</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
