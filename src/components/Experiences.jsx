import { useState } from "react";
import "../styles/Section.css";
import "../styles/Experiences.css";
import Button from "./Button";
import ExperienceModal from "./ExperienceModal";
import montana1 from "../assets/experiences/montaña/1.png";
import montana2 from "../assets/experiences/montaña/2.png";
import montana3 from "../assets/experiences/montaña/3.png";
import montana4 from "../assets/experiences/montaña/4.png";
import montana5 from "../assets/experiences/montaña/5.png";
import montana6 from "../assets/experiences/montaña/6.png";
import montana7 from "../assets/experiences/montaña/7.png";
import montana8 from "../assets/experiences/montaña/8.png";

import aroma1 from "../assets/experiences/merienda/1.png";
import aroma2 from "../assets/experiences/merienda/2.png";
import aroma3 from "../assets/experiences/merienda/3.png";
import aroma4 from "../assets/experiences/merienda/4.png";
import aroma5 from "../assets/experiences/merienda/5.png";
import aroma6 from "../assets/experiences/merienda/6.png";
import aroma7 from "../assets/experiences/merienda/7.png";
import aroma8 from "../assets/experiences/merienda/8.png";
import heroImage from "../assets/imagenes/experiencias.png";
import SectionHero from "./SectionHero";

const montanaImages = [
  montana1,
  montana2,
  montana3,
  montana4,
  montana5,
  montana6,
  montana7,
  montana8,
  
];

const aromaImages = [
  aroma1,
  aroma2,
  aroma3,
  aroma4,
  aroma5,
  aroma6,
  aroma7,
  aroma8,
];


export default function Experiences() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <section className="experiences" id="experiencias">

  {/* PORTADA */}
    <SectionHero
    title="Experiencias para sentir, crear y reconectar."
    background={heroImage}
  />

  {/* CONTENIDO */}
  <div className="section experiences-content">
    <div className="section-inner">

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
      </div>

    <div className="experiences-grid">

      {/* Experiencia 1 */}
      <div className="experience-card">
        <h3 className="experience-title">Velas entre Aromas</h3>

        <span className="experience-subtitle">
          Ediciones especiales · Cena o Merienda
        </span>

        <p className="experience-description">
          Una experiencia íntima y sensorial donde cada participante crea su
          propia vela artesanal.
        </p>

        <Button
          variant="btn-primary"
          onClick={() => setOpenModal("aromas")}
        >
          Ver experiencia
        </Button>
      </div>

      {/* Experiencia 2 */}
      <div className="experience-card alt">
        <h3 className="experience-title">Velas entre Montañas</h3>

        <p className="experience-description">
          Una experiencia sensorial inmersiva en la naturaleza, donde el
          paisaje serrano se convierte en parte del ritual.
        </p>

        <Button
          variant="btn-primary"
          onClick={() => setOpenModal("montanas")}
        >
          Ver experiencia
        </Button>
      </div>

    </div>
  </div>

  {/* Modales */}
  <ExperienceModal
    open={openModal === "aromas"}
    onClose={() => setOpenModal(null)}
    title=" "
    images={aromaImages}
  />

  <ExperienceModal
    open={openModal === "montanas"}
    onClose={() => setOpenModal(null)}
    title=" "
    images={montanaImages}
  />
</section>

  );
}


