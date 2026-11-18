import { useState } from "react";
import {
  FiExternalLink,
  FiGithub,
  FiDollarSign,
  FiLayers,
  FiLock,
  FiArrowUpRight,
  FiMonitor,
  FiCheckCircle,
} from "react-icons/fi";
import { SiPatreon } from "react-icons/si";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

const categories = {
  es: [
    { id: "all", label: "Todos los proyectos" },
    { id: "featured", label: "⭐ Destacados" },
    { id: "simracing", label: "Simracing & Desktop" },
    { id: "web", label: "Web & Apps" },
    { id: "systems", label: "Sistemas & NDA" },
  ],
  ca: [
    { id: "all", label: "Tots els projectes" },
    { id: "featured", label: "⭐ Destacats" },
    { id: "simracing", label: "Simracing & Desktop" },
    { id: "web", label: "Web & Apps" },
    { id: "systems", label: "Sistemes & NDA" },
  ],
};

const softwareProducts = [
  {
    id: "pitwindow",
    title: "PitWindow · Modern Sim Racing Overlays",
    category: "simracing",
    isFlagship: true,
    isFeatured: true,
    accentColor: "#e10600",
    badge: {
      es: "⭐ PROYECTO ESTRELLA · MICROSOFT STORE",
      ca: "⭐ PROJECTE ESTRELLA · MICROSOFT STORE",
    },
    badgeType: "flagship",
    platformBadge: "Windows 10/11 · Cloudflare · VR · OBS",
    description: {
      es: "Mi proyecto más ambicioso e importante hasta la fecha. Suite profesional de más de 31 overlays estilo TV broadcast para simuladores (iRacing, Le Mans Ultimate, ACC, Assetto Corsa y RaceRoom). Incluye leaderboard por clases, cálculo de doblados en tiempo real, rival check, calculadora de combustible en pit stop, telemetría y soporte para OBS Studio y cascos VR. Publicado oficialmente en la Microsoft Store y alojado en la red global de Cloudflare.",
      ca: "El meu projecte més ambiciós i important fins a la data. Suite professional de més de 31 overlays estil retransmissió de TV per a simuladors (iRacing, Le Mans Ultimate, ACC, Assetto Corsa i RaceRoom). Inclou leaderboard per classes, càlcul de doblats en temps real, rival check, calculadora de combustible a pit stop, telemetria i suport per a OBS Studio i ulleres VR. Publicat oficialment a la Microsoft Store i allotjat a la xarxa global de Cloudflare.",
    },
    image: "/pitwindow-preview.webp",
    logo: "/pitwindow-logo.webp",
    tech: ["C#", "Windows 10/11", "Cloudflare", "DirectX", "OBS Studio", "VR Support", "iRacing API", "Simracing"],
    demoUrl: "https://pitwindow.app",
    demoText: { es: "Web Oficial (pitwindow.app)", ca: "Web Oficial (pitwindow.app)" },
    storeUrl: "https://apps.microsoft.com/detail/9p0k8w20658q",
    storeText: { es: "Microsoft Store", ca: "Microsoft Store" },
  },
  {
    id: "stradifans",
    title: "StradiFans · The Simracing Paddock Fan App",
    category: "web",
    isFeatured: true,
    accentColor: "#ea6f18",
    badge: {
      es: "COMUNIDAD & SIMRACING · VERCEL",
      ca: "COMUNITAT & SIMRACING · VERCEL",
    },
    badgeType: "highlight",
    platformBadge: "Twitch API · Web Audio · Vercel",
    description: {
      es: "Plataforma web fan interactiva para la comunidad de simracing y los directos de Twitch de Stradi. Incluye detector de directos sincronizado con la API de Twitch, minijuego de reacción con semáforo oficial de 5 luces ('Ranking de salidas'), visor de carreras de YouTube, cámara onboard, 'Stradipedia' con el lore y personajes del chat por licencia, 'Garaje' interactivo y 'Radio' / soundboard con frases míticas listas para reproducir y descargar.",
      ca: "Plataforma web fan interactiva per a la comunitat de simracing i els directes de Twitch de Stradi. Inclou detector de directes sincronitzat amb l'API de Twitch, minijoc de reacció amb semàfor oficial de 5 llums ('Rànquing de sortides'), visor de curses de YouTube, càmera onboard, 'Stradipedia' amb el lore i personatges del xat per llicència, 'Garatge' interactiu i 'Ràdio' / soundboard amb frases mítiques llestes per reproduir i descarregar.",
    },
    image: "/stradifans-preview.svg",
    logo: "/stradifans-favicon.png",
    tech: ["React", "Vite", "Tailwind CSS", "Twitch API", "Web Audio API", "YouTube Data", "Vercel"],
    demoUrl: "https://stradifans.vercel.app",
    demoText: { es: "Ver Web (stradifans.vercel.app)", ca: "Veure Web (stradifans.vercel.app)" },
  },
  {
    id: "grandlinevault",
    title: "Grand Line Vault — One Piece TCG Tracker",
    category: "web",
    isFeatured: true,
    accentColor: "#f59e0b",
    badge: {
      es: "FULL-STACK · SUPABASE",
      ca: "FULL-STACK · SUPABASE",
    },
    badgeType: "default",
    platformBadge: "Supabase · PostgreSQL · React 19",
    description: {
      es: "Organizador y archivador digital interactivo estilo Vault X para coleccionistas de One Piece TCG. Diseñado con carpetas personalizadas Drag & Drop, páginas de 9 y 12 bolsillos con efectos Web Audio, catálogo completo con filtros avanzados, valoración económica en tiempo real con CardTrader, y sincronización en la nube mediante Supabase (PostgreSQL, autenticación y RLS).",
      ca: "Organitzador i arxivador digital interactiu estil Vault X per a col·leccionistes d'One Piece TCG. Dissenyat amb carpetes personalitzades Drag & Drop, pàgines de 9 i 12 butxaques amb efectes Web Audio, catàleg oficial amb filtres avançats, valoració econòmica en temps real amb CardTrader, i sincronització al núvol mitjançant Supabase (PostgreSQL, autenticació i RLS).",
    },
    image: "/grand-line-vault-preview.jpg",
    tech: ["React 19", "Tailwind CSS v4", "Supabase", "PostgreSQL", "Vite", "Web Audio API", "CardTrader"],
    demoUrl: "https://grand-line-vault-tcg.vercel.app",
    demoText: { es: "Ver Web", ca: "Veure Web" },
    githubUrl: "https://github.com/KillianTR/one-piece-tcg",
  },
  {
    id: "pomodoro",
    title: "Pomodoro Timer App",
    category: "web",
    isFeatured: true,
    accentColor: "#10b981",
    badge: {
      es: "PRODUCTIVIDAD · MINIMALISTA",
      ca: "PRODUCTIVITAT · MINIMALISTA",
    },
    badgeType: "default",
    platformBadge: "Next.js · TypeScript · Vercel",
    description: {
      es: "Temporizador de productividad de alto rendimiento con estética minimalista estilo Vercel. Diseñado con React Hooks, persistencia en localStorage, efectos visuales con transparencias CSS y animaciones fluidas para sesiones de foco profundo.",
      ca: "Temporitzador de productivitat d'alt rendiment amb estètica minimalista estil Vercel. Dissenyat amb React Hooks, persistència a localStorage, efectes visuals amb transparències CSS i animacions fluides per a sessions de focus profund.",
    },
    image: "/pomodoro-timer-screenshot.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    demoUrl: "https://pomodoro-timer-killiantr.vercel.app",
    demoText: { es: "Ver Web", ca: "Veure Web" },
    githubUrl: "https://github.com/KillianTR/Pomodoro-Timer",
  },
  {
    id: "dtmhud",
    title: "DTM HUD PRO / Simracing Telemetry",
    category: "simracing",
    isFeatured: false,
    accentColor: "#ff424d",
    badge: {
      es: "PATREON · FREEMIUM SOFTWARE",
      ca: "PATREON · FREEMIUM SOFTWARE",
    },
    badgeType: "highlight",
    platformBadge: "Lua · Assetto Corsa CSP · Patreon",
    description: {
      es: "Interfaz y HUD de telemetría en tiempo real estilo DTM desarrollado en Lua y CSP (Custom Shaders Patch) para Assetto Corsa. Lanzado con modelo freemium: versión Lite gratuita para la comunidad simracing y versión Pro disponible en Patreon.",
      ca: "Interfície i HUD de telemetria en temps real estil DTM desenvolupat en Lua i CSP (Custom Shaders Patch) per a Assetto Corsa. Llançat amb model freemium: versió Lite gratuïta per a la comunitat simracing i versió Pro disponible a Patreon.",
    },
    image: "/dtm-hud-preview.png",
    tech: ["Lua", "CSP", "UI Design", "Telemetry", "Assetto Corsa", "Patreon"],
    demoUrl: "https://www.patreon.com",
    demoText: { es: "Ver en Patreon", ca: "Veure a Patreon" },
    demoIcon: <SiPatreon style={{ color: "#ff424d" }} />,
    isPatreon: true,
  },
  {
    id: "taskbarwidget",
    title: "Taskbar Music Widget",
    category: "simracing",
    isFeatured: false,
    accentColor: "#0284c7",
    badge: {
      es: "WINDOWS NATIVE · .NET 8",
      ca: "WINDOWS NATIU · .NET 8",
    },
    badgeType: "default",
    platformBadge: "C# · WPF · Win32 API",
    description: {
      es: "Widget nativo para la barra de tareas de Windows 10/11 que muestra en tiempo real la música en reproducción (Spotify, YouTube, navegadores) con controles multimedia, ajuste de volumen mediante rueda del ratón, flyout flotante con carátula y consumo mínimo (<0.1% CPU).",
      ca: "Widget natiu per a la barra de tasques de Windows 10/11 que mostra en temps real la música en reproducció (Spotify, YouTube, navegadors) amb controls multimèdia, ajust de volum mitjançant roda del ratolí, flyout flotant amb caràtula i consum mínim (<0.1% CPU).",
    },
    image: "/taskbar-widget-demo.gif",
    tech: ["C#", ".NET 8", "WPF", "Win32 API", "WinRT", "Spotify API"],
    demoUrl: "https://github.com/KillianTR/TaskbarMusicWidget",
    demoText: { es: "Ver Proyecto", ca: "Veure Projecte" },
    githubUrl: "https://github.com/KillianTR/TaskbarMusicWidget",
  },
];

