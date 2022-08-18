/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable class-methods-use-this */

import { apiPath } from '../../../api/api-path';
import AudiocallGame from '../main';
import { soundAudio, wordObj } from './supporting-func';
import audioPathWrong from '../../../assets/audio/wrong-answer.mp3';
import audioPathRight from '../../../assets/audio/right-answer.mp3';
import { gameArea } from './game-render';
import ModuleController from '../../../controller/controller';

let score = 0;
let arrayWrongWords: string[] = [];
localStorage.setItem('score', score.toString());
localStorage.setItem('arrayWrongWords', JSON.stringify(arrayWrongWords));

class ListenerAudioCall {
  open(): void {
    document.addEventListener('click', (e) => {
      const game = document.querySelector('.game') as HTMLElement;
      if ((e.target as HTMLElement).classList.contains('btn-sound')) {
        soundAudio((apiPath + wordObj.audio));
      }
      if ((e.target as HTMLElement).classList.contains('btn-translation')) {
        const round = Number(localStorage.getItem('round')) + 1;
        localStorage.setItem('round', round.toString());
        if ((e.target as HTMLElement).id === wordObj.wordTranslate) {
          score = Number(localStorage.getItem('score')) + 1;
          localStorage.setItem('score', score.toString());
          soundAudio((audioPathRight));
          (e.target as HTMLElement).classList.add('btn-translation-right');
        } else {
          (e.target as HTMLElement).classList.add('btn-translation-wrong');
          arrayWrongWords = JSON.parse(localStorage.getItem('arrayWrongWords')!);
          arrayWrongWords.push(wordObj.word);
          localStorage.setItem('arrayWrongWords', JSON.stringify(arrayWrongWords));
          soundAudio((audioPathWrong));
          // game.innerHTML = '';
          // game.innerHTML = gameArea;
        }
      }
      if ((e.target as HTMLElement).classList.contains('restart')) {
        game.innerHTML = '';
        game.innerHTML = gameArea;
      }
    });
  }
}

const listenerAudioCall = new ListenerAudioCall();
export default listenerAudioCall;
