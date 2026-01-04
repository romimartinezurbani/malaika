import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <span className="logo">Malaika</span>

        <nav className="nav-links">
          <a href="#productos">Productos</a>
          <a href="#acompanamiento">Acompañamiento</a>
          <a href="#experiencias">Experiencias</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
