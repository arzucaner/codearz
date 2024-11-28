import React from "react";
import styles from "./AboutMe.module.css";

function AboutMe() {
  const notes = [
    "2015: Wrote my first line of code.",
    "2017: Completed my first internship.",
    "2018: Built my first web application.",
    "2020: Contributed to open-source projects.",
    "2021: Started mentoring junior developers.",
    "2022: Published my first technical article.",
    "2023: Spoke at international conferences.",
  ];

  return (
    <div className={styles.aboutMeContainer}>     
      <h1 className={styles.title}>Arzu's Desk</h1>
     
      <div className={styles.notesBoard}>
        {notes.map((note, index) => (
          <div key={index} className={styles.note}>
            <p className={styles.noteText}>{note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
