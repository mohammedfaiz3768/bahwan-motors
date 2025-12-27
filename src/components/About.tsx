import { motion } from 'framer-motion';
import { Shield, Award, Users, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      titleKey: 'about.features.verifiedQuality.title',
      descriptionKey: 'about.features.verifiedQuality.description',
    },
    {
      icon: Award,
      titleKey: 'about.features.authorizedDealer.title',
      descriptionKey: 'about.features.authorizedDealer.description',
    },
    {
      icon: Users,
      titleKey: 'about.features.expertTeam.title',
      descriptionKey: 'about.features.expertTeam.description',
    },
    {
      icon: Clock,
      titleKey: 'about.features.fastDelivery.title',
      descriptionKey: 'about.features.fastDelivery.description',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -80, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gold font-medium tracking-wider uppercase text-sm inline-block"
            >
              {t("about.title")}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6"
            >
              {t("about.heading").split("Luxury Automobiles")[0]}
              <span className="text-gradient-gold">{t("about.heading").includes("Luxury") ? "Luxury Automobiles" : "السيارات الفاخرة"}</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-lg mb-6"
            >
              {t("about.paragraph1")}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-lg"
            >
              {t("about.paragraph2")}
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                className="glass-card p-6 rounded-xl hover:border-gold/30 transition-colors duration-300"
              >
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-4"
                >
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                  className="font-display text-xl font-semibold text-foreground mb-2"
                >
                  {t(feature.titleKey)}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                  className="text-muted-foreground text-sm"
                >
                  {t(feature.descriptionKey)}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
