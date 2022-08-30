import { support } from './utils/supporting-func';

export const startScrinAudioCall = {
  hashes: {

    audiocallGame: '#audiocallGame',

  },

  render(): string {
    let html = '';
    if (support.textbook === true) {
      html = /* html */` 

      <div class="audio-call"> 
        <p class="audio-call__text">В игре аудиовызов вамнужно выбрать правильный перевод слова. <br>
        Для того чтобы прослушать слово еще раз нажмите пробел или на иконку звука.<br>
        Для игры с помощью клавиатуры, использте клавиши
        1, 2, 3, 4, 5  чтобы дать ответ,
        space - для воспроизведения звука.
        </p>
       <a id="leveltextbook" class="btn-level link" href="${this.hashes.audiocallGame}" >Играть</a>
   >
      `;
    } else {
      html = /* html */` 

<div class="audio-call"> 
  <p class="audio-call__text">В игре аудиовызов вамнужно выбрать правильный перевод слова. 
  Для того чтобы прослушать слово еще раз нажмите пробел или на иконку звука.
  Для игры с помощью клавиатуры, использте клавиши
  1, 2, 3, 4, 5  чтобы дать ответ,
  space - для воспроизведения звука.
  Выбери уровень сложности:</p>
  <div class="audio-call__btns">
 <a id="level1" class="btn-level link" href="${this.hashes.audiocallGame}" >Уровень 1</a>
 
 <a id="level2" class="btn-level link" href="${this.hashes.audiocallGame}" >Уровень 2</a>

 <a id="level3" class="btn-level link" href="${this.hashes.audiocallGame}" >Уровень 3</a>

 <a id="level4" class="btn-level link" href="${this.hashes.audiocallGame}" >Уровень 4</a>

 <a id="level5" class="btn-level link" href="${this.hashes.audiocallGame}" >Уровень 5</a>

 <a id="level6" class="btn-level link" href="${this.hashes.audiocallGame}" >Уровень 6</a>
 </div>
`;
    }
    return html;
  },
};
