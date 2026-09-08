import { useState, useEffect } from "react";
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
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="back-to-top-icon"
          aria-hidden="true"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </>
  );
}
