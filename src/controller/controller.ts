/* eslint-disable import/no-named-as-default */
/* eslint-disable no-restricted-globals */

// import modalAuthorization from '../components/modal';

import { MenuItems } from '../types/types';
import ModuleModel from '../model/model';
import listener from '../functional/listener';
import listenerAudioCall from '../pages/audiocall/utils/listener-audiocall';
import { sprintSettings, changeSprintSettings } from '../pages/sprint/sprintSettings';

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

  audiocallgame !: HTMLElement;

  init(container: HTMLElement, model: ModuleModel): void {
    this.myModuleContainer = container;
    this.myModuleModel = model;
    window.addEventListener('hashchange', () => {
      changeSprintSettings();
      this.updateState();
    });

    // modalAuthorization.open();
    listener.open();
    listenerAudioCall.open();
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
    const hash:string = hashName.split('/')[0];
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
    if (this.menuMain) {
      this.myModuleModel.highlightActiveMenuItem(obj, hash);
    }
  }

  addButtonsAboutSprintGameListeners():void {
    this.buttonStartSprint = document.querySelector('.button__start__sprint') as HTMLButtonElement;
    this.sprintLevel = document.querySelector('.sprint__level') as HTMLInputElement;
    this.buttonStartSprint.addEventListener('click', () => {
      if (this.sprintLevel) { sprintSettings.setLevelFromSelect(this.sprintLevel.value); }
      location.hash = '#sprint';
    });
  }
}

export default ModuleController;
