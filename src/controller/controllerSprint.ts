/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
import { ModuleModel } from '../model/modelSprint';

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
    this.setEventListeners();
    this.findAudioElements();
    this.setTimer();
    window.addEventListener('hashchange', this.myModuleModel.clearInterval);
  }

  setEventListeners():void {
    this.buttonFalse = this.myModuleContainer.querySelector('.button__sprint__false') as HTMLButtonElement;
    this.buttonFalse.addEventListener('click', () => {
      this.myModuleModel.checkAnswer(false);
      this.myModuleModel.prepearNextWord();
    });

    this.buttonTrue = this.myModuleContainer.querySelector('.button__sprint__true') as HTMLButtonElement;
    this.buttonTrue.addEventListener('click', () => {
      this.myModuleModel.checkAnswer(true);
      this.myModuleModel.prepearNextWord();
    });

    document.addEventListener('keydown', (event) => {
      if (event.code === 'ArrowLeft') {
        this.myModuleModel.checkAnswer(false);
        this.myModuleModel.prepearNextWord();
      }
      if (event.code === 'ArrowRight') {
        this.myModuleModel.checkAnswer(true);
        this.myModuleModel.prepearNextWord();
      }
    });

    this.buttonSayWord = this.myModuleContainer.querySelector('.word__sound') as HTMLElement;
    this.buttonSayWord.addEventListener('click', () => {
      const audio = document.querySelector('#sprint__say__word') as HTMLAudioElement;
      this.myModuleModel.sayWord(audio);
    });
  }

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
