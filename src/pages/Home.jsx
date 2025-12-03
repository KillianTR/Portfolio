import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Process from "../components/Process";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <>
      <section id="inicio">
        <Hero />
      </section>

      <section id="proyectos">
        <Projects />
      </section>

      <section id="proceso">
        <Process />
      </section>

      <section id="newsletter">
        <Newsletter />
      </section>
    </>
  );
}

export default Home;
