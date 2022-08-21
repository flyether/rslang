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
const main_2 = __webpack_require__(/*! ./pages/audiocall/main */ "./src/pages/audiocall/main.ts");
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
    audiocallgame: main_2.AudiocallGame,
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
exports.AudiocallGame = void 0;
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const game_render_1 = __webpack_require__(/*! ./utils/game-render */ "./src/pages/audiocall/utils/game-render.ts");
const AudiocallGame = {
    // hashes: {
    //   main: '#main',
    // },
    render() {
        return `
       <div class = 'container'> 
       <a class="go-main " href='#main' >Вернуться <br> на главную</a> 
         <div class = 'game'> ${game_render_1.gameArea} </div>
         
         
         </div>
      `;
    },
};
exports.AudiocallGame = AudiocallGame;


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
 <a id="level1" class="btn-level link" href="${this.hashes.audiocallGame}" >Уровень 1</a>
 
 <a id="level2" class="btn-level link" href="${this.hashes.audiocallGame}" >Уровень 2</a>

 <a id="level3" class="btn-level link" href="${this.hashes.audiocallGame}" >Уровень 3</a>

 <a id="level4" class="btn-level link" href="${this.hashes.audiocallGame}" >Уровень 4</a>

 <a id="level5" class="btn-level link" href="${this.hashes.audiocallGame}" >Уровень 5</a>

 <a id="level6" class="btn-level link" href="${this.hashes.audiocallGame}" >Уровень 6</a>
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
                const dataN = Number(e.target.id.replace(/[^0-9]/g, ''));
                if (e.target.id === (`level${dataN}`)) {
                    storage_1.storage.level = dataN;
                    localStorage.setItem('level', `${dataN}`);
                    (0, supporting_func_1.clearLocalStorage)();
                }
            }
        });
        //   if ((e.target as HTMLElement).classList.contains('btn-level')) {
        //     if ((e.target as HTMLElement).id === 'level1') {
        //       storage.level = 1;
        //       localStorage.setItem('level', '1');
        //       clearLocalStorage();
        //     }
        //     if ((e.target as HTMLElement).id === 'level2') {
        //       storage.level = 2;
        //       localStorage.setItem('level', '2');
        //       clearLocalStorage();
        //     }
        //     if ((e.target as HTMLElement).id === 'level3') {
        //       storage.level = 3;
        //       localStorage.setItem('level', '3');
        //       clearLocalStorage();
        //     }
        //     if ((e.target as HTMLElement).id === 'level4') {
        //       storage.level = 4;
        //       localStorage.setItem('level', '4');
        //     }
        //     if ((e.target as HTMLElement).id === 'level5') {
        //       storage.level = 5;
        //       localStorage.setItem('level', '5');
        //     }
        //     if ((e.target as HTMLElement).id === 'level6') {
        //       storage.level = 6;
        //       localStorage.setItem('level', '6');
        //     }
        //   }
        // });
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


