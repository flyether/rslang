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
exports.statisticsDataSprintShortTerm = exports.staticGet = exports.statisticsDataAudiocallShortTerm = exports.statisticsDataTextbookShortTerm = exports.statisticsDataLongTerm = void 0;
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
    label1: 'Количество новых слов за день',
    data1: [13, 19, 32, 2, 11],
    label2: 'Количество изученных слов',
    data2: [130, 150, 175, 200, 215]
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
var valueStatisticsAudiocall = {
    optional: {
        games: objAudiocallDate
    }
};
exports.statisticsDataAudiocallShortTerm = {
    newWords: objAudiocallDate.newWords,
    percentOfRightAnswers: objAudiocallDate.percentOfRightAnswers,
    longestSeriesOfRightAnswers: objAudiocallDate.longestSeriesOfRightAnswers
};
function staticGet() {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            api_1.api.GetsStatistics(userId)
                .then(function (res) {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (objAudiocallDate.date === ((_b = (_a = res === null || res === void 0 ? void 0 : res.optional) === null || _a === void 0 ? void 0 : _a.games) === null || _b === void 0 ? void 0 : _b.date)) {
                    objAudiocallDate.percentOfRightAnswers = (_d = (_c = res === null || res === void 0 ? void 0 : res.optional) === null || _c === void 0 ? void 0 : _c.games) === null || _d === void 0 ? void 0 : _d.percentOfRightAnswers;
                    objAudiocallDate.newWords = (_f = (_e = res === null || res === void 0 ? void 0 : res.optional) === null || _e === void 0 ? void 0 : _e.games) === null || _f === void 0 ? void 0 : _f.newWords;
                    objAudiocallDate.longestSeriesOfRightAnswers = (_h = (_g = res === null || res === void 0 ? void 0 : res.optional) === null || _g === void 0 ? void 0 : _g.games) === null || _h === void 0 ? void 0 : _h.newWords;
                    exports.statisticsDataAudiocallShortTerm.percentOfRightAnswers = objAudiocallDate.percentOfRightAnswers;
                    exports.statisticsDataAudiocallShortTerm.newWords = objAudiocallDate.newWords;
                    exports.statisticsDataAudiocallShortTerm.longestSeriesOfRightAnswers = objAudiocallDate.longestSeriesOfRightAnswers;
                }
                else {
                    api_1.api.UpsertsNewStatistics(userId, valueStatisticsAudiocall);
                }
            });
            return [2 /*return*/];
        });
    });
}
exports.staticGet = staticGet;
exports.statisticsDataSprintShortTerm = {
    newWords: 100,
    percentOfRightAnswers: 50,
    longestSeriesOfRightAnswers: 15
};
