/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-shadow */

import { api } from '../../../api/api';

class ListenerAudioCall {
  open(): void {
    document.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).classList.contains('btn-sound')) {

      }
    });
  }
}

const listenerAudioCall = new ListenerAudioCall();
export default listenerAudioCall;
