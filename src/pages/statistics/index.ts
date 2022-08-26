/* eslint-disable import/no-cycle */
import Header from '../../components/header';
import Footer from '../../components/footer';
import { initStatisticsMVC } from './initStatisticsMVC';

const StatisticsPage = {
  classname: 'statistics',
  render(): string {
    return `
    ${Header.render()}
    <div class = '${this.classname}-conteiner'>
        <ul class="statistics__kinds">
          <li class="statistics__kind statistics__kind_active statistics__day">Статистика за день</li>
          <li class="statistics__kind statistics__alltime">Статистика за все время</li>
        </ul>
        <ul class="statistics__list">
          <li class="statistics__item statistics__textbook statistics__item_active">Учебник</li>
          <li class="statistics__item statistics__audiocall">Мини-игра 'Аудиовызов'</li>
          <li class="statistics__item statistics__sprint">Мини-игра 'Спринт'</li>
        </ul>
        <div class="statistics__div">

        </div>
    </div>
    ${Footer.render()}`;
  },
  initMVC(): void {
    initStatisticsMVC();
  },
};

export default StatisticsPage;
