import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiWordpress,
  SiPhp,
  SiCisco,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { FaJava, FaLinux, FaWindows } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { FiServer, FiTerminal } from "react-icons/fi";

const skills = [
  { name: "Administración de Sistemas", icon: <FiServer style={{ color: "#38bdf8" }} /> },
  { name: "Active Directory", icon: <FaWindows style={{ color: "#00a4ef" }} /> },
  { name: "React", icon: <SiReact style={{ color: "#61dafb" }} /> },
  { name: "Java (Spring)", icon: <FaJava style={{ color: "#f89820" }} /> },
  { name: "Python", icon: <SiPython style={{ color: "#ffde57" }} /> },
  { name: "TypeScript", icon: <SiTypescript style={{ color: "#3178c6" }} /> },
  { name: "JavaScript", icon: <SiJavascript style={{ color: "#f7df1e" }} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss style={{ color: "#38bdf8" }} /> },
  { name: "Azure (AZ-900 / DP-900)", icon: <VscAzure style={{ color: "#0078d4" }} /> },
  { name: "Cisco Networking", icon: <SiCisco style={{ color: "#1ba0d7" }} /> },
  { name: "Linux (Debian/Ubuntu)", icon: <FaLinux style={{ color: "#facc15" }} /> },
  { name: "WordPress & PHP", icon: <SiWordpress style={{ color: "#21759b" }} /> },
  { name: "SQL (Oracle / Postgres)", icon: <SiPostgresql style={{ color: "#336791" }} /> },
  { name: "PowerShell & Bash", icon: <FiTerminal style={{ color: "#4ade80" }} /> },
];

function TechTicker() {
  return (
    <section className="tech-ticker-section">
      <div className="tech-ticker-label">
        <span className="ticker-pulse-dot"></span>
        <span>Stack Tecnológico & Certificaciones</span>
      </div>
      <div className="tech-ticker-slider">
        <div className="tech-ticker-track">
          {skills.concat(skills).map((skill, index) => (
            <div key={index} className="tech-ticker-item">
              <span className="tech-ticker-icon">{skill.icon}</span>
              <span className="tech-ticker-text">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechTicker;

