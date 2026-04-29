import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './PopupAd.css';

const PopupAd = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="popup-content"
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <button className="close-popup" onClick={() => setShow(false)}>
              <X size={24} />
            </button>
            <h2>Save the Date!</h2>
            <p>Join thousands of professionals at the Egypt Infrastructure Expo.</p>
            <h3 style={{ marginBottom: '20px', color: 'var(--text-light)' }}>
              March 18 – 20, 2026<br />
              Egypt International Exhibition Center
            </h3>
            <button className="btn-primary" onClick={() => setShow(false)}>Register Free</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupAd;
