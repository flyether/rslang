/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import ModelView from '../view/view';
import { MenuItems } from '../types/types';

class ModuleModel {
  myModuleView!: ModelView;

  init(view: ModelView): void {
    this.myModuleView = view;
  }

  updateState(pageName: string): void {
    this.myModuleView.renderContent(pageName);
  }

  highlightActiveMenuItem(obj: MenuItems, hashName: string): void {
    this.myModuleView.highlightActiveMenuItem(obj, hashName);
  }

  checkUserAuthorization(elem: HTMLElement): void {
    const user = localStorage.getItem('user');
    if (!user) { window.location.hash = '#main'; }
    user ? this.myModuleView.disableStatistics(false, elem) : this.myModuleView.disableStatistics(true, elem);
  }

  prepareChart(el: HTMLCanvasElement): void {
    let now = Date.now();
    const oneDay = 86400000;
    let arrOfLastFiveDays = [];
    for (let i = 0; i < 5; i += 1) {
      arrOfLastFiveDays.push(new Date(now));
      now -= oneDay;
    }
    arrOfLastFiveDays = arrOfLastFiveDays.map((elem) => elem.toLocaleDateString()).reverse();
    // console.log(arrOfLastFiveDays);
    this.myModuleView.renderChart(el, arrOfLastFiveDays);
  }
}

export default ModuleModel;
