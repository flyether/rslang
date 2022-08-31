/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { ModuleModel } from '../model/modelStatistics';
// import { setSprintData } from '../pages/sprint/sprintData';

export class ModuleController {
  myModuleContainer!: HTMLElement;

  myModuleModel!: ModuleModel;

  statisticsConteiner !: HTMLElement;

  init(container: HTMLElement, model: ModuleModel): void {
    this.myModuleContainer = container;
    this.myModuleModel = model;
    this.findStatisticsElements();
  }

  findStatisticsElements(): void {
    this.myModuleModel.prepareStatistics();
    this.statisticsConteiner = document.querySelector('.statistics-conteiner') as HTMLElement;
    this.statisticsConteiner.addEventListener('click', (e: Event) => {
      const el = e.target as HTMLElement;
      if (el.closest('.statistics__textbook')) {
        this.myModuleModel.switchStatictics('textbook');
      }
      if (el.closest('.statistics__audiocall')) {
        this.myModuleModel.switchStatictics('audiocall');
      }
      if (el.closest('.statistics__sprint')) {
        this.myModuleModel.switchStatictics('sprint');
      }
      if (el.closest('.statistics__day')) {
        this.myModuleModel.switchStaticticsKind('day');
      }
      if (el.closest('.statistics__alltime')) {
        this.myModuleModel.switchStaticticsKind('alltime');
      }
    });
  }
}
