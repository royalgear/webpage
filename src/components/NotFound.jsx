import { useState } from 'react';
import OperaHouse from './OperaHouse';
import './Card.css';

export default function NotFound() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`card card--not-found${hovered ? ' card--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <OperaHouse />

      <div className="card-wave" aria-hidden="true">
        <svg viewBox="0 0 1200 48" preserveAspectRatio="none">
          <path d="M0,24 C200,48 400,0 600,24 C800,48 1000,0 1200,24 L1200,48 L0,48 Z" />
        </svg>
      </div>

      <section className="hero">
        <h1 className="hero-title hero-title--sm">
          <a href="/" className="hero-title-link">
            rumz<span className="hero-tld">.dev</span>
          </a>
        </h1>
      </section>

      <div className="card-actions">
        <div className="not-found-block">
          <p className="not-found-code">404</p>
          <p className="not-found-label">not found</p>
        </div>
      </div>

      <footer className="footer footer--sm">
        <p>sydney, au © 1993</p>
      </footer>
    </div>
  );
}
