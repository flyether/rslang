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
exports.apiCategory = exports.signIn = exports.usersEndpoint = exports.wordsEndpoint = exports.apiPath = void 0;
const apiPath = 'https://rslang-learning-english-words.herokuapp.com/';
exports.apiPath = apiPath;
const wordsEndpoint = 'words';
exports.wordsEndpoint = wordsEndpoint;
const usersEndpoint = 'users';
exports.usersEndpoint = usersEndpoint;
const signIn = 'signin';
exports.signIn = signIn;
const apiCategory = 'userWord.optional.category';
exports.apiCategory = apiCategory;


/***/ }),

/***/ "./src/api/api.ts":
/*!************************!*\
  !*** ./src/api/api.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-else-return */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
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
const storage_1 = __webpack_require__(/*! ../functional/storage */ "./src/functional/storage.ts");
const api = {
    UpsertsNewSettings(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${api_path_1.apiPath}${api_path_1.usersEndpoint}/${userId}/settings`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(storage_1.storage.settings),
                });
                if (response.ok) {
                    return yield response.json();
                }
                else {
                    return undefined;
                }
            }
            catch (error) {
                throw new Error('error puting new settings');
            }
        });
    },
    GetSettings(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${api_path_1.apiPath}${api_path_1.usersEndpoint}/${userId}/settings`, { method: 'GET' });
                if (response.ok) {
                    return yield response.json();
                }
                else {
                    return yield Promise.reject(new Error(response.statusText));
                }
            }
            catch (error) {
                throw new Error('Error getting settings');
            }
        });
    },
    getAllUserWords(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${api_path_1.apiPath}${api_path_1.usersEndpoint}/${userId}${api_path_1.wordsEndpoint}`, { method: 'GET' });
                if (response.ok) {
                    return yield response.json();
                }
                else {
                    return yield Promise.reject(new Error(response.statusText));
                }
            }
            catch (error) {
                throw new Error('Error getting words');
            }
        });
    },
    CreateUserWord(userId, wordID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${api_path_1.apiPath}${api_path_1.usersEndpoint}/${userId}/${api_path_1.wordsEndpoint}/${wordID}`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(storage_1.storage.userWord),
                });
                if (response.ok) {
                    return yield response.json();
                }
                else {
                    return yield Promise.reject(new Error(response.statusText));
                }
            }
            catch (error) {
                throw new Error('Error creating user word');
            }
        });
    },
    UpdateUserWord(userId, wordID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${api_path_1.apiPath}${api_path_1.usersEndpoint}/${userId}/${api_path_1.wordsEndpoint}/${wordID}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(storage_1.storage.userWord),
                });
                if (response.ok) {
                    return yield response.json();
                }
                else {
                    return yield Promise.reject(new Error(response.statusText));
                }
            }
            catch (error) {
                throw new Error('Error updating user word');
            }
        });
    },
    DeleteUserWord(userId, wordID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fetch(`${api_path_1.apiPath}${api_path_1.usersEndpoint}/${userId}/${api_path_1.wordsEndpoint}/${wordID}`, { method: 'DELETE' });
            }
            catch (error) {
                throw new Error('Error deleting user word');
            }
        });
    },
    // async GetAllUserAggregatedWords(userId: string, page:string, wordsPerPage: string, filter: string ): Promise<IWord[] | undefined > {
    //   try {
    //     const response = await fetch(`${apiPath}${usersEndpoint}/${userId}/${wordsEndpoint}/${page}/${wordsPerPage}/${filter}`, { method: 'GET' });
    //     if (response.ok) {
    //       return await response.json() as IWord[];
    //     } else {
    //       return await Promise.reject(new Error(response.statusText));
    //     }
    //   } catch (error) {
    //     throw new Error('Error getting words');
    //   }
    // },
    GetUserAggregatedWordById(userId, wordID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${api_path_1.apiPath}${api_path_1.usersEndpoint}/${userId}/aggregatedWords/${wordID}`, { method: 'GET' });
                if (response.ok) {
                    return yield response.json();
                }
                else {
                    return yield Promise.reject(new Error(response.statusText));
                }
            }
            catch (error) {
                throw new Error('Error getting user aggregated word');
            }
        });
    },
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
const listener_1 = __importDefault(__webpack_require__(/*! ../functional/listener */ "./src/functional/listener.ts"));
const listener_audiocall_1 = __importDefault(__webpack_require__(/*! ../pages/audiocall/utils/listener-audiocall */ "./src/pages/audiocall/utils/listener-audiocall.ts"));
const sprintSettings_1 = __webpack_require__(/*! ../pages/sprint/sprintSettings */ "./src/pages/sprint/sprintSettings.ts");
class ModuleController {
    init(container, model) {
        this.myModuleContainer = container;
        this.myModuleModel = model;
        window.addEventListener('hashchange', (e) => {
            (0, sprintSettings_1.changeSprintSettings)();
            console.log(e.newURL, e.oldURL);
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
        const hash = hashName.split('/')[0];
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
            this.myModuleModel.highlightActiveMenuItem(obj, hash);
        }
    }
    addButtonsAboutSprintGameListeners() {
        this.buttonStartSprint = document.querySelector('.button__start__sprint');
        this.sprintLevel = document.querySelector('.sprint__level');
        this.buttonStartSprint.addEventListener('click', () => {
            if (this.sprintLevel) {
                sprintSettings_1.sprintSettings.setLevelFromSelect(this.sprintLevel.value);
            }
            location.hash = '#sprint';
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
    constructor() {
        this.hashchangeEventRemove = () => {
            this.myModuleModel.clearInterval();
            document.removeEventListener('keyup', this.setButtonEventListeners);
            document.removeEventListener('click', this.setEventListeners);
        };
        this.setButtonEventListeners = (event) => {
            if (event.key === 'ArrowLeft') {
                this.selectFalse();
                this.myModuleModel.prepearNextWord();
            }
            if (event.code === 'ArrowRight') {
                this.selectTrue();
                this.myModuleModel.prepearNextWord();
            }
        };
        this.setEventListeners = (event) => {
            const elem = event.target;
            if (elem.closest('.button__sprint__false')) {
                this.selectFalse();
                this.myModuleModel.prepearNextWord();
            }
            else if (elem.closest('.button__sprint__true')) {
                this.selectTrue();
                this.myModuleModel.prepearNextWord();
            }
            else if (elem.closest('.word__sound')) {
                const audio = document.querySelector('#sprint__say__word');
                this.myModuleModel.sayWord(audio);
            }
        };
    }
    init(container, model) {
        this.myModuleContainer = container;
        this.myModuleModel = model;
        this.findAudioElements();
        this.setTimer();
        window.addEventListener('hashchange', this.hashchangeEventRemove);
        document.addEventListener('keyup', this.setButtonEventListeners);
        document.addEventListener('click', this.setEventListeners);
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
exports.TextbookController = void 0;
const words_1 = __importDefault(__webpack_require__(/*! ../words/words */ "./src/words/words.ts"));
const hashes_1 = __webpack_require__(/*! ../components/hashes */ "./src/components/hashes.ts");
/* eslint-disable import/no-cycle */
const api_1 = __webpack_require__(/*! ../api/api */ "./src/api/api.ts");
class TextbookController {
    constructor(unitSelector, pageSelector) {
        this.unitSelector = unitSelector;
        this.pageSelector = pageSelector;
    }
    init(unit) {
        this.setEventListeners(unit);
    }
    setEventListeners(unit) {
        const click = (e) => {
            var _a;
            if (e.target) {
                const target = e.target;
                if ((target).classList.contains(this.unitSelector)) {
                    window.location.hash = `${hashes_1.hashes.textbook}/${(target).dataset.unit}`;
                }
                if ((target).classList.contains('audio')) {
                    (_a = target.querySelector('audio')) === null || _a === void 0 ? void 0 : _a.play();
                }
                if ((target).classList.contains(this.pageSelector)) {
                    window.location.hash = `${window.location.hash}/${(target).dataset.page}`;
                }
                if ((target).id === 'go-back') {
                    if (+window.location.hash.split('/')[2] && unit) {
                        window.location.hash = `${hashes_1.hashes.textbook}/${unit}`;
                    }
                    else {
                        window.location.hash = `${hashes_1.hashes.textbook}`;
                    }
                }
                if ((target).classList.contains('previous')) {
                    const splittedHash = window.location.hash.split('/');
                    let page = +splittedHash[2];
                    if (page === 1)
                        return;
                    page -= 1;
                    window.location.hash = [splittedHash[0], splittedHash[1], page].join('/');
                }
                if ((target).classList.contains('next')) {
                    const splittedHash = window.location.hash.split('/');
                    let page = +splittedHash[2];
                    const maxPage = 30;
                    if (page === maxPage)
                        return;
                    page += 1;
                    window.location.hash = [splittedHash[0], splittedHash[1], page].join('/');
                }
                if ((target).classList.contains('btn-difficult')) {
                    target.classList.add('added');
                    target.innerText = 'Сложное слово';
                    target.disabled = true;
                    const btnLearned = document.querySelector(`.btn-learned[data-word="${target.dataset.word}"]`);
                    btnLearned.disabled = false;
                    btnLearned.innerText = 'Изучено?';
                    (() => __awaiter(this, void 0, void 0, function* () {
                        yield api_1.api.getWord(target.dataset.word)
                            .then((res) => {
                            words_1.default.aggregatedWords.push(res);
                            words_1.default.learnedWords = words_1.default.learnedWords.filter((word) => word.id !== target.dataset.word);
                        });
                    }))();
                }
                if ((target).classList.contains('btn-learned')) {
                    target.classList.add('added');
                    target.innerText = 'Изучено';
                    target.disabled = true;
                    const btnDifficult = document.querySelector(`.btn-difficult[data-word="${target.dataset.word}"]`);
                    btnDifficult.disabled = false;
                    btnDifficult.innerText = 'Сложно?';
                    (() => __awaiter(this, void 0, void 0, function* () {
                        yield api_1.api.getWord(target.dataset.word)
                            .then((res) => {
                            words_1.default.learnedWords.push(res);
                            words_1.default.aggregatedWords = words_1.default.aggregatedWords.filter((word) => word.id !== target.dataset.word);
                        });
                    }))();
                }
            }
        };
        document.onclick = click;
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


/* eslint-disable import/no-cycle */
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


/* eslint-disable object-curly-newline */
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
/* eslint-disable @typescript-eslint/no-unused-expressions */
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
exports.ModuleModel = void 0;
const api_1 = __webpack_require__(/*! ../api/api */ "./src/api/api.ts");
const api_path_1 = __webpack_require__(/*! ../api/api-path */ "./src/api/api-path.ts");
const func_1 = __webpack_require__(/*! ../utils/func */ "./src/utils/func.ts");
const sprintSettings_1 = __webpack_require__(/*! ../pages/sprint/sprintSettings */ "./src/pages/sprint/sprintSettings.ts");
class ModuleModel {
    constructor() {
        this.level = sprintSettings_1.sprintSettings.sprintLevel;
        this.activeWordNumber = 0;
        this.activePageNumber = sprintSettings_1.sprintSettings.sprintPage;
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
        if (!sprintSettings_1.sprintSettings.sprintFromTextbook) {
            this.pages.sort(() => 0.5 - Math.random());
        }
        // console.log(this.pages);
    }
    getWordsFromApi() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield api_1.api.getWords(this.level, this.pages[this.activePageNumber]);
            this.active20Words = Array.from(res);
            // console.log(this.active20Words);
            if (this.activePageNumber === 0 || sprintSettings_1.sprintSettings.sprintFromTextbook) {
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
        (sprintSettings_1.sprintSettings.sprintFromTextbook) ? this.checkWordsNumbersFromTextbook() : this.checkWordsNumbers();
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
    checkWordsNumbersFromTextbook() {
        if (this.activeWordNumber === 19) {
            this.activePageNumber -= 1;
            if (this.activePageNumber === -1) {
                this.stopGame();
                return;
            }
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
        clearInterval(this.timerId);
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
const sprintSettings_1 = __webpack_require__(/*! ./sprint/sprintSettings */ "./src/pages/sprint/sprintSettings.ts");
const AboutSprintGamePage = {
    classname: 'aboutsprint',
    renderLevels() {
        return `<p>Выбери уровень сложности</p>
    <select class="sprint__level">
      <option value="level0">Уровень 1</option>
      <option value="level1">Уровень 2</option>
      <option value="level2">Уровень 3</option>
      <option value="level3">Уровень 4</option>
      <option value="level4">Уровень 5</option>
      <option value="level5">Уровень 6</option>
    </select>`;
    },
    renderInstructions() {
        return `<p class="sprint__text">Игра Спринт поможет тебе проверить как хорошо ты знаешь слова.<br>
    Игра длится 1 минуту или пока не закончаться слова.<br>
    Чтобы дать ответ, кликай по нему мышкой или нажимай клавиши-стрелки.</p>`;
    },
    render() {
        return `
    ${header_1.default.render()}
    <div class = '${this.classname}-conteiner'>
      <h2 class='sprint__title'>Спринт</h2>
      <div class="sprint__rules">
        ${this.renderInstructions()}
        ${(sprintSettings_1.sprintSettings.previousHashNameArray().length !== 3) ? this.renderLevels() : ''}
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
        let html = '';
        if (localStorage.getItem('textbook') === 'true') {
            html = /* html */ ` 

      <div class="audio-call"> 
        <p class="audio-call__text">В игре аудиовызов вамнужно выбрать правильный перевод слова. <br>
      
        Чтобы играть с помощью клавиатуры, используй клавиши
        1, 2, 3, 4, 5  чтобы дать ответ,
        space - для воспроизведения звука.
        </p>
       <a id="leveltextbook" class="btn-level link" href="${this.hashes.audiocallGame}" >Играть</a>
   >
      `;
        }
        else {
            html = /* html */ ` 

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
        }
        return html;
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


/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable class-methods-use-this */
const api_path_1 = __webpack_require__(/*! ../../../api/api-path */ "./src/api/api-path.ts");
const supporting_func_1 = __webpack_require__(/*! ./supporting-func */ "./src/pages/audiocall/utils/supporting-func.ts");
const wrong_answer_mp3_1 = __importDefault(__webpack_require__(/*! ../../../assets/audio/wrong-answer.mp3 */ "./src/assets/audio/wrong-answer.mp3"));
const right_answer_mp3_1 = __importDefault(__webpack_require__(/*! ../../../assets/audio/right-answer.mp3 */ "./src/assets/audio/right-answer.mp3"));
console.log(supporting_func_1.storageAudiocall.words, 'sstorageAudiocall.words в листнере');
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
                if (supporting_func_1.storageAudiocall.round) {
                    supporting_func_1.storageAudiocall.round = 1;
                }
                else {
                    supporting_func_1.storageAudiocall.round = supporting_func_1.storageAudiocall.round + 1;
                    if (e.target.id === supporting_func_1.wordObj.wordTranslate) {
                        rightAnswerFunc(e.target);
                    }
                    else {
                        wrongAnswerFunc(e.target);
                    }
                }
            }
            if (e.target.classList.contains('restart')) {
                (0, supporting_func_1.clearLocalStorage)();
                window.location.reload();
            }
            if (e.target.classList.contains('level-textbook')) {
                const locationHash = window.location.hash.split('/');
                const unit = +locationHash[1];
                const page = +locationHash[2];
                supporting_func_1.storageAudiocall.level = unit + 1;
                supporting_func_1.storageAudiocall.page = page;
                supporting_func_1.storageAudiocall.textbook = true;
                console.log('листнер', supporting_func_1.storageAudiocall.level, 'storageAudiocall.level ');
            }
            if (e.target.classList.contains('level-change')) {
                (0, supporting_func_1.clearLocalStorage)();
            }
            if (e.target.classList.contains('btn-level')) {
                const dataN = Number(e.target.id.replace(/[^0-9]/g, ''));
                if (e.target.id === (`level${dataN}`)) {
                    (0, supporting_func_1.clearLocalStorage)();
                    supporting_func_1.storageAudiocall.level = dataN;
                    supporting_func_1.storageAudiocall.level = dataN;
                }
            }
        });
    }
}
function rightAnswerFunc(el) {
    supporting_func_1.storageAudiocall.score += 1;
    (0, supporting_func_1.soundAudio)((right_answer_mp3_1.default));
    el.classList.add('btn-translation-right');
    setTimeout(() => {
        window.location.reload();
    }, 1200);
}
function wrongAnswerFunc(el) {
    el.classList.add('btn-translation-wrong');
    const rightAnswer = document.querySelector('.right-answer');
    if (rightAnswer) {
        rightAnswer.innerHTML = `<div class="answer"><img class="answer-img" src="${api_path_1.apiPath + supporting_func_1.wordObj.image}" alt="правильный ответ"><br>${supporting_func_1.wordObj.word} — ${supporting_func_1.wordObj.wordTranslate} </div>`;
        supporting_func_1.storageAudiocall.arrayWrongWords.push(supporting_func_1.wordObj.word);
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* eslint-disable linebreak-style */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
exports.storageAudiocall = exports.clearLocalStorage = exports.wordObj = exports.printBtnString = exports.soundAudio = void 0;
const api_1 = __webpack_require__(/*! ../../../api/api */ "./src/api/api.ts");
// выбор уровня для игры и страницы
// (async function support() {
let storageAudiocall = {
    arrayWrongWords: [],
    round: 0,
    score: 0,
    arrayLevel: [],
    group: 0,
    page: 0,
    level: 1,
    words: [],
    noRepeat: [],
};
exports.storageAudiocall = storageAudiocall;
function levelGame() {
    storageAudiocall.group = storageAudiocall.level - 1;
    if ((storageAudiocall.page === 0)) {
        storageAudiocall.page = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
    }
    storageAudiocall.arrayLevel = [storageAudiocall.group, storageAudiocall.page];
}
levelGame();
console.log(storageAudiocall.group, storageAudiocall.page, 'group, page');
// констана которая получает с сервера массив слов
const apiGetWords = (api_1.api.getWords(storageAudiocall.group, storageAudiocall.page));
console.log(apiGetWords[1], 'apiGetWords');
//   .then((value) => {
//     // storageAudiocall.words = value;
//     // storage.words = value;
//     localStorage.setItem('words', JSON.stringify(value));
//   }).catch((err) => {
//     console.log(err);
//   })
// );
// получаем массив преводов
// function getWordsMap(): string[] {
//   const words = storage.words!.map((item) => item.wordTranslate);
//   console.log(words, 'words функции гет мап');
//   return words;
// }
console.log(storageAudiocall, 'storageAudiocall');
console.log(storageAudiocall.words, 'storageAudiocall.words ');
let wordsString = [];
// фильтруем избавляясь от дублей
// if (storageAudiocall.noRepeat!.length > 0) {
//   wordsString = wordsString.filter((item) => !storageAudiocall.noRepeat!.includes(item));
// }
// перемешиваем массив преводов
// function shuffle(array:string[]) {
//   array.sort(() => Math.random() - 0.5);
// }
// shuffle(wordsString);
// создаем масси в котром будет тоько 5 слов для игры
let arraySixWords = [];
// arraySixWords = wordsString.slice(0, 5);
// выбираем случайное слово из 6, которое будем угадывать
// const wordRight = arraySixWords[Math.floor(Math.random() * arraySixWords.length)];
// получаем делаем объект в который сохраним выбранное слово со всеми данными
let wordObj = {
    id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
};
exports.wordObj = wordObj;
// for (let i = 0; i < storageAudiocall.words!.length; i++) {
//   if (storageAudiocall.words![i].wordTranslate === wordRight) {
//     wordObj = storageAudiocall.words![i];
//   }
// }
// избавляемся от дублей в массиве преводов проолжение
// storageAudiocall.noRepeat!.push(wordObj.wordTranslate);
// if (localStorage.getItem('noRepeat')) {
//   noRepeat = JSON.parse(localStorage.getItem('noRepeat')!);
//   noRepeat.push(wordObj.wordTranslate);
//   localStorage.setItem('noRepeat', JSON.stringify(noRepeat));
// }
// функция проигрывания аудио с путем из нашего обекта-слово
function soundAudio(path) {
    const audioD = new Audio();
    audioD.src = `${path}`;
    audioD.autoplay = true;
}
exports.soundAudio = soundAudio;
// рисуем кнопки с переводами
function printBtnString() {
    return __awaiter(this, void 0, void 0, function* () {
        storageAudiocall.words = yield api_1.api.getWords(storageAudiocall.group, storageAudiocall.page);
        wordsString = storageAudiocall.words.map((item) => item.wordTranslate);
        if (storageAudiocall.noRepeat.length > 0) {
            wordsString = wordsString.filter((item) => !storageAudiocall.noRepeat.includes(item));
        }
        // перемешиваем массив преводов
        function shuffle(array) {
            array.sort(() => Math.random() - 0.5);
        }
        shuffle(wordsString);
        arraySixWords = wordsString.slice(0, 5);
        // выбираем случайное слово из 6, которое будем угадывать
        const wordRight = arraySixWords[Math.floor(Math.random() * arraySixWords.length)];
        for (let i = 0; i < storageAudiocall.words.length; i++) {
            if (storageAudiocall.words[i].wordTranslate === wordRight) {
                exports.wordObj = wordObj = storageAudiocall.words[i];
            }
        }
        storageAudiocall.noRepeat.push(wordObj.wordTranslate);
        console.log(storageAudiocall.words, 'sstorageAudiocall.words в принтбтн');
        // кусок который не трогали
        let a = '';
        let containerBtn = ' ';
        if (storageAudiocall.round < 10) {
            for (let i = 0; i < arraySixWords.length; i++) {
                a = arraySixWords[i];
                containerBtn += `<button data-num="${i + 1}" type="button" id="${a}" class="btn-translation">${a}</button> `;
            }
        }
        else {
            wordObj.audio = '';
            let a = '';
            if (storageAudiocall.arrayWrongWords.length > 0) {
                a = ` <p class="game-text">Рекомендуем выучить:&nbsp${storageAudiocall.arrayWrongWords.join(',\n')}</p> `;
            }
            else {
                a = ' <p class="game-text">Вы ниразу не ошиблись!</p> ';
            }
            containerBtn += `
  <div class="game-over">
    <p class="game-text">Вы прошли игру!</p>
    <p class="game-text">Ваш результат: &nbsp ${storageAudiocall.score}</p>
    ${a}
    <div class="btn-game-over-container">
      <button type="button" class="restart">Начать заново</button>
      <a  class="link level-change" href="#audiocall" >Выбрать уровень</a>
    </div>
  </div>
  
  `;
            clearLocalStorage();
        }
        return containerBtn;
    });
}
exports.printBtnString = printBtnString;
function clearLocalStorage() {
    exports.storageAudiocall = storageAudiocall = {};
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
    render() {
        return `
    ${header_1.default.render()}
    <div class = '${this.classname}-conteiner'>
      <div class="sprint__score">0</div>
      <div class="sprint__timer">60</div>
      <div class="sprint__field">
        <div class="field__title">
          <div class="title__count"></div>
          <div class="title__text">+ 10 очков за следующее слово</div>
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

/***/ "./src/pages/sprint/sprintSettings.ts":
/*!********************************************!*\
  !*** ./src/pages/sprint/sprintSettings.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.changeSprintSettings = exports.sprintSettings = void 0;
/* eslint-disable max-len */
exports.sprintSettings = {
    hashName: '',
    previousHashName: window.location.hash,
    sprintLevel: 0,
    sprintPage: 0,
    sprintFromTextbook: false,
    previousHashNameArray() {
        return this.previousHashName.split('/');
    },
    setLevelFromTextbook() {
        if (this.previousHashNameArray()[0] === '#textbook') {
            this.sprintLevel = +this.previousHashNameArray()[1] - 1;
            this.sprintFromTextbook = true;
        }
    },
    setLevelFromSelect(level) {
        this.sprintLevel = +level[level.length - 1];
        this.sprintPage = 0;
        this.sprintFromTextbook = false;
    },
    setPageFromTextbook() {
        if (this.previousHashNameArray()[0] === '#textbook') {
            this.sprintPage = +this.previousHashNameArray()[2] - 1;
            this.sprintFromTextbook = true;
        }
    },
};
function changeSprintSettings() {
    if (exports.sprintSettings.hashName) {
        exports.sprintSettings.previousHashName = exports.sprintSettings.hashName;
    }
    exports.sprintSettings.hashName = window.location.hash;
    exports.sprintSettings.setLevelFromTextbook();
    exports.sprintSettings.setPageFromTextbook();
}
exports.changeSprintSettings = changeSprintSettings;


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
const words_1 = __importDefault(__webpack_require__(/*! ../../words/words */ "./src/words/words.ts"));
const TextbookPage = {
    classname: 'textbook',
    wordlist: 'word-list',
    unitDifficultWords: 7,
    isAuth: localStorage.getItem('user'),
    render() {
        const locationHash = window.location.hash.split('/');
        const unit = +locationHash[1];
        const page = +locationHash[2];
        let view = '';
        const minUnit = 1;
        const maxUnit = 7;
        const unitSelector = 'textbook-unit';
        const pageSelector = 'unit-page';
        const minPage = 1;
        const maxPage = 30;
        const controllerTextbook = new controllerTextbook_1.TextbookController(unitSelector, pageSelector);
        if (!unit) {
            view = `<div class="textbook-units">
      <div class="textbook-unit" data-unit="1">Раздел 1</div>
      <div class="textbook-unit" data-unit="2">Раздел 2</div>
      <div class="textbook-unit" data-unit="3">Раздел 3</div>
      <div class="textbook-unit" data-unit="4">Раздел 4</div>
      <div class="textbook-unit" data-unit="5">Раздел 5</div>
      <div class="textbook-unit" data-unit="6">Раздел 6</div>
      ${this.isAuth ? `<div class="textbook-unit" data-unit="7">Раздел "Сложные слова"</div>
      ` : ''}
      </div>`;
        }
        else if (!page && unit <= maxUnit && unit >= minUnit && typeof unit === 'number') {
            view = `
         <div class="textbook-navigation unit-navigation">
            <button class="btn-round" id="go-back"></button>
            <p class="unit-name">Раздел ${this.unitDifficultWords === unit ? '"Сложные слова"' : unit}</p>
         </div>
         <ul class="unit-pages">
            ${this.renderPages(unit)}
         </ul>`;
        }
        else {
            view = `<div class=${this.classname}>
      <div class="textbook-navigation">
        <button class="btn-round" id="go-back"></button>
        <p class="unit-name">Раздел ${this.unitDifficultWords === unit ? '"Сложные слова"' : unit}
         <span class="unit-page-name">страница ${page}</span>
        </p>
      </div>
      <ul class=${this.wordlist}>
       ${this.getCards(unit, page)}
      </ul>
      <div class="textbook-footer">
        <div class="textbook-pagination">
          <button class="pagination-btn btn-orange previous" ${page === minPage ? 'disabled' : ''}>Предыдущая</button>
          ${this.isAuth ? `<a class="textbook-game level-textbook" href="${hashes_1.hashes.audiocall}">Аудиовызов</a>
          <a class="textbook-game" href="${hashes_1.hashes.aboutsprint}">Спринт</a>` : ''}
          <button class="pagination-btn btn-orange next" ${page === maxPage ? 'disabled' : ''}>Следующая</button>
        </div>
      </div>
    </div>`;
        }
        controllerTextbook.init(unit);
        return `${header_1.default.render()}${view}${footer_1.default.render()}`;
    },
    renderPages(unit) {
        let pages = '';
        let pagesCount = 30;
        const wordsPerPage = 20;
        if (unit === this.unitDifficultWords) {
            pagesCount = Math.ceil(words_1.default.aggregatedWords.length / wordsPerPage);
        }
        for (let i = 1; i <= pagesCount; i += 1) {
            pages += `<li class="unit-page" data-page="${i}">Page ${i}</li>`;
        }
        return pages;
    },
    getCards(unit, page) {
        const { wordlist, isAuth } = this;
        function renderCards(words) {
            const wordContainer = document.querySelector(`.${wordlist}`);
            if (wordContainer) {
                wordContainer.innerHTML = '';
                for (let i = 0; i < words.length; i += 1) {
                    const isWordInDifficult = words_1.default.aggregatedWords.some((word) => words[i].id === word.id);
                    const isWordLearned = words_1.default.learnedWords.some((word) => words[i].id === word.id);
                    const card = document.createElement('li');
                    card.classList.add('word-item');
                    card.innerHTML = `
  <div class="word-image" 
  style="background-image: url(https://rslang-learning-english-words.herokuapp.com/${words[i].image})">
  </div>
  <div class="word-description">
    <div class="word-pronounce word-audio">
    <p class="word-name">${words[i].word} ${words[i].transcription}</p>
      <div class="audio">
        <audio src="https://rslang-learning-english-words.herokuapp.com/${words[i].audio}"></audio>
      </div>
    </div>
    <p class="word-pronounce translation">${words[i].wordTranslate}</p>
    <p class="word-example">${words[i].textMeaning}</p>
    <p class="word-example translation">${words[i].textMeaningTranslate}</p>
    <p class="word-example">${words[i].textExample}</p>
    <p class="word-example translation">${words[i].textExampleTranslate}</p>
  </div>
  ${isAuth ? `
<div class="word-noted">
      <button class="btn-orange btn-difficult  ${isWordInDifficult ? 'added' : ''}" 
      data-word = "${words[i].id}" 
      ${isWordInDifficult ? 'disabled' : ''} >Сложно?</button>
      <button class="btn-orange btn-learned ${isWordLearned ? 'added' : ''}" 
      data-word = "${words[i].id}"
      ${isWordLearned ? 'disabled' : ''}>Изучено?</button>
      </div>` : ''}`;
                    card.dataset.word = words[i].id;
                    wordContainer.append(card);
                }
            }
        }
        if (unit === this.unitDifficultWords) {
            setTimeout(() => {
                renderCards(words_1.default.aggregatedWords);
            }, 0);
            return;
        }
        (() => __awaiter(this, void 0, void 0, function* () {
            yield api_1.api.getWords(unit - 1, page - 1)
                .then((res) => {
                if (res) {
                    words_1.default.words = res;
                    renderCards(res);
                }
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
        this.sprintCountText.innerHTML = `+ ${n} очков за следующее слово`;
    }
    renderResults(questions, answers, rightAnswers, wrongAnswers, score) {
        this.sprintConteiner.innerHTML = '';
        this.sprintConteiner.innerHTML = `${sprintresults_1.default.render(questions, answers, rightAnswers, wrongAnswers, score)}`;
    }
}
exports.ModuleView = ModuleView;
// export default ModuleView;


/***/ }),

/***/ "./src/words/words.ts":
/*!****************************!*\
  !*** ./src/words/words.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Words {
}
Words.words = [];
Words.aggregatedWords = [];
Words.learnedWords = [];
exports["default"] = Words;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsdUJBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDbkgsQ0FBQztDQUNGO0FBNURELGdDQTREQztBQUVELDZCQUE2Qjs7Ozs7Ozs7Ozs7OztBQ25FN0IsTUFBTSxLQUFLOztBQUNGLFdBQUssR0FBWSxFQUFFLENBQUM7QUFFcEIscUJBQWUsR0FBWSxFQUFFLENBQUM7QUFFOUIsa0JBQVksR0FBWSxFQUFFLENBQUM7QUFHcEMscUJBQWUsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1hyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvdGV4dGJvb2svdGV4dGJvb2suc2Nzcz9lMjBmIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzcz9hYWFmIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9hcGkvYXBpLXBhdGgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvaGFzaGVzLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9tb2RhbC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9zbWFsbENvbXBvbmVudHMvYnV0dG9ucy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9zcHJpbnRyZXN1bHRzLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb250cm9sbGVyL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbnRyb2xsZXIvY29udHJvbGxlclNwcmludC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyVGV4dGJvb2sudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2Z1bmN0aW9uYWwvbGlzdGVuZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2Z1bmN0aW9uYWwvc2hvdy11c2VyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9mdW5jdGlvbmFsL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9tb2RlbC9tb2RlbC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvbW9kZWwvbW9kZWxTcHJpbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2Fib3V0c3ByaW50LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hdWRpb2NhbGwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC9tYWluLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hdWRpb2NhbGwvc3RhcnQtYXVkaW9jYWxsLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hdWRpb2NhbGwvdXRpbHMvZ2FtZS1yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC91dGlscy9saXN0ZW5lci1hdWRpb2NhbGwudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC91dGlscy9zdXBwb3J0aW5nLWZ1bmMudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL21haW4udHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL3NwcmludC9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvc3ByaW50L2luaXRTcHJpbnRNVkMudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL3NwcmludC9zcHJpbnRTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvc3RhdGlzdGljcy9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvdGVhbS50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvdGV4dGJvb2svaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3V0aWxzL2Z1bmMudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3ZpZXcvdmlldy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvdmlldy92aWV3U3ByaW50LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy93b3Jkcy93b3Jkcy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cblxuY29uc3QgYXBpUGF0aCA9ICdodHRwczovL3JzbGFuZy1sZWFybmluZy1lbmdsaXNoLXdvcmRzLmhlcm9rdWFwcC5jb20vJztcbmNvbnN0IHdvcmRzRW5kcG9pbnQgPSAnd29yZHMnO1xuY29uc3QgdXNlcnNFbmRwb2ludCA9ICd1c2Vycyc7XG5jb25zdCBzaWduSW4gPSAnc2lnbmluJztcbmNvbnN0IGFwaUNhdGVnb3J5ID0gJ3VzZXJXb3JkLm9wdGlvbmFsLmNhdGVnb3J5JztcblxuZXhwb3J0IHtcbiAgYXBpUGF0aCwgd29yZHNFbmRwb2ludCwgdXNlcnNFbmRwb2ludCwgc2lnbkluLCBhcGlDYXRlZ29yeSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWVsc2UtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuaW1wb3J0IHtcbiAgYXBpUGF0aCwgdXNlcnNFbmRwb2ludCwgd29yZHNFbmRwb2ludCwgc2lnbkluLCBhcGlDYXRlZ29yeSxcbn0gZnJvbSAnLi9hcGktcGF0aCc7XG5pbXBvcnQge1xuICBJVXNlciwgSVdvcmQsIElVc2VyRGF0YSwgSVVzZXJXb3JkcywgSVNldHRpbmdzLFxufSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vZnVuY3Rpb25hbC9zdG9yYWdlJztcblxuY29uc3QgYXBpID0ge1xuXG4gIGFzeW5jIFVwc2VydHNOZXdTZXR0aW5ncyh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8SVNldHRpbmdzIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3VzZXJzRW5kcG9pbnR9LyR7dXNlcklkfS9zZXR0aW5nc2AsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHN0b3JhZ2Uuc2V0dGluZ3MpLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJU2V0dGluZ3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHB1dGluZyBuZXcgc2V0dGluZ3MnKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgR2V0U2V0dGluZ3ModXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPElTZXR0aW5ncyB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fS8ke3VzZXJJZH0vc2V0dGluZ3NgLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJU2V0dGluZ3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBnZXR0aW5nIHNldHRpbmdzJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGdldEFsbFVzZXJXb3Jkcyh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8SVVzZXJXb3Jkc1tdIHwgdW5kZWZpbmVkID4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fS8ke3VzZXJJZH0ke3dvcmRzRW5kcG9pbnR9YCxcbiAgICAgICAgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSVVzZXJXb3Jkc1tdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgZ2V0dGluZyB3b3JkcycpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBDcmVhdGVVc2VyV29yZCh1c2VySWQ6IHN0cmluZywgd29yZElEOnN0cmluZyk6IFByb21pc2U8SVVzZXJXb3JkcyB8IHVuZGVmaW5lZCA+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7dXNlcnNFbmRwb2ludH0vJHt1c2VySWR9LyR7d29yZHNFbmRwb2ludH0vJHt3b3JkSUR9YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UudXNlcldvcmQpLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJVXNlcldvcmRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgY3JlYXRpbmcgdXNlciB3b3JkJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIFVwZGF0ZVVzZXJXb3JkKHVzZXJJZDogc3RyaW5nLCB3b3JkSUQ6c3RyaW5nKTogUHJvbWlzZTxJVXNlcldvcmRzIHwgdW5kZWZpbmVkID4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fS8ke3VzZXJJZH0vJHt3b3Jkc0VuZHBvaW50fS8ke3dvcmRJRH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzdG9yYWdlLnVzZXJXb3JkKSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSVVzZXJXb3JkcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHVzZXIgd29yZCcpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBEZWxldGVVc2VyV29yZCh1c2VySWQ6IHN0cmluZywgd29yZElEOnN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7dXNlcnNFbmRwb2ludH0vJHt1c2VySWR9LyR7d29yZHNFbmRwb2ludH0vJHt3b3JkSUR9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHVzZXIgd29yZCcpO1xuICAgIH1cbiAgfSxcblxuICAvLyBhc3luYyBHZXRBbGxVc2VyQWdncmVnYXRlZFdvcmRzKHVzZXJJZDogc3RyaW5nLCBwYWdlOnN0cmluZywgd29yZHNQZXJQYWdlOiBzdHJpbmcsIGZpbHRlcjogc3RyaW5nICk6IFByb21pc2U8SVdvcmRbXSB8IHVuZGVmaW5lZCA+IHtcbiAgLy8gICB0cnkge1xuICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7dXNlcnNFbmRwb2ludH0vJHt1c2VySWR9LyR7d29yZHNFbmRwb2ludH0vJHtwYWdlfS8ke3dvcmRzUGVyUGFnZX0vJHtmaWx0ZXJ9YCwgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAvLyAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gIC8vICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSVdvcmRbXTtcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAvLyAgICAgfVxuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGdldHRpbmcgd29yZHMnKTtcbiAgLy8gICB9XG4gIC8vIH0sXG5cbiAgYXN5bmMgR2V0VXNlckFnZ3JlZ2F0ZWRXb3JkQnlJZCh1c2VySWQ6IHN0cmluZywgd29yZElEOnN0cmluZyk6IFByb21pc2U8SVVzZXJXb3JkcyB8IHVuZGVmaW5lZCA+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7dXNlcnNFbmRwb2ludH0vJHt1c2VySWR9L2FnZ3JlZ2F0ZWRXb3Jkcy8ke3dvcmRJRH1gLFxuICAgICAgICB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJVXNlcldvcmRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgZ2V0dGluZyB1c2VyIGFnZ3JlZ2F0ZWQgd29yZCcpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBjcmVhdGVOZXdVc2VyKG5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8SVVzZXIgfCB1bmRlZmluZWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7dXNlcnNFbmRwb2ludH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbGVuZ3RoIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmcnKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZ2V0VXNlcihpZDogc3RyaW5nKTogUHJvbWlzZTxJVXNlciB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fS8ke2lkfWAsXG4gICAgICAgIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElVc2VyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXNlciBub3QgZm91bmQnKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgdXNlclNpZ25JbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxJVXNlckRhdGEgfCB1bmRlZmluZWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7c2lnbklufWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCB1c2VyJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGdldFdvcmRzKGdyb3VwOiBudW1iZXIsIHBhZ2U6IG51bWJlcik6IFByb21pc2U8SVdvcmRbXSB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt3b3Jkc0VuZHBvaW50fT9ncm91cD0ke2dyb3VwfSZwYWdlPSR7cGFnZX1gLFxuICAgICAgICB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJV29yZFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGdldCB3b3Jkc1wiKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZ2V0V29yZChpZDogc3RyaW5nKTogUHJvbWlzZTxJV29yZCB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt3b3Jkc0VuZHBvaW50fS8ke2lkfWAsXG4gICAgICAgIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElXb3JkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGdldCB3b3JkXCIpO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCB7IGFwaSB9O1xuIiwiY29uc3QgQ29udGVudCA9IHtcbiAgcmVuZGVyOiAoY3VzdG9tQ2xhc3MgPSAnJyk6c3RyaW5nID0+IGA8ZGl2IGNsYXNzPVwiY29udGVudCAke2N1c3RvbUNsYXNzfVwiIGlkPVwiY29udGVudFwiPjwvZGl2PmAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiY29uc3QgRm9vdGVyID0ge1xuICByZW5kZXI6IChjdXN0b21DbGFzcyA9ICcnKTpzdHJpbmcgPT4gYDxmb290ZXIgY2xhc3M9XCJmb290ZXIgJHtjdXN0b21DbGFzc31cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdpdGh1Yi1saW5rc1wiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZmx5ZXRoZXJcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+Zmx5ZXRoZXI8YT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0RhcmluYTk5MlwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5EYXJpbmE5OTI8YT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FsZW5hRG96XCIgY2xhc3M9XCJnaXRodWItbGlua1wiPkFsZW5hRG96PGE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3Bhbj4mIzE2OTsgMjAyMjwvc3Bhbj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcnMuc2Nob29sL2pzL1wiIGNsYXNzPVwicnMtbGlua1wiPjwvYT5cbiAgICAgICAgICAgIDwvZm9vdGVyPmAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJleHBvcnQgY29uc3QgaGFzaGVzID0ge1xuICBtYWluOiAnI21haW4nLFxuICB0ZXh0Ym9vazogJyN0ZXh0Ym9vaycsXG4gIHN0YXRpc3RpY3M6ICcjc3RhdGlzdGljcycsXG4gIGF1ZGlvY2FsbDogJyNhdWRpb2NhbGwnLFxuICBhYm91dHNwcmludDogJyNhYm91dHNwcmludCcsXG4gIHNwcmludDogJyNzcHJpbnQnLFxuICB0ZWFtOiAnI3RlYW0nLFxufTtcbiIsImltcG9ydCBzaG93VXNlciBmcm9tICcuLi9mdW5jdGlvbmFsL3Nob3ctdXNlcic7XG5pbXBvcnQgeyBoYXNoZXMgfSBmcm9tICcuL2hhc2hlcyc7XG5cbmNvbnN0IEhlYWRlciA9IHtcblxuICByZW5kZXIoY3VzdG9tQ2xhc3MgPSAnJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGlkPVwibW9kYWwtcmVzdWx0LXdyYXBwZXJcIj5cbiAgICA8ZGl2IGlkPVwib3ZlcmxheVwiPjwvZGl2PlxuICAgIDxkaXYgaWQ9XCJtb2RhbC13aW5kb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJidG4tY2xvc2VcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyICR7Y3VzdG9tQ2xhc3N9XCIgaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGVyX19sb2dvXCI+PGEgaHJlZj1cIlwiPlJTTGFuZzwvYT48L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19hdXRoXCI+XG4gICAgICAgICAgJHtzaG93VXNlcih0cnVlKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2F1dGhcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuYXYgY2xhc3M9XCJoZWFkZXJfX21lbnVcIj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51X19saXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7aGFzaGVzLm1haW59XCIgY2xhc3M9XCJtZW51X19tYWluIG1lbnVfX2l0ZW1fYWN0aXZlXCI+0JPQu9Cw0LLQvdCw0Y88L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMudGV4dGJvb2t9XCIgY2xhc3M9XCJtZW51X190ZXh0Ym9va1wiPtCj0YfQtdCx0L3QuNC6PC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIke2hhc2hlcy5zdGF0aXN0aWNzfVwiIGNsYXNzPVwibWVudV9fc3RhdGljdGljcyBtZW51X19pdGVtX2Rpc2FibGVcIj7QodGC0LDRgtC40YHRgtC40LrQsDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7aGFzaGVzLmF1ZGlvY2FsbH1cIiBjbGFzcz1cIm1lbnVfX2F1ZGlvY2FsbFwiPtCQ0YPQtNC40L7QstGL0LfQvtCyPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7aGFzaGVzLmFib3V0c3ByaW50fVwiIGNsYXNzPVwibWVudV9fc3ByaW50XCI+0KHQv9GA0LjQvdGCPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7aGFzaGVzLnRlYW19XCIgY2xhc3M9XCJtZW51X190ZWFtXCI+0J4g0LrQvtC80LDQvdC00LU8L2E+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1cmdlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlci1idXJnZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2F1dGhcIj5cbiAgICAgICAgICAgICAgJHtzaG93VXNlcih0cnVlKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19hdXRoXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJoZWFkZXJfX21lbnVcIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibWVudV9fbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2hhc2hlcy5tYWlufVwiIGNsYXNzPVwibWVudV9fbWFpbiBtZW51X19pdGVtX2FjdGl2ZVwiPtCT0LvQsNCy0L3QsNGPPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke2hhc2hlcy50ZXh0Ym9va31cIiBjbGFzcz1cIm1lbnVfX3RleHRib29rXCI+0KPRh9C10LHQvdC40Lo8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtoYXNoZXMuc3RhdGlzdGljc31cIiBjbGFzcz1cIm1lbnVfX3N0YXRpY3RpY3MgbWVudV9faXRlbV9kaXNhYmxlXCI+0KHRgtCw0YLQuNGB0YLQuNC60LA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7aGFzaGVzLmF1ZGlvY2FsbH1cIiBjbGFzcz1cIm1lbnVfX2F1ZGlvY2FsbFwiPtCQ0YPQtNC40L7QstGL0LfQvtCyPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke2hhc2hlcy5zcHJpbnR9XCIgY2xhc3M9XCJtZW51X19zcHJpbnRcIj7QodC/0YDQuNC90YI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7aGFzaGVzLnRlYW19XCIgY2xhc3M9XCJtZW51X190ZWFtXCI+0J4g0LrQvtC80LDQvdC00LU8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgYDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG5leHBvcnQgY29uc3QgZm9ybUxvZ2luID0gYCA8Zm9ybSBjbGFzcz1cImZvcm0tc2lnbmluXCIgaWQ9XCJhdXRoXCI+ICAgICAgIFxuPGgzIGNsYXNzPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPtCS0LLQtdC00LjRgtC1INGB0LLQvtC4INC00LDQvdC90YvQtTwvaDM+XG48ZGl2IGNsYXNzPVwiZm9ybS1zaWduaW4tYm9keVwiPlxuICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJ1c2VyLWVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cItCS0LDRiCBFbWFpbFwiIHJlcXVpcmVkIC8+XG4gIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBtaW5sZW5ndGg9XCI4XCIgaWQ9XCJ1c2VyLXBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiIHJlcXVpcmVkLz4gICAgICBcbiAgPGRpdiBjbGFzcz1cImZvcm0tc2lnbmluLWJ1dHRvbnNcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLW9yYW5nZVwiICBpZD1cImJ1dHRvbi1uZXctdXNlclwiIHR5cGUgPVwiYnV0dG9uXCI+INCg0LXQs9C40YHRgtGA0LDRhtC40Y8gPC9idXR0b24+IFxuICAgIDxidXR0b24gY2xhc3M9XCJidG4tb3JhbmdlXCIgaWQ9XCJhdXRvcml6dGlvbkJ0blwiIHR5cGU9XCJzdWJtaXRcIj7QktC+0LnRgtC4PC9idXR0b24+ICBcbiAgPC9kaXY+XG4gIDwvZGl2PlxuPGg0IGNsYXNzPVwiZm9ybS1zaWduaW4tZXJyb3JcIj48L2g0PiBcbjwvZm9ybT5gO1xuXG5leHBvcnQgY29uc3QgZm9ybVJlZ2lzdHJhdGlvbiA9IGAgPGZvcm0gY2xhc3M9XCJmb3JtLXNpZ25pblwiIGlkPVwicmVnXCI+ICAgICAgIFxuPGgzIGNsYXNzPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPtCS0LLQtdC00LjRgtC1INGB0LLQvtC4INC00LDQvdC90YvQtTwvaDM+XG48ZGl2IGNsYXNzPVwiZm9ybS1zaWduaW4tYm9keVwiPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXItbmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInVzZXItbmFtZVwiIHBsYWNlaG9sZGVyPVwi0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiIHJlcXVpcmVkPVwiXCIgLz5cbiAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwidXNlci1lbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHJlcXVpcmVkIC8+XG4gIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBtaW5sZW5ndGg9XCI4XCIgaWQ9XCJ1c2VyLXBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiIHJlcXVpcmVkIC8+ICBcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLW9yYW5nZVwiIGlkPVwicmVnaXN0cmF0aW9uX2J0blwiIHR5cGU9XCJzdWJtaXRcIj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPINC4INCy0YXQvtC0PC9idXR0b24+ICBcbjwvZGl2PlxuPGg0IGNsYXNzPVwiZm9ybS1yZWctZXJyb3JcIj48L2g0PiAgXG48L2Zvcm0+YDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmV4cG9ydCBjb25zdCBCdXR0b25zID0ge1xuICBjcmVhdGU6IChzdHI6c3RyaW5nLCBjbGFzc05hbWU6c3RyaW5nLCBkaXNhYmxlZCA9IGZhbHNlKTpzdHJpbmcgPT4gYDxidXR0b24gY2xhc3M9XCJidXR0b24gJHtjbGFzc05hbWV9XCIgJHtkaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJ30+JHtzdHJ9PC9idXR0b24+YCxcbn07XG4iLCJpbXBvcnQgeWVzSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL3llcy5wbmcnO1xuaW1wb3J0IE5vSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL25vLnBuZyc7XG5cbmNvbnN0IFNwcmludFJlc3VsdHMgPSB7XG4gIHJlbmRlcihxdWVzdGlvbnM6c3RyaW5nW10sIGFuc3dlcnM6Ym9vbGVhbltdLCByaWdodEFuc3dlcnM6bnVtYmVyLCB3cm9uZ0Fuc3dlcnM6bnVtYmVyLCBzY29yZTpudW1iZXIpOnN0cmluZyB7XG4gICAgY29uc3QgdGFibGVUZXh0Q29udGVudDpzdHJpbmcgPSB0aGlzLmNyZWF0ZVRhYmxlKHF1ZXN0aW9ucywgYW5zd2Vycyk7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwicmVzdWx0LWNvbnRlaW5lclwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInNwcmludF9fcmVzdWx0X19zY29yZVwiPtCi0LLQvtC5INGA0LXQt9GD0LvRjNGC0LDRgjogJHtzY29yZX0g0L7Rh9C60L7QsiA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwic3ByaW50X19yZXN1bHRcIj7Qn9GA0LDQstC40LvRjNC90YvRhSDQvtGC0LLQtdGC0L7QsjogJHtyaWdodEFuc3dlcnN9LiDQntGI0LjQsdC+0Lo6ICR7d3JvbmdBbnN3ZXJzfS48L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1jb250ZWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7QktGL0YPRh9C10L3QvdGL0LUg0YHQu9C+0LLQsDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwic3ByaW50X190YWJsZV9fcmVzdWx0XCI+JHt0YWJsZVRleHRDb250ZW50fTwvdGFibGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YSBjbGFzcz1cInNwcmludF9fY2xvc2VfX3Jlc3VsdFwiIGhyZWY9XCIjbWFpblwiPtCX0LDQutGA0YvRgtGMPC9hPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgfSxcbiAgY3JlYXRlVGFibGU6IChxdWVzdGlvbnM6c3RyaW5nW10sIGFuc3dlcnM6Ym9vbGVhbltdKTpzdHJpbmcgPT4ge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc3JjID0gYW5zd2Vyc1tpXSA/IHllc0ltYWdlIDogTm9JbWFnZTtcbiAgICAgIHJlc3VsdCArPSBgPHRyPjx0ZD4ke3F1ZXN0aW9uc1tpXX08L3RkPjx0ZD48aW1nIHNyYz1cIiR7c3JjfVwiIGFsdD1cInllcy9ub1wiPjwvdGQ+PC90cj5gO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ByaW50UmVzdWx0cztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1uYW1lZC1hcy1kZWZhdWx0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cblxuLy8gaW1wb3J0IG1vZGFsQXV0aG9yaXphdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsJztcblxuaW1wb3J0IHsgTWVudUl0ZW1zIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IE1vZHVsZU1vZGVsIGZyb20gJy4uL21vZGVsL21vZGVsJztcbmltcG9ydCBsaXN0ZW5lciBmcm9tICcuLi9mdW5jdGlvbmFsL2xpc3RlbmVyJztcbmltcG9ydCBsaXN0ZW5lckF1ZGlvQ2FsbCBmcm9tICcuLi9wYWdlcy9hdWRpb2NhbGwvdXRpbHMvbGlzdGVuZXItYXVkaW9jYWxsJztcbmltcG9ydCB7IHNwcmludFNldHRpbmdzLCBjaGFuZ2VTcHJpbnRTZXR0aW5ncyB9IGZyb20gJy4uL3BhZ2VzL3NwcmludC9zcHJpbnRTZXR0aW5ncyc7XG5cbmNsYXNzIE1vZHVsZUNvbnRyb2xsZXIge1xuICBteU1vZHVsZUNvbnRhaW5lciE6IEhUTUxFbGVtZW50O1xuXG4gIG15TW9kdWxlTW9kZWwhOiBNb2R1bGVNb2RlbDtcblxuICBtZW51TWFpbiAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51VGV4dGJvb2sgITogSFRNTEVsZW1lbnQ7XG5cbiAgbWVudVN0YXRpY3RpY3MgITogSFRNTEVsZW1lbnQ7XG5cbiAgbWVudUF1ZGlvY2FsbCAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51U3ByaW50ICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVUZWFtICE6IEhUTUxFbGVtZW50O1xuXG4gIGJ1dHRvblN0YXJ0U3ByaW50ITogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgc3ByaW50TGV2ZWwgITogSFRNTElucHV0RWxlbWVudDtcblxuICBhdWRpb2NhbGxnYW1lICE6IEhUTUxFbGVtZW50O1xuXG4gIGluaXQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgbW9kZWw6IE1vZHVsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwgPSBtb2RlbDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIChlKSA9PiB7XG4gICAgICBjaGFuZ2VTcHJpbnRTZXR0aW5ncygpO1xuICAgICAgY29uc29sZS5sb2coZS5uZXdVUkwsIGUub2xkVVJMKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9KTtcblxuICAgIC8vIG1vZGFsQXV0aG9yaXphdGlvbi5vcGVuKCk7XG4gICAgbGlzdGVuZXIub3BlbigpO1xuICAgIGxpc3RlbmVyQXVkaW9DYWxsLmNsaWsoKTtcbiAgICBsaXN0ZW5lckF1ZGlvQ2FsbC5rZXlib2FyZCgpO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAvLyB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjbWFpbic7XG4gIH1cblxuICB1cGRhdGVTdGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBoYXNoUGFnZU5hbWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbC51cGRhdGVTdGF0ZShoYXNoUGFnZU5hbWUpO1xuICAgIHRoaXMuZmluZE1lbnVFbGVtZW50cyhoYXNoUGFnZU5hbWUpO1xuICAgIHN3aXRjaCAoaGFzaFBhZ2VOYW1lKSB7XG4gICAgICBjYXNlICdhYm91dHNwcmludCc6XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uc0Fib3V0U3ByaW50R2FtZUxpc3RlbmVycygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgZmluZE1lbnVFbGVtZW50cyhoYXNoTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaGFzaDogc3RyaW5nID0gaGFzaE5hbWUuc3BsaXQoJy8nKVswXTtcbiAgICB0aGlzLm1lbnVNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX21haW4nKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVUZXh0Ym9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X190ZXh0Ym9vaycpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudVN0YXRpY3RpY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fc3RhdGljdGljcycpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudUF1ZGlvY2FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19hdWRpb2NhbGwnKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVTcHJpbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fc3ByaW50JykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51VGVhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X190ZWFtJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3Qgb2JqOiBNZW51SXRlbXMgPSB7XG4gICAgICBtYWluOiB0aGlzLm1lbnVNYWluLFxuICAgICAgdGV4dGJvb2s6IHRoaXMubWVudVRleHRib29rLFxuICAgICAgc3RhdGlzdGljczogdGhpcy5tZW51U3RhdGljdGljcyxcbiAgICAgIGF1ZGlvY2FsbDogdGhpcy5tZW51QXVkaW9jYWxsLFxuICAgICAgc3ByaW50OiB0aGlzLm1lbnVTcHJpbnQsXG4gICAgICBhYm91dHNwcmludDogdGhpcy5tZW51U3ByaW50LFxuICAgICAgdGVhbTogdGhpcy5tZW51VGVhbSxcbiAgICB9O1xuICAgIGlmICh0aGlzLm1lbnVNYWluKSB7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwuaGlnaGxpZ2h0QWN0aXZlTWVudUl0ZW0ob2JqLCBoYXNoKTtcbiAgICB9XG4gIH1cblxuICBhZGRCdXR0b25zQWJvdXRTcHJpbnRHYW1lTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIHRoaXMuYnV0dG9uU3RhcnRTcHJpbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19zdGFydF9fc3ByaW50JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgdGhpcy5zcHJpbnRMZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnRfX2xldmVsJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLmJ1dHRvblN0YXJ0U3ByaW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3ByaW50TGV2ZWwpIHsgc3ByaW50U2V0dGluZ3Muc2V0TGV2ZWxGcm9tU2VsZWN0KHRoaXMuc3ByaW50TGV2ZWwudmFsdWUpOyB9XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyNzcHJpbnQnO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZHVsZUNvbnRyb2xsZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgTW9kdWxlTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9tb2RlbFNwcmludCc7XG5cbmV4cG9ydCBjbGFzcyBNb2R1bGVDb250cm9sbGVyIHtcbiAgbXlNb2R1bGVDb250YWluZXIhOiBIVE1MRWxlbWVudDtcblxuICBteU1vZHVsZU1vZGVsITogTW9kdWxlTW9kZWw7XG5cbiAgYnV0dG9uRmFsc2UhOiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICBidXR0b25UcnVlITogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgc3ByaW50VGltZXIhOiBIVE1MRWxlbWVudDtcblxuICBidXR0b25TYXlXb3JkITpIVE1MRWxlbWVudDtcblxuICBpbml0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIG1vZGVsOiBNb2R1bGVNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5maW5kQXVkaW9FbGVtZW50cygpO1xuICAgIHRoaXMuc2V0VGltZXIoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMuaGFzaGNoYW5nZUV2ZW50UmVtb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuc2V0QnV0dG9uRXZlbnRMaXN0ZW5lcnMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZXRFdmVudExpc3RlbmVycyk7XG4gIH1cblxuICBoYXNoY2hhbmdlRXZlbnRSZW1vdmUgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLmNsZWFySW50ZXJ2YWwoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuc2V0QnV0dG9uRXZlbnRMaXN0ZW5lcnMpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZXRFdmVudExpc3RlbmVycyk7XG4gIH07XG5cbiAgc2V0QnV0dG9uRXZlbnRMaXN0ZW5lcnMgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgdGhpcy5zZWxlY3RGYWxzZSgpO1xuICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnByZXBlYXJOZXh0V29yZCgpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICB0aGlzLnNlbGVjdFRydWUoKTtcbiAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5wcmVwZWFyTmV4dFdvcmQoKTtcbiAgICB9XG4gIH07XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoZXZlbnQ6RXZlbnQpOnZvaWQgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGVsZW0uY2xvc2VzdCgnLmJ1dHRvbl9fc3ByaW50X19mYWxzZScpKSB7XG4gICAgICB0aGlzLnNlbGVjdEZhbHNlKCk7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwucHJlcGVhck5leHRXb3JkKCk7XG4gICAgfSBlbHNlIGlmIChlbGVtLmNsb3Nlc3QoJy5idXR0b25fX3NwcmludF9fdHJ1ZScpKSB7XG4gICAgICB0aGlzLnNlbGVjdFRydWUoKTtcbiAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5wcmVwZWFyTmV4dFdvcmQoKTtcbiAgICB9IGVsc2UgaWYgKGVsZW0uY2xvc2VzdCgnLndvcmRfX3NvdW5kJykpIHtcbiAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwcmludF9fc2F5X193b3JkJykgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5zYXlXb3JkKGF1ZGlvKTtcbiAgICB9XG4gIH07XG5cbiAgZmluZEF1ZGlvRWxlbWVudHMoKTp2b2lkIHtcbiAgICBjb25zdCByaWdodEFuc3dlckF1ZGlvID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYXVkaW9fX3JpZ2h0JykgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBjb25zdCB3cm9uZ0Fuc3dlckF1ZGlvID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYXVkaW9fX3dyb25nJykgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBjb25zdCB0aW1lb3ZlckF1ZGlvID0gdGhpcy5teU1vZHVsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYXVkaW9fX3RpbWVvdmVyJykgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwuZ2V0QXVkaW8ocmlnaHRBbnN3ZXJBdWRpbywgd3JvbmdBbnN3ZXJBdWRpbywgdGltZW92ZXJBdWRpbyk7XG4gIH1cblxuICBzZXRUaW1lcigpOnZvaWQge1xuICAgIHRoaXMuc3ByaW50VGltZXIgPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnRfX3RpbWVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLnNldFRpbWVyKHRoaXMuc3ByaW50VGltZXIpO1xuICB9XG5cbiAgc2VsZWN0VHJ1ZSgpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbC5jaGVja0Fuc3dlcih0cnVlKTtcbiAgfVxuXG4gIHNlbGVjdEZhbHNlKCk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLmNoZWNrQW5zd2VyKGZhbHNlKTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBJV29yZCB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCBXb3JkcyBmcm9tICcuLi93b3Jkcy93b3Jkcyc7XG5pbXBvcnQgeyBoYXNoZXMgfSBmcm9tICcuLi9jb21wb25lbnRzL2hhc2hlcyc7XG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2FwaS9hcGknO1xuXG5leHBvcnQgY2xhc3MgVGV4dGJvb2tDb250cm9sbGVyIHtcbiAgcGFnZVNlbGVjdG9yOiBzdHJpbmc7XG5cbiAgdW5pdFNlbGVjdG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodW5pdFNlbGVjdG9yOiBzdHJpbmcsIHBhZ2VTZWxlY3Rvcjogc3RyaW5nKSB7XG4gICAgdGhpcy51bml0U2VsZWN0b3IgPSB1bml0U2VsZWN0b3I7XG4gICAgdGhpcy5wYWdlU2VsZWN0b3IgPSBwYWdlU2VsZWN0b3I7XG4gIH1cblxuICBpbml0KHVuaXQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnModW5pdCk7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycyh1bml0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjbGljazogKGU6IE1vdXNlRXZlbnQpID0+IHZvaWQgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBpZiAoKHRhcmdldCkuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMudW5pdFNlbGVjdG9yKSkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYCR7aGFzaGVzLnRleHRib29rfS8keyh0YXJnZXQpLmRhdGFzZXQudW5pdH1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnMoJ2F1ZGlvJykpIHtcbiAgICAgICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignYXVkaW8nKT8ucGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5wYWdlU2VsZWN0b3IpKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgJHt3aW5kb3cubG9jYXRpb24uaGFzaH0vJHsodGFyZ2V0KS5kYXRhc2V0LnBhZ2V9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHRhcmdldCkuaWQgPT09ICdnby1iYWNrJykge1xuICAgICAgICAgIGlmICgrd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKVsyXSAmJiB1bml0KSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGAke2hhc2hlcy50ZXh0Ym9va30vJHt1bml0fWA7XG4gICAgICAgICAgfSBlbHNlIHsgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgJHtoYXNoZXMudGV4dGJvb2t9YDsgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgodGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnMoJ3ByZXZpb3VzJykpIHtcbiAgICAgICAgICBjb25zdCBzcGxpdHRlZEhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnLycpO1xuICAgICAgICAgIGxldCBwYWdlID0gK3NwbGl0dGVkSGFzaFsyXTtcbiAgICAgICAgICBpZiAocGFnZSA9PT0gMSkgcmV0dXJuO1xuICAgICAgICAgIHBhZ2UgLT0gMTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFtzcGxpdHRlZEhhc2hbMF0sIHNwbGl0dGVkSGFzaFsxXSwgcGFnZV0uam9pbignLycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnMoJ25leHQnKSkge1xuICAgICAgICAgIGNvbnN0IHNwbGl0dGVkSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcvJyk7XG4gICAgICAgICAgbGV0IHBhZ2UgPSArc3BsaXR0ZWRIYXNoWzJdO1xuICAgICAgICAgIGNvbnN0IG1heFBhZ2UgPSAzMDtcbiAgICAgICAgICBpZiAocGFnZSA9PT0gbWF4UGFnZSkgcmV0dXJuO1xuICAgICAgICAgIHBhZ2UgKz0gMTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFtzcGxpdHRlZEhhc2hbMF0sIHNwbGl0dGVkSGFzaFsxXSwgcGFnZV0uam9pbignLycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1kaWZmaWN1bHQnKSkge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhZGRlZCcpO1xuICAgICAgICAgIHRhcmdldC5pbm5lclRleHQgPSAn0KHQu9C+0LbQvdC+0LUg0YHQu9C+0LLQvic7XG4gICAgICAgICAgKHRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IGJ0bkxlYXJuZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYnRuLWxlYXJuZWRbZGF0YS13b3JkPVwiJHt0YXJnZXQuZGF0YXNldC53b3JkfVwiXWApO1xuICAgICAgICAgIChidG5MZWFybmVkIGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIChidG5MZWFybmVkIGFzIEhUTUxCdXR0b25FbGVtZW50KS5pbm5lclRleHQgPSAn0JjQt9GD0YfQtdC90L4/JztcbiAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgYXBpLmdldFdvcmQodGFyZ2V0LmRhdGFzZXQud29yZCBhcyBzdHJpbmcpXG4gICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBXb3Jkcy5hZ2dyZWdhdGVkV29yZHMucHVzaChyZXMgYXMgSVdvcmQpO1xuICAgICAgICAgICAgICAgIFdvcmRzLmxlYXJuZWRXb3JkcyA9IFdvcmRzLmxlYXJuZWRXb3Jkcy5maWx0ZXIoKHdvcmQpID0+IHdvcmQuaWQgIT09IHRhcmdldC5kYXRhc2V0LndvcmQpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1sZWFybmVkJykpIHtcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWRkZWQnKTtcbiAgICAgICAgICB0YXJnZXQuaW5uZXJUZXh0ID0gJ9CY0LfRg9GH0LXQvdC+JztcbiAgICAgICAgICAodGFyZ2V0IGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgY29uc3QgYnRuRGlmZmljdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJ0bi1kaWZmaWN1bHRbZGF0YS13b3JkPVwiJHt0YXJnZXQuZGF0YXNldC53b3JkfVwiXWApO1xuICAgICAgICAgIChidG5EaWZmaWN1bHQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgKGJ0bkRpZmZpY3VsdCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuaW5uZXJUZXh0ID0gJ9Ch0LvQvtC20L3Qvj8nO1xuICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBhcGkuZ2V0V29yZCh0YXJnZXQuZGF0YXNldC53b3JkIGFzIHN0cmluZylcbiAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIFdvcmRzLmxlYXJuZWRXb3Jkcy5wdXNoKHJlcyBhcyBJV29yZCk7XG4gICAgICAgICAgICAgICAgV29yZHMuYWdncmVnYXRlZFdvcmRzID0gV29yZHMuYWdncmVnYXRlZFdvcmRzLmZpbHRlcigod29yZCkgPT4gd29yZC5pZCAhPT0gdGFyZ2V0LmRhdGFzZXQud29yZCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50Lm9uY2xpY2sgPSBjbGljaztcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1zaGFkb3cgKi9cblxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgeyBmb3JtTG9naW4sIGZvcm1SZWdpc3RyYXRpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsJztcbmltcG9ydCBzaG93VXNlciBmcm9tICcuL3Nob3ctdXNlcic7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuY2xhc3MgTGlzdGVuZXIge1xuICBvcGVuKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYXV0aG9yaXphdGlvbicpKSB7XG4gICAgICAgIGNvbnN0IGJ0bkNsb3NlTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNsb3NlJyk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuICAgICAgICBjb25zdCBtb2RhbFJlc3VsdFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtcmVzdWx0LXdyYXBwZXInKTtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgd3JhcHBlciEuaW5uZXJIVE1MID0gZm9ybUxvZ2luO1xuICAgICAgICBtb2RhbFJlc3VsdFdyYXBwZXIhLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBjb25zdCB1c2VyRW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWVtYWlsJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1wYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmICh1c2VyRW1haWxJbnB1dCAmJiB1c2VyUGFzc3dvcmRJbnB1dCkge1xuICAgICAgICAgIGNvbnN0IGF1dGhGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGgnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgICBpZiAoYXV0aEZvcm0pIHtcbiAgICAgICAgICAgIGF1dGhGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBlcnJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc2lnbmluLWVycm9yJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgIGVyckZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IHVzZXJFbWFpbElucHV0IS52YWx1ZTtcbiAgICAgICAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkID0gdXNlclBhc3N3b3JkSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGFwaS51c2VyU2lnbkluKHVzZXJFbWFpbCwgdXNlclBhc3N3b3JkKVxuICAgICAgICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc3RvcmFnZS51c2VyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICBzaG93VXNlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgZXJyRm9ybS5pbm5lckhUTUwgPSAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0L3QsNC50LTQtdC9LCDQv9GA0L7QstC10YDRjNGC0LUg0YHQstC+0Lgg0LTQsNC90L3Ri9C1INC40LvQuCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMJztcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnV0dG9uTmV3VXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tbmV3LXVzZXInKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgaWYgKGJ1dHRvbk5ld1VzZXIpIHtcbiAgICAgICAgICBidXR0b25OZXdVc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKF9lOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgd3JhcHBlciEuaW5uZXJIVE1MID0gZm9ybVJlZ2lzdHJhdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItZW1haWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1wYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCB1c2VyTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItbmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAodXNlck5hbWVJbnB1dCAmJiB1c2VyRW1haWxJbnB1dCAmJiB1c2VyUGFzc3dvcmRJbnB1dCkge1xuICAgICAgICAgICAgICBjb25zdCByZWdpc3RyYXRpb25Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICAgICAgICBpZiAocmVnaXN0cmF0aW9uRm9ybSkge1xuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBlcnJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcmVnLWVycm9yJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICBlcnJGb3JtLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlckVtYWlsID0gdXNlckVtYWlsSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkID0gdXNlclBhc3N3b3JkSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlck5hbWUgPSB1c2VyTmFtZUlucHV0IS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIGFwaS5jcmVhdGVOZXdVc2VyKHVzZXJOYW1lLCB1c2VyRW1haWwsIHVzZXJQYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGFwaS51c2VyU2lnbkluKHVzZXJFbWFpbCwgdXNlclBhc3N3b3JkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2UudXNlciA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dVc2VyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyRm9ybS5pbm5lckhUTUwgPSAn0JLQvtC30LzQvtC20L3QviDRjdGC0L7RgiBlLW1haWwg0YPQttC1INC30LDQvdGP0YIsINC/0L7Qv9GA0L7QsdGD0LnRgtC1INC00YDRg9Cz0L7QuSc7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgICAgbW9kYWxSZXN1bHRXcmFwcGVyIS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9O1xuICAgICAgICBvdmVybGF5IS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICAgICAgICBidG5DbG9zZU1vZGFsIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2V4aXRfYnRuJykpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgICAgICAgc3RvcmFnZS51c2VyID0ge1xuICAgICAgICAgIG1lc3NhZ2U6ICcnLCB0b2tlbjogJycsIHJlZnJlc2hUb2tlbjogJycsIHVzZXJJZDogJycsIG5hbWU6ICcnLFxuICAgICAgICB9O1xuICAgICAgICBzaG93VXNlcihmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgbGlzdGVuZXIgPSBuZXcgTGlzdGVuZXIoKTtcbmV4cG9ydCBkZWZhdWx0IGxpc3RlbmVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd1VzZXIocmV0OmJvb2xlYW4pIDpzdHJpbmcgfCB1bmRlZmluZWQge1xuICBsZXQgY2xhc3NOYW1lID0gJ2F1dGhvcml6YXRpb24nO1xuICBsZXQgY29udGV4dCA9ICfQktC+0LnRgtC4JztcbiAgaWYgKHN0b3JhZ2UudXNlcj8udG9rZW4gIT0gJycpIHtcbiAgICBjb250ZXh0ID0gJ9CS0YvQudGC0LgnO1xuICAgIGNsYXNzTmFtZSA9ICdleGl0X2J0bic7XG4gIH1cbiAgY29uc3QgaHRtbCA9IGA8ZGl2IGNsYXNzPVwidXNlci1zaG93XCI+ICR7c3RvcmFnZS51c2VyPy5uYW1lfSA8YnV0dG9uIGNsYXNzPSR7Y2xhc3NOYW1lfT4ke2NvbnRleHR9PC9idXR0b24+IDwvZGl2PmA7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYXV0aCcpIGFzIEhUTUxFbGVtZW50O1xuICBpZiAocmV0KSB7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbiAgaGVhZGVyLmlubmVySFRNTCA9IGh0bWw7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBvYmplY3QtY3VybHktbmV3bGluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbmltcG9ydCB7IElTZXR0aW5ncywgSVVzZXIsIElVc2VyRGF0YSwgSVVzZXJXb3JkcywgSVdvcmQgfSBmcm9tICd0eXBlcy90eXBlcyc7XG5cbmNsYXNzIFN0b3JhZ2Uge1xuICB1c2VyPzogSVVzZXJEYXRhO1xuXG4gIHdvcmQ/OiBJV29yZDtcblxuICB3b3Jkcz86IElXb3JkW107XG5cbiAgbGV2ZWw/OiBudW1iZXI7XG5cbiAgdXNlcldvcmQ/OiBJVXNlcldvcmRzO1xuXG4gIHNldHRpbmdzPzogSVNldHRpbmdzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XG4gICAgICB0aGlzLnVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgYXMgc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICBtZXNzYWdlOiAnJywgdG9rZW46ICcnLCByZWZyZXNoVG9rZW46ICcnLCB1c2VySWQ6ICcnLCBuYW1lOiAnJyxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd29yZCcpKSB7XG4gICAgICB0aGlzLndvcmQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3b3JkJykgYXMgc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53b3JkID0ge1xuICAgICAgICBpZDogJycsIGdyb3VwOiAwLCBwYWdlOiAwLCB3b3JkOiAnJywgaW1hZ2U6ICcnLCBhdWRpbzogJycsIGF1ZGlvTWVhbmluZzogJycsIGF1ZGlvRXhhbXBsZTogJycsIHRleHRNZWFuaW5nOiAnJywgdGV4dEV4YW1wbGU6ICcnLCB0cmFuc2NyaXB0aW9uOiAnJywgd29yZFRyYW5zbGF0ZTogJycsIHRleHRNZWFuaW5nVHJhbnNsYXRlOiAnJywgdGV4dEV4YW1wbGVUcmFuc2xhdGU6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3b3JkcycpKSB7XG4gICAgICB0aGlzLndvcmRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd29yZHMnKSBhcyBzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndvcmRzID0gW107XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1uYW1lZC1hcy1kZWZhdWx0LW1lbWJlciAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cblxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zYXNzJztcblxuaW1wb3J0IE1vZHVsZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyL2NvbnRyb2xsZXInO1xuaW1wb3J0IE1vZHVsZU1vZGVsIGZyb20gJy4vbW9kZWwvbW9kZWwnO1xuaW1wb3J0IE1vZHVsZVZpZXcgZnJvbSAnLi92aWV3L3ZpZXcnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzLCBSb3V0ZXMsIEluaXRpYWxPYmogfSBmcm9tICcuL3R5cGVzL3R5cGVzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmltcG9ydCBNYWluUGFnZSBmcm9tICcuL3BhZ2VzL21haW4nO1xuXG5pbXBvcnQgVGV4dGJvb2tQYWdlIGZyb20gJy4vcGFnZXMvdGV4dGJvb2snO1xuaW1wb3J0IEFib3V0VGVhbVBhZ2UgZnJvbSAnLi9wYWdlcy90ZWFtJztcbmltcG9ydCBTcHJpbnRHYW1lUGFnZSBmcm9tICcuL3BhZ2VzL3NwcmludC9pbmRleCc7XG5pbXBvcnQgQWJvdXRTcHJpbnRHYW1lUGFnZSBmcm9tICcuL3BhZ2VzL2Fib3V0c3ByaW50JztcbmltcG9ydCBBdWRpb2NhbGxHYW1lUGFnZSBmcm9tICcuL3BhZ2VzL2F1ZGlvY2FsbC9pbmRleCc7XG5pbXBvcnQgU3RhdGlzdGljc1BhZ2UgZnJvbSAnLi9wYWdlcy9zdGF0aXN0aWNzL2luZGV4JztcbmltcG9ydCB7IEF1ZGlvY2FsbEdhbWUgfSBmcm9tICcuL3BhZ2VzL2F1ZGlvY2FsbC9tYWluJztcblxuY29uc3QgY29tcG9uZW50czogQ29tcG9uZW50cyA9IHtcbiAgaGVhZGVyOiBIZWFkZXIsXG4gIGNvbnRlbnQ6IENvbnRlbnQsXG4gIGZvb3RlcjogRm9vdGVyLFxufTtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSB7XG4gIG1haW46IE1haW5QYWdlLFxuICBkZWZhdWx0OiBNYWluUGFnZSxcbiAgdGV4dGJvb2s6IFRleHRib29rUGFnZSxcbiAgdGVhbTogQWJvdXRUZWFtUGFnZSxcbiAgc3ByaW50OiBTcHJpbnRHYW1lUGFnZSxcbiAgYWJvdXRzcHJpbnQ6IEFib3V0U3ByaW50R2FtZVBhZ2UsXG4gIGF1ZGlvY2FsbDogQXVkaW9jYWxsR2FtZVBhZ2UsXG4gIGF1ZGlvY2FsbGdhbWU6IEF1ZGlvY2FsbEdhbWUsXG4gIHN0YXRpc3RpY3M6IFN0YXRpc3RpY3NQYWdlLFxufTtcblxuY29uc3QgaW5pdGlhbE9iajogSW5pdGlhbE9iaiA9IHtcbiAgY29udGFpbmVyOiAnc3BhJyxcbiAgcm91dGVzLFxuICBjb21wb25lbnRzLFxufTtcblxuLyogLS0tLS0gc3BhIGluaXQgbW9kdWxlIC0tLSAqL1xuY29uc3QgbXlTUEEgPSAoKCkgPT4ge1xuICBsZXQgdmlldzogTW9kdWxlVmlldztcbiAgbGV0IG1vZGVsOiBNb2R1bGVNb2RlbDtcbiAgbGV0IGNvbnRyb2xsZXI6IE1vZHVsZUNvbnRyb2xsZXI7XG4gIHJldHVybiB7XG4gICAgaW5pdChvYmo6IEluaXRpYWxPYmopIHtcbiAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50cyhvYmouY29udGFpbmVyLCBvYmouY29tcG9uZW50cyk7XG4gICAgICBjb25zdCBjb250YWluZXJTUEEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmouY29udGFpbmVyKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHZpZXcgPSBuZXcgTW9kdWxlVmlldygpO1xuICAgICAgbW9kZWwgPSBuZXcgTW9kdWxlTW9kZWwoKTtcbiAgICAgIGNvbnRyb2xsZXIgPSBuZXcgTW9kdWxlQ29udHJvbGxlcigpO1xuXG4gICAgICB2aWV3LmluaXQoY29udGFpbmVyU1BBLCByb3V0ZXMpO1xuICAgICAgbW9kZWwuaW5pdCh2aWV3KTtcbiAgICAgIGNvbnRyb2xsZXIuaW5pdChjb250YWluZXJTUEEsIG1vZGVsKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyQ29tcG9uZW50cyhjb250YWluZXI6IHN0cmluZywgY29tcG9uZW50c09iajogQ29tcG9uZW50cykge1xuICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCBjb21wb25lbnRzTGlzdCA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNPYmopO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29tcG9uZW50c0xpc3QpIHtcbiAgICAgICAgcm9vdC5pbm5lckhUTUwgKz0gY29tcG9uZW50c09ialtpdGVtIGFzIGtleW9mIENvbXBvbmVudHNdLnJlbmRlcigpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59KSgpO1xuXG4vKiAtLS0tLS0gZW5kIGFwcCBtb2R1bGUgLS0tLS0gKi9cblxuLyoqICogLS0tIGluaXQgbW9kdWxlIC0tLSAqKiAqL1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIG15U1BBLmluaXQoaW5pdGlhbE9iaik7XG59KTtcbiIsImltcG9ydCBNb2RlbFZpZXcgZnJvbSAnLi4vdmlldy92aWV3JztcbmltcG9ydCB7IE1lbnVJdGVtcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcblxuY2xhc3MgTW9kdWxlTW9kZWwge1xuICBteU1vZHVsZVZpZXchOiBNb2RlbFZpZXc7XG5cbiAgaW5pdCh2aWV3OiBNb2RlbFZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlVmlldyA9IHZpZXc7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShwYWdlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyQ29udGVudChwYWdlTmFtZSk7XG4gIH1cblxuICBoaWdobGlnaHRBY3RpdmVNZW51SXRlbShvYmo6IE1lbnVJdGVtcywgaGFzaE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LmhpZ2hsaWdodEFjdGl2ZU1lbnVJdGVtKG9iaiwgaGFzaE5hbWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZHVsZU1vZGVsO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5cbmltcG9ydCB7IE1vZHVsZVZpZXcgfSBmcm9tICcuLi92aWV3L3ZpZXdTcHJpbnQnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgeyBhcGlQYXRoIH0gZnJvbSAnLi4vYXBpL2FwaS1wYXRoJztcbmltcG9ydCB7IElXb3JkIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgcmFuZG9tSW50ZWdlciB9IGZyb20gJy4uL3V0aWxzL2Z1bmMnO1xuaW1wb3J0IHsgc3ByaW50U2V0dGluZ3MgfSBmcm9tICcuLi9wYWdlcy9zcHJpbnQvc3ByaW50U2V0dGluZ3MnO1xuXG5leHBvcnQgY2xhc3MgTW9kdWxlTW9kZWwge1xuICBteU1vZHVsZVZpZXchOiBNb2R1bGVWaWV3O1xuXG4gIGxldmVsOiBudW1iZXIgPSBzcHJpbnRTZXR0aW5ncy5zcHJpbnRMZXZlbDtcblxuICBwYWdlcyE6IG51bWJlcltdO1xuXG4gIGFjdGl2ZTIwV29yZHMgITogSVdvcmRbXTtcblxuICBhY3RpdmVXb3JkTnVtYmVyID0gMDtcblxuICBhY3RpdmVQYWdlTnVtYmVyID0gc3ByaW50U2V0dGluZ3Muc3ByaW50UGFnZTtcblxuICByYW5kb21UcmFuc2xhdGlvbk51bWJlciAhOiBudW1iZXI7XG5cbiAgYXVkaW9SaWdodCAhOiBIVE1MQXVkaW9FbGVtZW50O1xuXG4gIHRpbWVyITpudW1iZXI7XG5cbiAgdGltZXJJZCAhOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD47XG5cbiAgc2NvcmUgPSAwO1xuXG4gIHNjb3JlRm9yUmlnaHRBbnN3ZXIgPSAxMDtcblxuICBtYXhTY29yZUZvclJpZ2h0QW5zd2VyID0gODA7XG5cbiAgYW1vdW50T2ZSaWdodEFuc3dlcnNGb3JCaWdnZXJTY29yZSA9IDM7XG5cbiAgYXJyYXlPZlF1ZXN0aW9uOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGFycmF5T2ZBbnN3ZXJzOiBib29sZWFuW10gPSBbXTtcblxuICBhbW91bnRPZlJpZ2h0QW5zd2VycyA9IDA7XG5cbiAgcmlnaHRBbnN3ZXJBdWRpbyAhOiBIVE1MQXVkaW9FbGVtZW50O1xuXG4gIHdyb25nQW5zd2VyQXVkaW8hOiBIVE1MQXVkaW9FbGVtZW50O1xuXG4gIHRpbWVvdmVyQXVkaW8hOkhUTUxBdWRpb0VsZW1lbnQ7XG5cbiAgaW5pdCh2aWV3OiBNb2R1bGVWaWV3KTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlVmlldyA9IHZpZXc7XG4gICAgdGhpcy5maWxsQW5kU29ydFBhZ2VzKCk7XG4gICAgdGhpcy5nZXRXb3Jkc0Zyb21BcGkoKTtcbiAgfVxuXG4gIHNheVdvcmQoYXVkaW86SFRNTEF1ZGlvRWxlbWVudCk6dm9pZCB7XG4gICAgYXVkaW8uc3JjID0gYCR7YXBpUGF0aCArIHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLmFjdGl2ZVdvcmROdW1iZXJdLmF1ZGlvfWA7XG4gICAgYXVkaW8ucGxheSgpO1xuICB9XG5cbiAgZmlsbEFuZFNvcnRQYWdlcygpOnZvaWQge1xuICAgIHRoaXMucGFnZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgIHRoaXMucGFnZXMucHVzaChpKTtcbiAgICB9XG4gICAgaWYgKCFzcHJpbnRTZXR0aW5ncy5zcHJpbnRGcm9tVGV4dGJvb2spIHsgdGhpcy5wYWdlcy5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpOyB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wYWdlcyk7XG4gIH1cblxuICBhc3luYyBnZXRXb3Jkc0Zyb21BcGkoKTogUHJvbWlzZTxJV29yZFtdIHwgdm9pZD4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXRXb3Jkcyh0aGlzLmxldmVsLCB0aGlzLnBhZ2VzW3RoaXMuYWN0aXZlUGFnZU51bWJlcl0pIGFzIElXb3JkW107XG4gICAgdGhpcy5hY3RpdmUyMFdvcmRzID0gQXJyYXkuZnJvbShyZXMpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWN0aXZlMjBXb3Jkcyk7XG4gICAgaWYgKHRoaXMuYWN0aXZlUGFnZU51bWJlciA9PT0gMCB8fCBzcHJpbnRTZXR0aW5ncy5zcHJpbnRGcm9tVGV4dGJvb2spIHsgdGhpcy5wcmVwZWFyRmlyc3RXb3JkKCk7IH1cbiAgfVxuXG4gIHByZXBlYXJGaXJzdFdvcmQoKTp2b2lkIHtcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMuZ2VuZXJhdGVUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IHsgd29yZCB9ID0gdGhpcy5hY3RpdmUyMFdvcmRzW3RoaXMuYWN0aXZlV29yZE51bWJlcl07XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyV29yZCh3b3JkLCB0cmFuc2xhdGlvbik7XG4gIH1cblxuICBwcmVwZWFyTmV4dFdvcmQoKTp2b2lkIHtcbiAgICAoc3ByaW50U2V0dGluZ3Muc3ByaW50RnJvbVRleHRib29rKSA/IHRoaXMuY2hlY2tXb3Jkc051bWJlcnNGcm9tVGV4dGJvb2soKSA6IHRoaXMuY2hlY2tXb3Jkc051bWJlcnMoKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMuZ2VuZXJhdGVUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IHsgd29yZCB9ID0gdGhpcy5hY3RpdmUyMFdvcmRzW3RoaXMuYWN0aXZlV29yZE51bWJlcl07XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyV29yZCh3b3JkLCB0cmFuc2xhdGlvbik7XG4gICAgdGhpcy5hcnJheU9mUXVlc3Rpb24ucHVzaCh3b3JkKTtcbiAgfVxuXG4gIGNoZWNrV29yZHNOdW1iZXJzKCk6dm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlV29yZE51bWJlciA9PT0gMTkpIHtcbiAgICAgIHRoaXMuYWN0aXZlUGFnZU51bWJlciArPSAxO1xuICAgICAgdGhpcy5hY3RpdmVXb3JkTnVtYmVyID0gMDtcbiAgICAgIHRoaXMuZ2V0V29yZHNGcm9tQXBpKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlV29yZE51bWJlciArPSAxO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrV29yZHNOdW1iZXJzRnJvbVRleHRib29rKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZVdvcmROdW1iZXIgPT09IDE5KSB7XG4gICAgICB0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIgLT0gMTtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIgPT09IC0xKSB7XG4gICAgICAgIHRoaXMuc3RvcEdhbWUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5hY3RpdmVXb3JkTnVtYmVyID0gMDtcbiAgICAgIHRoaXMuZ2V0V29yZHNGcm9tQXBpKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlV29yZE51bWJlciArPSAxO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlVHJhbnNsYXRpb24oKTpzdHJpbmcge1xuICAgIGNvbnN0IG1pbiA9ICh0aGlzLmFjdGl2ZVdvcmROdW1iZXIgPj0gMikgPyB0aGlzLmFjdGl2ZVdvcmROdW1iZXIgLSAyIDogMDtcbiAgICBjb25zdCBtYXggPSAodGhpcy5hY3RpdmVXb3JkTnVtYmVyICsgMiA8PSAxOSkgPyB0aGlzLmFjdGl2ZVdvcmROdW1iZXIgKyAyIDogMTk7XG4gICAgdGhpcy5yYW5kb21UcmFuc2xhdGlvbk51bWJlciA9IHJhbmRvbUludGVnZXIobWluLCBtYXgpO1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5yYW5kb21UcmFuc2xhdGlvbk51bWJlcl0ud29yZFRyYW5zbGF0ZTtcbiAgfVxuXG4gIGNoZWNrQW5zd2VyKGFuc3dlcjpib29sZWFuKTp2b2lkIHtcbiAgICBjb25zdCB0cmFuc2xhdGU6c3RyaW5nID0gdGhpcy5hY3RpdmUyMFdvcmRzW3RoaXMuYWN0aXZlV29yZE51bWJlcl0ud29yZFRyYW5zbGF0ZTtcbiAgICBjb25zdCByaWdodFRyYW5zbGF0ZTpzdHJpbmcgPSB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5yYW5kb21UcmFuc2xhdGlvbk51bWJlcl0ud29yZFRyYW5zbGF0ZTtcbiAgICBpZiAoKHRyYW5zbGF0ZSA9PT0gcmlnaHRUcmFuc2xhdGUpID09PSBhbnN3ZXIpIHtcbiAgICAgIHRoaXMucmlnaHRBbnN3ZXJBdWRpby5wbGF5KCk7XG4gICAgICB0aGlzLmFycmF5T2ZBbnN3ZXJzLnB1c2godHJ1ZSk7XG4gICAgICB0aGlzLmFuYWx5emVUcnVlQW5zd2VyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud3JvbmdBbnN3ZXJBdWRpby5wbGF5KCk7XG4gICAgICB0aGlzLmFycmF5T2ZBbnN3ZXJzLnB1c2goZmFsc2UpO1xuICAgICAgdGhpcy5hbmFseXplRmFsc2VBbnN3ZXIoKTtcbiAgICB9XG4gIH1cblxuICBzZXRUaW1lciA9ICh0aW1lckVsZW06IEhUTUxFbGVtZW50KTp2b2lkID0+IHtcbiAgICB0aGlzLnRpbWVyID0gTnVtYmVyKHRpbWVyRWxlbS50ZXh0Q29udGVudCk7XG5cbiAgICBjb25zdCB0aWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy50aW1lciAtPSAxO1xuICAgICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyVGltZXIodGhpcy50aW1lciwgdGltZXJFbGVtKTtcbiAgICAgIGlmICh0aGlzLnRpbWVyID09PSAwKSB7XG4gICAgICAgIHRoaXMuc3RvcEdhbWUoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50aW1lciA9PT0gNSkge1xuICAgICAgICB0aGlzLnRpbWVvdmVyQXVkaW8ucGxheSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy50aW1lcklkID0gc2V0SW50ZXJ2YWwodGljaywgMTAwMCk7XG4gIH07XG5cbiAgY2xlYXJJbnRlcnZhbCA9ICgpOnZvaWQgPT4ge1xuICAgIGlmICh0aGlzLnRpbWVySWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcbiAgICB9XG4gIH07XG5cbiAgY291bnRTY29yZSgpOnZvaWQge1xuICAgIHRoaXMuc2NvcmUgKz0gdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyO1xuICAgIGlmICh0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgPT09IHRoaXMubWF4U2NvcmVGb3JSaWdodEFuc3dlcikge1xuICAgICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyU2NvcmUoU3RyaW5nKHRoaXMuc2NvcmUpLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyU2NvcmUoU3RyaW5nKHRoaXMuc2NvcmUpKTtcbiAgICB9XG4gIH1cblxuICBhbmFseXplRmFsc2VBbnN3ZXIoKTp2b2lkIHtcbiAgICB0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzID0gMDtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5jbGVhclNwcmludENvdW50KCk7XG4gICAgdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyID0gMTA7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyQ291bnRUZXh0KHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlcik7XG4gIH1cblxuICBhbmFseXplVHJ1ZUFuc3dlcigpOnZvaWQge1xuICAgIHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnMgKz0gMTtcbiAgICB0aGlzLmNvdW50U2NvcmUoKTtcbiAgICBpZiAodGhpcy5hbW91bnRPZlJpZ2h0QW5zd2VycyA9PT0gdGhpcy5hbW91bnRPZlJpZ2h0QW5zd2Vyc0ZvckJpZ2dlclNjb3JlICYmIHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciAhPT0gdGhpcy5tYXhTY29yZUZvclJpZ2h0QW5zd2VyKSB7XG4gICAgICB0aGlzLmdldEJpZ2dlclNjb3JlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzID09PSAodGhpcy5hbW91bnRPZlJpZ2h0QW5zd2Vyc0ZvckJpZ2dlclNjb3JlICsgMSkgJiYgdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyICE9PSB0aGlzLm1heFNjb3JlRm9yUmlnaHRBbnN3ZXIpIHtcbiAgICAgIHRoaXMubXlNb2R1bGVWaWV3LnJldHVyblRvT25lU3ByaW50Q291bnQoKTtcbiAgICAgIHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnMgPSAxO1xuICAgIH1cbiAgfVxuXG4gIGdldEJpZ2dlclNjb3JlKCk6dm9pZCB7XG4gICAgdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyID0gKHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciA9PT0gdGhpcy5tYXhTY29yZUZvclJpZ2h0QW5zd2VyKSA/IHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciA6IHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciAqPSAyO1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlckNvdW50VGV4dCh0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIpO1xuICB9XG5cbiAgc3RvcEdhbWUoKTp2b2lkIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XG4gICAgbGV0IHJpZ2h0QW5zd2VycyA9IDA7XG4gICAgbGV0IHdyb25nQW5zd2VycyA9IDA7XG4gICAgdGhpcy5hcnJheU9mQW5zd2Vycy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICByaWdodEFuc3dlcnMgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyb25nQW5zd2VycyArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlclJlc3VsdHModGhpcy5hcnJheU9mUXVlc3Rpb24sIHRoaXMuYXJyYXlPZkFuc3dlcnMsIHJpZ2h0QW5zd2Vycywgd3JvbmdBbnN3ZXJzLCB0aGlzLnNjb3JlKTtcbiAgfVxuXG4gIGdldEF1ZGlvKHJpZ2h0QW5zd2VyOkhUTUxBdWRpb0VsZW1lbnQsIHdyb25nQW5zd2VyOkhUTUxBdWRpb0VsZW1lbnQsIHRpbWVvdmVyOkhUTUxBdWRpb0VsZW1lbnQpOnZvaWQge1xuICAgIHRoaXMucmlnaHRBbnN3ZXJBdWRpbyA9IHJpZ2h0QW5zd2VyO1xuICAgIHRoaXMud3JvbmdBbnN3ZXJBdWRpbyA9IHdyb25nQW5zd2VyO1xuICAgIHRoaXMudGltZW92ZXJBdWRpbyA9IHRpbWVvdmVyO1xuICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IE1vZHVsZU1vZGVsO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7IEJ1dHRvbnMgfSBmcm9tICcuLi9jb21wb25lbnRzL3NtYWxsQ29tcG9uZW50cy9idXR0b25zJztcbmltcG9ydCB7IHNwcmludFNldHRpbmdzIH0gZnJvbSAnLi9zcHJpbnQvc3ByaW50U2V0dGluZ3MnO1xuXG5jb25zdCBBYm91dFNwcmludEdhbWVQYWdlID0ge1xuICBjbGFzc25hbWU6ICdhYm91dHNwcmludCcsXG4gIHJlbmRlckxldmVscygpOnN0cmluZyB7XG4gICAgcmV0dXJuIGA8cD7QktGL0LHQtdGA0Lgg0YPRgNC+0LLQtdC90Ywg0YHQu9C+0LbQvdC+0YHRgtC4PC9wPlxuICAgIDxzZWxlY3QgY2xhc3M9XCJzcHJpbnRfX2xldmVsXCI+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibGV2ZWwwXCI+0KPRgNC+0LLQtdC90YwgMTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImxldmVsMVwiPtCj0YDQvtCy0LXQvdGMIDI8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJsZXZlbDJcIj7Qo9GA0L7QstC10L3RjCAzPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibGV2ZWwzXCI+0KPRgNC+0LLQtdC90YwgNDwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImxldmVsNFwiPtCj0YDQvtCy0LXQvdGMIDU8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJsZXZlbDVcIj7Qo9GA0L7QstC10L3RjCA2PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+YDtcbiAgfSxcbiAgcmVuZGVySW5zdHJ1Y3Rpb25zKCk6c3RyaW5nIHtcbiAgICByZXR1cm4gYDxwIGNsYXNzPVwic3ByaW50X190ZXh0XCI+0JjQs9GA0LAg0KHQv9GA0LjQvdGCINC/0L7QvNC+0LbQtdGCINGC0LXQsdC1INC/0YDQvtCy0LXRgNC40YLRjCDQutCw0Log0YXQvtGA0L7RiNC+INGC0Ysg0LfQvdCw0LXRiNGMINGB0LvQvtCy0LAuPGJyPlxuICAgINCY0LPRgNCwINC00LvQuNGC0YHRjyAxINC80LjQvdGD0YLRgyDQuNC70Lgg0L/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQsNGC0YzRgdGPINGB0LvQvtCy0LAuPGJyPlxuICAgINCn0YLQvtCx0Ysg0LTQsNGC0Ywg0L7RgtCy0LXRgiwg0LrQu9C40LrQsNC5INC/0L4g0L3QtdC80YMg0LzRi9GI0LrQvtC5INC40LvQuCDQvdCw0LbQuNC80LDQuSDQutC70LDQstC40YjQuC3RgdGC0YDQtdC70LrQuC48L3A+YDtcbiAgfSxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAke0hlYWRlci5yZW5kZXIoKX1cbiAgICA8ZGl2IGNsYXNzID0gJyR7dGhpcy5jbGFzc25hbWV9LWNvbnRlaW5lcic+XG4gICAgICA8aDIgY2xhc3M9J3NwcmludF9fdGl0bGUnPtCh0L/RgNC40L3RgjwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwic3ByaW50X19ydWxlc1wiPlxuICAgICAgICAke3RoaXMucmVuZGVySW5zdHJ1Y3Rpb25zKCl9XG4gICAgICAgICR7KHNwcmludFNldHRpbmdzLnByZXZpb3VzSGFzaE5hbWVBcnJheSgpLmxlbmd0aCAhPT0gMykgPyB0aGlzLnJlbmRlckxldmVscygpIDogJyd9XG4gICAgICAgICR7QnV0dG9ucy5jcmVhdGUoJ9Cd0LDRh9Cw0YLRjCcsICdidXR0b25fX3N0YXJ0X19zcHJpbnQnLCBmYWxzZSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAke0Zvb3Rlci5yZW5kZXIoKX1gO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRTcHJpbnRHYW1lUGFnZTtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgeyBzdGFydFNjcmluQXVkaW9DYWxsIH0gZnJvbSAnLi9zdGFydC1hdWRpb2NhbGwnO1xuXG5jb25zdCBBdWRpb2NhbGxHYW1lUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAnYXVkaW9jYWxsJyxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgICAgPGRpdiBjbGFzcyA9ICdhdWRpby1jb250YWluZXIgJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz4gJHtzdGFydFNjcmluQXVkaW9DYWxsLnJlbmRlcigpfTwvZGl2PjtcbiAgICAgICR7Rm9vdGVyLnJlbmRlcigpfVxuICAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9jYWxsR2FtZVBhZ2U7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IHsgZ2FtZUFyZWEgfSBmcm9tICcuL3V0aWxzL2dhbWUtcmVuZGVyJztcblxuY29uc3QgQXVkaW9jYWxsR2FtZSA9IHtcbiAgLy8gaGFzaGVzOiB7XG5cbiAgLy8gICBtYWluOiAnI21haW4nLFxuXG4gIC8vIH0sXG5cbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAgICA8ZGl2IGNsYXNzID0gJ2NvbnRhaW5lcic+IFxuICAgICAgIDxhIGNsYXNzPVwiZ28tbWFpbiBcIiBocmVmPScjbWFpbicgPtCS0LXRgNC90YPRgtGM0YHRjyA8YnI+INC90LAg0LPQu9Cw0LLQvdGD0Y48L2E+IFxuICAgICAgICAgPGRpdiBjbGFzcyA9ICdnYW1lJz4gJHtnYW1lQXJlYX0gPC9kaXY+XG4gICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IHsgQXVkaW9jYWxsR2FtZSB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5leHBvcnQgY29uc3Qgc3RhcnRTY3JpbkF1ZGlvQ2FsbCA9IHtcbiAgaGFzaGVzOiB7XG5cbiAgICBhdWRpb2NhbGxHYW1lOiAnI2F1ZGlvY2FsbEdhbWUnLFxuXG4gIH0sXG5cbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RleHRib29rJykgPT09ICd0cnVlJykge1xuICAgICAgaHRtbCA9IC8qIGh0bWwgKi9gIFxuXG4gICAgICA8ZGl2IGNsYXNzPVwiYXVkaW8tY2FsbFwiPiBcbiAgICAgICAgPHAgY2xhc3M9XCJhdWRpby1jYWxsX190ZXh0XCI+0JIg0LjQs9GA0LUg0LDRg9C00LjQvtCy0YvQt9C+0LIg0LLQsNC80L3Rg9C20L3QviDQstGL0LHRgNCw0YLRjCDQv9GA0LDQstC40LvRjNC90YvQuSDQv9C10YDQtdCy0L7QtCDRgdC70L7QstCwLiA8YnI+XG4gICAgICBcbiAgICAgICAg0KfRgtC+0LHRiyDQuNCz0YDQsNGC0Ywg0YEg0L/QvtC80L7RidGM0Y4g0LrQu9Cw0LLQuNCw0YLRg9GA0YssINC40YHQv9C+0LvRjNC30YPQuSDQutC70LDQstC40YjQuFxuICAgICAgICAxLCAyLCAzLCA0LCA1ICDRh9GC0L7QsdGLINC00LDRgtGMINC+0YLQstC10YIsXG4gICAgICAgIHNwYWNlIC0g0LTQu9GPINCy0L7RgdC/0YDQvtC40LfQstC10LTQtdC90LjRjyDQt9Cy0YPQutCwLlxuICAgICAgICA8L3A+XG4gICAgICAgPGEgaWQ9XCJsZXZlbHRleHRib29rXCIgY2xhc3M9XCJidG4tbGV2ZWwgbGlua1wiIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbEdhbWV9XCIgPtCY0LPRgNCw0YLRjDwvYT5cbiAgID5cbiAgICAgIGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGh0bWwgPSAvKiBodG1sICovYCBcblxuPGRpdiBjbGFzcz1cImF1ZGlvLWNhbGxcIj4gXG4gIDxwIGNsYXNzPVwiYXVkaW8tY2FsbF9fdGV4dFwiPtCSINC40LPRgNC1INCw0YPQtNC40L7QstGL0LfQvtCyINCy0LDQvNC90YPQttC90L4g0LLRi9Cx0YDQsNGC0Ywg0L/RgNCw0LLQuNC70YzQvdGL0Lkg0L/QtdGA0LXQstC+0LQg0YHQu9C+0LLQsC4gPGJyPlxuXG4gINCn0YLQvtCx0Ysg0LjQs9GA0LDRgtGMINGBINC/0L7QvNC+0YnRjNGOINC60LvQsNCy0LjQsNGC0YPRgNGLLCDQuNGB0L/QvtC70YzQt9GD0Lkg0LrQu9Cw0LLQuNGI0LhcbiAgMSwgMiwgMywgNCwgNSAg0YfRgtC+0LHRiyDQtNCw0YLRjCDQvtGC0LLQtdGCLFxuICBzcGFjZSAtINC00LvRjyDQstC+0YHQv9GA0L7QuNC30LLQtdC00LXQvdC40Y8g0LfQstGD0LrQsC5cbiAgPGJyPiA8YnI+XG4gINCS0YvQsdC10YDQuCDRg9GA0L7QstC10L3RjCDRgdC70L7QttC90L7RgdGC0Lg6PC9wPlxuIDxhIGlkPVwibGV2ZWwxXCIgY2xhc3M9XCJidG4tbGV2ZWwgbGlua1wiIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbEdhbWV9XCIgPtCj0YDQvtCy0LXQvdGMIDE8L2E+XG4gXG4gPGEgaWQ9XCJsZXZlbDJcIiBjbGFzcz1cImJ0bi1sZXZlbCBsaW5rXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgMjwvYT5cblxuIDxhIGlkPVwibGV2ZWwzXCIgY2xhc3M9XCJidG4tbGV2ZWwgbGlua1wiIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbEdhbWV9XCIgPtCj0YDQvtCy0LXQvdGMIDM8L2E+XG5cbiA8YSBpZD1cImxldmVsNFwiIGNsYXNzPVwiYnRuLWxldmVsIGxpbmtcIiBocmVmPVwiJHt0aGlzLmhhc2hlcy5hdWRpb2NhbGxHYW1lfVwiID7Qo9GA0L7QstC10L3RjCA0PC9hPlxuXG4gPGEgaWQ9XCJsZXZlbDVcIiBjbGFzcz1cImJ0bi1sZXZlbCBsaW5rXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgNTwvYT5cblxuIDxhIGlkPVwibGV2ZWw2XCIgY2xhc3M9XCJidG4tbGV2ZWwgbGlua1wiIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbEdhbWV9XCIgPtCj0YDQvtCy0LXQvdGMIDY8L2E+XG5gO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuXG5pbXBvcnQgeyBhcGlQYXRoIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS1wYXRoJztcbmltcG9ydCB7IHByaW50QnRuU3RyaW5nLCB3b3JkT2JqIH0gZnJvbSAnLi9zdXBwb3J0aW5nLWZ1bmMnO1xuXG5leHBvcnQgY29uc3QgZ2FtZUFyZWEgPSBgIFxuIDxkaXYgY2xhc3M9XCJhdWRpby1jb250YWluZXItZ2FtZVwiPiBcbiAgICA8ZGl2IGNsYXNzPVwiYnRuLXNvdW5kXCI+PGRpdiBjbGFzcz1cInNvdW5kLXdyYXBwZXJcIj4gXG4gICAgPGF1ZGlvIGNsYXNzPVwiYXVkaW9cIiBzcmM9XCIke2FwaVBhdGggKyB3b3JkT2JqLmF1ZGlvfVwiIGF1dG9wbGF5PjwvYXVkaW8+IDwvZGl2PjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyaWdodC1hbnN3ZXJcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPiAke3ByaW50QnRuU3RyaW5nKCl9PC9kaXY+XG4gIDwvZGl2PlxuIGA7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cblxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuXG5pbXBvcnQgeyBhcGlQYXRoIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS1wYXRoJztcbmltcG9ydCB7XG4gIGNsZWFyTG9jYWxTdG9yYWdlLCBzb3VuZEF1ZGlvLCB3b3JkT2JqLCBzdG9yYWdlQXVkaW9jYWxsLFxufSBmcm9tICcuL3N1cHBvcnRpbmctZnVuYyc7XG5pbXBvcnQgYXVkaW9QYXRoV3JvbmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2F1ZGlvL3dyb25nLWFuc3dlci5tcDMnO1xuaW1wb3J0IGF1ZGlvUGF0aFJpZ2h0IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9hdWRpby9yaWdodC1hbnN3ZXIubXAzJztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi9mdW5jdGlvbmFsL3N0b3JhZ2UnO1xuXG5jb25zb2xlLmxvZyhzdG9yYWdlQXVkaW9jYWxsLndvcmRzLCAnc3N0b3JhZ2VBdWRpb2NhbGwud29yZHMg0LIg0LvQuNGB0YLQvdC10YDQtScpO1xuXG5jbGFzcyBMaXN0ZW5lckF1ZGlvQ2FsbCB7XG4gIGtleWJvYXJkKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnICcpIHtcbiAgICAgICAgc291bmRBdWRpbygoYXBpUGF0aCArIHdvcmRPYmouYXVkaW8pKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGFOID0gTnVtYmVyKGUua2V5KTtcbiAgICAgIGlmIChlLmtleSA9PT0gYE51bXBhZCAke2RhdGFOfWAgfHwgZS5rZXkgPT09IGAke2RhdGFOfWApIHtcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5idG4tdHJhbnNsYXRpb25bZGF0YS1udW09XCIke2RhdGFOfVwiXWApKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgKGVsZW0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xpaygpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1zb3VuZCcpKSB7XG4gICAgICAgIHNvdW5kQXVkaW8oKGFwaVBhdGggKyB3b3JkT2JqLmF1ZGlvKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXRyYW5zbGF0aW9uJykpIHtcbiAgICAgICAgaWYgKHN0b3JhZ2VBdWRpb2NhbGwucm91bmQhKSB7IHN0b3JhZ2VBdWRpb2NhbGwucm91bmQgPSAxOyB9IGVsc2Uge1xuICAgICAgICAgIHN0b3JhZ2VBdWRpb2NhbGwucm91bmQgPSBzdG9yYWdlQXVkaW9jYWxsLnJvdW5kISArIDE7XG4gICAgICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQgPT09IHdvcmRPYmoud29yZFRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgcmlnaHRBbnN3ZXJGdW5jKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3JvbmdBbnN3ZXJGdW5jKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ3Jlc3RhcnQnKSkge1xuICAgICAgICBjbGVhckxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9XG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2xldmVsLXRleHRib29rJykpIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb25IYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKTtcbiAgICAgICAgY29uc3QgdW5pdCA9ICtsb2NhdGlvbkhhc2hbMV07XG4gICAgICAgIGNvbnN0IHBhZ2UgPSArbG9jYXRpb25IYXNoWzJdO1xuICAgICAgICBzdG9yYWdlQXVkaW9jYWxsLmxldmVsID0gdW5pdCArIDE7XG4gICAgICAgIHN0b3JhZ2VBdWRpb2NhbGwucGFnZSA9IHBhZ2U7XG4gICAgICAgIHN0b3JhZ2VBdWRpb2NhbGwudGV4dGJvb2sgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZygn0LvQuNGB0YLQvdC10YAnLCBzdG9yYWdlQXVkaW9jYWxsLmxldmVsLCAnc3RvcmFnZUF1ZGlvY2FsbC5sZXZlbCAnKTtcbiAgICAgIH1cbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnbGV2ZWwtY2hhbmdlJykpIHtcbiAgICAgICAgY2xlYXJMb2NhbFN0b3JhZ2UoKTtcbiAgICAgIH1cbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLWxldmVsJykpIHtcbiAgICAgICAgY29uc3QgZGF0YU4gPSBOdW1iZXIoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZC5yZXBsYWNlKC9bXjAtOV0vZywgJycpKTtcbiAgICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQgPT09IChgbGV2ZWwke2RhdGFOfWApKSB7XG4gICAgICAgICAgY2xlYXJMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICBzdG9yYWdlQXVkaW9jYWxsLmxldmVsID0gZGF0YU47XG4gICAgICAgICAgc3RvcmFnZUF1ZGlvY2FsbC5sZXZlbCA9IGRhdGFOO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmlnaHRBbnN3ZXJGdW5jKGVsOiBIVE1MRWxlbWVudCkge1xuICBzdG9yYWdlQXVkaW9jYWxsLnNjb3JlISArPSAxO1xuICBzb3VuZEF1ZGlvKChhdWRpb1BhdGhSaWdodCkpO1xuICBlbC5jbGFzc0xpc3QuYWRkKCdidG4tdHJhbnNsYXRpb24tcmlnaHQnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9LFxuICAxMjAwKTtcbn1cblxuZnVuY3Rpb24gd3JvbmdBbnN3ZXJGdW5jKGVsOiBIVE1MRWxlbWVudCkge1xuICBlbC5jbGFzc0xpc3QuYWRkKCdidG4tdHJhbnNsYXRpb24td3JvbmcnKTtcbiAgY29uc3QgcmlnaHRBbnN3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtYW5zd2VyJykgYXMgSFRNTEVsZW1lbnQ7XG4gIGlmIChyaWdodEFuc3dlcikge1xuICAgIHJpZ2h0QW5zd2VyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiYW5zd2VyXCI+PGltZyBjbGFzcz1cImFuc3dlci1pbWdcIiBzcmM9XCIke2FwaVBhdGggKyB3b3JkT2JqLmltYWdlfVwiIGFsdD1cItC/0YDQsNCy0LjQu9GM0L3Ri9C5INC+0YLQstC10YJcIj48YnI+JHt3b3JkT2JqLndvcmR9IOKAlCAke3dvcmRPYmoud29yZFRyYW5zbGF0ZX0gPC9kaXY+YDtcbiAgICBzdG9yYWdlQXVkaW9jYWxsLmFycmF5V3JvbmdXb3JkcyEucHVzaCh3b3JkT2JqLndvcmQpO1xuICAgIHNvdW5kQXVkaW8oKGF1ZGlvUGF0aFdyb25nKSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSxcbiAgICAyMjAwKTtcbiAgfVxufVxuXG5jb25zdCBsaXN0ZW5lckF1ZGlvQ2FsbCA9IG5ldyBMaXN0ZW5lckF1ZGlvQ2FsbCgpO1xuZXhwb3J0IGRlZmF1bHQgbGlzdGVuZXJBdWRpb0NhbGw7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXNoYWRvdyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uICovXG5cbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi9mdW5jdGlvbmFsL3N0b3JhZ2UnO1xuaW1wb3J0IHsgSVN0b3JhZ2VBdWRpb2NhbGwsIElXb3JkIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgYXBpUGF0aCB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGktcGF0aCc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpJztcblxuLy8g0LLRi9Cx0L7RgCDRg9GA0L7QstC90Y8g0LTQu9GPINC40LPRgNGLINC4INGB0YLRgNCw0L3QuNGG0Ytcbi8vIChhc3luYyBmdW5jdGlvbiBzdXBwb3J0KCkge1xubGV0IHN0b3JhZ2VBdWRpb2NhbGw6SVN0b3JhZ2VBdWRpb2NhbGwgPSB7XG4gIGFycmF5V3JvbmdXb3JkczogW10sXG4gIHJvdW5kOiAwLFxuICBzY29yZTogMCxcbiAgYXJyYXlMZXZlbDogW10sXG4gIGdyb3VwOiAwLFxuICBwYWdlOiAwLFxuICBsZXZlbDogMSxcbiAgd29yZHM6IFtdLFxuICBub1JlcGVhdDogW10sXG5cbn07XG5cbmZ1bmN0aW9uIGxldmVsR2FtZSgpOiB2b2lkIHtcbiAgc3RvcmFnZUF1ZGlvY2FsbC5ncm91cCA9IHN0b3JhZ2VBdWRpb2NhbGwubGV2ZWwhIC0gMTtcbiAgaWYgKChzdG9yYWdlQXVkaW9jYWxsLnBhZ2UgPT09IDApKSB7XG4gICAgc3RvcmFnZUF1ZGlvY2FsbC5wYWdlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDIwIC0gMCArIDEpKSArIDA7XG4gIH1cbiAgc3RvcmFnZUF1ZGlvY2FsbC5hcnJheUxldmVsID0gW3N0b3JhZ2VBdWRpb2NhbGwuZ3JvdXAsIHN0b3JhZ2VBdWRpb2NhbGwucGFnZSFdO1xufVxubGV2ZWxHYW1lKCk7XG5jb25zb2xlLmxvZyhzdG9yYWdlQXVkaW9jYWxsLmdyb3VwLCBzdG9yYWdlQXVkaW9jYWxsLnBhZ2UsICdncm91cCwgcGFnZScpO1xuXG4vLyDQutC+0L3RgdGC0LDQvdCwINC60L7RgtC+0YDQsNGPINC/0L7Qu9GD0YfQsNC10YIg0YEg0YHQtdGA0LLQtdGA0LAg0LzQsNGB0YHQuNCyINGB0LvQvtCyXG5jb25zdCBhcGlHZXRXb3JkcyA9IChhcGkuZ2V0V29yZHMoc3RvcmFnZUF1ZGlvY2FsbC5ncm91cCEsIHN0b3JhZ2VBdWRpb2NhbGwucGFnZSEpKSBhcyB1bmtub3duIGFzIElXb3JkW107XG5jb25zb2xlLmxvZyhhcGlHZXRXb3Jkc1sxXSwgJ2FwaUdldFdvcmRzJyk7XG4vLyAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuLy8gICAgIC8vIHN0b3JhZ2VBdWRpb2NhbGwud29yZHMgPSB2YWx1ZTtcbi8vICAgICAvLyBzdG9yYWdlLndvcmRzID0gdmFsdWU7XG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dvcmRzJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbi8vICAgfSkuY2F0Y2goKGVycikgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGVycik7XG4vLyAgIH0pXG4vLyApO1xuXG4vLyDQv9C+0LvRg9GH0LDQtdC8INC80LDRgdGB0LjQsiDQv9GA0LXQstC+0LTQvtCyXG4vLyBmdW5jdGlvbiBnZXRXb3Jkc01hcCgpOiBzdHJpbmdbXSB7XG4vLyAgIGNvbnN0IHdvcmRzID0gc3RvcmFnZS53b3JkcyEubWFwKChpdGVtKSA9PiBpdGVtLndvcmRUcmFuc2xhdGUpO1xuLy8gICBjb25zb2xlLmxvZyh3b3JkcywgJ3dvcmRzINGE0YPQvdC60YbQuNC4INCz0LXRgiDQvNCw0L8nKTtcbi8vICAgcmV0dXJuIHdvcmRzO1xuLy8gfVxuXG5jb25zb2xlLmxvZyhzdG9yYWdlQXVkaW9jYWxsLCAnc3RvcmFnZUF1ZGlvY2FsbCcpO1xuY29uc29sZS5sb2coc3RvcmFnZUF1ZGlvY2FsbC53b3JkcywgJ3N0b3JhZ2VBdWRpb2NhbGwud29yZHMgJyk7XG5sZXQgd29yZHNTdHJpbmc6IHN0cmluZ1tdID0gW107XG5cbi8vINGE0LjQu9GM0YLRgNGD0LXQvCDQuNC30LHQsNCy0LvRj9GP0YHRjCDQvtGCINC00YPQsdC70LXQuVxuXG4vLyBpZiAoc3RvcmFnZUF1ZGlvY2FsbC5ub1JlcGVhdCEubGVuZ3RoID4gMCkge1xuLy8gICB3b3Jkc1N0cmluZyA9IHdvcmRzU3RyaW5nLmZpbHRlcigoaXRlbSkgPT4gIXN0b3JhZ2VBdWRpb2NhbGwubm9SZXBlYXQhLmluY2x1ZGVzKGl0ZW0pKTtcbi8vIH1cblxuLy8g0L/QtdGA0LXQvNC10YjQuNCy0LDQtdC8INC80LDRgdGB0LjQsiDQv9GA0LXQstC+0LTQvtCyXG4vLyBmdW5jdGlvbiBzaHVmZmxlKGFycmF5OnN0cmluZ1tdKSB7XG4vLyAgIGFycmF5LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG4vLyB9XG4vLyBzaHVmZmxlKHdvcmRzU3RyaW5nKTtcblxuLy8g0YHQvtC30LTQsNC10Lwg0LzQsNGB0YHQuCDQsiDQutC+0YLRgNC+0Lwg0LHRg9C00LXRgiDRgtC+0YzQutC+IDUg0YHQu9C+0LIg0LTQu9GPINC40LPRgNGLXG5sZXQgYXJyYXlTaXhXb3JkczpzdHJpbmcgW10gPSBbXTtcbi8vIGFycmF5U2l4V29yZHMgPSB3b3Jkc1N0cmluZy5zbGljZSgwLCA1KTtcblxuLy8g0LLRi9Cx0LjRgNCw0LXQvCDRgdC70YPRh9Cw0LnQvdC+0LUg0YHQu9C+0LLQviDQuNC3IDYsINC60L7RgtC+0YDQvtC1INCx0YPQtNC10Lwg0YPQs9Cw0LTRi9Cy0LDRgtGMXG4vLyBjb25zdCB3b3JkUmlnaHQgPSBhcnJheVNpeFdvcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5U2l4V29yZHMubGVuZ3RoKV07XG5cbi8vINC/0L7Qu9GD0YfQsNC10Lwg0LTQtdC70LDQtdC8INC+0LHRitC10LrRgiDQsiDQutC+0YLQvtGA0YvQuSDRgdC+0YXRgNCw0L3QuNC8INCy0YvQsdGA0LDQvdC90L7QtSDRgdC70L7QstC+INGB0L4g0LLRgdC10LzQuCDQtNCw0L3QvdGL0LzQuFxubGV0IHdvcmRPYmogOiBJV29yZCA9IHtcbiAgaWQ6ICcnLCBncm91cDogMCwgcGFnZTogMCwgd29yZDogJycsIGltYWdlOiAnJywgYXVkaW86ICcnLCBhdWRpb01lYW5pbmc6ICcnLCBhdWRpb0V4YW1wbGU6ICcnLCB0ZXh0TWVhbmluZzogJycsIHRleHRFeGFtcGxlOiAnJywgdHJhbnNjcmlwdGlvbjogJycsIHdvcmRUcmFuc2xhdGU6ICcnLCB0ZXh0TWVhbmluZ1RyYW5zbGF0ZTogJycsIHRleHRFeGFtcGxlVHJhbnNsYXRlOiAnJyxcbn07XG5cbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmFnZUF1ZGlvY2FsbC53b3JkcyEubGVuZ3RoOyBpKyspIHtcbi8vICAgaWYgKHN0b3JhZ2VBdWRpb2NhbGwud29yZHMhW2ldLndvcmRUcmFuc2xhdGUgPT09IHdvcmRSaWdodCkge1xuLy8gICAgIHdvcmRPYmogPSBzdG9yYWdlQXVkaW9jYWxsLndvcmRzIVtpXTtcbi8vICAgfVxuLy8gfVxuXG4vLyDQuNC30LHQsNCy0LvRj9C10LzRgdGPINC+0YIg0LTRg9Cx0LvQtdC5INCyINC80LDRgdGB0LjQstC1INC/0YDQtdCy0L7QtNC+0LIg0L/RgNC+0L7Qu9C20LXQvdC40LVcblxuLy8gc3RvcmFnZUF1ZGlvY2FsbC5ub1JlcGVhdCEucHVzaCh3b3JkT2JqLndvcmRUcmFuc2xhdGUpO1xuLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub1JlcGVhdCcpKSB7XG4vLyAgIG5vUmVwZWF0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm9SZXBlYXQnKSEpO1xuLy8gICBub1JlcGVhdC5wdXNoKHdvcmRPYmoud29yZFRyYW5zbGF0ZSk7XG4vLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub1JlcGVhdCcsIEpTT04uc3RyaW5naWZ5KG5vUmVwZWF0KSk7XG4vLyB9XG5cbi8vINGE0YPQvdC60YbQuNGPINC/0YDQvtC40LPRgNGL0LLQsNC90LjRjyDQsNGD0LTQuNC+INGBINC/0YPRgtC10Lwg0LjQtyDQvdCw0YjQtdCz0L4g0L7QsdC10LrRgtCwLdGB0LvQvtCy0L5cbmZ1bmN0aW9uIHNvdW5kQXVkaW8ocGF0aDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGF1ZGlvRCA9IG5ldyBBdWRpbygpO1xuICBhdWRpb0Quc3JjID0gYCR7cGF0aH1gO1xuICBhdWRpb0QuYXV0b3BsYXkgPSB0cnVlO1xufVxuXG4vLyDRgNC40YHRg9C10Lwg0LrQvdC+0L/QutC4INGBINC/0LXRgNC10LLQvtC00LDQvNC4XG5hc3luYyBmdW5jdGlvbiBwcmludEJ0blN0cmluZygpOiBQcm9taXNlIDxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcbiAgc3RvcmFnZUF1ZGlvY2FsbC53b3JkcyA9IGF3YWl0IGFwaS5nZXRXb3JkcyhzdG9yYWdlQXVkaW9jYWxsLmdyb3VwISwgc3RvcmFnZUF1ZGlvY2FsbC5wYWdlISk7XG5cbiAgd29yZHNTdHJpbmcgPSBzdG9yYWdlQXVkaW9jYWxsLndvcmRzIS5tYXAoKGl0ZW0pID0+IGl0ZW0ud29yZFRyYW5zbGF0ZSk7XG5cbiAgaWYgKHN0b3JhZ2VBdWRpb2NhbGwubm9SZXBlYXQhLmxlbmd0aCA+IDApIHtcbiAgICB3b3Jkc1N0cmluZyA9IHdvcmRzU3RyaW5nLmZpbHRlcigoaXRlbSkgPT4gIXN0b3JhZ2VBdWRpb2NhbGwubm9SZXBlYXQhLmluY2x1ZGVzKGl0ZW0pKTtcbiAgfVxuXG4gIC8vINC/0LXRgNC10LzQtdGI0LjQstCw0LXQvCDQvNCw0YHRgdC40LIg0L/RgNC10LLQvtC00L7QslxuICBmdW5jdGlvbiBzaHVmZmxlKGFycmF5OnN0cmluZ1tdKSB7XG4gICAgYXJyYXkuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcbiAgfVxuICBzaHVmZmxlKHdvcmRzU3RyaW5nKTtcblxuICBhcnJheVNpeFdvcmRzID0gd29yZHNTdHJpbmcuc2xpY2UoMCwgNSk7XG5cbiAgLy8g0LLRi9Cx0LjRgNCw0LXQvCDRgdC70YPRh9Cw0LnQvdC+0LUg0YHQu9C+0LLQviDQuNC3IDYsINC60L7RgtC+0YDQvtC1INCx0YPQtNC10Lwg0YPQs9Cw0LTRi9Cy0LDRgtGMXG4gIGNvbnN0IHdvcmRSaWdodCA9IGFycmF5U2l4V29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXlTaXhXb3Jkcy5sZW5ndGgpXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JhZ2VBdWRpb2NhbGwud29yZHMhLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0b3JhZ2VBdWRpb2NhbGwud29yZHMhW2ldLndvcmRUcmFuc2xhdGUgPT09IHdvcmRSaWdodCkge1xuICAgICAgd29yZE9iaiA9IHN0b3JhZ2VBdWRpb2NhbGwud29yZHMhW2ldO1xuICAgIH1cbiAgfVxuXG4gIHN0b3JhZ2VBdWRpb2NhbGwubm9SZXBlYXQhLnB1c2god29yZE9iai53b3JkVHJhbnNsYXRlKTtcbiAgY29uc29sZS5sb2coc3RvcmFnZUF1ZGlvY2FsbC53b3JkcywgJ3NzdG9yYWdlQXVkaW9jYWxsLndvcmRzINCyINC/0YDQuNC90YLQsdGC0L0nKTtcblxuICAvLyDQutGD0YHQvtC6INC60L7RgtC+0YDRi9C5INC90LUg0YLRgNC+0LPQsNC70LhcbiAgbGV0IGEgPSAnJztcbiAgbGV0IGNvbnRhaW5lckJ0biA9ICcgJztcbiAgaWYgKHN0b3JhZ2VBdWRpb2NhbGwucm91bmQhIDwgMTApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5U2l4V29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGEgPSBhcnJheVNpeFdvcmRzW2ldO1xuICAgICAgY29udGFpbmVyQnRuICs9IGA8YnV0dG9uIGRhdGEtbnVtPVwiJHtpICsgMX1cIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCIke2F9XCIgY2xhc3M9XCJidG4tdHJhbnNsYXRpb25cIj4ke2F9PC9idXR0b24+IGA7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHdvcmRPYmouYXVkaW8gPSAnJztcbiAgICBsZXQgYSA9ICcnO1xuICAgIGlmIChzdG9yYWdlQXVkaW9jYWxsLmFycmF5V3JvbmdXb3JkcyEubGVuZ3RoID4gMCkge1xuICAgICAgYSA9IGAgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QoNC10LrQvtC80LXQvdC00YPQtdC8INCy0YvRg9GH0LjRgtGMOiZuYnNwJHtzdG9yYWdlQXVkaW9jYWxsLmFycmF5V3JvbmdXb3JkcyEuam9pbignLFxcbicpfTwvcD4gYDtcbiAgICB9IGVsc2Uge1xuICAgICAgYSA9ICcgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QktGLINC90LjRgNCw0LfRgyDQvdC1INC+0YjQuNCx0LvQuNGB0YwhPC9wPiAnO1xuICAgIH1cbiAgICBjb250YWluZXJCdG4gKz0gYFxuICA8ZGl2IGNsYXNzPVwiZ2FtZS1vdmVyXCI+XG4gICAgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QktGLINC/0YDQvtGI0LvQuCDQuNCz0YDRgyE8L3A+XG4gICAgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QktCw0Ygg0YDQtdC30YPQu9GM0YLQsNGCOiAmbmJzcCAke3N0b3JhZ2VBdWRpb2NhbGwuc2NvcmV9PC9wPlxuICAgICR7YX1cbiAgICA8ZGl2IGNsYXNzPVwiYnRuLWdhbWUtb3Zlci1jb250YWluZXJcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicmVzdGFydFwiPtCd0LDRh9Cw0YLRjCDQt9Cw0L3QvtCy0L48L2J1dHRvbj5cbiAgICAgIDxhICBjbGFzcz1cImxpbmsgbGV2ZWwtY2hhbmdlXCIgaHJlZj1cIiNhdWRpb2NhbGxcIiA+0JLRi9Cx0YDQsNGC0Ywg0YPRgNC+0LLQtdC90Yw8L2E+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBcbiAgYDtcbiAgICBjbGVhckxvY2FsU3RvcmFnZSgpO1xuICB9XG4gIHJldHVybiBjb250YWluZXJCdG4gYXMgc3RyaW5nO1xufVxuZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoKTogdm9pZCB7XG4gIHN0b3JhZ2VBdWRpb2NhbGwgPSB7fTtcbn1cbi8vIH0oKSk7XG5leHBvcnQge1xuXG4gIHNvdW5kQXVkaW8sXG4gIHByaW50QnRuU3RyaW5nLCB3b3JkT2JqLFxuICBjbGVhckxvY2FsU3RvcmFnZSxcbiAgc3RvcmFnZUF1ZGlvY2FsbCxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5pbXBvcnQgcGhvbmUgZnJvbSAnLi4vYXNzZXRzL3Bob25lLnN2Zyc7XG5pbXBvcnQgZGljdGlvbmFyeSBmcm9tICcuLi9hc3NldHMvZGljdGlvbmFyeS5zdmcnO1xuaW1wb3J0IHBsYXkgZnJvbSAnLi4vYXNzZXRzL3BsYXkuc3ZnJztcbmltcG9ydCBhY3Nlc3MgZnJvbSAnLi4vYXNzZXRzL2Fjc2Vzcy5zdmcnO1xuXG5jb25zdCBNYWluUGFnZSA9IHtcbiAgaWQ6ICdtYWluJyxcbiAgcmVuZGVyOiAoKTpzdHJpbmcgPT4gYFxuICAgICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19wYWdlXCI+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fcGFnZV9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj5UaGUgV29ybGQgaXMgWW91cnMgd2l0aCBSU0xhbmchPC9oMj5cbiAgICAgICAgICAgPHA+UlNMYW5nIOKAlCDRjdGC0L4g0Y3RhNGE0LXQutGC0LjQstC90YvQuSDRgdC10YDQstC40YEg0LTQu9GPINGD0LLQu9C10LrQsNGC0LXQu9GM0L3QvtC5INC/0YDQsNC60YLQuNC60Lgg0LDQvdCz0LvQuNC50YHQutC+0LPQviDRj9C30YvQutCwLiDQn9GA0LjRgdC+0LXQtNC40L3Rj9C50YHRjyFcbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VfX2FkdmFudGFnZXNcIj5cbiAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj7Qn9C+0YfQtdC80YMgUlNMYW5nPzwvaDI+XG4gICAgICAgICAgIDx1bCBjbGFzcz1cImFkdmFudGFnZXNfX2xpc3RcIj5cbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7YWNzZXNzfVwiPlxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7QkdC10YHQv9C70LDRgtC90YvQuSDQtNC+0YHRgtGD0L88L2gzPlxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+0J3QsNGI0LAg0LzQuNGB0YHQuNGPIOKAlCDRgdC00LXQu9Cw0YLRjCDQvtCx0YPRh9C10L3QuNGPINGP0LfRi9C60LDQvCDQtNC+0YHRgtGD0L/QvdGL0Lwg0LTQu9GPINC60LDQttC00L7Qs9C+PC9wPlxuICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbVwiPlxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2RpY3Rpb25hcnl9XCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCh0LvQvtCy0LDRgNGMPC9oMz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPtCp0LXQu9C60L3QuNGC0LUg0LvRjtCx0L7QtSDRgdC70L7QstC+LCDRh9GC0L7QsdGLINGD0LLQuNC00LXRgtGMINC+0L/RgNC10LTQtdC70LXQvdC40LUg0LIg0LjRgdGC0L7Rh9C90LjQutCw0YUsINC4INGB0L7RhdGA0LDQvdC40YLQtSDQtdCz0L4g0LIg0YHQstC+0LXQvCDRgdC/0LjRgdC60LUg0LrQsNGA0YLQvtGH0LXQujwvcD5cbiAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwbGF5fVwiPlxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7QmNCz0YDQsNC5LCDRh9GC0L7QsdGLINGD0YfQuNGC0YzRgdGPPC9oMz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPtCY0LPRgNGLINCy0LrQu9GO0YfQsNGO0YIg0JDRg9C00LjQvtCy0YvQt9C+0LIs0KHQv9GA0LjQvdGCINC4INC80L3QvtCz0L7QtSDQtNGA0YPQs9C+0LUuLi48L3A+XG4gICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGhvbmV9XCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCj0YfQuNGC0LXRgdGMINC90LAg0YXQvtC00YM8L2gzPlxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+UlNMYW5nINC00L7RgdGC0YPQv9C90LAg0LTQu9GPINCy0LXQsSDQuCDQvNC+0LHQuNC70YzQvdGL0YUg0YPRgdGC0YDQvtC50YHRgtCyLiDQo9GH0LjRgtC10YHRjCDQuNC3INC70Y7QsdC+0LPQviDQvNC10YHRgtCwITwvcD5cbiAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICA8L3VsPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgJHtGb290ZXIucmVuZGVyKCl9XG4gICAgYCxcbn07XG5cbi8vIGV4cG9ydCB7IE1haW5QYWdlIH07XG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgeyBpbml0U3ByaW50TVZDIH0gZnJvbSAnLi9pbml0U3ByaW50TVZDJztcbmltcG9ydCB7IEJ1dHRvbnMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NtYWxsQ29tcG9uZW50cy9idXR0b25zJztcblxuaW1wb3J0IHBhcnJvdHMgZnJvbSAnLi4vLi4vYXNzZXRzL3BhcnJvdHMuanBnJztcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSAnLi4vLi4vYXNzZXRzL2Fycm93LWxlZnQucG5nJztcbmltcG9ydCBhcnJvd1JpZ2h0IGZyb20gJy4uLy4uL2Fzc2V0cy9hcnJvdy1yaWdodC5wbmcnO1xuXG5pbXBvcnQgcmlnaHRBbnN3ZXJBdWRpbyBmcm9tICcuLi8uLi9hc3NldHMvYXVkaW8vcmlnaHQtYW5zd2VyLm1wMyc7XG5pbXBvcnQgd3JvbmdBbnN3ZXJBdWRpbyBmcm9tICcuLi8uLi9hc3NldHMvYXVkaW8vd3JvbmctYW5zd2VyLm1wMyc7XG5pbXBvcnQgdGltZW92ZXJBdWRpbyBmcm9tICcuLi8uLi9hc3NldHMvYXVkaW8vdGltZS1vdmVyLm1wMyc7XG5cbmNvbnN0IFNwcmludEdhbWVQYWdlID0ge1xuICBjbGFzc25hbWU6ICdzcHJpbnQnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnRfX3Njb3JlXCI+MDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNwcmludF9fdGltZXJcIj42MDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNwcmludF9fZmllbGRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX190aXRsZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV9fY291bnRcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVfX3RleHRcIj4rIDEwINC+0YfQutC+0LIg0LfQsCDRgdC70LXQtNGD0Y7RidC10LUg0YHQu9C+0LLQvjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX19jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX2ltZ1wiPjxpbWcgc3JjPScke3BhcnJvdHN9JyBhbHQ9XCJwYXJyb3RzXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX3F1ZXN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX3dvcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbl9fd29yZFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmRfX3NvdW5kXCI+PC9kaXY+XG4gICAgICAgICAgICA8YXVkaW8gaWQ9XCJzcHJpbnRfX3NheV9fd29yZFwiIHNyYz1cIlwiPjwvYXVkaW8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uX190cmFuc2xhdGlvblwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX19idXR0b25zXCI+JHtCdXR0b25zLmNyZWF0ZSgn0J3QtdCy0LXRgNC90L4nLCAnYnV0dG9uX19zcHJpbnRfX2ZhbHNlJywgZmFsc2UpfSR7QnV0dG9ucy5jcmVhdGUoJ9CS0LXRgNC90L4nLCAnYnV0dG9uX19zcHJpbnRfX3RydWUnLCBmYWxzZSl9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnRfX2Fycm93c1wiPlxuICAgICAgICA8aW1nIHNyYz0nJHthcnJvd0xlZnR9JyBhbHQ9XCJhcnJvd1wiPlxuICAgICAgICA8aW1nIHNyYz0nJHthcnJvd1JpZ2h0fScgYWx0PVwiYXJyb3dcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGF1ZGlvIGlkPVwiYXVkaW9fX3JpZ2h0XCIgc3JjPVwiJHtyaWdodEFuc3dlckF1ZGlvfVwiPjwvYXVkaW8+XG4gICAgICA8YXVkaW8gaWQ9XCJhdWRpb19fd3JvbmdcIiBzcmM9XCIke3dyb25nQW5zd2VyQXVkaW99XCI+PC9hdWRpbz5cbiAgICAgIDxhdWRpbyBpZD1cImF1ZGlvX190aW1lb3ZlclwiIHNyYz1cIiR7dGltZW92ZXJBdWRpb31cIj48L2F1ZGlvPlxuICAgIDwvZGl2PmA7XG4gIH0sXG4gIGluaXRNVkMoKTogdm9pZCB7XG4gICAgaW5pdFNwcmludE1WQygpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ByaW50R2FtZVBhZ2U7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cblxuaW1wb3J0IHsgTW9kdWxlQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL2NvbnRyb2xsZXIvY29udHJvbGxlclNwcmludCc7XG5pbXBvcnQgeyBNb2R1bGVNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVsL21vZGVsU3ByaW50JztcbmltcG9ydCB7IE1vZHVsZVZpZXcgfSBmcm9tICcuLi8uLi92aWV3L3ZpZXdTcHJpbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNwcmludE1WQygpOiB2b2lkIHtcbiAgY29uc3QgdmlldyA9IG5ldyBNb2R1bGVWaWV3KCk7XG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZHVsZU1vZGVsKCk7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgTW9kdWxlQ29udHJvbGxlcigpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ByaW50LWNvbnRlaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuICB2aWV3LmluaXQoY29udGFpbmVyKTtcbiAgbW9kZWwuaW5pdCh2aWV3KTtcbiAgY29udHJvbGxlci5pbml0KGNvbnRhaW5lciwgbW9kZWwpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuZXhwb3J0IGNvbnN0IHNwcmludFNldHRpbmdzID0ge1xuICBoYXNoTmFtZTogJycsXG4gIHByZXZpb3VzSGFzaE5hbWU6IHdpbmRvdy5sb2NhdGlvbi5oYXNoLFxuICBzcHJpbnRMZXZlbDogMCxcbiAgc3ByaW50UGFnZTogMCxcbiAgc3ByaW50RnJvbVRleHRib29rOiBmYWxzZSxcbiAgcHJldmlvdXNIYXNoTmFtZUFycmF5KCk6c3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnByZXZpb3VzSGFzaE5hbWUuc3BsaXQoJy8nKTtcbiAgfSxcbiAgc2V0TGV2ZWxGcm9tVGV4dGJvb2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJldmlvdXNIYXNoTmFtZUFycmF5KClbMF0gPT09ICcjdGV4dGJvb2snKSB7XG4gICAgICB0aGlzLnNwcmludExldmVsID0gK3RoaXMucHJldmlvdXNIYXNoTmFtZUFycmF5KClbMV0gLSAxO1xuICAgICAgdGhpcy5zcHJpbnRGcm9tVGV4dGJvb2sgPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgc2V0TGV2ZWxGcm9tU2VsZWN0KGxldmVsOnN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3ByaW50TGV2ZWwgPSArbGV2ZWxbbGV2ZWwubGVuZ3RoIC0gMV07XG4gICAgdGhpcy5zcHJpbnRQYWdlID0gMDtcbiAgICB0aGlzLnNwcmludEZyb21UZXh0Ym9vayA9IGZhbHNlO1xuICB9LFxuICBzZXRQYWdlRnJvbVRleHRib29rKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByZXZpb3VzSGFzaE5hbWVBcnJheSgpWzBdID09PSAnI3RleHRib29rJykge1xuICAgICAgdGhpcy5zcHJpbnRQYWdlID0gK3RoaXMucHJldmlvdXNIYXNoTmFtZUFycmF5KClbMl0gLSAxO1xuICAgICAgdGhpcy5zcHJpbnRGcm9tVGV4dGJvb2sgPSB0cnVlO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VTcHJpbnRTZXR0aW5ncygpOiB2b2lkIHtcbiAgaWYgKHNwcmludFNldHRpbmdzLmhhc2hOYW1lKSB7IHNwcmludFNldHRpbmdzLnByZXZpb3VzSGFzaE5hbWUgPSBzcHJpbnRTZXR0aW5ncy5oYXNoTmFtZTsgfVxuICBzcHJpbnRTZXR0aW5ncy5oYXNoTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICBzcHJpbnRTZXR0aW5ncy5zZXRMZXZlbEZyb21UZXh0Ym9vaygpO1xuICBzcHJpbnRTZXR0aW5ncy5zZXRQYWdlRnJvbVRleHRib29rKCk7XG59XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5jb25zdCBTdGF0aXN0aWNzUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAnc3RhdGlzdGljcycsXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgPGRpdiBjbGFzcyA9ICcke3RoaXMuY2xhc3NuYW1lfS1jb250ZWluZXInPjwvZGl2PlxuICAgICR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0aXN0aWNzUGFnZTtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmltcG9ydCBmb3RvMSBmcm9tICcuLi9hc3NldHMvZ2l0aHViLWltZy9mbHlldGhlci5qcGcnO1xuaW1wb3J0IGZvdG8yIGZyb20gJy4uL2Fzc2V0cy9naXRodWItaW1nL0FsZW5hRG96LmpwZyc7XG5pbXBvcnQgZm90bzMgZnJvbSAnLi4vYXNzZXRzL2dpdGh1Yi1pbWcvZGFyaW5hOTkyLmpwZyc7XG5cbmNvbnN0IEFib3V0VGVhbVBhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ3RlYW0tcGFnZScsXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgPGRpdiBjbGFzcyA9ICcke3RoaXMuY2xhc3NuYW1lfS1jb250ZWluZXInPlxuICAgICAgPHAgY2xhc3M9J291cnRlYW1fX3RpdGxlJz7QndCw0YjQsCDQutC+0LzQsNC90LTQsDwvcD5cbiAgICAgIDxkaXYgY2xhc3M9J291cnRlYW1fX2NvbnRlaW5lcic+XG4gICAgICAgIDxkaXYgY2xhc3M9J291cnRlYW0nPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J291cnRlYW1fX2dpdGh1Yic+XG4gICAgICAgICAgICA8aW1nIHNyYz0nJHtmb3RvMX0nIGFsdD0nZm90bycgY2xhc3M9J291cnRlYW1fX2ZvdG9zJz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZmx5ZXRoZXJcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+Zmx5ZXRoZXI8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9J291cnRlYW1fX3RlYW1sZWFkJz5UZWFtTGVhZDwvc3Bhbj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJkZXZlbG9wbWVudF9fbGlzdFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj5CYWNrZW5kPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+0JDQstGC0L7RgNC40LfQsNGG0LjRjzwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPtCc0LjQvdC4LdC40LPRgNCwICfQkNGD0LTQuNC+0LLRi9C30L7Qsic8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj4uLi48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtX19naXRodWInPlxuICAgICAgICAgICAgPGltZyBzcmM9JyR7Zm90bzJ9JyBhbHQ9J2ZvdG8nIGNsYXNzPSdvdXJ0ZWFtX19mb3Rvcyc+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FsZW5hRG96XCIgY2xhc3M9XCJnaXRodWItbGlua1wiPkFsZW5hRG96PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bCBjbGFzcz1cImRldmVsb3BtZW50X19saXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPtCt0LvQtdC60YLRgNC+0L3QvdGL0Lkg0YPRh9C10LHQvdC40Lo8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj7QlNC40LfQsNC50L08L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj4uLi48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj4uLi48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtX19naXRodWInPlxuICAgICAgICAgICAgPGltZyBzcmM9JyR7Zm90bzN9JyBhbHQ9J2ZvdG8nIGNsYXNzPSdvdXJ0ZWFtX19mb3Rvcyc+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0RhcmluYTk5MlwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5EYXJpbmE5OTI8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2xpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+0JPQu9Cw0LLQvdCw0Y8g0YHRgtGA0LDQvdC40YbQsDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPtCc0LjQvdC4LdC40LPRgNCwICfQodC/0YDQuNC90YInPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+Li4uPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+Li4uPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICR7Rm9vdGVyLnJlbmRlcigpfVxuICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dFRlYW1QYWdlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgJy4vdGV4dGJvb2suc2Nzcyc7XG5pbXBvcnQgeyBoYXNoZXMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hhc2hlcyc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9hcGkvYXBpJztcbmltcG9ydCB7IElXb3JkIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IHsgVGV4dGJvb2tDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vY29udHJvbGxlci9jb250cm9sbGVyVGV4dGJvb2snO1xuaW1wb3J0IFdvcmRzIGZyb20gJy4uLy4uL3dvcmRzL3dvcmRzJztcblxuY29uc3QgVGV4dGJvb2tQYWdlID0ge1xuICBjbGFzc25hbWU6ICd0ZXh0Ym9vaycsXG4gIHdvcmRsaXN0OiAnd29yZC1saXN0JyxcblxuICB1bml0RGlmZmljdWx0V29yZHM6IDcsXG5cbiAgaXNBdXRoOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpLFxuXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIGNvbnN0IGxvY2F0aW9uSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgdW5pdCA9ICtsb2NhdGlvbkhhc2hbMV07XG4gICAgY29uc3QgcGFnZSA9ICtsb2NhdGlvbkhhc2hbMl07XG4gICAgbGV0IHZpZXcgPSAnJztcbiAgICBjb25zdCBtaW5Vbml0ID0gMTtcbiAgICBjb25zdCBtYXhVbml0ID0gNztcbiAgICBjb25zdCB1bml0U2VsZWN0b3IgPSAndGV4dGJvb2stdW5pdCc7XG4gICAgY29uc3QgcGFnZVNlbGVjdG9yID0gJ3VuaXQtcGFnZSc7XG4gICAgY29uc3QgbWluUGFnZSA9IDE7XG4gICAgY29uc3QgbWF4UGFnZSA9IDMwO1xuICAgIGNvbnN0IGNvbnRyb2xsZXJUZXh0Ym9vayA9IG5ldyBUZXh0Ym9va0NvbnRyb2xsZXIodW5pdFNlbGVjdG9yLCBwYWdlU2VsZWN0b3IpO1xuICAgIGlmICghdW5pdCkge1xuICAgICAgdmlldyA9IGA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiMVwiPtCg0LDQt9C00LXQuyAxPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjJcIj7QoNCw0LfQtNC10LsgMjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCIzXCI+0KDQsNC30LTQtdC7IDM8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiNFwiPtCg0LDQt9C00LXQuyA0PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjVcIj7QoNCw0LfQtNC10LsgNTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCI2XCI+0KDQsNC30LTQtdC7IDY8L2Rpdj5cbiAgICAgICR7dGhpcy5pc0F1dGggPyBgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCI3XCI+0KDQsNC30LTQtdC7IFwi0KHQu9C+0LbQvdGL0LUg0YHQu9C+0LLQsFwiPC9kaXY+XG4gICAgICBgIDogJyd9XG4gICAgICA8L2Rpdj5gO1xuICAgIH0gZWxzZSBpZiAoIXBhZ2UgJiYgdW5pdCA8PSBtYXhVbml0ICYmIHVuaXQgPj0gbWluVW5pdCAmJiB0eXBlb2YgdW5pdCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZpZXcgPSBgXG4gICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stbmF2aWdhdGlvbiB1bml0LW5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcm91bmRcIiBpZD1cImdvLWJhY2tcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidW5pdC1uYW1lXCI+0KDQsNC30LTQtdC7ICR7dGhpcy51bml0RGlmZmljdWx0V29yZHMgPT09IHVuaXQgPyAnXCLQodC70L7QttC90YvQtSDRgdC70L7QstCwXCInIDogdW5pdH08L3A+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDx1bCBjbGFzcz1cInVuaXQtcGFnZXNcIj5cbiAgICAgICAgICAgICR7dGhpcy5yZW5kZXJQYWdlcyh1bml0KX1cbiAgICAgICAgIDwvdWw+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlldyA9IGA8ZGl2IGNsYXNzPSR7dGhpcy5jbGFzc25hbWV9PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLW5hdmlnYXRpb25cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1yb3VuZFwiIGlkPVwiZ28tYmFja1wiPjwvYnV0dG9uPlxuICAgICAgICA8cCBjbGFzcz1cInVuaXQtbmFtZVwiPtCg0LDQt9C00LXQuyAke3RoaXMudW5pdERpZmZpY3VsdFdvcmRzID09PSB1bml0ID8gJ1wi0KHQu9C+0LbQvdGL0LUg0YHQu9C+0LLQsFwiJyA6IHVuaXR9XG4gICAgICAgICA8c3BhbiBjbGFzcz1cInVuaXQtcGFnZS1uYW1lXCI+0YHRgtGA0LDQvdC40YbQsCAke3BhZ2V9PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzcz0ke3RoaXMud29yZGxpc3R9PlxuICAgICAgICR7dGhpcy5nZXRDYXJkcyh1bml0LCBwYWdlKX1cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay1wYWdpbmF0aW9uXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2luYXRpb24tYnRuIGJ0bi1vcmFuZ2UgcHJldmlvdXNcIiAke3BhZ2UgPT09IG1pblBhZ2UgPyAnZGlzYWJsZWQnIDogJyd9PtCf0YDQtdC00YvQtNGD0YnQsNGPPC9idXR0b24+XG4gICAgICAgICAgJHt0aGlzLmlzQXV0aCA/IGA8YSBjbGFzcz1cInRleHRib29rLWdhbWUgbGV2ZWwtdGV4dGJvb2tcIiBocmVmPVwiJHtoYXNoZXMuYXVkaW9jYWxsfVwiPtCQ0YPQtNC40L7QstGL0LfQvtCyPC9hPlxuICAgICAgICAgIDxhIGNsYXNzPVwidGV4dGJvb2stZ2FtZVwiIGhyZWY9XCIke2hhc2hlcy5hYm91dHNwcmludH1cIj7QodC/0YDQuNC90YI8L2E+YCA6ICcnfVxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uLWJ0biBidG4tb3JhbmdlIG5leHRcIiAke3BhZ2UgPT09IG1heFBhZ2UgPyAnZGlzYWJsZWQnIDogJyd9PtCh0LvQtdC00YPRjtGJ0LDRjzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gICAgfVxuICAgIGNvbnRyb2xsZXJUZXh0Ym9vay5pbml0KHVuaXQpO1xuICAgIHJldHVybiBgJHtIZWFkZXIucmVuZGVyKCl9JHt2aWV3fSR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIH0sXG4gIHJlbmRlclBhZ2VzKHVuaXQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IHBhZ2VzID0gJyc7XG4gICAgbGV0IHBhZ2VzQ291bnQgPSAzMDtcbiAgICBjb25zdCB3b3Jkc1BlclBhZ2UgPSAyMDtcbiAgICBpZiAodW5pdCA9PT0gdGhpcy51bml0RGlmZmljdWx0V29yZHMpIHtcbiAgICAgIHBhZ2VzQ291bnQgPSBNYXRoLmNlaWwoV29yZHMuYWdncmVnYXRlZFdvcmRzLmxlbmd0aCAvIHdvcmRzUGVyUGFnZSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBhZ2VzQ291bnQ7IGkgKz0gMSkge1xuICAgICAgcGFnZXMgKz0gYDxsaSBjbGFzcz1cInVuaXQtcGFnZVwiIGRhdGEtcGFnZT1cIiR7aX1cIj5QYWdlICR7aX08L2xpPmA7XG4gICAgfVxuICAgIHJldHVybiBwYWdlcztcbiAgfSxcbiAgZ2V0Q2FyZHModW5pdDogbnVtYmVyLCBwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IHdvcmRsaXN0LCBpc0F1dGggfSA9IHRoaXM7XG4gICAgZnVuY3Rpb24gcmVuZGVyQ2FyZHMod29yZHM6IElXb3JkW10pIHtcbiAgICAgIGNvbnN0IHdvcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt3b3JkbGlzdH1gKTtcbiAgICAgIGlmICh3b3JkQ29udGFpbmVyKSB7XG4gICAgICAgIHdvcmRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBpc1dvcmRJbkRpZmZpY3VsdCA9IFdvcmRzLmFnZ3JlZ2F0ZWRXb3Jkcy5zb21lKCh3b3JkKSA9PiB3b3Jkc1tpXS5pZCA9PT0gd29yZC5pZCk7XG4gICAgICAgICAgY29uc3QgaXNXb3JkTGVhcm5lZCA9IFdvcmRzLmxlYXJuZWRXb3Jkcy5zb21lKCh3b3JkKSA9PiB3b3Jkc1tpXS5pZCA9PT0gd29yZC5pZCk7XG4gICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd3b3JkLWl0ZW0nKTtcbiAgICAgICAgICBjYXJkLmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cIndvcmQtaW1hZ2VcIiBcbiAgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9yc2xhbmctbGVhcm5pbmctZW5nbGlzaC13b3Jkcy5oZXJva3VhcHAuY29tLyR7d29yZHNbaV0uaW1hZ2V9KVwiPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIndvcmQtZGVzY3JpcHRpb25cIj5cbiAgICA8ZGl2IGNsYXNzPVwid29yZC1wcm9ub3VuY2Ugd29yZC1hdWRpb1wiPlxuICAgIDxwIGNsYXNzPVwid29yZC1uYW1lXCI+JHt3b3Jkc1tpXS53b3JkfSAke3dvcmRzW2ldLnRyYW5zY3JpcHRpb259PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cImF1ZGlvXCI+XG4gICAgICAgIDxhdWRpbyBzcmM9XCJodHRwczovL3JzbGFuZy1sZWFybmluZy1lbmdsaXNoLXdvcmRzLmhlcm9rdWFwcC5jb20vJHt3b3Jkc1tpXS5hdWRpb31cIj48L2F1ZGlvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLXByb25vdW5jZSB0cmFuc2xhdGlvblwiPiR7d29yZHNbaV0ud29yZFRyYW5zbGF0ZX08L3A+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLWV4YW1wbGVcIj4ke3dvcmRzW2ldLnRleHRNZWFuaW5nfTwvcD5cbiAgICA8cCBjbGFzcz1cIndvcmQtZXhhbXBsZSB0cmFuc2xhdGlvblwiPiR7d29yZHNbaV0udGV4dE1lYW5pbmdUcmFuc2xhdGV9PC9wPlxuICAgIDxwIGNsYXNzPVwid29yZC1leGFtcGxlXCI+JHt3b3Jkc1tpXS50ZXh0RXhhbXBsZX08L3A+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLWV4YW1wbGUgdHJhbnNsYXRpb25cIj4ke3dvcmRzW2ldLnRleHRFeGFtcGxlVHJhbnNsYXRlfTwvcD5cbiAgPC9kaXY+XG4gICR7aXNBdXRoID8gYFxuPGRpdiBjbGFzcz1cIndvcmQtbm90ZWRcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tb3JhbmdlIGJ0bi1kaWZmaWN1bHQgICR7aXNXb3JkSW5EaWZmaWN1bHQgPyAnYWRkZWQnIDogJyd9XCIgXG4gICAgICBkYXRhLXdvcmQgPSBcIiR7d29yZHNbaV0uaWR9XCIgXG4gICAgICAke2lzV29yZEluRGlmZmljdWx0ID8gJ2Rpc2FibGVkJyA6ICcnfSA+0KHQu9C+0LbQvdC+PzwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1vcmFuZ2UgYnRuLWxlYXJuZWQgJHtpc1dvcmRMZWFybmVkID8gJ2FkZGVkJyA6ICcnfVwiIFxuICAgICAgZGF0YS13b3JkID0gXCIke3dvcmRzW2ldLmlkfVwiXG4gICAgICAke2lzV29yZExlYXJuZWQgPyAnZGlzYWJsZWQnIDogJyd9PtCY0LfRg9GH0LXQvdC+PzwvYnV0dG9uPlxuICAgICAgPC9kaXY+YCA6ICcnfWA7XG4gICAgICAgICAgY2FyZC5kYXRhc2V0LndvcmQgPSB3b3Jkc1tpXS5pZDtcbiAgICAgICAgICB3b3JkQ29udGFpbmVyLmFwcGVuZChjYXJkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodW5pdCA9PT0gdGhpcy51bml0RGlmZmljdWx0V29yZHMpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZW5kZXJDYXJkcyhXb3Jkcy5hZ2dyZWdhdGVkV29yZHMpO1xuICAgICAgfSwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBhcGkuZ2V0V29yZHModW5pdCAtIDEsIHBhZ2UgLSAxKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgV29yZHMud29yZHMgPSByZXMgYXMgSVdvcmRbXTtcbiAgICAgICAgICAgIHJlbmRlckNhcmRzKHJlcyBhcyBJV29yZFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0Ym9va1BhZ2U7XG4iLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtaW46bnVtYmVyLCBtYXg6bnVtYmVyKTpudW1iZXIge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cbiIsImltcG9ydCB7IFJvdXRlcywgTWVudUl0ZW1zIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IFNwcmludEdhbWVQYWdlIGZyb20gJy4uL3BhZ2VzL3NwcmludC9pbmRleCc7XG5cbmNsYXNzIE1vZHVsZVZpZXcge1xuICBteU1vZHVsZUNvbnRhaW5lciE6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnRlbnRDb250YWluZXIhOiBIVE1MRWxlbWVudDtcblxuICByb3V0ZXNPYmohOiBSb3V0ZXM7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50LCByb3V0ZXM6IFJvdXRlcyk6IHZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5yb3V0ZXNPYmogPSByb3V0ZXM7XG4gIH1cblxuICByZW5kZXJDb250ZW50KGhhc2hQYWdlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IHJvdXRlTmFtZSA9ICdkZWZhdWx0JztcbiAgICByb3V0ZU5hbWUgPSAoaGFzaFBhZ2VOYW1lLmxlbmd0aCkgPyBoYXNoUGFnZU5hbWUuc3BsaXQoJy8nKVswXSA6IHJvdXRlTmFtZTtcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMucm91dGVzT2JqW3JvdXRlTmFtZSBhcyBrZXlvZiBSb3V0ZXNdO1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIuaW5uZXJIVE1MID0gcm91dGUucmVuZGVyKCk7XG4gICAgaWYgKGhhc2hQYWdlTmFtZSA9PT0gJ3NwcmludCcpIHsgU3ByaW50R2FtZVBhZ2UuaW5pdE1WQygpOyB9XG4gIH1cblxuICBoaWdobGlnaHRBY3RpdmVNZW51SXRlbSA9IChvYmo6IE1lbnVJdGVtcywgaGFzaE5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmpba2V5IGFzIGtleW9mIE1lbnVJdGVtc10uY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51X19pdGVtX2FjdGl2ZScpKSB7XG4gICAgICAgIG9ialtrZXkgYXMga2V5b2YgTWVudUl0ZW1zXS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzaE5hbWUpIHtcbiAgICAgIG9ialtoYXNoTmFtZSBhcyBrZXlvZiBNZW51SXRlbXNdLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5tYWluLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVWaWV3O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCBTcHJpbnRSZXN1bHQgZnJvbSAnLi4vY29tcG9uZW50cy9zcHJpbnRyZXN1bHRzJztcbmltcG9ydCB0cnVlSW1nIGZyb20gJy4uL2Fzc2V0cy90cnVlLnBuZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2R1bGVWaWV3IHtcbiAgbXlNb2R1bGVDb250YWluZXIhOkhUTUxFbGVtZW50O1xuXG4gIGNvbnRlbnRDb250YWluZXIhOkhUTUxFbGVtZW50O1xuXG4gIHJvdXRlc09iaiE6Um91dGVzO1xuXG4gIHNwcmludFRpbWVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnRfX3RpbWVyJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50U2NvcmU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwcmludF9fc2NvcmUnKSBhcyBIVE1MRWxlbWVudDtcblxuICBzcHJpbnRDb3VudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGVfX2NvdW50JykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50Q291bnRUZXh0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZV9fdGV4dCcpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHF1ZXN0aW9uV29yZDpIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVzdGlvbl9fd29yZCcpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHF1ZXN0aW9uVHJhbnNsYXRpb246SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVlc3Rpb25fX3RyYW5zbGF0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50Q29udGVpbmVyOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwcmludC1jb250ZWluZXInKSBhcyBIVE1MRWxlbWVudDtcblxuICBpbml0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgLy8gdGhpcy5yb3V0ZXNPYmogPSByb3V0ZXM7XG4gIH1cblxuICByZW5kZXJXb3JkKHdvcmQ6IHN0cmluZywgdHJhbnNsYXRpb246IHN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5xdWVzdGlvbldvcmQudGV4dENvbnRlbnQgPSB3b3JkO1xuICAgIHRoaXMucXVlc3Rpb25UcmFuc2xhdGlvbi50ZXh0Q29udGVudCA9IHRyYW5zbGF0aW9uO1xuICB9XG5cbiAgcmVuZGVyVGltZXIodGltZXI6bnVtYmVyLCB0aW1lckVsZW06SFRNTEVsZW1lbnQpOnZvaWQge1xuICAgIHRpbWVyRWxlbS50ZXh0Q29udGVudCA9IFN0cmluZyh0aW1lcik7XG4gIH1cblxuICByZW5kZXJTY29yZShzY29yZTpzdHJpbmcsIG1heFNjb3JlPzpib29sZWFuKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludFNjb3JlLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgaWYgKG1heFNjb3JlKSB7XG4gICAgICB0aGlzLnNwcmludENvdW50LmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dHJ1ZUltZ31cIiBhbHQ9XCJpbWdcIj5gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNwcmludENvdW50LmlubmVySFRNTCArPSBgPGltZyBzcmM9XCIke3RydWVJbWd9XCIgYWx0PVwiaW1nXCI+YDtcbiAgICB9XG4gIH1cblxuICBjbGVhclNwcmludENvdW50KCk6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRDb3VudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIHJldHVyblRvT25lU3ByaW50Q291bnQoKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludENvdW50LmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dHJ1ZUltZ31cIiBhbHQ9XCJpbWdcIj5gO1xuICB9XG5cbiAgcmVuZGVyQ291bnRUZXh0KG46bnVtYmVyKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludENvdW50VGV4dC5pbm5lckhUTUwgPSBgKyAke259INC+0YfQutC+0LIg0LfQsCDRgdC70LXQtNGD0Y7RidC10LUg0YHQu9C+0LLQvmA7XG4gIH1cblxuICByZW5kZXJSZXN1bHRzKHF1ZXN0aW9uczpzdHJpbmdbXSwgYW5zd2Vyczpib29sZWFuW10sIHJpZ2h0QW5zd2VyczpudW1iZXIsIHdyb25nQW5zd2VyczpudW1iZXIsIHNjb3JlOm51bWJlcik6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRDb250ZWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zcHJpbnRDb250ZWluZXIuaW5uZXJIVE1MID0gYCR7U3ByaW50UmVzdWx0LnJlbmRlcihxdWVzdGlvbnMsIGFuc3dlcnMsIHJpZ2h0QW5zd2Vycywgd3JvbmdBbnN3ZXJzLCBzY29yZSl9YDtcbiAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBNb2R1bGVWaWV3O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBJV29yZCB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcblxuY2xhc3MgV29yZHMge1xuICBzdGF0aWMgd29yZHM6IElXb3JkW10gPSBbXTtcblxuICBzdGF0aWMgYWdncmVnYXRlZFdvcmRzOiBJV29yZFtdID0gW107XG5cbiAgc3RhdGljIGxlYXJuZWRXb3JkczogSVdvcmRbXSA9IFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JkcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=