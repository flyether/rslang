/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

import { IUser, IUserData } from 'types/types';

class Storage {
  users?: Array<IUserData>;

  user?: IUserData;

  id?: string;

  name?: string;

  email?: string;

  constructor() {
    this.email = '';
    this.name = 'Будет юзер позже';
    this.id = '';
    this.users = [];
    this.user = {
      message: '', token: '', refreshToken: '', userId: '', name: '',
    };
  }
}

export const storage = new Storage();
