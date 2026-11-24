import Section from '../Section/Section';
import { useReveal } from '../../hooks/useReveal';
import { contact } from '../../data/content';
import styles from './Contact.module.css';

export default function Contact() {
  const { ref, isVisible } = useReveal();

  return (
    <Section
      id="contact"
      kicker="Контакты"
      title="Давайте работать вместе"
    >
      <div ref={ref} className={`${styles.wrapper} ${isVisible ? styles.revealed : ''}`}>
        <p className={styles.text}>{contact.text}</p>

        <a href={`mailto:${contact.email}`} className={styles.emailButton}>
          {contact.email}
        </a>

        <ul className={styles.links}>
          {contact.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <span aria-hidden="true">{link.icon}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
