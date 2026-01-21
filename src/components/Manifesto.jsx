import { useState } from "react";
import "../styles/Section.css";
import "../styles/Manifesto.css";
import Button from "./Button";

import velas from "../assets/imagenes/esencia.jpg";

import e1 from "../assets/esencia/Tezza-7918.jpg";
import e2 from "../assets/esencia/Tezza-7584.jpg";
import e3 from "../assets/esencia/Tezza-9159.jpg";
import e4 from "../assets/esencia/Tezza-9347.jpg";
import e5 from "../assets/esencia/IMG_8571.DNG";
import e6 from "../assets/esencia/IMG-20251129.jpg";
import e7 from "../assets/esencia/IMG-20251206.jpg";

import ExperienceModal from "./ExperienceModal";

const esenciaImages = [e1, e2, e3, e4, e5, e6, e7];

export default function Manifesto() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
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

            <p className="frase-final">
              “Cada aroma te acerca un poco más a vos.”
            </p>

            <Button
              variant="btn-primary"
              onClick={() => setOpenModal(true)}
            >
              Conocé la esencia de Malaika
            </Button>
          </div>

          <div className="manifesto-image">
            <img src={velas} alt="Ritual de velas Malaika" />
          </div>

        </div>
      </section>

      {/* MODAL */}
      <ExperienceModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title=""
        images={esenciaImages}
      />
    </>
  );
}

