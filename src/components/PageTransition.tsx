import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      {/* Page content with fade and slide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.22, 1, 0.36, 1] 
        }}
      >
        {children}
      </motion.div>

      {/* Gold sweep overlay on enter */}
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
      >
        <div className="w-full h-full gradient-gold" />
      </motion.div>

      {/* Reveal overlay */}
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={{ originX: 1 }}
      >
        <div className="w-full h-full gradient-gold" />
      </motion.div>
    </>
  );
};

export default PageTransition;
