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
 
  <button id="level2" type="button"  class="btn-level"><a class=" link menu__main menu__item_active" href="${this.hashes.audiocallGame}" >Уровень 2</a></button>

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
    <div class="right-answer"></div>
    <div class="button-container"> ${(0, supporting_func_1.printBtnString)()}</div>
  </div>
 `;


/***/ }),

/***/ "./src/pages/audiocall/utils/listener-audiocall.ts":
/*!*********************************************************!*\
  !*** ./src/pages/audiocall/utils/listener-audiocall.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* eslint-disable max-len */
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
                const rightAnswer = document.querySelector('.right-answer');
                round = Number(localStorage.getItem('round')) + 1;
                localStorage.setItem('round', round.toString());
                if (e.target.id === supporting_func_1.wordObj.wordTranslate) {
                    score = Number(localStorage.getItem('score')) + 1;
                    localStorage.setItem('score', score.toString());
                    (0, supporting_func_1.soundAudio)((right_answer_mp3_1.default));
                    e.target.classList.add('btn-translation-right');
                    setTimeout(() => {
                        window.location.reload();
                    }, 1200);
                }
                else {
                    e.target.classList.add('btn-translation-wrong');
                    arrayWrongWords = JSON.parse(localStorage.getItem('arrayWrongWords'));
                    rightAnswer.innerHTML = `<div class="answer"><img class="answer-img" src="${api_path_1.apiPath + supporting_func_1.wordObj.image}" alt="правильный ответ"><br>${supporting_func_1.wordObj.word} — ${supporting_func_1.wordObj.wordTranslate} </div>`;
                    arrayWrongWords.push(supporting_func_1.wordObj.word);
                    localStorage.setItem('arrayWrongWords', JSON.stringify(arrayWrongWords));
                    (0, supporting_func_1.soundAudio)((wrong_answer_mp3_1.default));
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
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
                    localStorage.setItem('level', '2');
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
let arraylevel = [];
function levelGame() {
    if (localStorage.getItem('level')) {
        group = Number(localStorage.getItem('level')) - 1;
        page = Math.floor(Math.random() * (30 - 0 + 1)) + 0;
        arraylevel = [group, page];
    }
}
levelGame();
// констана которая получает с сервера массив слов
const apiGetWords = api_1.api.getWords(group, page)
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
    if (Number(localStorage.getItem('round')) < 20) {
        for (let i = 0; i < arraySixWords.length; i++) {
            a = arraySixWords[i];
            containerBtn += `<button  type="button" id="${a}" class="btn-translation">${a}</button> `;
        }
    }
    else {
        wordObj.audio = '';
        let a = '';
        if (JSON.parse(localStorage.getItem('arrayWrongWords')).length > 0) {
            a = ` <p class="game-text">Рекомендуем выучить:&nbsp${JSON.parse(localStorage.getItem('arrayWrongWords')).join(',\n')}</p> `;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFNBQVMsR0FBRyxHQUFHLHVCQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDO0lBQ25ILENBQUM7Q0FDRjtBQTVERCxnQ0E0REM7QUFFRCw2QkFBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEU3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvdGV4dGJvb2svdGV4dGJvb2suc2Nzcz9lMjBmIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzcz9hYWFmIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9hcGkvYXBpLXBhdGgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL21vZGFsLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL3NtYWxsQ29tcG9uZW50cy9idXR0b25zLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL3NwcmludHJlc3VsdHMudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbnRyb2xsZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyU3ByaW50LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9mdW5jdGlvbmFsL2xpc3RlbmVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9mdW5jdGlvbmFsL3Nob3ctdXNlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvZnVuY3Rpb25hbC9zdG9yYWdlLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvbW9kZWwvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL21vZGVsL21vZGVsU3ByaW50LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hYm91dHNwcmludC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hdWRpb2NhbGwvbWFpbi50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL3N0YXJ0LWF1ZGlvY2FsbC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL3V0aWxzL2dhbWUtcmVuZGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hdWRpb2NhbGwvdXRpbHMvbGlzdGVuZXItYXVkaW9jYWxsLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hdWRpb2NhbGwvdXRpbHMvc3VwcG9ydGluZy1mdW5jLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9tYWluLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9zcHJpbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL3NwcmludC9pbml0U3ByaW50TVZDLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9zdGF0aXN0aWNzL2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy90ZWFtLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy90ZXh0Ym9vay9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvdXRpbHMvZnVuYy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvdmlldy92aWV3LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy92aWV3L3ZpZXdTcHJpbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG5cbmNvbnN0IGFwaVBhdGggPSAnaHR0cHM6Ly9yc2xhbmctbGVhcm5pbmctZW5nbGlzaC13b3Jkcy5oZXJva3VhcHAuY29tLyc7XG5jb25zdCB3b3Jkc0VuZHBvaW50ID0gJ3dvcmRzJztcbmNvbnN0IHVzZXJzRW5kcG9pbnQgPSAndXNlcnMnO1xuY29uc3Qgc2lnbkluID0gJ3NpZ25pbic7XG5cbmV4cG9ydCB7XG4gIGFwaVBhdGgsIHdvcmRzRW5kcG9pbnQsIHVzZXJzRW5kcG9pbnQsIHNpZ25Jbixcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1lbHNlLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cblxuaW1wb3J0IHtcbiAgYXBpUGF0aCwgdXNlcnNFbmRwb2ludCwgd29yZHNFbmRwb2ludCwgc2lnbkluLFxufSBmcm9tICcuL2FwaS1wYXRoJztcbmltcG9ydCB7IElVc2VyLCBJV29yZCwgSVVzZXJEYXRhIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuXG5jb25zdCBhcGkgPSB7XG5cbiAgYXN5bmMgY3JlYXRlTmV3VXNlcihuYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPElVc2VyIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3VzZXJzRW5kcG9pbnR9YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2xlbmd0aCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGdldFVzZXIoaWQ6IHN0cmluZyk6IFByb21pc2U8SVVzZXIgfCB1bmRlZmluZWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7dXNlcnNFbmRwb2ludH0vJHtpZH1gLFxuICAgICAgICB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJVXNlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIHVzZXJTaWduSW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8SVVzZXJEYXRhIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3NpZ25Jbn1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgdXNlcicpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBnZXRXb3Jkcyhncm91cDogbnVtYmVyLCBwYWdlOiBudW1iZXIpOiBQcm9taXNlPElXb3JkW10gfCB1bmRlZmluZWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7d29yZHNFbmRwb2ludH0/Z3JvdXA9JHtncm91cH0mcGFnZT0ke3BhZ2V9YCxcbiAgICAgICAgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSVdvcmRbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBnZXQgd29yZHNcIik7XG4gICAgfVxuICB9LFxuICBhc3luYyBnZXRXb3JkKGlkOiBzdHJpbmcpOiBQcm9taXNlPElXb3JkIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3dvcmRzRW5kcG9pbnR9LyR7aWR9YCxcbiAgICAgICAgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSVdvcmQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZ2V0IHdvcmRcIik7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IHsgYXBpIH07XG4iLCJjb25zdCBDb250ZW50ID0ge1xuICByZW5kZXI6IChjdXN0b21DbGFzcyA9ICcnKTpzdHJpbmcgPT4gYDxkaXYgY2xhc3M9XCJjb250ZW50ICR7Y3VzdG9tQ2xhc3N9XCIgaWQ9XCJjb250ZW50XCI+PC9kaXY+YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCJjb25zdCBGb290ZXIgPSB7XG4gIHJlbmRlcjogKGN1c3RvbUNsYXNzID0gJycpOnN0cmluZyA9PiBgPGZvb3RlciBjbGFzcz1cImZvb3RlciAke2N1c3RvbUNsYXNzfVwiPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnaXRodWItbGlua3NcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2ZseWV0aGVyXCIgY2xhc3M9XCJnaXRodWItbGlua1wiPmZseWV0aGVyPGE+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EYXJpbmE5OTJcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+RGFyaW5hOTkyPGE+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9BbGVuYURvelwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5BbGVuYURvejxhPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4+JiMxNjk7IDIwMjI8L3NwYW4+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JzLnNjaG9vbC9qcy9cIiBjbGFzcz1cInJzLWxpbmtcIj48L2E+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5gLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IHNob3dVc2VyIGZyb20gJy4uL2Z1bmN0aW9uYWwvc2hvdy11c2VyJztcblxuY29uc3QgSGVhZGVyID0ge1xuICBoYXNoZXM6IHtcbiAgICBtYWluOiAnI21haW4nLFxuICAgIHRleHRib29rOiAnI3RleHRib29rJyxcbiAgICBzdGF0aXN0aWNzOiAnI3N0YXRpc3RpY3MnLFxuICAgIGF1ZGlvY2FsbDogJyNhdWRpb2NhbGwnLFxuICAgIGFib3V0c3ByaW50OiAnI2Fib3V0c3ByaW50JyxcbiAgICBzcHJpbnQ6ICcjc3ByaW50JyxcbiAgICB0ZWFtOiAnI3RlYW0nLFxuICB9LFxuXG4gIHJlbmRlcihjdXN0b21DbGFzcyA9ICcnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJtb2RhbC1yZXN1bHQtd3JhcHBlclwiPlxuICAgIDxkaXYgaWQ9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cIm1vZGFsLXdpbmRvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImJ0bi1jbG9zZVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXIgJHtjdXN0b21DbGFzc31cIiBpZD1cImhlYWRlclwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJoZWFkZXJfX2xvZ29cIj48YSBocmVmPVwiXCI+UlNMYW5nPC9hPjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2F1dGhcIj5cbiAgICAgICAgICAke3Nob3dVc2VyKHRydWUpfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fYXV0aFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5hdiBjbGFzcz1cImhlYWRlcl9fbWVudVwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnVfX2xpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHt0aGlzLmhhc2hlcy5tYWlufVwiIGNsYXNzPVwibWVudV9fbWFpbiBtZW51X19pdGVtX2FjdGl2ZVwiPtCT0LvQsNCy0L3QsNGPPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMudGV4dGJvb2t9XCIgY2xhc3M9XCJtZW51X190ZXh0Ym9va1wiPtCj0YfQtdCx0L3QuNC6PC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLnN0YXRpc3RpY3N9XCIgY2xhc3M9XCJtZW51X19zdGF0aWN0aWNzIG1lbnVfX2l0ZW1fZGlzYWJsZVwiPtCh0YLQsNGC0LjRgdGC0LjQutCwPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHt0aGlzLmhhc2hlcy5hdWRpb2NhbGx9XCIgY2xhc3M9XCJtZW51X19hdWRpb2NhbGxcIj7QkNGD0LTQuNC+0LLRi9C30L7QsjwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLmFib3V0c3ByaW50fVwiIGNsYXNzPVwibWVudV9fc3ByaW50XCI+0KHQv9GA0LjQvdGCPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMudGVhbX1cIiBjbGFzcz1cIm1lbnVfX3RlYW1cIj7QniDQutC+0LzQsNC90LTQtTwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyLWJ1cmdlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXJnZXItbWVudVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYXV0aFwiPlxuICAgICAgICAgICAgICAke3Nob3dVc2VyKHRydWUpfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2F1dGhcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImhlYWRlcl9fbWVudVwiPlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51X19saXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLm1haW59XCIgY2xhc3M9XCJtZW51X19tYWluIG1lbnVfX2l0ZW1fYWN0aXZlXCI+0JPQu9Cw0LLQvdCw0Y88L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMudGV4dGJvb2t9XCIgY2xhc3M9XCJtZW51X190ZXh0Ym9va1wiPtCj0YfQtdCx0L3QuNC6PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMuc3RhdGlzdGljc31cIiBjbGFzcz1cIm1lbnVfX3N0YXRpY3RpY3MgbWVudV9faXRlbV9kaXNhYmxlXCI+0KHRgtCw0YLQuNGB0YLQuNC60LA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsfVwiIGNsYXNzPVwibWVudV9fYXVkaW9jYWxsXCI+0JDRg9C00LjQvtCy0YvQt9C+0LI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMuc3ByaW50fVwiIGNsYXNzPVwibWVudV9fc3ByaW50XCI+0KHQv9GA0LjQvdGCPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLnRlYW19XCIgY2xhc3M9XCJtZW51X190ZWFtXCI+0J4g0LrQvtC80LDQvdC00LU8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgYDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG5leHBvcnQgY29uc3QgZm9ybUxvZ2luID0gYCA8Zm9ybSBjbGFzcz1cImZvcm0tc2lnbmluXCIgaWQ9XCJhdXRoXCI+ICAgICAgIFxuPGgzIGNsYXNzPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPtCS0LLQtdC00LjRgtC1INGB0LLQvtC4INC00LDQvdC90YvQtTwvaDM+XG48ZGl2IGNsYXNzPVwiZm9ybS1zaWduaW4tYm9keVwiPlxuICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJ1c2VyLWVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cItCS0LDRiCBFbWFpbFwiIHJlcXVpcmVkIC8+XG4gIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBtaW5sZW5ndGg9XCI4XCIgaWQ9XCJ1c2VyLXBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiIHJlcXVpcmVkLz4gICAgICBcbiAgPGRpdiBjbGFzcz1cImZvcm0tc2lnbmluLWJ1dHRvbnNcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLW9yYW5nZVwiICBpZD1cImJ1dHRvbi1uZXctdXNlclwiIHR5cGUgPVwiYnV0dG9uXCI+INCg0LXQs9C40YHRgtGA0LDRhtC40Y8gPC9idXR0b24+IFxuICAgIDxidXR0b24gY2xhc3M9XCJidG4tb3JhbmdlXCIgaWQ9XCJhdXRvcml6dGlvbkJ0blwiIHR5cGU9XCJzdWJtaXRcIj7QktC+0LnRgtC4PC9idXR0b24+ICBcbiAgPC9kaXY+XG4gIDwvZGl2PlxuPGg0IGNsYXNzPVwiZm9ybS1zaWduaW4tZXJyb3JcIj48L2g0PiBcbjwvZm9ybT5gO1xuXG5leHBvcnQgY29uc3QgZm9ybVJlZ2lzdHJhdGlvbiA9IGAgPGZvcm0gY2xhc3M9XCJmb3JtLXNpZ25pblwiIGlkPVwicmVnXCI+ICAgICAgIFxuPGgzIGNsYXNzPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPtCS0LLQtdC00LjRgtC1INGB0LLQvtC4INC00LDQvdC90YvQtTwvaDM+XG48ZGl2IGNsYXNzPVwiZm9ybS1zaWduaW4tYm9keVwiPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXItbmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInVzZXItbmFtZVwiIHBsYWNlaG9sZGVyPVwi0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiIHJlcXVpcmVkPVwiXCIgLz5cbiAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwidXNlci1lbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHJlcXVpcmVkIC8+XG4gIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBtaW5sZW5ndGg9XCI4XCIgaWQ9XCJ1c2VyLXBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiIHJlcXVpcmVkIC8+ICBcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLW9yYW5nZVwiIGlkPVwicmVnaXN0cmF0aW9uX2J0blwiIHR5cGU9XCJzdWJtaXRcIj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPINC4INCy0YXQvtC0PC9idXR0b24+ICBcbjwvZGl2PlxuPGg0IGNsYXNzPVwiZm9ybS1yZWctZXJyb3JcIj48L2g0PiAgXG48L2Zvcm0+YDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmV4cG9ydCBjb25zdCBCdXR0b25zID0ge1xuICBjcmVhdGU6IChzdHI6c3RyaW5nLCBjbGFzc05hbWU6c3RyaW5nLCBkaXNhYmxlZCA9IGZhbHNlKTpzdHJpbmcgPT4gYDxidXR0b24gY2xhc3M9XCJidXR0b24gJHtjbGFzc05hbWV9XCIgJHtkaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJ30+JHtzdHJ9PC9idXR0b24+YCxcbn07XG4iLCJpbXBvcnQgeWVzSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL3llcy5wbmcnO1xuaW1wb3J0IE5vSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL25vLnBuZyc7XG5cbmNvbnN0IFNwcmludFJlc3VsdHMgPSB7XG4gIHJlbmRlcihxdWVzdGlvbnM6c3RyaW5nW10sIGFuc3dlcnM6Ym9vbGVhbltdLCByaWdodEFuc3dlcnM6bnVtYmVyLCB3cm9uZ0Fuc3dlcnM6bnVtYmVyLCBzY29yZTpudW1iZXIpOnN0cmluZyB7XG4gICAgY29uc3QgdGFibGVUZXh0Q29udGVudDpzdHJpbmcgPSB0aGlzLmNyZWF0ZVRhYmxlKHF1ZXN0aW9ucywgYW5zd2Vycyk7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwicmVzdWx0LWNvbnRlaW5lclwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInNwcmludF9fcmVzdWx0X19zY29yZVwiPtCi0LLQvtC5INGA0LXQt9GD0LvRjNGC0LDRgjogJHtzY29yZX0g0L7Rh9C60L7QsiA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwic3ByaW50X19yZXN1bHRcIj7Qn9GA0LDQstC40LvRjNC90YvRhSDQvtGC0LLQtdGC0L7QsjogJHtyaWdodEFuc3dlcnN9LiDQntGI0LjQsdC+0Lo6ICR7d3JvbmdBbnN3ZXJzfS48L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1jb250ZWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7QktGL0YPRh9C10L3QvdGL0LUg0YHQu9C+0LLQsDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwic3ByaW50X190YWJsZV9fcmVzdWx0XCI+JHt0YWJsZVRleHRDb250ZW50fTwvdGFibGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YSBjbGFzcz1cInNwcmludF9fY2xvc2VfX3Jlc3VsdFwiIGhyZWY9XCIjbWFpblwiPtCX0LDQutGA0YvRgtGMPC9hPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgfSxcbiAgY3JlYXRlVGFibGU6IChxdWVzdGlvbnM6c3RyaW5nW10sIGFuc3dlcnM6Ym9vbGVhbltdKTpzdHJpbmcgPT4ge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc3JjID0gYW5zd2Vyc1tpXSA/IHllc0ltYWdlIDogTm9JbWFnZTtcbiAgICAgIHJlc3VsdCArPSBgPHRyPjx0ZD4ke3F1ZXN0aW9uc1tpXX08L3RkPjx0ZD48aW1nIHNyYz1cIiR7c3JjfVwiIGFsdD1cInllcy9ub1wiPjwvdGQ+PC90cj5gO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ByaW50UmVzdWx0cztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1uYW1lZC1hcy1kZWZhdWx0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cblxuLy8gaW1wb3J0IG1vZGFsQXV0aG9yaXphdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsJztcblxuaW1wb3J0IHsgTWVudUl0ZW1zIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IFNwcmludEdhbWVQYWdlIGZyb20gJy4uL3BhZ2VzL3NwcmludC9pbmRleCc7XG5pbXBvcnQgTW9kdWxlTW9kZWwgZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xuaW1wb3J0IGxpc3RlbmVyIGZyb20gJy4uL2Z1bmN0aW9uYWwvbGlzdGVuZXInO1xuaW1wb3J0IGxpc3RlbmVyQXVkaW9DYWxsIGZyb20gJy4uL3BhZ2VzL2F1ZGlvY2FsbC91dGlscy9saXN0ZW5lci1hdWRpb2NhbGwnO1xuXG5jbGFzcyBNb2R1bGVDb250cm9sbGVyIHtcbiAgbXlNb2R1bGVDb250YWluZXIhOiBIVE1MRWxlbWVudDtcblxuICBteU1vZHVsZU1vZGVsITogTW9kdWxlTW9kZWw7XG5cbiAgbWVudU1haW4gITogSFRNTEVsZW1lbnQ7XG5cbiAgbWVudVRleHRib29rICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVTdGF0aWN0aWNzICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVBdWRpb2NhbGwgITogSFRNTEVsZW1lbnQ7XG5cbiAgbWVudVNwcmludCAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51VGVhbSAhOiBIVE1MRWxlbWVudDtcblxuICBidXR0b25TdGFydFNwcmludCE6IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gIHNwcmludExldmVsICE6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgYXVkaW9jYWxsZ2FtZSAhOiBIVE1MRWxlbWVudDtcblxuICBpbml0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIG1vZGVsOiBNb2R1bGVNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsID0gbW9kZWw7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBtb2RhbEF1dGhvcml6YXRpb24ub3BlbigpO1xuICAgIGxpc3RlbmVyLm9wZW4oKTtcbiAgICBsaXN0ZW5lckF1ZGlvQ2FsbC5vcGVuKCk7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNtYWluJztcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGhhc2hQYWdlTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLnVwZGF0ZVN0YXRlKGhhc2hQYWdlTmFtZSk7XG4gICAgdGhpcy5maW5kTWVudUVsZW1lbnRzKGhhc2hQYWdlTmFtZSk7XG4gICAgc3dpdGNoIChoYXNoUGFnZU5hbWUpIHtcbiAgICAgIGNhc2UgJ2Fib3V0c3ByaW50JzpcbiAgICAgICAgdGhpcy5hZGRCdXR0b25zQWJvdXRTcHJpbnRHYW1lTGlzdGVuZXJzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICBmaW5kTWVudUVsZW1lbnRzKGhhc2hOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5tZW51TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19tYWluJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51VGV4dGJvb2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fdGV4dGJvb2snKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVTdGF0aWN0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3N0YXRpY3RpY3MnKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVBdWRpb2NhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fYXVkaW9jYWxsJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51U3ByaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3NwcmludCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudVRlYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fdGVhbScpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IG9iajpNZW51SXRlbXMgPSB7XG4gICAgICBtYWluOiB0aGlzLm1lbnVNYWluLFxuICAgICAgdGV4dGJvb2s6IHRoaXMubWVudVRleHRib29rLFxuICAgICAgc3RhdGlzdGljczogdGhpcy5tZW51U3RhdGljdGljcyxcbiAgICAgIGF1ZGlvY2FsbDogdGhpcy5tZW51QXVkaW9jYWxsLFxuICAgICAgc3ByaW50OiB0aGlzLm1lbnVTcHJpbnQsXG4gICAgICBhYm91dHNwcmludDogdGhpcy5tZW51U3ByaW50LFxuICAgICAgdGVhbTogdGhpcy5tZW51VGVhbSxcbiAgICB9O1xuICAgIGlmICh0aGlzLm1lbnVNYWluKSB7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwuaGlnaGxpZ2h0QWN0aXZlTWVudUl0ZW0ob2JqLCBoYXNoTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgYWRkQnV0dG9uc0Fib3V0U3ByaW50R2FtZUxpc3RlbmVycygpOnZvaWQge1xuICAgIHRoaXMuYnV0dG9uU3RhcnRTcHJpbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19zdGFydF9fc3ByaW50JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgdGhpcy5zcHJpbnRMZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnRfX2xldmVsJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLmJ1dHRvblN0YXJ0U3ByaW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcjc3ByaW50JztcbiAgICAgIFNwcmludEdhbWVQYWdlLnNhdmVMZXZlbCh0aGlzLnNwcmludExldmVsLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVDb250cm9sbGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IE1vZHVsZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWxTcHJpbnQnO1xuXG5leHBvcnQgY2xhc3MgTW9kdWxlQ29udHJvbGxlciB7XG4gIG15TW9kdWxlQ29udGFpbmVyITogSFRNTEVsZW1lbnQ7XG5cbiAgbXlNb2R1bGVNb2RlbCE6IE1vZHVsZU1vZGVsO1xuXG4gIGJ1dHRvbkZhbHNlITogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgYnV0dG9uVHJ1ZSE6IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gIHNwcmludFRpbWVyITogSFRNTEVsZW1lbnQ7XG5cbiAgYnV0dG9uU2F5V29yZCE6SFRNTEVsZW1lbnQ7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50LCBtb2RlbDogTW9kdWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmZpbmRBdWRpb0VsZW1lbnRzKCk7XG4gICAgdGhpcy5zZXRUaW1lcigpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5teU1vZHVsZU1vZGVsLmNsZWFySW50ZXJ2YWwpO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKTp2b2lkIHtcbiAgICB0aGlzLmJ1dHRvbkZhbHNlID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19zcHJpbnRfX2ZhbHNlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgdGhpcy5idXR0b25GYWxzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5jaGVja0Fuc3dlcihmYWxzZSk7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwucHJlcGVhck5leHRXb3JkKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmJ1dHRvblRydWUgPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX3NwcmludF9fdHJ1ZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMuYnV0dG9uVHJ1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5jaGVja0Fuc3dlcih0cnVlKTtcbiAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5wcmVwZWFyTmV4dFdvcmQoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2hlY2tBbnN3ZXIoZmFsc2UpO1xuICAgICAgICB0aGlzLm15TW9kdWxlTW9kZWwucHJlcGVhck5leHRXb3JkKCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5jaGVja0Fuc3dlcih0cnVlKTtcbiAgICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnByZXBlYXJOZXh0V29yZCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5idXR0b25TYXlXb3JkID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcud29yZF9fc291bmQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLmJ1dHRvblNheVdvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcHJpbnRfX3NheV9fd29yZCcpIGFzIEhUTUxBdWRpb0VsZW1lbnQ7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwuc2F5V29yZChhdWRpbyk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kQXVkaW9FbGVtZW50cygpOnZvaWQge1xuICAgIGNvbnN0IHJpZ2h0QW5zd2VyQXVkaW8gPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNhdWRpb19fcmlnaHQnKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgIGNvbnN0IHdyb25nQW5zd2VyQXVkaW8gPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNhdWRpb19fd3JvbmcnKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgIGNvbnN0IHRpbWVvdmVyQXVkaW8gPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNhdWRpb19fdGltZW92ZXInKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbC5nZXRBdWRpbyhyaWdodEFuc3dlckF1ZGlvLCB3cm9uZ0Fuc3dlckF1ZGlvLCB0aW1lb3ZlckF1ZGlvKTtcbiAgfVxuXG4gIHNldFRpbWVyKCk6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRUaW1lciA9IHRoaXMubXlNb2R1bGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnNwcmludF9fdGltZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwuc2V0VGltZXIodGhpcy5zcHJpbnRUaW1lcik7XG4gIH1cblxuICBzZWxlY3RUcnVlKCk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLmNoZWNrQW5zd2VyKHRydWUpO1xuICB9XG5cbiAgc2VsZWN0RmFsc2UoKTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2hlY2tBbnN3ZXIoZmFsc2UpO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXNoYWRvdyAqL1xuXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCB7IGZvcm1Mb2dpbiwgZm9ybVJlZ2lzdHJhdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwnO1xuaW1wb3J0IHNob3dVc2VyIGZyb20gJy4vc2hvdy11c2VyJztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5jbGFzcyBMaXN0ZW5lciB7XG4gIG9wZW4oKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhdXRob3JpemF0aW9uJykpIHtcbiAgICAgICAgY29uc3QgYnRuQ2xvc2VNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2xvc2UnKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG4gICAgICAgIGNvbnN0IG1vZGFsUmVzdWx0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1yZXN1bHQtd3JhcHBlcicpO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICB3cmFwcGVyIS5pbm5lckhUTUwgPSBmb3JtTG9naW47XG4gICAgICAgIG1vZGFsUmVzdWx0V3JhcHBlciEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGNvbnN0IHVzZXJFbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItZW1haWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCB1c2VyUGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLXBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaWYgKHVzZXJFbWFpbElucHV0ICYmIHVzZXJQYXNzd29yZElucHV0KSB7XG4gICAgICAgICAgY29uc3QgYXV0aEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICAgIGlmIChhdXRoRm9ybSkge1xuICAgICAgICAgICAgYXV0aEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGVyckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zaWduaW4tZXJyb3InKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgZXJyRm9ybS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgY29uc3QgdXNlckVtYWlsID0gdXNlckVtYWlsSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICBjb25zdCB1c2VyUGFzc3dvcmQgPSB1c2VyUGFzc3dvcmRJbnB1dCEudmFsdWU7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgYXBpLnVzZXJTaWduSW4odXNlckVtYWlsLCB1c2VyUGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzdG9yYWdlLnVzZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgIHNob3dVc2VyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICBlcnJGb3JtLmlubmVySFRNTCA9ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L3QtSDQvdCw0LnQtNC10L0sINC/0YDQvtCy0LXRgNGM0YLQtSDRgdCy0L7QuCDQtNCw0L3QvdGL0LUg0LjQu9C4INC30LDRgNC10LPQuNGB0YLRgNC40YDRg9C50YLQtdGB0YwnO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidXR0b25OZXdVc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1uZXctdXNlcicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICBpZiAoYnV0dG9uTmV3VXNlcikge1xuICAgICAgICAgIGJ1dHRvbk5ld1VzZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoX2U6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB3cmFwcGVyIS5pbm5lckhUTUwgPSBmb3JtUmVnaXN0cmF0aW9uO1xuICAgICAgICAgICAgY29uc3QgdXNlckVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1lbWFpbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCB1c2VyUGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLXBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1uYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgIGlmICh1c2VyTmFtZUlucHV0ICYmIHVzZXJFbWFpbElucHV0ICYmIHVzZXJQYXNzd29yZElucHV0KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgICAgICAgIGlmIChyZWdpc3RyYXRpb25Gb3JtKSB7XG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGVyckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1yZWctZXJyb3InKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgIGVyckZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyRW1haWwgPSB1c2VyRW1haWxJbnB1dCEudmFsdWU7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGFzc3dvcmQgPSB1c2VyUGFzc3dvcmRJbnB1dCEudmFsdWU7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyTmFtZSA9IHVzZXJOYW1lSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgYXBpLmNyZWF0ZU5ld1VzZXIodXNlck5hbWUsIHVzZXJFbWFpbCwgdXNlclBhc3N3b3JkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgYXBpLnVzZXJTaWduSW4odXNlckVtYWlsLCB1c2VyUGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS51c2VyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1VzZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJGb3JtLmlubmVySFRNTCA9ICfQktC+0LfQvNC+0LbQvdC+INGN0YLQvtGCIGUtbWFpbCDRg9C20LUg0LfQsNC90Y/Rgiwg0L/QvtC/0YDQvtCx0YPQudGC0LUg0LTRgNGD0LPQvtC5JztcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgICBtb2RhbFJlc3VsdFdyYXBwZXIhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH07XG4gICAgICAgIG92ZXJsYXkhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gICAgICAgIGJ0bkNsb3NlTW9kYWwhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnZXhpdF9idG4nKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICAgICAgICBzdG9yYWdlLnVzZXIgPSB7XG4gICAgICAgICAgbWVzc2FnZTogJycsIHRva2VuOiAnJywgcmVmcmVzaFRva2VuOiAnJywgdXNlcklkOiAnJywgbmFtZTogJycsXG4gICAgICAgIH07XG4gICAgICAgIHNob3dVc2VyKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBsaXN0ZW5lciA9IG5ldyBMaXN0ZW5lcigpO1xuZXhwb3J0IGRlZmF1bHQgbGlzdGVuZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cblxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dVc2VyKHJldDpib29sZWFuKSA6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgbGV0IGNsYXNzTmFtZSA9ICdhdXRob3JpemF0aW9uJztcbiAgbGV0IGNvbnRleHQgPSAn0JLQvtC50YLQuCc7XG4gIGlmIChzdG9yYWdlLnVzZXI/LnRva2VuICE9ICcnKSB7XG4gICAgY29udGV4dCA9ICfQktGL0LnRgtC4JztcbiAgICBjbGFzc05hbWUgPSAnZXhpdF9idG4nO1xuICB9XG4gIGNvbnN0IGh0bWwgPSBgPGRpdiBjbGFzcz1cInVzZXItc2hvd1wiPiAke3N0b3JhZ2UudXNlcj8ubmFtZX0gPGJ1dHRvbiBjbGFzcz0ke2NsYXNzTmFtZX0+JHtjb250ZXh0fTwvYnV0dG9uPiA8L2Rpdj5gO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2F1dGgnKSBhcyBIVE1MRWxlbWVudDtcbiAgaWYgKHJldCkge1xuICAgIHJldHVybiBodG1sO1xuICB9XG4gIGhlYWRlci5pbm5lckhUTUwgPSBodG1sO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbmltcG9ydCB7IElVc2VyLCBJVXNlckRhdGEsIElXb3JkIH0gZnJvbSAndHlwZXMvdHlwZXMnO1xuXG5jbGFzcyBTdG9yYWdlIHtcbiAgdXNlcj86IElVc2VyRGF0YTtcblxuICB3b3JkPzogSVdvcmQ7XG5cbiAgd29yZHM/OiBJV29yZFtdO1xuXG4gIGxldmVsPzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XG4gICAgICB0aGlzLnVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgYXMgc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICBtZXNzYWdlOiAnJywgdG9rZW46ICcnLCByZWZyZXNoVG9rZW46ICcnLCB1c2VySWQ6ICcnLCBuYW1lOiAnJyxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd29yZCcpKSB7XG4gICAgICB0aGlzLndvcmQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3b3JkJykgYXMgc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53b3JkID0ge1xuICAgICAgICBpZDogJycsIGdyb3VwOiAwLCBwYWdlOiAwLCB3b3JkOiAnJywgaW1hZ2U6ICcnLCBhdWRpbzogJycsIGF1ZGlvTWVhbmluZzogJycsIGF1ZGlvRXhhbXBsZTogJycsIHRleHRNZWFuaW5nOiAnJywgdGV4dEV4YW1wbGU6ICcnLCB0cmFuc2NyaXB0aW9uOiAnJywgd29yZFRyYW5zbGF0ZTogJycsIHRleHRNZWFuaW5nVHJhbnNsYXRlOiAnJywgdGV4dEV4YW1wbGVUcmFuc2xhdGU6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3b3JkcycpKSB7XG4gICAgICB0aGlzLndvcmRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd29yZHMnKSBhcyBzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndvcmRzID0gW107XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1uYW1lZC1hcy1kZWZhdWx0LW1lbWJlciAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cblxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zYXNzJztcblxuaW1wb3J0IE1vZHVsZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyL2NvbnRyb2xsZXInO1xuaW1wb3J0IE1vZHVsZU1vZGVsIGZyb20gJy4vbW9kZWwvbW9kZWwnO1xuaW1wb3J0IE1vZHVsZVZpZXcgZnJvbSAnLi92aWV3L3ZpZXcnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzLCBSb3V0ZXMsIEluaXRpYWxPYmogfSBmcm9tICcuL3R5cGVzL3R5cGVzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmltcG9ydCBNYWluUGFnZSBmcm9tICcuL3BhZ2VzL21haW4nO1xuXG5pbXBvcnQgVGV4dGJvb2tQYWdlIGZyb20gJy4vcGFnZXMvdGV4dGJvb2snO1xuaW1wb3J0IEFib3V0VGVhbVBhZ2UgZnJvbSAnLi9wYWdlcy90ZWFtJztcbmltcG9ydCBTcHJpbnRHYW1lUGFnZSBmcm9tICcuL3BhZ2VzL3NwcmludC9pbmRleCc7XG5pbXBvcnQgQWJvdXRTcHJpbnRHYW1lUGFnZSBmcm9tICcuL3BhZ2VzL2Fib3V0c3ByaW50JztcbmltcG9ydCBBdWRpb2NhbGxHYW1lUGFnZSBmcm9tICcuL3BhZ2VzL2F1ZGlvY2FsbC9pbmRleCc7XG5pbXBvcnQgU3RhdGlzdGljc1BhZ2UgZnJvbSAnLi9wYWdlcy9zdGF0aXN0aWNzL2luZGV4JztcbmltcG9ydCBBdWRpb2NhbGxHYW1lIGZyb20gJy4vcGFnZXMvYXVkaW9jYWxsL21haW4nO1xuXG5jb25zdCBjb21wb25lbnRzOiBDb21wb25lbnRzID0ge1xuICBoZWFkZXI6IEhlYWRlcixcbiAgY29udGVudDogQ29udGVudCxcbiAgZm9vdGVyOiBGb290ZXIsXG59O1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IHtcbiAgbWFpbjogTWFpblBhZ2UsXG4gIGRlZmF1bHQ6IE1haW5QYWdlLFxuICB0ZXh0Ym9vazogVGV4dGJvb2tQYWdlLFxuICB0ZWFtOiBBYm91dFRlYW1QYWdlLFxuICBzcHJpbnQ6IFNwcmludEdhbWVQYWdlLFxuICBhYm91dHNwcmludDogQWJvdXRTcHJpbnRHYW1lUGFnZSxcbiAgYXVkaW9jYWxsOiBBdWRpb2NhbGxHYW1lUGFnZSxcbiAgYXVkaW9jYWxsZ2FtZTogQXVkaW9jYWxsR2FtZSxcbiAgc3RhdGlzdGljczogU3RhdGlzdGljc1BhZ2UsXG59O1xuXG5jb25zdCBpbml0aWFsT2JqOiBJbml0aWFsT2JqID0ge1xuICBjb250YWluZXI6ICdzcGEnLFxuICByb3V0ZXMsXG4gIGNvbXBvbmVudHMsXG59O1xuXG4vKiAtLS0tLSBzcGEgaW5pdCBtb2R1bGUgLS0tICovXG5jb25zdCBteVNQQSA9ICgoKSA9PiB7XG4gIGxldCB2aWV3OiBNb2R1bGVWaWV3O1xuICBsZXQgbW9kZWw6IE1vZHVsZU1vZGVsO1xuICBsZXQgY29udHJvbGxlcjogTW9kdWxlQ29udHJvbGxlcjtcbiAgcmV0dXJuIHtcbiAgICBpbml0KG9iajogSW5pdGlhbE9iaikge1xuICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnRzKG9iai5jb250YWluZXIsIG9iai5jb21wb25lbnRzKTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lclNQQSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9iai5jb250YWluZXIpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgdmlldyA9IG5ldyBNb2R1bGVWaWV3KCk7XG4gICAgICBtb2RlbCA9IG5ldyBNb2R1bGVNb2RlbCgpO1xuICAgICAgY29udHJvbGxlciA9IG5ldyBNb2R1bGVDb250cm9sbGVyKCk7XG5cbiAgICAgIHZpZXcuaW5pdChjb250YWluZXJTUEEsIHJvdXRlcyk7XG4gICAgICBtb2RlbC5pbml0KHZpZXcpO1xuICAgICAgY29udHJvbGxlci5pbml0KGNvbnRhaW5lclNQQSwgbW9kZWwpO1xuICAgIH0sXG5cbiAgICByZW5kZXJDb21wb25lbnRzKGNvbnRhaW5lcjogc3RyaW5nLCBjb21wb25lbnRzT2JqOiBDb21wb25lbnRzKSB7XG4gICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVyKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IGNvbXBvbmVudHNMaXN0ID0gT2JqZWN0LmtleXMoY29tcG9uZW50c09iaik7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb21wb25lbnRzTGlzdCkge1xuICAgICAgICByb290LmlubmVySFRNTCArPSBjb21wb25lbnRzT2JqW2l0ZW0gYXMga2V5b2YgQ29tcG9uZW50c10ucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn0pKCk7XG5cbi8qIC0tLS0tLSBlbmQgYXBwIG1vZHVsZSAtLS0tLSAqL1xuXG4vKiogKiAtLS0gaW5pdCBtb2R1bGUgLS0tICoqICovXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbXlTUEEuaW5pdChpbml0aWFsT2JqKTtcbn0pO1xuIiwiaW1wb3J0IE1vZGVsVmlldyBmcm9tICcuLi92aWV3L3ZpZXcnO1xuaW1wb3J0IHsgTWVudUl0ZW1zIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuXG5jbGFzcyBNb2R1bGVNb2RlbCB7XG4gIG15TW9kdWxlVmlldyE6IE1vZGVsVmlldztcblxuICBpbml0KHZpZXc6IE1vZGVsVmlldyk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcgPSB2aWV3O1xuICB9XG5cbiAgdXBkYXRlU3RhdGUocGFnZU5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJDb250ZW50KHBhZ2VOYW1lKTtcbiAgfVxuXG4gIGhpZ2hsaWdodEFjdGl2ZU1lbnVJdGVtKG9iajogTWVudUl0ZW1zLCBoYXNoTmFtZTpzdHJpbmcpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LmhpZ2hsaWdodEFjdGl2ZU1lbnVJdGVtKG9iaiwgaGFzaE5hbWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZHVsZU1vZGVsO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbmltcG9ydCB7IE1vZHVsZVZpZXcgfSBmcm9tICcuLi92aWV3L3ZpZXdTcHJpbnQnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgeyBhcGlQYXRoIH0gZnJvbSAnLi4vYXBpL2FwaS1wYXRoJztcbmltcG9ydCB7IElXb3JkIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IFNwcmludEdhbWVQYWdlIGZyb20gJy4uL3BhZ2VzL3NwcmludC9pbmRleCc7XG5pbXBvcnQgeyByYW5kb21JbnRlZ2VyIH0gZnJvbSAnLi4vdXRpbHMvZnVuYyc7XG5cbmV4cG9ydCBjbGFzcyBNb2R1bGVNb2RlbCB7XG4gIG15TW9kdWxlVmlldyE6IE1vZHVsZVZpZXc7XG5cbiAgbGV2ZWw6IG51bWJlciA9IFNwcmludEdhbWVQYWdlLmxldmVsO1xuXG4gIHBhZ2VzITogbnVtYmVyW107XG5cbiAgYWN0aXZlMjBXb3JkcyAhOiBJV29yZFtdO1xuXG4gIGFjdGl2ZVdvcmROdW1iZXIgPSAwO1xuXG4gIGFjdGl2ZVBhZ2VOdW1iZXIgPSAwO1xuXG4gIHJhbmRvbVRyYW5zbGF0aW9uTnVtYmVyICE6IG51bWJlcjtcblxuICBhdWRpb1JpZ2h0ICE6IEhUTUxBdWRpb0VsZW1lbnQ7XG5cbiAgdGltZXIhOm51bWJlcjtcblxuICB0aW1lcklkICE6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPjtcblxuICBzY29yZSA9IDA7XG5cbiAgc2NvcmVGb3JSaWdodEFuc3dlciA9IDEwO1xuXG4gIG1heFNjb3JlRm9yUmlnaHRBbnN3ZXIgPSA4MDtcblxuICBhbW91bnRPZlJpZ2h0QW5zd2Vyc0ZvckJpZ2dlclNjb3JlID0gMztcblxuICBhcnJheU9mUXVlc3Rpb246IHN0cmluZ1tdID0gW107XG5cbiAgYXJyYXlPZkFuc3dlcnM6IGJvb2xlYW5bXSA9IFtdO1xuXG4gIGFtb3VudE9mUmlnaHRBbnN3ZXJzID0gMDtcblxuICByaWdodEFuc3dlckF1ZGlvICE6IEhUTUxBdWRpb0VsZW1lbnQ7XG5cbiAgd3JvbmdBbnN3ZXJBdWRpbyE6IEhUTUxBdWRpb0VsZW1lbnQ7XG5cbiAgdGltZW92ZXJBdWRpbyE6SFRNTEF1ZGlvRWxlbWVudDtcblxuICBpbml0KHZpZXc6IE1vZHVsZVZpZXcpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVWaWV3ID0gdmlldztcbiAgICB0aGlzLmZpbGxBbmRTb3J0UGFnZXMoKTtcbiAgICB0aGlzLmdldFdvcmRzRnJvbUFwaSgpO1xuICB9XG5cbiAgc2F5V29yZChhdWRpbzpIVE1MQXVkaW9FbGVtZW50KTp2b2lkIHtcbiAgICBhdWRpby5zcmMgPSBgJHthcGlQYXRoICsgdGhpcy5hY3RpdmUyMFdvcmRzW3RoaXMuYWN0aXZlV29yZE51bWJlcl0uYXVkaW99YDtcbiAgICBhdWRpby5wbGF5KCk7XG4gIH1cblxuICBmaWxsQW5kU29ydFBhZ2VzKCk6dm9pZCB7XG4gICAgdGhpcy5wYWdlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgdGhpcy5wYWdlcy5wdXNoKGkpO1xuICAgIH1cbiAgICB0aGlzLnBhZ2VzLnNvcnQoKCkgPT4gMC41IC0gTWF0aC5yYW5kb20oKSk7XG4gIH1cblxuICBhc3luYyBnZXRXb3Jkc0Zyb21BcGkoKTogUHJvbWlzZTxJV29yZFtdIHwgdm9pZD4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXRXb3Jkcyh0aGlzLmxldmVsLCB0aGlzLnBhZ2VzW3RoaXMuYWN0aXZlUGFnZU51bWJlcl0pIGFzIElXb3JkW107XG4gICAgdGhpcy5hY3RpdmUyMFdvcmRzID0gQXJyYXkuZnJvbShyZXMpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWN0aXZlMjBXb3Jkcyk7XG4gICAgaWYgKHRoaXMuYWN0aXZlUGFnZU51bWJlciA9PT0gMCkgeyB0aGlzLnByZXBlYXJGaXJzdFdvcmQoKTsgfVxuICB9XG5cbiAgcHJlcGVhckZpcnN0V29yZCgpOnZvaWQge1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdGhpcy5nZW5lcmF0ZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgeyB3b3JkIH0gPSB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5hY3RpdmVXb3JkTnVtYmVyXTtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJXb3JkKHdvcmQsIHRyYW5zbGF0aW9uKTtcbiAgfVxuXG4gIHByZXBlYXJOZXh0V29yZCgpOnZvaWQge1xuICAgIHRoaXMuY2hlY2tXb3Jkc051bWJlcnMoKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMuZ2VuZXJhdGVUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IHsgd29yZCB9ID0gdGhpcy5hY3RpdmUyMFdvcmRzW3RoaXMuYWN0aXZlV29yZE51bWJlcl07XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyV29yZCh3b3JkLCB0cmFuc2xhdGlvbik7XG4gICAgdGhpcy5hcnJheU9mUXVlc3Rpb24ucHVzaCh3b3JkKTtcbiAgfVxuXG4gIGNoZWNrV29yZHNOdW1iZXJzKCk6dm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlV29yZE51bWJlciA9PT0gMTkpIHtcbiAgICAgIHRoaXMuYWN0aXZlUGFnZU51bWJlciArPSAxO1xuICAgICAgdGhpcy5hY3RpdmVXb3JkTnVtYmVyID0gMDtcbiAgICAgIHRoaXMuZ2V0V29yZHNGcm9tQXBpKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlV29yZE51bWJlciArPSAxO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlVHJhbnNsYXRpb24oKTpzdHJpbmcge1xuICAgIGNvbnN0IG1pbiA9ICh0aGlzLmFjdGl2ZVdvcmROdW1iZXIgPj0gMikgPyB0aGlzLmFjdGl2ZVdvcmROdW1iZXIgLSAyIDogMDtcbiAgICBjb25zdCBtYXggPSAodGhpcy5hY3RpdmVXb3JkTnVtYmVyICsgMiA8PSAxOSkgPyB0aGlzLmFjdGl2ZVdvcmROdW1iZXIgKyAyIDogMTk7XG4gICAgdGhpcy5yYW5kb21UcmFuc2xhdGlvbk51bWJlciA9IHJhbmRvbUludGVnZXIobWluLCBtYXgpO1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5yYW5kb21UcmFuc2xhdGlvbk51bWJlcl0ud29yZFRyYW5zbGF0ZTtcbiAgfVxuXG4gIGNoZWNrQW5zd2VyKGFuc3dlcjpib29sZWFuKTp2b2lkIHtcbiAgICBjb25zdCB0cmFuc2xhdGU6c3RyaW5nID0gdGhpcy5hY3RpdmUyMFdvcmRzW3RoaXMuYWN0aXZlV29yZE51bWJlcl0ud29yZFRyYW5zbGF0ZTtcbiAgICBjb25zdCByaWdodFRyYW5zbGF0ZTpzdHJpbmcgPSB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5yYW5kb21UcmFuc2xhdGlvbk51bWJlcl0ud29yZFRyYW5zbGF0ZTtcbiAgICBpZiAoKHRyYW5zbGF0ZSA9PT0gcmlnaHRUcmFuc2xhdGUpID09PSBhbnN3ZXIpIHtcbiAgICAgIHRoaXMucmlnaHRBbnN3ZXJBdWRpby5wbGF5KCk7XG4gICAgICB0aGlzLmFycmF5T2ZBbnN3ZXJzLnB1c2godHJ1ZSk7XG4gICAgICB0aGlzLmFuYWx5emVUcnVlQW5zd2VyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud3JvbmdBbnN3ZXJBdWRpby5wbGF5KCk7XG4gICAgICB0aGlzLmFycmF5T2ZBbnN3ZXJzLnB1c2goZmFsc2UpO1xuICAgICAgdGhpcy5hbmFseXplRmFsc2VBbnN3ZXIoKTtcbiAgICB9XG4gIH1cblxuICBzZXRUaW1lciA9ICh0aW1lckVsZW06IEhUTUxFbGVtZW50KTp2b2lkID0+IHtcbiAgICB0aGlzLnRpbWVyID0gTnVtYmVyKHRpbWVyRWxlbS50ZXh0Q29udGVudCk7XG5cbiAgICBjb25zdCB0aWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy50aW1lciAtPSAxO1xuICAgICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyVGltZXIodGhpcy50aW1lciwgdGltZXJFbGVtKTtcbiAgICAgIGlmICh0aGlzLnRpbWVyID09PSAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcbiAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRpbWVyID09PSA1KSB7XG4gICAgICAgIHRoaXMudGltZW92ZXJBdWRpby5wbGF5KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnRpbWVySWQgPSBzZXRJbnRlcnZhbCh0aWNrLCAxMDAwKTtcbiAgfTtcblxuICBjbGVhckludGVydmFsID0gKCk6dm9pZCA9PiB7XG4gICAgaWYgKHRoaXMudGltZXJJZCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xuICAgIH1cbiAgfTtcblxuICBjb3VudFNjb3JlKCk6dm9pZCB7XG4gICAgdGhpcy5zY29yZSArPSB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXI7XG4gICAgaWYgKHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciA9PT0gdGhpcy5tYXhTY29yZUZvclJpZ2h0QW5zd2VyKSB7XG4gICAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJTY29yZShTdHJpbmcodGhpcy5zY29yZSksIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJTY29yZShTdHJpbmcodGhpcy5zY29yZSkpO1xuICAgIH1cbiAgfVxuXG4gIGFuYWx5emVGYWxzZUFuc3dlcigpOnZvaWQge1xuICAgIHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnMgPSAwO1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LmNsZWFyU3ByaW50Q291bnQoKTtcbiAgICB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgPSAxMDtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJDb3VudFRleHQodGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyKTtcbiAgfVxuXG4gIGFuYWx5emVUcnVlQW5zd2VyKCk6dm9pZCB7XG4gICAgdGhpcy5hbW91bnRPZlJpZ2h0QW5zd2VycyArPSAxO1xuICAgIHRoaXMuY291bnRTY29yZSgpO1xuICAgIGlmICh0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzID09PSB0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzRm9yQmlnZ2VyU2NvcmUgJiYgdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyICE9PSB0aGlzLm1heFNjb3JlRm9yUmlnaHRBbnN3ZXIpIHtcbiAgICAgIHRoaXMuZ2V0QmlnZ2VyU2NvcmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnMgPT09ICh0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzRm9yQmlnZ2VyU2NvcmUgKyAxKSAmJiB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgIT09IHRoaXMubWF4U2NvcmVGb3JSaWdodEFuc3dlcikge1xuICAgICAgdGhpcy5teU1vZHVsZVZpZXcucmV0dXJuVG9PbmVTcHJpbnRDb3VudCgpO1xuICAgICAgdGhpcy5hbW91bnRPZlJpZ2h0QW5zd2VycyA9IDE7XG4gICAgfVxuICB9XG5cbiAgZ2V0QmlnZ2VyU2NvcmUoKTp2b2lkIHtcbiAgICB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgPSAodGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyID09PSB0aGlzLm1heFNjb3JlRm9yUmlnaHRBbnN3ZXIpID8gdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyIDogdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyICo9IDI7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyQ291bnRUZXh0KHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlcik7XG4gIH1cblxuICBzdG9wR2FtZSgpOnZvaWQge1xuICAgIGxldCByaWdodEFuc3dlcnMgPSAwO1xuICAgIGxldCB3cm9uZ0Fuc3dlcnMgPSAwO1xuICAgIHRoaXMuYXJyYXlPZkFuc3dlcnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgcmlnaHRBbnN3ZXJzICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cm9uZ0Fuc3dlcnMgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJSZXN1bHRzKHRoaXMuYXJyYXlPZlF1ZXN0aW9uLCB0aGlzLmFycmF5T2ZBbnN3ZXJzLCByaWdodEFuc3dlcnMsIHdyb25nQW5zd2VycywgdGhpcy5zY29yZSk7XG4gIH1cblxuICBnZXRBdWRpbyhyaWdodEFuc3dlcjpIVE1MQXVkaW9FbGVtZW50LCB3cm9uZ0Fuc3dlcjpIVE1MQXVkaW9FbGVtZW50LCB0aW1lb3ZlcjpIVE1MQXVkaW9FbGVtZW50KTp2b2lkIHtcbiAgICB0aGlzLnJpZ2h0QW5zd2VyQXVkaW8gPSByaWdodEFuc3dlcjtcbiAgICB0aGlzLndyb25nQW5zd2VyQXVkaW8gPSB3cm9uZ0Fuc3dlcjtcbiAgICB0aGlzLnRpbWVvdmVyQXVkaW8gPSB0aW1lb3ZlcjtcbiAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBNb2R1bGVNb2RlbDtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgeyBCdXR0b25zIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zbWFsbENvbXBvbmVudHMvYnV0dG9ucyc7XG5cbmNvbnN0IEFib3V0U3ByaW50R2FtZVBhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ2Fib3V0c3ByaW50JyxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAke0hlYWRlci5yZW5kZXIoKX1cbiAgICA8ZGl2IGNsYXNzID0gJyR7dGhpcy5jbGFzc25hbWV9LWNvbnRlaW5lcic+XG4gICAgICA8aDIgY2xhc3M9J3NwcmludF9fdGl0bGUnPtCh0L/RgNC40L3RgjwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwic3ByaW50X19ydWxlc1wiPlxuICAgICAgICA8cCBjbGFzcz1cInNwcmludF9fdGV4dFwiPtCY0LPRgNCwINCh0L/RgNC40L3RgiDQv9C+0LzQvtC20LXRgiDRgtC10LHQtSDQv9GA0L7QstC10YDQuNGC0Ywg0LrQsNC6INGF0L7RgNC+0YjQviDRgtGLINC30L3QsNC10YjRjCDRgdC70L7QstCwLjxicj5cbiAgICAgICAg0JjQs9GA0LAg0LTQu9C40YLRgdGPIDEg0LzQuNC90YPRgtGDINC40LvQuCDQv9C+0LrQsCDQvdC1INC30LDQutC+0L3Rh9Cw0YLRjNGB0Y8g0YHQu9C+0LLQsC48YnI+XG4gICAgICAgINCn0YLQvtCx0Ysg0LTQsNGC0Ywg0L7RgtCy0LXRgiwg0LrQu9C40LrQsNC5INC/0L4g0L3QtdC80YMg0LzRi9GI0LrQvtC5INC40LvQuCDQvdCw0LbQuNC80LDQuSDQutC70LDQstC40YjQuC3RgdGC0YDQtdC70LrQuC48L3A+XG4gICAgICAgIDxwPtCS0YvQsdC10YDQuCDRg9GA0L7QstC10L3RjCDRgdC70L7QttC90L7RgdGC0Lg8L3A+XG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJzcHJpbnRfX2xldmVsXCI+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxldmVsMFwiPtCj0YDQvtCy0LXQvdGMIDE8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGV2ZWwxXCI+0KPRgNC+0LLQtdC90YwgMjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsZXZlbDJcIj7Qo9GA0L7QstC10L3RjCAzPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxldmVsM1wiPtCj0YDQvtCy0LXQvdGMIDQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGV2ZWw0XCI+0KPRgNC+0LLQtdC90YwgNTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsZXZlbDVcIj7Qo9GA0L7QstC10L3RjCA2PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAke0J1dHRvbnMuY3JlYXRlKCfQndCw0YfQsNGC0YwnLCAnYnV0dG9uX19zdGFydF9fc3ByaW50JywgZmFsc2UpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgJHtGb290ZXIucmVuZGVyKCl9YDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0U3ByaW50R2FtZVBhZ2U7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IHsgc3RhcnRTY3JpbkF1ZGlvQ2FsbCB9IGZyb20gJy4vc3RhcnQtYXVkaW9jYWxsJztcblxuY29uc3QgQXVkaW9jYWxsR2FtZVBhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ2F1ZGlvY2FsbCcsXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgICAke0hlYWRlci5yZW5kZXIoKX1cbiAgICAgIDxkaXYgY2xhc3MgPSAnYXVkaW8tY29udGFpbmVyICR7dGhpcy5jbGFzc25hbWV9LWNvbnRlaW5lcic+ICR7c3RhcnRTY3JpbkF1ZGlvQ2FsbC5yZW5kZXIoKX08L2Rpdj47XG4gICAgICAke0Zvb3Rlci5yZW5kZXIoKX1cbiAgICAgYDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvY2FsbEdhbWVQYWdlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCB7IGdhbWVBcmVhIH0gZnJvbSAnLi91dGlscy9nYW1lLXJlbmRlcic7XG5cbmNvbnN0IEF1ZGlvY2FsbEdhbWUgPSB7XG4gIGhhc2hlczoge1xuXG4gICAgbWFpbjogJyNtYWluJyxcblxuICB9LFxuXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgICAgPGRpdiBjbGFzcyA9ICdjb250YWluZXInPiBcbiAgICAgICA8ZGl2IGNsYXNzID0gJ2dhbWUnPiAke2dhbWVBcmVhfSA8L2Rpdj5cbiAgICAgICAgIDxidXR0b24gIHR5cGU9XCJidXR0b25cIiAgY2xhc3M9XCJnby1tYWluXCI+PGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMubWFpbn1cIiA+PC9hPtCS0LXRgNC90YPRgtGM0YHRjyDQvdCwINCz0LvQsNCy0L3Rg9GOPC9hPjwvYnV0dG9uPiBcbiAgICAgICAgIFxuICAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9jYWxsR2FtZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuZXhwb3J0IGNvbnN0IHN0YXJ0U2NyaW5BdWRpb0NhbGwgPSB7XG4gIGhhc2hlczoge1xuXG4gICAgYXVkaW9jYWxsR2FtZTogJyNhdWRpb2NhbGxHYW1lJyxcblxuICB9LFxuXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiAvKiBodG1sICovYCBcblxuPGRpdiBjbGFzcz1cImF1ZGlvLWNhbGxcIj4gXG4gIDxwIGNsYXNzPVwiYXVkaW8tY2FsbF9fdGV4dFwiPtCSINC40LPRgNC1INCw0YPQtNC40L7QstGL0LfQvtCyINCy0LDQvNC90YPQttC90L4g0LLRi9Cx0YDQsNGC0Ywg0L/RgNCw0LLQuNC70YzQvdGL0Lkg0L/QtdGA0LXQstC+0LQg0YHQu9C+0LLQsC4gPGJyPlxuXG4gINCn0YLQvtCx0Ysg0LjQs9GA0LDRgtGMINGBINC/0L7QvNC+0YnRjNGOINC60LvQsNCy0LjQsNGC0YPRgNGLLCDQuNGB0L/QvtC70YzQt9GD0Lkg0LrQu9Cw0LLQuNGI0LhcbiAgMSwgMiwgMywgNCwgNSAtINGH0YLQvtCx0Ysg0LTQsNGC0Ywg0L7RgtCy0LXRgixcbiAgc3BhY2UgLSDQtNC70Y8g0LLQvtGB0L/RgNC+0LjQt9Cy0LXQtNC10L3QuNGPINC30LLRg9C60LAsXG4gIGVudGVyIC0g0YfRgtC+0LHRiyDQv9GA0L7Qv9GD0YHRgtC40YLRjCDQstC+0L/RgNC+0YEsXG4gINGB0YLRgNC10LvQutCwLdCy0L/RgNCw0LLQviAtINGH0YLQvtCx0Ysg0L/QtdGA0LXQudGC0Lgg0Log0YHQu9C10LTRg9GO0YnQtdC80YMg0LLQvtC/0YDQvtGB0YMuPGJyPiA8YnI+XG4gINCS0YvQsdC10YDQuCDRg9GA0L7QstC10L3RjCDRgdC70L7QttC90L7RgdGC0Lg6PC9wPlxuICA8YnV0dG9uIGlkPVwibGV2ZWwxXCIgdHlwZT1cImJ1dHRvblwiICBjbGFzcz1cImJ0bi1sZXZlbFwiPjxhIGNsYXNzPVwibWVudV9fbWFpbiBtZW51X19pdGVtX2FjdGl2ZVwiIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbEdhbWV9XCIgPtCj0YDQvtCy0LXQvdGMIDE8L2E+PC9idXR0b24+XG4gXG4gIDxidXR0b24gaWQ9XCJsZXZlbDJcIiB0eXBlPVwiYnV0dG9uXCIgIGNsYXNzPVwiYnRuLWxldmVsXCI+PGEgY2xhc3M9XCIgbGluayBtZW51X19tYWluIG1lbnVfX2l0ZW1fYWN0aXZlXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgMjwvYT48L2J1dHRvbj5cblxuICA8YnV0dG9uIGlkPVwibGV2ZWwzXCIgdHlwZT1cImJ1dHRvblwiICBjbGFzcz1cImJ0bi1sZXZlbFwiPjxhIGNsYXNzPVwibWVudV9fbWFpbiBtZW51X19pdGVtX2FjdGl2ZVwiIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbEdhbWV9XCIgPtCj0YDQvtCy0LXQvdGMIDM8L2E+PC9idXR0b24+XG5cbiAgPGJ1dHRvbiBpZD1cImxldmVsNFwiIHR5cGU9XCJidXR0b25cIiAgY2xhc3M9XCJidG4tbGV2ZWxcIj48YSBjbGFzcz1cIiBsZXZlbG1lbnVfX21haW4gbWVudV9faXRlbV9hY3RpdmVcIiBocmVmPVwiJHt0aGlzLmhhc2hlcy5hdWRpb2NhbGxHYW1lfVwiID7Qo9GA0L7QstC10L3RjCA0PC9hPjwvYnV0dG9uPlxuXG4gIDxidXR0b24gaWQ9XCJsZXZlbDVcIiB0eXBlPVwiYnV0dG9uXCIgIGNsYXNzPVwiYnRuLWxldmVsXCI+PGEgY2xhc3M9XCJtZW51X19tYWluIG1lbnVfX2l0ZW1fYWN0aXZlXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgNTwvYT48L2J1dHRvbj5cblxuICA8YnV0dG9uIGlkPVwibGV2ZWw2XCIgdHlwZT1cImJ1dHRvblwiICBjbGFzcz1cImJ0bi1sZXZlbFwiPjxhIGNsYXNzPVwibWVudV9fbWFpbiBtZW51X19pdGVtX2FjdGl2ZVwiIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbEdhbWV9XCIgPtCj0YDQvtCy0LXQvdGMIDY8L2E+PC9idXR0b24+XG48L2Rpdj5cbmA7XG4gIH0sXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5cclxuaW1wb3J0IHsgYXBpUGF0aCB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGktcGF0aCc7XHJcbmltcG9ydCB7IHByaW50QnRuU3RyaW5nLCB3b3JkT2JqIH0gZnJvbSAnLi9zdXBwb3J0aW5nLWZ1bmMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVBcmVhID0gYCBcclxuIDxkaXYgY2xhc3M9XCJhdWRpby1jb250YWluZXItZ2FtZVwiPiBcclxuICAgIDxkaXYgY2xhc3M9XCJidG4tc291bmRcIj48ZGl2IGNsYXNzPVwic291bmQtd3JhcHBlclwiPiBcclxuICAgIDxhdWRpbyBjbGFzcz1cImF1ZGlvXCIgc3JjPVwiJHthcGlQYXRoICsgd29yZE9iai5hdWRpb31cIiBhdXRvcGxheT48L2F1ZGlvPiA8L2Rpdj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyaWdodC1hbnN3ZXJcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+ICR7cHJpbnRCdG5TdHJpbmcoKX08L2Rpdj5cclxuICA8L2Rpdj5cclxuIGA7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cblxuaW1wb3J0IHsgYXBpUGF0aCB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGktcGF0aCc7XG5pbXBvcnQgeyBzb3VuZEF1ZGlvLCB3b3JkT2JqIH0gZnJvbSAnLi9zdXBwb3J0aW5nLWZ1bmMnO1xuaW1wb3J0IGF1ZGlvUGF0aFdyb25nIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9hdWRpby93cm9uZy1hbnN3ZXIubXAzJztcbmltcG9ydCBhdWRpb1BhdGhSaWdodCBmcm9tICcuLi8uLi8uLi9hc3NldHMvYXVkaW8vcmlnaHQtYW5zd2VyLm1wMyc7XG5pbXBvcnQgeyBJR3JvdXBQYWdlT2JqIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uL2Z1bmN0aW9uYWwvc3RvcmFnZSc7XG5cbmxldCByb3VuZCA9IDA7XG5sZXQgc2NvcmUgPSAwO1xubGV0IGFycmF5V3JvbmdXb3Jkczogc3RyaW5nW10gPSBbXTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJykgPT09IG51bGwpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FycmF5V3JvbmdXb3JkcycsIEpTT04uc3RyaW5naWZ5KGFycmF5V3JvbmdXb3JkcykpO1xufVxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpID09PSBudWxsKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZScsIEpTT04uc3RyaW5naWZ5KHNjb3JlKSk7XG59XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvdW5kJykgPT09IG51bGwpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JvdW5kJywgSlNPTi5zdHJpbmdpZnkocm91bmQpKTtcbn1cblxuY2xhc3MgTGlzdGVuZXJBdWRpb0NhbGwge1xuICBvcGVuKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXNvdW5kJykpIHtcbiAgICAgICAgc291bmRBdWRpbygoYXBpUGF0aCArIHdvcmRPYmouYXVkaW8pKTtcbiAgICAgIH1cblxuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdHJhbnNsYXRpb24nKSkge1xuICAgICAgICBjb25zdCByaWdodEFuc3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1hbnN3ZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgcm91bmQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvdW5kJykpICsgMTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JvdW5kJywgcm91bmQudG9TdHJpbmcoKSk7XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSB3b3JkT2JqLndvcmRUcmFuc2xhdGUpIHtcbiAgICAgICAgICBzY29yZSA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmUnKSkgKyAxO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZScsIHNjb3JlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIHNvdW5kQXVkaW8oKGF1ZGlvUGF0aFJpZ2h0KSk7XG4gICAgICAgICAgKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKCdidG4tdHJhbnNsYXRpb24tcmlnaHQnKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZCgnYnRuLXRyYW5zbGF0aW9uLXdyb25nJyk7XG4gICAgICAgICAgYXJyYXlXcm9uZ1dvcmRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJykhKTtcbiAgICAgICAgICByaWdodEFuc3dlci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImFuc3dlclwiPjxpbWcgY2xhc3M9XCJhbnN3ZXItaW1nXCIgc3JjPVwiJHthcGlQYXRoICsgd29yZE9iai5pbWFnZX1cIiBhbHQ9XCLQv9GA0LDQstC40LvRjNC90YvQuSDQvtGC0LLQtdGCXCI+PGJyPiR7d29yZE9iai53b3JkfSDigJQgJHt3b3JkT2JqLndvcmRUcmFuc2xhdGV9IDwvZGl2PmA7XG4gICAgICAgICAgYXJyYXlXcm9uZ1dvcmRzLnB1c2god29yZE9iai53b3JkKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlXcm9uZ1dvcmRzKSk7XG4gICAgICAgICAgc291bmRBdWRpbygoYXVkaW9QYXRoV3JvbmcpKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIDIwMDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygncmVzdGFydCcpKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tbGV2ZWwnKSkge1xuICAgICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZCA9PT0gJ2xldmVsMScpIHtcbiAgICAgICAgICBzdG9yYWdlLmxldmVsID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZCA9PT0gJ2xldmVsMicpIHtcbiAgICAgICAgICBzdG9yYWdlLmxldmVsID0gMjtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGV2ZWwnLCAnMicpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UubGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAnbGV2ZWwzJykge1xuICAgICAgICAgIHN0b3JhZ2UubGV2ZWwgPSAzO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAnbGV2ZWw0Jykge1xuICAgICAgICAgIHN0b3JhZ2UubGV2ZWwgPSA0O1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAnbGV2ZWw1Jykge1xuICAgICAgICAgIHN0b3JhZ2UubGV2ZWwgPSA1O1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAnbGV2ZWw2Jykge1xuICAgICAgICAgIHN0b3JhZ2UubGV2ZWwgPSA2O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgbGlzdGVuZXJBdWRpb0NhbGwgPSBuZXcgTGlzdGVuZXJBdWRpb0NhbGwoKTtcbmV4cG9ydCBkZWZhdWx0IGxpc3RlbmVyQXVkaW9DYWxsO1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tc2hhZG93ICovXG5cbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi9mdW5jdGlvbmFsL3N0b3JhZ2UnO1xuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICcuLi8uLi8uLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyBhcGlQYXRoIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS1wYXRoJztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xuXG4vLyDQstGL0LHQvtGAINGD0YDQvtCy0L3RjyDQtNC70Y8g0LjQs9GA0Ysg0Lgg0YHRgtGA0LDQvdC40YbRi1xubGV0IGdyb3VwID0gMDtcbmxldCBwYWdlID0gMDtcbmxldCBhcnJheWxldmVsOiBudW1iZXJbXSA9IFtdO1xuZnVuY3Rpb24gbGV2ZWxHYW1lKCk6IHZvaWQge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xldmVsJykpIHtcbiAgICBncm91cCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGV2ZWwnKSkgLSAxO1xuICAgIHBhZ2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMzAgLSAwICsgMSkpICsgMDtcbiAgICBhcnJheWxldmVsID0gW2dyb3VwLCBwYWdlXTtcbiAgfVxufVxubGV2ZWxHYW1lKCk7XG5cbi8vINC60L7QvdGB0YLQsNC90LAg0LrQvtGC0L7RgNCw0Y8g0L/QvtC70YPRh9Cw0LXRgiDRgSDRgdC10YDQstC10YDQsCDQvNCw0YHRgdC40LIg0YHQu9C+0LJcbmNvbnN0IGFwaUdldFdvcmRzID0gYXBpLmdldFdvcmRzKGdyb3VwLCBwYWdlKVxuICAudGhlbigodmFsdWUpID0+IHtcbiAgICBzdG9yYWdlLndvcmRzID0gdmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dvcmRzJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH0pO1xuLy8g0L/QvtC70YPRh9Cw0LXQvCDQvNCw0YHRgdC40LIg0L/RgNC10LLQvtC00L7QslxuZnVuY3Rpb24gZ2V0V29yZHNNYXAoKTogc3RyaW5nW10ge1xuICBhcGlHZXRXb3JkcztcbiAgY29uc3Qgd29yZHMgPSBzdG9yYWdlLndvcmRzIS5tYXAoKGl0ZW0pID0+IGl0ZW0ud29yZFRyYW5zbGF0ZSk7XG4gIHJldHVybiB3b3Jkcztcbn1cblxubGV0IHdvcmRzU3RyaW5nID0gZ2V0V29yZHNNYXAoKTtcblxuLy8g0YTQuNC70YzRgtGA0YPQtdC8INC40LfQsdCw0LLQu9GP0Y/RgdGMINC+0YIg0LTRg9Cx0LvQtdC5XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vUmVwZWF0JykpIHtcbiAgaWYgKChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub1JlcGVhdCcpISkgYXMgc3RyaW5nW10pLmxlbmd0aCA+IDApIHtcbiAgICB3b3Jkc1N0cmluZyA9IHdvcmRzU3RyaW5nLmZpbHRlcigoaXRlbSkgPT4gIShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub1JlcGVhdCcpISkgYXMgc3RyaW5nW10pLmluY2x1ZGVzKGl0ZW0pKTtcbiAgfVxufVxuLy8g0L/QtdGA0LXQvNC10YjQuNCy0LDQtdC8INC80LDRgdGB0LjQsiDQv9GA0LXQstC+0LTQvtCyXG5mdW5jdGlvbiBzaHVmZmxlKGFycmF5OnN0cmluZ1tdKSB7XG4gIGFycmF5LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG59XG5zaHVmZmxlKHdvcmRzU3RyaW5nKTtcbi8vINGB0L7Qt9C00LDQtdC8INC80LDRgdGB0Lgg0LIg0LrQvtGC0YDQvtC8INCx0YPQtNC10YIg0YLQvtGM0LrQviA2INGB0LvQvtCyINC00LvRjyDQuNCz0YDRi1xubGV0IGFycmF5U2l4V29yZHM6c3RyaW5nIFtdID0gW107XG5hcnJheVNpeFdvcmRzID0gd29yZHNTdHJpbmcuc2xpY2UoMCwgNik7XG5cbi8vINCy0YvQsdC40YDQsNC10Lwg0YHQu9GD0YfQsNC50L3QvtC1INGB0LvQvtCy0L4g0LjQtyA2LCDQutC+0YLQvtGA0L7QtSDQsdGD0LTQtdC8INGD0LPQsNC00YvQstCw0YLRjFxuY29uc3Qgd29yZFJpZ2h0ID0gYXJyYXlTaXhXb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheVNpeFdvcmRzLmxlbmd0aCldO1xuXG4vLyDQv9C+0LvRg9GH0LDQtdC8INC00LXQu9Cw0LXQvCDQvtCx0YrQtdC60YIg0LIg0LrQvtGC0L7RgNGL0Lkg0YHQvtGF0YDQsNC90LjQvCDQstGL0LHRgNCw0L3QvdC+0LUg0YHQu9C+0LLQviDRgdC+INCy0YHQtdC80Lgg0LTQsNC90L3Ri9C80LhcbmxldCB3b3JkT2JqIDogSVdvcmQgPSB7XG4gIGlkOiAnJywgZ3JvdXA6IDAsIHBhZ2U6IDAsIHdvcmQ6ICcnLCBpbWFnZTogJycsIGF1ZGlvOiAnJywgYXVkaW9NZWFuaW5nOiAnJywgYXVkaW9FeGFtcGxlOiAnJywgdGV4dE1lYW5pbmc6ICcnLCB0ZXh0RXhhbXBsZTogJycsIHRyYW5zY3JpcHRpb246ICcnLCB3b3JkVHJhbnNsYXRlOiAnJywgdGV4dE1lYW5pbmdUcmFuc2xhdGU6ICcnLCB0ZXh0RXhhbXBsZVRyYW5zbGF0ZTogJycsXG59O1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IHN0b3JhZ2Uud29yZHMhLmxlbmd0aDsgaSsrKSB7XG4gIGlmIChzdG9yYWdlLndvcmRzIVtpXS53b3JkVHJhbnNsYXRlID09PSB3b3JkUmlnaHQpIHtcbiAgICB3b3JkT2JqID0gc3RvcmFnZS53b3JkcyFbaV07XG4gIH1cbn1cblxuLy8g0LjQt9Cx0LDQstC70Y/QtdC80YHRjyDQvtGCINC00YPQsdC70LXQuSDQsiDQvNCw0YHRgdC40LLQtSDQv9GA0LXQstC+0LTQvtCyINC/0YDQvtC+0LvQttC10L3QuNC1XG5cbmxldCBub1JlcGVhdDogc3RyaW5nW10gPSBbXTtcbm5vUmVwZWF0LnB1c2god29yZE9iai53b3JkVHJhbnNsYXRlKTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm9SZXBlYXQnKSkge1xuICBub1JlcGVhdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vUmVwZWF0JykhKTtcbiAgbm9SZXBlYXQucHVzaCh3b3JkT2JqLndvcmRUcmFuc2xhdGUpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm9SZXBlYXQnLCBKU09OLnN0cmluZ2lmeShub1JlcGVhdCkpO1xufVxuXG4vLyDRhNGD0L3QutGG0LjRjyDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8g0LDRg9C00LjQviDRgSDQv9GD0YLQtdC8INC40Lcg0L3QsNGI0LXQs9C+INC+0LHQtdC60YLQsC3RgdC70L7QstC+XG5mdW5jdGlvbiBzb3VuZEF1ZGlvKHBhdGg6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBhdWRpb2QgPSBuZXcgQXVkaW8oKTtcbiAgYXVkaW9kLnNyYyA9IGAke3BhdGh9YDtcbiAgYXVkaW9kLmF1dG9wbGF5ID0gdHJ1ZTtcbn1cblxuLy8g0YDQuNGB0YPQtdC8INC60L3QvtC/0LrQuCDRgSDQv9C10YDQtdCy0L7QtNCw0LzQuFxuZnVuY3Rpb24gcHJpbnRCdG5TdHJpbmcoKTogc3RyaW5nIHtcbiAgbGV0IGEgPSAnJztcbiAgbGV0IGNvbnRhaW5lckJ0biA9ICcgJztcbiAgaWYgKE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm91bmQnKSkgPCAyMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlTaXhXb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgYSA9IGFycmF5U2l4V29yZHNbaV07XG4gICAgICBjb250YWluZXJCdG4gKz0gYDxidXR0b24gIHR5cGU9XCJidXR0b25cIiBpZD1cIiR7YX1cIiBjbGFzcz1cImJ0bi10cmFuc2xhdGlvblwiPiR7YX08L2J1dHRvbj4gYDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgd29yZE9iai5hdWRpbyA9ICcnO1xuICAgIGxldCBhID0gJyc7XG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FycmF5V3JvbmdXb3JkcycpISkubGVuZ3RoID4gMCkge1xuICAgICAgYSA9IGAgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QoNC10LrQvtC80LXQvdC00YPQtdC8INCy0YvRg9GH0LjRgtGMOiZuYnNwJHsoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJykhKSBhcyBzdHJpbmdbXSkuam9pbignLFxcbicpfTwvcD4gYDtcbiAgICB9IGVsc2Uge1xuICAgICAgYSA9ICcgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QktGLINC90LjRgNCw0LfRgyDQvdC1INC+0YjQuNCx0LvQuNGB0YwhPC9wPiAnO1xuICAgIH1cbiAgICBjb250YWluZXJCdG4gKz0gYFxuICA8ZGl2IGNsYXNzPVwiZ2FtZS1vdmVyXCI+XG4gICAgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QktGLINC/0YDQvtGI0LvQuCDQuNCz0YDRgyE8L3A+XG4gICAgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QktCw0Ygg0YDQtdC30YPQu9GM0YLQsNGCOiAmbmJzcCAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpfTwvcD5cbiAgICAke2F9XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJyZXN0YXJ0XCI+0J3QsNGH0LDRgtGMINC30LDQvdC+0LLQvjwvYnV0dG9uPlxuICA8L2Rpdj4gYDtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXJyYXlXcm9uZ1dvcmRzJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3JvdW5kJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Njb3JlJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnRhaW5lckJ0bjtcbn1cblxuZXhwb3J0IHtcbiAgc291bmRBdWRpbyxcbiAgcHJpbnRCdG5TdHJpbmcsIHdvcmRPYmosXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcblxuaW1wb3J0IHBob25lIGZyb20gJy4uL2Fzc2V0cy9waG9uZS5zdmcnO1xuaW1wb3J0IGRpY3Rpb25hcnkgZnJvbSAnLi4vYXNzZXRzL2RpY3Rpb25hcnkuc3ZnJztcbmltcG9ydCBwbGF5IGZyb20gJy4uL2Fzc2V0cy9wbGF5LnN2Zyc7XG5pbXBvcnQgYWNzZXNzIGZyb20gJy4uL2Fzc2V0cy9hY3Nlc3Muc3ZnJztcblxuY29uc3QgTWFpblBhZ2UgPSB7XG4gIGlkOiAnbWFpbicsXG4gIHJlbmRlcjogKCk6c3RyaW5nID0+IGBcbiAgICAgICAke0hlYWRlci5yZW5kZXIoKX1cbiAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fcGFnZVwiPlxuICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+VGhlIFdvcmxkIGlzIFlvdXJzIHdpdGggUlNMYW5nITwvaDI+XG4gICAgICAgICAgIDxwPlJTTGFuZyDigJQg0Y3RgtC+INGN0YTRhNC10LrRgtC40LLQvdGL0Lkg0YHQtdGA0LLQuNGBINC00LvRjyDRg9Cy0LvQtdC60LDRgtC10LvRjNC90L7QuSDQv9GA0LDQutGC0LjQutC4INCw0L3Qs9C70LjQudGB0LrQvtCz0L4g0Y/Qt9GL0LrQsC4g0J/RgNC40YHQvtC10LTQuNC90Y/QudGB0Y8hXG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19wYWdlX19hZHZhbnRhZ2VzXCI+XG4gICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+0J/QvtGH0LXQvNGDIFJTTGFuZz88L2gyPlxuICAgICAgICAgICA8dWwgY2xhc3M9XCJhZHZhbnRhZ2VzX19saXN0XCI+XG4gICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbVwiPlxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2Fjc2Vzc31cIj5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0JHQtdGB0L/Qu9Cw0YLQvdGL0Lkg0LTQvtGB0YLRg9C/PC9oMz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPtCd0LDRiNCwINC80LjRgdGB0LjRjyDigJQg0YHQtNC10LvQsNGC0Ywg0L7QsdGD0YfQtdC90LjRjyDRj9C30YvQutCw0Lwg0LTQvtGB0YLRg9C/0L3Ri9C8INC00LvRjyDQutCw0LbQtNC+0LPQvjwvcD5cbiAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtkaWN0aW9uYXJ5fVwiPlxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7QodC70L7QstCw0YDRjDwvaDM+XG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RleHRcIj7QqdC10LvQutC90LjRgtC1INC70Y7QsdC+0LUg0YHQu9C+0LLQviwg0YfRgtC+0LHRiyDRg9Cy0LjQtNC10YLRjCDQvtC/0YDQtdC00LXQu9C10L3QuNC1INCyINC40YHRgtC+0YfQvdC40LrQsNGFLCDQuCDRgdC+0YXRgNCw0L3QuNGC0LUg0LXQs9C+INCyINGB0LLQvtC10Lwg0YHQv9C40YHQutC1INC60LDRgNGC0L7Rh9C10Lo8L3A+XG4gICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGxheX1cIj5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0JjQs9GA0LDQuSwg0YfRgtC+0LHRiyDRg9GH0LjRgtGM0YHRjzwvaDM+XG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RleHRcIj7QmNCz0YDRiyDQstC60LvRjtGH0LDRjtGCINCQ0YPQtNC40L7QstGL0LfQvtCyLNCh0L/RgNC40L3RgiDQuCDQvNC90L7Qs9C+0LUg0LTRgNGD0LPQvtC1Li4uPC9wPlxuICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbVwiPlxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3Bob25lfVwiPlxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7Qo9GH0LjRgtC10YHRjCDQvdCwINGF0L7QtNGDPC9oMz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPlJTTGFuZyDQtNC+0YHRgtGD0L/QvdCwINC00LvRjyDQstC10LEg0Lgg0LzQvtCx0LjQu9GM0L3Ri9GFINGD0YHRgtGA0L7QudGB0YLQsi4g0KPRh9C40YLQtdGB0Ywg0LjQtyDQu9GO0LHQvtCz0L4g0LzQtdGB0YLQsCE8L3A+XG4gICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgPC91bD5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgICAgICR7Rm9vdGVyLnJlbmRlcigpfVxuICAgIGAsXG59O1xuXG4vLyBleHBvcnQgeyBNYWluUGFnZSB9O1xuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2U7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgaW5pdFNwcmludE1WQyB9IGZyb20gJy4vaW5pdFNwcmludE1WQyc7XG5pbXBvcnQgeyBCdXR0b25zIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zbWFsbENvbXBvbmVudHMvYnV0dG9ucyc7XG5cbmltcG9ydCBwYXJyb3RzIGZyb20gJy4uLy4uL2Fzc2V0cy9wYXJyb3RzLmpwZyc7XG5pbXBvcnQgYXJyb3dMZWZ0IGZyb20gJy4uLy4uL2Fzc2V0cy9hcnJvdy1sZWZ0LnBuZyc7XG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tICcuLi8uLi9hc3NldHMvYXJyb3ctcmlnaHQucG5nJztcblxuaW1wb3J0IHJpZ2h0QW5zd2VyQXVkaW8gZnJvbSAnLi4vLi4vYXNzZXRzL2F1ZGlvL3JpZ2h0LWFuc3dlci5tcDMnO1xuaW1wb3J0IHdyb25nQW5zd2VyQXVkaW8gZnJvbSAnLi4vLi4vYXNzZXRzL2F1ZGlvL3dyb25nLWFuc3dlci5tcDMnO1xuaW1wb3J0IHRpbWVvdmVyQXVkaW8gZnJvbSAnLi4vLi4vYXNzZXRzL2F1ZGlvL3RpbWUtb3Zlci5tcDMnO1xuXG5jb25zdCBTcHJpbnRHYW1lUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAnc3ByaW50JyxcbiAgbGV2ZWw6IDAsXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgPGRpdiBjbGFzcyA9ICcke3RoaXMuY2xhc3NuYW1lfS1jb250ZWluZXInPlxuICAgICAgPGRpdiBjbGFzcz1cInNwcmludF9fc2NvcmVcIj4wPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3ByaW50X190aW1lclwiPjYwPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3ByaW50X19maWVsZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRfX3RpdGxlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlX19jb3VudFwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV9fdGV4dFwiPisgMTAg0L7Rh9C60L7QsiDQt9CwINGB0LvQvtCy0L48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZF9fY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X19pbWdcIj48aW1nIHNyYz0nJHtwYXJyb3RzfScgYWx0PVwicGFycm90c1wiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X19xdWVzdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X193b3JkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb25fX3dvcmRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3JkX19zb3VuZFwiPjwvZGl2PlxuICAgICAgICAgICAgPGF1ZGlvIGlkPVwic3ByaW50X19zYXlfX3dvcmRcIiBzcmM9XCJcIj48L2F1ZGlvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbl9fdHJhbnNsYXRpb25cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZF9fYnV0dG9uc1wiPiR7QnV0dG9ucy5jcmVhdGUoJ9Cd0LXQstC10YDQvdC+JywgJ2J1dHRvbl9fc3ByaW50X19mYWxzZScsIGZhbHNlKX0ke0J1dHRvbnMuY3JlYXRlKCfQktC10YDQvdC+JywgJ2J1dHRvbl9fc3ByaW50X190cnVlJywgZmFsc2UpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3ByaW50X19hcnJvd3NcIj5cbiAgICAgICAgPGltZyBzcmM9JyR7YXJyb3dMZWZ0fScgYWx0PVwiYXJyb3dcIj5cbiAgICAgICAgPGltZyBzcmM9JyR7YXJyb3dSaWdodH0nIGFsdD1cImFycm93XCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhdWRpbyBpZD1cImF1ZGlvX19yaWdodFwiIHNyYz1cIiR7cmlnaHRBbnN3ZXJBdWRpb31cIj48L2F1ZGlvPlxuICAgICAgPGF1ZGlvIGlkPVwiYXVkaW9fX3dyb25nXCIgc3JjPVwiJHt3cm9uZ0Fuc3dlckF1ZGlvfVwiPjwvYXVkaW8+XG4gICAgICA8YXVkaW8gaWQ9XCJhdWRpb19fdGltZW92ZXJcIiBzcmM9XCIke3RpbWVvdmVyQXVkaW99XCI+PC9hdWRpbz5cbiAgICA8L2Rpdj5gO1xuICB9LFxuICBpbml0TVZDKCk6dm9pZCB7XG4gICAgaW5pdFNwcmludE1WQygpO1xuICB9LFxuICBzYXZlTGV2ZWwobGV2ZWw6c3RyaW5nKTp2b2lkIHtcbiAgICB0aGlzLmxldmVsID0gK2xldmVsW2xldmVsLmxlbmd0aCAtIDFdO1xuICB9LFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcHJpbnRHYW1lUGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuXG5pbXBvcnQgeyBNb2R1bGVDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vY29udHJvbGxlci9jb250cm9sbGVyU3ByaW50JztcbmltcG9ydCB7IE1vZHVsZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWwvbW9kZWxTcHJpbnQnO1xuaW1wb3J0IHsgTW9kdWxlVmlldyB9IGZyb20gJy4uLy4uL3ZpZXcvdmlld1NwcmludCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3ByaW50TVZDKCk6dm9pZCB7XG4gIGNvbnN0IHZpZXcgPSBuZXcgTW9kdWxlVmlldygpO1xuICBjb25zdCBtb2RlbCA9IG5ldyBNb2R1bGVNb2RlbCgpO1xuICBjb25zdCBjb250cm9sbGVyID0gbmV3IE1vZHVsZUNvbnRyb2xsZXIoKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwcmludC1jb250ZWluZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgdmlldy5pbml0KGNvbnRhaW5lcik7XG4gIG1vZGVsLmluaXQodmlldyk7XG4gIGNvbnRyb2xsZXIuaW5pdChjb250YWluZXIsIG1vZGVsKTtcbn1cbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmNvbnN0IFN0YXRpc3RpY3NQYWdlID0ge1xuICBjbGFzc25hbWU6ICdzdGF0aXN0aWNzJyxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAke0hlYWRlci5yZW5kZXIoKX1cbiAgICA8ZGl2IGNsYXNzID0gJyR7dGhpcy5jbGFzc25hbWV9LWNvbnRlaW5lcic+PC9kaXY+XG4gICAgJHtGb290ZXIucmVuZGVyKCl9YDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpc3RpY3NQYWdlO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcblxuY29uc3QgQWJvdXRUZWFtUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAndGVhbS1wYWdlJyxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAke0hlYWRlci5yZW5kZXIoKX1cbiAgICA8ZGl2IGNsYXNzID0gJyR7dGhpcy5jbGFzc25hbWV9LWNvbnRlaW5lcic+PC9kaXY+XG4gICAgJHtGb290ZXIucmVuZGVyKCl9XG4gICAgYDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0VGVhbVBhZ2U7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCAnLi90ZXh0Ym9vay5zY3NzJztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uL2FwaS9hcGknO1xuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICcuLi8uLi90eXBlcy90eXBlcyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmNvbnN0IFRleHRib29rUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAndGV4dGJvb2snLFxuICB3b3JkbGlzdDogJ3dvcmQtbGlzdCcsXG4gIC8vIHJlbmRlcigpOiBzdHJpbmcge1xuICAvLyAgIGNvbnN0IHZpZXcgPSBgIDxkaXYgY2xhc3M9JHt0aGlzLmNsYXNzbmFtZX0+XG4gIC8vICAgPGRpdiBjbGFzcz1cInRleHRib29rLW5hdmlnYXRpb25cIj5cbiAgLy8gICAgIDxidXR0b24gY2xhc3M9XCJidG4tcm91bmRcIj48L2J1dHRvbj5cbiAgLy8gICAgIDxwIGNsYXNzPVwidW5pdC1uYW1lXCI+0KDQsNC30LTQtdC7IDEgPHNwYW4gY2xhc3M9XCJ1bml0LXBhZ2VcIj7RgdGC0YDQsNC90LjRhtCwIDE8L3NwYW4+PC9wPlxuICAvLyAgIDwvZGl2PlxuICAvLyAgIDx1bCBjbGFzcz0ke3RoaXMud29yZGxpc3R9PlxuICAvLyAgICAke3RoaXMuZ2V0Q2FyZHMoKX1cbiAgLy8gICA8L3VsPlxuICAvLyAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay1mb290ZXJcIj5cbiAgLy8gICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay1wYWdpbmF0aW9uXCI+XG4gIC8vICAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uLWJ0biBidG4tb3JhbmdlXCI+0J/RgNC10LTRi9C00YPRidCw0Y88L2J1dHRvbj5cbiAgLy8gICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2luYXRpb24tYnRuIGJ0bi1vcmFuZ2VcIj7QodC70LXQtNGD0Y7RidCw0Y88L2J1dHRvbj5cbiAgLy8gICAgIDwvZGl2PlxuICAvLyAgIDwvZGl2PlxuICAvLyA8L2Rpdj5gO1xuICAvLyAgIHJldHVybiBgJHtIZWFkZXIucmVuZGVyKCl9JHt2aWV3fSR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIC8vIH0sXG4gIC8vIHJlbmRlcigpOiBzdHJpbmcge1xuICAvLyAgIGNvbnN0IHZpZXcgPSBgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRzXCI+XG4gIC8vICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCIxXCI+0KDQsNC30LTQtdC7IDE8L2Rpdj5cbiAgLy8gICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjJcIj7QoNCw0LfQtNC10LsgMjwvZGl2PlxuICAvLyAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiM1wiPtCg0LDQt9C00LXQuyAzPC9kaXY+XG4gIC8vICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCI0XCI+0KDQsNC30LTQtdC7IDQ8L2Rpdj5cbiAgLy8gICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjVcIj7QoNCw0LfQtNC10LsgNTwvZGl2PlxuICAvLyAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiNlwiPtCg0LDQt9C00LXQuyA2PC9kaXY+XG4gIC8vICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCI3XCI+0KDQsNC30LTQtdC7IFwi0KHQu9C+0LbQvdGL0LUg0YHQu9C+0LLQsFwiPC9kaXY+XG4gIC8vICAgPC9kaXY+YDtcbiAgLy8gICByZXR1cm4gYCR7SGVhZGVyLnJlbmRlcigpfSR7dmlld30ke0Zvb3Rlci5yZW5kZXIoKX1gO1xuICAvLyB9LFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICBjb25zdCB2aWV3ID0gYCA8ZGl2IGNsYXNzPVwidGV4dGJvb2stbmF2aWdhdGlvbiB1bml0LW5hdmlnYXRpb25cIj5cbiAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcm91bmRcIj48L2J1dHRvbj5cbiAgICAgICAgIDxwIGNsYXNzPVwidW5pdC1uYW1lXCI+0KDQsNC30LTQtdC7IDE8L3A+XG4gICAgICAgPC9kaXY+XG4gICAgPHVsIGNsYXNzPVwidW5pdC1wYWdlc1wiPlxuICAke3RoaXMucmVuZGVyUGFnZXMoKX1cbiAgPC91bD5gO1xuICAgIHJldHVybiBgJHtIZWFkZXIucmVuZGVyKCl9JHt2aWV3fSR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIH0sXG5cbiAgcmVuZGVyUGFnZXMoKTogc3RyaW5nIHtcbiAgICBsZXQgcGFnZXMgPSAnJztcbiAgICBjb25zdCBwYWdlc0NvdW50ID0gMzA7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGFnZXNDb3VudDsgaSArPSAxKSB7XG4gICAgICBwYWdlcyArPSBgPGxpIGNsYXNzPVwidW5pdC1wYWdlXCI+UGFnZSAke2l9PC9saT5gO1xuICAgIH1cbiAgICByZXR1cm4gcGFnZXM7XG4gIH0sXG4gIGdldENhcmRzKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgd29yZGxpc3QgfSA9IHRoaXM7XG4gICAgZnVuY3Rpb24gcmVuZGVyQ2FyZHMod29yZHM6IElXb3JkW10pIHtcbiAgICAgIGNvbnN0IHdvcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt3b3JkbGlzdH1gKTtcbiAgICAgIGlmICh3b3JkQ29udGFpbmVyKSB7XG4gICAgICAgIHdvcmRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3dvcmQtaXRlbScpO1xuICAgICAgICBjYXJkLmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cIndvcmQtaW1hZ2VcIiBcbiAgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9yc2xhbmctbGVhcm5pbmctZW5nbGlzaC13b3Jkcy5oZXJva3VhcHAuY29tLyR7d29yZHNbaV0uaW1hZ2V9KVwiPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIndvcmQtZGVzY3JpcHRpb25cIj5cbiAgICA8ZGl2IGNsYXNzPVwid29yZC1wcm9ub3VuY2Ugd29yZC1hdWRpb1wiPlxuICAgIDxwIGNsYXNzPVwid29yZC1uYW1lXCI+JHt3b3Jkc1tpXS53b3JkfSAke3dvcmRzW2ldLnRyYW5zY3JpcHRpb259PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cImF1ZGlvXCI+PGF1ZGlvPjwvYXVkaW8+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLXByb25vdW5jZSB0cmFuc2xhdGlvblwiPiR7d29yZHNbaV0ud29yZFRyYW5zbGF0ZX08L3A+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLWV4YW1wbGVcIj4ke3dvcmRzW2ldLnRleHRNZWFuaW5nfTwvcD5cbiAgICA8cCBjbGFzcz1cIndvcmQtZXhhbXBsZSB0cmFuc2xhdGlvblwiPiR7d29yZHNbaV0udGV4dE1lYW5pbmdUcmFuc2xhdGV9PC9wPlxuICAgIDxwIGNsYXNzPVwid29yZC1leGFtcGxlXCI+JHt3b3Jkc1tpXS50ZXh0RXhhbXBsZX08L3A+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLWV4YW1wbGUgdHJhbnNsYXRpb25cIj4ke3dvcmRzW2ldLnRleHRFeGFtcGxlVHJhbnNsYXRlfTwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3b3JkLW5vdGVkXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLW9yYW5nZSBidG4tZGlmZmljdWx0XCI+0KHQu9C+0LbQvdC+PzwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1vcmFuZ2UgYnRuLWxlYXJuZWRcIj7QmNC30YPRh9C10L3Qvj88L2J1dHRvbj5cbiAgPC9kaXY+YDtcbiAgICAgICAgd29yZENvbnRhaW5lcj8uYXBwZW5kKGNhcmQpO1xuICAgICAgfVxuICAgIH1cbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgYXBpLmdldFdvcmRzKDMsIDUpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZW5kZXJDYXJkcyhyZXMgYXMgSVdvcmRbXSk7XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0Ym9va1BhZ2U7XG4iLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtaW46bnVtYmVyLCBtYXg6bnVtYmVyKTpudW1iZXIge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cbiIsImltcG9ydCB7IFJvdXRlcywgTWVudUl0ZW1zIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IFNwcmludEdhbWVQYWdlIGZyb20gJy4uL3BhZ2VzL3NwcmludC9pbmRleCc7XG5cbmNsYXNzIE1vZHVsZVZpZXcge1xuICBteU1vZHVsZUNvbnRhaW5lciE6SFRNTEVsZW1lbnQ7XG5cbiAgY29udGVudENvbnRhaW5lciE6SFRNTEVsZW1lbnQ7XG5cbiAgcm91dGVzT2JqITpSb3V0ZXM7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50LCByb3V0ZXM6IFJvdXRlcyk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnJvdXRlc09iaiA9IHJvdXRlcztcbiAgfVxuXG4gIHJlbmRlckNvbnRlbnQoaGFzaFBhZ2VOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgbGV0IHJvdXRlTmFtZSA9ICdkZWZhdWx0JztcbiAgICByb3V0ZU5hbWUgPSAoaGFzaFBhZ2VOYW1lLmxlbmd0aCkgPyBoYXNoUGFnZU5hbWUgOiByb3V0ZU5hbWU7XG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLnJvdXRlc09ialtyb3V0ZU5hbWUgYXMga2V5b2YgUm91dGVzXTtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyLmlubmVySFRNTCA9IHJvdXRlLnJlbmRlcigpO1xuICAgIGlmIChoYXNoUGFnZU5hbWUgPT09ICdzcHJpbnQnKSB7IFNwcmludEdhbWVQYWdlLmluaXRNVkMoKTsgfVxuICB9XG5cbiAgaGlnaGxpZ2h0QWN0aXZlTWVudUl0ZW0gPSAob2JqOk1lbnVJdGVtcywgaGFzaE5hbWU6c3RyaW5nKTp2b2lkID0+IHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBmb3IobGV0IGtleSBpbiBvYmope1xuICAgICAgaWYgKG9ialtrZXkgYXMga2V5b2YgTWVudUl0ZW1zXS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnVfX2l0ZW1fYWN0aXZlJykpIHtcbiAgICAgICAgb2JqW2tleSBhcyBrZXlvZiBNZW51SXRlbXNdLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoYXNoTmFtZSkge1xuICAgICAgb2JqW2hhc2hOYW1lIGFzIGtleW9mIE1lbnVJdGVtc10uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLm1haW4uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZHVsZVZpZXc7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IFNwcmludFJlc3VsdCBmcm9tICcuLi9jb21wb25lbnRzL3NwcmludHJlc3VsdHMnO1xuaW1wb3J0IHRydWVJbWcgZnJvbSAnLi4vYXNzZXRzL3RydWUucG5nJztcblxuZXhwb3J0IGNsYXNzIE1vZHVsZVZpZXcge1xuICBteU1vZHVsZUNvbnRhaW5lciE6SFRNTEVsZW1lbnQ7XG5cbiAgY29udGVudENvbnRhaW5lciE6SFRNTEVsZW1lbnQ7XG5cbiAgcm91dGVzT2JqITpSb3V0ZXM7XG5cbiAgc3ByaW50VGltZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwcmludF9fdGltZXInKSBhcyBIVE1MRWxlbWVudDtcblxuICBzcHJpbnRTY29yZTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ByaW50X19zY29yZScpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHNwcmludENvdW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZV9fY291bnQnKSBhcyBIVE1MRWxlbWVudDtcblxuICBzcHJpbnRDb3VudFRleHQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlX190ZXh0JykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgcXVlc3Rpb25Xb3JkOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1ZXN0aW9uX193b3JkJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgcXVlc3Rpb25UcmFuc2xhdGlvbjpIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVzdGlvbl9fdHJhbnNsYXRpb24nKSBhcyBIVE1MRWxlbWVudDtcblxuICBzcHJpbnRDb250ZWluZXI6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ByaW50LWNvbnRlaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuXG4gIGluaXQoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAvLyB0aGlzLnJvdXRlc09iaiA9IHJvdXRlcztcbiAgfVxuXG4gIHJlbmRlcldvcmQod29yZDogc3RyaW5nLCB0cmFuc2xhdGlvbjogc3RyaW5nKTp2b2lkIHtcbiAgICB0aGlzLnF1ZXN0aW9uV29yZC50ZXh0Q29udGVudCA9IHdvcmQ7XG4gICAgdGhpcy5xdWVzdGlvblRyYW5zbGF0aW9uLnRleHRDb250ZW50ID0gdHJhbnNsYXRpb247XG4gIH1cblxuICByZW5kZXJUaW1lcih0aW1lcjpudW1iZXIsIHRpbWVyRWxlbTpIVE1MRWxlbWVudCk6dm9pZCB7XG4gICAgdGltZXJFbGVtLnRleHRDb250ZW50ID0gU3RyaW5nKHRpbWVyKTtcbiAgfVxuXG4gIHJlbmRlclNjb3JlKHNjb3JlOnN0cmluZywgbWF4U2NvcmU/OmJvb2xlYW4pOnZvaWQge1xuICAgIHRoaXMuc3ByaW50U2NvcmUudGV4dENvbnRlbnQgPSBzY29yZTtcbiAgICBpZiAobWF4U2NvcmUpIHtcbiAgICAgIHRoaXMuc3ByaW50Q291bnQuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHt0cnVlSW1nfVwiIGFsdD1cImltZ1wiPmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3ByaW50Q291bnQuaW5uZXJIVE1MICs9IGA8aW1nIHNyYz1cIiR7dHJ1ZUltZ31cIiBhbHQ9XCJpbWdcIj5gO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyU3ByaW50Q291bnQoKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludENvdW50LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgcmV0dXJuVG9PbmVTcHJpbnRDb3VudCgpOnZvaWQge1xuICAgIHRoaXMuc3ByaW50Q291bnQuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHt0cnVlSW1nfVwiIGFsdD1cImltZ1wiPmA7XG4gIH1cblxuICByZW5kZXJDb3VudFRleHQobjpudW1iZXIpOnZvaWQge1xuICAgIHRoaXMuc3ByaW50Q291bnRUZXh0LmlubmVySFRNTCA9IGArICR7bn0g0L7Rh9C60L7QsiDQt9CwINGB0LvQvtCy0L5gO1xuICB9XG5cbiAgcmVuZGVyUmVzdWx0cyhxdWVzdGlvbnM6c3RyaW5nW10sIGFuc3dlcnM6Ym9vbGVhbltdLCByaWdodEFuc3dlcnM6bnVtYmVyLCB3cm9uZ0Fuc3dlcnM6bnVtYmVyLCBzY29yZTpudW1iZXIpOnZvaWQge1xuICAgIHRoaXMuc3ByaW50Q29udGVpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc3ByaW50Q29udGVpbmVyLmlubmVySFRNTCA9IGAke1NwcmludFJlc3VsdC5yZW5kZXIocXVlc3Rpb25zLCBhbnN3ZXJzLCByaWdodEFuc3dlcnMsIHdyb25nQW5zd2Vycywgc2NvcmUpfWA7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgTW9kdWxlVmlldztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=