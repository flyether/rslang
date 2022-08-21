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

/***/ "./src/components/hashes.ts":
/*!**********************************!*\
  !*** ./src/components/hashes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hashes = void 0;
exports.hashes = {
    main: '#main',
    textbook: '#textbook',
    statistics: '#statistics',
    audiocall: '#audiocall',
    aboutsprint: '#aboutsprint',
    sprint: '#sprint',
    team: '#team',
};


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
const hashes_1 = __webpack_require__(/*! ./hashes */ "./src/components/hashes.ts");
const Header = {
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
            <li class="menu__item"><a href="${hashes_1.hashes.main}" class="menu__main menu__item_active">Главная</a></li>
            <li class="menu__item"><a href="${hashes_1.hashes.textbook}" class="menu__textbook">Учебник</a></li>
            <li class="menu__item">
              <a href="${hashes_1.hashes.statistics}" class="menu__statictics menu__item_disable">Статистика</a>
            </li>
            <li class="menu__item"><a href="${hashes_1.hashes.audiocall}" class="menu__audiocall">Аудиовызов</a></li>
            <li class="menu__item"><a href="${hashes_1.hashes.aboutsprint}" class="menu__sprint">Спринт</a></li>
            <li class="menu__item"><a href="${hashes_1.hashes.team}" class="menu__team">О команде</a></li>
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
                <li class="menu__item">
                  <a href="${hashes_1.hashes.main}" class="menu__main menu__item_active">Главная</a></li>
                <li class="menu__item"><a href="${hashes_1.hashes.textbook}" class="menu__textbook">Учебник</a></li>
                <li class="menu__item">
                  <a href="${hashes_1.hashes.statistics}" class="menu__statictics menu__item_disable">Статистика</a>
                </li>
                <li class="menu__item"><a href="${hashes_1.hashes.audiocall}" class="menu__audiocall">Аудиовызов</a></li>
                <li class="menu__item"><a href="${hashes_1.hashes.sprint}" class="menu__sprint">Спринт</a></li>
                <li class="menu__item"><a href="${hashes_1.hashes.team}" class="menu__team">О команде</a></li>
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
        listener_audiocall_1.default.clik();
        listener_audiocall_1.default.keyboard();
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

/***/ "./src/controller/controllerTextbook.ts":
/*!**********************************************!*\
  !*** ./src/controller/controllerTextbook.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextbookController = void 0;
const hashes_1 = __webpack_require__(/*! ../components/hashes */ "./src/components/hashes.ts");
class TextbookController {
    constructor(unitSelector, pageSelector) {
        this.unitSelector = unitSelector;
        this.pageSelector = pageSelector;
    }
    init(unit) {
        this.setEventListeners(unit);
    }
    setEventListeners(unit) {
        document.addEventListener('click', (e) => {
            if (e.target) {
                if (e.target.classList.contains(this.unitSelector)) {
                    window.location.hash = `${hashes_1.hashes.textbook}/${e.target.dataset.unit}`;
                }
                if (e.target.classList.contains(this.pageSelector)) {
                    window.location.hash = `${hashes_1.hashes.textbook}/${unit}/${e.target.dataset.page}`;
                }
                if (e.target.id === 'go-back') {
                    if (+window.location.hash.split('/')[2]) {
                        window.location.hash = `${hashes_1.hashes.textbook}/${unit}`;
                    }
                    else {
                        window.location.hash = `${hashes_1.hashes.textbook}`;
                    }
                }
            }
        });
    }
}
exports.TextbookController = TextbookController;


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
  1, 2, 3, 4, 5  чтобы дать ответ,
  space - для воспроизведения звука.
  <br> <br>
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


