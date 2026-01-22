import "../styles/Section.css";
import "../styles/About.css";
import SectionHero from "../components/SectionHero";

import flor from "../assets/imagenes/Flor1.png";
import flor2 from "../assets/imagenes/Flor2.png";
import ikigai from "../assets/imagenes/Ikigai.png";
import aboutBg from "../assets/imagenes/portadamobile.png";

export default function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <SectionHero
        title="Quién está detrás de Malaika"
        background={aboutBg}
      />

      {/* BLOQUE 1 · HISTORIA */}
      <section className="section about-content">
        <div className="section-inner about-inner">

          <div className="about-text">
            <p>
              Soy Flor, creadora de Malaika, que nace de un camino personal de
              búsqueda, conciencia y transformación.
            </p>

            <p>
              Crecí en un pueblo del interior de Córdoba, rodeada de amigas que
              aún hoy forman parte de mi historia. Tuve una infancia feliz,
              simple, de vínculos reales.
            </p>

            <p>
              Con los años me mudé a Río Cuarto, ciudad que elegí como hogar y
              donde formé mi nueva familia: mi pareja y compañero de vida,
              Bruno, y nuestros dos perrihijos, Oddie y Pinot.
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
              Fue en ese recorrido donde tomé conciencia de mi historia familiar,
              comprendí la importancia de la terapia y comencé a hacerme
              preguntas más profundas.
            </p>

            <p>
              Más adelante, al formarme como Coach Ontológico Profesional,
              entendí algo clave: no somos solo lo que nos pasó, sino lo que
              elegimos hacer con eso.
            </p>
          </div>

          <div className="about-image">
            <div className="about-image-wrapper">
              <img src={flor} alt="Flor, creadora de Malaika" />
            </div>
          </div>

        </div>
      </section>

      {/* BLOQUE 2 · IKIGAI */}
      <section className="section about-ikigai">
        <div className="section-inner ikigai-inner">

          <div className="ikigai-image ikigai-shaped">
            <img src={ikigai} alt="Ikigai tattoo" />
          </div>

          <div className="ikigai-text">
            <h3>Ikigai · Vivir con propósito</h3>

            <p>
              En ese proceso descubrí un concepto que transformó mi manera de
              habitar la vida: Ikigai.
            </p>

            <p>
              Tanto impacto tuvo en mi vida, que decidí llevarlo en la piel:
              Ikigai hoy es parte de mi historia y de mi cuerpo.
            </p>

            <p>
               Mi ikigai está profundamente ligado a acompañar personas en procesos de transformación,
                crear experiencias con propósito y abrir espacios donde lo cotidiano se vuelva ritual.
            </p>

            
          </div>

        </div>
      </section>

      {/* BLOQUE 3 · PROFESIONAL */}
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
              A lo largo de los años fui explorando distintos caminos: el
              ejercicio profesional, el mundo emprendedor, la formación en
              marketing digital y la docencia.
            </p>

            <p>
              Cada etapa me acercó un poco más a lo que hoy soy y a lo que hoy
              ofrece Malaika.
            </p>

            <p>
              Entendí que mi manera de acompañar no es rígida ni técnica: es
              sensible, creativa y profundamente humana.
            </p>
          </div>

        </div>
      </section>

      {/* CIERRE */}
      <section className="about-close">
        <div className="section-inner about-close-inner">

          <p className="about-close-text">
            Malaika es la síntesis de todo ese recorrido. Es aroma, ritual,
            pausa y presencia.
          </p>

          <p className="about-close-text">
            Es un espacio donde convergen el coaching ontológico, la experiencia
            sensorial y la belleza cotidiana. Un lugar para volver a vos, sin
            exigencias, sin fórmulas, sin apuro.
          </p>

          <p className="about-quote about-quote-script">
            “Elegir quién queremos ser también es un acto de presencia.”
          </p>

        </div>
      </section>

    </main>
  );
}



