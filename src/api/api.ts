/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */

import {
  apiPath, usersEndpoint, wordsEndpoint, signIn,
} from './api-path';
import { IUser, IWord, IUserData } from '../types/types';
import { storage } from '../functional/storage';
import showUser from '../functional/show-user';

const api = {

  async createNewUser(name: string, email: string, password: string): Promise<IUser | undefined> {
    try {
      const response = await fetch(`${apiPath}${usersEndpoint}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),

      });
      if (response.ok) {
        return await response.json();
      }

      return await Promise.reject(new Error(response.statusText));
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
      return await Promise.reject(new Error(response.statusText));
    } catch (error) {
      throw new Error('User not found');
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
        // storage.user = await response.json();
        showUser();
        return await response.json();
      }
      return await Promise.reject(new Error(response.statusText));
    } catch (error) {
      throw new Error('Could not find user');
    }
  },

  async getWords(group: number, page: number): Promise<IWord[] | void> {
    try {
      const response = await fetch(`${apiPath}${wordsEndpoint}?group=${group}&page=${page}`,
        { method: 'GET' });
      if (response.ok) {
        return await response.json() as IWord[];
      }
      return await Promise.reject(new Error(response.statusText));
    } catch (error) {
      throw new Error("Can't get words");
    }
  },

};

export { api };
