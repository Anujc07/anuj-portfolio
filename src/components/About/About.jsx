import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Professional Summary</h2>
      <div className={styles.content}>
        <p className={styles.summary}>
          Backend Developer with 1.5+ years of experience designing and building scalable, RESTful API-driven SaaS applications using Python, Django, Django REST Framework, PostgreSQL, Redis, RabbitMQ, and Celery. Experienced in multi-tenant architectures, asynchronous task processing, workflow automation, database query optimization, production issue resolution, and enterprise insurance platforms. Strong background in designing configurable business workflows and optimizing scalable backend systems.
        </p>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Scalable SaaS & APIs</h3>
              <p>Designing robust REST APIs and multi-tenant platforms for real-world business workflows.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Workflow Automation</h3>
              <p>Building configuration-driven workflows and asynchronous services with Celery and RabbitMQ.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Production Engineering</h3>
              <p>Resolving production issues, improving database performance, and delivering dependable systems.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
