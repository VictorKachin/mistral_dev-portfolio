import Section from '../Section/Section';
import { skills } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import styles from './Skills.module.css';

function SkillBar({ name, level, delay }) {
  const { ref, isVisible } = useReveal();

  return (
    <li ref={ref} className={styles.skill}>
      <div className={styles.skillHead}>
        <span>{name}</span>
        <span className={styles.percent}>{level}%</span>
      </div>
      <div
        className={styles.track}
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={name}
      >
        <span
          className={`${styles.fill} ${isVisible ? styles.fillActive : ''}`}
          style={{
            width: isVisible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </li>
  );
}

export default function Skills() {
  return (
    <Section id="skills" kicker="Навыки" title="Технологический стек">
      <div className={styles.grid}>
        {skills.map((group) => (
          <div key={group.category} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.category}</h3>
            <ul className={styles.list}>
              {group.items.map((item, index) => (
                <SkillBar
                  key={item.name}
                  name={item.name}
                  level={item.level}
                  delay={index * 140}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
