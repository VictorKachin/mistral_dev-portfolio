import { footer, navLinks } from '../../data/content';
import { useScrollTo } from '../../hooks/useScrollTo';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollTo = useScrollTo();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          © {footer.year} {footer.author} · Собрано с React + Vite
        </p>
        <nav className={styles.nav} aria-label="Навигация в подвале">
          {navLinks.slice(1).map((link) => (
            <button
              key={link.id}
              type="button"
              className={styles.link}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
}
