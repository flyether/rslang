/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable linebreak-style */

import { IWord, IWordGame } from '../../../types/types';

function word(word: IWordGame): IWordGame {
  return {
    word: word.word,
    translate: word.translate,
    audio: word.audio,
    image: word.image,
    id: word.id,
  };
}

// для результатвования игры и обнуления уровня
const arrayOriginality: [] = [];
const arrayRandom: [] = [];
const arrayAnswersRight: [] = [];
const requestWords: [] = [];

function newRound(): void {
  arrayOriginality.length = 0;
  arrayRandom.length = 0;
  arrayAnswersRight.length = 0;
}

// async function wordsFromLocalStorage() {
//   const {
//     repeatWords,
//     level,
//     round,
//   } = JSON.parse(localStorage.getItem('gameData'));
//   if (repeatWords === true) {
//     const userWords = await Service.getGameWords();
//     return userWords;
//   }
//   const allWords = await Service.getGameSpecificWords(level, round);
//   return allWords;
// }

export {
  arrayOriginality, arrayRandom, arrayAnswersRight, requestWords, newRound, word,
//   wordsFromLocalStorage,
};
