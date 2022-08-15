import Header from '../components/header';
import Footer from '../components/footer';

const AboutTeamPage = {
  classname: 'team-page',
  render(): string {
    return `
    ${Header.render()}
    <div class = '${this.classname}-conteiner'></div>
    ${Footer.render()}
    `;
  },
};

export default AboutTeamPage;
