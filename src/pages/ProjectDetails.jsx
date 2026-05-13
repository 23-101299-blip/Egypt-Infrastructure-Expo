import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProject = projects.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);

  if (!project) return (
    <div style={{ padding: '200px 5%', textAlign: 'center', minHeight: '100vh', background: 'var(--bg-deep)' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>PROJECT NOT FOUND</h2>
      <Link to="/" className="btn-premium">BACK TO ARCHIVE</Link>
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
          <ArrowLeft size={16} /> BACK TO THE ARCHIVE
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
          <div className="badge">GOVERNMENT MEGA-PROJECT</div>
          <h1>{project.title}</h1>
        </div>
      </motion.div>

      <div className="details-grid">
        <motion.div 
          className="details-main-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2>THE VISION</h2>
          <p>{project.details || project.description}</p>
          <p>
            This monumental development represents a key pillar in the Egypt 2030 Vision, serving as a catalyst for economic growth, urban expansion, and global investment.
          </p>
          
          <div className="objectives-section">
            <h3 className="objectives-title">CORE OBJECTIVES</h3>
            <div className="objectives-grid">
              <div className="objective-card">
                <div className="obj-num">01</div>
                <div className="obj-label">URBAN EXPANSION</div>
              </div>
              <div className="objective-card">
                <div className="obj-num">02</div>
                <div className="obj-label">ECONOMIC HUB</div>
              </div>
            </div>
          </div>
        </motion.div>

        <aside className="details-sidebar">
          <div className="details-info-card">
            <h3>PROJECT DOSSIER</h3>
            <div className="info-item">
              <span>Status</span>
              <span>UNDER CONSTRUCTION</span>
            </div>
            <div className="info-item">
              <span>Sector</span>
              <span>INFRASTRUCTURE</span>
            </div>
            <div className="info-item">
              <span>Location</span>
              <span>{project.title.includes('Alamein') ? 'North Coast' : project.title.includes('Capital') ? 'Cairo East' : 'Suez Zone'}</span>
            </div>
            <div className="info-item">
              <span>Timeline</span>
              <span>2024 - 2030</span>
            </div>
            
            <button className="btn-premium" style={{ width: '100%', marginTop: '40px', justifyContent: 'center' }}>
              REQUEST SITE BRIEF <ArrowUpRight size={18} />
            </button>
          </div>
          
          <div style={{ padding: '40px', background: 'var(--primary)', color: 'white' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', marginBottom: '15px' }}>EXHIBIT HERE</h4>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.5', opacity: 0.9 }}>
              Connect with decision-makers leading the {project.title} development at the Egypt Infrastructure Expo 2026.
            </p>
            <Link to="/register" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', fontSize: '0.8rem' }}>
              SECURE YOUR SPACE <ArrowUpRight size={16} />
            </Link>
          </div>
        </aside>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
