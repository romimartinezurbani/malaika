import "../styles/Section.css";
import "../styles/Testimonials.css";

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="section-inner">

        <h2 className="section-title">
          Palabras que acompañan este recorrido.
        </h2>

        <p className="testimonials-note">
          Este espacio reunirá experiencias reales de personas que participaron
          de encuentros, acompañamientos y propuestas de Malaika.
        </p>

        <div className="testimonials-placeholder">

          <div className="testimonial">
            <p>
              “Este espacio pronto se llenará de palabras, vivencias y
              sensaciones compartidas.”
            </p>
            <span>— Testimonios reales en construcción</span>
          </div>

          <div className="testimonial">
            <p>
              “Cada experiencia deja huella, y esas huellas también serán parte
              de este espacio.”
            </p>
            <span>— Malaika</span>
          </div>

        </div>

      </div>
    </section>
  );
}
