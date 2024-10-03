import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img  className={styles.contImg}  src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a target="blank" href="mailto:choubeyanuj44@gmail.com">choubeyanuj44@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img className={styles.contImg}
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/anuj-choubey-9542a9249/" target="blank">linkedin.com/anuj-choubey-9542a9249</a>
        </li>
        <li className={styles.link}>
          <img  className={styles.contImg} src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Anujc07" target="blank">github.com/Anujc07</a>
        </li>
      </ul>
    </footer>
  );
};
