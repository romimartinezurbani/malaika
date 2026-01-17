import { useState } from "react";
import "../styles/Section.css";
import "../styles/Accompaniment.css";
import Button from "./Button";
import SectionHero from "./SectionHero";
import ExperienceModal from "./ExperienceModal";

import acompanamientoBg from "../assets/imagenes/acompañamiento.png";

// imágenes 1:1 (ejemplo – después sumás más)
import a1 from "../assets/acompañamiento/1.png";
import a2 from "../assets/acompañamiento/2.png";
import a3 from "../assets/acompañamiento/3.png";
import a4 from "../assets/acompañamiento/4.png";
import a5 from "../assets/acompañamiento/5.png";
import a6 from "../assets/acompañamiento/6.png";

const acompanamientoImages = [a1, a2, a3, a4, a5, a6];

export default function Acompanamientos() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="acompanamientos" id="acompanamiento">

      {/* HERO */}
      <SectionHero
        title="Acompañamientos para habitarte con presencia"
        background={acompanamientoBg}
      />

      {/* INTRO */}
      <section className="section acompanamientos-intro">
        <div className="section-inner intro-inner">
          <p>
            En Malaika, el acompañamiento es un espacio cuidado para detenerte,
            escucharte y abrir nuevas formas de habitar tu vida.
          </p>

          <p>
            A través del coaching ontológico, acompañamos procesos personales de
            transformación desde la presencia, la escucha y el compromiso con
            lo que querés crear.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="section acompanamientos-cards">
        <div className="section-inner cards-inner">

          {/* 1:1 */}
          <div className="acompanamiento-card">
            <h3>Acompañamiento 1:1</h3>

            <p className="card-intro">
              Un espacio individual y confidencial para trabajar aquello que hoy
              te inquieta, te frena o te invita a transformarte.
            </p>

            <p>
              A través de conversaciones de coaching ontológico, exploramos
              creencias, emociones y decisiones para crear mayor coherencia entre
              lo que sos, lo que hacés y lo que querés.
            </p>

            <div className="postit">
              <h4>¿Para quién es?</h4>
              <ul>
                <li>Personas en momentos de cambio o búsqueda</li>
                <li>Quiebres personales o emocionales</li>
                <li>Búsqueda de claridad y dirección</li>
                <li>Acompañamiento humano y profundo</li>
              </ul>
            </div>

            <div className="postit soft">
              <h4>Modalidad</h4>
              <ul>
                <li>Sesiones virtuales</li>
                <li>Encuentros individuales</li>
                <li>Frecuencia acordada</li>
              </ul>
            </div>

            <Button variant="btn-primary" onClick={() => setOpenModal(true)}>
              Conocer el acompañamiento
            </Button>
          </div>

          {/* HABITARTE */}
          <div className="acompanamiento-card alt">
            <h3>Programa grupal · Habitarte</h3>

            <p className="card-intro">
              Un programa grupal para reconectar con tu mundo interno y crear
              cambios sostenibles desde la presencia.
            </p>

            <p>
              Encuentros guiados, conversaciones de coaching, ejercicios
              reflexivos y espacios compartidos de crecimiento consciente.
            </p>

            <div className="postit">
              <h4>¿Qué trabaja?</h4>
              <ul>
                <li>Presencia y escucha interna</li>
                <li>Emociones y estados de ánimo</li>
                <li>Creencias y modelos mentales</li>
                <li>Compromiso personal</li>
              </ul>
            </div>

            <Button
              variant="btn-primary"
              href="https://wa.me/5493584856527?text=Hola!%20Quisiera%20consultar%20sobre%20el%20programa%20grupal%20Habitarte."
            >
              Consultar inicio del programa
            </Button>
          </div>

        </div>
      </section>

      {/* MODAL 1:1 */}
      <ExperienceModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title=" "
        images={acompanamientoImages}
      />

    </section>
  );
}

