import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import heroCar from '@/assets/hero-car.png';

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with scroll parallax only */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <img
          src={heroCar}
          alt="Luxury SUV"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/40 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content with fade on scroll */}
      <motion.div style={{ opacity }} className="relative z-10 section-padding container-custom w-full pt-24 md:pt-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-gold font-medium tracking-wider uppercase text-sm md:text-base">
              {t("hero.tagline")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6 leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-gradient-gold inline-block"
            >
              {t("hero.title1")}
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-foreground inline-block"
            >
              {t("hero.title2")}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-foreground/70 text-lg md:text-xl mb-8 max-w-lg"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative group"
            >
              <motion.div
                className="absolute -inset-1 rounded-full bg-gold/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <Button variant="gold" size="xl" asChild className="relative">
                <a href="#vehicles">{t("hero.exploreCollection")}</a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="gold-outline" size="xl" asChild>
                <a href="#contact">{t("hero.contactUs")}</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator with pulse animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#vehicles" className="group flex flex-col items-center gap-2 text-foreground/50 hover:text-gold transition-colors">
          <span className="text-sm font-medium">{t("hero.scrollToExplore")}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gold/20 blur-md"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <ChevronDown className="w-5 h-5 relative z-10" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
