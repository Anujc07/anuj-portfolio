import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" className={styles.aboutimg}/>
            <div className={styles.aboutItemText}>
              <h3>API Developer</h3>
              <p>
              Passionate API developer dedicated to building responsive, optimized solutions. I create seamless integrations that enhance user experiences and drive innovation, ensuring every project exceeds expectations. Let's connect and innovate together!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" className={styles.aboutimg} />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Experienced in developing fast and optimized back-end systems using Django. I specialize in building robust APIs and scalable applications that enhance performance and deliver seamless user experiences.           
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" className={styles.aboutimg} />
            <div className={styles.aboutItemText}>
              <h3>Database Integration</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
