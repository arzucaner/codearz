import React, { useState, useEffect } from "react";
import styles from "./Countdown.module.css";
import bookCover from "../../assets/images/book-cover.png"; 

function Countdown() {
  const calculateTimeLeft = () => {
    const launchDate = new Date("2023-12-31T00:00:00");
    const difference = launchDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.countdownContainer}>     
      <div className={styles.timeContainer}>
        {Object.keys(timeLeft).map((interval) => (
          <div key={interval} className={styles.timeBlock}>
            <span className={styles.number}>{timeLeft[interval]}</span>
            <span className={styles.label}>{interval}</span>
          </div>
        ))}
      </div>

           <div className={styles.bookContainer}>
        <img
          src={bookCover}
          alt="Ctrl + Alt + Delete Book Cover"
          className={styles.bookImage}
        />
        <div className={styles.bookDetails}>
          <h3 className={styles.bookTitle}>
            Ctrl + Alt + Delete:
            <p>How I Reset My Career and Rewrote My Future</p> 
          </h3>
          <p className={styles.bookDescription}>
            <em>
              Discover my journey of career transformation!
            </em>
          </p>
          <a
            href="https://www.amazon.com/author/arzu.guney"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buyButton}
          >
            Get it on Kindle
          </a>
        </div>
      </div>
    </div>
  );
}

export default Countdown;