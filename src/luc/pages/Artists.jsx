import { useState } from 'react';
import LucLink from '../LucLink';
import { shuffledArtists } from '../data';

export default function Artists({ navigate }) {
  const [artists] = useState(shuffledArtists);

  return (
    <article className="luc-page">
      <header className="luc-page-head">
        <p className="luc-eyebrow">Artists</p>
        <h1>Portfolios</h1>
        <p className="luc-lead">
          Six artists from Little Umbrella Collective. Work from the studio,
          residencies, and exhibitions.
        </p>
      </header>

      <div className="luc-artist-grid luc-artist-grid--page">
        {artists.map((artist) => (
          <LucLink
            key={artist.slug}
            to={`/luc/artists/${artist.slug}`}
            navigate={navigate}
            className="luc-artist-card"
          >
            <img src={artist.card.src} alt={artist.card.alt} />
            <div className="luc-artist-card-body">
              <h2>{artist.name}</h2>
            </div>
          </LucLink>
        ))}
      </div>
    </article>
  );
}
