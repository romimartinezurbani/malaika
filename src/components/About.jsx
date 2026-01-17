import "../styles/Section.css";
import "../styles/About.css";
import SectionHero from "../components/SectionHero";

import flor from "../assets/imagenes/Flor1.png";
import flor2 from "../assets/imagenes/Flor2.png";
import ikigai from "../assets/imagenes/Ikigai.png";
import aboutBg from "../assets/imagenes/about.png";

export default function About() {
  return (
    <main className="about-page">

      {/* HERO UNIFICADO */}
      <SectionHero
        title="Quién está detrás de Malaika"
        background={aboutBg}
      />

      {/* CONTENIDO */}
      <section className="section about-content">
        <div className="section-inner about-inner">

          <div className="about-text">
            <p>
              Soy Flor, creadora de Malaika, que nace de un camino personal de
              búsqueda, conciencia y transformación.
            </p>

            <p>
              Crecí en un pueblo del interior de Córdoba, rodeada de amigas que
              aún hoy forman parte de mi historia.
            </p>

            <p>
              Con los años me mudé a Río Cuarto, ciudad que elegí como hogar y
              donde formé mi nueva familia.
            </p>

            <h3>El quiebre que abrió conciencia</h3>

            <p>
              Mientras estudiaba abogacía, atravesé procesos personales que me
              invitaron a mirar hacia adentro.
            </p>

            <p className="about-quote">
              ¿Quién quiero ser? ¿Desde dónde estoy viviendo? ¿Qué sentido tiene
              lo que hago?
            </p>

            <p>
              Al formarme como Coach Ontológico Profesional, entendí que no somos
              solo lo que nos pasó, sino lo que elegimos hacer con eso.
            </p>
          </div>

          {/* IMAGEN */}
          <div className="about-image">
            <div className="about-image-wrapper">
              <img src={flor} alt="Flor, creadora de Malaika" />
            </div>
          </div>


        </div>
      </section>

      {/* IKIGAI */}
      <section className="section about-ikigai">
        <div className="section-inner ikigai-inner">

          <div className="ikigai-image">
            <img src={ikigai} alt="Ikigai tattoo" />
          </div>

          <div className="ikigai-text">
            <h3>Ikigai · Vivir con propósito</h3>

            <p>
              El Ikigai transformó mi manera de habitar la vida y hoy atraviesa
              todo lo que ofrece Malaika.
            </p>
          </div>

        </div>
      </section>

      {/* PROFESIONAL */}
      <section className="section about-professional">
        <div className="section-inner about-professional-inner">

          <div className="about-image">
            <div className="about-image-wrapper">
              <img src={flor2} alt="Flor, creadora de Malaika" />
            </div>
          </div>

          <div className="about-text">
            <h3>Profesional, emprendedora y creadora</h3>

            <p>
              Soy abogada, coach ontológica, emprendedora y docente.
            </p>

            <p>
              Entendí que mi manera de acompañar es sensible, creativa y
              profundamente humana.
            </p>
          </div>

        </div>
      </section>


      {/* CIERRE – fondo clarito tipo CTA */}
      <section className="about-close">
        <div className="section-inner about-close-inner">

          <p className="about-quote">
            Malaika es la síntesis de todo ese recorrido.
          </p>

          <p className="about-quote">
            “Elegir quién queremos ser también es un acto de presencia.”
          </p>

        </div>
      </section>

    </main>
  );
}