const corporateSystems = [
  {
    title: "Plataforma XML AEQT",
    category: "systems",
    badge: { es: "Sector Químico Tarragona", ca: "Sector Químic Tarragona" },
    badgeType: "default",
    description: {
      es: "Plugin corporativo a medida desarrollado en WordPress y PHP para la Asociación de Empresas Químicas de Tarragona (AEQT). Automatiza la gestión, publicación y filtrado de ofertas y demandas de empleo sincronizadas mediante estructuras XML.",
      ca: "Plugin corporatiu a mida desenvolupat en WordPress i PHP per a l'Associació d'Empreses Químiques de Tarragona (AEQT). Automatitza la gestió, publicació i filtratge d'ofertes i demandes de feina sincronitzades mitjançant estructures XML.",
    },
    image: "/aeqt-xml-preview.svg",
    tech: ["WordPress", "PHP", "XML", "MySQL", "JavaScript", "Gestión Empleo"],
    isConfidential: true,
    confidentialNotice: {
      es: "Código corporativo confidencial (propiedad de AEQT). No publicado en GitHub por contener convenios y estructuras reservadas.",
      ca: "Codi corporatiu confidencial (propietat d'AEQT). No publicat a GitHub per contenir convenis i estructures reservades.",
    },
  },
  {
    title: {
      es: "Dashboard de Convenios en Python",
      ca: "Dashboard de Convenis amb Python",
    },
    category: "systems",
    badge: { es: "Automatización & Scripting", ca: "Automatització & Scripting" },
    badgeType: "default",
    description: {
      es: "Script avanzado en Python para la verificación y automatización del control de fechas de vencimiento en convenios institucionales. Procesa hojas de cálculo Excel complejas y genera avisos automatizados que ahorran horas de supervisión manual.",
      ca: "Script avançat en Python per a la verificació i automatització del control de dates de venciment en convenis institucionals. Processa fulls de càlcul Excel complexos i genera avisos automatitzats que estalvien hores de supervisió manual.",
    },
    image: "/python-convenios-preview.svg",
    tech: ["Python", "Pandas / Openpyxl", "Excel Automation", "PowerShell", "Reporting"],
    isConfidential: true,
    confidentialNotice: {
      es: "Script interno para auditoría. Código reservado bajo confidencialidad por procesar convenios institucionales y datos protegidos.",
      ca: "Script intern per a auditoria. Codi reservat sota confidencialitat per processar convenis institucionals i dades protegides.",
    },
  },
  {
    title: {
      es: "Software de Control de Stock e Incidencias",
      ca: "Software de Control de Stock i Incidències",
    },
    category: "systems",
    badge: { es: "Herramienta Interna", ca: "Eina Interna" },
    badgeType: "default",
    description: {
      es: "Programas desarrollados ad-hoc durante etapas en MediaMarkt y Princess Hotels para optimizar procesos internos: control de inventario de repuestos en taller técnico y sistema de gestión/seguimiento de tickets de soporte con Oracle SQL.",
      ca: "Programes desenvolupats ad-hoc durant etapes a MediaMarkt i Princess Hotels per optimitzar processos interns: control d'inventari de recanvis al taller tècnic i sistema de gestió/seguiment d'incidències de suport amb Oracle SQL.",
    },
    image: "/stock-incidencias-preview.svg",
    tech: ["Oracle SQL", "Gestión de Stock", "Helpdesk N1/N2", "VLANs"],
    isConfidential: true,
    confidentialNotice: {
      es: "Herramientas internas desarrolladas para taller y soporte IT (MediaMarkt / Princess). Código no público por ser propiedad de las empresas.",
      ca: "Eines internes desenvolupades per a taller i suport TI (MediaMarkt / Princess). Codi no públic per ser propietat de les empreses.",
    },
  },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { lang } = useApp();
  const t = translations[lang] || translations.es;
  const currentCategories = categories[lang] || categories.es;

  // Filter software products
  const filteredProducts = softwareProducts.filter((p) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "featured") return p.isFeatured;
    if (activeCategory === "simracing") return p.category === "simracing";
    if (activeCategory === "web") return p.category === "web";
    return false;
  });

  const showCorporate = activeCategory === "all" || activeCategory === "systems";

  return (
    <section className="section projects-section" id="proyectos">
      <div className="section-header-left">
        <div className="section-kicker">
          <FiLayers />
          <span>{t.projects.kicker}</span>
        </div>
        <h2 className="projects-title-v2">{t.projects.title}</h2>
        <p className="projects-description-v2">{t.projects.subtitle}</p>
      </div>

      {/* Filtros de categoría estilo Victor / Builder */}
      <div className="projects-filter-bar">
        {currentCategories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-chip ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid de productos principales */}
      <div className="victor-products-grid">
        {filteredProducts.map((project) => {
          const projectTitle =
            typeof project.title === "object"
              ? project.title[lang] || project.title.es
              : project.title;

          return (
            <article
              key={project.id}
              className={`victor-product-card ${project.isFlagship ? "flagship-card" : ""}`}
              style={{ "--project-accent": project.accentColor || "#38bdf8" }}
            >
              {/* Encabezado de la tarjeta con icono/logo y badges */}
              <div className="victor-card-header">
                <div className="victor-card-brand">
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={projectTitle}
                      className="victor-card-logo"
                      loading="lazy"
                    />
                  ) : (
                    <div className="victor-card-icon-placeholder">
                      <FiMonitor />
                    </div>
                  )}
                  <div>
                    <span className="victor-platform-badge">{project.platformBadge}</span>
                    <h3 className="victor-card-title">
                      <a href={project.demoUrl || project.githubUrl} target="_blank" rel="noreferrer">
                        {projectTitle}
                        <FiArrowUpRight className="victor-title-arrow" />
                      </a>
                    </h3>
                  </div>
                </div>

                {project.badge && (
                  <span className={`victor-status-pill ${project.badgeType}`}>
                    {project.badge[lang] || project.badge.es}
                  </span>
                )}
              </div>

              {/* Imagen de preview / screenshot */}
              <div className="victor-card-preview-wrap">
                <img
                  src={project.image}
                  alt={`Captura de ${projectTitle}`}
                  className="victor-card-preview"
                  loading="lazy"
                />
              </div>

              {/* Descripción */}
              <p className="victor-card-desc">
                {project.description[lang] || project.description.es}
              </p>

              {/* Tags técnicos */}
              <div className="victor-card-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Acciones directas */}
              <div className="victor-card-actions">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-action-primary"
                  >
                    {project.demoIcon ? (
                      <span style={{ marginRight: "6px", display: "inline-flex" }}>
                        {project.demoIcon}
                      </span>
                    ) : (
                      <FiExternalLink style={{ marginRight: "6px" }} />
                    )}
                    {project.demoText[lang] || project.demoText.es}
                  </a>
                )}

                {project.storeUrl && (
                  <a
                    href={project.storeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-action-store"
                  >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" style={{ marginRight: "6px" }}>
                      <path d="M0 0h7v7H0zm9 0h7v7H9zm-9 9h7v7H0zm9 0h7v7H9z" />
                    </svg>
                    {project.storeText[lang] || project.storeText.es}
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-action-secondary"
                  >
                    <FiGithub style={{ marginRight: "6px" }} />
                    {t.projects.codeBtn}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Sección Corporativa & NDA */}
      {showCorporate && (
        <div className="corporate-systems-section">
          <div className="corporate-header">
            <div className="corporate-kicker">
              <FiLock style={{ marginRight: "6px" }} />
              <span>{t.projects.enterpriseTitle}</span>
            </div>
            <p className="corporate-subtitle">{t.projects.enterpriseSubtitle}</p>
          </div>

          <div className="corporate-grid">
            {corporateSystems.map((item, idx) => {
              const itemTitle =
                typeof item.title === "object"
                  ? item.title[lang] || item.title.es
                  : item.title;

              return (
                <div key={idx} className="corporate-card">
                  <div className="corporate-card-top">
                    <img src={item.image} alt={itemTitle} className="corporate-card-icon" />
                    <div>
                      <span className="corporate-badge">{item.badge[lang] || item.badge.es}</span>
                      <h4>{itemTitle}</h4>
                    </div>
                  </div>
                  <p className="corporate-desc">{item.description[lang] || item.description.es}</p>
                  <div className="corporate-tags">
                    {item.tech.map((t) => (
                      <span key={t} className="tech-tag mini">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="corporate-lock-note">
                    <FiLock style={{ marginRight: "6px", flexShrink: 0 }} />
                    <span>{item.confidentialNotice[lang] || item.confidentialNotice.es}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
