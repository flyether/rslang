/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-shadow */

import { storage } from '../../../functional/storage';
import { IWord } from '../../../types/types';
import { apiPath } from '../../../api/api-path';
import { api } from '../../../api/api';

// выбор уровня для игры и страницы
let group = 0;
let page = 0;
let arraylevel: number[] = [];
function levelGame(): void {
  if (localStorage.getItem('level')) {
    group = Number(localStorage.getItem('level')) - 1;
    page = Math.floor(Math.random() * (30 - 0 + 1)) + 0;
    arraylevel = [group, page];
  }
}
levelGame();

// констана которая получает с сервера массив слов
const apiGetWords = api.getWords(group, page)
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

let wordsString = getWordsMap();

// фильтруем избавляясь от дублей
if (localStorage.getItem('noRepeat')) {
  if ((JSON.parse(localStorage.getItem('noRepeat')!) as string[]).length > 0) {
    wordsString = wordsString.filter((item) => !(JSON.parse(localStorage.getItem('noRepeat')!) as string[]).includes(item));
  }
}
// перемешиваем массив преводов
function shuffle(array:string[]) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(wordsString);
// создаем масси в котром будет тоько 6 слов для игры
let arraySixWords:string [] = [];
arraySixWords = wordsString.slice(0, 6);

// выбираем случайное слово из 6, которое будем угадывать
const wordRight = arraySixWords[Math.floor(Math.random() * arraySixWords.length)];

// получаем делаем объект в который сохраним выбранное слово со всеми данными
let wordObj : IWord = {
  id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
};

for (let i = 0; i < storage.words!.length; i++) {
  if (storage.words![i].wordTranslate === wordRight) {
    wordObj = storage.words![i];
  }
}

// избавляемся от дублей в массиве преводов проолжение

let noRepeat: string[] = [];
noRepeat.push(wordObj.wordTranslate);
if (localStorage.getItem('noRepeat')) {
  noRepeat = JSON.parse(localStorage.getItem('noRepeat')!);
  noRepeat.push(wordObj.wordTranslate);
  localStorage.setItem('noRepeat', JSON.stringify(noRepeat));
}

// функция проигрывания аудио с путем из нашего обекта-слово
function soundAudio(path: string): void {
  const audiod = new Audio();
  audiod.src = `${path}`;
  audiod.autoplay = true;
}

// рисуем кнопки с переводами
function printBtnString(): string {
  let a = '';
  let containerBtn = ' ';
  if (Number(localStorage.getItem('round')) < 21) {
    for (let i = 0; i < arraySixWords.length; i++) {
      a = arraySixWords[i];
      containerBtn += `<button  type="button" id="${a}" class="btn-translation">${a}</button> `;
    }
  } else {
    wordObj.audio = '';
    let a = '';
    if (JSON.parse(localStorage.getItem('arrayWrongWords')!).length > 0) {
      a = ` <p class="game-text">Рекомендуем выучить:&nbsp${(JSON.parse(localStorage.getItem('arrayWrongWords')!) as string[]).join(',\n')}</p> `;
    } else {
      a = ' <p class="game-text">Вы ниразу не ошиблись!</p> ';
    }
    containerBtn += `
  <div class="game-over">
    <p class="game-text">Вы прошли игру!</p>
    <p class="game-text">Ваш результат: &nbsp ${localStorage.getItem('score')}</p>
    ${a}
    <button type="button" class="restart">Начать заново</button>
  </div> `;
    localStorage.removeItem('arrayWrongWords');
    localStorage.removeItem('round');
    localStorage.removeItem('score');
  }
  return containerBtn;
}

export {
  soundAudio,
  printBtnString, wordObj,
};
