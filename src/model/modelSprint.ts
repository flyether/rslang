/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { ModuleView } from '../view/viewSprint';
import { api } from '../api/api';
import { apiPath } from '../api/api-path';
import { IWord } from '../types/types';
import { randomInteger } from '../utils/func';
import { sprintSettings } from '../pages/sprint/sprintSettings';

export class ModuleModel {
  myModuleView!: ModuleView;

  level: number = sprintSettings.sprintLevel;

  pages!: number[];

  active20Words !: IWord[];

  activeWordNumber = 0;

  activePageNumber = sprintSettings.sprintPage;

  randomTranslationNumber !: number;

  audioRight !: HTMLAudioElement;

  timer!:number;

  timerId !: ReturnType<typeof setInterval>;

  score = 0;

  scoreForRightAnswer = 10;

  maxScoreForRightAnswer = 80;

  amountOfRightAnswersForBiggerScore = 3;

  arrayOfQuestion: string[] = [];

  arrayOfAnswers: boolean[] = [];

  amountOfRightAnswers = 0;

  rightAnswerAudio !: HTMLAudioElement;

  wrongAnswerAudio!: HTMLAudioElement;

  timeoverAudio!:HTMLAudioElement;

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
    if (!sprintSettings.sprintFromTextbook) { this.pages.sort(() => 0.5 - Math.random()); }
    // console.log(this.pages);
  }

  async getWordsFromApi(): Promise<IWord[] | void> {
    const res = await api.getWords(this.level, this.pages[this.activePageNumber]) as IWord[];
    this.active20Words = Array.from(res);
    // console.log(this.active20Words);
    if (this.activeWordNumber === 0) { this.prepearFirstWord(); }
  }

  prepearFirstWord():void {
    const translation = this.generateTranslation();
    const { word } = this.active20Words[this.activeWordNumber];
    this.myModuleView.renderWord(word, translation);
  }

  prepearNextWord():void {
    (sprintSettings.sprintFromTextbook) ? this.checkWordsNumbersFromTextbook() : this.checkWordsNumbers();
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

  checkWordsNumbersFromTextbook(): void {
    if (this.activeWordNumber === 19) {
      this.activePageNumber -= 1;
      if (this.activePageNumber === -1) {
        this.stopGame();
        return;
      }
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
      this.rightAnswerAudio.play();
      this.arrayOfAnswers.push(true);
      this.analyzeTrueAnswer();
    } else {
      this.wrongAnswerAudio.play();
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
        this.stopGame();
      } else if (this.timer === 5) {
        this.timeoverAudio.play();
      }
    };
    this.timerId = setInterval(tick, 1000);
  };

  clearInterval = ():void => {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  };

  countScore():void {
    this.score += this.scoreForRightAnswer;
    if (this.scoreForRightAnswer === this.maxScoreForRightAnswer) {
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
    if (this.amountOfRightAnswers === this.amountOfRightAnswersForBiggerScore && this.scoreForRightAnswer !== this.maxScoreForRightAnswer) {
      this.getBiggerScore();
    }
    if (this.amountOfRightAnswers === (this.amountOfRightAnswersForBiggerScore + 1) && this.scoreForRightAnswer !== this.maxScoreForRightAnswer) {
      this.myModuleView.returnToOneSprintCount();
      this.amountOfRightAnswers = 1;
    }
  }

  getBiggerScore():void {
    this.scoreForRightAnswer = (this.scoreForRightAnswer === this.maxScoreForRightAnswer) ? this.scoreForRightAnswer : this.scoreForRightAnswer *= 2;
    this.myModuleView.renderCountText(this.scoreForRightAnswer);
  }

  stopGame():void {
    clearInterval(this.timerId);
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

  getAudio(rightAnswer:HTMLAudioElement, wrongAnswer:HTMLAudioElement, timeover:HTMLAudioElement):void {
    this.rightAnswerAudio = rightAnswer;
    this.wrongAnswerAudio = wrongAnswer;
    this.timeoverAudio = timeover;
  }
}

// export default ModuleModel;
