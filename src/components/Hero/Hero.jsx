import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content} >
        <p className={styles.eyebrow}>Backend Developer · Bangalore, India</p>
        <h1 className={styles.title}>Hi, I’m Anuj Choubey</h1>
        <h2 className={styles.subtitle}>Python · Django · REST APIs</h2>
        <p className={styles.description}>
          Backend Developer with 1.5+ years of experience building scalable SaaS platforms, multi-tenant systems, and reliable asynchronous workflows.
        </p>
        <div>
          <a href="mailto:choubeyanuj44@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href={getImageUrl("resume/ANUJCHOUBEY.pdf")} className={styles.contactBtn} download>
            Download Resume
          </a>
        </div>
        
      </div>
      <img
        src={getImageUrl("hero/01_copy.png")}
        alt="Profile image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
