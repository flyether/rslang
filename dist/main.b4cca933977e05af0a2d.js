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
const storage_1 = __webpack_require__(/*! ../functional/storage */ "./src/functional/storage.ts");
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
                    storage_1.storage.user = yield response.json();
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable linebreak-style */
/* eslint-disable no-debugger */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const api_1 = __webpack_require__(/*! ../api/api */ "./src/api/api.ts");
const formLogin = ` <form class="form-signin" id="auth">       
<h3 class="form-signin-heading">Введите свои данные</h3>

  <input type="email" id="user-email" class="form-control" name="email" placeholder="Email Address" required autofocus=""/>
  <input type="password" minlength="8" id="user-password" class="form-control" name="password" placeholder="пароль" required/>      
  
  <button class="btn"  id="button-new-user" type ="button"> Регистрация </button> 
  
<button class="btn" id="autoriztionBtn" type="submit">Войти</button>   
</form>`;
const formRegistration = ` <form class="form-signin" id="reg">       
<h3 class="form-signin-heading">Введите свои данные</h3>

  <input type="text" id="user-name" class="form-control" name="user-name" placeholder="Имя пользователя" required="" autofocus=""/>
  <input type="email" id="user-email" class="form-control" name="email" placeholder="Email Address" required />
  <input type="password" minlength="8" id="user-password" class="form-control" name="password" placeholder="пароль" required />  

<button class="btn" id="registration_btn" type="submit">Регистрация и вход</button>   
</form>`;
class Authorization {
    newUser(name, password, email) {
        api_1.api.createNewUser(name, email, password);
    }
    signIn(password, email) {
        api_1.api.userSignIn(email, password);
    }
}
const authorization = new Authorization();
const modalAuthorization = {
    open() {
        const authorizationBtn = document.querySelector('.authorization');
        const btnCloseModal = document.getElementById('btn-close');
        const overlay = document.getElementById('overlay');
        const modalResultWrapper = document.getElementById('modal-result-wrapper');
        const wrapper = document.querySelector('.wrapper');
        if (authorizationBtn) {
            authorizationBtn.addEventListener('click', (_e) => {
                console.log('вот тут работает модальное окно1');
                wrapper.innerHTML = formLogin;
                modalResultWrapper.style.display = 'block';
                const userEmailInput = document.getElementById('user-email');
                const userPasswordInput = document.getElementById('user-password');
                const userNameInput = document.getElementById('user-name');
                if (userEmailInput && userPasswordInput) {
                    const registratiForm = document.getElementById('auth');
                    if (registratiForm) {
                        registratiForm.addEventListener('submit', (e) => {
                            const userEmail = userEmailInput.value;
                            const userPassword = userPasswordInput.value;
                            e.preventDefault();
                            authorization.signIn(userPassword, userEmail);
                        });
                    }
                }
                const buttonNewUser = document.getElementById('button-new-user');
                if (buttonNewUser) {
                    buttonNewUser.addEventListener('click', (_e) => {
                        console.log(']thz до иннера');
                        wrapper.innerHTML = formRegistration;
                        const userEmailInput = document.getElementById('user-email');
                        const userPasswordInput = document.getElementById('user-password');
                        const userNameInput = document.getElementById('user-name');
                        // eslint-disable-next-line no-debugger
                        // debugger;
                        if (userNameInput && userEmailInput && userPasswordInput) {
                            const registratiForm = document.getElementById('reg');
                            if (registratiForm) {
                                registratiForm.addEventListener('submit', (e) => {
                                    const userEmail = userEmailInput.value;
                                    const userPassword = userPasswordInput.value;
                                    const userName = userNameInput.value;
                                    console.log(userName, userEmail, userPassword, 'userName, userEmail, userPassword ');
                                    e.preventDefault();
                                    authorization.newUser(userName, userPassword, userEmail);
                                });
                            }
                        }
                    });
                }
            });
        }
        const closeModal = () => {
            modalResultWrapper.style.display = 'none';
        };
        overlay.addEventListener('click', closeModal);
        btnCloseModal.addEventListener('click', closeModal);
    },
};
exports["default"] = modalAuthorization;


/***/ }),

/***/ "./src/controller/controller.ts":
/*!**************************************!*\
  !*** ./src/controller/controller.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* eslint-disable no-restricted-globals */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const modal_1 = __importDefault(__webpack_require__(/*! ../components/modal */ "./src/components/modal.ts"));
