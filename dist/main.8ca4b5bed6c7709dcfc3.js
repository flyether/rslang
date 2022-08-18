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


/* eslint-disable no-else-return */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.api = void 0;
const api_path_1 = __webpack_require__(/*! ./api-path */ "./src/api/api-path.ts");
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
                else {
                    return yield Promise.reject(new Error(response.statusText));
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
                else {
                    return yield Promise.reject(new Error(response.statusText));
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
                    return yield response.json();
                }
                else {
                    return yield Promise.reject(new Error(response.statusText));
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
                else {
                    return yield Promise.reject(new Error(response.statusText));
                }
            }
            catch (error) {
                throw new Error("Can't get words");
            }
        });
    },
    getWord(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${api_path_1.apiPath}${api_path_1.wordsEndpoint}/${id}`, { method: 'GET' });
                if (response.ok) {
                    return yield response.json();
                }
                else {
                    return yield Promise.reject(new Error(response.statusText));
                }
            }
            catch (error) {
                throw new Error("Can't get word");
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const show_user_1 = __importDefault(__webpack_require__(/*! ../functional/show-user */ "./src/functional/show-user.ts"));
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
          ${(0, show_user_1.default)(true)}
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
/* eslint-disable max-len */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formRegistration = exports.formLogin = void 0;
exports.formLogin = ` <form class="form-signin" id="auth">       
<h3 class="form-signin-heading">Введите свои данные</h3>

  <input type="email" id="user-email" class="form-control" name="email" placeholder="Email Address" required />
  <input type="password" minlength="8" id="user-password" class="form-control" name="password" placeholder="пароль" required/>      
  
  <button class="btn"  id="button-new-user" type ="button"> Регистрация </button> 
  
<button class="btn" id="autoriztionBtn" type="submit">Войти</button>  
<h4 class="form-signin-error"></h4> 
</form>`;
exports.formRegistration = ` <form class="form-signin" id="reg">       
<h3 class="form-signin-heading">Введите свои данные</h3>

  <input type="text" id="user-name" class="form-control" name="user-name" placeholder="Имя пользователя" required="" />
  <input type="email" id="user-email" class="form-control" name="email" placeholder="Email Address" required />
  <input type="password" minlength="8" id="user-password" class="form-control" name="password" placeholder="пароль" required />  

<button class="btn" id="registration_btn" type="submit">Регистрация и вход</button>  
<h4 class="form-reg-error"></h4>  
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
const listener_audiocall_1 = __importDefault(__webpack_require__(/*! ../pages/audiocall/utils/listener-audiocall */ "./src/pages/audiocall/utils/listener-audiocall.ts"));
class ModuleController {
    init(container, model) {
        this.myModuleContainer = container;
        this.myModuleModel = model;
        window.addEventListener('hashchange', () => {
            this.updateState();
        });
        // modalAuthorization.open();
        listener_1.default.open();
        listener_audiocall_1.default.open();
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
        if (this.menuMain) {
            this.myModuleModel.highlightActiveMenuItem(obj, hashName);
        }
    }
}
exports["default"] = ModuleController;


/***/ }),

/***/ "./src/functional/listener.ts":
/*!************************************!*\
  !*** ./src/functional/listener.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-shadow */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const api_1 = __webpack_require__(/*! ../api/api */ "./src/api/api.ts");
const modal_1 = __webpack_require__(/*! ../components/modal */ "./src/components/modal.ts");
const show_user_1 = __importDefault(__webpack_require__(/*! ./show-user */ "./src/functional/show-user.ts"));
const storage_1 = __webpack_require__(/*! ./storage */ "./src/functional/storage.ts");
class Listener {
    open() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('authorization')) {
                const btnCloseModal = document.getElementById('btn-close');
                const overlay = document.getElementById('overlay');
                const modalResultWrapper = document.getElementById('modal-result-wrapper');
                const wrapper = document.querySelector('.wrapper');
                wrapper.innerHTML = modal_1.formLogin;
                modalResultWrapper.style.display = 'block';
                const userEmailInput = document.getElementById('user-email');
                const userPasswordInput = document.getElementById('user-password');
                if (userEmailInput && userPasswordInput) {
                    const authForm = document.getElementById('auth');
                    if (authForm) {
                        authForm.addEventListener('submit', (e) => {
                            const errForm = document.querySelector('.form-signin-error');
                            errForm.innerHTML = '';
                            const userEmail = userEmailInput.value;
                            const userPassword = userPasswordInput.value;
                            e.preventDefault();
                            api_1.api.userSignIn(userEmail, userPassword)
                                .then((value) => {
                                storage_1.storage.user = value;
                                localStorage.setItem('user', JSON.stringify(value));
                                (0, show_user_1.default)(false);
                                closeModal();
                            }).catch((err) => {
                                errForm.innerHTML = 'Пользователь не найден, проверьте свои данные или зарегистрируйтесь';
                                console.log(err);
                            });
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
                                    const errForm = document.querySelector('.form-reg-error');
                                    errForm.innerHTML = '';
                                    const userEmail = userEmailInput.value;
                                    const userPassword = userPasswordInput.value;
                                    const userName = userNameInput.value;
                                    e.preventDefault();
                                    api_1.api.createNewUser(userName, userEmail, userPassword)
                                        .then(() => {
                                        api_1.api.userSignIn(userEmail, userPassword)
                                            .then((value) => {
                                            storage_1.storage.user = value;
                                            localStorage.setItem('user', JSON.stringify(value));
                                            (0, show_user_1.default)(false);
                                            closeModal();
                                        });
                                    })
                                        .catch((err) => {
                                        errForm.innerHTML = 'Возможно этот e-mail уже занят, попробуйте другой';
                                        console.log(err);
                                    });
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
            if (e.target.classList.contains('exit_btn')) {
                localStorage.removeItem('user');
                storage_1.storage.user = {
                    message: '', token: '', refreshToken: '', userId: '', name: '',
                };
                (0, show_user_1.default)(false);
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
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const storage_1 = __webpack_require__(/*! ./storage */ "./src/functional/storage.ts");
function showUser(ret) {
    var _a, _b;
    let className = 'authorization';
    let context = 'Войти';
    if (((_a = storage_1.storage.user) === null || _a === void 0 ? void 0 : _a.token) != '') {
        context = 'Выйти';
        className = 'exit_btn';
    }
    const html = `<div class="user-show"> ${(_b = storage_1.storage.user) === null || _b === void 0 ? void 0 : _b.name} <button class=${className}>${context}</button> </div>`;
    const header = document.querySelector('.header__auth');
    if (ret) {
        return html;
    }
    header.innerHTML = html;
}
exports["default"] = showUser;


/***/ }),

/***/ "./src/functional/storage.ts":
/*!***********************************!*\
  !*** ./src/functional/storage.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storage = void 0;
class Storage {
    constructor() {
        if (localStorage.getItem('user')) {
            this.user = JSON.parse(localStorage.getItem('user'));
        }
        else {
            this.user = {
                message: '', token: '', refreshToken: '', userId: '', name: '',
            };
        }
        if (localStorage.getItem('word')) {
            this.word = JSON.parse(localStorage.getItem('word'));
        }
        else {
            this.word = {
                id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
            };
        }
        if (localStorage.getItem('words')) {
            this.words = JSON.parse(localStorage.getItem('words'));
        }
        else {
            this.words = [];
        }
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
const main_2 = __importDefault(__webpack_require__(/*! ./pages/audiocall/main */ "./src/pages/audiocall/main.ts"));
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
    audiocallgame: main_2.default,
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
const start_audiocall_1 = __webpack_require__(/*! ./start-audiocall */ "./src/pages/audiocall/start-audiocall.ts");
const AudiocallGamePage = {
    classname: 'audiocall',
    render() {
        return `
      ${header_1.default.render()}
      <div class = 'audio-container ${this.classname}-conteiner'> ${start_audiocall_1.startScrinAudioCall.render()}</div>;
      ${footer_1.default.render()}
     `;
    },
};
exports["default"] = AudiocallGamePage;


/***/ }),

/***/ "./src/pages/audiocall/main.ts":
/*!*************************************!*\
  !*** ./src/pages/audiocall/main.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const game_render_1 = __webpack_require__(/*! ./utils/game-render */ "./src/pages/audiocall/utils/game-render.ts");
const AudiocallGame = {
    hashes: {
        main: '#main',
    },
    render() {
        return `
       <div class = 'container'> <button  type="button"  class="go-main"><a href="${this.hashes.main}" ></a>Вернуться на главную</a></button> ${game_render_1.gameArea}</div>
      `;
    },
};
exports["default"] = AudiocallGame;


/***/ }),

/***/ "./src/pages/audiocall/start-audiocall.ts":
/*!************************************************!*\
  !*** ./src/pages/audiocall/start-audiocall.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


/* eslint-disable linebreak-style */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.startScrinAudioCall = void 0;
exports.startScrinAudioCall = {
    hashes: {
        audiocallGame: '#audiocallGame',
    },
    render() {
        return /* html */ ` 

<div class="audio-call"> 
<p class="audio-call__text">В игре аудиовызов вамнужно выбрать правильный перевод слова. <br>

Чтобы играть с помощью клавиатуры, используй клавиши
1, 2, 3, 4, 5 - чтобы дать ответ,
space - для воспроизведения звука,
enter - чтобы пропустить вопрос,
стрелка-вправо - чтобы перейти к следующему вопросу.<br> <br>
Выбери уровень сложности:</p>
<button id="level1" type="button"  class="btn-level"><a href="${this.hashes.audiocallGame}" class="menu__main menu__item_active">Уровень 1</a></button>
<button id="level2" type="button"  class="btn-level">Уровень 2</button>
<button id="level3" type="button"  class="btn-level">Уровень 3</button>
<button id="level4" type="button"  class="btn-level">Уровень 4</button>
<button id="level5" type="button"  class="btn-level">Уровень 5</button>
<button id="level6" type="button"  class="btn-level">Уровень 6</button>
</div>
`;
    },
};


