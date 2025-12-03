import { Link } from "react-router-dom";

function StartupPage() {
  return (
    <section className="page">
      <div className="page-back">
        <Link to="/">← Volver al inicio</Link>
      </div>
      <header className="page-header">
        <h1>Startup</h1>
        <p>
          Aquí iré contando mis proyectos, ideas y experimentos relacionados con
          emprendimiento y producto digital.
        </p>
      </header>
    </section>
  );
}

export default StartupPage;
