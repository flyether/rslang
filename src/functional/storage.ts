/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

import { IUser, IUserData } from 'types/types';

class Storage {
  user?: IUserData;

  constructor() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user') as string);
    } else {
      this.user = {
        message: '', token: '', refreshToken: '', userId: '', name: '',
      };
    }
  }
}

export const storage = new Storage();
