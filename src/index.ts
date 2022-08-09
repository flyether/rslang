import './styles/style.sass';

import ModuleController from './controller/controller';
import ModuleModel from './model/model';
import ModuleView from './view/view';

import { Components, Routes, InitialObj } from './types/types';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

import MainPage from './pages/main';

const components:Components = {
  header: Header,
  content: Content,
  footer: Footer,
};

const routes:Routes = {
  main: MainPage,
  default: MainPage,
};

const initialObj:InitialObj = {
  container: 'spa',
  routes: routes,
  components: components,
};

/* ----- spa init module --- */
const mySPA = (function () {
  let view:ModuleView;
  let model:ModuleModel;
  let controller:ModuleController;
  return {
    init: function (obj:InitialObj) {
      this.renderComponents(obj.container, obj.components);
      const containerSPA = document.getElementById(obj.container) as HTMLElement;
      view = new ModuleView();
      model = new ModuleModel();
      controller = new ModuleController();

      view.init(containerSPA, routes);
      model.init(view);
      controller.init(containerSPA, model);
    },

    renderComponents: function (container:string, componentsObj: Components) {
      const root = document.getElementById(container) as HTMLElement;
      const componentsList = Object.keys(componentsObj);
      for (const item of componentsList) {
        root.innerHTML += componentsObj[item as keyof Components].render();
      }
    },
  };
}());

/* ------ end app module ----- */

/*** --- init module --- ***/
window.addEventListener('DOMContentLoaded', () => {
  mySPA.init(initialObj);
});
