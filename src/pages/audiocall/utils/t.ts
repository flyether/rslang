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
function shuffle(array:string[]) {
  array.sort(() => Math.random() - 0.5);
}
class Support {
  textbook = false;

  arrayWrongWords: string[] = [];

  round? = 0;

  score? = 0;

  group = 0;

  page = 0;

  level = 1;

  words: IWord[] | undefined = [];

  wordsString: string[] = [];

  noRepeat: string [] = [];

  wordObj : IWord = {
    id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
  };

  arraySixWords:string [] = [];

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

  getFiveWords(): void {
    this.wordsString = storage.words!.map((item) => item.wordTranslate);
    if (this.noRepeat!.length > 0) {
      this.wordsString = this.wordsString.filter((item) => !this.noRepeat!.includes(item));
    }

    shuffle(this.wordsString);

    this.arraySixWords = this.wordsString.slice(0, 5);
    const wordRight = this.arraySixWords[Math.floor(Math.random() * this.arraySixWords.length)];
    for (let i = 0; i < this.words!.length; i++) {
      if (this.words![i].wordTranslate === wordRight) {
        this.wordObj = this.words![i];
      }
    }
    this.noRepeat!.push(this.wordObj.wordTranslate);
    if (localStorage.getItem('noRepeat')) {
      this.noRepeat = JSON.parse(localStorage.getItem('noRepeat')!);
      this.noRepeat.push(this.wordObj.wordTranslate);
    }
  }

  printBtnString(): string {
    this.getWords();
    this.levelGame();
    this.getFiveWords();
    let a = '';
    let containerBtn = ' ';
    if (this.round! < 10) {
      for (let i = 0; i < this.arraySixWords.length; i++) {
        a = this.arraySixWords[i];
        containerBtn += `<button data-num="${i + 1}" type="button" id="${a}" class="btn-translation">${a}</button> `;
      }
    } else {
      this.wordObj.audio = '';
      let a = '';
      if (this.arrayWrongWords!.length > 0) {
        a = ` <p class="game-text">Рекомендуем выучить:&nbsp${this.arrayWrongWords!.join(',\n')}</p> `;
      } else {
        a = ' <p class="game-text">Вы ниразу не ошиблись!</p> ';
      }
      containerBtn += `
   <div class="game-over">
     <p class="game-text">Вы прошли игру!</p>
     <p class="game-text">Ваш результат: &nbsp ${this.score}</p>
     ${a}
     <div class="btn-game-over-container">
       <button type="button" class="restart">Начать заново</button>
       <a  class="link level-change" href="#audiocall" >Выбрать уровень</a>
     </div>
   </div>
 
   `;
      this.clearLocalStorage();
    }
    return containerBtn;
  }

  clearLocalStorage(): void {
    this.arrayWrongWords = [];

    this.round = 0;

    this.score = 0;

    this.group = 0;

    this.page = 0;

    this.level = 1;

    this.words = [];

    this.wordsString = [];

    this.noRepeat = [];

    this.wordObj = {
      id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
    };

    this.arraySixWords = [];
  }
}

// функция проигрывания аудио с путем из нашего обекта-слово
export function soundAudio(path: string): void {
  const audioD = new Audio();
  audioD.src = `${path}`;
  audioD.autoplay = true;
}

const support = new Support();
export { support };
