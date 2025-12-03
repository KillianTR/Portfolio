function Newsletter() {
  return (
    <section className="section">
      <div className="newsletter">
        <div className="newsletter-text">
          <h2>Newsletter sobre desarrollo y proyectos</h2>
          <p>
            Envío correos de vez en cuando contando qué estoy construyendo,
            qué estoy aprendiendo y las herramientas que más me están ayudando.
          </p>
        </div>
        <form
          className="newsletter-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Aquí iría la lógica real para suscribirse.");
          }}
        >
          <input type="email" placeholder="tuemail@ejemplo.com" required />
          <button type="submit">Quiero apuntarme</button>
          <label className="newsletter-legal">
            <input type="checkbox" required /> Acepto la política de privacidad.
          </label>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
