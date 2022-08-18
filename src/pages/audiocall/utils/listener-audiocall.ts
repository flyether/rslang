/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

import { apiPath } from '../../../api/api-path';
import AudiocallGame from '../main';
import { soundAudio, wordObj } from './supporting-func';

let score = 0;
localStorage.setItem('score', score.toString());
class ListenerAudioCall {
  open(): void {
    document.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).classList.contains('btn-sound')) {
        soundAudio((apiPath + wordObj.audio));
      }
      if ((e.target as HTMLElement).classList.contains('btn-translation')) {
        const round = Number(localStorage.getItem('round')) + 1;
        localStorage.setItem('round', round.toString());
        if ((e.target as HTMLElement).id === wordObj.wordTranslate) {
          score = Number(localStorage.getItem('score')) + 1;
          localStorage.setItem('score', score.toString());
          soundAudio((apiPath + wordObj.audio));
          (e.target as HTMLElement).classList.add('btn-translation-right');
          AudiocallGame.render();
        } else {
          (e.target as HTMLElement).classList.add('btn-translation-wrong');
          soundAudio((apiPath + wordObj.audio));
          AudiocallGame.render();
        }
      }
    });
  }
}

const listenerAudioCall = new ListenerAudioCall();
export default listenerAudioCall;
