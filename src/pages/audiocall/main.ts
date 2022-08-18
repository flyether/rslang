/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import { gameArea } from './utils/game-render';

const AudiocallGame = {
  hashes: {

    main: '#main',

  },

  render(): string {
    return `
       <div class = 'container'> <button  type="button"  class="go-main"><a href="${this.hashes.main}" ></a>Вернуться на главную</a></button> ${gameArea}</div>
      `;
  },
};

export default AudiocallGame;
