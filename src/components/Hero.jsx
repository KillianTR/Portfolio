import {
  FiDownload,
  FiLinkedin,
  FiGithub,
  FiArrowUpRight,
} from "react-icons/fi";
import { SiPatreon, SiDiscord } from "react-icons/si";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

function Hero({ onOpenCvModal }) {
  const { lang } = useApp();
  const t = translations[lang] || translations.es;

  const snapshots = [
    {
      title: "PitWindow (Microsoft Store)",
      category: "Flagship",
      image: "/pitwindow-preview.webp",
      link: "https://pitwindow.app",
    },
    {
      title: "StradiFans (Simracing Paddock)",
      category: "Web App",
      image: "/stradifans-preview.svg",
      link: "https://stradifans.vercel.app",
    },
    {
      title: "DTM HUD PRO (Assetto Corsa)",
      category: "Telemetry",
      image: "/dtm-hud-preview.png",
      link: "https://www.patreon.com",
    },
    {
      title: "Pomodoro Timer (Vercel Style)",
      category: "Productivity",
      image: "/pomodoro-timer-screenshot.png",
      link: "https://pomodoro-timer-killiantr.vercel.app",
    },
    {
      title: "Taskbar Music Widget (Windows)",
      category: "C# .NET 8",
      image: "/taskbar-widget-demo.gif",
      link: "https://github.com/KillianTR/TaskbarMusicWidget",
    },
    {
      title: "Grand Line Vault (One Piece TCG)",
      category: "Full-Stack",
      image: "/grand-line-vault-preview.jpg",
      link: "https://grand-line-vault-tcg.vercel.app",
    },
  ];

  return (
    <section className="victor-hero" id="inicio">
      {/* Status Badge */}
      <div className="victor-hero-top">
        <span className="status-badge-pulse">
          <span className="pulse-dot"></span>
          {t.hero.status}
        </span>
      </div>

      {/* Main Intro Layout: Text + Avatar */}
      <div className="victor-hero-grid">
        <div className="victor-hero-content">
          <p className="victor-hero-kicker">{t.hero.kicker}</p>
          <h1 className="victor-hero-title">
            {t.hero.titlePrefix}{" "}
            <span className="victor-title-highlight">{t.hero.titleSuffix}</span>
          </h1>
          <p className="victor-hero-tagline">{t.hero.tagline}</p>
          <p className="victor-hero-bio">{t.hero.subtitle}</p>

          {/* Socials & Quick Actions Bar */}
          <nav aria-label="Enlaces rápidos" className="victor-social-strip">
            <a
              href="https://github.com/KillianTR"
              target="_blank"
              rel="noreferrer"
              className="victor-pill-btn"
            >
              <FiGithub className="pill-icon" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/killiantorrell/"
              target="_blank"
              rel="noreferrer"
              className="victor-pill-btn"
            >
              <FiLinkedin className="pill-icon" style={{ color: "#0a66c2" }} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://pitwindow.app"
              target="_blank"
              rel="noreferrer"
              className="victor-pill-btn highlight-pitwindow"
            >
              <span className="pill-star">★</span>
              <span>PitWindow</span>
              <FiArrowUpRight className="pill-arrow" />
            </a>

            <a
              href="https://stradifans.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="victor-pill-btn"
            >
              <span className="pill-dot orange"></span>
              <span>StradiFans</span>
              <FiArrowUpRight className="pill-arrow" />
            </a>

            <a
              href="https://discord.gg/MJmPrC2sNZ"
              target="_blank"
              rel="noreferrer"
              className="victor-pill-btn highlight-discord"
            >
              <SiDiscord className="pill-icon" style={{ color: "#9d8df1" }} />
              <span>Discord</span>
              <FiArrowUpRight className="pill-arrow" />
            </a>

            <a
              href="https://www.patreon.com"
              target="_blank"
              rel="noreferrer"
              className="victor-pill-btn"
            >
              <SiPatreon className="pill-icon" style={{ color: "#ff424d" }} />
              <span>Patreon</span>
            </a>

            <button
              onClick={onOpenCvModal}
              className="victor-pill-btn cv-pill"
              title="Descargar CV en PDF"
            >
              <FiDownload style={{ marginRight: 6 }} />
              <span>CV (PDF)</span>
            </button>
          </nav>
        </div>

        {/* Avatar Profile */}
        <div className="victor-hero-avatar-wrap">
          <div className="victor-avatar-card">
            <img
              src="/KTR-logo.png"
              alt="Killian Torrell"
              className="victor-avatar-img"
            />
            <div className="victor-avatar-halo" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      {/* Snapshot Scroller / Marquee Showcase */}
      <div className="victor-scroller-wrap" aria-label="Galería de proyectos">
        <div className="victor-scroller-track">
          <div className="victor-scroller-group">
            {snapshots.map((item, idx) => (
              <a
                key={`snap-1-${idx}`}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="victor-scroller-card"
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="victor-scroller-overlay">
                  <span className="victor-scroller-badge">{item.category}</span>
                  <span className="victor-scroller-name">{item.title}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="victor-scroller-group" aria-hidden="true">
            {snapshots.map((item, idx) => (
              <a
                key={`snap-2-${idx}`}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                tabIndex="-1"
                className="victor-scroller-card"
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="victor-scroller-overlay">
                  <span className="victor-scroller-badge">{item.category}</span>
                  <span className="victor-scroller-name">{item.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
