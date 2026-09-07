import { useState } from "react";
import { FiDownload, FiExternalLink, FiX, FiFileText, FiCheck, FiUserCheck } from "react-icons/fi";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

function CvModal({ isOpen, onClose }) {
  const [recruiterInfo, setRecruiterInfo] = useState("");
  const [downloadTracked, setDownloadTracked] = useState(false);
  const { lang } = useApp();
  const t = translations[lang] || translations.es;

  if (!isOpen) return null;

  const trackDownload = (version) => {
    try {
      fetch("https://formsubmit.co/ajax/killiantorrell@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Evento: "Descarga de CV",
          Version: version,
          Identificacion_Reclutador: recruiterInfo.trim() || "Visita anónima / Reclutador web",
          Fecha: new Date().toLocaleString(),
          _subject: `📥 Descarga de CV (${version}) - ${recruiterInfo.trim() || "Reclutador Web"}`,
          _captcha: "false",
        }),
      }).catch(() => {});
    } catch (_) {}

    setDownloadTracked(true);
    setTimeout(() => setDownloadTracked(false), 4000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar ventana">
          <FiX />
        </button>

        <div className="modal-header">
          <div className="modal-icon-badge">
            <FiFileText />
          </div>
          <h2>{t.cvModal.title}</h2>
          <p>{t.cvModal.subtitle}</p>
        </div>

        {/* Campo opcional de identificación para saber quién descarga el CV */}
        <div className="cv-tracker-input-box">
          <label htmlFor="recruiter-input" className="cv-tracker-label">
            <FiUserCheck style={{ marginRight: 6, color: "var(--accent)" }} />
            {lang === "es"
              ? "Identifícate como empresa / reclutador (opcional):"
              : "Identifica't com a empresa / reclutador (opcional):"}
          </label>
          <input
            id="recruiter-input"
            type="text"
            className="cv-tracker-input"
            placeholder={
              lang === "es"
                ? "Ej: Empresa, Consultora o Nombre de contacto..."
                : "Ex: Empresa, Consultora o Nom de contacte..."
            }
            value={recruiterInfo}
            onChange={(e) => setRecruiterInfo(e.target.value)}
          />
        </div>

        <div className="cv-options-grid">
          {/* Opción Català */}
          <div className="cv-option-card">
            <h3 className="cv-card-clean-title">{t.cvModal.catalaTitle}</h3>
            <p>{t.cvModal.catalaDesc}</p>
            <div className="cv-option-actions">
              <a
                href="/cv-killian-torrell-ca.pdf"
                download="CV_Killian_Torrell_Fernandez_CA.pdf"
                className="btn-cv-download"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackDownload("Català")}
              >
                <FiDownload /> {lang === "es" ? "Descargar PDF" : "Descarregar PDF"}
              </a>
              <a
                href="/cv-killian-torrell-ca.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-cv-preview"
                onClick={() => trackDownload("Previsualización Català")}
              >
                <FiExternalLink /> {lang === "es" ? "Ver" : "Veure"}
              </a>
            </div>
          </div>

          {/* Opción Castellano */}
          <div className="cv-option-card">
            <h3 className="cv-card-clean-title">{t.cvModal.castellanoTitle}</h3>
            <p>{t.cvModal.castellanoDesc}</p>
            <div className="cv-option-actions">
              <a
                href="/cv-killian-torrell-es.pdf"
                download="CV_Killian_Torrell_Fernandez_ES.pdf"
                className="btn-cv-download"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackDownload("Castellano")}
              >
                <FiDownload /> {lang === "es" ? "Descargar PDF" : "Descarregar PDF"}
              </a>
              <a
                href="/cv-killian-torrell-es.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-cv-preview"
                onClick={() => trackDownload("Previsualización Castellano")}
              >
                <FiExternalLink /> {lang === "es" ? "Ver" : "Veure"}
              </a>
            </div>
          </div>
        </div>

        {downloadTracked && (
          <div className="cv-download-alert">
            <FiCheck style={{ marginRight: 6, color: "#10b981" }} />
            <span>
              {lang === "es"
                ? "¡Descarga iniciada! Gracias por tu interés profesional."
                : "Descàrrega iniciada! Gràcies pel teu interès professional."}
            </span>
          </div>
        )}

        <div className="modal-footer-note">
          <span>{t.cvModal.note}</span>
          <a
            href="#contacto"
            onClick={onClose}
            className="modal-contact-link"
          >
            {lang === "es" ? "Ir al formulario de contacto" : "Anar al formulari de contacte"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default CvModal;
