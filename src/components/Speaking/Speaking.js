import React from "react";
import styles from "./Speaking.module.css";

const speakingEngagements = [
  {
    title: "Halfstack Conference-Breaking Barriers 2024",
    description: "Gave a talk about performance optimization in React.",
    link: "#", 
  },
  {
    title: "Unlocking the World of Coding for Women of All Ages",
    description: "International LT Session hosted by GDSC TMU and WTM on International Women's Day 2024.",
    link: "#", 
  },
];

const onlineCourses = [
  {
    title: "Push Your Imagination with CSS Animation 2023",
    description: "An online course teaching the basics of JavaScript.",
    platform: "Zero2Hero", 
    link: "#", 
  },
  {
    title: "Why Do JavaScript Developers Use React JS 2022",
    description: "Masterclass on advanced concepts in React development.",
    platform: "Zero2Hero",
    link: "#",
  },
];

function SpeakingPage() {
  return (
    <div className={styles.speakingPage}>
      <h1 className={styles.title}>Speaking Engagements</h1>

      <div className={styles.cardsContainer}>
        {speakingEngagements.map((item, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.cardDescription}>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              Watch Video
            </a>
          </div>
        ))}
      </div>

      <h1 className={styles.title}>Online Courses</h1>

      <div className={styles.cardsContainer}>
        {onlineCourses.map((course, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.cardTitle}>{course.title}</h2>
            <p className={styles.cardDescription}>{course.description}</p>
            <p className={styles.cardPlatform}>Platform: {course.platform}</p>
            <a href={course.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              View Course
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpeakingPage;


