export const randomCard = (list) =>
  list[Math.floor(Math.random() * list.length)];
export const randomKanji = (list) =>
  list[Math.floor(Math.random() * list.length)].kanji;
export const randomHiragana = (list) =>
  list[Math.floor(Math.random() * list.length)].hiragana;
export const randomMeaning = (list) =>
  list[Math.floor(Math.random() * list.length)].meaning;
export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
