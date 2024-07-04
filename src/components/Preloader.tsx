'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
          initial={{ y: 0 }}
          exit={{ y: '-100%', borderRadius: '50% 50% 0 0' }}
          transition={{ duration: 1, ease: 'easeInOut', type: 'spring' }}
        >
          <div className="loader text-2xl">Property Estate</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
