import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo">Nexora Technologies
</div>

      <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>

        <a href="#work" onClick={() => setMenuOpen(false)}>
          Our Work
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <button className="nav-cta">Get Started</button>
    </nav>
  );
}

export default Navbar;