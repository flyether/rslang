/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import {
  IWord, IUserWords, IStatistic, IOptionalStatisticGame,
} from '../../../types/types';
import { apiPath } from '../../../api/api-path';
import { api } from '../../../api/api';
import { statisticsDataAudiocallShortTerm, statisticsDataLongTerm } from '../../statistics/statisticsData';

function shuffle(array:string[]) {
  array.sort(() => Math.random() - 0.5);
}
function maping(arr:string[], num: number, learn:string[]) {
  const counts = new Map();
  let lernWord = '';
  for (const i in arr) {
    if (counts.has(arr[i])) {
      counts.set(arr[i], counts.get(arr[i]) + 1);
    } else {
      counts.set(arr[i], 1);
    }
  }

  const counts2 = Array.from(counts);
  counts2.forEach((element) => {
    if (element[1] > num) {
      lernWord = element[0] as string;
      learn.push(lernWord);
      console.log(learn, 'learn');
    }
  });
}
// функция проигрывания аудио с путем из нашего обекта-слово
export function soundAudio(path: string): void {
  const audioD = new Audio();
  audioD.src = `${path}`;
  audioD.autoplay = true;
}

let userId = '';
if (localStorage.getItem('user')) {
  userId = JSON.parse(localStorage.getItem('user')!).userId;
}

class Support {
  public difficultWords: string[];

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

  public LearnedWordsID?: string [];

  public newAndLearnUserWords?: string [];

  public WrongAnsweredWords?: string [];

  public newWords?: number;

  public countNewWords?: number;

  public allWords?: number;

  public objStatistic: IOptionalStatisticGame;

