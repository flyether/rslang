import Header from '../../components/header';
import Footer from '../../components/footer';

const StatisticsPage = {
  classname: 'statistics',
  render(): string {
    return `
    ${Header.render()}
    <div class = '${this.classname}-conteiner'></div>
    ${Footer.render()}`;
  },
};

export default StatisticsPage;
