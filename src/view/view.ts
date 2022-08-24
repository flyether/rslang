/* eslint-disable class-methods-use-this */

import Chart from 'chart.js/auto';

import { Routes, MenuItems } from '../types/types';
import SprintGamePage from '../pages/sprint/index';

class ModuleView {
  myModuleContainer!: HTMLElement;

  contentContainer!: HTMLElement;

  routesObj!: Routes;

  menuStatictics !: HTMLElement;

  chart1 !: Chart;

  init(container: HTMLElement, routes: Routes): void {
    this.myModuleContainer = container;
    this.routesObj = routes;
  }

  renderContent(hashPageName: string): void {
    let routeName = 'default';
    routeName = (hashPageName.length) ? hashPageName.split('/')[0] : routeName;
    const route = this.routesObj[routeName as keyof Routes];
    this.myModuleContainer.innerHTML = route.render();
    if (hashPageName === 'sprint') { SprintGamePage.initMVC(); }
  }

  highlightActiveMenuItem = (obj: MenuItems, hashName: string): void => {
    /* eslint-disable-next-line */
    for (let key in obj) {
      if (obj[key as keyof MenuItems].classList.contains('menu__item_active')) {
        obj[key as keyof MenuItems].classList.remove('menu__item_active');
      }
    }
    if (hashName) {
      obj[hashName as keyof MenuItems].classList.add('menu__item_active');
    } else {
      obj.main.classList.add('menu__item_active');
    }
  };

  disableStatistics(flag:boolean, statisticMenu:HTMLElement): void {
    if (!flag) {
      statisticMenu.classList.remove('menu__item_disable');
    } else {
      statisticMenu.classList.add('menu__item_disable');
    }
  }

  renderChart(chart1: HTMLCanvasElement, arrOfLabels1: string[], label1:string, arrOfData1: number[]):void {
    if (this.chart1) { this.chart1.destroy(); }
    const ctx1 = chart1.getContext('2d') as CanvasRenderingContext2D;
    ctx1.clearRect(0, 0, chart1.width, chart1.height);
    this.chart1 = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: arrOfLabels1,
        datasets: [{
          label: label1,
          data: arrOfData1,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)',
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)',
          ],
        }],
      },
    });
  }

  hightStatistics(str:string): void {
    const objStatiscticsItems:HTMLElement[] = Array.from(document.querySelectorAll('.statistics__item'));
    objStatiscticsItems.forEach((element) => {
      if (element.classList.contains('statistics__item_active')) {
        element.classList.remove('statistics__item_active');
      }
    });
    switch (str) {
      case 'textbook':
        objStatiscticsItems[0].classList.add('statistics__item_active');
        break;
      case 'audiocall':
        objStatiscticsItems[1].classList.add('statistics__item_active');
        break;
      case 'sprint':
        objStatiscticsItems[2].classList.add('statistics__item_active');
        break;
      default:
        break;
    }
  }
}

export default ModuleView;
