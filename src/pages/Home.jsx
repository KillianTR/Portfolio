import Hero from "../components/Hero";
import TechTicker from "../components/TechTicker";
import Journey from "../components/Journey";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import AboutMe from "../components/AboutMe";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";

function Home({ onOpenCvModal }) {
  return (
    <>
      <Hero onOpenCvModal={onOpenCvModal} />
      <TechTicker />
      <Journey />
      <Projects />
      <Experience onOpenCvModal={onOpenCvModal} />
      <Education />
      <AboutMe />
      <Newsletter />
      <Contact onOpenCvModal={onOpenCvModal} />
    </>
  );
}

export default Home;
