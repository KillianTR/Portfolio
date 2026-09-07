import { useState } from "react";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { useApp } from "../context/AppContext";

const experienceData = {
  es: [
    {
      company: "AENA (Aeropuerto de Reus)",
      location: "Reus, Tarragona",
      role: "Técnico de Microinformática / Soporte TI Corporativo",
      period: "Agosto 2026",
      badge: "Sustitución de verano",
      description:
        "Soporte técnico y administración de puestos de trabajo e infraestructura en entorno aeroportuario crítico de alta seguridad.",
      highlights: [
        "Atención y resolución ágil de incidencias de microinformática N1/N2 para personal operativo y administrativo.",
        "Gestión de usuarios, equipos y asignación de permisos mediante Active Directory bajo estrictas directivas de seguridad corporativa.",
        "Configuración y resolución de incidencias de acceso a través de proxy corporativo y licenciamiento de software.",
        "Mantenimiento preventivo, diagnóstico y sustitución de estaciones de trabajo, monitores e impresoras en red.",
        "Gestión de herramientas y aplicaciones corporativas internas (SIPA) y soporte de instalación de software restringido.",
      ],
      tech: ["Active Directory", "Windows Server", "SIPA", "Proxy Corporativo", "Helpdesk N1/N2", "Hardware"],
    },
    {
      company: "AEQT (Asociación de Empresas Químicas de Tarragona)",
      location: "Tarragona",
      role: "Técnico Multimedia & Desarrollador Web",
      period: "Octubre 2024 – Octubre 2025",
      badge: "1 año",
      description:
        "Desarrollo frontend/backend del portal institucional, automatización interna de procesos con Python y soporte multimedia integral.",
      highlights: [
        "Desarrollo, actualización y mantenimiento continuo del portal web institucional sobre CMS WordPress.",
        "Desarrollo y ajustes frontend/backend empleando HTML5, CSS3, JavaScript, PHP y React.",
        "Programación de scripts de automatización con Python y PowerShell para la gestión y seguimiento del vencimiento de convenios internos.",
        "Gestión integral de redes sociales (LinkedIn, Twitter/X, Instagram, YouTube) y analítica con Metricool.",
        "Creación de contenidos gráficos (Adobe Suite) y audiovisuales (Premiere, DaVinci Resolve) para notas de prensa y comunicados.",
        "Monitorización de rendimiento web, optimización de QoE/QoS y analítica de audiencia con Google Analytics y Matomo.",
      ],
      tech: ["WordPress", "PHP", "React", "Python", "PowerShell", "Google Analytics", "Metricool", "Adobe Suite"],
    },
    {
      company: "MediaMarkt",
      location: "Tarragona",
      role: "Técnico de Soporte y Reparaciones Informáticas",
      period: "Agosto 2023 – Febrero 2024",
      badge: "7 meses",
      description:
        "Servicio técnico integral de hardware, atención directa a cliente y desarrollo de software interno para el taller.",
      highlights: [
        "Diagnóstico técnico y reparación de smartphones, ordenadores de sobremesa, portátiles y equipos electrónicos.",
        "Atención personalizada a clientes, asesoramiento técnico avanzado y gestión integral de órdenes de trabajo.",
        "Desarrollo de un programa interno para la gestión y seguimiento del control de stock del departamento de servicios.",
      ],
      tech: ["Diagnóstico Hardware", "Software Interno", "Gestión de Stock", "Atención al Cliente"],
    },
    {
      company: "Princess Hotels & Resorts",
      location: "Reus, Tarragona",
      role: "Técnico Informático / IT Helpdesk (Prácticas)",
      period: "Septiembre 2022 – Diciembre 2022",
      badge: "Prácticas de sistemas",
      description:
        "Soporte a oficinas centrales, red de hoteles, sistemas de bases de datos y desarrollo de herramienta interna de tickets.",
      highlights: [
        "Soporte técnico Helpdesk N1/N2 en oficinas centrales y usuarios tanto de forma presencial como en remoto.",
        "Mantenimiento de equipamiento, configuración de terminales de punto de venta (TPV) y redes telefónicas.",
        "Configuración y segmentación de VLANs y consultas/mantenimiento de bases de datos relacionales sobre Oracle SQL.",
        "Creación de un programa de uso interno para la gestión y seguimiento de incidencias técnicas.",
      ],
      tech: ["Helpdesk N1/N2", "VLANs", "TPVs", "Oracle SQL", "Herramienta Interna"],
    },
    {
      company: "Plateforme des Aidants",
      location: "Angulema (Francia)",
      role: "Desarrollador Web & Gestor Multimedia (Temporal)",
      period: "Abril 2022 – Julio 2022",
      badge: "Experiencia Internacional",
      description:
        "Estancia laboral internacional en Francia centrada en desarrollo frontend y dinamización web en entorno multicultural.",
      highlights: [
        "Desarrollo, estructuración y mantenimiento frontend de dos páginas web corporativas en WordPress.",
        "Programación de elementos interactivos con HTML5, CSS3, JavaScript y PHP.",
      ],
      tech: ["WordPress", "JavaScript", "PHP", "HTML5/CSS3", "Francés B1"],
    },
    {
      company: "Activa Mutua & Andrés Pintaluba S.A.",
      location: "Reus, Tarragona",
      role: "Técnico Informático / Soporte de Sistemas (Prácticas)",
      period: "2016 – 2020",
      badge: "Inicios y consolidación técnica",
      description:
        "Prácticas formativas de Grado Medio (SMX) y Grado Superior (ASIX) administrando redes locales y estaciones de trabajo.",
      highlights: [
        "Soporte técnico N1 y resolución de incidencias para usuarios internos.",
        "Mantenimiento de equipos, redes locales y consultas sobre bases de datos Oracle SQL.",
        "Clonado masivo, configuración y puesta a punto de puestos de trabajo corporativos.",
      ],
      tech: ["Oracle SQL", "Clonación de Sistemas", "Redes Locales", "Soporte N1"],
    },
  ],
  ca: [
    {
      company: "AENA (Aeroport de Reus)",
      location: "Reus, Tarragona",
      role: "Tècnic de Microinformàtica / Suport TI Corporatiu",
      period: "Agost 2026",
      badge: "Substitució d'estiu",
      description:
        "Suport tècnic i administració d'estacions de treball i infraestructura en entorn aeroportuari crític d'alta seguretat.",
      highlights: [
        "Atenció i resolució d'incidències de microinformàtica N1/N2 per al personal d'oficines i operatiu en entorn d'alta seguretat.",
        "Gestió d'usuaris, equips i assignació de permisos mitjançant Active Directory sota polítiques corporatives estrictes.",
        "Configuració i resolució de problemes d'accés a través de proxy corporatiu i llicenciament de programari.",
        "Manteniment, diagnòstic i substitució d'estacions de treball, pantalles i impressores en xarxa.",
        "Gestió d'eines i aplicacions corporatives internes (SIPA) i suport d'instal·lació de programari restringit.",
      ],
      tech: ["Active Directory", "Windows Server", "SIPA", "Proxy Corporatiu", "Helpdesk N1/N2", "Hardware"],
    },
    {
      company: "AEQT (Associació d'Empreses Químiques de Tarragona)",
      location: "Tarragona",
      role: "Tècnic Multimèdia & Desenvolupador Web",
      period: "Octubre 2024 – Octubre 2025",
      badge: "1 any",
      description:
        "Desenvolupament frontend/backend del portal institucional, automatització de convenis amb Python i suport multimèdia.",
      highlights: [
        "Desenvolupament, actualització i manteniment continu del portal web institucional sobre CMS WordPress.",
        "Desenvolupament i ajustos frontend/backend emprant HTML5, CSS3, JavaScript, PHP i React.",
        "Programació d'scripts d'automatització amb Python i PowerShell per a la gestió i seguiment de convenis interns.",
        "Gestió integral de xarxes socials (Twitter/X, LinkedIn, Instagram, Facebook, YouTube) i planificació amb Metricool.",
        "Creació de continguts gràfics (Suite Adobe) i audiovisuals (Premiere, DaVinci Resolve) per a comunicats i notes de premsa.",
        "Monitoratge del rendiment web, optimització de QoE/QoS i analítica d'audiència amb Google Analytics i Matomo.",
      ],
      tech: ["WordPress", "PHP", "React", "Python", "PowerShell", "Google Analytics", "Metricool", "Adobe Suite"],
    },
    {
      company: "MediaMarkt",
      location: "Tarragona",
      role: "Tècnic de Suport i Reparacions Informàtiques",
      period: "Agost 2023 – Febrer 2024",
      badge: "7 mesos",
      description:
        "Servei tècnic integral de maquinari, atenció directa a client i creació de programari intern pel taller.",
      highlights: [
        "Diagnòstic tècnic i reparació de dispositius mòbils, ordinadors de sobretaula, portàtils i equips d'electrònica.",
        "Atenció directa al client, assessorament tècnic personalitzat i gestió i tancament d'ordres de treball.",
        "Desenvolupament d'un programa intern per a la gestió i seguiment del control d'estoc del departament de serveis.",
      ],
      tech: ["Diagnòstic Hardware", "Programari Intern", "Gestió d'Estoc", "Atenció al Client"],
    },
    {
      company: "Princess Hotels & Resorts",
      location: "Reus, Tarragona",
      role: "Tècnic Informàtic / IT Helpdesk (Pràctiques)",
      period: "Setembre 2022 – Desembre 2022",
      badge: "Pràctiques de sistemes",
      description:
        "Suport a oficines centrals i usuaris, xarxes de dades i telefonia, i creació d'eina interna d'incidències.",
      highlights: [
        "Suport tècnic Helpdesk N1/N2 a oficines centrals i usuaris de manera presencial i en remot.",
        "Manteniment i reparació d'equips informàtics, configuració de terminals de punt de venda (TPV) i xarxes telefòniques.",
        "Configuració de VLANs i gestió de consultes i manteniment de dades sobre Oracle SQL.",
        "Creació d'un programa d'ús intern per a la gestió i seguiment d'incidències tècniques.",
      ],
      tech: ["Helpdesk N1/N2", "VLANs", "TPVs", "Oracle SQL", "Eina Interna"],
    },
    {
      company: "Plateforme des Aidants",
      location: "Angulema (França)",
      role: "Desenvolupador Web & Gestor Multimèdia (Temporal)",
      period: "Abril 2022 – Juliol 2022",
      badge: "Experiència Internacional",
      description:
        "Estada laboral internacional a França centrada en el desenvolupament frontend de plataformes web.",
      highlights: [
        "Desenvolupament, estructuració i manteniment frontend de dues pàgines web en WordPress.",
        "Programació d'elements interactius amb HTML, CSS, JavaScript i PHP.",
      ],
      tech: ["WordPress", "JavaScript", "PHP", "HTML5/CSS3", "Francès B1"],
    },
    {
      company: "Activa Mútua & Andrés Pintaluba S.A.",
      location: "Reus, Tarragona",
      role: "Tècnic Informàtic / Suport de Sistemes (Pràctiques)",
      period: "2016 – 2020",
      badge: "Inicis i consolidació tècnica",
      description:
        "Pràctiques formatives de Grau Mitjà (SMX) i Grau Superior (ASIX) administrant xarxes locals i equips.",
      highlights: [
        "Suport tècnic N1 i gestió d'incidències per a usuaris interns.",
        "Manteniment d'equips, xarxes locals i gestió de bases de dades corporatives amb Oracle SQL.",
        "Reparació, clonatge i posada a punt d'estacions de treball corporatives.",
      ],
      tech: ["Oracle SQL", "Clonatge de Sistemes", "Xarxes Locals", "Suport N1"],
    },
  ],
};

