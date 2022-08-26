import Header from '../../components/header';
import Footer from '../../components/footer';
import { startScrinAudioCall } from './start-audiocall';

const AudiocallGamePage = {
  classname: 'audiocall',
  render(): string {
    return `
      ${Header.render()}
      <div class = 'audio-container ${this.classname}-conteiner'> ${startScrinAudioCall.render()}</div>;
      ${Footer.render()}
     `;
  },
};

export default AudiocallGamePage;
