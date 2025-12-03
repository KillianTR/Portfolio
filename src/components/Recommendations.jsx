const workProducts = [
  {
    name: "PC Gaming",
    description: "Ordeador sobremesa gaming montado a piezas. Principalmente para desarrollo web, edición y jugar a videojuegos.",
    image: "/recs/Ordenador gaming a piezas.jpg",
    url: "https://www.pccomponentes.com/ordenador-sobremesa-pccom-ready-amd-ryzen-7-5800x-32gb-1tb-ssd-rtx-5060-ti-16gb-windows-11-home-v3",
  },
  {
    name: "Monitor 27 pulgadas",
    description: "Monitor de alta resolución QHD con 1440p y 240Hz IPS.",
    image: "/recs/HP OMEN 27qs.jpg",
    url: "https://www.amazon.es/dp/B0CKPH347G",
  },
  {
    name: "Soporte monitores",
    description: "Soporte regulable para elevar monitores y ganar espacio en la mesa.",
    image: "/recs/BONTEC Soporte Monitor Doble para Pantalla de 13 a 32 Pulgadas con Inclinación.jpg",
    url: "https://www.amazon.es/dp/B0CKPH347G",
  },
  {
    name: "Luz monitor",
    description: "Barra de luz que se coloca encima del monitor para reducir fatiga visual.",
    image: "/recs/Quntis Lámpara Monitor con Retroiluminadas.jpg",
    url: "https://www.amazon.es/dp/B0CKQS1V8D",
  },
  {
    name: "Hub USB-C",
    description: "Hub para conectar discos y periféricos al ordenador.",
    image: "/recs/Hub USB Dual 7 en 1.jpg",
    url: "https://www.amazon.es/dp/B0DMSWB42R",
  },
  {
    name: "Botonera Stream Deck",
    description: "Botonera que da acceso rápido a funciones y atajos para editar y crear contenido.",
    image: "/recs/Elgato Stream Deck MK2.jpg",
    url: "https://www.amazon.es/dp/B0DMSWB42R",
  },
  {
    name: "Silla gaming ergonómica",
    description: "Silla cómoda para sesiones largas delante del ordenador.",
    image: "/recs/NEWSKILL Takamikura.jpg",
    url: "https://www.amazon.es/dp/B019HAOZ3G",
  },
  {
    name: "Ratón inalámbrico",
    description: "Ratón cómodo y preciso para uso diario y en videojuegos.",
    image: "/recs/Logitech G PRO X SUPERLIGHT 2.jpg",
    url: "https://www.amazon.es/dp/B07W5JKP66",
  },
  {
    name: "Micrófono",
    description: "Micrófono para videollamadas con amigos y clientes.",
    image: "/recs/Logitech G Blue Yeti Streaming Kit.jpg",
    url: "https://www.amazon.es/dp/B07W4DHL8V",
  },
];

function Recommendations() {
  return (
    <section id="recomendaciones" className="page page-recommendations">
      <div className="page-back">
        <a href="#inicio">← Volver al inicio</a>
      </div>

      <header className="page-header">
        <h1>Recomendaciones</h1>
        <p>
          Productos que uso para trabajar, crear contenido y aprender. Algunos
          enlaces pueden ser de afiliado.
        </p>
      </header>

      <div className="recommendations-block">
        <div className="recommendations-heading">
          <span className="recommendations-icon">💻</span>
          <h2>Qué uso para trabajar</h2>
        </div>

        <div className="recommendations-grid">
          {workProducts.map((product) => (
            <article key={product.name} className="product-card">
              <div className="product-card-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-card-body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>

              <div className="product-card-footer">
                <a
                  href={product.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-amazon"
                >
                  🛒 Ver en Amazon
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
