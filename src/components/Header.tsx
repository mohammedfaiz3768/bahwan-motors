import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Globe, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t("nav.home"), href: "#hero" },
    { name: t("nav.vehicles"), href: "#vehicles" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 safe-area-inset"
    >
      <div className="glass-dark section-padding">
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Bahwan Motors" className="h-12 md:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-gold transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-foreground/80 hover:text-gold transition-colors px-3 py-2 rounded-full border border-border/50 hover:border-gold/50"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium text-sm">{i18n.language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
            <a
              href="tel:0533335911"
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">0533335911</span>
            </a>
            <Button
              onClick={() => window.location.href = "tel:0533335911"}
              variant="gold" size="sm">
              {t("nav.enquireNow")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl md:hidden flex flex-col pt-24 px-6"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="text-2xl font-display font-medium text-foreground hover:text-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="h-px bg-border/50 my-2" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t("nav.language")}</span>
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 text-foreground font-medium px-4 py-2 rounded-full border border-border"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{i18n.language === 'ar' ? 'English' : 'العربية'}</span>
                  </button>
                </div>

                <a
                  href="tel:0533335911"
                  className="flex items-center justify-between text-gold text-lg font-medium"
                >
                  <span className="text-foreground">{t("nav.contact")}</span>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>0533335911</span>
                  </div>
                </a>

                <Button variant="gold" size="lg" className="w-full mt-4" onClick={() => window.location.href = "tel:0533335911"}>
                  {t("nav.enquireNow")}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
