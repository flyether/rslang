/* eslint-disable import/prefer-default-export */

import {
  ISettings, IUserData, IUserWords, IWord,
} from 'types/types';

class Storage {
  user?: IUserData;

  word?: IWord;

  words?: IWord[];

  level?: number;

  userWord?: IUserWords;

  settings?: ISettings;

  round?: number;

  constructor() {
    // this.userWord = {
    //   difficulty: 'нужный уровень',
    //   optional: this.word,
    // };
    if (localStorage.getItem('round')) {
      this.round = Number(JSON.parse(localStorage.getItem('user') as string));
    }
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user') as string);
    } else {
      this.user = {
        message: '', token: '', refreshToken: '', userId: '', name: '',
      };
    }

    this.word = {
      id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
    };

    this.words = [];
  }
}

export const storage = new Storage();