/* eslint-disable @typescript-eslint/no-use-before-define */
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
    keyboard() {
        document.addEventListener('keydown', (e) => {
            if (e.key === ' ') {
                (0, supporting_func_1.soundAudio)((api_path_1.apiPath + supporting_func_1.wordObj.audio));
            }
            const dataN = Number(e.key);
            if (e.key === `Numpad ${dataN}` || e.key === `${dataN}`) {
                (document.querySelectorAll(`.btn-translation[data-num="${dataN}"]`)).forEach((elem) => {
                    elem.click();
                });
            }
        });
    }
    clik() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-sound')) {
                (0, supporting_func_1.soundAudio)((api_path_1.apiPath + supporting_func_1.wordObj.audio));
            }
            if (e.target.classList.contains('btn-translation')) {
                round = Number(localStorage.getItem('round')) + 1;
                localStorage.setItem('round', round.toString());
                if (e.target.id === supporting_func_1.wordObj.wordTranslate) {
                    rightAnswerFunc(e.target);
                }
                else {
                    wrongAnswerFunc(e.target);
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
function rightAnswerFunc(el) {
    score = Number(localStorage.getItem('score')) + 1;
    localStorage.setItem('score', score.toString());
    (0, supporting_func_1.soundAudio)((right_answer_mp3_1.default));
    el.classList.add('btn-translation-right');
    setTimeout(() => {
        window.location.reload();
    }, 1200);
}
function wrongAnswerFunc(el) {
    el.classList.add('btn-translation-wrong');
    const rightAnswer = document.querySelector('.right-answer');
    arrayWrongWords = JSON.parse(localStorage.getItem('arrayWrongWords'));
    if (rightAnswer) {
        rightAnswer.innerHTML = `<div class="answer"><img class="answer-img" src="${api_path_1.apiPath + supporting_func_1.wordObj.image}" alt="правильный ответ"><br>${supporting_func_1.wordObj.word} — ${supporting_func_1.wordObj.wordTranslate} </div>`;
        arrayWrongWords.push(supporting_func_1.wordObj.word);
        localStorage.setItem('arrayWrongWords', JSON.stringify(arrayWrongWords));
        (0, supporting_func_1.soundAudio)((wrong_answer_mp3_1.default));
        setTimeout(() => {
            window.location.reload();
        }, 2200);
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
arraySixWords = wordsString.slice(0, 5);
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
    if (Number(localStorage.getItem('round')) < 16) {
        for (let i = 0; i < arraySixWords.length; i++) {
            a = arraySixWords[i];
            containerBtn += `<button data-num="${i + 1}" type="button" id="${a}" class="btn-translation">${a}</button> `;
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
const flyether_jpg_1 = __importDefault(__webpack_require__(/*! ../assets/github-img/flyether.jpg */ "./src/assets/github-img/flyether.jpg"));
const AlenaDoz_jpg_1 = __importDefault(__webpack_require__(/*! ../assets/github-img/AlenaDoz.jpg */ "./src/assets/github-img/AlenaDoz.jpg"));
const darina992_jpg_1 = __importDefault(__webpack_require__(/*! ../assets/github-img/darina992.jpg */ "./src/assets/github-img/darina992.jpg"));
const AboutTeamPage = {
    classname: 'team-page',
    render() {
        return `
    ${header_1.default.render()}
    <div class = '${this.classname}-conteiner'>
      <p class='ourteam__title'>Наша команда</p>
      <div class='ourteam__conteiner'>
        <div class='ourteam'>
          <div class='ourteam__github'>
            <img src='${flyether_jpg_1.default}' alt='foto' class='ourteam__fotos'>
            <a href="https://github.com/flyether" class="github-link">flyether</a>
          </div>
          <span class='ourteam__teamlead'>TeamLead</span>
          <ul class="development__list">
            <li class="development__item">Backend</li>
            <li class="development__item">Авторизация</li>
            <li class="development__item">Мини-игра 'Аудиовызов'</li>
            <li class="development__item">...</li>
          </ul>
        </div>
        <div class='ourteam'>
          <div class='ourteam__github'>
            <img src='${AlenaDoz_jpg_1.default}' alt='foto' class='ourteam__fotos'>
            <a href="https://github.com/AlenaDoz" class="github-link">AlenaDoz</a>
          </div>
          <ul class="development__list">
            <li class="development__item">Электронный учебник</li>
            <li class="development__item">Дизайн</li>
            <li class="development__item">...</li>
            <li class="development__item">...</li>
          </ul>
        </div>
        <div class='ourteam'>
          <div class='ourteam__github'>
            <img src='${darina992_jpg_1.default}' alt='foto' class='ourteam__fotos'>
            <a href="https://github.com/Darina992" class="github-link">Darina992</a>
          </div>
          <ul class="development__list">
            <li class="development__item">Главная страница</li>
            <li class="development__item">Мини-игра 'Спринт'</li>
            <li class="development__item">...</li>
            <li class="development__item">...</li>
          </ul>
        </div>
      </div>
    </div>
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
const hashes_1 = __webpack_require__(/*! ../../components/hashes */ "./src/components/hashes.ts");
const api_1 = __webpack_require__(/*! ../../api/api */ "./src/api/api.ts");
const header_1 = __importDefault(__webpack_require__(/*! ../../components/header */ "./src/components/header.ts"));
const footer_1 = __importDefault(__webpack_require__(/*! ../../components/footer */ "./src/components/footer.ts"));
const controllerTextbook_1 = __webpack_require__(/*! ../../controller/controllerTextbook */ "./src/controller/controllerTextbook.ts");
const TextbookPage = {
    classname: 'textbook',
    wordlist: 'word-list',
    render() {
        const locationHash = window.location.hash.split('/');
        const unit = +locationHash[1];
        const page = +locationHash[2];
        let view = '';
        const minUnit = 1;
        const maxUnit = 7;
        const unitSelector = 'textbook-unit';
        const pageSelector = 'unit-page';
        const controllerTextbook = new controllerTextbook_1.TextbookController(unitSelector, pageSelector);
        if (!unit) {
            view = `<div class="textbook-units">
      <div class="textbook-unit" data-unit="1">Раздел 1</div>
      <div class="textbook-unit" data-unit="2">Раздел 2</div>
      <div class="textbook-unit" data-unit="3">Раздел 3</div>
      <div class="textbook-unit" data-unit="4">Раздел 4</div>
      <div class="textbook-unit" data-unit="5">Раздел 5</div>
      <div class="textbook-unit" data-unit="6">Раздел 6</div>
      <div class="textbook-unit" data-unit="7">Раздел "Сложные слова"</div>
      </div>
      `;
        }
        else if (!page && unit <= maxUnit && unit >= minUnit && typeof unit === 'number') {
            view = `
         <div class="textbook-navigation unit-navigation">
            <button class="btn-round" id="go-back"></button>
            <p class="unit-name">Раздел ${unit}</p>
         </div>
         <ul class="unit-pages">
            ${this.renderPages()}
         </ul>`;
        }
        else {
            view = `<div class=${this.classname}>
      <div class="textbook-navigation">
        <button class="btn-round" id="go-back"></button>
        <p class="unit-name">Раздел ${unit} <span class="unit-page-name">страница ${page}</span></p>
      </div>
      <ul class=${this.wordlist}>
       ${this.getCards(+unit, +page)}
      </ul>
      <div class="textbook-footer">
        <div class="textbook-pagination">
          <button class="pagination-btn btn-orange">Предыдущая</button>
          <a class="textbook-game" href="${hashes_1.hashes.audiocall}">Аудиовызов</a>
          <a class="textbook-game" href="${hashes_1.hashes.aboutsprint}">Спринт</a>
          <button class="pagination-btn btn-orange">Следующая</button>
        </div>
      </div>
    </div>`;
        }
        controllerTextbook.init(unit);
        return `${header_1.default.render()}${view}${footer_1.default.render()}`;
    },
    renderPages() {
        let pages = '';
        const pagesCount = 30;
        for (let i = 1; i <= pagesCount; i += 1) {
            pages += `<li class="unit-page" data-page="${i}">Page ${i}</li>`;
        }
        return pages;
    },
    getCards(unit, page) {
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
            yield api_1.api.getWords(unit - 1, page - 1)
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
        routeName = (hashPageName.length) ? hashPageName.split('/')[0] : routeName;
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

/***/ "./src/assets/github-img/AlenaDoz.jpg":
/*!********************************************!*\
  !*** ./src/assets/github-img/AlenaDoz.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fd17c597f97acc1b740c.jpg";

/***/ }),

/***/ "./src/assets/github-img/darina992.jpg":
/*!*********************************************!*\
  !*** ./src/assets/github-img/darina992.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/326b89c4c33694963c3d.jpg";

/***/ }),

/***/ "./src/assets/github-img/flyether.jpg":
/*!********************************************!*\
  !*** ./src/assets/github-img/flyether.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ea3b77f5557c39067cb7.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7OztVQ3RFN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL3RleHRib29rL3RleHRib29rLnNjc3M/ZTIwZiIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3M/YWFhZiIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvYXBpL2FwaS1wYXRoLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9hcGkvYXBpLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2hhc2hlcy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvc21hbGxDb21wb25lbnRzL2J1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvc3ByaW50cmVzdWx0cy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb250cm9sbGVyL2NvbnRyb2xsZXJTcHJpbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbnRyb2xsZXIvY29udHJvbGxlclRleHRib29rLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9mdW5jdGlvbmFsL2xpc3RlbmVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9mdW5jdGlvbmFsL3Nob3ctdXNlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvZnVuY3Rpb25hbC9zdG9yYWdlLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvbW9kZWwvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL21vZGVsL21vZGVsU3ByaW50LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hYm91dHNwcmludC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hdWRpb2NhbGwvbWFpbi50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL3N0YXJ0LWF1ZGlvY2FsbC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL3V0aWxzL2dhbWUtcmVuZGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hdWRpb2NhbGwvdXRpbHMvbGlzdGVuZXItYXVkaW9jYWxsLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hdWRpb2NhbGwvdXRpbHMvc3VwcG9ydGluZy1mdW5jLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9tYWluLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9zcHJpbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL3NwcmludC9pbml0U3ByaW50TVZDLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9zdGF0aXN0aWNzL2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy90ZWFtLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy90ZXh0Ym9vay9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvdXRpbHMvZnVuYy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvdmlldy92aWV3LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy92aWV3L3ZpZXdTcHJpbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG5cbmNvbnN0IGFwaVBhdGggPSAnaHR0cHM6Ly9yc2xhbmctbGVhcm5pbmctZW5nbGlzaC13b3Jkcy5oZXJva3VhcHAuY29tLyc7XG5jb25zdCB3b3Jkc0VuZHBvaW50ID0gJ3dvcmRzJztcbmNvbnN0IHVzZXJzRW5kcG9pbnQgPSAndXNlcnMnO1xuY29uc3Qgc2lnbkluID0gJ3NpZ25pbic7XG5cbmV4cG9ydCB7XG4gIGFwaVBhdGgsIHdvcmRzRW5kcG9pbnQsIHVzZXJzRW5kcG9pbnQsIHNpZ25Jbixcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1lbHNlLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cblxuaW1wb3J0IHtcbiAgYXBpUGF0aCwgdXNlcnNFbmRwb2ludCwgd29yZHNFbmRwb2ludCwgc2lnbkluLFxufSBmcm9tICcuL2FwaS1wYXRoJztcbmltcG9ydCB7IElVc2VyLCBJV29yZCwgSVVzZXJEYXRhIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuXG5jb25zdCBhcGkgPSB7XG5cbiAgYXN5bmMgY3JlYXRlTmV3VXNlcihuYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPElVc2VyIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3VzZXJzRW5kcG9pbnR9YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2xlbmd0aCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGdldFVzZXIoaWQ6IHN0cmluZyk6IFByb21pc2U8SVVzZXIgfCB1bmRlZmluZWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7dXNlcnNFbmRwb2ludH0vJHtpZH1gLFxuICAgICAgICB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJVXNlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIHVzZXJTaWduSW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8SVVzZXJEYXRhIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3NpZ25Jbn1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgdXNlcicpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBnZXRXb3Jkcyhncm91cDogbnVtYmVyLCBwYWdlOiBudW1iZXIpOiBQcm9taXNlPElXb3JkW10gfCB1bmRlZmluZWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7d29yZHNFbmRwb2ludH0/Z3JvdXA9JHtncm91cH0mcGFnZT0ke3BhZ2V9YCxcbiAgICAgICAgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSVdvcmRbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBnZXQgd29yZHNcIik7XG4gICAgfVxuICB9LFxuICBhc3luYyBnZXRXb3JkKGlkOiBzdHJpbmcpOiBQcm9taXNlPElXb3JkIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3dvcmRzRW5kcG9pbnR9LyR7aWR9YCxcbiAgICAgICAgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSVdvcmQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZ2V0IHdvcmRcIik7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IHsgYXBpIH07XG4iLCJjb25zdCBDb250ZW50ID0ge1xuICByZW5kZXI6IChjdXN0b21DbGFzcyA9ICcnKTpzdHJpbmcgPT4gYDxkaXYgY2xhc3M9XCJjb250ZW50ICR7Y3VzdG9tQ2xhc3N9XCIgaWQ9XCJjb250ZW50XCI+PC9kaXY+YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCJjb25zdCBGb290ZXIgPSB7XG4gIHJlbmRlcjogKGN1c3RvbUNsYXNzID0gJycpOnN0cmluZyA9PiBgPGZvb3RlciBjbGFzcz1cImZvb3RlciAke2N1c3RvbUNsYXNzfVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2l0aHViLWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9mbHlldGhlclwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5mbHlldGhlcjxhPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGFyaW5hOTkyXCIgY2xhc3M9XCJnaXRodWItbGlua1wiPkRhcmluYTk5MjxhPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQWxlbmFEb3pcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+QWxlbmFEb3o8YT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuPiYjMTY5OyAyMDIyPC9zcGFuPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgY2xhc3M9XCJycy1saW5rXCI+PC9hPlxuICAgICAgICAgICAgPC9mb290ZXI+YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImV4cG9ydCBjb25zdCBoYXNoZXMgPSB7XG4gIG1haW46ICcjbWFpbicsXG4gIHRleHRib29rOiAnI3RleHRib29rJyxcbiAgc3RhdGlzdGljczogJyNzdGF0aXN0aWNzJyxcbiAgYXVkaW9jYWxsOiAnI2F1ZGlvY2FsbCcsXG4gIGFib3V0c3ByaW50OiAnI2Fib3V0c3ByaW50JyxcbiAgc3ByaW50OiAnI3NwcmludCcsXG4gIHRlYW06ICcjdGVhbScsXG59O1xuIiwiaW1wb3J0IHNob3dVc2VyIGZyb20gJy4uL2Z1bmN0aW9uYWwvc2hvdy11c2VyJztcbmltcG9ydCB7IGhhc2hlcyB9IGZyb20gJy4vaGFzaGVzJztcblxuY29uc3QgSGVhZGVyID0ge1xuXG4gIHJlbmRlcihjdXN0b21DbGFzcyA9ICcnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJtb2RhbC1yZXN1bHQtd3JhcHBlclwiPlxuICAgIDxkaXYgaWQ9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cIm1vZGFsLXdpbmRvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImJ0bi1jbG9zZVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXIgJHtjdXN0b21DbGFzc31cIiBpZD1cImhlYWRlclwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJoZWFkZXJfX2xvZ29cIj48YSBocmVmPVwiXCI+UlNMYW5nPC9hPjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2F1dGhcIj5cbiAgICAgICAgICAke3Nob3dVc2VyKHRydWUpfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fYXV0aFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5hdiBjbGFzcz1cImhlYWRlcl9fbWVudVwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnVfX2xpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMubWFpbn1cIiBjbGFzcz1cIm1lbnVfX21haW4gbWVudV9faXRlbV9hY3RpdmVcIj7Qk9C70LDQstC90LDRjzwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke2hhc2hlcy50ZXh0Ym9va31cIiBjbGFzcz1cIm1lbnVfX3RleHRib29rXCI+0KPRh9C10LHQvdC40Lo8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7aGFzaGVzLnN0YXRpc3RpY3N9XCIgY2xhc3M9XCJtZW51X19zdGF0aWN0aWNzIG1lbnVfX2l0ZW1fZGlzYWJsZVwiPtCh0YLQsNGC0LjRgdGC0LjQutCwPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMuYXVkaW9jYWxsfVwiIGNsYXNzPVwibWVudV9fYXVkaW9jYWxsXCI+0JDRg9C00LjQvtCy0YvQt9C+0LI8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMuYWJvdXRzcHJpbnR9XCIgY2xhc3M9XCJtZW51X19zcHJpbnRcIj7QodC/0YDQuNC90YI8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMudGVhbX1cIiBjbGFzcz1cIm1lbnVfX3RlYW1cIj7QniDQutC+0LzQsNC90LTQtTwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyLWJ1cmdlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXJnZXItbWVudVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYXV0aFwiPlxuICAgICAgICAgICAgICAke3Nob3dVc2VyKHRydWUpfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2F1dGhcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImhlYWRlcl9fbWVudVwiPlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51X19saXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7aGFzaGVzLm1haW59XCIgY2xhc3M9XCJtZW51X19tYWluIG1lbnVfX2l0ZW1fYWN0aXZlXCI+0JPQu9Cw0LLQvdCw0Y88L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7aGFzaGVzLnRleHRib29rfVwiIGNsYXNzPVwibWVudV9fdGV4dGJvb2tcIj7Qo9GH0LXQsdC90LjQujwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2hhc2hlcy5zdGF0aXN0aWNzfVwiIGNsYXNzPVwibWVudV9fc3RhdGljdGljcyBtZW51X19pdGVtX2Rpc2FibGVcIj7QodGC0LDRgtC40YHRgtC40LrQsDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMuYXVkaW9jYWxsfVwiIGNsYXNzPVwibWVudV9fYXVkaW9jYWxsXCI+0JDRg9C00LjQvtCy0YvQt9C+0LI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7aGFzaGVzLnNwcmludH1cIiBjbGFzcz1cIm1lbnVfX3NwcmludFwiPtCh0L/RgNC40L3RgjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMudGVhbX1cIiBjbGFzcz1cIm1lbnVfX3RlYW1cIj7QniDQutC+0LzQsNC90LTQtTwvYT48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbmV4cG9ydCBjb25zdCBmb3JtTG9naW4gPSBgIDxmb3JtIGNsYXNzPVwiZm9ybS1zaWduaW5cIiBpZD1cImF1dGhcIj4gICAgICAgXG48aDMgY2xhc3M9XCJmb3JtLXNpZ25pbi1oZWFkaW5nXCI+0JLQstC10LTQuNGC0LUg0YHQstC+0Lgg0LTQsNC90L3Ri9C1PC9oMz5cbjxkaXYgY2xhc3M9XCJmb3JtLXNpZ25pbi1ib2R5XCI+XG4gIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cInVzZXItZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwi0JLQsNGIIEVtYWlsXCIgcmVxdWlyZWQgLz5cbiAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1pbmxlbmd0aD1cIjhcIiBpZD1cInVzZXItcGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCIgcmVxdWlyZWQvPiAgICAgIFxuICA8ZGl2IGNsYXNzPVwiZm9ybS1zaWduaW4tYnV0dG9uc1wiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4tb3JhbmdlXCIgIGlkPVwiYnV0dG9uLW5ldy11c2VyXCIgdHlwZSA9XCJidXR0b25cIj4g0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyA8L2J1dHRvbj4gXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1vcmFuZ2VcIiBpZD1cImF1dG9yaXp0aW9uQnRuXCIgdHlwZT1cInN1Ym1pdFwiPtCS0L7QudGC0Lg8L2J1dHRvbj4gIFxuICA8L2Rpdj5cbiAgPC9kaXY+XG48aDQgY2xhc3M9XCJmb3JtLXNpZ25pbi1lcnJvclwiPjwvaDQ+IFxuPC9mb3JtPmA7XG5cbmV4cG9ydCBjb25zdCBmb3JtUmVnaXN0cmF0aW9uID0gYCA8Zm9ybSBjbGFzcz1cImZvcm0tc2lnbmluXCIgaWQ9XCJyZWdcIj4gICAgICAgXG48aDMgY2xhc3M9XCJmb3JtLXNpZ25pbi1oZWFkaW5nXCI+0JLQstC10LTQuNGC0LUg0YHQstC+0Lgg0LTQsNC90L3Ri9C1PC9oMz5cbjxkaXYgY2xhc3M9XCJmb3JtLXNpZ25pbi1ib2R5XCI+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlci1uYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwidXNlci1uYW1lXCIgcGxhY2Vob2xkZXI9XCLQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIgcmVxdWlyZWQ9XCJcIiAvPlxuICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJ1c2VyLWVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgcmVxdWlyZWQgLz5cbiAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1pbmxlbmd0aD1cIjhcIiBpZD1cInVzZXItcGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCIgcmVxdWlyZWQgLz4gIFxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3JhbmdlXCIgaWQ9XCJyZWdpc3RyYXRpb25fYnRuXCIgdHlwZT1cInN1Ym1pdFwiPtCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0Lgg0LLRhdC+0LQ8L2J1dHRvbj4gIFxuPC9kaXY+XG48aDQgY2xhc3M9XCJmb3JtLXJlZy1lcnJvclwiPjwvaDQ+ICBcbjwvZm9ybT5gO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuZXhwb3J0IGNvbnN0IEJ1dHRvbnMgPSB7XG4gIGNyZWF0ZTogKHN0cjpzdHJpbmcsIGNsYXNzTmFtZTpzdHJpbmcsIGRpc2FibGVkID0gZmFsc2UpOnN0cmluZyA9PiBgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiAke2NsYXNzTmFtZX1cIiAke2Rpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnfT4ke3N0cn08L2J1dHRvbj5gLFxufTtcbiIsImltcG9ydCB5ZXNJbWFnZSBmcm9tICcuLi9hc3NldHMveWVzLnBuZyc7XG5pbXBvcnQgTm9JbWFnZSBmcm9tICcuLi9hc3NldHMvbm8ucG5nJztcblxuY29uc3QgU3ByaW50UmVzdWx0cyA9IHtcbiAgcmVuZGVyKHF1ZXN0aW9uczpzdHJpbmdbXSwgYW5zd2Vyczpib29sZWFuW10sIHJpZ2h0QW5zd2VyczpudW1iZXIsIHdyb25nQW5zd2VyczpudW1iZXIsIHNjb3JlOm51bWJlcik6c3RyaW5nIHtcbiAgICBjb25zdCB0YWJsZVRleHRDb250ZW50OnN0cmluZyA9IHRoaXMuY3JlYXRlVGFibGUocXVlc3Rpb25zLCBhbnN3ZXJzKTtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJyZXN1bHQtY29udGVpbmVyXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwic3ByaW50X19yZXN1bHRfX3Njb3JlXCI+0KLQstC+0Lkg0YDQtdC30YPQu9GM0YLQsNGCOiAke3Njb3JlfSDQvtGH0LrQvtCyIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzcHJpbnRfX3Jlc3VsdFwiPtCf0YDQsNCy0LjQu9GM0L3Ri9GFINC+0YLQstC10YLQvtCyOiAke3JpZ2h0QW5zd2Vyc30uINCe0YjQuNCx0L7QujogJHt3cm9uZ0Fuc3dlcnN9LjwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLWNvbnRlaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPtCS0YvRg9GH0LXQvdC90YvQtSDRgdC70L7QstCwOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJzcHJpbnRfX3RhYmxlX19yZXN1bHRcIj4ke3RhYmxlVGV4dENvbnRlbnR9PC90YWJsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwic3ByaW50X19jbG9zZV9fcmVzdWx0XCIgaHJlZj1cIiNtYWluXCI+0JfQsNC60YDRi9GC0Yw8L2E+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICB9LFxuICBjcmVhdGVUYWJsZTogKHF1ZXN0aW9uczpzdHJpbmdbXSwgYW5zd2Vyczpib29sZWFuW10pOnN0cmluZyA9PiB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzcmMgPSBhbnN3ZXJzW2ldID8geWVzSW1hZ2UgOiBOb0ltYWdlO1xuICAgICAgcmVzdWx0ICs9IGA8dHI+PHRkPiR7cXVlc3Rpb25zW2ldfTwvdGQ+PHRkPjxpbWcgc3JjPVwiJHtzcmN9XCIgYWx0PVwieWVzL25vXCI+PC90ZD48L3RyPmA7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcHJpbnRSZXN1bHRzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuXG4vLyBpbXBvcnQgbW9kYWxBdXRob3JpemF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwnO1xuXG5pbXBvcnQgeyBNZW51SXRlbXMgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgU3ByaW50R2FtZVBhZ2UgZnJvbSAnLi4vcGFnZXMvc3ByaW50L2luZGV4JztcbmltcG9ydCBNb2R1bGVNb2RlbCBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XG5pbXBvcnQgbGlzdGVuZXIgZnJvbSAnLi4vZnVuY3Rpb25hbC9saXN0ZW5lcic7XG5pbXBvcnQgbGlzdGVuZXJBdWRpb0NhbGwgZnJvbSAnLi4vcGFnZXMvYXVkaW9jYWxsL3V0aWxzL2xpc3RlbmVyLWF1ZGlvY2FsbCc7XG5cbmNsYXNzIE1vZHVsZUNvbnRyb2xsZXIge1xuICBteU1vZHVsZUNvbnRhaW5lciE6IEhUTUxFbGVtZW50O1xuXG4gIG15TW9kdWxlTW9kZWwhOiBNb2R1bGVNb2RlbDtcblxuICBtZW51TWFpbiAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51VGV4dGJvb2sgITogSFRNTEVsZW1lbnQ7XG5cbiAgbWVudVN0YXRpY3RpY3MgITogSFRNTEVsZW1lbnQ7XG5cbiAgbWVudUF1ZGlvY2FsbCAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51U3ByaW50ICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVUZWFtICE6IEhUTUxFbGVtZW50O1xuXG4gIGJ1dHRvblN0YXJ0U3ByaW50ITogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgc3ByaW50TGV2ZWwgITogSFRNTElucHV0RWxlbWVudDtcblxuICBhdWRpb2NhbGxnYW1lICE6IEhUTUxFbGVtZW50O1xuXG4gIGluaXQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgbW9kZWw6IE1vZHVsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwgPSBtb2RlbDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9KTtcblxuICAgIC8vIG1vZGFsQXV0aG9yaXphdGlvbi5vcGVuKCk7XG4gICAgbGlzdGVuZXIub3BlbigpO1xuICAgIGxpc3RlbmVyQXVkaW9DYWxsLmNsaWsoKTtcbiAgICBsaXN0ZW5lckF1ZGlvQ2FsbC5rZXlib2FyZCgpO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAvLyB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjbWFpbic7XG4gIH1cblxuICB1cGRhdGVTdGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBoYXNoUGFnZU5hbWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbC51cGRhdGVTdGF0ZShoYXNoUGFnZU5hbWUpO1xuICAgIHRoaXMuZmluZE1lbnVFbGVtZW50cyhoYXNoUGFnZU5hbWUpO1xuICAgIHN3aXRjaCAoaGFzaFBhZ2VOYW1lKSB7XG4gICAgICBjYXNlICdhYm91dHNwcmludCc6XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uc0Fib3V0U3ByaW50R2FtZUxpc3RlbmVycygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgZmluZE1lbnVFbGVtZW50cyhoYXNoTmFtZTpzdHJpbmcpOnZvaWQge1xuICAgIHRoaXMubWVudU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbWFpbicpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudVRleHRib29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3RleHRib29rJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51U3RhdGljdGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19zdGF0aWN0aWNzJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51QXVkaW9jYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2F1ZGlvY2FsbCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudVNwcmludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19zcHJpbnQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVUZWFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3RlYW0nKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBvYmo6TWVudUl0ZW1zID0ge1xuICAgICAgbWFpbjogdGhpcy5tZW51TWFpbixcbiAgICAgIHRleHRib29rOiB0aGlzLm1lbnVUZXh0Ym9vayxcbiAgICAgIHN0YXRpc3RpY3M6IHRoaXMubWVudVN0YXRpY3RpY3MsXG4gICAgICBhdWRpb2NhbGw6IHRoaXMubWVudUF1ZGlvY2FsbCxcbiAgICAgIHNwcmludDogdGhpcy5tZW51U3ByaW50LFxuICAgICAgYWJvdXRzcHJpbnQ6IHRoaXMubWVudVNwcmludCxcbiAgICAgIHRlYW06IHRoaXMubWVudVRlYW0sXG4gICAgfTtcbiAgICBpZiAodGhpcy5tZW51TWFpbikge1xuICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLmhpZ2hsaWdodEFjdGl2ZU1lbnVJdGVtKG9iaiwgaGFzaE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJ1dHRvbnNBYm91dFNwcmludEdhbWVMaXN0ZW5lcnMoKTp2b2lkIHtcbiAgICB0aGlzLmJ1dHRvblN0YXJ0U3ByaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fc3RhcnRfX3NwcmludCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMuc3ByaW50TGV2ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ByaW50X19sZXZlbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5idXR0b25TdGFydFNwcmludC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI3NwcmludCc7XG4gICAgICBTcHJpbnRHYW1lUGFnZS5zYXZlTGV2ZWwodGhpcy5zcHJpbnRMZXZlbC52YWx1ZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlQ29udHJvbGxlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBNb2R1bGVNb2RlbCB9IGZyb20gJy4uL21vZGVsL21vZGVsU3ByaW50JztcblxuZXhwb3J0IGNsYXNzIE1vZHVsZUNvbnRyb2xsZXIge1xuICBteU1vZHVsZUNvbnRhaW5lciE6IEhUTUxFbGVtZW50O1xuXG4gIG15TW9kdWxlTW9kZWwhOiBNb2R1bGVNb2RlbDtcblxuICBidXR0b25GYWxzZSE6IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gIGJ1dHRvblRydWUhOiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICBzcHJpbnRUaW1lciE6IEhUTUxFbGVtZW50O1xuXG4gIGJ1dHRvblNheVdvcmQhOkhUTUxFbGVtZW50O1xuXG4gIGluaXQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgbW9kZWw6IE1vZHVsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5maW5kQXVkaW9FbGVtZW50cygpO1xuICAgIHRoaXMuc2V0VGltZXIoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMubXlNb2R1bGVNb2RlbC5jbGVhckludGVydmFsKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCk6dm9pZCB7XG4gICAgdGhpcy5idXR0b25GYWxzZSA9IHRoaXMubXlNb2R1bGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fc3ByaW50X19mYWxzZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMuYnV0dG9uRmFsc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2hlY2tBbnN3ZXIoZmFsc2UpO1xuICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnByZXBlYXJOZXh0V29yZCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5idXR0b25UcnVlID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19zcHJpbnRfX3RydWUnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICB0aGlzLmJ1dHRvblRydWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2hlY2tBbnN3ZXIodHJ1ZSk7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwucHJlcGVhck5leHRXb3JkKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLmNoZWNrQW5zd2VyKGZhbHNlKTtcbiAgICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnByZXBlYXJOZXh0V29yZCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2hlY2tBbnN3ZXIodHJ1ZSk7XG4gICAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5wcmVwZWFyTmV4dFdvcmQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYnV0dG9uU2F5V29yZCA9IHRoaXMubXlNb2R1bGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLndvcmRfX3NvdW5kJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5idXR0b25TYXlXb3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3ByaW50X19zYXlfX3dvcmQnKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnNheVdvcmQoYXVkaW8pO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZEF1ZGlvRWxlbWVudHMoKTp2b2lkIHtcbiAgICBjb25zdCByaWdodEFuc3dlckF1ZGlvID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYXVkaW9fX3JpZ2h0JykgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBjb25zdCB3cm9uZ0Fuc3dlckF1ZGlvID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYXVkaW9fX3dyb25nJykgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBjb25zdCB0aW1lb3ZlckF1ZGlvID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYXVkaW9fX3RpbWVvdmVyJykgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwuZ2V0QXVkaW8ocmlnaHRBbnN3ZXJBdWRpbywgd3JvbmdBbnN3ZXJBdWRpbywgdGltZW92ZXJBdWRpbyk7XG4gIH1cblxuICBzZXRUaW1lcigpOnZvaWQge1xuICAgIHRoaXMuc3ByaW50VGltZXIgPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnRfX3RpbWVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLnNldFRpbWVyKHRoaXMuc3ByaW50VGltZXIpO1xuICB9XG5cbiAgc2VsZWN0VHJ1ZSgpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbC5jaGVja0Fuc3dlcih0cnVlKTtcbiAgfVxuXG4gIHNlbGVjdEZhbHNlKCk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLmNoZWNrQW5zd2VyKGZhbHNlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaGFzaGVzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oYXNoZXMnO1xuXG5leHBvcnQgY2xhc3MgVGV4dGJvb2tDb250cm9sbGVyIHtcbiAgcGFnZVNlbGVjdG9yOiBzdHJpbmc7XG5cbiAgdW5pdFNlbGVjdG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodW5pdFNlbGVjdG9yOiBzdHJpbmcsIHBhZ2VTZWxlY3Rvcjogc3RyaW5nKSB7XG4gICAgdGhpcy51bml0U2VsZWN0b3IgPSB1bml0U2VsZWN0b3I7XG4gICAgdGhpcy5wYWdlU2VsZWN0b3IgPSBwYWdlU2VsZWN0b3I7XG4gIH1cblxuICBpbml0KHVuaXQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnModW5pdCk7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycyh1bml0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQpIHtcbiAgICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMudW5pdFNlbGVjdG9yKSkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYCR7aGFzaGVzLnRleHRib29rfS8keyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuZGF0YXNldC51bml0fWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMucGFnZVNlbGVjdG9yKSkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYCR7aGFzaGVzLnRleHRib29rfS8ke3VuaXR9LyR7KGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5kYXRhc2V0LnBhZ2V9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZCA9PT0gJ2dvLWJhY2snKSB7XG4gICAgICAgICAgaWYgKCt3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnLycpWzJdKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGAke2hhc2hlcy50ZXh0Ym9va30vJHt1bml0fWA7XG4gICAgICAgICAgfSBlbHNlIHsgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgJHtoYXNoZXMudGV4dGJvb2t9YDsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tc2hhZG93ICovXG5cbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2FwaS9hcGknO1xuaW1wb3J0IHsgZm9ybUxvZ2luLCBmb3JtUmVnaXN0cmF0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbCc7XG5pbXBvcnQgc2hvd1VzZXIgZnJvbSAnLi9zaG93LXVzZXInO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmNsYXNzIExpc3RlbmVyIHtcbiAgb3BlbigpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2F1dGhvcml6YXRpb24nKSkge1xuICAgICAgICBjb25zdCBidG5DbG9zZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jbG9zZScpO1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcbiAgICAgICAgY29uc3QgbW9kYWxSZXN1bHRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXJlc3VsdC13cmFwcGVyJyk7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIHdyYXBwZXIhLmlubmVySFRNTCA9IGZvcm1Mb2dpbjtcbiAgICAgICAgbW9kYWxSZXN1bHRXcmFwcGVyIS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgY29uc3QgdXNlckVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1lbWFpbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHVzZXJQYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItcGFzc3dvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBpZiAodXNlckVtYWlsSW5wdXQgJiYgdXNlclBhc3N3b3JkSW5wdXQpIHtcbiAgICAgICAgICBjb25zdCBhdXRoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRoJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgICAgaWYgKGF1dGhGb3JtKSB7XG4gICAgICAgICAgICBhdXRoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZXJyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXNpZ25pbi1lcnJvcicpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICBlcnJGb3JtLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICBjb25zdCB1c2VyRW1haWwgPSB1c2VyRW1haWxJbnB1dCEudmFsdWU7XG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJQYXNzd29yZCA9IHVzZXJQYXNzd29yZElucHV0IS52YWx1ZTtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBhcGkudXNlclNpZ25Jbih1c2VyRW1haWwsIHVzZXJQYXNzd29yZClcbiAgICAgICAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHN0b3JhZ2UudXNlciA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgc2hvd1VzZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgIGVyckZvcm0uaW5uZXJIVE1MID0gJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQvdC1INC90LDQudC00LXQvSwg0L/RgNC+0LLQtdGA0YzRgtC1INGB0LLQvtC4INC00LDQvdC90YvQtSDQuNC70Lgg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNGD0LnRgtC10YHRjCc7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1dHRvbk5ld1VzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLW5ldy11c2VyJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIGlmIChidXR0b25OZXdVc2VyKSB7XG4gICAgICAgICAgYnV0dG9uTmV3VXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChfZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHdyYXBwZXIhLmlubmVySFRNTCA9IGZvcm1SZWdpc3RyYXRpb247XG4gICAgICAgICAgICBjb25zdCB1c2VyRW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWVtYWlsJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJQYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItcGFzc3dvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLW5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHVzZXJOYW1lSW5wdXQgJiYgdXNlckVtYWlsSW5wdXQgJiYgdXNlclBhc3N3b3JkSW5wdXQpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVnaXN0cmF0aW9uRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWcnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgICAgICAgaWYgKHJlZ2lzdHJhdGlvbkZvcm0pIHtcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZXJyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXJlZy1lcnJvcicpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgZXJyRm9ybS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IHVzZXJFbWFpbElucHV0IS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJQYXNzd29yZCA9IHVzZXJQYXNzd29yZElucHV0IS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJOYW1lID0gdXNlck5hbWVJbnB1dCEudmFsdWU7XG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICBhcGkuY3JlYXRlTmV3VXNlcih1c2VyTmFtZSwgdXNlckVtYWlsLCB1c2VyUGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBhcGkudXNlclNpZ25Jbih1c2VyRW1haWwsIHVzZXJQYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnVzZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VXNlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGVyckZvcm0uaW5uZXJIVE1MID0gJ9CS0L7Qt9C80L7QttC90L4g0Y3RgtC+0YIgZS1tYWlsINGD0LbQtSDQt9Cw0L3Rj9GCLCDQv9C+0L/RgNC+0LHRg9C50YLQtSDQtNGA0YPQs9C+0LknO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICAgIG1vZGFsUmVzdWx0V3JhcHBlciEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfTtcbiAgICAgICAgb3ZlcmxheSEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgICAgICAgYnRuQ2xvc2VNb2RhbCEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdleGl0X2J0bicpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XG4gICAgICAgIHN0b3JhZ2UudXNlciA9IHtcbiAgICAgICAgICBtZXNzYWdlOiAnJywgdG9rZW46ICcnLCByZWZyZXNoVG9rZW46ICcnLCB1c2VySWQ6ICcnLCBuYW1lOiAnJyxcbiAgICAgICAgfTtcbiAgICAgICAgc2hvd1VzZXIoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGxpc3RlbmVyID0gbmV3IExpc3RlbmVyKCk7XG5leHBvcnQgZGVmYXVsdCBsaXN0ZW5lcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd1VzZXIocmV0OmJvb2xlYW4pIDpzdHJpbmcgfCB1bmRlZmluZWQge1xuICBsZXQgY2xhc3NOYW1lID0gJ2F1dGhvcml6YXRpb24nO1xuICBsZXQgY29udGV4dCA9ICfQktC+0LnRgtC4JztcbiAgaWYgKHN0b3JhZ2UudXNlcj8udG9rZW4gIT0gJycpIHtcbiAgICBjb250ZXh0ID0gJ9CS0YvQudGC0LgnO1xuICAgIGNsYXNzTmFtZSA9ICdleGl0X2J0bic7XG4gIH1cbiAgY29uc3QgaHRtbCA9IGA8ZGl2IGNsYXNzPVwidXNlci1zaG93XCI+ICR7c3RvcmFnZS51c2VyPy5uYW1lfSA8YnV0dG9uIGNsYXNzPSR7Y2xhc3NOYW1lfT4ke2NvbnRleHR9PC9idXR0b24+IDwvZGl2PmA7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYXV0aCcpIGFzIEhUTUxFbGVtZW50O1xuICBpZiAocmV0KSB7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbiAgaGVhZGVyLmlubmVySFRNTCA9IGh0bWw7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuaW1wb3J0IHsgSVVzZXIsIElVc2VyRGF0YSwgSVdvcmQgfSBmcm9tICd0eXBlcy90eXBlcyc7XG5cbmNsYXNzIFN0b3JhZ2Uge1xuICB1c2VyPzogSVVzZXJEYXRhO1xuXG4gIHdvcmQ/OiBJV29yZDtcblxuICB3b3Jkcz86IElXb3JkW107XG5cbiAgbGV2ZWw/OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcbiAgICAgIHRoaXMudXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSBhcyBzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVzZXIgPSB7XG4gICAgICAgIG1lc3NhZ2U6ICcnLCB0b2tlbjogJycsIHJlZnJlc2hUb2tlbjogJycsIHVzZXJJZDogJycsIG5hbWU6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3b3JkJykpIHtcbiAgICAgIHRoaXMud29yZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dvcmQnKSBhcyBzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndvcmQgPSB7XG4gICAgICAgIGlkOiAnJywgZ3JvdXA6IDAsIHBhZ2U6IDAsIHdvcmQ6ICcnLCBpbWFnZTogJycsIGF1ZGlvOiAnJywgYXVkaW9NZWFuaW5nOiAnJywgYXVkaW9FeGFtcGxlOiAnJywgdGV4dE1lYW5pbmc6ICcnLCB0ZXh0RXhhbXBsZTogJycsIHRyYW5zY3JpcHRpb246ICcnLCB3b3JkVHJhbnNsYXRlOiAnJywgdGV4dE1lYW5pbmdUcmFuc2xhdGU6ICcnLCB0ZXh0RXhhbXBsZVRyYW5zbGF0ZTogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dvcmRzJykpIHtcbiAgICAgIHRoaXMud29yZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3b3JkcycpIGFzIHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud29yZHMgPSBbXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQtbWVtYmVyICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNhc3MnO1xuXG5pbXBvcnQgTW9kdWxlQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvY29udHJvbGxlcic7XG5pbXBvcnQgTW9kdWxlTW9kZWwgZnJvbSAnLi9tb2RlbC9tb2RlbCc7XG5pbXBvcnQgTW9kdWxlVmlldyBmcm9tICcuL3ZpZXcvdmlldyc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMsIFJvdXRlcywgSW5pdGlhbE9iaiB9IGZyb20gJy4vdHlwZXMvdHlwZXMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyJztcblxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vcGFnZXMvbWFpbic7XG5cbmltcG9ydCBUZXh0Ym9va1BhZ2UgZnJvbSAnLi9wYWdlcy90ZXh0Ym9vayc7XG5pbXBvcnQgQWJvdXRUZWFtUGFnZSBmcm9tICcuL3BhZ2VzL3RlYW0nO1xuaW1wb3J0IFNwcmludEdhbWVQYWdlIGZyb20gJy4vcGFnZXMvc3ByaW50L2luZGV4JztcbmltcG9ydCBBYm91dFNwcmludEdhbWVQYWdlIGZyb20gJy4vcGFnZXMvYWJvdXRzcHJpbnQnO1xuaW1wb3J0IEF1ZGlvY2FsbEdhbWVQYWdlIGZyb20gJy4vcGFnZXMvYXVkaW9jYWxsL2luZGV4JztcbmltcG9ydCBTdGF0aXN0aWNzUGFnZSBmcm9tICcuL3BhZ2VzL3N0YXRpc3RpY3MvaW5kZXgnO1xuaW1wb3J0IEF1ZGlvY2FsbEdhbWUgZnJvbSAnLi9wYWdlcy9hdWRpb2NhbGwvbWFpbic7XG5cbmNvbnN0IGNvbXBvbmVudHM6IENvbXBvbmVudHMgPSB7XG4gIGhlYWRlcjogSGVhZGVyLFxuICBjb250ZW50OiBDb250ZW50LFxuICBmb290ZXI6IEZvb3Rlcixcbn07XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0ge1xuICBtYWluOiBNYWluUGFnZSxcbiAgZGVmYXVsdDogTWFpblBhZ2UsXG4gIHRleHRib29rOiBUZXh0Ym9va1BhZ2UsXG4gIHRlYW06IEFib3V0VGVhbVBhZ2UsXG4gIHNwcmludDogU3ByaW50R2FtZVBhZ2UsXG4gIGFib3V0c3ByaW50OiBBYm91dFNwcmludEdhbWVQYWdlLFxuICBhdWRpb2NhbGw6IEF1ZGlvY2FsbEdhbWVQYWdlLFxuICBhdWRpb2NhbGxnYW1lOiBBdWRpb2NhbGxHYW1lLFxuICBzdGF0aXN0aWNzOiBTdGF0aXN0aWNzUGFnZSxcbn07XG5cbmNvbnN0IGluaXRpYWxPYmo6IEluaXRpYWxPYmogPSB7XG4gIGNvbnRhaW5lcjogJ3NwYScsXG4gIHJvdXRlcyxcbiAgY29tcG9uZW50cyxcbn07XG5cbi8qIC0tLS0tIHNwYSBpbml0IG1vZHVsZSAtLS0gKi9cbmNvbnN0IG15U1BBID0gKCgpID0+IHtcbiAgbGV0IHZpZXc6IE1vZHVsZVZpZXc7XG4gIGxldCBtb2RlbDogTW9kdWxlTW9kZWw7XG4gIGxldCBjb250cm9sbGVyOiBNb2R1bGVDb250cm9sbGVyO1xuICByZXR1cm4ge1xuICAgIGluaXQob2JqOiBJbml0aWFsT2JqKSB7XG4gICAgICB0aGlzLnJlbmRlckNvbXBvbmVudHMob2JqLmNvbnRhaW5lciwgb2JqLmNvbXBvbmVudHMpO1xuICAgICAgY29uc3QgY29udGFpbmVyU1BBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLmNvbnRhaW5lcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICB2aWV3ID0gbmV3IE1vZHVsZVZpZXcoKTtcbiAgICAgIG1vZGVsID0gbmV3IE1vZHVsZU1vZGVsKCk7XG4gICAgICBjb250cm9sbGVyID0gbmV3IE1vZHVsZUNvbnRyb2xsZXIoKTtcblxuICAgICAgdmlldy5pbml0KGNvbnRhaW5lclNQQSwgcm91dGVzKTtcbiAgICAgIG1vZGVsLmluaXQodmlldyk7XG4gICAgICBjb250cm9sbGVyLmluaXQoY29udGFpbmVyU1BBLCBtb2RlbCk7XG4gICAgfSxcblxuICAgIHJlbmRlckNvbXBvbmVudHMoY29udGFpbmVyOiBzdHJpbmcsIGNvbXBvbmVudHNPYmo6IENvbXBvbmVudHMpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgY29tcG9uZW50c0xpc3QgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzT2JqKTtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGNvbXBvbmVudHNMaXN0KSB7XG4gICAgICAgIHJvb3QuaW5uZXJIVE1MICs9IGNvbXBvbmVudHNPYmpbaXRlbSBhcyBrZXlvZiBDb21wb25lbnRzXS5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufSkoKTtcblxuLyogLS0tLS0tIGVuZCBhcHAgbW9kdWxlIC0tLS0tICovXG5cbi8qKiAqIC0tLSBpbml0IG1vZHVsZSAtLS0gKiogKi9cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBteVNQQS5pbml0KGluaXRpYWxPYmopO1xufSk7XG4iLCJpbXBvcnQgTW9kZWxWaWV3IGZyb20gJy4uL3ZpZXcvdmlldyc7XG5pbXBvcnQgeyBNZW51SXRlbXMgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5cbmNsYXNzIE1vZHVsZU1vZGVsIHtcbiAgbXlNb2R1bGVWaWV3ITogTW9kZWxWaWV3O1xuXG4gIGluaXQodmlldzogTW9kZWxWaWV3KTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlVmlldyA9IHZpZXc7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShwYWdlTmFtZTpzdHJpbmcpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlckNvbnRlbnQocGFnZU5hbWUpO1xuICB9XG5cbiAgaGlnaGxpZ2h0QWN0aXZlTWVudUl0ZW0ob2JqOiBNZW51SXRlbXMsIGhhc2hOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcuaGlnaGxpZ2h0QWN0aXZlTWVudUl0ZW0ob2JqLCBoYXNoTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlTW9kZWw7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuaW1wb3J0IHsgTW9kdWxlVmlldyB9IGZyb20gJy4uL3ZpZXcvdmlld1NwcmludCc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCB7IGFwaVBhdGggfSBmcm9tICcuLi9hcGkvYXBpLXBhdGgnO1xuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgU3ByaW50R2FtZVBhZ2UgZnJvbSAnLi4vcGFnZXMvc3ByaW50L2luZGV4JztcbmltcG9ydCB7IHJhbmRvbUludGVnZXIgfSBmcm9tICcuLi91dGlscy9mdW5jJztcblxuZXhwb3J0IGNsYXNzIE1vZHVsZU1vZGVsIHtcbiAgbXlNb2R1bGVWaWV3ITogTW9kdWxlVmlldztcblxuICBsZXZlbDogbnVtYmVyID0gU3ByaW50R2FtZVBhZ2UubGV2ZWw7XG5cbiAgcGFnZXMhOiBudW1iZXJbXTtcblxuICBhY3RpdmUyMFdvcmRzICE6IElXb3JkW107XG5cbiAgYWN0aXZlV29yZE51bWJlciA9IDA7XG5cbiAgYWN0aXZlUGFnZU51bWJlciA9IDA7XG5cbiAgcmFuZG9tVHJhbnNsYXRpb25OdW1iZXIgITogbnVtYmVyO1xuXG4gIGF1ZGlvUmlnaHQgITogSFRNTEF1ZGlvRWxlbWVudDtcblxuICB0aW1lciE6bnVtYmVyO1xuXG4gIHRpbWVySWQgITogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0SW50ZXJ2YWw+O1xuXG4gIHNjb3JlID0gMDtcblxuICBzY29yZUZvclJpZ2h0QW5zd2VyID0gMTA7XG5cbiAgbWF4U2NvcmVGb3JSaWdodEFuc3dlciA9IDgwO1xuXG4gIGFtb3VudE9mUmlnaHRBbnN3ZXJzRm9yQmlnZ2VyU2NvcmUgPSAzO1xuXG4gIGFycmF5T2ZRdWVzdGlvbjogc3RyaW5nW10gPSBbXTtcblxuICBhcnJheU9mQW5zd2VyczogYm9vbGVhbltdID0gW107XG5cbiAgYW1vdW50T2ZSaWdodEFuc3dlcnMgPSAwO1xuXG4gIHJpZ2h0QW5zd2VyQXVkaW8gITogSFRNTEF1ZGlvRWxlbWVudDtcblxuICB3cm9uZ0Fuc3dlckF1ZGlvITogSFRNTEF1ZGlvRWxlbWVudDtcblxuICB0aW1lb3ZlckF1ZGlvITpIVE1MQXVkaW9FbGVtZW50O1xuXG4gIGluaXQodmlldzogTW9kdWxlVmlldyk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcgPSB2aWV3O1xuICAgIHRoaXMuZmlsbEFuZFNvcnRQYWdlcygpO1xuICAgIHRoaXMuZ2V0V29yZHNGcm9tQXBpKCk7XG4gIH1cblxuICBzYXlXb3JkKGF1ZGlvOkhUTUxBdWRpb0VsZW1lbnQpOnZvaWQge1xuICAgIGF1ZGlvLnNyYyA9IGAke2FwaVBhdGggKyB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5hY3RpdmVXb3JkTnVtYmVyXS5hdWRpb31gO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgfVxuXG4gIGZpbGxBbmRTb3J0UGFnZXMoKTp2b2lkIHtcbiAgICB0aGlzLnBhZ2VzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICB0aGlzLnBhZ2VzLnB1c2goaSk7XG4gICAgfVxuICAgIHRoaXMucGFnZXMuc29ydCgoKSA9PiAwLjUgLSBNYXRoLnJhbmRvbSgpKTtcbiAgfVxuXG4gIGFzeW5jIGdldFdvcmRzRnJvbUFwaSgpOiBQcm9taXNlPElXb3JkW10gfCB2b2lkPiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldFdvcmRzKHRoaXMubGV2ZWwsIHRoaXMucGFnZXNbdGhpcy5hY3RpdmVQYWdlTnVtYmVyXSkgYXMgSVdvcmRbXTtcbiAgICB0aGlzLmFjdGl2ZTIwV29yZHMgPSBBcnJheS5mcm9tKHJlcyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hY3RpdmUyMFdvcmRzKTtcbiAgICBpZiAodGhpcy5hY3RpdmVQYWdlTnVtYmVyID09PSAwKSB7IHRoaXMucHJlcGVhckZpcnN0V29yZCgpOyB9XG4gIH1cblxuICBwcmVwZWFyRmlyc3RXb3JkKCk6dm9pZCB7XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSB0aGlzLmdlbmVyYXRlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCB7IHdvcmQgfSA9IHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLmFjdGl2ZVdvcmROdW1iZXJdO1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlcldvcmQod29yZCwgdHJhbnNsYXRpb24pO1xuICB9XG5cbiAgcHJlcGVhck5leHRXb3JkKCk6dm9pZCB7XG4gICAgdGhpcy5jaGVja1dvcmRzTnVtYmVycygpO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdGhpcy5nZW5lcmF0ZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgeyB3b3JkIH0gPSB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5hY3RpdmVXb3JkTnVtYmVyXTtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJXb3JkKHdvcmQsIHRyYW5zbGF0aW9uKTtcbiAgICB0aGlzLmFycmF5T2ZRdWVzdGlvbi5wdXNoKHdvcmQpO1xuICB9XG5cbiAgY2hlY2tXb3Jkc051bWJlcnMoKTp2b2lkIHtcbiAgICBpZiAodGhpcy5hY3RpdmVXb3JkTnVtYmVyID09PSAxOSkge1xuICAgICAgdGhpcy5hY3RpdmVQYWdlTnVtYmVyICs9IDE7XG4gICAgICB0aGlzLmFjdGl2ZVdvcmROdW1iZXIgPSAwO1xuICAgICAgdGhpcy5nZXRXb3Jkc0Zyb21BcGkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVXb3JkTnVtYmVyICs9IDE7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVUcmFuc2xhdGlvbigpOnN0cmluZyB7XG4gICAgY29uc3QgbWluID0gKHRoaXMuYWN0aXZlV29yZE51bWJlciA+PSAyKSA/IHRoaXMuYWN0aXZlV29yZE51bWJlciAtIDIgOiAwO1xuICAgIGNvbnN0IG1heCA9ICh0aGlzLmFjdGl2ZVdvcmROdW1iZXIgKyAyIDw9IDE5KSA/IHRoaXMuYWN0aXZlV29yZE51bWJlciArIDIgOiAxOTtcbiAgICB0aGlzLnJhbmRvbVRyYW5zbGF0aW9uTnVtYmVyID0gcmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLnJhbmRvbVRyYW5zbGF0aW9uTnVtYmVyXS53b3JkVHJhbnNsYXRlO1xuICB9XG5cbiAgY2hlY2tBbnN3ZXIoYW5zd2VyOmJvb2xlYW4pOnZvaWQge1xuICAgIGNvbnN0IHRyYW5zbGF0ZTpzdHJpbmcgPSB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5hY3RpdmVXb3JkTnVtYmVyXS53b3JkVHJhbnNsYXRlO1xuICAgIGNvbnN0IHJpZ2h0VHJhbnNsYXRlOnN0cmluZyA9IHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLnJhbmRvbVRyYW5zbGF0aW9uTnVtYmVyXS53b3JkVHJhbnNsYXRlO1xuICAgIGlmICgodHJhbnNsYXRlID09PSByaWdodFRyYW5zbGF0ZSkgPT09IGFuc3dlcikge1xuICAgICAgdGhpcy5yaWdodEFuc3dlckF1ZGlvLnBsYXkoKTtcbiAgICAgIHRoaXMuYXJyYXlPZkFuc3dlcnMucHVzaCh0cnVlKTtcbiAgICAgIHRoaXMuYW5hbHl6ZVRydWVBbnN3ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53cm9uZ0Fuc3dlckF1ZGlvLnBsYXkoKTtcbiAgICAgIHRoaXMuYXJyYXlPZkFuc3dlcnMucHVzaChmYWxzZSk7XG4gICAgICB0aGlzLmFuYWx5emVGYWxzZUFuc3dlcigpO1xuICAgIH1cbiAgfVxuXG4gIHNldFRpbWVyID0gKHRpbWVyRWxlbTogSFRNTEVsZW1lbnQpOnZvaWQgPT4ge1xuICAgIHRoaXMudGltZXIgPSBOdW1iZXIodGltZXJFbGVtLnRleHRDb250ZW50KTtcblxuICAgIGNvbnN0IHRpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRpbWVyIC09IDE7XG4gICAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJUaW1lcih0aGlzLnRpbWVyLCB0aW1lckVsZW0pO1xuICAgICAgaWYgKHRoaXMudGltZXIgPT09IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xuICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGltZXIgPT09IDUpIHtcbiAgICAgICAgdGhpcy50aW1lb3ZlckF1ZGlvLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudGltZXJJZCA9IHNldEludGVydmFsKHRpY2ssIDEwMDApO1xuICB9O1xuXG4gIGNsZWFySW50ZXJ2YWwgPSAoKTp2b2lkID0+IHtcbiAgICBpZiAodGhpcy50aW1lcklkKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvdW50U2NvcmUoKTp2b2lkIHtcbiAgICB0aGlzLnNjb3JlICs9IHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlcjtcbiAgICBpZiAodGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyID09PSB0aGlzLm1heFNjb3JlRm9yUmlnaHRBbnN3ZXIpIHtcbiAgICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlclNjb3JlKFN0cmluZyh0aGlzLnNjb3JlKSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlclNjb3JlKFN0cmluZyh0aGlzLnNjb3JlKSk7XG4gICAgfVxuICB9XG5cbiAgYW5hbHl6ZUZhbHNlQW5zd2VyKCk6dm9pZCB7XG4gICAgdGhpcy5hbW91bnRPZlJpZ2h0QW5zd2VycyA9IDA7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcuY2xlYXJTcHJpbnRDb3VudCgpO1xuICAgIHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciA9IDEwO1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlckNvdW50VGV4dCh0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIpO1xuICB9XG5cbiAgYW5hbHl6ZVRydWVBbnN3ZXIoKTp2b2lkIHtcbiAgICB0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzICs9IDE7XG4gICAgdGhpcy5jb3VudFNjb3JlKCk7XG4gICAgaWYgKHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnMgPT09IHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnNGb3JCaWdnZXJTY29yZSAmJiB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgIT09IHRoaXMubWF4U2NvcmVGb3JSaWdodEFuc3dlcikge1xuICAgICAgdGhpcy5nZXRCaWdnZXJTY29yZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hbW91bnRPZlJpZ2h0QW5zd2VycyA9PT0gKHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnNGb3JCaWdnZXJTY29yZSArIDEpICYmIHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciAhPT0gdGhpcy5tYXhTY29yZUZvclJpZ2h0QW5zd2VyKSB7XG4gICAgICB0aGlzLm15TW9kdWxlVmlldy5yZXR1cm5Ub09uZVNwcmludENvdW50KCk7XG4gICAgICB0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzID0gMTtcbiAgICB9XG4gIH1cblxuICBnZXRCaWdnZXJTY29yZSgpOnZvaWQge1xuICAgIHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciA9ICh0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgPT09IHRoaXMubWF4U2NvcmVGb3JSaWdodEFuc3dlcikgPyB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgOiB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgKj0gMjtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJDb3VudFRleHQodGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyKTtcbiAgfVxuXG4gIHN0b3BHYW1lKCk6dm9pZCB7XG4gICAgbGV0IHJpZ2h0QW5zd2VycyA9IDA7XG4gICAgbGV0IHdyb25nQW5zd2VycyA9IDA7XG4gICAgdGhpcy5hcnJheU9mQW5zd2Vycy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICByaWdodEFuc3dlcnMgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyb25nQW5zd2VycyArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlclJlc3VsdHModGhpcy5hcnJheU9mUXVlc3Rpb24sIHRoaXMuYXJyYXlPZkFuc3dlcnMsIHJpZ2h0QW5zd2Vycywgd3JvbmdBbnN3ZXJzLCB0aGlzLnNjb3JlKTtcbiAgfVxuXG4gIGdldEF1ZGlvKHJpZ2h0QW5zd2VyOkhUTUxBdWRpb0VsZW1lbnQsIHdyb25nQW5zd2VyOkhUTUxBdWRpb0VsZW1lbnQsIHRpbWVvdmVyOkhUTUxBdWRpb0VsZW1lbnQpOnZvaWQge1xuICAgIHRoaXMucmlnaHRBbnN3ZXJBdWRpbyA9IHJpZ2h0QW5zd2VyO1xuICAgIHRoaXMud3JvbmdBbnN3ZXJBdWRpbyA9IHdyb25nQW5zd2VyO1xuICAgIHRoaXMudGltZW92ZXJBdWRpbyA9IHRpbWVvdmVyO1xuICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IE1vZHVsZU1vZGVsO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7IEJ1dHRvbnMgfSBmcm9tICcuLi9jb21wb25lbnRzL3NtYWxsQ29tcG9uZW50cy9idXR0b25zJztcblxuY29uc3QgQWJvdXRTcHJpbnRHYW1lUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAnYWJvdXRzcHJpbnQnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz5cbiAgICAgIDxoMiBjbGFzcz0nc3ByaW50X190aXRsZSc+0KHQv9GA0LjQvdGCPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnRfX3J1bGVzXCI+XG4gICAgICAgIDxwIGNsYXNzPVwic3ByaW50X190ZXh0XCI+0JjQs9GA0LAg0KHQv9GA0LjQvdGCINC/0L7QvNC+0LbQtdGCINGC0LXQsdC1INC/0YDQvtCy0LXRgNC40YLRjCDQutCw0Log0YXQvtGA0L7RiNC+INGC0Ysg0LfQvdCw0LXRiNGMINGB0LvQvtCy0LAuPGJyPlxuICAgICAgICDQmNCz0YDQsCDQtNC70LjRgtGB0Y8gMSDQvNC40L3Rg9GC0YMg0LjQu9C4INC/0L7QutCwINC90LUg0LfQsNC60L7QvdGH0LDRgtGM0YHRjyDRgdC70L7QstCwLjxicj5cbiAgICAgICAg0KfRgtC+0LHRiyDQtNCw0YLRjCDQvtGC0LLQtdGCLCDQutC70LjQutCw0Lkg0L/QviDQvdC10LzRgyDQvNGL0YjQutC+0Lkg0LjQu9C4INC90LDQttC40LzQsNC5INC60LvQsNCy0LjRiNC4LdGB0YLRgNC10LvQutC4LjwvcD5cbiAgICAgICAgPHA+0JLRi9Cx0LXRgNC4INGD0YDQvtCy0LXQvdGMINGB0LvQvtC20L3QvtGB0YLQuDwvcD5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cInNwcmludF9fbGV2ZWxcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGV2ZWwwXCI+0KPRgNC+0LLQtdC90YwgMTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsZXZlbDFcIj7Qo9GA0L7QstC10L3RjCAyPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxldmVsMlwiPtCj0YDQvtCy0LXQvdGMIDM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGV2ZWwzXCI+0KPRgNC+0LLQtdC90YwgNDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsZXZlbDRcIj7Qo9GA0L7QstC10L3RjCA1PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxldmVsNVwiPtCj0YDQvtCy0LXQvdGMIDY8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICR7QnV0dG9ucy5jcmVhdGUoJ9Cd0LDRh9Cw0YLRjCcsICdidXR0b25fX3N0YXJ0X19zcHJpbnQnLCBmYWxzZSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAke0Zvb3Rlci5yZW5kZXIoKX1gO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRTcHJpbnRHYW1lUGFnZTtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgeyBzdGFydFNjcmluQXVkaW9DYWxsIH0gZnJvbSAnLi9zdGFydC1hdWRpb2NhbGwnO1xuXG5jb25zdCBBdWRpb2NhbGxHYW1lUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAnYXVkaW9jYWxsJyxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgICAgPGRpdiBjbGFzcyA9ICdhdWRpby1jb250YWluZXIgJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz4gJHtzdGFydFNjcmluQXVkaW9DYWxsLnJlbmRlcigpfTwvZGl2PjtcbiAgICAgICR7Rm9vdGVyLnJlbmRlcigpfVxuICAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9jYWxsR2FtZVBhZ2U7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IHsgZ2FtZUFyZWEgfSBmcm9tICcuL3V0aWxzL2dhbWUtcmVuZGVyJztcblxuY29uc3QgQXVkaW9jYWxsR2FtZSA9IHtcbiAgaGFzaGVzOiB7XG5cbiAgICBtYWluOiAnI21haW4nLFxuXG4gIH0sXG5cbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAgICA8ZGl2IGNsYXNzID0gJ2NvbnRhaW5lcic+IFxuICAgICAgIDxkaXYgY2xhc3MgPSAnZ2FtZSc+ICR7Z2FtZUFyZWF9IDwvZGl2PlxuICAgICAgICAgPGJ1dHRvbiAgdHlwZT1cImJ1dHRvblwiICBjbGFzcz1cImdvLW1haW5cIj48YSBocmVmPVwiJHt0aGlzLmhhc2hlcy5tYWlufVwiID48L2E+0JLQtdGA0L3Rg9GC0YzRgdGPINC90LAg0LPQu9Cw0LLQvdGD0Y48L2E+PC9idXR0b24+IFxuICAgICAgICAgXG4gICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdWRpb2NhbGxHYW1lO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5leHBvcnQgY29uc3Qgc3RhcnRTY3JpbkF1ZGlvQ2FsbCA9IHtcbiAgaGFzaGVzOiB7XG5cbiAgICBhdWRpb2NhbGxHYW1lOiAnI2F1ZGlvY2FsbEdhbWUnLFxuXG4gIH0sXG5cbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIC8qIGh0bWwgKi9gIFxuXG48ZGl2IGNsYXNzPVwiYXVkaW8tY2FsbFwiPiBcbiAgPHAgY2xhc3M9XCJhdWRpby1jYWxsX190ZXh0XCI+0JIg0LjQs9GA0LUg0LDRg9C00LjQvtCy0YvQt9C+0LIg0LLQsNC80L3Rg9C20L3QviDQstGL0LHRgNCw0YLRjCDQv9GA0LDQstC40LvRjNC90YvQuSDQv9C10YDQtdCy0L7QtCDRgdC70L7QstCwLiA8YnI+XG5cbiAg0KfRgtC+0LHRiyDQuNCz0YDQsNGC0Ywg0YEg0L/QvtC80L7RidGM0Y4g0LrQu9Cw0LLQuNCw0YLRg9GA0YssINC40YHQv9C+0LvRjNC30YPQuSDQutC70LDQstC40YjQuFxuICAxLCAyLCAzLCA0LCA1ICDRh9GC0L7QsdGLINC00LDRgtGMINC+0YLQstC10YIsXG4gIHNwYWNlIC0g0LTQu9GPINCy0L7RgdC/0YDQvtC40LfQstC10LTQtdC90LjRjyDQt9Cy0YPQutCwLlxuICA8YnI+IDxicj5cbiAg0JLRi9Cx0LXRgNC4INGD0YDQvtCy0LXQvdGMINGB0LvQvtC20L3QvtGB0YLQuDo8L3A+XG4gIDxidXR0b24gaWQ9XCJsZXZlbDFcIiB0eXBlPVwiYnV0dG9uXCIgIGNsYXNzPVwiYnRuLWxldmVsXCI+PGEgY2xhc3M9XCJtZW51X19tYWluIG1lbnVfX2l0ZW1fYWN0aXZlXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgMTwvYT48L2J1dHRvbj5cbiBcbiAgPGJ1dHRvbiBpZD1cImxldmVsMlwiIHR5cGU9XCJidXR0b25cIiAgY2xhc3M9XCJidG4tbGV2ZWxcIj48YSBjbGFzcz1cIiBsaW5rIG1lbnVfX21haW4gbWVudV9faXRlbV9hY3RpdmVcIiBocmVmPVwiJHt0aGlzLmhhc2hlcy5hdWRpb2NhbGxHYW1lfVwiID7Qo9GA0L7QstC10L3RjCAyPC9hPjwvYnV0dG9uPlxuXG4gIDxidXR0b24gaWQ9XCJsZXZlbDNcIiB0eXBlPVwiYnV0dG9uXCIgIGNsYXNzPVwiYnRuLWxldmVsXCI+PGEgY2xhc3M9XCJtZW51X19tYWluIG1lbnVfX2l0ZW1fYWN0aXZlXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgMzwvYT48L2J1dHRvbj5cblxuICA8YnV0dG9uIGlkPVwibGV2ZWw0XCIgdHlwZT1cImJ1dHRvblwiICBjbGFzcz1cImJ0bi1sZXZlbFwiPjxhIGNsYXNzPVwiIGxldmVsbWVudV9fbWFpbiBtZW51X19pdGVtX2FjdGl2ZVwiIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbEdhbWV9XCIgPtCj0YDQvtCy0LXQvdGMIDQ8L2E+PC9idXR0b24+XG5cbiAgPGJ1dHRvbiBpZD1cImxldmVsNVwiIHR5cGU9XCJidXR0b25cIiAgY2xhc3M9XCJidG4tbGV2ZWxcIj48YSBjbGFzcz1cIm1lbnVfX21haW4gbWVudV9faXRlbV9hY3RpdmVcIiBocmVmPVwiJHt0aGlzLmhhc2hlcy5hdWRpb2NhbGxHYW1lfVwiID7Qo9GA0L7QstC10L3RjCA1PC9hPjwvYnV0dG9uPlxuXG4gIDxidXR0b24gaWQ9XCJsZXZlbDZcIiB0eXBlPVwiYnV0dG9uXCIgIGNsYXNzPVwiYnRuLWxldmVsXCI+PGEgY2xhc3M9XCJtZW51X19tYWluIG1lbnVfX2l0ZW1fYWN0aXZlXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgNjwvYT48L2J1dHRvbj5cbjwvZGl2PlxuYDtcbiAgfSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcblxyXG5pbXBvcnQgeyBhcGlQYXRoIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS1wYXRoJztcclxuaW1wb3J0IHsgcHJpbnRCdG5TdHJpbmcsIHdvcmRPYmogfSBmcm9tICcuL3N1cHBvcnRpbmctZnVuYyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZUFyZWEgPSBgIFxyXG4gPGRpdiBjbGFzcz1cImF1ZGlvLWNvbnRhaW5lci1nYW1lXCI+IFxyXG4gICAgPGRpdiBjbGFzcz1cImJ0bi1zb3VuZFwiPjxkaXYgY2xhc3M9XCJzb3VuZC13cmFwcGVyXCI+IFxyXG4gICAgPGF1ZGlvIGNsYXNzPVwiYXVkaW9cIiBzcmM9XCIke2FwaVBhdGggKyB3b3JkT2JqLmF1ZGlvfVwiIGF1dG9wbGF5PjwvYXVkaW8+IDwvZGl2PjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJpZ2h0LWFuc3dlclwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj4gJHtwcmludEJ0blN0cmluZygpfTwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gYDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5cbmltcG9ydCB7IGFwaVBhdGggfSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpLXBhdGgnO1xuaW1wb3J0IHsgc291bmRBdWRpbywgd29yZE9iaiB9IGZyb20gJy4vc3VwcG9ydGluZy1mdW5jJztcbmltcG9ydCBhdWRpb1BhdGhXcm9uZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvYXVkaW8vd3JvbmctYW5zd2VyLm1wMyc7XG5pbXBvcnQgYXVkaW9QYXRoUmlnaHQgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2F1ZGlvL3JpZ2h0LWFuc3dlci5tcDMnO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uL2Z1bmN0aW9uYWwvc3RvcmFnZSc7XG5cbmxldCByb3VuZCA9IDA7XG5sZXQgc2NvcmUgPSAwO1xubGV0IGFycmF5V3JvbmdXb3Jkczogc3RyaW5nW10gPSBbXTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJykgPT09IG51bGwpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FycmF5V3JvbmdXb3JkcycsIEpTT04uc3RyaW5naWZ5KGFycmF5V3JvbmdXb3JkcykpO1xufVxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpID09PSBudWxsKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZScsIEpTT04uc3RyaW5naWZ5KHNjb3JlKSk7XG59XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvdW5kJykgPT09IG51bGwpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JvdW5kJywgSlNPTi5zdHJpbmdpZnkocm91bmQpKTtcbn1cblxuY2xhc3MgTGlzdGVuZXJBdWRpb0NhbGwge1xuICBrZXlib2FyZCgpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gJyAnKSB7XG4gICAgICAgIHNvdW5kQXVkaW8oKGFwaVBhdGggKyB3b3JkT2JqLmF1ZGlvKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhTiA9IE51bWJlcihlLmtleSk7XG4gICAgICBpZiAoZS5rZXkgPT09IGBOdW1wYWQgJHtkYXRhTn1gIHx8IGUua2V5ID09PSBgJHtkYXRhTn1gKSB7XG4gICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuYnRuLXRyYW5zbGF0aW9uW2RhdGEtbnVtPVwiJHtkYXRhTn1cIl1gKSkuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIChlbGVtIGFzIEhUTUxCdXR0b25FbGVtZW50KS5jbGljaygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNsaWsoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tc291bmQnKSkge1xuICAgICAgICBzb3VuZEF1ZGlvKChhcGlQYXRoICsgd29yZE9iai5hdWRpbykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi10cmFuc2xhdGlvbicpKSB7XG4gICAgICAgIHJvdW5kID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb3VuZCcpKSArIDE7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyb3VuZCcsIHJvdW5kLnRvU3RyaW5nKCkpO1xuICAgICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZCA9PT0gd29yZE9iai53b3JkVHJhbnNsYXRlKSB7XG4gICAgICAgICAgcmlnaHRBbnN3ZXJGdW5jKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3cm9uZ0Fuc3dlckZ1bmMoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXN0YXJ0JykpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1sZXZlbCcpKSB7XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAnbGV2ZWwxJykge1xuICAgICAgICAgIHN0b3JhZ2UubGV2ZWwgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAnbGV2ZWwyJykge1xuICAgICAgICAgIHN0b3JhZ2UubGV2ZWwgPSAyO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsZXZlbCcsICcyJyk7XG4gICAgICAgICAgY29uc29sZS5sb2coc3RvcmFnZS5sZXZlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQgPT09ICdsZXZlbDMnKSB7XG4gICAgICAgICAgc3RvcmFnZS5sZXZlbCA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQgPT09ICdsZXZlbDQnKSB7XG4gICAgICAgICAgc3RvcmFnZS5sZXZlbCA9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQgPT09ICdsZXZlbDUnKSB7XG4gICAgICAgICAgc3RvcmFnZS5sZXZlbCA9IDU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQgPT09ICdsZXZlbDYnKSB7XG4gICAgICAgICAgc3RvcmFnZS5sZXZlbCA9IDY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gcmlnaHRBbnN3ZXJGdW5jKGVsOiBIVE1MRWxlbWVudCkge1xuICBzY29yZSA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmUnKSkgKyAxO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NvcmUnLCBzY29yZS50b1N0cmluZygpKTtcbiAgc291bmRBdWRpbygoYXVkaW9QYXRoUmlnaHQpKTtcbiAgZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXRyYW5zbGF0aW9uLXJpZ2h0Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSxcbiAgMTIwMCk7XG59XG5cbmZ1bmN0aW9uIHdyb25nQW5zd2VyRnVuYyhlbDogSFRNTEVsZW1lbnQpIHtcbiAgZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXRyYW5zbGF0aW9uLXdyb25nJyk7XG4gIGNvbnN0IHJpZ2h0QW5zd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWFuc3dlcicpIGFzIEhUTUxFbGVtZW50O1xuICBhcnJheVdyb25nV29yZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcnJheVdyb25nV29yZHMnKSEpO1xuICBpZiAocmlnaHRBbnN3ZXIpIHtcbiAgICByaWdodEFuc3dlci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImFuc3dlclwiPjxpbWcgY2xhc3M9XCJhbnN3ZXItaW1nXCIgc3JjPVwiJHthcGlQYXRoICsgd29yZE9iai5pbWFnZX1cIiBhbHQ9XCLQv9GA0LDQstC40LvRjNC90YvQuSDQvtGC0LLQtdGCXCI+PGJyPiR7d29yZE9iai53b3JkfSDigJQgJHt3b3JkT2JqLndvcmRUcmFuc2xhdGV9IDwvZGl2PmA7XG4gICAgYXJyYXlXcm9uZ1dvcmRzLnB1c2god29yZE9iai53b3JkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlXcm9uZ1dvcmRzKSk7XG4gICAgc291bmRBdWRpbygoYXVkaW9QYXRoV3JvbmcpKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9LFxuICAgIDIyMDApO1xuICB9XG59XG5cbmNvbnN0IGxpc3RlbmVyQXVkaW9DYWxsID0gbmV3IExpc3RlbmVyQXVkaW9DYWxsKCk7XG5leHBvcnQgZGVmYXVsdCBsaXN0ZW5lckF1ZGlvQ2FsbDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXNoYWRvdyAqL1xuXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vLi4vLi4vZnVuY3Rpb25hbC9zdG9yYWdlJztcbmltcG9ydCB7IElXb3JkIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgYXBpUGF0aCB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGktcGF0aCc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpJztcblxuLy8g0LLRi9Cx0L7RgCDRg9GA0L7QstC90Y8g0LTQu9GPINC40LPRgNGLINC4INGB0YLRgNCw0L3QuNGG0YtcbmxldCBncm91cCA9IDA7XG5sZXQgcGFnZSA9IDA7XG5sZXQgYXJyYXlsZXZlbDogbnVtYmVyW10gPSBbXTtcbmZ1bmN0aW9uIGxldmVsR2FtZSgpOiB2b2lkIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsZXZlbCcpKSB7XG4gICAgZ3JvdXAgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xldmVsJykpIC0gMTtcbiAgICBwYWdlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDMwIC0gMCArIDEpKSArIDA7XG4gICAgYXJyYXlsZXZlbCA9IFtncm91cCwgcGFnZV07XG4gIH1cbn1cbmxldmVsR2FtZSgpO1xuXG4vLyDQutC+0L3RgdGC0LDQvdCwINC60L7RgtC+0YDQsNGPINC/0L7Qu9GD0YfQsNC10YIg0YEg0YHQtdGA0LLQtdGA0LAg0LzQsNGB0YHQuNCyINGB0LvQvtCyXG5jb25zdCBhcGlHZXRXb3JkcyA9IGFwaS5nZXRXb3Jkcyhncm91cCwgcGFnZSlcbiAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgc3RvcmFnZS53b3JkcyA9IHZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3b3JkcycsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9KTtcbi8vINC/0L7Qu9GD0YfQsNC10Lwg0LzQsNGB0YHQuNCyINC/0YDQtdCy0L7QtNC+0LJcbmZ1bmN0aW9uIGdldFdvcmRzTWFwKCk6IHN0cmluZ1tdIHtcbiAgYXBpR2V0V29yZHM7XG4gIGNvbnN0IHdvcmRzID0gc3RvcmFnZS53b3JkcyEubWFwKChpdGVtKSA9PiBpdGVtLndvcmRUcmFuc2xhdGUpO1xuICByZXR1cm4gd29yZHM7XG59XG5cbmxldCB3b3Jkc1N0cmluZyA9IGdldFdvcmRzTWFwKCk7XG5cbi8vINGE0LjQu9GM0YLRgNGD0LXQvCDQuNC30LHQsNCy0LvRj9GP0YHRjCDQvtGCINC00YPQsdC70LXQuVxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub1JlcGVhdCcpKSB7XG4gIGlmICgoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm9SZXBlYXQnKSEpIGFzIHN0cmluZ1tdKS5sZW5ndGggPiAwKSB7XG4gICAgd29yZHNTdHJpbmcgPSB3b3Jkc1N0cmluZy5maWx0ZXIoKGl0ZW0pID0+ICEoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm9SZXBlYXQnKSEpIGFzIHN0cmluZ1tdKS5pbmNsdWRlcyhpdGVtKSk7XG4gIH1cbn1cbi8vINC/0LXRgNC10LzQtdGI0LjQstCw0LXQvCDQvNCw0YHRgdC40LIg0L/RgNC10LLQvtC00L7QslxuZnVuY3Rpb24gc2h1ZmZsZShhcnJheTpzdHJpbmdbXSkge1xuICBhcnJheS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xufVxuc2h1ZmZsZSh3b3Jkc1N0cmluZyk7XG4vLyDRgdC+0LfQtNCw0LXQvCDQvNCw0YHRgdC4INCyINC60L7RgtGA0L7QvCDQsdGD0LTQtdGCINGC0L7RjNC60L4gNiDRgdC70L7QsiDQtNC70Y8g0LjQs9GA0YtcbmxldCBhcnJheVNpeFdvcmRzOnN0cmluZyBbXSA9IFtdO1xuYXJyYXlTaXhXb3JkcyA9IHdvcmRzU3RyaW5nLnNsaWNlKDAsIDUpO1xuXG4vLyDQstGL0LHQuNGA0LDQtdC8INGB0LvRg9GH0LDQudC90L7QtSDRgdC70L7QstC+INC40LcgNiwg0LrQvtGC0L7RgNC+0LUg0LHRg9C00LXQvCDRg9Cz0LDQtNGL0LLQsNGC0YxcbmNvbnN0IHdvcmRSaWdodCA9IGFycmF5U2l4V29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXlTaXhXb3Jkcy5sZW5ndGgpXTtcblxuLy8g0L/QvtC70YPRh9Cw0LXQvCDQtNC10LvQsNC10Lwg0L7QsdGK0LXQutGCINCyINC60L7RgtC+0YDRi9C5INGB0L7RhdGA0LDQvdC40Lwg0LLRi9Cx0YDQsNC90L3QvtC1INGB0LvQvtCy0L4g0YHQviDQstGB0LXQvNC4INC00LDQvdC90YvQvNC4XG5sZXQgd29yZE9iaiA6IElXb3JkID0ge1xuICBpZDogJycsIGdyb3VwOiAwLCBwYWdlOiAwLCB3b3JkOiAnJywgaW1hZ2U6ICcnLCBhdWRpbzogJycsIGF1ZGlvTWVhbmluZzogJycsIGF1ZGlvRXhhbXBsZTogJycsIHRleHRNZWFuaW5nOiAnJywgdGV4dEV4YW1wbGU6ICcnLCB0cmFuc2NyaXB0aW9uOiAnJywgd29yZFRyYW5zbGF0ZTogJycsIHRleHRNZWFuaW5nVHJhbnNsYXRlOiAnJywgdGV4dEV4YW1wbGVUcmFuc2xhdGU6ICcnLFxufTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yYWdlLndvcmRzIS5sZW5ndGg7IGkrKykge1xuICBpZiAoc3RvcmFnZS53b3JkcyFbaV0ud29yZFRyYW5zbGF0ZSA9PT0gd29yZFJpZ2h0KSB7XG4gICAgd29yZE9iaiA9IHN0b3JhZ2Uud29yZHMhW2ldO1xuICB9XG59XG5cbi8vINC40LfQsdCw0LLQu9GP0LXQvNGB0Y8g0L7RgiDQtNGD0LHQu9C10Lkg0LIg0LzQsNGB0YHQuNCy0LUg0L/RgNC10LLQvtC00L7QsiDQv9GA0L7QvtC70LbQtdC90LjQtVxuXG5sZXQgbm9SZXBlYXQ6IHN0cmluZ1tdID0gW107XG5ub1JlcGVhdC5wdXNoKHdvcmRPYmoud29yZFRyYW5zbGF0ZSk7XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vUmVwZWF0JykpIHtcbiAgbm9SZXBlYXQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub1JlcGVhdCcpISk7XG4gIG5vUmVwZWF0LnB1c2god29yZE9iai53b3JkVHJhbnNsYXRlKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25vUmVwZWF0JywgSlNPTi5zdHJpbmdpZnkobm9SZXBlYXQpKTtcbn1cblxuLy8g0YTRg9C90LrRhtC40Y8g0L/RgNC+0LjQs9GA0YvQstCw0L3QuNGPINCw0YPQtNC40L4g0YEg0L/Rg9GC0LXQvCDQuNC3INC90LDRiNC10LPQviDQvtCx0LXQutGC0LAt0YHQu9C+0LLQvlxuZnVuY3Rpb24gc291bmRBdWRpbyhwYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgYXVkaW9kID0gbmV3IEF1ZGlvKCk7XG4gIGF1ZGlvZC5zcmMgPSBgJHtwYXRofWA7XG4gIGF1ZGlvZC5hdXRvcGxheSA9IHRydWU7XG59XG5cbi8vINGA0LjRgdGD0LXQvCDQutC90L7Qv9C60Lgg0YEg0L/QtdGA0LXQstC+0LTQsNC80LhcbmZ1bmN0aW9uIHByaW50QnRuU3RyaW5nKCk6IHN0cmluZyB7XG4gIGxldCBhID0gJyc7XG4gIGxldCBjb250YWluZXJCdG4gPSAnICc7XG4gIGlmIChOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvdW5kJykpIDwgMTYpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5U2l4V29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGEgPSBhcnJheVNpeFdvcmRzW2ldO1xuICAgICAgY29udGFpbmVyQnRuICs9IGA8YnV0dG9uIGRhdGEtbnVtPVwiJHtpICsgMX1cIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCIke2F9XCIgY2xhc3M9XCJidG4tdHJhbnNsYXRpb25cIj4ke2F9PC9idXR0b24+IGA7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHdvcmRPYmouYXVkaW8gPSAnJztcbiAgICBsZXQgYSA9ICcnO1xuICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcnJheVdyb25nV29yZHMnKSEpLmxlbmd0aCA+IDApIHtcbiAgICAgIGEgPSBgIDxwIGNsYXNzPVwiZ2FtZS10ZXh0XCI+0KDQtdC60L7QvNC10L3QtNGD0LXQvCDQstGL0YPRh9C40YLRjDombmJzcCR7KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FycmF5V3JvbmdXb3JkcycpISkgYXMgc3RyaW5nW10pLmpvaW4oJyxcXG4nKX08L3A+IGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGEgPSAnIDxwIGNsYXNzPVwiZ2FtZS10ZXh0XCI+0JLRiyDQvdC40YDQsNC30YMg0L3QtSDQvtGI0LjQsdC70LjRgdGMITwvcD4gJztcbiAgICB9XG4gICAgY29udGFpbmVyQnRuICs9IGBcbiAgPGRpdiBjbGFzcz1cImdhbWUtb3ZlclwiPlxuICAgIDxwIGNsYXNzPVwiZ2FtZS10ZXh0XCI+0JLRiyDQv9GA0L7RiNC70Lgg0LjQs9GA0YMhPC9wPlxuICAgIDxwIGNsYXNzPVwiZ2FtZS10ZXh0XCI+0JLQsNGIINGA0LXQt9GD0LvRjNGC0LDRgjogJm5ic3AgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmUnKX08L3A+XG4gICAgJHthfVxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicmVzdGFydFwiPtCd0LDRh9Cw0YLRjCDQt9Cw0L3QvtCy0L48L2J1dHRvbj5cbiAgPC9kaXY+IGA7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FycmF5V3JvbmdXb3JkcycpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdyb3VuZCcpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzY29yZScpO1xuICB9XG4gIHJldHVybiBjb250YWluZXJCdG47XG59XG5cbmV4cG9ydCB7XG4gIHNvdW5kQXVkaW8sXG4gIHByaW50QnRuU3RyaW5nLCB3b3JkT2JqLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmltcG9ydCBwaG9uZSBmcm9tICcuLi9hc3NldHMvcGhvbmUuc3ZnJztcbmltcG9ydCBkaWN0aW9uYXJ5IGZyb20gJy4uL2Fzc2V0cy9kaWN0aW9uYXJ5LnN2Zyc7XG5pbXBvcnQgcGxheSBmcm9tICcuLi9hc3NldHMvcGxheS5zdmcnO1xuaW1wb3J0IGFjc2VzcyBmcm9tICcuLi9hc3NldHMvYWNzZXNzLnN2Zyc7XG5cbmNvbnN0IE1haW5QYWdlID0ge1xuICBpZDogJ21haW4nLFxuICByZW5kZXI6ICgpOnN0cmluZyA9PiBgXG4gICAgICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VcIj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19wYWdlX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPlRoZSBXb3JsZCBpcyBZb3VycyB3aXRoIFJTTGFuZyE8L2gyPlxuICAgICAgICAgICA8cD5SU0xhbmcg4oCUINGN0YLQviDRjdGE0YTQtdC60YLQuNCy0L3Ri9C5INGB0LXRgNCy0LjRgSDQtNC70Y8g0YPQstC70LXQutCw0YLQtdC70YzQvdC+0Lkg0L/RgNCw0LrRgtC40LrQuCDQsNC90LPQu9C40LnRgdC60L7Qs9C+INGP0LfRi9C60LAuINCf0YDQuNGB0L7QtdC00LjQvdGP0LnRgdGPIVxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fcGFnZV9fYWR2YW50YWdlc1wiPlxuICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPtCf0L7Rh9C10LzRgyBSU0xhbmc/PC9oMj5cbiAgICAgICAgICAgPHVsIGNsYXNzPVwiYWR2YW50YWdlc19fbGlzdFwiPlxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHthY3Nlc3N9XCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCR0LXRgdC/0LvQsNGC0L3Ri9C5INC00L7RgdGC0YPQvzwvaDM+XG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RleHRcIj7QndCw0YjQsCDQvNC40YHRgdC40Y8g4oCUINGB0LTQtdC70LDRgtGMINC+0LHRg9GH0LXQvdC40Y8g0Y/Qt9GL0LrQsNC8INC00L7RgdGC0YPQv9C90YvQvCDQtNC70Y8g0LrQsNC20LTQvtCz0L48L3A+XG4gICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZGljdGlvbmFyeX1cIj5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0KHQu9C+0LLQsNGA0Yw8L2gzPlxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+0KnQtdC70LrQvdC40YLQtSDQu9GO0LHQvtC1INGB0LvQvtCy0L4sINGH0YLQvtCx0Ysg0YPQstC40LTQtdGC0Ywg0L7Qv9GA0LXQtNC10LvQtdC90LjQtSDQsiDQuNGB0YLQvtGH0L3QuNC60LDRhSwg0Lgg0YHQvtGF0YDQsNC90LjRgtC1INC10LPQviDQsiDRgdCy0L7QtdC8INGB0L/QuNGB0LrQtSDQutCw0YDRgtC+0YfQtdC6PC9wPlxuICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbVwiPlxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3BsYXl9XCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCY0LPRgNCw0LksINGH0YLQvtCx0Ysg0YPRh9C40YLRjNGB0Y88L2gzPlxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+0JjQs9GA0Ysg0LLQutC70Y7Rh9Cw0Y7RgiDQkNGD0LTQuNC+0LLRi9C30L7QsizQodC/0YDQuNC90YIg0Lgg0LzQvdC+0LPQvtC1INC00YDRg9Cz0L7QtS4uLjwvcD5cbiAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwaG9uZX1cIj5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0KPRh9C40YLQtdGB0Ywg0L3QsCDRhdC+0LTRgzwvaDM+XG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RleHRcIj5SU0xhbmcg0LTQvtGB0YLRg9C/0L3QsCDQtNC70Y8g0LLQtdCxINC4INC80L7QsdC40LvRjNC90YvRhSDRg9GB0YLRgNC+0LnRgdGC0LIuINCj0YfQuNGC0LXRgdGMINC40Lcg0LvRjtCx0L7Qs9C+INC80LXRgdGC0LAhPC9wPlxuICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgIDwvdWw+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICAke0Zvb3Rlci5yZW5kZXIoKX1cbiAgICBgLFxufTtcblxuLy8gZXhwb3J0IHsgTWFpblBhZ2UgfTtcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IGluaXRTcHJpbnRNVkMgfSBmcm9tICcuL2luaXRTcHJpbnRNVkMnO1xuaW1wb3J0IHsgQnV0dG9ucyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc21hbGxDb21wb25lbnRzL2J1dHRvbnMnO1xuXG5pbXBvcnQgcGFycm90cyBmcm9tICcuLi8uLi9hc3NldHMvcGFycm90cy5qcGcnO1xuaW1wb3J0IGFycm93TGVmdCBmcm9tICcuLi8uLi9hc3NldHMvYXJyb3ctbGVmdC5wbmcnO1xuaW1wb3J0IGFycm93UmlnaHQgZnJvbSAnLi4vLi4vYXNzZXRzL2Fycm93LXJpZ2h0LnBuZyc7XG5cbmltcG9ydCByaWdodEFuc3dlckF1ZGlvIGZyb20gJy4uLy4uL2Fzc2V0cy9hdWRpby9yaWdodC1hbnN3ZXIubXAzJztcbmltcG9ydCB3cm9uZ0Fuc3dlckF1ZGlvIGZyb20gJy4uLy4uL2Fzc2V0cy9hdWRpby93cm9uZy1hbnN3ZXIubXAzJztcbmltcG9ydCB0aW1lb3ZlckF1ZGlvIGZyb20gJy4uLy4uL2Fzc2V0cy9hdWRpby90aW1lLW92ZXIubXAzJztcblxuY29uc3QgU3ByaW50R2FtZVBhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ3NwcmludCcsXG4gIGxldmVsOiAwLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnRfX3Njb3JlXCI+MDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNwcmludF9fdGltZXJcIj42MDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNwcmludF9fZmllbGRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX190aXRsZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV9fY291bnRcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVfX3RleHRcIj4rIDEwINC+0YfQutC+0LIg0LfQsCDRgdC70L7QstC+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRfX2NvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9faW1nXCI+PGltZyBzcmM9JyR7cGFycm90c30nIGFsdD1cInBhcnJvdHNcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9fcXVlc3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9fd29yZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uX193b3JkXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29yZF9fc291bmRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxhdWRpbyBpZD1cInNwcmludF9fc2F5X193b3JkXCIgc3JjPVwiXCI+PC9hdWRpbz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb25fX3RyYW5zbGF0aW9uXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRfX2J1dHRvbnNcIj4ke0J1dHRvbnMuY3JlYXRlKCfQndC10LLQtdGA0L3QvicsICdidXR0b25fX3NwcmludF9fZmFsc2UnLCBmYWxzZSl9JHtCdXR0b25zLmNyZWF0ZSgn0JLQtdGA0L3QvicsICdidXR0b25fX3NwcmludF9fdHJ1ZScsIGZhbHNlKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNwcmludF9fYXJyb3dzXCI+XG4gICAgICAgIDxpbWcgc3JjPScke2Fycm93TGVmdH0nIGFsdD1cImFycm93XCI+XG4gICAgICAgIDxpbWcgc3JjPScke2Fycm93UmlnaHR9JyBhbHQ9XCJhcnJvd1wiPlxuICAgICAgPC9kaXY+XG4gICAgICA8YXVkaW8gaWQ9XCJhdWRpb19fcmlnaHRcIiBzcmM9XCIke3JpZ2h0QW5zd2VyQXVkaW99XCI+PC9hdWRpbz5cbiAgICAgIDxhdWRpbyBpZD1cImF1ZGlvX193cm9uZ1wiIHNyYz1cIiR7d3JvbmdBbnN3ZXJBdWRpb31cIj48L2F1ZGlvPlxuICAgICAgPGF1ZGlvIGlkPVwiYXVkaW9fX3RpbWVvdmVyXCIgc3JjPVwiJHt0aW1lb3ZlckF1ZGlvfVwiPjwvYXVkaW8+XG4gICAgPC9kaXY+YDtcbiAgfSxcbiAgaW5pdE1WQygpOnZvaWQge1xuICAgIGluaXRTcHJpbnRNVkMoKTtcbiAgfSxcbiAgc2F2ZUxldmVsKGxldmVsOnN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5sZXZlbCA9ICtsZXZlbFtsZXZlbC5sZW5ndGggLSAxXTtcbiAgfSxcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ByaW50R2FtZVBhZ2U7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cblxuaW1wb3J0IHsgTW9kdWxlQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL2NvbnRyb2xsZXIvY29udHJvbGxlclNwcmludCc7XG5pbXBvcnQgeyBNb2R1bGVNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVsL21vZGVsU3ByaW50JztcbmltcG9ydCB7IE1vZHVsZVZpZXcgfSBmcm9tICcuLi8uLi92aWV3L3ZpZXdTcHJpbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNwcmludE1WQygpOiB2b2lkIHtcbiAgY29uc3QgdmlldyA9IG5ldyBNb2R1bGVWaWV3KCk7XG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZHVsZU1vZGVsKCk7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgTW9kdWxlQ29udHJvbGxlcigpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ByaW50LWNvbnRlaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuICB2aWV3LmluaXQoY29udGFpbmVyKTtcbiAgbW9kZWwuaW5pdCh2aWV3KTtcbiAgY29udHJvbGxlci5pbml0KGNvbnRhaW5lciwgbW9kZWwpO1xufVxuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJztcblxuY29uc3QgU3RhdGlzdGljc1BhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ3N0YXRpc3RpY3MnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz48L2Rpdj5cbiAgICAke0Zvb3Rlci5yZW5kZXIoKX1gO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGlzdGljc1BhZ2U7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5pbXBvcnQgZm90bzEgZnJvbSAnLi4vYXNzZXRzL2dpdGh1Yi1pbWcvZmx5ZXRoZXIuanBnJztcbmltcG9ydCBmb3RvMiBmcm9tICcuLi9hc3NldHMvZ2l0aHViLWltZy9BbGVuYURvei5qcGcnO1xuaW1wb3J0IGZvdG8zIGZyb20gJy4uL2Fzc2V0cy9naXRodWItaW1nL2RhcmluYTk5Mi5qcGcnO1xuXG5jb25zdCBBYm91dFRlYW1QYWdlID0ge1xuICBjbGFzc25hbWU6ICd0ZWFtLXBhZ2UnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz5cbiAgICAgIDxwIGNsYXNzPSdvdXJ0ZWFtX190aXRsZSc+0J3QsNGI0LAg0LrQvtC80LDQvdC00LA8L3A+XG4gICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtX19jb250ZWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtX19naXRodWInPlxuICAgICAgICAgICAgPGltZyBzcmM9JyR7Zm90bzF9JyBhbHQ9J2ZvdG8nIGNsYXNzPSdvdXJ0ZWFtX19mb3Rvcyc+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2ZseWV0aGVyXCIgY2xhc3M9XCJnaXRodWItbGlua1wiPmZseWV0aGVyPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzPSdvdXJ0ZWFtX190ZWFtbGVhZCc+VGVhbUxlYWQ8L3NwYW4+XG4gICAgICAgICAgPHVsIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2xpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+QmFja2VuZDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPtCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj7QnNC40L3QuC3QuNCz0YDQsCAn0JDRg9C00LjQvtCy0YvQt9C+0LInPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+Li4uPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nb3VydGVhbSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nb3VydGVhbV9fZ2l0aHViJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPScke2ZvdG8yfScgYWx0PSdmb3RvJyBjbGFzcz0nb3VydGVhbV9fZm90b3MnPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9BbGVuYURvelwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5BbGVuYURvejwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJkZXZlbG9wbWVudF9fbGlzdFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj7QrdC70LXQutGC0YDQvtC90L3Ri9C5INGD0YfQtdCx0L3QuNC6PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+0JTQuNC30LDQudC9PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+Li4uPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+Li4uPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nb3VydGVhbSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nb3VydGVhbV9fZ2l0aHViJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPScke2ZvdG8zfScgYWx0PSdmb3RvJyBjbGFzcz0nb3VydGVhbV9fZm90b3MnPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EYXJpbmE5OTJcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+RGFyaW5hOTkyPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bCBjbGFzcz1cImRldmVsb3BtZW50X19saXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPtCT0LvQsNCy0L3QsNGPINGB0YLRgNCw0L3QuNGG0LA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj7QnNC40L3QuC3QuNCz0YDQsCAn0KHQv9GA0LjQvdGCJzwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPi4uLjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPi4uLjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAke0Zvb3Rlci5yZW5kZXIoKX1cbiAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRUZWFtUGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0ICcuL3RleHRib29rLnNjc3MnO1xuaW1wb3J0IHsgaGFzaGVzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oYXNoZXMnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vYXBpL2FwaSc7XG5pbXBvcnQgeyBJV29yZCB9IGZyb20gJy4uLy4uL3R5cGVzL3R5cGVzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7IFRleHRib29rQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL2NvbnRyb2xsZXIvY29udHJvbGxlclRleHRib29rJztcblxuY29uc3QgVGV4dGJvb2tQYWdlID0ge1xuICBjbGFzc25hbWU6ICd0ZXh0Ym9vaycsXG4gIHdvcmRsaXN0OiAnd29yZC1saXN0JyxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgY29uc3QgbG9jYXRpb25IYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKTtcbiAgICBjb25zdCB1bml0ID0gK2xvY2F0aW9uSGFzaFsxXTtcbiAgICBjb25zdCBwYWdlID0gK2xvY2F0aW9uSGFzaFsyXTtcbiAgICBsZXQgdmlldyA9ICcnO1xuICAgIGNvbnN0IG1pblVuaXQgPSAxO1xuICAgIGNvbnN0IG1heFVuaXQgPSA3O1xuICAgIGNvbnN0IHVuaXRTZWxlY3RvciA9ICd0ZXh0Ym9vay11bml0JztcbiAgICBjb25zdCBwYWdlU2VsZWN0b3IgPSAndW5pdC1wYWdlJztcbiAgICBjb25zdCBjb250cm9sbGVyVGV4dGJvb2sgPSBuZXcgVGV4dGJvb2tDb250cm9sbGVyKHVuaXRTZWxlY3RvciwgcGFnZVNlbGVjdG9yKTtcbiAgICBpZiAoIXVuaXQpIHtcbiAgICAgIHZpZXcgPSBgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjFcIj7QoNCw0LfQtNC10LsgMTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCIyXCI+0KDQsNC30LTQtdC7IDI8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiM1wiPtCg0LDQt9C00LXQuyAzPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjRcIj7QoNCw0LfQtNC10LsgNDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCI1XCI+0KDQsNC30LTQtdC7IDU8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiNlwiPtCg0LDQt9C00LXQuyA2PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjdcIj7QoNCw0LfQtNC10LsgXCLQodC70L7QttC90YvQtSDRgdC70L7QstCwXCI8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9IGVsc2UgaWYgKCFwYWdlICYmIHVuaXQgPD0gbWF4VW5pdCAmJiB1bml0ID49IG1pblVuaXQgJiYgdHlwZW9mIHVuaXQgPT09ICdudW1iZXInKSB7XG4gICAgICB2aWV3ID0gYFxuICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLW5hdmlnYXRpb24gdW5pdC1uYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXJvdW5kXCIgaWQ9XCJnby1iYWNrXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInVuaXQtbmFtZVwiPtCg0LDQt9C00LXQuyAke3VuaXR9PC9wPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8dWwgY2xhc3M9XCJ1bml0LXBhZ2VzXCI+XG4gICAgICAgICAgICAke3RoaXMucmVuZGVyUGFnZXMoKX1cbiAgICAgICAgIDwvdWw+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlldyA9IGA8ZGl2IGNsYXNzPSR7dGhpcy5jbGFzc25hbWV9PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLW5hdmlnYXRpb25cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1yb3VuZFwiIGlkPVwiZ28tYmFja1wiPjwvYnV0dG9uPlxuICAgICAgICA8cCBjbGFzcz1cInVuaXQtbmFtZVwiPtCg0LDQt9C00LXQuyAke3VuaXR9IDxzcGFuIGNsYXNzPVwidW5pdC1wYWdlLW5hbWVcIj7RgdGC0YDQsNC90LjRhtCwICR7cGFnZX08L3NwYW4+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3M9JHt0aGlzLndvcmRsaXN0fT5cbiAgICAgICAke3RoaXMuZ2V0Q2FyZHMoK3VuaXQsICtwYWdlKX1cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay1wYWdpbmF0aW9uXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2luYXRpb24tYnRuIGJ0bi1vcmFuZ2VcIj7Qn9GA0LXQtNGL0LTRg9GJ0LDRjzwvYnV0dG9uPlxuICAgICAgICAgIDxhIGNsYXNzPVwidGV4dGJvb2stZ2FtZVwiIGhyZWY9XCIke2hhc2hlcy5hdWRpb2NhbGx9XCI+0JDRg9C00LjQvtCy0YvQt9C+0LI8L2E+XG4gICAgICAgICAgPGEgY2xhc3M9XCJ0ZXh0Ym9vay1nYW1lXCIgaHJlZj1cIiR7aGFzaGVzLmFib3V0c3ByaW50fVwiPtCh0L/RgNC40L3RgjwvYT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGFnaW5hdGlvbi1idG4gYnRuLW9yYW5nZVwiPtCh0LvQtdC00YPRjtGJ0LDRjzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gICAgfVxuICAgIGNvbnRyb2xsZXJUZXh0Ym9vay5pbml0KHVuaXQpO1xuICAgIHJldHVybiBgJHtIZWFkZXIucmVuZGVyKCl9JHt2aWV3fSR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIH0sXG4gIHJlbmRlclBhZ2VzKCk6IHN0cmluZyB7XG4gICAgbGV0IHBhZ2VzID0gJyc7XG4gICAgY29uc3QgcGFnZXNDb3VudCA9IDMwO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBhZ2VzQ291bnQ7IGkgKz0gMSkge1xuICAgICAgcGFnZXMgKz0gYDxsaSBjbGFzcz1cInVuaXQtcGFnZVwiIGRhdGEtcGFnZT1cIiR7aX1cIj5QYWdlICR7aX08L2xpPmA7XG4gICAgfVxuICAgIHJldHVybiBwYWdlcztcbiAgfSxcbiAgZ2V0Q2FyZHModW5pdDogbnVtYmVyLCBwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IHdvcmRsaXN0IH0gPSB0aGlzO1xuICAgIGZ1bmN0aW9uIHJlbmRlckNhcmRzKHdvcmRzOiBJV29yZFtdKSB7XG4gICAgICBjb25zdCB3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7d29yZGxpc3R9YCk7XG4gICAgICBpZiAod29yZENvbnRhaW5lcikge1xuICAgICAgICB3b3JkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd3b3JkLWl0ZW0nKTtcbiAgICAgICAgY2FyZC5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJ3b3JkLWltYWdlXCIgXG4gIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcnNsYW5nLWxlYXJuaW5nLWVuZ2xpc2gtd29yZHMuaGVyb2t1YXBwLmNvbS8ke3dvcmRzW2ldLmltYWdlfSlcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3b3JkLWRlc2NyaXB0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cIndvcmQtcHJvbm91bmNlIHdvcmQtYXVkaW9cIj5cbiAgICA8cCBjbGFzcz1cIndvcmQtbmFtZVwiPiR7d29yZHNbaV0ud29yZH0gJHt3b3Jkc1tpXS50cmFuc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdWRpb1wiPjxhdWRpbz48L2F1ZGlvPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzPVwid29yZC1wcm9ub3VuY2UgdHJhbnNsYXRpb25cIj4ke3dvcmRzW2ldLndvcmRUcmFuc2xhdGV9PC9wPlxuICAgIDxwIGNsYXNzPVwid29yZC1leGFtcGxlXCI+JHt3b3Jkc1tpXS50ZXh0TWVhbmluZ308L3A+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLWV4YW1wbGUgdHJhbnNsYXRpb25cIj4ke3dvcmRzW2ldLnRleHRNZWFuaW5nVHJhbnNsYXRlfTwvcD5cbiAgICA8cCBjbGFzcz1cIndvcmQtZXhhbXBsZVwiPiR7d29yZHNbaV0udGV4dEV4YW1wbGV9PC9wPlxuICAgIDxwIGNsYXNzPVwid29yZC1leGFtcGxlIHRyYW5zbGF0aW9uXCI+JHt3b3Jkc1tpXS50ZXh0RXhhbXBsZVRyYW5zbGF0ZX08L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwid29yZC1ub3RlZFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1vcmFuZ2UgYnRuLWRpZmZpY3VsdFwiPtCh0LvQvtC20L3Qvj88L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tb3JhbmdlIGJ0bi1sZWFybmVkXCI+0JjQt9GD0YfQtdC90L4/PC9idXR0b24+XG4gIDwvZGl2PmA7XG4gICAgICAgIHdvcmRDb250YWluZXI/LmFwcGVuZChjYXJkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGFwaS5nZXRXb3Jkcyh1bml0IC0gMSwgcGFnZSAtIDEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZW5kZXJDYXJkcyhyZXMgYXMgSVdvcmRbXSk7XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0Ym9va1BhZ2U7XG4iLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtaW46bnVtYmVyLCBtYXg6bnVtYmVyKTpudW1iZXIge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cbiIsImltcG9ydCB7IFJvdXRlcywgTWVudUl0ZW1zIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IFNwcmludEdhbWVQYWdlIGZyb20gJy4uL3BhZ2VzL3NwcmludC9pbmRleCc7XG5cbmNsYXNzIE1vZHVsZVZpZXcge1xuICBteU1vZHVsZUNvbnRhaW5lciE6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnRlbnRDb250YWluZXIhOiBIVE1MRWxlbWVudDtcblxuICByb3V0ZXNPYmohOiBSb3V0ZXM7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50LCByb3V0ZXM6IFJvdXRlcyk6IHZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5yb3V0ZXNPYmogPSByb3V0ZXM7XG4gIH1cblxuICByZW5kZXJDb250ZW50KGhhc2hQYWdlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IHJvdXRlTmFtZSA9ICdkZWZhdWx0JztcbiAgICByb3V0ZU5hbWUgPSAoaGFzaFBhZ2VOYW1lLmxlbmd0aCkgPyBoYXNoUGFnZU5hbWUuc3BsaXQoJy8nKVswXSA6IHJvdXRlTmFtZTtcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMucm91dGVzT2JqW3JvdXRlTmFtZSBhcyBrZXlvZiBSb3V0ZXNdO1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIuaW5uZXJIVE1MID0gcm91dGUucmVuZGVyKCk7XG4gICAgaWYgKGhhc2hQYWdlTmFtZSA9PT0gJ3NwcmludCcpIHsgU3ByaW50R2FtZVBhZ2UuaW5pdE1WQygpOyB9XG4gIH1cblxuICBoaWdobGlnaHRBY3RpdmVNZW51SXRlbSA9IChvYmo6IE1lbnVJdGVtcywgaGFzaE5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmpba2V5IGFzIGtleW9mIE1lbnVJdGVtc10uY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51X19pdGVtX2FjdGl2ZScpKSB7XG4gICAgICAgIG9ialtrZXkgYXMga2V5b2YgTWVudUl0ZW1zXS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzaE5hbWUpIHtcbiAgICAgIG9ialtoYXNoTmFtZSBhcyBrZXlvZiBNZW51SXRlbXNdLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5tYWluLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVWaWV3O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCBTcHJpbnRSZXN1bHQgZnJvbSAnLi4vY29tcG9uZW50cy9zcHJpbnRyZXN1bHRzJztcbmltcG9ydCB0cnVlSW1nIGZyb20gJy4uL2Fzc2V0cy90cnVlLnBuZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2R1bGVWaWV3IHtcbiAgbXlNb2R1bGVDb250YWluZXIhOkhUTUxFbGVtZW50O1xuXG4gIGNvbnRlbnRDb250YWluZXIhOkhUTUxFbGVtZW50O1xuXG4gIHJvdXRlc09iaiE6Um91dGVzO1xuXG4gIHNwcmludFRpbWVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnRfX3RpbWVyJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50U2NvcmU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwcmludF9fc2NvcmUnKSBhcyBIVE1MRWxlbWVudDtcblxuICBzcHJpbnRDb3VudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGVfX2NvdW50JykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50Q291bnRUZXh0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZV9fdGV4dCcpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHF1ZXN0aW9uV29yZDpIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVzdGlvbl9fd29yZCcpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHF1ZXN0aW9uVHJhbnNsYXRpb246SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVlc3Rpb25fX3RyYW5zbGF0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50Q29udGVpbmVyOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwcmludC1jb250ZWluZXInKSBhcyBIVE1MRWxlbWVudDtcblxuICBpbml0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgLy8gdGhpcy5yb3V0ZXNPYmogPSByb3V0ZXM7XG4gIH1cblxuICByZW5kZXJXb3JkKHdvcmQ6IHN0cmluZywgdHJhbnNsYXRpb246IHN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5xdWVzdGlvbldvcmQudGV4dENvbnRlbnQgPSB3b3JkO1xuICAgIHRoaXMucXVlc3Rpb25UcmFuc2xhdGlvbi50ZXh0Q29udGVudCA9IHRyYW5zbGF0aW9uO1xuICB9XG5cbiAgcmVuZGVyVGltZXIodGltZXI6bnVtYmVyLCB0aW1lckVsZW06SFRNTEVsZW1lbnQpOnZvaWQge1xuICAgIHRpbWVyRWxlbS50ZXh0Q29udGVudCA9IFN0cmluZyh0aW1lcik7XG4gIH1cblxuICByZW5kZXJTY29yZShzY29yZTpzdHJpbmcsIG1heFNjb3JlPzpib29sZWFuKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludFNjb3JlLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgaWYgKG1heFNjb3JlKSB7XG4gICAgICB0aGlzLnNwcmludENvdW50LmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dHJ1ZUltZ31cIiBhbHQ9XCJpbWdcIj5gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNwcmludENvdW50LmlubmVySFRNTCArPSBgPGltZyBzcmM9XCIke3RydWVJbWd9XCIgYWx0PVwiaW1nXCI+YDtcbiAgICB9XG4gIH1cblxuICBjbGVhclNwcmludENvdW50KCk6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRDb3VudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIHJldHVyblRvT25lU3ByaW50Q291bnQoKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludENvdW50LmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dHJ1ZUltZ31cIiBhbHQ9XCJpbWdcIj5gO1xuICB9XG5cbiAgcmVuZGVyQ291bnRUZXh0KG46bnVtYmVyKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludENvdW50VGV4dC5pbm5lckhUTUwgPSBgKyAke259INC+0YfQutC+0LIg0LfQsCDRgdC70L7QstC+YDtcbiAgfVxuXG4gIHJlbmRlclJlc3VsdHMocXVlc3Rpb25zOnN0cmluZ1tdLCBhbnN3ZXJzOmJvb2xlYW5bXSwgcmlnaHRBbnN3ZXJzOm51bWJlciwgd3JvbmdBbnN3ZXJzOm51bWJlciwgc2NvcmU6bnVtYmVyKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludENvbnRlaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnNwcmludENvbnRlaW5lci5pbm5lckhUTUwgPSBgJHtTcHJpbnRSZXN1bHQucmVuZGVyKHF1ZXN0aW9ucywgYW5zd2VycywgcmlnaHRBbnN3ZXJzLCB3cm9uZ0Fuc3dlcnMsIHNjb3JlKX1gO1xuICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IE1vZHVsZVZpZXc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9