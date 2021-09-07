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
} from "../lib/data/random";

export default function Home({ cardData }) {
  const [card, setCard] = useState(cardData[0]);

  const changeCard = () => {
    const newCard = randomCard(cardData);
    setCard(newCard);
  };

  useVH();
  return (
    <div className={styles.container}>
      <Head>
        <title>Ebi の Kanji</title>
        <meta name="description" content="Kanji recognition app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Card cardData={card} changeCard={changeCard} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: { cardData },
  };
}
