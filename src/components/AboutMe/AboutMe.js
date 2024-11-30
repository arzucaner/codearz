import React, { useState } from "react";
import styles from "./AboutMe.module.css";

function AboutMe() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

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
          <div key={index} className={styles.note} style={{ "--rotation": `${(index % 2 === 0 ? -1 : 1) * (3 + index)}deg` }}>
            <div className={styles.pin}></div>
            <p className={styles.noteText}>{note}</p>
          </div>
        ))}
      </div>

      <button className={styles.contactButton} onClick={toggleForm}>
        {isFormVisible ? "Close Contact Form" : "Get in Touch"}
      </button>

      <div
        className={`${styles.contactForm} ${
          isFormVisible ? styles.contactFormVisible : ""
        }`}
      >
        <h2 className={styles.contactTitle}>Contact Me</h2>
        <form
          action="https://formspree.io/f/mgvepvko"
          method="POST"
          className={styles.form}
        >
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            required
          />

          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            required
          />

          <label htmlFor="message" className={styles.label}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            required
          ></textarea>

          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default AboutMe;