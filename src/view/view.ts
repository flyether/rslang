import { Routes } from '../types/types';

class ModuleView {
  myModuleContainer!:HTMLElement;

  contentContainer!:HTMLElement;

  routesObj!:Routes;

  init(container: HTMLElement, routes: Routes) {
    this.myModuleContainer = container;
    this.routesObj = routes;
    this.contentContainer = this.myModuleContainer.querySelector('#content') as HTMLElement;
    // this.findElements();
  }

  renderContent(hashPageName:string) {
    let routeName = 'default';
    routeName = (hashPageName.length) ? hashPageName : routeName;
    const route = this.routesObj[routeName as keyof Routes];
    this.contentContainer.innerHTML = route.render();
    // this.findElements();
  }

  /* findElements() {

  } */
}

export default ModuleView;
