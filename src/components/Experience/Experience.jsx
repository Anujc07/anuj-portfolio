import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Technical Skills & Experience</h2>
      <div className={styles.content}>
        <div className={styles.skillSection}>
          <h3 className={styles.sectionTitle}>Technical Skills</h3>
          <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <span key={id} className={styles.skill}>{skill.title}</span>
            );
          })}
          </div>
        </div>
        <div className={styles.historySection}>
          <h3 className={styles.sectionTitle}>Work Experience</h3>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id} className={styles.experiencepoint}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        </div>
      </div>
    </section>
  );
};
