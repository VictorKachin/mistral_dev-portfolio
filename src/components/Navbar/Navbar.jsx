import { useEffect, useState } from 'react';
import { navLinks } from '../../data/content';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrollTo } from '../../hooks/useScrollTo';
import { useTheme } from '../../hooks/useTheme';
import styles from './Navbar.module.css';

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const scrollTo = useScrollTo();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.inner} aria-label="Основная навигация">
        <button type="button" className={styles.logo} onClick={() => handleNav('hero')}>
          <span className={styles.logoAccent}>&lt;</span>AS
          <span className={styles.logoAccent}> /&gt;</span>
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                className={`${styles.link} ${activeId === link.id ? styles.linkActive : ''}`}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.toggle}
          onClick={toggle}
          aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
          title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        <button
          type="button"
          className={styles.burger}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMiddle : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBottom : ''}`} />
        </button>
      </nav>
    </header>
  );
}
