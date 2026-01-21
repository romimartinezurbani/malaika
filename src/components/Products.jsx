import { useState } from "react";
import "../styles/Section.css";
import "../styles/Products.css";
import SectionHero from "../components/SectionHero";
import Button from "../components/Button";
import ExperienceModal from "../components/ExperienceModal";

import productosBg from "../assets/imagenes/productos.png";

import aromas1 from "../assets/productos/7.png"
import aromas from "../assets/productos/8.png";
import difusores from "../assets/productos/difusores.png";
import sprays from "../assets/productos/spray.png";
import esencias from "../assets/productos/esencias.png";

import lista1 from "../assets/productos/lista1.png";
import lista2 from "../assets/productos/lista2.png";
import lista3 from "../assets/productos/lista3.png";
import lista4 from "../assets/productos/lista4.png";
import lista5 from "../assets/productos/lista5.png";
import lista6 from "../assets/productos/lista6.png";

const aromasImages = [lista1, lista2, lista3, lista4, lista5, lista6];

export default function Productos() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="productos-page">

      {/* HERO */}
      <SectionHero
        title="Aromas que acompañan tu día"
        background={productosBg}
      />

      {/* INTRO */}
        <section className="section productos-intro">
          <div className="section-inner productos-intro-inner">

            <div className="productos-intro-image">
              <img src={aromas1} alt="Aromas Malaika detalle" />
              <img src={aromas} alt="Aromas Malaika" />
            </div>

            <div className="productos-intro-text">
              <p>
                Nuestros productos están creados para acompañar procesos internos
                y momentos de calma.
              </p>
              <p>
                No son solo aromas: son invitaciones a detenerte, respirar y
                sentir.
              </p>
              <p>
                Cada fragancia está diseñada con intención, sensibilidad y
                conexión con la naturaleza.
              </p>
            </div>

          </div>
        </section>


      {/* PRODUCTO 1 */}
      <section className="section producto-block">
        <div className="section-inner producto-inner">

          <div className="producto-image">
            <img src={difusores} alt="Difusores de varillas" />
          </div>

          <div className="producto-text">
            <h3>🌿 Difusores de varillas</h3>
            <p>
              Los difusores de varillas acompañan los espacios de manera
              constante y delicada.
            </p>
            <p>
              Su aroma se libera lentamente, creando una atmósfera de calma,
              presencia y equilibrio.
            </p>
            <p>
              Ideales para quienes buscan un perfume sutil que habite el espacio
              sin imponerse.
            </p>
          </div>

        </div>
      </section>

      {/* PRODUCTO 2 */}
      <section className="section producto-block alt">
        <div className="section-inner producto-inner">

          <div className="producto-image">
            <img src={sprays} alt="Home Sprays" />
          </div>

          <div className="producto-text">
            <h3>💧 Home sprays</h3>
            <p>
              El Home Spray permite perfumar el espacio de forma inmediata y
              consciente.
            </p>
            <p>
              Un gesto simple que transforma el ambiente en segundos.
            </p>
            <p>
              Ideal para intencionar un espacio antes de comenzar una actividad
              o crear un momento propio.
            </p>
          </div>

        </div>
      </section>

      {/* PRODUCTO 3 */}
      <section className="section producto-block">
        <div className="section-inner producto-inner">

          <div className="producto-image">
            <img src={esencias} alt="Esencias puras" />
          </div>

          <div className="producto-text">
            <h3>🌸 Esencias puras</h3>
            <p>
              Las esencias puras están pensadas para rituales de presencia y
              conexión.
            </p>
            <p>
              Al calentarse suavemente, liberan su aroma de forma envolvente.
            </p>
            <p>
              Ideales para meditación, escritura o descanso consciente.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section productos-cta">
        <div className="section-inner productos-cta-inner">

          <Button variant="btn-primary" onClick={() => setOpenModal(true)}>
            Conocer los aromas
          </Button>

        </div>
      </section>

      {/* MODAL */}
      <ExperienceModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title=""
        images={aromasImages}
      />

    </main>
  );
}

