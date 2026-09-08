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
  FiLock,
} from "react-icons/fi";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";
import { getFormSubmitUrl, getContactEmail } from "../config/contactConfig";

function Contact({ onOpenCvModal }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const { lang } = useApp();
  const t = translations[lang] || translations.es;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    // Si el campo trampa (honeypot) fue rellenado por un bot, simular envío sin disparar nada
    if (formData.honeypot && formData.honeypot.trim() !== "") {
      setTimeout(() => {
        setSent(true);
        setSending(false);
      }, 600);
      return;
    }

    try {
      const res = await fetch(getFormSubmitUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nombre: formData.name,
          Email: formData.email,
          Mensaje: formData.message,
          _subject: `Nuevo mensaje de ${formData.name} desde Portfolio`,
          _captcha: "false",
          _honey: formData.honeypot || "",
        }),
      });
      if (res.ok) {
        setSent(true);
        setFormData({ name: "", email: "", message: "", honeypot: "" });
      } else {
        const contactEmail = getContactEmail();
        window.open(
          `mailto:${contactEmail}?subject=Contacto Portfolio - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`,
          "_blank"
        );
        setSent(true);
      }
    } catch (err) {
      const contactEmail = getContactEmail();
      window.open(
        `mailto:${contactEmail}?subject=Contacto Portfolio - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`,
        "_blank"
      );
      setSent(true);
    } finally {
      setSending(false);
    }
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
        {/* Formulario de contacto directo */}
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

            {/* Campo trampa antispam (Honeypot invisible para humanos, bloquea bots) */}
            <input
              type="text"
              name="_honey"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />

            <button
              type="submit"
              className="btn-primary btn-submit-contact"
              disabled={sending}
            >
              <FiSend style={{ marginRight: 8 }} />
              {sending
                ? (lang === "es" ? "Enviando mensaje..." : "Enviant missatge...")
                : sent
                ? (lang === "es" ? "¡Mensaje enviado con éxito!" : "Missatge enviat amb èxit!")
                : t.contact.sendBtn}
            </button>

            {/* Aviso de Privacidad y Datos Sensibles */}
            <p className="form-privacy-note">
              <FiLock style={{ marginRight: 6, flexShrink: 0 }} />
              <span>{t.contact.privacyNotice}</span>
            </p>

            {sent && (
              <p className="form-success-note">
                <FiCheck style={{ marginRight: 6, color: "#10b981" }} />
                {lang === "es"
                  ? "Gracias por escribir. Te responderé directamente a tu correo."
                  : "Gràcies per escriure. Et respondré directament al teu correu."}
              </p>
            )}
          </form>
        </div>

        {/* Canales Directos y Accesos Rápidos */}
        <div className="contact-channels-column">
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

            <div className="social-direct-card static-info-card">
              <div className="social-card-icon" style={{ color: "#38bdf8" }}>
                <FiMapPin />
              </div>
              <div className="social-card-info">
                <strong>{lang === "es" ? "Disponibilidad Laboral" : "Disponibilitat Laboral"}</strong>
                <span>Presencial / Híbrido / Remoto</span>
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
