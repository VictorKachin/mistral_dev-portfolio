import Section from '../Section/Section';
import { projects } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import styles from './Projects.module.css';

function ProjectCard({ project, delay }) {
  const { ref, isVisible } = useReveal();

  return (
    <article
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.revealed : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.cover} style={{ background: project.gradient }}>
        <span className={styles.coverIcon} aria-hidden="true">{project.icon}</span>
        <div className={styles.coverActions}>
          <a href={project.links.live} className={styles.coverLink}>Live</a>
          <a href={project.links.code} className={styles.coverLink}>Code</a>
        </div>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <li key={tag} className={styles.tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" kicker="Проекты" title="Избранные работы">
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} delay={(index % 2) * 150} />
        ))}
      </div>
    </Section>
  );
}
