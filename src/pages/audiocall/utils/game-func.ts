/* eslint-disable linebreak-style */
import { api } from '../../../api/api';
import {
  arrayOriginality, arrayRandom, requestWords,

  // wordsFromLocalStorage
} from './supporting-func';

// function audioCallGame() {
//   new Promise((resolve) => {
//     const words = wordsFromLocalStorage();
//     resolve(words);
//   })
//     .then((words) => {
//       const allWords = words.map((word) => new Word(word));
//       allWords.forEach((item) => {
//         arrayOriginality.push(item);
//       });
//       words.forEach((item) => {
//          requestWords.push(item);
//       });
//       allWords.forEach((item) => {
//         arrayRandom.push(item);
//       });
//     })
//     .then(() => randomizeWords(arrayForUniqness, arrayForRandom));
// }
