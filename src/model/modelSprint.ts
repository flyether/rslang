/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */

import { ModuleView } from '../view/viewSprint';
import { api } from '../api/api';
import {
  apiPath, wordsEndpoint, usersEndpoint, signIn,
} from '../api/api-path';

export class ModuleModel {
  myModuleView!: ModuleView;

  init(view: ModuleView):void {
    this.myModuleView = view;
    this.getWord();
  }

  async getWord() {
    const res = await api.getWords(0, 1);
    console.log(res);
  }

  checkAnswer(answer:boolean) {
    console.log(answer);
  }
}

// export default ModuleModel;
