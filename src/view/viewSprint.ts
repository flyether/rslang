/* eslint-disable import/no-cycle */
import { Routes } from '../types/types';

export class ModuleView {
  myModuleContainer!:HTMLElement;

  contentContainer!:HTMLElement;

  routesObj!:Routes;

  sprintTimer!: HTMLElement;

  sprintScore !: HTMLElement;

  init(container: HTMLElement):void {
    this.myModuleContainer = container;
    // this.routesObj = routes;
  }

  // this.sprintTimer = this.myModuleContainer.querySelector('.sprint__timer') as HTMLElement;
  // this.sprintScore = this.myModuleContainer.querySelector('.sprint__score') as HTMLElement;
}

// export default ModuleView;