class ModuleController {
    init(container, model) {
        this.myModuleContainer = container;
        this.myModuleModel = model;
        window.addEventListener('hashchange', () => {
            this.updateState();
        });
        modal_1.default.open();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxDQUFDO1FBQzFCLFNBQVMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDN0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUF5QixDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEQsQ0FBQztDQWVGO0FBRUQscUJBQWUsVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BDMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL3RleHRib29rL3RleHRib29rLnNjc3M/ZTIwZiIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3M/YWFhZiIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvYXBpL2FwaS1wYXRoLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9hcGkvYXBpLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9tb2RhbC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9mdW5jdGlvbmFsL3Nob3ctdXNlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvZnVuY3Rpb25hbC9zdG9yYWdlLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvbW9kZWwvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvbWFpbi50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvc3ByaW50L2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9zdGF0aXN0aWNzL2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy90ZWFtLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy90ZXh0Ym9vay9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvdmlldy92aWV3LnRzIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuXG5jb25zdCBhcGlQYXRoID0gJ2h0dHBzOi8vcnNsYW5nLWxlYXJuaW5nLWVuZ2xpc2gtd29yZHMuaGVyb2t1YXBwLmNvbS8nO1xuY29uc3Qgd29yZHNFbmRwb2ludCA9ICd3b3Jkcyc7XG5jb25zdCB1c2Vyc0VuZHBvaW50ID0gJ3VzZXJzJztcbmNvbnN0IHNpZ25JbiA9ICdzaWduaW4nO1xuXG5leHBvcnQge1xuICBhcGlQYXRoLCB3b3Jkc0VuZHBvaW50LCB1c2Vyc0VuZHBvaW50LCBzaWduSW4sXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tc2hhZG93ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuXG5pbXBvcnQge1xuICBhcGlQYXRoLCB1c2Vyc0VuZHBvaW50LCB3b3Jkc0VuZHBvaW50LCBzaWduSW4sXG59IGZyb20gJy4vYXBpLXBhdGgnO1xuaW1wb3J0IHsgSVVzZXIsIElXb3JkLCBJVXNlckRhdGEgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vZnVuY3Rpb25hbC9zdG9yYWdlJztcbmltcG9ydCBzaG93VXNlciBmcm9tICcuLi9mdW5jdGlvbmFsL3Nob3ctdXNlcic7XG5cbmNvbnN0IGFwaSA9IHtcblxuICBhc3luYyBjcmVhdGVOZXdVc2VyKG5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8SVVzZXIgfCB1bmRlZmluZWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7dXNlcnNFbmRwb2ludH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSksXG5cbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbGVuZ3RoIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmcnKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZ2V0VXNlcihpZDogc3RyaW5nKTogUHJvbWlzZTxJVXNlciB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fS8ke2lkfWAsXG4gICAgICAgIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElVc2VyO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIHVzZXJTaWduSW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8SVVzZXJEYXRhIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3NpZ25Jbn1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBzdG9yYWdlLnVzZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNob3dVc2VyKCk7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgdXNlcicpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBnZXRXb3Jkcyhncm91cDogbnVtYmVyLCBwYWdlOm51bWJlcik6IFByb21pc2U8SVdvcmRbXSB8IHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7d29yZHNFbmRwb2ludH0/Z3JvdXA9JHtncm91cH0mcGFnZT0ke3BhZ2V9YCxcbiAgICAgICAgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSVdvcmRbXTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZ2V0IHdvcmRzXCIpO1xuICAgIH1cbiAgfSxcblxufTtcblxuZXhwb3J0IHsgYXBpIH07XG4iLCJjb25zdCBDb250ZW50ID0ge1xuICByZW5kZXI6IChjdXN0b21DbGFzcyA9ICcnKTpzdHJpbmcgPT4gYDxkaXYgY2xhc3M9XCJjb250ZW50ICR7Y3VzdG9tQ2xhc3N9XCIgaWQ9XCJjb250ZW50XCI+PC9kaXY+YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCJjb25zdCBGb290ZXIgPSB7XG4gIHJlbmRlcjogKGN1c3RvbUNsYXNzID0gJycpOnN0cmluZyA9PiBgPGZvb3RlciBjbGFzcz1cImZvb3RlciAke2N1c3RvbUNsYXNzfVwiPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnaXRodWItbGlua3NcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2ZseWV0aGVyXCIgY2xhc3M9XCJnaXRodWItbGlua1wiPmZseWV0aGVyPGE+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EYXJpbmE5OTJcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+RGFyaW5hOTkyPGE+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9BbGVuYURvelwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5BbGVuYURvejxhPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4+JiMxNjk7IDIwMjI8L3NwYW4+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JzLnNjaG9vbC9qcy9cIiBjbGFzcz1cInJzLWxpbmtcIj48L2E+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5gLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiY29uc3QgSGVhZGVyID0ge1xuICBoYXNoZXM6IHtcbiAgICBtYWluOiAnI21haW4nLFxuICAgIHRleHRib29rOiAnI3RleHRib29rJyxcbiAgICBzdGF0aXN0aWNzOiAnI3N0YXRpc3RpY3MnLFxuICAgIGF1ZGlvY2FsbDogJyNhdWRpb2NhbGwnLFxuICAgIHNwcmludDogJyNzcHJpbnQnLFxuICAgIHRlYW06ICcjdGVhbScsXG4gIH0sXG5cbiAgcmVuZGVyKGN1c3RvbUNsYXNzID0gJycpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBpZD1cIm1vZGFsLXJlc3VsdC13cmFwcGVyXCI+XG4gICAgPGRpdiBpZD1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICA8ZGl2IGlkPVwibW9kYWwtd2luZG93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiYnRuLWNsb3NlXCI+0LfQsNC60YDRi9GC0Yw8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyICR7Y3VzdG9tQ2xhc3N9XCIgaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGVyX19sb2dvXCI+PGEgaHJlZj1cIlwiPlJTTGFuZzwvYT48L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19hdXRoXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImF1dGhvcml6YXRpb25cIj7QktC+0LnRgtC4PC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19hdXRoXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmF2IGNsYXNzPVwiaGVhZGVyX19tZW51XCI+XG4gICAgICAgICAgPHVsIGNsYXNzPVwibWVudV9fbGlzdFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLm1haW59XCIgY2xhc3M9XCJtZW51X19tYWluIG1lbnVfX2l0ZW1fYWN0aXZlXCI+0JPQu9Cw0LLQvdCw0Y88L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHt0aGlzLmhhc2hlcy50ZXh0Ym9va31cIiBjbGFzcz1cIm1lbnVfX3RleHRib29rXCI+0KPRh9C10LHQvdC40Lo8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMuc3RhdGlzdGljc31cIiBjbGFzcz1cIm1lbnVfX3N0YXRpY3RpY3MgbWVudV9faXRlbV9kaXNhYmxlXCI+0KHRgtCw0YLQuNGB0YLQuNC60LA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbH1cIiBjbGFzcz1cIm1lbnVfX2F1ZGlvY2FsbFwiPtCQ0YPQtNC40L7QstGL0LfQvtCyPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMuc3ByaW50fVwiIGNsYXNzPVwibWVudV9fc3ByaW50XCI+0KHQv9GA0LjQvdGCPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMudGVhbX1cIiBjbGFzcz1cIm1lbnVfX3RlYW1cIj7QniDQutC+0LzQsNC90LTQtTwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgYDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1kZWJ1Z2dlciAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1zaGFkb3cgKi9cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXHJcblxyXG5pbXBvcnQgeyBhcGlQYXRoLCBzaWduSW4gfSBmcm9tICcuLi9hcGkvYXBpLXBhdGgnO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9hcGkvYXBpJztcclxuXHJcbmNvbnN0IGZvcm1Mb2dpbiA9IGAgPGZvcm0gY2xhc3M9XCJmb3JtLXNpZ25pblwiIGlkPVwiYXV0aFwiPiAgICAgICBcclxuPGgzIGNsYXNzPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPtCS0LLQtdC00LjRgtC1INGB0LLQvtC4INC00LDQvdC90YvQtTwvaDM+XHJcblxyXG4gIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cInVzZXItZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIHJlcXVpcmVkIGF1dG9mb2N1cz1cIlwiLz5cclxuICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbWlubGVuZ3RoPVwiOFwiIGlkPVwidXNlci1wYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQv9Cw0YDQvtC70YxcIiByZXF1aXJlZC8+ICAgICAgXHJcbiAgXHJcbiAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiICBpZD1cImJ1dHRvbi1uZXctdXNlclwiIHR5cGUgPVwiYnV0dG9uXCI+INCg0LXQs9C40YHRgtGA0LDRhtC40Y8gPC9idXR0b24+IFxyXG4gIFxyXG48YnV0dG9uIGNsYXNzPVwiYnRuXCIgaWQ9XCJhdXRvcml6dGlvbkJ0blwiIHR5cGU9XCJzdWJtaXRcIj7QktC+0LnRgtC4PC9idXR0b24+ICAgXHJcbjwvZm9ybT5gO1xyXG5cclxuY29uc3QgZm9ybVJlZ2lzdHJhdGlvbiA9IGAgPGZvcm0gY2xhc3M9XCJmb3JtLXNpZ25pblwiIGlkPVwicmVnXCI+ICAgICAgIFxyXG48aDMgY2xhc3M9XCJmb3JtLXNpZ25pbi1oZWFkaW5nXCI+0JLQstC10LTQuNGC0LUg0YHQstC+0Lgg0LTQsNC90L3Ri9C1PC9oMz5cclxuXHJcbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VyLW5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJ1c2VyLW5hbWVcIiBwbGFjZWhvbGRlcj1cItCY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIiByZXF1aXJlZD1cIlwiIGF1dG9mb2N1cz1cIlwiLz5cclxuICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJ1c2VyLWVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIiByZXF1aXJlZCAvPlxyXG4gIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBtaW5sZW5ndGg9XCI4XCIgaWQ9XCJ1c2VyLXBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItC/0LDRgNC+0LvRjFwiIHJlcXVpcmVkIC8+ICBcclxuXHJcbjxidXR0b24gY2xhc3M9XCJidG5cIiBpZD1cInJlZ2lzdHJhdGlvbl9idG5cIiB0eXBlPVwic3VibWl0XCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQuCDQstGF0L7QtDwvYnV0dG9uPiAgIFxyXG48L2Zvcm0+YDtcclxuXHJcbmNsYXNzIEF1dGhvcml6YXRpb24ge1xyXG4gIG5ld1VzZXIobmFtZTpzdHJpbmcsIHBhc3N3b3JkOnN0cmluZywgZW1haWw6c3RyaW5nKTogdm9pZCB7XHJcbiAgICBhcGkuY3JlYXRlTmV3VXNlcihuYW1lLCBlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIH1cclxuXHJcbiAgc2lnbkluKHBhc3N3b3JkOnN0cmluZywgZW1haWw6c3RyaW5nKTogdm9pZCB7XHJcbiAgICBhcGkudXNlclNpZ25JbihlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5jb25zdCBtb2RhbEF1dGhvcml6YXRpb24gPSB7XHJcbiAgb3BlbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGF1dGhvcml6YXRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0aG9yaXphdGlvbicpO1xyXG4gICAgY29uc3QgYnRuQ2xvc2VNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2xvc2UnKTtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xyXG4gICAgY29uc3QgbW9kYWxSZXN1bHRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXJlc3VsdC13cmFwcGVyJyk7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBpZiAoYXV0aG9yaXphdGlvbkJ0bikge1xyXG4gICAgICBhdXRob3JpemF0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKF9lOiBFdmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQstC+0YIg0YLRg9GCINGA0LDQsdC+0YLQsNC10YIg0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+MScpO1xyXG4gICAgICAgIHdyYXBwZXIhLmlubmVySFRNTCA9IGZvcm1Mb2dpbjtcclxuICAgICAgICBtb2RhbFJlc3VsdFdyYXBwZXIhLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGNvbnN0IHVzZXJFbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItZW1haWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHVzZXJQYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItcGFzc3dvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHVzZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1uYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBpZiAodXNlckVtYWlsSW5wdXQgJiYgdXNlclBhc3N3b3JkSW5wdXQpIHtcclxuICAgICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGgnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICAgIGlmIChyZWdpc3RyYXRpRm9ybSkge1xyXG4gICAgICAgICAgICByZWdpc3RyYXRpRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB1c2VyRW1haWwgPSB1c2VyRW1haWxJbnB1dCEudmFsdWU7XHJcbiAgICAgICAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkID0gdXNlclBhc3N3b3JkSW5wdXQhLnZhbHVlO1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBhdXRob3JpemF0aW9uLnNpZ25Jbih1c2VyUGFzc3dvcmQsIHVzZXJFbWFpbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBidXR0b25OZXdVc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1uZXctdXNlcicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIGlmIChidXR0b25OZXdVc2VyKSB7XHJcbiAgICAgICAgICBidXR0b25OZXdVc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKF9lOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnXXRoeiDQtNC+INC40L3QvdC10YDQsCcpO1xyXG4gICAgICAgICAgICB3cmFwcGVyIS5pbm5lckhUTUwgPSBmb3JtUmVnaXN0cmF0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyRW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWVtYWlsJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1wYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1uYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWRlYnVnZ2VyXHJcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBpZiAodXNlck5hbWVJbnB1dCAmJiB1c2VyRW1haWxJbnB1dCAmJiB1c2VyUGFzc3dvcmRJbnB1dCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgICAgICAgIGlmIChyZWdpc3RyYXRpRm9ybSkge1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IHVzZXJFbWFpbElucHV0IS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkID0gdXNlclBhc3N3b3JkSW5wdXQhLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyTmFtZSA9IHVzZXJOYW1lSW5wdXQhLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyTmFtZSwgdXNlckVtYWlsLCB1c2VyUGFzc3dvcmQsICd1c2VyTmFtZSwgdXNlckVtYWlsLCB1c2VyUGFzc3dvcmQgJyk7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbi5uZXdVc2VyKHVzZXJOYW1lLCB1c2VyUGFzc3dvcmQsIHVzZXJFbWFpbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgICAgbW9kYWxSZXN1bHRXcmFwcGVyIS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfTtcclxuICAgIG92ZXJsYXkhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XHJcbiAgICBidG5DbG9zZU1vZGFsIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2RhbEF1dGhvcml6YXRpb247XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuXG5pbXBvcnQgbW9kYWxBdXRob3JpemF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwnO1xuXG5pbXBvcnQgeyBNZW51SXRlbXMgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5cbmltcG9ydCBNb2R1bGVNb2RlbCBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XG5cbmNsYXNzIE1vZHVsZUNvbnRyb2xsZXIge1xuICBteU1vZHVsZUNvbnRhaW5lciE6IEhUTUxFbGVtZW50O1xuXG4gIG15TW9kdWxlTW9kZWwhOiBNb2R1bGVNb2RlbDtcblxuICBtZW51TWFpbiAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51VGV4dGJvb2sgITogSFRNTEVsZW1lbnQ7XG5cbiAgbWVudVN0YXRpY3RpY3MgITogSFRNTEVsZW1lbnQ7XG5cbiAgbWVudUF1ZGlvY2FsbCAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51U3ByaW50ICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVUZWFtICE6IEhUTUxFbGVtZW50O1xuXG4gIGluaXQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgbW9kZWw6IE1vZHVsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwgPSBtb2RlbDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9KTtcblxuICAgIG1vZGFsQXV0aG9yaXphdGlvbi5vcGVuKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgLy8gd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI21haW4nO1xuICB9XG5cbiAgdXBkYXRlU3RhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgaGFzaFBhZ2VOYW1lID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwudXBkYXRlU3RhdGUoaGFzaFBhZ2VOYW1lKTtcbiAgICB0aGlzLmZpbmRNZW51RWxlbWVudHMoaGFzaFBhZ2VOYW1lKTtcbiAgfVxuXG4gIGZpbmRNZW51RWxlbWVudHMoaGFzaE5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICB0aGlzLm1lbnVNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX21haW4nKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVUZXh0Ym9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X190ZXh0Ym9vaycpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudVN0YXRpY3RpY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fc3RhdGljdGljcycpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudUF1ZGlvY2FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19hdWRpb2NhbGwnKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVTcHJpbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fc3ByaW50JykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51VGVhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X190ZWFtJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3Qgb2JqOk1lbnVJdGVtcyA9IHtcbiAgICAgIG1haW46IHRoaXMubWVudU1haW4sXG4gICAgICB0ZXh0Ym9vazogdGhpcy5tZW51VGV4dGJvb2ssXG4gICAgICBzdGF0aXN0aWNzOiB0aGlzLm1lbnVTdGF0aWN0aWNzLFxuICAgICAgYXVkaW9jYWxsOiB0aGlzLm1lbnVBdWRpb2NhbGwsXG4gICAgICBzcHJpbnQ6IHRoaXMubWVudVNwcmludCxcbiAgICAgIHRlYW06IHRoaXMubWVudVRlYW0sXG4gICAgfTtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwuaGlnaGxpZ2h0QWN0aXZlTWVudUl0ZW0ob2JqLCBoYXNoTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlQ29udHJvbGxlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5cclxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XHJcblxyXG5jb25zdCB1c2VyU2hvdyA9IGA8ZGl2IGNsYXNzPVwidXNlci1zaG93XCI+ICR7c3RvcmFnZS51c2VyIS5uYW1lfTwvZGl2PmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93VXNlcigpIHtcclxuICBjb25zdCBoZWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2F1dGgnKSBhcyBIVE1MRWxlbWVudDtcclxuICBjb25zdCBidXR0b25FbnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRob3JpemF0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgYnV0dG9uRW50ZXIucmVtb3ZlKCk7XHJcbiAgY29uc3QgVXNlclBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIFVzZXJQaWMuY2xhc3NMaXN0LmFkZCgndXNlci1waWMnKTtcclxuICBVc2VyUGljLmlubmVySFRNTCA9IHVzZXJTaG93O1xyXG4gIGhlZGVyLmFwcGVuZChVc2VyUGljKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xyXG5cclxuaW1wb3J0IHsgSVVzZXIsIElVc2VyRGF0YSB9IGZyb20gJ3R5cGVzL3R5cGVzJztcclxuXHJcbmNsYXNzIFN0b3JhZ2Uge1xyXG4gIHVzZXJzPzogQXJyYXk8SVVzZXJEYXRhPjtcclxuXHJcbiAgdXNlcj86IElVc2VyO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudXNlcnMgPSBbXTtcclxuICAgIHRoaXMudXNlciA9IHsgbmFtZTogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1uYW1lZC1hcy1kZWZhdWx0LW1lbWJlciAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cblxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zYXNzJztcblxuaW1wb3J0IE1vZHVsZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyL2NvbnRyb2xsZXInO1xuaW1wb3J0IE1vZHVsZU1vZGVsIGZyb20gJy4vbW9kZWwvbW9kZWwnO1xuaW1wb3J0IE1vZHVsZVZpZXcgZnJvbSAnLi92aWV3L3ZpZXcnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzLCBSb3V0ZXMsIEluaXRpYWxPYmogfSBmcm9tICcuL3R5cGVzL3R5cGVzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmltcG9ydCBNYWluUGFnZSBmcm9tICcuL3BhZ2VzL21haW4nO1xuXG5pbXBvcnQgVGV4dGJvb2tQYWdlIGZyb20gJy4vcGFnZXMvdGV4dGJvb2snO1xuaW1wb3J0IEFib3V0VGVhbVBhZ2UgZnJvbSAnLi9wYWdlcy90ZWFtJztcbmltcG9ydCBTcHJpbnRHYW1lUGFnZSBmcm9tICcuL3BhZ2VzL3NwcmludC9pbmRleCc7XG5pbXBvcnQgQXVkaW9jYWxsR2FtZVBhZ2UgZnJvbSAnLi9wYWdlcy9hdWRpb2NhbGwvaW5kZXgnO1xuaW1wb3J0IFN0YXRpc3RpY3NQYWdlIGZyb20gJy4vcGFnZXMvc3RhdGlzdGljcy9pbmRleCc7XG5cbmNvbnN0IGNvbXBvbmVudHM6IENvbXBvbmVudHMgPSB7XG4gIGhlYWRlcjogSGVhZGVyLFxuICBjb250ZW50OiBDb250ZW50LFxuICBmb290ZXI6IEZvb3Rlcixcbn07XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0ge1xuICBtYWluOiBNYWluUGFnZSxcbiAgZGVmYXVsdDogTWFpblBhZ2UsXG4gIHRleHRib29rOiBUZXh0Ym9va1BhZ2UsXG4gIHRlYW06IEFib3V0VGVhbVBhZ2UsXG4gIHNwcmludDogU3ByaW50R2FtZVBhZ2UsXG4gIGF1ZGlvY2FsbDogQXVkaW9jYWxsR2FtZVBhZ2UsXG4gIHN0YXRpc3RpY3M6IFN0YXRpc3RpY3NQYWdlLFxufTtcblxuY29uc3QgaW5pdGlhbE9iajogSW5pdGlhbE9iaiA9IHtcbiAgY29udGFpbmVyOiAnc3BhJyxcbiAgcm91dGVzLFxuICBjb21wb25lbnRzLFxufTtcblxuLyogLS0tLS0gc3BhIGluaXQgbW9kdWxlIC0tLSAqL1xuY29uc3QgbXlTUEEgPSAoKCkgPT4ge1xuICBsZXQgdmlldzogTW9kdWxlVmlldztcbiAgbGV0IG1vZGVsOiBNb2R1bGVNb2RlbDtcbiAgbGV0IGNvbnRyb2xsZXI6IE1vZHVsZUNvbnRyb2xsZXI7XG4gIHJldHVybiB7XG4gICAgaW5pdChvYmo6IEluaXRpYWxPYmopIHtcbiAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50cyhvYmouY29udGFpbmVyLCBvYmouY29tcG9uZW50cyk7XG4gICAgICBjb25zdCBjb250YWluZXJTUEEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmouY29udGFpbmVyKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHZpZXcgPSBuZXcgTW9kdWxlVmlldygpO1xuICAgICAgbW9kZWwgPSBuZXcgTW9kdWxlTW9kZWwoKTtcbiAgICAgIGNvbnRyb2xsZXIgPSBuZXcgTW9kdWxlQ29udHJvbGxlcigpO1xuXG4gICAgICB2aWV3LmluaXQoY29udGFpbmVyU1BBLCByb3V0ZXMpO1xuICAgICAgbW9kZWwuaW5pdCh2aWV3KTtcbiAgICAgIGNvbnRyb2xsZXIuaW5pdChjb250YWluZXJTUEEsIG1vZGVsKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyQ29tcG9uZW50cyhjb250YWluZXI6IHN0cmluZywgY29tcG9uZW50c09iajogQ29tcG9uZW50cykge1xuICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCBjb21wb25lbnRzTGlzdCA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNPYmopO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29tcG9uZW50c0xpc3QpIHtcbiAgICAgICAgcm9vdC5pbm5lckhUTUwgKz0gY29tcG9uZW50c09ialtpdGVtIGFzIGtleW9mIENvbXBvbmVudHNdLnJlbmRlcigpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59KSgpO1xuXG4vKiAtLS0tLS0gZW5kIGFwcCBtb2R1bGUgLS0tLS0gKi9cblxuLyoqICogLS0tIGluaXQgbW9kdWxlIC0tLSAqKiAqL1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIG15U1BBLmluaXQoaW5pdGlhbE9iaik7XG59KTtcbiIsImltcG9ydCBNb2RlbFZpZXcgZnJvbSAnLi4vdmlldy92aWV3JztcbmltcG9ydCB7IE1lbnVJdGVtcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcblxuY2xhc3MgTW9kdWxlTW9kZWwge1xuICBteU1vZHVsZVZpZXchOiBNb2RlbFZpZXc7XG5cbiAgaW5pdCh2aWV3OiBNb2RlbFZpZXcpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVWaWV3ID0gdmlldztcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKHBhZ2VOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyQ29udGVudChwYWdlTmFtZSk7XG4gIH1cblxuICBoaWdobGlnaHRBY3RpdmVNZW51SXRlbShvYmo6IE1lbnVJdGVtcywgaGFzaE5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5oaWdobGlnaHRBY3RpdmVNZW51SXRlbShvYmosIGhhc2hOYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVNb2RlbDtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmNvbnN0IEF1ZGlvY2FsbEdhbWVQYWdlID0ge1xuICBjbGFzc25hbWU6ICdhdWRpb2NhbGwnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgICA8ZGl2IGNsYXNzID0gJyR7dGhpcy5jbGFzc25hbWV9LWNvbnRlaW5lcic+PC9kaXY+O1xuICAgICAgJHtGb290ZXIucmVuZGVyKCl9XG4gICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdWRpb2NhbGxHYW1lUGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmltcG9ydCBwaG9uZSBmcm9tICcuLi9hc3NldHMvcGhvbmUuc3ZnJztcbmltcG9ydCBkaWN0aW9uYXJ5IGZyb20gJy4uL2Fzc2V0cy9kaWN0aW9uYXJ5LnN2Zyc7XG5pbXBvcnQgcGxheSBmcm9tICcuLi9hc3NldHMvcGxheS5zdmcnO1xuaW1wb3J0IGFjc2VzcyBmcm9tICcuLi9hc3NldHMvYWNzZXNzLnN2Zyc7XG5cbmNvbnN0IE1haW5QYWdlID0ge1xuICBpZDogJ21haW4nLFxuICByZW5kZXI6ICgpOnN0cmluZyA9PiBgXG4gICAgICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VcIj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19wYWdlX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPlRoZSBXb3JsZCBpcyBZb3VycyB3aXRoIFJTTGFuZyE8L2gyPlxuICAgICAgICAgICA8cD5SU0xhbmcg4oCUINGN0YLQviDRjdGE0YTQtdC60YLQuNCy0L3Ri9C5INGB0LXRgNCy0LjRgSDQtNC70Y8g0YPQstC70LXQutCw0YLQtdC70YzQvdC+0Lkg0L/RgNCw0LrRgtC40LrQuCDQsNC90LPQu9C40LnRgdC60L7Qs9C+INGP0LfRi9C60LAuINCf0YDQuNGB0L7QtdC00LjQvdGP0LnRgdGPIVxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fcGFnZV9fYWR2YW50YWdlc1wiPlxuICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPtCf0L7Rh9C10LzRgyBSU0xhbmc/PC9oMj5cbiAgICAgICAgICAgPHVsIGNsYXNzPVwiYWR2YW50YWdlc19fbGlzdFwiPlxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHthY3Nlc3N9XCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCR0LXRgdC/0LvQsNGC0L3Ri9C5INC00L7RgdGC0YPQvzwvaDM+XG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RleHRcIj7QndCw0YjQsCDQvNC40YHRgdC40Y8g4oCUINGB0LTQtdC70LDRgtGMINC+0LHRg9GH0LXQvdC40Y8g0Y/Qt9GL0LrQsNC8INC00L7RgdGC0YPQv9C90YvQvCDQtNC70Y8g0LrQsNC20LTQvtCz0L48L3A+XG4gICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZGljdGlvbmFyeX1cIj5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0KHQu9C+0LLQsNGA0Yw8L2gzPlxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+0KnQtdC70LrQvdC40YLQtSDQu9GO0LHQvtC1INGB0LvQvtCy0L4sINGH0YLQvtCx0Ysg0YPQstC40LTQtdGC0Ywg0L7Qv9GA0LXQtNC10LvQtdC90LjQtSDQsiDQuNGB0YLQvtGH0L3QuNC60LDRhSwg0Lgg0YHQvtGF0YDQsNC90LjRgtC1INC10LPQviDQsiDRgdCy0L7QtdC8INGB0L/QuNGB0LrQtSDQutCw0YDRgtC+0YfQtdC6PC9wPlxuICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbVwiPlxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3BsYXl9XCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCY0LPRgNCw0LksINGH0YLQvtCx0Ysg0YPRh9C40YLRjNGB0Y88L2gzPlxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+0JjQs9GA0Ysg0LLQutC70Y7Rh9Cw0Y7RgiDQkNGD0LTQuNC+0LLRi9C30L7QsizQodC/0YDQuNC90YIg0Lgg0LzQvdC+0LPQvtC1INC00YDRg9Cz0L7QtS4uLjwvcD5cbiAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwaG9uZX1cIj5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0KPRh9C40YLQtdGB0Ywg0L3QsCDRhdC+0LTRgzwvaDM+XG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RleHRcIj5SU0xhbmcg0LTQvtGB0YLRg9C/0L3QsCDQtNC70Y8g0LLQtdCxINC4INC80L7QsdC40LvRjNC90YvRhSDRg9GB0YLRgNC+0LnRgdGC0LIuINCj0YfQuNGC0LXRgdGMINC40Lcg0LvRjtCx0L7Qs9C+INC80LXRgdGC0LAhPC9wPlxuICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgIDwvdWw+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICAke0Zvb3Rlci5yZW5kZXIoKX1cbiAgICBgLFxufTtcblxuLy8gZXhwb3J0IHsgTWFpblBhZ2UgfTtcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJztcblxuY29uc3QgU3ByaW50R2FtZVBhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ3NwcmludCcsXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgPGRpdiBjbGFzcyA9ICcke3RoaXMuY2xhc3NuYW1lfS1jb250ZWluZXInPjwvZGl2PlxuICAgICR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcHJpbnRHYW1lUGFnZTtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmNvbnN0IFN0YXRpc3RpY3NQYWdlID0ge1xuICBjbGFzc25hbWU6ICdzdGF0aXN0aWNzJyxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAke0hlYWRlci5yZW5kZXIoKX1cbiAgICA8ZGl2IGNsYXNzID0gJyR7dGhpcy5jbGFzc25hbWV9LWNvbnRlaW5lcic+PC9kaXY+XG4gICAgJHtGb290ZXIucmVuZGVyKCl9YDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpc3RpY3NQYWdlO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcblxuY29uc3QgQWJvdXRUZWFtUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAndGVhbS1wYWdlJyxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAke0hlYWRlci5yZW5kZXIoKX1cbiAgICA8ZGl2IGNsYXNzID0gJyR7dGhpcy5jbGFzc25hbWV9LWNvbnRlaW5lcic+PC9kaXY+XG4gICAgJHtGb290ZXIucmVuZGVyKCl9XG4gICAgYDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0VGVhbVBhZ2U7XG4iLCJpbXBvcnQgJy4vdGV4dGJvb2suc2Nzcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5jb25zdCBUZXh0Ym9va1BhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ3RleHRib29rJyxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAke0hlYWRlci5yZW5kZXIoKX1cbiAgICA8ZGl2IGNsYXNzID0gJyR7dGhpcy5jbGFzc25hbWV9Jz48L2Rpdj5cbiAgICAke0Zvb3Rlci5yZW5kZXIoKX1gO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGJvb2tQYWdlO1xuIiwiaW1wb3J0IHsgUm91dGVzLCBNZW51SXRlbXMgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5cbmNsYXNzIE1vZHVsZVZpZXcge1xuICBteU1vZHVsZUNvbnRhaW5lciE6SFRNTEVsZW1lbnQ7XG5cbiAgY29udGVudENvbnRhaW5lciE6SFRNTEVsZW1lbnQ7XG5cbiAgcm91dGVzT2JqITpSb3V0ZXM7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50LCByb3V0ZXM6IFJvdXRlcyk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnJvdXRlc09iaiA9IHJvdXRlcztcbiAgfVxuXG4gIHJlbmRlckNvbnRlbnQoaGFzaFBhZ2VOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgbGV0IHJvdXRlTmFtZSA9ICdkZWZhdWx0JztcbiAgICByb3V0ZU5hbWUgPSAoaGFzaFBhZ2VOYW1lLmxlbmd0aCkgPyBoYXNoUGFnZU5hbWUgOiByb3V0ZU5hbWU7XG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLnJvdXRlc09ialtyb3V0ZU5hbWUgYXMga2V5b2YgUm91dGVzXTtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyLmlubmVySFRNTCA9IHJvdXRlLnJlbmRlcigpO1xuICB9XG5cbiAgaGlnaGxpZ2h0QWN0aXZlTWVudUl0ZW0gPSAob2JqOk1lbnVJdGVtcywgaGFzaE5hbWU6c3RyaW5nKTp2b2lkID0+IHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBmb3IobGV0IGtleSBpbiBvYmope1xuICAgICAgaWYgKG9ialtrZXkgYXMga2V5b2YgTWVudUl0ZW1zXS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnVfX2l0ZW1fYWN0aXZlJykpIHtcbiAgICAgICAgb2JqW2tleSBhcyBrZXlvZiBNZW51SXRlbXNdLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoYXNoTmFtZSkge1xuICAgICAgb2JqW2hhc2hOYW1lIGFzIGtleW9mIE1lbnVJdGVtc10uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLm1haW4uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZHVsZVZpZXc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9