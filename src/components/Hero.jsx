import {
  FiDownload,
  FiLinkedin,
  FiGithub,
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
      title: "DTM HUD & GT Challenge (Assetto Corsa)",
      category: "Telemetry",
      image: "/dtm-hud-preview.png",
      link: "https://www.patreon.com/Vznum/posts/minimalist-hud-3-173945006",
    },
    {
      title: "Karting Calafat (Circuito 3D)",
      category: "Blender 3D",
      image: "/karting-calafat-preview.jpg",
      link: "https://www.overtake.gg/downloads/karting-calafat.88434/",
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

          {/* Socials & Quick Actions Bar (1:1 con victorinpublic.com) */}
          <nav aria-label="Socials" className="victor-social-strip">
            <a
              href="https://discord.gg/MJmPrC2sNZ"
              target="_blank"
              rel="noreferrer"
              aria-label="Community Discord"
              title="Discord"
              className="victor-social-btn highlight-discord"
            >
              <SiDiscord className="victor-social-icon" style={{ color: "#5865F2" }} />
            </a>

            <a
              href="https://github.com/KillianTR"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub @KillianTR"
              title="GitHub"
              className="victor-social-btn"
            >
              <FiGithub className="victor-social-icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/killiantorrell/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn @killiantorrell"
              title="LinkedIn"
              className="victor-social-btn"
            >
              <FiLinkedin className="victor-social-icon" style={{ color: "#0a66c2" }} />
            </a>

            <a
              href="https://www.patreon.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Patreon"
              title="Patreon"
              className="victor-social-btn"
            >
              <SiPatreon className="victor-social-icon" style={{ color: "#ff424d" }} />
            </a>

            <a
              href="https://pitwindow.app"
              target="_blank"
              rel="noreferrer"
              aria-label="PitWindow (Microsoft Store)"
              title="PitWindow (pitwindow.app)"
              className="victor-social-btn highlight-pitwindow"
            >
              <img
                src="/pitwindow-logo.webp"
                alt="PitWindow"
                className="victor-social-img"
              />
            </a>

            <button
              onClick={onOpenCvModal}
              className="victor-social-btn cv-btn"
              aria-label="Descargar CV en PDF"
              title="Descargar CV (PDF)"
            >
              <FiDownload className="victor-social-icon" />
            </button>
          </nav>
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
