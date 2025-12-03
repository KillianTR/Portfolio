import { Link } from "react-router-dom";

const posts = [
  {
    title: "Cómo estoy automatizando mi trabajo con código",
    excerpt:
      "Un resumen de los scripts y herramientas que uso para ahorrar tiempo en tareas repetitivas.",
    date: "2 de diciembre de 2025",
    readTime: "6 min",
  },
  {
    title: "Lo que aprendí construyendo mi portfolio en React",
    excerpt:
      "Qué volvería a hacer igual, qué no y por qué me gusta tanto documentar el proceso.",
    date: "25 de noviembre de 2025",
    readTime: "8 min",
  },
  {
    title: "Mejorar 1% cada semana",
    excerpt:
      "Pequeños cambios en hábitos, organización y enfoque que me están ayudando a avanzar.",
    date: "10 de noviembre de 2025",
    readTime: "4 min",
  },
];

function NewsletterPage() {
  return (
    <section className="page page-newsletter">
      <div className="page-back">
        <Link to="/">← Volver al inicio</Link>
      </div>

      <header className="page-header page-header-centered">
        <span className="page-icon">✉️</span>
        <h1>Newsletter sobre desarrollo y proyectos</h1>
        <p>
          Emails puntuales donde cuento qué estoy construyendo, qué estoy
          aprendiendo y herramientas que me están ayudando en el día a día.
        </p>
      </header>

      <form
        className="newsletter-form newsletter-form-inline"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Aquí iría la lógica real para suscribirse.");
        }}
      >
        <input type="email" placeholder="tu@email.com" required />
        <button type="submit">Suscribirme</button>
        <label className="newsletter-legal">
          <input type="checkbox" required /> Acepto la política de privacidad.
        </label>
      </form>

      <div className="cards-grid newsletter-posts-grid">
        {posts.map((post) => (
          <article key={post.title} className="card newsletter-post-card">
            <div className="newsletter-post-header">
              <span className="newsletter-post-meta">
                {post.date} • {post.readTime}
              </span>
            </div>
            <h3>{post.title}</h3>
            <p className="card-description">{post.excerpt}</p>
            <button className="newsletter-read-more">Leer más →</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default NewsletterPage;
