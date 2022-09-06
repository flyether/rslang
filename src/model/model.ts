/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable max-len */

import ModelView from '../view/view';
import { MenuItems } from '../types/types';
import Textbookpage from '../pages/textbook/index';

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

  highlightActiveMenuItemBurger(obj: MenuItems, hashName: string): void {
    this.myModuleView.highlightActiveMenuItemBurger(obj, hashName);
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
}

export default ModuleModel;
