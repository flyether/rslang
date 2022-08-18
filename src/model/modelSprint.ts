/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */

import { ModuleView } from '../view/viewSprint';
import { api } from '../api/api';
import { apiPath } from '../api/api-path';
import { IWord } from '../types/types';
import SprintGamePage from '../pages/sprint/index';
import { randomInteger } from '../utils/func';

export class ModuleModel {
  myModuleView!: ModuleView;

  level: number = SprintGamePage.level;

  pages!: number[];

  active20Words !: IWord[];

  activeWordNumber = 0;

  activePageNumber = 0;

  randomTranslationNumber !: number;

  audioRight !: HTMLAudioElement;

  timer!:number;

  timerId !: ReturnType<typeof setInterval>;

  score = 0;

  scoreForRightAnswer = 10;

  arrayOfQuestion: string[] = [];

  arrayOfAnswers: boolean[] = [];

  amountOfRightAnswers = 0;

  init(view: ModuleView):void {
    this.myModuleView = view;
    this.fillAndSortPages();
    this.getWordsFromApi();
  }

  sayWord(audio:HTMLAudioElement):void {
    audio.src = `${apiPath + this.active20Words[this.activeWordNumber].audio}`;
    audio.play();
  }

  fillAndSortPages():void {
    this.pages = [];
    for (let i = 0; i < 30; i++) {
      this.pages.push(i);
    }
    this.pages.sort(() => 0.5 - Math.random());
  }

  async getWordsFromApi(): Promise<IWord[] | void> {
    const res = await api.getWords(this.level, this.pages[this.activePageNumber]) as IWord[];
    this.active20Words = Array.from(res);
    console.log(this.active20Words);
    if (this.activePageNumber === 0) { this.prepearFirstWord(); }
  }

  prepearFirstWord():void {
    const translation = this.generateTranslation();
    const { word } = this.active20Words[this.activeWordNumber];
    this.myModuleView.renderWord(word, translation);
  }

  prepearNextWord():void {
    this.checkWordsNumbers();
    const translation = this.generateTranslation();
    const { word } = this.active20Words[this.activeWordNumber];
    this.myModuleView.renderWord(word, translation);
    this.arrayOfQuestion.push(word);
  }

  checkWordsNumbers():void {
    if (this.activeWordNumber === 19) {
      this.activePageNumber += 1;
      this.activeWordNumber = 0;
      this.getWordsFromApi();
    } else {
      this.activeWordNumber += 1;
    }
  }

  generateTranslation():string {
    const min = (this.activeWordNumber >= 2) ? this.activeWordNumber - 2 : 0;
    const max = (this.activeWordNumber + 2 <= 19) ? this.activeWordNumber + 2 : 19;
    this.randomTranslationNumber = randomInteger(min, max);
    return this.active20Words[this.randomTranslationNumber].wordTranslate;
  }

  checkAnswer(answer:boolean):void {
    const translate:string = this.active20Words[this.activeWordNumber].wordTranslate;
    const rightTranslate:string = this.active20Words[this.randomTranslationNumber].wordTranslate;
    if ((translate === rightTranslate) === answer) {
      this.arrayOfAnswers.push(true);
      this.analyzeTrueAnswer();
      // this.audioRight = document.querySelector('#audio__right') as HTMLAudioElement;
    } else {
      this.arrayOfAnswers.push(false);
      this.analyzeFalseAnswer();
    }
  }

  setTimer = (timerElem: HTMLElement):void => {
    this.timer = Number(timerElem.textContent);

    const tick = () => {
      this.timer -= 1;
      this.myModuleView.renderTimer(this.timer, timerElem);
      if (this.timer === 0) {
        clearInterval(this.timerId);
        this.stopGame();
      }
    };
    this.timerId = setInterval(tick, 1000);
  };

  countScore():void {
    this.score += this.scoreForRightAnswer;
    if (this.scoreForRightAnswer === 80) {
      this.myModuleView.renderScore(String(this.score), true);
    } else {
      this.myModuleView.renderScore(String(this.score));
    }
  }

  analyzeFalseAnswer():void {
    this.amountOfRightAnswers = 0;
    this.myModuleView.clearSprintCount();
    this.scoreForRightAnswer = 10;
    this.myModuleView.renderCountText(this.scoreForRightAnswer);
  }

  analyzeTrueAnswer():void {
    this.amountOfRightAnswers += 1;
    this.countScore();
    if (this.amountOfRightAnswers === 3 && this.scoreForRightAnswer !== 80) {
      this.getBiggerScore();
    }
    if (this.amountOfRightAnswers === 4 && this.scoreForRightAnswer !== 80) {
      this.myModuleView.returnToOneSprintCount();
      this.amountOfRightAnswers = 1;
    }
  }

  getBiggerScore():void {
    this.scoreForRightAnswer = (this.scoreForRightAnswer === 80) ? this.scoreForRightAnswer : this.scoreForRightAnswer *= 2;
    this.myModuleView.renderCountText(this.scoreForRightAnswer);
  }

  stopGame():void {
    let rightAnswers = 0;
    let wrongAnswers = 0;
    this.arrayOfAnswers.forEach((item) => {
      if (item) {
        rightAnswers += 1;
      } else {
        wrongAnswers += 1;
      }
    });
    this.myModuleView.renderResults(this.arrayOfQuestion, this.arrayOfAnswers, rightAnswers, wrongAnswers, this.score);
  }
}

// export default ModuleModel;
