/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */

import {
  apiPath, usersEndpoint, wordsEndpoint, signIn, apiCategory,
} from './api-path';
import {
  IUser, IWord, IUserData, IUserWords, ISettings, IUserWord, IStatistic,
} from '../types/types';
import { storage } from '../functional/storage';

const api = {

  async UpsertsNewStatistics(userId: string, value: IStatistic): Promise<IStatistic | undefined> {
    try {
      const response = await fetch(`${apiPath}${usersEndpoint}/${userId}/statistics`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${storage.user?.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });
      if (response.ok) {
        return await response.json() as IStatistic;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Error updating user statistics');
    }
  },

  async GetsStatistics(userId: string): Promise<IStatistic | undefined> {
    try {
      const response = await fetch(`${apiPath}${usersEndpoint}/${userId}/statistics`,
        {
          method: 'GET',
          credentials: 'same-origin',
          headers: {
            Authorization: `Bearer ${storage.user?.token}`,
          },
        });
      if (response.ok) {
        return await response.json() as IStatistic;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Error getting statistic');
    }
  },

  async getAllUserWords(userId: string): Promise<IUserWord[] | undefined> {
    try {
      const response = await fetch(`${apiPath}${usersEndpoint}/${userId}/${wordsEndpoint}`,
        {
          method: 'GET',
          credentials: 'same-origin',
          headers: {
            Authorization: `Bearer ${storage.user?.token}`,
          },
        });
      if (response.ok) {
        return await response.json() as IUserWord[];
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Error getting words');
    }
  },

  async CreateUserWord(userId: string, wordID: string, value: IUserWords): Promise<IUserWords | undefined> {
    try {
      const response = await fetch(`${apiPath}${usersEndpoint}/${userId}/${wordsEndpoint}/${wordID}`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          Authorization: `Bearer ${storage.user?.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });
      if (response.ok) {
        return await response.json() as IUserWords;
      } else {
        console.log(response.statusText);
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Error creating user word');
    }
  },

  async UpdateUserWord(userId: string, wordID: string, value: IUserWords): Promise<IUserWords | undefined> {
    try {
      const response = await fetch(`${apiPath}${usersEndpoint}/${userId}/${wordsEndpoint}/${wordID}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${storage.user?.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });
      if (response.ok) {
        return await response.json() as IUserWords;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Error updating user word');
    }
  },

  async DeleteUserWord(userId: string, wordID: string): Promise<void> {
    try {
      await fetch(`${apiPath}${usersEndpoint}/${userId}/${wordsEndpoint}/${wordID}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${storage.user?.token}`,
        },
      });
    } catch (error) {
      throw new Error('Error deleting user word');
    }
  },

  async GetUserAggregatedWordById(userId: string, wordID: string): Promise<IUserWords | undefined> {
    try {
      const response = await fetch(`${apiPath}${usersEndpoint}/${userId}/aggregatedWords/${wordID}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${storage.user?.token}`,
          },
        });
      if (response.ok) {
        return await response.json() as IUserWords;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Error getting user aggregated word');
    }
  },

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
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('length must be at least 8 characters long');
    }
  },

  async getUser(id: string): Promise<IUser | undefined> {
    try {
      const response = await fetch(`${apiPath}${usersEndpoint}/${id}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${storage.user?.token}`,
          },
        });
      if (response.ok) {
        return await response.json() as IUser;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
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
        return await response.json();
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Could not find user');
    }
  },

  async getWords(group: number, page: number): Promise<IWord[] | undefined> {
    try {
      const response = await fetch(`${apiPath}${wordsEndpoint}?group=${group}&page=${page}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${storage.user?.token}`,
          },
        });
      if (response.ok) {
        return await response.json() as IWord[];
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error("Can't get words");
    }
  },

  async getWord(id: string): Promise<IWord | undefined> {
    try {
      const response = await fetch(`${apiPath}${wordsEndpoint}/${id}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${storage.user?.token}`,
          },
        });
      if (response.ok) {
        return await response.json() as IWord;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error("Can't get word");
    }
  },
};

export { api };
