import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './PopupAd.css';

const PopupAd = () => {
  const { t } = useTranslation();
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
            <h2>{t('popup.title')}</h2>
            <p>{t('popup.desc')}</p>
            <h3 className="popup-date-info">
              {t('popup.date')}<br />
              {t('popup.location')}
            </h3>
            <button className="btn-primary" onClick={() => setShow(false)}>{t('popup.cta')}</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupAd;
