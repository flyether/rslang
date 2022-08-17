/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { api } from '../api/api';
import { storage } from './storage';

const id = '5e9f5ee35eb9e72bc21af4ad';

const apiGetWord = api.getWord(id)
  .then((value) => {
    storage.word = value;
    localStorage.setItem('word', JSON.stringify(value));
  }).catch((err) => {
    console.log(err);
  });

function getSound() {
  apiGetWord;
  return storage.word!.audio;
}
function getImg() {
  apiGetWord;
  return storage.word!.image;
}

export { getSound, getImg };
