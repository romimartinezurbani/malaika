import "../styles/SectionHero.css";

export default function SectionHero({ title, background }) {
  return (
    <section
      className="section-hero"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="section-hero-title animate-fade-up">
        {title}
      </h1>
    </section>
  );
}
