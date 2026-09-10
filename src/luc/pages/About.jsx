import { COPY } from '../data';

export default function About() {
  return (
    <article className="luc-page luc-narrow">
      <header className="luc-page-head">
        <p className="luc-eyebrow">About us</p>
        <h1>A collective formed around a gap</h1>
        <p className="luc-lead">{COPY.who[0]}</p>
      </header>

      <figure className="luc-photo">
        <img
          src="/luc/instagram/residency-cowra.jpg"
          alt="Members of Little Umbrella Collective sitting together on the deck of a corrugated-iron studio during the CORRIDOR project residency in Cowra."
        />
        <figcaption>CORRIDOR project residency, Cowra, 2026</figcaption>
      </figure>

      <section className="luc-prose-block">
        <h2>Who we are</h2>
        {COPY.who.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="luc-prose-block">
        <h2>The gap we fill</h2>
        {COPY.gap.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>{COPY.aim}</p>
      </section>

      <section className="luc-prose-block">
        <h2>Our mission</h2>
        <p>{COPY.mission}</p>
      </section>

      <section className="luc-prose-block">
        <h2>How we work</h2>
        <p>{COPY.collaboration}</p>
      </section>
    </article>
  );
}
