import "../styles/Section.css";
import "../styles/Manifesto.css";
import Button from "./Button";
import velas from "../assets/imagenes/esencia.jpg";

export default function Manifesto() {
  return (
    <section className="section manifesto" id="manifiesto">
      <div className="section-inner manifesto-inner">

        <div className="manifesto-text">

          <h2 className="section-title">
            Volvé a vos para reconectar.
          </h2>

          <p>Vivimos en un mundo que corre.</p>
          <p>Que pide hacer, producir, responder.</p>
          <p className="highlight">
            Malaika nace como una pausa.
          </p>

          <p>
            Creemos que lo cotidiano también puede ser ritual.
            Que un aroma puede abrir una emoción.
          </p>

          <p>
            Cada encuentro, cada vela y cada ritual
            es una invitación suave a mirar hacia adentro,
            cerrar ciclos, abrir preguntas
            y reconectar con lo esencial.
          </p>

          <blockquote>
            “Cada aroma te acerca un poco más a vos.”
          </blockquote>

          <Button variant="btn-primary" href="#experiencias">
            Conocé la esencia de Malaika
          </Button>

        </div>

        <div className="manifesto-image">
          <img src={velas} alt="Ritual de velas Malaika" />
        </div>

      </div>
    </section>
  );
}
