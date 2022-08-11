const Header = {

  render: (customClass = ''):string => `
  <div id="modal-result-wrapper">
    <div id="overlay"></div>
    <div id="modal-window">
      <div class="wrapper">
        <form class="form-signin">       
          <h2 class="form-signin-heading">Please login</h2>
            <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
            <input type="password" class="form-control" name="password" placeholder="Password" required=""/>      
            <label class="checkbox">
            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
            </label>
          <button class="btn" id="autoriztionBtn" type="submit">Login</button>   
        </form>
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
            <li class="menu__item menu__item_active"><a href="">Главная</a></li>
            <li class="menu__item"><a href="">Учебник</a></li>
            <li class="menu__item"><a href="">Статистика</a></li>
            <li class="menu__item"><a href="">Аудиовызов</a></li>
            <li class="menu__item"><a href="">Спринт</a></li>
            <li class="menu__item"><a href="">О команде</a></li>
          </ul>
        </nav>
      </header>
    `,
};

export default Header;
