import { Link } from "react-router-dom";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import "../styles/Navbar.css";
import logo from "../assets/logo/Logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="Malaika" />
        </Link>

        {/* Links desktop */}
        <nav className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/acompanamiento">Acompañamiento</Link>
          <Link to="/experiencias">Experiencias</Link>
          <Link to="/testimonios">Testimonios</Link>
          <Link to="/embajadoras">Embajadoras</Link>
          <Link to="/sobre-mi">Sobre mí</Link>
        </nav>

        {/* Instagram desktop */}
        <a
          href="https://www.instagram.com/aromasdemalaika/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-instagram"
          aria-label="Instagram Malaika"
        >
          <FaInstagram />
        </a>

        {/* Hamburguesa */}
        <button
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
          <Link to="/productos" onClick={() => setOpen(false)}>Productos</Link>
          <Link to="/acompanamiento" onClick={() => setOpen(false)}>Acompañamiento</Link>
          <Link to="/experiencias" onClick={() => setOpen(false)}>Experiencias</Link>
          <Link to="/testimonios" onClick={() => setOpen(false)}>Testimonios</Link>
          <Link to="/embajadoras" onClick={() => setOpen(false)}>Embajadoras</Link>
          <Link to="/sobre-mi" onClick={() => setOpen(false)}>Sobre mí</Link>

          {/* Instagram mobile */}
          <a
            href="https://www.instagram.com/aromasdemalaika/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-instagram mobile"
          >
            <FaInstagram />
          </a>
        </div>
      )}
    </header>
  );
}

