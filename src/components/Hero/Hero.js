import React from "react";
import Countdown from "../Countdown/Countdown";
import MiniGame from "../MiniGame/MiniGame";
import styles from "./Hero.module.css";
import { FaSearch } from "react-icons/fa"; 

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.shootingStar}></div>
      <div className={styles.shootingStar}></div>
      <div className={styles.shootingStar}></div>

      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Enter Baker Street: The Mind of a Modern Detective
          <span className={styles.magnifyingGlassWrapper}>
            <FaSearch className={styles.magnifyingGlass} />
          </span>
        </h1>
        <p className={styles.subtitle}>
          Solving mysteries in the digital age, one line of code at a time.
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
