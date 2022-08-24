/* eslint-disable class-methods-use-this */

import Chart from 'chart.js/auto';
import { Routes, MenuItems } from '../types/types';
import SprintGamePage from '../pages/sprint/index';

class ModuleView {
  myModuleContainer!: HTMLElement;

  contentContainer!: HTMLElement;

  routesObj!: Routes;

  menuStatictics !: HTMLElement;

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

  renderChart(el: HTMLCanvasElement, arrOfDays: string[]):void {
    const ctx = el.getContext('2d') as CanvasRenderingContext2D;
    const barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: arrOfDays,
        datasets: [{
          label: 'Количество новых слов за день',
          data: [13, 19, 32, 2, 11],
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
}

export default ModuleView;
