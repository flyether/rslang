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
// (async function support() {

class Support {
  arrayWrongWords = [];

  round? = 0;

  score? = 0;

  group = 0;

  page = 0;

  level = 1;

  words: IWord[] | undefined = [];

  wordString: string[] = [];

  noRepeat: string [] = [];

  //   constructor() {
  //     this.words = api.getWords(this.group!, this.page!)
  //       .then((value) => value).catch((err) => {
  //         console.log(err);
  //       });
  //   }
  async getWords() {
    api.getWords(this.group!, this.page!)
      .then((value) => { this.words = value; }).catch((err) => {
        console.log(err);
      });
  }

  levelGame(): void {
    this.group = this.level! - 1;
    if ((this.page === 0)) {
      this.page = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
    }
  }
}

// констана которая получает с сервера массив слов
// const apiGetWords = (api.getWords(storageAudiocall.group!, storageAudiocall.page!)
//   .then((value) => {
//     // storageAudiocall.words = value;
//     // storage.words = value;
//     localStorage.setItem('words', JSON.stringify(value));
//   }).catch((err) => {
//     console.log(err);
//   })
// );

// получаем массив преводов
// function getWordsMap(): string[] {
//   const words = storage.words!.map((item) => item.wordTranslate);
//   console.log(words, 'words функции гет мап');
//   return words;
// }

// let wordsString: string[] = [];

// // фильтруем избавляясь от дублей

// // if (storageAudiocall.noRepeat!.length > 0) {
// //   wordsString = wordsString.filter((item) => !storageAudiocall.noRepeat!.includes(item));
// // }

// // перемешиваем массив преводов
// // function shuffle(array:string[]) {
// //   array.sort(() => Math.random() - 0.5);
// // }
// // shuffle(wordsString);

// // создаем масси в котром будет тоько 5 слов для игры
// let arraySixWords:string [] = [];
// // arraySixWords = wordsString.slice(0, 5);

// // выбираем случайное слово из 6, которое будем угадывать
// // const wordRight = arraySixWords[Math.floor(Math.random() * arraySixWords.length)];

// // получаем делаем объект в который сохраним выбранное слово со всеми данными
// let wordObj : IWord = {
//   id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
// };

// // for (let i = 0; i < storageAudiocall.words!.length; i++) {
// //   if (storageAudiocall.words![i].wordTranslate === wordRight) {
// //     wordObj = storageAudiocall.words![i];
// //   }
// // }

// // избавляемся от дублей в массиве преводов проолжение

// // storageAudiocall.noRepeat!.push(wordObj.wordTranslate);
// // if (localStorage.getItem('noRepeat')) {
// //   noRepeat = JSON.parse(localStorage.getItem('noRepeat')!);
// //   noRepeat.push(wordObj.wordTranslate);
// //   localStorage.setItem('noRepeat', JSON.stringify(noRepeat));
// // }

// // функция проигрывания аудио с путем из нашего обекта-слово
// function soundAudio(path: string): void {
//   const audioD = new Audio();
//   audioD.src = `${path}`;
//   audioD.autoplay = true;
// }

// // рисуем кнопки с переводами
// async function printBtnString(): Promise <string | undefined> {
//   storageAudiocall.words = await api.getWords(storageAudiocall.group!, storageAudiocall.page!);

//   wordsString = storageAudiocall.words!.map((item) => item.wordTranslate);

//   if (storageAudiocall.noRepeat!.length > 0) {
//     wordsString = wordsString.filter((item) => !storageAudiocall.noRepeat!.includes(item));
//   }

//   // перемешиваем массив преводов
//   function shuffle(array:string[]) {
//     array.sort(() => Math.random() - 0.5);
//   }
//   shuffle(wordsString);

//   arraySixWords = wordsString.slice(0, 5);

//   // выбираем случайное слово из 6, которое будем угадывать
//   const wordRight = arraySixWords[Math.floor(Math.random() * arraySixWords.length)];

//   for (let i = 0; i < storageAudiocall.words!.length; i++) {
//     if (storageAudiocall.words![i].wordTranslate === wordRight) {
//       wordObj = storageAudiocall.words![i];
//     }
//   }

//   storageAudiocall.noRepeat!.push(wordObj.wordTranslate);
//   console.log(storageAudiocall.words, 'sstorageAudiocall.words в принтбтн');

//   // кусок который не трогали
//   let a = '';
//   let containerBtn = ' ';
//   if (storageAudiocall.round! < 10) {
//     for (let i = 0; i < arraySixWords.length; i++) {
//       a = arraySixWords[i];
//       containerBtn += `<button data-num="${i + 1}" type="button" id="${a}" class="btn-translation">${a}</button> `;
//     }
//   } else {
//     wordObj.audio = '';
//     let a = '';
//     if (storageAudiocall.arrayWrongWords!.length > 0) {
//       a = ` <p class="game-text">Рекомендуем выучить:&nbsp${storageAudiocall.arrayWrongWords!.join(',\n')}</p> `;
//     } else {
//       a = ' <p class="game-text">Вы ниразу не ошиблись!</p> ';
//     }
//     containerBtn += `
//   <div class="game-over">
//     <p class="game-text">Вы прошли игру!</p>
//     <p class="game-text">Ваш результат: &nbsp ${storageAudiocall.score}</p>
//     ${a}
//     <div class="btn-game-over-container">
//       <button type="button" class="restart">Начать заново</button>
//       <a  class="link level-change" href="#audiocall" >Выбрать уровень</a>
//     </div>
//   </div>

//   `;
//     clearLocalStorage();
//   }
//   return containerBtn as string;
// }
// function clearLocalStorage(): void {
//   storageAudiocall = {};
// }
