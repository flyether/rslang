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
// import { printBtnString, wordObj } from './supporting-func';
const t_1 = __webpack_require__(/*! ./t */ "./src/pages/audiocall/utils/t.ts");
exports.gameArea = ` 
 <div class="audio-container-game"> 
    <div class="btn-sound"><div class="sound-wrapper"> 
    <audio class="audio" src="${api_path_1.apiPath + t_1.support.wordObj.audio}" autoplay></audio> </div></div>
    <div class="right-answer"></div>
    <div class="button-container"> ${t_1.support.printBtnString()}</div>
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
// import {
//   clearLocalStorage, soundAudio, wordObj, storageAudiocall,
// } from './supporting-func';
const wrong_answer_mp3_1 = __importDefault(__webpack_require__(/*! ../../../assets/audio/wrong-answer.mp3 */ "./src/assets/audio/wrong-answer.mp3"));
const right_answer_mp3_1 = __importDefault(__webpack_require__(/*! ../../../assets/audio/right-answer.mp3 */ "./src/assets/audio/right-answer.mp3"));
const t_1 = __webpack_require__(/*! ./t */ "./src/pages/audiocall/utils/t.ts");
t_1.support.getWords();
console.log(t_1.support.words, 'support.words в листнере');
class ListenerAudioCall {
    keyboard() {
        document.addEventListener('keydown', (e) => {
            if (e.key === ' ') {
                (0, t_1.soundAudio)((api_path_1.apiPath + t_1.support.wordObj.audio));
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
                (0, t_1.soundAudio)((api_path_1.apiPath + t_1.support.wordObj.audio));
            }
            if (e.target.classList.contains('btn-translation')) {
                if (t_1.support.round) {
                    t_1.support.round = 1;
                }
                else {
                    t_1.support.round = t_1.support.round + 1;
                    if (e.target.id === t_1.support.wordObj.wordTranslate) {
                        rightAnswerFunc(e.target);
                    }
                    else {
                        wrongAnswerFunc(e.target);
                    }
                }
            }
            if (e.target.classList.contains('restart')) {
                t_1.support.clearLocalStorage();
                window.location.reload();
            }
            if (e.target.classList.contains('level-textbook')) {
                const locationHash = window.location.hash.split('/');
                const unit = +locationHash[1];
                const page = +locationHash[2];
                t_1.support.level = unit + 1;
                t_1.support.page = page;
                t_1.support.textbook = true;
            }
            if (e.target.classList.contains('level-change')) {
                t_1.support.clearLocalStorage();
            }
            if (e.target.classList.contains('btn-level')) {
                const dataN = Number(e.target.id.replace(/[^0-9]/g, ''));
                if (e.target.id === (`level${dataN}`)) {
                    t_1.support.clearLocalStorage();
                    t_1.support.level = dataN;
                    t_1.support.level = dataN;
                }
            }
        });
    }
}
function rightAnswerFunc(el) {
    t_1.support.score += 1;
    (0, t_1.soundAudio)((right_answer_mp3_1.default));
    el.classList.add('btn-translation-right');
    setTimeout(() => {
        window.location.reload();
    }, 1200);
}
function wrongAnswerFunc(el) {
    el.classList.add('btn-translation-wrong');
    const rightAnswer = document.querySelector('.right-answer');
    if (rightAnswer) {
        rightAnswer.innerHTML = `<div class="answer"><img class="answer-img" src="${api_path_1.apiPath + t_1.support.wordObj.image}" alt="правильный ответ"><br>${t_1.support.wordObj.word} — ${t_1.support.wordObj.wordTranslate} </div>`;
        t_1.support.arrayWrongWords.push(t_1.support.wordObj.word);
        (0, t_1.soundAudio)((wrong_answer_mp3_1.default));
        setTimeout(() => {
            window.location.reload();
        }, 2200);
    }
}
const listenerAudioCall = new ListenerAudioCall();
exports["default"] = listenerAudioCall;


/***/ }),

/***/ "./src/pages/audiocall/utils/t.ts":
/*!****************************************!*\
  !*** ./src/pages/audiocall/utils/t.ts ***!
  \****************************************/
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
exports.support = exports.soundAudio = void 0;
const storage_1 = __webpack_require__(/*! ../../../functional/storage */ "./src/functional/storage.ts");
const api_1 = __webpack_require__(/*! ../../../api/api */ "./src/api/api.ts");
// выбор уровня для игры и страницы
// (async function support() {
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
class Support {
    constructor() {
        this.textbook = false;
        this.arrayWrongWords = [];
        this.round = 0;
        this.score = 0;
        this.group = 0;
        this.page = 0;
        this.level = 1;
        this.words = [];
        this.wordsString = [];
        this.noRepeat = [];
        this.wordObj = {
            id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
        };
        this.arraySixWords = [];
    }
    getWords() {
        return __awaiter(this, void 0, void 0, function* () {
            api_1.api.getWords(this.group, this.page)
                .then((value) => { this.words = value; }).catch((err) => {
                console.log(err);
            });
        });
    }
    levelGame() {
        this.group = this.level - 1;
        if ((this.page === 0)) {
            this.page = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
        }
    }
    getFiveWords() {
        this.wordsString = storage_1.storage.words.map((item) => item.wordTranslate);
        if (this.noRepeat.length > 0) {
            this.wordsString = this.wordsString.filter((item) => !this.noRepeat.includes(item));
        }
        shuffle(this.wordsString);
        this.arraySixWords = this.wordsString.slice(0, 5);
        const wordRight = this.arraySixWords[Math.floor(Math.random() * this.arraySixWords.length)];
        for (let i = 0; i < this.words.length; i++) {
            if (this.words[i].wordTranslate === wordRight) {
                this.wordObj = this.words[i];
            }
        }
        this.noRepeat.push(this.wordObj.wordTranslate);
        if (localStorage.getItem('noRepeat')) {
            this.noRepeat = JSON.parse(localStorage.getItem('noRepeat'));
            this.noRepeat.push(this.wordObj.wordTranslate);
        }
    }
    printBtnString() {
        this.getWords();
        this.levelGame();
        this.getFiveWords();
        let a = '';
        let containerBtn = ' ';
        if (this.round < 10) {
            for (let i = 0; i < this.arraySixWords.length; i++) {
                a = this.arraySixWords[i];
                containerBtn += `<button data-num="${i + 1}" type="button" id="${a}" class="btn-translation">${a}</button> `;
            }
        }
        else {
            this.wordObj.audio = '';
            let a = '';
            if (this.arrayWrongWords.length > 0) {
                a = ` <p class="game-text">Рекомендуем выучить:&nbsp${this.arrayWrongWords.join(',\n')}</p> `;
            }
            else {
                a = ' <p class="game-text">Вы ниразу не ошиблись!</p> ';
            }
            containerBtn += `
   <div class="game-over">
     <p class="game-text">Вы прошли игру!</p>
     <p class="game-text">Ваш результат: &nbsp ${this.score}</p>
     ${a}
     <div class="btn-game-over-container">
       <button type="button" class="restart">Начать заново</button>
       <a  class="link level-change" href="#audiocall" >Выбрать уровень</a>
     </div>
   </div>
 
   `;
            this.clearLocalStorage();
        }
        return containerBtn;
    }
    clearLocalStorage() {
        this.arrayWrongWords = [];
        this.round = 0;
        this.score = 0;
        this.group = 0;
        this.page = 0;
        this.level = 1;
        this.words = [];
        this.wordsString = [];
        this.noRepeat = [];
        this.wordObj = {
            id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: '',
        };
        this.arraySixWords = [];
    }
}
// функция проигрывания аудио с путем из нашего обекта-слово
function soundAudio(path) {
    const audioD = new Audio();
    audioD.src = `${path}`;
    audioD.autoplay = true;
}
exports.soundAudio = soundAudio;
const support = new Support();
exports.support = support;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztLQUFBO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQU0sR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQU8sQ0FBQyxLQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEUsSUFBSSxJQUFJLENBQUMsUUFBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3RGO1FBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1RixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQU0sQ0FBQyxNQUFNLEVBQUUs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QUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL3RleHRib29rL3RleHRib29rLnNjc3M/ZTIwZiIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3M/YWFhZiIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvYXBpL2FwaS1wYXRoLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9hcGkvYXBpLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2hhc2hlcy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvc21hbGxDb21wb25lbnRzL2J1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvc3ByaW50cmVzdWx0cy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb250cm9sbGVyL2NvbnRyb2xsZXJTcHJpbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbnRyb2xsZXIvY29udHJvbGxlclRleHRib29rLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9mdW5jdGlvbmFsL2xpc3RlbmVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9mdW5jdGlvbmFsL3Nob3ctdXNlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvZnVuY3Rpb25hbC9zdG9yYWdlLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvbW9kZWwvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL21vZGVsL21vZGVsU3ByaW50LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hYm91dHNwcmludC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hdWRpb2NhbGwvbWFpbi50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL3N0YXJ0LWF1ZGlvY2FsbC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL3V0aWxzL2dhbWUtcmVuZGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hdWRpb2NhbGwvdXRpbHMvbGlzdGVuZXItYXVkaW9jYWxsLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9hdWRpb2NhbGwvdXRpbHMvdC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvbWFpbi50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvc3ByaW50L2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9zcHJpbnQvaW5pdFNwcmludE1WQy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvc3ByaW50L3NwcmludFNldHRpbmdzLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9zdGF0aXN0aWNzL2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy90ZWFtLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy90ZXh0Ym9vay9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvdXRpbHMvZnVuYy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvdmlldy92aWV3LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy92aWV3L3ZpZXdTcHJpbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3dvcmRzL3dvcmRzLnRzIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuXG5jb25zdCBhcGlQYXRoID0gJ2h0dHBzOi8vcnNsYW5nLWxlYXJuaW5nLWVuZ2xpc2gtd29yZHMuaGVyb2t1YXBwLmNvbS8nO1xuY29uc3Qgd29yZHNFbmRwb2ludCA9ICd3b3Jkcyc7XG5jb25zdCB1c2Vyc0VuZHBvaW50ID0gJ3VzZXJzJztcbmNvbnN0IHNpZ25JbiA9ICdzaWduaW4nO1xuY29uc3QgYXBpQ2F0ZWdvcnkgPSAndXNlcldvcmQub3B0aW9uYWwuY2F0ZWdvcnknO1xuXG5leHBvcnQge1xuICBhcGlQYXRoLCB3b3Jkc0VuZHBvaW50LCB1c2Vyc0VuZHBvaW50LCBzaWduSW4sIGFwaUNhdGVnb3J5LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tZWxzZS1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5pbXBvcnQge1xuICBhcGlQYXRoLCB1c2Vyc0VuZHBvaW50LCB3b3Jkc0VuZHBvaW50LCBzaWduSW4sIGFwaUNhdGVnb3J5LFxufSBmcm9tICcuL2FwaS1wYXRoJztcbmltcG9ydCB7XG4gIElVc2VyLCBJV29yZCwgSVVzZXJEYXRhLCBJVXNlcldvcmRzLCBJU2V0dGluZ3MsXG59IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi9mdW5jdGlvbmFsL3N0b3JhZ2UnO1xuXG5jb25zdCBhcGkgPSB7XG5cbiAgYXN5bmMgVXBzZXJ0c05ld1NldHRpbmdzKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxJU2V0dGluZ3MgfCB1bmRlZmluZWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7dXNlcnNFbmRwb2ludH0vJHt1c2VySWR9L3NldHRpbmdzYCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc3RvcmFnZS5zZXR0aW5ncyksXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElTZXR0aW5ncztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZXJyb3IgcHV0aW5nIG5ldyBzZXR0aW5ncycpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBHZXRTZXR0aW5ncyh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8SVNldHRpbmdzIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3VzZXJzRW5kcG9pbnR9LyR7dXNlcklkfS9zZXR0aW5nc2AsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElTZXR0aW5ncztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGdldHRpbmcgc2V0dGluZ3MnKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZ2V0QWxsVXNlcldvcmRzKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxJVXNlcldvcmRzW10gfCB1bmRlZmluZWQgPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3VzZXJzRW5kcG9pbnR9LyR7dXNlcklkfSR7d29yZHNFbmRwb2ludH1gLFxuICAgICAgICB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJVXNlcldvcmRzW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBnZXR0aW5nIHdvcmRzJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIENyZWF0ZVVzZXJXb3JkKHVzZXJJZDogc3RyaW5nLCB3b3JkSUQ6c3RyaW5nKTogUHJvbWlzZTxJVXNlcldvcmRzIHwgdW5kZWZpbmVkID4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fS8ke3VzZXJJZH0vJHt3b3Jkc0VuZHBvaW50fS8ke3dvcmRJRH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc3RvcmFnZS51c2VyV29yZCksXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElVc2VyV29yZHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBjcmVhdGluZyB1c2VyIHdvcmQnKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgVXBkYXRlVXNlcldvcmQodXNlcklkOiBzdHJpbmcsIHdvcmRJRDpzdHJpbmcpOiBQcm9taXNlPElVc2VyV29yZHMgfCB1bmRlZmluZWQgPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3VzZXJzRW5kcG9pbnR9LyR7dXNlcklkfS8ke3dvcmRzRW5kcG9pbnR9LyR7d29yZElEfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UudXNlcldvcmQpLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJVXNlcldvcmRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgdXBkYXRpbmcgdXNlciB3b3JkJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIERlbGV0ZVVzZXJXb3JkKHVzZXJJZDogc3RyaW5nLCB3b3JkSUQ6c3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fS8ke3VzZXJJZH0vJHt3b3Jkc0VuZHBvaW50fS8ke3dvcmRJRH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgZGVsZXRpbmcgdXNlciB3b3JkJyk7XG4gICAgfVxuICB9LFxuXG4gIC8vIGFzeW5jIEdldEFsbFVzZXJBZ2dyZWdhdGVkV29yZHModXNlcklkOiBzdHJpbmcsIHBhZ2U6c3RyaW5nLCB3b3Jkc1BlclBhZ2U6IHN0cmluZywgZmlsdGVyOiBzdHJpbmcgKTogUHJvbWlzZTxJV29yZFtdIHwgdW5kZWZpbmVkID4ge1xuICAvLyAgIHRyeSB7XG4gIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fS8ke3VzZXJJZH0vJHt3b3Jkc0VuZHBvaW50fS8ke3BhZ2V9LyR7d29yZHNQZXJQYWdlfS8ke2ZpbHRlcn1gLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gIC8vICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgLy8gICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJV29yZFtdO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gIC8vICAgICB9XG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgZ2V0dGluZyB3b3JkcycpO1xuICAvLyAgIH1cbiAgLy8gfSxcblxuICBhc3luYyBHZXRVc2VyQWdncmVnYXRlZFdvcmRCeUlkKHVzZXJJZDogc3RyaW5nLCB3b3JkSUQ6c3RyaW5nKTogUHJvbWlzZTxJVXNlcldvcmRzIHwgdW5kZWZpbmVkID4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fS8ke3VzZXJJZH0vYWdncmVnYXRlZFdvcmRzLyR7d29yZElEfWAsXG4gICAgICAgIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElVc2VyV29yZHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBnZXR0aW5nIHVzZXIgYWdncmVnYXRlZCB3b3JkJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGNyZWF0ZU5ld1VzZXIobmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxJVXNlciB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdsZW5ndGggbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZycpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBnZXRVc2VyKGlkOiBzdHJpbmcpOiBQcm9taXNlPElVc2VyIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3VzZXJzRW5kcG9pbnR9LyR7aWR9YCxcbiAgICAgICAgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSVVzZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyB1c2VyU2lnbkluKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPElVc2VyRGF0YSB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHtzaWduSW59YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHVzZXInKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZ2V0V29yZHMoZ3JvdXA6IG51bWJlciwgcGFnZTogbnVtYmVyKTogUHJvbWlzZTxJV29yZFtdIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3dvcmRzRW5kcG9pbnR9P2dyb3VwPSR7Z3JvdXB9JnBhZ2U9JHtwYWdlfWAsXG4gICAgICAgIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElXb3JkW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZ2V0IHdvcmRzXCIpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBnZXRXb3JkKGlkOiBzdHJpbmcpOiBQcm9taXNlPElXb3JkIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3dvcmRzRW5kcG9pbnR9LyR7aWR9YCxcbiAgICAgICAgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSVdvcmQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZ2V0IHdvcmRcIik7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IHsgYXBpIH07XG4iLCJjb25zdCBDb250ZW50ID0ge1xuICByZW5kZXI6IChjdXN0b21DbGFzcyA9ICcnKTpzdHJpbmcgPT4gYDxkaXYgY2xhc3M9XCJjb250ZW50ICR7Y3VzdG9tQ2xhc3N9XCIgaWQ9XCJjb250ZW50XCI+PC9kaXY+YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCJjb25zdCBGb290ZXIgPSB7XG4gIHJlbmRlcjogKGN1c3RvbUNsYXNzID0gJycpOnN0cmluZyA9PiBgPGZvb3RlciBjbGFzcz1cImZvb3RlciAke2N1c3RvbUNsYXNzfVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2l0aHViLWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9mbHlldGhlclwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5mbHlldGhlcjxhPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGFyaW5hOTkyXCIgY2xhc3M9XCJnaXRodWItbGlua1wiPkRhcmluYTk5MjxhPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQWxlbmFEb3pcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+QWxlbmFEb3o8YT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuPiYjMTY5OyAyMDIyPC9zcGFuPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgY2xhc3M9XCJycy1saW5rXCI+PC9hPlxuICAgICAgICAgICAgPC9mb290ZXI+YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImV4cG9ydCBjb25zdCBoYXNoZXMgPSB7XG4gIG1haW46ICcjbWFpbicsXG4gIHRleHRib29rOiAnI3RleHRib29rJyxcbiAgc3RhdGlzdGljczogJyNzdGF0aXN0aWNzJyxcbiAgYXVkaW9jYWxsOiAnI2F1ZGlvY2FsbCcsXG4gIGFib3V0c3ByaW50OiAnI2Fib3V0c3ByaW50JyxcbiAgc3ByaW50OiAnI3NwcmludCcsXG4gIHRlYW06ICcjdGVhbScsXG59O1xuIiwiaW1wb3J0IHNob3dVc2VyIGZyb20gJy4uL2Z1bmN0aW9uYWwvc2hvdy11c2VyJztcbmltcG9ydCB7IGhhc2hlcyB9IGZyb20gJy4vaGFzaGVzJztcblxuY29uc3QgSGVhZGVyID0ge1xuXG4gIHJlbmRlcihjdXN0b21DbGFzcyA9ICcnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJtb2RhbC1yZXN1bHQtd3JhcHBlclwiPlxuICAgIDxkaXYgaWQ9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cIm1vZGFsLXdpbmRvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImJ0bi1jbG9zZVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXIgJHtjdXN0b21DbGFzc31cIiBpZD1cImhlYWRlclwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJoZWFkZXJfX2xvZ29cIj48YSBocmVmPVwiXCI+UlNMYW5nPC9hPjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2F1dGhcIj5cbiAgICAgICAgICAke3Nob3dVc2VyKHRydWUpfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fYXV0aFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5hdiBjbGFzcz1cImhlYWRlcl9fbWVudVwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnVfX2xpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMubWFpbn1cIiBjbGFzcz1cIm1lbnVfX21haW4gbWVudV9faXRlbV9hY3RpdmVcIj7Qk9C70LDQstC90LDRjzwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke2hhc2hlcy50ZXh0Ym9va31cIiBjbGFzcz1cIm1lbnVfX3RleHRib29rXCI+0KPRh9C10LHQvdC40Lo8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7aGFzaGVzLnN0YXRpc3RpY3N9XCIgY2xhc3M9XCJtZW51X19zdGF0aWN0aWNzIG1lbnVfX2l0ZW1fZGlzYWJsZVwiPtCh0YLQsNGC0LjRgdGC0LjQutCwPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMuYXVkaW9jYWxsfVwiIGNsYXNzPVwibWVudV9fYXVkaW9jYWxsXCI+0JDRg9C00LjQvtCy0YvQt9C+0LI8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMuYWJvdXRzcHJpbnR9XCIgY2xhc3M9XCJtZW51X19zcHJpbnRcIj7QodC/0YDQuNC90YI8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMudGVhbX1cIiBjbGFzcz1cIm1lbnVfX3RlYW1cIj7QniDQutC+0LzQsNC90LTQtTwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyLWJ1cmdlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXJnZXItbWVudVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYXV0aFwiPlxuICAgICAgICAgICAgICAke3Nob3dVc2VyKHRydWUpfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2F1dGhcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImhlYWRlcl9fbWVudVwiPlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51X19saXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7aGFzaGVzLm1haW59XCIgY2xhc3M9XCJtZW51X19tYWluIG1lbnVfX2l0ZW1fYWN0aXZlXCI+0JPQu9Cw0LLQvdCw0Y88L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7aGFzaGVzLnRleHRib29rfVwiIGNsYXNzPVwibWVudV9fdGV4dGJvb2tcIj7Qo9GH0LXQsdC90LjQujwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2hhc2hlcy5zdGF0aXN0aWNzfVwiIGNsYXNzPVwibWVudV9fc3RhdGljdGljcyBtZW51X19pdGVtX2Rpc2FibGVcIj7QodGC0LDRgtC40YHRgtC40LrQsDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMuYXVkaW9jYWxsfVwiIGNsYXNzPVwibWVudV9fYXVkaW9jYWxsXCI+0JDRg9C00LjQvtCy0YvQt9C+0LI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7aGFzaGVzLnNwcmludH1cIiBjbGFzcz1cIm1lbnVfX3NwcmludFwiPtCh0L/RgNC40L3RgjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMudGVhbX1cIiBjbGFzcz1cIm1lbnVfX3RlYW1cIj7QniDQutC+0LzQsNC90LTQtTwvYT48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbmV4cG9ydCBjb25zdCBmb3JtTG9naW4gPSBgIDxmb3JtIGNsYXNzPVwiZm9ybS1zaWduaW5cIiBpZD1cImF1dGhcIj4gICAgICAgXG48aDMgY2xhc3M9XCJmb3JtLXNpZ25pbi1oZWFkaW5nXCI+0JLQstC10LTQuNGC0LUg0YHQstC+0Lgg0LTQsNC90L3Ri9C1PC9oMz5cbjxkaXYgY2xhc3M9XCJmb3JtLXNpZ25pbi1ib2R5XCI+XG4gIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cInVzZXItZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwi0JLQsNGIIEVtYWlsXCIgcmVxdWlyZWQgLz5cbiAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1pbmxlbmd0aD1cIjhcIiBpZD1cInVzZXItcGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCIgcmVxdWlyZWQvPiAgICAgIFxuICA8ZGl2IGNsYXNzPVwiZm9ybS1zaWduaW4tYnV0dG9uc1wiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4tb3JhbmdlXCIgIGlkPVwiYnV0dG9uLW5ldy11c2VyXCIgdHlwZSA9XCJidXR0b25cIj4g0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyA8L2J1dHRvbj4gXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1vcmFuZ2VcIiBpZD1cImF1dG9yaXp0aW9uQnRuXCIgdHlwZT1cInN1Ym1pdFwiPtCS0L7QudGC0Lg8L2J1dHRvbj4gIFxuICA8L2Rpdj5cbiAgPC9kaXY+XG48aDQgY2xhc3M9XCJmb3JtLXNpZ25pbi1lcnJvclwiPjwvaDQ+IFxuPC9mb3JtPmA7XG5cbmV4cG9ydCBjb25zdCBmb3JtUmVnaXN0cmF0aW9uID0gYCA8Zm9ybSBjbGFzcz1cImZvcm0tc2lnbmluXCIgaWQ9XCJyZWdcIj4gICAgICAgXG48aDMgY2xhc3M9XCJmb3JtLXNpZ25pbi1oZWFkaW5nXCI+0JLQstC10LTQuNGC0LUg0YHQstC+0Lgg0LTQsNC90L3Ri9C1PC9oMz5cbjxkaXYgY2xhc3M9XCJmb3JtLXNpZ25pbi1ib2R5XCI+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlci1uYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwidXNlci1uYW1lXCIgcGxhY2Vob2xkZXI9XCLQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIgcmVxdWlyZWQ9XCJcIiAvPlxuICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJ1c2VyLWVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgcmVxdWlyZWQgLz5cbiAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1pbmxlbmd0aD1cIjhcIiBpZD1cInVzZXItcGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCIgcmVxdWlyZWQgLz4gIFxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3JhbmdlXCIgaWQ9XCJyZWdpc3RyYXRpb25fYnRuXCIgdHlwZT1cInN1Ym1pdFwiPtCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0Lgg0LLRhdC+0LQ8L2J1dHRvbj4gIFxuPC9kaXY+XG48aDQgY2xhc3M9XCJmb3JtLXJlZy1lcnJvclwiPjwvaDQ+ICBcbjwvZm9ybT5gO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuZXhwb3J0IGNvbnN0IEJ1dHRvbnMgPSB7XG4gIGNyZWF0ZTogKHN0cjpzdHJpbmcsIGNsYXNzTmFtZTpzdHJpbmcsIGRpc2FibGVkID0gZmFsc2UpOnN0cmluZyA9PiBgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiAke2NsYXNzTmFtZX1cIiAke2Rpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnfT4ke3N0cn08L2J1dHRvbj5gLFxufTtcbiIsImltcG9ydCB5ZXNJbWFnZSBmcm9tICcuLi9hc3NldHMveWVzLnBuZyc7XG5pbXBvcnQgTm9JbWFnZSBmcm9tICcuLi9hc3NldHMvbm8ucG5nJztcblxuY29uc3QgU3ByaW50UmVzdWx0cyA9IHtcbiAgcmVuZGVyKHF1ZXN0aW9uczpzdHJpbmdbXSwgYW5zd2Vyczpib29sZWFuW10sIHJpZ2h0QW5zd2VyczpudW1iZXIsIHdyb25nQW5zd2VyczpudW1iZXIsIHNjb3JlOm51bWJlcik6c3RyaW5nIHtcbiAgICBjb25zdCB0YWJsZVRleHRDb250ZW50OnN0cmluZyA9IHRoaXMuY3JlYXRlVGFibGUocXVlc3Rpb25zLCBhbnN3ZXJzKTtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJyZXN1bHQtY29udGVpbmVyXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwic3ByaW50X19yZXN1bHRfX3Njb3JlXCI+0KLQstC+0Lkg0YDQtdC30YPQu9GM0YLQsNGCOiAke3Njb3JlfSDQvtGH0LrQvtCyIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzcHJpbnRfX3Jlc3VsdFwiPtCf0YDQsNCy0LjQu9GM0L3Ri9GFINC+0YLQstC10YLQvtCyOiAke3JpZ2h0QW5zd2Vyc30uINCe0YjQuNCx0L7QujogJHt3cm9uZ0Fuc3dlcnN9LjwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLWNvbnRlaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPtCS0YvRg9GH0LXQvdC90YvQtSDRgdC70L7QstCwOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJzcHJpbnRfX3RhYmxlX19yZXN1bHRcIj4ke3RhYmxlVGV4dENvbnRlbnR9PC90YWJsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwic3ByaW50X19jbG9zZV9fcmVzdWx0XCIgaHJlZj1cIiNtYWluXCI+0JfQsNC60YDRi9GC0Yw8L2E+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICB9LFxuICBjcmVhdGVUYWJsZTogKHF1ZXN0aW9uczpzdHJpbmdbXSwgYW5zd2Vyczpib29sZWFuW10pOnN0cmluZyA9PiB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzcmMgPSBhbnN3ZXJzW2ldID8geWVzSW1hZ2UgOiBOb0ltYWdlO1xuICAgICAgcmVzdWx0ICs9IGA8dHI+PHRkPiR7cXVlc3Rpb25zW2ldfTwvdGQ+PHRkPjxpbWcgc3JjPVwiJHtzcmN9XCIgYWx0PVwieWVzL25vXCI+PC90ZD48L3RyPmA7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcHJpbnRSZXN1bHRzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuXG4vLyBpbXBvcnQgbW9kYWxBdXRob3JpemF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwnO1xuXG5pbXBvcnQgeyBNZW51SXRlbXMgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgTW9kdWxlTW9kZWwgZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xuaW1wb3J0IGxpc3RlbmVyIGZyb20gJy4uL2Z1bmN0aW9uYWwvbGlzdGVuZXInO1xuaW1wb3J0IGxpc3RlbmVyQXVkaW9DYWxsIGZyb20gJy4uL3BhZ2VzL2F1ZGlvY2FsbC91dGlscy9saXN0ZW5lci1hdWRpb2NhbGwnO1xuaW1wb3J0IHsgc3ByaW50U2V0dGluZ3MsIGNoYW5nZVNwcmludFNldHRpbmdzIH0gZnJvbSAnLi4vcGFnZXMvc3ByaW50L3NwcmludFNldHRpbmdzJztcblxuY2xhc3MgTW9kdWxlQ29udHJvbGxlciB7XG4gIG15TW9kdWxlQ29udGFpbmVyITogSFRNTEVsZW1lbnQ7XG5cbiAgbXlNb2R1bGVNb2RlbCE6IE1vZHVsZU1vZGVsO1xuXG4gIG1lbnVNYWluICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVUZXh0Ym9vayAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51U3RhdGljdGljcyAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51QXVkaW9jYWxsICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVTcHJpbnQgITogSFRNTEVsZW1lbnQ7XG5cbiAgbWVudVRlYW0gITogSFRNTEVsZW1lbnQ7XG5cbiAgYnV0dG9uU3RhcnRTcHJpbnQhOiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICBzcHJpbnRMZXZlbCAhOiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGF1ZGlvY2FsbGdhbWUgITogSFRNTEVsZW1lbnQ7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50LCBtb2RlbDogTW9kdWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbCA9IG1vZGVsO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIGNoYW5nZVNwcmludFNldHRpbmdzKCk7XG4gICAgICBjb25zb2xlLmxvZyhlLm5ld1VSTCwgZS5vbGRVUkwpO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gbW9kYWxBdXRob3JpemF0aW9uLm9wZW4oKTtcbiAgICBsaXN0ZW5lci5vcGVuKCk7XG4gICAgbGlzdGVuZXJBdWRpb0NhbGwuY2xpaygpO1xuICAgIGxpc3RlbmVyQXVkaW9DYWxsLmtleWJvYXJkKCk7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNtYWluJztcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGhhc2hQYWdlTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLnVwZGF0ZVN0YXRlKGhhc2hQYWdlTmFtZSk7XG4gICAgdGhpcy5maW5kTWVudUVsZW1lbnRzKGhhc2hQYWdlTmFtZSk7XG4gICAgc3dpdGNoIChoYXNoUGFnZU5hbWUpIHtcbiAgICAgIGNhc2UgJ2Fib3V0c3ByaW50JzpcbiAgICAgICAgdGhpcy5hZGRCdXR0b25zQWJvdXRTcHJpbnRHYW1lTGlzdGVuZXJzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICBmaW5kTWVudUVsZW1lbnRzKGhhc2hOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBoYXNoOiBzdHJpbmcgPSBoYXNoTmFtZS5zcGxpdCgnLycpWzBdO1xuICAgIHRoaXMubWVudU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbWFpbicpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudVRleHRib29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3RleHRib29rJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51U3RhdGljdGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19zdGF0aWN0aWNzJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51QXVkaW9jYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2F1ZGlvY2FsbCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudVNwcmludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19zcHJpbnQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVUZWFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3RlYW0nKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBvYmo6IE1lbnVJdGVtcyA9IHtcbiAgICAgIG1haW46IHRoaXMubWVudU1haW4sXG4gICAgICB0ZXh0Ym9vazogdGhpcy5tZW51VGV4dGJvb2ssXG4gICAgICBzdGF0aXN0aWNzOiB0aGlzLm1lbnVTdGF0aWN0aWNzLFxuICAgICAgYXVkaW9jYWxsOiB0aGlzLm1lbnVBdWRpb2NhbGwsXG4gICAgICBzcHJpbnQ6IHRoaXMubWVudVNwcmludCxcbiAgICAgIGFib3V0c3ByaW50OiB0aGlzLm1lbnVTcHJpbnQsXG4gICAgICB0ZWFtOiB0aGlzLm1lbnVUZWFtLFxuICAgIH07XG4gICAgaWYgKHRoaXMubWVudU1haW4pIHtcbiAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5oaWdobGlnaHRBY3RpdmVNZW51SXRlbShvYmosIGhhc2gpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJ1dHRvbnNBYm91dFNwcmludEdhbWVMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy5idXR0b25TdGFydFNwcmludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX3N0YXJ0X19zcHJpbnQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICB0aGlzLnNwcmludExldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwcmludF9fbGV2ZWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMuYnV0dG9uU3RhcnRTcHJpbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zcHJpbnRMZXZlbCkgeyBzcHJpbnRTZXR0aW5ncy5zZXRMZXZlbEZyb21TZWxlY3QodGhpcy5zcHJpbnRMZXZlbC52YWx1ZSk7IH1cbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI3NwcmludCc7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlQ29udHJvbGxlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBNb2R1bGVNb2RlbCB9IGZyb20gJy4uL21vZGVsL21vZGVsU3ByaW50JztcblxuZXhwb3J0IGNsYXNzIE1vZHVsZUNvbnRyb2xsZXIge1xuICBteU1vZHVsZUNvbnRhaW5lciE6IEhUTUxFbGVtZW50O1xuXG4gIG15TW9kdWxlTW9kZWwhOiBNb2R1bGVNb2RlbDtcblxuICBidXR0b25GYWxzZSE6IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gIGJ1dHRvblRydWUhOiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICBzcHJpbnRUaW1lciE6IEhUTUxFbGVtZW50O1xuXG4gIGJ1dHRvblNheVdvcmQhOkhUTUxFbGVtZW50O1xuXG4gIGluaXQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgbW9kZWw6IE1vZHVsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLmZpbmRBdWRpb0VsZW1lbnRzKCk7XG4gICAgdGhpcy5zZXRUaW1lcigpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5oYXNoY2hhbmdlRXZlbnRSZW1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5zZXRCdXR0b25FdmVudExpc3RlbmVycyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKTtcbiAgfVxuXG4gIGhhc2hjaGFuZ2VFdmVudFJlbW92ZSA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2xlYXJJbnRlcnZhbCgpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5zZXRCdXR0b25FdmVudExpc3RlbmVycyk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKTtcbiAgfTtcblxuICBzZXRCdXR0b25FdmVudExpc3RlbmVycyA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICB0aGlzLnNlbGVjdEZhbHNlKCk7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwucHJlcGVhck5leHRXb3JkKCk7XG4gICAgfVxuICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgIHRoaXMuc2VsZWN0VHJ1ZSgpO1xuICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnByZXBlYXJOZXh0V29yZCgpO1xuICAgIH1cbiAgfTtcblxuICBzZXRFdmVudExpc3RlbmVycyA9IChldmVudDpFdmVudCk6dm9pZCA9PiB7XG4gICAgY29uc3QgZWxlbSA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoZWxlbS5jbG9zZXN0KCcuYnV0dG9uX19zcHJpbnRfX2ZhbHNlJykpIHtcbiAgICAgIHRoaXMuc2VsZWN0RmFsc2UoKTtcbiAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5wcmVwZWFyTmV4dFdvcmQoKTtcbiAgICB9IGVsc2UgaWYgKGVsZW0uY2xvc2VzdCgnLmJ1dHRvbl9fc3ByaW50X190cnVlJykpIHtcbiAgICAgIHRoaXMuc2VsZWN0VHJ1ZSgpO1xuICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnByZXBlYXJOZXh0V29yZCgpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5jbG9zZXN0KCcud29yZF9fc291bmQnKSkge1xuICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3ByaW50X19zYXlfX3dvcmQnKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnNheVdvcmQoYXVkaW8pO1xuICAgIH1cbiAgfTtcblxuICBmaW5kQXVkaW9FbGVtZW50cygpOnZvaWQge1xuICAgIGNvbnN0IHJpZ2h0QW5zd2VyQXVkaW8gPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNhdWRpb19fcmlnaHQnKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgIGNvbnN0IHdyb25nQW5zd2VyQXVkaW8gPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNhdWRpb19fd3JvbmcnKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgIGNvbnN0IHRpbWVvdmVyQXVkaW8gPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNhdWRpb19fdGltZW92ZXInKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbC5nZXRBdWRpbyhyaWdodEFuc3dlckF1ZGlvLCB3cm9uZ0Fuc3dlckF1ZGlvLCB0aW1lb3ZlckF1ZGlvKTtcbiAgfVxuXG4gIHNldFRpbWVyKCk6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRUaW1lciA9IHRoaXMubXlNb2R1bGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnNwcmludF9fdGltZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwuc2V0VGltZXIodGhpcy5zcHJpbnRUaW1lcik7XG4gIH1cblxuICBzZWxlY3RUcnVlKCk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLmNoZWNrQW5zd2VyKHRydWUpO1xuICB9XG5cbiAgc2VsZWN0RmFsc2UoKTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2hlY2tBbnN3ZXIoZmFsc2UpO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IElXb3JkIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IFdvcmRzIGZyb20gJy4uL3dvcmRzL3dvcmRzJztcbmltcG9ydCB7IGhhc2hlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGFzaGVzJztcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vYXBpL2FwaSc7XG5cbmV4cG9ydCBjbGFzcyBUZXh0Ym9va0NvbnRyb2xsZXIge1xuICBwYWdlU2VsZWN0b3I6IHN0cmluZztcblxuICB1bml0U2VsZWN0b3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih1bml0U2VsZWN0b3I6IHN0cmluZywgcGFnZVNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVuaXRTZWxlY3RvciA9IHVuaXRTZWxlY3RvcjtcbiAgICB0aGlzLnBhZ2VTZWxlY3RvciA9IHBhZ2VTZWxlY3RvcjtcbiAgfVxuXG4gIGluaXQodW5pdDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZXRFdmVudExpc3RlbmVycyh1bml0KTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKHVuaXQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGNsaWNrOiAoZTogTW91c2VFdmVudCkgPT4gdm9pZCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmICgodGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnModGhpcy51bml0U2VsZWN0b3IpKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgJHtoYXNoZXMudGV4dGJvb2t9LyR7KHRhcmdldCkuZGF0YXNldC51bml0fWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucygnYXVkaW8nKSkge1xuICAgICAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdhdWRpbycpPy5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnBhZ2VTZWxlY3RvcikpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGAke3dpbmRvdy5sb2NhdGlvbi5oYXNofS8keyh0YXJnZXQpLmRhdGFzZXQucGFnZX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodGFyZ2V0KS5pZCA9PT0gJ2dvLWJhY2snKSB7XG4gICAgICAgICAgaWYgKCt3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnLycpWzJdICYmIHVuaXQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYCR7aGFzaGVzLnRleHRib29rfS8ke3VuaXR9YDtcbiAgICAgICAgICB9IGVsc2UgeyB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGAke2hhc2hlcy50ZXh0Ym9va31gOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucygncHJldmlvdXMnKSkge1xuICAgICAgICAgIGNvbnN0IHNwbGl0dGVkSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcvJyk7XG4gICAgICAgICAgbGV0IHBhZ2UgPSArc3BsaXR0ZWRIYXNoWzJdO1xuICAgICAgICAgIGlmIChwYWdlID09PSAxKSByZXR1cm47XG4gICAgICAgICAgcGFnZSAtPSAxO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gW3NwbGl0dGVkSGFzaFswXSwgc3BsaXR0ZWRIYXNoWzFdLCBwYWdlXS5qb2luKCcvJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucygnbmV4dCcpKSB7XG4gICAgICAgICAgY29uc3Qgc3BsaXR0ZWRIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKTtcbiAgICAgICAgICBsZXQgcGFnZSA9ICtzcGxpdHRlZEhhc2hbMl07XG4gICAgICAgICAgY29uc3QgbWF4UGFnZSA9IDMwO1xuICAgICAgICAgIGlmIChwYWdlID09PSBtYXhQYWdlKSByZXR1cm47XG4gICAgICAgICAgcGFnZSArPSAxO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gW3NwbGl0dGVkSGFzaFswXSwgc3BsaXR0ZWRIYXNoWzFdLCBwYWdlXS5qb2luKCcvJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLWRpZmZpY3VsdCcpKSB7XG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FkZGVkJyk7XG4gICAgICAgICAgdGFyZ2V0LmlubmVyVGV4dCA9ICfQodC70L7QttC90L7QtSDRgdC70L7QstC+JztcbiAgICAgICAgICAodGFyZ2V0IGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgY29uc3QgYnRuTGVhcm5lZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5idG4tbGVhcm5lZFtkYXRhLXdvcmQ9XCIke3RhcmdldC5kYXRhc2V0LndvcmR9XCJdYCk7XG4gICAgICAgICAgKGJ0bkxlYXJuZWQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgKGJ0bkxlYXJuZWQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmlubmVyVGV4dCA9ICfQmNC30YPRh9C10L3Qvj8nO1xuICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBhcGkuZ2V0V29yZCh0YXJnZXQuZGF0YXNldC53b3JkIGFzIHN0cmluZylcbiAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIFdvcmRzLmFnZ3JlZ2F0ZWRXb3Jkcy5wdXNoKHJlcyBhcyBJV29yZCk7XG4gICAgICAgICAgICAgICAgV29yZHMubGVhcm5lZFdvcmRzID0gV29yZHMubGVhcm5lZFdvcmRzLmZpbHRlcigod29yZCkgPT4gd29yZC5pZCAhPT0gdGFyZ2V0LmRhdGFzZXQud29yZCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLWxlYXJuZWQnKSkge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhZGRlZCcpO1xuICAgICAgICAgIHRhcmdldC5pbm5lclRleHQgPSAn0JjQt9GD0YfQtdC90L4nO1xuICAgICAgICAgICh0YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBidG5EaWZmaWN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYnRuLWRpZmZpY3VsdFtkYXRhLXdvcmQ9XCIke3RhcmdldC5kYXRhc2V0LndvcmR9XCJdYCk7XG4gICAgICAgICAgKGJ0bkRpZmZpY3VsdCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAoYnRuRGlmZmljdWx0IGFzIEhUTUxCdXR0b25FbGVtZW50KS5pbm5lclRleHQgPSAn0KHQu9C+0LbQvdC+Pyc7XG4gICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IGFwaS5nZXRXb3JkKHRhcmdldC5kYXRhc2V0LndvcmQgYXMgc3RyaW5nKVxuICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgV29yZHMubGVhcm5lZFdvcmRzLnB1c2gocmVzIGFzIElXb3JkKTtcbiAgICAgICAgICAgICAgICBXb3Jkcy5hZ2dyZWdhdGVkV29yZHMgPSBXb3Jkcy5hZ2dyZWdhdGVkV29yZHMuZmlsdGVyKCh3b3JkKSA9PiB3b3JkLmlkICE9PSB0YXJnZXQuZGF0YXNldC53b3JkKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQub25jbGljayA9IGNsaWNrO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXNoYWRvdyAqL1xuXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCB7IGZvcm1Mb2dpbiwgZm9ybVJlZ2lzdHJhdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwnO1xuaW1wb3J0IHNob3dVc2VyIGZyb20gJy4vc2hvdy11c2VyJztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5jbGFzcyBMaXN0ZW5lciB7XG4gIG9wZW4oKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhdXRob3JpemF0aW9uJykpIHtcbiAgICAgICAgY29uc3QgYnRuQ2xvc2VNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2xvc2UnKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG4gICAgICAgIGNvbnN0IG1vZGFsUmVzdWx0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1yZXN1bHQtd3JhcHBlcicpO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICB3cmFwcGVyIS5pbm5lckhUTUwgPSBmb3JtTG9naW47XG4gICAgICAgIG1vZGFsUmVzdWx0V3JhcHBlciEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGNvbnN0IHVzZXJFbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItZW1haWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCB1c2VyUGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLXBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaWYgKHVzZXJFbWFpbElucHV0ICYmIHVzZXJQYXNzd29yZElucHV0KSB7XG4gICAgICAgICAgY29uc3QgYXV0aEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICAgIGlmIChhdXRoRm9ybSkge1xuICAgICAgICAgICAgYXV0aEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGVyckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zaWduaW4tZXJyb3InKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgZXJyRm9ybS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgY29uc3QgdXNlckVtYWlsID0gdXNlckVtYWlsSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICBjb25zdCB1c2VyUGFzc3dvcmQgPSB1c2VyUGFzc3dvcmRJbnB1dCEudmFsdWU7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgYXBpLnVzZXJTaWduSW4odXNlckVtYWlsLCB1c2VyUGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzdG9yYWdlLnVzZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgIHNob3dVc2VyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICBlcnJGb3JtLmlubmVySFRNTCA9ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L3QtSDQvdCw0LnQtNC10L0sINC/0YDQvtCy0LXRgNGM0YLQtSDRgdCy0L7QuCDQtNCw0L3QvdGL0LUg0LjQu9C4INC30LDRgNC10LPQuNGB0YLRgNC40YDRg9C50YLQtdGB0YwnO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidXR0b25OZXdVc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1uZXctdXNlcicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICBpZiAoYnV0dG9uTmV3VXNlcikge1xuICAgICAgICAgIGJ1dHRvbk5ld1VzZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoX2U6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB3cmFwcGVyIS5pbm5lckhUTUwgPSBmb3JtUmVnaXN0cmF0aW9uO1xuICAgICAgICAgICAgY29uc3QgdXNlckVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1lbWFpbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCB1c2VyUGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLXBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1uYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgIGlmICh1c2VyTmFtZUlucHV0ICYmIHVzZXJFbWFpbElucHV0ICYmIHVzZXJQYXNzd29yZElucHV0KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgICAgICAgIGlmIChyZWdpc3RyYXRpb25Gb3JtKSB7XG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGVyckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1yZWctZXJyb3InKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgIGVyckZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyRW1haWwgPSB1c2VyRW1haWxJbnB1dCEudmFsdWU7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGFzc3dvcmQgPSB1c2VyUGFzc3dvcmRJbnB1dCEudmFsdWU7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyTmFtZSA9IHVzZXJOYW1lSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgYXBpLmNyZWF0ZU5ld1VzZXIodXNlck5hbWUsIHVzZXJFbWFpbCwgdXNlclBhc3N3b3JkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgYXBpLnVzZXJTaWduSW4odXNlckVtYWlsLCB1c2VyUGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS51c2VyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1VzZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJGb3JtLmlubmVySFRNTCA9ICfQktC+0LfQvNC+0LbQvdC+INGN0YLQvtGCIGUtbWFpbCDRg9C20LUg0LfQsNC90Y/Rgiwg0L/QvtC/0YDQvtCx0YPQudGC0LUg0LTRgNGD0LPQvtC5JztcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgICBtb2RhbFJlc3VsdFdyYXBwZXIhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH07XG4gICAgICAgIG92ZXJsYXkhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gICAgICAgIGJ0bkNsb3NlTW9kYWwhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnZXhpdF9idG4nKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICAgICAgICBzdG9yYWdlLnVzZXIgPSB7XG4gICAgICAgICAgbWVzc2FnZTogJycsIHRva2VuOiAnJywgcmVmcmVzaFRva2VuOiAnJywgdXNlcklkOiAnJywgbmFtZTogJycsXG4gICAgICAgIH07XG4gICAgICAgIHNob3dVc2VyKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBsaXN0ZW5lciA9IG5ldyBMaXN0ZW5lcigpO1xuZXhwb3J0IGRlZmF1bHQgbGlzdGVuZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93VXNlcihyZXQ6Ym9vbGVhbikgOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGxldCBjbGFzc05hbWUgPSAnYXV0aG9yaXphdGlvbic7XG4gIGxldCBjb250ZXh0ID0gJ9CS0L7QudGC0LgnO1xuICBpZiAoc3RvcmFnZS51c2VyPy50b2tlbiAhPSAnJykge1xuICAgIGNvbnRleHQgPSAn0JLRi9C50YLQuCc7XG4gICAgY2xhc3NOYW1lID0gJ2V4aXRfYnRuJztcbiAgfVxuICBjb25zdCBodG1sID0gYDxkaXYgY2xhc3M9XCJ1c2VyLXNob3dcIj4gJHtzdG9yYWdlLnVzZXI/Lm5hbWV9IDxidXR0b24gY2xhc3M9JHtjbGFzc05hbWV9PiR7Y29udGV4dH08L2J1dHRvbj4gPC9kaXY+YDtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hdXRoJykgYXMgSFRNTEVsZW1lbnQ7XG4gIGlmIChyZXQpIHtcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuICBoZWFkZXIuaW5uZXJIVE1MID0gaHRtbDtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuaW1wb3J0IHsgSVNldHRpbmdzLCBJVXNlciwgSVVzZXJEYXRhLCBJVXNlcldvcmRzLCBJV29yZCB9IGZyb20gJ3R5cGVzL3R5cGVzJztcblxuY2xhc3MgU3RvcmFnZSB7XG4gIHVzZXI/OiBJVXNlckRhdGE7XG5cbiAgd29yZD86IElXb3JkO1xuXG4gIHdvcmRzPzogSVdvcmRbXTtcblxuICBsZXZlbD86IG51bWJlcjtcblxuICB1c2VyV29yZD86IElVc2VyV29yZHM7XG5cbiAgc2V0dGluZ3M/OiBJU2V0dGluZ3M7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcbiAgICAgIHRoaXMudXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSBhcyBzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVzZXIgPSB7XG4gICAgICAgIG1lc3NhZ2U6ICcnLCB0b2tlbjogJycsIHJlZnJlc2hUb2tlbjogJycsIHVzZXJJZDogJycsIG5hbWU6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3b3JkJykpIHtcbiAgICAgIHRoaXMud29yZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dvcmQnKSBhcyBzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndvcmQgPSB7XG4gICAgICAgIGlkOiAnJywgZ3JvdXA6IDAsIHBhZ2U6IDAsIHdvcmQ6ICcnLCBpbWFnZTogJycsIGF1ZGlvOiAnJywgYXVkaW9NZWFuaW5nOiAnJywgYXVkaW9FeGFtcGxlOiAnJywgdGV4dE1lYW5pbmc6ICcnLCB0ZXh0RXhhbXBsZTogJycsIHRyYW5zY3JpcHRpb246ICcnLCB3b3JkVHJhbnNsYXRlOiAnJywgdGV4dE1lYW5pbmdUcmFuc2xhdGU6ICcnLCB0ZXh0RXhhbXBsZVRyYW5zbGF0ZTogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dvcmRzJykpIHtcbiAgICAgIHRoaXMud29yZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3b3JkcycpIGFzIHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud29yZHMgPSBbXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQtbWVtYmVyICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNhc3MnO1xuXG5pbXBvcnQgTW9kdWxlQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvY29udHJvbGxlcic7XG5pbXBvcnQgTW9kdWxlTW9kZWwgZnJvbSAnLi9tb2RlbC9tb2RlbCc7XG5pbXBvcnQgTW9kdWxlVmlldyBmcm9tICcuL3ZpZXcvdmlldyc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMsIFJvdXRlcywgSW5pdGlhbE9iaiB9IGZyb20gJy4vdHlwZXMvdHlwZXMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyJztcblxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vcGFnZXMvbWFpbic7XG5cbmltcG9ydCBUZXh0Ym9va1BhZ2UgZnJvbSAnLi9wYWdlcy90ZXh0Ym9vayc7XG5pbXBvcnQgQWJvdXRUZWFtUGFnZSBmcm9tICcuL3BhZ2VzL3RlYW0nO1xuaW1wb3J0IFNwcmludEdhbWVQYWdlIGZyb20gJy4vcGFnZXMvc3ByaW50L2luZGV4JztcbmltcG9ydCBBYm91dFNwcmludEdhbWVQYWdlIGZyb20gJy4vcGFnZXMvYWJvdXRzcHJpbnQnO1xuaW1wb3J0IEF1ZGlvY2FsbEdhbWVQYWdlIGZyb20gJy4vcGFnZXMvYXVkaW9jYWxsL2luZGV4JztcbmltcG9ydCBTdGF0aXN0aWNzUGFnZSBmcm9tICcuL3BhZ2VzL3N0YXRpc3RpY3MvaW5kZXgnO1xuaW1wb3J0IHsgQXVkaW9jYWxsR2FtZSB9IGZyb20gJy4vcGFnZXMvYXVkaW9jYWxsL21haW4nO1xuXG5jb25zdCBjb21wb25lbnRzOiBDb21wb25lbnRzID0ge1xuICBoZWFkZXI6IEhlYWRlcixcbiAgY29udGVudDogQ29udGVudCxcbiAgZm9vdGVyOiBGb290ZXIsXG59O1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IHtcbiAgbWFpbjogTWFpblBhZ2UsXG4gIGRlZmF1bHQ6IE1haW5QYWdlLFxuICB0ZXh0Ym9vazogVGV4dGJvb2tQYWdlLFxuICB0ZWFtOiBBYm91dFRlYW1QYWdlLFxuICBzcHJpbnQ6IFNwcmludEdhbWVQYWdlLFxuICBhYm91dHNwcmludDogQWJvdXRTcHJpbnRHYW1lUGFnZSxcbiAgYXVkaW9jYWxsOiBBdWRpb2NhbGxHYW1lUGFnZSxcbiAgYXVkaW9jYWxsZ2FtZTogQXVkaW9jYWxsR2FtZSxcbiAgc3RhdGlzdGljczogU3RhdGlzdGljc1BhZ2UsXG59O1xuXG5jb25zdCBpbml0aWFsT2JqOiBJbml0aWFsT2JqID0ge1xuICBjb250YWluZXI6ICdzcGEnLFxuICByb3V0ZXMsXG4gIGNvbXBvbmVudHMsXG59O1xuXG4vKiAtLS0tLSBzcGEgaW5pdCBtb2R1bGUgLS0tICovXG5jb25zdCBteVNQQSA9ICgoKSA9PiB7XG4gIGxldCB2aWV3OiBNb2R1bGVWaWV3O1xuICBsZXQgbW9kZWw6IE1vZHVsZU1vZGVsO1xuICBsZXQgY29udHJvbGxlcjogTW9kdWxlQ29udHJvbGxlcjtcbiAgcmV0dXJuIHtcbiAgICBpbml0KG9iajogSW5pdGlhbE9iaikge1xuICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnRzKG9iai5jb250YWluZXIsIG9iai5jb21wb25lbnRzKTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lclNQQSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9iai5jb250YWluZXIpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgdmlldyA9IG5ldyBNb2R1bGVWaWV3KCk7XG4gICAgICBtb2RlbCA9IG5ldyBNb2R1bGVNb2RlbCgpO1xuICAgICAgY29udHJvbGxlciA9IG5ldyBNb2R1bGVDb250cm9sbGVyKCk7XG5cbiAgICAgIHZpZXcuaW5pdChjb250YWluZXJTUEEsIHJvdXRlcyk7XG4gICAgICBtb2RlbC5pbml0KHZpZXcpO1xuICAgICAgY29udHJvbGxlci5pbml0KGNvbnRhaW5lclNQQSwgbW9kZWwpO1xuICAgIH0sXG5cbiAgICByZW5kZXJDb21wb25lbnRzKGNvbnRhaW5lcjogc3RyaW5nLCBjb21wb25lbnRzT2JqOiBDb21wb25lbnRzKSB7XG4gICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVyKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IGNvbXBvbmVudHNMaXN0ID0gT2JqZWN0LmtleXMoY29tcG9uZW50c09iaik7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb21wb25lbnRzTGlzdCkge1xuICAgICAgICByb290LmlubmVySFRNTCArPSBjb21wb25lbnRzT2JqW2l0ZW0gYXMga2V5b2YgQ29tcG9uZW50c10ucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn0pKCk7XG5cbi8qIC0tLS0tLSBlbmQgYXBwIG1vZHVsZSAtLS0tLSAqL1xuXG4vKiogKiAtLS0gaW5pdCBtb2R1bGUgLS0tICoqICovXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbXlTUEEuaW5pdChpbml0aWFsT2JqKTtcbn0pO1xuIiwiaW1wb3J0IE1vZGVsVmlldyBmcm9tICcuLi92aWV3L3ZpZXcnO1xuaW1wb3J0IHsgTWVudUl0ZW1zIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuXG5jbGFzcyBNb2R1bGVNb2RlbCB7XG4gIG15TW9kdWxlVmlldyE6IE1vZGVsVmlldztcblxuICBpbml0KHZpZXc6IE1vZGVsVmlldyk6IHZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVWaWV3ID0gdmlldztcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKHBhZ2VOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJDb250ZW50KHBhZ2VOYW1lKTtcbiAgfVxuXG4gIGhpZ2hsaWdodEFjdGl2ZU1lbnVJdGVtKG9iajogTWVudUl0ZW1zLCBoYXNoTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcuaGlnaGxpZ2h0QWN0aXZlTWVudUl0ZW0ob2JqLCBoYXNoTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlTW9kZWw7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cblxuaW1wb3J0IHsgTW9kdWxlVmlldyB9IGZyb20gJy4uL3ZpZXcvdmlld1NwcmludCc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCB7IGFwaVBhdGggfSBmcm9tICcuLi9hcGkvYXBpLXBhdGgnO1xuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyByYW5kb21JbnRlZ2VyIH0gZnJvbSAnLi4vdXRpbHMvZnVuYyc7XG5pbXBvcnQgeyBzcHJpbnRTZXR0aW5ncyB9IGZyb20gJy4uL3BhZ2VzL3NwcmludC9zcHJpbnRTZXR0aW5ncyc7XG5cbmV4cG9ydCBjbGFzcyBNb2R1bGVNb2RlbCB7XG4gIG15TW9kdWxlVmlldyE6IE1vZHVsZVZpZXc7XG5cbiAgbGV2ZWw6IG51bWJlciA9IHNwcmludFNldHRpbmdzLnNwcmludExldmVsO1xuXG4gIHBhZ2VzITogbnVtYmVyW107XG5cbiAgYWN0aXZlMjBXb3JkcyAhOiBJV29yZFtdO1xuXG4gIGFjdGl2ZVdvcmROdW1iZXIgPSAwO1xuXG4gIGFjdGl2ZVBhZ2VOdW1iZXIgPSBzcHJpbnRTZXR0aW5ncy5zcHJpbnRQYWdlO1xuXG4gIHJhbmRvbVRyYW5zbGF0aW9uTnVtYmVyICE6IG51bWJlcjtcblxuICBhdWRpb1JpZ2h0ICE6IEhUTUxBdWRpb0VsZW1lbnQ7XG5cbiAgdGltZXIhOm51bWJlcjtcblxuICB0aW1lcklkICE6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPjtcblxuICBzY29yZSA9IDA7XG5cbiAgc2NvcmVGb3JSaWdodEFuc3dlciA9IDEwO1xuXG4gIG1heFNjb3JlRm9yUmlnaHRBbnN3ZXIgPSA4MDtcblxuICBhbW91bnRPZlJpZ2h0QW5zd2Vyc0ZvckJpZ2dlclNjb3JlID0gMztcblxuICBhcnJheU9mUXVlc3Rpb246IHN0cmluZ1tdID0gW107XG5cbiAgYXJyYXlPZkFuc3dlcnM6IGJvb2xlYW5bXSA9IFtdO1xuXG4gIGFtb3VudE9mUmlnaHRBbnN3ZXJzID0gMDtcblxuICByaWdodEFuc3dlckF1ZGlvICE6IEhUTUxBdWRpb0VsZW1lbnQ7XG5cbiAgd3JvbmdBbnN3ZXJBdWRpbyE6IEhUTUxBdWRpb0VsZW1lbnQ7XG5cbiAgdGltZW92ZXJBdWRpbyE6SFRNTEF1ZGlvRWxlbWVudDtcblxuICBpbml0KHZpZXc6IE1vZHVsZVZpZXcpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVWaWV3ID0gdmlldztcbiAgICB0aGlzLmZpbGxBbmRTb3J0UGFnZXMoKTtcbiAgICB0aGlzLmdldFdvcmRzRnJvbUFwaSgpO1xuICB9XG5cbiAgc2F5V29yZChhdWRpbzpIVE1MQXVkaW9FbGVtZW50KTp2b2lkIHtcbiAgICBhdWRpby5zcmMgPSBgJHthcGlQYXRoICsgdGhpcy5hY3RpdmUyMFdvcmRzW3RoaXMuYWN0aXZlV29yZE51bWJlcl0uYXVkaW99YDtcbiAgICBhdWRpby5wbGF5KCk7XG4gIH1cblxuICBmaWxsQW5kU29ydFBhZ2VzKCk6dm9pZCB7XG4gICAgdGhpcy5wYWdlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgdGhpcy5wYWdlcy5wdXNoKGkpO1xuICAgIH1cbiAgICBpZiAoIXNwcmludFNldHRpbmdzLnNwcmludEZyb21UZXh0Ym9vaykgeyB0aGlzLnBhZ2VzLnNvcnQoKCkgPT4gMC41IC0gTWF0aC5yYW5kb20oKSk7IH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBhZ2VzKTtcbiAgfVxuXG4gIGFzeW5jIGdldFdvcmRzRnJvbUFwaSgpOiBQcm9taXNlPElXb3JkW10gfCB2b2lkPiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldFdvcmRzKHRoaXMubGV2ZWwsIHRoaXMucGFnZXNbdGhpcy5hY3RpdmVQYWdlTnVtYmVyXSkgYXMgSVdvcmRbXTtcbiAgICB0aGlzLmFjdGl2ZTIwV29yZHMgPSBBcnJheS5mcm9tKHJlcyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hY3RpdmUyMFdvcmRzKTtcbiAgICBpZiAodGhpcy5hY3RpdmVQYWdlTnVtYmVyID09PSAwIHx8IHNwcmludFNldHRpbmdzLnNwcmludEZyb21UZXh0Ym9vaykgeyB0aGlzLnByZXBlYXJGaXJzdFdvcmQoKTsgfVxuICB9XG5cbiAgcHJlcGVhckZpcnN0V29yZCgpOnZvaWQge1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdGhpcy5nZW5lcmF0ZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgeyB3b3JkIH0gPSB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5hY3RpdmVXb3JkTnVtYmVyXTtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJXb3JkKHdvcmQsIHRyYW5zbGF0aW9uKTtcbiAgfVxuXG4gIHByZXBlYXJOZXh0V29yZCgpOnZvaWQge1xuICAgIChzcHJpbnRTZXR0aW5ncy5zcHJpbnRGcm9tVGV4dGJvb2spID8gdGhpcy5jaGVja1dvcmRzTnVtYmVyc0Zyb21UZXh0Ym9vaygpIDogdGhpcy5jaGVja1dvcmRzTnVtYmVycygpO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdGhpcy5nZW5lcmF0ZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgeyB3b3JkIH0gPSB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5hY3RpdmVXb3JkTnVtYmVyXTtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJXb3JkKHdvcmQsIHRyYW5zbGF0aW9uKTtcbiAgICB0aGlzLmFycmF5T2ZRdWVzdGlvbi5wdXNoKHdvcmQpO1xuICB9XG5cbiAgY2hlY2tXb3Jkc051bWJlcnMoKTp2b2lkIHtcbiAgICBpZiAodGhpcy5hY3RpdmVXb3JkTnVtYmVyID09PSAxOSkge1xuICAgICAgdGhpcy5hY3RpdmVQYWdlTnVtYmVyICs9IDE7XG4gICAgICB0aGlzLmFjdGl2ZVdvcmROdW1iZXIgPSAwO1xuICAgICAgdGhpcy5nZXRXb3Jkc0Zyb21BcGkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVXb3JkTnVtYmVyICs9IDE7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tXb3Jkc051bWJlcnNGcm9tVGV4dGJvb2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlV29yZE51bWJlciA9PT0gMTkpIHtcbiAgICAgIHRoaXMuYWN0aXZlUGFnZU51bWJlciAtPSAxO1xuICAgICAgaWYgKHRoaXMuYWN0aXZlUGFnZU51bWJlciA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmFjdGl2ZVdvcmROdW1iZXIgPSAwO1xuICAgICAgdGhpcy5nZXRXb3Jkc0Zyb21BcGkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVXb3JkTnVtYmVyICs9IDE7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVUcmFuc2xhdGlvbigpOnN0cmluZyB7XG4gICAgY29uc3QgbWluID0gKHRoaXMuYWN0aXZlV29yZE51bWJlciA+PSAyKSA/IHRoaXMuYWN0aXZlV29yZE51bWJlciAtIDIgOiAwO1xuICAgIGNvbnN0IG1heCA9ICh0aGlzLmFjdGl2ZVdvcmROdW1iZXIgKyAyIDw9IDE5KSA/IHRoaXMuYWN0aXZlV29yZE51bWJlciArIDIgOiAxOTtcbiAgICB0aGlzLnJhbmRvbVRyYW5zbGF0aW9uTnVtYmVyID0gcmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLnJhbmRvbVRyYW5zbGF0aW9uTnVtYmVyXS53b3JkVHJhbnNsYXRlO1xuICB9XG5cbiAgY2hlY2tBbnN3ZXIoYW5zd2VyOmJvb2xlYW4pOnZvaWQge1xuICAgIGNvbnN0IHRyYW5zbGF0ZTpzdHJpbmcgPSB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5hY3RpdmVXb3JkTnVtYmVyXS53b3JkVHJhbnNsYXRlO1xuICAgIGNvbnN0IHJpZ2h0VHJhbnNsYXRlOnN0cmluZyA9IHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLnJhbmRvbVRyYW5zbGF0aW9uTnVtYmVyXS53b3JkVHJhbnNsYXRlO1xuICAgIGlmICgodHJhbnNsYXRlID09PSByaWdodFRyYW5zbGF0ZSkgPT09IGFuc3dlcikge1xuICAgICAgdGhpcy5yaWdodEFuc3dlckF1ZGlvLnBsYXkoKTtcbiAgICAgIHRoaXMuYXJyYXlPZkFuc3dlcnMucHVzaCh0cnVlKTtcbiAgICAgIHRoaXMuYW5hbHl6ZVRydWVBbnN3ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53cm9uZ0Fuc3dlckF1ZGlvLnBsYXkoKTtcbiAgICAgIHRoaXMuYXJyYXlPZkFuc3dlcnMucHVzaChmYWxzZSk7XG4gICAgICB0aGlzLmFuYWx5emVGYWxzZUFuc3dlcigpO1xuICAgIH1cbiAgfVxuXG4gIHNldFRpbWVyID0gKHRpbWVyRWxlbTogSFRNTEVsZW1lbnQpOnZvaWQgPT4ge1xuICAgIHRoaXMudGltZXIgPSBOdW1iZXIodGltZXJFbGVtLnRleHRDb250ZW50KTtcblxuICAgIGNvbnN0IHRpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRpbWVyIC09IDE7XG4gICAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJUaW1lcih0aGlzLnRpbWVyLCB0aW1lckVsZW0pO1xuICAgICAgaWYgKHRoaXMudGltZXIgPT09IDApIHtcbiAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRpbWVyID09PSA1KSB7XG4gICAgICAgIHRoaXMudGltZW92ZXJBdWRpby5wbGF5KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnRpbWVySWQgPSBzZXRJbnRlcnZhbCh0aWNrLCAxMDAwKTtcbiAgfTtcblxuICBjbGVhckludGVydmFsID0gKCk6dm9pZCA9PiB7XG4gICAgaWYgKHRoaXMudGltZXJJZCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xuICAgIH1cbiAgfTtcblxuICBjb3VudFNjb3JlKCk6dm9pZCB7XG4gICAgdGhpcy5zY29yZSArPSB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXI7XG4gICAgaWYgKHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciA9PT0gdGhpcy5tYXhTY29yZUZvclJpZ2h0QW5zd2VyKSB7XG4gICAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJTY29yZShTdHJpbmcodGhpcy5zY29yZSksIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJTY29yZShTdHJpbmcodGhpcy5zY29yZSkpO1xuICAgIH1cbiAgfVxuXG4gIGFuYWx5emVGYWxzZUFuc3dlcigpOnZvaWQge1xuICAgIHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnMgPSAwO1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LmNsZWFyU3ByaW50Q291bnQoKTtcbiAgICB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgPSAxMDtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJDb3VudFRleHQodGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyKTtcbiAgfVxuXG4gIGFuYWx5emVUcnVlQW5zd2VyKCk6dm9pZCB7XG4gICAgdGhpcy5hbW91bnRPZlJpZ2h0QW5zd2VycyArPSAxO1xuICAgIHRoaXMuY291bnRTY29yZSgpO1xuICAgIGlmICh0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzID09PSB0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzRm9yQmlnZ2VyU2NvcmUgJiYgdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyICE9PSB0aGlzLm1heFNjb3JlRm9yUmlnaHRBbnN3ZXIpIHtcbiAgICAgIHRoaXMuZ2V0QmlnZ2VyU2NvcmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnMgPT09ICh0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzRm9yQmlnZ2VyU2NvcmUgKyAxKSAmJiB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgIT09IHRoaXMubWF4U2NvcmVGb3JSaWdodEFuc3dlcikge1xuICAgICAgdGhpcy5teU1vZHVsZVZpZXcucmV0dXJuVG9PbmVTcHJpbnRDb3VudCgpO1xuICAgICAgdGhpcy5hbW91bnRPZlJpZ2h0QW5zd2VycyA9IDE7XG4gICAgfVxuICB9XG5cbiAgZ2V0QmlnZ2VyU2NvcmUoKTp2b2lkIHtcbiAgICB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgPSAodGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyID09PSB0aGlzLm1heFNjb3JlRm9yUmlnaHRBbnN3ZXIpID8gdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyIDogdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyICo9IDI7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyQ291bnRUZXh0KHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlcik7XG4gIH1cblxuICBzdG9wR2FtZSgpOnZvaWQge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcbiAgICBsZXQgcmlnaHRBbnN3ZXJzID0gMDtcbiAgICBsZXQgd3JvbmdBbnN3ZXJzID0gMDtcbiAgICB0aGlzLmFycmF5T2ZBbnN3ZXJzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHJpZ2h0QW5zd2VycyArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3JvbmdBbnN3ZXJzICs9IDE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyUmVzdWx0cyh0aGlzLmFycmF5T2ZRdWVzdGlvbiwgdGhpcy5hcnJheU9mQW5zd2VycywgcmlnaHRBbnN3ZXJzLCB3cm9uZ0Fuc3dlcnMsIHRoaXMuc2NvcmUpO1xuICB9XG5cbiAgZ2V0QXVkaW8ocmlnaHRBbnN3ZXI6SFRNTEF1ZGlvRWxlbWVudCwgd3JvbmdBbnN3ZXI6SFRNTEF1ZGlvRWxlbWVudCwgdGltZW92ZXI6SFRNTEF1ZGlvRWxlbWVudCk6dm9pZCB7XG4gICAgdGhpcy5yaWdodEFuc3dlckF1ZGlvID0gcmlnaHRBbnN3ZXI7XG4gICAgdGhpcy53cm9uZ0Fuc3dlckF1ZGlvID0gd3JvbmdBbnN3ZXI7XG4gICAgdGhpcy50aW1lb3ZlckF1ZGlvID0gdGltZW92ZXI7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgTW9kdWxlTW9kZWw7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IHsgQnV0dG9ucyB9IGZyb20gJy4uL2NvbXBvbmVudHMvc21hbGxDb21wb25lbnRzL2J1dHRvbnMnO1xuaW1wb3J0IHsgc3ByaW50U2V0dGluZ3MgfSBmcm9tICcuL3NwcmludC9zcHJpbnRTZXR0aW5ncyc7XG5cbmNvbnN0IEFib3V0U3ByaW50R2FtZVBhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ2Fib3V0c3ByaW50JyxcbiAgcmVuZGVyTGV2ZWxzKCk6c3RyaW5nIHtcbiAgICByZXR1cm4gYDxwPtCS0YvQsdC10YDQuCDRg9GA0L7QstC10L3RjCDRgdC70L7QttC90L7RgdGC0Lg8L3A+XG4gICAgPHNlbGVjdCBjbGFzcz1cInNwcmludF9fbGV2ZWxcIj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJsZXZlbDBcIj7Qo9GA0L7QstC10L3RjCAxPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibGV2ZWwxXCI+0KPRgNC+0LLQtdC90YwgMjwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImxldmVsMlwiPtCj0YDQvtCy0LXQvdGMIDM8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJsZXZlbDNcIj7Qo9GA0L7QstC10L3RjCA0PC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibGV2ZWw0XCI+0KPRgNC+0LLQtdC90YwgNTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImxldmVsNVwiPtCj0YDQvtCy0LXQvdGMIDY8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5gO1xuICB9LFxuICByZW5kZXJJbnN0cnVjdGlvbnMoKTpzdHJpbmcge1xuICAgIHJldHVybiBgPHAgY2xhc3M9XCJzcHJpbnRfX3RleHRcIj7QmNCz0YDQsCDQodC/0YDQuNC90YIg0L/QvtC80L7QttC10YIg0YLQtdCx0LUg0L/RgNC+0LLQtdGA0LjRgtGMINC60LDQuiDRhdC+0YDQvtGI0L4g0YLRiyDQt9C90LDQtdGI0Ywg0YHQu9C+0LLQsC48YnI+XG4gICAg0JjQs9GA0LAg0LTQu9C40YLRgdGPIDEg0LzQuNC90YPRgtGDINC40LvQuCDQv9C+0LrQsCDQvdC1INC30LDQutC+0L3Rh9Cw0YLRjNGB0Y8g0YHQu9C+0LLQsC48YnI+XG4gICAg0KfRgtC+0LHRiyDQtNCw0YLRjCDQvtGC0LLQtdGCLCDQutC70LjQutCw0Lkg0L/QviDQvdC10LzRgyDQvNGL0YjQutC+0Lkg0LjQu9C4INC90LDQttC40LzQsNC5INC60LvQsNCy0LjRiNC4LdGB0YLRgNC10LvQutC4LjwvcD5gO1xuICB9LFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz5cbiAgICAgIDxoMiBjbGFzcz0nc3ByaW50X190aXRsZSc+0KHQv9GA0LjQvdGCPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnRfX3J1bGVzXCI+XG4gICAgICAgICR7dGhpcy5yZW5kZXJJbnN0cnVjdGlvbnMoKX1cbiAgICAgICAgJHsoc3ByaW50U2V0dGluZ3MucHJldmlvdXNIYXNoTmFtZUFycmF5KCkubGVuZ3RoICE9PSAzKSA/IHRoaXMucmVuZGVyTGV2ZWxzKCkgOiAnJ31cbiAgICAgICAgJHtCdXR0b25zLmNyZWF0ZSgn0J3QsNGH0LDRgtGMJywgJ2J1dHRvbl9fc3RhcnRfX3NwcmludCcsIGZhbHNlKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dFNwcmludEdhbWVQYWdlO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7IHN0YXJ0U2NyaW5BdWRpb0NhbGwgfSBmcm9tICcuL3N0YXJ0LWF1ZGlvY2FsbCc7XG5cbmNvbnN0IEF1ZGlvY2FsbEdhbWVQYWdlID0ge1xuICBjbGFzc25hbWU6ICdhdWRpb2NhbGwnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgICA8ZGl2IGNsYXNzID0gJ2F1ZGlvLWNvbnRhaW5lciAke3RoaXMuY2xhc3NuYW1lfS1jb250ZWluZXInPiAke3N0YXJ0U2NyaW5BdWRpb0NhbGwucmVuZGVyKCl9PC9kaXY+O1xuICAgICAgJHtGb290ZXIucmVuZGVyKCl9XG4gICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdWRpb2NhbGxHYW1lUGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgeyBnYW1lQXJlYSB9IGZyb20gJy4vdXRpbHMvZ2FtZS1yZW5kZXInO1xuXG5jb25zdCBBdWRpb2NhbGxHYW1lID0ge1xuICAvLyBoYXNoZXM6IHtcblxuICAvLyAgIG1haW46ICcjbWFpbicsXG5cbiAgLy8gfSxcblxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICAgIDxkaXYgY2xhc3MgPSAnY29udGFpbmVyJz4gXG4gICAgICAgPGEgY2xhc3M9XCJnby1tYWluIFwiIGhyZWY9JyNtYWluJyA+0JLQtdGA0L3Rg9GC0YzRgdGPIDxicj4g0L3QsCDQs9C70LDQstC90YPRjjwvYT4gXG4gICAgICAgICA8ZGl2IGNsYXNzID0gJ2dhbWUnPiAke2dhbWVBcmVhfSA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgeyBBdWRpb2NhbGxHYW1lIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmV4cG9ydCBjb25zdCBzdGFydFNjcmluQXVkaW9DYWxsID0ge1xuICBoYXNoZXM6IHtcblxuICAgIGF1ZGlvY2FsbEdhbWU6ICcjYXVkaW9jYWxsR2FtZScsXG5cbiAgfSxcblxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGV4dGJvb2snKSA9PT0gJ3RydWUnKSB7XG4gICAgICBodG1sID0gLyogaHRtbCAqL2AgXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdWRpby1jYWxsXCI+IFxuICAgICAgICA8cCBjbGFzcz1cImF1ZGlvLWNhbGxfX3RleHRcIj7QkiDQuNCz0YDQtSDQsNGD0LTQuNC+0LLRi9C30L7QsiDQstCw0LzQvdGD0LbQvdC+INCy0YvQsdGA0LDRgtGMINC/0YDQsNCy0LjQu9GM0L3Ri9C5INC/0LXRgNC10LLQvtC0INGB0LvQvtCy0LAuIDxicj5cbiAgICAgIFxuICAgICAgICDQp9GC0L7QsdGLINC40LPRgNCw0YLRjCDRgSDQv9C+0LzQvtGJ0YzRjiDQutC70LDQstC40LDRgtGD0YDRiywg0LjRgdC/0L7Qu9GM0LfRg9C5INC60LvQsNCy0LjRiNC4XG4gICAgICAgIDEsIDIsIDMsIDQsIDUgINGH0YLQvtCx0Ysg0LTQsNGC0Ywg0L7RgtCy0LXRgixcbiAgICAgICAgc3BhY2UgLSDQtNC70Y8g0LLQvtGB0L/RgNC+0LjQt9Cy0LXQtNC10L3QuNGPINC30LLRg9C60LAuXG4gICAgICAgIDwvcD5cbiAgICAgICA8YSBpZD1cImxldmVsdGV4dGJvb2tcIiBjbGFzcz1cImJ0bi1sZXZlbCBsaW5rXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0JjQs9GA0LDRgtGMPC9hPlxuICAgPlxuICAgICAgYDtcbiAgICB9IGVsc2Uge1xuICAgICAgaHRtbCA9IC8qIGh0bWwgKi9gIFxuXG48ZGl2IGNsYXNzPVwiYXVkaW8tY2FsbFwiPiBcbiAgPHAgY2xhc3M9XCJhdWRpby1jYWxsX190ZXh0XCI+0JIg0LjQs9GA0LUg0LDRg9C00LjQvtCy0YvQt9C+0LIg0LLQsNC80L3Rg9C20L3QviDQstGL0LHRgNCw0YLRjCDQv9GA0LDQstC40LvRjNC90YvQuSDQv9C10YDQtdCy0L7QtCDRgdC70L7QstCwLiA8YnI+XG5cbiAg0KfRgtC+0LHRiyDQuNCz0YDQsNGC0Ywg0YEg0L/QvtC80L7RidGM0Y4g0LrQu9Cw0LLQuNCw0YLRg9GA0YssINC40YHQv9C+0LvRjNC30YPQuSDQutC70LDQstC40YjQuFxuICAxLCAyLCAzLCA0LCA1ICDRh9GC0L7QsdGLINC00LDRgtGMINC+0YLQstC10YIsXG4gIHNwYWNlIC0g0LTQu9GPINCy0L7RgdC/0YDQvtC40LfQstC10LTQtdC90LjRjyDQt9Cy0YPQutCwLlxuICA8YnI+IDxicj5cbiAg0JLRi9Cx0LXRgNC4INGD0YDQvtCy0LXQvdGMINGB0LvQvtC20L3QvtGB0YLQuDo8L3A+XG4gPGEgaWQ9XCJsZXZlbDFcIiBjbGFzcz1cImJ0bi1sZXZlbCBsaW5rXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgMTwvYT5cbiBcbiA8YSBpZD1cImxldmVsMlwiIGNsYXNzPVwiYnRuLWxldmVsIGxpbmtcIiBocmVmPVwiJHt0aGlzLmhhc2hlcy5hdWRpb2NhbGxHYW1lfVwiID7Qo9GA0L7QstC10L3RjCAyPC9hPlxuXG4gPGEgaWQ9XCJsZXZlbDNcIiBjbGFzcz1cImJ0bi1sZXZlbCBsaW5rXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgMzwvYT5cblxuIDxhIGlkPVwibGV2ZWw0XCIgY2xhc3M9XCJidG4tbGV2ZWwgbGlua1wiIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbEdhbWV9XCIgPtCj0YDQvtCy0LXQvdGMIDQ8L2E+XG5cbiA8YSBpZD1cImxldmVsNVwiIGNsYXNzPVwiYnRuLWxldmVsIGxpbmtcIiBocmVmPVwiJHt0aGlzLmhhc2hlcy5hdWRpb2NhbGxHYW1lfVwiID7Qo9GA0L7QstC10L3RjCA1PC9hPlxuXG4gPGEgaWQ9XCJsZXZlbDZcIiBjbGFzcz1cImJ0bi1sZXZlbCBsaW5rXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgNjwvYT5cbmA7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5cbmltcG9ydCB7IGFwaVBhdGggfSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpLXBhdGgnO1xuLy8gaW1wb3J0IHsgcHJpbnRCdG5TdHJpbmcsIHdvcmRPYmogfSBmcm9tICcuL3N1cHBvcnRpbmctZnVuYyc7XG5pbXBvcnQgeyBzdXBwb3J0IH0gZnJvbSAnLi90JztcblxuZXhwb3J0IGNvbnN0IGdhbWVBcmVhID0gYCBcbiA8ZGl2IGNsYXNzPVwiYXVkaW8tY29udGFpbmVyLWdhbWVcIj4gXG4gICAgPGRpdiBjbGFzcz1cImJ0bi1zb3VuZFwiPjxkaXYgY2xhc3M9XCJzb3VuZC13cmFwcGVyXCI+IFxuICAgIDxhdWRpbyBjbGFzcz1cImF1ZGlvXCIgc3JjPVwiJHthcGlQYXRoICsgc3VwcG9ydC53b3JkT2JqLmF1ZGlvfVwiIGF1dG9wbGF5PjwvYXVkaW8+IDwvZGl2PjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyaWdodC1hbnN3ZXJcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPiAke3N1cHBvcnQucHJpbnRCdG5TdHJpbmcoKX08L2Rpdj5cbiAgPC9kaXY+XG4gYDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5cbmltcG9ydCB7IGFwaVBhdGggfSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpLXBhdGgnO1xuLy8gaW1wb3J0IHtcbi8vICAgY2xlYXJMb2NhbFN0b3JhZ2UsIHNvdW5kQXVkaW8sIHdvcmRPYmosIHN0b3JhZ2VBdWRpb2NhbGwsXG4vLyB9IGZyb20gJy4vc3VwcG9ydGluZy1mdW5jJztcbmltcG9ydCBhdWRpb1BhdGhXcm9uZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvYXVkaW8vd3JvbmctYW5zd2VyLm1wMyc7XG5pbXBvcnQgYXVkaW9QYXRoUmlnaHQgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2F1ZGlvL3JpZ2h0LWFuc3dlci5tcDMnO1xuaW1wb3J0IHsgc291bmRBdWRpbywgc3VwcG9ydCB9IGZyb20gJy4vdCc7XG5cbnN1cHBvcnQuZ2V0V29yZHMoKTtcbmNvbnNvbGUubG9nKHN1cHBvcnQud29yZHMsICdzdXBwb3J0LndvcmRzINCyINC70LjRgdGC0L3QtdGA0LUnKTtcblxuY2xhc3MgTGlzdGVuZXJBdWRpb0NhbGwge1xuICBrZXlib2FyZCgpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gJyAnKSB7XG4gICAgICAgIHNvdW5kQXVkaW8oKGFwaVBhdGggKyBzdXBwb3J0LndvcmRPYmouYXVkaW8pKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGFOID0gTnVtYmVyKGUua2V5KTtcbiAgICAgIGlmIChlLmtleSA9PT0gYE51bXBhZCAke2RhdGFOfWAgfHwgZS5rZXkgPT09IGAke2RhdGFOfWApIHtcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5idG4tdHJhbnNsYXRpb25bZGF0YS1udW09XCIke2RhdGFOfVwiXWApKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgKGVsZW0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xpaygpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1zb3VuZCcpKSB7XG4gICAgICAgIHNvdW5kQXVkaW8oKGFwaVBhdGggKyBzdXBwb3J0LndvcmRPYmouYXVkaW8pKTtcbiAgICAgIH1cblxuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdHJhbnNsYXRpb24nKSkge1xuICAgICAgICBpZiAoc3VwcG9ydC5yb3VuZCEpIHsgc3VwcG9ydC5yb3VuZCA9IDE7IH0gZWxzZSB7XG4gICAgICAgICAgc3VwcG9ydC5yb3VuZCA9IHN1cHBvcnQucm91bmQhICsgMTtcbiAgICAgICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZCA9PT0gc3VwcG9ydC53b3JkT2JqLndvcmRUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgIHJpZ2h0QW5zd2VyRnVuYygoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpISk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdyb25nQW5zd2VyRnVuYygoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXN0YXJ0JykpIHtcbiAgICAgICAgc3VwcG9ydC5jbGVhckxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9XG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2xldmVsLXRleHRib29rJykpIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb25IYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKTtcbiAgICAgICAgY29uc3QgdW5pdCA9ICtsb2NhdGlvbkhhc2hbMV07XG4gICAgICAgIGNvbnN0IHBhZ2UgPSArbG9jYXRpb25IYXNoWzJdO1xuICAgICAgICBzdXBwb3J0LmxldmVsID0gdW5pdCArIDE7XG4gICAgICAgIHN1cHBvcnQucGFnZSA9IHBhZ2U7XG4gICAgICAgIHN1cHBvcnQudGV4dGJvb2sgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdsZXZlbC1jaGFuZ2UnKSkge1xuICAgICAgICBzdXBwb3J0LmNsZWFyTG9jYWxTdG9yYWdlKCk7XG4gICAgICB9XG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1sZXZlbCcpKSB7XG4gICAgICAgIGNvbnN0IGRhdGFOID0gTnVtYmVyKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQucmVwbGFjZSgvW14wLTldL2csICcnKSk7XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAoYGxldmVsJHtkYXRhTn1gKSkge1xuICAgICAgICAgIHN1cHBvcnQuY2xlYXJMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICBzdXBwb3J0LmxldmVsID0gZGF0YU47XG4gICAgICAgICAgc3VwcG9ydC5sZXZlbCA9IGRhdGFOO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmlnaHRBbnN3ZXJGdW5jKGVsOiBIVE1MRWxlbWVudCkge1xuICBzdXBwb3J0LnNjb3JlISArPSAxO1xuICBzb3VuZEF1ZGlvKChhdWRpb1BhdGhSaWdodCkpO1xuICBlbC5jbGFzc0xpc3QuYWRkKCdidG4tdHJhbnNsYXRpb24tcmlnaHQnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9LFxuICAxMjAwKTtcbn1cblxuZnVuY3Rpb24gd3JvbmdBbnN3ZXJGdW5jKGVsOiBIVE1MRWxlbWVudCkge1xuICBlbC5jbGFzc0xpc3QuYWRkKCdidG4tdHJhbnNsYXRpb24td3JvbmcnKTtcbiAgY29uc3QgcmlnaHRBbnN3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtYW5zd2VyJykgYXMgSFRNTEVsZW1lbnQ7XG4gIGlmIChyaWdodEFuc3dlcikge1xuICAgIHJpZ2h0QW5zd2VyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiYW5zd2VyXCI+PGltZyBjbGFzcz1cImFuc3dlci1pbWdcIiBzcmM9XCIke2FwaVBhdGggKyBzdXBwb3J0LndvcmRPYmouaW1hZ2V9XCIgYWx0PVwi0L/RgNCw0LLQuNC70YzQvdGL0Lkg0L7RgtCy0LXRglwiPjxicj4ke3N1cHBvcnQud29yZE9iai53b3JkfSDigJQgJHtzdXBwb3J0LndvcmRPYmoud29yZFRyYW5zbGF0ZX0gPC9kaXY+YDtcbiAgICBzdXBwb3J0LmFycmF5V3JvbmdXb3JkcyEucHVzaChzdXBwb3J0LndvcmRPYmoud29yZCk7XG4gICAgc291bmRBdWRpbygoYXVkaW9QYXRoV3JvbmcpKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9LFxuICAgIDIyMDApO1xuICB9XG59XG5cbmNvbnN0IGxpc3RlbmVyQXVkaW9DYWxsID0gbmV3IExpc3RlbmVyQXVkaW9DYWxsKCk7XG5leHBvcnQgZGVmYXVsdCBsaXN0ZW5lckF1ZGlvQ2FsbDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC1leHByZXNzaW9ucyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXNoYWRvdyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xyXG5cclxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uL2Z1bmN0aW9uYWwvc3RvcmFnZSc7XHJcbmltcG9ydCB7IElTdG9yYWdlQXVkaW9jYWxsLCBJV29yZCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3R5cGVzJztcclxuaW1wb3J0IHsgYXBpUGF0aCB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGktcGF0aCc7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xyXG5cclxuLy8g0LLRi9Cx0L7RgCDRg9GA0L7QstC90Y8g0LTQu9GPINC40LPRgNGLINC4INGB0YLRgNCw0L3QuNGG0YtcclxuLy8gKGFzeW5jIGZ1bmN0aW9uIHN1cHBvcnQoKSB7XHJcbmZ1bmN0aW9uIHNodWZmbGUoYXJyYXk6c3RyaW5nW10pIHtcclxuICBhcnJheS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG59XHJcbmNsYXNzIFN1cHBvcnQge1xyXG4gIHRleHRib29rID0gZmFsc2U7XHJcblxyXG4gIGFycmF5V3JvbmdXb3Jkczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgcm91bmQ/ID0gMDtcclxuXHJcbiAgc2NvcmU/ID0gMDtcclxuXHJcbiAgZ3JvdXAgPSAwO1xyXG5cclxuICBwYWdlID0gMDtcclxuXHJcbiAgbGV2ZWwgPSAxO1xyXG5cclxuICB3b3JkczogSVdvcmRbXSB8IHVuZGVmaW5lZCA9IFtdO1xyXG5cclxuICB3b3Jkc1N0cmluZzogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgbm9SZXBlYXQ6IHN0cmluZyBbXSA9IFtdO1xyXG5cclxuICB3b3JkT2JqIDogSVdvcmQgPSB7XHJcbiAgICBpZDogJycsIGdyb3VwOiAwLCBwYWdlOiAwLCB3b3JkOiAnJywgaW1hZ2U6ICcnLCBhdWRpbzogJycsIGF1ZGlvTWVhbmluZzogJycsIGF1ZGlvRXhhbXBsZTogJycsIHRleHRNZWFuaW5nOiAnJywgdGV4dEV4YW1wbGU6ICcnLCB0cmFuc2NyaXB0aW9uOiAnJywgd29yZFRyYW5zbGF0ZTogJycsIHRleHRNZWFuaW5nVHJhbnNsYXRlOiAnJywgdGV4dEV4YW1wbGVUcmFuc2xhdGU6ICcnLFxyXG4gIH07XHJcblxyXG4gIGFycmF5U2l4V29yZHM6c3RyaW5nIFtdID0gW107XHJcblxyXG4gIGFzeW5jIGdldFdvcmRzKCkge1xyXG4gICAgYXBpLmdldFdvcmRzKHRoaXMuZ3JvdXAhLCB0aGlzLnBhZ2UhKVxyXG4gICAgICAudGhlbigodmFsdWUpID0+IHsgdGhpcy53b3JkcyA9IHZhbHVlOyB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBsZXZlbEdhbWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdyb3VwID0gdGhpcy5sZXZlbCEgLSAxO1xyXG4gICAgaWYgKCh0aGlzLnBhZ2UgPT09IDApKSB7XHJcbiAgICAgIHRoaXMucGFnZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyMCAtIDAgKyAxKSkgKyAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Rml2ZVdvcmRzKCk6IHZvaWQge1xyXG4gICAgdGhpcy53b3Jkc1N0cmluZyA9IHN0b3JhZ2Uud29yZHMhLm1hcCgoaXRlbSkgPT4gaXRlbS53b3JkVHJhbnNsYXRlKTtcclxuICAgIGlmICh0aGlzLm5vUmVwZWF0IS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMud29yZHNTdHJpbmcgPSB0aGlzLndvcmRzU3RyaW5nLmZpbHRlcigoaXRlbSkgPT4gIXRoaXMubm9SZXBlYXQhLmluY2x1ZGVzKGl0ZW0pKTtcclxuICAgIH1cclxuXHJcbiAgICBzaHVmZmxlKHRoaXMud29yZHNTdHJpbmcpO1xyXG5cclxuICAgIHRoaXMuYXJyYXlTaXhXb3JkcyA9IHRoaXMud29yZHNTdHJpbmcuc2xpY2UoMCwgNSk7XHJcbiAgICBjb25zdCB3b3JkUmlnaHQgPSB0aGlzLmFycmF5U2l4V29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5hcnJheVNpeFdvcmRzLmxlbmd0aCldO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndvcmRzIS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy53b3JkcyFbaV0ud29yZFRyYW5zbGF0ZSA9PT0gd29yZFJpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy53b3JkT2JqID0gdGhpcy53b3JkcyFbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMubm9SZXBlYXQhLnB1c2godGhpcy53b3JkT2JqLndvcmRUcmFuc2xhdGUpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub1JlcGVhdCcpKSB7XHJcbiAgICAgIHRoaXMubm9SZXBlYXQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub1JlcGVhdCcpISk7XHJcbiAgICAgIHRoaXMubm9SZXBlYXQucHVzaCh0aGlzLndvcmRPYmoud29yZFRyYW5zbGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmludEJ0blN0cmluZygpOiBzdHJpbmcge1xyXG4gICAgdGhpcy5nZXRXb3JkcygpO1xyXG4gICAgdGhpcy5sZXZlbEdhbWUoKTtcclxuICAgIHRoaXMuZ2V0Rml2ZVdvcmRzKCk7XHJcbiAgICBsZXQgYSA9ICcnO1xyXG4gICAgbGV0IGNvbnRhaW5lckJ0biA9ICcgJztcclxuICAgIGlmICh0aGlzLnJvdW5kISA8IDEwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJheVNpeFdvcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYSA9IHRoaXMuYXJyYXlTaXhXb3Jkc1tpXTtcclxuICAgICAgICBjb250YWluZXJCdG4gKz0gYDxidXR0b24gZGF0YS1udW09XCIke2kgKyAxfVwiIHR5cGU9XCJidXR0b25cIiBpZD1cIiR7YX1cIiBjbGFzcz1cImJ0bi10cmFuc2xhdGlvblwiPiR7YX08L2J1dHRvbj4gYDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53b3JkT2JqLmF1ZGlvID0gJyc7XHJcbiAgICAgIGxldCBhID0gJyc7XHJcbiAgICAgIGlmICh0aGlzLmFycmF5V3JvbmdXb3JkcyEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGEgPSBgIDxwIGNsYXNzPVwiZ2FtZS10ZXh0XCI+0KDQtdC60L7QvNC10L3QtNGD0LXQvCDQstGL0YPRh9C40YLRjDombmJzcCR7dGhpcy5hcnJheVdyb25nV29yZHMhLmpvaW4oJyxcXG4nKX08L3A+IGA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYSA9ICcgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QktGLINC90LjRgNCw0LfRgyDQvdC1INC+0YjQuNCx0LvQuNGB0YwhPC9wPiAnO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRhaW5lckJ0biArPSBgXHJcbiAgIDxkaXYgY2xhc3M9XCJnYW1lLW92ZXJcIj5cclxuICAgICA8cCBjbGFzcz1cImdhbWUtdGV4dFwiPtCS0Ysg0L/RgNC+0YjQu9C4INC40LPRgNGDITwvcD5cclxuICAgICA8cCBjbGFzcz1cImdhbWUtdGV4dFwiPtCS0LDRiCDRgNC10LfRg9C70YzRgtCw0YI6ICZuYnNwICR7dGhpcy5zY29yZX08L3A+XHJcbiAgICAgJHthfVxyXG4gICAgIDxkaXYgY2xhc3M9XCJidG4tZ2FtZS1vdmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJyZXN0YXJ0XCI+0J3QsNGH0LDRgtGMINC30LDQvdC+0LLQvjwvYnV0dG9uPlxyXG4gICAgICAgPGEgIGNsYXNzPVwibGluayBsZXZlbC1jaGFuZ2VcIiBocmVmPVwiI2F1ZGlvY2FsbFwiID7QktGL0LHRgNCw0YLRjCDRg9GA0L7QstC10L3RjDwvYT5cclxuICAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiBcclxuICAgYDtcclxuICAgICAgdGhpcy5jbGVhckxvY2FsU3RvcmFnZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbnRhaW5lckJ0bjtcclxuICB9XHJcblxyXG4gIGNsZWFyTG9jYWxTdG9yYWdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hcnJheVdyb25nV29yZHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLnJvdW5kID0gMDtcclxuXHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuXHJcbiAgICB0aGlzLmdyb3VwID0gMDtcclxuXHJcbiAgICB0aGlzLnBhZ2UgPSAwO1xyXG5cclxuICAgIHRoaXMubGV2ZWwgPSAxO1xyXG5cclxuICAgIHRoaXMud29yZHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLndvcmRzU3RyaW5nID0gW107XHJcblxyXG4gICAgdGhpcy5ub1JlcGVhdCA9IFtdO1xyXG5cclxuICAgIHRoaXMud29yZE9iaiA9IHtcclxuICAgICAgaWQ6ICcnLCBncm91cDogMCwgcGFnZTogMCwgd29yZDogJycsIGltYWdlOiAnJywgYXVkaW86ICcnLCBhdWRpb01lYW5pbmc6ICcnLCBhdWRpb0V4YW1wbGU6ICcnLCB0ZXh0TWVhbmluZzogJycsIHRleHRFeGFtcGxlOiAnJywgdHJhbnNjcmlwdGlvbjogJycsIHdvcmRUcmFuc2xhdGU6ICcnLCB0ZXh0TWVhbmluZ1RyYW5zbGF0ZTogJycsIHRleHRFeGFtcGxlVHJhbnNsYXRlOiAnJyxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5hcnJheVNpeFdvcmRzID0gW107XHJcbiAgfVxyXG59XHJcblxyXG4vLyDRhNGD0L3QutGG0LjRjyDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8g0LDRg9C00LjQviDRgSDQv9GD0YLQtdC8INC40Lcg0L3QsNGI0LXQs9C+INC+0LHQtdC60YLQsC3RgdC70L7QstC+XHJcbmV4cG9ydCBmdW5jdGlvbiBzb3VuZEF1ZGlvKHBhdGg6IHN0cmluZyk6IHZvaWQge1xyXG4gIGNvbnN0IGF1ZGlvRCA9IG5ldyBBdWRpbygpO1xyXG4gIGF1ZGlvRC5zcmMgPSBgJHtwYXRofWA7XHJcbiAgYXVkaW9ELmF1dG9wbGF5ID0gdHJ1ZTtcclxufVxyXG5cclxuY29uc3Qgc3VwcG9ydCA9IG5ldyBTdXBwb3J0KCk7XHJcbmV4cG9ydCB7IHN1cHBvcnQgfTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcblxuaW1wb3J0IHBob25lIGZyb20gJy4uL2Fzc2V0cy9waG9uZS5zdmcnO1xuaW1wb3J0IGRpY3Rpb25hcnkgZnJvbSAnLi4vYXNzZXRzL2RpY3Rpb25hcnkuc3ZnJztcbmltcG9ydCBwbGF5IGZyb20gJy4uL2Fzc2V0cy9wbGF5LnN2Zyc7XG5pbXBvcnQgYWNzZXNzIGZyb20gJy4uL2Fzc2V0cy9hY3Nlc3Muc3ZnJztcblxuY29uc3QgTWFpblBhZ2UgPSB7XG4gIGlkOiAnbWFpbicsXG4gIHJlbmRlcjogKCk6c3RyaW5nID0+IGBcbiAgICAgICAke0hlYWRlci5yZW5kZXIoKX1cbiAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fcGFnZVwiPlxuICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+VGhlIFdvcmxkIGlzIFlvdXJzIHdpdGggUlNMYW5nITwvaDI+XG4gICAgICAgICAgIDxwPlJTTGFuZyDigJQg0Y3RgtC+INGN0YTRhNC10LrRgtC40LLQvdGL0Lkg0YHQtdGA0LLQuNGBINC00LvRjyDRg9Cy0LvQtdC60LDRgtC10LvRjNC90L7QuSDQv9GA0LDQutGC0LjQutC4INCw0L3Qs9C70LjQudGB0LrQvtCz0L4g0Y/Qt9GL0LrQsC4g0J/RgNC40YHQvtC10LTQuNC90Y/QudGB0Y8hXG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19wYWdlX19hZHZhbnRhZ2VzXCI+XG4gICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+0J/QvtGH0LXQvNGDIFJTTGFuZz88L2gyPlxuICAgICAgICAgICA8dWwgY2xhc3M9XCJhZHZhbnRhZ2VzX19saXN0XCI+XG4gICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbVwiPlxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2Fjc2Vzc31cIj5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0JHQtdGB0L/Qu9Cw0YLQvdGL0Lkg0LTQvtGB0YLRg9C/PC9oMz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPtCd0LDRiNCwINC80LjRgdGB0LjRjyDigJQg0YHQtNC10LvQsNGC0Ywg0L7QsdGD0YfQtdC90LjRjyDRj9C30YvQutCw0Lwg0LTQvtGB0YLRg9C/0L3Ri9C8INC00LvRjyDQutCw0LbQtNC+0LPQvjwvcD5cbiAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtkaWN0aW9uYXJ5fVwiPlxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7QodC70L7QstCw0YDRjDwvaDM+XG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RleHRcIj7QqdC10LvQutC90LjRgtC1INC70Y7QsdC+0LUg0YHQu9C+0LLQviwg0YfRgtC+0LHRiyDRg9Cy0LjQtNC10YLRjCDQvtC/0YDQtdC00LXQu9C10L3QuNC1INCyINC40YHRgtC+0YfQvdC40LrQsNGFLCDQuCDRgdC+0YXRgNCw0L3QuNGC0LUg0LXQs9C+INCyINGB0LLQvtC10Lwg0YHQv9C40YHQutC1INC60LDRgNGC0L7Rh9C10Lo8L3A+XG4gICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGxheX1cIj5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0JjQs9GA0LDQuSwg0YfRgtC+0LHRiyDRg9GH0LjRgtGM0YHRjzwvaDM+XG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RleHRcIj7QmNCz0YDRiyDQstC60LvRjtGH0LDRjtGCINCQ0YPQtNC40L7QstGL0LfQvtCyLNCh0L/RgNC40L3RgiDQuCDQvNC90L7Qs9C+0LUg0LTRgNGD0LPQvtC1Li4uPC9wPlxuICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbVwiPlxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3Bob25lfVwiPlxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7Qo9GH0LjRgtC10YHRjCDQvdCwINGF0L7QtNGDPC9oMz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPlJTTGFuZyDQtNC+0YHRgtGD0L/QvdCwINC00LvRjyDQstC10LEg0Lgg0LzQvtCx0LjQu9GM0L3Ri9GFINGD0YHRgtGA0L7QudGB0YLQsi4g0KPRh9C40YLQtdGB0Ywg0LjQtyDQu9GO0LHQvtCz0L4g0LzQtdGB0YLQsCE8L3A+XG4gICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgPC91bD5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgICAgICR7Rm9vdGVyLnJlbmRlcigpfVxuICAgIGAsXG59O1xuXG4vLyBleHBvcnQgeyBNYWluUGFnZSB9O1xuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2U7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgaW5pdFNwcmludE1WQyB9IGZyb20gJy4vaW5pdFNwcmludE1WQyc7XG5pbXBvcnQgeyBCdXR0b25zIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zbWFsbENvbXBvbmVudHMvYnV0dG9ucyc7XG5cbmltcG9ydCBwYXJyb3RzIGZyb20gJy4uLy4uL2Fzc2V0cy9wYXJyb3RzLmpwZyc7XG5pbXBvcnQgYXJyb3dMZWZ0IGZyb20gJy4uLy4uL2Fzc2V0cy9hcnJvdy1sZWZ0LnBuZyc7XG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tICcuLi8uLi9hc3NldHMvYXJyb3ctcmlnaHQucG5nJztcblxuaW1wb3J0IHJpZ2h0QW5zd2VyQXVkaW8gZnJvbSAnLi4vLi4vYXNzZXRzL2F1ZGlvL3JpZ2h0LWFuc3dlci5tcDMnO1xuaW1wb3J0IHdyb25nQW5zd2VyQXVkaW8gZnJvbSAnLi4vLi4vYXNzZXRzL2F1ZGlvL3dyb25nLWFuc3dlci5tcDMnO1xuaW1wb3J0IHRpbWVvdmVyQXVkaW8gZnJvbSAnLi4vLi4vYXNzZXRzL2F1ZGlvL3RpbWUtb3Zlci5tcDMnO1xuXG5jb25zdCBTcHJpbnRHYW1lUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAnc3ByaW50JyxcbiAgcmVuZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAke0hlYWRlci5yZW5kZXIoKX1cbiAgICA8ZGl2IGNsYXNzID0gJyR7dGhpcy5jbGFzc25hbWV9LWNvbnRlaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzPVwic3ByaW50X19zY29yZVwiPjA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnRfX3RpbWVyXCI+NjA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnRfX2ZpZWxkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZF9fdGl0bGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVfX2NvdW50XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlX190ZXh0XCI+KyAxMCDQvtGH0LrQvtCyINC30LAg0YHQu9C10LTRg9GO0YnQtdC1INGB0LvQvtCy0L48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZF9fY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X19pbWdcIj48aW1nIHNyYz0nJHtwYXJyb3RzfScgYWx0PVwicGFycm90c1wiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X19xdWVzdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X193b3JkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb25fX3dvcmRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3JkX19zb3VuZFwiPjwvZGl2PlxuICAgICAgICAgICAgPGF1ZGlvIGlkPVwic3ByaW50X19zYXlfX3dvcmRcIiBzcmM9XCJcIj48L2F1ZGlvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbl9fdHJhbnNsYXRpb25cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZF9fYnV0dG9uc1wiPiR7QnV0dG9ucy5jcmVhdGUoJ9Cd0LXQstC10YDQvdC+JywgJ2J1dHRvbl9fc3ByaW50X19mYWxzZScsIGZhbHNlKX0ke0J1dHRvbnMuY3JlYXRlKCfQktC10YDQvdC+JywgJ2J1dHRvbl9fc3ByaW50X190cnVlJywgZmFsc2UpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3ByaW50X19hcnJvd3NcIj5cbiAgICAgICAgPGltZyBzcmM9JyR7YXJyb3dMZWZ0fScgYWx0PVwiYXJyb3dcIj5cbiAgICAgICAgPGltZyBzcmM9JyR7YXJyb3dSaWdodH0nIGFsdD1cImFycm93XCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhdWRpbyBpZD1cImF1ZGlvX19yaWdodFwiIHNyYz1cIiR7cmlnaHRBbnN3ZXJBdWRpb31cIj48L2F1ZGlvPlxuICAgICAgPGF1ZGlvIGlkPVwiYXVkaW9fX3dyb25nXCIgc3JjPVwiJHt3cm9uZ0Fuc3dlckF1ZGlvfVwiPjwvYXVkaW8+XG4gICAgICA8YXVkaW8gaWQ9XCJhdWRpb19fdGltZW92ZXJcIiBzcmM9XCIke3RpbWVvdmVyQXVkaW99XCI+PC9hdWRpbz5cbiAgICA8L2Rpdj5gO1xuICB9LFxuICBpbml0TVZDKCk6IHZvaWQge1xuICAgIGluaXRTcHJpbnRNVkMoKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwcmludEdhbWVQYWdlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5cbmltcG9ydCB7IE1vZHVsZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9jb250cm9sbGVyL2NvbnRyb2xsZXJTcHJpbnQnO1xuaW1wb3J0IHsgTW9kdWxlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbC9tb2RlbFNwcmludCc7XG5pbXBvcnQgeyBNb2R1bGVWaWV3IH0gZnJvbSAnLi4vLi4vdmlldy92aWV3U3ByaW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTcHJpbnRNVkMoKTogdm9pZCB7XG4gIGNvbnN0IHZpZXcgPSBuZXcgTW9kdWxlVmlldygpO1xuICBjb25zdCBtb2RlbCA9IG5ldyBNb2R1bGVNb2RlbCgpO1xuICBjb25zdCBjb250cm9sbGVyID0gbmV3IE1vZHVsZUNvbnRyb2xsZXIoKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwcmludC1jb250ZWluZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgdmlldy5pbml0KGNvbnRhaW5lcik7XG4gIG1vZGVsLmluaXQodmlldyk7XG4gIGNvbnRyb2xsZXIuaW5pdChjb250YWluZXIsIG1vZGVsKTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmV4cG9ydCBjb25zdCBzcHJpbnRTZXR0aW5ncyA9IHtcbiAgaGFzaE5hbWU6ICcnLFxuICBwcmV2aW91c0hhc2hOYW1lOiB3aW5kb3cubG9jYXRpb24uaGFzaCxcbiAgc3ByaW50TGV2ZWw6IDAsXG4gIHNwcmludFBhZ2U6IDAsXG4gIHNwcmludEZyb21UZXh0Ym9vazogZmFsc2UsXG4gIHByZXZpb3VzSGFzaE5hbWVBcnJheSgpOnN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5wcmV2aW91c0hhc2hOYW1lLnNwbGl0KCcvJyk7XG4gIH0sXG4gIHNldExldmVsRnJvbVRleHRib29rKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByZXZpb3VzSGFzaE5hbWVBcnJheSgpWzBdID09PSAnI3RleHRib29rJykge1xuICAgICAgdGhpcy5zcHJpbnRMZXZlbCA9ICt0aGlzLnByZXZpb3VzSGFzaE5hbWVBcnJheSgpWzFdIC0gMTtcbiAgICAgIHRoaXMuc3ByaW50RnJvbVRleHRib29rID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIHNldExldmVsRnJvbVNlbGVjdChsZXZlbDpzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNwcmludExldmVsID0gK2xldmVsW2xldmVsLmxlbmd0aCAtIDFdO1xuICAgIHRoaXMuc3ByaW50UGFnZSA9IDA7XG4gICAgdGhpcy5zcHJpbnRGcm9tVGV4dGJvb2sgPSBmYWxzZTtcbiAgfSxcbiAgc2V0UGFnZUZyb21UZXh0Ym9vaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmV2aW91c0hhc2hOYW1lQXJyYXkoKVswXSA9PT0gJyN0ZXh0Ym9vaycpIHtcbiAgICAgIHRoaXMuc3ByaW50UGFnZSA9ICt0aGlzLnByZXZpb3VzSGFzaE5hbWVBcnJheSgpWzJdIC0gMTtcbiAgICAgIHRoaXMuc3ByaW50RnJvbVRleHRib29rID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlU3ByaW50U2V0dGluZ3MoKTogdm9pZCB7XG4gIGlmIChzcHJpbnRTZXR0aW5ncy5oYXNoTmFtZSkgeyBzcHJpbnRTZXR0aW5ncy5wcmV2aW91c0hhc2hOYW1lID0gc3ByaW50U2V0dGluZ3MuaGFzaE5hbWU7IH1cbiAgc3ByaW50U2V0dGluZ3MuaGFzaE5hbWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgc3ByaW50U2V0dGluZ3Muc2V0TGV2ZWxGcm9tVGV4dGJvb2soKTtcbiAgc3ByaW50U2V0dGluZ3Muc2V0UGFnZUZyb21UZXh0Ym9vaygpO1xufVxuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJztcblxuY29uc3QgU3RhdGlzdGljc1BhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ3N0YXRpc3RpY3MnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz48L2Rpdj5cbiAgICAke0Zvb3Rlci5yZW5kZXIoKX1gO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGlzdGljc1BhZ2U7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5pbXBvcnQgZm90bzEgZnJvbSAnLi4vYXNzZXRzL2dpdGh1Yi1pbWcvZmx5ZXRoZXIuanBnJztcbmltcG9ydCBmb3RvMiBmcm9tICcuLi9hc3NldHMvZ2l0aHViLWltZy9BbGVuYURvei5qcGcnO1xuaW1wb3J0IGZvdG8zIGZyb20gJy4uL2Fzc2V0cy9naXRodWItaW1nL2RhcmluYTk5Mi5qcGcnO1xuXG5jb25zdCBBYm91dFRlYW1QYWdlID0ge1xuICBjbGFzc25hbWU6ICd0ZWFtLXBhZ2UnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz5cbiAgICAgIDxwIGNsYXNzPSdvdXJ0ZWFtX190aXRsZSc+0J3QsNGI0LAg0LrQvtC80LDQvdC00LA8L3A+XG4gICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtX19jb250ZWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtX19naXRodWInPlxuICAgICAgICAgICAgPGltZyBzcmM9JyR7Zm90bzF9JyBhbHQ9J2ZvdG8nIGNsYXNzPSdvdXJ0ZWFtX19mb3Rvcyc+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2ZseWV0aGVyXCIgY2xhc3M9XCJnaXRodWItbGlua1wiPmZseWV0aGVyPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzPSdvdXJ0ZWFtX190ZWFtbGVhZCc+VGVhbUxlYWQ8L3NwYW4+XG4gICAgICAgICAgPHVsIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2xpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+QmFja2VuZDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPtCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj7QnNC40L3QuC3QuNCz0YDQsCAn0JDRg9C00LjQvtCy0YvQt9C+0LInPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+Li4uPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nb3VydGVhbSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nb3VydGVhbV9fZ2l0aHViJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPScke2ZvdG8yfScgYWx0PSdmb3RvJyBjbGFzcz0nb3VydGVhbV9fZm90b3MnPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9BbGVuYURvelwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5BbGVuYURvejwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJkZXZlbG9wbWVudF9fbGlzdFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj7QrdC70LXQutGC0YDQvtC90L3Ri9C5INGD0YfQtdCx0L3QuNC6PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+0JTQuNC30LDQudC9PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+Li4uPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+Li4uPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nb3VydGVhbSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nb3VydGVhbV9fZ2l0aHViJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPScke2ZvdG8zfScgYWx0PSdmb3RvJyBjbGFzcz0nb3VydGVhbV9fZm90b3MnPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EYXJpbmE5OTJcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+RGFyaW5hOTkyPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bCBjbGFzcz1cImRldmVsb3BtZW50X19saXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPtCT0LvQsNCy0L3QsNGPINGB0YLRgNCw0L3QuNGG0LA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj7QnNC40L3QuC3QuNCz0YDQsCAn0KHQv9GA0LjQvdGCJzwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPi4uLjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPi4uLjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAke0Zvb3Rlci5yZW5kZXIoKX1cbiAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRUZWFtUGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0ICcuL3RleHRib29rLnNjc3MnO1xuaW1wb3J0IHsgaGFzaGVzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oYXNoZXMnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vYXBpL2FwaSc7XG5pbXBvcnQgeyBJV29yZCB9IGZyb20gJy4uLy4uL3R5cGVzL3R5cGVzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7IFRleHRib29rQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL2NvbnRyb2xsZXIvY29udHJvbGxlclRleHRib29rJztcbmltcG9ydCBXb3JkcyBmcm9tICcuLi8uLi93b3Jkcy93b3Jkcyc7XG5cbmNvbnN0IFRleHRib29rUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAndGV4dGJvb2snLFxuICB3b3JkbGlzdDogJ3dvcmQtbGlzdCcsXG5cbiAgdW5pdERpZmZpY3VsdFdvcmRzOiA3LFxuXG4gIGlzQXV0aDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSxcblxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICBjb25zdCBsb2NhdGlvbkhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnLycpO1xuICAgIGNvbnN0IHVuaXQgPSArbG9jYXRpb25IYXNoWzFdO1xuICAgIGNvbnN0IHBhZ2UgPSArbG9jYXRpb25IYXNoWzJdO1xuICAgIGxldCB2aWV3ID0gJyc7XG4gICAgY29uc3QgbWluVW5pdCA9IDE7XG4gICAgY29uc3QgbWF4VW5pdCA9IDc7XG4gICAgY29uc3QgdW5pdFNlbGVjdG9yID0gJ3RleHRib29rLXVuaXQnO1xuICAgIGNvbnN0IHBhZ2VTZWxlY3RvciA9ICd1bml0LXBhZ2UnO1xuICAgIGNvbnN0IG1pblBhZ2UgPSAxO1xuICAgIGNvbnN0IG1heFBhZ2UgPSAzMDtcbiAgICBjb25zdCBjb250cm9sbGVyVGV4dGJvb2sgPSBuZXcgVGV4dGJvb2tDb250cm9sbGVyKHVuaXRTZWxlY3RvciwgcGFnZVNlbGVjdG9yKTtcbiAgICBpZiAoIXVuaXQpIHtcbiAgICAgIHZpZXcgPSBgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjFcIj7QoNCw0LfQtNC10LsgMTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCIyXCI+0KDQsNC30LTQtdC7IDI8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiM1wiPtCg0LDQt9C00LXQuyAzPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjRcIj7QoNCw0LfQtNC10LsgNDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCI1XCI+0KDQsNC30LTQtdC7IDU8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiNlwiPtCg0LDQt9C00LXQuyA2PC9kaXY+XG4gICAgICAke3RoaXMuaXNBdXRoID8gYDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiN1wiPtCg0LDQt9C00LXQuyBcItCh0LvQvtC20L3Ri9C1INGB0LvQvtCy0LBcIjwvZGl2PlxuICAgICAgYCA6ICcnfVxuICAgICAgPC9kaXY+YDtcbiAgICB9IGVsc2UgaWYgKCFwYWdlICYmIHVuaXQgPD0gbWF4VW5pdCAmJiB1bml0ID49IG1pblVuaXQgJiYgdHlwZW9mIHVuaXQgPT09ICdudW1iZXInKSB7XG4gICAgICB2aWV3ID0gYFxuICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLW5hdmlnYXRpb24gdW5pdC1uYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXJvdW5kXCIgaWQ9XCJnby1iYWNrXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInVuaXQtbmFtZVwiPtCg0LDQt9C00LXQuyAke3RoaXMudW5pdERpZmZpY3VsdFdvcmRzID09PSB1bml0ID8gJ1wi0KHQu9C+0LbQvdGL0LUg0YHQu9C+0LLQsFwiJyA6IHVuaXR9PC9wPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8dWwgY2xhc3M9XCJ1bml0LXBhZ2VzXCI+XG4gICAgICAgICAgICAke3RoaXMucmVuZGVyUGFnZXModW5pdCl9XG4gICAgICAgICA8L3VsPmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZXcgPSBgPGRpdiBjbGFzcz0ke3RoaXMuY2xhc3NuYW1lfT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay1uYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcm91bmRcIiBpZD1cImdvLWJhY2tcIj48L2J1dHRvbj5cbiAgICAgICAgPHAgY2xhc3M9XCJ1bml0LW5hbWVcIj7QoNCw0LfQtNC10LsgJHt0aGlzLnVuaXREaWZmaWN1bHRXb3JkcyA9PT0gdW5pdCA/ICdcItCh0LvQvtC20L3Ri9C1INGB0LvQvtCy0LBcIicgOiB1bml0fVxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1bml0LXBhZ2UtbmFtZVwiPtGB0YLRgNCw0L3QuNGG0LAgJHtwYWdlfTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3M9JHt0aGlzLndvcmRsaXN0fT5cbiAgICAgICAke3RoaXMuZ2V0Q2FyZHModW5pdCwgcGFnZSl9XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLWZvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stcGFnaW5hdGlvblwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uLWJ0biBidG4tb3JhbmdlIHByZXZpb3VzXCIgJHtwYWdlID09PSBtaW5QYWdlID8gJ2Rpc2FibGVkJyA6ICcnfT7Qn9GA0LXQtNGL0LTRg9GJ0LDRjzwvYnV0dG9uPlxuICAgICAgICAgICR7dGhpcy5pc0F1dGggPyBgPGEgY2xhc3M9XCJ0ZXh0Ym9vay1nYW1lIGxldmVsLXRleHRib29rXCIgaHJlZj1cIiR7aGFzaGVzLmF1ZGlvY2FsbH1cIj7QkNGD0LTQuNC+0LLRi9C30L7QsjwvYT5cbiAgICAgICAgICA8YSBjbGFzcz1cInRleHRib29rLWdhbWVcIiBocmVmPVwiJHtoYXNoZXMuYWJvdXRzcHJpbnR9XCI+0KHQv9GA0LjQvdGCPC9hPmAgOiAnJ31cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGFnaW5hdGlvbi1idG4gYnRuLW9yYW5nZSBuZXh0XCIgJHtwYWdlID09PSBtYXhQYWdlID8gJ2Rpc2FibGVkJyA6ICcnfT7QodC70LXQtNGD0Y7RidCw0Y88L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICAgIH1cbiAgICBjb250cm9sbGVyVGV4dGJvb2suaW5pdCh1bml0KTtcbiAgICByZXR1cm4gYCR7SGVhZGVyLnJlbmRlcigpfSR7dmlld30ke0Zvb3Rlci5yZW5kZXIoKX1gO1xuICB9LFxuICByZW5kZXJQYWdlcyh1bml0OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBwYWdlcyA9ICcnO1xuICAgIGxldCBwYWdlc0NvdW50ID0gMzA7XG4gICAgY29uc3Qgd29yZHNQZXJQYWdlID0gMjA7XG4gICAgaWYgKHVuaXQgPT09IHRoaXMudW5pdERpZmZpY3VsdFdvcmRzKSB7XG4gICAgICBwYWdlc0NvdW50ID0gTWF0aC5jZWlsKFdvcmRzLmFnZ3JlZ2F0ZWRXb3Jkcy5sZW5ndGggLyB3b3Jkc1BlclBhZ2UpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwYWdlc0NvdW50OyBpICs9IDEpIHtcbiAgICAgIHBhZ2VzICs9IGA8bGkgY2xhc3M9XCJ1bml0LXBhZ2VcIiBkYXRhLXBhZ2U9XCIke2l9XCI+UGFnZSAke2l9PC9saT5gO1xuICAgIH1cbiAgICByZXR1cm4gcGFnZXM7XG4gIH0sXG4gIGdldENhcmRzKHVuaXQ6IG51bWJlciwgcGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyB3b3JkbGlzdCwgaXNBdXRoIH0gPSB0aGlzO1xuICAgIGZ1bmN0aW9uIHJlbmRlckNhcmRzKHdvcmRzOiBJV29yZFtdKSB7XG4gICAgICBjb25zdCB3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7d29yZGxpc3R9YCk7XG4gICAgICBpZiAod29yZENvbnRhaW5lcikge1xuICAgICAgICB3b3JkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgaXNXb3JkSW5EaWZmaWN1bHQgPSBXb3Jkcy5hZ2dyZWdhdGVkV29yZHMuc29tZSgod29yZCkgPT4gd29yZHNbaV0uaWQgPT09IHdvcmQuaWQpO1xuICAgICAgICAgIGNvbnN0IGlzV29yZExlYXJuZWQgPSBXb3Jkcy5sZWFybmVkV29yZHMuc29tZSgod29yZCkgPT4gd29yZHNbaV0uaWQgPT09IHdvcmQuaWQpO1xuICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnd29yZC1pdGVtJyk7XG4gICAgICAgICAgY2FyZC5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJ3b3JkLWltYWdlXCIgXG4gIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcnNsYW5nLWxlYXJuaW5nLWVuZ2xpc2gtd29yZHMuaGVyb2t1YXBwLmNvbS8ke3dvcmRzW2ldLmltYWdlfSlcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3b3JkLWRlc2NyaXB0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cIndvcmQtcHJvbm91bmNlIHdvcmQtYXVkaW9cIj5cbiAgICA8cCBjbGFzcz1cIndvcmQtbmFtZVwiPiR7d29yZHNbaV0ud29yZH0gJHt3b3Jkc1tpXS50cmFuc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdWRpb1wiPlxuICAgICAgICA8YXVkaW8gc3JjPVwiaHR0cHM6Ly9yc2xhbmctbGVhcm5pbmctZW5nbGlzaC13b3Jkcy5oZXJva3VhcHAuY29tLyR7d29yZHNbaV0uYXVkaW99XCI+PC9hdWRpbz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzPVwid29yZC1wcm9ub3VuY2UgdHJhbnNsYXRpb25cIj4ke3dvcmRzW2ldLndvcmRUcmFuc2xhdGV9PC9wPlxuICAgIDxwIGNsYXNzPVwid29yZC1leGFtcGxlXCI+JHt3b3Jkc1tpXS50ZXh0TWVhbmluZ308L3A+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLWV4YW1wbGUgdHJhbnNsYXRpb25cIj4ke3dvcmRzW2ldLnRleHRNZWFuaW5nVHJhbnNsYXRlfTwvcD5cbiAgICA8cCBjbGFzcz1cIndvcmQtZXhhbXBsZVwiPiR7d29yZHNbaV0udGV4dEV4YW1wbGV9PC9wPlxuICAgIDxwIGNsYXNzPVwid29yZC1leGFtcGxlIHRyYW5zbGF0aW9uXCI+JHt3b3Jkc1tpXS50ZXh0RXhhbXBsZVRyYW5zbGF0ZX08L3A+XG4gIDwvZGl2PlxuICAke2lzQXV0aCA/IGBcbjxkaXYgY2xhc3M9XCJ3b3JkLW5vdGVkXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLW9yYW5nZSBidG4tZGlmZmljdWx0ICAke2lzV29yZEluRGlmZmljdWx0ID8gJ2FkZGVkJyA6ICcnfVwiIFxuICAgICAgZGF0YS13b3JkID0gXCIke3dvcmRzW2ldLmlkfVwiIFxuICAgICAgJHtpc1dvcmRJbkRpZmZpY3VsdCA/ICdkaXNhYmxlZCcgOiAnJ30gPtCh0LvQvtC20L3Qvj88L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tb3JhbmdlIGJ0bi1sZWFybmVkICR7aXNXb3JkTGVhcm5lZCA/ICdhZGRlZCcgOiAnJ31cIiBcbiAgICAgIGRhdGEtd29yZCA9IFwiJHt3b3Jkc1tpXS5pZH1cIlxuICAgICAgJHtpc1dvcmRMZWFybmVkID8gJ2Rpc2FibGVkJyA6ICcnfT7QmNC30YPRh9C10L3Qvj88L2J1dHRvbj5cbiAgICAgIDwvZGl2PmAgOiAnJ31gO1xuICAgICAgICAgIGNhcmQuZGF0YXNldC53b3JkID0gd29yZHNbaV0uaWQ7XG4gICAgICAgICAgd29yZENvbnRhaW5lci5hcHBlbmQoY2FyZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHVuaXQgPT09IHRoaXMudW5pdERpZmZpY3VsdFdvcmRzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVuZGVyQ2FyZHMoV29yZHMuYWdncmVnYXRlZFdvcmRzKTtcbiAgICAgIH0sIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgYXBpLmdldFdvcmRzKHVuaXQgLSAxLCBwYWdlIC0gMSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIFdvcmRzLndvcmRzID0gcmVzIGFzIElXb3JkW107XG4gICAgICAgICAgICByZW5kZXJDYXJkcyhyZXMgYXMgSVdvcmRbXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KSgpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGJvb2tQYWdlO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludGVnZXIobWluOm51bWJlciwgbWF4Om51bWJlcik6bnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG4iLCJpbXBvcnQgeyBSb3V0ZXMsIE1lbnVJdGVtcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCBTcHJpbnRHYW1lUGFnZSBmcm9tICcuLi9wYWdlcy9zcHJpbnQvaW5kZXgnO1xuXG5jbGFzcyBNb2R1bGVWaWV3IHtcbiAgbXlNb2R1bGVDb250YWluZXIhOiBIVE1MRWxlbWVudDtcblxuICBjb250ZW50Q29udGFpbmVyITogSFRNTEVsZW1lbnQ7XG5cbiAgcm91dGVzT2JqITogUm91dGVzO1xuXG4gIGluaXQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcm91dGVzOiBSb3V0ZXMpOiB2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMucm91dGVzT2JqID0gcm91dGVzO1xuICB9XG5cbiAgcmVuZGVyQ29udGVudChoYXNoUGFnZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCByb3V0ZU5hbWUgPSAnZGVmYXVsdCc7XG4gICAgcm91dGVOYW1lID0gKGhhc2hQYWdlTmFtZS5sZW5ndGgpID8gaGFzaFBhZ2VOYW1lLnNwbGl0KCcvJylbMF0gOiByb3V0ZU5hbWU7XG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLnJvdXRlc09ialtyb3V0ZU5hbWUgYXMga2V5b2YgUm91dGVzXTtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyLmlubmVySFRNTCA9IHJvdXRlLnJlbmRlcigpO1xuICAgIGlmIChoYXNoUGFnZU5hbWUgPT09ICdzcHJpbnQnKSB7IFNwcmludEdhbWVQYWdlLmluaXRNVkMoKTsgfVxuICB9XG5cbiAgaGlnaGxpZ2h0QWN0aXZlTWVudUl0ZW0gPSAob2JqOiBNZW51SXRlbXMsIGhhc2hOYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqW2tleSBhcyBrZXlvZiBNZW51SXRlbXNdLmNsYXNzTGlzdC5jb250YWlucygnbWVudV9faXRlbV9hY3RpdmUnKSkge1xuICAgICAgICBvYmpba2V5IGFzIGtleW9mIE1lbnVJdGVtc10uY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9faXRlbV9hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc2hOYW1lKSB7XG4gICAgICBvYmpbaGFzaE5hbWUgYXMga2V5b2YgTWVudUl0ZW1zXS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtX2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoubWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtX2FjdGl2ZScpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlVmlldztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgU3ByaW50UmVzdWx0IGZyb20gJy4uL2NvbXBvbmVudHMvc3ByaW50cmVzdWx0cyc7XG5pbXBvcnQgdHJ1ZUltZyBmcm9tICcuLi9hc3NldHMvdHJ1ZS5wbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9kdWxlVmlldyB7XG4gIG15TW9kdWxlQ29udGFpbmVyITpIVE1MRWxlbWVudDtcblxuICBjb250ZW50Q29udGFpbmVyITpIVE1MRWxlbWVudDtcblxuICByb3V0ZXNPYmohOlJvdXRlcztcblxuICBzcHJpbnRUaW1lcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ByaW50X190aW1lcicpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHNwcmludFNjb3JlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnRfX3Njb3JlJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50Q291bnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlX19jb3VudCcpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHNwcmludENvdW50VGV4dDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGVfX3RleHQnKSBhcyBIVE1MRWxlbWVudDtcblxuICBxdWVzdGlvbldvcmQ6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVlc3Rpb25fX3dvcmQnKSBhcyBIVE1MRWxlbWVudDtcblxuICBxdWVzdGlvblRyYW5zbGF0aW9uOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1ZXN0aW9uX190cmFuc2xhdGlvbicpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHNwcmludENvbnRlaW5lcjpIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnQtY29udGVpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50KTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIC8vIHRoaXMucm91dGVzT2JqID0gcm91dGVzO1xuICB9XG5cbiAgcmVuZGVyV29yZCh3b3JkOiBzdHJpbmcsIHRyYW5zbGF0aW9uOiBzdHJpbmcpOnZvaWQge1xuICAgIHRoaXMucXVlc3Rpb25Xb3JkLnRleHRDb250ZW50ID0gd29yZDtcbiAgICB0aGlzLnF1ZXN0aW9uVHJhbnNsYXRpb24udGV4dENvbnRlbnQgPSB0cmFuc2xhdGlvbjtcbiAgfVxuXG4gIHJlbmRlclRpbWVyKHRpbWVyOm51bWJlciwgdGltZXJFbGVtOkhUTUxFbGVtZW50KTp2b2lkIHtcbiAgICB0aW1lckVsZW0udGV4dENvbnRlbnQgPSBTdHJpbmcodGltZXIpO1xuICB9XG5cbiAgcmVuZGVyU2NvcmUoc2NvcmU6c3RyaW5nLCBtYXhTY29yZT86Ym9vbGVhbik6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRTY29yZS50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgIGlmIChtYXhTY29yZSkge1xuICAgICAgdGhpcy5zcHJpbnRDb3VudC5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke3RydWVJbWd9XCIgYWx0PVwiaW1nXCI+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zcHJpbnRDb3VudC5pbm5lckhUTUwgKz0gYDxpbWcgc3JjPVwiJHt0cnVlSW1nfVwiIGFsdD1cImltZ1wiPmA7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJTcHJpbnRDb3VudCgpOnZvaWQge1xuICAgIHRoaXMuc3ByaW50Q291bnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICByZXR1cm5Ub09uZVNwcmludENvdW50KCk6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRDb3VudC5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke3RydWVJbWd9XCIgYWx0PVwiaW1nXCI+YDtcbiAgfVxuXG4gIHJlbmRlckNvdW50VGV4dChuOm51bWJlcik6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRDb3VudFRleHQuaW5uZXJIVE1MID0gYCsgJHtufSDQvtGH0LrQvtCyINC30LAg0YHQu9C10LTRg9GO0YnQtdC1INGB0LvQvtCy0L5gO1xuICB9XG5cbiAgcmVuZGVyUmVzdWx0cyhxdWVzdGlvbnM6c3RyaW5nW10sIGFuc3dlcnM6Ym9vbGVhbltdLCByaWdodEFuc3dlcnM6bnVtYmVyLCB3cm9uZ0Fuc3dlcnM6bnVtYmVyLCBzY29yZTpudW1iZXIpOnZvaWQge1xuICAgIHRoaXMuc3ByaW50Q29udGVpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc3ByaW50Q29udGVpbmVyLmlubmVySFRNTCA9IGAke1NwcmludFJlc3VsdC5yZW5kZXIocXVlc3Rpb25zLCBhbnN3ZXJzLCByaWdodEFuc3dlcnMsIHdyb25nQW5zd2Vycywgc2NvcmUpfWA7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgTW9kdWxlVmlldztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5cbmNsYXNzIFdvcmRzIHtcbiAgc3RhdGljIHdvcmRzOiBJV29yZFtdID0gW107XG5cbiAgc3RhdGljIGFnZ3JlZ2F0ZWRXb3JkczogSVdvcmRbXSA9IFtdO1xuXG4gIHN0YXRpYyBsZWFybmVkV29yZHM6IElXb3JkW10gPSBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29yZHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9