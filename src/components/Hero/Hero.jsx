import { useEffect, useState } from 'react';
import { hero } from '../../data/content';
import { useScrollTo } from '../../hooks/useScrollTo';
import styles from './Hero.module.css';

const roles = ['Frontend Developer', 'React-инженер', 'UI-энтузиаст'];

const useTypewriter = (phrases, { typeSpeed = 70, deleteSpeed = 40, pause = 1800 } = {}) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const full = phrases[phraseIndex];

    if (phase === 'typing' && text.length < full.length) {
      const timeout = setTimeout(() => setText(full.slice(0, text.length + 1)), typeSpeed);
      return () => clearTimeout(timeout);
    }

    if (phase === 'typing') {
      const timeout = setTimeout(() => setPhase('deleting'), pause);
      return () => clearTimeout(timeout);
    }

    if (text.length > 0) {
      const timeout = setTimeout(() => setText(full.slice(0, text.length - 1)), deleteSpeed);
      return () => clearTimeout(timeout);
    }

    setPhase('typing');
    setPhraseIndex((index) => (index + 1) % phrases.length);
    return undefined;
  }, [text, phase, phraseIndex, phrases, typeSpeed, deleteSpeed, pause]);

  return text;
};

export default function Hero() {
  const typed = useTypewriter(roles);
  const scrollTo = useScrollTo();

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.greeting}>{hero.greeting}</p>
          <h1 className={styles.name}>{hero.name}</h1>
          <p className={styles.role} aria-live="polite">
            {typed}
            <span className={styles.caret} aria-hidden="true">|</span>
          </p>
          <p className={styles.description}>{hero.description}</p>
          <div className={styles.actions}>
            <button type="button" className={styles.primary} onClick={() => scrollTo('projects')}>
              {hero.ctaPrimary}
            </button>
            <button type="button" className={styles.ghost} onClick={() => scrollTo('contact')}>
              {hero.ctaSecondary}
            </button>
          </div>
          <dl className={styles.stats}>
            {hero.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={styles.stat}
                style={{ animationDelay: `${0.6 + index * 0.25}s` }}
              >
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.orbit}>
            <span className={`${styles.chip} ${styles.chipReact}`}>React</span>
            <span className={`${styles.chip} ${styles.chipTs}`}>TypeScript</span>
            <span className={`${styles.chip} ${styles.chipVite}`}>Vite</span>
            <span className={`${styles.chip} ${styles.chipCss}`}>CSS</span>
          </div>
          <div className={styles.core}>{'</>'}</div>
        </div>
      </div>

      <button
        type="button"
        className={styles.scrollHint}
        aria-label="Прокрутить вниз"
        onClick={() => scrollTo('about')}
      >
        <span className={styles.mouse}>
          <span className={styles.wheel} />
        </span>
      </button>
    </section>
  );
}
