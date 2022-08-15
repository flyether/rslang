/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

import { IUser, IUserData } from 'types/types';

class Storage {
  users?: Array<IUserData>;

  user?: IUserData;

  constructor() {
    this.users = [];
    if (localStorage.getItem('users')) {
      this.users = JSON.parse(localStorage.getItem('users') as string);
    }
    this.user = {
      message: '', token: '', refreshToken: '', userId: '', name: '',
    };
  }
}

export const storage = new Storage();
