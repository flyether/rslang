/* eslint-disable linebreak-style */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { storage } from '../../../functional/storage';
import { IStorageAudiocall, IWord } from '../../../types/types';
import { apiPath } from '../../../api/api-path';
import { api } from '../../../api/api';

// выбор уровня для игры и страницы

let storageAudiocall:IStorageAudiocall = {
  arrayWrongWords: [],
  round: 0,
  score: 0,
  arrayLevel: [],
  group: 0,
  page: 0,
  level: 1,
  words: [],
  noRepeat: [],

};

function levelGame(): void {
  if (localStorage.getItem('level')) {
    storageAudiocall.group = storageAudiocall.level! - 1;
    if ((storageAudiocall.page === 0)) {
      storageAudiocall.page = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
    }
    storageAudiocall.arrayLevel = [storageAudiocall.group, storageAudiocall.page!];
  }
}
levelGame();
console.log(storageAudiocall.group, storageAudiocall.page, 'group, page');
console.log(storageAudiocall, 'storageAudiocall2');
// констана которая получает с сервера массив слов
const apiGetWords = api.getWords(storageAudiocall.group!, storageAudiocall.page!)
  .then((value) => {
    storageAudiocall.words = value;
  }).catch((err) => {
    console.log(err);
  });
// получаем массив преводов
function getWordsMap(): string[] {
  apiGetWords;
  const words = storageAudiocall.words!.map((item) => item.wordTranslate);
  return words;
}

let wordsString = getWordsMap();
console.log(storageAudiocall, 'storageAudiocall2');
// фильтруем избавляясь от дублей

if (storageAudiocall.noRepeat!.length > 0) {
  wordsString = wordsString.filter((item) => !storageAudiocall.noRepeat!.includes(item));
}

// перемешиваем массив преводов
function shuffle(array:string[]) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(wordsString);

// создаем масси в котром будет тоько 5 слов для игры
let arraySixWords:string [] = [];
arraySixWords = wordsString.slice(0, 5);

// выбираем случайное слово из 6, которое будем угадывать
const wordRight = arraySixWords[Math.floor(Math.random() * arraySixWords.length)];

// получаем делаем объект в который сохраним выбранное слово со всеми данными
let wordObj : IWord = {
  id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
};

for (let i = 0; i < storageAudiocall.words!.length; i++) {
  if (storageAudiocall.words![i].wordTranslate === wordRight) {
    wordObj = storageAudiocall.words![i];
  }
}
console.log(storageAudiocall, 'storageAudiocall3');
// избавляемся от дублей в массиве преводов проолжение

storageAudiocall.noRepeat!.push(wordObj.wordTranslate);
// if (localStorage.getItem('noRepeat')) {
//   noRepeat = JSON.parse(localStorage.getItem('noRepeat')!);
//   noRepeat.push(wordObj.wordTranslate);
//   localStorage.setItem('noRepeat', JSON.stringify(noRepeat));
// }

// функция проигрывания аудио с путем из нашего обекта-слово
function soundAudio(path: string): void {
  const audioD = new Audio();
  audioD.src = `${path}`;
  audioD.autoplay = true;
}

// рисуем кнопки с переводами
function printBtnString(): string {
  let a = '';
  let containerBtn = ' ';
  if (storageAudiocall.round! < 16) {
    for (let i = 0; i < arraySixWords.length; i++) {
      a = arraySixWords[i];
      containerBtn += `<button data-num="${i + 1}" type="button" id="${a}" class="btn-translation">${a}</button> `;
    }
  } else {
    wordObj.audio = '';
    let a = '';
    if (storageAudiocall.arrayWrongWords!.length > 0) {
      a = ` <p class="game-text">Рекомендуем выучить:&nbsp${storageAudiocall.arrayWrongWords!.join(',\n')}</p> `;
    } else {
      a = ' <p class="game-text">Вы ниразу не ошиблись!</p> ';
    }
    containerBtn += `
  <div class="game-over">
    <p class="game-text">Вы прошли игру!</p>
    <p class="game-text">Ваш результат: &nbsp ${storageAudiocall.score}</p>
    ${a}
    <div class="btn-game-over-container">
      <button type="button" class="restart">Начать заново</button>
      <a  class="link level-change" href="#audiocall" >Выбрать уровень</a>
    </div>
  </div>
  
  `;
    clearLocalStorage();
  }
  return containerBtn;
}
function clearLocalStorage(): void {
  storageAudiocall = {};
  localStorage.removeItem('noRepeat');
  localStorage.removeItem('arrayWrongWords');
  localStorage.removeItem('round');
  localStorage.removeItem('score');
  localStorage.removeItem('textbook');
  localStorage.removeItem('page');
}

export {
  soundAudio,
  printBtnString, wordObj,
  clearLocalStorage,
  storageAudiocall,
};
