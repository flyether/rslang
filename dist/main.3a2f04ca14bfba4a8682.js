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
        aboutsprint: '#aboutsprint',
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
      <div id="btn-close"></div>
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
            <li class="menu__item"><a href="${this.hashes.aboutsprint}" class="menu__sprint">Спринт</a></li>
            <li class="menu__item"><a href="${this.hashes.team}" class="menu__team">О команде</a></li>
          </ul>
        </nav>
        <div class="burger">
        <div class="wrapper-burger">
          <div class="burger-menu">
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
            </div>
          </div>
        </div>
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
<div class="form-signin-body">
  <input type="email" id="user-email" class="form-control" name="email" placeholder="Ваш Email" required />
  <input type="password" minlength="8" id="user-password" class="form-control" name="password" placeholder="Пароль" required/>      
  <div class="form-signin-buttons">
    <button class="btn-orange"  id="button-new-user" type ="button"> Регистрация </button> 
    <button class="btn-orange" id="autoriztionBtn" type="submit">Войти</button>  
  </div>
  </div>
<h4 class="form-signin-error"></h4> 
</form>`;
exports.formRegistration = ` <form class="form-signin" id="reg">       
<h3 class="form-signin-heading">Введите свои данные</h3>
<div class="form-signin-body">
  <input type="text" id="user-name" class="form-control" name="user-name" placeholder="Имя пользователя" required="" />
  <input type="email" id="user-email" class="form-control" name="email" placeholder="Email" required />
  <input type="password" minlength="8" id="user-password" class="form-control" name="password" placeholder="Пароль" required />  
<button class="btn btn-orange" id="registration_btn" type="submit">Регистрация и вход</button>  
</div>
<h4 class="form-reg-error"></h4>  
</form>`;


/***/ }),

/***/ "./src/components/smallComponents/buttons.ts":
/*!***************************************************!*\
  !*** ./src/components/smallComponents/buttons.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Buttons = void 0;
/* eslint-disable max-len */
exports.Buttons = {
    create: (str, className, disabled = false) => `<button class="button ${className}" ${disabled ? 'disabled' : ''}>${str}</button>`,
};


/***/ }),

/***/ "./src/components/sprintresults.ts":
/*!*****************************************!*\
  !*** ./src/components/sprintresults.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const yes_png_1 = __importDefault(__webpack_require__(/*! ../assets/yes.png */ "./src/assets/yes.png"));
const no_png_1 = __importDefault(__webpack_require__(/*! ../assets/no.png */ "./src/assets/no.png"));
const SprintResults = {
    render(questions, answers, rightAnswers, wrongAnswers, score) {
        const tableTextContent = this.createTable(questions, answers);
        return `<div class="result-conteiner">
              <p class="sprint__result__score">Твой результат: ${score} очков </p>
              <p class="sprint__result">Правильных ответов: ${rightAnswers}. Ошибок: ${wrongAnswers}.</p>
              <div class="table-conteiner">
                <span>Выученные слова:</span>
                <table class="sprint__table__result">${tableTextContent}</table>
              </div>
              <a class="sprint__close__result" href="#main">Закрыть</a>
            </div>`;
    },
    createTable: (questions, answers) => {
        let result = '';
        for (let i = 0; i < questions.length; i++) {
            const src = answers[i] ? yes_png_1.default : no_png_1.default;
            result += `<tr><td>${questions[i]}</td><td><img src="${src}" alt="yes/no"></td></tr>`;
        }
        return result;
    },
};
exports["default"] = SprintResults;


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
const index_1 = __importDefault(__webpack_require__(/*! ../pages/sprint/index */ "./src/pages/sprint/index.ts"));
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
        switch (hashPageName) {
            case 'aboutsprint':
                this.addButtonsAboutSprintGameListeners();
                break;
            default:
        }
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
            aboutsprint: this.menuSprint,
            team: this.menuTeam,
        };
        if (this.menuMain) {
            this.myModuleModel.highlightActiveMenuItem(obj, hashName);
        }
    }
    addButtonsAboutSprintGameListeners() {
        this.buttonStartSprint = document.querySelector('.button__start__sprint');
        this.sprintLevel = document.querySelector('.sprint__level');
        this.buttonStartSprint.addEventListener('click', () => {
            location.hash = '#sprint';
            index_1.default.saveLevel(this.sprintLevel.value);
        });
    }
}
exports["default"] = ModuleController;


/***/ }),

/***/ "./src/controller/controllerSprint.ts":
/*!********************************************!*\
  !*** ./src/controller/controllerSprint.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModuleController = void 0;
class ModuleController {
    init(container, model) {
        this.myModuleContainer = container;
        this.myModuleModel = model;
        this.setEventListeners();
        this.findAudioElements();
        this.setTimer();
        window.addEventListener('hashchange', this.myModuleModel.clearInterval);
    }
    setEventListeners() {
        this.buttonFalse = this.myModuleContainer.querySelector('.button__sprint__false');
        this.buttonFalse.addEventListener('click', () => {
            this.myModuleModel.checkAnswer(false);
            this.myModuleModel.prepearNextWord();
        });
        this.buttonTrue = this.myModuleContainer.querySelector('.button__sprint__true');
        this.buttonTrue.addEventListener('click', () => {
            this.myModuleModel.checkAnswer(true);
            this.myModuleModel.prepearNextWord();
        });
        document.addEventListener('keydown', (event) => {
            if (event.code === 'ArrowLeft') {
                this.myModuleModel.checkAnswer(false);
                this.myModuleModel.prepearNextWord();
            }
            if (event.code === 'ArrowRight') {
                this.myModuleModel.checkAnswer(true);
                this.myModuleModel.prepearNextWord();
            }
        });
        this.buttonSayWord = this.myModuleContainer.querySelector('.word__sound');
        this.buttonSayWord.addEventListener('click', () => {
            const audio = document.querySelector('#sprint__say__word');
            this.myModuleModel.sayWord(audio);
        });
    }
    findAudioElements() {
        const rightAnswerAudio = this.myModuleContainer.querySelector('#audio__right');
        const wrongAnswerAudio = this.myModuleContainer.querySelector('#audio__wrong');
        const timeoverAudio = this.myModuleContainer.querySelector('#audio__timeover');
        this.myModuleModel.getAudio(rightAnswerAudio, wrongAnswerAudio, timeoverAudio);
    }
    setTimer() {
        this.sprintTimer = this.myModuleContainer.querySelector('.sprint__timer');
        this.myModuleModel.setTimer(this.sprintTimer);
    }
    selectTrue() {
        this.myModuleModel.checkAnswer(true);
    }
    selectFalse() {
        this.myModuleModel.checkAnswer(false);
    }
}
exports.ModuleController = ModuleController;


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
const aboutsprint_1 = __importDefault(__webpack_require__(/*! ./pages/aboutsprint */ "./src/pages/aboutsprint.ts"));
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
    aboutsprint: aboutsprint_1.default,
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

/***/ "./src/model/modelSprint.ts":
/*!**********************************!*\
  !*** ./src/model/modelSprint.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
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
exports.ModuleModel = void 0;
const api_1 = __webpack_require__(/*! ../api/api */ "./src/api/api.ts");
const api_path_1 = __webpack_require__(/*! ../api/api-path */ "./src/api/api-path.ts");
const index_1 = __importDefault(__webpack_require__(/*! ../pages/sprint/index */ "./src/pages/sprint/index.ts"));
const func_1 = __webpack_require__(/*! ../utils/func */ "./src/utils/func.ts");
class ModuleModel {
    constructor() {
        this.level = index_1.default.level;
        this.activeWordNumber = 0;
        this.activePageNumber = 0;
        this.score = 0;
        this.scoreForRightAnswer = 10;
        this.maxScoreForRightAnswer = 80;
        this.amountOfRightAnswersForBiggerScore = 3;
        this.arrayOfQuestion = [];
        this.arrayOfAnswers = [];
        this.amountOfRightAnswers = 0;
        this.setTimer = (timerElem) => {
            this.timer = Number(timerElem.textContent);
            const tick = () => {
                this.timer -= 1;
                this.myModuleView.renderTimer(this.timer, timerElem);
                if (this.timer === 0) {
                    clearInterval(this.timerId);
                    this.stopGame();
                }
                else if (this.timer === 5) {
                    this.timeoverAudio.play();
                }
            };
            this.timerId = setInterval(tick, 1000);
        };
        this.clearInterval = () => {
            if (this.timerId) {
                clearInterval(this.timerId);
            }
        };
    }
    init(view) {
        this.myModuleView = view;
        this.fillAndSortPages();
        this.getWordsFromApi();
    }
    sayWord(audio) {
        audio.src = `${api_path_1.apiPath + this.active20Words[this.activeWordNumber].audio}`;
        audio.play();
    }
    fillAndSortPages() {
        this.pages = [];
        for (let i = 0; i < 30; i++) {
            this.pages.push(i);
        }
        this.pages.sort(() => 0.5 - Math.random());
    }
    getWordsFromApi() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield api_1.api.getWords(this.level, this.pages[this.activePageNumber]);
            this.active20Words = Array.from(res);
            // console.log(this.active20Words);
            if (this.activePageNumber === 0) {
                this.prepearFirstWord();
            }
        });
    }
    prepearFirstWord() {
        const translation = this.generateTranslation();
        const { word } = this.active20Words[this.activeWordNumber];
        this.myModuleView.renderWord(word, translation);
    }
    prepearNextWord() {
        this.checkWordsNumbers();
        const translation = this.generateTranslation();
        const { word } = this.active20Words[this.activeWordNumber];
        this.myModuleView.renderWord(word, translation);
        this.arrayOfQuestion.push(word);
    }
    checkWordsNumbers() {
        if (this.activeWordNumber === 19) {
            this.activePageNumber += 1;
            this.activeWordNumber = 0;
            this.getWordsFromApi();
        }
        else {
            this.activeWordNumber += 1;
        }
    }
    generateTranslation() {
        const min = (this.activeWordNumber >= 2) ? this.activeWordNumber - 2 : 0;
        const max = (this.activeWordNumber + 2 <= 19) ? this.activeWordNumber + 2 : 19;
        this.randomTranslationNumber = (0, func_1.randomInteger)(min, max);
        return this.active20Words[this.randomTranslationNumber].wordTranslate;
    }
    checkAnswer(answer) {
        const translate = this.active20Words[this.activeWordNumber].wordTranslate;
        const rightTranslate = this.active20Words[this.randomTranslationNumber].wordTranslate;
        if ((translate === rightTranslate) === answer) {
            this.rightAnswerAudio.play();
            this.arrayOfAnswers.push(true);
            this.analyzeTrueAnswer();
        }
        else {
            this.wrongAnswerAudio.play();
            this.arrayOfAnswers.push(false);
            this.analyzeFalseAnswer();
        }
    }
    countScore() {
        this.score += this.scoreForRightAnswer;
        if (this.scoreForRightAnswer === this.maxScoreForRightAnswer) {
            this.myModuleView.renderScore(String(this.score), true);
        }
        else {
            this.myModuleView.renderScore(String(this.score));
        }
    }
    analyzeFalseAnswer() {
        this.amountOfRightAnswers = 0;
        this.myModuleView.clearSprintCount();
        this.scoreForRightAnswer = 10;
        this.myModuleView.renderCountText(this.scoreForRightAnswer);
    }
    analyzeTrueAnswer() {
        this.amountOfRightAnswers += 1;
        this.countScore();
        if (this.amountOfRightAnswers === this.amountOfRightAnswersForBiggerScore && this.scoreForRightAnswer !== this.maxScoreForRightAnswer) {
            this.getBiggerScore();
        }
        if (this.amountOfRightAnswers === (this.amountOfRightAnswersForBiggerScore + 1) && this.scoreForRightAnswer !== this.maxScoreForRightAnswer) {
            this.myModuleView.returnToOneSprintCount();
            this.amountOfRightAnswers = 1;
        }
    }
    getBiggerScore() {
        this.scoreForRightAnswer = (this.scoreForRightAnswer === this.maxScoreForRightAnswer) ? this.scoreForRightAnswer : this.scoreForRightAnswer *= 2;
        this.myModuleView.renderCountText(this.scoreForRightAnswer);
    }
    stopGame() {
        let rightAnswers = 0;
        let wrongAnswers = 0;
        this.arrayOfAnswers.forEach((item) => {
            if (item) {
                rightAnswers += 1;
            }
            else {
                wrongAnswers += 1;
            }
        });
        this.myModuleView.renderResults(this.arrayOfQuestion, this.arrayOfAnswers, rightAnswers, wrongAnswers, this.score);
    }
    getAudio(rightAnswer, wrongAnswer, timeover) {
        this.rightAnswerAudio = rightAnswer;
        this.wrongAnswerAudio = wrongAnswer;
        this.timeoverAudio = timeover;
    }
}
exports.ModuleModel = ModuleModel;
// export default ModuleModel;


/***/ }),

/***/ "./src/pages/aboutsprint.ts":
/*!**********************************!*\
  !*** ./src/pages/aboutsprint.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const header_1 = __importDefault(__webpack_require__(/*! ../components/header */ "./src/components/header.ts"));
const footer_1 = __importDefault(__webpack_require__(/*! ../components/footer */ "./src/components/footer.ts"));
const buttons_1 = __webpack_require__(/*! ../components/smallComponents/buttons */ "./src/components/smallComponents/buttons.ts");
const AboutSprintGamePage = {
    classname: 'aboutsprint',
    render() {
        return `
    ${header_1.default.render()}
    <div class = '${this.classname}-conteiner'>
      <h2 class='sprint__title'>Спринт</h2>
      <div class="sprint__rules">
        <p class="sprint__text">Игра Спринт поможет тебе проверить как хорошо ты знаешь слова.<br>
        Игра длится 1 минуту или пока не закончаться слова.<br>
        Чтобы дать ответ, кликай по нему мышкой или нажимай клавиши-стрелки.</p>
        <p>Выбери уровень сложности</p>
        <select class="sprint__level">
          <option value="level0">Уровень 1</option>
          <option value="level1">Уровень 2</option>
          <option value="level2">Уровень 3</option>
          <option value="level3">Уровень 4</option>
          <option value="level4">Уровень 5</option>
          <option value="level5">Уровень 6</option>
        </select>
        ${buttons_1.Buttons.create('Начать', 'button__start__sprint', false)}
      </div>
    </div>
    ${footer_1.default.render()}`;
    },
};
exports["default"] = AboutSprintGamePage;


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
       <div class = 'container'> 
       <div class = 'game'> ${game_render_1.gameArea} </div>
         <button  type="button"  class="go-main"><a href="${this.hashes.main}" ></a>Вернуться на главную</a></button> 
         
         </div>
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


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.startScrinAudioCall = void 0;
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
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
  <button id="level1" type="button"  class="btn-level"><a class="menu__main menu__item_active" href="${this.hashes.audiocallGame}" >Уровень 1</a></button>
 
  <button id="level2" type="button"  class="btn-level"><a class="menu__main menu__item_active" href="${this.hashes.audiocallGame}" >Уровень 2</a></button>

  <button id="level3" type="button"  class="btn-level"><a class="menu__main menu__item_active" href="${this.hashes.audiocallGame}" >Уровень 3</a></button>

  <button id="level4" type="button"  class="btn-level"><a class=" levelmenu__main menu__item_active" href="${this.hashes.audiocallGame}" >Уровень 4</a></button>

  <button id="level5" type="button"  class="btn-level"><a class="menu__main menu__item_active" href="${this.hashes.audiocallGame}" >Уровень 5</a></button>

  <button id="level6" type="button"  class="btn-level"><a class="menu__main menu__item_active" href="${this.hashes.audiocallGame}" >Уровень 6</a></button>
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
    <div class="button-container">
      ${(0, supporting_func_1.printBtnString)()}
    </div>
  </div>
 `;


/***/ }),

/***/ "./src/pages/audiocall/utils/listener-audiocall.ts":
/*!*********************************************************!*\
  !*** ./src/pages/audiocall/utils/listener-audiocall.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable class-methods-use-this */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const api_path_1 = __webpack_require__(/*! ../../../api/api-path */ "./src/api/api-path.ts");
