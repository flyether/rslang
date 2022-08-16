/* eslint-disable import/no-cycle */
import Header from '../../components/header';
import { initSprintMVC } from './initSprintMVC';
import { Buttons } from '../../components/smallComponents/buttons';

import parrots from '../../assets/parrots.jpg';
import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/arrow-right.png';

const SprintGamePage = {
  classname: 'sprint',
  level: '',
  render(): string {
    return `
    ${Header.render()}
    <div class = '${this.classname}-conteiner'>
      <div class="sprint__score">0</div>
      <div class="sprint__timer">60</div>
      <div class="sprint__field">
        <div class="field__title">
          <div class="title__count"></div>
          <div class="title__text">+</div>
        </div>
        <div class="field__content">
          <div class="content__img"><img src='${parrots}' alt="parrots"></div>
          <div class="content__question">Questions</div>
        </div>
        <div class="field__buttons">${Buttons.create('Неверно', 'button__sprint__false', false)}${Buttons.create('Верно', 'button__sprint__true', false)}</div>
      </div>
      <div class="sprint__arrows">
        <img src='${arrowLeft}' alt="arrow">
        <img src='${arrowRight}' alt="arrow">
      </div>
    </div>`;
  },
  initMVC() {
    initSprintMVC();
  },
  saveLevel(level:string) {
    this.level = level;
    console.log(this.level);
  },

};

export default SprintGamePage;
