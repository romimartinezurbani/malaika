import "../styles/Section.css";
import "../styles/Products.css";
import Button from "./Button";

export default function Products() {
  return (
    <section className="section products" id="productos">
      <div className="section-inner">

        <h2 className="section-title">
          Aromas que acompañan tu día.
        </h2>

        <div className="section-text">
          <p>
            Nuestros productos están creados para acompañar procesos internos,
            rituales personales y momentos de calma.
          </p>

          <p>
            No son solo aromas: son invitaciones a detenerte, respirar y sentir.
            Cada fragancia está diseñada con intención, sensibilidad y conexión
            con la naturaleza.
          </p>
        </div>

        <div className="products-list">
          <div className="product-item">Velas artesanales</div>
          <div className="product-item">Difusores de varillas</div>
          <div className="product-item">Home sprays</div>
          <div className="product-item">
            Aromas pensados para distintos estados emocionales y espacios
          </div>
        </div>

        <div className="products-cta">
          <Button variant="primary">Ver productos disponibles</Button>
          <Button variant="secondary">Consultar por aromas y envíos</Button>
        </div>

      </div>
    </section>
  );
}
