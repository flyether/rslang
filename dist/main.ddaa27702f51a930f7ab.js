/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/textbook/textbook.scss":
/*!******************************************!*\
  !*** ./src/pages/textbook/textbook.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/style.sass":
/*!*******************************!*\
  !*** ./src/styles/style.sass ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/api/api-path.ts":
/*!*****************************!*\
  !*** ./src/api/api-path.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


/* eslint-disable linebreak-style */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.signIn = exports.usersEndpoint = exports.wordsEndpoint = exports.apiPath = void 0;
const apiPath = 'https://rslang-learning-english-words.herokuapp.com/';
exports.apiPath = apiPath;
const wordsEndpoint = 'words';
exports.wordsEndpoint = wordsEndpoint;
const usersEndpoint = 'users';
exports.usersEndpoint = usersEndpoint;
const signIn = 'signin';
exports.signIn = signIn;


/***/ }),

/***/ "./src/api/api.ts":
/*!************************!*\
  !*** ./src/api/api.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable consistent-return */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.api = void 0;
const api_path_1 = __webpack_require__(/*! ./api-path */ "./src/api/api-path.ts");
const show_user_1 = __importDefault(__webpack_require__(/*! ../functional/show-user */ "./src/functional/show-user.ts"));
const api = {
    createNewUser(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${api_path_1.apiPath}${api_path_1.usersEndpoint}`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password }),
                });
                if (response.ok) {
                    return yield response.json();
                }
            }
            catch (error) {
                throw new Error('length must be at least 8 characters long');
            }
        });
    },
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${api_path_1.apiPath}${api_path_1.usersEndpoint}/${id}`, { method: 'GET' });
                if (response.ok) {
                    return yield response.json();
                }
            }
            catch (error) {
                throw new Error('User not found');
            }
        });
    },
    userSignIn(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${api_path_1.apiPath}${api_path_1.signIn}`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });
                if (response.ok) {
                    // storage.user = await response.json();
                    (0, show_user_1.default)();
                    return yield response.json();
                }
            }
            catch (error) {
                throw new Error('Could not find user');
            }
        });
    },
    getWords(group, page) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${api_path_1.apiPath}${api_path_1.wordsEndpoint}?group=${group}&page=${page}`, { method: 'GET' });
                if (response.ok) {
                    return yield response.json();
                }
            }
            catch (error) {
                throw new Error("Can't get words");
            }
        });
    },
};
exports.api = api;


/***/ }),

/***/ "./src/components/content.ts":
/*!***********************************!*\
  !*** ./src/components/content.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Content = {
    render: (customClass = '') => `<div class="content ${customClass}" id="content"></div>`,
};
exports["default"] = Content;


/***/ }),

/***/ "./src/components/footer.ts":
/*!**********************************!*\
  !*** ./src/components/footer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Footer = {
    render: (customClass = '') => `<footer class="footer ${customClass}">

              <div class="github-links">
                <a href="https://github.com/flyether" class="github-link">flyether<a>
                <a href="https://github.com/Darina992" class="github-link">Darina992<a>
                <a href="https://github.com/AlenaDoz" class="github-link">AlenaDoz<a>
              </div>
              <span>&#169; 2022</span>
              <a href="https://rs.school/js/" class="rs-link"></a>
            </footer>`,
};
exports["default"] = Footer;


/***/ }),

/***/ "./src/components/header.ts":
/*!**********************************!*\
  !*** ./src/components/header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Header = {
    hashes: {
        main: '#main',
        textbook: '#textbook',
        statistics: '#statistics',
        audiocall: '#audiocall',
        sprint: '#sprint',
        team: '#team',
    },
    render(customClass = '') {
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
exports["default"] = Header;


/***/ }),

/***/ "./src/components/modal.ts":
/*!*********************************!*\
  !*** ./src/components/modal.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


/* eslint-disable linebreak-style */
/* eslint-disable no-debugger */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formRegistration = exports.formLogin = void 0;
exports.formLogin = ` <form class="form-signin" id="auth">       
<h3 class="form-signin-heading">Введите свои данные</h3>

  <input type="email" id="user-email" class="form-control" name="email" placeholder="Email Address" required />
  <input type="password" minlength="8" id="user-password" class="form-control" name="password" placeholder="пароль" required/>      
  
  <button class="btn"  id="button-new-user" type ="button"> Регистрация </button> 
  
<button class="btn" id="autoriztionBtn" type="submit">Войти</button>   
</form>`;
exports.formRegistration = ` <form class="form-signin" id="reg">       
<h3 class="form-signin-heading">Введите свои данные</h3>

  <input type="text" id="user-name" class="form-control" name="user-name" placeholder="Имя пользователя" required="" />
  <input type="email" id="user-email" class="form-control" name="email" placeholder="Email Address" required />
  <input type="password" minlength="8" id="user-password" class="form-control" name="password" placeholder="пароль" required />  

<button class="btn" id="registration_btn" type="submit">Регистрация и вход</button>   
</form>`;


/***/ }),

/***/ "./src/controller/controller.ts":
/*!**************************************!*\
  !*** ./src/controller/controller.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* eslint-disable import/no-named-as-default */
/* eslint-disable no-restricted-globals */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const listener_1 = __importDefault(__webpack_require__(/*! ../functional/listener */ "./src/functional/listener.ts"));
class ModuleController {
    init(container, model) {
        this.myModuleContainer = container;
        this.myModuleModel = model;
        window.addEventListener('hashchange', () => {
            this.updateState();
        });
        // modalAuthorization.open();
        listener_1.default.open();
        this.updateState();
        // window.location.hash = '#main';
    }
    updateState() {
        const hashPageName = window.location.hash.slice(1).toLowerCase();
        this.myModuleModel.updateState(hashPageName);
        this.findMenuElements(hashPageName);
    }
    findMenuElements(hashName) {
        this.menuMain = document.querySelector('.menu__main');
        this.menuTextbook = document.querySelector('.menu__textbook');
        this.menuStatictics = document.querySelector('.menu__statictics');
        this.menuAudiocall = document.querySelector('.menu__audiocall');
        this.menuSprint = document.querySelector('.menu__sprint');
        this.menuTeam = document.querySelector('.menu__team');
        const obj = {
            main: this.menuMain,
            textbook: this.menuTextbook,
            statistics: this.menuStatictics,
            audiocall: this.menuAudiocall,
            sprint: this.menuSprint,
            team: this.menuTeam,
        };
        this.myModuleModel.highlightActiveMenuItem(obj, hashName);
    }
}
exports["default"] = ModuleController;


/***/ }),

