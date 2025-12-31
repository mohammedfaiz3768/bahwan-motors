import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

// Import LX 600 images
import lx600BbWhiteCutout from "@/assets/lx600-bb-white-cutout.png";
import lx600VipWhiteCutout from "@/assets/lx600-vip-white-cutout.png";
import lx600FsportWhiteCutout from "@/assets/lx600-fsport-white-cutout.png";

// Import GXR images
import gxrL4Cutout from "@/assets/gxr-l4-cutout.png";
import gxrL5Cutout from "@/assets/gxr-l5-cutout.png";

interface Variant {
  id: string;
  slug: string;
  image: string;
  priceKey: string;
}

interface VariantSliderProps {
  carType: "lx600" | "gxr";
  currentVariant?: string;
}

const lx600Variants: Variant[] = [
  {
    id: "bb",
    slug: "bb",
    image: lx600BbWhiteCutout,
    priceKey: "vehicles.contactForDetails",
  },
  {
    id: "vip",
    slug: "vip",
    image: lx600VipWhiteCutout,
    priceKey: "vehicles.contactForDetails",
  },
  {
    id: "f-sport",
    slug: "f-sport",
    image: lx600FsportWhiteCutout,
    priceKey: "vehicles.contactForPrice",
  },
];

const gxrVariants: Variant[] = [
  {
    id: "l4",
    slug: "l4",
    image: gxrL4Cutout,
    priceKey: "vehicles.contactForDetails",
  },
  {
    id: "l5",
    slug: "l5",
    image: gxrL5Cutout,
    priceKey: "vehicles.contactForDetails",
  },
];

