import { useState } from "react";
import {
  FiMail,
  FiSend,
  FiCheck,
  FiCopy,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiDownload,
} from "react-icons/fi";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

function Contact({ onOpenCvModal }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const { lang } = useApp();
  const t = translations[lang] || translations.es;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("killiantorrell@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Contacto Portfolio - ${name}`);
    const body = encodeURIComponent(
      `Hola Killian,\n\nSoy ${name} (${email}).\n\n${message}`
    );
    window.open(`mailto:killiantorrell@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
  };

  return (
    <section className="section contact-section" id="contacto">
      <div className="section-header-left">
        <div className="section-kicker">
          <FiMail />
          <span>{t.contact.kicker}</span>
        </div>
        <h2 className="projects-title-v2">{t.contact.title}</h2>
        <p className="projects-description-v2">{t.contact.subtitle}</p>
      </div>

      <div className="contact-grid">
        {/* Cuadro / Formulario */}
        <div className="contact-form-card">
          <h3>{t.contact.formTitle}</h3>
          <p className="form-subtitle">{t.contact.formSubtitle}</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">{t.contact.nameLabel}</label>
              <input
                id="name"
                type="text"
                placeholder={t.contact.namePlaceholder}
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.contact.emailLabel}</label>
              <input
                id="email"
                type="email"
                placeholder="ejemplo@empresa.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contact.messageLabel}</label>
              <textarea
                id="message"
                rows="4"
                placeholder={t.contact.messagePlaceholder}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary btn-submit-contact">
              <FiSend style={{ marginRight: 8 }} />
              {sent ? t.contact.sentBtn : t.contact.sendBtn}
            </button>
          </form>
        </div>

        {/* Canales Directos y Accesos Rápidos */}
        <div className="contact-channels-column">
          {/* Tarjeta de Correo con botón copiar */}
          <div className="contact-direct-card">
            <div className="contact-direct-top">
              <div className="contact-icon-bubble">
                <FiMail />
              </div>
              <div>
                <span className="contact-card-label">
                  {lang === "es" ? "Correo Electrónico" : "Correu Electrònic"}
                </span>
                <a href="mailto:killiantorrell@gmail.com" className="contact-card-value">
                  killiantorrell@gmail.com
                </a>
              </div>
            </div>
            <button onClick={handleCopyEmail} className="btn-copy-email">
              {copied ? (
                <>
                  <FiCheck style={{ color: "#10b981", marginRight: 6 }} /> {t.contact.copiedEmailBtn}
                </>
              ) : (
                <>
                  <FiCopy style={{ marginRight: 6 }} /> {t.contact.copyEmailBtn}
                </>
              )}
            </button>
          </div>

          {/* Tarjetas estilo accesos directos */}
          <div className="contact-social-grid">
            <a
              href="https://www.linkedin.com/in/killiantorrell/"
              target="_blank"
              rel="noreferrer"
              className="social-direct-card"
            >
              <div className="social-card-icon" style={{ color: "#0a66c2" }}>
                <FiLinkedin />
              </div>
              <div className="social-card-info">
                <strong>LinkedIn</strong>
                <span>/in/killiantorrell</span>
              </div>
            </a>

            <a
              href="https://github.com/KillianTR"
              target="_blank"
              rel="noreferrer"
              className="social-direct-card"
            >
              <div className="social-card-icon" style={{ color: "var(--text-main)" }}>
                <FiGithub />
              </div>
              <div className="social-card-info">
                <strong>GitHub</strong>
                <span>/KillianTR</span>
              </div>
            </a>

            <a
              href="tel:+34689892169"
              className="social-direct-card"
            >
              <div className="social-card-icon" style={{ color: "#10b981" }}>
                <FiPhone />
              </div>
              <div className="social-card-info">
                <strong>{lang === "es" ? "Teléfono / WhatsApp" : "Telèfon / WhatsApp"}</strong>
                <span>+34 689 892 169</span>
              </div>
            </a>

            <div className="social-direct-card static-info-card">
              <div className="social-card-icon" style={{ color: "#38bdf8" }}>
                <FiMapPin />
              </div>
              <div className="social-card-info">
                <strong>{lang === "es" ? "Ubicación & Disponibilidad" : "Ubicació & Disponibilitat"}</strong>
                <span>Reus (Tarragona) • Remoto / Híbrido / Presencial</span>
              </div>
            </div>
          </div>

          {/* Botón Descarga de CV */}
          {onOpenCvModal && (
            <div className="contact-cv-box">
              <div>
                <strong>{t.contact.cvBoxTitle}</strong>
                <p>{t.contact.cvBoxDesc}</p>
              </div>
              <button onClick={onOpenCvModal} className="btn-secondary btn-download-cv-full">
                <FiDownload style={{ marginRight: 6 }} /> {t.contact.cvBoxBtn}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