/***/ }),

/***/ "./src/pages/audiocall/utils/game-render.ts":
/*!**************************************************!*\
  !*** ./src/pages/audiocall/utils/game-render.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gameArea = void 0;
const api_path_1 = __webpack_require__(/*! ../../../api/api-path */ "./src/api/api-path.ts");
const supporting_func_1 = __webpack_require__(/*! ./supporting-func */ "./src/pages/audiocall/utils/supporting-func.ts");
exports.gameArea = ` 
 <div class="audio-container-game"> 
    <div class="btn-sound"><div class="sound-wrapper"> 
    <audio class="audio" src="${api_path_1.apiPath + supporting_func_1.wordObj.audio}" autoplay></audio> </div></div>
    <div class="button-container">${(0, supporting_func_1.printBtnString)()}</div>
  </div>
 `;


/***/ }),

/***/ "./src/pages/audiocall/utils/listener-audiocall.ts":
/*!*********************************************************!*\
  !*** ./src/pages/audiocall/utils/listener-audiocall.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const api_path_1 = __webpack_require__(/*! ../../../api/api-path */ "./src/api/api-path.ts");
const main_1 = __importDefault(__webpack_require__(/*! ../main */ "./src/pages/audiocall/main.ts"));
const supporting_func_1 = __webpack_require__(/*! ./supporting-func */ "./src/pages/audiocall/utils/supporting-func.ts");
let score = 0;
localStorage.setItem('score', score.toString());
class ListenerAudioCall {
    open() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-sound')) {
                (0, supporting_func_1.soundAudio)((api_path_1.apiPath + supporting_func_1.wordObj.audio));
            }
            if (e.target.classList.contains('btn-translation')) {
                const round = Number(localStorage.getItem('round')) + 1;
                localStorage.setItem('round', round.toString());
                if (e.target.id === supporting_func_1.wordObj.wordTranslate) {
                    score = Number(localStorage.getItem('score')) + 1;
                    localStorage.setItem('score', score.toString());
                    (0, supporting_func_1.soundAudio)((api_path_1.apiPath + supporting_func_1.wordObj.audio));
                    e.target.classList.add('btn-translation-right');
                    main_1.default.render();
                }
                else {
                    e.target.classList.add('btn-translation-wrong');
                    (0, supporting_func_1.soundAudio)((api_path_1.apiPath + supporting_func_1.wordObj.audio));
                    main_1.default.render();
                }
            }
        });
    }
}
const listenerAudioCall = new ListenerAudioCall();
exports["default"] = listenerAudioCall;


/***/ }),

/***/ "./src/pages/audiocall/utils/supporting-func.ts":
/*!******************************************************!*\
  !*** ./src/pages/audiocall/utils/supporting-func.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable linebreak-style */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-shadow */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wordObj = exports.printBtnString = exports.soundAudio = void 0;
