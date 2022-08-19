/* eslint-disable linebreak-style */
/* eslint-disable max-len */
export const startScrinAudioCall = {
  hashes: {

    audiocallGame: '#audiocallGame',

  },

  render(): string {
    return /* html */` 

<div class="audio-call"> 
  <p class="audio-call__text">В игре аудиовызов вамнужно выбрать правильный перевод слова. <br>

  Чтобы играть с помощью клавиатуры, используй клавиши
  1, 2, 3, 4, 5 - чтобы дать ответ,
  space - для воспроизведения звука,
  enter - чтобы пропустить вопрос,
  стрелка-вправо - чтобы перейти к следующему вопросу.<br> <br>
  Выбери уровень сложности:</p>
  <button id="level1" type="button"  class="btn-level"><a class="menu__main menu__item_active" href="${this.hashes.audiocallGame}" >Уровень 1</a></button>
 
  <button id="level2" type="button"  class="btn-level"><a class=" link menu__main menu__item_active" href="${this.hashes.audiocallGame}" >Уровень 2</a></button>

  <button id="level3" type="button"  class="btn-level"><a class="menu__main menu__item_active" href="${this.hashes.audiocallGame}" >Уровень 3</a></button>

  <button id="level4" type="button"  class="btn-level"><a class=" levelmenu__main menu__item_active" href="${this.hashes.audiocallGame}" >Уровень 4</a></button>

  <button id="level5" type="button"  class="btn-level"><a class="menu__main menu__item_active" href="${this.hashes.audiocallGame}" >Уровень 5</a></button>

  <button id="level6" type="button"  class="btn-level"><a class="menu__main menu__item_active" href="${this.hashes.audiocallGame}" >Уровень 6</a></button>
</div>
`;
  },
};
