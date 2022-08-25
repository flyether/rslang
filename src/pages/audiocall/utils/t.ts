/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-loop-func */

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
// import { audiocallLocalStorage } from './listener-audiocall';

// выбор уровня для игры и страницы
// (async function support() {
function shuffle(array:string[]) {
  array.sort(() => Math.random() - 0.5);
}
class Support {
  public textbook?: boolean;

  public arrayWrongWords?: string[];

  public round?: number;

  public score?:number;

  public group?: number;

  public page?: number;

  public level?: number;

  public words?: void | IWord[] | undefined;

  public wordsString?: string[];

  public noRepeat?: string [];

  public wordObj?: IWord ;

  public arraySixWords?: string [] ;

  public containerBtn?: string;

  constructor() {
    if (!this.textbook) { this.textbook = false; }

    if (!this.arrayWrongWords) { this.arrayWrongWords = []; }

    this.round = 0;

    if (!this.score) { this.score = 0; }

    if (!this.group) { this.group = 0; }

    if (!this.page) { this.page = 0; }

    if (!this.level) { this.level = 1; }

    if (!this.words) { this.words = []; }

    if (!this.wordsString) { this.wordsString = []; }

    if (!this.noRepeat) { this.noRepeat = []; }

    if (!this.wordObj) {
      this.wordObj = {
        id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
      };
    }

    if (!this.arraySixWords) { this.arraySixWords = []; }

    if (!this.containerBtn) { this.containerBtn = 'ggg'; }
  }

  async printBtnString(): Promise<void> {
    console.log(this.round, ' this.round  84 строка t');

    this.group = this.level! - 1;
    if ((this.page === 0)) {
      this.page = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
    }

    const res = await api.getWords(this.group!, this.page!);
    const garageSection = document.querySelector('.button-container') as HTMLElement;
    garageSection.innerHTML = '';
    if (this.round! < 10) {
      this.words = res;
      this.wordsString = this.words!.map((item) => item.wordTranslate);
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
      this.noRepeat!.push(this.wordObj!.wordTranslate);

      const button = document.querySelectorAll('.btn-translation');

      for (let j = 0; j < this.arraySixWords.length; j++) {
        button[j].textContent = `${this.arraySixWords[j]}`;
        button[j].id = this.arraySixWords[j];
        (button[j] as HTMLButtonElement).dataset.num = `${j + 1}`;
      }
    } else {
      const btnWrapper = document.querySelector('.audio-container-game') as HTMLElement;
      btnWrapper.innerHTML = '';
      this.wordObj!.audio = '';
      let a = '';
      if (this.arrayWrongWords!.length > 0) {
        a = ` <p class="game-text">Рекомендуем выучить:&nbsp${this.arrayWrongWords!.join(',\n')}</p> `;
      } else {
        a = ' <p class="game-text">Вы ниразу не ошиблись!</p> ';
      }
      btnWrapper.innerHTML += `
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