const VariantSlider = ({ carType, currentVariant }: VariantSliderProps) => {
  const { t, i18n } = useTranslation();
  const variants = carType === "lx600" ? lx600Variants : gxrVariants;
  const [activeIndex, setActiveIndex] = useState(() => {
    const idx = variants.findIndex((v) => v.slug === currentVariant);
    return idx >= 0 ? idx : 0;
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLAnchorElement>(null);
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const AUTOPLAY_INTERVAL = 4000; // 4 seconds

  // Mouse tracking for parallax effect on car image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 25 };
  const zoomSpringConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig);
  const scale = useSpring(isHovering ? 1.15 : 1, zoomSpringConfig);

  const minSwipeDistance = 50;

  useEffect(() => {
    const idx = variants.findIndex((v) => v.slug === currentVariant);
    if (idx >= 0) setActiveIndex(idx);
  }, [currentVariant, variants]);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused || isHovering) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      return;
    }

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % variants.length);
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, isHovering, variants.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovering(false);
  };

  const scrollToTab = (index: number) => {
    if (tabsRef.current) {
      const tabs = tabsRef.current.children;
      if (tabs[index]) {
        (tabs[index] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  const handleTabClick = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    scrollToTab(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      handleTabClick(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < variants.length - 1) {
      handleTabClick(activeIndex + 1);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndRef.current = null;
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // RTL: swap swipe directions
    const isRtl = i18n.language === 'ar';
    if (isRtl) {
      if (isLeftSwipe) {
        handlePrev();
      } else if (isRightSwipe) {
        handleNext();
      }
    } else {
      if (isLeftSwipe) {
        handleNext();
      } else if (isRightSwipe) {
        handlePrev();
      }
    }

    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  const activeVariant = variants[activeIndex];
  // Default to "Kuwait" for GXR L5, otherwise "Braimi"
  const defaultManufacturer = activeVariant.slug === "l5" ? "kuwait" : "Braimi";

  const getCarTitle = () => {
    if (carType === "lx600") {
      return t("vehicles.meetTheLine", { car: t("vehicles.lx600") });
    }
    return t("vehicles.meetTheLine", { car: t("vehicles.gxr") });
  };

  const getFullCarName = () => {
    const variantName = t(`variants.${activeVariant.id}.name`);
    if (carType === "lx600") {
      return `${t("vehicles.lexusLx600")} ${variantName}`;
    }
    return `${t("vehicles.toyotaGxr")} ${variantName}`;
  };

  return (
    <section
      className="py-12 bg-gradient-to-b from-secondary/50 to-background overflow-x-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="section-padding">
        {/* Section Title with stagger animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.h2
            className="font-display text-2xl md:text-3xl font-bold text-foreground"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {getCarTitle()}
          </motion.h2>
        </motion.div>

        {/* Variant Tabs with enhanced hover */}
        <div className="relative mb-8">
          {/* Navigation Arrows with hover effects */}
          <motion.button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            whileHover={{ scale: activeIndex === 0 ? 1 : 1.1 }}
            whileTap={{ scale: activeIndex === 0 ? 1 : 0.95 }}
            className={`absolute start-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center transition-all ${activeIndex === 0
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-gold hover:border-gold hover:text-primary-foreground hover:shadow-lg hover:shadow-gold/20"
              }`}
          >
            <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
          </motion.button>

          <motion.button
            onClick={handleNext}
            disabled={activeIndex === variants.length - 1}
            whileHover={{ scale: activeIndex === variants.length - 1 ? 1 : 1.1 }}
            whileTap={{ scale: activeIndex === variants.length - 1 ? 1 : 0.95 }}
            className={`absolute end-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center transition-all ${activeIndex === variants.length - 1
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-gold hover:border-gold hover:text-primary-foreground hover:shadow-lg hover:shadow-gold/20"
              }`}
          >
            <ChevronRight className="w-5 h-5 rtl:rotate-180" />
          </motion.button>

          {/* Tabs Container */}
          <div className="overflow-hidden px-4 md:px-12">
            <div ref={tabsRef} className="flex justify-center gap-2 md:gap-4">
              {variants.map((variant, index) => (
                <motion.button
                  key={variant.id}
                  onClick={() => handleTabClick(index)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all whitespace-nowrap ${activeIndex === index ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {activeIndex === index && (
                    <motion.div
                      layoutId={`variant-tab-${carType}`}
                      className="absolute inset-0 gradient-gold rounded-full glow-gold-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{t(`variants.${variant.id}.name`)}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Car Image and Info with 3D parallax effect */}
        <div
          className="relative max-w-4xl mx-auto touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVariant.id}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              {/* Car Image with 3D tilt effect and Click Navigation */}
              <Link
                to={`/${carType}/${activeVariant.slug}/${defaultManufacturer}`}
                className="block relative aspect-[16/10] mb-6 cursor-pointer perspective-1000 overflow-hidden rounded-xl"
                ref={imageContainerRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Animated spotlight background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-radial from-gold/10 via-transparent to-transparent"
                  animate={{
                    scale: isHovering ? 1.2 : 1,
                    opacity: isHovering ? 0.8 : 0.5,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Shadow under car */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/30 rounded-full blur-xl"
                  style={{
                    x: translateX,
                  }}
                  animate={{
                    scale: isHovering ? 1.1 : 1,
                    opacity: isHovering ? 0.5 : 0.3,
                  }}
                />

                {/* Car image with 3D transform */}
                <motion.img
                  src={activeVariant.image}
                  alt={getFullCarName()}
                  className="relative z-10 w-full h-full object-contain"
                  style={{
                    rotateX,
                    rotateY,
                    x: translateX,
                    y: translateY,
                    scale,
                    filter: isHovering
                      ? "drop-shadow(0 25px 50px rgba(0,0,0,0.4)) drop-shadow(0 0 30px hsl(40 60% 50% / 0.2))"
                      : "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating particles on hover */}
                {isHovering && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20, x: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          y: [-20, -60],
                          x: (i % 2 === 0 ? 1 : -1) * (10 + i * 5),
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                        className="absolute w-1 h-1 bg-gold rounded-full"
                        style={{
                          left: `${30 + i * 10}%`,
                          bottom: "30%",
                        }}
                      />
                    ))}
                  </>
                )}
              </Link>

              {/* Variant Info with stagger animation */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <motion.h3
                  className="font-display text-xl md:text-2xl font-bold text-foreground mb-2"
                  initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {getFullCarName()}
                </motion.h3>
                <motion.p
                  className="text-gold font-semibold mb-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {t(activeVariant.priceKey)}
                </motion.p>
                <motion.p
                  className="text-muted-foreground mb-6 max-w-md mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {t(`variants.${activeVariant.id}.description`)}
                </motion.p>

                {/* Enhanced CTA button */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                  <Link
                    to={`/${carType}/${activeVariant.slug}/${defaultManufacturer}`}
                    className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full"
                  >
                    {/* Button background with shimmer */}
                    <span className="absolute inset-0 gradient-gold" />
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                      animate={{ x: ["0%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                    />
                    <span className="relative font-medium text-primary-foreground group-hover:scale-105 transition-transform">
                      {t("vehicles.viewDetails")}
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {variants.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleTabClick(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all ${index === activeIndex
                  ? "bg-gold w-8 shadow-lg shadow-gold/30"
                  : "bg-border w-2 hover:bg-muted-foreground"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VariantSlider;
