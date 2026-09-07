import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiDownload, FiMenu, FiX, FiGlobe, FiSun, FiMoon } from "react-icons/fi";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

function Navbar({ onOpenCvModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { lang, toggleLang, theme, toggleTheme } = useApp();
  const t = translations[lang] || translations.es;

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 15);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (hash) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + hash);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
          <img
            src="/KTR-logo.png"
            alt="Logo Killian Torrell"
            className="navbar-logo-img"
          />
          <span className="navbar-brand-text">Killian Torrell</span>
        </Link>

        {/* Enlaces de escritorio */}
        <nav className="navbar-links">
          <button onClick={() => handleNavClick("#inicio")} className="nav-text-btn">
            {t.nav.home}
          </button>
          <button onClick={() => handleNavClick("#experiencia")} className="nav-text-btn">
            {t.nav.experience}
          </button>
          <button onClick={() => handleNavClick("#proyectos")} className="nav-text-btn">
            {t.nav.projects}
          </button>
          <button onClick={() => handleNavClick("#formacion")} className="nav-text-btn">
            {t.nav.education}
          </button>
          <button onClick={() => handleNavClick("#sobre-mi")} className="nav-text-btn">
            {t.nav.about}
          </button>
          <Link
            to="/recomendaciones"
            className={`nav-link-route ${location.pathname === "/recomendaciones" ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.recommendations}
          </Link>
          <button onClick={() => handleNavClick("#contacto")} className="nav-text-btn">
            {t.nav.contact}
          </button>
        </nav>

        {/* Acciones: Selector de Idioma (Mundo), Interruptor Modo Oscuro/Claro y Descargar CV */}
        <div className="navbar-actions">
          {/* Selector de idioma con icono del mundo */}
          <button
            onClick={toggleLang}
            className="btn-header-control btn-lang-toggle"
            title={lang === "es" ? "Canviar a Català" : "Cambiar a Castellano"}
            aria-label="Cambiar idioma"
          >
            <FiGlobe className="header-control-icon" />
            <span className="lang-code-text">{lang === "es" ? "ES" : "CA"}</span>
          </button>

          {/* Interruptor Modo Claro / Modo Oscuro */}
          <button
            onClick={toggleTheme}
            className="btn-header-control btn-theme-toggle"
            title={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            aria-label="Cambiar modo de color"
          >
            {theme === "dark" ? (
              <FiSun className="header-control-icon theme-sun-icon" />
            ) : (
              <FiMoon className="header-control-icon theme-moon-icon" />
            )}
          </button>

          {onOpenCvModal && (
            <button
              onClick={onOpenCvModal}
              className="btn-cv-navbar"
              aria-label="Descargar currículum"
            >
              <FiDownload style={{ marginRight: 6 }} />
              {t.nav.cvBtn}
            </button>
          )}

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown-menu">
          {/* Controles móvil de idioma y tema */}
          <div className="mobile-controls-row">
            <button onClick={toggleLang} className="mobile-control-pill">
              <FiGlobe style={{ marginRight: 6 }} />
              <span>Idioma: {lang === "es" ? "Castellano (ES)" : "Català (CA)"}</span>
            </button>

            <button onClick={toggleTheme} className="mobile-control-pill">
              {theme === "dark" ? (
                <>
                  <FiSun style={{ marginRight: 6, color: "#facc15" }} />
                  <span>Modo claro</span>
                </>
              ) : (
                <>
                  <FiMoon style={{ marginRight: 6, color: "#38bdf8" }} />
                  <span>Modo oscuro</span>
                </>
              )}
            </button>
          </div>

          <button onClick={() => handleNavClick("#inicio")} className="mobile-nav-link">
            {t.nav.home}
          </button>
          <button onClick={() => handleNavClick("#experiencia")} className="mobile-nav-link">
            {t.nav.experience}
          </button>
          <button onClick={() => handleNavClick("#proyectos")} className="mobile-nav-link">
            {t.nav.projects}
          </button>
          <button onClick={() => handleNavClick("#formacion")} className="mobile-nav-link">
            {t.nav.education}
          </button>
          <button onClick={() => handleNavClick("#sobre-mi")} className="mobile-nav-link">
            {t.nav.about}
          </button>
          <Link
            to="/recomendaciones"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.recommendations}
          </Link>
          <button onClick={() => handleNavClick("#contacto")} className="mobile-nav-link">
            {t.nav.contact}
          </button>

          {onOpenCvModal && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="btn-primary mobile-cv-btn"
            >
              <FiDownload style={{ marginRight: 8 }} />
              {t.nav.cvBtn}
            </button>
          )}
        </div>
      )}
    </header>
  );
}

export default Navbar;
