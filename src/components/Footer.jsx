function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Killian Torrell.</p>
      <div className="footer-links">
        <a href="https://github.com/KillianTR" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/killiantorrell/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
