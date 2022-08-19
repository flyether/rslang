/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */

import { apiPath } from '../../../api/api-path';
import { printBtnString, wordObj } from './supporting-func';

export const gameArea = ` 
 <div class="audio-container-game"> 
    <div class="btn-sound"><div class="sound-wrapper"> 
    <audio class="audio" src="${apiPath + wordObj.audio}" autoplay></audio> </div></div>
    <div class="button-container">
      ${printBtnString()}
    </div>
  </div>
 `;
