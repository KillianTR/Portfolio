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
      badge: "Soporte Aeroportuario",
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
      role: "Técnico Informático / IT Helpdesk",
      period: "Septiembre 2022 – Diciembre 2022",
      badge: "3 meses",
      description:
        "Soporte IT Helpdesk corporativo, administración global de identidades en Active Directory, auditoría automatizada de facturas y gestión de redes e infraestructura.",
      highlights: [
        "Administración y control de accesos en Active Directory (usuarios, permisos y grupos) para hoteles de la cadena a nivel internacional.",
        "Soporte Helpdesk presencial y remoto a oficinas centrales: resolución ágil de incidencias en pantallas, software, ofimática y red.",
        "Auditoría y comprobación de facturación IT mediante software automatizado de lectura y verificación de PDFs.",
        "Mantenimiento preventivo, soporte a TPVs, telefonía IP, segmentación de VLANs y consultas en Oracle SQL.",
        "Creación de una herramienta de software interno para agilizar el registro y seguimiento de tickets técnicos.",
        "Coordinación y traslado de material y equipamiento informático durante la mudanza a las nuevas oficinas centrales.",
      ],
      tech: ["Active Directory", "IT Helpdesk", "Auditoría Facturación", "Oracle SQL", "VLANs", "TPVs"],
    },
    {
      company: "Plateforme des Aidants",
      location: "Angulema (Francia)",
      role: "Desarrollador Web & Gestor Multimedia",
      period: "Abril 2022 – Julio 2022",
      badge: "Experiencia Internacional",
      description:
        "Estancia laboral internacional en Francia: desarrollo web WordPress, rebranding institucional, diseño de cartelería y creación multimedia.",
      highlights: [
        "Desarrollo y mantenimiento frontend de dos sitios web corporativos en CMS WordPress, PHP y JavaScript.",
        "Participación activa en el rebranding integral de la asociación y de entidad colaboradora, renovando su identidad visual.",
        "Diseño de cartelería, folletos y material promocional con Canva junto a compañera de equipo para campañas informativas.",
        "Edición y montaje de vídeo y creatividades para redes sociales (LinkedIn e Instagram), potenciando el alcance institucional.",
        "Asistencia técnica y representación en actos, charlas y eventos públicos organizados por la entidad.",
      ],
      tech: ["WordPress", "Rebranding", "Canva", "Edición Vídeo", "Redes Sociales", "Francés B1"],
    },
    {
      company: "Activa Mutua",
      location: "Reus, Tarragona",
      role: "Técnico Informático / Soporte de Sistemas (Prácticas)",
      period: "Noviembre 2019 – Abril 2020",
      badge: "Prácticas de sistemas",
      description:
        "Soporte técnico Helpdesk N1, cableado y parcheo de red, y control integral de inventario de almacén IT.",
      highlights: [
        "Soporte técnico Helpdesk N1 y atención directa a usuarios de la mutua para resolución de problemas ofimáticos, software corporativo y periféricos.",
        "Gestión y parcheo de red: verificación y corrección de puertos ethernet en regletas/patch panels y adecuación de conexiones en armarios rack.",
        "Organización y control de inventario de almacén IT: catalogación exhaustiva y registro en base de datos/Excel de sobremesas, All-in-One, portátiles, pantallas y accesorios.",
        "Mantenimiento preventivo de estaciones de trabajo, gestión de cuentas en Active Directory y consultas a bases de datos con Oracle SQL.",
      ],
      tech: ["Helpdesk N1", "Cableado de Red & Racks", "Inventario IT", "Oracle SQL", "Active Directory"],
    },
    {
      company: "Andrés Pintaluba S.A.",
      location: "Reus, Tarragona",
      role: "Técnico de Soporte Informático (Prácticas)",
      period: "Mayo 2016 – Noviembre 2016",
      badge: "Prácticas SMX",
      description:
        "Prácticas formativas de Grado Medio (SMX) enfocadas a microinformática, hardware, helpdesk de oficina y puesta a punto de equipos.",
      highlights: [
        "Soporte técnico Helpdesk de microinformática por toda la sede central: resolución ágil de incidencias de pantallas, ofimática, acceso a archivos y software corporativo.",
        "Clonado masivo de discos duros, configuración de sistemas operativos y puesta a punto de puestos informáticos para personal.",
        "Mantenimiento preventivo, diagnóstico y sustitución de componentes de hardware y periféricos.",
      ],
      tech: ["Helpdesk Ofimático", "Hardware & Pantallas", "Clonación Discos", "Puesta a Punto PC", "SMX"],
    },
  ],
  ca: [
    {
      company: "AENA (Aeroport de Reus)",
      location: "Reus, Tarragona",
      role: "Tècnic de Microinformàtica / Suport TI Corporatiu",
      period: "Agost 2026",
      badge: "Suport Aeroportuari",
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
      role: "Tècnic Informàtic / IT Helpdesk",
      period: "Setembre 2022 – Desembre 2022",
      badge: "3 mesos",
      description:
        "Suport IT Helpdesk corporatiu, administració global d'identitats a Active Directory, auditoria automatitzada de factures i gestió de xarxes i infraestructura.",
      highlights: [
        "Administració i control d'accessos a Active Directory (usuaris, permisos i grups) per a hotels de la cadena a nivell internacional.",
        "Suport Helpdesk presencial i remot a oficines centrals: resolució àgil d'incidències en pantalles, programari, ofimàtica i xarxa.",
        "Auditoria i comprovació de facturació IT mitjançant programari automatitzat de lectura i verificació de PDFs.",
        "Manteniment preventiu, suport a TPVs, telefonia IP, segmentació de VLANs i consultes a Oracle SQL.",
        "Creació d'una eina de programari intern per agilitzar el registre i seguiment de tiquets tècnics.",
        "Coordinació i trasllat de material i equipament informàtic durant la mudança a les noves oficines centrals.",
      ],
      tech: ["Active Directory", "IT Helpdesk", "Auditoria Facturació", "Oracle SQL", "VLANs", "TPVs"],
    },
    {
      company: "Plateforme des Aidants",
      location: "Angulema (França)",
      role: "Desenvolupador Web & Gestor Multimèdia",
      period: "Abril 2022 – Juliol 2022",
      badge: "Experiència Internacional",
      description:
        "Estada laboral internacional a França: desenvolupament web WordPress, rebranding institucional, disseny de cartelleria i creació multimèdia.",
      highlights: [
        "Desenvolupament i manteniment frontend de dos llocs web corporatius en CMS WordPress, PHP i JavaScript.",
        "Participació activa en el rebranding integral de l'associació i d'entitat col·laboradora, renovant la seva identitat visual.",
        "Disseny de cartelleria, fulletons i material promocional amb Canva juntament amb companya d'equip per a campanyes informatives.",
        "Edició i muntatge de vídeo i creativitats per a xarxes socials (LinkedIn i Instagram), potenciant l'abast institucional.",
        "Assistència tècnica i representació en actes, xerrades i esdeveniments públics organitzats per l'entitat.",
      ],
      tech: ["WordPress", "Rebranding", "Canva", "Edició Vídeo", "Xarxes Socials", "Francès B1"],
    },
    {
      company: "Activa Mútua",
      location: "Reus, Tarragona",
      role: "Tècnic Informàtic / Suport de Sistemes (Pràctiques)",
      period: "Novembre 2019 – Abril 2020",
      badge: "Pràctiques de sistemes",
      description:
        "Suport tècnic Helpdesk N1, cablejat i patxeig de xarxa, i control integral d'inventari de magatzem IT.",
      highlights: [
        "Suport tècnic Helpdesk N1 i atenció directa a usuaris de la mútua per a resolució de problemes ofimàtics, programari corporatiu i perifèrics.",
        "Gestió i patxeig de xarxa: verificació i correcció de ports ethernet en regletes/patch panels i adequació de connexions en armaris rack.",
        "Organització i control d'inventari de magatzem IT: catalogació exhaustiva i registre en base de dades/Excel de sobretaules, All-in-One, portàtils, pantalles i accessoris.",
        "Manteniment preventiu d'estacions de treball, gestió de comptes a Active Directory i consultes a bases de dades amb Oracle SQL.",
      ],
      tech: ["Helpdesk N1", "Cablejat de Xarxa & Racks", "Inventari IT", "Oracle SQL", "Active Directory"],
    },
    {
      company: "Andrés Pintaluba S.A.",
      location: "Reus, Tarragona",
      role: "Tècnic de Suport Informàtic (Pràctiques)",
      period: "Maig 2016 – Novembre 2016",
      badge: "Pràctiques SMX",
      description:
        "Pràctiques formatives de Grau Mitjà (SMX) enfocades a microinformàtica, maquinari, helpdesk d'oficina i posada a punt d'equips.",
      highlights: [
        "Suport tècnic Helpdesk de microinformàtica per tota la seu central: resolució àgil d'incidències de pantalles, ofimàtica, accés a fitxers i programari corporatiu.",
        "Clonatge massiu de discs durs, configuració de sistemes operatius i posada a punt de llocs informàtics per al personal.",
        "Manteniment preventiu, diagnòstic i substitució de components de maquinari i perifèrics.",
      ],
      tech: ["Helpdesk Ofimàtic", "Hardware & Pantalles", "Clonatge Discs", "Posada a Punt PC", "SMX"],
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
                <div className="timeline-title-group">
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

