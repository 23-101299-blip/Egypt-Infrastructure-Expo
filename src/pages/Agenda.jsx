import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, User, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Agenda.css';

const agendaData = (t) => ({
  [t('agenda.day1')]: [
    { time: "09:00 AM", title: t('about.service1Title'), speaker: t('agenda_details.speaker1'), room: t('agenda_details.room1'), type: "KEYNOTE" },
    { time: "11:30 AM", title: t('about.service2Title'), speaker: t('agenda_details.speaker2'), room: t('agenda_details.room2'), type: "PANEL" },
    { time: "02:00 PM", title: t('about.service3Title'), speaker: t('agenda_details.speaker3'), room: t('agenda_details.room3'), type: "WORKSHOP" }
  ],
  [t('agenda.day2')]: [
    { time: "10:00 AM", title: t('about.service4Title'), speaker: t('agenda_details.speaker4'), room: t('agenda_details.room4'), type: "KEYNOTE" },
    { time: "01:00 PM", title: t('agenda_details.topic1'), speaker: t('agenda_details.speaker5'), room: t('agenda_details.room5'), type: "PANEL" }
  ]
});

const Agenda = () => {
  const { t } = useTranslation();
  const [activeDay, setActiveDay] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveDay(t('agenda.day1'));
  }, [t]);

  const data = agendaData(t);

  return (
    <div className="agenda-page">
      <section className="ag-hero">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Calendar className="hero-icon-bg" size={200} />
          <h1>{t('agenda.heroTitle').split(' ')[0]} <span style={{ color: 'var(--primary)' }}>{t('agenda.heroTitle').split(' ')[1] || ''}</span></h1>
          <p>{t('agenda.heroDesc')}</p>
        </motion.div>
      </section>

      <div className="ag-timeline">
        <div className="ag-tabs">
          {Object.keys(data).map(day => (
            <button 
              key={day}
              className={`ag-tab-btn ${activeDay === day ? 'active' : ''}`}
              onClick={() => setActiveDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="ag-sessions">
          {activeDay && data[activeDay]?.map((session, idx) => (
            <motion.div 
              key={idx} 
              className="ag-session"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="ag-time-bubble">{session.time}</div>
              
              <div className="ag-card">
                <h4>{session.type}</h4>
                <h3>{session.title}</h3>
                <div className="speaker-box">
                  <div style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                     <User size={14} /> <span>{session.speaker}</span>
                  </div>
                  <div style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px', margin: '0 20px' }}>
                     <MapPin size={14} /> <span>{session.room}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agenda;
