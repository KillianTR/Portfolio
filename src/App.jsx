import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewsletterPage from "./pages/NewsletterPage";
import StartupPage from "./pages/StartupPage";
import BlogPage from "./pages/BlogPage";
import RecommendationsPage from "./pages/RecommendationsPage";

function App() {
  return (
    <>
      <Navbar /> {/* barra fija a todo el ancho */}
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/startup" element={<StartupPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/recomendaciones" element={<RecommendationsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
