/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable max-len */

import ModelView from '../view/view';
import { MenuItems } from '../types/types';
import Textbookpage from '../pages/textbook/index';

class ModuleModel {
  myModuleView!: ModelView;

  arrOfLastFiveDays!: string[];

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
    if (!user && window.location.hash === '#statistics') { window.location.hash = '#main'; }
    if (user) {
      this.myModuleView.disableStatistics(false, elem);
      Textbookpage.render();
    } else {
      this.myModuleView.disableStatistics(true, elem);
      Textbookpage.render();
    }
  }

  prepareTextbookStatistics(chart1: HTMLCanvasElement): void {
    let now = Date.now();
    const oneDay = 86400000;
    const arr = [];
    for (let i = 0; i < 5; i += 1) {
      arr.push(new Date(now));
      now -= oneDay;
    }
    this.arrOfLastFiveDays = arr.map((elem) => elem.toLocaleDateString()).reverse();
    // console.log(arrOfLastFiveDays);
    this.myModuleView.hightStatistics('textbook');
    this.myModuleView.renderChart(chart1, this.arrOfLastFiveDays, 'Количество новых слов за день', [13, 19, 32, 2, 11]);// кол-во новых слов за день
    // this.myModuleView.renderChart(chart2, this.arrOfLastFiveDays, 'Количество изученных слов за день', [1, 10, 2, 12, 11]);// кол-во изученных слов за день
  }

  prepareAudiocallStatistics(chart1: HTMLCanvasElement): void {
    this.myModuleView.hightStatistics('audiocall');
    this.myModuleView.renderChart(chart1, this.arrOfLastFiveDays, 'Количество новых слов за день', [13, 12, 3, 2, 30]);// кол-во новых слов за день
  }

  prepareSprintStatistics(chart1: HTMLCanvasElement): void {
    this.myModuleView.hightStatistics('sprint');
    this.myModuleView.renderChart(chart1, this.arrOfLastFiveDays, 'Количество новых слов за день', [36, 12, 25, 20, 15]);// кол-во новых слов за день
  }
}

export default ModuleModel;
