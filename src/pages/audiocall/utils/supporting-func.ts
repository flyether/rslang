/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { IObjStatisticStorage, IWord, IUserWords } from '../../../types/types';
import { apiPath } from '../../../api/api-path';
import { api } from '../../../api/api';
import { statisticsDataAudiocallShortTerm } from '../../statistics/statisticsData';

function shuffle(array:string[]) {
  array.sort(() => Math.random() - 0.5);
}
export function soundAudio(path: string): void {
  const audioD = new Audio();
  audioD.src = `${path}`;
  audioD.autoplay = true;
}

class Support {
  public wordStudied: string[];

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

  public arraySixWords?: string [];

  public containerBtn?: string;

  public RightAnsweredWords?: string [];

  public WrongAnsweredWords?: string [];

  public rightAnsweredWordsStatistic?: string [];

  public newWords?: number;

  public percentOfRightAnswers?: number;

  public longestSeriesOfRightAnswers?: number;

  public allWords?: number;

  constructor() {
    this.newWords = 0;
    this.allWords = 0;
    this.rightAnsweredWordsStatistic = [];
    this.longestSeriesOfRightAnswers = this.rightAnsweredWordsStatistic?.length;
    this.WrongAnsweredWords = [];
    this.RightAnsweredWords = [];
    this.textbook = false;
    this.arrayWrongWords = [];
    this.round = 0;
    this.score = 0;
    this.group = 0;
    this.page = 0;
    this.level = 1;
    this.words = [];
    this.wordsString = [];
    this.noRepeat = [];
    this.wordStudied = [];
    this.wordObj = {
      id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
    };
    this.arraySixWords = [];
    this.containerBtn = 'ggg';
  }

  async getUserWords() : Promise<void> {
    api.getAllUserWords(JSON.parse(localStorage.getItem('user')!).userId)
      .then((res) => {
        res!.forEach((element) => {
          this.noRepeat?.push(element.optional?.wordsLearned as string);
        });
      });
  }

  async printBtnString(): Promise<void> {
    const btnWrapper = document.querySelector('.audio-container-game') as HTMLElement;

    this.group = this.level! - 1;
    if ((this.page === 0)) {
      this.page = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
    }
    const res = await api.getWords(this.group!, this.page!);
    const garageSection = document.querySelector('.button-container') as HTMLElement;
    if (garageSection) {
      garageSection.innerHTML = '';
    }
    if (this.round! < 5) {
      this.words = res;
      if (this.wordStudied.length > 0) {
        this.noRepeat = this.noRepeat!.concat(this.wordStudied);
      }
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
      soundAudio((apiPath + support.wordObj!.audio));
      const button = document.querySelectorAll('.btn-translation');

      for (let j = 0; j < this.arraySixWords.length; j++) {
        button[j].textContent = `${this.arraySixWords[j]}`;
        button[j].id = this.arraySixWords[j];
        (button[j] as HTMLButtonElement).dataset.num = `${j + 1}`;
      }
    } else {
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
          <div  class="btn-blue restart"> Начать заново</div>
          <div  class="btn-blue"> <a  class="level-change" href="#audiocall" > Выбрать уровень</a> </div>
          
        </div>
      </div>

    `;
      if (this.longestSeriesOfRightAnswers! < this.RightAnsweredWords!.length) {
        this.longestSeriesOfRightAnswers = this.RightAnsweredWords!.length;
      }

      this.allWords = this.allWords! + 5;

      this.rightAnsweredWordsStatistic = this.rightAnsweredWordsStatistic?.concat(this.RightAnsweredWords!);

      const percentOfRightAnswersLocal = (this.rightAnsweredWordsStatistic!.length * 100) / this.allWords;

      this.percentOfRightAnswers = percentOfRightAnswersLocal;

      const newWordsLocal = (new Set(this.rightAnsweredWordsStatistic!)).size;

      this.newWords = newWordsLocal;

      console.log(this.rightAnsweredWordsStatistic, 'this.rightAnsweredWordsStatistic', statisticsDataAudiocallShortTerm.percentOfRightAnswers, 'statisticsDataAudiocallShortTerm.percentOfRightAnswers');

      const dateCurrGame = this.dataNow();
      const objStatisticStorage: IObjStatisticStorage = {
        date: dateCurrGame,
        percentOfRightAnswers: this.percentOfRightAnswers,
        newWords: this.newWords,
        longestSeriesOfRightAnswers: this.longestSeriesOfRightAnswers as number,
      };

      localStorage.setItem('dataAudiocall', JSON.stringify(objStatisticStorage));
      this.clearLocalStorage();
    }
  }

  dataNow(): string {
    const t = new Date();
    const date = (`0${t.getDate()}`).slice(-2);
    const month = (`0${t.getMonth() + 1}`).slice(-2);
    const year = t.getFullYear();
    const dataCurr = `${date}/${month}/${year}`;
    return dataCurr;
  }

  clearLocalStorage(): void {
    this.WrongAnsweredWords = [];
    this.RightAnsweredWords = [];
    this.textbook = false;
    this.arrayWrongWords = [];
    this.round = 0;
    this.score = 0;
    this.group = 0;
    this.page = 0;
    // this.level = 1;
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

const support = new Support();
export { support };
