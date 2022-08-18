/* eslint-disable linebreak-style */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/no-cycle */

/* eslint-disable @typescript-eslint/no-shadow */

import { storage } from '../../../functional/storage';
import { IWord } from '../../../types/types';
import { apiPath } from '../../../api/api-path';
import { api } from '../../../api/api';
// констана которая получает с сервера массив слов
const apiGetWords = api.getWords(0, 0)
  .then((value) => {
    storage.words = value;
    localStorage.setItem('words', JSON.stringify(value));
  }).catch((err) => {
    console.log(err);
  });
// получаем массив преводов
function getWordsMap(): string[] {
  apiGetWords;
  const words = storage.words!.map((item) => item.wordTranslate);
  return words;
}

const wordsString = getWordsMap();

// перемешиваем массив преводов
function shuffle(array:string[]) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(wordsString);

let arraySixWords:string [] = [];
arraySixWords = wordsString.slice(0, 6);
const wordRight = arraySixWords[Math.floor(Math.random() * arraySixWords.length)];

console.log(wordsString, 'wordsString');
let wordObj : IWord = {
  id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
};

for (let i = 0; i < storage.words!.length; i++) {
  if (storage.words![i].wordTranslate === wordRight) {
    wordObj = storage.words![i];
  }
}

function soundClickAudio(): void {
  const audiod = new Audio();
  audiod.src = `${apiPath + wordObj.audio}`;
  audiod.autoplay = true;
}

function printBtnString(): string {
  let a = '';
  let containerBtn = ' ';
  for (let i = 0; i < arraySixWords.length; i++) {
    a = arraySixWords[i];
    containerBtn += `<button  type="button" id="${a}" class="btn-translation">${a}</button> `;
  }

  return containerBtn;
}

export {
   soundClickAudio,
  printBtnString, wordObj,
};
