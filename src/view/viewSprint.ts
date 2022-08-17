/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
import { Routes } from '../types/types';
import trueImg from '../assets/true.png';

export class ModuleView {
  myModuleContainer!:HTMLElement;

  contentContainer!:HTMLElement;

  routesObj!:Routes;

  sprintTimer: HTMLElement = document.querySelector('.sprint__timer') as HTMLElement;

  sprintScore: HTMLElement = document.querySelector('.sprint__score') as HTMLElement;

  sprintCount: HTMLElement = document.querySelector('.title__count') as HTMLElement;

  sprintCountText: HTMLElement = document.querySelector('.title__text') as HTMLElement;

  questionWord:HTMLElement = document.querySelector('.question__word') as HTMLElement;

  questionTranslation:HTMLElement = document.querySelector('.question__translation') as HTMLElement;

  init(container: HTMLElement):void {
    this.myModuleContainer = container;
    // this.routesObj = routes;
  }

  renderWord(word: string, translation: string):void {
    this.questionWord.textContent = word;
    this.questionTranslation.textContent = translation;
  }

  renderTimer(timer:number, timerElem:HTMLElement):void {
    timerElem.textContent = String(timer);
  }

  renderScore(score:string, maxScore?:boolean) {
    this.sprintScore.textContent = score;
    if (maxScore) {
      this.sprintCount.innerHTML = `<img src="${trueImg}" alt="img">`;
    } else {
      this.sprintCount.innerHTML += `<img src="${trueImg}" alt="img">`;
    }
  }

  clearSprintCount() {
    this.sprintCount.innerHTML = '';
  }

  returnToOneSprintCount() {
    this.sprintCount.innerHTML = `<img src="${trueImg}" alt="img">`;
  }

  renderCountText(n:number) {
    this.sprintCountText.innerHTML = `+ ${n} очков за слово`;
  }
}

// export default ModuleView;
