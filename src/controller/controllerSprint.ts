/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
import { ModuleModel } from '../model/modelSprint';

export class ModuleController {
  myModuleContainer!: HTMLElement;

  myModuleModel!: ModuleModel;

  buttonFalse!: HTMLButtonElement;

  buttonTrue!: HTMLButtonElement;

  init(container: HTMLElement, model: ModuleModel): void {
    this.myModuleContainer = container;
    this.myModuleModel = model;
    this.setEventListeners();
  }

  setEventListeners() {
    this.buttonFalse = this.myModuleContainer.querySelector('.button__sprint__false') as HTMLButtonElement;
    this.buttonFalse.addEventListener('click', () => {
      this.myModuleModel.checkAnswer(false);
    });

    this.buttonTrue = this.myModuleContainer.querySelector('.button__sprint__true') as HTMLButtonElement;
    this.buttonTrue.addEventListener('click', () => {
      this.myModuleModel.checkAnswer(true);
    });

    document.addEventListener('keydown', (event) => {
      if (event.code === 'ArrowLeft') { this.myModuleModel.checkAnswer(false); }
      if (event.code === 'ArrowRight') { this.myModuleModel.checkAnswer(true); }
    });
  }

  selectTrue() {
    this.myModuleModel.checkAnswer(true);
  }

  selectFalse() {
    this.myModuleModel.checkAnswer(false);
  }
}