/***/ "./src/functional/listener.ts":
/*!************************************!*\
  !*** ./src/functional/listener.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable class-methods-use-this */
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable @typescript-eslint/no-shadow */
const api_1 = __webpack_require__(/*! ../api/api */ "./src/api/api.ts");
const modal_1 = __webpack_require__(/*! ../components/modal */ "./src/components/modal.ts");
class Listener {
    open() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('authorization')) {
                const authorizationBtn = document.querySelector('.authorization');
                const btnCloseModal = document.getElementById('btn-close');
                const overlay = document.getElementById('overlay');
                const modalResultWrapper = document.getElementById('modal-result-wrapper');
                const wrapper = document.querySelector('.wrapper');
                console.log('вот тут работает модальное окно2');
                console.log('вот тут работает модальное окно1');
                wrapper.innerHTML = modal_1.formLogin;
                modalResultWrapper.style.display = 'block';
                const userEmailInput = document.getElementById('user-email');
                const userPasswordInput = document.getElementById('user-password');
                const userNameInput = document.getElementById('user-name');
                if (userEmailInput && userPasswordInput) {
                    const authForm = document.getElementById('auth');
                    if (authForm) {
                        authForm.addEventListener('submit', (e) => {
                            const userEmail = userEmailInput.value;
                            const userPassword = userPasswordInput.value;
                            e.preventDefault();
                            api_1.api.userSignIn(userPassword, userEmail);
                        });
                    }
                }
                const buttonNewUser = document.getElementById('button-new-user');
                if (buttonNewUser) {
                    buttonNewUser.addEventListener('click', (_e) => {
                        wrapper.innerHTML = modal_1.formRegistration;
                        const userEmailInput = document.getElementById('user-email');
                        const userPasswordInput = document.getElementById('user-password');
                        const userNameInput = document.getElementById('user-name');
                        if (userNameInput && userEmailInput && userPasswordInput) {
                            const registrationForm = document.getElementById('reg');
                            if (registrationForm) {
                                registrationForm.addEventListener('submit', (e) => {
                                    const userEmail = userEmailInput.value;
                                    const userPassword = userPasswordInput.value;
                                    const userName = userNameInput.value;
                                    e.preventDefault();
                                    api_1.api.createNewUser(userName, userPassword, userEmail);
                                    // authorization.signIn(userPassword, userEmail);
                                });
                            }
                        }
                    });
                }
                const closeModal = () => {
                    modalResultWrapper.style.display = 'none';
                };
                overlay.addEventListener('click', closeModal);
                btnCloseModal.addEventListener('click', closeModal);
            }
        });
    }
}
const listener = new Listener();
exports["default"] = listener;


/***/ }),

/***/ "./src/functional/show-user.ts":
/*!*************************************!*\
  !*** ./src/functional/show-user.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable linebreak-style */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const storage_1 = __webpack_require__(/*! ./storage */ "./src/functional/storage.ts");
const userShow = `<div class="user-show"> ${storage_1.storage.user.name}</div>`;
function showUser() {
    const heder = document.querySelector('.header__auth');
    const buttonEnter = document.querySelector('.authorization');
    buttonEnter.remove();
    const UserPic = document.createElement('div');
    UserPic.classList.add('user-pic');
    UserPic.innerHTML = userShow;
    heder.append(UserPic);
}
exports["default"] = showUser;


/***/ }),

/***/ "./src/functional/storage.ts":
/*!***********************************!*\
  !*** ./src/functional/storage.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storage = void 0;
class Storage {
    constructor() {
        this.users = [];
        this.user = { name: '', email: '', password: '' };
    }
}
exports.storage = new Storage();


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles/style.sass */ "./src/styles/style.sass");
const controller_1 = __importDefault(__webpack_require__(/*! ./controller/controller */ "./src/controller/controller.ts"));
const model_1 = __importDefault(__webpack_require__(/*! ./model/model */ "./src/model/model.ts"));
const view_1 = __importDefault(__webpack_require__(/*! ./view/view */ "./src/view/view.ts"));
const header_1 = __importDefault(__webpack_require__(/*! ./components/header */ "./src/components/header.ts"));
const content_1 = __importDefault(__webpack_require__(/*! ./components/content */ "./src/components/content.ts"));
const footer_1 = __importDefault(__webpack_require__(/*! ./components/footer */ "./src/components/footer.ts"));
const main_1 = __importDefault(__webpack_require__(/*! ./pages/main */ "./src/pages/main.ts"));
const textbook_1 = __importDefault(__webpack_require__(/*! ./pages/textbook */ "./src/pages/textbook/index.ts"));
const team_1 = __importDefault(__webpack_require__(/*! ./pages/team */ "./src/pages/team.ts"));
const index_1 = __importDefault(__webpack_require__(/*! ./pages/sprint/index */ "./src/pages/sprint/index.ts"));
const index_2 = __importDefault(__webpack_require__(/*! ./pages/audiocall/index */ "./src/pages/audiocall/index.ts"));
const index_3 = __importDefault(__webpack_require__(/*! ./pages/statistics/index */ "./src/pages/statistics/index.ts"));
const components = {
    header: header_1.default,
    content: content_1.default,
    footer: footer_1.default,
};
const routes = {
    main: main_1.default,
    default: main_1.default,
    textbook: textbook_1.default,
    team: team_1.default,
    sprint: index_1.default,
    audiocall: index_2.default,
    statistics: index_3.default,
};
const initialObj = {
    container: 'spa',
    routes,
    components,
};
/* ----- spa init module --- */
const mySPA = (() => {
    let view;
    let model;
    let controller;
    return {
        init(obj) {
            this.renderComponents(obj.container, obj.components);
            const containerSPA = document.getElementById(obj.container);
            view = new view_1.default();
            model = new model_1.default();
            controller = new controller_1.default();
            view.init(containerSPA, routes);
            model.init(view);
            controller.init(containerSPA, model);
        },
        renderComponents(container, componentsObj) {
            const root = document.getElementById(container);
            const componentsList = Object.keys(componentsObj);
            /* eslint-disable-next-line */
            for (const item of componentsList) {
                root.innerHTML += componentsObj[item].render();
            }
        },
    };
})();
/* ------ end app module ----- */
/** * --- init module --- ** */
window.addEventListener('DOMContentLoaded', () => {
    mySPA.init(initialObj);
});


/***/ }),

/***/ "./src/model/model.ts":
/*!****************************!*\
  !*** ./src/model/model.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class ModuleModel {
    init(view) {
        this.myModuleView = view;
    }
    updateState(pageName) {
        this.myModuleView.renderContent(pageName);
    }
    highlightActiveMenuItem(obj, hashName) {
        this.myModuleView.highlightActiveMenuItem(obj, hashName);
    }
}
exports["default"] = ModuleModel;


/***/ }),

