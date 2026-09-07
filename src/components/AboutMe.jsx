import { FiUser, FiCpu, FiCamera, FiTarget, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

function AboutMe() {
  const { lang } = useApp();
  const t = translations[lang] || translations.es;

  return (
    <section className="section about-me-section" id="sobre-mi">
      <div className="section-header-left">
        <div className="section-kicker">
          <FiUser />
          <span>{t.aboutMe.kicker}</span>
        </div>
        <h2 className="projects-title-v2">{t.aboutMe.title}</h2>
        <p className="projects-description-v2">{t.aboutMe.subtitle}</p>
      </div>

      <div className="about-me-grid">
        {/* Bio Principal */}
        <div className="about-me-card about-me-bio-card">
          <div className="about-me-avatar-row">
            <div>
              <h3 className="about-me-name">Killian Torrell Fernández</h3>
              <p className="about-me-location">
                📍 {lang === "es" ? "Reus, Tarragona (Cataluña, España)" : "Reus, Tarragona (Catalunya, Espanya)"}
              </p>
              <span className="about-me-status-chip">
                🟢 {lang === "es" ? "Disponible para trabajar" : "Disponible per treballar"}
              </span>
            </div>
          </div>

          <div className="about-me-text">
            <p>{t.aboutMe.p1}</p>
            <p>{t.aboutMe.p2}</p>
            <p>{t.aboutMe.p3}</p>
          </div>
        </div>

        {/* Pilares & Qué me gusta */}
        <div className="about-me-interests-column">
          <div className="interest-item-card">
            <div className="interest-icon-wrap" style={{ background: "rgba(56, 189, 248, 0.12)", color: "#38bdf8" }}>
              <FiCpu />
            </div>
            <div>
              <h4>{t.aboutMe.interests.hardware}</h4>
              <p>{t.aboutMe.interests.hardwareDesc}</p>
              <Link to="/recomendaciones" className="interest-link">
                {t.aboutMe.interests.hardwareLink} <FiArrowRight />
              </Link>
            </div>
          </div>

          <div className="interest-item-card">
            <div className="interest-icon-wrap" style={{ background: "rgba(244, 63, 94, 0.12)", color: "#f43f5e" }}>
              <FiTarget />
            </div>
            <div>
              <h4>{t.aboutMe.interests.automation}</h4>
              <p>{t.aboutMe.interests.automationDesc}</p>
            </div>
          </div>

          <div className="interest-item-card">
            <div className="interest-icon-wrap" style={{ background: "rgba(168, 85, 247, 0.12)", color: "#a855f7" }}>
              <FiCamera />
            </div>
            <div>
              <h4>{t.aboutMe.interests.photo}</h4>
              <p>{t.aboutMe.interests.photoDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
