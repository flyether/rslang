/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable class-methods-use-this */

import { apiPath } from '../../../api/api-path';
import { clearLocalStorage, soundAudio, wordObj } from './supporting-func';
import audioPathWrong from '../../../assets/audio/wrong-answer.mp3';
import audioPathRight from '../../../assets/audio/right-answer.mp3';
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
  keyboard(): void {
    document.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        soundAudio((apiPath + wordObj.audio));
      }
      const dataN = Number(e.key);
      if (e.key === `Numpad ${dataN}` || e.key === `${dataN}`) {
        (document.querySelectorAll(`.btn-translation[data-num="${dataN}"]`)).forEach((elem) => {
          (elem as HTMLButtonElement).click();
        });
      }
    });
  }

  clik(): void {
    document.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).classList.contains('btn-sound')) {
        soundAudio((apiPath + wordObj.audio));
      }

      if ((e.target as HTMLElement).classList.contains('btn-translation')) {
        round = Number(localStorage.getItem('round')) + 1;
        localStorage.setItem('round', round.toString());
        if ((e.target as HTMLElement).id === wordObj.wordTranslate) {
          rightAnswerFunc((e.target as HTMLElement)!);
        } else {
          wrongAnswerFunc((e.target as HTMLElement));
        }
      }

      if ((e.target as HTMLElement).classList.contains('restart')) {
        localStorage.removeItem('page');
        window.location.reload();
      }
      if ((e.target as HTMLElement).classList.contains('level-textbook')) {
        const locationHash = window.location.hash.split('/');
        const unit = +locationHash[1];
        const page = +locationHash[2];
        storage.level = unit + 1;
        console.log(unit, page, 'unit, page');
        localStorage.setItem('level', `${unit + 1}`);
        localStorage.setItem('page', `${page}`);
        localStorage.setItem('textbook', 'true');
        clearLocalStorage();
      }
      if ((e.target as HTMLElement).classList.contains('btn-level')) {
        const dataN = Number((e.target as HTMLElement).id.replace(/[^0-9]/g, ''));
        if ((e.target as HTMLElement).id === (`level${dataN}`)) {
          storage.level = dataN;
          localStorage.setItem('level', `${dataN}`);
          clearLocalStorage();
        }
      }
    });
  }
}

function rightAnswerFunc(el: HTMLElement) {
  score = Number(localStorage.getItem('score')) + 1;
  localStorage.setItem('score', score.toString());
  soundAudio((audioPathRight));
  el.classList.add('btn-translation-right');
  setTimeout(() => {
    window.location.reload();
  },
  1200);
}

function wrongAnswerFunc(el: HTMLElement) {
  el.classList.add('btn-translation-wrong');
  const rightAnswer = document.querySelector('.right-answer') as HTMLElement;
  arrayWrongWords = JSON.parse(localStorage.getItem('arrayWrongWords')!);
  if (rightAnswer) {
    rightAnswer.innerHTML = `<div class="answer"><img class="answer-img" src="${apiPath + wordObj.image}" alt="правильный ответ"><br>${wordObj.word} — ${wordObj.wordTranslate} </div>`;
    arrayWrongWords.push(wordObj.word);
    localStorage.setItem('arrayWrongWords', JSON.stringify(arrayWrongWords));
    soundAudio((audioPathWrong));
    setTimeout(() => {
      window.location.reload();
    },
    2200);
  }
}

const listenerAudioCall = new ListenerAudioCall();
export default listenerAudioCall;
