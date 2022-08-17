/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/indent */

import { apiPath } from '../../../api/api-path';
import { audio, printBtnString } from './supporting-func';

export const gameArea = ` 
 <div class="audio-container-game"> 
    <div class="btn-sound"> <div class="sound-wrapper"> 
    <audio class="audio" src="${apiPath + audio}" autoplay></audio> </div></div>
    <div class="button-container">${printBtnString()}</div>
  </div>
 `;
