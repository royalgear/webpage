import LucLink from '../LucLink';

const SUPPORT = [
  {
    title: 'Mentorship',
    text: '1-1 studio time with art coordinators, so artists with high support needs can work at the pace the work needs.',
  },
  {
    title: 'Access',
    text: 'Mobility, sensory, and support arrangements that many galleries and programs still treat as extra.',
  },
  {
    title: 'Exhibitions',
    text: 'Time and materials for the FirstDraft partnership, an online and physical exhibition advocating for true inclusivity.',
  },
];

export default function Donate({ navigate }) {
  return (
    <article className="luc-page luc-narrow">
      <header className="luc-page-head">
        <p className="luc-eyebrow">Donate</p>
        <h1>Level the playing field</h1>
        <p className="luc-lead">
          Little Umbrella Collective exists so artists with higher needs
          disabilities can have the same opportunities, working environments,
          and access as artists without disabilities.
        </p>
      </header>

      <div className="luc-support-grid">
        {SUPPORT.map((item) => (
          <section key={item.title} className="luc-panel">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </section>
        ))}
      </div>

      <section className="luc-panel luc-panel--wide">
        <h2>Donations are not open on this trial site yet</h2>
        <p>
          We are setting up the public pages first. When giving is ready, this
          page will take you through a donation. Until then, please get in
          touch if you would like to support the collective.
        </p>
        <LucLink to="/luc/contact" navigate={navigate} className="luc-btn luc-btn--primary">
          Contact us
        </LucLink>
      </section>
    </article>
  );
}
