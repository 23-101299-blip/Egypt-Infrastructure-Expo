import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, MapPin, Globe, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageTransition>
      <div className="about-bali-theme">

        {/* ══════════════ CINEMATIC HERO ══════════════ */}
        <section className="bali-hero">
          <div className="bali-hero-img">
            <img src="/assets/new_administrative_capital.png" alt="Hero" />
            <div className="bali-hero-overlay" />
          </div>
          
          <div className="bali-hero-content">
            <motion.h1 
              className="bali-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {t('about.heroTitle')}
            </motion.h1>
            <p className="bali-hero-subtitle">{t('about.heroSubtitle')}</p>
          </div>

          {/* Hero Bottom Meta Grid */}
          <div className="bali-hero-footer">
            <div className="bali-footer-item">
              <span className="meta-label">{t('about.newCollection')}</span>
              <span className="meta-val">{t('about.infra2026')}</span>
            </div>
            <div className="bali-footer-item">
              <span className="meta-label">{t('about.category')}</span>
              <span className="meta-val">{t('about.urbanDev')}</span>
            </div>
            <div className="bali-footer-item">
              <span className="meta-label">{t('about.topPerf')}</span>
              <span className="meta-val">{t('about.megaProjects')}</span>
            </div>
          </div>
        </section>

        {/* ══════════════ FULL-BLEED BENTO GRID ══════════════ */}
        <div className="bali-grid">
          
          {/* Row 1: Intro */}
          <div className="bali-item bali-desc-muted">
            <p>{t('about.introDesc')}</p>
          </div>
          <div className="bali-item bali-title-block">
            <h2 className="bali-section-title">{t('about.legacyTitle')}</h2>
            <p className="bali-section-para">{t('about.legacyPara')}</p>
          </div>
          <div className="bali-item bali-tall-img span-2">
            <img src="/assets/tower.png" alt="Tall Tower" />
            <div className="bali-img-overlay">
              <p>{t('about.paradise')}</p>
            </div>
          </div>

          {/* Row 2: Wide Shop Image */}
          <div className="bali-item bali-wide-img span-cols-2">
            <img src="/assets/new_alamein_hero_v2.png" alt="Wide" />
            <div className="bali-label-bottom">
              <span>{t('common.explore')}</span>
              <ArrowRight size={20} />
            </div>
          </div>

          {/* Row 3: About Detail */}
          <div className="bali-item bali-medium-img">
            <img src="/assets/ras_el_hekma.png" alt="Ras" />
          </div>
          <div className="bali-item bali-about-content">
            <div className="about-centered-box">
              <h3 className="bali-about-title">{t('about.aboutTitle')}</h3>
              <p className="bali-about-para">
                {t('about.aboutPara')}
              </p>
              <a href="#" className="bali-about-link">{t('about.joinJourney')}</a>
            </div>
          </div>

          {/* Row 4: Final Mix */}
          <div className="bali-item bali-vertical-img">
            <img src="/assets/new_administrative_capital.png" alt="Cap" />
          </div>
          <div className="bali-item bali-new-vision-block">
            <div className="vision-centered-box">
              <h4>{t('about.newVision')}</h4>
              <p>{t('about.inWorks')}</p>
            </div>
          </div>
          <div className="bali-item bali-statue-img">
            <img src="/assets/tower.png" alt="Statue" />
            <div className="bali-statue-overlay">
              <div className="vision-quote">
                <p>{t('about.quote')}</p>
                <span>{t('about.author')}</span>
              </div>
            </div>
          </div>
          <a href="/register" className="bali-item bali-new-vision-block">
            <div className="vision-centered-box">
              <h4>{t('about.contactUs')}</h4>
              <p>{t('about.getInTouch')}</p>
            </div>
          </a>

        </div>

      </div>
    </PageTransition>
  );
};

export default About;
