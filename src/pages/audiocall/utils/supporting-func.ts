/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */

/* eslint-disable import/no-cycle */

/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable linebreak-style */

import { storage } from '../../../functional/storage';
import { getWordsMap } from '../../../functional/get-parts-word';
import { IWord } from '../../../types/types';
import { apiPath } from '../../../api/api-path';

const wordsString = getWordsMap();

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

console.log(arraySixWords, 'arraySixWords');
console.log(wordRight, 'wordRight');

for (let i = 0; i < storage.words!.length; i++) {
  if (storage.words![i].wordTranslate === wordRight) {
    wordObj = storage.words![i];
  }
}
const audio = wordObj.audio;

function soundClickAudio(): void {
  const audiod = new Audio();
  audiod.src = `${apiPath + audio}`;
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
  audio, soundClickAudio,
  printBtnString,
};
