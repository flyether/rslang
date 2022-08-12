/* eslint-disable no-restricted-globals */

import modalAuthorization from '../components/modal';
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
    modalAuthorization.open();

    this.updateState();
  }

  updateState(): void {
    const hashPageName = window.location.hash.slice(1).toLowerCase();
    this.myModuleModel.updateState(hashPageName);
  }
}

export default ModuleController;