/* eslint-disable @typescript-eslint/no-use-before-define */
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
exports.clearLocalStorage = exports.wordObj = exports.printBtnString = exports.soundAudio = void 0;
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
    <div class="btn-game-over-container">
      <button type="button" class="restart">Начать заново</button>
      <a  class="link" href="#audiocall" >Выбрать уровень2</a>
    </div>
  </div>
  
  `;
        clearLocalStorage();
    }
    return containerBtn;
}
exports.printBtnString = printBtnString;
function clearLocalStorage() {
    localStorage.removeItem('noRepeat');
    localStorage.removeItem('arrayWrongWords');
    localStorage.removeItem('round');
    localStorage.removeItem('score');
}
exports.clearLocalStorage = clearLocalStorage;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEU3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvdGV4dGJvb2svdGV4dGJvb2suc2Nzcz9lMjBmIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzcz9hYWFmIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9hcGkvYXBpLXBhdGgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvaGFzaGVzLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9tb2RhbC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9zbWFsbENvbXBvbmVudHMvYnV0dG9ucy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9zcHJpbnRyZXN1bHRzLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb250cm9sbGVyL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbnRyb2xsZXIvY29udHJvbGxlclNwcmludC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyVGV4dGJvb2sudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2Z1bmN0aW9uYWwvbGlzdGVuZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2Z1bmN0aW9uYWwvc2hvdy11c2VyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9mdW5jdGlvbmFsL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9tb2RlbC9tb2RlbC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvbW9kZWwvbW9kZWxTcHJpbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2Fib3V0c3ByaW50LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hdWRpb2NhbGwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC9tYWluLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hdWRpb2NhbGwvc3RhcnQtYXVkaW9jYWxsLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hdWRpb2NhbGwvdXRpbHMvZ2FtZS1yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC91dGlscy9saXN0ZW5lci1hdWRpb2NhbGwudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC91dGlscy9zdXBwb3J0aW5nLWZ1bmMudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL21haW4udHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL3NwcmludC9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvc3ByaW50L2luaXRTcHJpbnRNVkMudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL3N0YXRpc3RpY3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL3RlYW0udHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL3RleHRib29rL2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy91dGlscy9mdW5jLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy92aWV3L3ZpZXcudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3ZpZXcvdmlld1NwcmludC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cblxuY29uc3QgYXBpUGF0aCA9ICdodHRwczovL3JzbGFuZy1sZWFybmluZy1lbmdsaXNoLXdvcmRzLmhlcm9rdWFwcC5jb20vJztcbmNvbnN0IHdvcmRzRW5kcG9pbnQgPSAnd29yZHMnO1xuY29uc3QgdXNlcnNFbmRwb2ludCA9ICd1c2Vycyc7XG5jb25zdCBzaWduSW4gPSAnc2lnbmluJztcblxuZXhwb3J0IHtcbiAgYXBpUGF0aCwgd29yZHNFbmRwb2ludCwgdXNlcnNFbmRwb2ludCwgc2lnbkluLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWVsc2UtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuXG5pbXBvcnQge1xuICBhcGlQYXRoLCB1c2Vyc0VuZHBvaW50LCB3b3Jkc0VuZHBvaW50LCBzaWduSW4sXG59IGZyb20gJy4vYXBpLXBhdGgnO1xuaW1wb3J0IHsgSVVzZXIsIElXb3JkLCBJVXNlckRhdGEgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5cbmNvbnN0IGFwaSA9IHtcblxuICBhc3luYyBjcmVhdGVOZXdVc2VyKG5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8SVVzZXIgfCB1bmRlZmluZWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7dXNlcnNFbmRwb2ludH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbGVuZ3RoIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmcnKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZ2V0VXNlcihpZDogc3RyaW5nKTogUHJvbWlzZTxJVXNlciB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fS8ke2lkfWAsXG4gICAgICAgIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElVc2VyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXNlciBub3QgZm91bmQnKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgdXNlclNpZ25JbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxJVXNlckRhdGEgfCB1bmRlZmluZWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7c2lnbklufWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCB1c2VyJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGdldFdvcmRzKGdyb3VwOiBudW1iZXIsIHBhZ2U6IG51bWJlcik6IFByb21pc2U8SVdvcmRbXSB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt3b3Jkc0VuZHBvaW50fT9ncm91cD0ke2dyb3VwfSZwYWdlPSR7cGFnZX1gLFxuICAgICAgICB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJV29yZFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGdldCB3b3Jkc1wiKTtcbiAgICB9XG4gIH0sXG4gIGFzeW5jIGdldFdvcmQoaWQ6IHN0cmluZyk6IFByb21pc2U8SVdvcmQgfCB1bmRlZmluZWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7d29yZHNFbmRwb2ludH0vJHtpZH1gLFxuICAgICAgICB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJV29yZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBnZXQgd29yZFwiKTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgeyBhcGkgfTtcbiIsImNvbnN0IENvbnRlbnQgPSB7XG4gIHJlbmRlcjogKGN1c3RvbUNsYXNzID0gJycpOnN0cmluZyA9PiBgPGRpdiBjbGFzcz1cImNvbnRlbnQgJHtjdXN0b21DbGFzc31cIiBpZD1cImNvbnRlbnRcIj48L2Rpdj5gLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcbiIsImNvbnN0IEZvb3RlciA9IHtcbiAgcmVuZGVyOiAoY3VzdG9tQ2xhc3MgPSAnJyk6c3RyaW5nID0+IGA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyICR7Y3VzdG9tQ2xhc3N9XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnaXRodWItbGlua3NcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2ZseWV0aGVyXCIgY2xhc3M9XCJnaXRodWItbGlua1wiPmZseWV0aGVyPGE+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EYXJpbmE5OTJcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+RGFyaW5hOTkyPGE+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9BbGVuYURvelwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5BbGVuYURvejxhPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4+JiMxNjk7IDIwMjI8L3NwYW4+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JzLnNjaG9vbC9qcy9cIiBjbGFzcz1cInJzLWxpbmtcIj48L2E+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5gLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiZXhwb3J0IGNvbnN0IGhhc2hlcyA9IHtcbiAgbWFpbjogJyNtYWluJyxcbiAgdGV4dGJvb2s6ICcjdGV4dGJvb2snLFxuICBzdGF0aXN0aWNzOiAnI3N0YXRpc3RpY3MnLFxuICBhdWRpb2NhbGw6ICcjYXVkaW9jYWxsJyxcbiAgYWJvdXRzcHJpbnQ6ICcjYWJvdXRzcHJpbnQnLFxuICBzcHJpbnQ6ICcjc3ByaW50JyxcbiAgdGVhbTogJyN0ZWFtJyxcbn07XG4iLCJpbXBvcnQgc2hvd1VzZXIgZnJvbSAnLi4vZnVuY3Rpb25hbC9zaG93LXVzZXInO1xuaW1wb3J0IHsgaGFzaGVzIH0gZnJvbSAnLi9oYXNoZXMnO1xuXG5jb25zdCBIZWFkZXIgPSB7XG5cbiAgcmVuZGVyKGN1c3RvbUNsYXNzID0gJycpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBpZD1cIm1vZGFsLXJlc3VsdC13cmFwcGVyXCI+XG4gICAgPGRpdiBpZD1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICA8ZGl2IGlkPVwibW9kYWwtd2luZG93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiYnRuLWNsb3NlXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgICAgPGhlYWRlciBjbGFzcz1cImhlYWRlciAke2N1c3RvbUNsYXNzfVwiIGlkPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cImhlYWRlcl9fbG9nb1wiPjxhIGhyZWY9XCJcIj5SU0xhbmc8L2E+PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYXV0aFwiPlxuICAgICAgICAgICR7c2hvd1VzZXIodHJ1ZSl9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19hdXRoXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmF2IGNsYXNzPVwiaGVhZGVyX19tZW51XCI+XG4gICAgICAgICAgPHVsIGNsYXNzPVwibWVudV9fbGlzdFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke2hhc2hlcy5tYWlufVwiIGNsYXNzPVwibWVudV9fbWFpbiBtZW51X19pdGVtX2FjdGl2ZVwiPtCT0LvQsNCy0L3QsNGPPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7aGFzaGVzLnRleHRib29rfVwiIGNsYXNzPVwibWVudV9fdGV4dGJvb2tcIj7Qo9GH0LXQsdC90LjQujwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiJHtoYXNoZXMuc3RhdGlzdGljc31cIiBjbGFzcz1cIm1lbnVfX3N0YXRpY3RpY3MgbWVudV9faXRlbV9kaXNhYmxlXCI+0KHRgtCw0YLQuNGB0YLQuNC60LA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke2hhc2hlcy5hdWRpb2NhbGx9XCIgY2xhc3M9XCJtZW51X19hdWRpb2NhbGxcIj7QkNGD0LTQuNC+0LLRi9C30L7QsjwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke2hhc2hlcy5hYm91dHNwcmludH1cIiBjbGFzcz1cIm1lbnVfX3NwcmludFwiPtCh0L/RgNC40L3RgjwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke2hhc2hlcy50ZWFtfVwiIGNsYXNzPVwibWVudV9fdGVhbVwiPtCeINC60L7QvNCw0L3QtNC1PC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXJnZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXItYnVyZ2VyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ1cmdlci1tZW51XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19hdXRoXCI+XG4gICAgICAgICAgICAgICR7c2hvd1VzZXIodHJ1ZSl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fYXV0aFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwiaGVhZGVyX19tZW51XCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnVfX2xpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtoYXNoZXMubWFpbn1cIiBjbGFzcz1cIm1lbnVfX21haW4gbWVudV9faXRlbV9hY3RpdmVcIj7Qk9C70LDQstC90LDRjzwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMudGV4dGJvb2t9XCIgY2xhc3M9XCJtZW51X190ZXh0Ym9va1wiPtCj0YfQtdCx0L3QuNC6PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7aGFzaGVzLnN0YXRpc3RpY3N9XCIgY2xhc3M9XCJtZW51X19zdGF0aWN0aWNzIG1lbnVfX2l0ZW1fZGlzYWJsZVwiPtCh0YLQsNGC0LjRgdGC0LjQutCwPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke2hhc2hlcy5hdWRpb2NhbGx9XCIgY2xhc3M9XCJtZW51X19hdWRpb2NhbGxcIj7QkNGD0LTQuNC+0LLRi9C30L7QsjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMuc3ByaW50fVwiIGNsYXNzPVwibWVudV9fc3ByaW50XCI+0KHQv9GA0LjQvdGCPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke2hhc2hlcy50ZWFtfVwiIGNsYXNzPVwibWVudV9fdGVhbVwiPtCeINC60L7QvNCw0L3QtNC1PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuZXhwb3J0IGNvbnN0IGZvcm1Mb2dpbiA9IGAgPGZvcm0gY2xhc3M9XCJmb3JtLXNpZ25pblwiIGlkPVwiYXV0aFwiPiAgICAgICBcbjxoMyBjbGFzcz1cImZvcm0tc2lnbmluLWhlYWRpbmdcIj7QktCy0LXQtNC40YLQtSDRgdCy0L7QuCDQtNCw0L3QvdGL0LU8L2gzPlxuPGRpdiBjbGFzcz1cImZvcm0tc2lnbmluLWJvZHlcIj5cbiAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwidXNlci1lbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCLQktCw0YggRW1haWxcIiByZXF1aXJlZCAvPlxuICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbWlubGVuZ3RoPVwiOFwiIGlkPVwidXNlci1wYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIiByZXF1aXJlZC8+ICAgICAgXG4gIDxkaXYgY2xhc3M9XCJmb3JtLXNpZ25pbi1idXR0b25zXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1vcmFuZ2VcIiAgaWQ9XCJidXR0b24tbmV3LXVzZXJcIiB0eXBlID1cImJ1dHRvblwiPiDQoNC10LPQuNGB0YLRgNCw0YbQuNGPIDwvYnV0dG9uPiBcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLW9yYW5nZVwiIGlkPVwiYXV0b3JpenRpb25CdG5cIiB0eXBlPVwic3VibWl0XCI+0JLQvtC50YLQuDwvYnV0dG9uPiAgXG4gIDwvZGl2PlxuICA8L2Rpdj5cbjxoNCBjbGFzcz1cImZvcm0tc2lnbmluLWVycm9yXCI+PC9oND4gXG48L2Zvcm0+YDtcblxuZXhwb3J0IGNvbnN0IGZvcm1SZWdpc3RyYXRpb24gPSBgIDxmb3JtIGNsYXNzPVwiZm9ybS1zaWduaW5cIiBpZD1cInJlZ1wiPiAgICAgICBcbjxoMyBjbGFzcz1cImZvcm0tc2lnbmluLWhlYWRpbmdcIj7QktCy0LXQtNC40YLQtSDRgdCy0L7QuCDQtNCw0L3QvdGL0LU8L2gzPlxuPGRpdiBjbGFzcz1cImZvcm0tc2lnbmluLWJvZHlcIj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VyLW5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJ1c2VyLW5hbWVcIiBwbGFjZWhvbGRlcj1cItCY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIiByZXF1aXJlZD1cIlwiIC8+XG4gIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cInVzZXItZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiByZXF1aXJlZCAvPlxuICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbWlubGVuZ3RoPVwiOFwiIGlkPVwidXNlci1wYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIiByZXF1aXJlZCAvPiAgXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vcmFuZ2VcIiBpZD1cInJlZ2lzdHJhdGlvbl9idG5cIiB0eXBlPVwic3VibWl0XCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQuCDQstGF0L7QtDwvYnV0dG9uPiAgXG48L2Rpdj5cbjxoNCBjbGFzcz1cImZvcm0tcmVnLWVycm9yXCI+PC9oND4gIFxuPC9mb3JtPmA7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5leHBvcnQgY29uc3QgQnV0dG9ucyA9IHtcbiAgY3JlYXRlOiAoc3RyOnN0cmluZywgY2xhc3NOYW1lOnN0cmluZywgZGlzYWJsZWQgPSBmYWxzZSk6c3RyaW5nID0+IGA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uICR7Y2xhc3NOYW1lfVwiICR7ZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJyd9PiR7c3RyfTwvYnV0dG9uPmAsXG59O1xuIiwiaW1wb3J0IHllc0ltYWdlIGZyb20gJy4uL2Fzc2V0cy95ZXMucG5nJztcbmltcG9ydCBOb0ltYWdlIGZyb20gJy4uL2Fzc2V0cy9uby5wbmcnO1xuXG5jb25zdCBTcHJpbnRSZXN1bHRzID0ge1xuICByZW5kZXIocXVlc3Rpb25zOnN0cmluZ1tdLCBhbnN3ZXJzOmJvb2xlYW5bXSwgcmlnaHRBbnN3ZXJzOm51bWJlciwgd3JvbmdBbnN3ZXJzOm51bWJlciwgc2NvcmU6bnVtYmVyKTpzdHJpbmcge1xuICAgIGNvbnN0IHRhYmxlVGV4dENvbnRlbnQ6c3RyaW5nID0gdGhpcy5jcmVhdGVUYWJsZShxdWVzdGlvbnMsIGFuc3dlcnMpO1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250ZWluZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzcHJpbnRfX3Jlc3VsdF9fc2NvcmVcIj7QotCy0L7QuSDRgNC10LfRg9C70YzRgtCw0YI6ICR7c2NvcmV9INC+0YfQutC+0LIgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInNwcmludF9fcmVzdWx0XCI+0J/RgNCw0LLQuNC70YzQvdGL0YUg0L7RgtCy0LXRgtC+0LI6ICR7cmlnaHRBbnN3ZXJzfS4g0J7RiNC40LHQvtC6OiAke3dyb25nQW5zd2Vyc30uPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtY29udGVpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+0JLRi9GD0YfQtdC90L3Ri9C1INGB0LvQvtCy0LA6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInNwcmludF9fdGFibGVfX3Jlc3VsdFwiPiR7dGFibGVUZXh0Q29udGVudH08L3RhYmxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzcHJpbnRfX2Nsb3NlX19yZXN1bHRcIiBocmVmPVwiI21haW5cIj7Ql9Cw0LrRgNGL0YLRjDwvYT5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gIH0sXG4gIGNyZWF0ZVRhYmxlOiAocXVlc3Rpb25zOnN0cmluZ1tdLCBhbnN3ZXJzOmJvb2xlYW5bXSk6c3RyaW5nID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNyYyA9IGFuc3dlcnNbaV0gPyB5ZXNJbWFnZSA6IE5vSW1hZ2U7XG4gICAgICByZXN1bHQgKz0gYDx0cj48dGQ+JHtxdWVzdGlvbnNbaV19PC90ZD48dGQ+PGltZyBzcmM9XCIke3NyY31cIiBhbHQ9XCJ5ZXMvbm9cIj48L3RkPjwvdHI+YDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwcmludFJlc3VsdHM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5cbi8vIGltcG9ydCBtb2RhbEF1dGhvcml6YXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbCc7XG5cbmltcG9ydCB7IE1lbnVJdGVtcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCBTcHJpbnRHYW1lUGFnZSBmcm9tICcuLi9wYWdlcy9zcHJpbnQvaW5kZXgnO1xuaW1wb3J0IE1vZHVsZU1vZGVsIGZyb20gJy4uL21vZGVsL21vZGVsJztcbmltcG9ydCBsaXN0ZW5lciBmcm9tICcuLi9mdW5jdGlvbmFsL2xpc3RlbmVyJztcbmltcG9ydCBsaXN0ZW5lckF1ZGlvQ2FsbCBmcm9tICcuLi9wYWdlcy9hdWRpb2NhbGwvdXRpbHMvbGlzdGVuZXItYXVkaW9jYWxsJztcblxuY2xhc3MgTW9kdWxlQ29udHJvbGxlciB7XG4gIG15TW9kdWxlQ29udGFpbmVyITogSFRNTEVsZW1lbnQ7XG5cbiAgbXlNb2R1bGVNb2RlbCE6IE1vZHVsZU1vZGVsO1xuXG4gIG1lbnVNYWluICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVUZXh0Ym9vayAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51U3RhdGljdGljcyAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51QXVkaW9jYWxsICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVTcHJpbnQgITogSFRNTEVsZW1lbnQ7XG5cbiAgbWVudVRlYW0gITogSFRNTEVsZW1lbnQ7XG5cbiAgYnV0dG9uU3RhcnRTcHJpbnQhOiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICBzcHJpbnRMZXZlbCAhOiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGF1ZGlvY2FsbGdhbWUgITogSFRNTEVsZW1lbnQ7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50LCBtb2RlbDogTW9kdWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbCA9IG1vZGVsO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gbW9kYWxBdXRob3JpemF0aW9uLm9wZW4oKTtcbiAgICBsaXN0ZW5lci5vcGVuKCk7XG4gICAgbGlzdGVuZXJBdWRpb0NhbGwuY2xpaygpO1xuICAgIGxpc3RlbmVyQXVkaW9DYWxsLmtleWJvYXJkKCk7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNtYWluJztcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGhhc2hQYWdlTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLnVwZGF0ZVN0YXRlKGhhc2hQYWdlTmFtZSk7XG4gICAgdGhpcy5maW5kTWVudUVsZW1lbnRzKGhhc2hQYWdlTmFtZSk7XG4gICAgc3dpdGNoIChoYXNoUGFnZU5hbWUpIHtcbiAgICAgIGNhc2UgJ2Fib3V0c3ByaW50JzpcbiAgICAgICAgdGhpcy5hZGRCdXR0b25zQWJvdXRTcHJpbnRHYW1lTGlzdGVuZXJzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICBmaW5kTWVudUVsZW1lbnRzKGhhc2hOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5tZW51TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19tYWluJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51VGV4dGJvb2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fdGV4dGJvb2snKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVTdGF0aWN0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3N0YXRpY3RpY3MnKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVBdWRpb2NhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fYXVkaW9jYWxsJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51U3ByaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3NwcmludCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudVRlYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fdGVhbScpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IG9iajpNZW51SXRlbXMgPSB7XG4gICAgICBtYWluOiB0aGlzLm1lbnVNYWluLFxuICAgICAgdGV4dGJvb2s6IHRoaXMubWVudVRleHRib29rLFxuICAgICAgc3RhdGlzdGljczogdGhpcy5tZW51U3RhdGljdGljcyxcbiAgICAgIGF1ZGlvY2FsbDogdGhpcy5tZW51QXVkaW9jYWxsLFxuICAgICAgc3ByaW50OiB0aGlzLm1lbnVTcHJpbnQsXG4gICAgICBhYm91dHNwcmludDogdGhpcy5tZW51U3ByaW50LFxuICAgICAgdGVhbTogdGhpcy5tZW51VGVhbSxcbiAgICB9O1xuICAgIGlmICh0aGlzLm1lbnVNYWluKSB7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwuaGlnaGxpZ2h0QWN0aXZlTWVudUl0ZW0ob2JqLCBoYXNoTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgYWRkQnV0dG9uc0Fib3V0U3ByaW50R2FtZUxpc3RlbmVycygpOnZvaWQge1xuICAgIHRoaXMuYnV0dG9uU3RhcnRTcHJpbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19zdGFydF9fc3ByaW50JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgdGhpcy5zcHJpbnRMZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnRfX2xldmVsJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLmJ1dHRvblN0YXJ0U3ByaW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcjc3ByaW50JztcbiAgICAgIFNwcmludEdhbWVQYWdlLnNhdmVMZXZlbCh0aGlzLnNwcmludExldmVsLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVDb250cm9sbGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IE1vZHVsZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWxTcHJpbnQnO1xuXG5leHBvcnQgY2xhc3MgTW9kdWxlQ29udHJvbGxlciB7XG4gIG15TW9kdWxlQ29udGFpbmVyITogSFRNTEVsZW1lbnQ7XG5cbiAgbXlNb2R1bGVNb2RlbCE6IE1vZHVsZU1vZGVsO1xuXG4gIGJ1dHRvbkZhbHNlITogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgYnV0dG9uVHJ1ZSE6IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gIHNwcmludFRpbWVyITogSFRNTEVsZW1lbnQ7XG5cbiAgYnV0dG9uU2F5V29yZCE6SFRNTEVsZW1lbnQ7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50LCBtb2RlbDogTW9kdWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmZpbmRBdWRpb0VsZW1lbnRzKCk7XG4gICAgdGhpcy5zZXRUaW1lcigpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5teU1vZHVsZU1vZGVsLmNsZWFySW50ZXJ2YWwpO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKTp2b2lkIHtcbiAgICB0aGlzLmJ1dHRvbkZhbHNlID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19zcHJpbnRfX2ZhbHNlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgdGhpcy5idXR0b25GYWxzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5jaGVja0Fuc3dlcihmYWxzZSk7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwucHJlcGVhck5leHRXb3JkKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmJ1dHRvblRydWUgPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX3NwcmludF9fdHJ1ZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMuYnV0dG9uVHJ1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5jaGVja0Fuc3dlcih0cnVlKTtcbiAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5wcmVwZWFyTmV4dFdvcmQoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2hlY2tBbnN3ZXIoZmFsc2UpO1xuICAgICAgICB0aGlzLm15TW9kdWxlTW9kZWwucHJlcGVhck5leHRXb3JkKCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5jaGVja0Fuc3dlcih0cnVlKTtcbiAgICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnByZXBlYXJOZXh0V29yZCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5idXR0b25TYXlXb3JkID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcud29yZF9fc291bmQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLmJ1dHRvblNheVdvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcHJpbnRfX3NheV9fd29yZCcpIGFzIEhUTUxBdWRpb0VsZW1lbnQ7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwuc2F5V29yZChhdWRpbyk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kQXVkaW9FbGVtZW50cygpOnZvaWQge1xuICAgIGNvbnN0IHJpZ2h0QW5zd2VyQXVkaW8gPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNhdWRpb19fcmlnaHQnKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgIGNvbnN0IHdyb25nQW5zd2VyQXVkaW8gPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNhdWRpb19fd3JvbmcnKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgIGNvbnN0IHRpbWVvdmVyQXVkaW8gPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNhdWRpb19fdGltZW92ZXInKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbC5nZXRBdWRpbyhyaWdodEFuc3dlckF1ZGlvLCB3cm9uZ0Fuc3dlckF1ZGlvLCB0aW1lb3ZlckF1ZGlvKTtcbiAgfVxuXG4gIHNldFRpbWVyKCk6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRUaW1lciA9IHRoaXMubXlNb2R1bGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnNwcmludF9fdGltZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwuc2V0VGltZXIodGhpcy5zcHJpbnRUaW1lcik7XG4gIH1cblxuICBzZWxlY3RUcnVlKCk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLmNoZWNrQW5zd2VyKHRydWUpO1xuICB9XG5cbiAgc2VsZWN0RmFsc2UoKTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2hlY2tBbnN3ZXIoZmFsc2UpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoYXNoZXMgfSBmcm9tICcuLi9jb21wb25lbnRzL2hhc2hlcyc7XG5cbmV4cG9ydCBjbGFzcyBUZXh0Ym9va0NvbnRyb2xsZXIge1xuICBwYWdlU2VsZWN0b3I6IHN0cmluZztcblxuICB1bml0U2VsZWN0b3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih1bml0U2VsZWN0b3I6IHN0cmluZywgcGFnZVNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVuaXRTZWxlY3RvciA9IHVuaXRTZWxlY3RvcjtcbiAgICB0aGlzLnBhZ2VTZWxlY3RvciA9IHBhZ2VTZWxlY3RvcjtcbiAgfVxuXG4gIGluaXQodW5pdDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZXRFdmVudExpc3RlbmVycyh1bml0KTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKHVuaXQ6IG51bWJlcik6IHZvaWQge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCkge1xuICAgICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnModGhpcy51bml0U2VsZWN0b3IpKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgJHtoYXNoZXMudGV4dGJvb2t9LyR7KGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5kYXRhc2V0LnVuaXR9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5wYWdlU2VsZWN0b3IpKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgJHtoYXNoZXMudGV4dGJvb2t9LyR7dW5pdH0vJHsoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmRhdGFzZXQucGFnZX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAnZ28tYmFjaycpIHtcbiAgICAgICAgICBpZiAoK3dpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcvJylbMl0pIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYCR7aGFzaGVzLnRleHRib29rfS8ke3VuaXR9YDtcbiAgICAgICAgICB9IGVsc2UgeyB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGAke2hhc2hlcy50ZXh0Ym9va31gOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1zaGFkb3cgKi9cblxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgeyBmb3JtTG9naW4sIGZvcm1SZWdpc3RyYXRpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsJztcbmltcG9ydCBzaG93VXNlciBmcm9tICcuL3Nob3ctdXNlcic7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuY2xhc3MgTGlzdGVuZXIge1xuICBvcGVuKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYXV0aG9yaXphdGlvbicpKSB7XG4gICAgICAgIGNvbnN0IGJ0bkNsb3NlTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNsb3NlJyk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuICAgICAgICBjb25zdCBtb2RhbFJlc3VsdFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtcmVzdWx0LXdyYXBwZXInKTtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgd3JhcHBlciEuaW5uZXJIVE1MID0gZm9ybUxvZ2luO1xuICAgICAgICBtb2RhbFJlc3VsdFdyYXBwZXIhLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBjb25zdCB1c2VyRW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWVtYWlsJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1wYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmICh1c2VyRW1haWxJbnB1dCAmJiB1c2VyUGFzc3dvcmRJbnB1dCkge1xuICAgICAgICAgIGNvbnN0IGF1dGhGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGgnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgICBpZiAoYXV0aEZvcm0pIHtcbiAgICAgICAgICAgIGF1dGhGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBlcnJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc2lnbmluLWVycm9yJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgIGVyckZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IHVzZXJFbWFpbElucHV0IS52YWx1ZTtcbiAgICAgICAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkID0gdXNlclBhc3N3b3JkSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGFwaS51c2VyU2lnbkluKHVzZXJFbWFpbCwgdXNlclBhc3N3b3JkKVxuICAgICAgICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc3RvcmFnZS51c2VyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICBzaG93VXNlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgZXJyRm9ybS5pbm5lckhUTUwgPSAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0L3QsNC50LTQtdC9LCDQv9GA0L7QstC10YDRjNGC0LUg0YHQstC+0Lgg0LTQsNC90L3Ri9C1INC40LvQuCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMJztcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnV0dG9uTmV3VXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tbmV3LXVzZXInKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgaWYgKGJ1dHRvbk5ld1VzZXIpIHtcbiAgICAgICAgICBidXR0b25OZXdVc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKF9lOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgd3JhcHBlciEuaW5uZXJIVE1MID0gZm9ybVJlZ2lzdHJhdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItZW1haWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1wYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCB1c2VyTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItbmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAodXNlck5hbWVJbnB1dCAmJiB1c2VyRW1haWxJbnB1dCAmJiB1c2VyUGFzc3dvcmRJbnB1dCkge1xuICAgICAgICAgICAgICBjb25zdCByZWdpc3RyYXRpb25Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICAgICAgICBpZiAocmVnaXN0cmF0aW9uRm9ybSkge1xuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBlcnJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcmVnLWVycm9yJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICBlcnJGb3JtLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlckVtYWlsID0gdXNlckVtYWlsSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkID0gdXNlclBhc3N3b3JkSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlck5hbWUgPSB1c2VyTmFtZUlucHV0IS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIGFwaS5jcmVhdGVOZXdVc2VyKHVzZXJOYW1lLCB1c2VyRW1haWwsIHVzZXJQYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGFwaS51c2VyU2lnbkluKHVzZXJFbWFpbCwgdXNlclBhc3N3b3JkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2UudXNlciA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dVc2VyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyRm9ybS5pbm5lckhUTUwgPSAn0JLQvtC30LzQvtC20L3QviDRjdGC0L7RgiBlLW1haWwg0YPQttC1INC30LDQvdGP0YIsINC/0L7Qv9GA0L7QsdGD0LnRgtC1INC00YDRg9Cz0L7QuSc7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgICAgbW9kYWxSZXN1bHRXcmFwcGVyIS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9O1xuICAgICAgICBvdmVybGF5IS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICAgICAgICBidG5DbG9zZU1vZGFsIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2V4aXRfYnRuJykpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgICAgICAgc3RvcmFnZS51c2VyID0ge1xuICAgICAgICAgIG1lc3NhZ2U6ICcnLCB0b2tlbjogJycsIHJlZnJlc2hUb2tlbjogJycsIHVzZXJJZDogJycsIG5hbWU6ICcnLFxuICAgICAgICB9O1xuICAgICAgICBzaG93VXNlcihmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgbGlzdGVuZXIgPSBuZXcgTGlzdGVuZXIoKTtcbmV4cG9ydCBkZWZhdWx0IGxpc3RlbmVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5cbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93VXNlcihyZXQ6Ym9vbGVhbikgOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGxldCBjbGFzc05hbWUgPSAnYXV0aG9yaXphdGlvbic7XG4gIGxldCBjb250ZXh0ID0gJ9CS0L7QudGC0LgnO1xuICBpZiAoc3RvcmFnZS51c2VyPy50b2tlbiAhPSAnJykge1xuICAgIGNvbnRleHQgPSAn0JLRi9C50YLQuCc7XG4gICAgY2xhc3NOYW1lID0gJ2V4aXRfYnRuJztcbiAgfVxuICBjb25zdCBodG1sID0gYDxkaXYgY2xhc3M9XCJ1c2VyLXNob3dcIj4gJHtzdG9yYWdlLnVzZXI/Lm5hbWV9IDxidXR0b24gY2xhc3M9JHtjbGFzc05hbWV9PiR7Y29udGV4dH08L2J1dHRvbj4gPC9kaXY+YDtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hdXRoJykgYXMgSFRNTEVsZW1lbnQ7XG4gIGlmIChyZXQpIHtcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuICBoZWFkZXIuaW5uZXJIVE1MID0gaHRtbDtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5pbXBvcnQgeyBJVXNlciwgSVVzZXJEYXRhLCBJV29yZCB9IGZyb20gJ3R5cGVzL3R5cGVzJztcblxuY2xhc3MgU3RvcmFnZSB7XG4gIHVzZXI/OiBJVXNlckRhdGE7XG5cbiAgd29yZD86IElXb3JkO1xuXG4gIHdvcmRzPzogSVdvcmRbXTtcblxuICBsZXZlbD86IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xuICAgICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpIGFzIHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXNlciA9IHtcbiAgICAgICAgbWVzc2FnZTogJycsIHRva2VuOiAnJywgcmVmcmVzaFRva2VuOiAnJywgdXNlcklkOiAnJywgbmFtZTogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dvcmQnKSkge1xuICAgICAgdGhpcy53b3JkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd29yZCcpIGFzIHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud29yZCA9IHtcbiAgICAgICAgaWQ6ICcnLCBncm91cDogMCwgcGFnZTogMCwgd29yZDogJycsIGltYWdlOiAnJywgYXVkaW86ICcnLCBhdWRpb01lYW5pbmc6ICcnLCBhdWRpb0V4YW1wbGU6ICcnLCB0ZXh0TWVhbmluZzogJycsIHRleHRFeGFtcGxlOiAnJywgdHJhbnNjcmlwdGlvbjogJycsIHdvcmRUcmFuc2xhdGU6ICcnLCB0ZXh0TWVhbmluZ1RyYW5zbGF0ZTogJycsIHRleHRFeGFtcGxlVHJhbnNsYXRlOiAnJyxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd29yZHMnKSkge1xuICAgICAgdGhpcy53b3JkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dvcmRzJykgYXMgc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53b3JkcyA9IFtdO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdC1tZW1iZXIgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1uYW1lZC1hcy1kZWZhdWx0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG5cbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Fzcyc7XG5cbmltcG9ydCBNb2R1bGVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci9jb250cm9sbGVyJztcbmltcG9ydCBNb2R1bGVNb2RlbCBmcm9tICcuL21vZGVsL21vZGVsJztcbmltcG9ydCBNb2R1bGVWaWV3IGZyb20gJy4vdmlldy92aWV3JztcblxuaW1wb3J0IHsgQ29tcG9uZW50cywgUm91dGVzLCBJbml0aWFsT2JqIH0gZnJvbSAnLi90eXBlcy90eXBlcyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInO1xuXG5pbXBvcnQgTWFpblBhZ2UgZnJvbSAnLi9wYWdlcy9tYWluJztcblxuaW1wb3J0IFRleHRib29rUGFnZSBmcm9tICcuL3BhZ2VzL3RleHRib29rJztcbmltcG9ydCBBYm91dFRlYW1QYWdlIGZyb20gJy4vcGFnZXMvdGVhbSc7XG5pbXBvcnQgU3ByaW50R2FtZVBhZ2UgZnJvbSAnLi9wYWdlcy9zcHJpbnQvaW5kZXgnO1xuaW1wb3J0IEFib3V0U3ByaW50R2FtZVBhZ2UgZnJvbSAnLi9wYWdlcy9hYm91dHNwcmludCc7XG5pbXBvcnQgQXVkaW9jYWxsR2FtZVBhZ2UgZnJvbSAnLi9wYWdlcy9hdWRpb2NhbGwvaW5kZXgnO1xuaW1wb3J0IFN0YXRpc3RpY3NQYWdlIGZyb20gJy4vcGFnZXMvc3RhdGlzdGljcy9pbmRleCc7XG5pbXBvcnQgeyBBdWRpb2NhbGxHYW1lIH0gZnJvbSAnLi9wYWdlcy9hdWRpb2NhbGwvbWFpbic7XG5cbmNvbnN0IGNvbXBvbmVudHM6IENvbXBvbmVudHMgPSB7XG4gIGhlYWRlcjogSGVhZGVyLFxuICBjb250ZW50OiBDb250ZW50LFxuICBmb290ZXI6IEZvb3Rlcixcbn07XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0ge1xuICBtYWluOiBNYWluUGFnZSxcbiAgZGVmYXVsdDogTWFpblBhZ2UsXG4gIHRleHRib29rOiBUZXh0Ym9va1BhZ2UsXG4gIHRlYW06IEFib3V0VGVhbVBhZ2UsXG4gIHNwcmludDogU3ByaW50R2FtZVBhZ2UsXG4gIGFib3V0c3ByaW50OiBBYm91dFNwcmludEdhbWVQYWdlLFxuICBhdWRpb2NhbGw6IEF1ZGlvY2FsbEdhbWVQYWdlLFxuICBhdWRpb2NhbGxnYW1lOiBBdWRpb2NhbGxHYW1lLFxuICBzdGF0aXN0aWNzOiBTdGF0aXN0aWNzUGFnZSxcbn07XG5cbmNvbnN0IGluaXRpYWxPYmo6IEluaXRpYWxPYmogPSB7XG4gIGNvbnRhaW5lcjogJ3NwYScsXG4gIHJvdXRlcyxcbiAgY29tcG9uZW50cyxcbn07XG5cbi8qIC0tLS0tIHNwYSBpbml0IG1vZHVsZSAtLS0gKi9cbmNvbnN0IG15U1BBID0gKCgpID0+IHtcbiAgbGV0IHZpZXc6IE1vZHVsZVZpZXc7XG4gIGxldCBtb2RlbDogTW9kdWxlTW9kZWw7XG4gIGxldCBjb250cm9sbGVyOiBNb2R1bGVDb250cm9sbGVyO1xuICByZXR1cm4ge1xuICAgIGluaXQob2JqOiBJbml0aWFsT2JqKSB7XG4gICAgICB0aGlzLnJlbmRlckNvbXBvbmVudHMob2JqLmNvbnRhaW5lciwgb2JqLmNvbXBvbmVudHMpO1xuICAgICAgY29uc3QgY29udGFpbmVyU1BBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLmNvbnRhaW5lcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICB2aWV3ID0gbmV3IE1vZHVsZVZpZXcoKTtcbiAgICAgIG1vZGVsID0gbmV3IE1vZHVsZU1vZGVsKCk7XG4gICAgICBjb250cm9sbGVyID0gbmV3IE1vZHVsZUNvbnRyb2xsZXIoKTtcblxuICAgICAgdmlldy5pbml0KGNvbnRhaW5lclNQQSwgcm91dGVzKTtcbiAgICAgIG1vZGVsLmluaXQodmlldyk7XG4gICAgICBjb250cm9sbGVyLmluaXQoY29udGFpbmVyU1BBLCBtb2RlbCk7XG4gICAgfSxcblxuICAgIHJlbmRlckNvbXBvbmVudHMoY29udGFpbmVyOiBzdHJpbmcsIGNvbXBvbmVudHNPYmo6IENvbXBvbmVudHMpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgY29tcG9uZW50c0xpc3QgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzT2JqKTtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGNvbXBvbmVudHNMaXN0KSB7XG4gICAgICAgIHJvb3QuaW5uZXJIVE1MICs9IGNvbXBvbmVudHNPYmpbaXRlbSBhcyBrZXlvZiBDb21wb25lbnRzXS5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufSkoKTtcblxuLyogLS0tLS0tIGVuZCBhcHAgbW9kdWxlIC0tLS0tICovXG5cbi8qKiAqIC0tLSBpbml0IG1vZHVsZSAtLS0gKiogKi9cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBteVNQQS5pbml0KGluaXRpYWxPYmopO1xufSk7XG4iLCJpbXBvcnQgTW9kZWxWaWV3IGZyb20gJy4uL3ZpZXcvdmlldyc7XG5pbXBvcnQgeyBNZW51SXRlbXMgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5cbmNsYXNzIE1vZHVsZU1vZGVsIHtcbiAgbXlNb2R1bGVWaWV3ITogTW9kZWxWaWV3O1xuXG4gIGluaXQodmlldzogTW9kZWxWaWV3KTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlVmlldyA9IHZpZXc7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShwYWdlTmFtZTpzdHJpbmcpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlckNvbnRlbnQocGFnZU5hbWUpO1xuICB9XG5cbiAgaGlnaGxpZ2h0QWN0aXZlTWVudUl0ZW0ob2JqOiBNZW51SXRlbXMsIGhhc2hOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcuaGlnaGxpZ2h0QWN0aXZlTWVudUl0ZW0ob2JqLCBoYXNoTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlTW9kZWw7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuaW1wb3J0IHsgTW9kdWxlVmlldyB9IGZyb20gJy4uL3ZpZXcvdmlld1NwcmludCc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCB7IGFwaVBhdGggfSBmcm9tICcuLi9hcGkvYXBpLXBhdGgnO1xuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgU3ByaW50R2FtZVBhZ2UgZnJvbSAnLi4vcGFnZXMvc3ByaW50L2luZGV4JztcbmltcG9ydCB7IHJhbmRvbUludGVnZXIgfSBmcm9tICcuLi91dGlscy9mdW5jJztcblxuZXhwb3J0IGNsYXNzIE1vZHVsZU1vZGVsIHtcbiAgbXlNb2R1bGVWaWV3ITogTW9kdWxlVmlldztcblxuICBsZXZlbDogbnVtYmVyID0gU3ByaW50R2FtZVBhZ2UubGV2ZWw7XG5cbiAgcGFnZXMhOiBudW1iZXJbXTtcblxuICBhY3RpdmUyMFdvcmRzICE6IElXb3JkW107XG5cbiAgYWN0aXZlV29yZE51bWJlciA9IDA7XG5cbiAgYWN0aXZlUGFnZU51bWJlciA9IDA7XG5cbiAgcmFuZG9tVHJhbnNsYXRpb25OdW1iZXIgITogbnVtYmVyO1xuXG4gIGF1ZGlvUmlnaHQgITogSFRNTEF1ZGlvRWxlbWVudDtcblxuICB0aW1lciE6bnVtYmVyO1xuXG4gIHRpbWVySWQgITogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0SW50ZXJ2YWw+O1xuXG4gIHNjb3JlID0gMDtcblxuICBzY29yZUZvclJpZ2h0QW5zd2VyID0gMTA7XG5cbiAgbWF4U2NvcmVGb3JSaWdodEFuc3dlciA9IDgwO1xuXG4gIGFtb3VudE9mUmlnaHRBbnN3ZXJzRm9yQmlnZ2VyU2NvcmUgPSAzO1xuXG4gIGFycmF5T2ZRdWVzdGlvbjogc3RyaW5nW10gPSBbXTtcblxuICBhcnJheU9mQW5zd2VyczogYm9vbGVhbltdID0gW107XG5cbiAgYW1vdW50T2ZSaWdodEFuc3dlcnMgPSAwO1xuXG4gIHJpZ2h0QW5zd2VyQXVkaW8gITogSFRNTEF1ZGlvRWxlbWVudDtcblxuICB3cm9uZ0Fuc3dlckF1ZGlvITogSFRNTEF1ZGlvRWxlbWVudDtcblxuICB0aW1lb3ZlckF1ZGlvITpIVE1MQXVkaW9FbGVtZW50O1xuXG4gIGluaXQodmlldzogTW9kdWxlVmlldyk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcgPSB2aWV3O1xuICAgIHRoaXMuZmlsbEFuZFNvcnRQYWdlcygpO1xuICAgIHRoaXMuZ2V0V29yZHNGcm9tQXBpKCk7XG4gIH1cblxuICBzYXlXb3JkKGF1ZGlvOkhUTUxBdWRpb0VsZW1lbnQpOnZvaWQge1xuICAgIGF1ZGlvLnNyYyA9IGAke2FwaVBhdGggKyB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5hY3RpdmVXb3JkTnVtYmVyXS5hdWRpb31gO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgfVxuXG4gIGZpbGxBbmRTb3J0UGFnZXMoKTp2b2lkIHtcbiAgICB0aGlzLnBhZ2VzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICB0aGlzLnBhZ2VzLnB1c2goaSk7XG4gICAgfVxuICAgIHRoaXMucGFnZXMuc29ydCgoKSA9PiAwLjUgLSBNYXRoLnJhbmRvbSgpKTtcbiAgfVxuXG4gIGFzeW5jIGdldFdvcmRzRnJvbUFwaSgpOiBQcm9taXNlPElXb3JkW10gfCB2b2lkPiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldFdvcmRzKHRoaXMubGV2ZWwsIHRoaXMucGFnZXNbdGhpcy5hY3RpdmVQYWdlTnVtYmVyXSkgYXMgSVdvcmRbXTtcbiAgICB0aGlzLmFjdGl2ZTIwV29yZHMgPSBBcnJheS5mcm9tKHJlcyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hY3RpdmUyMFdvcmRzKTtcbiAgICBpZiAodGhpcy5hY3RpdmVQYWdlTnVtYmVyID09PSAwKSB7IHRoaXMucHJlcGVhckZpcnN0V29yZCgpOyB9XG4gIH1cblxuICBwcmVwZWFyRmlyc3RXb3JkKCk6dm9pZCB7XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSB0aGlzLmdlbmVyYXRlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCB7IHdvcmQgfSA9IHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLmFjdGl2ZVdvcmROdW1iZXJdO1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlcldvcmQod29yZCwgdHJhbnNsYXRpb24pO1xuICB9XG5cbiAgcHJlcGVhck5leHRXb3JkKCk6dm9pZCB7XG4gICAgdGhpcy5jaGVja1dvcmRzTnVtYmVycygpO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdGhpcy5nZW5lcmF0ZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgeyB3b3JkIH0gPSB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5hY3RpdmVXb3JkTnVtYmVyXTtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJXb3JkKHdvcmQsIHRyYW5zbGF0aW9uKTtcbiAgICB0aGlzLmFycmF5T2ZRdWVzdGlvbi5wdXNoKHdvcmQpO1xuICB9XG5cbiAgY2hlY2tXb3Jkc051bWJlcnMoKTp2b2lkIHtcbiAgICBpZiAodGhpcy5hY3RpdmVXb3JkTnVtYmVyID09PSAxOSkge1xuICAgICAgdGhpcy5hY3RpdmVQYWdlTnVtYmVyICs9IDE7XG4gICAgICB0aGlzLmFjdGl2ZVdvcmROdW1iZXIgPSAwO1xuICAgICAgdGhpcy5nZXRXb3Jkc0Zyb21BcGkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVXb3JkTnVtYmVyICs9IDE7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVUcmFuc2xhdGlvbigpOnN0cmluZyB7XG4gICAgY29uc3QgbWluID0gKHRoaXMuYWN0aXZlV29yZE51bWJlciA+PSAyKSA/IHRoaXMuYWN0aXZlV29yZE51bWJlciAtIDIgOiAwO1xuICAgIGNvbnN0IG1heCA9ICh0aGlzLmFjdGl2ZVdvcmROdW1iZXIgKyAyIDw9IDE5KSA/IHRoaXMuYWN0aXZlV29yZE51bWJlciArIDIgOiAxOTtcbiAgICB0aGlzLnJhbmRvbVRyYW5zbGF0aW9uTnVtYmVyID0gcmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLnJhbmRvbVRyYW5zbGF0aW9uTnVtYmVyXS53b3JkVHJhbnNsYXRlO1xuICB9XG5cbiAgY2hlY2tBbnN3ZXIoYW5zd2VyOmJvb2xlYW4pOnZvaWQge1xuICAgIGNvbnN0IHRyYW5zbGF0ZTpzdHJpbmcgPSB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5hY3RpdmVXb3JkTnVtYmVyXS53b3JkVHJhbnNsYXRlO1xuICAgIGNvbnN0IHJpZ2h0VHJhbnNsYXRlOnN0cmluZyA9IHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLnJhbmRvbVRyYW5zbGF0aW9uTnVtYmVyXS53b3JkVHJhbnNsYXRlO1xuICAgIGlmICgodHJhbnNsYXRlID09PSByaWdodFRyYW5zbGF0ZSkgPT09IGFuc3dlcikge1xuICAgICAgdGhpcy5yaWdodEFuc3dlckF1ZGlvLnBsYXkoKTtcbiAgICAgIHRoaXMuYXJyYXlPZkFuc3dlcnMucHVzaCh0cnVlKTtcbiAgICAgIHRoaXMuYW5hbHl6ZVRydWVBbnN3ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53cm9uZ0Fuc3dlckF1ZGlvLnBsYXkoKTtcbiAgICAgIHRoaXMuYXJyYXlPZkFuc3dlcnMucHVzaChmYWxzZSk7XG4gICAgICB0aGlzLmFuYWx5emVGYWxzZUFuc3dlcigpO1xuICAgIH1cbiAgfVxuXG4gIHNldFRpbWVyID0gKHRpbWVyRWxlbTogSFRNTEVsZW1lbnQpOnZvaWQgPT4ge1xuICAgIHRoaXMudGltZXIgPSBOdW1iZXIodGltZXJFbGVtLnRleHRDb250ZW50KTtcblxuICAgIGNvbnN0IHRpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRpbWVyIC09IDE7XG4gICAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJUaW1lcih0aGlzLnRpbWVyLCB0aW1lckVsZW0pO1xuICAgICAgaWYgKHRoaXMudGltZXIgPT09IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xuICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGltZXIgPT09IDUpIHtcbiAgICAgICAgdGhpcy50aW1lb3ZlckF1ZGlvLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudGltZXJJZCA9IHNldEludGVydmFsKHRpY2ssIDEwMDApO1xuICB9O1xuXG4gIGNsZWFySW50ZXJ2YWwgPSAoKTp2b2lkID0+IHtcbiAgICBpZiAodGhpcy50aW1lcklkKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvdW50U2NvcmUoKTp2b2lkIHtcbiAgICB0aGlzLnNjb3JlICs9IHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlcjtcbiAgICBpZiAodGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyID09PSB0aGlzLm1heFNjb3JlRm9yUmlnaHRBbnN3ZXIpIHtcbiAgICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlclNjb3JlKFN0cmluZyh0aGlzLnNjb3JlKSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlclNjb3JlKFN0cmluZyh0aGlzLnNjb3JlKSk7XG4gICAgfVxuICB9XG5cbiAgYW5hbHl6ZUZhbHNlQW5zd2VyKCk6dm9pZCB7XG4gICAgdGhpcy5hbW91bnRPZlJpZ2h0QW5zd2VycyA9IDA7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcuY2xlYXJTcHJpbnRDb3VudCgpO1xuICAgIHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciA9IDEwO1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlckNvdW50VGV4dCh0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIpO1xuICB9XG5cbiAgYW5hbHl6ZVRydWVBbnN3ZXIoKTp2b2lkIHtcbiAgICB0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzICs9IDE7XG4gICAgdGhpcy5jb3VudFNjb3JlKCk7XG4gICAgaWYgKHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnMgPT09IHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnNGb3JCaWdnZXJTY29yZSAmJiB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgIT09IHRoaXMubWF4U2NvcmVGb3JSaWdodEFuc3dlcikge1xuICAgICAgdGhpcy5nZXRCaWdnZXJTY29yZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hbW91bnRPZlJpZ2h0QW5zd2VycyA9PT0gKHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnNGb3JCaWdnZXJTY29yZSArIDEpICYmIHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciAhPT0gdGhpcy5tYXhTY29yZUZvclJpZ2h0QW5zd2VyKSB7XG4gICAgICB0aGlzLm15TW9kdWxlVmlldy5yZXR1cm5Ub09uZVNwcmludENvdW50KCk7XG4gICAgICB0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzID0gMTtcbiAgICB9XG4gIH1cblxuICBnZXRCaWdnZXJTY29yZSgpOnZvaWQge1xuICAgIHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciA9ICh0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgPT09IHRoaXMubWF4U2NvcmVGb3JSaWdodEFuc3dlcikgPyB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgOiB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgKj0gMjtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJDb3VudFRleHQodGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyKTtcbiAgfVxuXG4gIHN0b3BHYW1lKCk6dm9pZCB7XG4gICAgbGV0IHJpZ2h0QW5zd2VycyA9IDA7XG4gICAgbGV0IHdyb25nQW5zd2VycyA9IDA7XG4gICAgdGhpcy5hcnJheU9mQW5zd2Vycy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICByaWdodEFuc3dlcnMgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyb25nQW5zd2VycyArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlclJlc3VsdHModGhpcy5hcnJheU9mUXVlc3Rpb24sIHRoaXMuYXJyYXlPZkFuc3dlcnMsIHJpZ2h0QW5zd2Vycywgd3JvbmdBbnN3ZXJzLCB0aGlzLnNjb3JlKTtcbiAgfVxuXG4gIGdldEF1ZGlvKHJpZ2h0QW5zd2VyOkhUTUxBdWRpb0VsZW1lbnQsIHdyb25nQW5zd2VyOkhUTUxBdWRpb0VsZW1lbnQsIHRpbWVvdmVyOkhUTUxBdWRpb0VsZW1lbnQpOnZvaWQge1xuICAgIHRoaXMucmlnaHRBbnN3ZXJBdWRpbyA9IHJpZ2h0QW5zd2VyO1xuICAgIHRoaXMud3JvbmdBbnN3ZXJBdWRpbyA9IHdyb25nQW5zd2VyO1xuICAgIHRoaXMudGltZW92ZXJBdWRpbyA9IHRpbWVvdmVyO1xuICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IE1vZHVsZU1vZGVsO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7IEJ1dHRvbnMgfSBmcm9tICcuLi9jb21wb25lbnRzL3NtYWxsQ29tcG9uZW50cy9idXR0b25zJztcblxuY29uc3QgQWJvdXRTcHJpbnRHYW1lUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAnYWJvdXRzcHJpbnQnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz5cbiAgICAgIDxoMiBjbGFzcz0nc3ByaW50X190aXRsZSc+0KHQv9GA0LjQvdGCPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnRfX3J1bGVzXCI+XG4gICAgICAgIDxwIGNsYXNzPVwic3ByaW50X190ZXh0XCI+0JjQs9GA0LAg0KHQv9GA0LjQvdGCINC/0L7QvNC+0LbQtdGCINGC0LXQsdC1INC/0YDQvtCy0LXRgNC40YLRjCDQutCw0Log0YXQvtGA0L7RiNC+INGC0Ysg0LfQvdCw0LXRiNGMINGB0LvQvtCy0LAuPGJyPlxuICAgICAgICDQmNCz0YDQsCDQtNC70LjRgtGB0Y8gMSDQvNC40L3Rg9GC0YMg0LjQu9C4INC/0L7QutCwINC90LUg0LfQsNC60L7QvdGH0LDRgtGM0YHRjyDRgdC70L7QstCwLjxicj5cbiAgICAgICAg0KfRgtC+0LHRiyDQtNCw0YLRjCDQvtGC0LLQtdGCLCDQutC70LjQutCw0Lkg0L/QviDQvdC10LzRgyDQvNGL0YjQutC+0Lkg0LjQu9C4INC90LDQttC40LzQsNC5INC60LvQsNCy0LjRiNC4LdGB0YLRgNC10LvQutC4LjwvcD5cbiAgICAgICAgPHA+0JLRi9Cx0LXRgNC4INGD0YDQvtCy0LXQvdGMINGB0LvQvtC20L3QvtGB0YLQuDwvcD5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cInNwcmludF9fbGV2ZWxcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGV2ZWwwXCI+0KPRgNC+0LLQtdC90YwgMTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsZXZlbDFcIj7Qo9GA0L7QstC10L3RjCAyPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxldmVsMlwiPtCj0YDQvtCy0LXQvdGMIDM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGV2ZWwzXCI+0KPRgNC+0LLQtdC90YwgNDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsZXZlbDRcIj7Qo9GA0L7QstC10L3RjCA1PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxldmVsNVwiPtCj0YDQvtCy0LXQvdGMIDY8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICR7QnV0dG9ucy5jcmVhdGUoJ9Cd0LDRh9Cw0YLRjCcsICdidXR0b25fX3N0YXJ0X19zcHJpbnQnLCBmYWxzZSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAke0Zvb3Rlci5yZW5kZXIoKX1gO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRTcHJpbnRHYW1lUGFnZTtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgeyBzdGFydFNjcmluQXVkaW9DYWxsIH0gZnJvbSAnLi9zdGFydC1hdWRpb2NhbGwnO1xuXG5jb25zdCBBdWRpb2NhbGxHYW1lUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAnYXVkaW9jYWxsJyxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgICAgPGRpdiBjbGFzcyA9ICdhdWRpby1jb250YWluZXIgJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz4gJHtzdGFydFNjcmluQXVkaW9DYWxsLnJlbmRlcigpfTwvZGl2PjtcbiAgICAgICR7Rm9vdGVyLnJlbmRlcigpfVxuICAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9jYWxsR2FtZVBhZ2U7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IHsgZ2FtZUFyZWEgfSBmcm9tICcuL3V0aWxzL2dhbWUtcmVuZGVyJztcblxuY29uc3QgQXVkaW9jYWxsR2FtZSA9IHtcbiAgLy8gaGFzaGVzOiB7XG5cbiAgLy8gICBtYWluOiAnI21haW4nLFxuXG4gIC8vIH0sXG5cbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAgICA8ZGl2IGNsYXNzID0gJ2NvbnRhaW5lcic+IFxuICAgICAgIDxhIGNsYXNzPVwiZ28tbWFpbiBcIiBocmVmPScjbWFpbicgPtCS0LXRgNC90YPRgtGM0YHRjyA8YnI+INC90LAg0LPQu9Cw0LLQvdGD0Y48L2E+IFxuICAgICAgICAgPGRpdiBjbGFzcyA9ICdnYW1lJz4gJHtnYW1lQXJlYX0gPC9kaXY+XG4gICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IHsgQXVkaW9jYWxsR2FtZSB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5leHBvcnQgY29uc3Qgc3RhcnRTY3JpbkF1ZGlvQ2FsbCA9IHtcbiAgaGFzaGVzOiB7XG5cbiAgICBhdWRpb2NhbGxHYW1lOiAnI2F1ZGlvY2FsbEdhbWUnLFxuXG4gIH0sXG5cbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIC8qIGh0bWwgKi9gIFxuXG48ZGl2IGNsYXNzPVwiYXVkaW8tY2FsbFwiPiBcbiAgPHAgY2xhc3M9XCJhdWRpby1jYWxsX190ZXh0XCI+0JIg0LjQs9GA0LUg0LDRg9C00LjQvtCy0YvQt9C+0LIg0LLQsNC80L3Rg9C20L3QviDQstGL0LHRgNCw0YLRjCDQv9GA0LDQstC40LvRjNC90YvQuSDQv9C10YDQtdCy0L7QtCDRgdC70L7QstCwLiA8YnI+XG5cbiAg0KfRgtC+0LHRiyDQuNCz0YDQsNGC0Ywg0YEg0L/QvtC80L7RidGM0Y4g0LrQu9Cw0LLQuNCw0YLRg9GA0YssINC40YHQv9C+0LvRjNC30YPQuSDQutC70LDQstC40YjQuFxuICAxLCAyLCAzLCA0LCA1ICDRh9GC0L7QsdGLINC00LDRgtGMINC+0YLQstC10YIsXG4gIHNwYWNlIC0g0LTQu9GPINCy0L7RgdC/0YDQvtC40LfQstC10LTQtdC90LjRjyDQt9Cy0YPQutCwLlxuICA8YnI+IDxicj5cbiAg0JLRi9Cx0LXRgNC4INGD0YDQvtCy0LXQvdGMINGB0LvQvtC20L3QvtGB0YLQuDo8L3A+XG4gPGEgaWQ9XCJsZXZlbDFcIiBjbGFzcz1cImJ0bi1sZXZlbCBsaW5rXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgMTwvYT5cbiBcbiA8YSBpZD1cImxldmVsMlwiIGNsYXNzPVwiYnRuLWxldmVsIGxpbmtcIiBocmVmPVwiJHt0aGlzLmhhc2hlcy5hdWRpb2NhbGxHYW1lfVwiID7Qo9GA0L7QstC10L3RjCAyPC9hPlxuXG4gPGEgaWQ9XCJsZXZlbDNcIiBjbGFzcz1cImJ0bi1sZXZlbCBsaW5rXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgMzwvYT5cblxuIDxhIGlkPVwibGV2ZWw0XCIgY2xhc3M9XCJidG4tbGV2ZWwgbGlua1wiIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbEdhbWV9XCIgPtCj0YDQvtCy0LXQvdGMIDQ8L2E+XG5cbiA8YSBpZD1cImxldmVsNVwiIGNsYXNzPVwiYnRuLWxldmVsIGxpbmtcIiBocmVmPVwiJHt0aGlzLmhhc2hlcy5hdWRpb2NhbGxHYW1lfVwiID7Qo9GA0L7QstC10L3RjCA1PC9hPlxuXG4gPGEgaWQ9XCJsZXZlbDZcIiBjbGFzcz1cImJ0bi1sZXZlbCBsaW5rXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgNjwvYT5cbmA7XG4gIH0sXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5cclxuaW1wb3J0IHsgYXBpUGF0aCB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGktcGF0aCc7XHJcbmltcG9ydCB7IHByaW50QnRuU3RyaW5nLCB3b3JkT2JqIH0gZnJvbSAnLi9zdXBwb3J0aW5nLWZ1bmMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVBcmVhID0gYCBcclxuIDxkaXYgY2xhc3M9XCJhdWRpby1jb250YWluZXItZ2FtZVwiPiBcclxuICAgIDxkaXYgY2xhc3M9XCJidG4tc291bmRcIj48ZGl2IGNsYXNzPVwic291bmQtd3JhcHBlclwiPiBcclxuICAgIDxhdWRpbyBjbGFzcz1cImF1ZGlvXCIgc3JjPVwiJHthcGlQYXRoICsgd29yZE9iai5hdWRpb31cIiBhdXRvcGxheT48L2F1ZGlvPiA8L2Rpdj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyaWdodC1hbnN3ZXJcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+ICR7cHJpbnRCdG5TdHJpbmcoKX08L2Rpdj5cclxuICA8L2Rpdj5cclxuIGA7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuXG5pbXBvcnQgeyBhcGlQYXRoIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS1wYXRoJztcbmltcG9ydCB7IGNsZWFyTG9jYWxTdG9yYWdlLCBzb3VuZEF1ZGlvLCB3b3JkT2JqIH0gZnJvbSAnLi9zdXBwb3J0aW5nLWZ1bmMnO1xuaW1wb3J0IGF1ZGlvUGF0aFdyb25nIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9hdWRpby93cm9uZy1hbnN3ZXIubXAzJztcbmltcG9ydCBhdWRpb1BhdGhSaWdodCBmcm9tICcuLi8uLi8uLi9hc3NldHMvYXVkaW8vcmlnaHQtYW5zd2VyLm1wMyc7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vLi4vLi4vZnVuY3Rpb25hbC9zdG9yYWdlJztcblxubGV0IHJvdW5kID0gMDtcbmxldCBzY29yZSA9IDA7XG5sZXQgYXJyYXlXcm9uZ1dvcmRzOiBzdHJpbmdbXSA9IFtdO1xuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcnJheVdyb25nV29yZHMnKSA9PT0gbnVsbCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlXcm9uZ1dvcmRzKSk7XG59XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlJykgPT09IG51bGwpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlJywgSlNPTi5zdHJpbmdpZnkoc2NvcmUpKTtcbn1cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm91bmQnKSA9PT0gbnVsbCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncm91bmQnLCBKU09OLnN0cmluZ2lmeShyb3VuZCkpO1xufVxuXG5jbGFzcyBMaXN0ZW5lckF1ZGlvQ2FsbCB7XG4gIGtleWJvYXJkKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnICcpIHtcbiAgICAgICAgc291bmRBdWRpbygoYXBpUGF0aCArIHdvcmRPYmouYXVkaW8pKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGFOID0gTnVtYmVyKGUua2V5KTtcbiAgICAgIGlmIChlLmtleSA9PT0gYE51bXBhZCAke2RhdGFOfWAgfHwgZS5rZXkgPT09IGAke2RhdGFOfWApIHtcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5idG4tdHJhbnNsYXRpb25bZGF0YS1udW09XCIke2RhdGFOfVwiXWApKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgKGVsZW0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xpaygpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1zb3VuZCcpKSB7XG4gICAgICAgIHNvdW5kQXVkaW8oKGFwaVBhdGggKyB3b3JkT2JqLmF1ZGlvKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXRyYW5zbGF0aW9uJykpIHtcbiAgICAgICAgcm91bmQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvdW5kJykpICsgMTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JvdW5kJywgcm91bmQudG9TdHJpbmcoKSk7XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSB3b3JkT2JqLndvcmRUcmFuc2xhdGUpIHtcbiAgICAgICAgICByaWdodEFuc3dlckZ1bmMoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdyb25nQW5zd2VyRnVuYygoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ3Jlc3RhcnQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9XG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1sZXZlbCcpKSB7XG4gICAgICAgIGNvbnN0IGRhdGFOID0gTnVtYmVyKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQucmVwbGFjZSgvW14wLTldL2csICcnKSk7XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAoYGxldmVsJHtkYXRhTn1gKSkge1xuICAgICAgICAgIHN0b3JhZ2UubGV2ZWwgPSBkYXRhTjtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGV2ZWwnLCBgJHtkYXRhTn1gKTtcbiAgICAgICAgICBjbGVhckxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLWxldmVsJykpIHtcbiAgICAvLyAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQgPT09ICdsZXZlbDEnKSB7XG4gICAgLy8gICAgICAgc3RvcmFnZS5sZXZlbCA9IDE7XG4gICAgLy8gICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xldmVsJywgJzEnKTtcbiAgICAvLyAgICAgICBjbGVhckxvY2FsU3RvcmFnZSgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAnbGV2ZWwyJykge1xuICAgIC8vICAgICAgIHN0b3JhZ2UubGV2ZWwgPSAyO1xuICAgIC8vICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsZXZlbCcsICcyJyk7XG4gICAgLy8gICAgICAgY2xlYXJMb2NhbFN0b3JhZ2UoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZCA9PT0gJ2xldmVsMycpIHtcbiAgICAvLyAgICAgICBzdG9yYWdlLmxldmVsID0gMztcbiAgICAvLyAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGV2ZWwnLCAnMycpO1xuICAgIC8vICAgICAgIGNsZWFyTG9jYWxTdG9yYWdlKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQgPT09ICdsZXZlbDQnKSB7XG4gICAgLy8gICAgICAgc3RvcmFnZS5sZXZlbCA9IDQ7XG4gICAgLy8gICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xldmVsJywgJzQnKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZCA9PT0gJ2xldmVsNScpIHtcbiAgICAvLyAgICAgICBzdG9yYWdlLmxldmVsID0gNTtcbiAgICAvLyAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGV2ZWwnLCAnNScpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAnbGV2ZWw2Jykge1xuICAgIC8vICAgICAgIHN0b3JhZ2UubGV2ZWwgPSA2O1xuICAgIC8vICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsZXZlbCcsICc2Jyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgfVxufVxuZnVuY3Rpb24gcmlnaHRBbnN3ZXJGdW5jKGVsOiBIVE1MRWxlbWVudCkge1xuICBzY29yZSA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmUnKSkgKyAxO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NvcmUnLCBzY29yZS50b1N0cmluZygpKTtcbiAgc291bmRBdWRpbygoYXVkaW9QYXRoUmlnaHQpKTtcbiAgZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXRyYW5zbGF0aW9uLXJpZ2h0Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSxcbiAgMTIwMCk7XG59XG5cbmZ1bmN0aW9uIHdyb25nQW5zd2VyRnVuYyhlbDogSFRNTEVsZW1lbnQpIHtcbiAgZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXRyYW5zbGF0aW9uLXdyb25nJyk7XG4gIGNvbnN0IHJpZ2h0QW5zd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWFuc3dlcicpIGFzIEhUTUxFbGVtZW50O1xuICBhcnJheVdyb25nV29yZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcnJheVdyb25nV29yZHMnKSEpO1xuICBpZiAocmlnaHRBbnN3ZXIpIHtcbiAgICByaWdodEFuc3dlci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImFuc3dlclwiPjxpbWcgY2xhc3M9XCJhbnN3ZXItaW1nXCIgc3JjPVwiJHthcGlQYXRoICsgd29yZE9iai5pbWFnZX1cIiBhbHQ9XCLQv9GA0LDQstC40LvRjNC90YvQuSDQvtGC0LLQtdGCXCI+PGJyPiR7d29yZE9iai53b3JkfSDigJQgJHt3b3JkT2JqLndvcmRUcmFuc2xhdGV9IDwvZGl2PmA7XG4gICAgYXJyYXlXcm9uZ1dvcmRzLnB1c2god29yZE9iai53b3JkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlXcm9uZ1dvcmRzKSk7XG4gICAgc291bmRBdWRpbygoYXVkaW9QYXRoV3JvbmcpKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9LFxuICAgIDIyMDApO1xuICB9XG59XG5cbmNvbnN0IGxpc3RlbmVyQXVkaW9DYWxsID0gbmV3IExpc3RlbmVyQXVkaW9DYWxsKCk7XG5leHBvcnQgZGVmYXVsdCBsaXN0ZW5lckF1ZGlvQ2FsbDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tc2hhZG93ICovXG5cbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi9mdW5jdGlvbmFsL3N0b3JhZ2UnO1xuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICcuLi8uLi8uLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyBhcGlQYXRoIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS1wYXRoJztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xuXG4vLyDQstGL0LHQvtGAINGD0YDQvtCy0L3RjyDQtNC70Y8g0LjQs9GA0Ysg0Lgg0YHRgtGA0LDQvdC40YbRi1xubGV0IGdyb3VwID0gMDtcbmxldCBwYWdlID0gMDtcbmxldCBhcnJheWxldmVsOiBudW1iZXJbXSA9IFtdO1xuZnVuY3Rpb24gbGV2ZWxHYW1lKCk6IHZvaWQge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xldmVsJykpIHtcbiAgICBncm91cCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGV2ZWwnKSkgLSAxO1xuICAgIHBhZ2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMzAgLSAwICsgMSkpICsgMDtcbiAgICBhcnJheWxldmVsID0gW2dyb3VwLCBwYWdlXTtcbiAgfVxufVxubGV2ZWxHYW1lKCk7XG5cbi8vINC60L7QvdGB0YLQsNC90LAg0LrQvtGC0L7RgNCw0Y8g0L/QvtC70YPRh9Cw0LXRgiDRgSDRgdC10YDQstC10YDQsCDQvNCw0YHRgdC40LIg0YHQu9C+0LJcbmNvbnN0IGFwaUdldFdvcmRzID0gYXBpLmdldFdvcmRzKGdyb3VwLCBwYWdlKVxuICAudGhlbigodmFsdWUpID0+IHtcbiAgICBzdG9yYWdlLndvcmRzID0gdmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dvcmRzJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH0pO1xuLy8g0L/QvtC70YPRh9Cw0LXQvCDQvNCw0YHRgdC40LIg0L/RgNC10LLQvtC00L7QslxuZnVuY3Rpb24gZ2V0V29yZHNNYXAoKTogc3RyaW5nW10ge1xuICBhcGlHZXRXb3JkcztcbiAgY29uc3Qgd29yZHMgPSBzdG9yYWdlLndvcmRzIS5tYXAoKGl0ZW0pID0+IGl0ZW0ud29yZFRyYW5zbGF0ZSk7XG4gIHJldHVybiB3b3Jkcztcbn1cblxubGV0IHdvcmRzU3RyaW5nID0gZ2V0V29yZHNNYXAoKTtcblxuLy8g0YTQuNC70YzRgtGA0YPQtdC8INC40LfQsdCw0LLQu9GP0Y/RgdGMINC+0YIg0LTRg9Cx0LvQtdC5XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vUmVwZWF0JykpIHtcbiAgaWYgKChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub1JlcGVhdCcpISkgYXMgc3RyaW5nW10pLmxlbmd0aCA+IDApIHtcbiAgICB3b3Jkc1N0cmluZyA9IHdvcmRzU3RyaW5nLmZpbHRlcigoaXRlbSkgPT4gIShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub1JlcGVhdCcpISkgYXMgc3RyaW5nW10pLmluY2x1ZGVzKGl0ZW0pKTtcbiAgfVxufVxuLy8g0L/QtdGA0LXQvNC10YjQuNCy0LDQtdC8INC80LDRgdGB0LjQsiDQv9GA0LXQstC+0LTQvtCyXG5mdW5jdGlvbiBzaHVmZmxlKGFycmF5OnN0cmluZ1tdKSB7XG4gIGFycmF5LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG59XG5zaHVmZmxlKHdvcmRzU3RyaW5nKTtcbi8vINGB0L7Qt9C00LDQtdC8INC80LDRgdGB0Lgg0LIg0LrQvtGC0YDQvtC8INCx0YPQtNC10YIg0YLQvtGM0LrQviA2INGB0LvQvtCyINC00LvRjyDQuNCz0YDRi1xubGV0IGFycmF5U2l4V29yZHM6c3RyaW5nIFtdID0gW107XG5hcnJheVNpeFdvcmRzID0gd29yZHNTdHJpbmcuc2xpY2UoMCwgNSk7XG5cbi8vINCy0YvQsdC40YDQsNC10Lwg0YHQu9GD0YfQsNC50L3QvtC1INGB0LvQvtCy0L4g0LjQtyA2LCDQutC+0YLQvtGA0L7QtSDQsdGD0LTQtdC8INGD0LPQsNC00YvQstCw0YLRjFxuY29uc3Qgd29yZFJpZ2h0ID0gYXJyYXlTaXhXb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheVNpeFdvcmRzLmxlbmd0aCldO1xuXG4vLyDQv9C+0LvRg9GH0LDQtdC8INC00LXQu9Cw0LXQvCDQvtCx0YrQtdC60YIg0LIg0LrQvtGC0L7RgNGL0Lkg0YHQvtGF0YDQsNC90LjQvCDQstGL0LHRgNCw0L3QvdC+0LUg0YHQu9C+0LLQviDRgdC+INCy0YHQtdC80Lgg0LTQsNC90L3Ri9C80LhcbmxldCB3b3JkT2JqIDogSVdvcmQgPSB7XG4gIGlkOiAnJywgZ3JvdXA6IDAsIHBhZ2U6IDAsIHdvcmQ6ICcnLCBpbWFnZTogJycsIGF1ZGlvOiAnJywgYXVkaW9NZWFuaW5nOiAnJywgYXVkaW9FeGFtcGxlOiAnJywgdGV4dE1lYW5pbmc6ICcnLCB0ZXh0RXhhbXBsZTogJycsIHRyYW5zY3JpcHRpb246ICcnLCB3b3JkVHJhbnNsYXRlOiAnJywgdGV4dE1lYW5pbmdUcmFuc2xhdGU6ICcnLCB0ZXh0RXhhbXBsZVRyYW5zbGF0ZTogJycsXG59O1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IHN0b3JhZ2Uud29yZHMhLmxlbmd0aDsgaSsrKSB7XG4gIGlmIChzdG9yYWdlLndvcmRzIVtpXS53b3JkVHJhbnNsYXRlID09PSB3b3JkUmlnaHQpIHtcbiAgICB3b3JkT2JqID0gc3RvcmFnZS53b3JkcyFbaV07XG4gIH1cbn1cblxuLy8g0LjQt9Cx0LDQstC70Y/QtdC80YHRjyDQvtGCINC00YPQsdC70LXQuSDQsiDQvNCw0YHRgdC40LLQtSDQv9GA0LXQstC+0LTQvtCyINC/0YDQvtC+0LvQttC10L3QuNC1XG5cbmxldCBub1JlcGVhdDogc3RyaW5nW10gPSBbXTtcbm5vUmVwZWF0LnB1c2god29yZE9iai53b3JkVHJhbnNsYXRlKTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm9SZXBlYXQnKSkge1xuICBub1JlcGVhdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vUmVwZWF0JykhKTtcbiAgbm9SZXBlYXQucHVzaCh3b3JkT2JqLndvcmRUcmFuc2xhdGUpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm9SZXBlYXQnLCBKU09OLnN0cmluZ2lmeShub1JlcGVhdCkpO1xufVxuXG4vLyDRhNGD0L3QutGG0LjRjyDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8g0LDRg9C00LjQviDRgSDQv9GD0YLQtdC8INC40Lcg0L3QsNGI0LXQs9C+INC+0LHQtdC60YLQsC3RgdC70L7QstC+XG5mdW5jdGlvbiBzb3VuZEF1ZGlvKHBhdGg6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBhdWRpb2QgPSBuZXcgQXVkaW8oKTtcbiAgYXVkaW9kLnNyYyA9IGAke3BhdGh9YDtcbiAgYXVkaW9kLmF1dG9wbGF5ID0gdHJ1ZTtcbn1cblxuLy8g0YDQuNGB0YPQtdC8INC60L3QvtC/0LrQuCDRgSDQv9C10YDQtdCy0L7QtNCw0LzQuFxuZnVuY3Rpb24gcHJpbnRCdG5TdHJpbmcoKTogc3RyaW5nIHtcbiAgbGV0IGEgPSAnJztcbiAgbGV0IGNvbnRhaW5lckJ0biA9ICcgJztcbiAgaWYgKE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm91bmQnKSkgPCAxNikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlTaXhXb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgYSA9IGFycmF5U2l4V29yZHNbaV07XG4gICAgICBjb250YWluZXJCdG4gKz0gYDxidXR0b24gZGF0YS1udW09XCIke2kgKyAxfVwiIHR5cGU9XCJidXR0b25cIiBpZD1cIiR7YX1cIiBjbGFzcz1cImJ0bi10cmFuc2xhdGlvblwiPiR7YX08L2J1dHRvbj4gYDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgd29yZE9iai5hdWRpbyA9ICcnO1xuICAgIGxldCBhID0gJyc7XG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FycmF5V3JvbmdXb3JkcycpISkubGVuZ3RoID4gMCkge1xuICAgICAgYSA9IGAgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QoNC10LrQvtC80LXQvdC00YPQtdC8INCy0YvRg9GH0LjRgtGMOiZuYnNwJHsoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJykhKSBhcyBzdHJpbmdbXSkuam9pbignLFxcbicpfTwvcD4gYDtcbiAgICB9IGVsc2Uge1xuICAgICAgYSA9ICcgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QktGLINC90LjRgNCw0LfRgyDQvdC1INC+0YjQuNCx0LvQuNGB0YwhPC9wPiAnO1xuICAgIH1cbiAgICBjb250YWluZXJCdG4gKz0gYFxuICA8ZGl2IGNsYXNzPVwiZ2FtZS1vdmVyXCI+XG4gICAgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QktGLINC/0YDQvtGI0LvQuCDQuNCz0YDRgyE8L3A+XG4gICAgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QktCw0Ygg0YDQtdC30YPQu9GM0YLQsNGCOiAmbmJzcCAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpfTwvcD5cbiAgICAke2F9XG4gICAgPGRpdiBjbGFzcz1cImJ0bi1nYW1lLW92ZXItY29udGFpbmVyXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInJlc3RhcnRcIj7QndCw0YfQsNGC0Ywg0LfQsNC90L7QstC+PC9idXR0b24+XG4gICAgICA8YSAgY2xhc3M9XCJsaW5rXCIgaHJlZj1cIiNhdWRpb2NhbGxcIiA+0JLRi9Cx0YDQsNGC0Ywg0YPRgNC+0LLQtdC90YwyPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgXG4gIGA7XG4gICAgY2xlYXJMb2NhbFN0b3JhZ2UoKTtcbiAgfVxuICByZXR1cm4gY29udGFpbmVyQnRuO1xufVxuZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoKTogdm9pZCB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdub1JlcGVhdCcpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXJyYXlXcm9uZ1dvcmRzJyk7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdyb3VuZCcpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2NvcmUnKTtcbn1cblxuZXhwb3J0IHtcbiAgc291bmRBdWRpbyxcbiAgcHJpbnRCdG5TdHJpbmcsIHdvcmRPYmosXG4gIGNsZWFyTG9jYWxTdG9yYWdlLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmltcG9ydCBwaG9uZSBmcm9tICcuLi9hc3NldHMvcGhvbmUuc3ZnJztcbmltcG9ydCBkaWN0aW9uYXJ5IGZyb20gJy4uL2Fzc2V0cy9kaWN0aW9uYXJ5LnN2Zyc7XG5pbXBvcnQgcGxheSBmcm9tICcuLi9hc3NldHMvcGxheS5zdmcnO1xuaW1wb3J0IGFjc2VzcyBmcm9tICcuLi9hc3NldHMvYWNzZXNzLnN2Zyc7XG5cbmNvbnN0IE1haW5QYWdlID0ge1xuICBpZDogJ21haW4nLFxuICByZW5kZXI6ICgpOnN0cmluZyA9PiBgXG4gICAgICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VcIj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19wYWdlX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPlRoZSBXb3JsZCBpcyBZb3VycyB3aXRoIFJTTGFuZyE8L2gyPlxuICAgICAgICAgICA8cD5SU0xhbmcg4oCUINGN0YLQviDRjdGE0YTQtdC60YLQuNCy0L3Ri9C5INGB0LXRgNCy0LjRgSDQtNC70Y8g0YPQstC70LXQutCw0YLQtdC70YzQvdC+0Lkg0L/RgNCw0LrRgtC40LrQuCDQsNC90LPQu9C40LnRgdC60L7Qs9C+INGP0LfRi9C60LAuINCf0YDQuNGB0L7QtdC00LjQvdGP0LnRgdGPIVxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fcGFnZV9fYWR2YW50YWdlc1wiPlxuICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPtCf0L7Rh9C10LzRgyBSU0xhbmc/PC9oMj5cbiAgICAgICAgICAgPHVsIGNsYXNzPVwiYWR2YW50YWdlc19fbGlzdFwiPlxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHthY3Nlc3N9XCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCR0LXRgdC/0LvQsNGC0L3Ri9C5INC00L7RgdGC0YPQvzwvaDM+XG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RleHRcIj7QndCw0YjQsCDQvNC40YHRgdC40Y8g4oCUINGB0LTQtdC70LDRgtGMINC+0LHRg9GH0LXQvdC40Y8g0Y/Qt9GL0LrQsNC8INC00L7RgdGC0YPQv9C90YvQvCDQtNC70Y8g0LrQsNC20LTQvtCz0L48L3A+XG4gICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZGljdGlvbmFyeX1cIj5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0KHQu9C+0LLQsNGA0Yw8L2gzPlxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+0KnQtdC70LrQvdC40YLQtSDQu9GO0LHQvtC1INGB0LvQvtCy0L4sINGH0YLQvtCx0Ysg0YPQstC40LTQtdGC0Ywg0L7Qv9GA0LXQtNC10LvQtdC90LjQtSDQsiDQuNGB0YLQvtGH0L3QuNC60LDRhSwg0Lgg0YHQvtGF0YDQsNC90LjRgtC1INC10LPQviDQsiDRgdCy0L7QtdC8INGB0L/QuNGB0LrQtSDQutCw0YDRgtC+0YfQtdC6PC9wPlxuICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbVwiPlxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3BsYXl9XCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCY0LPRgNCw0LksINGH0YLQvtCx0Ysg0YPRh9C40YLRjNGB0Y88L2gzPlxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+0JjQs9GA0Ysg0LLQutC70Y7Rh9Cw0Y7RgiDQkNGD0LTQuNC+0LLRi9C30L7QsizQodC/0YDQuNC90YIg0Lgg0LzQvdC+0LPQvtC1INC00YDRg9Cz0L7QtS4uLjwvcD5cbiAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwaG9uZX1cIj5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0KPRh9C40YLQtdGB0Ywg0L3QsCDRhdC+0LTRgzwvaDM+XG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RleHRcIj5SU0xhbmcg0LTQvtGB0YLRg9C/0L3QsCDQtNC70Y8g0LLQtdCxINC4INC80L7QsdC40LvRjNC90YvRhSDRg9GB0YLRgNC+0LnRgdGC0LIuINCj0YfQuNGC0LXRgdGMINC40Lcg0LvRjtCx0L7Qs9C+INC80LXRgdGC0LAhPC9wPlxuICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgIDwvdWw+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICAke0Zvb3Rlci5yZW5kZXIoKX1cbiAgICBgLFxufTtcblxuLy8gZXhwb3J0IHsgTWFpblBhZ2UgfTtcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IGluaXRTcHJpbnRNVkMgfSBmcm9tICcuL2luaXRTcHJpbnRNVkMnO1xuaW1wb3J0IHsgQnV0dG9ucyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc21hbGxDb21wb25lbnRzL2J1dHRvbnMnO1xuXG5pbXBvcnQgcGFycm90cyBmcm9tICcuLi8uLi9hc3NldHMvcGFycm90cy5qcGcnO1xuaW1wb3J0IGFycm93TGVmdCBmcm9tICcuLi8uLi9hc3NldHMvYXJyb3ctbGVmdC5wbmcnO1xuaW1wb3J0IGFycm93UmlnaHQgZnJvbSAnLi4vLi4vYXNzZXRzL2Fycm93LXJpZ2h0LnBuZyc7XG5cbmltcG9ydCByaWdodEFuc3dlckF1ZGlvIGZyb20gJy4uLy4uL2Fzc2V0cy9hdWRpby9yaWdodC1hbnN3ZXIubXAzJztcbmltcG9ydCB3cm9uZ0Fuc3dlckF1ZGlvIGZyb20gJy4uLy4uL2Fzc2V0cy9hdWRpby93cm9uZy1hbnN3ZXIubXAzJztcbmltcG9ydCB0aW1lb3ZlckF1ZGlvIGZyb20gJy4uLy4uL2Fzc2V0cy9hdWRpby90aW1lLW92ZXIubXAzJztcblxuY29uc3QgU3ByaW50R2FtZVBhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ3NwcmludCcsXG4gIGxldmVsOiAwLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnRfX3Njb3JlXCI+MDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNwcmludF9fdGltZXJcIj42MDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNwcmludF9fZmllbGRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX190aXRsZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV9fY291bnRcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVfX3RleHRcIj4rIDEwINC+0YfQutC+0LIg0LfQsCDRgdC70L7QstC+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRfX2NvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9faW1nXCI+PGltZyBzcmM9JyR7cGFycm90c30nIGFsdD1cInBhcnJvdHNcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9fcXVlc3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9fd29yZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uX193b3JkXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29yZF9fc291bmRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxhdWRpbyBpZD1cInNwcmludF9fc2F5X193b3JkXCIgc3JjPVwiXCI+PC9hdWRpbz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb25fX3RyYW5zbGF0aW9uXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRfX2J1dHRvbnNcIj4ke0J1dHRvbnMuY3JlYXRlKCfQndC10LLQtdGA0L3QvicsICdidXR0b25fX3NwcmludF9fZmFsc2UnLCBmYWxzZSl9JHtCdXR0b25zLmNyZWF0ZSgn0JLQtdGA0L3QvicsICdidXR0b25fX3NwcmludF9fdHJ1ZScsIGZhbHNlKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNwcmludF9fYXJyb3dzXCI+XG4gICAgICAgIDxpbWcgc3JjPScke2Fycm93TGVmdH0nIGFsdD1cImFycm93XCI+XG4gICAgICAgIDxpbWcgc3JjPScke2Fycm93UmlnaHR9JyBhbHQ9XCJhcnJvd1wiPlxuICAgICAgPC9kaXY+XG4gICAgICA8YXVkaW8gaWQ9XCJhdWRpb19fcmlnaHRcIiBzcmM9XCIke3JpZ2h0QW5zd2VyQXVkaW99XCI+PC9hdWRpbz5cbiAgICAgIDxhdWRpbyBpZD1cImF1ZGlvX193cm9uZ1wiIHNyYz1cIiR7d3JvbmdBbnN3ZXJBdWRpb31cIj48L2F1ZGlvPlxuICAgICAgPGF1ZGlvIGlkPVwiYXVkaW9fX3RpbWVvdmVyXCIgc3JjPVwiJHt0aW1lb3ZlckF1ZGlvfVwiPjwvYXVkaW8+XG4gICAgPC9kaXY+YDtcbiAgfSxcbiAgaW5pdE1WQygpOnZvaWQge1xuICAgIGluaXRTcHJpbnRNVkMoKTtcbiAgfSxcbiAgc2F2ZUxldmVsKGxldmVsOnN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5sZXZlbCA9ICtsZXZlbFtsZXZlbC5sZW5ndGggLSAxXTtcbiAgfSxcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ByaW50R2FtZVBhZ2U7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cblxuaW1wb3J0IHsgTW9kdWxlQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL2NvbnRyb2xsZXIvY29udHJvbGxlclNwcmludCc7XG5pbXBvcnQgeyBNb2R1bGVNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVsL21vZGVsU3ByaW50JztcbmltcG9ydCB7IE1vZHVsZVZpZXcgfSBmcm9tICcuLi8uLi92aWV3L3ZpZXdTcHJpbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNwcmludE1WQygpOiB2b2lkIHtcbiAgY29uc3QgdmlldyA9IG5ldyBNb2R1bGVWaWV3KCk7XG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZHVsZU1vZGVsKCk7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgTW9kdWxlQ29udHJvbGxlcigpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ByaW50LWNvbnRlaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuICB2aWV3LmluaXQoY29udGFpbmVyKTtcbiAgbW9kZWwuaW5pdCh2aWV3KTtcbiAgY29udHJvbGxlci5pbml0KGNvbnRhaW5lciwgbW9kZWwpO1xufVxuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJztcblxuY29uc3QgU3RhdGlzdGljc1BhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ3N0YXRpc3RpY3MnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz48L2Rpdj5cbiAgICAke0Zvb3Rlci5yZW5kZXIoKX1gO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGlzdGljc1BhZ2U7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5pbXBvcnQgZm90bzEgZnJvbSAnLi4vYXNzZXRzL2dpdGh1Yi1pbWcvZmx5ZXRoZXIuanBnJztcbmltcG9ydCBmb3RvMiBmcm9tICcuLi9hc3NldHMvZ2l0aHViLWltZy9BbGVuYURvei5qcGcnO1xuaW1wb3J0IGZvdG8zIGZyb20gJy4uL2Fzc2V0cy9naXRodWItaW1nL2RhcmluYTk5Mi5qcGcnO1xuXG5jb25zdCBBYm91dFRlYW1QYWdlID0ge1xuICBjbGFzc25hbWU6ICd0ZWFtLXBhZ2UnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz5cbiAgICAgIDxwIGNsYXNzPSdvdXJ0ZWFtX190aXRsZSc+0J3QsNGI0LAg0LrQvtC80LDQvdC00LA8L3A+XG4gICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtX19jb250ZWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtX19naXRodWInPlxuICAgICAgICAgICAgPGltZyBzcmM9JyR7Zm90bzF9JyBhbHQ9J2ZvdG8nIGNsYXNzPSdvdXJ0ZWFtX19mb3Rvcyc+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2ZseWV0aGVyXCIgY2xhc3M9XCJnaXRodWItbGlua1wiPmZseWV0aGVyPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzPSdvdXJ0ZWFtX190ZWFtbGVhZCc+VGVhbUxlYWQ8L3NwYW4+XG4gICAgICAgICAgPHVsIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2xpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+QmFja2VuZDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPtCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj7QnNC40L3QuC3QuNCz0YDQsCAn0JDRg9C00LjQvtCy0YvQt9C+0LInPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+Li4uPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nb3VydGVhbSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nb3VydGVhbV9fZ2l0aHViJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPScke2ZvdG8yfScgYWx0PSdmb3RvJyBjbGFzcz0nb3VydGVhbV9fZm90b3MnPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9BbGVuYURvelwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5BbGVuYURvejwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJkZXZlbG9wbWVudF9fbGlzdFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj7QrdC70LXQutGC0YDQvtC90L3Ri9C5INGD0YfQtdCx0L3QuNC6PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+0JTQuNC30LDQudC9PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+Li4uPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+Li4uPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nb3VydGVhbSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nb3VydGVhbV9fZ2l0aHViJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPScke2ZvdG8zfScgYWx0PSdmb3RvJyBjbGFzcz0nb3VydGVhbV9fZm90b3MnPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EYXJpbmE5OTJcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+RGFyaW5hOTkyPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bCBjbGFzcz1cImRldmVsb3BtZW50X19saXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPtCT0LvQsNCy0L3QsNGPINGB0YLRgNCw0L3QuNGG0LA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj7QnNC40L3QuC3QuNCz0YDQsCAn0KHQv9GA0LjQvdGCJzwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPi4uLjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPi4uLjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAke0Zvb3Rlci5yZW5kZXIoKX1cbiAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRUZWFtUGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0ICcuL3RleHRib29rLnNjc3MnO1xuaW1wb3J0IHsgaGFzaGVzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oYXNoZXMnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vYXBpL2FwaSc7XG5pbXBvcnQgeyBJV29yZCB9IGZyb20gJy4uLy4uL3R5cGVzL3R5cGVzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7IFRleHRib29rQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL2NvbnRyb2xsZXIvY29udHJvbGxlclRleHRib29rJztcblxuY29uc3QgVGV4dGJvb2tQYWdlID0ge1xuICBjbGFzc25hbWU6ICd0ZXh0Ym9vaycsXG4gIHdvcmRsaXN0OiAnd29yZC1saXN0JyxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgY29uc3QgbG9jYXRpb25IYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKTtcbiAgICBjb25zdCB1bml0ID0gK2xvY2F0aW9uSGFzaFsxXTtcbiAgICBjb25zdCBwYWdlID0gK2xvY2F0aW9uSGFzaFsyXTtcbiAgICBsZXQgdmlldyA9ICcnO1xuICAgIGNvbnN0IG1pblVuaXQgPSAxO1xuICAgIGNvbnN0IG1heFVuaXQgPSA3O1xuICAgIGNvbnN0IHVuaXRTZWxlY3RvciA9ICd0ZXh0Ym9vay11bml0JztcbiAgICBjb25zdCBwYWdlU2VsZWN0b3IgPSAndW5pdC1wYWdlJztcbiAgICBjb25zdCBjb250cm9sbGVyVGV4dGJvb2sgPSBuZXcgVGV4dGJvb2tDb250cm9sbGVyKHVuaXRTZWxlY3RvciwgcGFnZVNlbGVjdG9yKTtcbiAgICBpZiAoIXVuaXQpIHtcbiAgICAgIHZpZXcgPSBgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjFcIj7QoNCw0LfQtNC10LsgMTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCIyXCI+0KDQsNC30LTQtdC7IDI8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiM1wiPtCg0LDQt9C00LXQuyAzPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjRcIj7QoNCw0LfQtNC10LsgNDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCI1XCI+0KDQsNC30LTQtdC7IDU8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiNlwiPtCg0LDQt9C00LXQuyA2PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjdcIj7QoNCw0LfQtNC10LsgXCLQodC70L7QttC90YvQtSDRgdC70L7QstCwXCI8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9IGVsc2UgaWYgKCFwYWdlICYmIHVuaXQgPD0gbWF4VW5pdCAmJiB1bml0ID49IG1pblVuaXQgJiYgdHlwZW9mIHVuaXQgPT09ICdudW1iZXInKSB7XG4gICAgICB2aWV3ID0gYFxuICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLW5hdmlnYXRpb24gdW5pdC1uYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXJvdW5kXCIgaWQ9XCJnby1iYWNrXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInVuaXQtbmFtZVwiPtCg0LDQt9C00LXQuyAke3VuaXR9PC9wPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8dWwgY2xhc3M9XCJ1bml0LXBhZ2VzXCI+XG4gICAgICAgICAgICAke3RoaXMucmVuZGVyUGFnZXMoKX1cbiAgICAgICAgIDwvdWw+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlldyA9IGA8ZGl2IGNsYXNzPSR7dGhpcy5jbGFzc25hbWV9PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLW5hdmlnYXRpb25cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1yb3VuZFwiIGlkPVwiZ28tYmFja1wiPjwvYnV0dG9uPlxuICAgICAgICA8cCBjbGFzcz1cInVuaXQtbmFtZVwiPtCg0LDQt9C00LXQuyAke3VuaXR9IDxzcGFuIGNsYXNzPVwidW5pdC1wYWdlLW5hbWVcIj7RgdGC0YDQsNC90LjRhtCwICR7cGFnZX08L3NwYW4+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3M9JHt0aGlzLndvcmRsaXN0fT5cbiAgICAgICAke3RoaXMuZ2V0Q2FyZHMoK3VuaXQsICtwYWdlKX1cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay1wYWdpbmF0aW9uXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2luYXRpb24tYnRuIGJ0bi1vcmFuZ2VcIj7Qn9GA0LXQtNGL0LTRg9GJ0LDRjzwvYnV0dG9uPlxuICAgICAgICAgIDxhIGNsYXNzPVwidGV4dGJvb2stZ2FtZVwiIGhyZWY9XCIke2hhc2hlcy5hdWRpb2NhbGx9XCI+0JDRg9C00LjQvtCy0YvQt9C+0LI8L2E+XG4gICAgICAgICAgPGEgY2xhc3M9XCJ0ZXh0Ym9vay1nYW1lXCIgaHJlZj1cIiR7aGFzaGVzLmFib3V0c3ByaW50fVwiPtCh0L/RgNC40L3RgjwvYT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGFnaW5hdGlvbi1idG4gYnRuLW9yYW5nZVwiPtCh0LvQtdC00YPRjtGJ0LDRjzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gICAgfVxuICAgIGNvbnRyb2xsZXJUZXh0Ym9vay5pbml0KHVuaXQpO1xuICAgIHJldHVybiBgJHtIZWFkZXIucmVuZGVyKCl9JHt2aWV3fSR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIH0sXG4gIHJlbmRlclBhZ2VzKCk6IHN0cmluZyB7XG4gICAgbGV0IHBhZ2VzID0gJyc7XG4gICAgY29uc3QgcGFnZXNDb3VudCA9IDMwO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBhZ2VzQ291bnQ7IGkgKz0gMSkge1xuICAgICAgcGFnZXMgKz0gYDxsaSBjbGFzcz1cInVuaXQtcGFnZVwiIGRhdGEtcGFnZT1cIiR7aX1cIj5QYWdlICR7aX08L2xpPmA7XG4gICAgfVxuICAgIHJldHVybiBwYWdlcztcbiAgfSxcbiAgZ2V0Q2FyZHModW5pdDogbnVtYmVyLCBwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IHdvcmRsaXN0IH0gPSB0aGlzO1xuICAgIGZ1bmN0aW9uIHJlbmRlckNhcmRzKHdvcmRzOiBJV29yZFtdKSB7XG4gICAgICBjb25zdCB3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7d29yZGxpc3R9YCk7XG4gICAgICBpZiAod29yZENvbnRhaW5lcikge1xuICAgICAgICB3b3JkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd3b3JkLWl0ZW0nKTtcbiAgICAgICAgY2FyZC5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJ3b3JkLWltYWdlXCIgXG4gIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcnNsYW5nLWxlYXJuaW5nLWVuZ2xpc2gtd29yZHMuaGVyb2t1YXBwLmNvbS8ke3dvcmRzW2ldLmltYWdlfSlcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3b3JkLWRlc2NyaXB0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cIndvcmQtcHJvbm91bmNlIHdvcmQtYXVkaW9cIj5cbiAgICA8cCBjbGFzcz1cIndvcmQtbmFtZVwiPiR7d29yZHNbaV0ud29yZH0gJHt3b3Jkc1tpXS50cmFuc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdWRpb1wiPjxhdWRpbz48L2F1ZGlvPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzPVwid29yZC1wcm9ub3VuY2UgdHJhbnNsYXRpb25cIj4ke3dvcmRzW2ldLndvcmRUcmFuc2xhdGV9PC9wPlxuICAgIDxwIGNsYXNzPVwid29yZC1leGFtcGxlXCI+JHt3b3Jkc1tpXS50ZXh0TWVhbmluZ308L3A+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLWV4YW1wbGUgdHJhbnNsYXRpb25cIj4ke3dvcmRzW2ldLnRleHRNZWFuaW5nVHJhbnNsYXRlfTwvcD5cbiAgICA8cCBjbGFzcz1cIndvcmQtZXhhbXBsZVwiPiR7d29yZHNbaV0udGV4dEV4YW1wbGV9PC9wPlxuICAgIDxwIGNsYXNzPVwid29yZC1leGFtcGxlIHRyYW5zbGF0aW9uXCI+JHt3b3Jkc1tpXS50ZXh0RXhhbXBsZVRyYW5zbGF0ZX08L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwid29yZC1ub3RlZFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1vcmFuZ2UgYnRuLWRpZmZpY3VsdFwiPtCh0LvQvtC20L3Qvj88L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tb3JhbmdlIGJ0bi1sZWFybmVkXCI+0JjQt9GD0YfQtdC90L4/PC9idXR0b24+XG4gIDwvZGl2PmA7XG4gICAgICAgIHdvcmRDb250YWluZXI/LmFwcGVuZChjYXJkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGFwaS5nZXRXb3Jkcyh1bml0IC0gMSwgcGFnZSAtIDEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZW5kZXJDYXJkcyhyZXMgYXMgSVdvcmRbXSk7XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0Ym9va1BhZ2U7XG4iLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtaW46bnVtYmVyLCBtYXg6bnVtYmVyKTpudW1iZXIge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cbiIsImltcG9ydCB7IFJvdXRlcywgTWVudUl0ZW1zIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IFNwcmludEdhbWVQYWdlIGZyb20gJy4uL3BhZ2VzL3NwcmludC9pbmRleCc7XG5cbmNsYXNzIE1vZHVsZVZpZXcge1xuICBteU1vZHVsZUNvbnRhaW5lciE6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnRlbnRDb250YWluZXIhOiBIVE1MRWxlbWVudDtcblxuICByb3V0ZXNPYmohOiBSb3V0ZXM7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50LCByb3V0ZXM6IFJvdXRlcyk6IHZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5yb3V0ZXNPYmogPSByb3V0ZXM7XG4gIH1cblxuICByZW5kZXJDb250ZW50KGhhc2hQYWdlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IHJvdXRlTmFtZSA9ICdkZWZhdWx0JztcbiAgICByb3V0ZU5hbWUgPSAoaGFzaFBhZ2VOYW1lLmxlbmd0aCkgPyBoYXNoUGFnZU5hbWUuc3BsaXQoJy8nKVswXSA6IHJvdXRlTmFtZTtcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMucm91dGVzT2JqW3JvdXRlTmFtZSBhcyBrZXlvZiBSb3V0ZXNdO1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIuaW5uZXJIVE1MID0gcm91dGUucmVuZGVyKCk7XG4gICAgaWYgKGhhc2hQYWdlTmFtZSA9PT0gJ3NwcmludCcpIHsgU3ByaW50R2FtZVBhZ2UuaW5pdE1WQygpOyB9XG4gIH1cblxuICBoaWdobGlnaHRBY3RpdmVNZW51SXRlbSA9IChvYmo6IE1lbnVJdGVtcywgaGFzaE5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmpba2V5IGFzIGtleW9mIE1lbnVJdGVtc10uY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51X19pdGVtX2FjdGl2ZScpKSB7XG4gICAgICAgIG9ialtrZXkgYXMga2V5b2YgTWVudUl0ZW1zXS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzaE5hbWUpIHtcbiAgICAgIG9ialtoYXNoTmFtZSBhcyBrZXlvZiBNZW51SXRlbXNdLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5tYWluLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVWaWV3O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCBTcHJpbnRSZXN1bHQgZnJvbSAnLi4vY29tcG9uZW50cy9zcHJpbnRyZXN1bHRzJztcbmltcG9ydCB0cnVlSW1nIGZyb20gJy4uL2Fzc2V0cy90cnVlLnBuZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2R1bGVWaWV3IHtcbiAgbXlNb2R1bGVDb250YWluZXIhOkhUTUxFbGVtZW50O1xuXG4gIGNvbnRlbnRDb250YWluZXIhOkhUTUxFbGVtZW50O1xuXG4gIHJvdXRlc09iaiE6Um91dGVzO1xuXG4gIHNwcmludFRpbWVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnRfX3RpbWVyJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50U2NvcmU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwcmludF9fc2NvcmUnKSBhcyBIVE1MRWxlbWVudDtcblxuICBzcHJpbnRDb3VudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGVfX2NvdW50JykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50Q291bnRUZXh0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZV9fdGV4dCcpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHF1ZXN0aW9uV29yZDpIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVzdGlvbl9fd29yZCcpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHF1ZXN0aW9uVHJhbnNsYXRpb246SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVlc3Rpb25fX3RyYW5zbGF0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50Q29udGVpbmVyOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwcmludC1jb250ZWluZXInKSBhcyBIVE1MRWxlbWVudDtcblxuICBpbml0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgLy8gdGhpcy5yb3V0ZXNPYmogPSByb3V0ZXM7XG4gIH1cblxuICByZW5kZXJXb3JkKHdvcmQ6IHN0cmluZywgdHJhbnNsYXRpb246IHN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5xdWVzdGlvbldvcmQudGV4dENvbnRlbnQgPSB3b3JkO1xuICAgIHRoaXMucXVlc3Rpb25UcmFuc2xhdGlvbi50ZXh0Q29udGVudCA9IHRyYW5zbGF0aW9uO1xuICB9XG5cbiAgcmVuZGVyVGltZXIodGltZXI6bnVtYmVyLCB0aW1lckVsZW06SFRNTEVsZW1lbnQpOnZvaWQge1xuICAgIHRpbWVyRWxlbS50ZXh0Q29udGVudCA9IFN0cmluZyh0aW1lcik7XG4gIH1cblxuICByZW5kZXJTY29yZShzY29yZTpzdHJpbmcsIG1heFNjb3JlPzpib29sZWFuKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludFNjb3JlLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgaWYgKG1heFNjb3JlKSB7XG4gICAgICB0aGlzLnNwcmludENvdW50LmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dHJ1ZUltZ31cIiBhbHQ9XCJpbWdcIj5gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNwcmludENvdW50LmlubmVySFRNTCArPSBgPGltZyBzcmM9XCIke3RydWVJbWd9XCIgYWx0PVwiaW1nXCI+YDtcbiAgICB9XG4gIH1cblxuICBjbGVhclNwcmludENvdW50KCk6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRDb3VudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIHJldHVyblRvT25lU3ByaW50Q291bnQoKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludENvdW50LmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dHJ1ZUltZ31cIiBhbHQ9XCJpbWdcIj5gO1xuICB9XG5cbiAgcmVuZGVyQ291bnRUZXh0KG46bnVtYmVyKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludENvdW50VGV4dC5pbm5lckhUTUwgPSBgKyAke259INC+0YfQutC+0LIg0LfQsCDRgdC70L7QstC+YDtcbiAgfVxuXG4gIHJlbmRlclJlc3VsdHMocXVlc3Rpb25zOnN0cmluZ1tdLCBhbnN3ZXJzOmJvb2xlYW5bXSwgcmlnaHRBbnN3ZXJzOm51bWJlciwgd3JvbmdBbnN3ZXJzOm51bWJlciwgc2NvcmU6bnVtYmVyKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludENvbnRlaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnNwcmludENvbnRlaW5lci5pbm5lckhUTUwgPSBgJHtTcHJpbnRSZXN1bHQucmVuZGVyKHF1ZXN0aW9ucywgYW5zd2VycywgcmlnaHRBbnN3ZXJzLCB3cm9uZ0Fuc3dlcnMsIHNjb3JlKX1gO1xuICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IE1vZHVsZVZpZXc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9