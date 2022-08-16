/* eslint-disable import/no-cycle */
import { Routes } from '../types/types';

export class ModuleView {
  myModuleContainer!:HTMLElement;

  contentContainer!:HTMLElement;

  routesObj!:Routes;

  sprintTimer!: HTMLElement;

  sprintScore !: HTMLElement;

  questionWord:HTMLElement = document.querySelector('.question__word') as HTMLElement;

  questionTranslation:HTMLElement = document.querySelector('.question__translation') as HTMLElement;

  init(container: HTMLElement):void {
    this.myModuleContainer = container;
    // this.routesObj = routes;
  }

  renderWord(word: string, translation: string) {
    this.questionWord.textContent = word;
    this.questionTranslation.textContent = translation;
  }

  // this.sprintTimer = this.myModuleContainer.querySelector('.sprint__timer') as HTMLElement;
  // this.sprintScore = this.myModuleContainer.querySelector('.sprint__score') as HTMLElement;
}

// export default ModuleView;
