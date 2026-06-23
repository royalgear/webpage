import { useState } from 'react';
import OperaHouse from './OperaHouse';
import './Card.css';

const EMAIL = 'hello@rumz.dev';

export default function Card() {
  const [hovered, setHovered] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);

  return (
    <div
      className={`card${hovered ? ' card--hovered' : ''}${emailHovered ? ' card--email-hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setEmailHovered(false);
      }}
    >
      <OperaHouse />

      <div className="card-wave" aria-hidden="true">
        <svg viewBox="0 0 1200 48" preserveAspectRatio="none">
          <path d="M0,24 C200,48 400,0 600,24 C800,48 1000,0 1200,24 L1200,48 L0,48 Z" />
        </svg>
      </div>

      <section className="hero">
        <h1 className="hero-title">
          rumz<span className="hero-tld">.dev</span>
        </h1>
        <p className={`hero-tagline${hovered ? ' hero-tagline--visible' : ''}`}>
          digital odd jobs. from scripting to reasoning.
        </p>
      </section>

      <div className="card-actions">
        <a
          href={`mailto:${EMAIL}`}
          className={`email-button${hovered ? ' email-button--visible' : ''}`}
          aria-label={EMAIL}
          tabIndex={hovered ? 0 : -1}
          onMouseEnter={() => setEmailHovered(true)}
          onMouseLeave={() => setEmailHovered(false)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="1.5" />
            <path d="M3 7l9 6 9-6" />
          </svg>
        </a>
      </div>

      <footer className="footer">
        <p>sydney, au © 1993</p>
      </footer>
    </div>
  );
}