/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import {
  IObjStatisticStorage, IWord,
} from '../../../types/types';
import { apiPath } from '../../../api/api-path';
import { api } from '../../../api/api';
import { getStatisticsDataAudiocallShortTerm, statisticsDataAudiocallShortTerm } from '../../statistics/statisticsData';
import { initialObj, mySPA } from '../../../index';

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

  public noRepeatID?: string [];

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
    this.noRepeatID = [];
    this.wordStudied = [];
    this.wordObj = {
      id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
    };
    this.arraySixWords = [];
    this.containerBtn = 'ggg';
  }

  // метод который берет с сервера изученые слова чтобы их не выводить в игру
  async getUserWords() : Promise<void> {
    api.getAllUserWords(JSON.parse(localStorage.getItem('user')!).userId)
      .then((res) => {
        res!.forEach((element) => {
          api.getWord(element.wordId)
            .then((ress) => {
              this.noRepeat?.push(ress?.wordTranslate as string);
              this.noRepeatID?.push(ress?.id as string);
            });
        });
      });
  }

  // проверка слов на изученность

  async checkLearnedWrds() : Promise<void> {
    let lernWordIDArr = getCountsSorted_1(this.rightAnsweredWordsStatistic!);
    lernWordIDArr = lernWordIDArr.filter((item) => !this.noRepeatID!.includes(item));
    console.log(lernWordIDArr, 'lernWordArr 144');
    lernWordIDArr.forEach(async (element) => {
      let userId = '';
      if (localStorage.getItem('user')) {
        userId = JSON.parse(localStorage.getItem('user')!).userId;
      }

      if (userId) {
        try {
          await api.CreateUserWord(userId, element,
            { difficulty: 'learned' });
        } catch (_e) {
          await api.UpdateUserWord(userId, element,
            { difficulty: 'learned', optional: { wordsLearned: element } });
        }
      }
    });
  }

  async printBtnString(): Promise<void> {
    this.getUserWords();
    // console.log(this.noRepeat, 'this.noRepeat 105');
    const btnWrapper = document.querySelector('.audio-container-game') as HTMLElement;

    this.group = this.level! - 1;
    if ((this.page === 0)) {
      this.page = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
    }

    console.log(this.group, 'this.group', this.page, 'this.page');
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
      // this.noRepeat = Array.from(new Set(this.rightAnsweredWordsStatistic!));
      console.log(this.noRepeat, 'this.noRepeat');
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
      console.log(this.RightAnsweredWords!, 'this.RightAnsweredWords!');
      if (this.longestSeriesOfRightAnswers! < this.RightAnsweredWords!.length) {
        this.longestSeriesOfRightAnswers = this.RightAnsweredWords!.length;
      }

      let objAudiocallDate: IObjStatisticStorage = {
        percentOfRightAnswers: 0,
        longestSeriesOfRightAnswers: 0,
        answer: [],
        newWords: 0,
      };

      if (localStorage.getItem('dataAudiocall')) {
        objAudiocallDate = JSON.parse(localStorage.getItem('dataAudiocall')!);
      }

      if (objAudiocallDate.answer) {
        this.rightAnsweredWordsStatistic = objAudiocallDate.answer!.concat(this.RightAnsweredWords!);
      } else {
        this.rightAnsweredWordsStatistic = this.RightAnsweredWords;
      }
      // console.log(this.RightAnsweredWords!, 'this.RightAnsweredWords!', objAudiocallDate.answer, 'objAudiocallDate.answer');
      this.allWords = objAudiocallDate.newWords! + 5;

      this.percentOfRightAnswers = Math.floor((this.rightAnsweredWordsStatistic!.length * 100) / this.allWords);

      const objStatisticStorage: IObjStatisticStorage = {
        date: this.dataNow(),
        percentOfRightAnswers: this.percentOfRightAnswers,
        newWords: this.allWords,
        longestSeriesOfRightAnswers: this.longestSeriesOfRightAnswers as number,
        answer: this.rightAnsweredWordsStatistic,
      };
      this.checkLearnedWrds();
      localStorage.setItem('dataAudiocall', JSON.stringify(objStatisticStorage));
      this.clearLocalStorage();
      getStatisticsDataAudiocallShortTerm();
      // const view = new ModuleModel();
      // view.prepareStatistics();

      // window.addEventListener('DOMContentLoaded', () => {
      //   mySPA.init(initialObj);
      // });
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
    // this.page = 0;
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

// eslint-disable-next-line @typescript-eslint/naming-convention
function getCountsSorted_1(arr: string[]):string[] {
  const counts = new Map();
  let lernWord = '';
  const lernWordArr: string[] = [];
  for (const i in arr) {
    if (counts.has(arr[i])) {
      counts.set(arr[i], counts.get(arr[i]) + 1);
    } else {
      counts.set(arr[i], 1);
    }
  }
  const counts2 = Array.from(counts);

  counts2.forEach((element) => {
    if (element[1] > 3) {
      lernWord = element[0] as string;
      (lernWordArr as string[]).push(lernWord);
      alert(lernWord);
    }
  });

  return lernWordArr;
}

// функция проигрывания аудио с путем из нашего обекта-слово

const support = new Support();
export { support };
