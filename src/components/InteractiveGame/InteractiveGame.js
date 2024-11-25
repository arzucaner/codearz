import React, { useState } from "react";
import styles from "./InteractiveGame.module.css";

function InteractiveGame() {
  const [clues, setClues] = useState([]);
  const [message, setMessage] = useState("");

  const generateClue = () => {
    const newClue = `Clue ${clues.length + 1}: A new hint appears!`;
    setClues([...clues, newClue]);
    setMessage("Can you solve the case?");
  };

  const clearClues = () => {
    setClues([]);
    setMessage("All clues are cleared.");
  };

  return (
    <div className={styles.game}>
      <h3 className={styles.title}>Mini Game: Arzu's Clues</h3>
      <p className={styles.message}>{message}</p>
      <button className={styles.button} onClick={generateClue}>
        Generate Clue
      </button>
      <button className={styles.button} onClick={clearClues}>
        Clear Clues
      </button>
      <div className={styles.clues}>
        {clues.map((clue, index) => (
          <p key={index} className={styles.clue}>
            {clue}
          </p>
        ))}
      </div>
    </div>
  );
}

export default InteractiveGame;
