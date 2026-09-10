import { useState } from 'react';
import LucLink from '../LucLink';
import { COPY, GALLERY, shuffledArtists } from '../data';

export default function Home({ navigate }) {
  const [artists] = useState(shuffledArtists);

  return (
    <>
      <section className="luc-hero">
        <img
          src="/luc/logo.jpg"
          alt="Little Umbrella Collective logo: a hand-drawn red umbrella"
          className="luc-hero-logo"
          width="180"
          height="180"
        />
        <p className="luc-eyebrow">{COPY.eyebrow}</p>
        <h1>{COPY.name}</h1>
        <p className="luc-lead">{COPY.lead}</p>
        <div className="luc-actions">
          <LucLink to="/luc/artists" navigate={navigate} className="luc-btn luc-btn--primary">
            Meet the artists
          </LucLink>
          <LucLink to="/luc/about" navigate={navigate} className="luc-btn">
            About us
          </LucLink>
        </div>
      </section>

      <section className="luc-band">
        <blockquote className="luc-quote">
          <p>{COPY.mission}</p>
        </blockquote>
      </section>

      <section className="luc-section">
        <div className="luc-section-head">
          <p className="luc-eyebrow">Studio</p>
          <h2>From the collective</h2>
          <p>
            Photographs and works from{' '}
            <a
              href={COPY.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{COPY.instagramHandle}
            </a>, including residencies, Firstdraft and the studio.
          </p>
        </div>
        <div className="luc-gallery">
          {GALLERY.map((item) => (
            <a
              key={item.src}
              href={item.href}
              className={`luc-gallery-item${item.feature ? ' luc-gallery-item--feature' : ''}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.src} alt={item.alt} />
            </a>
          ))}
        </div>
      </section>

      <section className="luc-section">
        <div className="luc-section-head luc-section-head--end">
          <p className="luc-eyebrow">Artists</p>
          <h2>A collaboration in the studio</h2>
          <p>
            Six artists from the collective. Painting, drawing, and work made
            together in the studio.
          </p>
        </div>
        <div className="luc-artist-grid">
          {artists.map((artist) => (
            <LucLink
              key={artist.slug}
              to={`/luc/artists/${artist.slug}`}
              navigate={navigate}
              className="luc-artist-card"
            >
              <img src={artist.card.src} alt={artist.card.alt} />
              <div className="luc-artist-card-body">
                <h3>{artist.name}</h3>
              </div>
            </LucLink>
          ))}
        </div>
      </section>

      <section className="luc-split">
        <div>
          <p className="luc-eyebrow">Now</p>
          <h2>Moving In (the Next World)</h2>
          <p>{COPY.firstDraft}</p>
          <LucLink to="/luc/events" navigate={navigate} className="luc-text-link">
            See events and member highlights
          </LucLink>
        </div>
        <div className="luc-panel">
          <p className="luc-eyebrow">Support</p>
          <h2>Help keep the studio open</h2>
          <p>
            Donations go toward mentorship, access, and the time it takes to make
            work on the artists’ terms.
          </p>
          <LucLink to="/luc/donate" navigate={navigate} className="luc-btn luc-btn--primary">
            Donate
          </LucLink>
        </div>
      </section>
    </>
  );
}
