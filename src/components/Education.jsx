import { FiAward, FiBookOpen, FiGlobe } from "react-icons/fi";
import { VscAzure } from "react-icons/vsc";
import { SiCisco } from "react-icons/si";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

const educationData = {
  es: [
    {
      title: "FullStack Junior Web Developer con Java",
      institution: "TechTalent — Reus",
      period: "2024",
      type: "Bootcamp Intensivo Especializado",
      description:
        "Formación práctica avanzada en desarrollo web fullstack: arquitectura orientada a servicios con Java (Spring Boot), desarrollo frontend reactivo con React, JavaScript, APIs RESTful y buenas prácticas de código.",
    },
    {
      title: "Ciclo Formativo Grado Superior: ASIX",
      subTitle: "Administración de Sistemas Informáticos en Red",
      institution: "INS Baix Camp — Reus",
      period: "2018 – 2020",
      type: "Titulación Oficial Superior",
      description:
        "Especialización en administración de servidores (Windows Server, Linux Debian/Ubuntu), Active Directory, servicios de red, seguridad informática, virtualización, bases de datos relacionales y scripting en PowerShell/Bash.",
    },
    {
      title: "Ciclo Formativo Grado Medio: SMX",
      subTitle: "Sistemas Microinformáticos y Redes",
      institution: "INS Baix Camp — Reus",
      period: "2015 – 2017",
      type: "Titulación Oficial Media",
      description:
        "Montaje, mantenimiento y diagnóstico de hardware, cableado estructurado, configuración de redes locales y soporte a usuarios.",
    },
  ],
  ca: [
    {
      title: "FullStack Junior Web Developer amb Java",
      institution: "TechTalent — Reus",
      period: "2024",
      type: "Bootcamp Intensiu Especialitzat",
      description:
        "Formació pràctica avançada en desenvolupament web fullstack: arquitectura orientada a serveis amb Java (Spring Boot), desenvolupament frontend reactiu amb React, JavaScript, APIs RESTful i bones pràctiques d'arquitectura.",
    },
    {
      title: "Cicle Formatiu Grau Superior: ASIX",
      subTitle: "Administració de Sistemes Informàtics en Xarxa",
      institution: "INS Baix Camp — Reus",
      period: "2018 – 2020",
      type: "Titulació Oficial Superior",
      description:
        "Especialització en administració de servidors (Windows Server, Linux Debian/Ubuntu), Active Directory, serveis de xarxa, seguretat informàtica, virtualització, bases de dades relacionals i scripting en PowerShell/Bash.",
    },
    {
      title: "Cicle Formatiu Grau Mitjà: SMX",
      subTitle: "Sistemes Microinformàtics i Xarxes",
      institution: "INS Baix Camp — Reus",
      period: "2015 – 2017",
      type: "Titulació Oficial Mitjana",
      description:
        "Muntatge, manteniment i diagnòstic de maquinari, cablejat estructurat, configuració de xarxes locals i suport a usuaris.",
    },
  ],
};

const certifications = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    icon: <VscAzure style={{ color: "#0078d4" }} />,
  },
  {
    name: "Microsoft Certified: Azure Data Fundamentals",
    code: "DP-900",
    issuer: "Microsoft",
    icon: <VscAzure style={{ color: "#0078d4" }} />,
  },
  {
    name: "CISCO Networking Academy",
    code: "CCNA Module",
    issuer: "Cisco",
    icon: <SiCisco style={{ color: "#1ba0d7" }} />,
  },
  {
    name: "Adobe Photoshop CC",
    code: "Diseño & Retoque Digital",
    issuer: "Crehana",
    icon: <span style={{ fontWeight: 800, color: "#38bdf8" }}>Ps</span>,
  },
];

const languagesData = {
  es: [
    { name: "Català", level: "Nativo", badge: "Idioma principal" },
    { name: "Castellano", level: "Nativo", badge: "Bilingüe" },
    { name: "Inglés", level: "B2 Professional", badge: "Técnico y fluido" },
    { name: "Francés", level: "B1 Intermedio", badge: "Experiencia en Francia" },
  ],
  ca: [
    { name: "Català", level: "Natiu", badge: "Idioma principal" },
    { name: "Castellà", level: "Natiu", badge: "Bilingüe" },
    { name: "Anglès", level: "B2 Professional", badge: "Tècnic i fluid" },
    { name: "Francès", level: "B1 Intermedi", badge: "Experiència a França" },
  ],
};

function Education() {
  const { lang } = useApp();
  const t = translations[lang] || translations.es;
  const currentEdu = educationData[lang] || educationData.es;
  const currentLangList = languagesData[lang] || languagesData.es;

  return (
    <section className="section education-section" id="formacion">
      <div className="section-header-left">
        <div className="section-kicker">
          <FiBookOpen />
          <span>{t.education.kicker}</span>
        </div>
        <h2 className="projects-title-v2">{t.education.title}</h2>
        <p className="projects-description-v2">{t.education.subtitle}</p>
      </div>

      <div className="education-grid">
        {/* Columna Formación */}
        <div className="education-column">
          <h3 className="column-title">
            <FiBookOpen style={{ marginRight: 8, color: "#38bdf8" }} />
            {t.education.degreesTitle}
          </h3>

          <div className="edu-cards-list">
            {currentEdu.map((item, index) => (
              <div key={index} className="edu-card">
                <div className="edu-card-top">
                  <span className="edu-type-badge">{item.type}</span>
                  <span className="edu-period">{item.period}</span>
                </div>
                <h4 className="edu-title">{item.title}</h4>
                {item.subTitle && <div className="edu-subtitle">{item.subTitle}</div>}
                <div className="edu-institution">{item.institution}</div>
                <p className="edu-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Certificaciones e Idiomas */}
        <div className="certs-languages-column">
          <div className="certs-box">
            <h3 className="column-title">
              <FiAward style={{ marginRight: 8, color: "#facc15" }} />
              {t.education.certsTitle}
            </h3>
            <div className="certs-list">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <div className="cert-icon-wrap">{cert.icon}</div>
                  <div className="cert-details">
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-meta">
                      {cert.code} • {cert.issuer}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="languages-box">
            <h3 className="column-title">
              <FiGlobe style={{ marginRight: 8, color: "#10b981" }} />
              {t.education.languagesTitle}
            </h3>
            <div className="languages-grid">
              {currentLangList.map((item, index) => (
                <div key={index} className="lang-card">
                  <div className="lang-name">{item.name}</div>
                  <div className="lang-level">{item.level}</div>
                  <span className="lang-tag">{item.badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
