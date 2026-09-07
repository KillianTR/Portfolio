import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RecommendationsPage from "./pages/RecommendationsPage";
import NewsletterPage from "./pages/NewsletterPage";
import CvModal from "./components/CvModal";
import "./styles.css";

function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const location = useLocation();

  // Scroll to hash on route change
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const elem = document.querySelector(location.hash);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const openCvModal = () => setIsCvModalOpen(true);
  const closeCvModal = () => setIsCvModalOpen(false);

  return (
    <>
      <Navbar onOpenCvModal={openCvModal} />
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<Home onOpenCvModal={openCvModal} />} />
            <Route path="/recomendaciones" element={<RecommendationsPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            {/* Rutas de acceso directo para RRHH */}
            <Route path="/experiencia" element={<Home onOpenCvModal={openCvModal} />} />
            <Route path="/proyectos" element={<Home onOpenCvModal={openCvModal} />} />
            <Route path="/sobre-mi" element={<Home onOpenCvModal={openCvModal} />} />
            <Route path="/contacto" element={<Home onOpenCvModal={openCvModal} />} />
          </Routes>
        </main>
        <Footer onOpenCvModal={openCvModal} />
      </div>

      <CvModal isOpen={isCvModalOpen} onClose={closeCvModal} />
    </>
  );
}

export default App;
