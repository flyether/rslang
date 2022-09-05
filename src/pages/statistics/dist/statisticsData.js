"use strict";
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
exports.getSprintDataArray = exports.getSprintDataForRendering = exports.staticGetSprint = exports.staticGet = exports.statisticsDataSprintShortTerm = exports.statisticsDataAudiocallShortTerm = exports.statisticsDataTextbookShortTerm = exports.statisticsDataLongTerm = void 0;
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
var api_1 = require("../../api/api");
var userId = '';
if (localStorage.getItem('user')) {
    userId = JSON.parse(localStorage.getItem('user')).userId;
}
function getArrOfLast5Days() {
    var now = Date.now();
    var oneDay = 86400000;
    var arr = [];
    for (var i = 0; i < 5; i += 1) {
        arr.push(new Date(now));
        now -= oneDay;
    }
    return arr.map(function (elem) { return elem.toLocaleDateString(); }).reverse();
}
function dataNow() {
    var t = new Date();
    var date = ("0" + t.getDate()).slice(-2);
    var month = ("0" + (t.getMonth() + 1)).slice(-2);
    var year = t.getFullYear();
    var dateCurr = date + "/" + month + "/" + year;
    return dateCurr;
}
exports.statisticsDataLongTerm = {
    labels: getArrOfLast5Days(),
    labels1: getArrOfLast5Days(),
    label1: 'Количество новых слов за день',
    data1: [0],
    label2: 'Количество изученных слов',
    data2: [0],
    label3: 'Количество новых слов все время',
    data3: [0]
};
exports.statisticsDataTextbookShortTerm = {
    newWords: 30,
    learnedWords: 10,
    percentOfRightAnswers: 50
};
var objAudiocallDate = {
    date: dataNow(),
    percentOfRightAnswers: 0,
    newWords: 0,
    longestSeriesOfRightAnswers: 0,
    newWordsSprint: 0,
    percentOfRightAnswersSprint: 0,
    longestSeriesOfRightAnswersSprint: 0,
    rightAnswersSprint: 0,
    AllAnswersFromGameSprint: 0
};
var longStatisticsStore = {
    learnedWords: [0],
    NewWords: [0],
    date: ['0']
};
function dada1push() {
    for (var i = 0; i < 5; i++) {
        if (longStatisticsStore.NewWords[longStatisticsStore.NewWords.length - i]) {
            exports.statisticsDataLongTerm.data1[i] = longStatisticsStore.NewWords[longStatisticsStore.NewWords.length - i];
        }
        else {
            exports.statisticsDataLongTerm.data1[i] = 0;
        }
    }
    exports.statisticsDataLongTerm.data1 = exports.statisticsDataLongTerm.data1.reverse();
}
var valueStatisticsAudiocall = {
    optional: {
        games: objAudiocallDate,
        long: longStatisticsStore
    }
};
exports.statisticsDataAudiocallShortTerm = {
    newWords: objAudiocallDate.newWords,
    percentOfRightAnswers: objAudiocallDate.percentOfRightAnswers,
    longestSeriesOfRightAnswers: objAudiocallDate.longestSeriesOfRightAnswers
};
exports.statisticsDataSprintShortTerm = {
    newWords: 0,
    percentOfRightAnswers: 0,
    longestSeriesOfRightAnswers: 0
};
function staticGet() {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_1.api.GetsStatistics(userId)
                    .then(function (res) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
                    console.log(objAudiocallDate.date, 'objAudiocallDate.date', 'res?.optional?.games?.date', (_b = (_a = res === null || res === void 0 ? void 0 : res.optional) === null || _a === void 0 ? void 0 : _a.games) === null || _b === void 0 ? void 0 : _b.date);
                    if (objAudiocallDate.date === ((_d = (_c = res === null || res === void 0 ? void 0 : res.optional) === null || _c === void 0 ? void 0 : _c.games) === null || _d === void 0 ? void 0 : _d.date)) {
                        objAudiocallDate.newWords = (_f = (_e = res === null || res === void 0 ? void 0 : res.optional) === null || _e === void 0 ? void 0 : _e.games) === null || _f === void 0 ? void 0 : _f.newWords;
                        objAudiocallDate.longestSeriesOfRightAnswers = (_h = (_g = res === null || res === void 0 ? void 0 : res.optional) === null || _g === void 0 ? void 0 : _g.games) === null || _h === void 0 ? void 0 : _h.longestSeriesOfRightAnswers;
                        objAudiocallDate.percentOfRightAnswers = (_k = (_j = res === null || res === void 0 ? void 0 : res.optional) === null || _j === void 0 ? void 0 : _j.games) === null || _k === void 0 ? void 0 : _k.percentOfRightAnswers;
                        exports.statisticsDataAudiocallShortTerm.percentOfRightAnswers = (_m = (_l = res === null || res === void 0 ? void 0 : res.optional) === null || _l === void 0 ? void 0 : _l.games) === null || _m === void 0 ? void 0 : _m.percentOfRightAnswers;
                        exports.statisticsDataAudiocallShortTerm.newWords = (_p = (_o = res === null || res === void 0 ? void 0 : res.optional) === null || _o === void 0 ? void 0 : _o.games) === null || _p === void 0 ? void 0 : _p.newWords;
                        exports.statisticsDataAudiocallShortTerm.longestSeriesOfRightAnswers = (_r = (_q = res === null || res === void 0 ? void 0 : res.optional) === null || _q === void 0 ? void 0 : _q.games) === null || _r === void 0 ? void 0 : _r.longestSeriesOfRightAnswers;
                        console.log(longStatisticsStore, 'ongStatisticsStore');
                    }
                    else {
                        if ((_t = (_s = res === null || res === void 0 ? void 0 : res.optional) === null || _s === void 0 ? void 0 : _s.games) === null || _t === void 0 ? void 0 : _t.newWords) {
                            (_u = longStatisticsStore.NewWords) === null || _u === void 0 ? void 0 : _u.push((_w = (_v = res === null || res === void 0 ? void 0 : res.optional) === null || _v === void 0 ? void 0 : _v.games) === null || _w === void 0 ? void 0 : _w.newWords);
                            exports.statisticsDataLongTerm.data3 = longStatisticsStore.NewWords;
                        }
                        else {
                            (_x = longStatisticsStore.NewWords) === null || _x === void 0 ? void 0 : _x.push(0);
                        }
                        dada1push();
                        if ((_z = (_y = res === null || res === void 0 ? void 0 : res.optional) === null || _y === void 0 ? void 0 : _y.textbook) === null || _z === void 0 ? void 0 : _z.learnedWordss) {
                            (_0 = longStatisticsStore.learnedWords) === null || _0 === void 0 ? void 0 : _0.push((_1 = res === null || res === void 0 ? void 0 : res.optional) === null || _1 === void 0 ? void 0 : _1.textbook.learnedWordss);
                            exports.statisticsDataLongTerm.data2 = longStatisticsStore.learnedWords;
                        }
                        else {
                            (_2 = longStatisticsStore.learnedWords) === null || _2 === void 0 ? void 0 : _2.push(0);
                        }
                        if ((_4 = (_3 = res === null || res === void 0 ? void 0 : res.optional) === null || _3 === void 0 ? void 0 : _3.games) === null || _4 === void 0 ? void 0 : _4.date) {
                            (_5 = longStatisticsStore.date) === null || _5 === void 0 ? void 0 : _5.push((_7 = (_6 = res === null || res === void 0 ? void 0 : res.optional) === null || _6 === void 0 ? void 0 : _6.games) === null || _7 === void 0 ? void 0 : _7.date);
                            exports.statisticsDataLongTerm.labels1 = longStatisticsStore.date;
                        }
                        else {
                            (_8 = longStatisticsStore.date) === null || _8 === void 0 ? void 0 : _8.push('нет даты');
                        }
                        console.log(longStatisticsStore, 'longStatisticsStore', res === null || res === void 0 ? void 0 : res.optional, 'res?.optional?');
                        api_1.api.UpsertsNewStatistics(userId, valueStatisticsAudiocall);
                    }
                })["catch"](function (error) {
                    objAudiocallDate = {
                        percentOfRightAnswers: 0,
                        newWords: 0,
                        longestSeriesOfRightAnswers: 0,
                        newWordsSprint: 0,
                        percentOfRightAnswersSprint: 0,
                        longestSeriesOfRightAnswersSprint: 0,
                        rightAnswersSprint: 0,
                        AllAnswersFromGameSprint: 0
                    };
                })];
        });
    });
}
exports.staticGet = staticGet;
function staticGetSprint() {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_1.api.GetsStatistics(userId)
                    .then(function (res) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                    if (objAudiocallDate.date === ((_b = (_a = res === null || res === void 0 ? void 0 : res.optional) === null || _a === void 0 ? void 0 : _a.games) === null || _b === void 0 ? void 0 : _b.date)) {
                        objAudiocallDate.percentOfRightAnswersSprint = (_d = (_c = res === null || res === void 0 ? void 0 : res.optional) === null || _c === void 0 ? void 0 : _c.games) === null || _d === void 0 ? void 0 : _d.percentOfRightAnswersSprint;
                        objAudiocallDate.newWordsSprint = (_f = (_e = res === null || res === void 0 ? void 0 : res.optional) === null || _e === void 0 ? void 0 : _e.games) === null || _f === void 0 ? void 0 : _f.newWordsSprint;
                        objAudiocallDate.longestSeriesOfRightAnswersSprint = (_h = (_g = res === null || res === void 0 ? void 0 : res.optional) === null || _g === void 0 ? void 0 : _g.games) === null || _h === void 0 ? void 0 : _h.longestSeriesOfRightAnswersSprint;
                        objAudiocallDate.rightAnswersSprint = (_k = (_j = res === null || res === void 0 ? void 0 : res.optional) === null || _j === void 0 ? void 0 : _j.games) === null || _k === void 0 ? void 0 : _k.rightAnswersSprint;
                        objAudiocallDate.AllAnswersFromGameSprint = (_m = (_l = res === null || res === void 0 ? void 0 : res.optional) === null || _l === void 0 ? void 0 : _l.games) === null || _m === void 0 ? void 0 : _m.AllAnswersFromGameSprint;
                    }
                    else {
                        api_1.api.UpsertsNewStatistics(userId, valueStatisticsAudiocall);
                    }
                })["catch"](function (error) {
                    objAudiocallDate = {
                        percentOfRightAnswers: 0,
                        newWords: 0,
                        longestSeriesOfRightAnswers: 0,
                        newWordsSprint: 0,
                        percentOfRightAnswersSprint: 0,
                        longestSeriesOfRightAnswersSprint: 0,
                        rightAnswersSprint: 0,
                        AllAnswersFromGameSprint: 0
                    };
                })];
        });
    });
}
exports.staticGetSprint = staticGetSprint;
function getSprintDataForRendering() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, staticGetSprint()];
                case 1:
                    _a.sent();
                    // console.log(objAudiocallDate.longestSeriesOfRightAnswersSprint);
                    return [2 /*return*/, [objAudiocallDate.newWordsSprint, objAudiocallDate.percentOfRightAnswersSprint, objAudiocallDate.longestSeriesOfRightAnswersSprint]];
            }
        });
    });
}
exports.getSprintDataForRendering = getSprintDataForRendering;
function getSprintDataArray() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, staticGetSprint()];
                case 1:
                    _a.sent();
                    console.log(objAudiocallDate.newWordsSprint, objAudiocallDate.longestSeriesOfRightAnswersSprint, objAudiocallDate.AllAnswersFromGameSprint, objAudiocallDate.rightAnswersSprint);
                    return [2 /*return*/, [objAudiocallDate.newWordsSprint, objAudiocallDate.longestSeriesOfRightAnswersSprint,
                            objAudiocallDate.AllAnswersFromGameSprint, objAudiocallDate.rightAnswersSprint]];
            }
        });
    });
}
exports.getSprintDataArray = getSprintDataArray;
