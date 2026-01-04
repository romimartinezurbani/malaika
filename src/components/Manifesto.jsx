import "../styles/Section.css";
import "../styles/Manifesto.css";
import Button from "./Button";

export default function Manifesto() {
  return (
    <section className="section manifesto">
      <div className="section-inner">

        <h2 className="section-title">
          Un espacio para reconectar.
        </h2>

        <div className="section-text">
          <p>
            En un mundo que corre, Malaika propone pausar.
            Crear momentos de presencia donde lo cotidiano se transforma
            en ritual, el aroma en emoción y la experiencia en un puente hacia vos.
          </p>

          <p>
            Cada producto, cada encuentro y cada acompañamiento está pensado
            como un espacio de introspección suave, belleza consciente
            y cuidado emocional.
          </p>
        </div>

        <blockquote className="manifesto-quote">
          “Cada aroma te acerca un poco más a vos.”
        </blockquote>

        <div className="manifesto-cta">
          <Button variant="primary">
            Conocé la esencia de Malaika
          </Button>
        </div>

      </div>
    </section>
  );
}
