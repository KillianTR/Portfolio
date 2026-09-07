import { useState } from "react";
import {
  FiDownload,
  FiMail,
  FiLinkedin,
  FiGithub,
  FiCheck,
  FiMapPin,
  FiArrowDown,
} from "react-icons/fi";
import { SiPatreon } from "react-icons/si";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

function Hero({ onOpenCvModal }) {
  const [copied, setCopied] = useState(false);
  const { lang } = useApp();
  const t = translations[lang] || translations.es;

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("killiantorrell@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="hero" id="inicio">
      {/* Badge de Disponibilidad */}
      <div className="hero-top-badges">
        <span className="status-badge-pulse">
          <span className="pulse-dot"></span>
          {t.hero.status}
        </span>
      </div>

      <div className="hero-main-layout">
        <div className="hero-info-content">
          <p className="hero-kicker">{t.hero.kicker}</p>

          <h1 className="hero-title">
            <span className="hero-name-bold">Killian</span>{" "}
            <span className="hero-name-light">Torrell Fernández</span>
          </h1>

          <p className="hero-subtitle">{t.hero.subtitle}</p>

          {/* Botones Principales */}
          <div className="hero-cta">
            <button
              onClick={onOpenCvModal}
              className="btn-primary btn-hero-primary"
              aria-label="Descargar currículum vitae en PDF"
            >
              <FiDownload style={{ marginRight: 8, fontSize: "1.1rem" }} />
              {t.hero.ctaCv}
            </button>

            <a href="#contacto" className="btn-secondary">
              <FiMail style={{ marginRight: 6 }} />
              {t.hero.ctaContact}
            </a>

            <a href="#experiencia" className="btn-secondary">
              <FiArrowDown style={{ marginRight: 6 }} />
              {t.hero.ctaExp}
            </a>
          </div>

          {/* Iconos de acceso directo rápido */}
          <div className="hero-social-strip">
            <a
              href="https://www.linkedin.com/in/killiantorrell/"
              target="_blank"
              rel="noreferrer"
              className="hero-social-pill"
              title="Perfil de LinkedIn"
            >
              <FiLinkedin style={{ color: "#0a66c2", marginRight: 6 }} />
              LinkedIn
            </a>

            <a
              href="https://github.com/KillianTR"
              target="_blank"
              rel="noreferrer"
              className="hero-social-pill"
              title="Repositorios en GitHub"
            >
              <FiGithub style={{ color: "#e5e7eb", marginRight: 6 }} />
              GitHub
            </a>

            <a
              href="https://www.patreon.com"
              target="_blank"
              rel="noreferrer"
              className="hero-social-pill"
              title="Software en Patreon"
            >
              <SiPatreon style={{ color: "#ff424d", marginRight: 6 }} />
              Patreon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;