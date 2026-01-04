import "../styles/Section.css";
import "../styles/Accompaniment.css";
import Button from "./Button";

export default function Accompaniment() {
  return (
    <section className="section accompaniment" id="acompanamiento">
      <div className="section-inner">

        <span className="section-tag">
          Coaching ontológico · Modalidad virtual
        </span>

        <h2 className="section-title">
          Un espacio individual de escucha,
          transformación consciente y reconexión interior.
        </h2>

        <h3 className="accompaniment-subtitle">
          Un espacio cuidado para mirarte, escucharte y transformar.
        </h3>

        <div className="section-text">
          <p>
            Este acompañamiento está pensado para personas que sienten un llamado
            a mirarse, ordenarse internamente y transitar procesos de cambio con
            mayor claridad y presencia.
          </p>

          <p>
            Desde el enfoque del coaching ontológico, acompaño procesos personales
            a través de conversaciones profundas, escucha activa y herramientas
            que permiten abrir nuevas formas de habitarte.
          </p>

          <p>
            No se trata de corregirte, sino de volver a vos.
          </p>
        </div>

        <div className="accompaniment-columns">

          <div className="accompaniment-block">
            <h4>¿Para quién es este acompañamiento?</h4>
            <ul>
              <li>Si estás atravesando un momento de cambio o quiebre</li>
              <li>Si sentís desconexión, cansancio o confusión interna</li>
              <li>Si querés trabajar tu manera de comunicarte, sentir y accionar</li>
              <li>Si buscás mayor claridad, presencia y coherencia personal</li>
            </ul>
          </div>

          <div className="accompaniment-block">
            <h4>Modalidad</h4>
            <ul>
              <li>💻 Sesiones virtuales</li>
              <li>🤍 Espacio confidencial y personalizado</li>
            </ul>
          </div>

        </div>

        <div className="accompaniment-cta">
          <Button variant="primary">Conocer el acompañamiento</Button>
          <Button variant="secondary">Quiero una primera conversación</Button>
        </div>

      </div>
    </section>
  );
}
