/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */

/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable class-methods-use-this */

import { apiPath } from '../../../api/api-path';
// import {
//   clearLocalStorage, soundAudio, wordObj, storageAudiocall,
// } from './supporting-func';
import audioPathWrong from '../../../assets/audio/wrong-answer.mp3';
import audioPathRight from '../../../assets/audio/right-answer.mp3';
import { soundAudio, support } from './t';

console.log(support.words, 'support.words в листнере');

class ListenerAudioCall {
  keyboard(): void {
    document.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        soundAudio((apiPath + support.wordObj.audio));
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
        soundAudio((apiPath + support.wordObj.audio));
      }

      if ((e.target as HTMLElement).classList.contains('btn-translation')) {
        if (support.round!) { support.round = 1; } else {
          support.round = support.round! + 1;
          if ((e.target as HTMLElement).id === support.wordObj.wordTranslate) {
            rightAnswerFunc((e.target as HTMLElement)!);
          } else {
            wrongAnswerFunc((e.target as HTMLElement));
          }
        }
      }

      if ((e.target as HTMLElement).classList.contains('restart')) {
        support.clearLocalStorage();
        window.location.reload();
      }
      if ((e.target as HTMLElement).classList.contains('level-textbook')) {
        const locationHash = window.location.hash.split('/');
        const unit = +locationHash[1];
        const page = +locationHash[2];
        support.level = unit + 1;
        support.page = page;
        support.textbook = true;
      }
      if ((e.target as HTMLElement).classList.contains('level-change')) {
        support.clearLocalStorage();
      }
      if ((e.target as HTMLElement).classList.contains('btn-level')) {
        const dataN = Number((e.target as HTMLElement).id.replace(/[^0-9]/g, ''));
        if ((e.target as HTMLElement).id === (`level${dataN}`)) {
          support.clearLocalStorage();
          support.level = dataN;
          support.level = dataN;
        }
      }
    });
  }
}

function rightAnswerFunc(el: HTMLElement) {
  support.score! += 1;
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
  if (rightAnswer) {
    rightAnswer.innerHTML = `<div class="answer"><img class="answer-img" src="${apiPath + support.wordObj.image}" alt="правильный ответ"><br>${support.wordObj.word} — ${support.wordObj.wordTranslate} </div>`;
    support.arrayWrongWords!.push(support.wordObj.word);
    soundAudio((audioPathWrong));
    setTimeout(() => {
      window.location.reload();
    },
    2200);
  }
}

const listenerAudioCall = new ListenerAudioCall();
export default listenerAudioCall;
