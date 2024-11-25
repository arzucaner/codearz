import React from "react";
import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div className={styles.aboutMeContainer}>
      {/* Shooting Stars */}
      <div className={styles.shootingStarsContainer}>
        <div className={styles.shootingStar}></div>
        <div className={styles.shootingStar}></div>
        <div className={styles.shootingStar}></div>
      </div>

      {/* Content */}
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.description}>
        I am a modern problem solver, just like Sherlock Holmes, but with code.
        My journey began in 2015 when I wrote my first line of code, and since
        then, I've been solving puzzles and building projects that matter.
      </p>

      <ul className={styles.timeline}>
        <li className={styles.timelineItem}>
          2015: First line of code written.
        </li>
        <li className={styles.timelineItem}>
          2020: Contributed to open-source projects.
        </li>
        <li className={styles.timelineItem}>
          2023: Started speaking at tech conferences.
        </li>
      </ul>
    </div>
  );
}

export default AboutMe;
