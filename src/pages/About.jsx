import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, MapPin, Globe, Award } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import './About.css';

const About = () => {
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
              EGYPT
            </motion.h1>
            <p className="bali-hero-subtitle">Engineering the future of a nation with unmatched ambition.</p>
          </div>

          {/* Hero Bottom Meta Grid */}
          <div className="bali-hero-footer">
            <div className="bali-footer-item">
              <span className="meta-label">NEW COLLECTION</span>
              <span className="meta-val">Infrastructure 2026</span>
            </div>
            <div className="bali-footer-item">
              <span className="meta-label">CATEGORY</span>
              <span className="meta-val">Urban Development</span>
            </div>
            <div className="bali-footer-item">
              <span className="meta-label">TOP PERFORMANCE</span>
              <span className="meta-val">Mega City Projects</span>
            </div>
          </div>
        </section>

        {/* ══════════════ FULL-BLEED BENTO GRID ══════════════ */}
        <div className="bali-grid">
          
          {/* Row 1: Intro */}
          <div className="bali-item bali-desc-muted">
            <p>Beyond the daily visual inspiration we draw from our heritage, we focus on all we create. To connect each line and piece to the Egyptian soul, used to create moments we are blessed to share with the world from this site.</p>
          </div>
          <div className="bali-item bali-title-block">
            <h2 className="bali-section-title">Legacy</h2>
            <p className="bali-section-para">A hand-drawn vision of intricate patterns and bright futures, these pieces invite you to interpret your own destiny from the details.</p>
          </div>
          <div className="bali-item bali-tall-img span-2">
            <img src="/assets/tower.png" alt="Tall Tower" />
            <div className="bali-img-overlay">
              <p>A piece of<br />paradise in your<br />home</p>
            </div>
          </div>

          {/* Row 2: Wide Shop Image */}
          <div className="bali-item bali-wide-img span-cols-2">
            <img src="/assets/new_alamein_hero_v2.png" alt="Wide" />
            <div className="bali-label-bottom">
              <span>EXPLORE</span>
              <ArrowRight size={20} />
            </div>
          </div>

          {/* Row 3: About Detail */}
          <div className="bali-item bali-medium-img">
            <img src="/assets/ras_el_hekma.png" alt="Ras" />
          </div>
          <div className="bali-item bali-about-content">
            <div className="about-centered-box">
              <h3 className="bali-about-title">About</h3>
              <p className="bali-about-para">
                EIE opened in 2026 as a concept hub to provide the latest infrastructure trends from around the globe under one roof at an affordable price. We are now happy to offer our unique vision online.
              </p>
              <a href="#" className="bali-about-link">Join the journey</a>
            </div>
          </div>

          {/* Row 4: Final Mix */}
          <div className="bali-item bali-vertical-img">
            <img src="/assets/new_administrative_capital.png" alt="Cap" />
          </div>
          <div className="bali-item bali-new-vision-block">
            <div className="vision-centered-box">
              <h4>New Vision</h4>
              <p>is already in the works</p>
            </div>
          </div>
          <div className="bali-item bali-statue-img">
            <img src="/assets/tower.png" alt="Statue" />
            <div className="bali-statue-overlay">
              <div className="vision-quote">
                <p>"Architecture is the reach for truth."</p>
                <span>— Louis Kahn</span>
              </div>
            </div>
          </div>
          <a href="/register" className="bali-item bali-new-vision-block">
            <div className="vision-centered-box">
              <h4>Contact Us</h4>
              <p>Get in touch with EIE</p>
            </div>
          </a>

        </div>

      </div>
    </PageTransition>
  );
};

export default About;