const supporting_func_1 = __webpack_require__(/*! ./supporting-func */ "./src/pages/audiocall/utils/supporting-func.ts");
const wrong_answer_mp3_1 = __importDefault(__webpack_require__(/*! ../../../assets/audio/wrong-answer.mp3 */ "./src/assets/audio/wrong-answer.mp3"));
const right_answer_mp3_1 = __importDefault(__webpack_require__(/*! ../../../assets/audio/right-answer.mp3 */ "./src/assets/audio/right-answer.mp3"));
const storage_1 = __webpack_require__(/*! ../../../functional/storage */ "./src/functional/storage.ts");
let round = 0;
let score = 0;
let arrayWrongWords = [];
if (localStorage.getItem('arrayWrongWords') === null) {
    localStorage.setItem('arrayWrongWords', JSON.stringify(arrayWrongWords));
}
if (localStorage.getItem('score') === null) {
    localStorage.setItem('score', JSON.stringify(score));
}
if (localStorage.getItem('round') === null) {
    localStorage.setItem('round', JSON.stringify(round));
}
class ListenerAudioCall {
    open() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-sound')) {
                (0, supporting_func_1.soundAudio)((api_path_1.apiPath + supporting_func_1.wordObj.audio));
            }
            if (e.target.classList.contains('btn-translation')) {
                round = Number(localStorage.getItem('round')) + 1;
                localStorage.setItem('round', round.toString());
                if (e.target.id === supporting_func_1.wordObj.wordTranslate) {
                    score = Number(localStorage.getItem('score')) + 1;
                    localStorage.setItem('score', score.toString());
                    (0, supporting_func_1.soundAudio)((right_answer_mp3_1.default));
                    e.target.classList.add('btn-translation-right');
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
                else {
                    e.target.classList.add('btn-translation-wrong');
                    arrayWrongWords = JSON.parse(localStorage.getItem('arrayWrongWords'));
                    arrayWrongWords.push(supporting_func_1.wordObj.word);
                    localStorage.setItem('arrayWrongWords', JSON.stringify(arrayWrongWords));
                    (0, supporting_func_1.soundAudio)((wrong_answer_mp3_1.default));
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            }
            if (e.target.classList.contains('restart')) {
                window.location.reload();
            }
            if (e.target.classList.contains('btn-level')) {
                if (e.target.id === 'level1') {
                    storage_1.storage.level = 1;
                }
                if (e.target.id === 'level2') {
                    storage_1.storage.level = 2;
                    console.log(storage_1.storage.level);
                }
                if (e.target.id === 'level3') {
                    storage_1.storage.level = 3;
                }
                if (e.target.id === 'level4') {
                    storage_1.storage.level = 4;
                }
                if (e.target.id === 'level5') {
                    storage_1.storage.level = 5;
                }
                if (e.target.id === 'level6') {
                    storage_1.storage.level = 6;
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


/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
// выбор уровня для игры и страницы
let group = 0;
let page = 0;
function levelGame() {
    if (storage_1.storage.level) {
        group = storage_1.storage.level - 1;
        page = Math.floor(Math.random() * (30 - 0 + 1)) + 0;
    }
}
levelGame();
console.log(group, page);
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
let wordsString = getWordsMap();
// фильтруем избавляясь от дублей
if (localStorage.getItem('noRepeat')) {
    if (JSON.parse(localStorage.getItem('noRepeat')).length > 0) {
        wordsString = wordsString.filter((item) => !JSON.parse(localStorage.getItem('noRepeat')).includes(item));
    }
}
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
// избавляемся от дублей в массиве преводов проолжение
let noRepeat = [];
noRepeat.push(wordObj.wordTranslate);
if (localStorage.getItem('noRepeat')) {
    noRepeat = JSON.parse(localStorage.getItem('noRepeat'));
    noRepeat.push(wordObj.wordTranslate);
    localStorage.setItem('noRepeat', JSON.stringify(noRepeat));
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
    if (Number(localStorage.getItem('round')) < 21) {
        for (let i = 0; i < arraySixWords.length; i++) {
            a = arraySixWords[i];
            containerBtn += `<button  type="button" id="${a}" class="btn-translation">${a}</button> `;
        }
    }
    else {
        let a = '';
        if (JSON.parse(localStorage.getItem('arrayWrongWords')).length > 0) {
            a = ` <p class="game-text">Рекомендуем выучить:&nbsp${JSON.parse(localStorage.getItem('arrayWrongWords'))}</p> `;
        }
        else {
            a = ' <p class="game-text">Вы ниразу не ошиблись!</p> ';
        }
        containerBtn += `
  <div class="game-over">
    <p class="game-text">Вы прошли игру!</p>
    <p class="game-text">Ваш результат: &nbsp ${localStorage.getItem('score')}</p>
    ${a}
    <button type="button" class="restart">Начать заново</button>
  </div> `;
        localStorage.removeItem('arrayWrongWords');
        localStorage.removeItem('round');
        localStorage.removeItem('score');
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
/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
const header_1 = __importDefault(__webpack_require__(/*! ../../components/header */ "./src/components/header.ts"));
const initSprintMVC_1 = __webpack_require__(/*! ./initSprintMVC */ "./src/pages/sprint/initSprintMVC.ts");
const buttons_1 = __webpack_require__(/*! ../../components/smallComponents/buttons */ "./src/components/smallComponents/buttons.ts");
const parrots_jpg_1 = __importDefault(__webpack_require__(/*! ../../assets/parrots.jpg */ "./src/assets/parrots.jpg"));
const arrow_left_png_1 = __importDefault(__webpack_require__(/*! ../../assets/arrow-left.png */ "./src/assets/arrow-left.png"));
const arrow_right_png_1 = __importDefault(__webpack_require__(/*! ../../assets/arrow-right.png */ "./src/assets/arrow-right.png"));
const right_answer_mp3_1 = __importDefault(__webpack_require__(/*! ../../assets/audio/right-answer.mp3 */ "./src/assets/audio/right-answer.mp3"));
const wrong_answer_mp3_1 = __importDefault(__webpack_require__(/*! ../../assets/audio/wrong-answer.mp3 */ "./src/assets/audio/wrong-answer.mp3"));
const time_over_mp3_1 = __importDefault(__webpack_require__(/*! ../../assets/audio/time-over.mp3 */ "./src/assets/audio/time-over.mp3"));
const SprintGamePage = {
    classname: 'sprint',
    level: 0,
    render() {
        return `
    ${header_1.default.render()}
    <div class = '${this.classname}-conteiner'>
      <div class="sprint__score">0</div>
      <div class="sprint__timer">60</div>
      <div class="sprint__field">
        <div class="field__title">
          <div class="title__count"></div>
          <div class="title__text">+ 10 очков за слово</div>
        </div>
        <div class="field__content">
          <div class="content__img"><img src='${parrots_jpg_1.default}' alt="parrots"></div>
          <div class="content__question">
          <div class="content__word">
            <div class="question__word"></div>
            <div class="word__sound"></div>
            <audio id="sprint__say__word" src=""></audio>
          </div>
          <div class="question__translation"></div>
          </div>
        </div>
        <div class="field__buttons">${buttons_1.Buttons.create('Неверно', 'button__sprint__false', false)}${buttons_1.Buttons.create('Верно', 'button__sprint__true', false)}</div>
      </div>
      <div class="sprint__arrows">
        <img src='${arrow_left_png_1.default}' alt="arrow">
        <img src='${arrow_right_png_1.default}' alt="arrow">
      </div>
      <audio id="audio__right" src="${right_answer_mp3_1.default}"></audio>
      <audio id="audio__wrong" src="${wrong_answer_mp3_1.default}"></audio>
      <audio id="audio__timeover" src="${time_over_mp3_1.default}"></audio>
    </div>`;
    },
    initMVC() {
        (0, initSprintMVC_1.initSprintMVC)();
    },
    saveLevel(level) {
        this.level = +level[level.length - 1];
    },
};
exports["default"] = SprintGamePage;


/***/ }),

/***/ "./src/pages/sprint/initSprintMVC.ts":
/*!*******************************************!*\
  !*** ./src/pages/sprint/initSprintMVC.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable import/no-cycle */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initSprintMVC = void 0;
const controllerSprint_1 = __webpack_require__(/*! ../../controller/controllerSprint */ "./src/controller/controllerSprint.ts");
const modelSprint_1 = __webpack_require__(/*! ../../model/modelSprint */ "./src/model/modelSprint.ts");
const viewSprint_1 = __webpack_require__(/*! ../../view/viewSprint */ "./src/view/viewSprint.ts");
function initSprintMVC() {
    const view = new viewSprint_1.ModuleView();
    const model = new modelSprint_1.ModuleModel();
    const controller = new controllerSprint_1.ModuleController();
    const container = document.querySelector('.sprint-conteiner');
    view.init(container);
    model.init(view);
    controller.init(container, model);
}
exports.initSprintMVC = initSprintMVC;


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
    //     <p class="unit-name">Раздел 1 <span class="unit-page">страница 1</span></p>
    //   </div>
    //   <ul class=${this.wordlist}>
    //    ${this.getCards()}
    //   </ul>
    //   <div class="textbook-footer">
    //     <div class="textbook-pagination">
    //       <button class="pagination-btn btn-orange">Предыдущая</button>
    //       <button class="pagination-btn btn-orange">Следующая</button>
    //     </div>
    //   </div>
    // </div>`;
    //   return `${Header.render()}${view}${Footer.render()}`;
    // },
    // render(): string {
    //   const view = `<div class="textbook-units">
    //   <div class="textbook-unit" data-unit="1">Раздел 1</div>
    //   <div class="textbook-unit" data-unit="2">Раздел 2</div>
    //   <div class="textbook-unit" data-unit="3">Раздел 3</div>
    //   <div class="textbook-unit" data-unit="4">Раздел 4</div>
    //   <div class="textbook-unit" data-unit="5">Раздел 5</div>
    //   <div class="textbook-unit" data-unit="6">Раздел 6</div>
    //   <div class="textbook-unit" data-unit="7">Раздел "Сложные слова"</div>
    //   </div>`;
    //   return `${Header.render()}${view}${Footer.render()}`;
    // },
    render() {
        const view = ` <div class="textbook-navigation unit-navigation">
         <button class="btn-round"></button>
         <p class="unit-name">Раздел 1</p>
       </div>
    <ul class="unit-pages">
  ${this.renderPages()}
  </ul>`;
        return `${header_1.default.render()}${view}${footer_1.default.render()}`;
    },
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
    <p class="word-name">${words[i].word} ${words[i].transcription}</p>
      <div class="audio"><audio></audio></div>
    </div>
    <p class="word-pronounce translation">${words[i].wordTranslate}</p>
    <p class="word-example">${words[i].textMeaning}</p>
    <p class="word-example translation">${words[i].textMeaningTranslate}</p>
    <p class="word-example">${words[i].textExample}</p>
    <p class="word-example translation">${words[i].textExampleTranslate}</p>
  </div>
  <div class="word-noted">
      <button class="btn-orange btn-difficult">Сложно?</button>
      <button class="btn-orange btn-learned">Изучено?</button>
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

/***/ "./src/utils/func.ts":
/*!***************************!*\
  !*** ./src/utils/func.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.randomInteger = void 0;
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.randomInteger = randomInteger;


/***/ }),

/***/ "./src/view/view.ts":
/*!**************************!*\
  !*** ./src/view/view.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __importDefault(__webpack_require__(/*! ../pages/sprint/index */ "./src/pages/sprint/index.ts"));
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
        if (hashPageName === 'sprint') {
            index_1.default.initMVC();
        }
    }
}
exports["default"] = ModuleView;


/***/ }),

/***/ "./src/view/viewSprint.ts":
/*!********************************!*\
  !*** ./src/view/viewSprint.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModuleView = void 0;
const sprintresults_1 = __importDefault(__webpack_require__(/*! ../components/sprintresults */ "./src/components/sprintresults.ts"));
const true_png_1 = __importDefault(__webpack_require__(/*! ../assets/true.png */ "./src/assets/true.png"));
class ModuleView {
    constructor() {
        this.sprintTimer = document.querySelector('.sprint__timer');
        this.sprintScore = document.querySelector('.sprint__score');
        this.sprintCount = document.querySelector('.title__count');
        this.sprintCountText = document.querySelector('.title__text');
        this.questionWord = document.querySelector('.question__word');
        this.questionTranslation = document.querySelector('.question__translation');
        this.sprintConteiner = document.querySelector('.sprint-conteiner');
    }
    init(container) {
        this.myModuleContainer = container;
        // this.routesObj = routes;
    }
    renderWord(word, translation) {
        this.questionWord.textContent = word;
        this.questionTranslation.textContent = translation;
    }
    renderTimer(timer, timerElem) {
        timerElem.textContent = String(timer);
    }
    renderScore(score, maxScore) {
        this.sprintScore.textContent = score;
        if (maxScore) {
            this.sprintCount.innerHTML = `<img src="${true_png_1.default}" alt="img">`;
        }
        else {
            this.sprintCount.innerHTML += `<img src="${true_png_1.default}" alt="img">`;
        }
    }
    clearSprintCount() {
        this.sprintCount.innerHTML = '';
    }
    returnToOneSprintCount() {
        this.sprintCount.innerHTML = `<img src="${true_png_1.default}" alt="img">`;
    }
    renderCountText(n) {
        this.sprintCountText.innerHTML = `+ ${n} очков за слово`;
    }
    renderResults(questions, answers, rightAnswers, wrongAnswers, score) {
        this.sprintConteiner.innerHTML = '';
        this.sprintConteiner.innerHTML = `${sprintresults_1.default.render(questions, answers, rightAnswers, wrongAnswers, score)}`;
    }
}
exports.ModuleView = ModuleView;
// export default ModuleView;


/***/ }),

/***/ "./src/assets/acsess.svg":
/*!*******************************!*\
  !*** ./src/assets/acsess.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/30e3f028f366499892cf.svg";

/***/ }),

/***/ "./src/assets/arrow-left.png":
/*!***********************************!*\
  !*** ./src/assets/arrow-left.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/44b88011adb5d35cf7aa.png";

/***/ }),

/***/ "./src/assets/arrow-right.png":
/*!************************************!*\
  !*** ./src/assets/arrow-right.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/871c9621a3b8720b17f6.png";

/***/ }),

/***/ "./src/assets/audio/right-answer.mp3":
/*!*******************************************!*\
  !*** ./src/assets/audio/right-answer.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ba9d859822d6f81c0b2b.mp3";

/***/ }),

/***/ "./src/assets/audio/time-over.mp3":
/*!****************************************!*\
  !*** ./src/assets/audio/time-over.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/0d72e418418aa288e31c.mp3";

/***/ }),

/***/ "./src/assets/audio/wrong-answer.mp3":
/*!*******************************************!*\
  !*** ./src/assets/audio/wrong-answer.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/9c84c98f13d772635893.mp3";

/***/ }),

/***/ "./src/assets/dictionary.svg":
/*!***********************************!*\
  !*** ./src/assets/dictionary.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8e2aa4a649375d6ac5cb.svg";

/***/ }),

/***/ "./src/assets/no.png":
/*!***************************!*\
  !*** ./src/assets/no.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/556cc7b258fc20571474.png";

/***/ }),

/***/ "./src/assets/parrots.jpg":
/*!********************************!*\
  !*** ./src/assets/parrots.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d224f555f84eafc9c431.jpg";

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

/***/ }),

/***/ "./src/assets/true.png":
/*!*****************************!*\
  !*** ./src/assets/true.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e91e9bcc1d59898e5eb7.png";

/***/ }),

