export default function SectionHero({ title, background }) {
  return (
    <section
      className="section-hero"
      style={{ "--hero-bg": `url(${background})` }}
    >
      {title && <h1 className="section-hero-title">{title}</h1>}
    </section>
  );
}

