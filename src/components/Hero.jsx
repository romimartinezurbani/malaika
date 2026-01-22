import { useEffect, useState } from "react";
import "../styles/Hero.css";

import img1 from "../assets/hero/20251108_120358.jpg";
import img2 from "../assets/hero/20251108_143140.jpg";
import img3 from "../assets/hero/20251108_140409.jpg";
import img4 from "../assets/hero/20251108_162202.jpg";
import img5 from "../assets/hero/20251108_120358.jpg";
import img6 from "../assets/hero/20251213_141036.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="hero">
      <div
        className="hero-media-layer prev"
        style={{ backgroundImage: `url(${images[prev]})` }}
      />

      <div
        className="hero-media-layer current"
        style={{ backgroundImage: `url(${images[current]})` }}
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>Volvé a vos a través de los aromas y la presencia.</h1>

        <p className="hero-subtitle">
          Un espacio sensorial de transformación personal.
        </p>

        <p className="hero-subtitle">
          Aromas, rituales, experiencias y acompañamientos para detenerte,
          sentir y habitarte con intención.
        </p>
      </div>
    </section>
  );
}




