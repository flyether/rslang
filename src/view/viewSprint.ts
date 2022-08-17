/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
import { Routes } from '../types/types';

export class ModuleView {
  myModuleContainer!:HTMLElement;

  contentContainer!:HTMLElement;

  routesObj!:Routes;

  sprintTimer: HTMLElement = document.querySelector('.sprint__timer') as HTMLElement;

  sprintScore !: HTMLElement;

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
}

// export default ModuleView;
