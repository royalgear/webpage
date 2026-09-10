import { useEffect, useState } from 'react';
import LucLayout from './LucLayout';
import About from './pages/About';
import Artist from './pages/Artist';
import Artists from './pages/Artists';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Events from './pages/Events';
import Home from './pages/Home';
import './Luc.css';

function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/';
}

export default function LucApp() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    document.title = 'Little Umbrella Collective';
    document.documentElement.setAttribute('data-theme', 'light');

    const onPop = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
      document.title = 'rumz.dev';
    };
  }, []);

  const navigate = (to, event) => {
    if (event) event.preventDefault();
    const next = normalizePath(to);
    if (next === path) return;
    window.history.pushState({}, '', to);
    setPath(next);
    window.scrollTo(0, 0);
  };

  let page;
  if (path === '/luc' || path === '/luc/index.html') {
    page = <Home navigate={navigate} />;
  } else if (path === '/luc/artists') {
    page = <Artists navigate={navigate} />;
  } else if (path.startsWith('/luc/artists/')) {
    page = <Artist slug={path.slice('/luc/artists/'.length)} navigate={navigate} />;
  } else if (path === '/luc/about') {
    page = <About />;
  } else if (path === '/luc/events') {
    page = <Events />;
  } else if (path === '/luc/donate') {
    page = <Donate navigate={navigate} />;
  } else if (path === '/luc/contact') {
    page = <Contact />;
  } else {
    page = (
      <article className="luc-page luc-narrow">
        <p className="luc-eyebrow">404</p>
        <h1>This page is not here.</h1>
        <p>
          <a href="/luc" onClick={(event) => navigate('/luc', event)}>
            Back to Little Umbrella Collective
          </a>
        </p>
      </article>
    );
  }

  return (
    <LucLayout path={path} navigate={navigate}>
      {page}
    </LucLayout>
  );
}
