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
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/newsletter">Newsletter</NavLink>
          <NavLink to="/startup">Startup</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/recomendaciones">Recomendaciones</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
