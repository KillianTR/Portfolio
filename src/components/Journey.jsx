import { FiCompass, FiAward, FiCheckCircle, FiArrowUpRight } from "react-icons/fi";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

function Journey() {
  const { lang } = useApp();
  const t = translations[lang] || translations.es;
  const levels = t.journey.levels;

  return (
    <section className="section journey-section" id="trayectoria">
      <div className="section-header-left">
        <div className="section-kicker">
          <FiCompass />
          <span>{t.journey.kicker}</span>
        </div>
        <h2 className="projects-title-v2">{t.journey.title}</h2>
        <p className="projects-description-v2">{t.journey.subtitle}</p>
      </div>

      <div className="victor-journey-container">
        {/* Rail central/lateral */}
        <div className="victor-rail" aria-hidden="true">
          <div className="victor-rail-fill"></div>
        </div>

        <ol className="victor-levels-list">
          {levels.map((item, index) => {
            const isLast = index === levels.length - 1;
            const isFlagship = item.lvl === "Lvl 06";

            return (
              <li
                key={item.lvl}
                className={`victor-level-item ${isFlagship ? "is-flagship" : ""} ${
                  isLast ? "is-future" : ""
                }`}
              >
                {/* Checkpoint marker */}
                <span className="victor-checkpoint" aria-hidden="true">
                  <span className="victor-checkpoint-dot"></span>
                </span>

                <div className="victor-level-content">
                  <div className="victor-level-header">
                    <span className="victor-lvl-tag">{item.lvl}</span>
                    <span className="victor-year-tag">{item.year}</span>
                  </div>

                  <h3 className="victor-level-title">{item.title}</h3>
                  <p className="victor-level-role">{item.role}</p>
                  <p className="victor-level-desc">{item.desc}</p>

                  {item.links && item.links.length > 0 && (
                    <div className="victor-level-links">
                      {item.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="victor-level-link-chip"
                        >
                          <span>{link.label}</span>
                          <FiArrowUpRight className="victor-link-arrow" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Journey;
