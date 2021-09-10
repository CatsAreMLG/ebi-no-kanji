import { useState } from "react";

import styles from "../../styles/card/card.module.css";

export default function Card({ cardData, prevCard, nextCard }) {
  const [flipped, setFlipped] = useState(false);
  console.log(cardData);

  const flip = () => {
    setFlipped(!flipped);
  };

  const next = () => {
    setFlipped(false);
    nextCard();
  };

  const prev = () => {
    setFlipped(false);
    prevCard();
  };
  return (
    <>
      <div className={styles.card}>
        {!flipped ? (
          <>
            <div className={styles.hiragana}>
              <h2>Hiragana</h2>
              <h3>{cardData ? cardData.hiragana : ""}</h3>
            </div>
            <div className={styles.meaning}>
              <h2>Meaning</h2>
              <h3>{cardData ? cardData.meaning : ""}</h3>
            </div>
          </>
        ) : (
          <div className={styles.kanji}>
            <h2>Kanji</h2>
            <h3>{cardData ? cardData.kanji : ""}</h3>
          </div>
        )}
      </div>
      <div className={styles.buttons}>
        <div className={`${styles.button} ${styles.prev}`} onClick={prev}>
          <span>Prev</span>
        </div>
        <div className={`${styles.button} ${styles.flip}`} onClick={flip}>
          <span>Flip</span>
        </div>
        <div className={`${styles.button} ${styles.next}`} onClick={next}>
          <span>Next</span>
        </div>
      </div>
    </>
  );
}
