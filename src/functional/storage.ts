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
    if (localStorage.getItem('word')) {
      this.word = JSON.parse(localStorage.getItem('word') as string);
    } else {
      this.word = {
        id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
      };
    }
    if (localStorage.getItem('words')) {
      this.words = JSON.parse(localStorage.getItem('words') as string);
    } else {
      this.words = [];
    }
    const [w] = JSON.parse(localStorage.getItem('words') as string);
    this.userWord = w;
    console.log(w);
  }
}

export const storage = new Storage();
