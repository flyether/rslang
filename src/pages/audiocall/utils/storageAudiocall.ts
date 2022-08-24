/* eslint-disable linebreak-style */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */

import { IStorageAudiocall } from '../../../types/types';

export let storageAudiocall:IStorageAudiocall = {
  arrayWrongWords: [],
  round: 0,
  score: 0,
  arrayLevel: [],
  group: 0,
  page: 0,
  level: 1,
  words: [],
  noRepeat: [],

};

export function clearLocalStorage(): void {
  storageAudiocall = {};
}
