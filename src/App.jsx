import { useEffect, useState } from 'react';
import Card from './components/Card';
import ThemeToggle from './components/ThemeToggle';

function getInitialTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <ThemeToggle theme={theme} onChange={setTheme} />
      <Card />
    </>
  );
}