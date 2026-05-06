import { FiMonitor, FiShoppingCart, FiCamera, FiArrowLeft } from "react-icons/fi"; // Una sola línea para todos
import { Link } from "react-router-dom";

const workProducts = [
  {
    name: "PC Gaming & Workstation",
    description: "Estación de trabajo de alto rendimiento optimizada para compilación de código, virtualización y renderizado, equipada con una RTX 4060 Ti y 32GB de RAM.",
    image: "/recs/Ordenador gaming a piezas.jpg",
    url: "https://www.pccomponentes.com/ordenador-sobremesa-pccom-ready-amd-ryzen-7-5800x-32gb-1tb-ssd-rtx-5060-ti-16gb-windows-11-home-v3",
    buttonText: "Ver en PcComponentes",
  },
  {
    name: "Monitor HP 27 pulgadas",
    description: "Doble monitor de alta resolución QHD con 1440p y 240Hz IPS.",
    image: "/recs/HP OMEN 27qs.jpg",
    url: "https://www.amazon.es/dp/B0C4F3DZZN",
    isDual: true,
  },
  {
    name: "Soporte monitores",
    description: "Soporte regulable para elevar monitores y ganar espacio en la mesa.",
    image: "/recs/BONTEC Soporte Monitor Doble para Pantalla de 13 a 32 Pulgadas con Inclinación.jpg",
    url: "https://www.amazon.es/dp/B0CKPH347G",
  },
  {
    name: "Luz de Monitor Quntis",
    description: "Lámpara con retroiluminación que reduce drásticamente la fatiga visual durante las sesiones nocturnas de código.",
    image: "/recs/Quntis Lámpara Monitor con Retroiluminadas.jpg",
    url: "https://www.amazon.es/dp/B0CKQS1V8D",
  },
  {
    name: "Hub USB-C",
    description: "Hub para conectar discos y periféricos al ordenador. Uso dos para gestionar todos mis dispositivos.",
    image: "/recs/Hub USB Dual 7 en 1.jpg",
    url: "https://www.amazon.es/dp/B0DMSWB42R",
    isDual: true,
  },
  {
    name: "Hub USB Orico (Desk Mount)",
    description: "Hub anclado al borde de la mesa para un acceso rápido y cómodo a los puertos USB sin cables colgando.",
    image: "/recs/ORICO Hub USB 4 en 1.jpg",
    url: "https://www.amazon.es/dp/B0CMC73ZX9",
  },
  {
    name: "Botonera Stream Deck",
    description: "Botonera que da acceso rápido a funciones y atajos para editar y crear contenido.",
    image: "/recs/Elgato Stream Deck MK2.jpg",
    url: "https://www.amazon.es/dp/B09738CV2G",
  },
  {
    name: "Silla gaming ergonómica",
    description: "Silla ergonómica diseñada para mantener una postura correcta durante largas jornadas de trabajo.",
    image: "/recs/NEWSKILL Takamikura.jpg",
    url: "https://www.amazon.es/dp/B019HAOZ3G",
  },
  {
    name: "Teclado mecánico",
    description: "Modelo Corsair K65 con switches Cherry MX Speed. Diseño compacto TKL que maximiza la rapidez y precisión en cada línea de código.",
    image: "/recs/Corsair K65 Rapidfire TKL.jpg",
    url: "https://www.amazon.es/dp/B01HGGKIOI",
  },
  {
    name: "Ratón inalámbrico",
    description: "Ratón inalámbrico ultra ligero. Precisión quirúrgica y batería de larga duración para el día a día.",
    image: "/recs/Logitech G PRO X SUPERLIGHT 2.jpg",
    url: "https://www.amazon.es/dp/B07W5JKP66",
  },
  {
    name: "Micrófono",
    description: "Micrófono para videollamadas con amigos y clientes.",
    image: "/recs/Logitech G Blue Yeti Streaming Kit.jpg",
    url: "https://www.amazon.es/dp/B07W4DHL8V",
  },
  {
    name: "Webcam",
    description: "Cámara con resolución 2K y micrófono con cancelación de ruido, ideal para reuniones profesionales y llamadas con amigos.",
    image: "/recs/AnkerWork PowerConf C200 2K USB Webcam.jpg",
    url: "https://www.amazon.es/dp/B09MFMTMPD",
  },
  {
    name: "Auriculares In-Ear",
    description: "Auriculares de monitorización in-ear con cable, ligeros y cómodos para largas sesiones de audio.",
    image: "/recs/KZ ZSN Pro X.jpg",
    url: "https://www.amazon.es/dp/B08TR39Y9H?",
  },
  {
    name: "Auriculares inalámbricos",
    description: "Audio profesional inalámbrico con tecnología Blue VO!CE para una comunicación clara y sin retrasos.",
    image: "/recs/Logitech G PRO X LIGHTSPEED Wireless.jpg",
    url: "https://www.amazon.es/dp/B0853X4S69",
  },
];

