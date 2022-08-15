import showUser from '../functional/show-user';

const Header = {
  hashes: {
    main: '#main',
    textbook: '#textbook',
    statistics: '#statistics',
    audiocall: '#audiocall',
    sprint: '#sprint',
    team: '#team',
  },

  render(customClass = ''): string {
    return `
    <div id="modal-result-wrapper">
    <div id="overlay"></div>
    <div id="modal-window">
      <div class="wrapper">
       
      </div>
      <div id="btn-close">закрыть</div>
    </div>
  </div>
      <header class="header ${customClass}" id="header">
        <h1 class="header__logo"><a href="">RSLang</a></h1>
        <div class="header__auth">
          <button class="authorization">Войти</button>
          <div class="modal__auth"></div>
        </div>
        <nav class="header__menu">
          <ul class="menu__list">
            <li class="menu__item"><a href="${this.hashes.main}" class="menu__main menu__item_active">Главная</a></li>
            <li class="menu__item"><a href="${this.hashes.textbook}" class="menu__textbook">Учебник</a></li>
            <li class="menu__item">
              <a href="${this.hashes.statistics}" class="menu__statictics menu__item_disable">Статистика</a>
            </li>
            <li class="menu__item"><a href="${this.hashes.audiocall}" class="menu__audiocall">Аудиовызов</a></li>
            <li class="menu__item"><a href="${this.hashes.sprint}" class="menu__sprint">Спринт</a></li>
            <li class="menu__item"><a href="${this.hashes.team}" class="menu__team">О команде</a></li>
          </ul>
        </nav>
      </header>
    `;
  },
};

export default Header;
