import s from './Star.module.css';

const Star = ({ value = 0, max = 5, mode = 'multi', size = 16 }) => {
  if (mode === 'multi') {
    // Класичні ★ і ☆
    const stars = Array.from({ length: max }, (_, i) =>
      i < value ? '★' : '☆'
    );
    return (
      <span className={s.multi} style={{ fontSize: size }}>
        {stars.join(' ')}
      </span>
    );
  }

  if (mode === 'single') {
    // Одна зірка з заповненням (через градієнт)
    const percent = Math.min(100, Math.max(0, (value / max) * 100));
    return (
      <span
        className={s.single}
        style={{
          fontSize: size,
          background: `linear-gradient(90deg, var(--color-rating) ${percent}%, #ccc ${percent}%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        ★
      </span>
    );
  }

  return null;
};

export default Star;
