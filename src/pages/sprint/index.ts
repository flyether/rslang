/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
import Header from '../../components/header';
import { initSprintMVC } from './initSprintMVC';
import { Buttons } from '../../components/smallComponents/buttons';

import parrots from '../../assets/parrots.jpg';
import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/arrow-right.png';

import rightAnswerAudio from '../../assets/audio/right-answer.mp3';
import wrongAnswerAudio from '../../assets/audio/wrong-answer.mp3';
import timeoverAudio from '../../assets/audio/time-over.mp3';

const SprintGamePage = {
  classname: 'sprint',
  render(): string {
    return `
    ${Header.render()}
    <div class = '${this.classname}-conteiner'>
      <div class="sprint__score">0</div>
      <div class="sprint__timer">60</div>
      <div class="sprint__field">
        <div class="field__title">
          <div class="title__count"></div>
          <div class="title__text">+ 10 очков за следующее слово</div>
        </div>
        <div class="field__content">
          <div class="content__img"><img src='${parrots}' alt="parrots"></div>
          <div class="content__question">
          <div class="content__word">
            <div class="question__word"></div>
            <div class="word__sound"></div>
            <audio id="sprint__say__word" src=""></audio>
          </div>
          <div class="question__translation"></div>
          </div>
        </div>
        <div class="field__buttons">${Buttons.create('Неверно', 'button__sprint__false', false)}${Buttons.create('Верно', 'button__sprint__true', false)}</div>
      </div>
      <div class="sprint__arrows">
        <img src='${arrowLeft}' alt="arrow">
        <img src='${arrowRight}' alt="arrow">
      </div>
      <audio id="audio__right" src="${rightAnswerAudio}"></audio>
      <audio id="audio__wrong" src="${wrongAnswerAudio}"></audio>
      <audio id="audio__timeover" src="${timeoverAudio}"></audio>
    </div>`;
  },
  initMVC(): void {
    initSprintMVC();
  },
};

export default SprintGamePage;
