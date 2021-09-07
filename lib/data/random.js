export const randomCard = (list) =>
  list[Math.floor(Math.random() * list.length)];
export const randomKanji = (list) =>
  list[Math.floor(Math.random() * list.length)].kanji;
export const randomHiragana = (list) =>
  list[Math.floor(Math.random() * list.length)].hiragana;
export const randomMeaning = (list) =>
  list[Math.floor(Math.random() * list.length)].meaning;
