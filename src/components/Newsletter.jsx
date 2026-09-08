import { useState } from "react";
import { FiMail, FiSend, FiCheck, FiBookOpen } from "react-icons/fi";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

const sampleIssuesData = {
  es: [
    {
      id: "auto",
      title: "Cómo estoy automatizando mi trabajo con Python y scripts",
      date: "Edición reciente",
      preview:
        "Cuando empecé a trabajar en soporte y gestión técnica, me di cuenta de la cantidad de tiempo que se pierde copiando datos de un Excel a otro o revisando fechas de vencimiento a mano. Decidí que cada tarea repetitiva debía tener su propio script. El resultado no solo fue ahorrar horas semanales, sino...",
      fullHint: "Suscríbete gratis para leer cómo estructuré los scripts y qué librerías me ahorraron más tiempo.",
    },
    {
      id: "tech-path",
      title: "De técnico de sistemas a programador: lo que aprendí",
      date: "Reflexión",
      preview:
        "Venir de la administración de sistemas (ASIX/SMX) te da una visión que muchos desarrolladores tardan años en adquirir: entiendes de verdad cómo viajan los paquetes en la red, cómo funciona un proxy, por qué falla un certificado SSL o cómo responde un servidor. Al dar el salto al desarrollo web con React y Java...",
      fullHint: "Suscríbete gratis para leer la comparativa entre la mentalidad de soporte y la de creación de software.",
    },
    {
      id: "one-percent",
      title: "Mejorar un 1% cada día en el mundo tecnológico",
      date: "Productividad",
      preview:
        "El sector tecnológico puede abrumar con la cantidad de frameworks y novedades que salen cada mes. La clave que me ha funcionado no es intentar aprenderlo todo de golpe, sino dedicar 45 minutos al día a construir proyectos reales (como mi Pomodoro Timer o mi HUD para simracing)...",
      fullHint: "Suscríbete gratis para recibir hábitos y recursos recomendados que comparto periódicamente.",
    },
  ],
  ca: [
    {
      id: "auto",
      title: "Com estic automatitzant la meva feina amb Python i scripts",
      date: "Edició recent",
      preview:
        "Quan vaig començar a treballar en suport i gestió tècnica, em vaig adonar de la quantitat de temps que es perd copiant dades d'un Excel a un altre o revisant dates de venciment a mà. Vaig decidir que cada tasca repetitiva havia de tenir el seu propi script. El resultat no només va ser estalviar hores setmanals, sinó...",
      fullHint: "Subscriu-te de franc per llegir com vaig estructurar els scripts i quines llibreries em van estalviar més temps.",
    },
    {
      id: "tech-path",
      title: "De tècnic de sistemes a programador: el que vaig aprendre",
      date: "Reflexió",
      preview:
        "Venir de l'administració de sistemes (ASIX/SMX) et dona una visió que molts desenvolupadors triguen anys a adquirir: entens de debò com viatgen els paquets a la xarxa, com funciona un proxy, per què falla un certificat SSL o com respon un servidor. En fer el salt al desenvolupament web amb React i Java...",
      fullHint: "Subscriu-te de franc per llegir la comparativa entre la mentalitat de suport i la de creació de programari.",
    },
    {
      id: "one-percent",
      title: "Millorar un 1% cada dia en el món tecnològic",
      date: "Productivitat",
      preview:
        "El sector tecnològic pot aclaparrar amb la quantitat de frameworks i novetats que surten cada mes. La clau que m'ha funcionat no és intentar aprendre-ho tot de cop, sinó dedicar 45 minuts al dia a construir projectes reals (com el meu Pomodoro Timer o el meu HUD per a simracing)...",
      fullHint: "Subscriu-te de franc per rebre hàbits i recursos recomanats que comparteixo periòdicament.",
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
              <span className="fade-hint">
                <FiBookOpen style={{ marginRight: 6 }} /> {current.fullHint}
              </span>
            </div>
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
