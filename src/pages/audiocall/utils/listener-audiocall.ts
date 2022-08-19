/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable class-methods-use-this */

import { apiPath } from '../../../api/api-path';
import { soundAudio, wordObj } from './supporting-func';
import audioPathWrong from '../../../assets/audio/wrong-answer.mp3';
import audioPathRight from '../../../assets/audio/right-answer.mp3';
import { IGroupPageObj } from '../../../types/types';
import { storage } from '../../../functional/storage';

let round = 0;
let score = 0;
let arrayWrongWords: string[] = [];
if (localStorage.getItem('arrayWrongWords') === null) {
  localStorage.setItem('arrayWrongWords', JSON.stringify(arrayWrongWords));
}
if (localStorage.getItem('score') === null) {
  localStorage.setItem('score', JSON.stringify(score));
}
if (localStorage.getItem('round') === null) {
  localStorage.setItem('round', JSON.stringify(round));
}

class ListenerAudioCall {
  open(): void {
    document.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).classList.contains('btn-sound')) {
        soundAudio((apiPath + wordObj.audio));
      }

      if ((e.target as HTMLElement).classList.contains('btn-translation')) {
        round = Number(localStorage.getItem('round')) + 1;
        localStorage.setItem('round', round.toString());
        if ((e.target as HTMLElement).id === wordObj.wordTranslate) {
          score = Number(localStorage.getItem('score')) + 1;
          localStorage.setItem('score', score.toString());
          soundAudio((audioPathRight));
          (e.target as HTMLElement).classList.add('btn-translation-right');

          setTimeout(() => {
            window.location.reload();
          },
          1000);
        } else {
          (e.target as HTMLElement).classList.add('btn-translation-wrong');
          arrayWrongWords = JSON.parse(localStorage.getItem('arrayWrongWords')!);

          arrayWrongWords.push(wordObj.word);
          localStorage.setItem('arrayWrongWords', JSON.stringify(arrayWrongWords));
          soundAudio((audioPathWrong));
          setTimeout(() => {
            window.location.reload();
          },
          1000);
        }
      }

      if ((e.target as HTMLElement).classList.contains('restart')) {
        window.location.reload();
      }

      if ((e.target as HTMLElement).classList.contains('btn-level')) {
        if ((e.target as HTMLElement).id === 'level1') {
          storage.level = 1;
        }
        if ((e.target as HTMLElement).id === 'level2') {
          storage.level = 2;
          console.log(storage.level);
        }
        if ((e.target as HTMLElement).id === 'level3') {
          storage.level = 3;
        }
        if ((e.target as HTMLElement).id === 'level4') {
          storage.level = 4;
        }
        if ((e.target as HTMLElement).id === 'level5') {
          storage.level = 5;
        }
        if ((e.target as HTMLElement).id === 'level6') {
          storage.level = 6;
        }
      }
    });
  }
}

const listenerAudioCall = new ListenerAudioCall();
export default listenerAudioCall;
