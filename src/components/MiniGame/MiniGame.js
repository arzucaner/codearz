import React, { useState } from "react";
import styles from "./MiniGame.module.css";

function MiniGame() {
  const [clues, setClues] = useState([]);
  const [score, setScore] = useState(0); 
  const cluesList = [
    "The missing semicolon.",
    "A hidden API key.",
    "An unhandled promise rejection.",
    "A mysterious infinite loop.",
    "The forgotten console log.",
  ];

  const generateClue = () => {
    if (clues.length < 3) {
      const randomClue =
        cluesList[Math.floor(Math.random() * cluesList.length)];
      setClues([...clues, randomClue]);
      setScore(score + 10); 
    } else {
      alert("You solved the case! 🎉 Great detective work!");
    }
  };

  const clearClues = () => {
    setClues([]);
    setScore(0); 
  };

  return (
    <div className={styles.miniGame}>
      <h3 className={styles.title}>Mini Game: Arzu's Clues</h3>
      <div className={styles.clueContainer}>
        {clues.length === 0 ? (
          <p>All clues are cleared. Start investigating!</p>
        ) : (
          clues.map((clue, index) => (
            <p key={index} className={styles.clue}>
              {clue}
            </p>
          ))
        )}
      </div>
      <p className={styles.score}>Score: {score}</p> 
      <div className={styles.buttons}>
        <button onClick={generateClue} disabled={clues.length >= 3}>
          {clues.length < 3 ? "Generate Clue" : "Case Solved!"}
        </button>
        <button onClick={clearClues}>Clear Clues</button>
      </div>
    </div>
  );
}

export default MiniGame;
