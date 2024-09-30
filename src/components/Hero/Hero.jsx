import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anuj Choubey</h1>
        <p className={styles.description}>
          I'm a full-stack developer with more than 10 months of experience using React, Django Rest Framework and Django. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:choubeyanuj44@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/anuj2.svg")}
        alt="Profile image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
