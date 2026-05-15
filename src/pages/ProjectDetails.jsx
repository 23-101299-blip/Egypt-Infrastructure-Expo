import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../data';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProject = projects.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);

  const pKey = id === 'new-administrative-capital' ? 'nac' : id === 'new-alamein-city' ? 'alamein' : 'ras';

  if (!project) return (
    <div style={{ padding: '200px 5%', textAlign: 'center', minHeight: '100vh', background: 'var(--bg-deep)' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>{t('projects.notFound')}</h2>
      <Link to="/" className="btn-premium">{t('common.backToArchive')}</Link>
    </div>
  );

  return (
    <motion.div 
      className="details-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="details-header-wrap">
        <Link to="/" className="details-back-btn">
          <ArrowLeft size={16} /> {t('common.backToArchive')}
        </Link>
      </div>
      
      <motion.div 
        className="details-hero"
        style={{ backgroundImage: `url(${project.image})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="details-title-box">
          <div className="badge">{t('projects.badge')}</div>
          <h1>{t(`projects.${pKey}.title`)}</h1>
        </div>
      </motion.div>

      <div className="details-grid">
        <motion.div 
          className="details-main-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2>{t('projects.vision')}</h2>
          <p>{t(`projects.${pKey}.details`)}</p>
          
          <div className="objectives-section">
            <h3 className="objectives-title">{t('projects.objectives')}</h3>
            <div className="objectives-grid">
              <div className="objective-card">
                <div className="obj-num">01</div>
                <div className="obj-label">{t('projects.urbanExpansion')}</div>
              </div>
              <div className="objective-card">
                <div className="obj-num">02</div>
                <div className="obj-label">{t('projects.economicHub')}</div>
              </div>
            </div>
          </div>
        </motion.div>

        <aside className="details-sidebar">
          <div className="details-info-card">
            <h3>{t('projects.dossier')}</h3>
            <div className="info-item">
              <span>{t('projects.status')}</span>
              <span>{t('projects.underConstruction')}</span>
            </div>
            <div className="info-item">
              <span>{t('projects.sector')}</span>
              <span>{t('projects.infrastructure')}</span>
            </div>
            <div className="info-item">
              <span>{t('projects.location')}</span>
              <span>{t(`projects.${pKey}.title`).includes('العلمين') || t(`projects.${pKey}.title`).includes('Alamein') ? (t('common.home') === 'الرئيسية' ? 'الساحل الشمالي' : 'North Coast') : t(`projects.${pKey}.title`).includes('العاصمة') || t(`projects.${pKey}.title`).includes('Capital') ? (t('common.home') === 'الرئيسية' ? 'شرق القاهرة' : 'Cairo East') : (t('common.home') === 'الرئيسية' ? 'منطقة السويس' : 'Suez Zone')}</span>
            </div>
            <div className="info-item">
              <span>{t('projects.timeline')}</span>
              <span>2024 - 2030</span>
            </div>
            
            <button className="btn-premium" style={{ width: '100%', marginTop: '40px', justifyContent: 'center' }}>
              {t('projects.requestBrief')} <ArrowUpRight size={18} />
            </button>
          </div>
          
          <div style={{ padding: '40px', background: 'var(--primary)', color: 'white' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', marginBottom: '15px' }}>{t('projects.exhibitHere')}</h4>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.5', opacity: 0.9 }}>
              {t('projects.exhibitDesc')}
            </p>
            <Link to="/register" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', fontSize: '0.8rem' }}>
              {t('projects.secureSpace')} <ArrowUpRight size={16} />
            </Link>
          </div>
        </aside>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
