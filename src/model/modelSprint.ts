/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */

import { ModuleView } from '../view/viewSprint';
import { api } from '../api/api';
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

  init(view: ModuleView):void {
    this.myModuleView = view;
    this.fillAndSortPages();
    this.getWordsFromApi();
  }

  fillAndSortPages():void {
    this.pages = [];
    for (let i = 0; i < 30; i++) {
      this.pages.push(i);
    }
    this.pages.sort(() => 0.5 - Math.random());
  }

  async getWordsFromApi() {
    const res = await api.getWords(this.level, this.pages[this.activePageNumber]) as IWord[];
    this.active20Words = Array.from(res);
    console.log(this.active20Words);
    if (this.activePageNumber === 0) { this.prepearFirsttWord(); }
  }

  prepearFirsttWord() {
    const translation = this.generateTranslation();
    const { word } = this.active20Words[this.activeWordNumber];
    this.myModuleView.renderWord(word, translation);
  }

  prepearNextWord() {
    this.checkWordsNumbers();
    const translation = this.generateTranslation();
    const { word } = this.active20Words[this.activeWordNumber];
    this.myModuleView.renderWord(word, translation);
  }

  checkWordsNumbers():void {
    console.log(this.activeWordNumber, this.activePageNumber);
    if (this.activeWordNumber === 19) {
      this.activePageNumber += 1;
      this.activeWordNumber = 0;
      this.getWordsFromApi();
    } else {
      this.activeWordNumber += 1;
    }
  }

  generateTranslation():string {
    const min = (this.activeWordNumber >= 5) ? this.activeWordNumber - 5 : 0;
    const max = (this.activeWordNumber + 5 <= 19) ? this.activeWordNumber + 5 : 19;
    this.randomTranslationNumber = randomInteger(min, max);
    return this.active20Words[this.randomTranslationNumber].wordTranslate;
  }

  checkAnswer(answer:boolean):void {
    const translate:string = this.active20Words[this.activeWordNumber].wordTranslate;
    const rightTranslate:string = this.active20Words[this.randomTranslationNumber].wordTranslate;
    if ((translate === rightTranslate) === answer) {
      console.log(true);
      this.audioRight = document.querySelector('#audio__right') as HTMLAudioElement;
      console.log(this.audioRight);
    } else {
      console.log(false);
    }
  }

  setTimer = (timerElem: HTMLElement) => {
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

  stopGame() {
    console.log('stop');
  }
}

// export default ModuleModel;