function Experience({ onOpenCvModal }) {
  const { lang } = useApp();
  const jobs = experienceData[lang] || experienceData.es;

  return (
    <section className="section experience-section" id="experiencia">
      <div className="section-header-row">
        <div className="section-header-text">
          <div className="section-kicker">
            <FiBriefcase />
            <span>{lang === "es" ? "Trayectoria Profesional" : "Trajectòria Professional"}</span>
          </div>
          <h2 className="section-title">
            {lang === "es" ? "Experiencia Laboral" : "Experiència Laboral"}
          </h2>
          <p className="section-subtitle">
            {lang === "es"
              ? "Empresas, roles de soporte IT corporativo y desarrollo de software donde he aportado valor."
              : "Empreses, rols de suport TI corporatiu i desenvolupament de programari on he aportat valor."}
          </p>
        </div>

        {onOpenCvModal && (
          <div className="experience-controls">
            <button onClick={onOpenCvModal} className="btn-secondary btn-sm">
              📄 {lang === "es" ? "Descargar CV Completo" : "Descarregar CV Complet"}
            </button>
          </div>
        )}
      </div>

      <div className="timeline-container">
        {jobs.map((job, index) => (
          <article key={index} className="timeline-card">
            <div className="timeline-marker">
              <span className="timeline-dot"></span>
              {index < jobs.length - 1 && <span className="timeline-line"></span>}
            </div>

            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{job.role}</h3>
                  <h4 className="timeline-company">{job.company}</h4>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-period">
                    <FiCalendar style={{ marginRight: 6 }} /> {job.period}
                  </span>
                  <span className="timeline-location">
                    <FiMapPin style={{ marginRight: 4 }} /> {job.location}
                  </span>
                  {job.badge && <span className="timeline-badge">{job.badge}</span>}
                </div>
              </div>

              <p className="timeline-description">{job.description}</p>

              <ul className="timeline-highlights">
                {job.highlights.map((point, hIndex) => (
                  <li key={hIndex}>
                    <FiCheckCircle className="highlight-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="timeline-tech-tags">
                {job.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;

