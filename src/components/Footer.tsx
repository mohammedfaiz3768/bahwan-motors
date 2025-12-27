import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border/30 section-padding py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Bahwan Motors" className="h-20 w-auto" />
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#hero" className="hover:text-gold transition-colors">
              {t("nav.home")}
            </a>
            <a href="#vehicles" className="hover:text-gold transition-colors">
              {t("nav.vehicles")}
            </a>
            <a href="#about" className="hover:text-gold transition-colors">
              {t("nav.about")}
            </a>
            <a href="#contact" className="hover:text-gold transition-colors">
              {t("nav.contact")}
            </a>
          </div>

          <p className="text-sm text-muted-foreground">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
