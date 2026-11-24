import { useReveal } from '../../hooks/useReveal';
import styles from './Section.module.css';

export default function Section({ id, title, kicker, children }) {
  const { ref, isVisible } = useReveal();

  return (
    <section id={id} ref={ref} className={styles.section}>
      <div className={styles.container}>
        <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.kicker}>{kicker}</span>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.line} aria-hidden="true" />
        </header>
        {children}
      </div>
    </section>
  );
}
