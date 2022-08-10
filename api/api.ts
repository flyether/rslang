/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable consistent-return */

import { response } from 'express';
import {
  apiPath, usersEndpoint, wordsEndpoint, signIn,
} from './api-path';
import { IUser, IWord, IUserData } from './interfaces';

const api = {

  async createNewUser(name: string, email: string, password: string): Promise<IUser | undefined> {
    try {
      const response = await fetch(`${apiPath}${usersEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      throw new Error('length must be at least 8 characters long');
    }
  },

  async getUser(id: string): Promise<IUser | undefined> {
    try {
      const response = await fetch(`${apiPath}${usersEndpoint}/${id}`,
        { method: 'GET' });
      if (response.ok) {
        return await response.json() as IUser;
      }
    } catch (error) {
      console.log(error);
    }
  },

  async userSignIn(email: string, password: string): Promise<IUserData | undefined> {
    try {
      const response = await fetch(`${apiPath}${signIn}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      throw new Error('Could not find user');
    }
  },

  async getWords(group: number, page:number): Promise<IWord[] | void> {
    try {
      const response = await fetch(`${apiPath}${wordsEndpoint}?group=${group}&page=${page}`,
        { method: 'GET' });
      if (response.ok) {
        return await response.json() as IWord[];
      }
    } catch (error) {
      throw new Error("Can't get words");
    }
  },

};

export { api };
