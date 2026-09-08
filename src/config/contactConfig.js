// Configuración centralizada de Contacto, Privacidad y Antispam
// ==============================================================================
// Para evitar la exposición pública de tu email y prevenir spam de scrapers,
// FormSubmit permite utilizar un token alfanumérico anónimo (ej: 4a6c8e...).
//
// ¿Cómo activarlo?:
// 1. Al enviar el formulario a tu email por primera vez, FormSubmit te envía un correo
//    de confirmación.
// 2. Al pulsar en el enlace de confirmación, FormSubmit te asigna un token anónimo
//    (Random Token).
// 3. Puedes definir ese token en la variable de entorno VITE_FORMSUBMIT_TOKEN
//    en tu archivo .env local y en el panel de Vercel (Environment Variables).
// ==============================================================================

const FORMSUBMIT_TOKEN =
  import.meta.env.VITE_FORMSUBMIT_TOKEN || "6bc595ba0b07c66320af55c8b70bbc1f";

/**
 * Devuelve la URL del endpoint de FormSubmit.
 * Si se ha configurado un token, el email queda completamente oculto.
 */
export const getFormSubmitUrl = () => {
  if (FORMSUBMIT_TOKEN && FORMSUBMIT_TOKEN.trim() !== "") {
    return `https://formsubmit.co/ajax/${FORMSUBMIT_TOKEN.trim()}`;
  }

  // Ofuscación dinámica para evitar que bots y scrapers detecten el email en texto plano
  const u = "killiantorrell";
  const d = "gmail.com";
  return `https://formsubmit.co/ajax/${u}@${d}`;
};

/**
 * Devuelve el email de contacto de forma ofuscada para clientes de correo (mailto)
 */
export const getContactEmail = () => {
  const u = "killiantorrell";
  const d = "gmail.com";
  return `${u}@${d}`;
};

