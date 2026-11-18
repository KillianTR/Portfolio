import { useState } from "react";
import {
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiLock,
  FiArrowUpRight,
} from "react-icons/fi";
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
    title: "PitWindow",
    category: "simracing",
    isFlagship: true,
    isFeatured: true,
    accentColor: "#e10600",
    statusBadge: {
      es: "FLAGSHIP",
      ca: "FLAGSHIP",
    },
    platformBadge: "Windows 10/11",
    description: {
      es: "Suite profesional de más de 31 overlays estilo TV broadcast para iRacing, LMU y simracing con VR y OBS.",
      ca: "Suite professional de més de 31 overlays estil retransmissió de TV per a iRacing, LMU i simracing amb VR i OBS.",
    },
    logo: "/pitwindow-logo.png",
    demoUrl: "https://pitwindow.app",
    demoText: { es: "Visitar pitwindow.app", ca: "Visitar pitwindow.app" },
    storeUrl: "https://apps.microsoft.com/detail/9p0k8w20658q",
    storeText: { es: "Microsoft Store", ca: "Microsoft Store" },
  },
  {
    id: "stradifans",
    title: "StradiFans",
    category: "web",
    isFeatured: true,
    accentColor: "#ea6f18",
    statusBadge: {
      es: "COMMUNITY",
      ca: "COMUNITAT",
    },
    platformBadge: "Web · Twitch API",
    description: {
      es: "Plataforma fan para la comunidad de simracing: datos en tiempo real con Twitch API, juegos interactivos, funciones del paddock y soundboard.",
      ca: "Plataforma fan per a la comunitat de simracing: dades en temps real amb Twitch API, jocs interactius, funcions del paddock i soundboard.",
    },
    logo: "/stradifans-favicon.png",
    demoUrl: "https://stradifans.vercel.app",
    demoText: { es: "Ver StradiFans", ca: "Veure StradiFans" },
  },
  {
    id: "dtmhud",
    title: "DTM HUD PRO & GT Challenge",
    category: "simracing",
    isFeatured: true,
    accentColor: "#facc15",
    statusBadge: {
      es: "FREEMIUM",
      ca: "FREEMIUM",
    },
    platformBadge: "Lua · Assetto Corsa",
    description: {
      es: "HUDs de telemetría en tiempo real: DTM HUD PRO y GT Challenge (HUD minimalista). Desarrollados en Lua para Assetto Corsa y monetizados en Patreon.",
      ca: "HUDs de telemetria en temps real: DTM HUD PRO i GT Challenge (HUD minimalista). Desenvolupats en Lua per a Assetto Corsa i monetitzats a Patreon.",
    },
    logo: "/dtm-logo-transparent.png",
    demoUrl: "https://www.patreon.com/Vznum/posts/minimalist-hud-3-173945006",
    demoText: { es: "Ver en Patreon", ca: "Veure a Patreon" },
  },
  {
    id: "kartingcalafat",
    title: "Karting Calafat",
    category: "simracing",
    isFeatured: true,
    accentColor: "#f97316",
    statusBadge: {
      es: "CIRCUITO 3D",
      ca: "CIRCUIT 3D",
    },
    platformBadge: "Blender · Assetto Corsa · Overtake",
    description: {
      es: "Mi primer circuito de carreras modelado en 3D en 3 semanas con Blender y físicas en Assetto Corsa. Publicado en Overtake.gg, la mayor comunidad de simracing del mundo.",
      ca: "El meu primer circuit de carreres modelat en 3D en 3 setmanes amb Blender i físiques a Assetto Corsa. Publicat a Overtake.gg, la major comunitat de simracing del món.",
    },
    logo: "/karting-calafat-logo.png",
    demoUrl: "https://www.overtake.gg/downloads/karting-calafat.88434/",
    demoText: { es: "Ver en Overtake.gg", ca: "Veure a Overtake.gg" },
  },
  {
    id: "pomodoro",
    title: "Pomodoro Timer",
    category: "web",
    isFeatured: true,
    accentColor: "#10b981",
    statusBadge: {
      es: "PRODUCTIVITY",
      ca: "PRODUCTIVITAT",
    },
    platformBadge: "Next.js · React 19",
    description: {
      es: "Temporizador de productividad de alto rendimiento con estética minimalista Vercel, persistencia en localStorage y atajos.",
      ca: "Temporitzador de productivitat d'alt rendiment amb estètica minimalista Vercel, persistència a localStorage i dreceres.",
    },
    logo: "/pomodoro-logo.svg",
    demoUrl: "https://pomodoro-timer-killiantr.vercel.app",
    demoText: { es: "Probar Pomodoro", ca: "Provar Pomodoro" },
    githubUrl: "https://github.com/KillianTR/Pomodoro-Timer",
  },
  {
    id: "taskbarwidget",
    title: "Taskbar Music Widget",
    category: "simracing",
    categories: ["simracing", "web"],
    isFeatured: true,
    accentColor: "#0284c7",
    statusBadge: {
      es: "OPEN SOURCE",
      ca: "OPEN SOURCE",
    },
    platformBadge: "C# · .NET 8 · Win32",
    description: {
      es: "Widget nativo para la barra de tareas de Windows 10/11 con flyout de música en reproducción y control con rueda del ratón.",
      ca: "Widget natiu per a la barra de tasques de Windows 10/11 amb flyout de música en reproducció i control amb roda del ratolí.",
    },
    logo: "/taskbar-widget-logo.svg",
    demoUrl: "https://github.com/KillianTR/TaskbarMusicWidget",
    demoText: { es: "Ver en GitHub", ca: "Veure a GitHub" },
    githubUrl: "https://github.com/KillianTR/TaskbarMusicWidget",
  },
  {
    id: "grandlinevault",
    title: "Grand Line Vault",
    category: "web",
    isFeatured: false,
    accentColor: "#f59e0b",
    statusBadge: {
      es: "EN PAUSA",
      ca: "EN PAUSA",
    },
    platformBadge: "Supabase · PostgreSQL",
    description: {
      es: "Archivador digital interactivo estilo Vault X para One Piece TCG con Drag & Drop y precios de CardTrader (en pausa / standby).",
      ca: "Arxivador digital interactiu estil Vault X per a One Piece TCG amb Drag & Drop i preus de CardTrader (en pausa / standby).",
    },
    logo: "/grand-line-vault-logo.svg",
    demoUrl: "https://grand-line-vault-tcg.vercel.app",
    demoText: { es: "Explorar Vault", ca: "Explorar Vault" },
    githubUrl: "https://github.com/KillianTR/one-piece-tcg",
  },
];

