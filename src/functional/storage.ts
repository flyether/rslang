/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

import { IUser, IUserData } from 'types/types';

class Storage {
  users?: Array<IUserData>;

  user?: IUser;

  constructor() {
    this.users = [];
    this.user = { name: '', email: '', password: '' };
  }
}

export const storage = new Storage();
