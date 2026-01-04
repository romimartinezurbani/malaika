import "../styles/Section.css";
import "../styles/About.css";

export default function About() {
  return (
    <section className="section about" id="contacto">
      <div className="section-inner about-inner">

        <div className="about-text">

          <h2 className="section-title">
            Quién acompaña este espacio
          </h2>

          <p>
            Soy Flor, creadora de Malaika y coach ontológica.
            Acompaño procesos de transformación personal desde un enfoque
            sensible, humano y consciente, integrando aromas, rituales y
            conversaciones profundas como herramientas de presencia.
          </p>

          <p>
            Malaika nace de un recorrido personal y profesional que busca unir
            el hacer con el ser, y la experiencia con el sentido.
          </p>

        </div>

        <div className="about-image">
          <div className="image-placeholder">
            Imagen de Flor
          </div>
        </div>

      </div>
    </section>
  );
}
