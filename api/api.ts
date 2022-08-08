/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable consistent-return */

import { response } from 'express';
import { apiPath } from './api-path';
import { IUser, IWord } from './interfaces';

const wordsEndpoint = '/words';
const UsersEndpoint = '/users';
const api = {

  async createNewUser(name: string, email: string, password: string): Promise<IUser | undefined> {
    try {
      const response = await fetch(`${apiPath}${UsersEndpoint}`, {
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
      console.log(error);
    }
  },

  async getUser(id: string): Promise<IUser | undefined> {
    try {
      const response = await fetch(`${apiPath}${UsersEndpoint}/${id}`,
        { method: 'GET' });
      if (response.ok) {
        return await response.json() as IUser;
      }
    } catch (error) {
      console.log(error);
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
