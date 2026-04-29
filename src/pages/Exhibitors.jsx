import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import './Exhibitors.css';

const exhibitorsData = (t) => [
  { id: 1, name: "ORASCOM", category: t('exhibitors.categoryConst'), country: "EGYPT", image: "/assets/orascom.jpg" },
  { id: 2, name: "SIEMENS", category: t('exhibitors.categoryEnergy'), country: "GERMANY", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "HASSAN ALLAM", category: t('exhibitors.categoryConst'), country: "EGYPT", image: "/assets/hassan_allam.png" },
  { id: 4, name: "SCHNEIDER", category: t('exhibitors.categorySmart'), country: "FRANCE", image: "/assets/schneider.jpg" },
  { id: 5, name: "ARAB CONTR.", category: t('exhibitors.categoryConst'), country: "EGYPT", image: "/assets/arab_contractors.jpg" }
];

const Exhibitors = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = exhibitorsData(t);
  const filtered = data.filter(ex => 
    ex.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageTransition>
      <div className="exhibitors-page">
        {/* SIDEBAR */}
        <aside className="ex-sidebar">
          <motion.h2 
            className="vertical-title"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('exhibitors.sidebarTitle').split(' ')[0]} <span>{t('exhibitors.sidebarTitle').split(' ')[1]}</span>
          </motion.h2>
        </aside>

        {/* MAIN CONTENT */}
        <main className="ex-main">
          <div className="ex-header-creative">
            <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{t('exhibitors.subTitle')}</motion.h4>
            <motion.h1 
              initial={{ x: -100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {t('exhibitors.title1')}<br /><span style={{ color: 'var(--primary)' }}>{t('exhibitors.title2')}</span>
            </motion.h1>
            
            <div className="search-wrap" style={{ marginTop: '50px', maxWidth: '400px' }}>
              <input 
                type="text" 
                placeholder={t('exhibitors.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ border: 'none', borderBottom: '1px solid white', background: 'transparent', borderRadius: '0', padding: '15px 0' }}
              />
            </div>
          </div>

          {/* SLICE GRID */}
          <section className="slice-grid">
            {data.slice(0, 5).map((ex, i) => (
              <motion.div 
                key={ex.id} 
                className="slice-item"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ flex: 3 }}
              >
                <img src={ex.image} alt={ex.name} className="slice-img" />
                <div className="slice-overlay">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    <p>0{i + 1} // {ex.country}</p>
                    <h3>{ex.name}</h3>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </section>

          {/* MINIMAL LIST */}
          <section className="ex-list-section">
            <AnimatePresence>
              {filtered.map((ex, i) => (
                <motion.div 
                  key={ex.id} 
                  className="ex-list-row"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="ex-num">0{i + 1}</div>
                  <div className="ex-name-box">
                    <h3>{ex.name}</h3>
                  </div>
                  <div className="ex-cat-box">{ex.category}</div>
                  <div className="ex-link-box">
                    <motion.a 
                      href="#" 
                      className="ex-link-circle"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                    >
                      <ArrowUpRight size={24} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </section>
        </main>
      </div>
    </PageTransition>
  );
};

export default Exhibitors;