  constructor() {
    this.objStatistic = {
      longestSeriesOfRightAnswers: 0,
      newWords: 0,
      percentOfRightAnswers: 0,
      rightAnswers: 0,
      AllAnswersFromGame: 0,
      answer: [],
    };
    this.countNewWords = 0;
    this.newAndLearnUserWords = [];
    this.LearnedWordsID = [];
    this.newWords = 0;
    this.allWords = 0;
    this.WrongAnsweredWords = [];
    this.RightAnsweredWords = [];
    this.textbook = false;
    this.arrayWrongWords = [];
    this.difficultWords = [];
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

  // метод который берет с сервера изученые слова чтобы их не выводить в игру
  async getUserWords() : Promise<void> {
    api.getAllUserWords(userId)
      .then((res) => {
        res!.forEach((element) => {
          if (element.difficulty === 'learned' || !element.difficulty) {
            this.newAndLearnUserWords?.push(element.wordId as string);
            this.newAndLearnUserWords = this.newAndLearnUserWords!.filter((item, index) => this.newAndLearnUserWords!.indexOf(item) === index);
          }
          if (element.difficulty === 'aggregated') {
            this.difficultWords?.push(element.wordId as string);
            this.difficultWords = this.difficultWords!.filter((item, index) => this.difficultWords!.indexOf(item) === index);
          }
          if (element.difficulty === 'learned') {
            this.LearnedWordsID?.push(element.wordId as string);
            this.LearnedWordsID = this.LearnedWordsID!.filter((item, index) => this.LearnedWordsID!.indexOf(item) === index);
            api.getWord(element.wordId)
              .then((ress) => {
                if (this.textbook) {
                  this.noRepeat?.push(ress?.wordTranslate as string);
                  this.noRepeat = this.noRepeat!.filter((item, index) => this.noRepeat!.indexOf(item) === index);
                }
              });
          }
        });
      }).catch((error) => {
        this.objStatistic = {
          percentOfRightAnswers: 0,
          newWords: 0,
          longestSeriesOfRightAnswers: 0,
          newWordsSprint: 0,
          percentOfRightAnswersSprint: 0,
          longestSeriesOfRightAnswersSprint: 0,
          rightAnswersSprint: 0,
          AllAnswersFromGameSprint: 0,
        };
      });
  }

  // проверка слов на изученность

  getLearnedWord(arr: string[]):string[] {
    const learnWordArr: string[] = [];
    const learnWordArrNormal: string[] = [];
    const learnWordArrDifficult: string[] = [];
    arr.forEach((element) => {
      if (this.difficultWords.includes(element)) {
        learnWordArrDifficult.push(element);
      } else {
        learnWordArrNormal.push(element);
      }
    });
    maping(learnWordArrNormal, 2, learnWordArr);
    maping(learnWordArrDifficult, 4, learnWordArr);
    return learnWordArr;
  }

  async checkLearnedWrds() : Promise<void> {
    const lernWordIDArr = this.getLearnedWord(this.objStatistic.answer!);

    lernWordIDArr.forEach(async (element) => {
      if (userId) {
        try {
          await api.CreateUserWord(userId, element,
            { difficulty: 'learned' });
        } catch (_e) {
          await api.UpdateUserWord(userId, element,
            { difficulty: 'learned' });
        }
      }
    });
  }

  // метод получения статистики

  async staticGet() : Promise<void> {
    return new Promise((resolve, reject) => {
      api.GetsStatistics(userId)
        .then((res) => {
          if (res) {
            this.objStatistic = res?.optional?.games as IOptionalStatisticGame;
          }
          resolve();
        }).catch(() => {
          this.objStatistic = {
            longestSeriesOfRightAnswers: 0,
            newWords: 0,
            percentOfRightAnswers: 0,
            rightAnswers: 0,
            AllAnswersFromGame: 0,
            answer: [],
          };
          resolve();
        });
    });
  }

  // метод для заполнения статистики
  async staticUpdate(objStatistics: IOptionalStatisticGame) : Promise<void> {
    const value: IStatistic = {
      optional: {
        games: objStatistics,
      },
    };
    await api.UpsertsNewStatistics(userId, value);
  }
  // удалим слово в котором ошибся юзер

  async deleteWrongWordFromServer():Promise<void> {
    if (userId) {
      await api.DeleteUserWord(userId, this.wordObj!.id);
      console.log('удаляем ', this.wordObj?.word);
    }
  }

  // добавляем на сервер новые слова появившиеся в игре
  async CrateNewWord(booleanPar: boolean) : Promise<void> {
    if (userId) {
      if (!this.newAndLearnUserWords!.includes(this.wordObj!.id)) {
        const optional: IUserWords = { optional: { answer: booleanPar, status: 'new' } };
        try {
          await api.CreateUserWord(userId, this.wordObj!.id,
            optional);
          this.countNewWords!++;
        } catch (_e) {
          await api.UpdateUserWord(userId, this.wordObj!.id,
            optional);
        }
      }
    }
  }

  // отрисовка хтмл в игре
  async printBtnString(): Promise<void> {
    this.getUserWords();
    const btnWrapper = document.querySelector('.audio-container-game') as HTMLElement;
    const countWord = 5;
    //     выбор уровня и страницы для загрузки слов  ссервера

    this.group = this.level! - 1;
    if ((!this.textbook)) {
      this.page = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
    }

    const res = await api.getWords(this.group!, this.page!);

    const garageSection = document.querySelector('.button-container') as HTMLElement;
    if (garageSection) {
      garageSection.innerHTML = '';
    }
    if (this.round! < countWord) {
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
      if (this.arraySixWords) {
        for (let j = 0; j < this.arraySixWords.length; j++) {
          button[j].textContent = `${this.arraySixWords[j]}`;
          button[j].id = this.arraySixWords[j];
          (button[j] as HTMLButtonElement).dataset.num = `${j + 1}`;
        }
      }
      // отрисовка конца игры.
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

      // работа над статистикой
      if (userId) {
        // берем статистику и присваиваем ее this.objStatistic
        this.staticGet().then(() => {
          // если записанная в статистике серия короче новой серии объектов то прересзаписывем

          if (this.objStatistic.longestSeriesOfRightAnswers! < this.RightAnsweredWords!.length) {
            this.objStatistic.longestSeriesOfRightAnswers = this.RightAnsweredWords!.length;
          }

          this.objStatistic.date = this.dataNow();
          this.objStatistic.newWords! += this.countNewWords!;

          if (this.objStatistic.answer) {
            this.objStatistic.answer = this.objStatistic.answer!.concat(this.RightAnsweredWords!);
          } else { this.objStatistic.answer = this.RightAnsweredWords; }

          this.objStatistic.AllAnswersFromGame! += countWord;
          if (this.objStatistic.rightAnswers) {
            this.objStatistic.rightAnswers! += this.RightAnsweredWords!.length;
          } else { this.objStatistic.rightAnswers! = this.RightAnsweredWords!.length; }

          if (this.objStatistic.rightAnswers && this.objStatistic.rightAnswers !== 0) {
            this.objStatistic.percentOfRightAnswers = Math.floor((this.objStatistic.rightAnswers! * 100) / this.objStatistic.AllAnswersFromGame!);
          } else {
            this.objStatistic.percentOfRightAnswers = Math.floor((this.RightAnsweredWords!.length * 100) / countWord);
          }
          console.log(this.objStatistic.percentOfRightAnswers, 'this.objStatistic.percentOfRightAnswers');
          this.staticUpdate(this.objStatistic);

          statisticsDataAudiocallShortTerm.newWords = this.objStatistic.newWords!;
          statisticsDataAudiocallShortTerm.percentOfRightAnswers = this.objStatistic.percentOfRightAnswers;
          statisticsDataAudiocallShortTerm.longestSeriesOfRightAnswers = this.objStatistic.longestSeriesOfRightAnswers;

          this.checkLearnedWrds();
          this.clearLocalStorage();
        });
      }
      if (!userId) {
        this.clearLocalStorage();
      }
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
    this.countNewWords = 0;
    this.arrayWrongWords = [];
    this.round = 0;
    this.score = 0;
    this.group = 0;
    this.words = [];
    this.wordsString = [];
    this.noRepeat = [];
    this.wordObj = {
      id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
    };
    this.arraySixWords = [];
  }
}

const support = new Support();
export { support };
