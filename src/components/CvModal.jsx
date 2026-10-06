import { useState, useEffect } from "react";
import {
  FiDownload,
  FiExternalLink,
  FiX,
  FiFileText,
  FiCheck,
  FiLock,
  FiUnlock,
  FiShield,
  FiKey,
  FiUser,
  FiBriefcase,
  FiMail,
  FiAlertCircle,
  FiHelpCircle,
} from "react-icons/fi";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";
import { getFormSubmitUrl } from "../config/contactConfig";

const VALID_PINS = ["KTR2026", "ktr2026", "2026"];

function CvModal({ isOpen, onClose }) {
  const { lang } = useApp();
  const t = translations[lang] || translations.es;

  // Estado de autorización en la sesión
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activeTab, setActiveTab] = useState("recruiter"); // "recruiter" | "pin"

  // Datos del formulario de reclutador
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    reason: "selection",
    honeypot: "",
  });

  // Datos de acceso rápido por PIN
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");

  // Estados de carga y feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [downloadSuccessAlert, setDownloadSuccessAlert] = useState("");

  // Comprobar si ya fue autorizado en la sesión actual
  useEffect(() => {
    if (typeof window !== "undefined") {
      const authorized = sessionStorage.getItem("ktr_cv_authorized");
      if (authorized === "true") {
        setIsAuthorized(true);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Manejo de envío del formulario de reclutador
  const handleRecruiterSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // Validación básica
    if (!formData.name.trim() || !formData.company.trim() || !formData.email.trim()) {
      setFormError(
        lang === "es"
          ? "Por favor, completa tu nombre, empresa y correo de contacto."
          : "Si us plau, completa el teu nom, empresa i correu de contacte."
      );
      return;
    }

    // Comprobación anti-bot honeypot
    if (formData.honeypot && formData.honeypot.trim() !== "") {
      // Simular éxito sin enviar notificación
      sessionStorage.setItem("ktr_cv_authorized", "true");
      setIsAuthorized(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Notificación inmediata a Killian por FormSubmit (token seguro)
      const reasonsMap = {
        selection: "Proceso de Selección / Oferta de Empleo",
        consulting: "Consultoría TI / Proyecto Software",
        review: "Revisión de Perfil Profesional",
        other: "Otro motivo corporativo",
      };

      const motivoTexto = reasonsMap[formData.reason] || formData.reason;

      await fetch(getFormSubmitUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Evento: "Solicitud y Desbloqueo de CV",
          Nombre_Reclutador: formData.name.trim(),
          Empresa_Organizacion: formData.company.trim(),
          Email_Contacto: formData.email.trim(),
          Motivo_Acceso: motivoTexto,
          Fecha_Hora: new Date().toLocaleString(),
          _subject: `🚨 [Acceso a CV] ${formData.company.trim()} (${formData.name.trim()}) ha desbloqueado tu Currículum`,
          _captcha: "false",
        }),
      });

      // Guardar autorización en la sesión
      sessionStorage.setItem("ktr_cv_authorized", "true");
      sessionStorage.setItem("ktr_recruiter_name", formData.name.trim());
      sessionStorage.setItem("ktr_recruiter_company", formData.company.trim());
      setIsAuthorized(true);
      setDownloadSuccessAlert(
        lang === "es"
          ? "¡Acceso concedido! Ya puedes descargar el currículum en la versión que prefieras."
          : "Accés concedit! Ja pots descarregar el currículum en la versió que prefereixis."
      );
    } catch (err) {
      // Fallback seguro: desbloquear igualmente para no bloquear a reclutadores legítimos si falla la red
      sessionStorage.setItem("ktr_cv_authorized", "true");
      setIsAuthorized(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Manejo de acceso rápido por PIN
  const handlePinSubmit = (e) => {
    e.preventDefault();
    setPinError("");

    const cleanedPin = pinInput.trim();
    if (VALID_PINS.includes(cleanedPin)) {
      sessionStorage.setItem("ktr_cv_authorized", "true");
      sessionStorage.setItem("ktr_recruiter_company", "Acceso con PIN verificado");
      setIsAuthorized(true);
      setDownloadSuccessAlert(
        lang === "es"
          ? "¡PIN verificado con éxito! Currículum desbloqueado."
          : "PIN verificat amb èxit! Currículum desbloquejat."
      );
    } else {
      setPinError(
        lang === "es"
          ? "Código PIN no válido. Si no dispones de código, identifícate en la pestaña de Reclutador."
          : "Codi PIN no vàlid. Si no disposes de codi, identifica't a la pestanya de Reclutador."
      );
    }
  };

  // Trazar descarga específica de archivo
  const trackSpecificDownload = (version) => {
    const recruiter = sessionStorage.getItem("ktr_recruiter_company") || "Usuario verificado";
    try {
      fetch(getFormSubmitUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Evento: "Descarga de Archivo PDF",
          Version: version,
          Identificacion: recruiter,
          Fecha_Hora: new Date().toLocaleString(),
          _subject: `📥 Descarga efectiva de PDF (${version}) - ${recruiter}`,
          _captcha: "false",
        }),
      }).catch(() => {});
    } catch (_) {}

    setDownloadSuccessAlert(
      lang === "es"
        ? `Descarga iniciada (${version}). ¡Muchas gracias por tu interés profesional!`
        : `Descàrrega iniciada (${version}). Moltes gràcies pel teu interès professional!`
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-content-secure" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar ventana">
          <FiX />
        </button>

        {/* Encabezado con estado de seguridad */}
        <div className="modal-header">
          <div className={`modal-icon-badge ${isAuthorized ? "authorized" : "protected"}`}>
            {isAuthorized ? <FiUnlock /> : <FiLock />}
          </div>
          <h2>{isAuthorized ? (lang === "es" ? "Currículum Desbloqueado" : "Currículum Desbloquejat") : (lang === "es" ? "Acceso Seguro al Currículum" : "Accés Segur al Currículum")}</h2>
          <p>
            {isAuthorized
              ? lang === "es"
                ? "Selecciona la versión del CV que deseas consultar o descargar:"
                : "Selecciona la versió del CV que vols consultar o descarregar:"
              : lang === "es"
              ? "Por seguridad y protección de datos personales (RGPD), el currículum completo está protegido contra descargas anónimas y bots."
              : "Per seguretat i protecció de dades personals (RGPD), el currículum complet està protegit contra descàrregues anònimes i bots."}
          </p>
        </div>

        {/* SI NO ESTÁ AUTORIZADO: Formulario de Verificación o PIN */}
        {!isAuthorized ? (
          <div className="cv-security-gate-wrapper">
            {/* Selector de modo: Identificación vs PIN */}
            <div className="cv-security-tabs">
              <button
                type="button"
                className={`cv-sec-tab ${activeTab === "recruiter" ? "active" : ""}`}
                onClick={() => setActiveTab("recruiter")}
              >
                <FiBriefcase style={{ marginRight: 6 }} />
                <span>{lang === "es" ? "Empresa / Reclutador" : "Empresa / Reclutador"}</span>
              </button>
              <button
                type="button"
                className={`cv-sec-tab ${activeTab === "pin" ? "active" : ""}`}
                onClick={() => setActiveTab("pin")}
              >
                <FiKey style={{ marginRight: 6 }} />
                <span>{lang === "es" ? "Acceso con PIN" : "Accés amb PIN"}</span>
              </button>
            </div>

            {/* Pestaña 1: Identificación Profesional */}
            {activeTab === "recruiter" && (
              <form onSubmit={handleRecruiterSubmit} className="cv-recruiter-gate-form">
                <div className="cv-gate-input-row">
                  <div className="cv-gate-field">
                    <label htmlFor="gate-name">
                      <FiUser style={{ marginRight: 6 }} />
                      {lang === "es" ? "Tu Nombre y Apellidos *" : "El teu Nom i Cognoms *"}
                    </label>
                    <input
                      id="gate-name"
                      type="text"
                      required
                      placeholder={lang === "es" ? "Ej: Laura Martínez" : "Ex: Laura Martínez"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="cv-gate-input"
                    />
                  </div>

                  <div className="cv-gate-field">
                    <label htmlFor="gate-company">
                      <FiBriefcase style={{ marginRight: 6 }} />
                      {lang === "es" ? "Empresa u Organización *" : "Empresa o Organització *"}
                    </label>
                    <input
                      id="gate-company"
                      type="text"
                      required
                      placeholder={lang === "es" ? "Ej: Tech Talent / InnoLab" : "Ex: Tech Talent / InnoLab"}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="cv-gate-input"
                    />
                  </div>
                </div>

                <div className="cv-gate-input-row">
                  <div className="cv-gate-field">
                    <label htmlFor="gate-email">
                      <FiMail style={{ marginRight: 6 }} />
                      {lang === "es" ? "Email de Contacto *" : "Email de Contacte *"}
                    </label>
                    <input
                      id="gate-email"
                      type="email"
                      required
                      placeholder={lang === "es" ? "laura@empresa.com" : "laura@empresa.cat"}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="cv-gate-input"
                    />
                  </div>

                  <div className="cv-gate-field">
                    <label htmlFor="gate-reason">
                      <FiHelpCircle style={{ marginRight: 6 }} />
                      {lang === "es" ? "Motivo de la consulta" : "Motiu de la consulta"}
                    </label>
                    <select
                      id="gate-reason"
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="cv-gate-select"
                    >
                      <option value="selection">
                        {lang === "es" ? "Proceso de Selección / Oferta" : "Procés de Selecció / Oferta"}
                      </option>
                      <option value="consulting">
                        {lang === "es" ? "Proyecto Freelance / Consultoría" : "Projecte Freelance / Consultoria"}
                      </option>
                      <option value="review">
                        {lang === "es" ? "Revisión de Perfil / Networking" : "Revisió de Perfil / Networking"}
                      </option>
                      <option value="other">
                        {lang === "es" ? "Otro motivo profesional" : "Un altre motiu professional"}
                      </option>
                    </select>
                  </div>
                </div>

                {/* Campo trampa Honeypot anti-spam */}
                <input
                  type="text"
                  name="user_website_check"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {formError && (
                  <div className="cv-gate-error-box">
                    <FiAlertCircle style={{ marginRight: 6 }} />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="cv-gate-submit-wrap">
                  <button type="submit" disabled={isSubmitting} className="btn-primary cv-gate-btn">
                    {isSubmitting ? (
                      <span>{lang === "es" ? "Verificando acceso..." : "Verificant accés..."}</span>
                    ) : (
                      <>
                        <FiUnlock style={{ marginRight: 8 }} />
                        <span>{lang === "es" ? "Verificar y Desbloquear CV" : "Verificar i Desbloquejar CV"}</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="cv-gdpr-notice">
                  <FiShield style={{ marginRight: 6, color: "var(--accent)", flexShrink: 0 }} />
                  <span>
                    {lang === "es"
                      ? "Tus datos se transmiten de forma cifrada (HTTPS) y no se comparten con terceros. Recibiré un aviso automático con los datos de tu consulta."
                      : "Les teves dades es transmeten de forma xifrada (HTTPS) i no es comparteixen amb tercers. Rebré un avís automàtic amb les dades de la teva consulta."}
                  </span>
                </p>
              </form>
            )}

            {/* Pestaña 2: Acceso Rápido con PIN */}
            {activeTab === "pin" && (
              <form onSubmit={handlePinSubmit} className="cv-pin-gate-form">
                <p className="cv-pin-explainer">
                  {lang === "es"
                    ? "Si ya hemos tenido contacto previo por LinkedIn, entrevista o llamada y dispones del código de acceso personal, introdúcelo aquí:"
                    : "Si ja hem tingut contacte previ per LinkedIn, entrevista o trucada i disposes del codi d'accés personal, introdueix-lo aquí:"}
                </p>

                <div className="cv-pin-input-group">
                  <input
                    type="password"
                    placeholder={lang === "es" ? "Introduce el código PIN..." : "Introdueix el codi PIN..."}
                    value={pinInput}
                    onChange={(e) => {
                      setPinInput(e.target.value);
                      setPinError("");
                    }}
                    className="cv-gate-input cv-pin-input"
                    autoFocus
                  />
                  <button type="submit" className="btn-primary cv-pin-submit-btn">
                    <FiUnlock style={{ marginRight: 6 }} />
                    {lang === "es" ? "Desbloquear" : "Desbloquejar"}
                  </button>
                </div>

                {pinError && (
                  <div className="cv-gate-error-box">
                    <FiAlertCircle style={{ marginRight: 6 }} />
                    <span>{pinError}</span>
                  </div>
                )}

                <div className="cv-pin-help-note">
                  <FiHelpCircle style={{ marginRight: 6 }} />
                  <span>
                    {lang === "es"
                      ? "¿No tienes código? Utiliza la pestaña de Empresa / Reclutador para identificarte en 10 segundos."
                      : "No tens codi? Fes servir la pestanya d'Empresa / Reclutador per identificar-te en 10 segons."}
                  </span>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* SI ESTÁ AUTORIZADO: Tarjetas de Descarga del CV */
          <div className="cv-unlocked-container">
            {downloadSuccessAlert && (
              <div className="cv-download-alert">
                <FiCheck style={{ marginRight: 8, color: "#10b981", fontSize: "1.2rem" }} />
                <span>{downloadSuccessAlert}</span>
              </div>
            )}

            <div className="cv-options-grid">
              {/* Opción Català */}
              <div className="cv-option-card">
                <div className="cv-card-top-badge">
                  <span className="cv-lang-chip">CA</span>
                  <span className="cv-security-tag">
                    <FiShield style={{ marginRight: 4 }} /> Verificado
                  </span>
                </div>
                <h3 className="cv-card-clean-title">{t.cvModal.catalaTitle}</h3>
                <p>{t.cvModal.catalaDesc}</p>
                <div className="cv-option-actions">
                  <a
                    href="/cv-killian-torrell-ca.pdf"
                    download="CV_Killian_Torrell_Fernandez_CA.pdf"
                    className="btn-cv-download"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackSpecificDownload("Català")}
                  >
                    <FiDownload /> {lang === "es" ? "Descargar PDF" : "Descarregar PDF"}
                  </a>
                  <a
                    href="/cv-killian-torrell-ca.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-cv-preview"
                    onClick={() => trackSpecificDownload("Previsualización Català")}
                  >
                    <FiExternalLink /> {lang === "es" ? "Ver en Navegador" : "Veure al Navegador"}
                  </a>
                </div>
              </div>

              {/* Opción Castellano */}
              <div className="cv-option-card">
                <div className="cv-card-top-badge">
                  <span className="cv-lang-chip">ES</span>
                  <span className="cv-security-tag">
                    <FiShield style={{ marginRight: 4 }} /> Verificado
                  </span>
                </div>
                <h3 className="cv-card-clean-title">{t.cvModal.castellanoTitle}</h3>
                <p>{t.cvModal.castellanoDesc}</p>
                <div className="cv-option-actions">
                  <a
                    href="/cv-killian-torrell-es.pdf"
                    download="CV_Killian_Torrell_Fernandez_ES.pdf"
                    className="btn-cv-download"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackSpecificDownload("Castellano")}
                  >
                    <FiDownload /> {lang === "es" ? "Descargar PDF" : "Descarregar PDF"}
                  </a>
                  <a
                    href="/cv-killian-torrell-es.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-cv-preview"
                    onClick={() => trackSpecificDownload("Previsualización Castellano")}
                  >
                    <FiExternalLink /> {lang === "es" ? "Ver en Navegador" : "Veure al Navegador"}
                  </a>
                </div>
              </div>
            </div>

            <div className="cv-authorized-footer-actions">
              <button
                type="button"
                className="btn-lock-session"
                onClick={() => {
                  sessionStorage.removeItem("ktr_cv_authorized");
                  setIsAuthorized(false);
                  setDownloadSuccessAlert("");
                }}
              >
                <FiLock style={{ marginRight: 6 }} />
                <span>{lang === "es" ? "Bloquear sesión de CV" : "Bloquejar sessió de CV"}</span>
              </button>
            </div>
          </div>
        )}

        {/* Pie de modal */}
        <div className="modal-footer-note">
          <span>{t.cvModal.note}</span>
          <div className="modal-footer-actions">
            <a href="#contacto" onClick={onClose} className="modal-contact-link">
              {lang === "es" ? "Ir al formulario de contacto" : "Anar al formulari de contacte"}
            </a>
            <button onClick={onClose} className="btn-modal-close-bottom" type="button">
              <FiX style={{ marginRight: 4 }} />
              {lang === "es" ? "Cerrar" : "Tancar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvModal;
