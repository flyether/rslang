/* eslint-disable class-methods-use-this */

import { Routes, MenuItems } from '../types/types';
import SprintGamePage from '../pages/sprint/index';
import StatisticsPage from '../pages/statistics/index';

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
    if (hashPageName === 'statistics') { StatisticsPage.initMVC(); }
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
}

export default ModuleView;