/***/ "./src/pages/audiocall/index.ts":
/*!**************************************!*\
  !*** ./src/pages/audiocall/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const header_1 = __importDefault(__webpack_require__(/*! ../../components/header */ "./src/components/header.ts"));
const footer_1 = __importDefault(__webpack_require__(/*! ../../components/footer */ "./src/components/footer.ts"));
const AudiocallGamePage = {
    classname: 'audiocall',
    render() {
        return `
      ${header_1.default.render()}
      <div class = '${this.classname}-conteiner'></div>;
      ${footer_1.default.render()}
     `;
    },
};
exports["default"] = AudiocallGamePage;


/***/ }),

/***/ "./src/pages/main.ts":
/*!***************************!*\
  !*** ./src/pages/main.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
const header_1 = __importDefault(__webpack_require__(/*! ../components/header */ "./src/components/header.ts"));
const footer_1 = __importDefault(__webpack_require__(/*! ../components/footer */ "./src/components/footer.ts"));
const phone_svg_1 = __importDefault(__webpack_require__(/*! ../assets/phone.svg */ "./src/assets/phone.svg"));
const dictionary_svg_1 = __importDefault(__webpack_require__(/*! ../assets/dictionary.svg */ "./src/assets/dictionary.svg"));
const play_svg_1 = __importDefault(__webpack_require__(/*! ../assets/play.svg */ "./src/assets/play.svg"));
const acsess_svg_1 = __importDefault(__webpack_require__(/*! ../assets/acsess.svg */ "./src/assets/acsess.svg"));
const MainPage = {
    id: 'main',
    render: () => `
       ${header_1.default.render()}
       <div class="main__page">
         <div class="main__page__description">
           <h2 class="title">The World is Yours with RSLang!</h2>
           <p>RSLang — это эффективный сервис для увлекательной практики английского языка. Присоединяйся!
         </div>
         <div class="main__page__advantages">
           <h2 class="title">Почему RSLang?</h2>
           <ul class="advantages__list">
             <li class="advantages__item">
               <img src="${acsess_svg_1.default}">
               <h3 class="advantages__item__title">Бесплатный доступ</h3>
               <p class="advantages__item__text">Наша миссия — сделать обучения языкам доступным для каждого</p>
             </li>
             <li class="advantages__item">
               <img src="${dictionary_svg_1.default}">
               <h3 class="advantages__item__title">Словарь</h3>
               <p class="advantages__item__text">Щелкните любое слово, чтобы увидеть определение в источниках, и сохраните его в своем списке карточек</p>
             </li>
             <li class="advantages__item">
               <img src="${play_svg_1.default}">
               <h3 class="advantages__item__title">Играй, чтобы учиться</h3>
               <p class="advantages__item__text">Игры включают Аудиовызов,Спринт и многое другое...</p>
             </li>
             <li class="advantages__item">
               <img src="${phone_svg_1.default}">
               <h3 class="advantages__item__title">Учитесь на ходу</h3>
               <p class="advantages__item__text">RSLang доступна для веб и мобильных устройств. Учитесь из любого места!</p>
             </li>
           </ul>
         </div>
       </div>
       ${footer_1.default.render()}
    `,
};
// export { MainPage };
exports["default"] = MainPage;


/***/ }),

/***/ "./src/pages/sprint/index.ts":
/*!***********************************!*\
  !*** ./src/pages/sprint/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const header_1 = __importDefault(__webpack_require__(/*! ../../components/header */ "./src/components/header.ts"));
const footer_1 = __importDefault(__webpack_require__(/*! ../../components/footer */ "./src/components/footer.ts"));
const SprintGamePage = {
    classname: 'sprint',
    render() {
        return `
    ${header_1.default.render()}
    <div class = '${this.classname}-conteiner'></div>
    ${footer_1.default.render()}`;
    },
};
exports["default"] = SprintGamePage;


/***/ }),

/***/ "./src/pages/statistics/index.ts":
/*!***************************************!*\
  !*** ./src/pages/statistics/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const header_1 = __importDefault(__webpack_require__(/*! ../../components/header */ "./src/components/header.ts"));
const footer_1 = __importDefault(__webpack_require__(/*! ../../components/footer */ "./src/components/footer.ts"));
const StatisticsPage = {
    classname: 'statistics',
    render() {
        return `
    ${header_1.default.render()}
    <div class = '${this.classname}-conteiner'></div>
    ${footer_1.default.render()}`;
    },
};
exports["default"] = StatisticsPage;


/***/ }),

/***/ "./src/pages/team.ts":
/*!***************************!*\
  !*** ./src/pages/team.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const header_1 = __importDefault(__webpack_require__(/*! ../components/header */ "./src/components/header.ts"));
const footer_1 = __importDefault(__webpack_require__(/*! ../components/footer */ "./src/components/footer.ts"));
const AboutTeamPage = {
    classname: 'team-page',
    render() {
        return `
    ${header_1.default.render()}
    <div class = '${this.classname}-conteiner'></div>
    ${footer_1.default.render()}
    `;
    },
};
exports["default"] = AboutTeamPage;


/***/ }),

/***/ "./src/pages/textbook/index.ts":
/*!*************************************!*\
  !*** ./src/pages/textbook/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./textbook.scss */ "./src/pages/textbook/textbook.scss");
const header_1 = __importDefault(__webpack_require__(/*! ../../components/header */ "./src/components/header.ts"));
const footer_1 = __importDefault(__webpack_require__(/*! ../../components/footer */ "./src/components/footer.ts"));
const TextbookPage = {
    classname: 'textbook',
    render() {
        return `
    ${header_1.default.render()}
    <div class = '${this.classname}'></div>
    ${footer_1.default.render()}`;
    },
};
exports["default"] = TextbookPage;


/***/ }),

/***/ "./src/view/view.ts":
/*!**************************!*\
  !*** ./src/view/view.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class ModuleView {
    constructor() {
        this.highlightActiveMenuItem = (obj, hashName) => {
            /* eslint-disable-next-line */
            for (let key in obj) {
                if (obj[key].classList.contains('menu__item_active')) {
                    obj[key].classList.remove('menu__item_active');
                }
            }
            if (hashName) {
                obj[hashName].classList.add('menu__item_active');
            }
            else {
                obj.main.classList.add('menu__item_active');
            }
        };
    }
    init(container, routes) {
        this.myModuleContainer = container;
        this.routesObj = routes;
    }
    renderContent(hashPageName) {
        let routeName = 'default';
        routeName = (hashPageName.length) ? hashPageName : routeName;
        const route = this.routesObj[routeName];
        this.myModuleContainer.innerHTML = route.render();
    }
}
exports["default"] = ModuleView;


