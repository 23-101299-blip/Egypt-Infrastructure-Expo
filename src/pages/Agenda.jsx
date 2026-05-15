import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, User, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import './Agenda.css';

const agendaData = (t) => ({
  [t('agenda.day1')]: [
    {
      time:    t('agenda.sessions.s1.time'),
      title:   t('agenda.sessions.s1.title'),
      speaker: t('agenda.sessions.s1.speaker'),
      room:    t('agenda.sessions.s1.room'),
      type:    t('agenda.sessions.s1.type'),
    },
    {
      time:    t('agenda.sessions.s2.time'),
      title:   t('agenda.sessions.s2.title'),
      speaker: t('agenda.sessions.s2.speaker'),
      room:    t('agenda.sessions.s2.room'),
      type:    t('agenda.sessions.s2.type'),
    },
    {
      time:    t('agenda.sessions.s3.time'),
      title:   t('agenda.sessions.s3.title'),
      speaker: t('agenda.sessions.s3.speaker'),
      room:    t('agenda.sessions.s3.room'),
      type:    t('agenda.sessions.s3.type'),
    },
  ],
  [t('agenda.day2')]: [
    {
      time:    t('agenda.sessions.s4.time'),
      title:   t('agenda.sessions.s4.title'),
      speaker: t('agenda.sessions.s4.speaker'),
      room:    t('agenda.sessions.s4.room'),
      type:    t('agenda.sessions.s4.type'),
    },
    {
      time:    t('agenda.sessions.s5.time'),
      title:   t('agenda.sessions.s5.title'),
      speaker: t('agenda.sessions.s5.speaker'),
      room:    t('agenda.sessions.s5.room'),
      type:    t('agenda.sessions.s5.type'),
    },
  ],
});

const Agenda = () => {
  const { t } = useTranslation();
  const [activeDay, setActiveDay] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveDay(t('agenda.day1'));
  }, [t]);

  const data = agendaData(t);
  const days = Object.keys(data);

  return (
    <PageTransition>
      <div className="agenda-page">

        {/* ── HERO — ASYMMETRIC WAVY (MATCHING HOME) ── */}
        <section className="asymmetric-hero">
          <div className="hero-content-left">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="hero-tag">{t('agenda.heroTag')}</span>
              <h1 className="hero-title">
                {t('agenda.heroTitle1')}<br />
                <span className="outline-text">{t('agenda.heroTitle2')}</span>
              </h1>
              <div className="hero-divider" />
              <p className="hero-desc">{t('agenda.heroDesc')}</p>
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
                <img src="/assets/new_alamein_city.png" alt="Agenda Backdrop" />
                <div className="hero-image-overlay" />
              </div>
              
              {/* Home-style Wavy Mask with Dynamic Path Animation */}
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
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  fill="white" 
                />
              </svg>
            </motion.div>
          </div>
        </section>

        {/* ── VERTICAL CENTERED TIMELINE ── */}
        <section className="ag-main-section">
          <div className="ag-day-tabs-minimal">
            {days.map((day, i) => (
              <button 
                key={day}
                className={`ag-day-btn ${activeDay === day ? 'active' : ''}`}
                onClick={() => setActiveDay(day)}
              >
                <span className="ag-day-num">0{i + 1}</span>
                <span className="ag-day-text">{day}</span>
              </button>
            ))}
          </div>

          <div className="ag-vertical-timeline">
            <div className="timeline-line" />
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeDay}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {data[activeDay]?.map((item, idx) => (
                  <div key={idx} className={`timeline-item ${idx % 2 !== 0 ? 'right' : ''}`}>
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <span className="t-tag">{item.type}</span>
                      <span className="t-time">{item.time}</span>
                      <h3 className="t-title">{item.title}</h3>
                      <div className="t-meta">
                        <div className="t-meta-item"><User size={14} /> {item.speaker}</div>
                        <div className="t-meta-item"><MapPin size={14} /> {item.room}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Agenda;
