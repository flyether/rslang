import Header from '../../components/header';
import Footer from '../../components/footer';

const StatisticsPage = {
  classname: 'statistics',
  render(): string {
    return `
    ${Header.render()}
    <div class = '${this.classname}-conteiner'>
      <ul class="statistics__list">
        <li class="statistics__item statistics__textbook statistics__item_active">Учебник</li>
        <li class="statistics__item statistics__audiocall">Мини-игра 'Аудиовызов'</li>
        <li class="statistics__item statistics__sprint">Мини-игра 'Спринт'</li>
      </ul>
      <div class="statistics__chart">
        <canvas id="chart1" width="500" height="400"></canvas>
      </div>
    </div>
    ${Footer.render()}`;
  },
};

export default StatisticsPage;
