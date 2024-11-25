import React from "react";
import styles from "./OpenSource.module.css";
import accessibilityImage from "../../assets/images/general/accessibility-guide.png"; 

function OpenSource() {
  return (
    <div className={styles.openSource}>
      <h1 className={styles.title}>Open Source Projects</h1>
      <div className={styles.openSourceContainer}>
        <div className={styles.openSourceCard}>
          <img
            src={accessibilityImage} 
            alt="Accessibility Guide"
            className={styles.openSourceImage}
          />
          <div className={styles.openSourceContent}>
            <h3 className={styles.openSourceTitle}>Accessibility Guide</h3>
            <p className={styles.openSourceDescription}>
              This guide is a comprehensive resource for developers looking to implement accessibility best practices in their projects.
            </p>
            <a
              href="https://github.com/arzucaner/web-accessibility-guide"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openSourceLink}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenSource;
