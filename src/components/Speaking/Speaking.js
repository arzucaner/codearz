import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Speaking.module.css";
import speakingImage from "../../assets/images/general/profil-photo.png";

const events = [
  
  { year: "2022", title: "Why Do JavaScript Developers Use React JS 2022" }, 
  { year: "2023", title: "Push Your Imagination with CSS Animation 2023" },
  { year: "2024", title: "Halfstack Conference-Breaking Barriers 2024" },
  { year: "2024", title: "Unlocking the World of Coding for Women of All Ages"},  
  { year: "2025", title: "The journey continues... Stay tuned for the next exciting chapter!"},
];

function SpeakingPage() {
  return (
    <>
      <Helmet>
        <title>Speaking Engagements - Talks & Insights</title>
        <meta
          name="description"
          content="Explore past and upcoming speaking engagements, including topics on JavaScript, React, and accessibility in tech."
        />
        <meta
          name="keywords"
          content="Speaking Engagements, Tech Talks, Conferences, JavaScript, React, Accessibility, Women in Tech"
        />
        <meta name="author" content="Arzu Guney Caner" />
        <link
          rel="canonical"
          href="https://arzucaner.github.io/codearz.github.io/speaking"
        />
      </Helmet>

      <div className={styles.speakingPage}>
        <h1 className={styles.title}>Unveiling Mysteries: Talks & Insights</h1>
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <img
              src={speakingImage}
              alt="Speaking Engagement"
              className={styles.image}
            />
          </div>
          <div className={styles.timelineContainer}>
            {events.map((event, index) => (
              <div key={index} className={styles.timelineItem}>
                <span className={styles.year}>{event.year}</span>
                <span className={styles.eventTitle}>{event.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SpeakingPage;
