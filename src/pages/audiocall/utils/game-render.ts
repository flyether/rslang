/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */

import { apiPath } from '../../../api/api-path';
// import { printBtnString, wordObj } from './supporting-func';
import { support } from './t';

// export const gameArea = `
//  <div class="audio-container-game">
//     <div class="btn-sound">
//       <div class="sound-wrapper">
//       <audio class="audio" src="${apiPath + support.wordObj.audio}" autoplay></audio>
//       </div>
//     </div>

//     <div class="right-answer"></div>
//     <div class="button-container"></div>
//   </div>
//  `;

export const gameArea = ` 
 <div class="audio-container-game"> 
    <div class="btn-sound">
      <div class="sound-wrapper"> 
      <audio class="audio" src="${apiPath + support.wordObj.audio}" autoplay></audio> 
      </div>
    </div>
    
    <div class="right-answer"></div>
    <div class="button-container"><button data-num="" type="button" id="" class="btn-translation"></button> </div>
    <div class="button-container"><button data-num="" type="button" id="" class="btn-translation"></button> </div>
    <div class="button-container"><button data-num="" type="button" id="" class="btn-translation"></button> </div>
    <div class="button-container"><button data-num="" type="button" id="" class="btn-translation"></button> </div>
    <div class="button-container"><button data-num="" type="button" id="" class="btn-translation"></button> </div>
    
  </div>
 `;
