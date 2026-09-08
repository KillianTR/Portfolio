import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

export default function ScrollFeatures() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { lang } = useApp();
  const t = translations[lang] || translations.es;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress =
        scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0;

      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 280);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Barra superior indicadora de progreso de lectura */}
      <div
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Botón flotante para subir arriba */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`back-to-top-btn ${showScrollTop ? "visible" : ""}`}
        aria-label={t.nav?.backToTop || "Volver arriba"}
        title={t.nav?.backToTop || "Volver arriba"}
      >
        <FiArrowUp className="back-to-top-icon" />
      </button>
    </>
  );
}

