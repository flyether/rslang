/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
import { ModuleModel } from '../model/modelSprint';

export class ModuleController {
  myModuleContainer!: HTMLElement;

  myModuleModel!: ModuleModel;

  buttonFalse!: HTMLButtonElement;

  buttonTrue!: HTMLButtonElement;

  sprintTimer!: HTMLElement;

  init(container: HTMLElement, model: ModuleModel): void {
    this.myModuleContainer = container;
    this.myModuleModel = model;
    this.setEventListeners();
    this.setTimer();
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
      if (event.code === 'ArrowLeft') { this.myModuleModel.checkAnswer(false); }
      if (event.code === 'ArrowRight') { this.myModuleModel.checkAnswer(true); }
    });
  }

  setTimer() {
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
