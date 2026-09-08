import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiSend, FiCheck, FiBookOpen, FiArrowRight } from "react-icons/fi";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

const sampleIssuesData = {
  es: [
    {
      id: "auto-excel-python",
      title: "Cómo pasé de perder horas en Excel a automatizar procesos con Python",
      date: "Edición #01 • Lunes",
      preview:
        "En entornos corporativos y soporte técnico vi a compañeros contrastar cientos de fechas de convenios a mano. Decidí que ninguna tarea repetitiva debía hacerse dos veces si un script podía resolverla en 3 segundos. El resultado no solo fue ahorrar horas semanales, sino cambiar la percepción del departamento de TI...",
      fullHint: "Lee la edición completa con el código y la arquitectura del script en la sección Newsletter.",
    },
    {
      id: "sysadmin-to-developer",
      title: "De soporte informático y sistemas a desarrollador: La ventaja oculta",
      date: "Edición #02 • Lunes",
      preview:
        "Muchos juniors se lanzan a picar JavaScript sin entender qué ocurre tras la pantalla. Haber pasado por racks, Active Directory y cables de red me dio la brújula que hoy me hace resolver bugs en minutos. Entender qué ocurre en el metal y la red elimina el síndrome de la 'caja negra'...",
      fullHint: "Lee la edición completa con ejemplos reales en MediaMarkt, Princess y AENA.",
    },
    {
      id: "one-percent-rule",
      title: "La regla del 1%: Construir proyectos reales compaginando trabajo, estudio y vida",
      date: "Edición #03 • Lunes",
      preview:
        "Cuando compaginaba prácticas por la mañana, clases por la tarde y fines de semana trabajando en Port Aventura, aprendí que la constancia de 45 minutos al día vence a los sprints de agotamiento. De esa inercia silenciosa nacieron mi Pomodoro Timer y mi HUD para Assetto Corsa en Patreon...",
      fullHint: "Lee la edición completa sobre el poder del interés compuesto y la técnica de bloques.",
    },
  ],
  ca: [
    {
      id: "auto-excel-python",
      title: "Com vaig passar de perdre hores a Excel a automatitzar processos amb Python",
      date: "Edició #01 • Dilluns",
      preview:
        "En entorns corporatius i suport tècnic vaig veure companys contrastar centenars de dates de convenis a mà. Vaig decidir que cap tasca repetitiva s'havia de fer dues vegades si un script podia resoldre-la en 3 segons. El resultat no només va ser estalviar hores setmanals, sinó canviar la percepció del departament de TI...",
      fullHint: "Llegeix l'edició completa amb el codi i l'arquitectura de l'script a la secció Newsletter.",
    },
    {
      id: "sysadmin-to-developer",
      title: "De suport informàtic i sistemes a desenvolupador: L'avantatge ocult",
      date: "Edició #02 • Dilluns",
      preview:
        "Molts juniors es llancen a picar JavaScript sense entendre què passa rere la pantalla. Haver passat per racks, Active Directory i cables de xarxa em va donar la brúixola que avui em fa resoldre bugs en minuts. Entendre què passa al metall i la xarxa elimina la síndrome de la 'caixa negra'...",
      fullHint: "Llegeix l'edició completa amb exemples reals a MediaMarkt, Princess i AENA.",
    },
    {
      id: "one-percent-rule",
      title: "La regla de l'1%: Construir projectes reals compaginant feina, estudi i vida",
      date: "Edició #03 • Dilluns",
      preview:
        "Quan compaginava pràctiques al matí, classes a la tarda i caps de setmana treballant a Port Aventura, vaig aprendre que la constància de 45 minuts al dia venç els esprints d'esgotament. D'aquesta inèrcia silenciosa van néixer el meu Pomodoro Timer i el meu HUD per a Assetto Corsa a Patreon...",
      fullHint: "Llegeix l'edició completa sobre el poder de l'interès compost i la tècnica de blocs.",
    },
  ],
};

function Newsletter() {
  const [selectedIssue, setSelectedIssue] = useState(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { lang } = useApp();
  const t = translations[lang] || translations.es;
  const issues = sampleIssuesData[lang] || sampleIssuesData.es;
  const current = issues[selectedIssue] || issues[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
    }, 4000);
  };

  return (
    <section className="section newsletter-section" id="newsletter">
      <div className="section-header-left">
        <div className="section-kicker">
          <FiMail />
          <span>{t.newsletter.kicker}</span>
        </div>
        <h2 className="projects-title-v2">{t.newsletter.title}</h2>
        <p className="projects-description-v2">{t.newsletter.subtitle}</p>
      </div>

      <div className="newsletter-card-container">
        {/* Pestañas de correos */}
        <div className="newsletter-tabs">
          {issues.map((issue, idx) => (
            <button
              key={issue.id}
              className={`newsletter-tab-btn ${selectedIssue === idx ? "active" : ""}`}
              onClick={() => setSelectedIssue(idx)}
            >
              <span className="newsletter-tab-date">{issue.date}</span>
              <span className="newsletter-tab-title">{issue.title}</span>
            </button>
          ))}
        </div>

        {/* Vista previa del correo */}
        <div className="newsletter-preview-panel">
          <div className="newsletter-email-header">
            <div className="email-meta-sender">
              <div className="email-avatar-small">KT</div>
              <div>
                <strong>Killian Torrell</strong>
              </div>
            </div>
            <span className="email-badge-issue">{current.date}</span>
          </div>

          <h3 className="newsletter-preview-title">{current.title}</h3>

          <div className="newsletter-preview-body">
            <p>{current.preview}</p>
            <div className="newsletter-fade-overlay">
              <Link to="/newsletter" className="fade-hint-link">
                <FiBookOpen style={{ marginRight: 6 }} /> {current.fullHint}
              </Link>
            </div>
          </div>

          {/* Botón directo a página completa de la newsletter */}
          <div className="newsletter-view-all-cta">
            <Link to="/newsletter" className="btn-go-newsletter-page">
              <span>
                {lang === "es"
                  ? "Ver todas las reflexiones y ediciones completas"
                  : "Veure totes les reflexions i edicions completes"}
              </span>
              <FiArrowRight style={{ marginLeft: 8 }} />
            </Link>
          </div>

          {/* Formulario de suscripción */}
          <form className="newsletter-subscribe-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="newsletter-success-msg">
                <FiCheck style={{ color: "#10b981", fontSize: "1.2rem" }} />
                <span>{t.newsletter.success}</span>
              </div>
            ) : (
              <div className="subscribe-input-group">
                <input
                  type="email"
                  placeholder={t.newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="subscribe-input"
                />
                <button type="submit" className="btn-primary subscribe-btn">
                  <FiSend style={{ marginRight: 6 }} />
                  {t.newsletter.subscribeBtn}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
