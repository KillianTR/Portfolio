import { FiGithub, FiLinkedin, FiMail, FiDownload, FiHeart } from "react-icons/fi";
import { SiPatreon } from "react-icons/si";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

function Footer({ onOpenCvModal }) {
  const { lang } = useApp();
  const t = translations[lang] || translations.es;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src="/KTR-logo.png" alt="Logo Killian" className="footer-logo-img" />
            <span className="footer-name">Killian Torrell Fernández</span>
          </div>
          <p className="footer-tagline">
            {lang === "es"
              ? "Técnico Informático & Desarrollador Web Full Stack • Reus, Tarragona."
              : "Tècnic Informàtic & Desenvolupador Web Full Stack • Reus, Tarragona."}
          </p>
        </div>

        <div className="footer-nav-col">
          <h4>{lang === "es" ? "Navegación" : "Navegació"}</h4>
          <a href="#inicio">{t.nav.home}</a>
          <a href="#experiencia">{t.nav.experience}</a>
          <a href="#proyectos">{t.nav.projects}</a>
          <a href="#formacion">{t.nav.education}</a>
          <a href="#sobre-mi">{t.nav.about}</a>
          <Link to="/recomendaciones">{t.nav.recommendations}</Link>
        </div>

        <div className="footer-social-col">
          <h4>{lang === "es" ? "Contacto & Redes" : "Contacte & Xarxes"}</h4>
          <div className="footer-social-links">
            <a
              href="https://www.linkedin.com/in/killiantorrell/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin style={{ color: "#0a66c2", marginRight: 6 }} /> LinkedIn
            </a>
            <a
              href="https://github.com/KillianTR"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub style={{ color: "var(--text-main)", marginRight: 6 }} /> GitHub
            </a>
            <a
              href="https://www.patreon.com"
              target="_blank"
              rel="noreferrer"
            >
              <SiPatreon style={{ color: "#ff424d", marginRight: 6 }} /> Patreon
            </a>
            <a href="mailto:killiantorrell@gmail.com">
              <FiMail style={{ color: "#38bdf8", marginRight: 6 }} /> killiantorrell@gmail.com
            </a>
          </div>

          {onOpenCvModal && (
            <button onClick={onOpenCvModal} className="footer-cv-btn">
              <FiDownload style={{ marginRight: 6 }} /> {t.contact.cvBoxBtn}
            </button>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Killian Torrell Fernández. React & Vite.</p>
        <p className="footer-motto">
          {lang === "es" ? '"Mejorando un 1% cada día"' : '"Millorant un 1% cada dia"'}
          <FiHeart style={{ color: "#f43f5e", marginLeft: 6, verticalAlign: "middle" }} />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
