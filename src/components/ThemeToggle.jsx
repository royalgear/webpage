import './ThemeToggle.css';

export default function ThemeToggle({ theme, onChange }) {
  return (
    <div className="theme-toggle">
      <button
        type="button"
        className={`theme-toggle__btn${theme === 'light' ? ' theme-toggle__btn--active' : ''}`}
        onClick={() => onChange('light')}
      >
        light
      </button>
      <button
        type="button"
        className={`theme-toggle__btn${theme === 'dark' ? ' theme-toggle__btn--active' : ''}`}
        onClick={() => onChange('dark')}
      >
        dark
      </button>
    </div>
  );
}