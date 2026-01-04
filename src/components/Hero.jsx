import "../styles/Hero.css";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Volvé a vos a través de los aromas,
          la presencia y la experiencia.
        </h1>

        <p>
          Malaika es un espacio sensorial de transformación personal.
          A través de aromas, rituales, experiencias y acompañamientos,
          te invitamos a detenerte, sentir y habitarte con intención.
        </p>

        <div className="hero-actions">
          <Button variant="primary">Explorar Malaika</Button>
          <Button variant="secondary">Descubrir experiencias</Button>
        </div>
      </div>
    </section>
  );
}
