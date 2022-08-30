/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable class-methods-use-this */

import { apiPath } from '../../../api/api-path';
import audioPathWrong from '../../../assets/audio/wrong-answer.mp3';
import audioPathRight from '../../../assets/audio/right-answer.mp3';
import { soundAudio, support } from './supporting-func';
import { gameArea } from './game-render';

import { ModuleView } from '../../../view/viewStatistics';
import { StatisticsPageAudiocallShortTeam } from '../../statistics/statisticsShortTerm';
import { getStatisticsDataAudiocallShortTerm } from '../../statistics/statisticsData';

class ListenerAudioCall {
  keyboard(): void {
    document.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        soundAudio((apiPath + support.wordObj!.audio));
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
      if ((e.target as HTMLElement).classList.contains('statistics__audiocall')) {
        const div = document.querySelector('.statistics__div') as HTMLElement;
        getStatisticsDataAudiocallShortTerm();
        div.innerHTML = StatisticsPageAudiocallShortTeam.render();
      }

      if ((e.target as HTMLElement).classList.contains('btn-sound')) {
        soundAudio((apiPath + support.wordObj!.audio));
      }

      if ((e.target as HTMLElement).classList.contains('btn-translation')) {
        support.round!++;
        support.CrateNewWord();
        if ((e.target as HTMLElement).id === support.wordObj!.wordTranslate) {
          support.RightAnsweredWords?.push(support.wordObj!.id);
          support.CheckRight = true;

          rightAnswerFunc((e.target as HTMLElement)!);
        } else {
          support.WrongAnsweredWords?.push(support.wordObj!.word);
          support.deleteWrongWordFromServer();
          wrongAnswerFunc((e.target as HTMLElement));
        }
      }

      if ((e.target as HTMLElement).classList.contains('restart')) {
        support.clearLocalStorage();
        // const audioSection = document.querySelector('.audio-container-game') as HTMLElement;

        // audioSection.outerHTML = gameArea;
        document.querySelector('.game')!.innerHTML = gameArea;
        support.printBtnString();
      }

      if ((e.target as HTMLElement).classList.contains('level-textbook')) {
        const locationHash = window.location.hash.split('/');
        const unit = +locationHash[1];
        const page = +locationHash[2];
        support.level = unit;
        support.page = page - 1;
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
    const garageSection = document.querySelector('.button-container') as HTMLElement;
    garageSection.innerHTML = '';
    support.printBtnString();
    el.classList.remove('btn-translation-right');
  },
  1000);
}

function wrongAnswerFunc(el: HTMLElement) {
  el.classList.add('btn-translation-wrong');
  const rightAnswer = document.querySelector('.right-answer') as HTMLElement;
  if (rightAnswer) {
    rightAnswer.innerHTML = `<div class="answer"><img class="answer-img" src="${apiPath + support.wordObj!.image}" alt="правильный ответ"><br>${support.wordObj!.word} — ${support.wordObj!.wordTranslate} </div>`;
    support.arrayWrongWords!.push(support.wordObj!.word);
    soundAudio((audioPathWrong));
    setTimeout(() => {
      const garageSection = document.querySelector('.button-container') as HTMLElement;
      rightAnswer.innerHTML = '';
      if (garageSection) {
        garageSection.innerHTML = '';
      }
      support.printBtnString();
      el.classList.remove('btn-translation-wrong');
    },
    2200);
  }
}

// console.log(audiocallLocalStorage, 'a в листнере');
const listenerAudioCall = new ListenerAudioCall();
export default listenerAudioCall;
