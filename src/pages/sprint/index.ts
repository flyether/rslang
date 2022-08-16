import Header from '../../components/header';
import Footer from '../../components/footer';

const SprintGamePage = {
  classname: 'sprint',
  render(): string {
    return `
    ${Header.render()}
    <div class = '${this.classname}-conteiner'></div>
    ${Footer.render()}`;
  },
};

export default SprintGamePage;
