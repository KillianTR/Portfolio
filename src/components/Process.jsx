const posts = [
  {
    title: "Cómo automatizo tareas repetitivas con Python",
    description:
      "Pequeños scripts que ahorran horas a la semana en tareas de oficina.",
    meta: "4 min de lectura",
  },
  {
    title: "Lo que aprendí creando mi primer portfolio en React",
    description:
      "Dejar de mirar tutoriales y ensuciarse las manos con un proyecto real.",
    meta: "6 min de lectura",
  },
];

function Process() {
  return (
    <section className="section section-alt">
      <div className="section-header">
        <h2>Documentando el proceso</h2>
        <p>
          Me gusta registrar lo que voy construyendo: qué funciona, qué no,
          y qué volvería a hacer distinto.
        </p>
      </div>
      <div className="cards-list">
        {posts.map((post) => (
          <article key={post.title} className="card-row">
            <div>
              <h3>{post.title}</h3>
              <p className="card-description">{post.description}</p>
            </div>
            <span className="card-meta">{post.meta}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Process;