const corporateSystems = [
  {
    title: "Plataforma XML AEQT",
    category: "systems",
    badge: { es: "Sector Químico", ca: "Sector Químic" },
    platformBadge: "PHP · XML · MySQL",
    description: {
      es: "Plugin corporativo para la Asociación de Empresas Químicas de Tarragona (AEQT). Sincronización y filtrado de ofertas mediante XML.",
      ca: "Plugin corporatiu per a l'Associació d'Empreses Químiques de Tarragona (AEQT). Sincronització i filtratge d'ofertes mitjançant XML.",
    },
    image: "/aeqt-xml-preview.svg",
    isConfidential: true,
    confidentialNotice: {
      es: "Código corporativo protegido bajo confidencialidad (propiedad AEQT).",
      ca: "Codi corporatiu protegit sota confidencialitat (propietat AEQT).",
    },
  },
  {
    title: {
      es: "Dashboard de Convenios en Python",
      ca: "Dashboard de Convenis amb Python",
    },
    category: "systems",
    badge: { es: "Automatización", ca: "Automatització" },
    platformBadge: "Python · Pandas · Excel",
    description: {
      es: "Script avanzado para auditoría y control automatizado de fechas de vencimiento en convenios institucionales a gran escala.",
      ca: "Script avançat per a auditoria i control automatitzat de dates de venciment en convenis institucionals a gran escala.",
    },
    image: "/python-convenios-preview.svg",
    isConfidential: true,
    confidentialNotice: {
      es: "Herramienta interna con datos protegidos bajo confidencialidad.",
      ca: "Eina interna amb dades protegides sota confidencialitat.",
    },
  },
  {
    title: {
      es: "Software Control de Stock e Incidencias",
      ca: "Software Control d'Stock i Incidències",
    },
    category: "systems",
    badge: { es: "Herramienta Interna", ca: "Eina Interna" },
    platformBadge: "Oracle SQL · Helpdesk",
    description: {
      es: "Sistemas desarrollados ad-hoc en MediaMarkt y Princess Hotels: control de repuestos en taller y soporte técnico con Oracle SQL.",
      ca: "Sistemes desenvolupats ad-hoc a MediaMarkt i Princess Hotels: control de recanvis al taller i suport tècnic amb Oracle SQL.",
    },
    image: "/stock-incidencias-preview.svg",
    isConfidential: true,
    confidentialNotice: {
      es: "Desarrollo interno de taller y soporte IT bajo confidencialidad.",
      ca: "Desenvolupament intern de taller i suport TI sota confidencialitat.",
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
    if (activeCategory === "simracing")
      return p.category === "simracing" || p.categories?.includes("simracing");
    if (activeCategory === "web")
      return p.category === "web" || p.categories?.includes("web");
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

      {/* Grid de productos estilo Victor SaaS & Apps (2 columnas compactas) */}
      <div className="victor-saas-grid">
        {filteredProducts.map((project) => {
          const projectTitle =
            typeof project.title === "object"
              ? project.title[lang] || project.title.es
              : project.title;
          const targetUrl = project.demoUrl || project.githubUrl;

          return (
            <div
              key={project.id}
              className="victor-saas-card-wrapper"
              style={{ "--accent": project.accentColor || "var(--accent)" }}
            >
              <a
                href={targetUrl}
                target="_blank"
                rel="noreferrer"
                className="victor-saas-card group"
              >
                {/* Header: App Icon (left) + Badges (right) */}
                <div className="victor-saas-header">
                  <img
                    src={project.logo}
                    alt={projectTitle}
                    className="victor-saas-app-icon"
                    loading="lazy"
                  />
                  <div className="victor-saas-badges">
                    {project.statusBadge && (
                      <span className="victor-badge-status">
                        <span className="blink-dot" aria-hidden="true"></span>
                        {project.statusBadge[lang] || project.statusBadge.es}
                      </span>
                    )}
                    <span className="victor-badge-platform">{project.platformBadge}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="victor-saas-title">{projectTitle}</h3>

                {/* Description */}
                <p className="victor-saas-desc">
                  {project.description[lang] || project.description.es}
                </p>

                {/* Action Link Footer */}
                <div className="victor-saas-footer">
                  <span className="victor-saas-cta">
                    {project.demoText[lang] || project.demoText.es}
                    <span className="victor-saas-arrow">→</span>
                  </span>

                  <div className="victor-saas-sublinks">
                    {project.storeUrl && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.storeUrl, "_blank");
                        }}
                        className="victor-saas-sublink"
                        title="Microsoft Store"
                      >
                        Store ↗
                      </span>
                    )}
                    {project.githubUrl && project.githubUrl !== targetUrl && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.githubUrl, "_blank");
                        }}
                        className="victor-saas-sublink"
                        title="GitHub"
                      >
                        GitHub ↗
                      </span>
                    )}
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      {/* Sección Corporativa & NDA estilo Victor */}
      {showCorporate && (
        <div className="corporate-systems-section">
          <div className="corporate-header">
            <div className="corporate-kicker">
              <FiLock style={{ marginRight: "6px" }} />
              <span>{t.projects.enterpriseTitle}</span>
            </div>
            <p className="corporate-subtitle">{t.projects.enterpriseSubtitle}</p>
          </div>

          <div className="victor-saas-grid corporate-saas-grid">
            {corporateSystems.map((item, idx) => {
              const itemTitle =
                typeof item.title === "object"
                  ? item.title[lang] || item.title.es
                  : item.title;

              return (
                <div key={idx} className="victor-saas-card-wrapper" style={{ "--accent": "#94a3b8" }}>
                  <div className="victor-saas-card corporate-card-clean">
                    <div className="victor-saas-header">
                      <img src={item.image} alt={itemTitle} className="victor-saas-app-icon corporate-icon" />
                      <div className="victor-saas-badges">
                        <span className="victor-badge-status nda-badge">
                          <FiLock style={{ fontSize: "0.6rem" }} />
                          NDA
                        </span>
                        <span className="victor-badge-platform">{item.badge[lang] || item.badge.es}</span>
                      </div>
                    </div>

                    <h3 className="victor-saas-title">{itemTitle}</h3>

                    <p className="victor-saas-desc">
                      {item.description[lang] || item.description.es}
                    </p>

                    <div className="victor-saas-footer">
                      <span className="victor-nda-notice">
                        <FiLock style={{ marginRight: "4px" }} />
                        {item.confidentialNotice[lang] || item.confidentialNotice.es}
                      </span>
                    </div>
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
