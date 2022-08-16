/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */

import { ModuleView } from '../view/viewSprint';
import { api } from '../api/api';
import { IWord } from '../types/types';
import SprintGamePage from '../pages/sprint/index';
import { randomInteger } from '../utils/func';

export class ModuleModel {
  myModuleView!: ModuleView;

  level: number = SprintGamePage.level;

  pages!: number[];

  active20Words !: IWord[];

  init(view: ModuleView):void {
    this.myModuleView = view;
    this.fillAndSortPages();
    this.getWords();
  }

  fillAndSortPages() {
    this.pages = [];
    for (let i = 0; i < 30; i++) {
      this.pages.push(i);
    }
    this.pages.sort(() => 0.5 - Math.random());
  }

  async getWords() {
    const res = await api.getWords(this.level, this.pages[0]) as IWord[];
    this.active20Words = Array.from(res);
    console.log(this.active20Words);
    const translation = this.generateTranslation();
    const { word } = this.active20Words[0];
    this.myModuleView.renderWord(word, translation);
  }

  generateTranslation() {
    const i = randomInteger(0, 19);
    return this.active20Words[i].wordTranslate;
  }

  checkAnswer(answer:boolean) {
    console.log(answer);
  }
}

// export default ModuleModel;
