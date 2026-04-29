import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <motion.div 
        className="not-found-icon"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <span>!</span>
      </motion.div>

      <motion.div 
        className="error-code"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        4<span></span>4
      </motion.div>

      <div className="separator-gradient" />

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        SECTOR UNDER<br />CONSTRUCTION
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        The blueprints for this zone are missing or the foundations for this mega-project are still being laid. Let's get you back to the main site.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link to="/" className="btn-base">
          <ChevronLeft size={20} /> RETURN TO BASE
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