const photoProducts = [
  {
    name: "Sony Alpha 6100",
    description: "Cámara mirrorless compacta con un enfoque automático ultrarrápido, perfecta para capturar momentos con gran nitidez.",
    image: "/recs/Sony Alpha 6100.jpg",
    url: "https://www.amazon.es/dp/B0DPN4HNPR",
  },
  {
    name: "Objetivo Sony 24-70mm GM",
    description: "Lente zoom de alta gama (G Master) para obtener una resolución y un bokeh excepcionales en cada disparo.",
    image: "/recs/Sony 24-70 GM.jpg",
    url: "https://www.amazon.es/dp/B01BUAVMQY",
  },
  {
    name: "Filtro ND Variable K&F Concept",
    description: "Filtro ND2-32 de 67mm para controlar la exposición en condiciones de mucha luz sin perder calidad.",
    image: "/recs/K&F CONCEPT 67mm Filtro Variable ND2-32.jpg",
    url: "https://www.amazon.es/dp/B0CNV9W4V4",
  },
  {
    name: "RØDE VideoMic Pro + DeadCat",
    description: "Micrófono de cañón de alta calidad para capturar audio direccional nítido. Incluye el paravientos DeadCat para grabaciones impecables en exteriores.",
    image: "/recs/RODE VideoMic Pro.jpg",
    url: "https://fotok.es/microfonos/rode-videomic-pro",
    buttonText: "Ver en FotoK",
  },
  {
    name: "Estabilizador DJI RS 3 Mini",
    description: "Gimbal ligero y potente diseñado para cámaras mirrorless, ideal para conseguir tomas de vídeo fluidas y profesionales.",
    image: "/recs/DJI RS 3 Mini.jpg",
    url: "https://www.amazon.es/dp/B0BLD1KBHQ",
  },
  {
    name: "DJI Osmo Mobile 8",
    description: "Estabilizador inteligente para smartphone. El compañero perfecto para crear contenido rápido con el iPhone sin vibraciones.",
    image: "/recs/DJI Osmo Mobile 8.jpg",
    url: "https://www.amazon.es/dp/B0FJ2L67HJ",
  },  
];

function Recommendations() {
  return (
    <section id="recomendaciones" className="page page-recommendations">
      <div className="page-back">
        <Link to="/" className="page-back-link" aria-label="Volver al inicio">
          <span className="page-back-icon" aria-hidden="true">
            <FiArrowLeft />
          </span>
          <span className="page-back-text">Volver al inicio</span>
        </Link>
      </div>

      <header className="page-header page-header-centered">
        <h1>Recomendaciones</h1>
        <p>Productos que uso para trabajar, crear contenido y aprender.</p>
      </header>

      {/* BLOQUE DE TRABAJO */}
      <div className="recommendations-block">
        <div className="recommendations-heading">
          <span className="recommendations-icon" aria-hidden="true">
            <FiMonitor />
          </span>
          <h2>Qué uso para trabajar</h2>
        </div>

        <div className="recommendations-grid">
          {workProducts.map((product) => (
            <article key={product.name} className="product-card">
              <div className="product-card-image">
                <img src={product.image} alt={product.name} />
                {product.isDual && <span className="setup-badge">x2</span>}
              </div>
              <div className="product-card-body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
              <div className="product-card-footer">
                <a href={product.url} target="_blank" rel="noreferrer" className="btn-amazon">
                  <FiShoppingCart className="btn-amazon-icon" />
                  <span>{product.buttonText || "Ver en Amazon"}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* BLOQUE DE FOTOGRAFÍA */}
<div className="recommendations-block">
  <div className="recommendations-heading">
    <span className="recommendations-icon" aria-hidden="true">
      <FiCamera />
    </span>
    <h2>Mi equipo de fotografía</h2>
  </div>

  <div className="recommendations-grid">
    {photoProducts.map((product) => (
      <article key={product.name} className="product-card">
        <div className="product-card-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-card-body">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <div className="product-card-footer">
          <a href={product.url} target="_blank" rel="noreferrer" className="btn-amazon">
            <FiShoppingCart className="btn-amazon-icon" />
            <span>{product.buttonText || "Ver en Amazon"}</span> 
          </a>
        </div>
      </article>
    ))}
  </div>
</div>
    </section>
  );
}

export default Recommendations;