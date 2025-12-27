import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import VariantSlider from './VariantSlider';

const CarCatalog = () => {
  const { t } = useTranslation();

  return (
    <section id="vehicles" className="py-20 md:py-32">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 container-custom"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gold font-medium tracking-wider uppercase text-sm inline-block"
          >
            {t("vehicles.ourCollection")}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6"
          >
            {t("vehicles.premiumVehicles").split(" ")[0]} <span className="text-gradient-gold">{t("vehicles.premiumVehicles").split(" ").slice(1).join(" ") || t("vehicles.premiumVehicles")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            {t("vehicles.description")}
          </motion.p>
        </motion.div>

        {/* LX 600 Variant Slider */}
        <VariantSlider carType="lx600" />
        
        {/* GXR Variant Slider */}
        <VariantSlider carType="gxr" />
      </div>
    </section>
  );
};

export default CarCatalog;
