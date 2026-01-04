import "../styles/Section.css";
import "../styles/Experiences.css";
import Button from "./Button";

export default function Experiences() {
  return (
    <section className="section experiences" id="experiencias">
      <div className="section-inner">

        <h2 className="section-title">
          Experiencias para sentir, crear y reconectar.
        </h2>

        <div className="section-text">
          <p>
            Las experiencias sensoriales de Malaika son encuentros diseñados para
            salir del automático, conectar con los sentidos y crear desde la
            presencia.
          </p>

          <p>
            Combinamos aromas, rituales, creatividad y naturaleza para abrir
            espacios de introspección y disfrute consciente.
          </p>
        </div>

        {/* Experiencia 1 */}
        <div className="experience-block">

          <h3 className="experience-title">
            Velas entre Aromas
          </h3>

          <span className="experience-subtitle">
            Ediciones especiales · Cena o Merienda
          </span>

          <p className="experience-description">
            Una experiencia íntima y sensorial donde cada participante crea su
            propia vela artesanal, elige aromas, decora su envase y atraviesa un
            ritual de intención y presencia.
          </p>

          <div className="experience-columns">

            <div>
              <h4>Incluye</h4>
              <ul>
                <li>🕯️ Creación de vela artesanal</li>
                <li>🌸 Elección consciente de aromas</li>
                <li>✍️ Momento de intención y reflexión</li>
                <li>🍷 Edición cena / ☕ edición merienda</li>
                <li>🤍 Acompañamiento durante toda la experiencia</li>
              </ul>
            </div>

            <div>
              <h4>Ideal para</h4>
              <ul>
                <li>Encuentros entre amigas</li>
                <li>Celebraciones íntimas</li>
                <li>Despedidas o aperturas de ciclo</li>
                <li>Espacios de autocuidado y disfrute</li>
              </ul>
            </div>

          </div>

          <div className="experience-cta">
            <Button variant="primary">
              Ver próximas fechas
            </Button>
            <Button variant="secondary">
              Consultar experiencia
            </Button>
          </div>

        </div>

        {/* Experiencia 2 */}
        <div className="experience-block experience-alt">

          <h3 className="experience-title">
            Velas entre Montañas
          </h3>

          <p className="experience-description">
            Una experiencia sensorial inmersiva en la naturaleza, donde el
            paisaje serrano se convierte en parte del ritual. Creamos velas,
            conectamos con los sentidos y abrimos un espacio profundo de
            presencia, introspección y calma.
          </p>

          <p className="experience-focus">
            Naturaleza · Silencio · Ritmo lento · Ritual · Conexión interna
          </p>

          <div className="experience-columns">

            <div>
              <h4>Ideal para</h4>
              <ul>
                <li>Personas que buscan una experiencia transformadora</li>
                <li>Escapadas conscientes</li>
                <li>Momentos de reconexión profunda</li>
              </ul>
            </div>

          </div>

          <div className="experience-cta">
            <Button variant="primary">
              Descubrir Velas entre Montañas
            </Button>
            <Button variant="secondary">
              Consultar próximas ediciones
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
