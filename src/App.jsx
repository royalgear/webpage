import Card from './components/Card';
import NotFound from './components/NotFound';

function isHomePath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  return path === '/' || path === '/index.html';
}

export default function App() {
  if (!isHomePath(window.location.pathname)) {
    return <NotFound />;
  }

  return <Card />;
}
