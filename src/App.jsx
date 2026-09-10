import Card from './components/Card';
import NotFound from './components/NotFound';
import XFeed from './components/XFeed';
import LucApp from './luc/LucApp';

function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/';
}

export default function App() {
  const path = normalizePath(window.location.pathname);

  if (path === '/' || path === '/index.html') {
    return <Card />;
  }

  if (path === '/x' || path === '/posts') {
    return <XFeed />;
  }

  if (path === '/luc' || path.startsWith('/luc/')) {
    return <LucApp />;
  }

  return <NotFound />;
}
