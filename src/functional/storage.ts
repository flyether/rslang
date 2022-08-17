/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

import { IUser, IUserData, IWord } from 'types/types';

class Storage {
  user?: IUserData;

  word?: IWord;

  constructor() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user') as string);
    } else {
      this.user = {
        message: '', token: '', refreshToken: '', userId: '', name: '',
      };
    }
    if (localStorage.getItem('word')) {
      this.word = JSON.parse(localStorage.getItem('word') as string);
    } else {
      this.word = {
        id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
      };
    }
  }
}

export const storage = new Storage();
