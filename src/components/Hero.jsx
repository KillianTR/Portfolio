function Hero() {
  return (
    <section className="hero">
      <p className="hero-kicker">Desarrollador Web Full Stack • Técnico Informático</p>
      <h1 className="hero-title">
        Construyendo proyectos digitales
        <br />
        y contando el camino.
      </h1>
      <p className="hero-subtitle">
        Soy Killian Torrell, programador y entusiasta del desarrollo de software.
        Me gusta compartir lo que hago y cómo voy mejorando como desarrollador
        y como persona.
      </p>
      <div className="hero-cta">
        {/* Botón Principal: Azul sólido */}
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=killiantorrell@gmail.com" 
          target="_blank" 
          rel="noreferrer" 
          className="btn-primary"
        >
          Contacto
        </a>

        {/* Botón Secundario 1: Oscuro con borde, hover azul (Ver proyectos) */}
        <a href="#proyectos" className="btn-secondary">
          Ver proyectos
        </a>

        {/* Botón Secundario 2: Mismo formato que el anterior (Newsletter) */}
        <a href="#newsletter" className="btn-secondary">
          Unirme a la newsletter
        </a>
      </div>
    </section>
  );
}

export default Hero;