/***/ }),

/***/ "./src/assets/acsess.svg":
/*!*******************************!*\
  !*** ./src/assets/acsess.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/30e3f028f366499892cf.svg";

/***/ }),

/***/ "./src/assets/dictionary.svg":
/*!***********************************!*\
  !*** ./src/assets/dictionary.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8e2aa4a649375d6ac5cb.svg";

/***/ }),

/***/ "./src/assets/phone.svg":
/*!******************************!*\
  !*** ./src/assets/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ec9dc822fb947f3e0b0b.svg";

/***/ }),

/***/ "./src/assets/play.svg":
/*!*****************************!*\
  !*** ./src/assets/play.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fa63e2714c7b92f701b4.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjtBQUVELHFCQUFlLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQzFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy90ZXh0Ym9vay90ZXh0Ym9vay5zY3NzP2UyMGYiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3N0eWxlcy9zdHlsZS5zYXNzP2FhYWYiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2FwaS9hcGktcGF0aC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvYXBpL2FwaS50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9jb250ZW50LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbnRyb2xsZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvZnVuY3Rpb25hbC9saXN0ZW5lci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvZnVuY3Rpb25hbC9zaG93LXVzZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2Z1bmN0aW9uYWwvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL21vZGVsL21vZGVsLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hdWRpb2NhbGwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL21haW4udHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL3NwcmludC9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvc3RhdGlzdGljcy9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvdGVhbS50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvdGV4dGJvb2svaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3ZpZXcvdmlldy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cblxuY29uc3QgYXBpUGF0aCA9ICdodHRwczovL3JzbGFuZy1sZWFybmluZy1lbmdsaXNoLXdvcmRzLmhlcm9rdWFwcC5jb20vJztcbmNvbnN0IHdvcmRzRW5kcG9pbnQgPSAnd29yZHMnO1xuY29uc3QgdXNlcnNFbmRwb2ludCA9ICd1c2Vycyc7XG5jb25zdCBzaWduSW4gPSAnc2lnbmluJztcblxuZXhwb3J0IHtcbiAgYXBpUGF0aCwgd29yZHNFbmRwb2ludCwgdXNlcnNFbmRwb2ludCwgc2lnbkluLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXNoYWRvdyAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cblxuaW1wb3J0IHtcbiAgYXBpUGF0aCwgdXNlcnNFbmRwb2ludCwgd29yZHNFbmRwb2ludCwgc2lnbkluLFxufSBmcm9tICcuL2FwaS1wYXRoJztcbmltcG9ydCB7IElVc2VyLCBJV29yZCwgSVVzZXJEYXRhIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4uL2Z1bmN0aW9uYWwvc3RvcmFnZSc7XG5pbXBvcnQgc2hvd1VzZXIgZnJvbSAnLi4vZnVuY3Rpb25hbC9zaG93LXVzZXInO1xuXG5jb25zdCBhcGkgPSB7XG5cbiAgYXN5bmMgY3JlYXRlTmV3VXNlcihuYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPElVc2VyIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3VzZXJzRW5kcG9pbnR9YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pLFxuXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2xlbmd0aCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGdldFVzZXIoaWQ6IHN0cmluZyk6IFByb21pc2U8SVVzZXIgfCB1bmRlZmluZWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7dXNlcnNFbmRwb2ludH0vJHtpZH1gLFxuICAgICAgICB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJVXNlcjtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyB1c2VyU2lnbkluKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPElVc2VyRGF0YSB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHtzaWduSW59YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgLy8gc3RvcmFnZS51c2VyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzaG93VXNlcigpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHVzZXInKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZ2V0V29yZHMoZ3JvdXA6IG51bWJlciwgcGFnZTpudW1iZXIpOiBQcm9taXNlPElXb3JkW10gfCB2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3dvcmRzRW5kcG9pbnR9P2dyb3VwPSR7Z3JvdXB9JnBhZ2U9JHtwYWdlfWAsXG4gICAgICAgIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElXb3JkW107XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGdldCB3b3Jkc1wiKTtcbiAgICB9XG4gIH0sXG5cbn07XG5cbmV4cG9ydCB7IGFwaSB9O1xuIiwiY29uc3QgQ29udGVudCA9IHtcbiAgcmVuZGVyOiAoY3VzdG9tQ2xhc3MgPSAnJyk6c3RyaW5nID0+IGA8ZGl2IGNsYXNzPVwiY29udGVudCAke2N1c3RvbUNsYXNzfVwiIGlkPVwiY29udGVudFwiPjwvZGl2PmAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiY29uc3QgRm9vdGVyID0ge1xuICByZW5kZXI6IChjdXN0b21DbGFzcyA9ICcnKTpzdHJpbmcgPT4gYDxmb290ZXIgY2xhc3M9XCJmb290ZXIgJHtjdXN0b21DbGFzc31cIj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2l0aHViLWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9mbHlldGhlclwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5mbHlldGhlcjxhPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGFyaW5hOTkyXCIgY2xhc3M9XCJnaXRodWItbGlua1wiPkRhcmluYTk5MjxhPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQWxlbmFEb3pcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+QWxlbmFEb3o8YT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuPiYjMTY5OyAyMDIyPC9zcGFuPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgY2xhc3M9XCJycy1saW5rXCI+PC9hPlxuICAgICAgICAgICAgPC9mb290ZXI+YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImNvbnN0IEhlYWRlciA9IHtcbiAgaGFzaGVzOiB7XG4gICAgbWFpbjogJyNtYWluJyxcbiAgICB0ZXh0Ym9vazogJyN0ZXh0Ym9vaycsXG4gICAgc3RhdGlzdGljczogJyNzdGF0aXN0aWNzJyxcbiAgICBhdWRpb2NhbGw6ICcjYXVkaW9jYWxsJyxcbiAgICBzcHJpbnQ6ICcjc3ByaW50JyxcbiAgICB0ZWFtOiAnI3RlYW0nLFxuICB9LFxuXG4gIHJlbmRlcihjdXN0b21DbGFzcyA9ICcnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJtb2RhbC1yZXN1bHQtd3JhcHBlclwiPlxuICAgIDxkaXYgaWQ9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cIm1vZGFsLXdpbmRvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImJ0bi1jbG9zZVwiPtC30LDQutGA0YvRgtGMPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgICAgPGhlYWRlciBjbGFzcz1cImhlYWRlciAke2N1c3RvbUNsYXNzfVwiIGlkPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cImhlYWRlcl9fbG9nb1wiPjxhIGhyZWY9XCJcIj5SU0xhbmc8L2E+PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYXV0aFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhdXRob3JpemF0aW9uXCI+0JLQvtC50YLQuDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fYXV0aFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5hdiBjbGFzcz1cImhlYWRlcl9fbWVudVwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnVfX2xpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHt0aGlzLmhhc2hlcy5tYWlufVwiIGNsYXNzPVwibWVudV9fbWFpbiBtZW51X19pdGVtX2FjdGl2ZVwiPtCT0LvQsNCy0L3QsNGPPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMudGV4dGJvb2t9XCIgY2xhc3M9XCJtZW51X190ZXh0Ym9va1wiPtCj0YfQtdCx0L3QuNC6PC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLnN0YXRpc3RpY3N9XCIgY2xhc3M9XCJtZW51X19zdGF0aWN0aWNzIG1lbnVfX2l0ZW1fZGlzYWJsZVwiPtCh0YLQsNGC0LjRgdGC0LjQutCwPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHt0aGlzLmhhc2hlcy5hdWRpb2NhbGx9XCIgY2xhc3M9XCJtZW51X19hdWRpb2NhbGxcIj7QkNGD0LTQuNC+0LLRi9C30L7QsjwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLnNwcmludH1cIiBjbGFzcz1cIm1lbnVfX3NwcmludFwiPtCh0L/RgNC40L3RgjwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLnRlYW19XCIgY2xhc3M9XCJtZW51X190ZWFtXCI+0J4g0LrQvtC80LDQvdC00LU8L2E+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tZGVidWdnZXIgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tc2hhZG93ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xyXG5cclxuaW1wb3J0IHsgYXBpUGF0aCwgc2lnbkluIH0gZnJvbSAnLi4vYXBpL2FwaS1wYXRoJztcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vYXBpL2FwaSc7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybUxvZ2luID0gYCA8Zm9ybSBjbGFzcz1cImZvcm0tc2lnbmluXCIgaWQ9XCJhdXRoXCI+ICAgICAgIFxyXG48aDMgY2xhc3M9XCJmb3JtLXNpZ25pbi1oZWFkaW5nXCI+0JLQstC10LTQuNGC0LUg0YHQstC+0Lgg0LTQsNC90L3Ri9C1PC9oMz5cclxuXHJcbiAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwidXNlci1lbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgcmVxdWlyZWQgLz5cclxuICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbWlubGVuZ3RoPVwiOFwiIGlkPVwidXNlci1wYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQv9Cw0YDQvtC70YxcIiByZXF1aXJlZC8+ICAgICAgXHJcbiAgXHJcbiAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiICBpZD1cImJ1dHRvbi1uZXctdXNlclwiIHR5cGUgPVwiYnV0dG9uXCI+INCg0LXQs9C40YHRgtGA0LDRhtC40Y8gPC9idXR0b24+IFxyXG4gIFxyXG48YnV0dG9uIGNsYXNzPVwiYnRuXCIgaWQ9XCJhdXRvcml6dGlvbkJ0blwiIHR5cGU9XCJzdWJtaXRcIj7QktC+0LnRgtC4PC9idXR0b24+ICAgXHJcbjwvZm9ybT5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1SZWdpc3RyYXRpb24gPSBgIDxmb3JtIGNsYXNzPVwiZm9ybS1zaWduaW5cIiBpZD1cInJlZ1wiPiAgICAgICBcclxuPGgzIGNsYXNzPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPtCS0LLQtdC00LjRgtC1INGB0LLQvtC4INC00LDQvdC90YvQtTwvaDM+XHJcblxyXG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlci1uYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwidXNlci1uYW1lXCIgcGxhY2Vob2xkZXI9XCLQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIgcmVxdWlyZWQ9XCJcIiAvPlxyXG4gIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cInVzZXItZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIHJlcXVpcmVkIC8+XHJcbiAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1pbmxlbmd0aD1cIjhcIiBpZD1cInVzZXItcGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0L/QsNGA0L7Qu9GMXCIgcmVxdWlyZWQgLz4gIFxyXG5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGlkPVwicmVnaXN0cmF0aW9uX2J0blwiIHR5cGU9XCJzdWJtaXRcIj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPINC4INCy0YXQvtC0PC9idXR0b24+ICAgXHJcbjwvZm9ybT5gO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5cbi8vIGltcG9ydCBtb2RhbEF1dGhvcml6YXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbCc7XG5cbmltcG9ydCB7IE1lbnVJdGVtcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcblxuaW1wb3J0IE1vZHVsZU1vZGVsIGZyb20gJy4uL21vZGVsL21vZGVsJztcbmltcG9ydCBsaXN0ZW5lciBmcm9tICcuLi9mdW5jdGlvbmFsL2xpc3RlbmVyJztcblxuY2xhc3MgTW9kdWxlQ29udHJvbGxlciB7XG4gIG15TW9kdWxlQ29udGFpbmVyITogSFRNTEVsZW1lbnQ7XG5cbiAgbXlNb2R1bGVNb2RlbCE6IE1vZHVsZU1vZGVsO1xuXG4gIG1lbnVNYWluICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVUZXh0Ym9vayAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51U3RhdGljdGljcyAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51QXVkaW9jYWxsICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVTcHJpbnQgITogSFRNTEVsZW1lbnQ7XG5cbiAgbWVudVRlYW0gITogSFRNTEVsZW1lbnQ7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50LCBtb2RlbDogTW9kdWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbCA9IG1vZGVsO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gbW9kYWxBdXRob3JpemF0aW9uLm9wZW4oKTtcbiAgICBsaXN0ZW5lci5vcGVuKCk7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNtYWluJztcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGhhc2hQYWdlTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLnVwZGF0ZVN0YXRlKGhhc2hQYWdlTmFtZSk7XG4gICAgdGhpcy5maW5kTWVudUVsZW1lbnRzKGhhc2hQYWdlTmFtZSk7XG4gIH1cblxuICBmaW5kTWVudUVsZW1lbnRzKGhhc2hOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5tZW51TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19tYWluJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51VGV4dGJvb2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fdGV4dGJvb2snKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVTdGF0aWN0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3N0YXRpY3RpY3MnKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVBdWRpb2NhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fYXVkaW9jYWxsJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51U3ByaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3NwcmludCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudVRlYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fdGVhbScpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IG9iajpNZW51SXRlbXMgPSB7XG4gICAgICBtYWluOiB0aGlzLm1lbnVNYWluLFxuICAgICAgdGV4dGJvb2s6IHRoaXMubWVudVRleHRib29rLFxuICAgICAgc3RhdGlzdGljczogdGhpcy5tZW51U3RhdGljdGljcyxcbiAgICAgIGF1ZGlvY2FsbDogdGhpcy5tZW51QXVkaW9jYWxsLFxuICAgICAgc3ByaW50OiB0aGlzLm1lbnVTcHJpbnQsXG4gICAgICB0ZWFtOiB0aGlzLm1lbnVUZWFtLFxuICAgIH07XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLmhpZ2hsaWdodEFjdGl2ZU1lbnVJdGVtKG9iaiwgaGFzaE5hbWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZHVsZUNvbnRyb2xsZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tc2hhZG93ICovXHJcblxyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9hcGkvYXBpJztcclxuaW1wb3J0IHsgZm9ybUxvZ2luLCBmb3JtUmVnaXN0cmF0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbCc7XHJcblxyXG5jbGFzcyBMaXN0ZW5lciB7XHJcbiAgb3BlbigpOiB2b2lkIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhdXRob3JpemF0aW9uJykpIHtcclxuICAgICAgICBjb25zdCBhdXRob3JpemF0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGhvcml6YXRpb24nKTtcclxuICAgICAgICBjb25zdCBidG5DbG9zZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jbG9zZScpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsUmVzdWx0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1yZXN1bHQtd3JhcHBlcicpO1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygn0LLQvtGCINGC0YPRgiDRgNCw0LHQvtGC0LDQtdGCINC80L7QtNCw0LvRjNC90L7QtSDQvtC60L3QvjInKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ9Cy0L7RgiDRgtGD0YIg0YDQsNCx0L7RgtCw0LXRgiDQvNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4xJyk7XHJcbiAgICAgICAgd3JhcHBlciEuaW5uZXJIVE1MID0gZm9ybUxvZ2luO1xyXG4gICAgICAgIG1vZGFsUmVzdWx0V3JhcHBlciEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgY29uc3QgdXNlckVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1lbWFpbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1wYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLW5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGlmICh1c2VyRW1haWxJbnB1dCAmJiB1c2VyUGFzc3dvcmRJbnB1dCkge1xyXG4gICAgICAgICAgY29uc3QgYXV0aEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgICAgaWYgKGF1dGhGb3JtKSB7XHJcbiAgICAgICAgICAgIGF1dGhGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IHVzZXJFbWFpbElucHV0IS52YWx1ZTtcclxuICAgICAgICAgICAgICBjb25zdCB1c2VyUGFzc3dvcmQgPSB1c2VyUGFzc3dvcmRJbnB1dCEudmFsdWU7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGFwaS51c2VyU2lnbkluKHVzZXJQYXNzd29yZCwgdXNlckVtYWlsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbk5ld1VzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLW5ldy11c2VyJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKGJ1dHRvbk5ld1VzZXIpIHtcclxuICAgICAgICAgIGJ1dHRvbk5ld1VzZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoX2U6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIhLmlubmVySFRNTCA9IGZvcm1SZWdpc3RyYXRpb247XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItZW1haWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyUGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLXBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLW5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAodXNlck5hbWVJbnB1dCAmJiB1c2VyRW1haWxJbnB1dCAmJiB1c2VyUGFzc3dvcmRJbnB1dCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgaWYgKHJlZ2lzdHJhdGlvbkZvcm0pIHtcclxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IHVzZXJFbWFpbElucHV0IS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkID0gdXNlclBhc3N3b3JkSW5wdXQhLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyTmFtZSA9IHVzZXJOYW1lSW5wdXQhLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBhcGkuY3JlYXRlTmV3VXNlcih1c2VyTmFtZSwgdXNlclBhc3N3b3JkLCB1c2VyRW1haWwpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRob3JpemF0aW9uLnNpZ25Jbih1c2VyUGFzc3dvcmQsIHVzZXJFbWFpbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICAgIG1vZGFsUmVzdWx0V3JhcHBlciEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9O1xyXG4gICAgICAgIG92ZXJsYXkhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XHJcbiAgICAgICAgYnRuQ2xvc2VNb2RhbCEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsaXN0ZW5lciA9IG5ldyBMaXN0ZW5lcigpO1xyXG5leHBvcnQgZGVmYXVsdCBsaXN0ZW5lcjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcclxuXHJcbmNvbnN0IHVzZXJTaG93ID0gYDxkaXYgY2xhc3M9XCJ1c2VyLXNob3dcIj4gJHtzdG9yYWdlLnVzZXIhLm5hbWV9PC9kaXY+YDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dVc2VyKCkge1xyXG4gIGNvbnN0IGhlZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYXV0aCcpIGFzIEhUTUxFbGVtZW50O1xyXG4gIGNvbnN0IGJ1dHRvbkVudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGhvcml6YXRpb24nKSBhcyBIVE1MRWxlbWVudDtcclxuICBidXR0b25FbnRlci5yZW1vdmUoKTtcclxuICBjb25zdCBVc2VyUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgVXNlclBpYy5jbGFzc0xpc3QuYWRkKCd1c2VyLXBpYycpO1xyXG4gIFVzZXJQaWMuaW5uZXJIVE1MID0gdXNlclNob3c7XHJcbiAgaGVkZXIuYXBwZW5kKFVzZXJQaWMpO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXHJcblxyXG5pbXBvcnQgeyBJVXNlciwgSVVzZXJEYXRhIH0gZnJvbSAndHlwZXMvdHlwZXMnO1xyXG5cclxuY2xhc3MgU3RvcmFnZSB7XHJcbiAgdXNlcnM/OiBBcnJheTxJVXNlckRhdGE+O1xyXG5cclxuICB1c2VyPzogSVVzZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51c2VycyA9IFtdO1xyXG4gICAgdGhpcy51c2VyID0geyBuYW1lOiAnJywgZW1haWw6ICcnLCBwYXNzd29yZDogJycgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQtbWVtYmVyICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNhc3MnO1xuXG5pbXBvcnQgTW9kdWxlQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvY29udHJvbGxlcic7XG5pbXBvcnQgTW9kdWxlTW9kZWwgZnJvbSAnLi9tb2RlbC9tb2RlbCc7XG5pbXBvcnQgTW9kdWxlVmlldyBmcm9tICcuL3ZpZXcvdmlldyc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMsIFJvdXRlcywgSW5pdGlhbE9iaiB9IGZyb20gJy4vdHlwZXMvdHlwZXMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyJztcblxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vcGFnZXMvbWFpbic7XG5cbmltcG9ydCBUZXh0Ym9va1BhZ2UgZnJvbSAnLi9wYWdlcy90ZXh0Ym9vayc7XG5pbXBvcnQgQWJvdXRUZWFtUGFnZSBmcm9tICcuL3BhZ2VzL3RlYW0nO1xuaW1wb3J0IFNwcmludEdhbWVQYWdlIGZyb20gJy4vcGFnZXMvc3ByaW50L2luZGV4JztcbmltcG9ydCBBdWRpb2NhbGxHYW1lUGFnZSBmcm9tICcuL3BhZ2VzL2F1ZGlvY2FsbC9pbmRleCc7XG5pbXBvcnQgU3RhdGlzdGljc1BhZ2UgZnJvbSAnLi9wYWdlcy9zdGF0aXN0aWNzL2luZGV4JztcblxuY29uc3QgY29tcG9uZW50czogQ29tcG9uZW50cyA9IHtcbiAgaGVhZGVyOiBIZWFkZXIsXG4gIGNvbnRlbnQ6IENvbnRlbnQsXG4gIGZvb3RlcjogRm9vdGVyLFxufTtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSB7XG4gIG1haW46IE1haW5QYWdlLFxuICBkZWZhdWx0OiBNYWluUGFnZSxcbiAgdGV4dGJvb2s6IFRleHRib29rUGFnZSxcbiAgdGVhbTogQWJvdXRUZWFtUGFnZSxcbiAgc3ByaW50OiBTcHJpbnRHYW1lUGFnZSxcbiAgYXVkaW9jYWxsOiBBdWRpb2NhbGxHYW1lUGFnZSxcbiAgc3RhdGlzdGljczogU3RhdGlzdGljc1BhZ2UsXG59O1xuXG5jb25zdCBpbml0aWFsT2JqOiBJbml0aWFsT2JqID0ge1xuICBjb250YWluZXI6ICdzcGEnLFxuICByb3V0ZXMsXG4gIGNvbXBvbmVudHMsXG59O1xuXG4vKiAtLS0tLSBzcGEgaW5pdCBtb2R1bGUgLS0tICovXG5jb25zdCBteVNQQSA9ICgoKSA9PiB7XG4gIGxldCB2aWV3OiBNb2R1bGVWaWV3O1xuICBsZXQgbW9kZWw6IE1vZHVsZU1vZGVsO1xuICBsZXQgY29udHJvbGxlcjogTW9kdWxlQ29udHJvbGxlcjtcbiAgcmV0dXJuIHtcbiAgICBpbml0KG9iajogSW5pdGlhbE9iaikge1xuICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnRzKG9iai5jb250YWluZXIsIG9iai5jb21wb25lbnRzKTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lclNQQSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9iai5jb250YWluZXIpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgdmlldyA9IG5ldyBNb2R1bGVWaWV3KCk7XG4gICAgICBtb2RlbCA9IG5ldyBNb2R1bGVNb2RlbCgpO1xuICAgICAgY29udHJvbGxlciA9IG5ldyBNb2R1bGVDb250cm9sbGVyKCk7XG5cbiAgICAgIHZpZXcuaW5pdChjb250YWluZXJTUEEsIHJvdXRlcyk7XG4gICAgICBtb2RlbC5pbml0KHZpZXcpO1xuICAgICAgY29udHJvbGxlci5pbml0KGNvbnRhaW5lclNQQSwgbW9kZWwpO1xuICAgIH0sXG5cbiAgICByZW5kZXJDb21wb25lbnRzKGNvbnRhaW5lcjogc3RyaW5nLCBjb21wb25lbnRzT2JqOiBDb21wb25lbnRzKSB7XG4gICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVyKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IGNvbXBvbmVudHNMaXN0ID0gT2JqZWN0LmtleXMoY29tcG9uZW50c09iaik7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb21wb25lbnRzTGlzdCkge1xuICAgICAgICByb290LmlubmVySFRNTCArPSBjb21wb25lbnRzT2JqW2l0ZW0gYXMga2V5b2YgQ29tcG9uZW50c10ucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn0pKCk7XG5cbi8qIC0tLS0tLSBlbmQgYXBwIG1vZHVsZSAtLS0tLSAqL1xuXG4vKiogKiAtLS0gaW5pdCBtb2R1bGUgLS0tICoqICovXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbXlTUEEuaW5pdChpbml0aWFsT2JqKTtcbn0pO1xuIiwiaW1wb3J0IE1vZGVsVmlldyBmcm9tICcuLi92aWV3L3ZpZXcnO1xuaW1wb3J0IHsgTWVudUl0ZW1zIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuXG5jbGFzcyBNb2R1bGVNb2RlbCB7XG4gIG15TW9kdWxlVmlldyE6IE1vZGVsVmlldztcblxuICBpbml0KHZpZXc6IE1vZGVsVmlldyk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcgPSB2aWV3O1xuICB9XG5cbiAgdXBkYXRlU3RhdGUocGFnZU5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJDb250ZW50KHBhZ2VOYW1lKTtcbiAgfVxuXG4gIGhpZ2hsaWdodEFjdGl2ZU1lbnVJdGVtKG9iajogTWVudUl0ZW1zLCBoYXNoTmFtZTpzdHJpbmcpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LmhpZ2hsaWdodEFjdGl2ZU1lbnVJdGVtKG9iaiwgaGFzaE5hbWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZHVsZU1vZGVsO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJztcblxuY29uc3QgQXVkaW9jYWxsR2FtZVBhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ2F1ZGlvY2FsbCcsXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgICAke0hlYWRlci5yZW5kZXIoKX1cbiAgICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz48L2Rpdj47XG4gICAgICAke0Zvb3Rlci5yZW5kZXIoKX1cbiAgICAgYDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvY2FsbEdhbWVQYWdlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcblxuaW1wb3J0IHBob25lIGZyb20gJy4uL2Fzc2V0cy9waG9uZS5zdmcnO1xuaW1wb3J0IGRpY3Rpb25hcnkgZnJvbSAnLi4vYXNzZXRzL2RpY3Rpb25hcnkuc3ZnJztcbmltcG9ydCBwbGF5IGZyb20gJy4uL2Fzc2V0cy9wbGF5LnN2Zyc7XG5pbXBvcnQgYWNzZXNzIGZyb20gJy4uL2Fzc2V0cy9hY3Nlc3Muc3ZnJztcblxuY29uc3QgTWFpblBhZ2UgPSB7XG4gIGlkOiAnbWFpbicsXG4gIHJlbmRlcjogKCk6c3RyaW5nID0+IGBcbiAgICAgICAke0hlYWRlci5yZW5kZXIoKX1cbiAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fcGFnZVwiPlxuICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+VGhlIFdvcmxkIGlzIFlvdXJzIHdpdGggUlNMYW5nITwvaDI+XG4gICAgICAgICAgIDxwPlJTTGFuZyDigJQg0Y3RgtC+INGN0YTRhNC10LrRgtC40LLQvdGL0Lkg0YHQtdGA0LLQuNGBINC00LvRjyDRg9Cy0LvQtdC60LDRgtC10LvRjNC90L7QuSDQv9GA0LDQutGC0LjQutC4INCw0L3Qs9C70LjQudGB0LrQvtCz0L4g0Y/Qt9GL0LrQsC4g0J/RgNC40YHQvtC10LTQuNC90Y/QudGB0Y8hXG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19wYWdlX19hZHZhbnRhZ2VzXCI+XG4gICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+0J/QvtGH0LXQvNGDIFJTTGFuZz88L2gyPlxuICAgICAgICAgICA8dWwgY2xhc3M9XCJhZHZhbnRhZ2VzX19saXN0XCI+XG4gICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbVwiPlxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2Fjc2Vzc31cIj5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0JHQtdGB0L/Qu9Cw0YLQvdGL0Lkg0LTQvtGB0YLRg9C/PC9oMz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPtCd0LDRiNCwINC80LjRgdGB0LjRjyDigJQg0YHQtNC10LvQsNGC0Ywg0L7QsdGD0YfQtdC90LjRjyDRj9C30YvQutCw0Lwg0LTQvtGB0YLRg9C/0L3Ri9C8INC00LvRjyDQutCw0LbQtNC+0LPQvjwvcD5cbiAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtkaWN0aW9uYXJ5fVwiPlxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7QodC70L7QstCw0YDRjDwvaDM+XG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RleHRcIj7QqdC10LvQutC90LjRgtC1INC70Y7QsdC+0LUg0YHQu9C+0LLQviwg0YfRgtC+0LHRiyDRg9Cy0LjQtNC10YLRjCDQvtC/0YDQtdC00LXQu9C10L3QuNC1INCyINC40YHRgtC+0YfQvdC40LrQsNGFLCDQuCDRgdC+0YXRgNCw0L3QuNGC0LUg0LXQs9C+INCyINGB0LLQvtC10Lwg0YHQv9C40YHQutC1INC60LDRgNGC0L7Rh9C10Lo8L3A+XG4gICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGxheX1cIj5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0JjQs9GA0LDQuSwg0YfRgtC+0LHRiyDRg9GH0LjRgtGM0YHRjzwvaDM+XG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RleHRcIj7QmNCz0YDRiyDQstC60LvRjtGH0LDRjtGCINCQ0YPQtNC40L7QstGL0LfQvtCyLNCh0L/RgNC40L3RgiDQuCDQvNC90L7Qs9C+0LUg0LTRgNGD0LPQvtC1Li4uPC9wPlxuICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbVwiPlxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3Bob25lfVwiPlxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7Qo9GH0LjRgtC10YHRjCDQvdCwINGF0L7QtNGDPC9oMz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPlJTTGFuZyDQtNC+0YHRgtGD0L/QvdCwINC00LvRjyDQstC10LEg0Lgg0LzQvtCx0LjQu9GM0L3Ri9GFINGD0YHRgtGA0L7QudGB0YLQsi4g0KPRh9C40YLQtdGB0Ywg0LjQtyDQu9GO0LHQvtCz0L4g0LzQtdGB0YLQsCE8L3A+XG4gICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgPC91bD5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgICAgICR7Rm9vdGVyLnJlbmRlcigpfVxuICAgIGAsXG59O1xuXG4vLyBleHBvcnQgeyBNYWluUGFnZSB9O1xuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2U7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5jb25zdCBTcHJpbnRHYW1lUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAnc3ByaW50JyxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAke0hlYWRlci5yZW5kZXIoKX1cbiAgICA8ZGl2IGNsYXNzID0gJyR7dGhpcy5jbGFzc25hbWV9LWNvbnRlaW5lcic+PC9kaXY+XG4gICAgJHtGb290ZXIucmVuZGVyKCl9YDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwcmludEdhbWVQYWdlO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJztcblxuY29uc3QgU3RhdGlzdGljc1BhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ3N0YXRpc3RpY3MnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz48L2Rpdj5cbiAgICAke0Zvb3Rlci5yZW5kZXIoKX1gO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGlzdGljc1BhZ2U7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5jb25zdCBBYm91dFRlYW1QYWdlID0ge1xuICBjbGFzc25hbWU6ICd0ZWFtLXBhZ2UnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz48L2Rpdj5cbiAgICAke0Zvb3Rlci5yZW5kZXIoKX1cbiAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRUZWFtUGFnZTtcbiIsImltcG9ydCAnLi90ZXh0Ym9vay5zY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmNvbnN0IFRleHRib29rUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAndGV4dGJvb2snLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0nPjwvZGl2PlxuICAgICR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0Ym9va1BhZ2U7XG4iLCJpbXBvcnQgeyBSb3V0ZXMsIE1lbnVJdGVtcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcblxuY2xhc3MgTW9kdWxlVmlldyB7XG4gIG15TW9kdWxlQ29udGFpbmVyITpIVE1MRWxlbWVudDtcblxuICBjb250ZW50Q29udGFpbmVyITpIVE1MRWxlbWVudDtcblxuICByb3V0ZXNPYmohOlJvdXRlcztcblxuICBpbml0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHJvdXRlczogUm91dGVzKTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMucm91dGVzT2JqID0gcm91dGVzO1xuICB9XG5cbiAgcmVuZGVyQ29udGVudChoYXNoUGFnZU5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICBsZXQgcm91dGVOYW1lID0gJ2RlZmF1bHQnO1xuICAgIHJvdXRlTmFtZSA9IChoYXNoUGFnZU5hbWUubGVuZ3RoKSA/IGhhc2hQYWdlTmFtZSA6IHJvdXRlTmFtZTtcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMucm91dGVzT2JqW3JvdXRlTmFtZSBhcyBrZXlvZiBSb3V0ZXNdO1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIuaW5uZXJIVE1MID0gcm91dGUucmVuZGVyKCk7XG4gIH1cblxuICBoaWdobGlnaHRBY3RpdmVNZW51SXRlbSA9IChvYmo6TWVudUl0ZW1zLCBoYXNoTmFtZTpzdHJpbmcpOnZvaWQgPT4ge1xuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGZvcihsZXQga2V5IGluIG9iail7XG4gICAgICBpZiAob2JqW2tleSBhcyBrZXlvZiBNZW51SXRlbXNdLmNsYXNzTGlzdC5jb250YWlucygnbWVudV9faXRlbV9hY3RpdmUnKSkge1xuICAgICAgICBvYmpba2V5IGFzIGtleW9mIE1lbnVJdGVtc10uY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc2hOYW1lKSB7XG4gICAgICBvYmpbaGFzaE5hbWUgYXMga2V5b2YgTWVudUl0ZW1zXS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtX2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoubWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtX2FjdGl2ZScpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlVmlldztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=