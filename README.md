# Portfolio Profesional — Killian Torrell

[![Sitio Web en Vivo](https://img.shields.io/badge/Demo_Online-killiantr.vercel.app-38bdf8?style=for-the-badge&logo=vercel&logoColor=white)](https://killiantr.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Killian_Torrell-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/killiantorrell/)
[![GitHub](https://img.shields.io/badge/GitHub-KillianTR-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/KillianTR)
[![React](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)

> Plataforma web interactiva desarrollada en **React** y desplegada en **Vercel**. Diseñada con arquitectura moderna, experiencia de usuario fluida, soporte bilingüe completo (Castellano / Català), selector de tema (Dark / Light) y optimizada para la evaluación técnica por parte de reclutadores y equipos de selección tecnológica.

---

## 🌟 Características Principales

- **🌐 Soporte Bilingüe Reactivo (ES / CA)**:
  - Conmutación instantánea entre **Castellano** y **Català** mediante `AppContext` global sin recargar la página.
  - Traducción completa de experiencia, formación, proyectos y textos de interfaz.

- **🎨 Diseño UI/UX Moderno & Doble Tema**:
  - Estética *Glassmorphism* con `backdrop-filter: blur(16px)` en cabecera semitransparente.
  - Barra de navegación con **ScrollSpy dinámico** que resalta la sección activa con un subrayado exacto a la anchura del texto.
  - Conmutador fluido entre **Modo Oscuro** (paleta Slate / Navy profunda) y **Modo Claro** de alto contraste y legibilidad.

- **💼 Trayectoria Laboral Cronológica Detallada**:
  - Experiencia corporativa en entornos críticos y corporativos:
    - **AENA** (*Aeropuerto de Reus*): Soporte microinformático N1/N2, administración de Active Directory y puestos corporativos en entorno aeroportuario de alta seguridad.
    - **AEQT** (*Asociación de Empresas Químicas de Tarragona*): Mantenimiento y desarrollo web (WordPress, React, PHP), automatización de convenios internos con Python/PowerShell y analítica digital.
    - **MediaMarkt**: Servicio técnico de taller, diagnóstico y reparación de hardware, atención al cliente y desarrollo de software interno para control de stock.
    - **Princess Hotels & Resorts**: Helpdesk corporativo N1/N2, despliegue de TPVs, redes VLANs y consultas en bases de datos Oracle SQL.
    - **Plateforme des Aidants** (*Angulema, Francia*): Desarrollo web frontend e integración multimedia en estancia internacional.
    - **Activa Mutua** & **Andrés Pintaluba S.A.**: Inicios y consolidación técnica en administración de redes locales y microinformática (SMX).

- **🚀 Showcase de Proyectos con Filtros Interactivos**:
  - Filtro por categorías: *Web & Apps*, *Automatización & Python*, *Software & Patreon* y *Sistemas*.
  - Proyectos reales y monetizados:
    - **DTM HUD PRO / Simracing Telemetry**: Telemetría y HUD en tiempo real desarrollado en Lua y CSP para Assetto Corsa (modelo freemium distribuido en Patreon).
    - **Pomodoro Timer App**: Aplicación web de productividad minimalista estilo Vercel desarrollada en React.
    - **Plataforma XML AEQT**: Procesador y validador de datos automatizado.

- **🎓 Formación y Certificaciones Oficiales**:
  - **Titulaciones Oficiales**:
    - *FullStack Junior Web Developer con Java* (Bootcamp Especializado, TechTalent).
    - *Ciclo Formativo Grado Superior: ASIX* (Administración de Sistemas Informáticos en Red, INS Baix Camp).
    - *Ciclo Formativo Grado Medio: SMX* (Sistemas Microinformáticos y Redes, INS Baix Camp).
  - **4 Certificaciones Oficiales Microsoft**:
    - Microsoft Certified: **Azure Fundamentals** (`AZ-900`)
    - Microsoft Certified: **Azure Data Fundamentals** (`DP-900`)
    - Microsoft Certified: **Azure AI Fundamentals** (`AI-900`)
    - Microsoft Certified: **Security, Compliance, and Identity Fundamentals** (`SC-900`)
  - **Certificaciones Adicionales**:
    - **CISCO Networking Academy** (`CCNA Module` • Cisco)
    - **Adobe Photoshop CC** (`Diseño & Retoque Digital` • Crehana)

- **📄 Módulo de Descarga de CV para RRHH**:
  - Modal interactivo para reclutadores que permite previsualizar o descargar el **CV completo en PDF** tanto en **Catalán** como en **Castellano** en un solo clic.

- **📩 Formulario de Contacto Funcional**:
  - Conexión vía API AJAX con FormSubmit para el envío instantáneo de mensajes directos al correo electrónico, con validación en vivo y feedback inmediato de éxito.

- **🛒 Recomendaciones de Setup**:
  - Página dedicada (`/recomendaciones`) con el equipamiento de hardware, periféricos, estación de trabajo y accesorios tecnológicos recomendados.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Frontend** | React 19, JavaScript (ES6+), HTML5 Semántico, CSS3 Moderno |
| **Enrutamiento** | React Router DOM v7 |
| **Iconografía** | React Icons (Feather Icons, Simple Icons, VS Code Icons) |
| **Estilos** | CSS Puro (CSS Variables, Flexbox, CSS Grid, Glassmorphism, Responsive Design) |
| **Build & Tooling** | Vite v7, ESLint |
| **Formularios** | Integración AJAX FormSubmit |
| **CI / CD & Hosting** | Vercel (despliegue continuo automatizado desde rama `main`) |

---

## 📁 Estructura del Proyecto

```text
KillianTR/
├── public/                     # Recursos estáticos (PDFs de CV, logos, capturas)
│   ├── cv-killian-torrell-ca.pdf
│   ├── cv-killian-torrell-es.pdf
│   ├── KTR-logo.png
│   └── recs/                   # Imágenes de setup y productos
├── src/
│   ├── components/             # Componentes modulares y reutilizables
│   │   ├── Navbar.jsx          # Cabecera translúcida con ScrollSpy y controles
│   │   ├── Hero.jsx            # Presentación, badges y CTAs
│   │   ├── TechTicker.jsx      # Carrusel infinito de tecnologías y skills
│   │   ├── Experience.jsx      # Cronología de puestos y roles corporativos
│   │   ├── Projects.jsx        # Catálogo interactivo de proyectos con filtros
│   │   ├── Education.jsx       # Estudios oficiales, certificaciones e idiomas
│   │   ├── AboutMe.jsx         # Biografía y pilares profesionales
│   │   ├── Newsletter.jsx      # Sección de publicaciones y reflexiones técnicas
│   │   ├── Contact.jsx         # Formulario de contacto y accesos directos
│   │   ├── CvModal.jsx         # Modal de descarga y previsualización de CV
│   │   └── Footer.jsx          # Pie de página y enlaces a perfiles
│   ├── context/
│   │   └── AppContext.jsx      # Contexto global para gestión de idioma y tema
│   ├── pages/                  # Vistas principales y rutas
│   │   ├── Home.jsx
│   │   ├── RecommendationsPage.jsx
│   │   └── NewsletterPage.jsx
│   ├── translations/
│   │   └── translations.js     # Diccionario completo de textos bilingües (ES / CA)
│   ├── App.jsx                 # Configuración de rutas y modal global
│   ├── main.jsx                # Punto de entrada de la aplicación
│   └── styles.css              # Sistema de estilos global, variables y modo claro/oscuro
├── index.html                  # Plantilla HTML base con metaetiquetas SEO y OpenGraph
├── package.json
└── README.md
```

---

## 💻 Instalación y Ejecución Local

Para clonar y ejecutar este portfolio en tu entorno local:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/KillianTR/Portfolio.git
   cd Portfolio
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   La aplicación se abrirá en `http://localhost:5173/`.

4. **Compilar para producción**:
   ```bash
   npm run build
   ```

5. **Previsualizar la compilación de producción**:
   ```bash
   npm run preview
   ```

---

## 🌿 Flujo de Trabajo (Git Flow)

El proyecto sigue una metodología de ramas temáticas (**feature branches**) para garantizar un repositorio limpio y ordenado:

- **`main`**: Rama de producción protegida y vinculada al despliegue continuo en Vercel.
- **`feature/<nombre-de-funcionalidad>`**: Ramas de desarrollo para implementar nuevas secciones, componentes o refactorizaciones.
- **Commits Semánticos**: Uso del estándar *Conventional Commits* (`feat:`, `fix:`, `style:`, `refactor:`, `docs:`).

---

## 📬 Contacto y Redes

- **Sitio Web Oficial**: [killiantr.vercel.app](https://killiantr.vercel.app/)
- **LinkedIn**: [/in/killiantorrell](https://www.linkedin.com/in/killiantorrell/)
- **GitHub**: [@KillianTR](https://github.com/KillianTR)
- **Correo Electrónico**: Disponible a través del [formulario de contacto web](https://killiantr.vercel.app/#contacto)

---

Desarrollado con dedicación por **Killian Torrell**.