const storage_1 = __webpack_require__(/*! ../../../functional/storage */ "./src/functional/storage.ts");
const api_1 = __webpack_require__(/*! ../../../api/api */ "./src/api/api.ts");
let round = 0;
localStorage.setItem('raund', round.toString());
// констана которая получает с сервера массив слов
const apiGetWords = api_1.api.getWords(0, 0)
    .then((value) => {
    storage_1.storage.words = value;
    localStorage.setItem('words', JSON.stringify(value));
}).catch((err) => {
    console.log(err);
});
// получаем массив преводов
function getWordsMap() {
    apiGetWords;
    const words = storage_1.storage.words.map((item) => item.wordTranslate);
    return words;
}
const wordsString = getWordsMap();
// перемешиваем массив преводов
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
shuffle(wordsString);
// создаем масси в котром будет тоько 6 слов для игры
let arraySixWords = [];
arraySixWords = wordsString.slice(0, 6);
// выбираем случайное слово из 6, которое будем угадывать
const wordRight = arraySixWords[Math.floor(Math.random() * arraySixWords.length)];
// получаем делаем объект в который сохраним выбранное слово со всеми данными
let wordObj = {
    id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
};
exports.wordObj = wordObj;
for (let i = 0; i < storage_1.storage.words.length; i++) {
    if (storage_1.storage.words[i].wordTranslate === wordRight) {
        exports.wordObj = wordObj = storage_1.storage.words[i];
    }
}
// функция проигрывания аудио с путем из нашего обекта-слово
function soundAudio(path) {
    const audiod = new Audio();
    audiod.src = `${path}`;
    audiod.autoplay = true;
}
exports.soundAudio = soundAudio;
// рисуем кнопки с переводами
function printBtnString() {
    let a = '';
    let containerBtn = ' ';
    for (let i = 0; i < arraySixWords.length; i++) {
        a = arraySixWords[i];
        containerBtn += `<button  type="button" id="${a}" class="btn-translation">${a}</button> `;
    }
    return containerBtn;
}
exports.printBtnString = printBtnString;


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
/* eslint-disable import/no-cycle */
__webpack_require__(/*! ./textbook.scss */ "./src/pages/textbook/textbook.scss");
const api_1 = __webpack_require__(/*! ../../api/api */ "./src/api/api.ts");
const header_1 = __importDefault(__webpack_require__(/*! ../../components/header */ "./src/components/header.ts"));
const footer_1 = __importDefault(__webpack_require__(/*! ../../components/footer */ "./src/components/footer.ts"));
const TextbookPage = {
    classname: 'textbook',
    wordlist: 'word-list',
    // render(): string {
    //   const view = ` <div class=${this.classname}>
    //   <div class="textbook-navigation">
    //     <button class="btn-round"></button>
    //     <p class="unit-name">Unit 1 <span class="unit-page">page 1</span></p>
    //   </div>
    //   <ul class=${this.wordlist}>
    //    ${this.getCards()}
    //   </ul>
    //   <div class="textbook-footer">
    //     <div class="textbook-pagination">
    //       <button class="pagination-btn btn-orange">Prev</button>
    //       <button class="pagination-btn btn-orange">Next</button>
    //     </div>
    //   </div>
    // </div>`;
    //   return `${Header.render()}${view}${Footer.render()}`;
    // },
    render() {
        const view = `<div class="textbook-units">
    <div class="textbook-unit" data-unit="1">Раздел 1</div>
    <div class="textbook-unit" data-unit="2">Раздел 2</div>
    <div class="textbook-unit" data-unit="3">Раздел 3</div>
    <div class="textbook-unit" data-unit="4">Раздел 4</div>
    <div class="textbook-unit" data-unit="5">Раздел 5</div>
    <div class="textbook-unit" data-unit="6">Раздел 6</div>
    <div class="textbook-unit" data-unit="7">Раздел "Сложные слова"</div>
    </div>`;
        return `${header_1.default.render()}${view}${footer_1.default.render()}`;
    },
    // render(): string {
    //   return `<ul class="unit-pages">
    // ${this.renderPages()}
    // </ul>`;
    // },
    renderPages() {
        let pages = '';
        const pagesCount = 30;
        for (let i = 1; i <= pagesCount; i += 1) {
            pages += `<li class="unit-page">Page ${i}</li>`;
        }
        return pages;
    },
    getCards() {
        const { wordlist } = this;
        function renderCards(words) {
            const wordContainer = document.querySelector(`.${wordlist}`);
            if (wordContainer) {
                wordContainer.innerHTML = '';
            }
            for (let i = 0; i < words.length; i += 1) {
                const card = document.createElement('li');
                card.classList.add('word-item');
                card.innerHTML = `
  <div class="word-image" 
  style="background-image: url(https://rslang-learning-english-words.herokuapp.com/${words[i].image})">
  </div>
  <div class="word-description">
    <div class="word-pronounce word-audio">
    <p>${words[i].word} ${words[i].transcription}</p>
      <div class="audio"><audio></audio></div>
    </div>
    <p class="word-pronounce translation">${words[i].wordTranslate}</p>
    <p class="word-example">${words[i].textMeaning}</p>
    <p class="word-example translation">${words[i].textMeaningTranslate}</p>
    <p class="word-example">${words[i].textExample}</p>
    <p class="word-example translation">${words[i].textExampleTranslate}</p>
  </div>
  <div class="word-noted">
      <button class="btn-orange btn-difficult">Difficult?</button>
      <button class="btn-orange btn-learned">Learned?</button>
  </div>`;
                wordContainer === null || wordContainer === void 0 ? void 0 : wordContainer.append(card);
            }
        }
        (() => __awaiter(this, void 0, void 0, function* () {
            yield api_1.api.getWords(3, 5)
                .then((res) => {
                renderCards(res);
            });
        }))();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b29rL3RleHRib29rLnNjc3M/ZTIwZiIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3M/YWFhZiIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvYXBpL2FwaS1wYXRoLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9hcGkvYXBpLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9tb2RhbC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9mdW5jdGlvbmFsL2xpc3RlbmVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9mdW5jdGlvbmFsL3Nob3ctdXNlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvZnVuY3Rpb25hbC9zdG9yYWdlLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvbW9kZWwvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL21haW4udHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC9zdGFydC1hdWRpb2NhbGwudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC91dGlscy9nYW1lLXJlbmRlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL3V0aWxzL2xpc3RlbmVyLWF1ZGlvY2FsbC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL3V0aWxzL3N1cHBvcnRpbmctZnVuYy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvbWFpbi50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvc3ByaW50L2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9zdGF0aXN0aWNzL2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy90ZWFtLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy90ZXh0Ym9vay9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvdmlldy92aWV3LnRzIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuXG5jb25zdCBhcGlQYXRoID0gJ2h0dHBzOi8vcnNsYW5nLWxlYXJuaW5nLWVuZ2xpc2gtd29yZHMuaGVyb2t1YXBwLmNvbS8nO1xuY29uc3Qgd29yZHNFbmRwb2ludCA9ICd3b3Jkcyc7XG5jb25zdCB1c2Vyc0VuZHBvaW50ID0gJ3VzZXJzJztcbmNvbnN0IHNpZ25JbiA9ICdzaWduaW4nO1xuXG5leHBvcnQge1xuICBhcGlQYXRoLCB3b3Jkc0VuZHBvaW50LCB1c2Vyc0VuZHBvaW50LCBzaWduSW4sXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tZWxzZS1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG5cbmltcG9ydCB7XG4gIGFwaVBhdGgsIHVzZXJzRW5kcG9pbnQsIHdvcmRzRW5kcG9pbnQsIHNpZ25Jbixcbn0gZnJvbSAnLi9hcGktcGF0aCc7XG5pbXBvcnQgeyBJVXNlciwgSVdvcmQsIElVc2VyRGF0YSB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcblxuY29uc3QgYXBpID0ge1xuXG4gIGFzeW5jIGNyZWF0ZU5ld1VzZXIobmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxJVXNlciB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdsZW5ndGggbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZycpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBnZXRVc2VyKGlkOiBzdHJpbmcpOiBQcm9taXNlPElVc2VyIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3VzZXJzRW5kcG9pbnR9LyR7aWR9YCxcbiAgICAgICAgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSVVzZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyB1c2VyU2lnbkluKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPElVc2VyRGF0YSB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHtzaWduSW59YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHVzZXInKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZ2V0V29yZHMoZ3JvdXA6IG51bWJlciwgcGFnZTogbnVtYmVyKTogUHJvbWlzZTxJV29yZFtdIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3dvcmRzRW5kcG9pbnR9P2dyb3VwPSR7Z3JvdXB9JnBhZ2U9JHtwYWdlfWAsXG4gICAgICAgIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElXb3JkW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZ2V0IHdvcmRzXCIpO1xuICAgIH1cbiAgfSxcbiAgYXN5bmMgZ2V0V29yZChpZDogc3RyaW5nKTogUHJvbWlzZTxJV29yZCB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt3b3Jkc0VuZHBvaW50fS8ke2lkfWAsXG4gICAgICAgIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElXb3JkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGdldCB3b3JkXCIpO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCB7IGFwaSB9O1xuIiwiY29uc3QgQ29udGVudCA9IHtcbiAgcmVuZGVyOiAoY3VzdG9tQ2xhc3MgPSAnJyk6c3RyaW5nID0+IGA8ZGl2IGNsYXNzPVwiY29udGVudCAke2N1c3RvbUNsYXNzfVwiIGlkPVwiY29udGVudFwiPjwvZGl2PmAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiY29uc3QgRm9vdGVyID0ge1xuICByZW5kZXI6IChjdXN0b21DbGFzcyA9ICcnKTpzdHJpbmcgPT4gYDxmb290ZXIgY2xhc3M9XCJmb290ZXIgJHtjdXN0b21DbGFzc31cIj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2l0aHViLWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9mbHlldGhlclwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5mbHlldGhlcjxhPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGFyaW5hOTkyXCIgY2xhc3M9XCJnaXRodWItbGlua1wiPkRhcmluYTk5MjxhPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQWxlbmFEb3pcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+QWxlbmFEb3o8YT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuPiYjMTY5OyAyMDIyPC9zcGFuPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgY2xhc3M9XCJycy1saW5rXCI+PC9hPlxuICAgICAgICAgICAgPC9mb290ZXI+YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBzaG93VXNlciBmcm9tICcuLi9mdW5jdGlvbmFsL3Nob3ctdXNlcic7XG5cbmNvbnN0IEhlYWRlciA9IHtcbiAgaGFzaGVzOiB7XG4gICAgbWFpbjogJyNtYWluJyxcbiAgICB0ZXh0Ym9vazogJyN0ZXh0Ym9vaycsXG4gICAgc3RhdGlzdGljczogJyNzdGF0aXN0aWNzJyxcbiAgICBhdWRpb2NhbGw6ICcjYXVkaW9jYWxsJyxcbiAgICBzcHJpbnQ6ICcjc3ByaW50JyxcbiAgICB0ZWFtOiAnI3RlYW0nLFxuICB9LFxuXG4gIHJlbmRlcihjdXN0b21DbGFzcyA9ICcnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJtb2RhbC1yZXN1bHQtd3JhcHBlclwiPlxuICAgIDxkaXYgaWQ9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cIm1vZGFsLXdpbmRvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImJ0bi1jbG9zZVwiPtC30LDQutGA0YvRgtGMPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgICAgPGhlYWRlciBjbGFzcz1cImhlYWRlciAke2N1c3RvbUNsYXNzfVwiIGlkPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cImhlYWRlcl9fbG9nb1wiPjxhIGhyZWY9XCJcIj5SU0xhbmc8L2E+PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYXV0aFwiPlxuICAgICAgICAgICR7c2hvd1VzZXIodHJ1ZSl9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19hdXRoXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmF2IGNsYXNzPVwiaGVhZGVyX19tZW51XCI+XG4gICAgICAgICAgPHVsIGNsYXNzPVwibWVudV9fbGlzdFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLm1haW59XCIgY2xhc3M9XCJtZW51X19tYWluIG1lbnVfX2l0ZW1fYWN0aXZlXCI+0JPQu9Cw0LLQvdCw0Y88L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHt0aGlzLmhhc2hlcy50ZXh0Ym9va31cIiBjbGFzcz1cIm1lbnVfX3RleHRib29rXCI+0KPRh9C10LHQvdC40Lo8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMuc3RhdGlzdGljc31cIiBjbGFzcz1cIm1lbnVfX3N0YXRpY3RpY3MgbWVudV9faXRlbV9kaXNhYmxlXCI+0KHRgtCw0YLQuNGB0YLQuNC60LA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbH1cIiBjbGFzcz1cIm1lbnVfX2F1ZGlvY2FsbFwiPtCQ0YPQtNC40L7QstGL0LfQvtCyPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMuc3ByaW50fVwiIGNsYXNzPVwibWVudV9fc3ByaW50XCI+0KHQv9GA0LjQvdGCPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMudGVhbX1cIiBjbGFzcz1cIm1lbnVfX3RlYW1cIj7QniDQutC+0LzQsNC90LTQtTwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgYDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG5leHBvcnQgY29uc3QgZm9ybUxvZ2luID0gYCA8Zm9ybSBjbGFzcz1cImZvcm0tc2lnbmluXCIgaWQ9XCJhdXRoXCI+ICAgICAgIFxuPGgzIGNsYXNzPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPtCS0LLQtdC00LjRgtC1INGB0LLQvtC4INC00LDQvdC90YvQtTwvaDM+XG5cbiAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwidXNlci1lbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgcmVxdWlyZWQgLz5cbiAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1pbmxlbmd0aD1cIjhcIiBpZD1cInVzZXItcGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0L/QsNGA0L7Qu9GMXCIgcmVxdWlyZWQvPiAgICAgIFxuICBcbiAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiICBpZD1cImJ1dHRvbi1uZXctdXNlclwiIHR5cGUgPVwiYnV0dG9uXCI+INCg0LXQs9C40YHRgtGA0LDRhtC40Y8gPC9idXR0b24+IFxuICBcbjxidXR0b24gY2xhc3M9XCJidG5cIiBpZD1cImF1dG9yaXp0aW9uQnRuXCIgdHlwZT1cInN1Ym1pdFwiPtCS0L7QudGC0Lg8L2J1dHRvbj4gIFxuPGg0IGNsYXNzPVwiZm9ybS1zaWduaW4tZXJyb3JcIj48L2g0PiBcbjwvZm9ybT5gO1xuXG5leHBvcnQgY29uc3QgZm9ybVJlZ2lzdHJhdGlvbiA9IGAgPGZvcm0gY2xhc3M9XCJmb3JtLXNpZ25pblwiIGlkPVwicmVnXCI+ICAgICAgIFxuPGgzIGNsYXNzPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPtCS0LLQtdC00LjRgtC1INGB0LLQvtC4INC00LDQvdC90YvQtTwvaDM+XG5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VyLW5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJ1c2VyLW5hbWVcIiBwbGFjZWhvbGRlcj1cItCY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIiByZXF1aXJlZD1cIlwiIC8+XG4gIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cInVzZXItZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIHJlcXVpcmVkIC8+XG4gIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBtaW5sZW5ndGg9XCI4XCIgaWQ9XCJ1c2VyLXBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItC/0LDRgNC+0LvRjFwiIHJlcXVpcmVkIC8+ICBcblxuPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGlkPVwicmVnaXN0cmF0aW9uX2J0blwiIHR5cGU9XCJzdWJtaXRcIj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPINC4INCy0YXQvtC0PC9idXR0b24+ICBcbjxoNCBjbGFzcz1cImZvcm0tcmVnLWVycm9yXCI+PC9oND4gIFxuPC9mb3JtPmA7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5cbi8vIGltcG9ydCBtb2RhbEF1dGhvcml6YXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbCc7XG5cbmltcG9ydCB7IE1lbnVJdGVtcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcblxuaW1wb3J0IE1vZHVsZU1vZGVsIGZyb20gJy4uL21vZGVsL21vZGVsJztcbmltcG9ydCBsaXN0ZW5lciBmcm9tICcuLi9mdW5jdGlvbmFsL2xpc3RlbmVyJztcbmltcG9ydCBsaXN0ZW5lckF1ZGlvQ2FsbCBmcm9tICcuLi9wYWdlcy9hdWRpb2NhbGwvdXRpbHMvbGlzdGVuZXItYXVkaW9jYWxsJztcblxuY2xhc3MgTW9kdWxlQ29udHJvbGxlciB7XG4gIG15TW9kdWxlQ29udGFpbmVyITogSFRNTEVsZW1lbnQ7XG5cbiAgbXlNb2R1bGVNb2RlbCE6IE1vZHVsZU1vZGVsO1xuXG4gIG1lbnVNYWluICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVUZXh0Ym9vayAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51U3RhdGljdGljcyAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51QXVkaW9jYWxsICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVTcHJpbnQgITogSFRNTEVsZW1lbnQ7XG5cbiAgbWVudVRlYW0gITogSFRNTEVsZW1lbnQ7XG5cbiAgYXVkaW9jYWxsZ2FtZSAhOiBIVE1MRWxlbWVudDtcblxuICBpbml0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIG1vZGVsOiBNb2R1bGVNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsID0gbW9kZWw7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBtb2RhbEF1dGhvcml6YXRpb24ub3BlbigpO1xuICAgIGxpc3RlbmVyLm9wZW4oKTtcbiAgICBsaXN0ZW5lckF1ZGlvQ2FsbC5vcGVuKCk7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNtYWluJztcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGhhc2hQYWdlTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLnVwZGF0ZVN0YXRlKGhhc2hQYWdlTmFtZSk7XG4gICAgdGhpcy5maW5kTWVudUVsZW1lbnRzKGhhc2hQYWdlTmFtZSk7XG4gIH1cblxuICBmaW5kTWVudUVsZW1lbnRzKGhhc2hOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5tZW51TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19tYWluJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51VGV4dGJvb2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fdGV4dGJvb2snKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVTdGF0aWN0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3N0YXRpY3RpY3MnKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVBdWRpb2NhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fYXVkaW9jYWxsJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51U3ByaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3NwcmludCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudVRlYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fdGVhbScpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IG9iajpNZW51SXRlbXMgPSB7XG4gICAgICBtYWluOiB0aGlzLm1lbnVNYWluLFxuICAgICAgdGV4dGJvb2s6IHRoaXMubWVudVRleHRib29rLFxuICAgICAgc3RhdGlzdGljczogdGhpcy5tZW51U3RhdGljdGljcyxcbiAgICAgIGF1ZGlvY2FsbDogdGhpcy5tZW51QXVkaW9jYWxsLFxuICAgICAgc3ByaW50OiB0aGlzLm1lbnVTcHJpbnQsXG4gICAgICB0ZWFtOiB0aGlzLm1lbnVUZWFtLFxuICAgIH07XG4gICAgaWYgKHRoaXMubWVudU1haW4pIHtcbiAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5oaWdobGlnaHRBY3RpdmVNZW51SXRlbShvYmosIGhhc2hOYW1lKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlQ29udHJvbGxlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tc2hhZG93ICovXG5cbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2FwaS9hcGknO1xuaW1wb3J0IHsgZm9ybUxvZ2luLCBmb3JtUmVnaXN0cmF0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbCc7XG5pbXBvcnQgc2hvd1VzZXIgZnJvbSAnLi9zaG93LXVzZXInO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmNsYXNzIExpc3RlbmVyIHtcbiAgb3BlbigpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2F1dGhvcml6YXRpb24nKSkge1xuICAgICAgICBjb25zdCBidG5DbG9zZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jbG9zZScpO1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcbiAgICAgICAgY29uc3QgbW9kYWxSZXN1bHRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXJlc3VsdC13cmFwcGVyJyk7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIHdyYXBwZXIhLmlubmVySFRNTCA9IGZvcm1Mb2dpbjtcbiAgICAgICAgbW9kYWxSZXN1bHRXcmFwcGVyIS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgY29uc3QgdXNlckVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1lbWFpbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHVzZXJQYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItcGFzc3dvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBpZiAodXNlckVtYWlsSW5wdXQgJiYgdXNlclBhc3N3b3JkSW5wdXQpIHtcbiAgICAgICAgICBjb25zdCBhdXRoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRoJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgICAgaWYgKGF1dGhGb3JtKSB7XG4gICAgICAgICAgICBhdXRoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZXJyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXNpZ25pbi1lcnJvcicpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICBlcnJGb3JtLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICBjb25zdCB1c2VyRW1haWwgPSB1c2VyRW1haWxJbnB1dCEudmFsdWU7XG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJQYXNzd29yZCA9IHVzZXJQYXNzd29yZElucHV0IS52YWx1ZTtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBhcGkudXNlclNpZ25Jbih1c2VyRW1haWwsIHVzZXJQYXNzd29yZClcbiAgICAgICAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHN0b3JhZ2UudXNlciA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgc2hvd1VzZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgIGVyckZvcm0uaW5uZXJIVE1MID0gJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQvdC1INC90LDQudC00LXQvSwg0L/RgNC+0LLQtdGA0YzRgtC1INGB0LLQvtC4INC00LDQvdC90YvQtSDQuNC70Lgg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNGD0LnRgtC10YHRjCc7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1dHRvbk5ld1VzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLW5ldy11c2VyJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIGlmIChidXR0b25OZXdVc2VyKSB7XG4gICAgICAgICAgYnV0dG9uTmV3VXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChfZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHdyYXBwZXIhLmlubmVySFRNTCA9IGZvcm1SZWdpc3RyYXRpb247XG4gICAgICAgICAgICBjb25zdCB1c2VyRW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWVtYWlsJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJQYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItcGFzc3dvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLW5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHVzZXJOYW1lSW5wdXQgJiYgdXNlckVtYWlsSW5wdXQgJiYgdXNlclBhc3N3b3JkSW5wdXQpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVnaXN0cmF0aW9uRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWcnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgICAgICAgaWYgKHJlZ2lzdHJhdGlvbkZvcm0pIHtcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZXJyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXJlZy1lcnJvcicpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgZXJyRm9ybS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IHVzZXJFbWFpbElucHV0IS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJQYXNzd29yZCA9IHVzZXJQYXNzd29yZElucHV0IS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJOYW1lID0gdXNlck5hbWVJbnB1dCEudmFsdWU7XG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICBhcGkuY3JlYXRlTmV3VXNlcih1c2VyTmFtZSwgdXNlckVtYWlsLCB1c2VyUGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBhcGkudXNlclNpZ25Jbih1c2VyRW1haWwsIHVzZXJQYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnVzZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VXNlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGVyckZvcm0uaW5uZXJIVE1MID0gJ9CS0L7Qt9C80L7QttC90L4g0Y3RgtC+0YIgZS1tYWlsINGD0LbQtSDQt9Cw0L3Rj9GCLCDQv9C+0L/RgNC+0LHRg9C50YLQtSDQtNGA0YPQs9C+0LknO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICAgIG1vZGFsUmVzdWx0V3JhcHBlciEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfTtcbiAgICAgICAgb3ZlcmxheSEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgICAgICAgYnRuQ2xvc2VNb2RhbCEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdleGl0X2J0bicpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XG4gICAgICAgIHN0b3JhZ2UudXNlciA9IHtcbiAgICAgICAgICBtZXNzYWdlOiAnJywgdG9rZW46ICcnLCByZWZyZXNoVG9rZW46ICcnLCB1c2VySWQ6ICcnLCBuYW1lOiAnJyxcbiAgICAgICAgfTtcbiAgICAgICAgc2hvd1VzZXIoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGxpc3RlbmVyID0gbmV3IExpc3RlbmVyKCk7XG5leHBvcnQgZGVmYXVsdCBsaXN0ZW5lcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd1VzZXIocmV0OmJvb2xlYW4pIDpzdHJpbmcgfCB1bmRlZmluZWQge1xuICBsZXQgY2xhc3NOYW1lID0gJ2F1dGhvcml6YXRpb24nO1xuICBsZXQgY29udGV4dCA9ICfQktC+0LnRgtC4JztcbiAgaWYgKHN0b3JhZ2UudXNlcj8udG9rZW4gIT0gJycpIHtcbiAgICBjb250ZXh0ID0gJ9CS0YvQudGC0LgnO1xuICAgIGNsYXNzTmFtZSA9ICdleGl0X2J0bic7XG4gIH1cbiAgY29uc3QgaHRtbCA9IGA8ZGl2IGNsYXNzPVwidXNlci1zaG93XCI+ICR7c3RvcmFnZS51c2VyPy5uYW1lfSA8YnV0dG9uIGNsYXNzPSR7Y2xhc3NOYW1lfT4ke2NvbnRleHR9PC9idXR0b24+IDwvZGl2PmA7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYXV0aCcpIGFzIEhUTUxFbGVtZW50O1xuICBpZiAocmV0KSB7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbiAgaGVhZGVyLmlubmVySFRNTCA9IGh0bWw7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuaW1wb3J0IHsgSVVzZXIsIElVc2VyRGF0YSwgSVdvcmQgfSBmcm9tICd0eXBlcy90eXBlcyc7XG5cbmNsYXNzIFN0b3JhZ2Uge1xuICB1c2VyPzogSVVzZXJEYXRhO1xuXG4gIHdvcmQ/OiBJV29yZDtcblxuICB3b3Jkcz86IElXb3JkW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcbiAgICAgIHRoaXMudXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSBhcyBzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVzZXIgPSB7XG4gICAgICAgIG1lc3NhZ2U6ICcnLCB0b2tlbjogJycsIHJlZnJlc2hUb2tlbjogJycsIHVzZXJJZDogJycsIG5hbWU6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3b3JkJykpIHtcbiAgICAgIHRoaXMud29yZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dvcmQnKSBhcyBzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndvcmQgPSB7XG4gICAgICAgIGlkOiAnJywgZ3JvdXA6IDAsIHBhZ2U6IDAsIHdvcmQ6ICcnLCBpbWFnZTogJycsIGF1ZGlvOiAnJywgYXVkaW9NZWFuaW5nOiAnJywgYXVkaW9FeGFtcGxlOiAnJywgdGV4dE1lYW5pbmc6ICcnLCB0ZXh0RXhhbXBsZTogJycsIHRyYW5zY3JpcHRpb246ICcnLCB3b3JkVHJhbnNsYXRlOiAnJywgdGV4dE1lYW5pbmdUcmFuc2xhdGU6ICcnLCB0ZXh0RXhhbXBsZVRyYW5zbGF0ZTogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dvcmRzJykpIHtcbiAgICAgIHRoaXMud29yZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3b3JkcycpIGFzIHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud29yZHMgPSBbXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQtbWVtYmVyICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNhc3MnO1xuXG5pbXBvcnQgTW9kdWxlQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvY29udHJvbGxlcic7XG5pbXBvcnQgTW9kdWxlTW9kZWwgZnJvbSAnLi9tb2RlbC9tb2RlbCc7XG5pbXBvcnQgTW9kdWxlVmlldyBmcm9tICcuL3ZpZXcvdmlldyc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMsIFJvdXRlcywgSW5pdGlhbE9iaiB9IGZyb20gJy4vdHlwZXMvdHlwZXMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyJztcblxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vcGFnZXMvbWFpbic7XG5cbmltcG9ydCBUZXh0Ym9va1BhZ2UgZnJvbSAnLi9wYWdlcy90ZXh0Ym9vayc7XG5pbXBvcnQgQWJvdXRUZWFtUGFnZSBmcm9tICcuL3BhZ2VzL3RlYW0nO1xuaW1wb3J0IFNwcmludEdhbWVQYWdlIGZyb20gJy4vcGFnZXMvc3ByaW50L2luZGV4JztcbmltcG9ydCBBdWRpb2NhbGxHYW1lUGFnZSBmcm9tICcuL3BhZ2VzL2F1ZGlvY2FsbC9pbmRleCc7XG5pbXBvcnQgU3RhdGlzdGljc1BhZ2UgZnJvbSAnLi9wYWdlcy9zdGF0aXN0aWNzL2luZGV4JztcbmltcG9ydCBBdWRpb2NhbGxHYW1lIGZyb20gJy4vcGFnZXMvYXVkaW9jYWxsL21haW4nO1xuXG5jb25zdCBjb21wb25lbnRzOiBDb21wb25lbnRzID0ge1xuICBoZWFkZXI6IEhlYWRlcixcbiAgY29udGVudDogQ29udGVudCxcbiAgZm9vdGVyOiBGb290ZXIsXG59O1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IHtcbiAgbWFpbjogTWFpblBhZ2UsXG4gIGRlZmF1bHQ6IE1haW5QYWdlLFxuICB0ZXh0Ym9vazogVGV4dGJvb2tQYWdlLFxuICB0ZWFtOiBBYm91dFRlYW1QYWdlLFxuICBzcHJpbnQ6IFNwcmludEdhbWVQYWdlLFxuICBhdWRpb2NhbGw6IEF1ZGlvY2FsbEdhbWVQYWdlLFxuICBhdWRpb2NhbGxnYW1lOiBBdWRpb2NhbGxHYW1lLFxuICBzdGF0aXN0aWNzOiBTdGF0aXN0aWNzUGFnZSxcbn07XG5cbmNvbnN0IGluaXRpYWxPYmo6IEluaXRpYWxPYmogPSB7XG4gIGNvbnRhaW5lcjogJ3NwYScsXG4gIHJvdXRlcyxcbiAgY29tcG9uZW50cyxcbn07XG5cbi8qIC0tLS0tIHNwYSBpbml0IG1vZHVsZSAtLS0gKi9cbmNvbnN0IG15U1BBID0gKCgpID0+IHtcbiAgbGV0IHZpZXc6IE1vZHVsZVZpZXc7XG4gIGxldCBtb2RlbDogTW9kdWxlTW9kZWw7XG4gIGxldCBjb250cm9sbGVyOiBNb2R1bGVDb250cm9sbGVyO1xuICByZXR1cm4ge1xuICAgIGluaXQob2JqOiBJbml0aWFsT2JqKSB7XG4gICAgICB0aGlzLnJlbmRlckNvbXBvbmVudHMob2JqLmNvbnRhaW5lciwgb2JqLmNvbXBvbmVudHMpO1xuICAgICAgY29uc3QgY29udGFpbmVyU1BBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLmNvbnRhaW5lcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICB2aWV3ID0gbmV3IE1vZHVsZVZpZXcoKTtcbiAgICAgIG1vZGVsID0gbmV3IE1vZHVsZU1vZGVsKCk7XG4gICAgICBjb250cm9sbGVyID0gbmV3IE1vZHVsZUNvbnRyb2xsZXIoKTtcblxuICAgICAgdmlldy5pbml0KGNvbnRhaW5lclNQQSwgcm91dGVzKTtcbiAgICAgIG1vZGVsLmluaXQodmlldyk7XG4gICAgICBjb250cm9sbGVyLmluaXQoY29udGFpbmVyU1BBLCBtb2RlbCk7XG4gICAgfSxcblxuICAgIHJlbmRlckNvbXBvbmVudHMoY29udGFpbmVyOiBzdHJpbmcsIGNvbXBvbmVudHNPYmo6IENvbXBvbmVudHMpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgY29tcG9uZW50c0xpc3QgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzT2JqKTtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGNvbXBvbmVudHNMaXN0KSB7XG4gICAgICAgIHJvb3QuaW5uZXJIVE1MICs9IGNvbXBvbmVudHNPYmpbaXRlbSBhcyBrZXlvZiBDb21wb25lbnRzXS5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufSkoKTtcblxuLyogLS0tLS0tIGVuZCBhcHAgbW9kdWxlIC0tLS0tICovXG5cbi8qKiAqIC0tLSBpbml0IG1vZHVsZSAtLS0gKiogKi9cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBteVNQQS5pbml0KGluaXRpYWxPYmopO1xufSk7XG4iLCJpbXBvcnQgTW9kZWxWaWV3IGZyb20gJy4uL3ZpZXcvdmlldyc7XG5pbXBvcnQgeyBNZW51SXRlbXMgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5cbmNsYXNzIE1vZHVsZU1vZGVsIHtcbiAgbXlNb2R1bGVWaWV3ITogTW9kZWxWaWV3O1xuXG4gIGluaXQodmlldzogTW9kZWxWaWV3KTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlVmlldyA9IHZpZXc7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShwYWdlTmFtZTpzdHJpbmcpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlckNvbnRlbnQocGFnZU5hbWUpO1xuICB9XG5cbiAgaGlnaGxpZ2h0QWN0aXZlTWVudUl0ZW0ob2JqOiBNZW51SXRlbXMsIGhhc2hOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcuaGlnaGxpZ2h0QWN0aXZlTWVudUl0ZW0ob2JqLCBoYXNoTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlTW9kZWw7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IHsgc3RhcnRTY3JpbkF1ZGlvQ2FsbCB9IGZyb20gJy4vc3RhcnQtYXVkaW9jYWxsJztcblxuY29uc3QgQXVkaW9jYWxsR2FtZVBhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ2F1ZGlvY2FsbCcsXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgICAke0hlYWRlci5yZW5kZXIoKX1cbiAgICAgIDxkaXYgY2xhc3MgPSAnYXVkaW8tY29udGFpbmVyICR7dGhpcy5jbGFzc25hbWV9LWNvbnRlaW5lcic+ICR7c3RhcnRTY3JpbkF1ZGlvQ2FsbC5yZW5kZXIoKX08L2Rpdj47XG4gICAgICAke0Zvb3Rlci5yZW5kZXIoKX1cbiAgICAgYDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvY2FsbEdhbWVQYWdlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCB7IGdhbWVBcmVhIH0gZnJvbSAnLi91dGlscy9nYW1lLXJlbmRlcic7XG5cbmNvbnN0IEF1ZGlvY2FsbEdhbWUgPSB7XG4gIGhhc2hlczoge1xuXG4gICAgbWFpbjogJyNtYWluJyxcblxuICB9LFxuXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgICAgPGRpdiBjbGFzcyA9ICdjb250YWluZXInPiA8YnV0dG9uICB0eXBlPVwiYnV0dG9uXCIgIGNsYXNzPVwiZ28tbWFpblwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLm1haW59XCIgPjwvYT7QktC10YDQvdGD0YLRjNGB0Y8g0L3QsCDQs9C70LDQstC90YPRjjwvYT48L2J1dHRvbj4gJHtnYW1lQXJlYX08L2Rpdj5cbiAgICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdWRpb2NhbGxHYW1lO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG5cbmV4cG9ydCBjb25zdCBzdGFydFNjcmluQXVkaW9DYWxsID0ge1xuICBoYXNoZXM6IHtcblxuICAgIGF1ZGlvY2FsbEdhbWU6ICcjYXVkaW9jYWxsR2FtZScsXG5cbiAgfSxcblxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gLyogaHRtbCAqL2AgXG5cbjxkaXYgY2xhc3M9XCJhdWRpby1jYWxsXCI+IFxuPHAgY2xhc3M9XCJhdWRpby1jYWxsX190ZXh0XCI+0JIg0LjQs9GA0LUg0LDRg9C00LjQvtCy0YvQt9C+0LIg0LLQsNC80L3Rg9C20L3QviDQstGL0LHRgNCw0YLRjCDQv9GA0LDQstC40LvRjNC90YvQuSDQv9C10YDQtdCy0L7QtCDRgdC70L7QstCwLiA8YnI+XG5cbtCn0YLQvtCx0Ysg0LjQs9GA0LDRgtGMINGBINC/0L7QvNC+0YnRjNGOINC60LvQsNCy0LjQsNGC0YPRgNGLLCDQuNGB0L/QvtC70YzQt9GD0Lkg0LrQu9Cw0LLQuNGI0LhcbjEsIDIsIDMsIDQsIDUgLSDRh9GC0L7QsdGLINC00LDRgtGMINC+0YLQstC10YIsXG5zcGFjZSAtINC00LvRjyDQstC+0YHQv9GA0L7QuNC30LLQtdC00LXQvdC40Y8g0LfQstGD0LrQsCxcbmVudGVyIC0g0YfRgtC+0LHRiyDQv9GA0L7Qv9GD0YHRgtC40YLRjCDQstC+0L/RgNC+0YEsXG7RgdGC0YDQtdC70LrQsC3QstC/0YDQsNCy0L4gLSDRh9GC0L7QsdGLINC/0LXRgNC10LnRgtC4INC6INGB0LvQtdC00YPRjtGJ0LXQvNGDINCy0L7Qv9GA0L7RgdGDLjxicj4gPGJyPlxu0JLRi9Cx0LXRgNC4INGD0YDQvtCy0LXQvdGMINGB0LvQvtC20L3QvtGB0YLQuDo8L3A+XG48YnV0dG9uIGlkPVwibGV2ZWwxXCIgdHlwZT1cImJ1dHRvblwiICBjbGFzcz1cImJ0bi1sZXZlbFwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbEdhbWV9XCIgY2xhc3M9XCJtZW51X19tYWluIG1lbnVfX2l0ZW1fYWN0aXZlXCI+0KPRgNC+0LLQtdC90YwgMTwvYT48L2J1dHRvbj5cbjxidXR0b24gaWQ9XCJsZXZlbDJcIiB0eXBlPVwiYnV0dG9uXCIgIGNsYXNzPVwiYnRuLWxldmVsXCI+0KPRgNC+0LLQtdC90YwgMjwvYnV0dG9uPlxuPGJ1dHRvbiBpZD1cImxldmVsM1wiIHR5cGU9XCJidXR0b25cIiAgY2xhc3M9XCJidG4tbGV2ZWxcIj7Qo9GA0L7QstC10L3RjCAzPC9idXR0b24+XG48YnV0dG9uIGlkPVwibGV2ZWw0XCIgdHlwZT1cImJ1dHRvblwiICBjbGFzcz1cImJ0bi1sZXZlbFwiPtCj0YDQvtCy0LXQvdGMIDQ8L2J1dHRvbj5cbjxidXR0b24gaWQ9XCJsZXZlbDVcIiB0eXBlPVwiYnV0dG9uXCIgIGNsYXNzPVwiYnRuLWxldmVsXCI+0KPRgNC+0LLQtdC90YwgNTwvYnV0dG9uPlxuPGJ1dHRvbiBpZD1cImxldmVsNlwiIHR5cGU9XCJidXR0b25cIiAgY2xhc3M9XCJidG4tbGV2ZWxcIj7Qo9GA0L7QstC10L3RjCA2PC9idXR0b24+XG48L2Rpdj5cbmA7XG4gIH0sXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5cclxuaW1wb3J0IHsgYXBpUGF0aCB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGktcGF0aCc7XHJcbmltcG9ydCB7IHdvcmRPYmosIHByaW50QnRuU3RyaW5nIH0gZnJvbSAnLi9zdXBwb3J0aW5nLWZ1bmMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVBcmVhID0gYCBcclxuIDxkaXYgY2xhc3M9XCJhdWRpby1jb250YWluZXItZ2FtZVwiPiBcclxuICAgIDxkaXYgY2xhc3M9XCJidG4tc291bmRcIj48ZGl2IGNsYXNzPVwic291bmQtd3JhcHBlclwiPiBcclxuICAgIDxhdWRpbyBjbGFzcz1cImF1ZGlvXCIgc3JjPVwiJHthcGlQYXRoICsgd29yZE9iai5hdWRpb31cIiBhdXRvcGxheT48L2F1ZGlvPiA8L2Rpdj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+JHtwcmludEJ0blN0cmluZygpfTwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gYDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5cbmltcG9ydCB7IGFwaVBhdGggfSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpLXBhdGgnO1xuaW1wb3J0IEF1ZGlvY2FsbEdhbWUgZnJvbSAnLi4vbWFpbic7XG5pbXBvcnQgeyBzb3VuZEF1ZGlvLCB3b3JkT2JqIH0gZnJvbSAnLi9zdXBwb3J0aW5nLWZ1bmMnO1xuXG5sZXQgc2NvcmUgPSAwO1xubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlJywgc2NvcmUudG9TdHJpbmcoKSk7XG5jbGFzcyBMaXN0ZW5lckF1ZGlvQ2FsbCB7XG4gIG9wZW4oKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tc291bmQnKSkge1xuICAgICAgICBzb3VuZEF1ZGlvKChhcGlQYXRoICsgd29yZE9iai5hdWRpbykpO1xuICAgICAgfVxuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdHJhbnNsYXRpb24nKSkge1xuICAgICAgICBjb25zdCByb3VuZCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm91bmQnKSkgKyAxO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncm91bmQnLCByb3VuZC50b1N0cmluZygpKTtcbiAgICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQgPT09IHdvcmRPYmoud29yZFRyYW5zbGF0ZSkge1xuICAgICAgICAgIHNjb3JlID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpKSArIDE7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlJywgc2NvcmUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgc291bmRBdWRpbygoYXBpUGF0aCArIHdvcmRPYmouYXVkaW8pKTtcbiAgICAgICAgICAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoJ2J0bi10cmFuc2xhdGlvbi1yaWdodCcpO1xuICAgICAgICAgIEF1ZGlvY2FsbEdhbWUucmVuZGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKCdidG4tdHJhbnNsYXRpb24td3JvbmcnKTtcbiAgICAgICAgICBzb3VuZEF1ZGlvKChhcGlQYXRoICsgd29yZE9iai5hdWRpbykpO1xuICAgICAgICAgIEF1ZGlvY2FsbEdhbWUucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBsaXN0ZW5lckF1ZGlvQ2FsbCA9IG5ldyBMaXN0ZW5lckF1ZGlvQ2FsbCgpO1xuZXhwb3J0IGRlZmF1bHQgbGlzdGVuZXJBdWRpb0NhbGw7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tc2hhZG93ICovXHJcblxyXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vLi4vLi4vZnVuY3Rpb25hbC9zdG9yYWdlJztcclxuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICcuLi8uLi8uLi90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7IGFwaVBhdGggfSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpLXBhdGgnO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpJztcclxuXHJcbmxldCByb3VuZCA9IDA7XHJcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyYXVuZCcsIHJvdW5kLnRvU3RyaW5nKCkpO1xyXG5cclxuLy8g0LrQvtC90YHRgtCw0L3QsCDQutC+0YLQvtGA0LDRjyDQv9C+0LvRg9GH0LDQtdGCINGBINGB0LXRgNCy0LXRgNCwINC80LDRgdGB0LjQsiDRgdC70L7QslxyXG5jb25zdCBhcGlHZXRXb3JkcyA9IGFwaS5nZXRXb3JkcygwLCAwKVxyXG4gIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgc3RvcmFnZS53b3JkcyA9IHZhbHVlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dvcmRzJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH0pO1xyXG4vLyDQv9C+0LvRg9GH0LDQtdC8INC80LDRgdGB0LjQsiDQv9GA0LXQstC+0LTQvtCyXHJcbmZ1bmN0aW9uIGdldFdvcmRzTWFwKCk6IHN0cmluZ1tdIHtcclxuICBhcGlHZXRXb3JkcztcclxuICBjb25zdCB3b3JkcyA9IHN0b3JhZ2Uud29yZHMhLm1hcCgoaXRlbSkgPT4gaXRlbS53b3JkVHJhbnNsYXRlKTtcclxuICByZXR1cm4gd29yZHM7XHJcbn1cclxuXHJcbmNvbnN0IHdvcmRzU3RyaW5nID0gZ2V0V29yZHNNYXAoKTtcclxuXHJcbi8vINC/0LXRgNC10LzQtdGI0LjQstCw0LXQvCDQvNCw0YHRgdC40LIg0L/RgNC10LLQvtC00L7QslxyXG5mdW5jdGlvbiBzaHVmZmxlKGFycmF5OnN0cmluZ1tdKSB7XHJcbiAgYXJyYXkuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxufVxyXG5zaHVmZmxlKHdvcmRzU3RyaW5nKTtcclxuLy8g0YHQvtC30LTQsNC10Lwg0LzQsNGB0YHQuCDQsiDQutC+0YLRgNC+0Lwg0LHRg9C00LXRgiDRgtC+0YzQutC+IDYg0YHQu9C+0LIg0LTQu9GPINC40LPRgNGLXHJcbmxldCBhcnJheVNpeFdvcmRzOnN0cmluZyBbXSA9IFtdO1xyXG5hcnJheVNpeFdvcmRzID0gd29yZHNTdHJpbmcuc2xpY2UoMCwgNik7XHJcblxyXG4vLyDQstGL0LHQuNGA0LDQtdC8INGB0LvRg9GH0LDQudC90L7QtSDRgdC70L7QstC+INC40LcgNiwg0LrQvtGC0L7RgNC+0LUg0LHRg9C00LXQvCDRg9Cz0LDQtNGL0LLQsNGC0YxcclxuY29uc3Qgd29yZFJpZ2h0ID0gYXJyYXlTaXhXb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheVNpeFdvcmRzLmxlbmd0aCldO1xyXG5cclxuLy8g0L/QvtC70YPRh9Cw0LXQvCDQtNC10LvQsNC10Lwg0L7QsdGK0LXQutGCINCyINC60L7RgtC+0YDRi9C5INGB0L7RhdGA0LDQvdC40Lwg0LLRi9Cx0YDQsNC90L3QvtC1INGB0LvQvtCy0L4g0YHQviDQstGB0LXQvNC4INC00LDQvdC90YvQvNC4XHJcbmxldCB3b3JkT2JqIDogSVdvcmQgPSB7XHJcbiAgaWQ6ICcnLCBncm91cDogMCwgcGFnZTogMCwgd29yZDogJycsIGltYWdlOiAnJywgYXVkaW86ICcnLCBhdWRpb01lYW5pbmc6ICcnLCBhdWRpb0V4YW1wbGU6ICcnLCB0ZXh0TWVhbmluZzogJycsIHRleHRFeGFtcGxlOiAnJywgdHJhbnNjcmlwdGlvbjogJycsIHdvcmRUcmFuc2xhdGU6ICcnLCB0ZXh0TWVhbmluZ1RyYW5zbGF0ZTogJycsIHRleHRFeGFtcGxlVHJhbnNsYXRlOiAnJyxcclxufTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmFnZS53b3JkcyEubGVuZ3RoOyBpKyspIHtcclxuICBpZiAoc3RvcmFnZS53b3JkcyFbaV0ud29yZFRyYW5zbGF0ZSA9PT0gd29yZFJpZ2h0KSB7XHJcbiAgICB3b3JkT2JqID0gc3RvcmFnZS53b3JkcyFbaV07XHJcbiAgfVxyXG59XHJcbi8vINGE0YPQvdC60YbQuNGPINC/0YDQvtC40LPRgNGL0LLQsNC90LjRjyDQsNGD0LTQuNC+INGBINC/0YPRgtC10Lwg0LjQtyDQvdCw0YjQtdCz0L4g0L7QsdC10LrRgtCwLdGB0LvQvtCy0L5cclxuZnVuY3Rpb24gc291bmRBdWRpbyhwYXRoOiBzdHJpbmcpOiB2b2lkIHtcclxuICBjb25zdCBhdWRpb2QgPSBuZXcgQXVkaW8oKTtcclxuICBhdWRpb2Quc3JjID0gYCR7cGF0aH1gO1xyXG4gIGF1ZGlvZC5hdXRvcGxheSA9IHRydWU7XHJcbn1cclxuXHJcbi8vINGA0LjRgdGD0LXQvCDQutC90L7Qv9C60Lgg0YEg0L/QtdGA0LXQstC+0LTQsNC80LhcclxuZnVuY3Rpb24gcHJpbnRCdG5TdHJpbmcoKTogc3RyaW5nIHtcclxuICBsZXQgYSA9ICcnO1xyXG4gIGxldCBjb250YWluZXJCdG4gPSAnICc7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheVNpeFdvcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhID0gYXJyYXlTaXhXb3Jkc1tpXTtcclxuICAgIGNvbnRhaW5lckJ0biArPSBgPGJ1dHRvbiAgdHlwZT1cImJ1dHRvblwiIGlkPVwiJHthfVwiIGNsYXNzPVwiYnRuLXRyYW5zbGF0aW9uXCI+JHthfTwvYnV0dG9uPiBgO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lckJ0bjtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBzb3VuZEF1ZGlvLFxyXG4gIHByaW50QnRuU3RyaW5nLCB3b3JkT2JqLFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5pbXBvcnQgcGhvbmUgZnJvbSAnLi4vYXNzZXRzL3Bob25lLnN2Zyc7XG5pbXBvcnQgZGljdGlvbmFyeSBmcm9tICcuLi9hc3NldHMvZGljdGlvbmFyeS5zdmcnO1xuaW1wb3J0IHBsYXkgZnJvbSAnLi4vYXNzZXRzL3BsYXkuc3ZnJztcbmltcG9ydCBhY3Nlc3MgZnJvbSAnLi4vYXNzZXRzL2Fjc2Vzcy5zdmcnO1xuXG5jb25zdCBNYWluUGFnZSA9IHtcbiAgaWQ6ICdtYWluJyxcbiAgcmVuZGVyOiAoKTpzdHJpbmcgPT4gYFxuICAgICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19wYWdlXCI+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fcGFnZV9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj5UaGUgV29ybGQgaXMgWW91cnMgd2l0aCBSU0xhbmchPC9oMj5cbiAgICAgICAgICAgPHA+UlNMYW5nIOKAlCDRjdGC0L4g0Y3RhNGE0LXQutGC0LjQstC90YvQuSDRgdC10YDQstC40YEg0LTQu9GPINGD0LLQu9C10LrQsNGC0LXQu9GM0L3QvtC5INC/0YDQsNC60YLQuNC60Lgg0LDQvdCz0LvQuNC50YHQutC+0LPQviDRj9C30YvQutCwLiDQn9GA0LjRgdC+0LXQtNC40L3Rj9C50YHRjyFcbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VfX2FkdmFudGFnZXNcIj5cbiAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj7Qn9C+0YfQtdC80YMgUlNMYW5nPzwvaDI+XG4gICAgICAgICAgIDx1bCBjbGFzcz1cImFkdmFudGFnZXNfX2xpc3RcIj5cbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7YWNzZXNzfVwiPlxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7QkdC10YHQv9C70LDRgtC90YvQuSDQtNC+0YHRgtGD0L88L2gzPlxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+0J3QsNGI0LAg0LzQuNGB0YHQuNGPIOKAlCDRgdC00LXQu9Cw0YLRjCDQvtCx0YPRh9C10L3QuNGPINGP0LfRi9C60LDQvCDQtNC+0YHRgtGD0L/QvdGL0Lwg0LTQu9GPINC60LDQttC00L7Qs9C+PC9wPlxuICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbVwiPlxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2RpY3Rpb25hcnl9XCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCh0LvQvtCy0LDRgNGMPC9oMz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPtCp0LXQu9C60L3QuNGC0LUg0LvRjtCx0L7QtSDRgdC70L7QstC+LCDRh9GC0L7QsdGLINGD0LLQuNC00LXRgtGMINC+0L/RgNC10LTQtdC70LXQvdC40LUg0LIg0LjRgdGC0L7Rh9C90LjQutCw0YUsINC4INGB0L7RhdGA0LDQvdC40YLQtSDQtdCz0L4g0LIg0YHQstC+0LXQvCDRgdC/0LjRgdC60LUg0LrQsNGA0YLQvtGH0LXQujwvcD5cbiAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwbGF5fVwiPlxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7QmNCz0YDQsNC5LCDRh9GC0L7QsdGLINGD0YfQuNGC0YzRgdGPPC9oMz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPtCY0LPRgNGLINCy0LrQu9GO0YfQsNGO0YIg0JDRg9C00LjQvtCy0YvQt9C+0LIs0KHQv9GA0LjQvdGCINC4INC80L3QvtCz0L7QtSDQtNGA0YPQs9C+0LUuLi48L3A+XG4gICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGhvbmV9XCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCj0YfQuNGC0LXRgdGMINC90LAg0YXQvtC00YM8L2gzPlxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+UlNMYW5nINC00L7RgdGC0YPQv9C90LAg0LTQu9GPINCy0LXQsSDQuCDQvNC+0LHQuNC70YzQvdGL0YUg0YPRgdGC0YDQvtC50YHRgtCyLiDQo9GH0LjRgtC10YHRjCDQuNC3INC70Y7QsdC+0LPQviDQvNC10YHRgtCwITwvcD5cbiAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICA8L3VsPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgJHtGb290ZXIucmVuZGVyKCl9XG4gICAgYCxcbn07XG5cbi8vIGV4cG9ydCB7IE1haW5QYWdlIH07XG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmNvbnN0IFNwcmludEdhbWVQYWdlID0ge1xuICBjbGFzc25hbWU6ICdzcHJpbnQnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz48L2Rpdj5cbiAgICAke0Zvb3Rlci5yZW5kZXIoKX1gO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ByaW50R2FtZVBhZ2U7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5jb25zdCBTdGF0aXN0aWNzUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAnc3RhdGlzdGljcycsXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgPGRpdiBjbGFzcyA9ICcke3RoaXMuY2xhc3NuYW1lfS1jb250ZWluZXInPjwvZGl2PlxuICAgICR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0aXN0aWNzUGFnZTtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmNvbnN0IEFib3V0VGVhbVBhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ3RlYW0tcGFnZScsXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgPGRpdiBjbGFzcyA9ICcke3RoaXMuY2xhc3NuYW1lfS1jb250ZWluZXInPjwvZGl2PlxuICAgICR7Rm9vdGVyLnJlbmRlcigpfVxuICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dFRlYW1QYWdlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgJy4vdGV4dGJvb2suc2Nzcyc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9hcGkvYXBpJztcbmltcG9ydCB7IElXb3JkIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5jb25zdCBUZXh0Ym9va1BhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ3RleHRib29rJyxcbiAgd29yZGxpc3Q6ICd3b3JkLWxpc3QnLFxuICAvLyByZW5kZXIoKTogc3RyaW5nIHtcbiAgLy8gICBjb25zdCB2aWV3ID0gYCA8ZGl2IGNsYXNzPSR7dGhpcy5jbGFzc25hbWV9PlxuICAvLyAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay1uYXZpZ2F0aW9uXCI+XG4gIC8vICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXJvdW5kXCI+PC9idXR0b24+XG4gIC8vICAgICA8cCBjbGFzcz1cInVuaXQtbmFtZVwiPlVuaXQgMSA8c3BhbiBjbGFzcz1cInVuaXQtcGFnZVwiPnBhZ2UgMTwvc3Bhbj48L3A+XG4gIC8vICAgPC9kaXY+XG4gIC8vICAgPHVsIGNsYXNzPSR7dGhpcy53b3JkbGlzdH0+XG4gIC8vICAgICR7dGhpcy5nZXRDYXJkcygpfVxuICAvLyAgIDwvdWw+XG4gIC8vICAgPGRpdiBjbGFzcz1cInRleHRib29rLWZvb3RlclwiPlxuICAvLyAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLXBhZ2luYXRpb25cIj5cbiAgLy8gICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2luYXRpb24tYnRuIGJ0bi1vcmFuZ2VcIj5QcmV2PC9idXR0b24+XG4gIC8vICAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uLWJ0biBidG4tb3JhbmdlXCI+TmV4dDwvYnV0dG9uPlxuICAvLyAgICAgPC9kaXY+XG4gIC8vICAgPC9kaXY+XG4gIC8vIDwvZGl2PmA7XG4gIC8vICAgcmV0dXJuIGAke0hlYWRlci5yZW5kZXIoKX0ke3ZpZXd9JHtGb290ZXIucmVuZGVyKCl9YDtcbiAgLy8gfSxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdmlldyA9IGA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdHNcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjFcIj7QoNCw0LfQtNC10LsgMTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiMlwiPtCg0LDQt9C00LXQuyAyPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCIzXCI+0KDQsNC30LTQtdC7IDM8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjRcIj7QoNCw0LfQtNC10LsgNDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiNVwiPtCg0LDQt9C00LXQuyA1PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCI2XCI+0KDQsNC30LTQtdC7IDY8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjdcIj7QoNCw0LfQtNC10LsgXCLQodC70L7QttC90YvQtSDRgdC70L7QstCwXCI8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICAgIHJldHVybiBgJHtIZWFkZXIucmVuZGVyKCl9JHt2aWV3fSR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIH0sXG4gIC8vIHJlbmRlcigpOiBzdHJpbmcge1xuICAvLyAgIHJldHVybiBgPHVsIGNsYXNzPVwidW5pdC1wYWdlc1wiPlxuICAvLyAke3RoaXMucmVuZGVyUGFnZXMoKX1cbiAgLy8gPC91bD5gO1xuICAvLyB9LFxuXG4gIHJlbmRlclBhZ2VzKCk6IHN0cmluZyB7XG4gICAgbGV0IHBhZ2VzID0gJyc7XG4gICAgY29uc3QgcGFnZXNDb3VudCA9IDMwO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBhZ2VzQ291bnQ7IGkgKz0gMSkge1xuICAgICAgcGFnZXMgKz0gYDxsaSBjbGFzcz1cInVuaXQtcGFnZVwiPlBhZ2UgJHtpfTwvbGk+YDtcbiAgICB9XG4gICAgcmV0dXJuIHBhZ2VzO1xuICB9LFxuICBnZXRDYXJkcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IHdvcmRsaXN0IH0gPSB0aGlzO1xuICAgIGZ1bmN0aW9uIHJlbmRlckNhcmRzKHdvcmRzOiBJV29yZFtdKSB7XG4gICAgICBjb25zdCB3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7d29yZGxpc3R9YCk7XG4gICAgICBpZiAod29yZENvbnRhaW5lcikge1xuICAgICAgICB3b3JkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd3b3JkLWl0ZW0nKTtcbiAgICAgICAgY2FyZC5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJ3b3JkLWltYWdlXCIgXG4gIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcnNsYW5nLWxlYXJuaW5nLWVuZ2xpc2gtd29yZHMuaGVyb2t1YXBwLmNvbS8ke3dvcmRzW2ldLmltYWdlfSlcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3b3JkLWRlc2NyaXB0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cIndvcmQtcHJvbm91bmNlIHdvcmQtYXVkaW9cIj5cbiAgICA8cD4ke3dvcmRzW2ldLndvcmR9ICR7d29yZHNbaV0udHJhbnNjcmlwdGlvbn08L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXVkaW9cIj48YXVkaW8+PC9hdWRpbz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8cCBjbGFzcz1cIndvcmQtcHJvbm91bmNlIHRyYW5zbGF0aW9uXCI+JHt3b3Jkc1tpXS53b3JkVHJhbnNsYXRlfTwvcD5cbiAgICA8cCBjbGFzcz1cIndvcmQtZXhhbXBsZVwiPiR7d29yZHNbaV0udGV4dE1lYW5pbmd9PC9wPlxuICAgIDxwIGNsYXNzPVwid29yZC1leGFtcGxlIHRyYW5zbGF0aW9uXCI+JHt3b3Jkc1tpXS50ZXh0TWVhbmluZ1RyYW5zbGF0ZX08L3A+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLWV4YW1wbGVcIj4ke3dvcmRzW2ldLnRleHRFeGFtcGxlfTwvcD5cbiAgICA8cCBjbGFzcz1cIndvcmQtZXhhbXBsZSB0cmFuc2xhdGlvblwiPiR7d29yZHNbaV0udGV4dEV4YW1wbGVUcmFuc2xhdGV9PC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIndvcmQtbm90ZWRcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tb3JhbmdlIGJ0bi1kaWZmaWN1bHRcIj5EaWZmaWN1bHQ/PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLW9yYW5nZSBidG4tbGVhcm5lZFwiPkxlYXJuZWQ/PC9idXR0b24+XG4gIDwvZGl2PmA7XG4gICAgICAgIHdvcmRDb250YWluZXI/LmFwcGVuZChjYXJkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGFwaS5nZXRXb3JkcygzLCA1KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVuZGVyQ2FyZHMocmVzIGFzIElXb3JkW10pO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGJvb2tQYWdlO1xuIiwiaW1wb3J0IHsgUm91dGVzLCBNZW51SXRlbXMgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5cbmNsYXNzIE1vZHVsZVZpZXcge1xuICBteU1vZHVsZUNvbnRhaW5lciE6SFRNTEVsZW1lbnQ7XG5cbiAgY29udGVudENvbnRhaW5lciE6SFRNTEVsZW1lbnQ7XG5cbiAgcm91dGVzT2JqITpSb3V0ZXM7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50LCByb3V0ZXM6IFJvdXRlcyk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnJvdXRlc09iaiA9IHJvdXRlcztcbiAgfVxuXG4gIHJlbmRlckNvbnRlbnQoaGFzaFBhZ2VOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgbGV0IHJvdXRlTmFtZSA9ICdkZWZhdWx0JztcbiAgICByb3V0ZU5hbWUgPSAoaGFzaFBhZ2VOYW1lLmxlbmd0aCkgPyBoYXNoUGFnZU5hbWUgOiByb3V0ZU5hbWU7XG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLnJvdXRlc09ialtyb3V0ZU5hbWUgYXMga2V5b2YgUm91dGVzXTtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyLmlubmVySFRNTCA9IHJvdXRlLnJlbmRlcigpO1xuICB9XG5cbiAgaGlnaGxpZ2h0QWN0aXZlTWVudUl0ZW0gPSAob2JqOk1lbnVJdGVtcywgaGFzaE5hbWU6c3RyaW5nKTp2b2lkID0+IHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBmb3IobGV0IGtleSBpbiBvYmope1xuICAgICAgaWYgKG9ialtrZXkgYXMga2V5b2YgTWVudUl0ZW1zXS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnVfX2l0ZW1fYWN0aXZlJykpIHtcbiAgICAgICAgb2JqW2tleSBhcyBrZXlvZiBNZW51SXRlbXNdLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoYXNoTmFtZSkge1xuICAgICAgb2JqW2hhc2hOYW1lIGFzIGtleW9mIE1lbnVJdGVtc10uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLm1haW4uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZHVsZVZpZXc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9