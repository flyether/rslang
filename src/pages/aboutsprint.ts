import Header from '../components/header';
import Footer from '../components/footer';
import { Buttons } from '../components/smallComponents/buttons';

const AboutSprintGamePage = {
  classname: 'aboutsprint',
  render(): string {
    return `
    ${Header.render()}
    <div class = '${this.classname}-conteiner'>
      <h2 class='sprint__title'>Спринт</h2>
      <div class="sprint__rules">
        <p class="sprint__text">Игра Спринт поможет тебе проверить как хорошо ты знаешь слова.<br>
        Игра длится 1 минуту или пока не закончаться слова.<br>
        Чтобы дать ответ, кликай по нему мышкой или нажимай клавиши-стрелки.</p>
        <p>Выбери уровень сложности</p>
        <select class="sprint__level">
          <option value="level1">Уровень 1</option>
          <option value="level2">Уровень 2</option>
          <option value="level3">Уровень 3</option>
          <option value="level4">Уровень 4</option>
          <option value="level5">Уровень 5</option>
          <option value="level6">Уровень 6</option>
        </select>
        ${Buttons.create('Начать', 'button__start__sprint', false)}
      </div>
    </div>
    ${Footer.render()}`;
  },
};

export default AboutSprintGamePage;
