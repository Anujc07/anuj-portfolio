import styles from "./Education.module.css";

export const Education = () => (
  <section className={styles.container} id="education">
    <h2 className={styles.title}>Education</h2>
    <article className={styles.card}>
      <div>
        <h3>B.Tech – Computer Science and Engineering</h3>
        <p className={styles.school}>SAGE University, Bhopal · Bhopal, Madhya Pradesh</p>
      </div>
      <div className={styles.details}>
        <span>June 2020 – July 2024</span>
        <strong>CGPA: 7.6 / 10</strong>
      </div>
    </article>
  </section>
);
