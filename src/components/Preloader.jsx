import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        >
          <div className="loader-content">
            <motion.img 
              src="/assets/logo.png" 
              alt="Logo" 
              className="custom-logo-large"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <div className="loader-bar-wrap">
              <div className="loader-bar"></div>
            </div>
            <h2>INITIALIZING VISION</h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
