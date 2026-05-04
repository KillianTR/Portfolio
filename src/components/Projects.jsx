const projects = [
  {
    title: "Pomodoro Timer App",
    description:
      "Permite a los usuarios gestionar su tiempo de manera eficiente.",
    image: "/pomodoro-timer-screenshot.png", 
    tech: ["Next.js", "React", "TypeScript", "Framer Motion", "Tailwind CSS", "Shadcn UI"],
    demoUrl: "https://pomodoro-timer-killiantr.vercel.app",
  },
  {
    title: "Plataforma XML AEQT",
    description:
      "Plugin a medida en WordPress para la gestión automatizada de ofertas y demandas de empleo.",
    image: "https://placehold.co/600x400/020617/e5e7eb?text=WordPress+AEQT", 
    tech: ["WordPress", "PHP", "XML"],
    demoUrl: "https://github.com/KillianTR",
  },
  {
    title: "Dashboard de Convenios",
    description:
      "Script en Python para la automatización del control de fechas de vencimiento en Excel.",
    image: "https://placehold.co/600x400/020617/e5e7eb?text=Python+Dashboard",
    tech: ["Python", "Automation", "Excel"],
    demoUrl: "https://github.com/KillianTR", 
  },
];

function Projects() {
  return (
    <section className="section ProjectsPage">
      <div className="projects-header-left">
        <h2 className="projects-title-v2">
          <span className="title-icon">&lt;/&gt;</span> Proyectos
        </h2>
        <p className="projects-description-v2">
          Una selección de proyectos en los que he trabajado recientemente
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card-v2">
            <div className="project-card-image-container">
              <img src={project.image} alt={`Captura de pantalla de ${project.title}`} className="project-card-image" />
            </div>
            <div className="project-card-body-v2">
              <h3>{project.title}</h3>
              <p className="project-card-description-v2">{project.description}</p>
              
              <div className="project-card-tech-tags">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {project.demoUrl && (
                <div className="project-card-footer-v2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="demo-link-v2"
                  >
                    <span style={{ marginRight: '8px', fontSize: '1.1rem' }}>&#x2197;</span>
                    Demo
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;