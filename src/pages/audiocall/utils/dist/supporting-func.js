"use strict";
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.support = exports.soundAudio = void 0;
var api_path_1 = require("../../../api/api-path");
var api_1 = require("../../../api/api");
var statisticsData_1 = require("../../statistics/statisticsData");
function shuffle(array) {
    array.sort(function () { return Math.random() - 0.5; });
}
// функция проигрывания аудио с путем из нашего обекта-слово
function soundAudio(path) {
    var audioD = new Audio();
    audioD.src = "" + path;
    audioD.autoplay = true;
}
exports.soundAudio = soundAudio;
var userId = '';
if (localStorage.getItem('user')) {
    userId = JSON.parse(localStorage.getItem('user')).userId;
}
var Support = /** @class */ (function () {
    function Support() {
        this.objStatistic = {
            longestSeriesOfRightAnswers: 0,
            newWords: 0,
            percentOfRightAnswers: 0,
            rightAnswers: 0,
            AllAnswersFromGame: 0,
            answer: []
        };
        this.countNewWords = 0;
        this.newAndLearnUserWords = [];
        this.LearnedWordsID = [];
        this.newWords = 0;
        this.allWords = 0;
        this.WrongAnsweredWords = [];
        this.RightAnsweredWords = [];
        this.textbook = false;
        this.arrayWrongWords = [];
        this.difficultWords = [];
        this.round = 0;
        this.score = 0;
        this.group = 0;
        this.page = 0;
        this.level = 1;
        this.words = [];
        this.wordsString = [];
        this.noRepeat = [];
        this.wordStudied = [];
        this.wordObj = {
            id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: ''
        };
        this.arraySixWords = [];
        this.containerBtn = 'ggg';
    }
    // метод который берет с сервера изученые слова чтобы их не выводить в игру
    Support.prototype.getUserWords = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                api_1.api.getAllUserWords(userId)
                    .then(function (res) {
                    res.forEach(function (element) {
                        var _a, _b, _c;
                        if (element.difficulty === 'learned' || !element.difficulty) {
                            (_a = _this.newAndLearnUserWords) === null || _a === void 0 ? void 0 : _a.push(element.wordId);
                            _this.newAndLearnUserWords = _this.newAndLearnUserWords.filter(function (item, index) { return _this.newAndLearnUserWords.indexOf(item) === index; });
                        }
                        if (element.difficulty === 'aggregated') {
                            (_b = _this.difficultWords) === null || _b === void 0 ? void 0 : _b.push(element.wordId);
                            _this.difficultWords = _this.difficultWords.filter(function (item, index) { return _this.difficultWords.indexOf(item) === index; });
                        }
                        if (element.difficulty === 'learned') {
                            (_c = _this.LearnedWordsID) === null || _c === void 0 ? void 0 : _c.push(element.wordId);
                            _this.LearnedWordsID = _this.LearnedWordsID.filter(function (item, index) { return _this.LearnedWordsID.indexOf(item) === index; });
                            api_1.api.getWord(element.wordId)
                                .then(function (ress) {
                                var _a;
                                if (_this.textbook) {
                                    (_a = _this.noRepeat) === null || _a === void 0 ? void 0 : _a.push(ress === null || ress === void 0 ? void 0 : ress.wordTranslate);
                                    _this.noRepeat = _this.noRepeat.filter(function (item, index) { return _this.noRepeat.indexOf(item) === index; });
                                }
                            });
                        }
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    // проверка слов на изученность
    Support.prototype.getLearnedWord = function (arr) {
        var _this = this;
        var count = 3;
        var counts = new Map();
        var lernWord = '';
        var learnWordArr = [];
        var learnWordArrNormal = [];
        var learnWordArrDifficult = [];
        console.log(arr, 'arr');
        arr.forEach(function (element) {
            console.log(element, 'element');
            if (_this.difficultWords.includes(element)) {
                learnWordArrDifficult.push(element);
            }
            else {
                learnWordArrNormal.push(element);
            }
        });
        console.log(learnWordArrDifficult, 'learnWordArrDifficult', learnWordArrDifficult, 'learnWordArrDifficult');
        for (var i in learnWordArrNormal) {
            if (counts.has(learnWordArrNormal[i])) {
                counts.set(learnWordArrNormal[i], counts.get(learnWordArrNormal[i]) + 1);
            }
            else {
                counts.set(learnWordArrNormal[i], 1);
            }
        }
        var counts2 = Array.from(counts);
        counts2.forEach(function (element) {
            if (element[1] > 2) {
                lernWord = element[0];
                learnWordArr.push(lernWord);
            }
        });
        console.log(learnWordArr, 'lernWordArr');
        return learnWordArr;
    };
    Support.prototype.checkLearnedWrds = function () {
        return __awaiter(this, void 0, Promise, function () {
            var lernWordIDArr;
            var _this = this;
            return __generator(this, function (_a) {
                lernWordIDArr = this.getLearnedWord(this.objStatistic.answer);
                // lernWordIDArr = lernWordIDArr.filter((item) => !this.LearnedWordsID!.includes(item));
                // console.log(lernWordIDArr, 'lernWordIDArr послефильтра');
                lernWordIDArr.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                    var _e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!userId) return [3 /*break*/, 5];
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 5]);
                                return [4 /*yield*/, api_1.api.CreateUserWord(userId, element, { difficulty: 'learned' })];
                            case 2:
                                _a.sent();
                                return [3 /*break*/, 5];
                            case 3:
                                _e_1 = _a.sent();
                                return [4 /*yield*/, api_1.api.UpdateUserWord(userId, element, { difficulty: 'learned' })];
                            case 4:
                                _a.sent();
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    // метод получения статистики
    Support.prototype.staticGet = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        api_1.api.GetsStatistics(userId)
                            .then(function (res) {
                            var _a;
                            _this.objStatistic = (_a = res === null || res === void 0 ? void 0 : res.optional) === null || _a === void 0 ? void 0 : _a.games;
                            resolve();
                        })["catch"](function () {
                            _this.objStatistic = {
                                longestSeriesOfRightAnswers: 0,
                                newWords: 0,
                                percentOfRightAnswers: 0,
                                rightAnswers: 0,
                                AllAnswersFromGame: 0,
                                answer: []
                            };
                            resolve();
                        });
                    })];
            });
        });
    };
    // метод для заполнения статистики
    Support.prototype.staticUpdate = function (objStatistics) {
        return __awaiter(this, void 0, Promise, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = {
                            optional: {
                                games: objStatistics
                            }
                        };
                        return [4 /*yield*/, api_1.api.UpsertsNewStatistics(userId, value)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // удалим слово в котором ошибся юзер
    Support.prototype.deleteWrongWordFromServer = function () {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!userId) return [3 /*break*/, 2];
                        return [4 /*yield*/, api_1.api.DeleteUserWord(userId, this.wordObj.id)];
                    case 1:
                        _b.sent();
                        console.log('удаляем ', (_a = this.wordObj) === null || _a === void 0 ? void 0 : _a.word);
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    // добавляем на сервер новые слова появившиеся в игре
    Support.prototype.CrateNewWord = function (booleanPar) {
        return __awaiter(this, void 0, Promise, function () {
            var optional, _e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!userId) return [3 /*break*/, 5];
                        if (!!this.newAndLearnUserWords.includes(this.wordObj.id)) return [3 /*break*/, 5];
                        optional = { optional: { answer: booleanPar, status: 'new' } };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, api_1.api.CreateUserWord(userId, this.wordObj.id, optional)];
                    case 2:
                        _a.sent();
                        this.countNewWords++;
                        return [3 /*break*/, 5];
                    case 3:
                        _e_2 = _a.sent();
                        return [4 /*yield*/, api_1.api.UpdateUserWord(userId, this.wordObj.id, optional)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // отрисовка хтмл в игре
    Support.prototype.printBtnString = function () {
        return __awaiter(this, void 0, Promise, function () {
            var btnWrapper, countWord, res, garageSection, wordRight, i, button, j, a;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.getUserWords();
                        btnWrapper = document.querySelector('.audio-container-game');
                        countWord = 5;
                        //     выбор уровня и страницы для загрузки слов  ссервера
                        this.group = this.level - 1;
                        if ((!this.textbook)) {
                            this.page = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
                        }
                        return [4 /*yield*/, api_1.api.getWords(this.group, this.page)];
                    case 1:
                        res = _a.sent();
                        garageSection = document.querySelector('.button-container');
                        if (garageSection) {
                            garageSection.innerHTML = '';
                        }
                        if (this.round < countWord) {
                            this.words = res;
                            if (this.wordStudied.length > 0) {
                                this.noRepeat = this.noRepeat.concat(this.wordStudied);
                            }
                            this.wordsString = this.words.map(function (item) { return item.wordTranslate; });
                            if (this.noRepeat.length > 0) {
                                this.wordsString = this.wordsString.filter(function (item) { return !_this.noRepeat.includes(item); });
                            }
                            shuffle(this.wordsString);
                            this.arraySixWords = this.wordsString.slice(0, 5);
                            wordRight = this.arraySixWords[Math.floor(Math.random() * this.arraySixWords.length)];
                            for (i = 0; i < this.words.length; i++) {
                                if (this.words[i].wordTranslate === wordRight) {
                                    this.wordObj = this.words[i];
                                }
                            }
                            this.noRepeat.push(this.wordObj.wordTranslate);
                            soundAudio((api_path_1.apiPath + support.wordObj.audio));
                            button = document.querySelectorAll('.btn-translation');
                            if (this.arraySixWords) {
                                for (j = 0; j < this.arraySixWords.length; j++) {
                                    button[j].textContent = "" + this.arraySixWords[j];
                                    button[j].id = this.arraySixWords[j];
                                    button[j].dataset.num = "" + (j + 1);
                                }
                            }
                            // отрисовка конца игры.
                        }
                        else {
                            btnWrapper.innerHTML = '';
                            this.wordObj.audio = '';
                            a = '';
                            if (this.arrayWrongWords.length > 0) {
                                a = " <p class=\"game-text\">\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0432\u044B\u0443\u0447\u0438\u0442\u044C:&nbsp" + this.arrayWrongWords.join(',\n') + "</p> ";
                            }
                            else {
                                a = ' <p class="game-text">Вы ниразу не ошиблись!</p> ';
                            }
                            btnWrapper.innerHTML += "\n      <div class=\"game-over\">\n        <p class=\"game-text\">\u0412\u044B \u043F\u0440\u043E\u0448\u043B\u0438 \u0438\u0433\u0440\u0443!</p>\n        <p class=\"game-text\">\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: &nbsp " + this.score + "</p>\n        " + a + "\n        <div class=\"btn-game-over-container\">\n          <div  class=\"btn-blue restart\"> \u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</div>\n          <div  class=\"btn-blue\"> <a  class=\"level-change\" href=\"#audiocall\" > \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C</a> </div>\n          \n        </div>\n      </div>\n\n    ";
                            // работа над статистикой
                            if (userId) {
                                // берем статистику и присваиваем ее this.objStatistic
                                this.staticGet().then(function () {
                                    // если записанная в статистике серия короче новой серии объектов то прересзаписывем
                                    if (_this.objStatistic.longestSeriesOfRightAnswers) {
                                        if (_this.objStatistic.longestSeriesOfRightAnswers < _this.RightAnsweredWords.length) {
                                            _this.objStatistic.longestSeriesOfRightAnswers = _this.RightAnsweredWords.length;
                                        }
                                    }
                                    else {
                                        _this.objStatistic.longestSeriesOfRightAnswers = _this.RightAnsweredWords.length;
                                    }
                                    _this.objStatistic.date = _this.dataNow();
                                    _this.objStatistic.newWords = _this.countNewWords;
                                    if (_this.objStatistic.answer) {
                                        _this.objStatistic.answer = _this.objStatistic.answer.concat(_this.RightAnsweredWords);
                                    }
                                    else {
                                        _this.objStatistic.answer = _this.RightAnsweredWords;
                                    }
                                    _this.objStatistic.AllAnswersFromGame += countWord;
                                    _this.objStatistic.rightAnswers += _this.RightAnsweredWords.length;
                                    if (_this.objStatistic.rightAnswers) {
                                        _this.objStatistic.percentOfRightAnswers = Math.floor((_this.objStatistic.rightAnswers * 100) / _this.objStatistic.AllAnswersFromGame);
                                    }
                                    else {
                                        Math.floor((_this.RightAnsweredWords.length * 100) / countWord);
                                    }
                                    _this.staticUpdate(_this.objStatistic);
                                    statisticsData_1.statisticsDataAudiocallShortTerm.newWords = _this.objStatistic.newWords;
                                    statisticsData_1.statisticsDataAudiocallShortTerm.percentOfRightAnswers = _this.objStatistic.percentOfRightAnswers;
                                    statisticsData_1.statisticsDataAudiocallShortTerm.longestSeriesOfRightAnswers = _this.objStatistic.longestSeriesOfRightAnswers;
                                    _this.checkLearnedWrds();
                                    _this.clearLocalStorage();
                                });
                            }
                            if (!userId) {
                                this.clearLocalStorage();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Support.prototype.dataNow = function () {
        var t = new Date();
        var date = ("0" + t.getDate()).slice(-2);
        var month = ("0" + (t.getMonth() + 1)).slice(-2);
        var year = t.getFullYear();
        var dataCurr = date + "/" + month + "/" + year;
        return dataCurr;
    };
    Support.prototype.clearLocalStorage = function () {
        this.WrongAnsweredWords = [];
        this.RightAnsweredWords = [];
        // this.textbook = false;
        this.arrayWrongWords = [];
        this.round = 0;
        this.score = 0;
        this.group = 0;
        this.words = [];
        this.wordsString = [];
        this.noRepeat = [];
        this.wordObj = {
            id: '', group: 0, page: 0, word: '', image: '', audio: '', audioMeaning: '', audioExample: '', textMeaning: '', textExample: '', transcription: '', wordTranslate: '', textMeaningTranslate: '', textExampleTranslate: ''
        };
        this.arraySixWords = [];
    };
    return Support;
}());
var support = new Support();
exports.support = support;
