import React from "react";
import Countdown from "../Countdown/Countdown";
import MiniGame from "../MiniGame/MiniGame";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.shootingStar}></div>
      <div className={styles.shootingStar}></div>
      <div className={styles.shootingStar}></div>

        <div className={styles.heroContent}>
        <h1 className={styles.title}>Step into the Mind of a Modern Detective</h1>
        <p className={styles.subtitle}>
          Decoding mysteries, one line of code at a time.
        </p>
      </div>

       <div className={styles.extraContent}>
        <Countdown />
        <MiniGame />
      </div>
    </div>
  );
}

export default Hero;
