export default function SectionHero({ title, background }) {
  return (
    <section
      className="section-hero"
      style={{ backgroundImage: `url(${background})` }}
    >
      {title && <h1 className="section-hero-title">{title}</h1>}
    </section>
  );
}

