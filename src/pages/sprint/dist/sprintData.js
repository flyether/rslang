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
exports.sprintData = exports.objSprintDate = void 0;
var func_1 = require("../../utils/func");
var api_1 = require("../../api/api");
var statisticsData_1 = require("../statistics/statisticsData");
function dataNow() {
    var t = new Date();
    var date = ("0" + t.getDate()).slice(-2);
    var month = ("0" + (t.getMonth() + 1)).slice(-2);
    var year = t.getFullYear();
    var dateCurr = date + "/" + month + "/" + year;
    return dateCurr;
}
exports.objSprintDate = {
    date: dataNow(),
    newWords: 0,
    percentOfRightAnswersSprint: 0,
    longestSeriesOfRightAnswersSprint: 0,
    rightAnswersSprint: 0,
    AllAnswersFromGameSprint: 0
};
var valueStatisticsAudiocall = {
    optional: {
        games: exports.objSprintDate
    }
};
exports.sprintData = {
    userID: 'no',
    longestSeries: 0,
    seriesArr: [],
    allAnswers: [],
    rightAnswers: [],
    newWords: [],
    amountOfNewWords: 0,
    amountOfAllAnswers: 0,
    amountOfRightAnswers: 0,
    updateLongestSeries: function () {
        if (this.seriesArr.length > this.longestSeries) {
            this.longestSeries = this.seriesArr.length;
        }
        console.log(this.longestSeries);
        this.seriesArr = [];
    },
    countAnswers: function () {
        this.amountOfAllAnswers = this.allAnswers.length;
        this.amountOfRightAnswers = this.allAnswers.filter(function (item) { return item; }).length;
    },
    writeSprintDataToStatistics: function () {
        return __awaiter(this, void 0, void 0, function () {
            var arr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.rightAnswers);
                        this.userID = func_1.checkUserAuthorization();
                        if (!(this.userID !== 'no')) return [3 /*break*/, 2];
                        // проанализировать правильные ответы
                        this.updateLongestSeries();
                        this.countAnswers();
                        return [4 /*yield*/, statisticsData_1.getSprintDataArray()];
                    case 1:
                        arr = _a.sent();
                        this.updateobjSprintDate(arr);
                        this.setDataToStatistics();
                        // write then clean
                        this.cleanData();
                        return [3 /*break*/, 3];
                    case 2:
                        this.cleanData();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    cleanData: function () {
        this.longestSeries = 0;
        this.seriesArr = [];
        this.allAnswers = [];
        this.rightAnswers = [];
        this.newWords = [];
        this.amountOfNewWords = 0;
        this.amountOfAllAnswers = 0;
        this.amountOfRightAnswers = 0;
    },
    updateobjSprintDate: function (arr) {
        console.log(arr);
        // objSprintDate.newWordsSprint = arr[0] + word
        exports.objSprintDate.longestSeriesOfRightAnswersSprint = (arr[1] > this.longestSeries)
            ? arr[1] : this.longestSeries;
        exports.objSprintDate.AllAnswersFromGameSprint = arr[2] + this.amountOfAllAnswers;
        exports.objSprintDate.rightAnswersSprint = arr[3] + this.amountOfRightAnswers;
        exports.objSprintDate.percentOfRightAnswersSprint = Math.round((exports.objSprintDate.rightAnswersSprint * 100) / exports.objSprintDate.AllAnswersFromGameSprint);
    },
    setDataToStatistics: function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                api_1.api.UpsertsNewStatistics(exports.sprintData.userID, valueStatisticsAudiocall)
                    .then(function (res) { return console.log('update', res); });
                return [2 /*return*/];
            });
        });
    }
};
