import React, { useState, useEffect } from "react";
import styles from "./Countdown.module.css";

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
    <div className={styles.countdown}>
      <h2 className={styles.title}>Countdown to Launch</h2>
      <p className={styles.description}>
        A <strong>big surprise</strong> is coming soon. Stay tuned!
      </p>
      <div className={styles.timeContainer}>
        {Object.keys(timeLeft).map((interval) => (
          <div key={interval} className={styles.timeBlock}>
            <span className={styles.number}>{timeLeft[interval]}</span>
            <span className={styles.label}>{interval}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countdown;




