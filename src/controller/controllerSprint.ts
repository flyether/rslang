/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
import { ModuleModel } from '../model/modelSprint';
// import { sprintData } from '../pages/sprint/sprintData';

export class ModuleController {
  myModuleContainer!: HTMLElement;

  myModuleModel!: ModuleModel;

  buttonFalse!: HTMLButtonElement;

  buttonTrue!: HTMLButtonElement;

  sprintTimer!: HTMLElement;

  buttonSayWord!:HTMLElement;

  init(container: HTMLElement, model: ModuleModel): void {
    this.myModuleContainer = container;
    this.myModuleModel = model;
    this.findAudioElements();
    this.setTimer();
    window.addEventListener('hashchange', () => {
      this.hashchangeEventRemove();
    });
    document.addEventListener('keyup', this.setButtonEventListeners);
    document.addEventListener('click', this.setEventListeners);
  }

  hashchangeEventRemove = (): void => {
    this.myModuleModel.clearInterval();
    document.removeEventListener('keyup', this.setButtonEventListeners);
    document.removeEventListener('click', this.setEventListeners);
  };

  setButtonEventListeners = (event: KeyboardEvent): void => {
    if (event.key === 'ArrowLeft') {
      this.selectFalse();
      this.myModuleModel.prepearNextWord();
    }
    if (event.code === 'ArrowRight') {
      this.selectTrue();
      this.myModuleModel.prepearNextWord();
    }
  };

  setEventListeners = (event:Event):void => {
    const elem = event.target as HTMLElement;
    if (elem.closest('.button__sprint__false')) {
      this.selectFalse();
      this.myModuleModel.prepearNextWord();
    } else if (elem.closest('.button__sprint__true')) {
      this.selectTrue();
      this.myModuleModel.prepearNextWord();
    } else if (elem.closest('.word__sound')) {
      const audio = document.querySelector('#sprint__say__word') as HTMLAudioElement;
      this.myModuleModel.sayWord(audio);
    }
  };

  findAudioElements():void {
    const rightAnswerAudio = this.myModuleContainer.querySelector('#audio__right') as HTMLAudioElement;
    const wrongAnswerAudio = this.myModuleContainer.querySelector('#audio__wrong') as HTMLAudioElement;
    const timeoverAudio = this.myModuleContainer.querySelector('#audio__timeover') as HTMLAudioElement;
    this.myModuleModel.getAudio(rightAnswerAudio, wrongAnswerAudio, timeoverAudio);
  }

  setTimer():void {
    this.sprintTimer = this.myModuleContainer.querySelector('.sprint__timer') as HTMLElement;
    this.myModuleModel.setTimer(this.sprintTimer);
  }

  selectTrue():void {
    this.myModuleModel.checkAnswer(true);
  }

  selectFalse():void {
    this.myModuleModel.checkAnswer(false);
  }
}
