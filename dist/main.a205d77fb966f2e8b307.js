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
console.log(storage_1.storage.level, 'storage.level в суппорте  ');
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
                localStorage.removeItem('page');
                window.location.reload();
            }
            if (e.target.classList.contains('level-textbook')) {
                const locationHash = window.location.hash.split('/');
                const unit = +locationHash[1];
                const page = +locationHash[2];
                storage_1.storage.level = unit + 1;
                console.log(unit, page, 'unit, page');
                localStorage.setItem('level', `${unit + 1}`);
                localStorage.setItem('page', `${page}`);
                localStorage.setItem('textbook', 'true');
            }
            if (e.target.classList.contains('level-change')) {
                (0, supporting_func_1.clearLocalStorage)();
            }
            if (e.target.classList.contains('btn-level')) {
                const dataN = Number(e.target.id.replace(/[^0-9]/g, ''));
                if (e.target.id === (`level${dataN}`)) {
                    storage_1.storage.level = dataN;
                    console.log(storage_1.storage.level, 'storage.level в листнере аудиоигры ');
                    localStorage.setItem('level', `${dataN}`);
                    (0, supporting_func_1.clearLocalStorage)();
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
        if ((localStorage.getItem('page'))) {
            page = Number(localStorage.getItem('page'));
        }
        else {
            page = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
        }
        arraylevel = [group, page];
    }
}
levelGame();
console.log(group, page, 'group, page');
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
      <a  class="link level-change" href="#audiocall" >Выбрать уровень</a>
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
    localStorage.removeItem('textbook');
    localStorage.removeItem('page');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy90ZXh0Ym9vay90ZXh0Ym9vay5zY3NzP2UyMGYiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3N0eWxlcy9zdHlsZS5zYXNzP2FhYWYiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2FwaS9hcGktcGF0aC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvYXBpL2FwaS50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9jb250ZW50LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9oYXNoZXMudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL21vZGFsLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL3NtYWxsQ29tcG9uZW50cy9idXR0b25zLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL3NwcmludHJlc3VsdHMudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbnRyb2xsZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyU3ByaW50LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb250cm9sbGVyL2NvbnRyb2xsZXJUZXh0Ym9vay50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvZnVuY3Rpb25hbC9saXN0ZW5lci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvZnVuY3Rpb25hbC9zaG93LXVzZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2Z1bmN0aW9uYWwvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL21vZGVsL21vZGVsLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9tb2RlbC9tb2RlbFNwcmludC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYWJvdXRzcHJpbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL21haW4udHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC9zdGFydC1hdWRpb2NhbGwudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL2F1ZGlvY2FsbC91dGlscy9nYW1lLXJlbmRlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL3V0aWxzL2xpc3RlbmVyLWF1ZGlvY2FsbC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvYXVkaW9jYWxsL3V0aWxzL3N1cHBvcnRpbmctZnVuYy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvbWFpbi50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvc3ByaW50L2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9zcHJpbnQvaW5pdFNwcmludE1WQy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvc3ByaW50L3NwcmludFNldHRpbmdzLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9zdGF0aXN0aWNzL2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy90ZWFtLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy90ZXh0Ym9vay9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvdXRpbHMvZnVuYy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvdmlldy92aWV3LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy92aWV3L3ZpZXdTcHJpbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3dvcmRzL3dvcmRzLnRzIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuXG5jb25zdCBhcGlQYXRoID0gJ2h0dHBzOi8vcnNsYW5nLWxlYXJuaW5nLWVuZ2xpc2gtd29yZHMuaGVyb2t1YXBwLmNvbS8nO1xuY29uc3Qgd29yZHNFbmRwb2ludCA9ICd3b3Jkcyc7XG5jb25zdCB1c2Vyc0VuZHBvaW50ID0gJ3VzZXJzJztcbmNvbnN0IHNpZ25JbiA9ICdzaWduaW4nO1xuY29uc3QgYXBpQ2F0ZWdvcnkgPSAndXNlcldvcmQub3B0aW9uYWwuY2F0ZWdvcnknO1xuXG5leHBvcnQge1xuICBhcGlQYXRoLCB3b3Jkc0VuZHBvaW50LCB1c2Vyc0VuZHBvaW50LCBzaWduSW4sIGFwaUNhdGVnb3J5LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tZWxzZS1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5pbXBvcnQge1xuICBhcGlQYXRoLCB1c2Vyc0VuZHBvaW50LCB3b3Jkc0VuZHBvaW50LCBzaWduSW4sIGFwaUNhdGVnb3J5LFxufSBmcm9tICcuL2FwaS1wYXRoJztcbmltcG9ydCB7XG4gIElVc2VyLCBJV29yZCwgSVVzZXJEYXRhLCBJVXNlcldvcmRzLCBJU2V0dGluZ3MsXG59IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi9mdW5jdGlvbmFsL3N0b3JhZ2UnO1xuXG5jb25zdCBhcGkgPSB7XG5cbiAgYXN5bmMgVXBzZXJ0c05ld1NldHRpbmdzKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxJU2V0dGluZ3MgfCB1bmRlZmluZWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlQYXRofSR7dXNlcnNFbmRwb2ludH0vJHt1c2VySWR9L3NldHRpbmdzYCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc3RvcmFnZS5zZXR0aW5ncyksXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElTZXR0aW5ncztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZXJyb3IgcHV0aW5nIG5ldyBzZXR0aW5ncycpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBHZXRTZXR0aW5ncyh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8SVNldHRpbmdzIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3VzZXJzRW5kcG9pbnR9LyR7dXNlcklkfS9zZXR0aW5nc2AsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElTZXR0aW5ncztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGdldHRpbmcgc2V0dGluZ3MnKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZ2V0QWxsVXNlcldvcmRzKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxJVXNlcldvcmRzW10gfCB1bmRlZmluZWQgPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3VzZXJzRW5kcG9pbnR9LyR7dXNlcklkfSR7d29yZHNFbmRwb2ludH1gLFxuICAgICAgICB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJVXNlcldvcmRzW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBnZXR0aW5nIHdvcmRzJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIENyZWF0ZVVzZXJXb3JkKHVzZXJJZDogc3RyaW5nLCB3b3JkSUQ6c3RyaW5nKTogUHJvbWlzZTxJVXNlcldvcmRzIHwgdW5kZWZpbmVkID4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fS8ke3VzZXJJZH0vJHt3b3Jkc0VuZHBvaW50fS8ke3dvcmRJRH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc3RvcmFnZS51c2VyV29yZCksXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElVc2VyV29yZHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBjcmVhdGluZyB1c2VyIHdvcmQnKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgVXBkYXRlVXNlcldvcmQodXNlcklkOiBzdHJpbmcsIHdvcmRJRDpzdHJpbmcpOiBQcm9taXNlPElVc2VyV29yZHMgfCB1bmRlZmluZWQgPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3VzZXJzRW5kcG9pbnR9LyR7dXNlcklkfS8ke3dvcmRzRW5kcG9pbnR9LyR7d29yZElEfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UudXNlcldvcmQpLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJVXNlcldvcmRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgdXBkYXRpbmcgdXNlciB3b3JkJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIERlbGV0ZVVzZXJXb3JkKHVzZXJJZDogc3RyaW5nLCB3b3JkSUQ6c3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fS8ke3VzZXJJZH0vJHt3b3Jkc0VuZHBvaW50fS8ke3dvcmRJRH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgZGVsZXRpbmcgdXNlciB3b3JkJyk7XG4gICAgfVxuICB9LFxuXG4gIC8vIGFzeW5jIEdldEFsbFVzZXJBZ2dyZWdhdGVkV29yZHModXNlcklkOiBzdHJpbmcsIHBhZ2U6c3RyaW5nLCB3b3Jkc1BlclBhZ2U6IHN0cmluZywgZmlsdGVyOiBzdHJpbmcgKTogUHJvbWlzZTxJV29yZFtdIHwgdW5kZWZpbmVkID4ge1xuICAvLyAgIHRyeSB7XG4gIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fS8ke3VzZXJJZH0vJHt3b3Jkc0VuZHBvaW50fS8ke3BhZ2V9LyR7d29yZHNQZXJQYWdlfS8ke2ZpbHRlcn1gLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gIC8vICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgLy8gICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJV29yZFtdO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gIC8vICAgICB9XG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgZ2V0dGluZyB3b3JkcycpO1xuICAvLyAgIH1cbiAgLy8gfSxcblxuICBhc3luYyBHZXRVc2VyQWdncmVnYXRlZFdvcmRCeUlkKHVzZXJJZDogc3RyaW5nLCB3b3JkSUQ6c3RyaW5nKTogUHJvbWlzZTxJVXNlcldvcmRzIHwgdW5kZWZpbmVkID4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fS8ke3VzZXJJZH0vYWdncmVnYXRlZFdvcmRzLyR7d29yZElEfWAsXG4gICAgICAgIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElVc2VyV29yZHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBnZXR0aW5nIHVzZXIgYWdncmVnYXRlZCB3b3JkJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGNyZWF0ZU5ld1VzZXIobmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxJVXNlciB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHt1c2Vyc0VuZHBvaW50fWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdsZW5ndGggbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZycpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBnZXRVc2VyKGlkOiBzdHJpbmcpOiBQcm9taXNlPElVc2VyIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3VzZXJzRW5kcG9pbnR9LyR7aWR9YCxcbiAgICAgICAgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSVVzZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyB1c2VyU2lnbkluKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPElVc2VyRGF0YSB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVBhdGh9JHtzaWduSW59YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHVzZXInKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZ2V0V29yZHMoZ3JvdXA6IG51bWJlciwgcGFnZTogbnVtYmVyKTogUHJvbWlzZTxJV29yZFtdIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3dvcmRzRW5kcG9pbnR9P2dyb3VwPSR7Z3JvdXB9JnBhZ2U9JHtwYWdlfWAsXG4gICAgICAgIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIElXb3JkW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZ2V0IHdvcmRzXCIpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBnZXRXb3JkKGlkOiBzdHJpbmcpOiBQcm9taXNlPElXb3JkIHwgdW5kZWZpbmVkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpUGF0aH0ke3dvcmRzRW5kcG9pbnR9LyR7aWR9YCxcbiAgICAgICAgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSVdvcmQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZ2V0IHdvcmRcIik7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IHsgYXBpIH07XG4iLCJjb25zdCBDb250ZW50ID0ge1xuICByZW5kZXI6IChjdXN0b21DbGFzcyA9ICcnKTpzdHJpbmcgPT4gYDxkaXYgY2xhc3M9XCJjb250ZW50ICR7Y3VzdG9tQ2xhc3N9XCIgaWQ9XCJjb250ZW50XCI+PC9kaXY+YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCJjb25zdCBGb290ZXIgPSB7XG4gIHJlbmRlcjogKGN1c3RvbUNsYXNzID0gJycpOnN0cmluZyA9PiBgPGZvb3RlciBjbGFzcz1cImZvb3RlciAke2N1c3RvbUNsYXNzfVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2l0aHViLWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9mbHlldGhlclwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5mbHlldGhlcjxhPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGFyaW5hOTkyXCIgY2xhc3M9XCJnaXRodWItbGlua1wiPkRhcmluYTk5MjxhPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQWxlbmFEb3pcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+QWxlbmFEb3o8YT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuPiYjMTY5OyAyMDIyPC9zcGFuPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgY2xhc3M9XCJycy1saW5rXCI+PC9hPlxuICAgICAgICAgICAgPC9mb290ZXI+YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImV4cG9ydCBjb25zdCBoYXNoZXMgPSB7XG4gIG1haW46ICcjbWFpbicsXG4gIHRleHRib29rOiAnI3RleHRib29rJyxcbiAgc3RhdGlzdGljczogJyNzdGF0aXN0aWNzJyxcbiAgYXVkaW9jYWxsOiAnI2F1ZGlvY2FsbCcsXG4gIGFib3V0c3ByaW50OiAnI2Fib3V0c3ByaW50JyxcbiAgc3ByaW50OiAnI3NwcmludCcsXG4gIHRlYW06ICcjdGVhbScsXG59O1xuIiwiaW1wb3J0IHNob3dVc2VyIGZyb20gJy4uL2Z1bmN0aW9uYWwvc2hvdy11c2VyJztcbmltcG9ydCB7IGhhc2hlcyB9IGZyb20gJy4vaGFzaGVzJztcblxuY29uc3QgSGVhZGVyID0ge1xuXG4gIHJlbmRlcihjdXN0b21DbGFzcyA9ICcnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJtb2RhbC1yZXN1bHQtd3JhcHBlclwiPlxuICAgIDxkaXYgaWQ9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cIm1vZGFsLXdpbmRvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImJ0bi1jbG9zZVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXIgJHtjdXN0b21DbGFzc31cIiBpZD1cImhlYWRlclwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJoZWFkZXJfX2xvZ29cIj48YSBocmVmPVwiXCI+UlNMYW5nPC9hPjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2F1dGhcIj5cbiAgICAgICAgICAke3Nob3dVc2VyKHRydWUpfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fYXV0aFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5hdiBjbGFzcz1cImhlYWRlcl9fbWVudVwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnVfX2xpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMubWFpbn1cIiBjbGFzcz1cIm1lbnVfX21haW4gbWVudV9faXRlbV9hY3RpdmVcIj7Qk9C70LDQstC90LDRjzwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCIke2hhc2hlcy50ZXh0Ym9va31cIiBjbGFzcz1cIm1lbnVfX3RleHRib29rXCI+0KPRh9C10LHQvdC40Lo8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7aGFzaGVzLnN0YXRpc3RpY3N9XCIgY2xhc3M9XCJtZW51X19zdGF0aWN0aWNzIG1lbnVfX2l0ZW1fZGlzYWJsZVwiPtCh0YLQsNGC0LjRgdGC0LjQutCwPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMuYXVkaW9jYWxsfVwiIGNsYXNzPVwibWVudV9fYXVkaW9jYWxsXCI+0JDRg9C00LjQvtCy0YvQt9C+0LI8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMuYWJvdXRzcHJpbnR9XCIgY2xhc3M9XCJtZW51X19zcHJpbnRcIj7QodC/0YDQuNC90YI8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMudGVhbX1cIiBjbGFzcz1cIm1lbnVfX3RlYW1cIj7QniDQutC+0LzQsNC90LTQtTwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyLWJ1cmdlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXJnZXItbWVudVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYXV0aFwiPlxuICAgICAgICAgICAgICAke3Nob3dVc2VyKHRydWUpfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2F1dGhcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImhlYWRlcl9fbWVudVwiPlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51X19saXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7aGFzaGVzLm1haW59XCIgY2xhc3M9XCJtZW51X19tYWluIG1lbnVfX2l0ZW1fYWN0aXZlXCI+0JPQu9Cw0LLQvdCw0Y88L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7aGFzaGVzLnRleHRib29rfVwiIGNsYXNzPVwibWVudV9fdGV4dGJvb2tcIj7Qo9GH0LXQsdC90LjQujwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2hhc2hlcy5zdGF0aXN0aWNzfVwiIGNsYXNzPVwibWVudV9fc3RhdGljdGljcyBtZW51X19pdGVtX2Rpc2FibGVcIj7QodGC0LDRgtC40YHRgtC40LrQsDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMuYXVkaW9jYWxsfVwiIGNsYXNzPVwibWVudV9fYXVkaW9jYWxsXCI+0JDRg9C00LjQvtCy0YvQt9C+0LI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIiR7aGFzaGVzLnNwcmludH1cIiBjbGFzcz1cIm1lbnVfX3NwcmludFwiPtCh0L/RgNC40L3RgjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiJHtoYXNoZXMudGVhbX1cIiBjbGFzcz1cIm1lbnVfX3RlYW1cIj7QniDQutC+0LzQsNC90LTQtTwvYT48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICBgO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbmV4cG9ydCBjb25zdCBmb3JtTG9naW4gPSBgIDxmb3JtIGNsYXNzPVwiZm9ybS1zaWduaW5cIiBpZD1cImF1dGhcIj4gICAgICAgXG48aDMgY2xhc3M9XCJmb3JtLXNpZ25pbi1oZWFkaW5nXCI+0JLQstC10LTQuNGC0LUg0YHQstC+0Lgg0LTQsNC90L3Ri9C1PC9oMz5cbjxkaXYgY2xhc3M9XCJmb3JtLXNpZ25pbi1ib2R5XCI+XG4gIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cInVzZXItZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwi0JLQsNGIIEVtYWlsXCIgcmVxdWlyZWQgLz5cbiAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1pbmxlbmd0aD1cIjhcIiBpZD1cInVzZXItcGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCIgcmVxdWlyZWQvPiAgICAgIFxuICA8ZGl2IGNsYXNzPVwiZm9ybS1zaWduaW4tYnV0dG9uc1wiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4tb3JhbmdlXCIgIGlkPVwiYnV0dG9uLW5ldy11c2VyXCIgdHlwZSA9XCJidXR0b25cIj4g0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyA8L2J1dHRvbj4gXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1vcmFuZ2VcIiBpZD1cImF1dG9yaXp0aW9uQnRuXCIgdHlwZT1cInN1Ym1pdFwiPtCS0L7QudGC0Lg8L2J1dHRvbj4gIFxuICA8L2Rpdj5cbiAgPC9kaXY+XG48aDQgY2xhc3M9XCJmb3JtLXNpZ25pbi1lcnJvclwiPjwvaDQ+IFxuPC9mb3JtPmA7XG5cbmV4cG9ydCBjb25zdCBmb3JtUmVnaXN0cmF0aW9uID0gYCA8Zm9ybSBjbGFzcz1cImZvcm0tc2lnbmluXCIgaWQ9XCJyZWdcIj4gICAgICAgXG48aDMgY2xhc3M9XCJmb3JtLXNpZ25pbi1oZWFkaW5nXCI+0JLQstC10LTQuNGC0LUg0YHQstC+0Lgg0LTQsNC90L3Ri9C1PC9oMz5cbjxkaXYgY2xhc3M9XCJmb3JtLXNpZ25pbi1ib2R5XCI+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlci1uYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwidXNlci1uYW1lXCIgcGxhY2Vob2xkZXI9XCLQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIgcmVxdWlyZWQ9XCJcIiAvPlxuICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJ1c2VyLWVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgcmVxdWlyZWQgLz5cbiAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1pbmxlbmd0aD1cIjhcIiBpZD1cInVzZXItcGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCIgcmVxdWlyZWQgLz4gIFxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3JhbmdlXCIgaWQ9XCJyZWdpc3RyYXRpb25fYnRuXCIgdHlwZT1cInN1Ym1pdFwiPtCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0Lgg0LLRhdC+0LQ8L2J1dHRvbj4gIFxuPC9kaXY+XG48aDQgY2xhc3M9XCJmb3JtLXJlZy1lcnJvclwiPjwvaDQ+ICBcbjwvZm9ybT5gO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuZXhwb3J0IGNvbnN0IEJ1dHRvbnMgPSB7XG4gIGNyZWF0ZTogKHN0cjpzdHJpbmcsIGNsYXNzTmFtZTpzdHJpbmcsIGRpc2FibGVkID0gZmFsc2UpOnN0cmluZyA9PiBgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiAke2NsYXNzTmFtZX1cIiAke2Rpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnfT4ke3N0cn08L2J1dHRvbj5gLFxufTtcbiIsImltcG9ydCB5ZXNJbWFnZSBmcm9tICcuLi9hc3NldHMveWVzLnBuZyc7XG5pbXBvcnQgTm9JbWFnZSBmcm9tICcuLi9hc3NldHMvbm8ucG5nJztcblxuY29uc3QgU3ByaW50UmVzdWx0cyA9IHtcbiAgcmVuZGVyKHF1ZXN0aW9uczpzdHJpbmdbXSwgYW5zd2Vyczpib29sZWFuW10sIHJpZ2h0QW5zd2VyczpudW1iZXIsIHdyb25nQW5zd2VyczpudW1iZXIsIHNjb3JlOm51bWJlcik6c3RyaW5nIHtcbiAgICBjb25zdCB0YWJsZVRleHRDb250ZW50OnN0cmluZyA9IHRoaXMuY3JlYXRlVGFibGUocXVlc3Rpb25zLCBhbnN3ZXJzKTtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJyZXN1bHQtY29udGVpbmVyXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwic3ByaW50X19yZXN1bHRfX3Njb3JlXCI+0KLQstC+0Lkg0YDQtdC30YPQu9GM0YLQsNGCOiAke3Njb3JlfSDQvtGH0LrQvtCyIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzcHJpbnRfX3Jlc3VsdFwiPtCf0YDQsNCy0LjQu9GM0L3Ri9GFINC+0YLQstC10YLQvtCyOiAke3JpZ2h0QW5zd2Vyc30uINCe0YjQuNCx0L7QujogJHt3cm9uZ0Fuc3dlcnN9LjwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLWNvbnRlaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPtCS0YvRg9GH0LXQvdC90YvQtSDRgdC70L7QstCwOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJzcHJpbnRfX3RhYmxlX19yZXN1bHRcIj4ke3RhYmxlVGV4dENvbnRlbnR9PC90YWJsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwic3ByaW50X19jbG9zZV9fcmVzdWx0XCIgaHJlZj1cIiNtYWluXCI+0JfQsNC60YDRi9GC0Yw8L2E+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICB9LFxuICBjcmVhdGVUYWJsZTogKHF1ZXN0aW9uczpzdHJpbmdbXSwgYW5zd2Vyczpib29sZWFuW10pOnN0cmluZyA9PiB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzcmMgPSBhbnN3ZXJzW2ldID8geWVzSW1hZ2UgOiBOb0ltYWdlO1xuICAgICAgcmVzdWx0ICs9IGA8dHI+PHRkPiR7cXVlc3Rpb25zW2ldfTwvdGQ+PHRkPjxpbWcgc3JjPVwiJHtzcmN9XCIgYWx0PVwieWVzL25vXCI+PC90ZD48L3RyPmA7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcHJpbnRSZXN1bHRzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuXG4vLyBpbXBvcnQgbW9kYWxBdXRob3JpemF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwnO1xuXG5pbXBvcnQgeyBNZW51SXRlbXMgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgTW9kdWxlTW9kZWwgZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xuaW1wb3J0IGxpc3RlbmVyIGZyb20gJy4uL2Z1bmN0aW9uYWwvbGlzdGVuZXInO1xuaW1wb3J0IGxpc3RlbmVyQXVkaW9DYWxsIGZyb20gJy4uL3BhZ2VzL2F1ZGlvY2FsbC91dGlscy9saXN0ZW5lci1hdWRpb2NhbGwnO1xuaW1wb3J0IHsgc3ByaW50U2V0dGluZ3MsIGNoYW5nZVNwcmludFNldHRpbmdzIH0gZnJvbSAnLi4vcGFnZXMvc3ByaW50L3NwcmludFNldHRpbmdzJztcblxuY2xhc3MgTW9kdWxlQ29udHJvbGxlciB7XG4gIG15TW9kdWxlQ29udGFpbmVyITogSFRNTEVsZW1lbnQ7XG5cbiAgbXlNb2R1bGVNb2RlbCE6IE1vZHVsZU1vZGVsO1xuXG4gIG1lbnVNYWluICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVUZXh0Ym9vayAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51U3RhdGljdGljcyAhOiBIVE1MRWxlbWVudDtcblxuICBtZW51QXVkaW9jYWxsICE6IEhUTUxFbGVtZW50O1xuXG4gIG1lbnVTcHJpbnQgITogSFRNTEVsZW1lbnQ7XG5cbiAgbWVudVRlYW0gITogSFRNTEVsZW1lbnQ7XG5cbiAgYnV0dG9uU3RhcnRTcHJpbnQhOiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICBzcHJpbnRMZXZlbCAhOiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGF1ZGlvY2FsbGdhbWUgITogSFRNTEVsZW1lbnQ7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50LCBtb2RlbDogTW9kdWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbCA9IG1vZGVsO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIGNoYW5nZVNwcmludFNldHRpbmdzKCk7XG4gICAgICBjb25zb2xlLmxvZyhlLm5ld1VSTCwgZS5vbGRVUkwpO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gbW9kYWxBdXRob3JpemF0aW9uLm9wZW4oKTtcbiAgICBsaXN0ZW5lci5vcGVuKCk7XG4gICAgbGlzdGVuZXJBdWRpb0NhbGwuY2xpaygpO1xuICAgIGxpc3RlbmVyQXVkaW9DYWxsLmtleWJvYXJkKCk7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNtYWluJztcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGhhc2hQYWdlTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLnVwZGF0ZVN0YXRlKGhhc2hQYWdlTmFtZSk7XG4gICAgdGhpcy5maW5kTWVudUVsZW1lbnRzKGhhc2hQYWdlTmFtZSk7XG4gICAgc3dpdGNoIChoYXNoUGFnZU5hbWUpIHtcbiAgICAgIGNhc2UgJ2Fib3V0c3ByaW50JzpcbiAgICAgICAgdGhpcy5hZGRCdXR0b25zQWJvdXRTcHJpbnRHYW1lTGlzdGVuZXJzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICBmaW5kTWVudUVsZW1lbnRzKGhhc2hOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBoYXNoOiBzdHJpbmcgPSBoYXNoTmFtZS5zcGxpdCgnLycpWzBdO1xuICAgIHRoaXMubWVudU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbWFpbicpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudVRleHRib29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3RleHRib29rJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51U3RhdGljdGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19zdGF0aWN0aWNzJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5tZW51QXVkaW9jYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2F1ZGlvY2FsbCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMubWVudVNwcmludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19zcHJpbnQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm1lbnVUZWFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3RlYW0nKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBvYmo6IE1lbnVJdGVtcyA9IHtcbiAgICAgIG1haW46IHRoaXMubWVudU1haW4sXG4gICAgICB0ZXh0Ym9vazogdGhpcy5tZW51VGV4dGJvb2ssXG4gICAgICBzdGF0aXN0aWNzOiB0aGlzLm1lbnVTdGF0aWN0aWNzLFxuICAgICAgYXVkaW9jYWxsOiB0aGlzLm1lbnVBdWRpb2NhbGwsXG4gICAgICBzcHJpbnQ6IHRoaXMubWVudVNwcmludCxcbiAgICAgIGFib3V0c3ByaW50OiB0aGlzLm1lbnVTcHJpbnQsXG4gICAgICB0ZWFtOiB0aGlzLm1lbnVUZWFtLFxuICAgIH07XG4gICAgaWYgKHRoaXMubWVudU1haW4pIHtcbiAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5oaWdobGlnaHRBY3RpdmVNZW51SXRlbShvYmosIGhhc2gpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJ1dHRvbnNBYm91dFNwcmludEdhbWVMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy5idXR0b25TdGFydFNwcmludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX3N0YXJ0X19zcHJpbnQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICB0aGlzLnNwcmludExldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwcmludF9fbGV2ZWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMuYnV0dG9uU3RhcnRTcHJpbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zcHJpbnRMZXZlbCkgeyBzcHJpbnRTZXR0aW5ncy5zZXRMZXZlbEZyb21TZWxlY3QodGhpcy5zcHJpbnRMZXZlbC52YWx1ZSk7IH1cbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI3NwcmludCc7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlQ29udHJvbGxlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBNb2R1bGVNb2RlbCB9IGZyb20gJy4uL21vZGVsL21vZGVsU3ByaW50JztcblxuZXhwb3J0IGNsYXNzIE1vZHVsZUNvbnRyb2xsZXIge1xuICBteU1vZHVsZUNvbnRhaW5lciE6IEhUTUxFbGVtZW50O1xuXG4gIG15TW9kdWxlTW9kZWwhOiBNb2R1bGVNb2RlbDtcblxuICBidXR0b25GYWxzZSE6IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gIGJ1dHRvblRydWUhOiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICBzcHJpbnRUaW1lciE6IEhUTUxFbGVtZW50O1xuXG4gIGJ1dHRvblNheVdvcmQhOkhUTUxFbGVtZW50O1xuXG4gIGluaXQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgbW9kZWw6IE1vZHVsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLmZpbmRBdWRpb0VsZW1lbnRzKCk7XG4gICAgdGhpcy5zZXRUaW1lcigpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5oYXNoY2hhbmdlRXZlbnRSZW1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5zZXRCdXR0b25FdmVudExpc3RlbmVycyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKTtcbiAgfVxuXG4gIGhhc2hjaGFuZ2VFdmVudFJlbW92ZSA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2xlYXJJbnRlcnZhbCgpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5zZXRCdXR0b25FdmVudExpc3RlbmVycyk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKTtcbiAgfTtcblxuICBzZXRCdXR0b25FdmVudExpc3RlbmVycyA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICB0aGlzLnNlbGVjdEZhbHNlKCk7XG4gICAgICB0aGlzLm15TW9kdWxlTW9kZWwucHJlcGVhck5leHRXb3JkKCk7XG4gICAgfVxuICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgIHRoaXMuc2VsZWN0VHJ1ZSgpO1xuICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnByZXBlYXJOZXh0V29yZCgpO1xuICAgIH1cbiAgfTtcblxuICBzZXRFdmVudExpc3RlbmVycyA9IChldmVudDpFdmVudCk6dm9pZCA9PiB7XG4gICAgY29uc3QgZWxlbSA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoZWxlbS5jbG9zZXN0KCcuYnV0dG9uX19zcHJpbnRfX2ZhbHNlJykpIHtcbiAgICAgIHRoaXMuc2VsZWN0RmFsc2UoKTtcbiAgICAgIHRoaXMubXlNb2R1bGVNb2RlbC5wcmVwZWFyTmV4dFdvcmQoKTtcbiAgICB9IGVsc2UgaWYgKGVsZW0uY2xvc2VzdCgnLmJ1dHRvbl9fc3ByaW50X190cnVlJykpIHtcbiAgICAgIHRoaXMuc2VsZWN0VHJ1ZSgpO1xuICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnByZXBlYXJOZXh0V29yZCgpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5jbG9zZXN0KCcud29yZF9fc291bmQnKSkge1xuICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3ByaW50X19zYXlfX3dvcmQnKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgICAgdGhpcy5teU1vZHVsZU1vZGVsLnNheVdvcmQoYXVkaW8pO1xuICAgIH1cbiAgfTtcblxuICBmaW5kQXVkaW9FbGVtZW50cygpOnZvaWQge1xuICAgIGNvbnN0IHJpZ2h0QW5zd2VyQXVkaW8gPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNhdWRpb19fcmlnaHQnKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgIGNvbnN0IHdyb25nQW5zd2VyQXVkaW8gPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNhdWRpb19fd3JvbmcnKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgIGNvbnN0IHRpbWVvdmVyQXVkaW8gPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNhdWRpb19fdGltZW92ZXInKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICAgIHRoaXMubXlNb2R1bGVNb2RlbC5nZXRBdWRpbyhyaWdodEFuc3dlckF1ZGlvLCB3cm9uZ0Fuc3dlckF1ZGlvLCB0aW1lb3ZlckF1ZGlvKTtcbiAgfVxuXG4gIHNldFRpbWVyKCk6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRUaW1lciA9IHRoaXMubXlNb2R1bGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnNwcmludF9fdGltZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwuc2V0VGltZXIodGhpcy5zcHJpbnRUaW1lcik7XG4gIH1cblxuICBzZWxlY3RUcnVlKCk6dm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLmNoZWNrQW5zd2VyKHRydWUpO1xuICB9XG5cbiAgc2VsZWN0RmFsc2UoKTp2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwuY2hlY2tBbnN3ZXIoZmFsc2UpO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IElXb3JkIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IFdvcmRzIGZyb20gJy4uL3dvcmRzL3dvcmRzJztcbmltcG9ydCB7IGhhc2hlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGFzaGVzJztcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vYXBpL2FwaSc7XG5cbmV4cG9ydCBjbGFzcyBUZXh0Ym9va0NvbnRyb2xsZXIge1xuICBwYWdlU2VsZWN0b3I6IHN0cmluZztcblxuICB1bml0U2VsZWN0b3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih1bml0U2VsZWN0b3I6IHN0cmluZywgcGFnZVNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVuaXRTZWxlY3RvciA9IHVuaXRTZWxlY3RvcjtcbiAgICB0aGlzLnBhZ2VTZWxlY3RvciA9IHBhZ2VTZWxlY3RvcjtcbiAgfVxuXG4gIGluaXQodW5pdDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZXRFdmVudExpc3RlbmVycyh1bml0KTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKHVuaXQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGNsaWNrOiAoZTogTW91c2VFdmVudCkgPT4gdm9pZCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmICgodGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnModGhpcy51bml0U2VsZWN0b3IpKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgJHtoYXNoZXMudGV4dGJvb2t9LyR7KHRhcmdldCkuZGF0YXNldC51bml0fWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucygnYXVkaW8nKSkge1xuICAgICAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdhdWRpbycpPy5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnBhZ2VTZWxlY3RvcikpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGAke3dpbmRvdy5sb2NhdGlvbi5oYXNofS8keyh0YXJnZXQpLmRhdGFzZXQucGFnZX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodGFyZ2V0KS5pZCA9PT0gJ2dvLWJhY2snKSB7XG4gICAgICAgICAgaWYgKCt3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnLycpWzJdICYmIHVuaXQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYCR7aGFzaGVzLnRleHRib29rfS8ke3VuaXR9YDtcbiAgICAgICAgICB9IGVsc2UgeyB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGAke2hhc2hlcy50ZXh0Ym9va31gOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucygncHJldmlvdXMnKSkge1xuICAgICAgICAgIGNvbnN0IHNwbGl0dGVkSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcvJyk7XG4gICAgICAgICAgbGV0IHBhZ2UgPSArc3BsaXR0ZWRIYXNoWzJdO1xuICAgICAgICAgIGlmIChwYWdlID09PSAxKSByZXR1cm47XG4gICAgICAgICAgcGFnZSAtPSAxO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gW3NwbGl0dGVkSGFzaFswXSwgc3BsaXR0ZWRIYXNoWzFdLCBwYWdlXS5qb2luKCcvJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucygnbmV4dCcpKSB7XG4gICAgICAgICAgY29uc3Qgc3BsaXR0ZWRIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKTtcbiAgICAgICAgICBsZXQgcGFnZSA9ICtzcGxpdHRlZEhhc2hbMl07XG4gICAgICAgICAgY29uc3QgbWF4UGFnZSA9IDMwO1xuICAgICAgICAgIGlmIChwYWdlID09PSBtYXhQYWdlKSByZXR1cm47XG4gICAgICAgICAgcGFnZSArPSAxO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gW3NwbGl0dGVkSGFzaFswXSwgc3BsaXR0ZWRIYXNoWzFdLCBwYWdlXS5qb2luKCcvJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLWRpZmZpY3VsdCcpKSB7XG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FkZGVkJyk7XG4gICAgICAgICAgdGFyZ2V0LmlubmVyVGV4dCA9ICfQodC70L7QttC90L7QtSDRgdC70L7QstC+JztcbiAgICAgICAgICAodGFyZ2V0IGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgY29uc3QgYnRuTGVhcm5lZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5idG4tbGVhcm5lZFtkYXRhLXdvcmQ9XCIke3RhcmdldC5kYXRhc2V0LndvcmR9XCJdYCk7XG4gICAgICAgICAgKGJ0bkxlYXJuZWQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgKGJ0bkxlYXJuZWQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmlubmVyVGV4dCA9ICfQmNC30YPRh9C10L3Qvj8nO1xuICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBhcGkuZ2V0V29yZCh0YXJnZXQuZGF0YXNldC53b3JkIGFzIHN0cmluZylcbiAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIFdvcmRzLmFnZ3JlZ2F0ZWRXb3Jkcy5wdXNoKHJlcyBhcyBJV29yZCk7XG4gICAgICAgICAgICAgICAgV29yZHMubGVhcm5lZFdvcmRzID0gV29yZHMubGVhcm5lZFdvcmRzLmZpbHRlcigod29yZCkgPT4gd29yZC5pZCAhPT0gdGFyZ2V0LmRhdGFzZXQud29yZCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLWxlYXJuZWQnKSkge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhZGRlZCcpO1xuICAgICAgICAgIHRhcmdldC5pbm5lclRleHQgPSAn0JjQt9GD0YfQtdC90L4nO1xuICAgICAgICAgICh0YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBidG5EaWZmaWN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYnRuLWRpZmZpY3VsdFtkYXRhLXdvcmQ9XCIke3RhcmdldC5kYXRhc2V0LndvcmR9XCJdYCk7XG4gICAgICAgICAgKGJ0bkRpZmZpY3VsdCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAoYnRuRGlmZmljdWx0IGFzIEhUTUxCdXR0b25FbGVtZW50KS5pbm5lclRleHQgPSAn0KHQu9C+0LbQvdC+Pyc7XG4gICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IGFwaS5nZXRXb3JkKHRhcmdldC5kYXRhc2V0LndvcmQgYXMgc3RyaW5nKVxuICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgV29yZHMubGVhcm5lZFdvcmRzLnB1c2gocmVzIGFzIElXb3JkKTtcbiAgICAgICAgICAgICAgICBXb3Jkcy5hZ2dyZWdhdGVkV29yZHMgPSBXb3Jkcy5hZ2dyZWdhdGVkV29yZHMuZmlsdGVyKCh3b3JkKSA9PiB3b3JkLmlkICE9PSB0YXJnZXQuZGF0YXNldC53b3JkKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQub25jbGljayA9IGNsaWNrO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXNoYWRvdyAqL1xuXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCB7IGZvcm1Mb2dpbiwgZm9ybVJlZ2lzdHJhdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwnO1xuaW1wb3J0IHNob3dVc2VyIGZyb20gJy4vc2hvdy11c2VyJztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5jbGFzcyBMaXN0ZW5lciB7XG4gIG9wZW4oKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhdXRob3JpemF0aW9uJykpIHtcbiAgICAgICAgY29uc3QgYnRuQ2xvc2VNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2xvc2UnKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG4gICAgICAgIGNvbnN0IG1vZGFsUmVzdWx0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1yZXN1bHQtd3JhcHBlcicpO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICB3cmFwcGVyIS5pbm5lckhUTUwgPSBmb3JtTG9naW47XG4gICAgICAgIG1vZGFsUmVzdWx0V3JhcHBlciEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGNvbnN0IHVzZXJFbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItZW1haWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCB1c2VyUGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLXBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaWYgKHVzZXJFbWFpbElucHV0ICYmIHVzZXJQYXNzd29yZElucHV0KSB7XG4gICAgICAgICAgY29uc3QgYXV0aEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICAgIGlmIChhdXRoRm9ybSkge1xuICAgICAgICAgICAgYXV0aEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGVyckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zaWduaW4tZXJyb3InKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgZXJyRm9ybS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgY29uc3QgdXNlckVtYWlsID0gdXNlckVtYWlsSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICBjb25zdCB1c2VyUGFzc3dvcmQgPSB1c2VyUGFzc3dvcmRJbnB1dCEudmFsdWU7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgYXBpLnVzZXJTaWduSW4odXNlckVtYWlsLCB1c2VyUGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzdG9yYWdlLnVzZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgIHNob3dVc2VyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICBlcnJGb3JtLmlubmVySFRNTCA9ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L3QtSDQvdCw0LnQtNC10L0sINC/0YDQvtCy0LXRgNGM0YLQtSDRgdCy0L7QuCDQtNCw0L3QvdGL0LUg0LjQu9C4INC30LDRgNC10LPQuNGB0YLRgNC40YDRg9C50YLQtdGB0YwnO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidXR0b25OZXdVc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1uZXctdXNlcicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICBpZiAoYnV0dG9uTmV3VXNlcikge1xuICAgICAgICAgIGJ1dHRvbk5ld1VzZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoX2U6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB3cmFwcGVyIS5pbm5lckhUTUwgPSBmb3JtUmVnaXN0cmF0aW9uO1xuICAgICAgICAgICAgY29uc3QgdXNlckVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1lbWFpbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCB1c2VyUGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLXBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1uYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgIGlmICh1c2VyTmFtZUlucHV0ICYmIHVzZXJFbWFpbElucHV0ICYmIHVzZXJQYXNzd29yZElucHV0KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgICAgICAgIGlmIChyZWdpc3RyYXRpb25Gb3JtKSB7XG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGVyckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1yZWctZXJyb3InKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgIGVyckZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyRW1haWwgPSB1c2VyRW1haWxJbnB1dCEudmFsdWU7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGFzc3dvcmQgPSB1c2VyUGFzc3dvcmRJbnB1dCEudmFsdWU7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyTmFtZSA9IHVzZXJOYW1lSW5wdXQhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgYXBpLmNyZWF0ZU5ld1VzZXIodXNlck5hbWUsIHVzZXJFbWFpbCwgdXNlclBhc3N3b3JkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgYXBpLnVzZXJTaWduSW4odXNlckVtYWlsLCB1c2VyUGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS51c2VyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1VzZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJGb3JtLmlubmVySFRNTCA9ICfQktC+0LfQvNC+0LbQvdC+INGN0YLQvtGCIGUtbWFpbCDRg9C20LUg0LfQsNC90Y/Rgiwg0L/QvtC/0YDQvtCx0YPQudGC0LUg0LTRgNGD0LPQvtC5JztcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgICBtb2RhbFJlc3VsdFdyYXBwZXIhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH07XG4gICAgICAgIG92ZXJsYXkhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gICAgICAgIGJ0bkNsb3NlTW9kYWwhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnZXhpdF9idG4nKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICAgICAgICBzdG9yYWdlLnVzZXIgPSB7XG4gICAgICAgICAgbWVzc2FnZTogJycsIHRva2VuOiAnJywgcmVmcmVzaFRva2VuOiAnJywgdXNlcklkOiAnJywgbmFtZTogJycsXG4gICAgICAgIH07XG4gICAgICAgIHNob3dVc2VyKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBsaXN0ZW5lciA9IG5ldyBMaXN0ZW5lcigpO1xuZXhwb3J0IGRlZmF1bHQgbGlzdGVuZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93VXNlcihyZXQ6Ym9vbGVhbikgOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGxldCBjbGFzc05hbWUgPSAnYXV0aG9yaXphdGlvbic7XG4gIGxldCBjb250ZXh0ID0gJ9CS0L7QudGC0LgnO1xuICBpZiAoc3RvcmFnZS51c2VyPy50b2tlbiAhPSAnJykge1xuICAgIGNvbnRleHQgPSAn0JLRi9C50YLQuCc7XG4gICAgY2xhc3NOYW1lID0gJ2V4aXRfYnRuJztcbiAgfVxuICBjb25zdCBodG1sID0gYDxkaXYgY2xhc3M9XCJ1c2VyLXNob3dcIj4gJHtzdG9yYWdlLnVzZXI/Lm5hbWV9IDxidXR0b24gY2xhc3M9JHtjbGFzc05hbWV9PiR7Y29udGV4dH08L2J1dHRvbj4gPC9kaXY+YDtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hdXRoJykgYXMgSFRNTEVsZW1lbnQ7XG4gIGlmIChyZXQpIHtcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuICBoZWFkZXIuaW5uZXJIVE1MID0gaHRtbDtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuaW1wb3J0IHsgSVNldHRpbmdzLCBJVXNlciwgSVVzZXJEYXRhLCBJVXNlcldvcmRzLCBJV29yZCB9IGZyb20gJ3R5cGVzL3R5cGVzJztcblxuY2xhc3MgU3RvcmFnZSB7XG4gIHVzZXI/OiBJVXNlckRhdGE7XG5cbiAgd29yZD86IElXb3JkO1xuXG4gIHdvcmRzPzogSVdvcmRbXTtcblxuICBsZXZlbD86IG51bWJlcjtcblxuICB1c2VyV29yZD86IElVc2VyV29yZHM7XG5cbiAgc2V0dGluZ3M/OiBJU2V0dGluZ3M7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcbiAgICAgIHRoaXMudXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSBhcyBzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVzZXIgPSB7XG4gICAgICAgIG1lc3NhZ2U6ICcnLCB0b2tlbjogJycsIHJlZnJlc2hUb2tlbjogJycsIHVzZXJJZDogJycsIG5hbWU6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3b3JkJykpIHtcbiAgICAgIHRoaXMud29yZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dvcmQnKSBhcyBzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndvcmQgPSB7XG4gICAgICAgIGlkOiAnJywgZ3JvdXA6IDAsIHBhZ2U6IDAsIHdvcmQ6ICcnLCBpbWFnZTogJycsIGF1ZGlvOiAnJywgYXVkaW9NZWFuaW5nOiAnJywgYXVkaW9FeGFtcGxlOiAnJywgdGV4dE1lYW5pbmc6ICcnLCB0ZXh0RXhhbXBsZTogJycsIHRyYW5zY3JpcHRpb246ICcnLCB3b3JkVHJhbnNsYXRlOiAnJywgdGV4dE1lYW5pbmdUcmFuc2xhdGU6ICcnLCB0ZXh0RXhhbXBsZVRyYW5zbGF0ZTogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dvcmRzJykpIHtcbiAgICAgIHRoaXMud29yZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3b3JkcycpIGFzIHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud29yZHMgPSBbXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQtbWVtYmVyICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNhc3MnO1xuXG5pbXBvcnQgTW9kdWxlQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvY29udHJvbGxlcic7XG5pbXBvcnQgTW9kdWxlTW9kZWwgZnJvbSAnLi9tb2RlbC9tb2RlbCc7XG5pbXBvcnQgTW9kdWxlVmlldyBmcm9tICcuL3ZpZXcvdmlldyc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMsIFJvdXRlcywgSW5pdGlhbE9iaiB9IGZyb20gJy4vdHlwZXMvdHlwZXMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyJztcblxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vcGFnZXMvbWFpbic7XG5cbmltcG9ydCBUZXh0Ym9va1BhZ2UgZnJvbSAnLi9wYWdlcy90ZXh0Ym9vayc7XG5pbXBvcnQgQWJvdXRUZWFtUGFnZSBmcm9tICcuL3BhZ2VzL3RlYW0nO1xuaW1wb3J0IFNwcmludEdhbWVQYWdlIGZyb20gJy4vcGFnZXMvc3ByaW50L2luZGV4JztcbmltcG9ydCBBYm91dFNwcmludEdhbWVQYWdlIGZyb20gJy4vcGFnZXMvYWJvdXRzcHJpbnQnO1xuaW1wb3J0IEF1ZGlvY2FsbEdhbWVQYWdlIGZyb20gJy4vcGFnZXMvYXVkaW9jYWxsL2luZGV4JztcbmltcG9ydCBTdGF0aXN0aWNzUGFnZSBmcm9tICcuL3BhZ2VzL3N0YXRpc3RpY3MvaW5kZXgnO1xuaW1wb3J0IHsgQXVkaW9jYWxsR2FtZSB9IGZyb20gJy4vcGFnZXMvYXVkaW9jYWxsL21haW4nO1xuXG5jb25zdCBjb21wb25lbnRzOiBDb21wb25lbnRzID0ge1xuICBoZWFkZXI6IEhlYWRlcixcbiAgY29udGVudDogQ29udGVudCxcbiAgZm9vdGVyOiBGb290ZXIsXG59O1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IHtcbiAgbWFpbjogTWFpblBhZ2UsXG4gIGRlZmF1bHQ6IE1haW5QYWdlLFxuICB0ZXh0Ym9vazogVGV4dGJvb2tQYWdlLFxuICB0ZWFtOiBBYm91dFRlYW1QYWdlLFxuICBzcHJpbnQ6IFNwcmludEdhbWVQYWdlLFxuICBhYm91dHNwcmludDogQWJvdXRTcHJpbnRHYW1lUGFnZSxcbiAgYXVkaW9jYWxsOiBBdWRpb2NhbGxHYW1lUGFnZSxcbiAgYXVkaW9jYWxsZ2FtZTogQXVkaW9jYWxsR2FtZSxcbiAgc3RhdGlzdGljczogU3RhdGlzdGljc1BhZ2UsXG59O1xuXG5jb25zdCBpbml0aWFsT2JqOiBJbml0aWFsT2JqID0ge1xuICBjb250YWluZXI6ICdzcGEnLFxuICByb3V0ZXMsXG4gIGNvbXBvbmVudHMsXG59O1xuXG4vKiAtLS0tLSBzcGEgaW5pdCBtb2R1bGUgLS0tICovXG5jb25zdCBteVNQQSA9ICgoKSA9PiB7XG4gIGxldCB2aWV3OiBNb2R1bGVWaWV3O1xuICBsZXQgbW9kZWw6IE1vZHVsZU1vZGVsO1xuICBsZXQgY29udHJvbGxlcjogTW9kdWxlQ29udHJvbGxlcjtcbiAgcmV0dXJuIHtcbiAgICBpbml0KG9iajogSW5pdGlhbE9iaikge1xuICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnRzKG9iai5jb250YWluZXIsIG9iai5jb21wb25lbnRzKTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lclNQQSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9iai5jb250YWluZXIpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgdmlldyA9IG5ldyBNb2R1bGVWaWV3KCk7XG4gICAgICBtb2RlbCA9IG5ldyBNb2R1bGVNb2RlbCgpO1xuICAgICAgY29udHJvbGxlciA9IG5ldyBNb2R1bGVDb250cm9sbGVyKCk7XG5cbiAgICAgIHZpZXcuaW5pdChjb250YWluZXJTUEEsIHJvdXRlcyk7XG4gICAgICBtb2RlbC5pbml0KHZpZXcpO1xuICAgICAgY29udHJvbGxlci5pbml0KGNvbnRhaW5lclNQQSwgbW9kZWwpO1xuICAgIH0sXG5cbiAgICByZW5kZXJDb21wb25lbnRzKGNvbnRhaW5lcjogc3RyaW5nLCBjb21wb25lbnRzT2JqOiBDb21wb25lbnRzKSB7XG4gICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVyKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IGNvbXBvbmVudHNMaXN0ID0gT2JqZWN0LmtleXMoY29tcG9uZW50c09iaik7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb21wb25lbnRzTGlzdCkge1xuICAgICAgICByb290LmlubmVySFRNTCArPSBjb21wb25lbnRzT2JqW2l0ZW0gYXMga2V5b2YgQ29tcG9uZW50c10ucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn0pKCk7XG5cbi8qIC0tLS0tLSBlbmQgYXBwIG1vZHVsZSAtLS0tLSAqL1xuXG4vKiogKiAtLS0gaW5pdCBtb2R1bGUgLS0tICoqICovXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbXlTUEEuaW5pdChpbml0aWFsT2JqKTtcbn0pO1xuIiwiaW1wb3J0IE1vZGVsVmlldyBmcm9tICcuLi92aWV3L3ZpZXcnO1xuaW1wb3J0IHsgTWVudUl0ZW1zIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuXG5jbGFzcyBNb2R1bGVNb2RlbCB7XG4gIG15TW9kdWxlVmlldyE6IE1vZGVsVmlldztcblxuICBpbml0KHZpZXc6IE1vZGVsVmlldyk6IHZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVWaWV3ID0gdmlldztcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKHBhZ2VOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJDb250ZW50KHBhZ2VOYW1lKTtcbiAgfVxuXG4gIGhpZ2hsaWdodEFjdGl2ZU1lbnVJdGVtKG9iajogTWVudUl0ZW1zLCBoYXNoTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcuaGlnaGxpZ2h0QWN0aXZlTWVudUl0ZW0ob2JqLCBoYXNoTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlTW9kZWw7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cblxuaW1wb3J0IHsgTW9kdWxlVmlldyB9IGZyb20gJy4uL3ZpZXcvdmlld1NwcmludCc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCB7IGFwaVBhdGggfSBmcm9tICcuLi9hcGkvYXBpLXBhdGgnO1xuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyByYW5kb21JbnRlZ2VyIH0gZnJvbSAnLi4vdXRpbHMvZnVuYyc7XG5pbXBvcnQgeyBzcHJpbnRTZXR0aW5ncyB9IGZyb20gJy4uL3BhZ2VzL3NwcmludC9zcHJpbnRTZXR0aW5ncyc7XG5cbmV4cG9ydCBjbGFzcyBNb2R1bGVNb2RlbCB7XG4gIG15TW9kdWxlVmlldyE6IE1vZHVsZVZpZXc7XG5cbiAgbGV2ZWw6IG51bWJlciA9IHNwcmludFNldHRpbmdzLnNwcmludExldmVsO1xuXG4gIHBhZ2VzITogbnVtYmVyW107XG5cbiAgYWN0aXZlMjBXb3JkcyAhOiBJV29yZFtdO1xuXG4gIGFjdGl2ZVdvcmROdW1iZXIgPSAwO1xuXG4gIGFjdGl2ZVBhZ2VOdW1iZXIgPSBzcHJpbnRTZXR0aW5ncy5zcHJpbnRQYWdlO1xuXG4gIHJhbmRvbVRyYW5zbGF0aW9uTnVtYmVyICE6IG51bWJlcjtcblxuICBhdWRpb1JpZ2h0ICE6IEhUTUxBdWRpb0VsZW1lbnQ7XG5cbiAgdGltZXIhOm51bWJlcjtcblxuICB0aW1lcklkICE6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPjtcblxuICBzY29yZSA9IDA7XG5cbiAgc2NvcmVGb3JSaWdodEFuc3dlciA9IDEwO1xuXG4gIG1heFNjb3JlRm9yUmlnaHRBbnN3ZXIgPSA4MDtcblxuICBhbW91bnRPZlJpZ2h0QW5zd2Vyc0ZvckJpZ2dlclNjb3JlID0gMztcblxuICBhcnJheU9mUXVlc3Rpb246IHN0cmluZ1tdID0gW107XG5cbiAgYXJyYXlPZkFuc3dlcnM6IGJvb2xlYW5bXSA9IFtdO1xuXG4gIGFtb3VudE9mUmlnaHRBbnN3ZXJzID0gMDtcblxuICByaWdodEFuc3dlckF1ZGlvICE6IEhUTUxBdWRpb0VsZW1lbnQ7XG5cbiAgd3JvbmdBbnN3ZXJBdWRpbyE6IEhUTUxBdWRpb0VsZW1lbnQ7XG5cbiAgdGltZW92ZXJBdWRpbyE6SFRNTEF1ZGlvRWxlbWVudDtcblxuICBpbml0KHZpZXc6IE1vZHVsZVZpZXcpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVWaWV3ID0gdmlldztcbiAgICB0aGlzLmZpbGxBbmRTb3J0UGFnZXMoKTtcbiAgICB0aGlzLmdldFdvcmRzRnJvbUFwaSgpO1xuICB9XG5cbiAgc2F5V29yZChhdWRpbzpIVE1MQXVkaW9FbGVtZW50KTp2b2lkIHtcbiAgICBhdWRpby5zcmMgPSBgJHthcGlQYXRoICsgdGhpcy5hY3RpdmUyMFdvcmRzW3RoaXMuYWN0aXZlV29yZE51bWJlcl0uYXVkaW99YDtcbiAgICBhdWRpby5wbGF5KCk7XG4gIH1cblxuICBmaWxsQW5kU29ydFBhZ2VzKCk6dm9pZCB7XG4gICAgdGhpcy5wYWdlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgdGhpcy5wYWdlcy5wdXNoKGkpO1xuICAgIH1cbiAgICBpZiAoIXNwcmludFNldHRpbmdzLnNwcmludEZyb21UZXh0Ym9vaykgeyB0aGlzLnBhZ2VzLnNvcnQoKCkgPT4gMC41IC0gTWF0aC5yYW5kb20oKSk7IH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBhZ2VzKTtcbiAgfVxuXG4gIGFzeW5jIGdldFdvcmRzRnJvbUFwaSgpOiBQcm9taXNlPElXb3JkW10gfCB2b2lkPiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldFdvcmRzKHRoaXMubGV2ZWwsIHRoaXMucGFnZXNbdGhpcy5hY3RpdmVQYWdlTnVtYmVyXSkgYXMgSVdvcmRbXTtcbiAgICB0aGlzLmFjdGl2ZTIwV29yZHMgPSBBcnJheS5mcm9tKHJlcyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hY3RpdmUyMFdvcmRzKTtcbiAgICBpZiAodGhpcy5hY3RpdmVQYWdlTnVtYmVyID09PSAwIHx8IHNwcmludFNldHRpbmdzLnNwcmludEZyb21UZXh0Ym9vaykgeyB0aGlzLnByZXBlYXJGaXJzdFdvcmQoKTsgfVxuICB9XG5cbiAgcHJlcGVhckZpcnN0V29yZCgpOnZvaWQge1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdGhpcy5nZW5lcmF0ZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgeyB3b3JkIH0gPSB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5hY3RpdmVXb3JkTnVtYmVyXTtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJXb3JkKHdvcmQsIHRyYW5zbGF0aW9uKTtcbiAgfVxuXG4gIHByZXBlYXJOZXh0V29yZCgpOnZvaWQge1xuICAgIChzcHJpbnRTZXR0aW5ncy5zcHJpbnRGcm9tVGV4dGJvb2spID8gdGhpcy5jaGVja1dvcmRzTnVtYmVyc0Zyb21UZXh0Ym9vaygpIDogdGhpcy5jaGVja1dvcmRzTnVtYmVycygpO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdGhpcy5nZW5lcmF0ZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgeyB3b3JkIH0gPSB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5hY3RpdmVXb3JkTnVtYmVyXTtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJXb3JkKHdvcmQsIHRyYW5zbGF0aW9uKTtcbiAgICB0aGlzLmFycmF5T2ZRdWVzdGlvbi5wdXNoKHdvcmQpO1xuICB9XG5cbiAgY2hlY2tXb3Jkc051bWJlcnMoKTp2b2lkIHtcbiAgICBpZiAodGhpcy5hY3RpdmVXb3JkTnVtYmVyID09PSAxOSkge1xuICAgICAgdGhpcy5hY3RpdmVQYWdlTnVtYmVyICs9IDE7XG4gICAgICB0aGlzLmFjdGl2ZVdvcmROdW1iZXIgPSAwO1xuICAgICAgdGhpcy5nZXRXb3Jkc0Zyb21BcGkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVXb3JkTnVtYmVyICs9IDE7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tXb3Jkc051bWJlcnNGcm9tVGV4dGJvb2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlV29yZE51bWJlciA9PT0gMTkpIHtcbiAgICAgIHRoaXMuYWN0aXZlUGFnZU51bWJlciAtPSAxO1xuICAgICAgaWYgKHRoaXMuYWN0aXZlUGFnZU51bWJlciA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmFjdGl2ZVdvcmROdW1iZXIgPSAwO1xuICAgICAgdGhpcy5nZXRXb3Jkc0Zyb21BcGkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVXb3JkTnVtYmVyICs9IDE7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVUcmFuc2xhdGlvbigpOnN0cmluZyB7XG4gICAgY29uc3QgbWluID0gKHRoaXMuYWN0aXZlV29yZE51bWJlciA+PSAyKSA/IHRoaXMuYWN0aXZlV29yZE51bWJlciAtIDIgOiAwO1xuICAgIGNvbnN0IG1heCA9ICh0aGlzLmFjdGl2ZVdvcmROdW1iZXIgKyAyIDw9IDE5KSA/IHRoaXMuYWN0aXZlV29yZE51bWJlciArIDIgOiAxOTtcbiAgICB0aGlzLnJhbmRvbVRyYW5zbGF0aW9uTnVtYmVyID0gcmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLnJhbmRvbVRyYW5zbGF0aW9uTnVtYmVyXS53b3JkVHJhbnNsYXRlO1xuICB9XG5cbiAgY2hlY2tBbnN3ZXIoYW5zd2VyOmJvb2xlYW4pOnZvaWQge1xuICAgIGNvbnN0IHRyYW5zbGF0ZTpzdHJpbmcgPSB0aGlzLmFjdGl2ZTIwV29yZHNbdGhpcy5hY3RpdmVXb3JkTnVtYmVyXS53b3JkVHJhbnNsYXRlO1xuICAgIGNvbnN0IHJpZ2h0VHJhbnNsYXRlOnN0cmluZyA9IHRoaXMuYWN0aXZlMjBXb3Jkc1t0aGlzLnJhbmRvbVRyYW5zbGF0aW9uTnVtYmVyXS53b3JkVHJhbnNsYXRlO1xuICAgIGlmICgodHJhbnNsYXRlID09PSByaWdodFRyYW5zbGF0ZSkgPT09IGFuc3dlcikge1xuICAgICAgdGhpcy5yaWdodEFuc3dlckF1ZGlvLnBsYXkoKTtcbiAgICAgIHRoaXMuYXJyYXlPZkFuc3dlcnMucHVzaCh0cnVlKTtcbiAgICAgIHRoaXMuYW5hbHl6ZVRydWVBbnN3ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53cm9uZ0Fuc3dlckF1ZGlvLnBsYXkoKTtcbiAgICAgIHRoaXMuYXJyYXlPZkFuc3dlcnMucHVzaChmYWxzZSk7XG4gICAgICB0aGlzLmFuYWx5emVGYWxzZUFuc3dlcigpO1xuICAgIH1cbiAgfVxuXG4gIHNldFRpbWVyID0gKHRpbWVyRWxlbTogSFRNTEVsZW1lbnQpOnZvaWQgPT4ge1xuICAgIHRoaXMudGltZXIgPSBOdW1iZXIodGltZXJFbGVtLnRleHRDb250ZW50KTtcblxuICAgIGNvbnN0IHRpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRpbWVyIC09IDE7XG4gICAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJUaW1lcih0aGlzLnRpbWVyLCB0aW1lckVsZW0pO1xuICAgICAgaWYgKHRoaXMudGltZXIgPT09IDApIHtcbiAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRpbWVyID09PSA1KSB7XG4gICAgICAgIHRoaXMudGltZW92ZXJBdWRpby5wbGF5KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnRpbWVySWQgPSBzZXRJbnRlcnZhbCh0aWNrLCAxMDAwKTtcbiAgfTtcblxuICBjbGVhckludGVydmFsID0gKCk6dm9pZCA9PiB7XG4gICAgaWYgKHRoaXMudGltZXJJZCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xuICAgIH1cbiAgfTtcblxuICBjb3VudFNjb3JlKCk6dm9pZCB7XG4gICAgdGhpcy5zY29yZSArPSB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXI7XG4gICAgaWYgKHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlciA9PT0gdGhpcy5tYXhTY29yZUZvclJpZ2h0QW5zd2VyKSB7XG4gICAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJTY29yZShTdHJpbmcodGhpcy5zY29yZSksIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJTY29yZShTdHJpbmcodGhpcy5zY29yZSkpO1xuICAgIH1cbiAgfVxuXG4gIGFuYWx5emVGYWxzZUFuc3dlcigpOnZvaWQge1xuICAgIHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnMgPSAwO1xuICAgIHRoaXMubXlNb2R1bGVWaWV3LmNsZWFyU3ByaW50Q291bnQoKTtcbiAgICB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgPSAxMDtcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJDb3VudFRleHQodGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyKTtcbiAgfVxuXG4gIGFuYWx5emVUcnVlQW5zd2VyKCk6dm9pZCB7XG4gICAgdGhpcy5hbW91bnRPZlJpZ2h0QW5zd2VycyArPSAxO1xuICAgIHRoaXMuY291bnRTY29yZSgpO1xuICAgIGlmICh0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzID09PSB0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzRm9yQmlnZ2VyU2NvcmUgJiYgdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyICE9PSB0aGlzLm1heFNjb3JlRm9yUmlnaHRBbnN3ZXIpIHtcbiAgICAgIHRoaXMuZ2V0QmlnZ2VyU2NvcmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYW1vdW50T2ZSaWdodEFuc3dlcnMgPT09ICh0aGlzLmFtb3VudE9mUmlnaHRBbnN3ZXJzRm9yQmlnZ2VyU2NvcmUgKyAxKSAmJiB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgIT09IHRoaXMubWF4U2NvcmVGb3JSaWdodEFuc3dlcikge1xuICAgICAgdGhpcy5teU1vZHVsZVZpZXcucmV0dXJuVG9PbmVTcHJpbnRDb3VudCgpO1xuICAgICAgdGhpcy5hbW91bnRPZlJpZ2h0QW5zd2VycyA9IDE7XG4gICAgfVxuICB9XG5cbiAgZ2V0QmlnZ2VyU2NvcmUoKTp2b2lkIHtcbiAgICB0aGlzLnNjb3JlRm9yUmlnaHRBbnN3ZXIgPSAodGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyID09PSB0aGlzLm1heFNjb3JlRm9yUmlnaHRBbnN3ZXIpID8gdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyIDogdGhpcy5zY29yZUZvclJpZ2h0QW5zd2VyICo9IDI7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyQ291bnRUZXh0KHRoaXMuc2NvcmVGb3JSaWdodEFuc3dlcik7XG4gIH1cblxuICBzdG9wR2FtZSgpOnZvaWQge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcbiAgICBsZXQgcmlnaHRBbnN3ZXJzID0gMDtcbiAgICBsZXQgd3JvbmdBbnN3ZXJzID0gMDtcbiAgICB0aGlzLmFycmF5T2ZBbnN3ZXJzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHJpZ2h0QW5zd2VycyArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3JvbmdBbnN3ZXJzICs9IDE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyUmVzdWx0cyh0aGlzLmFycmF5T2ZRdWVzdGlvbiwgdGhpcy5hcnJheU9mQW5zd2VycywgcmlnaHRBbnN3ZXJzLCB3cm9uZ0Fuc3dlcnMsIHRoaXMuc2NvcmUpO1xuICB9XG5cbiAgZ2V0QXVkaW8ocmlnaHRBbnN3ZXI6SFRNTEF1ZGlvRWxlbWVudCwgd3JvbmdBbnN3ZXI6SFRNTEF1ZGlvRWxlbWVudCwgdGltZW92ZXI6SFRNTEF1ZGlvRWxlbWVudCk6dm9pZCB7XG4gICAgdGhpcy5yaWdodEFuc3dlckF1ZGlvID0gcmlnaHRBbnN3ZXI7XG4gICAgdGhpcy53cm9uZ0Fuc3dlckF1ZGlvID0gd3JvbmdBbnN3ZXI7XG4gICAgdGhpcy50aW1lb3ZlckF1ZGlvID0gdGltZW92ZXI7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgTW9kdWxlTW9kZWw7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IHsgQnV0dG9ucyB9IGZyb20gJy4uL2NvbXBvbmVudHMvc21hbGxDb21wb25lbnRzL2J1dHRvbnMnO1xuaW1wb3J0IHsgc3ByaW50U2V0dGluZ3MgfSBmcm9tICcuL3NwcmludC9zcHJpbnRTZXR0aW5ncyc7XG5cbmNvbnN0IEFib3V0U3ByaW50R2FtZVBhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ2Fib3V0c3ByaW50JyxcbiAgcmVuZGVyTGV2ZWxzKCk6c3RyaW5nIHtcbiAgICByZXR1cm4gYDxwPtCS0YvQsdC10YDQuCDRg9GA0L7QstC10L3RjCDRgdC70L7QttC90L7RgdGC0Lg8L3A+XG4gICAgPHNlbGVjdCBjbGFzcz1cInNwcmludF9fbGV2ZWxcIj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJsZXZlbDBcIj7Qo9GA0L7QstC10L3RjCAxPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibGV2ZWwxXCI+0KPRgNC+0LLQtdC90YwgMjwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImxldmVsMlwiPtCj0YDQvtCy0LXQvdGMIDM8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJsZXZlbDNcIj7Qo9GA0L7QstC10L3RjCA0PC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibGV2ZWw0XCI+0KPRgNC+0LLQtdC90YwgNTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImxldmVsNVwiPtCj0YDQvtCy0LXQvdGMIDY8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5gO1xuICB9LFxuICByZW5kZXJJbnN0cnVjdGlvbnMoKTpzdHJpbmcge1xuICAgIHJldHVybiBgPHAgY2xhc3M9XCJzcHJpbnRfX3RleHRcIj7QmNCz0YDQsCDQodC/0YDQuNC90YIg0L/QvtC80L7QttC10YIg0YLQtdCx0LUg0L/RgNC+0LLQtdGA0LjRgtGMINC60LDQuiDRhdC+0YDQvtGI0L4g0YLRiyDQt9C90LDQtdGI0Ywg0YHQu9C+0LLQsC48YnI+XG4gICAg0JjQs9GA0LAg0LTQu9C40YLRgdGPIDEg0LzQuNC90YPRgtGDINC40LvQuCDQv9C+0LrQsCDQvdC1INC30LDQutC+0L3Rh9Cw0YLRjNGB0Y8g0YHQu9C+0LLQsC48YnI+XG4gICAg0KfRgtC+0LHRiyDQtNCw0YLRjCDQvtGC0LLQtdGCLCDQutC70LjQutCw0Lkg0L/QviDQvdC10LzRgyDQvNGL0YjQutC+0Lkg0LjQu9C4INC90LDQttC40LzQsNC5INC60LvQsNCy0LjRiNC4LdGB0YLRgNC10LvQutC4LjwvcD5gO1xuICB9LFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz5cbiAgICAgIDxoMiBjbGFzcz0nc3ByaW50X190aXRsZSc+0KHQv9GA0LjQvdGCPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnRfX3J1bGVzXCI+XG4gICAgICAgICR7dGhpcy5yZW5kZXJJbnN0cnVjdGlvbnMoKX1cbiAgICAgICAgJHsoc3ByaW50U2V0dGluZ3MucHJldmlvdXNIYXNoTmFtZUFycmF5KCkubGVuZ3RoICE9PSAzKSA/IHRoaXMucmVuZGVyTGV2ZWxzKCkgOiAnJ31cbiAgICAgICAgJHtCdXR0b25zLmNyZWF0ZSgn0J3QsNGH0LDRgtGMJywgJ2J1dHRvbl9fc3RhcnRfX3NwcmludCcsIGZhbHNlKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dFNwcmludEdhbWVQYWdlO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7IHN0YXJ0U2NyaW5BdWRpb0NhbGwgfSBmcm9tICcuL3N0YXJ0LWF1ZGlvY2FsbCc7XG5cbmNvbnN0IEF1ZGlvY2FsbEdhbWVQYWdlID0ge1xuICBjbGFzc25hbWU6ICdhdWRpb2NhbGwnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgICA8ZGl2IGNsYXNzID0gJ2F1ZGlvLWNvbnRhaW5lciAke3RoaXMuY2xhc3NuYW1lfS1jb250ZWluZXInPiAke3N0YXJ0U2NyaW5BdWRpb0NhbGwucmVuZGVyKCl9PC9kaXY+O1xuICAgICAgJHtGb290ZXIucmVuZGVyKCl9XG4gICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdWRpb2NhbGxHYW1lUGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgeyBnYW1lQXJlYSB9IGZyb20gJy4vdXRpbHMvZ2FtZS1yZW5kZXInO1xuXG5jb25zdCBBdWRpb2NhbGxHYW1lID0ge1xuICAvLyBoYXNoZXM6IHtcblxuICAvLyAgIG1haW46ICcjbWFpbicsXG5cbiAgLy8gfSxcblxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICAgIDxkaXYgY2xhc3MgPSAnY29udGFpbmVyJz4gXG4gICAgICAgPGEgY2xhc3M9XCJnby1tYWluIFwiIGhyZWY9JyNtYWluJyA+0JLQtdGA0L3Rg9GC0YzRgdGPIDxicj4g0L3QsCDQs9C70LDQstC90YPRjjwvYT4gXG4gICAgICAgICA8ZGl2IGNsYXNzID0gJ2dhbWUnPiAke2dhbWVBcmVhfSA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgeyBBdWRpb2NhbGxHYW1lIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmV4cG9ydCBjb25zdCBzdGFydFNjcmluQXVkaW9DYWxsID0ge1xuICBoYXNoZXM6IHtcblxuICAgIGF1ZGlvY2FsbEdhbWU6ICcjYXVkaW9jYWxsR2FtZScsXG5cbiAgfSxcblxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGV4dGJvb2snKSA9PT0gJ3RydWUnKSB7XG4gICAgICBodG1sID0gLyogaHRtbCAqL2AgXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdWRpby1jYWxsXCI+IFxuICAgICAgICA8cCBjbGFzcz1cImF1ZGlvLWNhbGxfX3RleHRcIj7QkiDQuNCz0YDQtSDQsNGD0LTQuNC+0LLRi9C30L7QsiDQstCw0LzQvdGD0LbQvdC+INCy0YvQsdGA0LDRgtGMINC/0YDQsNCy0LjQu9GM0L3Ri9C5INC/0LXRgNC10LLQvtC0INGB0LvQvtCy0LAuIDxicj5cbiAgICAgIFxuICAgICAgICDQp9GC0L7QsdGLINC40LPRgNCw0YLRjCDRgSDQv9C+0LzQvtGJ0YzRjiDQutC70LDQstC40LDRgtGD0YDRiywg0LjRgdC/0L7Qu9GM0LfRg9C5INC60LvQsNCy0LjRiNC4XG4gICAgICAgIDEsIDIsIDMsIDQsIDUgINGH0YLQvtCx0Ysg0LTQsNGC0Ywg0L7RgtCy0LXRgixcbiAgICAgICAgc3BhY2UgLSDQtNC70Y8g0LLQvtGB0L/RgNC+0LjQt9Cy0LXQtNC10L3QuNGPINC30LLRg9C60LAuXG4gICAgICAgIDwvcD5cbiAgICAgICA8YSBpZD1cImxldmVsdGV4dGJvb2tcIiBjbGFzcz1cImJ0bi1sZXZlbCBsaW5rXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0JjQs9GA0LDRgtGMPC9hPlxuICAgPlxuICAgICAgYDtcbiAgICB9IGVsc2Uge1xuICAgICAgaHRtbCA9IC8qIGh0bWwgKi9gIFxuXG48ZGl2IGNsYXNzPVwiYXVkaW8tY2FsbFwiPiBcbiAgPHAgY2xhc3M9XCJhdWRpby1jYWxsX190ZXh0XCI+0JIg0LjQs9GA0LUg0LDRg9C00LjQvtCy0YvQt9C+0LIg0LLQsNC80L3Rg9C20L3QviDQstGL0LHRgNCw0YLRjCDQv9GA0LDQstC40LvRjNC90YvQuSDQv9C10YDQtdCy0L7QtCDRgdC70L7QstCwLiA8YnI+XG5cbiAg0KfRgtC+0LHRiyDQuNCz0YDQsNGC0Ywg0YEg0L/QvtC80L7RidGM0Y4g0LrQu9Cw0LLQuNCw0YLRg9GA0YssINC40YHQv9C+0LvRjNC30YPQuSDQutC70LDQstC40YjQuFxuICAxLCAyLCAzLCA0LCA1ICDRh9GC0L7QsdGLINC00LDRgtGMINC+0YLQstC10YIsXG4gIHNwYWNlIC0g0LTQu9GPINCy0L7RgdC/0YDQvtC40LfQstC10LTQtdC90LjRjyDQt9Cy0YPQutCwLlxuICA8YnI+IDxicj5cbiAg0JLRi9Cx0LXRgNC4INGD0YDQvtCy0LXQvdGMINGB0LvQvtC20L3QvtGB0YLQuDo8L3A+XG4gPGEgaWQ9XCJsZXZlbDFcIiBjbGFzcz1cImJ0bi1sZXZlbCBsaW5rXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgMTwvYT5cbiBcbiA8YSBpZD1cImxldmVsMlwiIGNsYXNzPVwiYnRuLWxldmVsIGxpbmtcIiBocmVmPVwiJHt0aGlzLmhhc2hlcy5hdWRpb2NhbGxHYW1lfVwiID7Qo9GA0L7QstC10L3RjCAyPC9hPlxuXG4gPGEgaWQ9XCJsZXZlbDNcIiBjbGFzcz1cImJ0bi1sZXZlbCBsaW5rXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgMzwvYT5cblxuIDxhIGlkPVwibGV2ZWw0XCIgY2xhc3M9XCJidG4tbGV2ZWwgbGlua1wiIGhyZWY9XCIke3RoaXMuaGFzaGVzLmF1ZGlvY2FsbEdhbWV9XCIgPtCj0YDQvtCy0LXQvdGMIDQ8L2E+XG5cbiA8YSBpZD1cImxldmVsNVwiIGNsYXNzPVwiYnRuLWxldmVsIGxpbmtcIiBocmVmPVwiJHt0aGlzLmhhc2hlcy5hdWRpb2NhbGxHYW1lfVwiID7Qo9GA0L7QstC10L3RjCA1PC9hPlxuXG4gPGEgaWQ9XCJsZXZlbDZcIiBjbGFzcz1cImJ0bi1sZXZlbCBsaW5rXCIgaHJlZj1cIiR7dGhpcy5oYXNoZXMuYXVkaW9jYWxsR2FtZX1cIiA+0KPRgNC+0LLQtdC90YwgNjwvYT5cbmA7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5cbmltcG9ydCB7IGFwaVBhdGggfSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpLXBhdGgnO1xuaW1wb3J0IHsgcHJpbnRCdG5TdHJpbmcsIHdvcmRPYmogfSBmcm9tICcuL3N1cHBvcnRpbmctZnVuYyc7XG5cbmV4cG9ydCBjb25zdCBnYW1lQXJlYSA9IGAgXG4gPGRpdiBjbGFzcz1cImF1ZGlvLWNvbnRhaW5lci1nYW1lXCI+IFxuICAgIDxkaXYgY2xhc3M9XCJidG4tc291bmRcIj48ZGl2IGNsYXNzPVwic291bmQtd3JhcHBlclwiPiBcbiAgICA8YXVkaW8gY2xhc3M9XCJhdWRpb1wiIHNyYz1cIiR7YXBpUGF0aCArIHdvcmRPYmouYXVkaW99XCIgYXV0b3BsYXk+PC9hdWRpbz4gPC9kaXY+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJpZ2h0LWFuc3dlclwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+ICR7cHJpbnRCdG5TdHJpbmcoKX08L2Rpdj5cbiAgPC9kaXY+XG4gYDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuXG5pbXBvcnQgeyBhcGlQYXRoIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS1wYXRoJztcbmltcG9ydCB7IGNsZWFyTG9jYWxTdG9yYWdlLCBzb3VuZEF1ZGlvLCB3b3JkT2JqIH0gZnJvbSAnLi9zdXBwb3J0aW5nLWZ1bmMnO1xuaW1wb3J0IGF1ZGlvUGF0aFdyb25nIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9hdWRpby93cm9uZy1hbnN3ZXIubXAzJztcbmltcG9ydCBhdWRpb1BhdGhSaWdodCBmcm9tICcuLi8uLi8uLi9hc3NldHMvYXVkaW8vcmlnaHQtYW5zd2VyLm1wMyc7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vLi4vLi4vZnVuY3Rpb25hbC9zdG9yYWdlJztcblxubGV0IHJvdW5kID0gMDtcbmxldCBzY29yZSA9IDA7XG5sZXQgYXJyYXlXcm9uZ1dvcmRzOiBzdHJpbmdbXSA9IFtdO1xuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcnJheVdyb25nV29yZHMnKSA9PT0gbnVsbCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlXcm9uZ1dvcmRzKSk7XG59XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlJykgPT09IG51bGwpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlJywgSlNPTi5zdHJpbmdpZnkoc2NvcmUpKTtcbn1cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm91bmQnKSA9PT0gbnVsbCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncm91bmQnLCBKU09OLnN0cmluZ2lmeShyb3VuZCkpO1xufVxuY29uc29sZS5sb2coc3RvcmFnZS5sZXZlbCwgJ3N0b3JhZ2UubGV2ZWwg0LIg0YHRg9C/0L/QvtGA0YLQtSAgJyk7XG5jbGFzcyBMaXN0ZW5lckF1ZGlvQ2FsbCB7XG4gIGtleWJvYXJkKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnICcpIHtcbiAgICAgICAgc291bmRBdWRpbygoYXBpUGF0aCArIHdvcmRPYmouYXVkaW8pKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGFOID0gTnVtYmVyKGUua2V5KTtcbiAgICAgIGlmIChlLmtleSA9PT0gYE51bXBhZCAke2RhdGFOfWAgfHwgZS5rZXkgPT09IGAke2RhdGFOfWApIHtcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5idG4tdHJhbnNsYXRpb25bZGF0YS1udW09XCIke2RhdGFOfVwiXWApKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgKGVsZW0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xpaygpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1zb3VuZCcpKSB7XG4gICAgICAgIHNvdW5kQXVkaW8oKGFwaVBhdGggKyB3b3JkT2JqLmF1ZGlvKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXRyYW5zbGF0aW9uJykpIHtcbiAgICAgICAgcm91bmQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvdW5kJykpICsgMTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JvdW5kJywgcm91bmQudG9TdHJpbmcoKSk7XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSB3b3JkT2JqLndvcmRUcmFuc2xhdGUpIHtcbiAgICAgICAgICByaWdodEFuc3dlckZ1bmMoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdyb25nQW5zd2VyRnVuYygoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ3Jlc3RhcnQnKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGFnZScpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9XG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2xldmVsLXRleHRib29rJykpIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb25IYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKTtcbiAgICAgICAgY29uc3QgdW5pdCA9ICtsb2NhdGlvbkhhc2hbMV07XG4gICAgICAgIGNvbnN0IHBhZ2UgPSArbG9jYXRpb25IYXNoWzJdO1xuICAgICAgICBzdG9yYWdlLmxldmVsID0gdW5pdCArIDE7XG4gICAgICAgIGNvbnNvbGUubG9nKHVuaXQsIHBhZ2UsICd1bml0LCBwYWdlJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsZXZlbCcsIGAke3VuaXQgKyAxfWApO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFnZScsIGAke3BhZ2V9YCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXh0Ym9vaycsICd0cnVlJyk7XG4gICAgICB9XG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2xldmVsLWNoYW5nZScpKSB7XG4gICAgICAgIGNsZWFyTG9jYWxTdG9yYWdlKCk7XG4gICAgICB9XG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1sZXZlbCcpKSB7XG4gICAgICAgIGNvbnN0IGRhdGFOID0gTnVtYmVyKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQucmVwbGFjZSgvW14wLTldL2csICcnKSk7XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkID09PSAoYGxldmVsJHtkYXRhTn1gKSkge1xuICAgICAgICAgIHN0b3JhZ2UubGV2ZWwgPSBkYXRhTjtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzdG9yYWdlLmxldmVsLCAnc3RvcmFnZS5sZXZlbCDQsiDQu9C40YHRgtC90LXRgNC1INCw0YPQtNC40L7QuNCz0YDRiyAnKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGV2ZWwnLCBgJHtkYXRhTn1gKTtcbiAgICAgICAgICBjbGVhckxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmlnaHRBbnN3ZXJGdW5jKGVsOiBIVE1MRWxlbWVudCkge1xuICBzY29yZSA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmUnKSkgKyAxO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NvcmUnLCBzY29yZS50b1N0cmluZygpKTtcbiAgc291bmRBdWRpbygoYXVkaW9QYXRoUmlnaHQpKTtcbiAgZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXRyYW5zbGF0aW9uLXJpZ2h0Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSxcbiAgMTIwMCk7XG59XG5cbmZ1bmN0aW9uIHdyb25nQW5zd2VyRnVuYyhlbDogSFRNTEVsZW1lbnQpIHtcbiAgZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXRyYW5zbGF0aW9uLXdyb25nJyk7XG4gIGNvbnN0IHJpZ2h0QW5zd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWFuc3dlcicpIGFzIEhUTUxFbGVtZW50O1xuICBhcnJheVdyb25nV29yZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcnJheVdyb25nV29yZHMnKSEpO1xuICBpZiAocmlnaHRBbnN3ZXIpIHtcbiAgICByaWdodEFuc3dlci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImFuc3dlclwiPjxpbWcgY2xhc3M9XCJhbnN3ZXItaW1nXCIgc3JjPVwiJHthcGlQYXRoICsgd29yZE9iai5pbWFnZX1cIiBhbHQ9XCLQv9GA0LDQstC40LvRjNC90YvQuSDQvtGC0LLQtdGCXCI+PGJyPiR7d29yZE9iai53b3JkfSDigJQgJHt3b3JkT2JqLndvcmRUcmFuc2xhdGV9IDwvZGl2PmA7XG4gICAgYXJyYXlXcm9uZ1dvcmRzLnB1c2god29yZE9iai53b3JkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlXcm9uZ1dvcmRzKSk7XG4gICAgc291bmRBdWRpbygoYXVkaW9QYXRoV3JvbmcpKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9LFxuICAgIDIyMDApO1xuICB9XG59XG5cbmNvbnN0IGxpc3RlbmVyQXVkaW9DYWxsID0gbmV3IExpc3RlbmVyQXVkaW9DYWxsKCk7XG5leHBvcnQgZGVmYXVsdCBsaXN0ZW5lckF1ZGlvQ2FsbDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tc2hhZG93ICovXG5cbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi9mdW5jdGlvbmFsL3N0b3JhZ2UnO1xuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICcuLi8uLi8uLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyBhcGlQYXRoIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS1wYXRoJztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xuXG4vLyDQstGL0LHQvtGAINGD0YDQvtCy0L3RjyDQtNC70Y8g0LjQs9GA0Ysg0Lgg0YHRgtGA0LDQvdC40YbRi1xubGV0IGdyb3VwID0gMDtcbmxldCBwYWdlID0gMDtcbmxldCBhcnJheWxldmVsOiBudW1iZXJbXSA9IFtdO1xuXG5mdW5jdGlvbiBsZXZlbEdhbWUoKTogdm9pZCB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGV2ZWwnKSkge1xuICAgIGdyb3VwID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsZXZlbCcpKSAtIDE7XG4gICAgaWYgKChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFnZScpKSkge1xuICAgICAgcGFnZSA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFnZScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFnZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyMCAtIDAgKyAxKSkgKyAwO1xuICAgIH1cbiAgICBhcnJheWxldmVsID0gW2dyb3VwLCBwYWdlXTtcbiAgfVxufVxubGV2ZWxHYW1lKCk7XG5jb25zb2xlLmxvZyhncm91cCwgcGFnZSwgJ2dyb3VwLCBwYWdlJyk7XG5cbi8vINC60L7QvdGB0YLQsNC90LAg0LrQvtGC0L7RgNCw0Y8g0L/QvtC70YPRh9Cw0LXRgiDRgSDRgdC10YDQstC10YDQsCDQvNCw0YHRgdC40LIg0YHQu9C+0LJcbmNvbnN0IGFwaUdldFdvcmRzID0gYXBpLmdldFdvcmRzKGdyb3VwLCBwYWdlKVxuICAudGhlbigodmFsdWUpID0+IHtcbiAgICBzdG9yYWdlLndvcmRzID0gdmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dvcmRzJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH0pO1xuLy8g0L/QvtC70YPRh9Cw0LXQvCDQvNCw0YHRgdC40LIg0L/RgNC10LLQvtC00L7QslxuZnVuY3Rpb24gZ2V0V29yZHNNYXAoKTogc3RyaW5nW10ge1xuICBhcGlHZXRXb3JkcztcbiAgY29uc3Qgd29yZHMgPSBzdG9yYWdlLndvcmRzIS5tYXAoKGl0ZW0pID0+IGl0ZW0ud29yZFRyYW5zbGF0ZSk7XG4gIHJldHVybiB3b3Jkcztcbn1cblxubGV0IHdvcmRzU3RyaW5nID0gZ2V0V29yZHNNYXAoKTtcblxuLy8g0YTQuNC70YzRgtGA0YPQtdC8INC40LfQsdCw0LLQu9GP0Y/RgdGMINC+0YIg0LTRg9Cx0LvQtdC5XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vUmVwZWF0JykpIHtcbiAgaWYgKChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub1JlcGVhdCcpISkgYXMgc3RyaW5nW10pLmxlbmd0aCA+IDApIHtcbiAgICB3b3Jkc1N0cmluZyA9IHdvcmRzU3RyaW5nLmZpbHRlcigoaXRlbSkgPT4gIShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub1JlcGVhdCcpISkgYXMgc3RyaW5nW10pLmluY2x1ZGVzKGl0ZW0pKTtcbiAgfVxufVxuLy8g0L/QtdGA0LXQvNC10YjQuNCy0LDQtdC8INC80LDRgdGB0LjQsiDQv9GA0LXQstC+0LTQvtCyXG5mdW5jdGlvbiBzaHVmZmxlKGFycmF5OnN0cmluZ1tdKSB7XG4gIGFycmF5LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG59XG5zaHVmZmxlKHdvcmRzU3RyaW5nKTtcbi8vINGB0L7Qt9C00LDQtdC8INC80LDRgdGB0Lgg0LIg0LrQvtGC0YDQvtC8INCx0YPQtNC10YIg0YLQvtGM0LrQviA2INGB0LvQvtCyINC00LvRjyDQuNCz0YDRi1xubGV0IGFycmF5U2l4V29yZHM6c3RyaW5nIFtdID0gW107XG5hcnJheVNpeFdvcmRzID0gd29yZHNTdHJpbmcuc2xpY2UoMCwgNSk7XG5cbi8vINCy0YvQsdC40YDQsNC10Lwg0YHQu9GD0YfQsNC50L3QvtC1INGB0LvQvtCy0L4g0LjQtyA2LCDQutC+0YLQvtGA0L7QtSDQsdGD0LTQtdC8INGD0LPQsNC00YvQstCw0YLRjFxuY29uc3Qgd29yZFJpZ2h0ID0gYXJyYXlTaXhXb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheVNpeFdvcmRzLmxlbmd0aCldO1xuXG4vLyDQv9C+0LvRg9GH0LDQtdC8INC00LXQu9Cw0LXQvCDQvtCx0YrQtdC60YIg0LIg0LrQvtGC0L7RgNGL0Lkg0YHQvtGF0YDQsNC90LjQvCDQstGL0LHRgNCw0L3QvdC+0LUg0YHQu9C+0LLQviDRgdC+INCy0YHQtdC80Lgg0LTQsNC90L3Ri9C80LhcbmxldCB3b3JkT2JqIDogSVdvcmQgPSB7XG4gIGlkOiAnJywgZ3JvdXA6IDAsIHBhZ2U6IDAsIHdvcmQ6ICcnLCBpbWFnZTogJycsIGF1ZGlvOiAnJywgYXVkaW9NZWFuaW5nOiAnJywgYXVkaW9FeGFtcGxlOiAnJywgdGV4dE1lYW5pbmc6ICcnLCB0ZXh0RXhhbXBsZTogJycsIHRyYW5zY3JpcHRpb246ICcnLCB3b3JkVHJhbnNsYXRlOiAnJywgdGV4dE1lYW5pbmdUcmFuc2xhdGU6ICcnLCB0ZXh0RXhhbXBsZVRyYW5zbGF0ZTogJycsXG59O1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IHN0b3JhZ2Uud29yZHMhLmxlbmd0aDsgaSsrKSB7XG4gIGlmIChzdG9yYWdlLndvcmRzIVtpXS53b3JkVHJhbnNsYXRlID09PSB3b3JkUmlnaHQpIHtcbiAgICB3b3JkT2JqID0gc3RvcmFnZS53b3JkcyFbaV07XG4gIH1cbn1cblxuLy8g0LjQt9Cx0LDQstC70Y/QtdC80YHRjyDQvtGCINC00YPQsdC70LXQuSDQsiDQvNCw0YHRgdC40LLQtSDQv9GA0LXQstC+0LTQvtCyINC/0YDQvtC+0LvQttC10L3QuNC1XG5cbmxldCBub1JlcGVhdDogc3RyaW5nW10gPSBbXTtcbm5vUmVwZWF0LnB1c2god29yZE9iai53b3JkVHJhbnNsYXRlKTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm9SZXBlYXQnKSkge1xuICBub1JlcGVhdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vUmVwZWF0JykhKTtcbiAgbm9SZXBlYXQucHVzaCh3b3JkT2JqLndvcmRUcmFuc2xhdGUpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm9SZXBlYXQnLCBKU09OLnN0cmluZ2lmeShub1JlcGVhdCkpO1xufVxuXG4vLyDRhNGD0L3QutGG0LjRjyDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8g0LDRg9C00LjQviDRgSDQv9GD0YLQtdC8INC40Lcg0L3QsNGI0LXQs9C+INC+0LHQtdC60YLQsC3RgdC70L7QstC+XG5mdW5jdGlvbiBzb3VuZEF1ZGlvKHBhdGg6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBhdWRpb2QgPSBuZXcgQXVkaW8oKTtcbiAgYXVkaW9kLnNyYyA9IGAke3BhdGh9YDtcbiAgYXVkaW9kLmF1dG9wbGF5ID0gdHJ1ZTtcbn1cblxuLy8g0YDQuNGB0YPQtdC8INC60L3QvtC/0LrQuCDRgSDQv9C10YDQtdCy0L7QtNCw0LzQuFxuZnVuY3Rpb24gcHJpbnRCdG5TdHJpbmcoKTogc3RyaW5nIHtcbiAgbGV0IGEgPSAnJztcbiAgbGV0IGNvbnRhaW5lckJ0biA9ICcgJztcbiAgaWYgKE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm91bmQnKSkgPCAxNikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlTaXhXb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgYSA9IGFycmF5U2l4V29yZHNbaV07XG4gICAgICBjb250YWluZXJCdG4gKz0gYDxidXR0b24gZGF0YS1udW09XCIke2kgKyAxfVwiIHR5cGU9XCJidXR0b25cIiBpZD1cIiR7YX1cIiBjbGFzcz1cImJ0bi10cmFuc2xhdGlvblwiPiR7YX08L2J1dHRvbj4gYDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgd29yZE9iai5hdWRpbyA9ICcnO1xuICAgIGxldCBhID0gJyc7XG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FycmF5V3JvbmdXb3JkcycpISkubGVuZ3RoID4gMCkge1xuICAgICAgYSA9IGAgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QoNC10LrQvtC80LXQvdC00YPQtdC8INCy0YvRg9GH0LjRgtGMOiZuYnNwJHsoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyYXlXcm9uZ1dvcmRzJykhKSBhcyBzdHJpbmdbXSkuam9pbignLFxcbicpfTwvcD4gYDtcbiAgICB9IGVsc2Uge1xuICAgICAgYSA9ICcgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QktGLINC90LjRgNCw0LfRgyDQvdC1INC+0YjQuNCx0LvQuNGB0YwhPC9wPiAnO1xuICAgIH1cbiAgICBjb250YWluZXJCdG4gKz0gYFxuICA8ZGl2IGNsYXNzPVwiZ2FtZS1vdmVyXCI+XG4gICAgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QktGLINC/0YDQvtGI0LvQuCDQuNCz0YDRgyE8L3A+XG4gICAgPHAgY2xhc3M9XCJnYW1lLXRleHRcIj7QktCw0Ygg0YDQtdC30YPQu9GM0YLQsNGCOiAmbmJzcCAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpfTwvcD5cbiAgICAke2F9XG4gICAgPGRpdiBjbGFzcz1cImJ0bi1nYW1lLW92ZXItY29udGFpbmVyXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInJlc3RhcnRcIj7QndCw0YfQsNGC0Ywg0LfQsNC90L7QstC+PC9idXR0b24+XG4gICAgICA8YSAgY2xhc3M9XCJsaW5rIGxldmVsLWNoYW5nZVwiIGhyZWY9XCIjYXVkaW9jYWxsXCIgPtCS0YvQsdGA0LDRgtGMINGD0YDQvtCy0LXQvdGMPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgXG4gIGA7XG4gICAgY2xlYXJMb2NhbFN0b3JhZ2UoKTtcbiAgfVxuICByZXR1cm4gY29udGFpbmVyQnRuO1xufVxuZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoKTogdm9pZCB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdub1JlcGVhdCcpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXJyYXlXcm9uZ1dvcmRzJyk7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdyb3VuZCcpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2NvcmUnKTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RleHRib29rJyk7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwYWdlJyk7XG59XG5cbmV4cG9ydCB7XG4gIHNvdW5kQXVkaW8sXG4gIHByaW50QnRuU3RyaW5nLCB3b3JkT2JqLFxuICBjbGVhckxvY2FsU3RvcmFnZSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5pbXBvcnQgcGhvbmUgZnJvbSAnLi4vYXNzZXRzL3Bob25lLnN2Zyc7XG5pbXBvcnQgZGljdGlvbmFyeSBmcm9tICcuLi9hc3NldHMvZGljdGlvbmFyeS5zdmcnO1xuaW1wb3J0IHBsYXkgZnJvbSAnLi4vYXNzZXRzL3BsYXkuc3ZnJztcbmltcG9ydCBhY3Nlc3MgZnJvbSAnLi4vYXNzZXRzL2Fjc2Vzcy5zdmcnO1xuXG5jb25zdCBNYWluUGFnZSA9IHtcbiAgaWQ6ICdtYWluJyxcbiAgcmVuZGVyOiAoKTpzdHJpbmcgPT4gYFxuICAgICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19wYWdlXCI+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fcGFnZV9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj5UaGUgV29ybGQgaXMgWW91cnMgd2l0aCBSU0xhbmchPC9oMj5cbiAgICAgICAgICAgPHA+UlNMYW5nIOKAlCDRjdGC0L4g0Y3RhNGE0LXQutGC0LjQstC90YvQuSDRgdC10YDQstC40YEg0LTQu9GPINGD0LLQu9C10LrQsNGC0LXQu9GM0L3QvtC5INC/0YDQsNC60YLQuNC60Lgg0LDQvdCz0LvQuNC50YHQutC+0LPQviDRj9C30YvQutCwLiDQn9GA0LjRgdC+0LXQtNC40L3Rj9C50YHRjyFcbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VfX2FkdmFudGFnZXNcIj5cbiAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj7Qn9C+0YfQtdC80YMgUlNMYW5nPzwvaDI+XG4gICAgICAgICAgIDx1bCBjbGFzcz1cImFkdmFudGFnZXNfX2xpc3RcIj5cbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7YWNzZXNzfVwiPlxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7QkdC10YHQv9C70LDRgtC90YvQuSDQtNC+0YHRgtGD0L88L2gzPlxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+0J3QsNGI0LAg0LzQuNGB0YHQuNGPIOKAlCDRgdC00LXQu9Cw0YLRjCDQvtCx0YPRh9C10L3QuNGPINGP0LfRi9C60LDQvCDQtNC+0YHRgtGD0L/QvdGL0Lwg0LTQu9GPINC60LDQttC00L7Qs9C+PC9wPlxuICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbVwiPlxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2RpY3Rpb25hcnl9XCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCh0LvQvtCy0LDRgNGMPC9oMz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPtCp0LXQu9C60L3QuNGC0LUg0LvRjtCx0L7QtSDRgdC70L7QstC+LCDRh9GC0L7QsdGLINGD0LLQuNC00LXRgtGMINC+0L/RgNC10LTQtdC70LXQvdC40LUg0LIg0LjRgdGC0L7Rh9C90LjQutCw0YUsINC4INGB0L7RhdGA0LDQvdC40YLQtSDQtdCz0L4g0LIg0YHQstC+0LXQvCDRgdC/0LjRgdC60LUg0LrQsNGA0YLQvtGH0LXQujwvcD5cbiAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwbGF5fVwiPlxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7QmNCz0YDQsNC5LCDRh9GC0L7QsdGLINGD0YfQuNGC0YzRgdGPPC9oMz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPtCY0LPRgNGLINCy0LrQu9GO0YfQsNGO0YIg0JDRg9C00LjQvtCy0YvQt9C+0LIs0KHQv9GA0LjQvdGCINC4INC80L3QvtCz0L7QtSDQtNGA0YPQs9C+0LUuLi48L3A+XG4gICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGhvbmV9XCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCj0YfQuNGC0LXRgdGMINC90LAg0YXQvtC00YM8L2gzPlxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+UlNMYW5nINC00L7RgdGC0YPQv9C90LAg0LTQu9GPINCy0LXQsSDQuCDQvNC+0LHQuNC70YzQvdGL0YUg0YPRgdGC0YDQvtC50YHRgtCyLiDQo9GH0LjRgtC10YHRjCDQuNC3INC70Y7QsdC+0LPQviDQvNC10YHRgtCwITwvcD5cbiAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICA8L3VsPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgJHtGb290ZXIucmVuZGVyKCl9XG4gICAgYCxcbn07XG5cbi8vIGV4cG9ydCB7IE1haW5QYWdlIH07XG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgeyBpbml0U3ByaW50TVZDIH0gZnJvbSAnLi9pbml0U3ByaW50TVZDJztcbmltcG9ydCB7IEJ1dHRvbnMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NtYWxsQ29tcG9uZW50cy9idXR0b25zJztcblxuaW1wb3J0IHBhcnJvdHMgZnJvbSAnLi4vLi4vYXNzZXRzL3BhcnJvdHMuanBnJztcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSAnLi4vLi4vYXNzZXRzL2Fycm93LWxlZnQucG5nJztcbmltcG9ydCBhcnJvd1JpZ2h0IGZyb20gJy4uLy4uL2Fzc2V0cy9hcnJvdy1yaWdodC5wbmcnO1xuXG5pbXBvcnQgcmlnaHRBbnN3ZXJBdWRpbyBmcm9tICcuLi8uLi9hc3NldHMvYXVkaW8vcmlnaHQtYW5zd2VyLm1wMyc7XG5pbXBvcnQgd3JvbmdBbnN3ZXJBdWRpbyBmcm9tICcuLi8uLi9hc3NldHMvYXVkaW8vd3JvbmctYW5zd2VyLm1wMyc7XG5pbXBvcnQgdGltZW92ZXJBdWRpbyBmcm9tICcuLi8uLi9hc3NldHMvYXVkaW8vdGltZS1vdmVyLm1wMyc7XG5cbmNvbnN0IFNwcmludEdhbWVQYWdlID0ge1xuICBjbGFzc25hbWU6ICdzcHJpbnQnLFxuICByZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICR7SGVhZGVyLnJlbmRlcigpfVxuICAgIDxkaXYgY2xhc3MgPSAnJHt0aGlzLmNsYXNzbmFtZX0tY29udGVpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnRfX3Njb3JlXCI+MDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNwcmludF9fdGltZXJcIj42MDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNwcmludF9fZmllbGRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX190aXRsZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV9fY291bnRcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVfX3RleHRcIj4rIDEwINC+0YfQutC+0LIg0LfQsCDRgdC70LXQtNGD0Y7RidC10LUg0YHQu9C+0LLQvjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX19jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX2ltZ1wiPjxpbWcgc3JjPScke3BhcnJvdHN9JyBhbHQ9XCJwYXJyb3RzXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX3F1ZXN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX3dvcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbl9fd29yZFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmRfX3NvdW5kXCI+PC9kaXY+XG4gICAgICAgICAgICA8YXVkaW8gaWQ9XCJzcHJpbnRfX3NheV9fd29yZFwiIHNyYz1cIlwiPjwvYXVkaW8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uX190cmFuc2xhdGlvblwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX19idXR0b25zXCI+JHtCdXR0b25zLmNyZWF0ZSgn0J3QtdCy0LXRgNC90L4nLCAnYnV0dG9uX19zcHJpbnRfX2ZhbHNlJywgZmFsc2UpfSR7QnV0dG9ucy5jcmVhdGUoJ9CS0LXRgNC90L4nLCAnYnV0dG9uX19zcHJpbnRfX3RydWUnLCBmYWxzZSl9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnRfX2Fycm93c1wiPlxuICAgICAgICA8aW1nIHNyYz0nJHthcnJvd0xlZnR9JyBhbHQ9XCJhcnJvd1wiPlxuICAgICAgICA8aW1nIHNyYz0nJHthcnJvd1JpZ2h0fScgYWx0PVwiYXJyb3dcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGF1ZGlvIGlkPVwiYXVkaW9fX3JpZ2h0XCIgc3JjPVwiJHtyaWdodEFuc3dlckF1ZGlvfVwiPjwvYXVkaW8+XG4gICAgICA8YXVkaW8gaWQ9XCJhdWRpb19fd3JvbmdcIiBzcmM9XCIke3dyb25nQW5zd2VyQXVkaW99XCI+PC9hdWRpbz5cbiAgICAgIDxhdWRpbyBpZD1cImF1ZGlvX190aW1lb3ZlclwiIHNyYz1cIiR7dGltZW92ZXJBdWRpb31cIj48L2F1ZGlvPlxuICAgIDwvZGl2PmA7XG4gIH0sXG4gIGluaXRNVkMoKTogdm9pZCB7XG4gICAgaW5pdFNwcmludE1WQygpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ByaW50R2FtZVBhZ2U7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cblxuaW1wb3J0IHsgTW9kdWxlQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL2NvbnRyb2xsZXIvY29udHJvbGxlclNwcmludCc7XG5pbXBvcnQgeyBNb2R1bGVNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVsL21vZGVsU3ByaW50JztcbmltcG9ydCB7IE1vZHVsZVZpZXcgfSBmcm9tICcuLi8uLi92aWV3L3ZpZXdTcHJpbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNwcmludE1WQygpOiB2b2lkIHtcbiAgY29uc3QgdmlldyA9IG5ldyBNb2R1bGVWaWV3KCk7XG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZHVsZU1vZGVsKCk7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgTW9kdWxlQ29udHJvbGxlcigpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ByaW50LWNvbnRlaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuICB2aWV3LmluaXQoY29udGFpbmVyKTtcbiAgbW9kZWwuaW5pdCh2aWV3KTtcbiAgY29udHJvbGxlci5pbml0KGNvbnRhaW5lciwgbW9kZWwpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuZXhwb3J0IGNvbnN0IHNwcmludFNldHRpbmdzID0ge1xuICBoYXNoTmFtZTogJycsXG4gIHByZXZpb3VzSGFzaE5hbWU6IHdpbmRvdy5sb2NhdGlvbi5oYXNoLFxuICBzcHJpbnRMZXZlbDogMCxcbiAgc3ByaW50UGFnZTogMCxcbiAgc3ByaW50RnJvbVRleHRib29rOiBmYWxzZSxcbiAgcHJldmlvdXNIYXNoTmFtZUFycmF5KCk6c3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnByZXZpb3VzSGFzaE5hbWUuc3BsaXQoJy8nKTtcbiAgfSxcbiAgc2V0TGV2ZWxGcm9tVGV4dGJvb2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJldmlvdXNIYXNoTmFtZUFycmF5KClbMF0gPT09ICcjdGV4dGJvb2snKSB7XG4gICAgICB0aGlzLnNwcmludExldmVsID0gK3RoaXMucHJldmlvdXNIYXNoTmFtZUFycmF5KClbMV0gLSAxO1xuICAgICAgdGhpcy5zcHJpbnRGcm9tVGV4dGJvb2sgPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgc2V0TGV2ZWxGcm9tU2VsZWN0KGxldmVsOnN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3ByaW50TGV2ZWwgPSArbGV2ZWxbbGV2ZWwubGVuZ3RoIC0gMV07XG4gICAgdGhpcy5zcHJpbnRQYWdlID0gMDtcbiAgICB0aGlzLnNwcmludEZyb21UZXh0Ym9vayA9IGZhbHNlO1xuICB9LFxuICBzZXRQYWdlRnJvbVRleHRib29rKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByZXZpb3VzSGFzaE5hbWVBcnJheSgpWzBdID09PSAnI3RleHRib29rJykge1xuICAgICAgdGhpcy5zcHJpbnRQYWdlID0gK3RoaXMucHJldmlvdXNIYXNoTmFtZUFycmF5KClbMl0gLSAxO1xuICAgICAgdGhpcy5zcHJpbnRGcm9tVGV4dGJvb2sgPSB0cnVlO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VTcHJpbnRTZXR0aW5ncygpOiB2b2lkIHtcbiAgaWYgKHNwcmludFNldHRpbmdzLmhhc2hOYW1lKSB7IHNwcmludFNldHRpbmdzLnByZXZpb3VzSGFzaE5hbWUgPSBzcHJpbnRTZXR0aW5ncy5oYXNoTmFtZTsgfVxuICBzcHJpbnRTZXR0aW5ncy5oYXNoTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICBzcHJpbnRTZXR0aW5ncy5zZXRMZXZlbEZyb21UZXh0Ym9vaygpO1xuICBzcHJpbnRTZXR0aW5ncy5zZXRQYWdlRnJvbVRleHRib29rKCk7XG59XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG5jb25zdCBTdGF0aXN0aWNzUGFnZSA9IHtcbiAgY2xhc3NuYW1lOiAnc3RhdGlzdGljcycsXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgPGRpdiBjbGFzcyA9ICcke3RoaXMuY2xhc3NuYW1lfS1jb250ZWluZXInPjwvZGl2PlxuICAgICR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0aXN0aWNzUGFnZTtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmltcG9ydCBmb3RvMSBmcm9tICcuLi9hc3NldHMvZ2l0aHViLWltZy9mbHlldGhlci5qcGcnO1xuaW1wb3J0IGZvdG8yIGZyb20gJy4uL2Fzc2V0cy9naXRodWItaW1nL0FsZW5hRG96LmpwZyc7XG5pbXBvcnQgZm90bzMgZnJvbSAnLi4vYXNzZXRzL2dpdGh1Yi1pbWcvZGFyaW5hOTkyLmpwZyc7XG5cbmNvbnN0IEFib3V0VGVhbVBhZ2UgPSB7XG4gIGNsYXNzbmFtZTogJ3RlYW0tcGFnZScsXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgJHtIZWFkZXIucmVuZGVyKCl9XG4gICAgPGRpdiBjbGFzcyA9ICcke3RoaXMuY2xhc3NuYW1lfS1jb250ZWluZXInPlxuICAgICAgPHAgY2xhc3M9J291cnRlYW1fX3RpdGxlJz7QndCw0YjQsCDQutC+0LzQsNC90LTQsDwvcD5cbiAgICAgIDxkaXYgY2xhc3M9J291cnRlYW1fX2NvbnRlaW5lcic+XG4gICAgICAgIDxkaXYgY2xhc3M9J291cnRlYW0nPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J291cnRlYW1fX2dpdGh1Yic+XG4gICAgICAgICAgICA8aW1nIHNyYz0nJHtmb3RvMX0nIGFsdD0nZm90bycgY2xhc3M9J291cnRlYW1fX2ZvdG9zJz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZmx5ZXRoZXJcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+Zmx5ZXRoZXI8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9J291cnRlYW1fX3RlYW1sZWFkJz5UZWFtTGVhZDwvc3Bhbj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJkZXZlbG9wbWVudF9fbGlzdFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj5CYWNrZW5kPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+0JDQstGC0L7RgNC40LfQsNGG0LjRjzwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPtCc0LjQvdC4LdC40LPRgNCwICfQkNGD0LTQuNC+0LLRi9C30L7Qsic8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj4uLi48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtX19naXRodWInPlxuICAgICAgICAgICAgPGltZyBzcmM9JyR7Zm90bzJ9JyBhbHQ9J2ZvdG8nIGNsYXNzPSdvdXJ0ZWFtX19mb3Rvcyc+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FsZW5hRG96XCIgY2xhc3M9XCJnaXRodWItbGlua1wiPkFsZW5hRG96PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bCBjbGFzcz1cImRldmVsb3BtZW50X19saXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPtCt0LvQtdC60YLRgNC+0L3QvdGL0Lkg0YPRh9C10LHQvdC40Lo8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj7QlNC40LfQsNC50L08L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj4uLi48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2l0ZW1cIj4uLi48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdvdXJ0ZWFtX19naXRodWInPlxuICAgICAgICAgICAgPGltZyBzcmM9JyR7Zm90bzN9JyBhbHQ9J2ZvdG8nIGNsYXNzPSdvdXJ0ZWFtX19mb3Rvcyc+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0RhcmluYTk5MlwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5EYXJpbmE5OTI8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzPVwiZGV2ZWxvcG1lbnRfX2xpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+0JPQu9Cw0LLQvdCw0Y8g0YHRgtGA0LDQvdC40YbQsDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkZXZlbG9wbWVudF9faXRlbVwiPtCc0LjQvdC4LdC40LPRgNCwICfQodC/0YDQuNC90YInPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+Li4uPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRldmVsb3BtZW50X19pdGVtXCI+Li4uPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICR7Rm9vdGVyLnJlbmRlcigpfVxuICAgIGA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dFRlYW1QYWdlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgJy4vdGV4dGJvb2suc2Nzcyc7XG5pbXBvcnQgeyBoYXNoZXMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hhc2hlcyc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9hcGkvYXBpJztcbmltcG9ydCB7IElXb3JkIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IHsgVGV4dGJvb2tDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vY29udHJvbGxlci9jb250cm9sbGVyVGV4dGJvb2snO1xuaW1wb3J0IFdvcmRzIGZyb20gJy4uLy4uL3dvcmRzL3dvcmRzJztcblxuY29uc3QgVGV4dGJvb2tQYWdlID0ge1xuICBjbGFzc25hbWU6ICd0ZXh0Ym9vaycsXG4gIHdvcmRsaXN0OiAnd29yZC1saXN0JyxcblxuICB1bml0RGlmZmljdWx0V29yZHM6IDcsXG5cbiAgaXNBdXRoOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpLFxuXG4gIHJlbmRlcigpOiBzdHJpbmcge1xuICAgIGNvbnN0IGxvY2F0aW9uSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgdW5pdCA9ICtsb2NhdGlvbkhhc2hbMV07XG4gICAgY29uc3QgcGFnZSA9ICtsb2NhdGlvbkhhc2hbMl07XG4gICAgbGV0IHZpZXcgPSAnJztcbiAgICBjb25zdCBtaW5Vbml0ID0gMTtcbiAgICBjb25zdCBtYXhVbml0ID0gNztcbiAgICBjb25zdCB1bml0U2VsZWN0b3IgPSAndGV4dGJvb2stdW5pdCc7XG4gICAgY29uc3QgcGFnZVNlbGVjdG9yID0gJ3VuaXQtcGFnZSc7XG4gICAgY29uc3QgbWluUGFnZSA9IDE7XG4gICAgY29uc3QgbWF4UGFnZSA9IDMwO1xuICAgIGNvbnN0IGNvbnRyb2xsZXJUZXh0Ym9vayA9IG5ldyBUZXh0Ym9va0NvbnRyb2xsZXIodW5pdFNlbGVjdG9yLCBwYWdlU2VsZWN0b3IpO1xuICAgIGlmICghdW5pdCkge1xuICAgICAgdmlldyA9IGA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiMVwiPtCg0LDQt9C00LXQuyAxPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjJcIj7QoNCw0LfQtNC10LsgMjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCIzXCI+0KDQsNC30LTQtdC7IDM8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay11bml0XCIgZGF0YS11bml0PVwiNFwiPtCg0LDQt9C00LXQuyA0PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stdW5pdFwiIGRhdGEtdW5pdD1cIjVcIj7QoNCw0LfQtNC10LsgNTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCI2XCI+0KDQsNC30LTQtdC7IDY8L2Rpdj5cbiAgICAgICR7dGhpcy5pc0F1dGggPyBgPGRpdiBjbGFzcz1cInRleHRib29rLXVuaXRcIiBkYXRhLXVuaXQ9XCI3XCI+0KDQsNC30LTQtdC7IFwi0KHQu9C+0LbQvdGL0LUg0YHQu9C+0LLQsFwiPC9kaXY+XG4gICAgICBgIDogJyd9XG4gICAgICA8L2Rpdj5gO1xuICAgIH0gZWxzZSBpZiAoIXBhZ2UgJiYgdW5pdCA8PSBtYXhVbml0ICYmIHVuaXQgPj0gbWluVW5pdCAmJiB0eXBlb2YgdW5pdCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZpZXcgPSBgXG4gICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stbmF2aWdhdGlvbiB1bml0LW5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcm91bmRcIiBpZD1cImdvLWJhY2tcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidW5pdC1uYW1lXCI+0KDQsNC30LTQtdC7ICR7dGhpcy51bml0RGlmZmljdWx0V29yZHMgPT09IHVuaXQgPyAnXCLQodC70L7QttC90YvQtSDRgdC70L7QstCwXCInIDogdW5pdH08L3A+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDx1bCBjbGFzcz1cInVuaXQtcGFnZXNcIj5cbiAgICAgICAgICAgICR7dGhpcy5yZW5kZXJQYWdlcyh1bml0KX1cbiAgICAgICAgIDwvdWw+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlldyA9IGA8ZGl2IGNsYXNzPSR7dGhpcy5jbGFzc25hbWV9PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRib29rLW5hdmlnYXRpb25cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1yb3VuZFwiIGlkPVwiZ28tYmFja1wiPjwvYnV0dG9uPlxuICAgICAgICA8cCBjbGFzcz1cInVuaXQtbmFtZVwiPtCg0LDQt9C00LXQuyAke3RoaXMudW5pdERpZmZpY3VsdFdvcmRzID09PSB1bml0ID8gJ1wi0KHQu9C+0LbQvdGL0LUg0YHQu9C+0LLQsFwiJyA6IHVuaXR9XG4gICAgICAgICA8c3BhbiBjbGFzcz1cInVuaXQtcGFnZS1uYW1lXCI+0YHRgtGA0LDQvdC40YbQsCAke3BhZ2V9PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzcz0ke3RoaXMud29yZGxpc3R9PlxuICAgICAgICR7dGhpcy5nZXRDYXJkcyh1bml0LCBwYWdlKX1cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGJvb2stZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Ym9vay1wYWdpbmF0aW9uXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2luYXRpb24tYnRuIGJ0bi1vcmFuZ2UgcHJldmlvdXNcIiAke3BhZ2UgPT09IG1pblBhZ2UgPyAnZGlzYWJsZWQnIDogJyd9PtCf0YDQtdC00YvQtNGD0YnQsNGPPC9idXR0b24+XG4gICAgICAgICAgJHt0aGlzLmlzQXV0aCA/IGA8YSBjbGFzcz1cInRleHRib29rLWdhbWUgbGV2ZWwtdGV4dGJvb2tcIiBocmVmPVwiJHtoYXNoZXMuYXVkaW9jYWxsfVwiPtCQ0YPQtNC40L7QstGL0LfQvtCyPC9hPlxuICAgICAgICAgIDxhIGNsYXNzPVwidGV4dGJvb2stZ2FtZVwiIGhyZWY9XCIke2hhc2hlcy5hYm91dHNwcmludH1cIj7QodC/0YDQuNC90YI8L2E+YCA6ICcnfVxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uLWJ0biBidG4tb3JhbmdlIG5leHRcIiAke3BhZ2UgPT09IG1heFBhZ2UgPyAnZGlzYWJsZWQnIDogJyd9PtCh0LvQtdC00YPRjtGJ0LDRjzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gICAgfVxuICAgIGNvbnRyb2xsZXJUZXh0Ym9vay5pbml0KHVuaXQpO1xuICAgIHJldHVybiBgJHtIZWFkZXIucmVuZGVyKCl9JHt2aWV3fSR7Rm9vdGVyLnJlbmRlcigpfWA7XG4gIH0sXG4gIHJlbmRlclBhZ2VzKHVuaXQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IHBhZ2VzID0gJyc7XG4gICAgbGV0IHBhZ2VzQ291bnQgPSAzMDtcbiAgICBjb25zdCB3b3Jkc1BlclBhZ2UgPSAyMDtcbiAgICBpZiAodW5pdCA9PT0gdGhpcy51bml0RGlmZmljdWx0V29yZHMpIHtcbiAgICAgIHBhZ2VzQ291bnQgPSBNYXRoLmNlaWwoV29yZHMuYWdncmVnYXRlZFdvcmRzLmxlbmd0aCAvIHdvcmRzUGVyUGFnZSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBhZ2VzQ291bnQ7IGkgKz0gMSkge1xuICAgICAgcGFnZXMgKz0gYDxsaSBjbGFzcz1cInVuaXQtcGFnZVwiIGRhdGEtcGFnZT1cIiR7aX1cIj5QYWdlICR7aX08L2xpPmA7XG4gICAgfVxuICAgIHJldHVybiBwYWdlcztcbiAgfSxcbiAgZ2V0Q2FyZHModW5pdDogbnVtYmVyLCBwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IHdvcmRsaXN0LCBpc0F1dGggfSA9IHRoaXM7XG4gICAgZnVuY3Rpb24gcmVuZGVyQ2FyZHMod29yZHM6IElXb3JkW10pIHtcbiAgICAgIGNvbnN0IHdvcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt3b3JkbGlzdH1gKTtcbiAgICAgIGlmICh3b3JkQ29udGFpbmVyKSB7XG4gICAgICAgIHdvcmRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBpc1dvcmRJbkRpZmZpY3VsdCA9IFdvcmRzLmFnZ3JlZ2F0ZWRXb3Jkcy5zb21lKCh3b3JkKSA9PiB3b3Jkc1tpXS5pZCA9PT0gd29yZC5pZCk7XG4gICAgICAgICAgY29uc3QgaXNXb3JkTGVhcm5lZCA9IFdvcmRzLmxlYXJuZWRXb3Jkcy5zb21lKCh3b3JkKSA9PiB3b3Jkc1tpXS5pZCA9PT0gd29yZC5pZCk7XG4gICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd3b3JkLWl0ZW0nKTtcbiAgICAgICAgICBjYXJkLmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cIndvcmQtaW1hZ2VcIiBcbiAgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9yc2xhbmctbGVhcm5pbmctZW5nbGlzaC13b3Jkcy5oZXJva3VhcHAuY29tLyR7d29yZHNbaV0uaW1hZ2V9KVwiPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIndvcmQtZGVzY3JpcHRpb25cIj5cbiAgICA8ZGl2IGNsYXNzPVwid29yZC1wcm9ub3VuY2Ugd29yZC1hdWRpb1wiPlxuICAgIDxwIGNsYXNzPVwid29yZC1uYW1lXCI+JHt3b3Jkc1tpXS53b3JkfSAke3dvcmRzW2ldLnRyYW5zY3JpcHRpb259PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cImF1ZGlvXCI+XG4gICAgICAgIDxhdWRpbyBzcmM9XCJodHRwczovL3JzbGFuZy1sZWFybmluZy1lbmdsaXNoLXdvcmRzLmhlcm9rdWFwcC5jb20vJHt3b3Jkc1tpXS5hdWRpb31cIj48L2F1ZGlvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLXByb25vdW5jZSB0cmFuc2xhdGlvblwiPiR7d29yZHNbaV0ud29yZFRyYW5zbGF0ZX08L3A+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLWV4YW1wbGVcIj4ke3dvcmRzW2ldLnRleHRNZWFuaW5nfTwvcD5cbiAgICA8cCBjbGFzcz1cIndvcmQtZXhhbXBsZSB0cmFuc2xhdGlvblwiPiR7d29yZHNbaV0udGV4dE1lYW5pbmdUcmFuc2xhdGV9PC9wPlxuICAgIDxwIGNsYXNzPVwid29yZC1leGFtcGxlXCI+JHt3b3Jkc1tpXS50ZXh0RXhhbXBsZX08L3A+XG4gICAgPHAgY2xhc3M9XCJ3b3JkLWV4YW1wbGUgdHJhbnNsYXRpb25cIj4ke3dvcmRzW2ldLnRleHRFeGFtcGxlVHJhbnNsYXRlfTwvcD5cbiAgPC9kaXY+XG4gICR7aXNBdXRoID8gYFxuPGRpdiBjbGFzcz1cIndvcmQtbm90ZWRcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tb3JhbmdlIGJ0bi1kaWZmaWN1bHQgICR7aXNXb3JkSW5EaWZmaWN1bHQgPyAnYWRkZWQnIDogJyd9XCIgXG4gICAgICBkYXRhLXdvcmQgPSBcIiR7d29yZHNbaV0uaWR9XCIgXG4gICAgICAke2lzV29yZEluRGlmZmljdWx0ID8gJ2Rpc2FibGVkJyA6ICcnfSA+0KHQu9C+0LbQvdC+PzwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1vcmFuZ2UgYnRuLWxlYXJuZWQgJHtpc1dvcmRMZWFybmVkID8gJ2FkZGVkJyA6ICcnfVwiIFxuICAgICAgZGF0YS13b3JkID0gXCIke3dvcmRzW2ldLmlkfVwiXG4gICAgICAke2lzV29yZExlYXJuZWQgPyAnZGlzYWJsZWQnIDogJyd9PtCY0LfRg9GH0LXQvdC+PzwvYnV0dG9uPlxuICAgICAgPC9kaXY+YCA6ICcnfWA7XG4gICAgICAgICAgY2FyZC5kYXRhc2V0LndvcmQgPSB3b3Jkc1tpXS5pZDtcbiAgICAgICAgICB3b3JkQ29udGFpbmVyLmFwcGVuZChjYXJkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodW5pdCA9PT0gdGhpcy51bml0RGlmZmljdWx0V29yZHMpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZW5kZXJDYXJkcyhXb3Jkcy5hZ2dyZWdhdGVkV29yZHMpO1xuICAgICAgfSwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBhcGkuZ2V0V29yZHModW5pdCAtIDEsIHBhZ2UgLSAxKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgV29yZHMud29yZHMgPSByZXMgYXMgSVdvcmRbXTtcbiAgICAgICAgICAgIHJlbmRlckNhcmRzKHJlcyBhcyBJV29yZFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0Ym9va1BhZ2U7XG4iLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtaW46bnVtYmVyLCBtYXg6bnVtYmVyKTpudW1iZXIge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cbiIsImltcG9ydCB7IFJvdXRlcywgTWVudUl0ZW1zIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IFNwcmludEdhbWVQYWdlIGZyb20gJy4uL3BhZ2VzL3NwcmludC9pbmRleCc7XG5cbmNsYXNzIE1vZHVsZVZpZXcge1xuICBteU1vZHVsZUNvbnRhaW5lciE6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnRlbnRDb250YWluZXIhOiBIVE1MRWxlbWVudDtcblxuICByb3V0ZXNPYmohOiBSb3V0ZXM7XG5cbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50LCByb3V0ZXM6IFJvdXRlcyk6IHZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5yb3V0ZXNPYmogPSByb3V0ZXM7XG4gIH1cblxuICByZW5kZXJDb250ZW50KGhhc2hQYWdlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IHJvdXRlTmFtZSA9ICdkZWZhdWx0JztcbiAgICByb3V0ZU5hbWUgPSAoaGFzaFBhZ2VOYW1lLmxlbmd0aCkgPyBoYXNoUGFnZU5hbWUuc3BsaXQoJy8nKVswXSA6IHJvdXRlTmFtZTtcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMucm91dGVzT2JqW3JvdXRlTmFtZSBhcyBrZXlvZiBSb3V0ZXNdO1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIuaW5uZXJIVE1MID0gcm91dGUucmVuZGVyKCk7XG4gICAgaWYgKGhhc2hQYWdlTmFtZSA9PT0gJ3NwcmludCcpIHsgU3ByaW50R2FtZVBhZ2UuaW5pdE1WQygpOyB9XG4gIH1cblxuICBoaWdobGlnaHRBY3RpdmVNZW51SXRlbSA9IChvYmo6IE1lbnVJdGVtcywgaGFzaE5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmpba2V5IGFzIGtleW9mIE1lbnVJdGVtc10uY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51X19pdGVtX2FjdGl2ZScpKSB7XG4gICAgICAgIG9ialtrZXkgYXMga2V5b2YgTWVudUl0ZW1zXS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19pdGVtX2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzaE5hbWUpIHtcbiAgICAgIG9ialtoYXNoTmFtZSBhcyBrZXlvZiBNZW51SXRlbXNdLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5tYWluLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVWaWV3O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCBTcHJpbnRSZXN1bHQgZnJvbSAnLi4vY29tcG9uZW50cy9zcHJpbnRyZXN1bHRzJztcbmltcG9ydCB0cnVlSW1nIGZyb20gJy4uL2Fzc2V0cy90cnVlLnBuZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2R1bGVWaWV3IHtcbiAgbXlNb2R1bGVDb250YWluZXIhOkhUTUxFbGVtZW50O1xuXG4gIGNvbnRlbnRDb250YWluZXIhOkhUTUxFbGVtZW50O1xuXG4gIHJvdXRlc09iaiE6Um91dGVzO1xuXG4gIHNwcmludFRpbWVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcHJpbnRfX3RpbWVyJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50U2NvcmU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwcmludF9fc2NvcmUnKSBhcyBIVE1MRWxlbWVudDtcblxuICBzcHJpbnRDb3VudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGVfX2NvdW50JykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50Q291bnRUZXh0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZV9fdGV4dCcpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHF1ZXN0aW9uV29yZDpIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVzdGlvbl9fd29yZCcpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHF1ZXN0aW9uVHJhbnNsYXRpb246SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVlc3Rpb25fX3RyYW5zbGF0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgc3ByaW50Q29udGVpbmVyOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwcmludC1jb250ZWluZXInKSBhcyBIVE1MRWxlbWVudDtcblxuICBpbml0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOnZvaWQge1xuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgLy8gdGhpcy5yb3V0ZXNPYmogPSByb3V0ZXM7XG4gIH1cblxuICByZW5kZXJXb3JkKHdvcmQ6IHN0cmluZywgdHJhbnNsYXRpb246IHN0cmluZyk6dm9pZCB7XG4gICAgdGhpcy5xdWVzdGlvbldvcmQudGV4dENvbnRlbnQgPSB3b3JkO1xuICAgIHRoaXMucXVlc3Rpb25UcmFuc2xhdGlvbi50ZXh0Q29udGVudCA9IHRyYW5zbGF0aW9uO1xuICB9XG5cbiAgcmVuZGVyVGltZXIodGltZXI6bnVtYmVyLCB0aW1lckVsZW06SFRNTEVsZW1lbnQpOnZvaWQge1xuICAgIHRpbWVyRWxlbS50ZXh0Q29udGVudCA9IFN0cmluZyh0aW1lcik7XG4gIH1cblxuICByZW5kZXJTY29yZShzY29yZTpzdHJpbmcsIG1heFNjb3JlPzpib29sZWFuKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludFNjb3JlLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgaWYgKG1heFNjb3JlKSB7XG4gICAgICB0aGlzLnNwcmludENvdW50LmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dHJ1ZUltZ31cIiBhbHQ9XCJpbWdcIj5gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNwcmludENvdW50LmlubmVySFRNTCArPSBgPGltZyBzcmM9XCIke3RydWVJbWd9XCIgYWx0PVwiaW1nXCI+YDtcbiAgICB9XG4gIH1cblxuICBjbGVhclNwcmludENvdW50KCk6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRDb3VudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIHJldHVyblRvT25lU3ByaW50Q291bnQoKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludENvdW50LmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dHJ1ZUltZ31cIiBhbHQ9XCJpbWdcIj5gO1xuICB9XG5cbiAgcmVuZGVyQ291bnRUZXh0KG46bnVtYmVyKTp2b2lkIHtcbiAgICB0aGlzLnNwcmludENvdW50VGV4dC5pbm5lckhUTUwgPSBgKyAke259INC+0YfQutC+0LIg0LfQsCDRgdC70LXQtNGD0Y7RidC10LUg0YHQu9C+0LLQvmA7XG4gIH1cblxuICByZW5kZXJSZXN1bHRzKHF1ZXN0aW9uczpzdHJpbmdbXSwgYW5zd2Vyczpib29sZWFuW10sIHJpZ2h0QW5zd2VyczpudW1iZXIsIHdyb25nQW5zd2VyczpudW1iZXIsIHNjb3JlOm51bWJlcik6dm9pZCB7XG4gICAgdGhpcy5zcHJpbnRDb250ZWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zcHJpbnRDb250ZWluZXIuaW5uZXJIVE1MID0gYCR7U3ByaW50UmVzdWx0LnJlbmRlcihxdWVzdGlvbnMsIGFuc3dlcnMsIHJpZ2h0QW5zd2Vycywgd3JvbmdBbnN3ZXJzLCBzY29yZSl9YDtcbiAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBNb2R1bGVWaWV3O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBJV29yZCB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcblxuY2xhc3MgV29yZHMge1xuICBzdGF0aWMgd29yZHM6IElXb3JkW10gPSBbXTtcblxuICBzdGF0aWMgYWdncmVnYXRlZFdvcmRzOiBJV29yZFtdID0gW107XG5cbiAgc3RhdGljIGxlYXJuZWRXb3JkczogSVdvcmRbXSA9IFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JkcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=