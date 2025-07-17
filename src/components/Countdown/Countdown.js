import React from "react";
import { ExternalLink, PlayCircle, Github } from "lucide-react";
import styles from "./Countdown.module.css";
import mindGardenImg from "../../assets/images/mind-garden-preview.png";

function Countdown() {
  return (
    <div className={styles.countdownContainer}>
      <div className={styles.projectCard}>
        <h2 className={styles.projectTitle}>
          MindGarden: AI-Powered Mental Health Support Agents
        </h2>
        <p className={styles.projectSubtitle}>
          🏆 Built during <strong>The Agent Development Kit Hackathon</strong>{" "}
          with Google Cloud
        </p>

        <p className={styles.projectDescription}>
          We developed a modular AI-powered multi-agent system designed to
          deliver scalable, real-time mental health support. From risk detection
          to resource matching and peer support, <strong>MindGarden</strong>{" "}
          operates with safety and care at its core.
        </p>

        <ul className={styles.featureList}>
          <li>• Multi-agent architecture with task delegation</li>
          <li>• Real-time triage and escalation protocol</li>
          <li>• Peer support integration & resource recommendation</li>
          <li>• Tech: TypeScript, React, Tailwind, Gemini AI</li>
        </ul>

        <div className={styles.buttonGroup}>
          <a
            href="https://github.com/smart-stacks/mindgarden"
            target="_blank"
            className={styles.viewButton}
          >
            <Github size={16} /> View on GitHub
          </a>
          <a
            href="https://mindgarden-app-6xntrakg7q-nw.a.run.app/chat"
            target="_blank"
            className={styles.viewButton}
          >
            <ExternalLink size={16} /> Live Demo
          </a>
          <a
            href="https://youtu.be/z06tKmAMUYw"
            target="_blank"
            className={styles.viewButton}
          >
            <PlayCircle size={16} /> Watch Presentation
          </a>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={mindGardenImg}
            alt="Mind Garden Preview"
            className={styles.projectImage}
          />
        </div>
      </div>
    </div>
  );
}

export default Countdown;
