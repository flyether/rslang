import Header from '../../components/header';
import Footer from '../../components/footer';

const AudiocallGamePage = {
  classname: 'audiocall',
  render(): string {
    return `
      ${Header.render()}
      <div class = 'audio-container </div>;
      ${Footer.render()}
     `;
  },
};

export default AudiocallGamePage;
