import Section from '../Section/Section';
import { about } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import { useScrollTo } from '../../hooks/useScrollTo';
import styles from './About.module.css';

function HighlightCard({ icon, title, text, delay }) {
  const { ref, isVisible } = useReveal();

  return (
    <li
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.revealed : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className={styles.icon} aria-hidden="true">{icon}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{text}</p>
    </li>
  );
}

export default function About() {
  const scrollTo = useScrollTo();

  return (
    <Section id="about" kicker="Обо мне" title="Кто я такой">
      <div className={styles.grid}>
        <div className={styles.text}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <button
            type="button"
            className={styles.moreButton}
            onClick={() => scrollTo('contact')}
          >
            Узнать больше →
          </button>
        </div>

        <ul className={styles.cards}>
          {about.highlights.map((item, index) => (
            <HighlightCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              text={item.text}
              delay={index * 120}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
}
