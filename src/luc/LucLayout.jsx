import { useEffect, useState } from 'react';
import LucLink from './LucLink';
import { COPY, NAV } from './data';

export default function LucLayout({ path, navigate, children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const isActive = (href) => path === href || path.startsWith(`${href}/`);

  const go = (to, event) => {
    setMenuOpen(false);
    navigate(to, event);
  };

  return (
    <div className="luc-site">
      <a className="luc-skip" href="#luc-main">
        Skip to content
      </a>

      <header className="luc-header">
        <div className="luc-header-inner">
          <LucLink to="/luc" navigate={go} className="luc-brand">
            <img
              src="/luc/logo.jpg"
              alt=""
              className="luc-brand-mark"
              width="64"
              height="64"
            />
            <span className="luc-brand-text">
              <span className="luc-brand-name">{COPY.name}</span>
            </span>
          </LucLink>

          <button
            type="button"
            className="luc-menu-btn"
            aria-expanded={menuOpen}
            aria-controls="luc-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="luc-menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            {menuOpen ? 'Close' : 'Menu'}
          </button>

          <nav
            id="luc-nav"
            className={`luc-nav${menuOpen ? ' luc-nav--open' : ''}`}
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <LucLink
                key={item.href}
                to={item.href}
                navigate={go}
                className={`luc-nav-link${isActive(item.href) ? ' is-active' : ''}`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </LucLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="luc-main" className="luc-main">
        {children}
      </main>

      <footer className="luc-footer">
        <div className="luc-footer-inner">
          <div className="luc-footer-brand">
            <img src="/luc/logo.jpg" alt="" width="48" height="48" />
            <div>
              <p className="luc-footer-name">{COPY.name}</p>
              <p className="luc-footer-place">{COPY.location}</p>
            </div>
          </div>
          <nav className="luc-footer-nav" aria-label="Footer">
            {NAV.map((item) => (
              <LucLink key={item.href} to={item.href} navigate={navigate}>
                {item.label}
              </LucLink>
            ))}
            <a
              href={COPY.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
