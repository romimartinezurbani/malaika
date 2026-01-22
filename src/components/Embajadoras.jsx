import "../styles/Section.css";
import "../styles/Embajadoras.css";
import SectionHero from "../components/SectionHero";

import embajadorasBg from "../assets/imagenes/portada.png";
import embajadoras2 from "../assets/imagenes/embajadoras2.png";

export default function Embajadoras() {
  return (
    <main className="embajadoras-page" id="embajadoras">

      {/* HERO UNIFICADO */}
      <SectionHero
        title="Llevar la esencia a otros espacios"
        background={embajadorasBg}
      />

      {/* INTRO */}
      <section className="section embajadoras-intro-section">
        <div className="section-inner embajadoras-intro-inner">

          <div className="section-text">
            <p>
              Malaika también crece a través de personas que eligen compartir su
              esencia.
            </p>

            <p>
              El programa de Embajadoras está pensado para quienes desean
              representar la marca en su ciudad o zona, acompañando a otras
              personas a reconectar con el bienestar, la calma y la presencia a
              través de los aromas y las experiencias.
            </p>
          </div>

          {/* IMAGEN */}
          <div className="embajadoras-image">
            <img src={embajadoras2} alt="Embajadoras Malaika" />
          </div>

        </div>
      </section>

      {/* BLOQUES DE CONTENIDO */}
      <section className="section embajadoras-content">
        <div className="section-inner embajadoras-content-inner">

          <div className="embajadoras-block">
            <h3>¿Qué es ser Embajadora Malaika?</h3>
            <p>
              Ser Embajadora Malaika es formar parte de una red consciente que
              comparte aromas, rituales y experiencias con intención.
            </p>
            <p>
              Representan la marca en su entorno, acercando los productos y
              acompañando su difusión desde una comunicación sensible,
              respetuosa y alineada a sus valores.
            </p>
          </div>

          <div className="embajadoras-block">
            <h3>¿Qué implica el rol?</h3>
            <ul>
              <li>Venta y difusión de productos Malaika</li>
              <li>Representación de la identidad y valores de la marca</li>
              <li>Acompañamiento cercano con clientes</li>
              <li>Participación en experiencias y lanzamientos</li>
              <li>Trabajo con stock por consignación</li>
            </ul>
          </div>

          <div className="embajadoras-block">
            <h3>¿Qué ofrece Malaika?</h3>
            <ul>
              <li>Comisión por ventas</li>
              <li>Material visual y comunicacional</li>
              <li>Manual de embajadora</li>
              <li>Acompañamiento continuo</li>
            </ul>

            <p className="embajadoras-subtitle">Capacitaciones en:</p>

            <ul>
              <li>Aromas y productos</li>
              <li>Comunicación consciente</li>
              <li>Ventas alineadas a la identidad</li>
              <li>Desarrollo personal</li>
            </ul>
          </div>

          <div className="embajadoras-block">
            <h3>¿Para quién es este programa?</h3>
            <ul>
              <li>Personas sensibles y comprometidas</li>
              <li>Quienes disfrutan compartir bienestar</li>
              <li>Emprendedoras o personas con red propia</li>
              <li>Alineadas a valores de presencia y cuidado</li>
              <li>Quienes buscan ingresos con sentido</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="embajadoras-cta">
        <div className="section-inner embajadoras-cta-inner">

          <p>
            El programa de Embajadoras se habilita por zonas y ciudades para
            cuidar la experiencia y el acompañamiento.
          </p>

          <a
            href="https://wa.me/5493584856527"
            target="_blank"
            rel="noreferrer"
            className="embajadoras-cta-button"
          >
            Consultar disponibilidad en mi zona
          </a>

        </div>
      </section>

    </main>
  );
}
