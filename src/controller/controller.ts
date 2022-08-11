/* eslint-disable no-restricted-globals */

import ModuleModel from '../model/model';

class ModuleController {
  myModuleContainer!:HTMLElement;

  myModuleModel!: ModuleModel;

  init(container:HTMLElement, model: ModuleModel):void {
    this.myModuleContainer = container;
    this.myModuleModel = model;
    /* window.addEventListener('hashchange', () => {
      this.updateState();
    }); */
    const authorization = document.querySelector('.authorization');
    const btnCloseModal = document.getElementById('btn-close');
    const overlay = document.getElementById('overlay');
    const modalResultWrapper = document.getElementById('modal-result-wrapper');
    modalResultWrapper!.style.display = 'none';
    if (authorization) {
      authorization.addEventListener('click', (e: Event) => {
        modalResultWrapper!.style.display = 'block';
      });
      const closeModal = () => {
        modalResultWrapper!.style.display = 'none';
      };
      overlay!.addEventListener('click', closeModal);
      btnCloseModal!.addEventListener('click', closeModal);
    }

    this.updateState();
  }

  updateState(): void {
    const hashPageName = window.location.hash.slice(1).toLowerCase();
    this.myModuleModel.updateState(hashPageName);
  }
}

export default ModuleController;
