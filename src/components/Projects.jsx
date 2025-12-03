const projects = [
  {
    title: "Plataforma XML AEQT",
    description:
      "Plugin a medida en WordPress para gestionar ofertas y demandas mediante ficheros XML.",
    tag: "WordPress • PHP • XML",
  },
  {
    title: "Dashboard de Convenios",
    description:
      "Script en Python que revisa Excel, controla fechas de vencimiento y envía avisos automáticos.",
    tag: "Python • Excel • Automatización",
  },
  {
    title: "Portfolio 3D con React",
    description:
      "Experimentos con Three.js, GSAP y React para crear una experiencia interactiva.",
    tag: "React • Three.js • GSAP",
  },
];

function Projects() {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Mis proyectos</h2>
        <p>
          Una selección de cosas que he construido para aprender, automatizar
          procesos y pasarlo bien programando.
        </p>
      </div>
      <div className="cards-grid">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h3>{project.title}</h3>
            <p className="card-description">{project.description}</p>
            <p className="card-tag">{project.tag}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
