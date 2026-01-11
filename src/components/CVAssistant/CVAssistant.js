import React from "react";
import { ExternalLink } from "lucide-react";
import styles from "./CVAssistant.module.css";

function CVAssistant() {
  return (
    <div className={styles.countdownContainer}>
      <div className={styles.projectCard}>
        <h2 className={styles.projectTitle}>
          CV Assistant: Talk to My CV
        </h2>
        <p className={styles.projectSubtitle}>
           Interactive CV chatbot for my portfolio
        </p>

        <p className={styles.projectDescription}>
          An interactive CV chatbot that allows visitors to engage with my portfolio in a conversational way. Ask questions about my experience, skills, and projects, and get instant AI-powered responses.
        </p>

        <div className={styles.buttonGroup}>
          <a
            href="https://cv-agent.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewButton}
          >
            <ExternalLink size={16} /> Chat with my CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default CVAssistant;
