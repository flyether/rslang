/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */

import { Routes } from '../types/types';
import SprintResult from '../components/sprintresults';
import trueImg from '../assets/accept.png';

export class ModuleView {
  myModuleContainer!: HTMLElement;

  contentContainer!: HTMLElement;

  routesObj!: Routes;

  sprintTimer: HTMLElement = document.querySelector('.sprint__timer') as HTMLElement;

  sprintScore: HTMLElement = document.querySelector('.sprint__score') as HTMLElement;

  sprintCount: HTMLElement = document.querySelector('.title__count') as HTMLElement;

  sprintCountText: HTMLElement = document.querySelector('.title__text') as HTMLElement;

  questionWord: HTMLElement = document.querySelector('.question__word') as HTMLElement;

  questionTranslation: HTMLElement = document.querySelector('.question__translation') as HTMLElement;

  sprintConteiner: HTMLElement = document.querySelector('.sprint-conteiner') as HTMLElement;

  init(container: HTMLElement): void {
    this.myModuleContainer = container;
    // this.routesObj = routes;
  }

  renderWord(word: string, translation: string): void {
    this.questionWord.textContent = word;
    this.questionTranslation.textContent = translation;
  }

  renderTimer(timer: number, timerElem: HTMLElement): void {
    timerElem.textContent = String(timer);
  }

  renderScore(score: string, maxScore?: boolean): void {
    this.sprintScore.textContent = score;
    if (maxScore) {
      this.sprintCount.innerHTML = `<img src="${trueImg}" alt="img">`;
    } else {
      this.sprintCount.innerHTML += `<img src="${trueImg}" alt="img">`;
    }
  }

  clearSprintCount(): void {
    this.sprintCount.innerHTML = '';
  }

  returnToOneSprintCount(): void {
    this.sprintCount.innerHTML = `<img src="${trueImg}" alt="img">`;
  }

  renderCountText(n: number): void {
    this.sprintCountText.innerHTML = `+ ${n} очков за следующее слово`;
  }

  renderResults(questions: string[], answers: boolean[], rightAnswers: number, wrongAnswers: number, score: number): void {
    this.sprintConteiner.innerHTML = '';
    this.sprintConteiner.innerHTML = `${SprintResult.render(questions, answers, rightAnswers, wrongAnswers, score)}`;
  }
}

// export default ModuleView;
