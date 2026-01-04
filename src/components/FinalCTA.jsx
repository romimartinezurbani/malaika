import "../styles/Section.css";
import "../styles/FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="section final-cta">
      <div className="section-inner final-cta-inner">

        <h2 className="final-cta-title">
          ¿Sentís el llamado a volver a vos?
        </h2>

        <p className="final-cta-text">
          Podés hacerlo a través de un aroma, una experiencia o un acompañamiento.
            Malaika es una invitación a habitarte con intención.
        </p>

        <a
          href="https://wa.me/549XXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="final-cta-button"
        >
          Iniciar conversación
        </a>

      </div>
    </section>
  );
}
