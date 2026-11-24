import Section from '../Section/Section';
import { experience } from '../../data/content';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <Section id="experience" kicker="Опыт" title="Карьерный путь">
      <ol className={styles.timeline}>
        {experience.map((job, index) => (
          <li key={job.company} className={styles.item}>
            <span className={styles.dot} style={{ animationDelay: `${index * 0.15}s` }} />
            <div className={styles.content}>
              <span className={styles.period}>{job.period}</span>
              <h3 className={styles.role}>
                {job.role} <span className={styles.company}>· {job.company}</span>
              </h3>
              <ul className={styles.points}>
                {job.points.map((point) => (
                  <li key={point} className={styles.point}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