/***/ "./src/assets/yes.png":
/*!****************************!*\
  !*** ./src/assets/yes.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ff14374f11877519a953.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL3RleHRib29rL3RleHRib29rLnNjc3M/ZTIwZiIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3M/YWFhZiIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvYXBpL2FwaS1wYXRoLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9hcGkvYXBpLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9tb2RhbC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9zbWFsbENvbXBvbmVudHMvYnV0dG9ucy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9zcHJpbnRyZXN1bHRzLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb250cm9sbGVyL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbnRyb2xsZXIvY29udHJvbGxlclNwcmludC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvZnVuY3Rpb25hbC9saXN0ZW5lci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvZnVuY3Rpb25hbC9zaG93LXVzZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2Z1bmN0aW9uYWwvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL21vZGVsL21vZGVsLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9tb2RlbC9tb2RlbFNwcmludC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYWJvdXRzcHJpbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL21haW4udHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC9zdGFydC1hdWRpb2NhbGwudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC91dGlscy9nYW1lLXJlbmRlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL3V0aWxzL2xpc3RlbmVyLWF1ZGlvY2FsbC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL3V0aWxzL3N1cHBvcnRpbmctZnVuYy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvbWFpbi50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvc3ByaW50L2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9zcHJpbnQvaW5pdFNwcmludE1WQy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvc3RhdGlzdGljcy9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvdGVhbS50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvdGV4dGJvb2svaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3V0aWxzL2Z1bmMudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3ZpZXcvdmlldy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvdmlldy92aWV3U3ByaW50LnRzIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuXG5jb25zdCBhcGlQYXRoID0gJ2h0dHBzOi8vcnNsYW5nLWxlYXJuaW5nLWVuZ2xpc2gtd29yZHMuaGVyb2t1YXBwLmNvbS8nO1xuY29uc3Qgd29yZHNFbmRwb2ludCA9ICd3b3Jkcyc7XG5jb25zdCB1c2Vyc0VuZHBvaW50ID0gJ3VzZXJzJztcbmNvbnN0IHNpZ25JbiA9ICdzaWduaW4nO1xuXG5leHBvcnQge1xuICBhcGlQYXRoLCB3b3Jkc0VuZHBvaW50LCB1c2Vyc0VuZHBvaW50LCBzaWduSW4sXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tZWxzZS1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG5cbmltcG9ydCB7XG4gIGFwaVBhdGgsIHVzZXJzRW5kcG9pbnQsIHdvcmRzRW5kcG9pbnQsIHNpZ25Jbixcbn0gZnJvbSAnLi9hcGktcGF0aCc7XG5pbXBvcnQgeyBJVXNlciwgSVdvcmQsIElVc2VyRGF0YSB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcblxuY29uc3QgYXBpID0ge1xuXG4gIGFzeW5jIGNyZWF0ZU5ld1VzZXIobmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxJVXNlciB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdsZW5ndGggbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZycpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBnZXRVc2VyKGlkOiBzdHJpbmcpOiBQcm9taXNlPElVc2VyIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3VzZXJzRW5kcG9pbnR9LyR7aWR9YCxcbiAgICAgICAgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSVVzZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyB1c2VyU2lnbkluKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPElVc2VyRGF0YSB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHtzaWduSW59YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHVzZXInKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZ2V0V29yZHMoZ3JvdXA6IG51bWJlciwgcGFnZTogbnVtYmVyKTogUHJvbWlzZTxJV29yZFtdIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3dvcmRzRW5kcG9pbnR9P2dyb3VwPSR7Z3JvdXB9JnBhZ2U9JHtwYWdlfWAsXG4gICAgICAgIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElXb3JkW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZ2V0IHdvcmRzXCIpO1xuICAgIH1cbiAgfSxcbiAgYXN5bmMgZ2V0V29yZChpZDogc3RyaW5nKTogUHJvbWlzZTxJV29yZCB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt3b3Jkc0VuZHBvaW50fS8ke2lkfWAsXG4gICAgICAgIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElXb3JkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGdldCB3b3JkXCIpO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCB7IGFwaSB9O1xuIiwiY29uc3QgQ29udGVudCA9IHtcbiAgcmVuZGVyOiAoY3VzdG9tQ2xhc3MgPSAnJyk6c3RyaW5nID0+IGA8ZGl2IGNsYXNzPVwiY29udGVudCAke2N1c3RvbUNsYXNzfVwiIGlkPVwiY29udGVudFwiPjwvZGl2PmAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiY29uc3QgRm9vdGVyID0ge1xuICByZW5kZXI6IChjdXN0b21DbGFzcyA9ICcnKTpzdHJpbmcgPT4gYDxmb290ZXIgY2xhc3M9XCJmb290ZXIgJHtjdXN0b21DbGFzc31cIj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2l0aHViLWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9mbHlldGhlclwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5mbHlldGhlcjxhPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGFyaW5hOTkyXCIgY2xhc3M9XCJnaXRodWItbGlua1wiPkRhcmluYTk5MjxhPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQWxlbmFEb3pcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+QWxlbmFEb3o8YT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuPiYjMTY5OyAyMDIyPC9zcGFuPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgY2xhc3M9XCJycy1saW5rXCI+PC9hPlxuICAgICAgICAgICAgPC9mb290ZXI+YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBzaG93VXNlciBmcm9tICcuLi9mdW5jdGlvbmFsL3Nob3ctdXNlcic7XG5cbmNvbnN0IEhlYWRlciA9IHtcbiAgaGFzaGVzOiB7XG4gICAgbWFpbjogJyNtYWluJyxcbiAgICB0ZXh0Ym9vazogJyN0ZXh0Ym9vaycsXG4gICAgc3RhdGlzdGljczogJyNzdGF0aXN0aWNzJyxcbiAgICBhdWRpb2NhbGw6ICcjYXVkaW9jYWxsJyxcbiAgICBhYm91dHNwcmludDogJyNhYm91dHNwcmludCcsXG4gICAgc3ByaW50OiAnI3NwcmludCcsXG4gICAgdGVhbTogJyN0ZWFtJyxcbiAgfSxcblxuICByZW5kZXIoY3VzdG9tQ2xhc3MgPSAnJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGlkPVwibW9kYWwtcmVzdWx0LXdyYXBwZXJcIj5cbiAgICA8ZGl2IGlkPVwib3ZlcmxheVwiPjwvZGl2PlxuICAgIDxkaXYgaWQ9XCJtb2RhbC13aW5kb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJidG4tY2xvc2VcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyICR7Y3VzdG9tQ2xhc3N9XCIgaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGVyX19sb2dvXCI+PGEgaHJlZj1cIlwiPlJTTGFuZzwvYT48L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19hdXRoXCI+XG4gICAgICAgICAgJHtzaG93VXNlcih0cnVlKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2F1dGhcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuYXYgY2xhc3M9XCJoZWFkZXJfX21lbnVcIj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51X19saXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMubWFpbn1cIiBjbGFzcz1cIm1lbnVfX21haW4gbWVudV9faXRlbV9hY3RpdmVcIj7Qk9C70LDQstC90LDRjzwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLnRleHRib29rfVwiIGNsYXNzPVwibWVudV9fdGV4dGJvb2tcIj7Qo9GH0LXQsdC90LjQujwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiJHt0aGlzLmhhc2hlcy5zdGF0aXN0aWNzfVwiIGNsYXNzPVwibWVudV9fc3RhdGljdGljcyBtZW51X19pdGVtX2Rpc2FibGVcIj7QodGC0LDRgtC40YHRgtC40LrQsDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsfVwiIGNsYXNzPVwibWVudV9fYXVkaW9jYWxsXCI+0JDRg9C00LjQvtCy0YvQt9C+0LI8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHt0aGlzLmhhc2hlcy5hYm91dHNwcmludH1cIiBjbGFzcz1cIm1lbnVfX3NwcmludFwiPtCh0L/RgNC40L3RgjwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLnRlYW19XCIgY2xhc3M9XCJtZW51X190ZWFtXCI+0J4g0LrQvtC80LDQvdC00LU8L2E+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1cmdlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlci1idXJnZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2F1dGhcIj5cbiAgICAgICAgICAgICAgJHtzaG93VXNlcih0cnVlKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19hdXRoXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJoZWFkZXJfX21lbnVcIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibWVudV9fbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHt0aGlzLmhhc2hlcy5tYWlufVwiIGNsYXNzPVwibWVudV9fbWFpbiBtZW51X19pdGVtX2FjdGl2ZVwiPtCT0LvQsNCy0L3QsNGPPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLnRleHRib29rfVwiIGNsYXNzPVwibWVudV9fdGV4dGJvb2tcIj7Qo9GH0LXQsdC90LjQujwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLnN0YXRpc3RpY3N9XCIgY2xhc3M9XCJtZW51X19zdGF0aWN0aWNzIG1lbnVfX2l0ZW1fZGlzYWJsZVwiPtCh0YLQsNGC0LjRgdGC0LjQutCwPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbH1cIiBjbGFzcz1cIm1lbnVfX2F1ZGlvY2FsbFwiPtCQ0YPQtNC40L7QstGL0LfQvtCyPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLnNwcmludH1cIiBjbGFzcz1cIm1lbnVfX3NwcmludFwiPtCh0L/RgNC40L3RgjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHt0aGlzLmhhc2hlcy50ZWFtfVwiIGNsYXNzPVwibWVudV9fdGVhbVwiPtCeINC60L7QvNCw0L3QtNC1PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuZXhwb3J0IGNvbnN0IGZvcm1Mb2dpbiA9IGAgPGZvcm0gY2xhc3M9XCJmb3JtLXNpZ25pblwiIGlkPVwiYXV0aFwiPiAgICAgICBcbjxoMyBjbGFzcz1cImZvcm0tc2lnbmluLWhlYWRpbmdcIj7QktCy0LXQtNC40YLQtSDRgdCy0L7QuCDQtNCw0L3QvdGL0LU8L2gzPlxuPGRpdiBjbGFzcz1cImZvcm0tc2lnbmluLWJvZHlcIj5cbiAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwidXNlci1lbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCLQktCw0YggRW1haWxcIiByZXF1aXJlZCAvPlxuICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbWlubGVuZ3RoPVwiOFwiIGlkPVwidXNlci1wYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIiByZXF1aXJlZC8+ICAgICAgXG4gIDxkaXYgY2xhc3M9XCJmb3JtLXNpZ25pbi1idXR0b25zXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1vcmFuZ2VcIiAgaWQ9XCJidXR0b24tbmV3LXVzZXJcIiB0eXBlID1cImJ1dHRvblwiPiDQoNC10LPQuNGB0YLRgNCw0YbQuNGPIDwvYnV0dG9uPiBcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLW9yYW5nZVwiIGlkPVwiYXV0b3JpenRpb25CdG5cIiB0eXBlPVwic3VibWl0XCI+0JLQvtC50YLQuDwvYnV0dG9uPiAgXG4gIDwvZGl2PlxuICA8L2Rpdj5cbjxoNCBjbGFzcz1cImZvcm0tc2lnbmluLWVycm9yXCI+PC9oND4gXG48L2Zvcm0+YDtcblxuZXhwb3J0IGNvbnN0IGZvcm1SZWdpc3RyYXRpb24gPSBgIDxmb3JtIGNsYXNzPVwiZm9ybS1zaWduaW5cIiBpZD1cInJlZ1wiPiAgICAgICBcbjxoMyBjbGFzcz1cImZvcm0tc2lnbmluLWhlYWRpbmdcIj7QktCy0LXQtNC40YLQtSDRgdCy0L7QuCDQtNCw0L3QvdGL0LU8L2gzPlxuPGRpdiBjbGFzcz1cImZvcm0tc2lnbmluLWJvZHlcIj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VyLW5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJ1c2VyLW5hbWVcIiBwbGFjZWhvbGRlcj1cItCY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIiByZXF1aXJlZD1cIlwiIC8+XG4gIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cInVzZXItZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiByZXF1aXJlZCAvPlxuICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbWlubGVuZ3RoPVwiOFwiIGlkPVwidXNlci1wYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIiByZXF1aXJlZCAvPiAgXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vcmFuZ2VcIiBpZD1cInJlZ2lzdHJhdGlvbl9idG5cIiB0eXBlPVwic3VibWl0XCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQuCDQstGF0L7QtDwvYnV0dG9uPiAgXG48L2Rpdj5cbjxoNCBjbGFzcz1cImZvcm0tcmVnLWVycm9yXCI+PC9oND4gIFxuPC9mb3JtPmA7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5leHBvcnQgY29uc3QgQnV0dG9ucyA9IHtcbiAgY3JlYXRlOiAoc3RyOnN0cmluZywgY2xhc3NOYW1lOnN0cmluZywgZGlzYWJsZWQgPSBmYWxzZSk6c3RyaW5nID0+IGA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uICR7Y2xhc3NOYW1lfVwiICR7ZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJyd9PiR7c3RyfTwvYnV0dG9uPmAsXG59O1xuIiwiaW1wb3J0IHllc0ltYWdlIGZyb20gJy4uL2Fzc2V0cy95ZXMucG5nJztcbmltcG9ydCBOb0ltYWdlIGZyb20gJy4uL2Fzc2V0cy9uby5wbmcnO1xuXG5jb25zdCBTcHJpbnRSZXN1bHRzID0ge1xuICByZW5kZXIocXVlc3Rpb25zOnN0cmluZ1tdLCBhbnN3ZXJzOmJvb2xlYW5bXSwgcmlnaHRBbnN3ZXJzOm51bWJlciwgd3JvbmdBbnN3ZXJzOm51bWJlciwgc2NvcmU6bnVtYmVyKTpzdHJpbmcge1xuICAgIGNvbnN0IHRhYmxlVGV4dENvbnRlbnQ6c3RyaW5nID0gdGhpcy5jcmVhdGVUYWJsZShxdWVzdGlvbnMsIGFuc3dlcnMpO1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250ZWluZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzcHJpbnRfX3Jlc3VsdF9fc2NvcmVcIj7QotCy0L7QuSDRgNC10LfRg9C70YzRgtCw0YI6ICR7c2NvcmV9INC+0YfQutC+0LIgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInNwcmludF9fcmVzdWx0XCI+0J/RgNCw0LLQuNC70YzQvdGL0YUg0L7RgtCy0LXRgtC+0LI6ICR7cmlnaHRBbnN3ZXJzfS4g0J7RiNC40LHQvtC6OiAke3dyb25nQW5zd2Vyc30uPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtY29udGVpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+0JLRi9GD0YfQtdC90L3Ri9C1INGB0LvQvtCy0LA6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInNwcmludF9fdGFibGVfX3Jlc3VsdFwiPiR7dGFibGVUZXh0Q29udGVudH08L3RhYmxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzcHJpbnRfX2Nsb3NlX19yZXN1bHRcIiBocmVmPVwiI21haW5cIj7Ql9Cw0LrRgNGL0YLRjDwvYT5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gIH0sXG4gIGNyZWF0ZVRhYmxlOiAocXVlc3Rpb25zOnN0cmluZ1tdLCBhbnN3ZXJzOmJvb2xlYW5bXSk6c3RyaW5nID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNyYyA9IGFuc3dlcnNbaV0gPyB5ZXNJbWFnZSA6IE5vSW1hZ2U7XG4gICAgICByZXN1bHQgKz0gYDx0cj48dGQ+JHtxdWVzdGlvbnNbaV19PC90ZD48dGQ+PGltZyBzcmM9XCIke3NyY31cIiBhbHQ9XCJ5ZXMvbm9cIj48L3RkPjwvdHI+YDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwcmludFJlc3VsdHM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5cbi8vIGltcG9ydCBtb2RhbEF1dGhvcml6YXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbCc7XG5cbmltcG9ydCB7IE1lbnVJdGVtcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCBTcHJpbnRHYW1lUGFnZSBmcm9tICcuLi9wYWdlcy9zcHJpbnQvaW5kZXgnO1xuaW1wb3J0IE1vZHVsZU1vZGVsIGZyb20gJy4uL21vZGVsL21vZGVsJztcbmltcG9ydCBsaXN0ZW5lciBmcm9tICcuLi9mdW5jdGlvbmFsL2xpc3RlbmVyJztcbmltcG9ydCBsaXN0ZW5lckF1ZGlvQ2FsbCBmcm9tICcuLi9wYWdlcy9hdWRpb2NhbGwvdXRpbHMvbGlzdGVuZXItYXVkaW9jYWxsJztcblxuY2xhc3MgTW9kdWxlQ29udHJvbGxlciB7XG4gIG15TW9kdWxlQ29udGFpbmVyITogSFRNTEVsZW1lbnQ7XG5cbiAgbXlNb2R1bGVNb2RlbCE6IE1vZHVsZU1vZGVsO1xuXG4gIG1lbnVNYWluICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVUZXh0Ym9vayAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51U3RhdGljdGljcyAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51QXVkaW9jYWxsICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVTcHJpbnQgITogSFRNTEVsZW1lbnQ7XG5cbiAgbWVudVRlYW0gITogSFRNTEVsZW1lbnQ7XG5cbiAgYnV0dG9uU3RhcnRTcHJpbnQhOiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICBzcHJpbnRMZXZlbCAhOiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGF1ZGlvY2FsbGdhbWUgITogSFRNTEVsZW1lbnQ7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50LCBtb2RlbDogTW9kdWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbCA9IG1vZGVsO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gbW9kYWxBdXRob3JpemF0aW9uLm9wZW4oKTtcbiAgICBsaXN0ZW5lci5vcGVuKCk7XG4gICAgbGlzdGVuZXJBdWRpb0NhbGwub3BlbigpO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAvLyB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjbWFpbic7XG4gIH1cblxuICB1cGRhdGVTdGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBoYXNoUGFnZU5hbWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbC51cGRhdGVTdGF0ZShoYXNoUGFnZU5hbWUpO1xuICAgIHRoaXMuZmluZE1lbnVFbGVtZW50cyhoYXNoUGFnZU5hbWUpO1xuICAgIHN3aXRjaCAoaGFzaFBhZ2VOYW1lKSB7XG4gICAgICBjYXNlICdhYm91dHNwcmludCc6XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uc0Fib3V0U3ByaW50R2FtZUxpc3RlbmVycygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgZmluZE1lbnVFbGVtZW50cyhoYXNoTmFtZTpzdHJpbmcpOnZvaWQge1xuICAgIHRoaXMubWVudU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbWFpbicpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudVRleHRib29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3RleHRib29rJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51U3RhdGljdGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19zdGF0aWN0aWNzJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51QXVkaW9jYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2F1ZGlvY2FsbCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudVNwcmludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19zcHJpbnQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVUZWFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3RlYW0nKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBvYmo6TWVudUl0ZW1zID0ge1xuICAgICAgbWFpbjogdGhpcy5tZW51TWFpbixcbiAgICAgIHRleHRib29rOiB0aGlzLm1lbnVUZXh0Ym9vayxcbiAgICAgIHN0YXRpc3RpY3M6IHRoaXMubWVudVN0YXRpY3RpY3MsXG4gICAgICBhdWRpb2NhbGw6IHRoaXMubWVudUF1ZGlvY2FsbCxcbiAgICAgIHNwcmludDogdGhpcy5tZW51U3ByaW50LFxuICAgICAgYWJvdXRzcHJpbnQ6IHRoaXMubWVudVNwcmludCxcbiAgICAgIHRlYW06IHRoaXMubWVudVRlYW0sXG4gICAgfTtcbiAgICBpZiAodGhpcy5tZW51TWFpbikge1xuICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLmhpZ2hsaWdodEFjdGl2ZU1lbnVJdGVtKG9iaiwgaGFzaE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJ1dHRvbnNBYm91dFNwcmludEdhbWVMaXN0ZW5lcnMoKTp2b2lkIHtcbiAgICB0aGlzLmJ1dHRvblN0YXJ0U3ByaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fc3RhcnRfX3NwcmludCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMuc3ByaW50TGV2ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ByaW50X19sZXZlbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5idXR0b25TdGFydFNwcmludC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI3NwcmludCc7XG4gICAgICBTcHJpbnRHYW1lUGFnZS5zYXZlTGV2ZWwodGhpcy5zcHJpbnRMZXZlbC52YWx1ZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlQ29udHJvbGxlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBNb2R1bGVNb2RlbCB9IGZyb20gJy4uL21vZGVsL21vZGVsU3ByaW50JztcblxuZXhwb3J0IGNsYXNzIE1vZHVsZUNvbnRyb2xsZXIge1xuICBteU1vZHVsZUNvbnRhaW5lciE6IEhUTUxFbGVtZW50O1xuXG4gIG15TW9kdWxlTW9kZWwhOiBNb2R1bGVNb2RlbDtcblxuICBidXR0b25GYWxzZSE6IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gIGJ1dHRvblRydWUhOiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICBzcHJpbnRUaW1lciE6IEhUTUxFbGVtZW50O1xuXG4gIGJ1dHRvblNheVdvcmQhOkhUTUxFbGVtZW50O1xuXG4gIGluaXQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgbW9kZWw6IE1vZHVsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5maW5kQXVkaW9FbGVtZW50cygpO1xuICAgIHRoaXMuc2V0VGltZXIoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMubXlNb2R1bGVNb2RlbC5jbGVhckludGVydmFsKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCk6dm9pZCB7XG4gICAgdGhpcy5idXR0b25GYWxzZSA9IHRoaXMubXlNb2R1bGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fc3ByaW50X19mYWxzZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMuYnV0dG9uRmFsc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2hlY2tBbnN3ZXIoZmFsc2UpO1xuICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnByZXBlYXJOZXh0V29yZCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5idXR0b25UcnVlID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19zcHJpbnRfX3RydWUnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICB0aGlzLmJ1dHRvblRydWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2hlY2tBbnN3ZXIodHJ1ZSk7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwucHJlcGVhck5leHRXb3JkKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLmNoZWNrQW5zd2VyKGZhbHNlKTtcbiAgICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnByZXBlYXJOZXh0V29yZCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2hlY2tBbnN3ZXIodHJ1ZSk7XG4gICAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5wcmVwZWFyTmV4dFdvcmQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYnV0dG9uU2F5V29yZCA9IHRoaXMubXlNb2R1bGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLndvcmRfX3NvdW5kJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5idXR0b25TYXlXb3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3ByaW50X19zYXlfX3dvcmQnKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnNheVdvcmQoYXVkaW8pO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZEF1ZGlvRWxlbWVudHMoKTp2b2lkIHtcbiAgICBjb25zdCByaWdodEFuc3dlckF1ZGlvID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYXVkaW9fX3JpZ2h0JykgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBjb25zdCB3cm9uZ0Fuc3dlckF1ZGlvID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYXVkaW9fX3dyb25nJykgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBjb25zdCB0aW1lb3ZlckF1ZGlvID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYXVkaW9fX3RpbWVvdmVyJykgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwuZ2V0QXVkaW8ocmlnaHRBbnN3ZXJBdWRpbywgd3JvbmdBbnN3ZXJBdWRpbywgdGltZW92ZXJBdWRpbyk7XG4gIH1cblxuICBzZXRUaW1lcigpOnZvaWQge1xuICAgIHRoaXMuc3ByaW50VGltZXIgPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnRfX3RpbWVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLnNldFRpbWVyKHRoaXMuc3ByaW50VGltZXIpO1xuICB9XG5cbiAgc2VsZWN0VHJ1ZSgpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbC5jaGVja0Fuc3dlcih0cnVlKTtcbiAgfVxuXG4gIHNlbGVjdEZhbHNlKCk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLmNoZWNrQW5zd2VyKGZhbHNlKTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1zaGFkb3cgKi9cblxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgeyBmb3JtTG9naW4sIGZvcm1SZWdpc3RyYXRpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsJztcbmltcG9ydCBzaG93VXNlciBmcm9tICcuL3Nob3ctdXNlcic7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuY2xhc3MgTGlzdGVuZXIge1xuICBvcGVuKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYXV0aG9yaXphdGlvbicpKSB7XG4gICAgICAgIGNvbnN0IGJ0bkNsb3NlTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNsb3NlJyk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuICAgICAgICBjb25zdCBtb2RhbFJlc3VsdFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtcmVzdWx0LXdyYXBwZXInKTtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgd3JhcHBlciEuaW5uZXJIVE1MID0gZm9ybUxvZ2luO1xuICAgICAgICBtb2RhbFJlc3VsdFdyYXBwZXIhLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBjb25zdCB1c2VyRW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWVtYWlsJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1wYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmICh1c2VyRW1haWxJbnB1dCAmJiB1c2VyUGFzc3dvcmRJbnB1dCkge1xuICAgICAgICAgIGNvbnN0IGF1dGhGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGgnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgICBpZiAoYXV0aEZvcm0pIHtcbiAgICAgICAgICAgIGF1dGhGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBlcnJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc2lnbmluLWVycm9yJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgIGVyckZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IHVzZXJFbWFpbElucHV0IS52YWx1ZTtcbiAgICAgICAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkID0gdXNlclBhc3N3b3JkSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGFwaS51c2VyU2lnbkluKHVzZXJFbWFpbCwgdXNlclBhc3N3b3JkKVxuICAgICAgICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc3RvcmFnZS51c2VyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICBzaG93VXNlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgZXJyRm9ybS5pbm5lckhUTUwgPSAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0L3QsNC50LTQtdC9LCDQv9GA0L7QstC10YDRjNGC0LUg0YHQstC+0Lgg0LTQsNC90L3Ri9C1INC40LvQuCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMJztcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnV0dG9uTmV3VXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tbmV3LXVzZXInKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgaWYgKGJ1dHRvbk5ld1VzZXIpIHtcbiAgICAgICAgICBidXR0b25OZXdVc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKF9lOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgd3JhcHBlciEuaW5uZXJIVE1MID0gZm9ybVJlZ2lzdHJhdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItZW1haWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1wYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCB1c2VyTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItbmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAodXNlck5hbWVJbnB1dCAmJiB1c2VyRW1haWxJbnB1dCAmJiB1c2VyUGFzc3dvcmRJbnB1dCkge1xuICAgICAgICAgICAgICBjb25zdCByZWdpc3RyYXRpb25Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICAgICAgICBpZiAocmVnaXN0cmF0aW9uRm9ybSkge1xuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBlcnJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcmVnLWVycm9yJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICBlcnJGb3JtLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlckVtYWlsID0gdXNlckVtYWlsSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkID0gdXNlclBhc3N3b3JkSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlck5hbWUgPSB1c2VyTmFtZUlucHV0IS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIGFwaS5jcmVhdGVOZXdVc2VyKHVzZXJOYW1lLCB1c2VyRW1haWwsIHVzZXJQYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGFwaS51c2VyU2lnbkluKHVzZXJFbWFpbCwgdXNlclBhc3N3b3JkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2UudXNlciA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dVc2VyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyRm9ybS5pbm5lckhUTUwgPSAn0JLQvtC30LzQvtC20L3QviDRjdGC0L7RgiBlLW1haWwg0YPQttC1INC30LDQvdGP0YIsINC/0L7Qv9GA0L7QsdGD0LnRgtC1INC00YDRg9Cz0L7QuSc7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgICAgbW9kYWxSZXN1bHRXcmFwcGVyIS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9O1xuICAgICAgICBvdmVybGF5IS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICAgICAgICBidG5DbG9zZU1vZGFsIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2V4aXRfYnRuJykpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgICAgICAgc3RvcmFnZS51c2VyID0ge1xuICAgICAgICAgIG1lc3NhZ2U6ICcnLCB0b2tlbjogJycsIHJlZnJlc2hUb2tlbjogJycsIHVzZXJJZDogJycsIG5hbWU6ICcnLFxuICAgICAgICB9O1xuICAgICAgICBzaG93VXNlcihmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgbGlzdGVuZXIgPSBuZXcgTGlzdGVuZXIoKTtcbmV4cG9ydCBkZWZhdWx0IGxpc3RlbmVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5cbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93VXNlcihyZXQ6Ym9vbGVhbikgOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGxldCBjbGFzc05hbWUgPSAnYXV0aG9yaXphdGlvbic7XG4gIGxldCBjb250ZXh0ID0gJ9CS0L7QudGC0LgnO1xuICBpZiAoc3RvcmFnZS51c2VyPy50b2tlbiAhPSAnJykge1xuICAgIGNvbnRleHQgPSAn0JLRi9C50YLQuCc7XG4gICAgY2xhc3NOYW1lID0gJ2V4aXRfYnRuJztcbiAgfVxuICBjb25zdCBodG1sID0gYDxkaXYgY2xhc3M9XCJ1c2VyLXNob3dcIj4gJHtzdG9yYWdlLnVzZXI/Lm5hbWV9IDxidXR0b24gY2xhc3M9JHtjbGFzc05hbWV9PiR7Y29udGV4dH08L2J1dHRvbj4gPC9kaXY+YDtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hdXRoJykgYXMgSFRNTEVsZW1lbnQ7XG4gIGlmIChyZXQpIHtcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuICBoZWFkZXIuaW5uZXJIVE1MID0gaHRtbDtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5pbXBvcnQgeyBJVXNlciwgSVVzZXJEYXRhLCBJV29yZCB9IGZyb20gJ3R5cGVzL3R5cGVzJztcblxuY2xhc3MgU3RvcmFnZSB7XG4gIHVzZXI/OiBJVXNlckRhdGE7XG5cbiAgd29yZD86IElXb3JkO1xuXG4gIHdvcmRzPzogSVdvcmRbXTtcblxuICBsZXZlbD86IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xuICAgICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpIGFzIHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXNlciA9IHtcbiAgICAgICAgbWVzc2FnZTogJycsIHRva2VuOiAnJywgcmVmcmVzaFRva2VuOiAnJywgdXNlcklkOiAnJywgbmFtZTogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dvcmQnKSkge1xuICAgICAgdGhpcy53b3JkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd29yZCcpIGFzIHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud29yZCA9IHtcbiAgICAgICAgaWQ6ICcnLCBncm91cDogMCwgcGFnZTogMCwgd29yZDogJycsIGltYWdlOiAnJywgYXVkaW86ICcnLCBhdWRpb01lYW5pbmc6ICcnLCBhdWRpb0V4YW1wbGU6ICcnLCB0ZXh0TWVhbmluZzogJycsIHRleHRFeGFtcGxlOiAnJywgdHJhbnNjcmlwdGlvbjogJycsIHdvcmRUcmFuc2xhdGU6ICcnLCB0ZXh0TWVhbmluZ1RyYW5zbGF0ZTogJycsIHRleHRFeGFtcGxlVHJhbnNsYXRlOiAnJyxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd29yZHMnKSkge1xuICAgICAgdGhpcy53b3JkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dvcmRzJykgYXMgc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53b3JkcyA9IFtdO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdC1tZW1iZXIgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1uYW1lZC1hcy1kZWZhdWx0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG5cbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Fzcyc7XG5cbmltcG9ydCBNb2R1bGVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci9jb250cm9sbGVyJztcbmltcG9ydCBNb2R1bGVNb2RlbCBmcm9tICcuL21vZGVsL21vZGVsJztcbmltcG9ydCBNb2R1bGVWaWV3IGZyb20gJy4vdmlldy92aWV3JztcblxuaW1wb3J0IHsgQ29tcG9uZW50cywgUm91dGVzLCBJbml0aWFsT2JqIH0gZnJvbSAnLi90eXBlcy90eXBlcyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInO1xuXG5pbXBvcnQgTWFpblBhZ2UgZnJvbSAnLi9wYWdlcy9tYWluJztcblxuaW1wb3J0IFRleHRib29rUGFnZSBmcm9tICcuL3BhZ2VzL3RleHRib29rJztcbmltcG9ydCBBYm91dFRlYW1QYWdlIGZyb20gJy4vcGFnZXMvdGVhbSc7XG5pbXBvcnQgU3ByaW50R2FtZVBhZ2UgZnJvbSAnLi9wYWdlcy9zcHJpbnQvaW5kZXgnO1xuaW1wb3J0IEFib3V0U3ByaW50R2FtZVBhZ2UgZnJvbSAnLi9wYWdlcy9hYm91dHNwcmludCc7XG5pbXBvcnQgQXVkaW9jYWxsR2FtZVBhZ2UgZnJvbSAnLi9wYWdlcy9hdWRpb2NhbGwvaW5kZXgnO1xuaW1wb3J0IFN0YXRpc3RpY3NQYWdlIGZyb20gJy4vcGFnZXMvc3RhdGlzdGljcy9pbmRleCc7XG5pbXBvcnQgQXVkaW9jYWxsR2FtZSBmcm9tICcuL3BhZ2VzL2F1ZGlvY2FsbC9tYWluJztcblxuY29uc3QgY29tcG9uZW50czogQ29tcG9uZW50cyA9IHtcbiAgaGVhZGVyOiBIZWFkZXIsXG4gIGNvbnRlbnQ6IENvbnRlbnQsXG4gIGZvb3RlcjogRm9vdGVyLFxufTtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSB7XG4gIG1haW46IE1haW5QYWdlLFxuICBkZWZhdWx0OiBNYWluUGFnZSxcbiAgdGV4dGJvb2s6IFRleHRib29rUGFnZSxcbiAgdGVhbTogQWJvdXRUZWFtUGFnZSxcbiAgc3ByaW50OiBTcHJpbnRHYW1lUGFnZSxcbiAgYWJvdXRzcHJpbnQ6IEFib3V0U3ByaW50R2FtZVBhZ2UsXG4gIGF1ZGlvY2FsbDogQXVkaW9jYWxsR2FtZVBhZ2UsXG4gIGF1ZGlvY2FsbGdhbWU6IEF1ZGlvY2FsbEdhbWUsXG4gIHN0YXRpc3RpY3M6IFN0YXRpc3RpY3NQYWdlLFxufTtcblxuY29uc3QgaW5pdGlhbE9iajogSW5pdGlhbE9iaiA9IHtcbiAgY29udGFpbmVyOiAnc3BhJyxcbiAgcm91dGVzLFxuICBjb21wb25lbnRzLFxufTtcblxuLyogLS0tLS0gc3BhIGluaXQgbW9kdWxlIC0tLSAqL1xuY29uc3QgbXlTUEEgPSAoKCkgPT4ge1xuICBsZXQgdmlldzogTW9kdWxlVmlldztcbiAgbGV0IG1vZGVsOiBNb2R1bGVNb2RlbDtcbiAgbGV0IGNvbnRyb2xsZXI6IE1vZHVsZUNvbnRyb2xsZXI7XG4gIHJldHVybiB7XG4gICAgaW5pdChvYmo6IEluaXRpYWxPYmopIHtcbiAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50cyhvYmouY29udGFpbmVyLCBvYmouY29tcG9uZW50cyk7XG4gICAgICBjb25zdCBjb250YWluZXJTUEEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmouY29udGFpbmVyKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHZpZXcgPSBuZXcgTW9kdWxlVmlldygpO1xuICAgICAgbW9kZWwgPSBuZXcgTW9kdWxlTW9kZWwoKTtcbiAgICAgIGNvbnRyb2xsZXIgPSBuZXcgTW9kdWxlQ29udHJvbGxlcigpO1xuXG4gICAgICB2aWV3LmluaXQoY29udGFpbmVyU1BBLCByb3V0ZXMpO1xuICAgICAgbW9kZWwuaW5pdCh2aWV3KTtcbiAgICAgIGNvbnRyb2xsZXIuaW5pdChjb250YWluZXJTUEEsIG1vZGVsKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyQ29tcG9uZW50cyhjb250YWluZXI6IHN0cmluZywgY29tcG9uZW50c09iajogQ29tcG9uZW50cykge1xuICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCBjb21wb25lbnRzTGlzdCA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNPYmopO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29tcG9uZW50c0xpc3QpIHtcbiAgICAgICAgcm9vdC5pbm5lckhUTUwgKz0gY29tcG9uZW50c09ialtpdGVtIGFzIGtleW9mIENvbXBvbmVudHNdLnJlbmRlcigpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59KSgpO1xuXG4vKiAtLS0tLS0gZW5kIGFwcCBtb2R1bGUgLS0tLS0gKi9cblxuLyoqICogLS0tIGluaXQgbW9kdWxlIC0tLSAqKiAqL1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIG15U1BBLmluaXQoaW5pdGlhbE9iaik7XG59KTtcbiIsImltcG9ydCBNb2RlbFZpZXcgZnJvbSAnLi4vdmlldy92aWV3JztcbmltcG9ydCB7IE1lbnVJdGVtcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcblxuY2xhc3MgTW9kdWxlTW9kZWwge1xuICBteU1vZHVsZVZpZXchOiBNb2RlbFZpZXc7XG5cbiAgaW5pdCh2aWV3OiBNb2RlbFZpZXcpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVWaWV3ID0gdmlldztcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKHBhZ2VOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyQ29udGVudChwYWdlTmFtZSk7XG4gIH1cblxuICBoaWdobGlnaHRBY3RpdmVNZW51SXRlbShvYmo6IE1lbnVJdGVtcywgaGFzaE5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5oaWdobGlnaHRBY3RpdmVNZW51SXRlbShvYmosIGhhc2hOYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVNb2RlbDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG5pbXBvcnQgeyBNb2R1bGVWaWV3IH0gZnJvbSAnLi4vdmlldy92aWV3U3ByaW50JztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2FwaS9hcGknO1xuaW1wb3J0IHsgYXBpUGF0aCB9IGZyb20gJy4uL2FwaS9hcGktcGF0aCc7XG5pbXBvcnQgeyBJV29yZCB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCBTcHJpbnRHYW1lUGFnZSBmcm9tICcuLi9wYWdlcy9zcHJpbnQvaW5kZXgnO1xuaW1wb3J0IHsgcmFuZG9tSW50ZWdlciB9IGZyb20gJy4uL3V0aWxzL2Z1bmMnO1xuXG5leHBvcnQgY2xhc3MgTW9kdWxlTW9kZWwge1xuICBteU1vZHVsZVZpZXchOiBNb2R1bGVWaWV3O1xuXG4gIGxldmVsOiBudW1iZXIgPSBTcHJpbnRHYW1lUGFnZS5sZXZlbDtcblxuICBwYWdlcyE6IG51bWJlcltdO1xuXG4gIGFjdGl2ZTIwV29yZHMgITogSVdvcmRbXTtcblxuICBhY3RpdmVXb3JkTnVtYmVyID0gMDtcblxuICBhY3RpdmVQYWdlTnVtYmVyID0gMDtcblxuICByYW5kb21UcmFuc2xhdGlvbk51bWJlciAhOiBudW1iZXI7XG5cbiAgYXVkaW9SaWdodCAhOiBIVE1MQXVkaW9FbGVtZW50O1xuXG4gIHRpbWVyITpudW1iZXI7XG5cbiAgdGltZXJJZCAhOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD47XG5cbiAgc2NvcmUgPSAwO1xuXG4gIHNjb3JlRm9yUmlnaHRBbnN3ZXIgPSAxMDtcblxuICBtYXhTY29yZUZvclJpZ2h0QW5zd2VyID0gODA7XG5cbiAgYW1vdW50T2ZSaWdodEFuc3dlcnNGb3JCaWdnZXJTY29yZSA9IDM7XG5cbiAgYXJyYXlPZlF1ZXN0aW9uOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGFycmF5T2ZBbnN3ZXJzOiBib29sZWFuW10gPSBbXTtcblxuICBhbW91bnRPZlJpZ2h0QW5zd2VycyA9IDA7XG5cbiAgcmlnaHRBbnN3ZXJBdWRpbyAhOiBIVE1MQXVkaW9FbGVtZW50O1xuXG4gIHdyb25nQW5zd2VyQXVkaW8hOiBIVE1MQXVkaW9FbGVtZW50O1xuXG4gIHRpbWVvdmVyQXVkaW8hOkhUTUxBdWRpb0VsZW1lbnQ7XG5cbiAgaW5pdCh2aWV3OiBNb2R1bGVWaWV3KTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlVmlldyA9IHZpZXc7XG4gICAgdGhpcy5maWxsQW5kU29ydFBhZ2VzKCk7XG4gICAgdGhpcy5nZXRXb3Jkc0Zyb21BcGkoKTtcbiAgfVxuXG4gIHNheVdvcmQoYXVkaW86SFRNTEF1ZGlvRWxlbWVudCk6dm9pZCB7XG4gICAgYXVkaW8uc3JjID0gYCR7YXBpUGF0aCArIHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLmFjdGl2ZVdvcmROdW1iZXJdLmF1ZGlvfWA7XG4gICAgYXVkaW8ucGxheSgpO1xuICB9XG5cbiAgZmlsbEFuZFNvcnRQYWdlcygpOnZvaWQge1xuICAgIHRoaXMucGFnZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgIHRoaXMucGFnZXMucHVzaChpKTtcbiAgICB9XG4gICAgdGhpcy5wYWdlcy5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpO1xuICB9XG5cbiAgYXN5bmMgZ2V0V29yZHNGcm9tQXBpKCk6IFByb21pc2U8SVdvcmRbXSB8IHZvaWQ+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0V29yZHModGhpcy5sZXZlbCwgdGhpcy5wYWdlc1t0aGlzLmFjdGl2ZVBhZ2VOdW1iZXJdKSBhcyBJV29yZFtdO1xuICAgIHRoaXMuYWN0aXZlMjBXb3JkcyA9IEFycmF5LmZyb20ocmVzKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFjdGl2ZTIwV29yZHMpO1xuICAgIGlmICh0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIgPT09IDApIHsgdGhpcy5wcmVwZWFyRmlyc3RXb3JkKCk7IH1cbiAgfVxuXG4gIHByZXBlYXJGaXJzdFdvcmQoKTp2b2lkIHtcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMuZ2VuZXJhdGVUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IHsgd29yZCB9ID0gdGhpcy5hY3RpdmUyMFdvcmRzW3RoaXMuYWN0aXZlV29yZE51bWJlcl07XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyV29yZCh3b3JkLCB0cmFuc2xhdGlvbik7XG4gIH1cblxuICBwcmVwZWFyTmV4dFdvcmQoKTp2b2lkIHtcbiAgICB0aGlzLmNoZWNrV29yZHNOdW1iZXJzKCk7XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSB0aGlzLmdlbmVyYXRlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCB7IHdvcmQgfSA9IHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLmFjdGl2ZVdvcmROdW1iZXJdO1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlcldvcmQod29yZCwgdHJhbnNsYXRpb24pO1xuICAgIHRoaXMuYXJyYXlPZlF1ZXN0aW9uLnB1c2god29yZCk7XG4gIH1cblxuICBjaGVja1dvcmRzTnVtYmVycygpOnZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZVdvcmROdW1iZXIgPT09IDE5KSB7XG4gICAgICB0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIgKz0gMTtcbiAgICAgIHRoaXMuYWN0aXZlV29yZE51bWJlciA9IDA7XG4gICAgICB0aGlzLmdldFdvcmRzRnJvbUFwaSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZVdvcmROdW1iZXIgKz0gMTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZVRyYW5zbGF0aW9uKCk6c3RyaW5nIHtcbiAgICBjb25zdCBtaW4gPSAodGhpcy5hY3RpdmVXb3JkTnVtYmVyID49IDIpID8gdGhpcy5hY3RpdmVXb3JkTnVtYmVyIC0gMiA6IDA7XG4gICAgY29uc3QgbWF4ID0gKHRoaXMuYWN0aXZlV29yZE51bWJlciArIDIgPD0gMTkpID8gdGhpcy5hY3RpdmVXb3JkTnVtYmVyICsgMiA6IDE5O1xuICAgIHRoaXMucmFuZG9tVHJhbnNsYXRpb25OdW1iZXIgPSByYW5kb21JbnRlZ2VyKG1pbiwgbWF4KTtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmUyMFdvcmRzW3RoaXMucmFuZG9tVHJhbnNsYXRpb25OdW1iZXJdLndvcmRUcmFuc2xhdGU7XG4gIH1cblxuICBjaGVja0Fuc3dlcihhbnN3ZXI6Ym9vbGVhbik6dm9pZCB7XG4gICAgY29uc3QgdHJhbnNsYXRlOnN0cmluZyA9IHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLmFjdGl2ZVdvcmROdW1iZXJdLndvcmRUcmFuc2xhdGU7XG4gICAgY29uc3QgcmlnaHRUcmFuc2xhdGU6c3RyaW5nID0gdGhpcy5hY3RpdmUyMFdvcmRzW3RoaXMucmFuZG9tVHJhbnNsYXRpb25OdW1iZXJdLndvcmRUcmFuc2xhdGU7XG4gICAgaWYgKCh0cmFuc2xhdGUgPT09IHJpZ2h0VHJhbnNsYXRlKSA9PT0gYW5zd2VyKSB7XG4gICAgICB0aGlzLnJpZ2h0QW5zd2VyQXVkaW8ucGxheSgpO1xuICAgICAgdGhpcy5hcnJheU9mQW5zd2Vycy5wdXNoKHRydWUpO1xuICAgICAgdGhpcy5hbmFseXplVHJ1ZUFuc3dlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndyb25nQW5zd2VyQXVkaW8ucGxheSgpO1xuICAgICAgdGhpcy5hcnJheU9mQW5zd2Vycy5wdXNoKGZhbHNlKTtcbiAgICAgIHRoaXMuYW5hbHl6ZUZhbHNlQW5zd2VyKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0VGltZXIgPSAodGltZXJFbGVtOiBIVE1MRWxlbWVudCk6dm9pZCA9PiB7XG4gICAgdGhpcy50aW1lciA9IE51bWJlcih0aW1lckVsZW0udGV4dENvbnRlbnQpO1xuXG4gICAgY29uc3QgdGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMudGltZXIgLT0gMTtcbiAgICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlclRpbWVyKHRoaXMudGltZXIsIHRpbWVyRWxlbSk7XG4gICAgICBpZiAodGhpcy50aW1lciA9PT0gMCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XG4gICAgICAgIHRoaXMuc3RvcEdhbWUoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50aW1lciA9PT0gNSkge1xuICAgICAgICB0aGlzLnRpbWVvdmVyQXVkaW8ucGxheSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy50aW1lcklkID0gc2V0SW50ZXJ2YWwodGljaywgMTAwMCk7XG4gIH07XG5cbiAgY2xlYXJJbnRlcnZhbCA9ICgpOnZvaWQgPT4ge1xuICAgIGlmICh0aGlzLnRpbWVySWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcbiAgICB9XG4gIH07XG5cbiAgY291bnRTY29yZSgpOnZvaWQge1xuICAgIHRoaXMuc2NvcmUgKz0gdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyO1xuICAgIGlmICh0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgPT09IHRoaXMubWF4U2NvcmVGb3JSaWdodEFuc3dlcikge1xuICAgICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyU2NvcmUoU3RyaW5nKHRoaXMuc2NvcmUpLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyU2NvcmUoU3RyaW5nKHRoaXMuc2NvcmUpKTtcbiAgICB9XG4gIH1cblxuICBhbmFseXplRmFsc2VBbnN3ZXIoKTp2b2lkIHtcbiAgICB0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzID0gMDtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5jbGVhclNwcmludENvdW50KCk7XG4gICAgdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyID0gMTA7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyQ291bnRUZXh0KHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlcik7XG4gIH1cblxuICBhbmFseXplVHJ1ZUFuc3dlcigpOnZvaWQge1xuICAgIHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnMgKz0gMTtcbiAgICB0aGlzLmNvdW50U2NvcmUoKTtcbiAgICBpZiAodGhpcy5hbW91bnRPZlJpZ2h0QW5zd2VycyA9PT0gdGhpcy5hbW91bnRPZlJpZ2h0QW5zd2Vyc0ZvckJpZ2dlclNjb3JlICYmIHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciAhPT0gdGhpcy5tYXhTY29yZUZvclJpZ2h0QW5zd2VyKSB7XG4gICAgICB0aGlzLmdldEJpZ2dlclNjb3JlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzID09PSAodGhpcy5hbW91bnRPZlJpZ2h0QW5zd2Vyc0ZvckJpZ2dlclNjb3JlICsgMSkgJiYgdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyICE9PSB0aGlzLm1heFNjb3JlRm9yUmlnaHRBbnN3ZXIpIHtcbiAgICAgIHRoaXMubXlNb2R1bGVWaWV3LnJldHVyblRvT25lU3ByaW50Q291bnQoKTtcbiAgICAgIHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnMgPSAxO1xuICAgIH1cbiAgfVxuXG4gIGdldEJpZ2dlclNjb3JlKCk6dm9pZCB7XG4gICAgdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyID0gKHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciA9PT0gdGhpcy5tYXhTY29yZUZvclJpZ2h0QW5zd2VyKSA/IHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciA6IHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciAqPSAyO1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlckNvdW50VGV4dCh0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIpO1xuICB9XG5cbiAgc3RvcEdhbWUoKTp2b2lkIHtcbiAgICBsZXQgcmlnaHRBbnN3ZXJzID0gMDtcbiAgICBsZXQgd3JvbmdBbnN3ZXJzID0gMDtcbiAgICB0aGlzLmFycmF5T2ZBbnN3ZXJzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHJpZ2h0QW5zd2VycyArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3JvbmdBbnN3ZXJzICs9IDE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyUmVzdWx0cyh0aGlzLmFycmF5T2ZRdWVzdGlvbiwgdGhpcy5hcnJheU9mQW5zd2VycywgcmlnaHRBbnN3ZXJzLCB3cm9uZ0Fuc3dlcnMsIHRoaXMuc2NvcmUpO1xuICB9XG5cbiAgZ2V0QXVkaW8ocmlnaHRBbnN3ZXI6SFRNTEF1ZGlvRWxlbWVudCwgd3JvbmdBbnN3ZXI6SFRNTEF1ZGlvRWxlbWVudCwgdGltZW92ZXI6SFRNTEF1ZGlvRWxlbWVudCk6dm9pZCB7XG4gICAgdGhpcy5yaWdodEFuc3dlckF1ZGlvID0gcmlnaHRBbnN3ZXI7XG4gICAgdGhpcy53cm9uZ0Fuc3dlckF1ZGlvID0gd3JvbmdBbnN3ZXI7XG4gICAgdGhpcy50aW1lb3ZlckF1ZGlvID0gdGltZW92ZXI7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgTW9kdWxlTW9kZWw7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IHsgQnV0dG9ucyB9IGZyb20gJy4uL2NvbXBvbmVudHMvc21hbGxDb21wb25lbnRzL2J1dHRvbnMnO1xuXG5jb25zdCBBYm91dFNwcmludEdhbWVQYWdlID0ge1xuICBjbGFzc25hbWU6ICdhYm91dHNwcmludCcsXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgPGRpdiBjbGFzcyA9ICcke3RoaXMuY2xhc3NuYW1lfS1jb250ZWluZXInPlxuICAgICAgPGgyIGNsYXNzPSdzcHJpbnRfX3RpdGxlJz7QodC/0YDQuNC90YI8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cInNwcmludF9fcnVsZXNcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJzcHJpbnRfX3RleHRcIj7QmNCz0YDQsCDQodC/0YDQuNC90YIg0L/QvtC80L7QttC10YIg0YLQtdCx0LUg0L/RgNC+0LLQtdGA0LjRgtGMINC60LDQuiDRhdC+0YDQvtGI0L4g0YLRiyDQt9C90LDQtdGI0Ywg0YHQu9C+0LLQsC48YnI+XG4gICAgICAgINCY0LPRgNCwINC00LvQuNGC0YHRjyAxINC80LjQvdGD0YLRgyDQuNC70Lgg0L/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQsNGC0YzRgdGPINGB0LvQvtCy0LAuPGJyPlxuICAgICAgICDQp9GC0L7QsdGLINC00LDRgtGMINC+0YLQstC10YIsINC60LvQuNC60LDQuSDQv9C+INC90LXQvNGDINC80YvRiNC60L7QuSDQuNC70Lgg0L3QsNC20LjQvNCw0Lkg0LrQu9Cw0LLQuNGI0Lgt0YHRgtGA0LXQu9C60LguPC9wPlxuICAgICAgICA8cD7QktGL0LHQtdGA0Lgg0YPRgNC+0LLQtdC90Ywg0YHQu9C+0LbQvdC+0YHRgtC4PC9wPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwic3ByaW50X19sZXZlbFwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsZXZlbDBcIj7Qo9GA0L7QstC10L3RjCAxPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxldmVsMVwiPtCj0YDQvtCy0LXQvdGMIDI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGV2ZWwyXCI+0KPRgNC+0LLQtdC90YwgMzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsZXZlbDNcIj7Qo9GA0L7QstC10L3RjCA0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxldmVsNFwiPtCj0YDQvtCy0LXQvdGMIDU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGV2ZWw1XCI+0KPRgNC+0LLQtdC90YwgNjwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgJHtCdXR0b25zLmNyZWF0ZSgn0J3QsNGH0LDRgtGMJywgJ2J1dHRvbl9fc3RhcnRfX3NwcmludCcsIGZhbHNlKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dFNwcmludEdhbWVQYWdlO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7IHN0YXJ0U2NyaW5BdWRpb0NhbGwgfSBmcm9tICcuL3N0YXJ0LWF1ZGlvY2FsbCc7XG5cbmNvbnN0IEF1ZGlvY2FsbEdhbWVQYWdlID0ge1xuICBjbGFzc25hbWU6ICdhdWRpb2NhbGwnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgICA8ZGl2IGNsYXNzID0gJ2F1ZGlvLWNvbnRhaW5lciAke3RoaXMuY2xhc3NuYW1lfS1jb250ZWluZXInPiAke3N0YXJ0U2NyaW5BdWRpb0NhbGwucmVuZGVyKCl9PC9kaXY+O1xuICAgICAgJHtGb290ZXIucmVuZGVyKCl9XG4gICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdWRpb2NhbGxHYW1lUGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgeyBnYW1lQXJlYSB9IGZyb20gJy4vdXRpbHMvZ2FtZS1yZW5kZXInO1xuXG5jb25zdCBBdWRpb2NhbGxHYW1lID0ge1xuICBoYXNoZXM6IHtcblxuICAgIG1haW46ICcjbWFpbicsXG5cbiAgfSxcblxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICAgIDxkaXYgY2xhc3MgPSAnY29udGFpbmVyJz4gXG4gICAgICAgPGRpdiBjbGFzcyA9ICdnYW1lJz4gJHtnYW1lQXJlYX0gPC9kaXY+XG4gICAgICAgICA8YnV0dG9uICB0eXBlPVwiYnV0dG9uXCIgIGNsYXNzPVwiZ28tbWFpblwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLm1haW59XCIgPjwvYT7QktC10YDQvdGD0YLRjNGB0Y8g0L3QsCDQs9C70LDQstC90YPRjjwvYT48L2J1dHRvbj4gXG4gICAgICAgICBcbiAgICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvY2FsbEdhbWU7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmV4cG9ydCBjb25zdCBzdGFydFNjcmluQXVkaW9DYWxsID0ge1xuICBoYXNoZXM6IHtcblxuICAgIGF1ZGlvY2FsbEdhbWU6ICcjYXVkaW9jYWxsR2FtZScsXG5cbiAgfSxcblxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gLyogaHRtbCAqL2AgXG5cbjxkaXYgY2xhc3M9XCJhdWRpby1jYWxsXCI+IFxuICA8cCBjbGFzcz1cImF1ZGlvLWNhbGxfX3RleHRcIj7QkiDQuNCz0YDQtSDQsNGD0LTQuNC+0LLRi9C30L7QsiDQstCw0LzQvdGD0LbQvdC+INCy0YvQsdGA0LDRgtGMINC/0YDQsNCy0LjQu9GM0L3Ri9C5INC/0LXRgNC10LLQvtC0INGB0LvQvtCy0LAuIDxicj5cblxuICDQp9GC0L7QsdGLINC40LPRgNCw0YLRjCDRgSDQv9C+0LzQvtGJ0YzRjiDQutC70LDQstC40LDRgtGD0YDRiywg0LjRgdC/0L7Qu9GM0LfRg9C5INC60LvQsNCy0LjRiNC4XG4gIDEsIDIsIDMsIDQsIDUgLSDRh9GC0L7QsdGLINC00LDRgtGMINC+0YLQstC10YIsXG4gIHNwYWNlIC0g0LTQu9GPINCy0L7RgdC/0YDQvtC40LfQstC10LTQtdC90LjRjyDQt9Cy0YPQutCwLFxuICBlbnRlciAtINGH0YLQvtCx0Ysg0L/RgNC+0L/Rg9GB0YLQuNGC0Ywg0LLQvtC/0YDQvtGBLFxuICDRgdGC0YDQtdC70LrQsC3QstC/0YDQsNCy0L4gLSDRh9GC0L7QsdGLINC/0LXRgNC10LnRgtC4INC6INGB0LvQtdC00YPRjtGJ0LXQvNGDINCy0L7Qv9GA0L7RgdGDLjxicj4gPGJyPlxuICDQktGL0LHQtdGA0Lgg0YPRgNC+0LLQtdC90Ywg0YHQu9C+0LbQvdC+0YHRgtC4OjwvcD5cbiAgPGJ1dHRvbiBpZD1cImxldmVsMVwiIHR5cGU9XCJidXR0b25cIiAgY2xhc3M9XCJidG4tbGV2ZWxcIj48YSBjbGFzcz1cIm1lbnVfX21haW4gbWVudV9faXRlbV9hY3RpdmVcIiBocmVmPVwiJHt0aGlzLmhhc2hlcy5hdWRpb2NhbGxHYW1lfVwiID7Qo9GA0L7QstC10L3RjCAxPC9hPjwvYnV0dG9uPlxuIFxuICA8YnV0dG9uIGlkPVwibGV2ZWwyXCIgdHlwZT1cImJ1dHRvblwiICBjbGFzcz1cImJ0bi1sZXZlbFwiPjxhIGNsYXNzPVwibWVudV9fbWFpbiBtZW51X19pdGVtX2FjdGl2ZVwiIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbEdhbWV9XCIgPtCj0YDQvtCy0LXQvdGMIDI8L2E+PC9idXR0b24+XG5cbiAgPGJ1dHRvbiBpZD1cImxldmVsM1wiIHR5cGU9XCJidXR0b25cIiAgY2xhc3M9XCJidG4tbGV2ZWxcIj48YSBjbGFzcz1cIm1lbnVfX21haW4gbWVudV9faXRlbV9hY3RpdmVcIiBocmVmPVwiJHt0aGlzLmhhc2hlcy5hdWRpb2NhbGxHYW1lfVwiID7Qo9GA0L7QstC10L3RjCAzPC9hPjwvYnV0dG9uPlxuXG4gIDxidXR0b24gaWQ9XCJsZXZlbDRcIiB0eXBlPVwiYnV0dG9uXCIgIGNsYXNzPVwiYnRuLWxldmVsXCI+PGEgY2xhc3M9XCIgbGV2ZWxtZW51X19tYWluIG1lbnVfX2l0ZW1fYWN0aXZlXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgNDwvYT48L2J1dHRvbj5cblxuICA8YnV0dG9uIGlkPVwibGV2ZWw1XCIgdHlwZT1cImJ1dHRvblwiICBjbGFzcz1cImJ0bi1sZXZlbFwiPjxhIGNsYXNzPVwibWVudV9fbWFpbiBtZW51X19pdGVtX2FjdGl2ZVwiIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbEdhbWV9XCIgPtCj0YDQvtCy0LXQvdGMIDU8L2E+PC9idXR0b24+XG5cbiAgPGJ1dHRvbiBpZD1cImxldmVsNlwiIHR5cGU9XCJidXR0b25cIiAgY2xhc3M9XCJidG4tbGV2ZWxcIj48YSBjbGFzcz1cIm1lbnVfX21haW4gbWVudV9faXRlbV9hY3RpdmVcIiBocmVmPVwiJHt0aGlzLmhhc2hlcy5hdWRpb2NhbGxHYW1lfVwiID7Qo9GA0L7QstC10L3RjCA2PC9hPjwvYnV0dG9uPlxuPC9kaXY+XG5gO1xuICB9LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuXHJcbmltcG9ydCB7IGFwaVBhdGggfSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpLXBhdGgnO1xyXG5pbXBvcnQgeyBwcmludEJ0blN0cmluZywgd29yZE9iaiB9IGZyb20gJy4vc3VwcG9ydGluZy1mdW5jJztcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lQXJlYSA9IGAgXHJcbiA8ZGl2IGNsYXNzPVwiYXVkaW8tY29udGFpbmVyLWdhbWVcIj4gXHJcbiAgICA8ZGl2IGNsYXNzPVwiYnRuLXNvdW5kXCI+PGRpdiBjbGFzcz1cInNvdW5kLXdyYXBwZXJcIj4gXHJcbiAgICA8YXVkaW8gY2xhc3M9XCJhdWRpb1wiIHNyYz1cIiR7YXBpUGF0aCArIHdvcmRPYmouYXVkaW99XCIgYXV0b3BsYXk+PC9hdWRpbz4gPC9kaXY+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAke3ByaW50QnRuU3RyaW5nKCl9XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIGA7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cblxuaW1wb3J0IHsgYXBpUGF0aCB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGktcGF0aCc7XG5pbXBvcnQgeyBzb3VuZEF1ZGlvLCB3b3JkT2JqIH0gZnJvbSAnLi9zdXBwb3J0aW5nLWZ1bmMnO1xuaW1wb3J0IGF1ZGlvUGF0aFdyb25nIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9hdWRpby93cm9uZy1hbnN3ZXIubXAzJztcbmltcG9ydCBhdWRpb1BhdGhSaWdodCBmcm9tICcuLi8uLi8uLi9hc3NldHMvYXVkaW8vcmlnaHQtYW5zd2VyLm1wMyc7XG5pbXBvcnQgeyBJR3JvdXBQYWdlT2JqIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uL2Z1bmN0aW9uYWwvc3RvcmFnZSc7XG5cbmxldCByb3VuZCA9IDA7XG5sZXQgc2NvcmUgPSAwO1xubGV0IGFycmF5V3JvbmdXb3Jkczogc3RyaW5nW10gPSBbXTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJykgPT09IG51bGwpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FycmF5V3JvbmdXb3JkcycsIEpTT04uc3RyaW5naWZ5KGFycmF5V3JvbmdXb3JkcykpO1xufVxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpID09PSBudWxsKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZScsIEpTT04uc3RyaW5naWZ5KHNjb3JlKSk7XG59XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvdW5kJykgPT09IG51bGwpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JvdW5kJywgSlNPTi5zdHJpbmdpZnkocm91bmQpKTtcbn1cblxuY2xhc3MgTGlzdGVuZXJBdWRpb0NhbGwge1xuICBvcGVuKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXNvdW5kJykpIHtcbiAgICAgICAgc291bmRBdWRpbygoYXBpUGF0aCArIHdvcmRPYmouYXVkaW8pKTtcbiAgICAgIH1cblxuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdHJhbnNsYXRpb24nKSkge1xuICAgICAgICByb3VuZCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm91bmQnKSkgKyAxO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncm91bmQnLCByb3VuZC50b1N0cmluZygpKTtcbiAgICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQgPT09IHdvcmRPYmoud29yZFRyYW5zbGF0ZSkge1xuICAgICAgICAgIHNjb3JlID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpKSArIDE7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlJywgc2NvcmUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgc291bmRBdWRpbygoYXVkaW9QYXRoUmlnaHQpKTtcbiAgICAgICAgICAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoJ2J0bi10cmFuc2xhdGlvbi1yaWdodCcpO1xuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoJ2J0bi10cmFuc2xhdGlvbi13cm9uZycpO1xuICAgICAgICAgIGFycmF5V3JvbmdXb3JkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FycmF5V3JvbmdXb3JkcycpISk7XG5cbiAgICAgICAgICBhcnJheVdyb25nV29yZHMucHVzaCh3b3JkT2JqLndvcmQpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcnJheVdyb25nV29yZHMnLCBKU09OLnN0cmluZ2lmeShhcnJheVdyb25nV29yZHMpKTtcbiAgICAgICAgICBzb3VuZEF1ZGlvKChhdWRpb1BhdGhXcm9uZykpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXN0YXJ0JykpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1sZXZlbCcpKSB7XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAnbGV2ZWwxJykge1xuICAgICAgICAgIHN0b3JhZ2UubGV2ZWwgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAnbGV2ZWwyJykge1xuICAgICAgICAgIHN0b3JhZ2UubGV2ZWwgPSAyO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UubGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAnbGV2ZWwzJykge1xuICAgICAgICAgIHN0b3JhZ2UubGV2ZWwgPSAzO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAnbGV2ZWw0Jykge1xuICAgICAgICAgIHN0b3JhZ2UubGV2ZWwgPSA0O1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAnbGV2ZWw1Jykge1xuICAgICAgICAgIHN0b3JhZ2UubGV2ZWwgPSA1O1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAnbGV2ZWw2Jykge1xuICAgICAgICAgIHN0b3JhZ2UubGV2ZWwgPSA2O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgbGlzdGVuZXJBdWRpb0NhbGwgPSBuZXcgTGlzdGVuZXJBdWRpb0NhbGwoKTtcbmV4cG9ydCBkZWZhdWx0IGxpc3RlbmVyQXVkaW9DYWxsO1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tc2hhZG93ICovXG5cbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi9mdW5jdGlvbmFsL3N0b3JhZ2UnO1xuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICcuLi8uLi8uLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyBhcGlQYXRoIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS1wYXRoJztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xuXG4vLyDQstGL0LHQvtGAINGD0YDQvtCy0L3RjyDQtNC70Y8g0LjQs9GA0Ysg0Lgg0YHRgtGA0LDQvdC40YbRi1xubGV0IGdyb3VwID0gMDtcbmxldCBwYWdlID0gMDtcbmZ1bmN0aW9uIGxldmVsR2FtZSgpOiB2b2lkIHtcbiAgaWYgKHN0b3JhZ2UubGV2ZWwpIHtcbiAgICBncm91cCA9IHN0b3JhZ2UubGV2ZWwgLSAxO1xuICAgIHBhZ2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMzAgLSAwICsgMSkpICsgMDtcbiAgfVxufVxubGV2ZWxHYW1lKCk7XG5jb25zb2xlLmxvZyhncm91cCwgcGFnZSk7XG5cbi8vINC60L7QvdGB0YLQsNC90LAg0LrQvtGC0L7RgNCw0Y8g0L/QvtC70YPRh9Cw0LXRgiDRgSDRgdC10YDQstC10YDQsCDQvNCw0YHRgdC40LIg0YHQu9C+0LJcbmNvbnN0IGFwaUdldFdvcmRzID0gYXBpLmdldFdvcmRzKDAsIDApXG4gIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgIHN0b3JhZ2Uud29yZHMgPSB2YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd29yZHMnLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfSk7XG4vLyDQv9C+0LvRg9GH0LDQtdC8INC80LDRgdGB0LjQsiDQv9GA0LXQstC+0LTQvtCyXG5mdW5jdGlvbiBnZXRXb3Jkc01hcCgpOiBzdHJpbmdbXSB7XG4gIGFwaUdldFdvcmRzO1xuICBjb25zdCB3b3JkcyA9IHN0b3JhZ2Uud29yZHMhLm1hcCgoaXRlbSkgPT4gaXRlbS53b3JkVHJhbnNsYXRlKTtcbiAgcmV0dXJuIHdvcmRzO1xufVxuXG5sZXQgd29yZHNTdHJpbmcgPSBnZXRXb3Jkc01hcCgpO1xuXG4vLyDRhNC40LvRjNGC0YDRg9C10Lwg0LjQt9Cx0LDQstC70Y/Rj9GB0Ywg0L7RgiDQtNGD0LHQu9C10LlcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm9SZXBlYXQnKSkge1xuICBpZiAoKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vUmVwZWF0JykhKSBhcyBzdHJpbmdbXSkubGVuZ3RoID4gMCkge1xuICAgIHdvcmRzU3RyaW5nID0gd29yZHNTdHJpbmcuZmlsdGVyKChpdGVtKSA9PiAhKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vUmVwZWF0JykhKSBhcyBzdHJpbmdbXSkuaW5jbHVkZXMoaXRlbSkpO1xuICB9XG59XG4vLyDQv9C10YDQtdC80LXRiNC40LLQsNC10Lwg0LzQsNGB0YHQuNCyINC/0YDQtdCy0L7QtNC+0LJcbmZ1bmN0aW9uIHNodWZmbGUoYXJyYXk6c3RyaW5nW10pIHtcbiAgYXJyYXkuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcbn1cbnNodWZmbGUod29yZHNTdHJpbmcpO1xuLy8g0YHQvtC30LTQsNC10Lwg0LzQsNGB0YHQuCDQsiDQutC+0YLRgNC+0Lwg0LHRg9C00LXRgiDRgtC+0YzQutC+IDYg0YHQu9C+0LIg0LTQu9GPINC40LPRgNGLXG5sZXQgYXJyYXlTaXhXb3JkczpzdHJpbmcgW10gPSBbXTtcbmFycmF5U2l4V29yZHMgPSB3b3Jkc1N0cmluZy5zbGljZSgwLCA2KTtcblxuLy8g0LLRi9Cx0LjRgNCw0LXQvCDRgdC70YPRh9Cw0LnQvdC+0LUg0YHQu9C+0LLQviDQuNC3IDYsINC60L7RgtC+0YDQvtC1INCx0YPQtNC10Lwg0YPQs9Cw0LTRi9Cy0LDRgtGMXG5jb25zdCB3b3JkUmlnaHQgPSBhcnJheVNpeFdvcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5U2l4V29yZHMubGVuZ3RoKV07XG5cbi8vINC/0L7Qu9GD0YfQsNC10Lwg0LTQtdC70LDQtdC8INC+0LHRitC10LrRgiDQsiDQutC+0YLQvtGA0YvQuSDRgdC+0YXRgNCw0L3QuNC8INCy0YvQsdGA0LDQvdC90L7QtSDRgdC70L7QstC+INGB0L4g0LLRgdC10LzQuCDQtNCw0L3QvdGL0LzQuFxubGV0IHdvcmRPYmogOiBJV29yZCA9IHtcbiAgaWQ6ICcnLCBncm91cDogMCwgcGFnZTogMCwgd29yZDogJycsIGltYWdlOiAnJywgYXVkaW86ICcnLCBhdWRpb01lYW5pbmc6ICcnLCBhdWRpb0V4YW1wbGU6ICcnLCB0ZXh0TWVhbmluZzogJycsIHRleHRFeGFtcGxlOiAnJywgdHJhbnNjcmlwdGlvbjogJycsIHdvcmRUcmFuc2xhdGU6ICcnLCB0ZXh0TWVhbmluZ1RyYW5zbGF0ZTogJycsIHRleHRFeGFtcGxlVHJhbnNsYXRlOiAnJyxcbn07XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmFnZS53b3JkcyEubGVuZ3RoOyBpKyspIHtcbiAgaWYgKHN0b3JhZ2Uud29yZHMhW2ldLndvcmRUcmFuc2xhdGUgPT09IHdvcmRSaWdodCkge1xuICAgIHdvcmRPYmogPSBzdG9yYWdlLndvcmRzIVtpXTtcbiAgfVxufVxuXG4vLyDQuNC30LHQsNCy0LvRj9C10LzRgdGPINC+0YIg0LTRg9Cx0LvQtdC5INCyINC80LDRgdGB0LjQstC1INC/0YDQtdCy0L7QtNC+0LIg0L/RgNC+0L7Qu9C20LXQvdC40LVcblxubGV0IG5vUmVwZWF0OiBzdHJpbmdbXSA9IFtdO1xubm9SZXBlYXQucHVzaCh3b3JkT2JqLndvcmRUcmFuc2xhdGUpO1xuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub1JlcGVhdCcpKSB7XG4gIG5vUmVwZWF0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm9SZXBlYXQnKSEpO1xuICBub1JlcGVhdC5wdXNoKHdvcmRPYmoud29yZFRyYW5zbGF0ZSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub1JlcGVhdCcsIEpTT04uc3RyaW5naWZ5KG5vUmVwZWF0KSk7XG59XG5cbi8vINGE0YPQvdC60YbQuNGPINC/0YDQvtC40LPRgNGL0LLQsNC90LjRjyDQsNGD0LTQuNC+INGBINC/0YPRgtC10Lwg0LjQtyDQvdCw0YjQtdCz0L4g0L7QsdC10LrRgtCwLdGB0LvQvtCy0L5cbmZ1bmN0aW9uIHNvdW5kQXVkaW8ocGF0aDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGF1ZGlvZCA9IG5ldyBBdWRpbygpO1xuICBhdWRpb2Quc3JjID0gYCR7cGF0aH1gO1xuICBhdWRpb2QuYXV0b3BsYXkgPSB0cnVlO1xufVxuXG4vLyDRgNC40YHRg9C10Lwg0LrQvdC+0L/QutC4INGBINC/0LXRgNC10LLQvtC00LDQvNC4XG5mdW5jdGlvbiBwcmludEJ0blN0cmluZygpOiBzdHJpbmcge1xuICBsZXQgYSA9ICcnO1xuICBsZXQgY29udGFpbmVyQnRuID0gJyAnO1xuICBpZiAoTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb3VuZCcpKSA8IDIxKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheVNpeFdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhID0gYXJyYXlTaXhXb3Jkc1tpXTtcbiAgICAgIGNvbnRhaW5lckJ0biArPSBgPGJ1dHRvbiAgdHlwZT1cImJ1dHRvblwiIGlkPVwiJHthfVwiIGNsYXNzPVwiYnRuLXRyYW5zbGF0aW9uXCI+JHthfTwvYnV0dG9uPiBgO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgYSA9ICcnO1xuICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcnJheVdyb25nV29yZHMnKSEpLmxlbmd0aCA+IDApIHtcbiAgICAgIGEgPSBgIDxwIGNsYXNzPVwiZ2FtZS10ZXh0XCI+0KDQtdC60L7QvNC10L3QtNGD0LXQvCDQstGL0YPRh9C40YLRjDombmJzcCR7SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJykhKX08L3A+IGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGEgPSAnIDxwIGNsYXNzPVwiZ2FtZS10ZXh0XCI+0JLRiyDQvdC40YDQsNC30YMg0L3QtSDQvtGI0LjQsdC70LjRgdGMITwvcD4gJztcbiAgICB9XG4gICAgY29udGFpbmVyQnRuICs9IGBcbiAgPGRpdiBjbGFzcz1cImdhbWUtb3ZlclwiPlxuICAgIDxwIGNsYXNzPVwiZ2FtZS10ZXh0XCI+0JLRiyDQv9GA0L7RiNC70Lgg0LjQs9GA0YMhPC9wPlxuICAgIDxwIGNsYXNzPVwiZ2FtZS10ZXh0XCI+0JLQsNGIINGA0LXQt9GD0LvRjNGC0LDRgjogJm5ic3AgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmUnKX08L3A+XG4gICAgJHthfVxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicmVzdGFydFwiPtCd0LDRh9Cw0YLRjCDQt9Cw0L3QvtCy0L48L2J1dHRvbj5cbiAgPC9kaXY+IGA7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FycmF5V3JvbmdXb3JkcycpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdyb3VuZCcpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzY29yZScpO1xuICB9XG4gIHJldHVybiBjb250YWluZXJCdG47XG59XG5cbmV4cG9ydCB7XG4gIHNvdW5kQXVkaW8sXG4gIHByaW50QnRuU3RyaW5nLCB3b3JkT2JqLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmltcG9ydCBwaG9uZSBmcm9tICcuLi9hc3NldHMvcGhvbmUuc3ZnJztcbmltcG9ydCBkaWN0aW9uYXJ5IGZyb20gJy4uL2Fzc2V0cy9kaWN0aW9uYXJ5LnN2Zyc7XG5pbXBvcnQgcGxheSBmcm9tICcuLi9hc3NldHMvcGxheS5zdmcnO1xuaW1wb3J0IGFjc2VzcyBmcm9tICcuLi9hc3NldHMvYWNzZXNzLnN2Zyc7XG5cbmNvbnN0IE1haW5QYWdlID0ge1xuICBpZDogJ21haW4nLFxuICByZW5kZXI6ICgpOnN0cmluZyA9PiBgXG4gICAgICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VcIj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19wYWdlX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPlRoZSBXb3JsZCBpcyBZb3VycyB3aXRoIFJTTGFuZyE8L2gyPlxuICAgICAgICAgICA8cD5SU0xhbmcg4oCUINGN0YLQviDRjdGE0YTQtdC60YLQuNCy0L3Ri9C5INGB0LXRgNCy0LjRgSDQtNC70Y8g0YPQstC70LXQutCw0YLQtdC70YzQvdC+0Lkg0L/RgNCw0LrRgtC40LrQuCDQsNC90LPQu9C40LnRgdC60L7Qs9C+INGP0LfRi9C60LAuINCf0YDQuNGB0L7QtdC00LjQvdGP0LnRgdGPIVxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fcGFnZV9fYWR2YW50YWdlc1wiPlxuICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPtCf0L7Rh9C10LzRgyBSU0xhbmc/PC9oMj5cbiAgICAgICAgICAgPHVsIGNsYXNzPVwiYWR2YW50YWdlc19fbGlzdFwiPlxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHthY3Nlc3N9XCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCR0LXRgdC/0LvQsNGC0L3Ri9C5INC00L7RgdGC0YPQvzwvaDM+XG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RleHRcIj7QndCw0YjQsCDQvNC40YHRgdC40Y8g4oCUINGB0LTQtdC70LDRgtGMINC+0LHRg9GH0LXQvdC40Y8g0Y/Qt9GL0LrQsNC8INC00L7RgdGC0YPQv9C90YvQvCDQtNC70Y8g0LrQsNC20LTQvtCz0L48L3A+XG4gICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZGljdGlvbmFyeX1cIj5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0KHQu9C+0LLQsNGA0Yw8L2gzPlxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+0KnQtdC70LrQvdC40YLQtSDQu9GO0LHQvtC1INGB0LvQvtCy0L4sINGH0YLQvtCx0Ysg0YPQstC40LTQtdGC0Ywg0L7Qv9GA0LXQtNC10LvQtdC90LjQtSDQsiDQuNGB0YLQvtGH0L3QuNC60LDRhSwg0Lgg0YHQvtGF0YDQsNC90LjRgtC1INC10LPQviDQsiDRgdCy0L7QtdC8INGB0L/QuNGB0LrQtSDQutCw0YDRgtC+0YfQtdC6PC9wPlxuICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbVwiPlxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3BsYXl9XCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCY0LPRgNCw0LksINGH0YLQvtCx0Ysg0YPRh9C40YLRjNGB0Y88L2gzPlxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+0JjQs9GA0Ysg0LLQutC70Y7Rh9Cw0Y7RgiDQkNGD0LTQuNC+0LLRi9C30L7QsizQodC/0YDQuNC90YIg0Lgg0LzQvdC+0LPQvtC1INC00YDRg9Cz0L7QtS4uLjwvcD5cbiAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwaG9uZX1cIj5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0KPRh9C40YLQtdGB0Ywg0L3QsCDRhdC+0LTRgzwvaDM+XG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RleHRcIj5SU0xhbmcg0LTQvtGB0YLRg9C/0L3QsCDQtNC70Y8g0LLQtdCxINC4INC80L7QsdC40LvRjNC90YvRhSDRg9GB0YLRgNC+0LnRgdGC0LIuINCj0YfQuNGC0LXRgdGMINC40Lcg0LvRjtCx0L7Qs9C+INC80LXRgdGC0LAhPC9wPlxuICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgIDwvdWw+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICAke0Zvb3Rlci5yZW5kZXIoKX1cbiAgICBgLFxufTtcblxuLy8gZXhwb3J0IHsgTWFpblBhZ2UgfTtcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IGluaXRTcHJpbnRNVkMgfSBmcm9tICcuL2luaXRTcHJpbnRNVkMnO1xuaW1wb3J0IHsgQnV0dG9ucyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc21hbGxDb21wb25lbnRzL2J1dHRvbnMnO1xuXG5pbXBvcnQgcGFycm90cyBmcm9tICcuLi8uLi9hc3NldHMvcGFycm90cy5qcGcnO1xuaW1wb3J0IGFycm93TGVmdCBmcm9tICcuLi8uLi9hc3NldHMvYXJyb3ctbGVmdC5wbmcnO1xuaW1wb3J0IGFycm93UmlnaHQgZnJvbSAnLi4vLi4vYXNzZXRzL2Fycm93LXJpZ2h0LnBuZyc7XG5cbmltcG9ydCByaWdodEFuc3dlckF1ZGlvIGZyb20gJy4uLy4uL2Fzc2V0cy9hdWRpby9yaWdodC1hbnN3ZXIubXAzJztcbmltcG9ydCB3cm9uZ0Fuc3dlckF1ZGlvIGZyb20gJy4uLy4uL2Fzc2V0cy9hdWRpby93cm9uZy1hbnN3ZXIubXAzJztcbmltcG9ydCB0aW1lb3ZlckF1ZGlvIGZyb20gJy4uLy4uL2Fzc2V0cy9hdWRpby90aW1lLW92ZXIubXAzJztcblxuY29uc3QgU3ByaW50R2FtZVBhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ3NwcmludCcsXG4gIGxldmVsOiAwLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnRfX3Njb3JlXCI+MDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNwcmludF9fdGltZXJcIj42MDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNwcmludF9fZmllbGRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX190aXRsZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV9fY291bnRcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVfX3RleHRcIj4rIDEwINC+0YfQutC+0LIg0LfQsCDRgdC70L7QstC+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRfX2NvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9faW1nXCI+PGltZyBzcmM9JyR7cGFycm90c30nIGFsdD1cInBhcnJvdHNcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9fcXVlc3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9fd29yZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uX193b3JkXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29yZF9fc291bmRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxhdWRpbyBpZD1cInNwcmludF9fc2F5X193b3JkXCIgc3JjPVwiXCI+PC9hdWRpbz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb25fX3RyYW5zbGF0aW9uXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRfX2J1dHRvbnNcIj4ke0J1dHRvbnMuY3JlYXRlKCfQndC10LLQtdGA0L3QvicsICdidXR0b25fX3NwcmludF9fZmFsc2UnLCBmYWxzZSl9JHtCdXR0b25zLmNyZWF0ZSgn0JLQtdGA0L3QvicsICdidXR0b25fX3NwcmludF9fdHJ1ZScsIGZhbHNlKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNwcmludF9fYXJyb3dzXCI+XG4gICAgICAgIDxpbWcgc3JjPScke2Fycm93TGVmdH0nIGFsdD1cImFycm93XCI+XG4gICAgICAgIDxpbWcgc3JjPScke2Fycm93UmlnaHR9JyBhbHQ9XCJhcnJvd1wiPlxuICAgICAgPC9kaXY+XG4gICAgICA8YXVkaW8gaWQ9XCJhdWRpb19fcmlnaHRcIiBzcmM9XCIke3JpZ2h0QW5zd2VyQXVkaW99XCI+PC9hdWRpbz5cbiAgICAgIDxhdWRpbyBpZD1cImF1ZGlvX193cm9uZ1wiIHNyYz1cIiR7d3JvbmdBbnN3ZXJBdWRpb31cIj48L2F1ZGlvPlxuICAgICAgPGF1ZGlvIGlkPVwiYXVkaW9fX3RpbWVvdmVyXCIgc3JjPVwiJHt0aW1lb3ZlckF1ZGlvfVwiPjwvYXVkaW8+XG4gICAgPC9kaXY+YDtcbiAgfSxcbiAgaW5pdE1WQygpOnZvaWQge1xuICAgIGluaXRTcHJpbnRNVkMoKTtcbiAgfSxcbiAgc2F2ZUxldmVsKGxldmVsOnN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5sZXZlbCA9ICtsZXZlbFtsZXZlbC5sZW5ndGggLSAxXTtcbiAgfSxcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ByaW50R2FtZVBhZ2U7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cblxuaW1wb3J0IHsgTW9kdWxlQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL2NvbnRyb2xsZXIvY29udHJvbGxlclNwcmludCc7XG5pbXBvcnQgeyBNb2R1bGVNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVsL21vZGVsU3ByaW50JztcbmltcG9ydCB7IE1vZHVsZVZpZXcgfSBmcm9tICcuLi8uLi92aWV3L3ZpZXdTcHJpbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNwcmludE1WQygpOnZvaWQge1xuICBjb25zdCB2aWV3ID0gbmV3IE1vZHVsZVZpZXcoKTtcbiAgY29uc3QgbW9kZWwgPSBuZXcgTW9kdWxlTW9kZWwoKTtcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBNb2R1bGVDb250cm9sbGVyKCk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnQtY29udGVpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gIHZpZXcuaW5pdChjb250YWluZXIpO1xuICBtb2RlbC5pbml0KHZpZXcpO1xuICBjb250cm9sbGVyLmluaXQoY29udGFpbmVyLCBtb2RlbCk7XG59XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5jb25zdCBTdGF0aXN0aWNzUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAnc3RhdGlzdGljcycsXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgPGRpdiBjbGFzcyA9ICcke3RoaXMuY2xhc3NuYW1lfS1jb250ZWluZXInPjwvZGl2PlxuICAgICR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0aXN0aWNzUGFnZTtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmNvbnN0IEFib3V0VGVhbVBhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ3RlYW0tcGFnZScsXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgPGRpdiBjbGFzcyA9ICcke3RoaXMuY2xhc3NuYW1lfS1jb250ZWluZXInPjwvZGl2PlxuICAgICR7Rm9vdGVyLnJlbmRlcigpfVxuICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dFRlYW1QYWdlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgJy4vdGV4dGJvb2suc2Nzcyc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9hcGkvYXBpJztcbmltcG9ydCB7IElXb3JkIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5jb25zdCBUZXh0Ym9va1BhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ3RleHRib29rJyxcbiAgd29yZGxpc3Q6ICd3b3JkLWxpc3QnLFxuICAvLyByZW5kZXIoKTogc3RyaW5nIHtcbiAgLy8gICBjb25zdCB2aWV3ID0gYCA8ZGl2IGNsYXNzPSR7dGhpcy5jbGFzc25hbWV9PlxuICAvLyAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay1uYXZpZ2F0aW9uXCI+XG4gIC8vICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXJvdW5kXCI+PC9idXR0b24+XG4gIC8vICAgICA8cCBjbGFzcz1cInVuaXQtbmFtZVwiPtCg0LDQt9C00LXQuyAxIDxzcGFuIGNsYXNzPVwidW5pdC1wYWdlXCI+0YHRgtGA0LDQvdC40YbQsCAxPC9zcGFuPjwvcD5cbiAgLy8gICA8L2Rpdj5cbiAgLy8gICA8dWwgY2xhc3M9JHt0aGlzLndvcmRsaXN0fT5cbiAgLy8gICAgJHt0aGlzLmdldENhcmRzKCl9XG4gIC8vICAgPC91bD5cbiAgLy8gICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stZm9vdGVyXCI+XG4gIC8vICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stcGFnaW5hdGlvblwiPlxuICAvLyAgICAgICA8YnV0dG9uIGNsYXNzPVwicGFnaW5hdGlvbi1idG4gYnRuLW9yYW5nZVwiPtCf0YDQtdC00YvQtNGD0YnQsNGPPC9idXR0b24+XG4gIC8vICAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uLWJ0biBidG4tb3JhbmdlXCI+0KHQu9C10LTRg9GO0YnQsNGPPC9idXR0b24+XG4gIC8vICAgICA8L2Rpdj5cbiAgLy8gICA8L2Rpdj5cbiAgLy8gPC9kaXY+YDtcbiAgLy8gICByZXR1cm4gYCR7SGVhZGVyLnJlbmRlcigpfSR7dmlld30ke0Zvb3Rlci5yZW5kZXIoKX1gO1xuICAvLyB9LFxuICAvLyByZW5kZXIoKTogc3RyaW5nIHtcbiAgLy8gICBjb25zdCB2aWV3ID0gYDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0c1wiPlxuICAvLyAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiMVwiPtCg0LDQt9C00LXQuyAxPC9kaXY+XG4gIC8vICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCIyXCI+0KDQsNC30LTQtdC7IDI8L2Rpdj5cbiAgLy8gICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjNcIj7QoNCw0LfQtNC10LsgMzwvZGl2PlxuICAvLyAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiNFwiPtCg0LDQt9C00LXQuyA0PC9kaXY+XG4gIC8vICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCI1XCI+0KDQsNC30LTQtdC7IDU8L2Rpdj5cbiAgLy8gICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjZcIj7QoNCw0LfQtNC10LsgNjwvZGl2PlxuICAvLyAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiN1wiPtCg0LDQt9C00LXQuyBcItCh0LvQvtC20L3Ri9C1INGB0LvQvtCy0LBcIjwvZGl2PlxuICAvLyAgIDwvZGl2PmA7XG4gIC8vICAgcmV0dXJuIGAke0hlYWRlci5yZW5kZXIoKX0ke3ZpZXd9JHtGb290ZXIucmVuZGVyKCl9YDtcbiAgLy8gfSxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdmlldyA9IGAgPGRpdiBjbGFzcz1cInRleHRib29rLW5hdmlnYXRpb24gdW5pdC1uYXZpZ2F0aW9uXCI+XG4gICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXJvdW5kXCI+PC9idXR0b24+XG4gICAgICAgICA8cCBjbGFzcz1cInVuaXQtbmFtZVwiPtCg0LDQt9C00LXQuyAxPC9wPlxuICAgICAgIDwvZGl2PlxuICAgIDx1bCBjbGFzcz1cInVuaXQtcGFnZXNcIj5cbiAgJHt0aGlzLnJlbmRlclBhZ2VzKCl9XG4gIDwvdWw+YDtcbiAgICByZXR1cm4gYCR7SGVhZGVyLnJlbmRlcigpfSR7dmlld30ke0Zvb3Rlci5yZW5kZXIoKX1gO1xuICB9LFxuXG4gIHJlbmRlclBhZ2VzKCk6IHN0cmluZyB7XG4gICAgbGV0IHBhZ2VzID0gJyc7XG4gICAgY29uc3QgcGFnZXNDb3VudCA9IDMwO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBhZ2VzQ291bnQ7IGkgKz0gMSkge1xuICAgICAgcGFnZXMgKz0gYDxsaSBjbGFzcz1cInVuaXQtcGFnZVwiPlBhZ2UgJHtpfTwvbGk+YDtcbiAgICB9XG4gICAgcmV0dXJuIHBhZ2VzO1xuICB9LFxuICBnZXRDYXJkcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IHdvcmRsaXN0IH0gPSB0aGlzO1xuICAgIGZ1bmN0aW9uIHJlbmRlckNhcmRzKHdvcmRzOiBJV29yZFtdKSB7XG4gICAgICBjb25zdCB3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7d29yZGxpc3R9YCk7XG4gICAgICBpZiAod29yZENvbnRhaW5lcikge1xuICAgICAgICB3b3JkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd3b3JkLWl0ZW0nKTtcbiAgICAgICAgY2FyZC5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJ3b3JkLWltYWdlXCIgXG4gIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcnNsYW5nLWxlYXJuaW5nLWVuZ2xpc2gtd29yZHMuaGVyb2t1YXBwLmNvbS8ke3dvcmRzW2ldLmltYWdlfSlcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3b3JkLWRlc2NyaXB0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cIndvcmQtcHJvbm91bmNlIHdvcmQtYXVkaW9cIj5cbiAgICA8cCBjbGFzcz1cIndvcmQtbmFtZVwiPiR7d29yZHNbaV0ud29yZH0gJHt3b3Jkc1tpXS50cmFuc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdWRpb1wiPjxhdWRpbz48L2F1ZGlvPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzPVwid29yZC1wcm9ub3VuY2UgdHJhbnNsYXRpb25cIj4ke3dvcmRzW2ldLndvcmRUcmFuc2xhdGV9PC9wPlxuICAgIDxwIGNsYXNzPVwid29yZC1leGFtcGxlXCI+JHt3b3Jkc1tpXS50ZXh0TWVhbmluZ308L3A+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLWV4YW1wbGUgdHJhbnNsYXRpb25cIj4ke3dvcmRzW2ldLnRleHRNZWFuaW5nVHJhbnNsYXRlfTwvcD5cbiAgICA8cCBjbGFzcz1cIndvcmQtZXhhbXBsZVwiPiR7d29yZHNbaV0udGV4dEV4YW1wbGV9PC9wPlxuICAgIDxwIGNsYXNzPVwid29yZC1leGFtcGxlIHRyYW5zbGF0aW9uXCI+JHt3b3Jkc1tpXS50ZXh0RXhhbXBsZVRyYW5zbGF0ZX08L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwid29yZC1ub3RlZFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1vcmFuZ2UgYnRuLWRpZmZpY3VsdFwiPtCh0LvQvtC20L3Qvj88L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tb3JhbmdlIGJ0bi1sZWFybmVkXCI+0JjQt9GD0YfQtdC90L4/PC9idXR0b24+XG4gIDwvZGl2PmA7XG4gICAgICAgIHdvcmRDb250YWluZXI/LmFwcGVuZChjYXJkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGFwaS5nZXRXb3JkcygzLCA1KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVuZGVyQ2FyZHMocmVzIGFzIElXb3JkW10pO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGJvb2tQYWdlO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludGVnZXIobWluOm51bWJlciwgbWF4Om51bWJlcik6bnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG4iLCJpbXBvcnQgeyBSb3V0ZXMsIE1lbnVJdGVtcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCBTcHJpbnRHYW1lUGFnZSBmcm9tICcuLi9wYWdlcy9zcHJpbnQvaW5kZXgnO1xuXG5jbGFzcyBNb2R1bGVWaWV3IHtcbiAgbXlNb2R1bGVDb250YWluZXIhOkhUTUxFbGVtZW50O1xuXG4gIGNvbnRlbnRDb250YWluZXIhOkhUTUxFbGVtZW50O1xuXG4gIHJvdXRlc09iaiE6Um91dGVzO1xuXG4gIGluaXQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcm91dGVzOiBSb3V0ZXMpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5yb3V0ZXNPYmogPSByb3V0ZXM7XG4gIH1cblxuICByZW5kZXJDb250ZW50KGhhc2hQYWdlTmFtZTpzdHJpbmcpOnZvaWQge1xuICAgIGxldCByb3V0ZU5hbWUgPSAnZGVmYXVsdCc7XG4gICAgcm91dGVOYW1lID0gKGhhc2hQYWdlTmFtZS5sZW5ndGgpID8gaGFzaFBhZ2VOYW1lIDogcm91dGVOYW1lO1xuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5yb3V0ZXNPYmpbcm91dGVOYW1lIGFzIGtleW9mIFJvdXRlc107XG4gICAgdGhpcy5teU1vZHVsZUNvbnRhaW5lci5pbm5lckhUTUwgPSByb3V0ZS5yZW5kZXIoKTtcbiAgICBpZiAoaGFzaFBhZ2VOYW1lID09PSAnc3ByaW50JykgeyBTcHJpbnRHYW1lUGFnZS5pbml0TVZDKCk7IH1cbiAgfVxuXG4gIGhpZ2hsaWdodEFjdGl2ZU1lbnVJdGVtID0gKG9iajpNZW51SXRlbXMsIGhhc2hOYW1lOnN0cmluZyk6dm9pZCA9PiB7XG4gICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgZm9yKGxldCBrZXkgaW4gb2JqKXtcbiAgICAgIGlmIChvYmpba2V5IGFzIGtleW9mIE1lbnVJdGVtc10uY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51X19pdGVtX2FjdGl2ZScpKSB7XG4gICAgICAgIG9ialtrZXkgYXMga2V5b2YgTWVudUl0ZW1zXS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzaE5hbWUpIHtcbiAgICAgIG9ialtoYXNoTmFtZSBhcyBrZXlvZiBNZW51SXRlbXNdLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5tYWluLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVWaWV3O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCBTcHJpbnRSZXN1bHQgZnJvbSAnLi4vY29tcG9uZW50cy9zcHJpbnRyZXN1bHRzJztcbmltcG9ydCB0cnVlSW1nIGZyb20gJy4uL2Fzc2V0cy90cnVlLnBuZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2R1bGVWaWV3IHtcbiAgbXlNb2R1bGVDb250YWluZXIhOkhUTUxFbGVtZW50O1xuXG4gIGNvbnRlbnRDb250YWluZXIhOkhUTUxFbGVtZW50O1xuXG4gIHJvdXRlc09iaiE6Um91dGVzO1xuXG4gIHNwcmludFRpbWVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnRfX3RpbWVyJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50U2NvcmU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwcmludF9fc2NvcmUnKSBhcyBIVE1MRWxlbWVudDtcblxuICBzcHJpbnRDb3VudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGVfX2NvdW50JykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50Q291bnRUZXh0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZV9fdGV4dCcpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHF1ZXN0aW9uV29yZDpIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVzdGlvbl9fd29yZCcpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHF1ZXN0aW9uVHJhbnNsYXRpb246SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVlc3Rpb25fX3RyYW5zbGF0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50Q29udGVpbmVyOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwcmludC1jb250ZWluZXInKSBhcyBIVE1MRWxlbWVudDtcblxuICBpbml0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgLy8gdGhpcy5yb3V0ZXNPYmogPSByb3V0ZXM7XG4gIH1cblxuICByZW5kZXJXb3JkKHdvcmQ6IHN0cmluZywgdHJhbnNsYXRpb246IHN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5xdWVzdGlvbldvcmQudGV4dENvbnRlbnQgPSB3b3JkO1xuICAgIHRoaXMucXVlc3Rpb25UcmFuc2xhdGlvbi50ZXh0Q29udGVudCA9IHRyYW5zbGF0aW9uO1xuICB9XG5cbiAgcmVuZGVyVGltZXIodGltZXI6bnVtYmVyLCB0aW1lckVsZW06SFRNTEVsZW1lbnQpOnZvaWQge1xuICAgIHRpbWVyRWxlbS50ZXh0Q29udGVudCA9IFN0cmluZyh0aW1lcik7XG4gIH1cblxuICByZW5kZXJTY29yZShzY29yZTpzdHJpbmcsIG1heFNjb3JlPzpib29sZWFuKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludFNjb3JlLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgaWYgKG1heFNjb3JlKSB7XG4gICAgICB0aGlzLnNwcmludENvdW50LmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dHJ1ZUltZ31cIiBhbHQ9XCJpbWdcIj5gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNwcmludENvdW50LmlubmVySFRNTCArPSBgPGltZyBzcmM9XCIke3RydWVJbWd9XCIgYWx0PVwiaW1nXCI+YDtcbiAgICB9XG4gIH1cblxuICBjbGVhclNwcmludENvdW50KCk6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRDb3VudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIHJldHVyblRvT25lU3ByaW50Q291bnQoKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludENvdW50LmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dHJ1ZUltZ31cIiBhbHQ9XCJpbWdcIj5gO1xuICB9XG5cbiAgcmVuZGVyQ291bnRUZXh0KG46bnVtYmVyKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludENvdW50VGV4dC5pbm5lckhUTUwgPSBgKyAke259INC+0YfQutC+0LIg0LfQsCDRgdC70L7QstC+YDtcbiAgfVxuXG4gIHJlbmRlclJlc3VsdHMocXVlc3Rpb25zOnN0cmluZ1tdLCBhbnN3ZXJzOmJvb2xlYW5bXSwgcmlnaHRBbnN3ZXJzOm51bWJlciwgd3JvbmdBbnN3ZXJzOm51bWJlciwgc2NvcmU6bnVtYmVyKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludENvbnRlaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnNwcmludENvbnRlaW5lci5pbm5lckhUTUwgPSBgJHtTcHJpbnRSZXN1bHQucmVuZGVyKHF1ZXN0aW9ucywgYW5zd2VycywgcmlnaHRBbnN3ZXJzLCB3cm9uZ0Fuc3dlcnMsIHNjb3JlKX1gO1xuICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IE1vZHVsZVZpZXc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9