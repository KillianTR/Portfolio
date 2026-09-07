import { useState } from "react";
import { FiExternalLink, FiGithub, FiDollarSign, FiLayers } from "react-icons/fi";
import { SiPatreon } from "react-icons/si";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

const categories = {
  es: [
    { id: "all", label: "Todos los proyectos" },
    { id: "web", label: "Desarrollo Web & Apps" },
    { id: "automation", label: "Automatización & Python" },
    { id: "patreon", label: "Software & Patreon (+300€)" },
    { id: "systems", label: "Sistemas & Herramientas Internas" },
  ],
  ca: [
    { id: "all", label: "Tots els projectes" },
    { id: "web", label: "Desenvolupament Web & Apps" },
    { id: "automation", label: "Automatització & Python" },
    { id: "patreon", label: "Programari & Patreon (+300€)" },
    { id: "systems", label: "Sistemes & Eines Internes" },
  ],
};

const projectsData = [
  {
    title: "DTM HUD PRO / Simracing Telemetry",
    category: "patreon",
    badge: {
      es: "Monetizado en Patreon (+300€ en ventas)",
      ca: "Monetitzat a Patreon (+300€ en vendes)",
    },
    badgeType: "highlight",
    description: {
      es: "Interfaz y HUD de telemetría en tiempo real estilo DTM desarrollado en Lua y CSP (Custom Shaders Patch) para Assetto Corsa. Lanzado con modelo freemium: versión Lite gratuita para la comunidad y versión Pro de pago que ha generado más de 300€ en ventas en 3-4 meses.",
      ca: "Interfície i HUD de telemetria en temps real estil DTM desenvolupat en Lua i CSP (Custom Shaders Patch) per a Assetto Corsa. Llançat amb model freemium: versió Lite gratuïta per a la comunitat i versió Pro de pagament amb més de 300€ en vendes en 3-4 mesos.",
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
    title: "Plataforma XML AEQT",
    category: "web",
    badge: { es: "Sector Químico Tarragona", ca: "Sector Químic Tarragona" },
    badgeType: "default",
    description: {
      es: "Plugin corporativo a medida desarrollado en WordPress y PHP para la Asociación de Empresas Químicas de Tarragona (AEQT). Automatiza la gestión, publicación y filtrado de ofertas y demandas de empleo sincronizadas mediante estructuras XML.",
      ca: "Plugin corporatiu a mida desenvolupat en WordPress i PHP per a l'Associació d'Empreses Químiques de Tarragona (AEQT). Automatitza la gestió, publicació i filtratge d'ofertes i demandes de feina sincronitzades mitjançant estructures XML.",
    },
    image: "https://placehold.co/600x380/020617/38bdf8?text=AEQT+Plataforma+XML",
    tech: ["WordPress", "PHP", "XML", "MySQL", "JavaScript", "Gestión Empleo"],
    githubUrl: "https://github.com/KillianTR",
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
    image: "https://placehold.co/600x380/020617/38bdf8?text=Python+Dashboard+Excel",
    tech: ["Python", "Pandas / Openpyxl", "Excel Automation", "PowerShell", "Reporting"],
    githubUrl: "https://github.com/KillianTR",
  },
  {
    title: "TaskbarWidget para Windows",
    category: "systems",
    badge: { es: "Utilidad de Escritorio", ca: "Utilitat d'Escriptori" },
    badgeType: "default",
    description: {
      es: "Widget y utilidad de personalización para la barra de tareas de Windows. Proporciona métricas rápidas de productividad, accesos directos y un diseño integrado sin consumo excesivo de recursos de sistema.",
      ca: "Widget i utilitat de personalització per a la barra de tasques de Windows. Proporciona mètriques ràpides de productivitat, dreceres i un disseny integrat sense consum excessiu de recursos del sistema.",
    },
    image: "https://placehold.co/600x380/020617/38bdf8?text=TaskbarWidget+Windows",
    tech: ["Windows API", "Desktop UI", "Productividad", "C# / Scripting"],
    githubUrl: "https://github.com/KillianTR",
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
    image: "https://placehold.co/600x380/020617/38bdf8?text=Herramientas+Internas+SQL",
    tech: ["Oracle SQL", "Gestión de Stock", "Helpdesk N1/N2", "VLANs"],
    githubUrl: "https://github.com/KillianTR",
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
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;