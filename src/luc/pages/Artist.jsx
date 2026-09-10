import LucLink from '../LucLink';
import { getArtist } from '../data';

export default function Artist({ slug, navigate }) {
  const artist = getArtist(slug);

  if (!artist) {
    return (
      <article className="luc-page luc-narrow">
        <p className="luc-eyebrow">Artists</p>
        <h1>Artist not found</h1>
        <p>
          <LucLink to="/luc/artists" navigate={navigate}>
            Back to artists
          </LucLink>
        </p>
      </article>
    );
  }

  return (
    <article className="luc-page luc-page--artist">
      <p className="luc-crumb">
        <LucLink to="/luc/artists" navigate={navigate}>
          Artists
        </LucLink>
        <span aria-hidden="true"> /</span>
      </p>

      <header className="luc-page-head luc-artist-head">
        <h1>{artist.name}</h1>
        <p className="luc-artist-links">
          <a
            href={`https://www.instagram.com/${artist.instagram}/`}
            className="luc-ig-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="luc-ig-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" />
              <circle cx="12" cy="12" r="4.1" />
              <circle cx="17.35" cy="6.65" r="1.05" fill="currentColor" stroke="none" />
            </svg>
            {artist.instagram}
          </a>
        </p>
      </header>

      <p className="luc-prose">{artist.bio}</p>

      <section className="luc-works" aria-label={`${artist.name} works`}>
        {artist.works.map((work) => (
          <figure key={work.src} className="luc-work">
            {work.href ? (
              <a href={work.href} target="_blank" rel="noopener noreferrer">
                <img src={work.src} alt={work.alt} />
              </a>
            ) : (
              <img src={work.src} alt={work.alt} />
            )}
            {work.caption && <figcaption>{work.caption}</figcaption>}
          </figure>
        ))}
      </section>
    </article>
  );
}
