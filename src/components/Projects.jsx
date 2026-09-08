import { useState } from "react";
import { FiExternalLink, FiGithub, FiDollarSign, FiLayers, FiLock } from "react-icons/fi";
import { SiPatreon } from "react-icons/si";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

const categories = {
  es: [
    { id: "all", label: "Todos los proyectos" },
    { id: "web", label: "Desarrollo Web & Apps" },
    { id: "automation", label: "Automatización & Python" },
    { id: "patreon", label: "Software & Patreon" },
    { id: "systems", label: "Sistemas & Herramientas Internas" },
  ],
  ca: [
    { id: "all", label: "Tots els projectes" },
    { id: "web", label: "Desenvolupament Web & Apps" },
    { id: "automation", label: "Automatització & Python" },
    { id: "patreon", label: "Programari & Patreon" },
    { id: "systems", label: "Sistemes & Eines Internes" },
  ],
};

const projectsData = [
  {
    title: "DTM HUD PRO / Simracing Telemetry",
    category: "patreon",
    badge: {
      es: "Proyecto en Patreon",
      ca: "Projecte a Patreon",
    },
    badgeType: "highlight",
    description: {
      es: "Interfaz y HUD de telemetría en tiempo real estilo DTM desarrollado en Lua y CSP (Custom Shaders Patch) para Assetto Corsa. Lanzado con modelo freemium: versión Lite gratuita para la comunidad y versión Pro disponible en Patreon.",
      ca: "Interfície i HUD de telemetria en temps real estil DTM desenvolupat en Lua i CSP (Custom Shaders Patch) per a Assetto Corsa. Llançat amb model freemium: versió Lite gratuïta per a la comunitat i versió Pro disponible a Patreon.",
    },
    image: "/dtm-hud-preview.png",
    tech: ["Lua", "CSP", "UI Design", "Telemetry", "Assetto Corsa", "Patreon"],
    demoUrl: "https://www.patreon.com",
    demoText: { es: "Ver en Patreon", ca: "Veure a Patreon" },
    demoIcon: <SiPatreon style={{ color: "#ff424d" }} />,
    isPatreon: true,
  },
  {
    title: "Pomodoro Timer App",
    category: "web",
    badge: { es: "Proyecto Destacado", ca: "Projecte Destacat" },
    badgeType: "default",
    description: {
      es: "Temporizador de productividad de alto rendimiento con estética minimalista estilo Vercel. Diseñado con React Hooks, persistencia en localStorage, efectos visuales con transparencias CSS y animaciones fluidas.",
      ca: "Temporitzador de productivitat d'alt rendiment amb estètica minimalista estil Vercel. Dissenyat amb React Hooks, persistència a localStorage, efectes visuals amb transparències CSS i animacions fluides.",
    },
    image: "/pomodoro-timer-screenshot.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    demoUrl: "https://pomodoro-timer-killiantr.vercel.app",
    demoText: { es: "Ver Demo", ca: "Veure Demo" },
    githubUrl: "https://github.com/KillianTR",
  },
  {
    title: "Taskbar Music Widget",
    category: "systems",
    badge: { es: "Proyecto Windows", ca: "Projecte Windows" },
    badgeType: "default",
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
  {
    title: "Plataforma XML AEQT",
    category: "web",
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
    title: "Dashboard de Convenios en Python",
    category: "automation",
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
    title: "Software de Control de Stock e Incidencias",
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

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

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

      {/* Filtros de categoría */}
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

      {/* Grid de tarjetas */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <article key={index} className="project-card-v2">
            <div className="project-card-image-container">
              <img
                src={project.image}
                alt={`Captura de ${project.title}`}
                className="project-card-image"
                loading="lazy"
              />
              {project.badge && (
                <span className={`project-status-badge ${project.badgeType}`}>
                  {project.isPatreon && <FiDollarSign style={{ marginRight: 4 }} />}
                  {project.badge[lang] || project.badge.es}
                </span>
              )}
            </div>

            <div className="project-card-body-v2">
              <h3>{project.title}</h3>
              <p className="project-card-description-v2">
                {project.description[lang] || project.description.es}
              </p>

              {project.confidentialNotice && (
                <p className="project-confidential-note">
                  <FiLock style={{ marginRight: 6, flexShrink: 0 }} />
                  <span>{project.confidentialNotice[lang] || project.confidentialNotice.es}</span>
                </p>
              )}

              <div className="project-card-tech-tags">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-card-footer-v2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="demo-link-v2"
                  >
                    {project.demoIcon ? (
                      <span style={{ marginRight: "8px", display: "inline-flex", alignItems: "center" }}>
                        {project.demoIcon}
                      </span>
                    ) : (
                      <FiExternalLink style={{ marginRight: "6px" }} />
                    )}
                    {project.demoText[lang] || project.demoText.es}
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="code-link-v2"
                  >
                    <FiGithub style={{ marginRight: "6px" }} />
                    {t.projects.codeBtn}
                  </a>
                )}

                {project.isConfidential && (
                  <div
                    className="confidential-code-pill"
                    title={project.confidentialNotice?.[lang] || project.confidentialNotice?.es}
                  >
                    <FiLock className="confidential-pill-icon" />
                    <span>
                      {lang === "es" ? "Código Privado / Corporativo" : "Codi Privat / Corporatiu"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;