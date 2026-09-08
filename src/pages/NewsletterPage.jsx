import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiMail,
  FiSend,
  FiClock,
  FiBookOpen,
  FiTag,
  FiX,
  FiShare2,
  FiCheckCircle,
} from "react-icons/fi";
import { useApp } from "../context/AppContext";

export const newsletterArticles = {
  es: [
    {
      id: "auto-excel-python",
      category: "automation",
      categoryLabel: "Automatización & Python",
      date: "Edición #01 • Lunes",
      readTime: "5 min de lectura",
      title: "Cómo pasé de perder horas en Excel a automatizar procesos con Python",
      excerpt:
        "En entornos corporativos y soporte técnico vi a compañeros contrastar cientos de fechas de convenios a mano. Decidí que ninguna tarea repetitiva debía hacerse dos veces si un script podía resolverla en 3 segundos.",
      intro:
        "El mayor enemigo de la productividad en una oficina no son las reuniones largas: son las tareas invisibles que todo el mundo asume como 'normales' simplemente porque siempre se han hecho así.",
      sections: [
        {
          heading: "El dolor cotidiano de los convenios y vencimientos",
          text: "Durante mi etapa en AEQT y en distintos puestos de soporte, me encontré con un patrón recurrente: hojas de cálculo gigantescas con cientos de convenios institucionales, colaboraciones y contratos. Cada semana, una persona del equipo tenía que abrir el Excel, desplazarse fila por fila, calcular mentalmente cuántos días faltaban para el vencimiento de cada fecha y enviar avisos uno a uno por correo.",
        },
        {
          heading: "Por qué las soluciones manuales siempre fallan",
          text: "Hacer esto a mano tiene dos problemas letales. Primero, el coste de oportunidad: son entre 4 y 6 horas semanales de un profesional gastadas en trabajo de mecanógrafo. Segundo, el factor humano: basta con una semana de carga alta de trabajo para que un convenio clave venza sin que nadie se dé cuenta, provocando un problema administrativo grave.",
        },
        {
          heading: "El script que cambió la rutina",
          text: "Decidí crear un script en Python utilizando Pandas y Openpyxl. El flujo era sencillo pero robusto:\n1. Carga automática del archivo maestro sin alterar estilos ni fórmulas preexistentes.\n2. Normalización de formatos de fecha dispares (el clásico dolor de cabeza entre DD/MM/YYYY y cadenas de texto).\n3. Clasificación automática con un semáforo de urgencia: Crítico (menos de 15 días), Atención (menos de 30 días) y Vigente.\n4. Generación de un informe ejecutivo limpio y envío automático de alertas a los responsables.",
          code: `# Fragmento del motor de auditoría en Python
import pandas as pd
from datetime import datetime

def auditar_vencimientos(ruta_excel):
    df = pd.read_excel(ruta_excel)
    hoy = datetime.now()
    
    # Normalización y cálculo de días restantes
    df['Fecha_Fin'] = pd.to_datetime(df['Fecha_Fin'], errors='coerce')
    df['Dias_Restantes'] = (df['Fecha_Fin'] - hoy).dt.days
    
    # Filtrado inteligente de contratos por vencer
    urgentes = df[df['Dias_Restantes'].between(0, 30)].sort_values(by='Dias_Restantes')
    return urgentes[['Entidad', 'Convenio', 'Fecha_Fin', 'Dias_Restantes']]`,
        },
        {
          heading: "La verdadera lección: TI como palanca de valor",
          text: "Escribir 50 líneas de Python no solo ahorró cientos de horas al año: cambió la forma en que los departamentos no técnicos percibían la informática. Dejamos de ser 'los chicos que arreglan la impresora' para convertirnos en socios estratégicos que les quitaban peso de encima. Si tienes que hacer algo idéntico más de tres veces, automatízalo.",
        },
      ],
      takeaway:
        "La mejor automatización no es la más sofisticada tecnológicamente, sino la que elimina de raíz una frustración real de las personas con las que trabajas.",
    },
    {
      id: "sysadmin-to-developer",
      category: "career",
      categoryLabel: "De Sistemas a Dev",
      date: "Edición #02 • Lunes",
      readTime: "6 min de lectura",
      title: "De soporte informático y sistemas a desarrollador: La ventaja oculta",
      excerpt:
        "Muchos juniors se lanzan a picar JavaScript sin entender qué ocurre tras la pantalla. Haber pasado por racks, Active Directory y cables de red me dio la brújula que hoy me hace resolver bugs en minutos.",
      intro:
        "En los bootcamps te enseñan a hacer \`npm run build\` y a desplegar en la nube con un clic. Lo que no te enseñan es qué demonios hacer cuando el servidor devuelve un 502 Bad Gateway, la resolución DNS se rompe o los certificados SSL no coinciden.",
      sections: [
        {
          heading: "El síndrome de la 'Caja Negra'",
          text: "Para muchos programadores noveles, la infraestructura es una caja negra mágica: el código flota en el éter y los servidores son entes abstractos. El problema llega en producción: ante una caída de red, un bloqueo de CORS, un firewall mal configurado o una pérdida de paquetes, se sienten completamente ciegos porque su conocimiento se detiene en la última línea de JavaScript.",
        },
        {
          heading: "La escuela de la microinformática y los sistemas (SMX/ASIX)",
          text: "Haber pasado por el soporte técnico de campo y la administración de sistemas en empresas como AENA, Princess Hotels, MediaMarkt y Activa Mutua me enseñó cosas que ningún curso de React te explica:\n• En MediaMarkt aprendí a aislar fallos desde el hardware: si una aplicación crashea, puede ser una fuga de memoria, pero también un módulo de RAM degradado o sobrecalentamiento.\n• En Princess Hotels y Activa Mutua: parchear regletas, diagnosticar puertos ethernet en armarios rack, segmentar VLANs y gestionar identidades y grupos de seguridad con Active Directory.\n• En AENA: entender la rigidez de las políticas de seguridad, los proxies corporativos y por qué cada puerto abierto es un vector de riesgo.",
        },
        {
          heading: "Cómo la infraestructura te hace mejor programador",
          text: "Cuando escribo un componente en React o una API en Spring Boot o Python, no pienso solo en la sintaxis. Pienso en el viaje físico del dato: en la latencia del socket, en cuántos kilobytes viajan por la red, en cómo se manejan los encabezados HTTP y en qué impacto tendrá la memoria en el servidor. Sabes qué está pasando en el metal.",
        },
        {
          heading: "Consejo para quienes vienen de sistemas",
          text: "Si vienes de SMX, ASIX o del soporte técnico y sientes que estás 'por detrás' de los graduados en informática pura en algoritmia, quítate esa idea de la cabeza. Tu instinto de diagnóstico, tu resiliencia ante incidencias bajo presión y tu comprensión de cómo funciona el mundo real de las máquinas son tus mayores superpoderes.",
        },
      ],
      takeaway:
        "Un desarrollador que entiende de redes y sistemas nunca se queda bloqueado con un bug misterioso: simplemente sabe en qué capa del modelo OSI buscar la respuesta.",
    },
    {
      id: "one-percent-rule",
      category: "productivity",
      categoryLabel: "Productividad & Mentalidad",
      date: "Edición #03 • Lunes",
      readTime: "4 min de lectura",
      title: "La regla del 1%: Construir proyectos reales compaginando trabajo, estudio y vida",
      excerpt:
        "Cuando compaginaba prácticas por la mañana, clases por la tarde y fines de semana trabajando en Port Aventura, aprendí que la constancia de 45 minutos al día vence a los sprints de agotamiento.",
      intro:
        "La mentira más común en nuestra industria es pensar: 'Cuando tenga un mes libre construiré mi gran portfolio y mi aplicación soñada'. Ese mes perfecto nunca llega. La vida real siempre se interpone.",
      sections: [
        {
          heading: "El mito del tiempo libre infinito",
          text: "En 2019 viví una de las etapas más intensas de mi vida: por las mañanas estaba de prácticas en Activa Mutua de 8:00 a 14:00; por las tardes asistía a las clases del ciclo formativo superior; y los fines de semana trabajaba en restauración en Port Aventura para costearme los estudios y mis gastos. Tenía exactamente cero horas de ocio diario.",
        },
        {
          heading: "El peligro de los sprints de 10 horas",
          text: "Al principio intentaba compensar el tiempo perdido metiéndome maratones de 8 o 10 horas de código el domingo por la noche. ¿El resultado? Agotamiento absoluto, dolores de cabeza y una semana laboral arruinada. El cerebro necesita digerir los conceptos complejos; forzarlo en sesiones maratonianas solo genera frustración.",
        },
        {
          heading: "La técnica del bloque sagrado de 45 minutos",
          text: "Cambié de estrategia y apliqué la filosofía del Pomodoro diario: bloquear exactamente 45 minutos al día, sin móvil, sin redes sociales y sin distracciones, dedicados a construir algo propio. Nada más.\n• Día 1: Diseñar la estructura de carpetas y el README.\n• Día 2: Configurar una ruta o un endpoint.\n• Día 3: Diseñar un botón o un estado de carga.\n• Día 4: Resolver un bug en el renderizado.",
        },
        {
          heading: "Los frutos del interés compuesto",
          text: "De esos pequeños bloques diarios de 45 minutos nació mi proyecto de telemetría DTM HUD PRO para Assetto Corsa (con versión Lite gratuita y versión Pro monetizada en Patreon), mi Pomodoro Timer App y mi portfolio actual. Matemáticamente, mejorar un 1% cada día te hace 37 veces mejor en un año (1.01^365 = 37.8). La constancia silenciosa siempre gana a la motivación efímera.",
        },
      ],
      takeaway:
        "No busques tiempo libre para programar: haz hueco para un bloque de 45 minutos avui. La inercia diaria es el motor más potente que existe.",
    },
  ],
  ca: [
    {
      id: "auto-excel-python",
      category: "automation",
      categoryLabel: "Automatització & Python",
      date: "Edició #01 • Dilluns",
      readTime: "5 min de lectura",
      title: "Com vaig passar de perdre hores a Excel a automatitzar processos amb Python",
      excerpt:
        "En entorns corporatius i suport tècnic vaig veure companys contrastar centenars de dates de convenis a mà. Vaig decidir que cap tasca repetitiva s'havia de fer dues vegades si un script podia resoldre-la en 3 segons.",
      intro:
        "El pitjor enemic de la productivitat a una oficina no són les reunions llargues: són les tasques invisibles que tothom assumeix com a 'normals' simplement perquè sempre s'han fet així.",
      sections: [
        {
          heading: "El maldecap quotidià dels convenis i venciments",
          text: "Durant la meva etapa a AEQT i en diferents llocs de suport, em vaig trobar amb un patró recurrent: fulls de càlcul gegantins amb centenars de convenis institucionals, col·laboracions i contractes. Cada setmana, una persona de l'equip havia d'obrir l'Excel, desplaçar-se fila per fila, calcular mentalment quants dies faltaven per al venciment de cada data i enviar avisos un a un per correu.",
        },
        {
          heading: "Per què les solucions manuals sempre fallen",
          text: "Fer això a mà té dos problemes crítics. Primer, el cost d'oportunitat: són entre 4 i 6 hores setmanals d'un professional malgastades en feina mecànica. Segon, el factor humà: n'hi ha prou amb una setmana de molta feina perquè un conveni clau venci sense que ningú se n'adoni, causant un problema administratiu greu.",
        },
        {
          heading: "L'script que va canviar la rutina",
          text: "Vaig decidir crear un script en Python utilitzant Pandas i Openpyxl. El flux era senzill però molt robust:\n1. Càrrega automàtica del fitxer mestre sense alterar estils ni fórmules preexistents.\n2. Normalització de formats de data dispars (el clàssic maldecap entre DD/MM/AAAA i text).\n3. Classificació automàtica amb semàfor d'urgència: Crític (menys de 15 dies), Atenció (menys de 30 dies) i Vigent.\n4. Generació d'un informe executiu net i enviament automàtic d'alertes als responsables.",
          code: `# Fragment del motor d'auditoria en Python
import pandas as pd
from datetime import datetime

def auditar_venciments(ruta_excel):
    df = pd.read_excel(ruta_excel)
    avui = datetime.now()
    
    # Normalització i càlcul de dies restants
    df['Data_Fi'] = pd.to_datetime(df['Data_Fi'], errors='coerce')
    df['Dies_Restants'] = (df['Data_Fi'] - avui).dt.days
    
    # Filtratge intel·ligent de contractes per vèncer
    urgents = df[df['Dies_Restants'].between(0, 30)].sort_values(by='Dies_Restants')
    return urgents[['Entitat', 'Conveni', 'Data_Fi', 'Dies_Restants']]`,
        },
        {
          heading: "La veritable lliçó: TI com a palanca de valor",
          text: "Escriure 50 línies de Python no només va estalviar centenars d'hores a l'any: va canviar la forma com els departaments no tècnics percebien la informàtica. Vam deixar de ser 'els nois que arreglen la impressora' per esdevenir socis estratègics que els treien pes de sobre. Si has de fer una tasca idèntica més de tres vegades, automatitza-la.",
        },
      ],
      takeaway:
        "La millor automatització no és la més sofisticada tecnològicament, sinó la que elimina d'arrel una frustració real de les persones amb qui treballes.",
    },
    {
      id: "sysadmin-to-developer",
      category: "career",
      categoryLabel: "De Sistemes a Dev",
      date: "Edició #02 • Dilluns",
      readTime: "6 min de lectura",
      title: "De suport informàtic i sistemes a desenvolupador: L'avantatge ocult",
      excerpt:
        "Molts juniors es llancen a picar JavaScript sense entendre què passa rere la pantalla. Haver passat per racks, Active Directory i cables de xarxa em va donar la brúixola que avui em fa resoldre bugs en minuts.",
      intro:
        "Als bootcamps t'ensenyen a fer \`npm run build\` i a desplegar al núvol amb un sol clic. El que no t'ensenyen és què dimonis fer quan el servidor retorna un 502 Bad Gateway, la resolució DNS es trenca o els certificats SSL no coincideixen.",
      sections: [
        {
          heading: "La síndrome de la 'Caixa Negra'",
          text: "Per a molts programadors novells, la infraestructura és una caixa negra màgica: el codi sura a l'aire i els servidors són ens abstractes. El problema arriba a producció: davant d'una caiguda de xarxa, un bloqueig de CORS, un tallafocs mal configurat o pèrdua de paquets, es troben cecs perquè el seu coneixement s'atura a la darrera línia de JavaScript.",
        },
        {
          heading: "L'escola de la microinformàtica i els sistemes (SMX/ASIX)",
          text: "Haver passat pel suport tècnic de camp i l'administració de sistemes a empreses com AENA, Princess Hotels, MediaMarkt i Activa Mútua em va ensenyar coses que cap curs de React t'explica:\n• A MediaMarkt vaig aprendre a aïllar fallades des del maquinari: si una app cau, pot ser una fuga de memòria, però també un mòdul de RAM degradat o sobreescalfament.\n• A Princess Hotels i Activa Mútua: patxejar regletes, diagnosticar ports ethernet en armaris rack, segmentar VLANs i gestionar identitats i grups de seguretat amb Active Directory.\n• A AENA: entendre la rigidesa de les polítiques de seguretat, els proxys corporatius i per què cada port obert és un risc.",
        },
        {
          heading: "Com la infraestructura et fa millor programador",
          text: "Quan escric un component a React o una API a Spring Boot o Python, no penso només en la sintaxi. Penso en el viatge físic de la dada: en la latència del socket, en quants kilobytes viatgen per la xarxa, en com es gestionen les capçaleres HTTP i en quin impacte tindrà a la memòria del servidor. Saps què passa al metall.",
        },
        {
          heading: "Consell per a qui ve de sistemes",
          text: "Si vens d'SMX, ASIX o del suport tècnic i sents que vas 'per darrere' dels graduats en informàtica pura en algorísmia, treu-te aquesta idea del cap. El teu instint de diagnòstic, la teva resiliència davant d'incidències sota pressió i la teva comprensió de com funciona el món real de les màquines són els teus superpoders.",
        },
      ],
      takeaway:
        "Un desenvolupador que entén de xarxes i sistemes mai no es queda blocat amb un bug misteriós: simplement sap a quina capa del model OSI buscar la resposta.",
    },
    {
      id: "one-percent-rule",
      category: "productivity",
      categoryLabel: "Productivitat & Mentalitat",
      date: "Edició #03 • Dilluns",
      readTime: "4 min de lectura",
      title: "La regla de l'1%: Construir projectes reals compaginant feina, estudi i vida",
      excerpt:
        "Quan compaginava pràctiques al matí, classes a la tarda i caps de setmana treballant a Port Aventura, vaig aprendre que la constància de 45 minuts al dia venç els esprints d'esgotament.",
      intro:
        "La mentida més comuna a la nostra indústria és pensar: 'Quan tingui un mes lliure construiré el meu gran projecte'. Aquest mes perfecte mai arriba. La vida real sempre s'interposa.",
      sections: [
        {
          heading: "El mite del temps lliure infinit",
          text: "El 2019 vaig viure una de les etapes més intenses de la meva vida: als matins feia pràctiques de sistemes a Activa Mútua de 8:00 a 14:00; a les tardes assistia a les classes del cicle formatiu superior; i els caps de setmana treballava en restauració a Port Aventura per pagar-me els estudis i despeses. Tenia exactament zero hores d'oci al dia.",
        },
        {
          heading: "El perill dels esprints de 10 hores",
          text: "Al principi intentava compensar el temps perdut fent maratons de 8 o 10 hores de codi diumenge a la nit. El resultat? Esgotament absolut, mals de cap i una setmana laboral arruïnada. El cervell necessita pair conceptes complexos; forçar-lo en sessions maratonianes només genera frustració.",
        },
        {
          heading: "La tècnica del bloc sagrat de 45 minuts",
          text: "Vaig canviar d'estratègia i vaig aplicar la filosofia del Pomodoro diari: bloquejar exactament 45 minuts al dia, sense mòbil, sense xarxes socials i sense distraccions, dedicats a construir alguna cosa pròpia. Res més.\n• Dia 1: Dissenyar l'estructura de carpetes i el README.\n• Dia 2: Configurar una ruta o un endpoint.\n• Dia 3: Dissenyar un botó o un estat de càrrega.\n• Dia 4: Resoldre un bug al renderitzat.",
        },
        {
          heading: "Els fruits de l'interès compost",
          text: "D'aquests petits blocs diaris de 45 minuts va néixer el meu projecte de telemetria DTM HUD PRO per a Assetto Corsa (amb versió Lite gratuïta i versió Pro a Patreon), el meu Pomodoro Timer i el meu portfolio actual. Matemàticament, millorar un 1% cada dia et fa 37 vegades millor en un any (1.01^365 = 37.8). La constància silenciosa sempre guanya la motivació efímera.",
        },
      ],
      takeaway:
        "No busquis temps lliure per programar: fes lloc per a un bloc de 45 minuts avui. La inèrcia diària és el motor més potent que existeix.",
    },
  ],
};

