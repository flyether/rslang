import { gameArea } from './utils/game-render';
import { support } from './utils/supporting-func';

const AudiocallGame = {
  // hashes: {

  //   main: '#main',

  // },

  render(): string {
    support.printBtnString();
    return `
       <div class = 'container'> 
       <a class="go-main " href='#main' >Вернуться на главную</a> 
         <div class = 'game'> ${gameArea} </div>
         
         
         </div>
      `;
  },
};

export { AudiocallGame };
