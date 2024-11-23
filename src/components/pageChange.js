import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './css/pageChange.css';

const PageChangeAnimation = ({ children }) => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      x: '-100%'
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0, 
      x: '100%',
      transition: {
        duration: 0.4,
        ease: 'easeIn'
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.key} // Changed from location.pathname to location.key
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageChangeAnimation;