function NewsletterPage() {
  const { lang } = useApp();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [modalEmail, setModalEmail] = useState("");
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const articles = newsletterArticles[lang] || newsletterArticles.es;

  const categories = [
    { id: "all", label: lang === "es" ? "Todas las ediciones" : "Totes les edicions" },
    { id: "automation", label: lang === "es" ? "Automatización & Python" : "Automatització & Python" },
    { id: "career", label: lang === "es" ? "De Sistemas a Dev" : "De Sistemes a Dev" },
    { id: "productivity", label: lang === "es" ? "Productividad & Mentalidad" : "Productivitat & Mentalitat" },
  ];

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  const handleSubscribe = (e, isModal = false) => {
    e.preventDefault();
    if (isModal) {
      if (!modalEmail) return;
      setModalSubmitted(true);
      setTimeout(() => setModalEmail(""), 3500);
    } else {
      if (!email) return;
      setSubmitted(true);
      setTimeout(() => setEmail(""), 3500);
    }
  };

  const handleShare = (article) => {
    const shareUrl = window.location.origin + "/newsletter#" + article.id;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Bloquear scroll de la página si el modal de lectura está abierto
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedArticle]);

  return (
    <section className="page page-newsletter-custom">
      {/* Botón Volver */}
      <div className="recommendations-back-wrap">
        <Link to="/" className="btn-back-home">
          <FiArrowLeft className="btn-back-icon" />
          <span>{lang === "es" ? "Volver al inicio" : "Tornar a l'inici"}</span>
        </Link>
      </div>

      {/* Cabecera estilo Revista Técnica / Substack Moderno */}
      <header className="newsletter-masthead">
        <div className="newsletter-frequency-badge">
          <span className="newsletter-pulse-dot" />
          <span>
            {lang === "es"
              ? "Edición reflexiva cada lunes • 08:00 AM"
              : "Edició reflexiva cada dilluns • 08:00 AM"}
          </span>
        </div>

        <h1 className="newsletter-masthead-title">
          {lang === "es" ? "KTR Notes • De Sistemas a Código" : "KTR Notes • De Sistemes a Codi"}
        </h1>

        <p className="newsletter-masthead-subtitle">
          {lang === "es"
            ? "Reflexiones sinceras sobre microinformática, automatización con Python, desarrollo de software y el hábito de mejorar un 1% cada día. Sin tutoriales genéricos: experiencias reales desde la trinchera técnica."
            : "Reflexions sinceres sobre microinformàtica, automatització amb Python, desenvolupament de programari i l'hàbit de millorar un 1% cada dia. Sense tutorials genèrics: experiències reals des de la trinxera tècnica."}
        </p>

        {/* Tarjeta de Suscripción Principal */}
        <div className="newsletter-hero-subscribe-card">
          <div className="subscribe-card-header">
            <FiMail className="subscribe-mail-icon" />
            <div>
              <h3>
                {lang === "es"
                  ? "Suscríbete para recibir cada nueva edición"
                  : "Subscriu-te per rebre cada nova edició"}
              </h3>
              <p>
                {lang === "es"
                  ? "Directo a tu correo cada lunes. Cero spam, solo aprendizajes prácticos y desuscripción en un clic."
                  : "Directe al teu correu cada dilluns. Zero spam, només aprenentatges pràctics i desubscripció en un clic."}
              </p>
            </div>
          </div>

          <form onSubmit={(e) => handleSubscribe(e, false)} className="newsletter-form-modern">
            {submitted ? (
              <div className="newsletter-success-alert">
                <FiCheckCircle className="success-icon" />
                <span>
                  {lang === "es"
                    ? "¡Suscripción confirmada! Te avisaré el próximo lunes con la siguiente edición."
                    : "Subscripció confirmada! T'avisaré el proper dilluns amb la següent edició."}
                </span>
              </div>
            ) : (
              <div className="newsletter-input-row">
                <input
                  type="email"
                  placeholder={
                    lang === "es" ? "tu.correo@ejemplo.com" : "el.teu.correu@exemple.cat"
                  }
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-email-input"
                />
                <button type="submit" className="btn-primary newsletter-submit-btn">
                  <FiSend style={{ marginRight: 6 }} />
                  {lang === "es" ? "Unirme a la lista" : "Unir-me a la llista"}
                </button>
              </div>
            )}
            <p className="newsletter-privacy-hint">
              {lang === "es"
                ? "Respeto tu privacidad. Tu dirección se usará únicamente para esta newsletter."
                : "Respecto la teva privadesa. La teva adreça s'utilitzarà exclusivament per a aquesta newsletter."}
            </p>
          </form>
        </div>
      </header>

      {/* Filtro de Categorías */}
      <div className="newsletter-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-chip ${selectedCategory === cat.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Cuadrícula de Artículos */}
      <div className="newsletter-articles-grid">
        {filteredArticles.map((article) => (
          <article key={article.id} className="newsletter-article-card" id={article.id}>
            <div className="article-card-meta">
              <span className="article-category-pill">
                <FiTag style={{ marginRight: 4 }} />
                {article.categoryLabel}
              </span>
              <span className="article-meta-dot">•</span>
              <span className="article-read-time">
                <FiClock style={{ marginRight: 4 }} />
                {article.readTime}
              </span>
              <span className="article-meta-dot">•</span>
              <span className="article-date-text">{article.date}</span>
            </div>

            <h2 className="article-card-title">{article.title}</h2>
            <p className="article-card-excerpt">{article.excerpt}</p>

            <div className="article-card-footer">
              <button
                className="btn-read-article"
                onClick={() => setSelectedArticle(article)}
              >
                <FiBookOpen style={{ marginRight: 6 }} />
                {lang === "es" ? "Leer edición completa →" : "Llegir edició completa →"}
              </button>

              <button
                className="btn-share-article"
                onClick={() => handleShare(article)}
                title={lang === "es" ? "Copiar enlace del artículo" : "Copiar enllaç de l'article"}
              >
                <FiShare2 />
                <span>{copiedLink ? (lang === "es" ? "Copiado" : "Copiat") : (lang === "es" ? "Compartir" : "Compartir")}</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* MODAL DE LECTURA COMPLETA (READER VIEW) */}
      {selectedArticle && (
        <div className="article-reader-backdrop" onClick={() => setSelectedArticle(null)}>
          <div
            className="article-reader-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Barra superior de controles del lector */}
            <div className="article-reader-topbar">
              <button
                className="btn-close-reader"
                onClick={() => setSelectedArticle(null)}
                aria-label="Cerrar artículo"
              >
                <FiArrowLeft style={{ marginRight: 6 }} />
                <span>{lang === "es" ? "Volver a la lista" : "Tornar a la llista"}</span>
              </button>

              <div className="reader-topbar-actions">
                <button
                  className="btn-share-reader"
                  onClick={() => handleShare(selectedArticle)}
                  title={lang === "es" ? "Copiar enlace" : "Copiar enllaç"}
                >
                  <FiShare2 style={{ marginRight: 6 }} />
                  {copiedLink ? (lang === "es" ? "¡Enlace copiado!" : "Enllaç copiat!") : (lang === "es" ? "Compartir" : "Compartir")}
                </button>
                <button
                  className="btn-close-reader-icon"
                  onClick={() => setSelectedArticle(null)}
                >
                  <FiX />
                </button>
              </div>
            </div>

            {/* Contenido del Artículo */}
            <article className="article-reader-content">
              <header className="reader-article-header">
                <div className="reader-meta-row">
                  <span className="article-category-pill">{selectedArticle.categoryLabel}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h1 className="reader-title">{selectedArticle.title}</h1>
                <p className="reader-intro">{selectedArticle.intro}</p>
                <div className="reader-author-badge">
                  <div className="author-avatar-chip">KT</div>
                  <div>
                    <strong>Killian Torrell</strong>
                    <span className="author-role-sub">
                      {lang === "es"
                        ? "Desarrollador Web Full Stack & Técnico en Sistemas"
                        : "Desenvolupador Web Full Stack & Tècnic en Sistemes"}
                    </span>
                  </div>
                </div>
              </header>

              <hr className="reader-divider" />

              <div className="reader-body">
                {selectedArticle.sections.map((sec, idx) => (
                  <section key={idx} className="reader-section-block">
                    <h2>{sec.heading}</h2>
                    <p>{sec.text}</p>
                    {sec.code && (
                      <div className="reader-code-wrapper">
                        <pre>
                          <code>{sec.code}</code>
                        </pre>
                      </div>
                    )}
                  </section>
                ))}

                {/* Caja de Conclusión / Takeaway */}
                {selectedArticle.takeaway && (
                  <div className="reader-takeaway-box">
                    <h4>{lang === "es" ? "💡 Reflexión clave:" : "💡 Reflexió clau:"}</h4>
                    <p>"{selectedArticle.takeaway}"</p>
                  </div>
                )}
              </div>

              {/* Formulario de Suscripción al pie del artículo */}
              <div className="reader-bottom-subscribe">
                <h3>
                  {lang === "es"
                    ? "¿Te ha aportado valor esta edición?"
                    : "T'ha aportat valor aquesta edició?"}
                </h3>
                <p>
                  {lang === "es"
                    ? "Escribo una reflexión técnica y honesta cada lunes. Suscríbete gratis para no perderte la próxima entrega:"
                    : "Escric una reflexió tècnica i honesta cada dilluns. Subscriu-te de franc per no perdre't la propera entrega:"}
                </p>

                <form onSubmit={(e) => handleSubscribe(e, true)} className="reader-sub-form">
                  {modalSubmitted ? (
                    <div className="newsletter-success-alert">
                      <FiCheckCircle className="success-icon" />
                      <span>
                        {lang === "es"
                          ? "¡Listo! Te avisaré el próximo lunes."
                          : "Llest! T'avisaré el proper dilluns."}
                      </span>
                    </div>
                  ) : (
                    <div className="newsletter-input-row">
                      <input
                        type="email"
                        placeholder={
                          lang === "es" ? "tu.correo@ejemplo.com" : "el.teu.correu@exemple.cat"
                        }
                        value={modalEmail}
                        onChange={(e) => setModalEmail(e.target.value)}
                        required
                        className="newsletter-email-input"
                      />
                      <button type="submit" className="btn-primary newsletter-submit-btn">
                        <FiSend style={{ marginRight: 6 }} />
                        {lang === "es" ? "Suscribirme" : "Subscriure'm"}
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </article>
          </div>
        </div>
      )}
    </section>
  );
}

export default NewsletterPage;
