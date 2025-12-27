import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

// Custom social media icons
const SnapchatIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.206 1c.925.007 2.87.158 4.387 1.702.953.97 1.437 2.335 1.437 4.062 0 .264-.013.76-.04 1.252-.022.413-.049.81-.076 1.135a.443.443 0 00.188.4c.115.08.27.12.426.12.202 0 .454-.069.695-.154.166-.058.32-.094.47-.094.273 0 .508.09.7.266.284.263.35.632.301.883-.095.498-.403.874-.916 1.12-.11.052-.4.164-.656.26-.48.18-.634.238-.732.314-.186.145-.22.328-.214.425.017.315.227.782.609 1.345.609.9 1.461 1.975 2.826 2.432.145.048.387.153.42.413.037.294-.2.558-.378.707-.481.404-1.1.633-1.908.766-.098.015-.178.117-.2.255-.03.177-.08.355-.147.533-.118.312-.324.378-.553.378-.142 0-.297-.032-.476-.076a5.058 5.058 0 00-1.097-.157c-.234 0-.45.022-.66.064-.408.086-.765.339-1.188.644-.697.5-1.564 1.123-3.022 1.123-.044 0-.089-.001-.134-.004-.038.003-.082.004-.124.004-1.458 0-2.324-.623-3.022-1.123-.423-.305-.78-.558-1.188-.644a3.294 3.294 0 00-.66-.064c-.394 0-.765.08-1.097.157-.179.044-.334.076-.476.076-.229 0-.435-.066-.553-.378a2.458 2.458 0 01-.147-.533c-.022-.138-.102-.24-.2-.255-.808-.133-1.427-.362-1.908-.766-.178-.149-.415-.413-.378-.707.033-.26.275-.365.42-.413 1.365-.457 2.217-1.532 2.826-2.432.382-.563.592-1.03.609-1.345.006-.097-.028-.28-.214-.425-.098-.076-.252-.134-.732-.314-.256-.096-.545-.208-.655-.26-.514-.246-.822-.622-.917-1.12-.05-.251.017-.62.301-.883.192-.177.427-.266.7-.266.15 0 .304.036.47.094.241.085.493.154.695.154.156 0 .311-.04.426-.12a.443.443 0 00.188-.4c-.027-.325-.054-.722-.076-1.135-.027-.492-.04-.988-.04-1.252 0-1.727.484-3.091 1.437-4.062C9.336 1.158 11.281 1.007 12.206 1z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" />
  </svg>
);

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Phone,
      titleKey: "contact.phone",
      details: ["0503475940", "0533335911"],
      action: "tel:0533335911",
    },
    {
      icon: SnapchatIcon,
      titleKey: "contact.snapchat",
      detailKeys: ["contact.followOnSnapchat"],
      action: "https://snapchat.com/t/ALdWyHs7",
    },
    {
      icon: MapPin,
      titleKey: "contact.location",
      detailKeys: ["contact.gulfRegion", "contact.saudiArabia"],
      action: "https://maps.app.goo.gl/kYVpvKfpyZa5j9F58",
    },
    {
      icon: Clock,
      titleKey: "contact.workingHours",
      detailKeys: ["contact.satThu", "contact.fridayClosed"],
    },
  ];

  const socialLinks = [
    {
      icon: SnapchatIcon,
      name: "Snapchat",
      url: "https://snapchat.com/t/ALdWyHs7",
      color: "hover:bg-[#FFFC00] hover:text-black",
    },
    {
      icon: InstagramIcon,
      name: "Instagram",
      url: "https://www.instagram.com/bahwan911?igsh=MWs2ZmdjOWxwbjluMQ%3D%3D&utm_source=qr",
      color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]",
    },
    {
      icon: TikTokIcon,
      name: "TikTok",
      url: "https://www.tiktok.com/@bahwanmotors2025?_r=1&_t=ZS-92UCMiMIBnd",
      color: "hover:bg-black hover:text-white",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gold font-medium tracking-wider uppercase text-sm inline-block"
          >
            {t("contact.getInTouch")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6"
          >
            {t("contact.title").split(" ")[0]} <span className="text-gradient-gold">{t("contact.title").split(" ").slice(1).join(" ") || t("contact.title")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            {t("contact.description")}
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.titleKey}
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="glass-card p-6 rounded-xl text-center hover:border-gold/30 transition-colors duration-300"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12 + 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4"
              >
                <info.icon className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 + 0.4 }}
                className="font-display text-lg font-semibold text-foreground mb-2"
              >
                {t(info.titleKey)}
              </motion.h3>
              {info.details ? info.details.map((detail, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.12 + 0.5 + i * 0.1 }}
                  className="text-muted-foreground text-sm"
                >
                  {detail}
                </motion.p>
              )) : info.detailKeys?.map((key, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.12 + 0.5 + i * 0.1 }}
                  className="text-muted-foreground text-sm"
                >
                  {t(key)}
                </motion.p>
              ))}
              {info.action && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.12 + 0.6 }}
                >
                  <Button variant="ghost" size="sm" className="mt-3 text-gold hover:text-gold-light" asChild>
                    <a href={info.action} target={info.action.startsWith("http") ? "_blank" : undefined}>
                      {t("contact.contact")} →
                    </a>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="glass-card rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d761.2224830181115!2d46.81784653105932!3d24.829510434809464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2eff72d1287c77%3A0xd9be96be7b7637d!2z2YXYudix2LYg2YbYrtio2Ycg2KjZh9mI2KfZhiDZhNmE2LPZitin2LHYp9iq!5e0!3m2!1sen!2ssa!4v1766571743137!5m2!1sen!2ssa"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Bahwan Motors Location"
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center glow-gold"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4"
          >
            {t("contact.readyToExperience")}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground mb-8 max-w-xl mx-auto"
          >
            {t("contact.ctaDescription")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="gold" size="lg" asChild>
                <a href="tel:0533335911">
                  <Phone className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                  {t("contact.callNow")}
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="gold-outline" size="lg" asChild>
                <a href="https://snapchat.com/t/ALdWyHs7" target="_blank">
                  <SnapchatIcon className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                  {t("contact.snapchat")}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-display text-xl font-semibold text-foreground mb-6"
          >
            {t("contact.followSocial")}
          </motion.h4>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 rounded-full glass-card flex items-center justify-center transition-all duration-300 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
