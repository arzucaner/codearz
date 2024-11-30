import React from "react";
import Countdown from "../Countdown/Countdown";
import MiniGame from "../MiniGame/MiniGame";
import { Helmet } from "react-helmet";
import styles from "./Hero.module.css";
import { FaSearch } from "react-icons/fa";

function Hero() {
  return (
    <div className={styles.hero}>
      <Helmet>
        <title>CodeArz: Enter Baker Street - Modern Detective Mind</title>
        <meta
          name="description"
          content="Welcome to CodeArz! Discover the modern detective mind, solving mysteries in the digital age with innovative coding 
          techniques and interactive experiences."
        />
        <meta
          name="keywords"
          content="CodeArz, Baker Street, Detective, Coding, Web Development"
        />
        <meta name="author" content="Arzu Guney Caner" />
        <link
          rel="canonical"
          href="https://arzucaner.github.io/codearz.github.io/"
        />
      </Helmet>

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
          In the vast digital labyrinth, every bug is a clue, every project a
          case.
        </p>
        <p className={styles.subtitle}>
          Welcome to Arzu Guney Caner's world—a Developer, Blogger, and Creator on a
          relentless quest to solve the mysteries of code with precision and
          creativity.
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
