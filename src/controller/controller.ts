/* eslint-disable no-restricted-globals */
import { MenuItems } from '../types/types';
import SprintGamePage from '../pages/sprint/index';
import ModuleModel from '../model/model';

class ModuleController {
  myModuleContainer!: HTMLElement;

  myModuleModel!: ModuleModel;

  menuMain !: HTMLElement;

  menuTextbook !: HTMLElement;

  menuStatictics !: HTMLElement;

  menuAudiocall !: HTMLElement;

  menuSprint !: HTMLElement;

  menuTeam !: HTMLElement;

  buttonStartSprint!: HTMLButtonElement;

  sprintLevel !: HTMLInputElement;

  init(container: HTMLElement, model: ModuleModel): void {
    this.myModuleContainer = container;
    this.myModuleModel = model;
    window.addEventListener('hashchange', () => {
      this.updateState();
    });
    this.updateState();
    // window.location.hash = '#main';
  }

  updateState(): void {
    const hashPageName = window.location.hash.slice(1).toLowerCase();
    this.myModuleModel.updateState(hashPageName);
    this.findMenuElements(hashPageName);
    switch (hashPageName) {
      case 'aboutsprint':
        this.addButtonsAboutSprintGameListeners();
        break;
      default:
    }
  }

  findMenuElements(hashName:string):void {
    this.menuMain = document.querySelector('.menu__main') as HTMLElement;
    this.menuTextbook = document.querySelector('.menu__textbook') as HTMLElement;
    this.menuStatictics = document.querySelector('.menu__statictics') as HTMLElement;
    this.menuAudiocall = document.querySelector('.menu__audiocall') as HTMLElement;
    this.menuSprint = document.querySelector('.menu__sprint') as HTMLElement;
    this.menuTeam = document.querySelector('.menu__team') as HTMLElement;
    const obj:MenuItems = {
      main: this.menuMain,
      textbook: this.menuTextbook,
      statistics: this.menuStatictics,
      audiocall: this.menuAudiocall,
      sprint: this.menuSprint,
      aboutsprint: this.menuSprint,
      team: this.menuTeam,
    };
    this.myModuleModel.highlightActiveMenuItem(obj, hashName);
  }

  addButtonsAboutSprintGameListeners() {
    this.buttonStartSprint = document.querySelector('.button__start__sprint') as HTMLButtonElement;
    this.sprintLevel = document.querySelector('.sprint__level') as HTMLInputElement;
    this.buttonStartSprint.addEventListener('click', () => {
      location.hash = '#sprint';
      SprintGamePage.saveLevel(this.sprintLevel.value);
    });
  }
}

export default ModuleController;
