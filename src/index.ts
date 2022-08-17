/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */

import './styles/style.sass';

import ModuleController from './controller/controller';
import ModuleModel from './model/model';
import ModuleView from './view/view';

import { Components, Routes, InitialObj } from './types/types';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

import MainPage from './pages/main';

import TextbookPage from './pages/textbook';
import AboutTeamPage from './pages/team';
import SprintGamePage from './pages/sprint/index';
import AudiocallGamePage from './pages/audiocall/index';
import StatisticsPage from './pages/statistics/index';


const components: Components = {
  header: Header,
  content: Content,
  footer: Footer,
};

const routes: Routes = {
  main: MainPage,
  default: MainPage,
  textbook: TextbookPage,
  team: AboutTeamPage,
  sprint: SprintGamePage,
  audiocall: AudiocallGamePage,
  statistics: StatisticsPage,
};

const initialObj: InitialObj = {
  container: 'spa',
  routes,
  components,
};

/* ----- spa init module --- */
const mySPA = (() => {
  let view: ModuleView;
  let model: ModuleModel;
  let controller: ModuleController;
  return {
    init(obj: InitialObj) {
      this.renderComponents(obj.container, obj.components);
      const containerSPA = document.getElementById(obj.container) as HTMLElement;
      view = new ModuleView();
      model = new ModuleModel();
      controller = new ModuleController();

      view.init(containerSPA, routes);
      model.init(view);
      controller.init(containerSPA, model);
    },

    renderComponents(container: string, componentsObj: Components) {
      const root = document.getElementById(container) as HTMLElement;
      const componentsList = Object.keys(componentsObj);
      /* eslint-disable-next-line */
      for (const item of componentsList) {
        root.innerHTML += componentsObj[item as keyof Components].render();
      }
    },
  };
})();

/* ------ end app module ----- */

/** * --- init module --- ** */
window.addEventListener('DOMContentLoaded', () => {
  mySPA.init(initialObj);
});
