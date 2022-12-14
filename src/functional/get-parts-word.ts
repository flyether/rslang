/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/no-cycle */

import { apiPath } from '../api/api-path';
import { api } from '../api/api';
import { storage } from './storage';

// const id = '5e9f5ee35eb9e72bc21af4ad';

// const apiGetWord = api.getWord(id)
//   .then((value) => {
//     storage.word = value;
//     localStorage.setItem('word', JSON.stringify(value));
//   }).catch((err) => {
//     console.log(err);
//   });

// function getSound(): string {
//   apiGetWord;
//   return storage.word!.audio;
// }
// function getImg(): string {
//   apiGetWord;
//   return storage.word!.image;
// }

// function getWordThis(): string {
//   apiGetWord;
//   return storage.word!.word;
// }

// function soundClick(): void {
//   const audio = new Audio();
//   audio.src = `${apiPath + getSound()}`;
//   audio.autoplay = true;
// }

const apiGetWords = api.getWords(0, 0)
  .then((value) => {
    storage.words = value;
    localStorage.setItem('words', JSON.stringify(value));
  }).catch((err) => {
    console.log(err);
  });

function getWordsMap(): string[] {
  apiGetWords;
  const words = storage.words!.map((item) => item.wordTranslate);
  return words;
}

export {
  // getSound, getImg, getWordThis,
  apiGetWords, getWordsMap,
};
