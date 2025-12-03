import { Link } from "react-router-dom";

function BlogPage() {
  return (
    <section className="page">
      <div className="page-back">
        <Link to="/">← Volver al inicio</Link>
      </div>
      <header className="page-header">
        <h1>Blog</h1>
        <p>
          Artículos sobre desarrollo web, automatización, productividad y cosas
          que voy aprendiendo por el camino.
        </p>
      </header>
    </section>
  );
}

export default BlogPage;
