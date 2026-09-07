import Hero from "../components/Hero";
import TechTicker from "../components/TechTicker";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import AboutMe from "../components/AboutMe";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";

function Home({ onOpenCvModal }) {
  return (
    <>
      <Hero onOpenCvModal={onOpenCvModal} />
      <TechTicker />
      <Experience onOpenCvModal={onOpenCvModal} />
      <Projects />
      <Education />
      <AboutMe />
      <Newsletter />
      <Contact onOpenCvModal={onOpenCvModal} />
    </>
  );
}

export default Home;
