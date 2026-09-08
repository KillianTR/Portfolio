import { FiMonitor, FiShoppingCart, FiCamera, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

const recommendationsTranslations = {
  es: {
    back: "Volver al inicio",
    title: "Recomendaciones",
    subtitle: "Productos que uso para trabajar, crear contenido y aprender.",
    workTitle: "Qué uso para trabajar",
    photoTitle: "Mi equipo de fotografía",
    buyAmazon: "Ver en Amazon",
    buyPccomponentes: "Ver en PcComponentes",
    buyFotok: "Ver en FotoK",
  },
  ca: {
    back: "Tornar a l'inici",
    title: "Recomanacions",
    subtitle: "Productes que utilitzo per treballar, crear contingut i aprendre.",
    workTitle: "Què utilitzo per treballar",
    photoTitle: "El meu equip de fotografia",
    buyAmazon: "Veure a Amazon",
    buyPccomponentes: "Veure a PcComponentes",
    buyFotok: "Veure a FotoK",
  },
};

const workProducts = [
  {
    name: {
      es: "PC Gaming & Workstation",
      ca: "PC Gaming & Workstation",
    },
    description: {
      es: "Estación de trabajo de alto rendimiento optimizada para compilación de código, virtualización y renderizado, equipada con una RTX 4060 Ti y 32GB de RAM.",
      ca: "Estació de treball d'alt rendiment optimitzada per a compilació de codi, virtualització i renderitzat, equipada amb una RTX 4060 Ti i 32GB de RAM.",
    },
    image: "/recs/Ordenador gaming a piezas.jpg",
    url: "https://www.pccomponentes.com/ordenador-sobremesa-pccom-ready-amd-ryzen-7-5800x-32gb-1tb-ssd-rtx-5060-ti-16gb-windows-11-home-v3",
    buttonKey: "buyPccomponentes",
  },
  {
    name: {
      es: "Monitor HP 27 pulgadas",
      ca: "Monitor HP 27 polzades",
    },
    description: {
      es: "Doble monitor de alta resolución QHD con 1440p y 240Hz IPS.",
      ca: "Doble monitor d'alta resolució QHD amb 1440p i 240Hz IPS.",
    },
    image: "/recs/HP OMEN 27qs.jpg",
    url: "https://www.amazon.es/dp/B0C4F3DZZN",
    isDual: true,
  },
  {
    name: {
      es: "Soporte monitores",
      ca: "Suport de monitors",
    },
    description: {
      es: "Soporte regulable para elevar monitores y ganar espacio en la mesa.",
      ca: "Suport regulable per elevar monitors i guanyar espai a la taula.",
    },
    image: "/recs/BONTEC Soporte Monitor Doble para Pantalla de 13 a 32 Pulgadas con Inclinación.jpg",
    url: "https://www.amazon.es/dp/B0CKPH347G",
  },
  {
    name: {
      es: "Luz de Monitor Quntis",
      ca: "Llum de Monitor Quntis",
    },
    description: {
      es: "Lámpara con retroiluminación que reduce drásticamente la fatiga visual durante las sesiones nocturnas de código.",
      ca: "Llum amb retroil·luminació que redueix dràsticament la fatiga visual durant les sessions nocturnes de codi.",
    },
    image: "/recs/Quntis Lámpara Monitor con Retroiluminadas.jpg",
    url: "https://www.amazon.es/dp/B0CKQS1V8D",
  },
  {
    name: {
      es: "Hub USB-C",
      ca: "Hub USB-C",
    },
    description: {
      es: "Hub para conectar discos y periféricos al ordenador. Uso dos para gestionar todos mis dispositivos.",
      ca: "Hub per connectar discs i perifèrics a l'ordinador. En faig servir dos per gestionar tots els meus dispositius.",
    },
    image: "/recs/Hub USB Dual 7 en 1.jpg",
    url: "https://www.amazon.es/dp/B0DMSWB42R",
    isDual: true,
  },
  {
    name: {
      es: "Hub USB Orico (Desk Mount)",
      ca: "Hub USB Orico (Desk Mount)",
    },
    description: {
      es: "Hub anclado al borde de la mesa para un acceso rápido y cómodo a los puertos USB sin cables colgando.",
      ca: "Hub ancorat a la vora de la taula per a un accés ràpid i còmode als ports USB sense cables penjant.",
    },
    image: "/recs/ORICO Hub USB 4 en 1.jpg",
    url: "https://www.amazon.es/dp/B0CMC73ZX9",
  },
  {
    name: {
      es: "Botonera Stream Deck",
      ca: "Botonera Stream Deck",
    },
    description: {
      es: "Botonera que da acceso rápido a funciones y atajos para editar y crear contenido.",
      ca: "Botonera que dona accés ràpid a funcions i dreceres per editar i crear contingut.",
    },
    image: "/recs/Elgato Stream Deck MK2.jpg",
    url: "https://www.amazon.es/dp/B09738CV2G",
  },
  {
    name: {
      es: "Silla gaming ergonómica",
      ca: "Cadira gaming ergonòmica",
    },
    description: {
      es: "Silla ergonómica diseñada para mantener una postura correcta durante largas jornadas de trabajo.",
      ca: "Cadira ergonòmica dissenyada per mantenir una postura correcta durant llargues jornades de treball.",
    },
    image: "/recs/NEWSKILL Takamikura.jpg",
    url: "https://www.amazon.es/dp/B019HAOZ3G",
  },
  {
    name: {
      es: "Teclado mecánico",
      ca: "Teclat mecànic",
    },
    description: {
      es: "Modelo Corsair K65 con switches Cherry MX Speed. Diseño compacto TKL que maximiza la rapidez y precisión en cada línea de código.",
      ca: "Model Corsair K65 amb switches Cherry MX Speed. Disseny compacte TKL que maximitza la rapidesa i precisió en cada línia de codi.",
    },
    image: "/recs/Corsair K65 Rapidfire TKL.jpg",
    url: "https://www.amazon.es/dp/B01HGGKIOI",
  },
  {
    name: {
      es: "Ratón inalámbrico",
      ca: "Ratolí sense fils",
    },
    description: {
      es: "Ratón inalámbrico ultra ligero. Precisión quirúrgica y batería de larga duración para el día a día.",
      ca: "Ratolí sense fils ultralleuger. Precisió quirúrgica i bateria de llarga durada per al dia a dia.",
    },
    image: "/recs/Logitech G PRO X SUPERLIGHT 2.jpg",
    url: "https://www.amazon.es/dp/B07W5JKP66",
  },
  {
    name: {
      es: "Micrófono",
      ca: "Micròfon",
    },
    description: {
      es: "Micrófono para videollamadas con amigos y clientes.",
      ca: "Micròfon per a videotrucades amb amics i clients.",
    },
    image: "/recs/Logitech G Blue Yeti Streaming Kit.jpg",
    url: "https://www.amazon.es/dp/B07W4DHL8V",
  },
  {
    name: {
      es: "Webcam",
      ca: "Webcam",
    },
    description: {
      es: "Cámara con resolución 2K y micrófono con cancelación de ruido, ideal para reuniones profesionales y llamadas con amigos.",
      ca: "Càmera amb resolució 2K i micròfon amb cancel·lació de soroll, ideal per a reunions professionals i trucades amb amics.",
    },
    image: "/recs/AnkerWork PowerConf C200 2K USB Webcam.jpg",
    url: "https://www.amazon.es/dp/B09MFMTMPD",
  },
  {
    name: {
      es: "Auriculares In-Ear",
      ca: "Auriculars In-Ear",
    },
    description: {
      es: "Auriculares de monitorización in-ear con cable, ligeros y cómodos para largas sesiones de audio.",
      ca: "Auriculars de monitoratge in-ear amb cable, lleugers i còmodes per a llargues sessions d'àudio.",
    },
    image: "/recs/KZ ZSN Pro X.jpg",
    url: "https://www.amazon.es/dp/B08TR39Y9H?",
  },
  {
    name: {
      es: "Auriculares inalámbricos",
      ca: "Auriculars sense fils",
    },
    description: {
      es: "Audio profesional inalámbrico con tecnología Blue VO!CE para una comunicación clara y sin retrasos.",
      ca: "Àudio professional sense fils amb tecnologia Blue VO!CE per a una comunicació clara i sense retards.",
    },
    image: "/recs/Logitech G PRO X LIGHTSPEED Wireless.jpg",
    url: "https://www.amazon.es/dp/B0853X4S69",
  },
];

const photoProducts = [
  {
    name: {
      es: "Sony Alpha 6100",
      ca: "Sony Alpha 6100",
    },
    description: {
      es: "Cámara mirrorless compacta con un enfoque automático ultrarrápido, perfecta para capturar momentos con gran nitidez.",
      ca: "Càmera mirrorless compacta amb un enfocament automàtic ultraràpid, perfecta per capturar moments amb gran nitidesa.",
    },
    image: "/recs/Sony Alpha 6100.jpg",
    url: "https://www.amazon.es/dp/B0DPN4HNPR",
  },
  {
    name: {
      es: "Objetivo Sony 24-70mm GM",
      ca: "Objectiu Sony 24-70mm GM",
    },
    description: {
      es: "Lente zoom de alta gama (G Master) para obtener una resolución y un bokeh excepcionales en cada disparo.",
      ca: "Lent zoom d'alta gamma (G Master) per obtenir una resolució i un bokeh excepcionals a cada tret.",
    },
    image: "/recs/Sony 24-70 GM.jpg",
    url: "https://www.amazon.es/dp/B01BUAVMQY",
  },
  {
    name: {
      es: "Filtro ND Variable K&F Concept",
      ca: "Filtre ND Variable K&F Concept",
    },
    description: {
      es: "Filtro ND2-32 de 67mm para controlar la exposición en condiciones de mucha luz sin perder calidad.",
      ca: "Filtre ND2-32 de 67mm per controlar l'exposició en condicions de molta llum sense perdre qualitat.",
    },
    image: "/recs/K&F CONCEPT 67mm Filtro Variable ND2-32.jpg",
    url: "https://www.amazon.es/dp/B0CNV9W4V4",
  },
  {
    name: {
      es: "RØDE VideoMic Pro + DeadCat",
      ca: "RØDE VideoMic Pro + DeadCat",
    },
    description: {
      es: "Micrófono de cañón de alta calidad para capturar audio direccional nítido. Incluye el paravientos DeadCat para grabaciones impecables en exteriores.",
      ca: "Micròfon de canó d'alta qualitat per capturar àudio direccional nítid. Inclou el paravent DeadCat per a enregistraments impecables a exteriors.",
    },
    image: "/recs/RODE VideoMic Pro.jpg",
    url: "https://fotok.es/microfonos/rode-videomic-pro",
    buttonKey: "buyFotok",
  },
  {
    name: {
      es: "Estabilizador DJI RS 3 Mini",
      ca: "Estabilitzador DJI RS 3 Mini",
    },
    description: {
      es: "Gimbal ligero y potente diseñado para cámaras mirrorless, ideal para conseguir tomas de vídeo fluidas y profesionales.",
      ca: "Gimbal lleuger i potent dissenyat per a càmeres mirrorless, ideal per aconseguir preses de vídeo fluides i professionals.",
    },
    image: "/recs/DJI RS 3 Mini.jpg",
    url: "https://www.amazon.es/dp/B0BLD1KBHQ",
  },
  {
    name: {
      es: "DJI Osmo Mobile 8",
      ca: "DJI Osmo Mobile 8",
    },
    description: {
      es: "Estabilizador inteligente para smartphone. El compañero perfecto para crear contenido rápido con el iPhone sin vibraciones.",
      ca: "Estabilitzador intel·ligent per a smartphone. El company perfecte per crear contingut ràpid amb l'iPhone sense vibracions.",
    },
    image: "/recs/DJI Osmo Mobile 8.jpg",
    url: "https://www.amazon.es/dp/B0FJ2L67HJ",
  },
];

function Recommendations() {
  const { lang } = useApp();
  const t = recommendationsTranslations[lang] || recommendationsTranslations.es;

  const getButtonText = (product) => {
    if (product.buttonKey && t[product.buttonKey]) {
      return t[product.buttonKey];
    }
    return t.buyAmazon;
  };

  return (
    <section id="recomendaciones" className="page page-recommendations">
      <div className="page-back">
        <Link to="/" className="page-back-link" aria-label={t.back}>
          <span className="page-back-icon" aria-hidden="true">
            <FiArrowLeft />
          </span>
          <span className="page-back-text">{t.back}</span>
        </Link>
      </div>

      <header className="page-header page-header-centered">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </header>

      {/* BLOQUE DE TRABAJO */}
      <div className="recommendations-block">
        <div className="recommendations-heading">
          <span className="recommendations-icon" aria-hidden="true">
            <FiMonitor />
          </span>
          <h2>{t.workTitle}</h2>
        </div>

        <div className="recommendations-grid">
          {workProducts.map((product) => {
            const productName = product.name[lang] || product.name.es;
            const productDesc = product.description[lang] || product.description.es;
            return (
              <article key={product.name.es} className="product-card">
                <div className="product-card-image">
                  <img src={product.image} alt={productName} />
                  {product.isDual && <span className="setup-badge">x2</span>}
                </div>
                <div className="product-card-body">
                  <h3>{productName}</h3>
                  <p>{productDesc}</p>
                </div>
                <div className="product-card-footer">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-amazon"
                  >
                    <FiShoppingCart className="btn-amazon-icon" />
                    <span>{getButtonText(product)}</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* BLOQUE DE FOTOGRAFÍA */}
      <div className="recommendations-block">
        <div className="recommendations-heading">
          <span className="recommendations-icon" aria-hidden="true">
            <FiCamera />
          </span>
          <h2>{t.photoTitle}</h2>
        </div>

        <div className="recommendations-grid">
          {photoProducts.map((product) => {
            const productName = product.name[lang] || product.name.es;
            const productDesc = product.description[lang] || product.description.es;
            return (
              <article key={product.name.es} className="product-card">
                <div className="product-card-image">
                  <img src={product.image} alt={productName} />
                </div>
                <div className="product-card-body">
                  <h3>{productName}</h3>
                  <p>{productDesc}</p>
                </div>
                <div className="product-card-footer">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-amazon"
                  >
                    <FiShoppingCart className="btn-amazon-icon" />
                    <span>{getButtonText(product)}</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Recommendations;