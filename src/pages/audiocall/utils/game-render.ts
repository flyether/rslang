/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/indent */

import { apiPath } from '../../../api/api-path';
import { getSound } from '../../../functional/get-parts-word';

//   const randomId = String(Math.floor(Math.random() * (200 - 1)) + 1);

const soundWrapper = `<div class="sound-wrapper"> 
     `
   + `<audio class="audio" src="${apiPath + getSound()}" autoplay></audio> </div>`;

export const gameArea = ` 
 <div class="audio-container-game"> 
    <div class="btn-sound"> ${soundWrapper}</div>
    <div class="button-container"> Тут будут кнопки </div>
  </div>
 `;
