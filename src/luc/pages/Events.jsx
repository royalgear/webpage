import { AWARDS, COPY, FINALISTS, RESIDENCIES } from '../data';

export default function Events() {
  return (
    <article className="luc-page">
      <header className="luc-page-head luc-narrow">
        <p className="luc-eyebrow">Events</p>
        <h1>Exhibitions and residencies</h1>
        <p className="luc-lead">
          The public program so far includes Firstdraft, Us at Sydney
          Children’s Hospital Randwick, a week in Cowra, and member residencies
          and awards.
        </p>
      </header>

      <section className="luc-feature luc-feature--photo">
        <img
          src="/luc/instagram/moving-in.webp"
          alt="Opening night of Moving In (the Next World) at Firstdraft: the banner, the courtyard crowd, and people in the gallery."
        />
        <div>
          <p className="luc-eyebrow">Exhibition</p>
          <h2>Moving In (the Next World)</h2>
          <p>{COPY.firstDraft}</p>
        </div>
      </section>

      <section className="luc-feature luc-feature--photo">
        <img
          src="/luc/instagram/hospital-randwick.jpg"
          alt="Paintings hanging along an Outpatients corridor at Sydney Children’s Hospital Randwick."
        />
        <div>
          <p className="luc-eyebrow">Exhibition</p>
          <h2>Us, Sydney Children’s Hospital Randwick</h2>
          <p>{COPY.hospitalUs}</p>
        </div>
      </section>

      <section className="luc-feature luc-feature--photo">
        <img
          src="/luc/instagram/residency-cowra.jpg"
          alt="Members of Little Umbrella Collective sitting together on a studio deck during the CORRIDOR project residency in Cowra."
        />
        <div>
          <p className="luc-eyebrow">Residency</p>
          <h2>the CORRIDOR project, Cowra</h2>
          <p>{COPY.corridor}</p>
        </div>
      </section>

      <div className="luc-two">
        <section>
          <h2>Member residencies</h2>
          <p>
            Members have been selected for artist residencies including:
          </p>
          <ul className="luc-chip-list">
            {RESIDENCIES.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Awards & finalists</h2>
          <ul className="luc-plain-list">
            {AWARDS.map((award) => (
              <li key={award.title}>
                <strong>{award.title}</strong>
                {award.detail ? `, ${award.detail}` : ''}
              </li>
            ))}
          </ul>
          <p className="luc-meta">Finalists: {FINALISTS.join(', ')}.</p>
        </section>
      </div>
    </article>
  );
}
