import { useState } from "react";
import { FiDownload, FiExternalLink, FiX, FiFileText, FiCheck } from "react-icons/fi";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

function CvModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const { lang } = useApp();
  const t = translations[lang] || translations.es;

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("killiantorrell@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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

        <div className="cv-options-grid">
          {/* Opción Català */}
          <div className="cv-option-card">
            <div className="cv-option-tag">{t.cvModal.catalaTag}</div>
            <h3>{t.cvModal.catalaTitle}</h3>
            <p>{t.cvModal.catalaDesc}</p>
            <div className="cv-option-actions">
              <a
                href="/cv-killian-torrell-ca.pdf"
                download="CV_Killian_Torrell_Fernandez_CA.pdf"
                className="btn-cv-download"
                target="_blank"
                rel="noreferrer"
              >
                <FiDownload /> {lang === "es" ? "Descargar PDF" : "Descarregar PDF"}
              </a>
              <a
                href="/cv-killian-torrell-ca.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-cv-preview"
              >
                <FiExternalLink /> {lang === "es" ? "Ver" : "Veure"}
              </a>
            </div>
          </div>

          {/* Opción Castellano */}
          <div className="cv-option-card">
            <div className="cv-option-tag cv-option-tag-es">{t.cvModal.castellanoTag}</div>
            <h3>{t.cvModal.castellanoTitle}</h3>
            <p>{t.cvModal.castellanoDesc}</p>
            <div className="cv-option-actions">
              <a
                href="/cv-killian-torrell-es.pdf"
                download="CV_Killian_Torrell_Fernandez_ES.pdf"
                className="btn-cv-download"
                target="_blank"
                rel="noreferrer"
              >
                <FiDownload /> {lang === "es" ? "Descargar PDF" : "Descarregar PDF"}
              </a>
              <a
                href="/cv-killian-torrell-es.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-cv-preview"
              >
                <FiExternalLink /> {lang === "es" ? "Ver" : "Veure"}
              </a>
            </div>
          </div>
        </div>

        <div className="modal-footer-note">
          <span>{t.cvModal.note}</span>
          <button onClick={handleCopyEmail} className="modal-email-btn">
            {copied ? (
              <>
                <FiCheck style={{ color: "#10b981" }} />{" "}
                {lang === "es" ? "¡Copiado: killiantorrell@gmail.com!" : "Copiat: killiantorrell@gmail.com!"}
              </>
            ) : (
              t.cvModal.copyEmail
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CvModal;
