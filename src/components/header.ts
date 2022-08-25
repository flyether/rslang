/* eslint-disable import/no-cycle */
import showUser from '../functional/show-user';
import { hashes } from './hashes';

const Header = {

  render(customClass = ''): string {
    return `
    <div id="modal-result-wrapper">
    <div id="overlay"></div>
    <div id="modal-window">
      <div class="wrapper">
       
      </div>
      <div id="btn-close"></div>
    </div>
  </div>
      <header class="header ${customClass}" id="header">
        <h1 class="header__logo"><a href="">RSLang</a></h1>
        <div class="header__auth">
          ${showUser(true)}
          <div class="modal__auth"></div>
        </div>
        <nav class="header__menu">
          <ul class="menu__list">
            <li class="menu__item"><a href="${hashes.main}" class="menu__main menu__item_active">Главная</a></li>
            <li class="menu__item"><a href="${hashes.textbook}" class="menu__textbook">Учебник</a></li>
            <li class="menu__item">
              <a href="${hashes.statistics}" class="menu__statictics menu__item_disable">Статистика</a>
            </li>
            <li class="menu__item"><a href="${hashes.audiocall}" class="menu__audiocall">Аудиовызов</a></li>
            <li class="menu__item"><a href="${hashes.aboutsprint}" class="menu__sprint">Спринт</a></li>
            <li class="menu__item"><a href="${hashes.team}" class="menu__team">О команде</a></li>
          </ul>
        </nav>
        <div class="burger">
        <div class="wrapper-burger">
          <div class="burger-menu">
            <div class="header__auth">
              ${showUser(true)}
              <div class="modal__auth"></div>
            </div>
            <nav class="header__menu">
              <ul class="menu__list">
                <li class="menu__item">
                  <a href="${hashes.main}" class="menu__main menu__item_active">Главная</a></li>
                <li class="menu__item"><a href="${hashes.textbook}" class="menu__textbook">Учебник</a></li>
                <li class="menu__item">
                  <a href="${hashes.statistics}" class="menu__statictics menu__item_disable">Статистика</a>
                </li>
                <li class="menu__item"><a href="${hashes.audiocall}" class="menu__audiocall">Аудиовызов</a></li>
                <li class="menu__item"><a href="${hashes.sprint}" class="menu__sprint">Спринт</a></li>
                <li class="menu__item"><a href="${hashes.team}" class="menu__team">О команде</a></li>
              </ul>
            </nav>
            </div>
          </div>
        </div>
      </header>
    `;
  },
};

export default Header;
