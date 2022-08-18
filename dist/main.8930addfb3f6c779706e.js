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
            <li class="menu__item"><a href="${this.hashes.aboutsprint}" class="menu__sprint">Спринт</a></li>
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


/* eslint-disable import/no-cycle */
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
const game_render_1 = __webpack_require__(/*! ./game-render */ "./src/pages/audiocall/utils/game-render.ts");
let score = 0;
let arrayWrongWords = [];
localStorage.setItem('score', score.toString());
localStorage.setItem('arrayWrongWords', JSON.stringify(arrayWrongWords));
class ListenerAudioCall {
    open() {
        document.addEventListener('click', (e) => {
            const game = document.querySelector('.game');
            if (e.target.classList.contains('btn-sound')) {
                (0, supporting_func_1.soundAudio)((api_path_1.apiPath + supporting_func_1.wordObj.audio));
            }
            if (e.target.classList.contains('btn-translation')) {
                const round = Number(localStorage.getItem('round')) + 1;
                localStorage.setItem('round', round.toString());
                if (e.target.id === supporting_func_1.wordObj.wordTranslate) {
                    score = Number(localStorage.getItem('score')) + 1;
                    localStorage.setItem('score', score.toString());
                    (0, supporting_func_1.soundAudio)((right_answer_mp3_1.default));
                    e.target.classList.add('btn-translation-right');
                }
                else {
                    e.target.classList.add('btn-translation-wrong');
                    arrayWrongWords = JSON.parse(localStorage.getItem('arrayWrongWords'));
                    arrayWrongWords.push(supporting_func_1.wordObj.word);
                    localStorage.setItem('arrayWrongWords', JSON.stringify(arrayWrongWords));
                    (0, supporting_func_1.soundAudio)((wrong_answer_mp3_1.default));
                    // game.innerHTML = '';
                    // game.innerHTML = gameArea;
                }
            }
            if (e.target.classList.contains('restart')) {
                game.innerHTML = '';
                game.innerHTML = game_render_1.gameArea;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL3RleHRib29rL3RleHRib29rLnNjc3M/ZTIwZiIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3M/YWFhZiIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvYXBpL2FwaS1wYXRoLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9hcGkvYXBpLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9tb2RhbC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9zbWFsbENvbXBvbmVudHMvYnV0dG9ucy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9zcHJpbnRyZXN1bHRzLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb250cm9sbGVyL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbnRyb2xsZXIvY29udHJvbGxlclNwcmludC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvZnVuY3Rpb25hbC9saXN0ZW5lci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvZnVuY3Rpb25hbC9zaG93LXVzZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2Z1bmN0aW9uYWwvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL21vZGVsL21vZGVsLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9tb2RlbC9tb2RlbFNwcmludC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYWJvdXRzcHJpbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL21haW4udHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC9zdGFydC1hdWRpb2NhbGwudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC91dGlscy9nYW1lLXJlbmRlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL3V0aWxzL2xpc3RlbmVyLWF1ZGlvY2FsbC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL3V0aWxzL3N1cHBvcnRpbmctZnVuYy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvbWFpbi50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvc3ByaW50L2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9zcHJpbnQvaW5pdFNwcmludE1WQy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvc3RhdGlzdGljcy9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvdGVhbS50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvdGV4dGJvb2svaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3V0aWxzL2Z1bmMudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3ZpZXcvdmlldy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvdmlldy92aWV3U3ByaW50LnRzIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuXG5jb25zdCBhcGlQYXRoID0gJ2h0dHBzOi8vcnNsYW5nLWxlYXJuaW5nLWVuZ2xpc2gtd29yZHMuaGVyb2t1YXBwLmNvbS8nO1xuY29uc3Qgd29yZHNFbmRwb2ludCA9ICd3b3Jkcyc7XG5jb25zdCB1c2Vyc0VuZHBvaW50ID0gJ3VzZXJzJztcbmNvbnN0IHNpZ25JbiA9ICdzaWduaW4nO1xuXG5leHBvcnQge1xuICBhcGlQYXRoLCB3b3Jkc0VuZHBvaW50LCB1c2Vyc0VuZHBvaW50LCBzaWduSW4sXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tZWxzZS1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG5cbmltcG9ydCB7XG4gIGFwaVBhdGgsIHVzZXJzRW5kcG9pbnQsIHdvcmRzRW5kcG9pbnQsIHNpZ25Jbixcbn0gZnJvbSAnLi9hcGktcGF0aCc7XG5pbXBvcnQgeyBJVXNlciwgSVdvcmQsIElVc2VyRGF0YSB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcblxuY29uc3QgYXBpID0ge1xuXG4gIGFzeW5jIGNyZWF0ZU5ld1VzZXIobmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxJVXNlciB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdsZW5ndGggbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZycpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBnZXRVc2VyKGlkOiBzdHJpbmcpOiBQcm9taXNlPElVc2VyIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3VzZXJzRW5kcG9pbnR9LyR7aWR9YCxcbiAgICAgICAgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSVVzZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyB1c2VyU2lnbkluKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPElVc2VyRGF0YSB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHtzaWduSW59YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHVzZXInKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZ2V0V29yZHMoZ3JvdXA6IG51bWJlciwgcGFnZTogbnVtYmVyKTogUHJvbWlzZTxJV29yZFtdIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3dvcmRzRW5kcG9pbnR9P2dyb3VwPSR7Z3JvdXB9JnBhZ2U9JHtwYWdlfWAsXG4gICAgICAgIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElXb3JkW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZ2V0IHdvcmRzXCIpO1xuICAgIH1cbiAgfSxcbiAgYXN5bmMgZ2V0V29yZChpZDogc3RyaW5nKTogUHJvbWlzZTxJV29yZCB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt3b3Jkc0VuZHBvaW50fS8ke2lkfWAsXG4gICAgICAgIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElXb3JkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGdldCB3b3JkXCIpO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCB7IGFwaSB9O1xuIiwiY29uc3QgQ29udGVudCA9IHtcbiAgcmVuZGVyOiAoY3VzdG9tQ2xhc3MgPSAnJyk6c3RyaW5nID0+IGA8ZGl2IGNsYXNzPVwiY29udGVudCAke2N1c3RvbUNsYXNzfVwiIGlkPVwiY29udGVudFwiPjwvZGl2PmAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiY29uc3QgRm9vdGVyID0ge1xuICByZW5kZXI6IChjdXN0b21DbGFzcyA9ICcnKTpzdHJpbmcgPT4gYDxmb290ZXIgY2xhc3M9XCJmb290ZXIgJHtjdXN0b21DbGFzc31cIj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2l0aHViLWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9mbHlldGhlclwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5mbHlldGhlcjxhPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGFyaW5hOTkyXCIgY2xhc3M9XCJnaXRodWItbGlua1wiPkRhcmluYTk5MjxhPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQWxlbmFEb3pcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+QWxlbmFEb3o8YT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuPiYjMTY5OyAyMDIyPC9zcGFuPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgY2xhc3M9XCJycy1saW5rXCI+PC9hPlxuICAgICAgICAgICAgPC9mb290ZXI+YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBzaG93VXNlciBmcm9tICcuLi9mdW5jdGlvbmFsL3Nob3ctdXNlcic7XG5cbmNvbnN0IEhlYWRlciA9IHtcbiAgaGFzaGVzOiB7XG4gICAgbWFpbjogJyNtYWluJyxcbiAgICB0ZXh0Ym9vazogJyN0ZXh0Ym9vaycsXG4gICAgc3RhdGlzdGljczogJyNzdGF0aXN0aWNzJyxcbiAgICBhdWRpb2NhbGw6ICcjYXVkaW9jYWxsJyxcbiAgICBhYm91dHNwcmludDogJyNhYm91dHNwcmludCcsXG4gICAgc3ByaW50OiAnI3NwcmludCcsXG4gICAgdGVhbTogJyN0ZWFtJyxcbiAgfSxcblxuICByZW5kZXIoY3VzdG9tQ2xhc3MgPSAnJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGlkPVwibW9kYWwtcmVzdWx0LXdyYXBwZXJcIj5cbiAgICA8ZGl2IGlkPVwib3ZlcmxheVwiPjwvZGl2PlxuICAgIDxkaXYgaWQ9XCJtb2RhbC13aW5kb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJidG4tY2xvc2VcIj7Qt9Cw0LrRgNGL0YLRjDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXIgJHtjdXN0b21DbGFzc31cIiBpZD1cImhlYWRlclwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJoZWFkZXJfX2xvZ29cIj48YSBocmVmPVwiXCI+UlNMYW5nPC9hPjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2F1dGhcIj5cbiAgICAgICAgICAke3Nob3dVc2VyKHRydWUpfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fYXV0aFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5hdiBjbGFzcz1cImhlYWRlcl9fbWVudVwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnVfX2xpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHt0aGlzLmhhc2hlcy5tYWlufVwiIGNsYXNzPVwibWVudV9fbWFpbiBtZW51X19pdGVtX2FjdGl2ZVwiPtCT0LvQsNCy0L3QsNGPPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMudGV4dGJvb2t9XCIgY2xhc3M9XCJtZW51X190ZXh0Ym9va1wiPtCj0YfQtdCx0L3QuNC6PC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLnN0YXRpc3RpY3N9XCIgY2xhc3M9XCJtZW51X19zdGF0aWN0aWNzIG1lbnVfX2l0ZW1fZGlzYWJsZVwiPtCh0YLQsNGC0LjRgdGC0LjQutCwPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHt0aGlzLmhhc2hlcy5hdWRpb2NhbGx9XCIgY2xhc3M9XCJtZW51X19hdWRpb2NhbGxcIj7QkNGD0LTQuNC+0LLRi9C30L7QsjwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLmFib3V0c3ByaW50fVwiIGNsYXNzPVwibWVudV9fc3ByaW50XCI+0KHQv9GA0LjQvdGCPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMudGVhbX1cIiBjbGFzcz1cIm1lbnVfX3RlYW1cIj7QniDQutC+0LzQsNC90LTQtTwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgYDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG5leHBvcnQgY29uc3QgZm9ybUxvZ2luID0gYCA8Zm9ybSBjbGFzcz1cImZvcm0tc2lnbmluXCIgaWQ9XCJhdXRoXCI+ICAgICAgIFxuPGgzIGNsYXNzPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPtCS0LLQtdC00LjRgtC1INGB0LLQvtC4INC00LDQvdC90YvQtTwvaDM+XG5cbiAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwidXNlci1lbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgcmVxdWlyZWQgLz5cbiAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1pbmxlbmd0aD1cIjhcIiBpZD1cInVzZXItcGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0L/QsNGA0L7Qu9GMXCIgcmVxdWlyZWQvPiAgICAgIFxuICBcbiAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiICBpZD1cImJ1dHRvbi1uZXctdXNlclwiIHR5cGUgPVwiYnV0dG9uXCI+INCg0LXQs9C40YHRgtGA0LDRhtC40Y8gPC9idXR0b24+IFxuICBcbjxidXR0b24gY2xhc3M9XCJidG5cIiBpZD1cImF1dG9yaXp0aW9uQnRuXCIgdHlwZT1cInN1Ym1pdFwiPtCS0L7QudGC0Lg8L2J1dHRvbj4gIFxuPGg0IGNsYXNzPVwiZm9ybS1zaWduaW4tZXJyb3JcIj48L2g0PiBcbjwvZm9ybT5gO1xuXG5leHBvcnQgY29uc3QgZm9ybVJlZ2lzdHJhdGlvbiA9IGAgPGZvcm0gY2xhc3M9XCJmb3JtLXNpZ25pblwiIGlkPVwicmVnXCI+ICAgICAgIFxuPGgzIGNsYXNzPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPtCS0LLQtdC00LjRgtC1INGB0LLQvtC4INC00LDQvdC90YvQtTwvaDM+XG5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VyLW5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJ1c2VyLW5hbWVcIiBwbGFjZWhvbGRlcj1cItCY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIiByZXF1aXJlZD1cIlwiIC8+XG4gIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cInVzZXItZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIHJlcXVpcmVkIC8+XG4gIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBtaW5sZW5ndGg9XCI4XCIgaWQ9XCJ1c2VyLXBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItC/0LDRgNC+0LvRjFwiIHJlcXVpcmVkIC8+ICBcblxuPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGlkPVwicmVnaXN0cmF0aW9uX2J0blwiIHR5cGU9XCJzdWJtaXRcIj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPINC4INCy0YXQvtC0PC9idXR0b24+ICBcbjxoNCBjbGFzcz1cImZvcm0tcmVnLWVycm9yXCI+PC9oND4gIFxuPC9mb3JtPmA7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5leHBvcnQgY29uc3QgQnV0dG9ucyA9IHtcbiAgY3JlYXRlOiAoc3RyOnN0cmluZywgY2xhc3NOYW1lOnN0cmluZywgZGlzYWJsZWQgPSBmYWxzZSk6c3RyaW5nID0+IGA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uICR7Y2xhc3NOYW1lfVwiICR7ZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJyd9PiR7c3RyfTwvYnV0dG9uPmAsXG59O1xuIiwiaW1wb3J0IHllc0ltYWdlIGZyb20gJy4uL2Fzc2V0cy95ZXMucG5nJztcbmltcG9ydCBOb0ltYWdlIGZyb20gJy4uL2Fzc2V0cy9uby5wbmcnO1xuXG5jb25zdCBTcHJpbnRSZXN1bHRzID0ge1xuICByZW5kZXIocXVlc3Rpb25zOnN0cmluZ1tdLCBhbnN3ZXJzOmJvb2xlYW5bXSwgcmlnaHRBbnN3ZXJzOm51bWJlciwgd3JvbmdBbnN3ZXJzOm51bWJlciwgc2NvcmU6bnVtYmVyKTpzdHJpbmcge1xuICAgIGNvbnN0IHRhYmxlVGV4dENvbnRlbnQ6c3RyaW5nID0gdGhpcy5jcmVhdGVUYWJsZShxdWVzdGlvbnMsIGFuc3dlcnMpO1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250ZWluZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzcHJpbnRfX3Jlc3VsdF9fc2NvcmVcIj7QotCy0L7QuSDRgNC10LfRg9C70YzRgtCw0YI6ICR7c2NvcmV9INC+0YfQutC+0LIgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInNwcmludF9fcmVzdWx0XCI+0J/RgNCw0LLQuNC70YzQvdGL0YUg0L7RgtCy0LXRgtC+0LI6ICR7cmlnaHRBbnN3ZXJzfS4g0J7RiNC40LHQvtC6OiAke3dyb25nQW5zd2Vyc30uPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtY29udGVpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+0JLRi9GD0YfQtdC90L3Ri9C1INGB0LvQvtCy0LA6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInNwcmludF9fdGFibGVfX3Jlc3VsdFwiPiR7dGFibGVUZXh0Q29udGVudH08L3RhYmxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzcHJpbnRfX2Nsb3NlX19yZXN1bHRcIiBocmVmPVwiI21haW5cIj7Ql9Cw0LrRgNGL0YLRjDwvYT5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gIH0sXG4gIGNyZWF0ZVRhYmxlOiAocXVlc3Rpb25zOnN0cmluZ1tdLCBhbnN3ZXJzOmJvb2xlYW5bXSk6c3RyaW5nID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNyYyA9IGFuc3dlcnNbaV0gPyB5ZXNJbWFnZSA6IE5vSW1hZ2U7XG4gICAgICByZXN1bHQgKz0gYDx0cj48dGQ+JHtxdWVzdGlvbnNbaV19PC90ZD48dGQ+PGltZyBzcmM9XCIke3NyY31cIiBhbHQ9XCJ5ZXMvbm9cIj48L3RkPjwvdHI+YDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwcmludFJlc3VsdHM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5cbi8vIGltcG9ydCBtb2RhbEF1dGhvcml6YXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbCc7XG5cbmltcG9ydCB7IE1lbnVJdGVtcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCBTcHJpbnRHYW1lUGFnZSBmcm9tICcuLi9wYWdlcy9zcHJpbnQvaW5kZXgnO1xuaW1wb3J0IE1vZHVsZU1vZGVsIGZyb20gJy4uL21vZGVsL21vZGVsJztcbmltcG9ydCBsaXN0ZW5lciBmcm9tICcuLi9mdW5jdGlvbmFsL2xpc3RlbmVyJztcbmltcG9ydCBsaXN0ZW5lckF1ZGlvQ2FsbCBmcm9tICcuLi9wYWdlcy9hdWRpb2NhbGwvdXRpbHMvbGlzdGVuZXItYXVkaW9jYWxsJztcblxuY2xhc3MgTW9kdWxlQ29udHJvbGxlciB7XG4gIG15TW9kdWxlQ29udGFpbmVyITogSFRNTEVsZW1lbnQ7XG5cbiAgbXlNb2R1bGVNb2RlbCE6IE1vZHVsZU1vZGVsO1xuXG4gIG1lbnVNYWluICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVUZXh0Ym9vayAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51U3RhdGljdGljcyAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51QXVkaW9jYWxsICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVTcHJpbnQgITogSFRNTEVsZW1lbnQ7XG5cbiAgbWVudVRlYW0gITogSFRNTEVsZW1lbnQ7XG5cbiAgYnV0dG9uU3RhcnRTcHJpbnQhOiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICBzcHJpbnRMZXZlbCAhOiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGF1ZGlvY2FsbGdhbWUgITogSFRNTEVsZW1lbnQ7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50LCBtb2RlbDogTW9kdWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbCA9IG1vZGVsO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gbW9kYWxBdXRob3JpemF0aW9uLm9wZW4oKTtcbiAgICBsaXN0ZW5lci5vcGVuKCk7XG4gICAgbGlzdGVuZXJBdWRpb0NhbGwub3BlbigpO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAvLyB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjbWFpbic7XG4gIH1cblxuICB1cGRhdGVTdGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBoYXNoUGFnZU5hbWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbC51cGRhdGVTdGF0ZShoYXNoUGFnZU5hbWUpO1xuICAgIHRoaXMuZmluZE1lbnVFbGVtZW50cyhoYXNoUGFnZU5hbWUpO1xuICAgIHN3aXRjaCAoaGFzaFBhZ2VOYW1lKSB7XG4gICAgICBjYXNlICdhYm91dHNwcmludCc6XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uc0Fib3V0U3ByaW50R2FtZUxpc3RlbmVycygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgZmluZE1lbnVFbGVtZW50cyhoYXNoTmFtZTpzdHJpbmcpOnZvaWQge1xuICAgIHRoaXMubWVudU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbWFpbicpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudVRleHRib29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3RleHRib29rJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51U3RhdGljdGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19zdGF0aWN0aWNzJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51QXVkaW9jYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2F1ZGlvY2FsbCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudVNwcmludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19zcHJpbnQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVUZWFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3RlYW0nKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBvYmo6TWVudUl0ZW1zID0ge1xuICAgICAgbWFpbjogdGhpcy5tZW51TWFpbixcbiAgICAgIHRleHRib29rOiB0aGlzLm1lbnVUZXh0Ym9vayxcbiAgICAgIHN0YXRpc3RpY3M6IHRoaXMubWVudVN0YXRpY3RpY3MsXG4gICAgICBhdWRpb2NhbGw6IHRoaXMubWVudUF1ZGlvY2FsbCxcbiAgICAgIHNwcmludDogdGhpcy5tZW51U3ByaW50LFxuICAgICAgYWJvdXRzcHJpbnQ6IHRoaXMubWVudVNwcmludCxcbiAgICAgIHRlYW06IHRoaXMubWVudVRlYW0sXG4gICAgfTtcbiAgICBpZiAodGhpcy5tZW51TWFpbikge1xuICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLmhpZ2hsaWdodEFjdGl2ZU1lbnVJdGVtKG9iaiwgaGFzaE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJ1dHRvbnNBYm91dFNwcmludEdhbWVMaXN0ZW5lcnMoKTp2b2lkIHtcbiAgICB0aGlzLmJ1dHRvblN0YXJ0U3ByaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fc3RhcnRfX3NwcmludCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMuc3ByaW50TGV2ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ByaW50X19sZXZlbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5idXR0b25TdGFydFNwcmludC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI3NwcmludCc7XG4gICAgICBTcHJpbnRHYW1lUGFnZS5zYXZlTGV2ZWwodGhpcy5zcHJpbnRMZXZlbC52YWx1ZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlQ29udHJvbGxlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBNb2R1bGVNb2RlbCB9IGZyb20gJy4uL21vZGVsL21vZGVsU3ByaW50JztcblxuZXhwb3J0IGNsYXNzIE1vZHVsZUNvbnRyb2xsZXIge1xuICBteU1vZHVsZUNvbnRhaW5lciE6IEhUTUxFbGVtZW50O1xuXG4gIG15TW9kdWxlTW9kZWwhOiBNb2R1bGVNb2RlbDtcblxuICBidXR0b25GYWxzZSE6IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gIGJ1dHRvblRydWUhOiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICBzcHJpbnRUaW1lciE6IEhUTUxFbGVtZW50O1xuXG4gIGJ1dHRvblNheVdvcmQhOkhUTUxFbGVtZW50O1xuXG4gIGluaXQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgbW9kZWw6IE1vZHVsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5maW5kQXVkaW9FbGVtZW50cygpO1xuICAgIHRoaXMuc2V0VGltZXIoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMubXlNb2R1bGVNb2RlbC5jbGVhckludGVydmFsKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCk6dm9pZCB7XG4gICAgdGhpcy5idXR0b25GYWxzZSA9IHRoaXMubXlNb2R1bGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fc3ByaW50X19mYWxzZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMuYnV0dG9uRmFsc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2hlY2tBbnN3ZXIoZmFsc2UpO1xuICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnByZXBlYXJOZXh0V29yZCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5idXR0b25UcnVlID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19zcHJpbnRfX3RydWUnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICB0aGlzLmJ1dHRvblRydWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2hlY2tBbnN3ZXIodHJ1ZSk7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwucHJlcGVhck5leHRXb3JkKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLmNoZWNrQW5zd2VyKGZhbHNlKTtcbiAgICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnByZXBlYXJOZXh0V29yZCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2hlY2tBbnN3ZXIodHJ1ZSk7XG4gICAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5wcmVwZWFyTmV4dFdvcmQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYnV0dG9uU2F5V29yZCA9IHRoaXMubXlNb2R1bGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLndvcmRfX3NvdW5kJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5idXR0b25TYXlXb3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3ByaW50X19zYXlfX3dvcmQnKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnNheVdvcmQoYXVkaW8pO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZEF1ZGlvRWxlbWVudHMoKTp2b2lkIHtcbiAgICBjb25zdCByaWdodEFuc3dlckF1ZGlvID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYXVkaW9fX3JpZ2h0JykgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBjb25zdCB3cm9uZ0Fuc3dlckF1ZGlvID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYXVkaW9fX3dyb25nJykgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBjb25zdCB0aW1lb3ZlckF1ZGlvID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYXVkaW9fX3RpbWVvdmVyJykgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwuZ2V0QXVkaW8ocmlnaHRBbnN3ZXJBdWRpbywgd3JvbmdBbnN3ZXJBdWRpbywgdGltZW92ZXJBdWRpbyk7XG4gIH1cblxuICBzZXRUaW1lcigpOnZvaWQge1xuICAgIHRoaXMuc3ByaW50VGltZXIgPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnRfX3RpbWVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLnNldFRpbWVyKHRoaXMuc3ByaW50VGltZXIpO1xuICB9XG5cbiAgc2VsZWN0VHJ1ZSgpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbC5jaGVja0Fuc3dlcih0cnVlKTtcbiAgfVxuXG4gIHNlbGVjdEZhbHNlKCk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLmNoZWNrQW5zd2VyKGZhbHNlKTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1zaGFkb3cgKi9cblxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgeyBmb3JtTG9naW4sIGZvcm1SZWdpc3RyYXRpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsJztcbmltcG9ydCBzaG93VXNlciBmcm9tICcuL3Nob3ctdXNlcic7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuY2xhc3MgTGlzdGVuZXIge1xuICBvcGVuKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYXV0aG9yaXphdGlvbicpKSB7XG4gICAgICAgIGNvbnN0IGJ0bkNsb3NlTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNsb3NlJyk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuICAgICAgICBjb25zdCBtb2RhbFJlc3VsdFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtcmVzdWx0LXdyYXBwZXInKTtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgd3JhcHBlciEuaW5uZXJIVE1MID0gZm9ybUxvZ2luO1xuICAgICAgICBtb2RhbFJlc3VsdFdyYXBwZXIhLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBjb25zdCB1c2VyRW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWVtYWlsJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1wYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmICh1c2VyRW1haWxJbnB1dCAmJiB1c2VyUGFzc3dvcmRJbnB1dCkge1xuICAgICAgICAgIGNvbnN0IGF1dGhGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGgnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgICBpZiAoYXV0aEZvcm0pIHtcbiAgICAgICAgICAgIGF1dGhGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBlcnJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc2lnbmluLWVycm9yJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgIGVyckZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IHVzZXJFbWFpbElucHV0IS52YWx1ZTtcbiAgICAgICAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkID0gdXNlclBhc3N3b3JkSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGFwaS51c2VyU2lnbkluKHVzZXJFbWFpbCwgdXNlclBhc3N3b3JkKVxuICAgICAgICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc3RvcmFnZS51c2VyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICBzaG93VXNlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgZXJyRm9ybS5pbm5lckhUTUwgPSAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0L3QsNC50LTQtdC9LCDQv9GA0L7QstC10YDRjNGC0LUg0YHQstC+0Lgg0LTQsNC90L3Ri9C1INC40LvQuCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMJztcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnV0dG9uTmV3VXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tbmV3LXVzZXInKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgaWYgKGJ1dHRvbk5ld1VzZXIpIHtcbiAgICAgICAgICBidXR0b25OZXdVc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKF9lOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgd3JhcHBlciEuaW5uZXJIVE1MID0gZm9ybVJlZ2lzdHJhdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItZW1haWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1wYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCB1c2VyTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItbmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAodXNlck5hbWVJbnB1dCAmJiB1c2VyRW1haWxJbnB1dCAmJiB1c2VyUGFzc3dvcmRJbnB1dCkge1xuICAgICAgICAgICAgICBjb25zdCByZWdpc3RyYXRpb25Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICAgICAgICBpZiAocmVnaXN0cmF0aW9uRm9ybSkge1xuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBlcnJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcmVnLWVycm9yJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICBlcnJGb3JtLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlckVtYWlsID0gdXNlckVtYWlsSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkID0gdXNlclBhc3N3b3JkSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlck5hbWUgPSB1c2VyTmFtZUlucHV0IS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIGFwaS5jcmVhdGVOZXdVc2VyKHVzZXJOYW1lLCB1c2VyRW1haWwsIHVzZXJQYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGFwaS51c2VyU2lnbkluKHVzZXJFbWFpbCwgdXNlclBhc3N3b3JkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2UudXNlciA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dVc2VyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyRm9ybS5pbm5lckhUTUwgPSAn0JLQvtC30LzQvtC20L3QviDRjdGC0L7RgiBlLW1haWwg0YPQttC1INC30LDQvdGP0YIsINC/0L7Qv9GA0L7QsdGD0LnRgtC1INC00YDRg9Cz0L7QuSc7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgICAgbW9kYWxSZXN1bHRXcmFwcGVyIS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9O1xuICAgICAgICBvdmVybGF5IS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICAgICAgICBidG5DbG9zZU1vZGFsIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2V4aXRfYnRuJykpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgICAgICAgc3RvcmFnZS51c2VyID0ge1xuICAgICAgICAgIG1lc3NhZ2U6ICcnLCB0b2tlbjogJycsIHJlZnJlc2hUb2tlbjogJycsIHVzZXJJZDogJycsIG5hbWU6ICcnLFxuICAgICAgICB9O1xuICAgICAgICBzaG93VXNlcihmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgbGlzdGVuZXIgPSBuZXcgTGlzdGVuZXIoKTtcbmV4cG9ydCBkZWZhdWx0IGxpc3RlbmVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5cbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93VXNlcihyZXQ6Ym9vbGVhbikgOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGxldCBjbGFzc05hbWUgPSAnYXV0aG9yaXphdGlvbic7XG4gIGxldCBjb250ZXh0ID0gJ9CS0L7QudGC0LgnO1xuICBpZiAoc3RvcmFnZS51c2VyPy50b2tlbiAhPSAnJykge1xuICAgIGNvbnRleHQgPSAn0JLRi9C50YLQuCc7XG4gICAgY2xhc3NOYW1lID0gJ2V4aXRfYnRuJztcbiAgfVxuICBjb25zdCBodG1sID0gYDxkaXYgY2xhc3M9XCJ1c2VyLXNob3dcIj4gJHtzdG9yYWdlLnVzZXI/Lm5hbWV9IDxidXR0b24gY2xhc3M9JHtjbGFzc05hbWV9PiR7Y29udGV4dH08L2J1dHRvbj4gPC9kaXY+YDtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hdXRoJykgYXMgSFRNTEVsZW1lbnQ7XG4gIGlmIChyZXQpIHtcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuICBoZWFkZXIuaW5uZXJIVE1MID0gaHRtbDtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5pbXBvcnQgeyBJVXNlciwgSVVzZXJEYXRhLCBJV29yZCB9IGZyb20gJ3R5cGVzL3R5cGVzJztcblxuY2xhc3MgU3RvcmFnZSB7XG4gIHVzZXI/OiBJVXNlckRhdGE7XG5cbiAgd29yZD86IElXb3JkO1xuXG4gIHdvcmRzPzogSVdvcmRbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xuICAgICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpIGFzIHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXNlciA9IHtcbiAgICAgICAgbWVzc2FnZTogJycsIHRva2VuOiAnJywgcmVmcmVzaFRva2VuOiAnJywgdXNlcklkOiAnJywgbmFtZTogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dvcmQnKSkge1xuICAgICAgdGhpcy53b3JkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd29yZCcpIGFzIHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud29yZCA9IHtcbiAgICAgICAgaWQ6ICcnLCBncm91cDogMCwgcGFnZTogMCwgd29yZDogJycsIGltYWdlOiAnJywgYXVkaW86ICcnLCBhdWRpb01lYW5pbmc6ICcnLCBhdWRpb0V4YW1wbGU6ICcnLCB0ZXh0TWVhbmluZzogJycsIHRleHRFeGFtcGxlOiAnJywgdHJhbnNjcmlwdGlvbjogJycsIHdvcmRUcmFuc2xhdGU6ICcnLCB0ZXh0TWVhbmluZ1RyYW5zbGF0ZTogJycsIHRleHRFeGFtcGxlVHJhbnNsYXRlOiAnJyxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd29yZHMnKSkge1xuICAgICAgdGhpcy53b3JkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dvcmRzJykgYXMgc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53b3JkcyA9IFtdO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdC1tZW1iZXIgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1uYW1lZC1hcy1kZWZhdWx0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG5cbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Fzcyc7XG5cbmltcG9ydCBNb2R1bGVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci9jb250cm9sbGVyJztcbmltcG9ydCBNb2R1bGVNb2RlbCBmcm9tICcuL21vZGVsL21vZGVsJztcbmltcG9ydCBNb2R1bGVWaWV3IGZyb20gJy4vdmlldy92aWV3JztcblxuaW1wb3J0IHsgQ29tcG9uZW50cywgUm91dGVzLCBJbml0aWFsT2JqIH0gZnJvbSAnLi90eXBlcy90eXBlcyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInO1xuXG5pbXBvcnQgTWFpblBhZ2UgZnJvbSAnLi9wYWdlcy9tYWluJztcblxuaW1wb3J0IFRleHRib29rUGFnZSBmcm9tICcuL3BhZ2VzL3RleHRib29rJztcbmltcG9ydCBBYm91dFRlYW1QYWdlIGZyb20gJy4vcGFnZXMvdGVhbSc7XG5pbXBvcnQgU3ByaW50R2FtZVBhZ2UgZnJvbSAnLi9wYWdlcy9zcHJpbnQvaW5kZXgnO1xuaW1wb3J0IEFib3V0U3ByaW50R2FtZVBhZ2UgZnJvbSAnLi9wYWdlcy9hYm91dHNwcmludCc7XG5pbXBvcnQgQXVkaW9jYWxsR2FtZVBhZ2UgZnJvbSAnLi9wYWdlcy9hdWRpb2NhbGwvaW5kZXgnO1xuaW1wb3J0IFN0YXRpc3RpY3NQYWdlIGZyb20gJy4vcGFnZXMvc3RhdGlzdGljcy9pbmRleCc7XG5pbXBvcnQgQXVkaW9jYWxsR2FtZSBmcm9tICcuL3BhZ2VzL2F1ZGlvY2FsbC9tYWluJztcblxuY29uc3QgY29tcG9uZW50czogQ29tcG9uZW50cyA9IHtcbiAgaGVhZGVyOiBIZWFkZXIsXG4gIGNvbnRlbnQ6IENvbnRlbnQsXG4gIGZvb3RlcjogRm9vdGVyLFxufTtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSB7XG4gIG1haW46IE1haW5QYWdlLFxuICBkZWZhdWx0OiBNYWluUGFnZSxcbiAgdGV4dGJvb2s6IFRleHRib29rUGFnZSxcbiAgdGVhbTogQWJvdXRUZWFtUGFnZSxcbiAgc3ByaW50OiBTcHJpbnRHYW1lUGFnZSxcbiAgYWJvdXRzcHJpbnQ6IEFib3V0U3ByaW50R2FtZVBhZ2UsXG4gIGF1ZGlvY2FsbDogQXVkaW9jYWxsR2FtZVBhZ2UsXG4gIGF1ZGlvY2FsbGdhbWU6IEF1ZGlvY2FsbEdhbWUsXG4gIHN0YXRpc3RpY3M6IFN0YXRpc3RpY3NQYWdlLFxufTtcblxuY29uc3QgaW5pdGlhbE9iajogSW5pdGlhbE9iaiA9IHtcbiAgY29udGFpbmVyOiAnc3BhJyxcbiAgcm91dGVzLFxuICBjb21wb25lbnRzLFxufTtcblxuLyogLS0tLS0gc3BhIGluaXQgbW9kdWxlIC0tLSAqL1xuY29uc3QgbXlTUEEgPSAoKCkgPT4ge1xuICBsZXQgdmlldzogTW9kdWxlVmlldztcbiAgbGV0IG1vZGVsOiBNb2R1bGVNb2RlbDtcbiAgbGV0IGNvbnRyb2xsZXI6IE1vZHVsZUNvbnRyb2xsZXI7XG4gIHJldHVybiB7XG4gICAgaW5pdChvYmo6IEluaXRpYWxPYmopIHtcbiAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50cyhvYmouY29udGFpbmVyLCBvYmouY29tcG9uZW50cyk7XG4gICAgICBjb25zdCBjb250YWluZXJTUEEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmouY29udGFpbmVyKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHZpZXcgPSBuZXcgTW9kdWxlVmlldygpO1xuICAgICAgbW9kZWwgPSBuZXcgTW9kdWxlTW9kZWwoKTtcbiAgICAgIGNvbnRyb2xsZXIgPSBuZXcgTW9kdWxlQ29udHJvbGxlcigpO1xuXG4gICAgICB2aWV3LmluaXQoY29udGFpbmVyU1BBLCByb3V0ZXMpO1xuICAgICAgbW9kZWwuaW5pdCh2aWV3KTtcbiAgICAgIGNvbnRyb2xsZXIuaW5pdChjb250YWluZXJTUEEsIG1vZGVsKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyQ29tcG9uZW50cyhjb250YWluZXI6IHN0cmluZywgY29tcG9uZW50c09iajogQ29tcG9uZW50cykge1xuICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCBjb21wb25lbnRzTGlzdCA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNPYmopO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29tcG9uZW50c0xpc3QpIHtcbiAgICAgICAgcm9vdC5pbm5lckhUTUwgKz0gY29tcG9uZW50c09ialtpdGVtIGFzIGtleW9mIENvbXBvbmVudHNdLnJlbmRlcigpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59KSgpO1xuXG4vKiAtLS0tLS0gZW5kIGFwcCBtb2R1bGUgLS0tLS0gKi9cblxuLyoqICogLS0tIGluaXQgbW9kdWxlIC0tLSAqKiAqL1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIG15U1BBLmluaXQoaW5pdGlhbE9iaik7XG59KTtcbiIsImltcG9ydCBNb2RlbFZpZXcgZnJvbSAnLi4vdmlldy92aWV3JztcbmltcG9ydCB7IE1lbnVJdGVtcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcblxuY2xhc3MgTW9kdWxlTW9kZWwge1xuICBteU1vZHVsZVZpZXchOiBNb2RlbFZpZXc7XG5cbiAgaW5pdCh2aWV3OiBNb2RlbFZpZXcpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVWaWV3ID0gdmlldztcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKHBhZ2VOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyQ29udGVudChwYWdlTmFtZSk7XG4gIH1cblxuICBoaWdobGlnaHRBY3RpdmVNZW51SXRlbShvYmo6IE1lbnVJdGVtcywgaGFzaE5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5oaWdobGlnaHRBY3RpdmVNZW51SXRlbShvYmosIGhhc2hOYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVNb2RlbDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG5pbXBvcnQgeyBNb2R1bGVWaWV3IH0gZnJvbSAnLi4vdmlldy92aWV3U3ByaW50JztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2FwaS9hcGknO1xuaW1wb3J0IHsgYXBpUGF0aCB9IGZyb20gJy4uL2FwaS9hcGktcGF0aCc7XG5pbXBvcnQgeyBJV29yZCB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCBTcHJpbnRHYW1lUGFnZSBmcm9tICcuLi9wYWdlcy9zcHJpbnQvaW5kZXgnO1xuaW1wb3J0IHsgcmFuZG9tSW50ZWdlciB9IGZyb20gJy4uL3V0aWxzL2Z1bmMnO1xuXG5leHBvcnQgY2xhc3MgTW9kdWxlTW9kZWwge1xuICBteU1vZHVsZVZpZXchOiBNb2R1bGVWaWV3O1xuXG4gIGxldmVsOiBudW1iZXIgPSBTcHJpbnRHYW1lUGFnZS5sZXZlbDtcblxuICBwYWdlcyE6IG51bWJlcltdO1xuXG4gIGFjdGl2ZTIwV29yZHMgITogSVdvcmRbXTtcblxuICBhY3RpdmVXb3JkTnVtYmVyID0gMDtcblxuICBhY3RpdmVQYWdlTnVtYmVyID0gMDtcblxuICByYW5kb21UcmFuc2xhdGlvbk51bWJlciAhOiBudW1iZXI7XG5cbiAgYXVkaW9SaWdodCAhOiBIVE1MQXVkaW9FbGVtZW50O1xuXG4gIHRpbWVyITpudW1iZXI7XG5cbiAgdGltZXJJZCAhOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD47XG5cbiAgc2NvcmUgPSAwO1xuXG4gIHNjb3JlRm9yUmlnaHRBbnN3ZXIgPSAxMDtcblxuICBtYXhTY29yZUZvclJpZ2h0QW5zd2VyID0gODA7XG5cbiAgYW1vdW50T2ZSaWdodEFuc3dlcnNGb3JCaWdnZXJTY29yZSA9IDM7XG5cbiAgYXJyYXlPZlF1ZXN0aW9uOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGFycmF5T2ZBbnN3ZXJzOiBib29sZWFuW10gPSBbXTtcblxuICBhbW91bnRPZlJpZ2h0QW5zd2VycyA9IDA7XG5cbiAgcmlnaHRBbnN3ZXJBdWRpbyAhOiBIVE1MQXVkaW9FbGVtZW50O1xuXG4gIHdyb25nQW5zd2VyQXVkaW8hOiBIVE1MQXVkaW9FbGVtZW50O1xuXG4gIHRpbWVvdmVyQXVkaW8hOkhUTUxBdWRpb0VsZW1lbnQ7XG5cbiAgaW5pdCh2aWV3OiBNb2R1bGVWaWV3KTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlVmlldyA9IHZpZXc7XG4gICAgdGhpcy5maWxsQW5kU29ydFBhZ2VzKCk7XG4gICAgdGhpcy5nZXRXb3Jkc0Zyb21BcGkoKTtcbiAgfVxuXG4gIHNheVdvcmQoYXVkaW86SFRNTEF1ZGlvRWxlbWVudCk6dm9pZCB7XG4gICAgYXVkaW8uc3JjID0gYCR7YXBpUGF0aCArIHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLmFjdGl2ZVdvcmROdW1iZXJdLmF1ZGlvfWA7XG4gICAgYXVkaW8ucGxheSgpO1xuICB9XG5cbiAgZmlsbEFuZFNvcnRQYWdlcygpOnZvaWQge1xuICAgIHRoaXMucGFnZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgIHRoaXMucGFnZXMucHVzaChpKTtcbiAgICB9XG4gICAgdGhpcy5wYWdlcy5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpO1xuICB9XG5cbiAgYXN5bmMgZ2V0V29yZHNGcm9tQXBpKCk6IFByb21pc2U8SVdvcmRbXSB8IHZvaWQ+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0V29yZHModGhpcy5sZXZlbCwgdGhpcy5wYWdlc1t0aGlzLmFjdGl2ZVBhZ2VOdW1iZXJdKSBhcyBJV29yZFtdO1xuICAgIHRoaXMuYWN0aXZlMjBXb3JkcyA9IEFycmF5LmZyb20ocmVzKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFjdGl2ZTIwV29yZHMpO1xuICAgIGlmICh0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIgPT09IDApIHsgdGhpcy5wcmVwZWFyRmlyc3RXb3JkKCk7IH1cbiAgfVxuXG4gIHByZXBlYXJGaXJzdFdvcmQoKTp2b2lkIHtcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMuZ2VuZXJhdGVUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IHsgd29yZCB9ID0gdGhpcy5hY3RpdmUyMFdvcmRzW3RoaXMuYWN0aXZlV29yZE51bWJlcl07XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyV29yZCh3b3JkLCB0cmFuc2xhdGlvbik7XG4gIH1cblxuICBwcmVwZWFyTmV4dFdvcmQoKTp2b2lkIHtcbiAgICB0aGlzLmNoZWNrV29yZHNOdW1iZXJzKCk7XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSB0aGlzLmdlbmVyYXRlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCB7IHdvcmQgfSA9IHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLmFjdGl2ZVdvcmROdW1iZXJdO1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlcldvcmQod29yZCwgdHJhbnNsYXRpb24pO1xuICAgIHRoaXMuYXJyYXlPZlF1ZXN0aW9uLnB1c2god29yZCk7XG4gIH1cblxuICBjaGVja1dvcmRzTnVtYmVycygpOnZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZVdvcmROdW1iZXIgPT09IDE5KSB7XG4gICAgICB0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIgKz0gMTtcbiAgICAgIHRoaXMuYWN0aXZlV29yZE51bWJlciA9IDA7XG4gICAgICB0aGlzLmdldFdvcmRzRnJvbUFwaSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZVdvcmROdW1iZXIgKz0gMTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZVRyYW5zbGF0aW9uKCk6c3RyaW5nIHtcbiAgICBjb25zdCBtaW4gPSAodGhpcy5hY3RpdmVXb3JkTnVtYmVyID49IDIpID8gdGhpcy5hY3RpdmVXb3JkTnVtYmVyIC0gMiA6IDA7XG4gICAgY29uc3QgbWF4ID0gKHRoaXMuYWN0aXZlV29yZE51bWJlciArIDIgPD0gMTkpID8gdGhpcy5hY3RpdmVXb3JkTnVtYmVyICsgMiA6IDE5O1xuICAgIHRoaXMucmFuZG9tVHJhbnNsYXRpb25OdW1iZXIgPSByYW5kb21JbnRlZ2VyKG1pbiwgbWF4KTtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmUyMFdvcmRzW3RoaXMucmFuZG9tVHJhbnNsYXRpb25OdW1iZXJdLndvcmRUcmFuc2xhdGU7XG4gIH1cblxuICBjaGVja0Fuc3dlcihhbnN3ZXI6Ym9vbGVhbik6dm9pZCB7XG4gICAgY29uc3QgdHJhbnNsYXRlOnN0cmluZyA9IHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLmFjdGl2ZVdvcmROdW1iZXJdLndvcmRUcmFuc2xhdGU7XG4gICAgY29uc3QgcmlnaHRUcmFuc2xhdGU6c3RyaW5nID0gdGhpcy5hY3RpdmUyMFdvcmRzW3RoaXMucmFuZG9tVHJhbnNsYXRpb25OdW1iZXJdLndvcmRUcmFuc2xhdGU7XG4gICAgaWYgKCh0cmFuc2xhdGUgPT09IHJpZ2h0VHJhbnNsYXRlKSA9PT0gYW5zd2VyKSB7XG4gICAgICB0aGlzLnJpZ2h0QW5zd2VyQXVkaW8ucGxheSgpO1xuICAgICAgdGhpcy5hcnJheU9mQW5zd2Vycy5wdXNoKHRydWUpO1xuICAgICAgdGhpcy5hbmFseXplVHJ1ZUFuc3dlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndyb25nQW5zd2VyQXVkaW8ucGxheSgpO1xuICAgICAgdGhpcy5hcnJheU9mQW5zd2Vycy5wdXNoKGZhbHNlKTtcbiAgICAgIHRoaXMuYW5hbHl6ZUZhbHNlQW5zd2VyKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0VGltZXIgPSAodGltZXJFbGVtOiBIVE1MRWxlbWVudCk6dm9pZCA9PiB7XG4gICAgdGhpcy50aW1lciA9IE51bWJlcih0aW1lckVsZW0udGV4dENvbnRlbnQpO1xuXG4gICAgY29uc3QgdGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMudGltZXIgLT0gMTtcbiAgICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlclRpbWVyKHRoaXMudGltZXIsIHRpbWVyRWxlbSk7XG4gICAgICBpZiAodGhpcy50aW1lciA9PT0gMCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XG4gICAgICAgIHRoaXMuc3RvcEdhbWUoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50aW1lciA9PT0gNSkge1xuICAgICAgICB0aGlzLnRpbWVvdmVyQXVkaW8ucGxheSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy50aW1lcklkID0gc2V0SW50ZXJ2YWwodGljaywgMTAwMCk7XG4gIH07XG5cbiAgY2xlYXJJbnRlcnZhbCA9ICgpOnZvaWQgPT4ge1xuICAgIGlmICh0aGlzLnRpbWVySWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcbiAgICB9XG4gIH07XG5cbiAgY291bnRTY29yZSgpOnZvaWQge1xuICAgIHRoaXMuc2NvcmUgKz0gdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyO1xuICAgIGlmICh0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgPT09IHRoaXMubWF4U2NvcmVGb3JSaWdodEFuc3dlcikge1xuICAgICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyU2NvcmUoU3RyaW5nKHRoaXMuc2NvcmUpLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyU2NvcmUoU3RyaW5nKHRoaXMuc2NvcmUpKTtcbiAgICB9XG4gIH1cblxuICBhbmFseXplRmFsc2VBbnN3ZXIoKTp2b2lkIHtcbiAgICB0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzID0gMDtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5jbGVhclNwcmludENvdW50KCk7XG4gICAgdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyID0gMTA7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyQ291bnRUZXh0KHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlcik7XG4gIH1cblxuICBhbmFseXplVHJ1ZUFuc3dlcigpOnZvaWQge1xuICAgIHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnMgKz0gMTtcbiAgICB0aGlzLmNvdW50U2NvcmUoKTtcbiAgICBpZiAodGhpcy5hbW91bnRPZlJpZ2h0QW5zd2VycyA9PT0gdGhpcy5hbW91bnRPZlJpZ2h0QW5zd2Vyc0ZvckJpZ2dlclNjb3JlICYmIHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciAhPT0gdGhpcy5tYXhTY29yZUZvclJpZ2h0QW5zd2VyKSB7XG4gICAgICB0aGlzLmdldEJpZ2dlclNjb3JlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzID09PSAodGhpcy5hbW91bnRPZlJpZ2h0QW5zd2Vyc0ZvckJpZ2dlclNjb3JlICsgMSkgJiYgdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyICE9PSB0aGlzLm1heFNjb3JlRm9yUmlnaHRBbnN3ZXIpIHtcbiAgICAgIHRoaXMubXlNb2R1bGVWaWV3LnJldHVyblRvT25lU3ByaW50Q291bnQoKTtcbiAgICAgIHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnMgPSAxO1xuICAgIH1cbiAgfVxuXG4gIGdldEJpZ2dlclNjb3JlKCk6dm9pZCB7XG4gICAgdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyID0gKHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciA9PT0gdGhpcy5tYXhTY29yZUZvclJpZ2h0QW5zd2VyKSA/IHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciA6IHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciAqPSAyO1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlckNvdW50VGV4dCh0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIpO1xuICB9XG5cbiAgc3RvcEdhbWUoKTp2b2lkIHtcbiAgICBsZXQgcmlnaHRBbnN3ZXJzID0gMDtcbiAgICBsZXQgd3JvbmdBbnN3ZXJzID0gMDtcbiAgICB0aGlzLmFycmF5T2ZBbnN3ZXJzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHJpZ2h0QW5zd2VycyArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3JvbmdBbnN3ZXJzICs9IDE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyUmVzdWx0cyh0aGlzLmFycmF5T2ZRdWVzdGlvbiwgdGhpcy5hcnJheU9mQW5zd2VycywgcmlnaHRBbnN3ZXJzLCB3cm9uZ0Fuc3dlcnMsIHRoaXMuc2NvcmUpO1xuICB9XG5cbiAgZ2V0QXVkaW8ocmlnaHRBbnN3ZXI6SFRNTEF1ZGlvRWxlbWVudCwgd3JvbmdBbnN3ZXI6SFRNTEF1ZGlvRWxlbWVudCwgdGltZW92ZXI6SFRNTEF1ZGlvRWxlbWVudCk6dm9pZCB7XG4gICAgdGhpcy5yaWdodEFuc3dlckF1ZGlvID0gcmlnaHRBbnN3ZXI7XG4gICAgdGhpcy53cm9uZ0Fuc3dlckF1ZGlvID0gd3JvbmdBbnN3ZXI7XG4gICAgdGhpcy50aW1lb3ZlckF1ZGlvID0gdGltZW92ZXI7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgTW9kdWxlTW9kZWw7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IHsgQnV0dG9ucyB9IGZyb20gJy4uL2NvbXBvbmVudHMvc21hbGxDb21wb25lbnRzL2J1dHRvbnMnO1xuXG5jb25zdCBBYm91dFNwcmludEdhbWVQYWdlID0ge1xuICBjbGFzc25hbWU6ICdhYm91dHNwcmludCcsXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgPGRpdiBjbGFzcyA9ICcke3RoaXMuY2xhc3NuYW1lfS1jb250ZWluZXInPlxuICAgICAgPGgyIGNsYXNzPSdzcHJpbnRfX3RpdGxlJz7QodC/0YDQuNC90YI8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cInNwcmludF9fcnVsZXNcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJzcHJpbnRfX3RleHRcIj7QmNCz0YDQsCDQodC/0YDQuNC90YIg0L/QvtC80L7QttC10YIg0YLQtdCx0LUg0L/RgNC+0LLQtdGA0LjRgtGMINC60LDQuiDRhdC+0YDQvtGI0L4g0YLRiyDQt9C90LDQtdGI0Ywg0YHQu9C+0LLQsC48YnI+XG4gICAgICAgINCY0LPRgNCwINC00LvQuNGC0YHRjyAxINC80LjQvdGD0YLRgyDQuNC70Lgg0L/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQsNGC0YzRgdGPINGB0LvQvtCy0LAuPGJyPlxuICAgICAgICDQp9GC0L7QsdGLINC00LDRgtGMINC+0YLQstC10YIsINC60LvQuNC60LDQuSDQv9C+INC90LXQvNGDINC80YvRiNC60L7QuSDQuNC70Lgg0L3QsNC20LjQvNCw0Lkg0LrQu9Cw0LLQuNGI0Lgt0YHRgtGA0LXQu9C60LguPC9wPlxuICAgICAgICA8cD7QktGL0LHQtdGA0Lgg0YPRgNC+0LLQtdC90Ywg0YHQu9C+0LbQvdC+0YHRgtC4PC9wPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwic3ByaW50X19sZXZlbFwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsZXZlbDBcIj7Qo9GA0L7QstC10L3RjCAxPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxldmVsMVwiPtCj0YDQvtCy0LXQvdGMIDI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGV2ZWwyXCI+0KPRgNC+0LLQtdC90YwgMzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsZXZlbDNcIj7Qo9GA0L7QstC10L3RjCA0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxldmVsNFwiPtCj0YDQvtCy0LXQvdGMIDU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGV2ZWw1XCI+0KPRgNC+0LLQtdC90YwgNjwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgJHtCdXR0b25zLmNyZWF0ZSgn0J3QsNGH0LDRgtGMJywgJ2J1dHRvbl9fc3RhcnRfX3NwcmludCcsIGZhbHNlKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dFNwcmludEdhbWVQYWdlO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7IHN0YXJ0U2NyaW5BdWRpb0NhbGwgfSBmcm9tICcuL3N0YXJ0LWF1ZGlvY2FsbCc7XG5cbmNvbnN0IEF1ZGlvY2FsbEdhbWVQYWdlID0ge1xuICBjbGFzc25hbWU6ICdhdWRpb2NhbGwnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgICA8ZGl2IGNsYXNzID0gJ2F1ZGlvLWNvbnRhaW5lciAke3RoaXMuY2xhc3NuYW1lfS1jb250ZWluZXInPiAke3N0YXJ0U2NyaW5BdWRpb0NhbGwucmVuZGVyKCl9PC9kaXY+O1xuICAgICAgJHtGb290ZXIucmVuZGVyKCl9XG4gICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdWRpb2NhbGxHYW1lUGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgeyBnYW1lQXJlYSB9IGZyb20gJy4vdXRpbHMvZ2FtZS1yZW5kZXInO1xuXG5jb25zdCBBdWRpb2NhbGxHYW1lID0ge1xuICBoYXNoZXM6IHtcblxuICAgIG1haW46ICcjbWFpbicsXG5cbiAgfSxcblxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICAgIDxkaXYgY2xhc3MgPSAnY29udGFpbmVyJz4gXG4gICAgICAgPGRpdiBjbGFzcyA9ICdnYW1lJz4gJHtnYW1lQXJlYX0gPC9kaXY+XG4gICAgICAgICA8YnV0dG9uICB0eXBlPVwiYnV0dG9uXCIgIGNsYXNzPVwiZ28tbWFpblwiPjxhIGhyZWY9XCIke3RoaXMuaGFzaGVzLm1haW59XCIgPjwvYT7QktC10YDQvdGD0YLRjNGB0Y8g0L3QsCDQs9C70LDQstC90YPRjjwvYT48L2J1dHRvbj4gXG4gICAgICAgICBcbiAgICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvY2FsbEdhbWU7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cblxuZXhwb3J0IGNvbnN0IHN0YXJ0U2NyaW5BdWRpb0NhbGwgPSB7XG4gIGhhc2hlczoge1xuXG4gICAgYXVkaW9jYWxsR2FtZTogJyNhdWRpb2NhbGxHYW1lJyxcblxuICB9LFxuXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiAvKiBodG1sICovYCBcblxuPGRpdiBjbGFzcz1cImF1ZGlvLWNhbGxcIj4gXG48cCBjbGFzcz1cImF1ZGlvLWNhbGxfX3RleHRcIj7QkiDQuNCz0YDQtSDQsNGD0LTQuNC+0LLRi9C30L7QsiDQstCw0LzQvdGD0LbQvdC+INCy0YvQsdGA0LDRgtGMINC/0YDQsNCy0LjQu9GM0L3Ri9C5INC/0LXRgNC10LLQvtC0INGB0LvQvtCy0LAuIDxicj5cblxu0KfRgtC+0LHRiyDQuNCz0YDQsNGC0Ywg0YEg0L/QvtC80L7RidGM0Y4g0LrQu9Cw0LLQuNCw0YLRg9GA0YssINC40YHQv9C+0LvRjNC30YPQuSDQutC70LDQstC40YjQuFxuMSwgMiwgMywgNCwgNSAtINGH0YLQvtCx0Ysg0LTQsNGC0Ywg0L7RgtCy0LXRgixcbnNwYWNlIC0g0LTQu9GPINCy0L7RgdC/0YDQvtC40LfQstC10LTQtdC90LjRjyDQt9Cy0YPQutCwLFxuZW50ZXIgLSDRh9GC0L7QsdGLINC/0YDQvtC/0YPRgdGC0LjRgtGMINCy0L7Qv9GA0L7RgSxcbtGB0YLRgNC10LvQutCwLdCy0L/RgNCw0LLQviAtINGH0YLQvtCx0Ysg0L/QtdGA0LXQudGC0Lgg0Log0YHQu9C10LTRg9GO0YnQtdC80YMg0LLQvtC/0YDQvtGB0YMuPGJyPiA8YnI+XG7QktGL0LHQtdGA0Lgg0YPRgNC+0LLQtdC90Ywg0YHQu9C+0LbQvdC+0YHRgtC4OjwvcD5cbjxidXR0b24gaWQ9XCJsZXZlbDFcIiB0eXBlPVwiYnV0dG9uXCIgIGNsYXNzPVwiYnRuLWxldmVsXCI+PGEgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiBjbGFzcz1cIm1lbnVfX21haW4gbWVudV9faXRlbV9hY3RpdmVcIj7Qo9GA0L7QstC10L3RjCAxPC9hPjwvYnV0dG9uPlxuPGJ1dHRvbiBpZD1cImxldmVsMlwiIHR5cGU9XCJidXR0b25cIiAgY2xhc3M9XCJidG4tbGV2ZWxcIj7Qo9GA0L7QstC10L3RjCAyPC9idXR0b24+XG48YnV0dG9uIGlkPVwibGV2ZWwzXCIgdHlwZT1cImJ1dHRvblwiICBjbGFzcz1cImJ0bi1sZXZlbFwiPtCj0YDQvtCy0LXQvdGMIDM8L2J1dHRvbj5cbjxidXR0b24gaWQ9XCJsZXZlbDRcIiB0eXBlPVwiYnV0dG9uXCIgIGNsYXNzPVwiYnRuLWxldmVsXCI+0KPRgNC+0LLQtdC90YwgNDwvYnV0dG9uPlxuPGJ1dHRvbiBpZD1cImxldmVsNVwiIHR5cGU9XCJidXR0b25cIiAgY2xhc3M9XCJidG4tbGV2ZWxcIj7Qo9GA0L7QstC10L3RjCA1PC9idXR0b24+XG48YnV0dG9uIGlkPVwibGV2ZWw2XCIgdHlwZT1cImJ1dHRvblwiICBjbGFzcz1cImJ0bi1sZXZlbFwiPtCj0YDQvtCy0LXQvdGMIDY8L2J1dHRvbj5cbjwvZGl2PlxuYDtcbiAgfSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcblxyXG5pbXBvcnQgeyBhcGlQYXRoIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS1wYXRoJztcclxuaW1wb3J0IHsgd29yZE9iaiwgcHJpbnRCdG5TdHJpbmcgfSBmcm9tICcuL3N1cHBvcnRpbmctZnVuYyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZUFyZWEgPSBgIFxyXG4gPGRpdiBjbGFzcz1cImF1ZGlvLWNvbnRhaW5lci1nYW1lXCI+IFxyXG4gICAgPGRpdiBjbGFzcz1cImJ0bi1zb3VuZFwiPjxkaXYgY2xhc3M9XCJzb3VuZC13cmFwcGVyXCI+IFxyXG4gICAgPGF1ZGlvIGNsYXNzPVwiYXVkaW9cIiBzcmM9XCIke2FwaVBhdGggKyB3b3JkT2JqLmF1ZGlvfVwiIGF1dG9wbGF5PjwvYXVkaW8+IDwvZGl2PjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj4ke3ByaW50QnRuU3RyaW5nKCl9PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiBgO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuXG5pbXBvcnQgeyBhcGlQYXRoIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS1wYXRoJztcbmltcG9ydCBBdWRpb2NhbGxHYW1lIGZyb20gJy4uL21haW4nO1xuaW1wb3J0IHsgc291bmRBdWRpbywgd29yZE9iaiB9IGZyb20gJy4vc3VwcG9ydGluZy1mdW5jJztcbmltcG9ydCBhdWRpb1BhdGhXcm9uZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvYXVkaW8vd3JvbmctYW5zd2VyLm1wMyc7XG5pbXBvcnQgYXVkaW9QYXRoUmlnaHQgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2F1ZGlvL3JpZ2h0LWFuc3dlci5tcDMnO1xuaW1wb3J0IHsgZ2FtZUFyZWEgfSBmcm9tICcuL2dhbWUtcmVuZGVyJztcbmltcG9ydCBNb2R1bGVDb250cm9sbGVyIGZyb20gJy4uLy4uLy4uL2NvbnRyb2xsZXIvY29udHJvbGxlcic7XG5cbmxldCBzY29yZSA9IDA7XG5sZXQgYXJyYXlXcm9uZ1dvcmRzOiBzdHJpbmdbXSA9IFtdO1xubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlJywgc2NvcmUudG9TdHJpbmcoKSk7XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlXcm9uZ1dvcmRzKSk7XG5cbmNsYXNzIExpc3RlbmVyQXVkaW9DYWxsIHtcbiAgb3BlbigpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXNvdW5kJykpIHtcbiAgICAgICAgc291bmRBdWRpbygoYXBpUGF0aCArIHdvcmRPYmouYXVkaW8pKTtcbiAgICAgIH1cbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXRyYW5zbGF0aW9uJykpIHtcbiAgICAgICAgY29uc3Qgcm91bmQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvdW5kJykpICsgMTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JvdW5kJywgcm91bmQudG9TdHJpbmcoKSk7XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSB3b3JkT2JqLndvcmRUcmFuc2xhdGUpIHtcbiAgICAgICAgICBzY29yZSA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmUnKSkgKyAxO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZScsIHNjb3JlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIHNvdW5kQXVkaW8oKGF1ZGlvUGF0aFJpZ2h0KSk7XG4gICAgICAgICAgKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKCdidG4tdHJhbnNsYXRpb24tcmlnaHQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoJ2J0bi10cmFuc2xhdGlvbi13cm9uZycpO1xuICAgICAgICAgIGFycmF5V3JvbmdXb3JkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FycmF5V3JvbmdXb3JkcycpISk7XG4gICAgICAgICAgYXJyYXlXcm9uZ1dvcmRzLnB1c2god29yZE9iai53b3JkKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlXcm9uZ1dvcmRzKSk7XG4gICAgICAgICAgc291bmRBdWRpbygoYXVkaW9QYXRoV3JvbmcpKTtcbiAgICAgICAgICAvLyBnYW1lLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgIC8vIGdhbWUuaW5uZXJIVE1MID0gZ2FtZUFyZWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygncmVzdGFydCcpKSB7XG4gICAgICAgIGdhbWUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGdhbWUuaW5uZXJIVE1MID0gZ2FtZUFyZWE7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgbGlzdGVuZXJBdWRpb0NhbGwgPSBuZXcgTGlzdGVuZXJBdWRpb0NhbGwoKTtcbmV4cG9ydCBkZWZhdWx0IGxpc3RlbmVyQXVkaW9DYWxsO1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tc2hhZG93ICovXG5cbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi9mdW5jdGlvbmFsL3N0b3JhZ2UnO1xuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICcuLi8uLi8uLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyBhcGlQYXRoIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS1wYXRoJztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xuXG5sZXQgcm91bmQgPSAwO1xubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JhdW5kJywgcm91bmQudG9TdHJpbmcoKSk7XG5cbi8vINC60L7QvdGB0YLQsNC90LAg0LrQvtGC0L7RgNCw0Y8g0L/QvtC70YPRh9Cw0LXRgiDRgSDRgdC10YDQstC10YDQsCDQvNCw0YHRgdC40LIg0YHQu9C+0LJcbmNvbnN0IGFwaUdldFdvcmRzID0gYXBpLmdldFdvcmRzKDAsIDApXG4gIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgIHN0b3JhZ2Uud29yZHMgPSB2YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd29yZHMnLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfSk7XG4vLyDQv9C+0LvRg9GH0LDQtdC8INC80LDRgdGB0LjQsiDQv9GA0LXQstC+0LTQvtCyXG5mdW5jdGlvbiBnZXRXb3Jkc01hcCgpOiBzdHJpbmdbXSB7XG4gIGFwaUdldFdvcmRzO1xuICBjb25zdCB3b3JkcyA9IHN0b3JhZ2Uud29yZHMhLm1hcCgoaXRlbSkgPT4gaXRlbS53b3JkVHJhbnNsYXRlKTtcbiAgcmV0dXJuIHdvcmRzO1xufVxuXG5jb25zdCB3b3Jkc1N0cmluZyA9IGdldFdvcmRzTWFwKCk7XG5cbi8vINC/0LXRgNC10LzQtdGI0LjQstCw0LXQvCDQvNCw0YHRgdC40LIg0L/RgNC10LLQvtC00L7QslxuZnVuY3Rpb24gc2h1ZmZsZShhcnJheTpzdHJpbmdbXSkge1xuICBhcnJheS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xufVxuc2h1ZmZsZSh3b3Jkc1N0cmluZyk7XG4vLyDRgdC+0LfQtNCw0LXQvCDQvNCw0YHRgdC4INCyINC60L7RgtGA0L7QvCDQsdGD0LTQtdGCINGC0L7RjNC60L4gNiDRgdC70L7QsiDQtNC70Y8g0LjQs9GA0YtcbmxldCBhcnJheVNpeFdvcmRzOnN0cmluZyBbXSA9IFtdO1xuYXJyYXlTaXhXb3JkcyA9IHdvcmRzU3RyaW5nLnNsaWNlKDAsIDYpO1xuXG4vLyDQstGL0LHQuNGA0LDQtdC8INGB0LvRg9GH0LDQudC90L7QtSDRgdC70L7QstC+INC40LcgNiwg0LrQvtGC0L7RgNC+0LUg0LHRg9C00LXQvCDRg9Cz0LDQtNGL0LLQsNGC0YxcbmNvbnN0IHdvcmRSaWdodCA9IGFycmF5U2l4V29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXlTaXhXb3Jkcy5sZW5ndGgpXTtcblxuLy8g0L/QvtC70YPRh9Cw0LXQvCDQtNC10LvQsNC10Lwg0L7QsdGK0LXQutGCINCyINC60L7RgtC+0YDRi9C5INGB0L7RhdGA0LDQvdC40Lwg0LLRi9Cx0YDQsNC90L3QvtC1INGB0LvQvtCy0L4g0YHQviDQstGB0LXQvNC4INC00LDQvdC90YvQvNC4XG5sZXQgd29yZE9iaiA6IElXb3JkID0ge1xuICBpZDogJycsIGdyb3VwOiAwLCBwYWdlOiAwLCB3b3JkOiAnJywgaW1hZ2U6ICcnLCBhdWRpbzogJycsIGF1ZGlvTWVhbmluZzogJycsIGF1ZGlvRXhhbXBsZTogJycsIHRleHRNZWFuaW5nOiAnJywgdGV4dEV4YW1wbGU6ICcnLCB0cmFuc2NyaXB0aW9uOiAnJywgd29yZFRyYW5zbGF0ZTogJycsIHRleHRNZWFuaW5nVHJhbnNsYXRlOiAnJywgdGV4dEV4YW1wbGVUcmFuc2xhdGU6ICcnLFxufTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yYWdlLndvcmRzIS5sZW5ndGg7IGkrKykge1xuICBpZiAoc3RvcmFnZS53b3JkcyFbaV0ud29yZFRyYW5zbGF0ZSA9PT0gd29yZFJpZ2h0KSB7XG4gICAgd29yZE9iaiA9IHN0b3JhZ2Uud29yZHMhW2ldO1xuICB9XG59XG4vLyDRhNGD0L3QutGG0LjRjyDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8g0LDRg9C00LjQviDRgSDQv9GD0YLQtdC8INC40Lcg0L3QsNGI0LXQs9C+INC+0LHQtdC60YLQsC3RgdC70L7QstC+XG5mdW5jdGlvbiBzb3VuZEF1ZGlvKHBhdGg6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBhdWRpb2QgPSBuZXcgQXVkaW8oKTtcbiAgYXVkaW9kLnNyYyA9IGAke3BhdGh9YDtcbiAgYXVkaW9kLmF1dG9wbGF5ID0gdHJ1ZTtcbn1cblxuLy8g0YDQuNGB0YPQtdC8INC60L3QvtC/0LrQuCDRgSDQv9C10YDQtdCy0L7QtNCw0LzQuFxuZnVuY3Rpb24gcHJpbnRCdG5TdHJpbmcoKTogc3RyaW5nIHtcbiAgbGV0IGEgPSAnJztcbiAgbGV0IGNvbnRhaW5lckJ0biA9ICcgJztcbiAgaWYgKE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm91bmQnKSkgPCAyMSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlTaXhXb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgYSA9IGFycmF5U2l4V29yZHNbaV07XG4gICAgICBjb250YWluZXJCdG4gKz0gYDxidXR0b24gIHR5cGU9XCJidXR0b25cIiBpZD1cIiR7YX1cIiBjbGFzcz1cImJ0bi10cmFuc2xhdGlvblwiPiR7YX08L2J1dHRvbj4gYDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IGEgPSAnJztcbiAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJykhKS5sZW5ndGggPiAwKSB7XG4gICAgICBhID0gYCA8cCBjbGFzcz1cImdhbWUtdGV4dFwiPtCg0LXQutC+0LzQtdC90LTRg9C10Lwg0LLRi9GD0YfQuNGC0Yw6Jm5ic3Ake0pTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FycmF5V3JvbmdXb3JkcycpISl9PC9wPiBgO1xuICAgIH0gZWxzZSB7XG4gICAgICBhID0gJyA8cCBjbGFzcz1cImdhbWUtdGV4dFwiPtCS0Ysg0L3QuNGA0LDQt9GDINC90LUg0L7RiNC40LHQu9C40YHRjCE8L3A+ICc7XG4gICAgfVxuICAgIGNvbnRhaW5lckJ0biArPSBgXG4gIDxkaXYgY2xhc3M9XCJnYW1lLW92ZXJcIj5cbiAgICA8cCBjbGFzcz1cImdhbWUtdGV4dFwiPtCS0Ysg0L/RgNC+0YjQu9C4INC40LPRgNGDITwvcD5cbiAgICA8cCBjbGFzcz1cImdhbWUtdGV4dFwiPtCS0LDRiCDRgNC10LfRg9C70YzRgtCw0YI6ICZuYnNwICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlJyl9PC9wPlxuICAgICR7YX1cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInJlc3RhcnRcIj7QndCw0YfQsNGC0Ywg0LfQsNC90L7QstC+PC9idXR0b24+XG4gIDwvZGl2PiBgO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhcnJheVdyb25nV29yZHMnKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncm91bmQnKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2NvcmUnKTtcbiAgfVxuICByZXR1cm4gY29udGFpbmVyQnRuO1xufVxuXG5leHBvcnQge1xuICBzb3VuZEF1ZGlvLFxuICBwcmludEJ0blN0cmluZywgd29yZE9iaixcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5pbXBvcnQgcGhvbmUgZnJvbSAnLi4vYXNzZXRzL3Bob25lLnN2Zyc7XG5pbXBvcnQgZGljdGlvbmFyeSBmcm9tICcuLi9hc3NldHMvZGljdGlvbmFyeS5zdmcnO1xuaW1wb3J0IHBsYXkgZnJvbSAnLi4vYXNzZXRzL3BsYXkuc3ZnJztcbmltcG9ydCBhY3Nlc3MgZnJvbSAnLi4vYXNzZXRzL2Fjc2Vzcy5zdmcnO1xuXG5jb25zdCBNYWluUGFnZSA9IHtcbiAgaWQ6ICdtYWluJyxcbiAgcmVuZGVyOiAoKTpzdHJpbmcgPT4gYFxuICAgICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19wYWdlXCI+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fcGFnZV9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj5UaGUgV29ybGQgaXMgWW91cnMgd2l0aCBSU0xhbmchPC9oMj5cbiAgICAgICAgICAgPHA+UlNMYW5nIOKAlCDRjdGC0L4g0Y3RhNGE0LXQutGC0LjQstC90YvQuSDRgdC10YDQstC40YEg0LTQu9GPINGD0LLQu9C10LrQsNGC0LXQu9GM0L3QvtC5INC/0YDQsNC60YLQuNC60Lgg0LDQvdCz0LvQuNC50YHQutC+0LPQviDRj9C30YvQutCwLiDQn9GA0LjRgdC+0LXQtNC40L3Rj9C50YHRjyFcbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VfX2FkdmFudGFnZXNcIj5cbiAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj7Qn9C+0YfQtdC80YMgUlNMYW5nPzwvaDI+XG4gICAgICAgICAgIDx1bCBjbGFzcz1cImFkdmFudGFnZXNfX2xpc3RcIj5cbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7YWNzZXNzfVwiPlxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7QkdC10YHQv9C70LDRgtC90YvQuSDQtNC+0YHRgtGD0L88L2gzPlxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+0J3QsNGI0LAg0LzQuNGB0YHQuNGPIOKAlCDRgdC00LXQu9Cw0YLRjCDQvtCx0YPRh9C10L3QuNGPINGP0LfRi9C60LDQvCDQtNC+0YHRgtGD0L/QvdGL0Lwg0LTQu9GPINC60LDQttC00L7Qs9C+PC9wPlxuICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbVwiPlxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2RpY3Rpb25hcnl9XCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCh0LvQvtCy0LDRgNGMPC9oMz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPtCp0LXQu9C60L3QuNGC0LUg0LvRjtCx0L7QtSDRgdC70L7QstC+LCDRh9GC0L7QsdGLINGD0LLQuNC00LXRgtGMINC+0L/RgNC10LTQtdC70LXQvdC40LUg0LIg0LjRgdGC0L7Rh9C90LjQutCw0YUsINC4INGB0L7RhdGA0LDQvdC40YLQtSDQtdCz0L4g0LIg0YHQstC+0LXQvCDRgdC/0LjRgdC60LUg0LrQsNGA0YLQvtGH0LXQujwvcD5cbiAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwbGF5fVwiPlxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7QmNCz0YDQsNC5LCDRh9GC0L7QsdGLINGD0YfQuNGC0YzRgdGPPC9oMz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPtCY0LPRgNGLINCy0LrQu9GO0YfQsNGO0YIg0JDRg9C00LjQvtCy0YvQt9C+0LIs0KHQv9GA0LjQvdGCINC4INC80L3QvtCz0L7QtSDQtNGA0YPQs9C+0LUuLi48L3A+XG4gICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGhvbmV9XCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCj0YfQuNGC0LXRgdGMINC90LAg0YXQvtC00YM8L2gzPlxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+UlNMYW5nINC00L7RgdGC0YPQv9C90LAg0LTQu9GPINCy0LXQsSDQuCDQvNC+0LHQuNC70YzQvdGL0YUg0YPRgdGC0YDQvtC50YHRgtCyLiDQo9GH0LjRgtC10YHRjCDQuNC3INC70Y7QsdC+0LPQviDQvNC10YHRgtCwITwvcD5cbiAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICA8L3VsPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgJHtGb290ZXIucmVuZGVyKCl9XG4gICAgYCxcbn07XG5cbi8vIGV4cG9ydCB7IE1haW5QYWdlIH07XG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgeyBpbml0U3ByaW50TVZDIH0gZnJvbSAnLi9pbml0U3ByaW50TVZDJztcbmltcG9ydCB7IEJ1dHRvbnMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NtYWxsQ29tcG9uZW50cy9idXR0b25zJztcblxuaW1wb3J0IHBhcnJvdHMgZnJvbSAnLi4vLi4vYXNzZXRzL3BhcnJvdHMuanBnJztcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSAnLi4vLi4vYXNzZXRzL2Fycm93LWxlZnQucG5nJztcbmltcG9ydCBhcnJvd1JpZ2h0IGZyb20gJy4uLy4uL2Fzc2V0cy9hcnJvdy1yaWdodC5wbmcnO1xuXG5pbXBvcnQgcmlnaHRBbnN3ZXJBdWRpbyBmcm9tICcuLi8uLi9hc3NldHMvYXVkaW8vcmlnaHQtYW5zd2VyLm1wMyc7XG5pbXBvcnQgd3JvbmdBbnN3ZXJBdWRpbyBmcm9tICcuLi8uLi9hc3NldHMvYXVkaW8vd3JvbmctYW5zd2VyLm1wMyc7XG5pbXBvcnQgdGltZW92ZXJBdWRpbyBmcm9tICcuLi8uLi9hc3NldHMvYXVkaW8vdGltZS1vdmVyLm1wMyc7XG5cbmNvbnN0IFNwcmludEdhbWVQYWdlID0ge1xuICBjbGFzc25hbWU6ICdzcHJpbnQnLFxuICBsZXZlbDogMCxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAke0hlYWRlci5yZW5kZXIoKX1cbiAgICA8ZGl2IGNsYXNzID0gJyR7dGhpcy5jbGFzc25hbWV9LWNvbnRlaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzPVwic3ByaW50X19zY29yZVwiPjA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnRfX3RpbWVyXCI+NjA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnRfX2ZpZWxkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZF9fdGl0bGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVfX2NvdW50XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlX190ZXh0XCI+KyAxMCDQvtGH0LrQvtCyINC30LAg0YHQu9C+0LLQvjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX19jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX2ltZ1wiPjxpbWcgc3JjPScke3BhcnJvdHN9JyBhbHQ9XCJwYXJyb3RzXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX3F1ZXN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX3dvcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbl9fd29yZFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmRfX3NvdW5kXCI+PC9kaXY+XG4gICAgICAgICAgICA8YXVkaW8gaWQ9XCJzcHJpbnRfX3NheV9fd29yZFwiIHNyYz1cIlwiPjwvYXVkaW8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uX190cmFuc2xhdGlvblwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX19idXR0b25zXCI+JHtCdXR0b25zLmNyZWF0ZSgn0J3QtdCy0LXRgNC90L4nLCAnYnV0dG9uX19zcHJpbnRfX2ZhbHNlJywgZmFsc2UpfSR7QnV0dG9ucy5jcmVhdGUoJ9CS0LXRgNC90L4nLCAnYnV0dG9uX19zcHJpbnRfX3RydWUnLCBmYWxzZSl9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnRfX2Fycm93c1wiPlxuICAgICAgICA8aW1nIHNyYz0nJHthcnJvd0xlZnR9JyBhbHQ9XCJhcnJvd1wiPlxuICAgICAgICA8aW1nIHNyYz0nJHthcnJvd1JpZ2h0fScgYWx0PVwiYXJyb3dcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGF1ZGlvIGlkPVwiYXVkaW9fX3JpZ2h0XCIgc3JjPVwiJHtyaWdodEFuc3dlckF1ZGlvfVwiPjwvYXVkaW8+XG4gICAgICA8YXVkaW8gaWQ9XCJhdWRpb19fd3JvbmdcIiBzcmM9XCIke3dyb25nQW5zd2VyQXVkaW99XCI+PC9hdWRpbz5cbiAgICAgIDxhdWRpbyBpZD1cImF1ZGlvX190aW1lb3ZlclwiIHNyYz1cIiR7dGltZW92ZXJBdWRpb31cIj48L2F1ZGlvPlxuICAgIDwvZGl2PmA7XG4gIH0sXG4gIGluaXRNVkMoKTp2b2lkIHtcbiAgICBpbml0U3ByaW50TVZDKCk7XG4gIH0sXG4gIHNhdmVMZXZlbChsZXZlbDpzdHJpbmcpOnZvaWQge1xuICAgIHRoaXMubGV2ZWwgPSArbGV2ZWxbbGV2ZWwubGVuZ3RoIC0gMV07XG4gIH0sXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwcmludEdhbWVQYWdlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5cbmltcG9ydCB7IE1vZHVsZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9jb250cm9sbGVyL2NvbnRyb2xsZXJTcHJpbnQnO1xuaW1wb3J0IHsgTW9kdWxlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbC9tb2RlbFNwcmludCc7XG5pbXBvcnQgeyBNb2R1bGVWaWV3IH0gZnJvbSAnLi4vLi4vdmlldy92aWV3U3ByaW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTcHJpbnRNVkMoKTp2b2lkIHtcbiAgY29uc3QgdmlldyA9IG5ldyBNb2R1bGVWaWV3KCk7XG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZHVsZU1vZGVsKCk7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgTW9kdWxlQ29udHJvbGxlcigpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ByaW50LWNvbnRlaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuICB2aWV3LmluaXQoY29udGFpbmVyKTtcbiAgbW9kZWwuaW5pdCh2aWV3KTtcbiAgY29udHJvbGxlci5pbml0KGNvbnRhaW5lciwgbW9kZWwpO1xufVxuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJztcblxuY29uc3QgU3RhdGlzdGljc1BhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ3N0YXRpc3RpY3MnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz48L2Rpdj5cbiAgICAke0Zvb3Rlci5yZW5kZXIoKX1gO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGlzdGljc1BhZ2U7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5jb25zdCBBYm91dFRlYW1QYWdlID0ge1xuICBjbGFzc25hbWU6ICd0ZWFtLXBhZ2UnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz48L2Rpdj5cbiAgICAke0Zvb3Rlci5yZW5kZXIoKX1cbiAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRUZWFtUGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0ICcuL3RleHRib29rLnNjc3MnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vYXBpL2FwaSc7XG5pbXBvcnQgeyBJV29yZCB9IGZyb20gJy4uLy4uL3R5cGVzL3R5cGVzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJztcblxuY29uc3QgVGV4dGJvb2tQYWdlID0ge1xuICBjbGFzc25hbWU6ICd0ZXh0Ym9vaycsXG4gIHdvcmRsaXN0OiAnd29yZC1saXN0JyxcbiAgLy8gcmVuZGVyKCk6IHN0cmluZyB7XG4gIC8vICAgY29uc3QgdmlldyA9IGAgPGRpdiBjbGFzcz0ke3RoaXMuY2xhc3NuYW1lfT5cbiAgLy8gICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stbmF2aWdhdGlvblwiPlxuICAvLyAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1yb3VuZFwiPjwvYnV0dG9uPlxuICAvLyAgICAgPHAgY2xhc3M9XCJ1bml0LW5hbWVcIj5Vbml0IDEgPHNwYW4gY2xhc3M9XCJ1bml0LXBhZ2VcIj5wYWdlIDE8L3NwYW4+PC9wPlxuICAvLyAgIDwvZGl2PlxuICAvLyAgIDx1bCBjbGFzcz0ke3RoaXMud29yZGxpc3R9PlxuICAvLyAgICAke3RoaXMuZ2V0Q2FyZHMoKX1cbiAgLy8gICA8L3VsPlxuICAvLyAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay1mb290ZXJcIj5cbiAgLy8gICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay1wYWdpbmF0aW9uXCI+XG4gIC8vICAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uLWJ0biBidG4tb3JhbmdlXCI+UHJldjwvYnV0dG9uPlxuICAvLyAgICAgICA8YnV0dG9uIGNsYXNzPVwicGFnaW5hdGlvbi1idG4gYnRuLW9yYW5nZVwiPk5leHQ8L2J1dHRvbj5cbiAgLy8gICAgIDwvZGl2PlxuICAvLyAgIDwvZGl2PlxuICAvLyA8L2Rpdj5gO1xuICAvLyAgIHJldHVybiBgJHtIZWFkZXIucmVuZGVyKCl9JHt2aWV3fSR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIC8vIH0sXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIGNvbnN0IHZpZXcgPSBgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRzXCI+XG4gICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCIxXCI+0KDQsNC30LTQtdC7IDE8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjJcIj7QoNCw0LfQtNC10LsgMjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiM1wiPtCg0LDQt9C00LXQuyAzPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCI0XCI+0KDQsNC30LTQtdC7IDQ8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjVcIj7QoNCw0LfQtNC10LsgNTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiNlwiPtCg0LDQt9C00LXQuyA2PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCI3XCI+0KDQsNC30LTQtdC7IFwi0KHQu9C+0LbQvdGL0LUg0YHQu9C+0LLQsFwiPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgICByZXR1cm4gYCR7SGVhZGVyLnJlbmRlcigpfSR7dmlld30ke0Zvb3Rlci5yZW5kZXIoKX1gO1xuICB9LFxuICAvLyByZW5kZXIoKTogc3RyaW5nIHtcbiAgLy8gICByZXR1cm4gYDx1bCBjbGFzcz1cInVuaXQtcGFnZXNcIj5cbiAgLy8gJHt0aGlzLnJlbmRlclBhZ2VzKCl9XG4gIC8vIDwvdWw+YDtcbiAgLy8gfSxcblxuICByZW5kZXJQYWdlcygpOiBzdHJpbmcge1xuICAgIGxldCBwYWdlcyA9ICcnO1xuICAgIGNvbnN0IHBhZ2VzQ291bnQgPSAzMDtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwYWdlc0NvdW50OyBpICs9IDEpIHtcbiAgICAgIHBhZ2VzICs9IGA8bGkgY2xhc3M9XCJ1bml0LXBhZ2VcIj5QYWdlICR7aX08L2xpPmA7XG4gICAgfVxuICAgIHJldHVybiBwYWdlcztcbiAgfSxcbiAgZ2V0Q2FyZHMoKTogdm9pZCB7XG4gICAgY29uc3QgeyB3b3JkbGlzdCB9ID0gdGhpcztcbiAgICBmdW5jdGlvbiByZW5kZXJDYXJkcyh3b3JkczogSVdvcmRbXSkge1xuICAgICAgY29uc3Qgd29yZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3dvcmRsaXN0fWApO1xuICAgICAgaWYgKHdvcmRDb250YWluZXIpIHtcbiAgICAgICAgd29yZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnd29yZC1pdGVtJyk7XG4gICAgICAgIGNhcmQuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwid29yZC1pbWFnZVwiIFxuICBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3JzbGFuZy1sZWFybmluZy1lbmdsaXNoLXdvcmRzLmhlcm9rdWFwcC5jb20vJHt3b3Jkc1tpXS5pbWFnZX0pXCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwid29yZC1kZXNjcmlwdGlvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJ3b3JkLXByb25vdW5jZSB3b3JkLWF1ZGlvXCI+XG4gICAgPHA+JHt3b3Jkc1tpXS53b3JkfSAke3dvcmRzW2ldLnRyYW5zY3JpcHRpb259PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cImF1ZGlvXCI+PGF1ZGlvPjwvYXVkaW8+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLXByb25vdW5jZSB0cmFuc2xhdGlvblwiPiR7d29yZHNbaV0ud29yZFRyYW5zbGF0ZX08L3A+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLWV4YW1wbGVcIj4ke3dvcmRzW2ldLnRleHRNZWFuaW5nfTwvcD5cbiAgICA8cCBjbGFzcz1cIndvcmQtZXhhbXBsZSB0cmFuc2xhdGlvblwiPiR7d29yZHNbaV0udGV4dE1lYW5pbmdUcmFuc2xhdGV9PC9wPlxuICAgIDxwIGNsYXNzPVwid29yZC1leGFtcGxlXCI+JHt3b3Jkc1tpXS50ZXh0RXhhbXBsZX08L3A+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLWV4YW1wbGUgdHJhbnNsYXRpb25cIj4ke3dvcmRzW2ldLnRleHRFeGFtcGxlVHJhbnNsYXRlfTwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3b3JkLW5vdGVkXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLW9yYW5nZSBidG4tZGlmZmljdWx0XCI+RGlmZmljdWx0PzwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1vcmFuZ2UgYnRuLWxlYXJuZWRcIj5MZWFybmVkPzwvYnV0dG9uPlxuICA8L2Rpdj5gO1xuICAgICAgICB3b3JkQ29udGFpbmVyPy5hcHBlbmQoY2FyZCk7XG4gICAgICB9XG4gICAgfVxuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBhcGkuZ2V0V29yZHMoMywgNSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHJlbmRlckNhcmRzKHJlcyBhcyBJV29yZFtdKTtcbiAgICAgICAgfSk7XG4gICAgfSkoKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRib29rUGFnZTtcbiIsImV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnRlZ2VyKG1pbjpudW1iZXIsIG1heDpudW1iZXIpOm51bWJlciB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuIiwiaW1wb3J0IHsgUm91dGVzLCBNZW51SXRlbXMgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgU3ByaW50R2FtZVBhZ2UgZnJvbSAnLi4vcGFnZXMvc3ByaW50L2luZGV4JztcblxuY2xhc3MgTW9kdWxlVmlldyB7XG4gIG15TW9kdWxlQ29udGFpbmVyITpIVE1MRWxlbWVudDtcblxuICBjb250ZW50Q29udGFpbmVyITpIVE1MRWxlbWVudDtcblxuICByb3V0ZXNPYmohOlJvdXRlcztcblxuICBpbml0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHJvdXRlczogUm91dGVzKTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMucm91dGVzT2JqID0gcm91dGVzO1xuICB9XG5cbiAgcmVuZGVyQ29udGVudChoYXNoUGFnZU5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICBsZXQgcm91dGVOYW1lID0gJ2RlZmF1bHQnO1xuICAgIHJvdXRlTmFtZSA9IChoYXNoUGFnZU5hbWUubGVuZ3RoKSA/IGhhc2hQYWdlTmFtZSA6IHJvdXRlTmFtZTtcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMucm91dGVzT2JqW3JvdXRlTmFtZSBhcyBrZXlvZiBSb3V0ZXNdO1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIuaW5uZXJIVE1MID0gcm91dGUucmVuZGVyKCk7XG4gICAgaWYgKGhhc2hQYWdlTmFtZSA9PT0gJ3NwcmludCcpIHsgU3ByaW50R2FtZVBhZ2UuaW5pdE1WQygpOyB9XG4gIH1cblxuICBoaWdobGlnaHRBY3RpdmVNZW51SXRlbSA9IChvYmo6TWVudUl0ZW1zLCBoYXNoTmFtZTpzdHJpbmcpOnZvaWQgPT4ge1xuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGZvcihsZXQga2V5IGluIG9iail7XG4gICAgICBpZiAob2JqW2tleSBhcyBrZXlvZiBNZW51SXRlbXNdLmNsYXNzTGlzdC5jb250YWlucygnbWVudV9faXRlbV9hY3RpdmUnKSkge1xuICAgICAgICBvYmpba2V5IGFzIGtleW9mIE1lbnVJdGVtc10uY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc2hOYW1lKSB7XG4gICAgICBvYmpbaGFzaE5hbWUgYXMga2V5b2YgTWVudUl0ZW1zXS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtX2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoubWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtX2FjdGl2ZScpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlVmlldztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgU3ByaW50UmVzdWx0IGZyb20gJy4uL2NvbXBvbmVudHMvc3ByaW50cmVzdWx0cyc7XG5pbXBvcnQgdHJ1ZUltZyBmcm9tICcuLi9hc3NldHMvdHJ1ZS5wbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9kdWxlVmlldyB7XG4gIG15TW9kdWxlQ29udGFpbmVyITpIVE1MRWxlbWVudDtcblxuICBjb250ZW50Q29udGFpbmVyITpIVE1MRWxlbWVudDtcblxuICByb3V0ZXNPYmohOlJvdXRlcztcblxuICBzcHJpbnRUaW1lcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ByaW50X190aW1lcicpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHNwcmludFNjb3JlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnRfX3Njb3JlJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50Q291bnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlX19jb3VudCcpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHNwcmludENvdW50VGV4dDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGVfX3RleHQnKSBhcyBIVE1MRWxlbWVudDtcblxuICBxdWVzdGlvbldvcmQ6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVlc3Rpb25fX3dvcmQnKSBhcyBIVE1MRWxlbWVudDtcblxuICBxdWVzdGlvblRyYW5zbGF0aW9uOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1ZXN0aW9uX190cmFuc2xhdGlvbicpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHNwcmludENvbnRlaW5lcjpIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnQtY29udGVpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50KTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIC8vIHRoaXMucm91dGVzT2JqID0gcm91dGVzO1xuICB9XG5cbiAgcmVuZGVyV29yZCh3b3JkOiBzdHJpbmcsIHRyYW5zbGF0aW9uOiBzdHJpbmcpOnZvaWQge1xuICAgIHRoaXMucXVlc3Rpb25Xb3JkLnRleHRDb250ZW50ID0gd29yZDtcbiAgICB0aGlzLnF1ZXN0aW9uVHJhbnNsYXRpb24udGV4dENvbnRlbnQgPSB0cmFuc2xhdGlvbjtcbiAgfVxuXG4gIHJlbmRlclRpbWVyKHRpbWVyOm51bWJlciwgdGltZXJFbGVtOkhUTUxFbGVtZW50KTp2b2lkIHtcbiAgICB0aW1lckVsZW0udGV4dENvbnRlbnQgPSBTdHJpbmcodGltZXIpO1xuICB9XG5cbiAgcmVuZGVyU2NvcmUoc2NvcmU6c3RyaW5nLCBtYXhTY29yZT86Ym9vbGVhbik6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRTY29yZS50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgIGlmIChtYXhTY29yZSkge1xuICAgICAgdGhpcy5zcHJpbnRDb3VudC5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke3RydWVJbWd9XCIgYWx0PVwiaW1nXCI+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zcHJpbnRDb3VudC5pbm5lckhUTUwgKz0gYDxpbWcgc3JjPVwiJHt0cnVlSW1nfVwiIGFsdD1cImltZ1wiPmA7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJTcHJpbnRDb3VudCgpOnZvaWQge1xuICAgIHRoaXMuc3ByaW50Q291bnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICByZXR1cm5Ub09uZVNwcmludENvdW50KCk6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRDb3VudC5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke3RydWVJbWd9XCIgYWx0PVwiaW1nXCI+YDtcbiAgfVxuXG4gIHJlbmRlckNvdW50VGV4dChuOm51bWJlcik6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRDb3VudFRleHQuaW5uZXJIVE1MID0gYCsgJHtufSDQvtGH0LrQvtCyINC30LAg0YHQu9C+0LLQvmA7XG4gIH1cblxuICByZW5kZXJSZXN1bHRzKHF1ZXN0aW9uczpzdHJpbmdbXSwgYW5zd2Vyczpib29sZWFuW10sIHJpZ2h0QW5zd2VyczpudW1iZXIsIHdyb25nQW5zd2VyczpudW1iZXIsIHNjb3JlOm51bWJlcik6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRDb250ZWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zcHJpbnRDb250ZWluZXIuaW5uZXJIVE1MID0gYCR7U3ByaW50UmVzdWx0LnJlbmRlcihxdWVzdGlvbnMsIGFuc3dlcnMsIHJpZ2h0QW5zd2Vycywgd3JvbmdBbnN3ZXJzLCBzY29yZSl9YDtcbiAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBNb2R1bGVWaWV3O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==