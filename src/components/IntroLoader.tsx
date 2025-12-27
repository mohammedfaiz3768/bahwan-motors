import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Animated background particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0,
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0
                }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
                className="absolute w-2 h-2 rounded-full bg-gold/30"
              />
            ))}
          </div>

          {/* Gold gradient sweep */}
          <motion.div
            initial={{ x: '-100%', opacity: 0.3 }}
            animate={{ x: '200%' }}
            transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-gold/20 to-transparent skew-x-12"
          />

          {/* Logo container */}
          <div className="relative flex flex-col items-center">
            {/* Glow ring */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.5, 1.2],
                opacity: [0, 0.5, 0]
              }}
              transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
              className="absolute w-80 h-80 rounded-full border border-gold/30"
            />
            
            {/* Second glow ring */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 2, 1.5],
                opacity: [0, 0.3, 0]
              }}
              transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
              className="absolute w-80 h-80 rounded-full border border-gold/20"
            />

            {/* Logo with reveal animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, filter: "blur(20px)" }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                filter: "blur(0px)"
              }}
              transition={{ 
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative z-10"
            >
              <motion.img
                src={logo}
                alt="Bahwan Motors"
                className="w-48 md:w-64 h-auto drop-shadow-2xl"
                animate={{
                  filter: [
                    "drop-shadow(0 0 20px hsl(40 60% 50% / 0.3))",
                    "drop-shadow(0 0 40px hsl(40 60% 50% / 0.5))",
                    "drop-shadow(0 0 20px hsl(40 60% 50% / 0.3))"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 200, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
              className="mt-8 h-0.5 bg-border/50 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                className="h-full gradient-gold"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="mt-6 text-muted-foreground text-sm tracking-[0.3em] uppercase"
            >
              Luxury Redefined
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
