import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img
            src="/KTR-logo.png"
            alt="Logo Killian Torrell"
            className="navbar-logo-img"
          />
        </Link>

        <nav className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/newsletter"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Newsletter
          </NavLink>

          <NavLink
            to="/startup"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Startup
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Blog
          </NavLink>

          <NavLink
            to="/recomendaciones"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Recomendaciones
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
