/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

import { soundClickAudio } from './supporting-func';

class ListenerAudioCall {
  open(): void {
    document.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).classList.contains('btn-sound')) {
        soundClickAudio();
      }
    });
  }
}

const listenerAudioCall = new ListenerAudioCall();
export default listenerAudioCall;
