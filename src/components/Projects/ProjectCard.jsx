import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, date, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      {date && <p className={styles.date}>{date}</p>}
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      {(source || demo) && <div className={styles.links}>
        {source && <a href={source} className={styles.link} target="_blank" rel="noreferrer">Source</a>}
        {demo && <a href={demo} className={styles.link} target="_blank" rel="noreferrer">Live Demo</a>}
      </div>}
    </div>
  );
};
