import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import useVH from "react-vh";
import styles from "../styles/Home.module.css";

import Card from "../components/card";

import cardData from "../lib/data/card_data";
import {
  randomCard,
  randomMeaning,
  randomHiragana,
  randomKanji,
  shuffle,
} from "../lib/data/random";

export default function Home({ cardData }) {
  const [deck, setDeck] = useState(cardData);
  const [current, setCurrent] = useState(0);

  const prevCard = () => {
    if (current > 0) setCurrent(current - 1);
    console.log(current);
  };

  const nextCard = () => {
    if (current < deck.length - 1) setCurrent(current + 1);
    console.log(current);
  };

  console.log(deck);

  useVH();
  return (
    <div className={styles.container}>
      <Head>
        <title>Ebi の Kanji</title>
        <meta name="description" content="Kanji recognition app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Card
          cardData={deck[current]}
          prevCard={prevCard}
          nextCard={nextCard}
        />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const shuffled_data = shuffle(cardData);
  return {
    props: { cardData: shuffled_data },
  };
}
