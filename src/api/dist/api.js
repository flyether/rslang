"use strict";
/* eslint-disable no-else-return */
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
exports.api = void 0;
var api_path_1 = require("./api-path");
var storage_1 = require("../functional/storage");
var api = {
    UpsertsNewStatistics: function (userId, value) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var response, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetch("" + api_path_1.apiPath + api_path_1.usersEndpoint + "/" + userId + "/statistics", {
                                method: 'PUT',
                                headers: {
                                    Authorization: "Bearer " + ((_a = storage_1.storage.user) === null || _a === void 0 ? void 0 : _a.token),
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(value)
                            })];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, Promise.reject(new Error(response.statusText))];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        throw new Error('Error updating user statistics');
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    GetsStatistics: function (userId) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var response, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetch("" + api_path_1.apiPath + api_path_1.usersEndpoint + "/" + userId + "/statistics", {
                                method: 'GET',
                                credentials: 'same-origin',
                                headers: {
                                    Authorization: "Bearer " + ((_a = storage_1.storage.user) === null || _a === void 0 ? void 0 : _a.token)
                                }
                            })];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, Promise.reject(new Error(response.statusText))];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_2 = _b.sent();
                        throw new Error('Error getting statistic');
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    UpsertsNewSettings: function (userId) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var response, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetch("" + api_path_1.apiPath + api_path_1.usersEndpoint + "/" + userId + "/settings", {
                                method: 'PUT',
                                headers: {
                                    Authorization: "Bearer " + ((_a = storage_1.storage.user) === null || _a === void 0 ? void 0 : _a.token),
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(storage_1.storage.settings)
                            })];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [2 /*return*/, undefined];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_3 = _b.sent();
                        throw new Error('error puting new settings');
                    case 6: return [2 /*return*/];
                }
            });
        });
    },
    GetSettings: function (userId) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var response, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetch("" + api_path_1.apiPath + api_path_1.usersEndpoint + "/" + userId + "/settings", {
                                method: 'GET',
                                headers: {
                                    Authorization: "Bearer " + ((_a = storage_1.storage.user) === null || _a === void 0 ? void 0 : _a.token)
                                }
                            })];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, Promise.reject(new Error(response.statusText))];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_4 = _b.sent();
                        throw new Error('Error getting settings');
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    getAllUserWords: function (userId) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var response, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetch("" + api_path_1.apiPath + api_path_1.usersEndpoint + "/" + userId + "/" + api_path_1.wordsEndpoint, {
                                method: 'GET',
                                credentials: 'same-origin',
                                headers: {
                                    Authorization: "Bearer " + ((_a = storage_1.storage.user) === null || _a === void 0 ? void 0 : _a.token)
                                }
                            })];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, Promise.reject(new Error(response.statusText))];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_5 = _b.sent();
                        throw new Error('Error getting words');
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    CreateUserWord: function (userId, wordID, value) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var response, error_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetch("" + api_path_1.apiPath + api_path_1.usersEndpoint + "/" + userId + "/" + api_path_1.wordsEndpoint + "/" + wordID, {
                                method: 'POST',
                                credentials: 'same-origin',
                                headers: {
                                    Authorization: "Bearer " + ((_a = storage_1.storage.user) === null || _a === void 0 ? void 0 : _a.token),
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(value)
                            })];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        console.log(response.statusText);
                        return [4 /*yield*/, Promise.reject(new Error(response.statusText))];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_6 = _b.sent();
                        throw new Error('Error creating user word');
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    UpdateUserWord: function (userId, wordID, value) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var response, error_7;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetch("" + api_path_1.apiPath + api_path_1.usersEndpoint + "/" + userId + "/" + api_path_1.wordsEndpoint + "/" + wordID, {
                                method: 'PUT',
                                headers: {
                                    Authorization: "Bearer " + ((_a = storage_1.storage.user) === null || _a === void 0 ? void 0 : _a.token),
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(value)
                            })];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, Promise.reject(new Error(response.statusText))];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_7 = _b.sent();
                        throw new Error('Error updating user word');
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    DeleteUserWord: function (userId, wordID) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var error_8;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetch("" + api_path_1.apiPath + api_path_1.usersEndpoint + "/" + userId + "/" + api_path_1.wordsEndpoint + "/" + wordID, {
                                method: 'DELETE',
                                headers: {
                                    Authorization: "Bearer " + ((_a = storage_1.storage.user) === null || _a === void 0 ? void 0 : _a.token)
                                }
                            })];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_8 = _b.sent();
                        throw new Error('Error deleting user word');
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    GetUserAggregatedWordById: function (userId, wordID) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var response, error_9;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetch("" + api_path_1.apiPath + api_path_1.usersEndpoint + "/" + userId + "/aggregatedWords/" + wordID, {
                                method: 'GET',
                                headers: {
                                    Authorization: "Bearer " + ((_a = storage_1.storage.user) === null || _a === void 0 ? void 0 : _a.token)
                                }
                            })];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, Promise.reject(new Error(response.statusText))];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_9 = _b.sent();
                        throw new Error('Error getting user aggregated word');
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    createNewUser: function (name, email, password) {
        return __awaiter(this, void 0, Promise, function () {
            var response, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetch("" + api_path_1.apiPath + api_path_1.usersEndpoint, {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ name: name, email: email, password: password })
                            })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [4 /*yield*/, Promise.reject(new Error(response.statusText))];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_10 = _a.sent();
                        throw new Error('length must be at least 8 characters long');
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    getUser: function (id) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var response, error_11;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetch("" + api_path_1.apiPath + api_path_1.usersEndpoint + "/" + id, {
                                method: 'GET',
                                headers: {
                                    Authorization: "Bearer " + ((_a = storage_1.storage.user) === null || _a === void 0 ? void 0 : _a.token)
                                }
                            })];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, Promise.reject(new Error(response.statusText))];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_11 = _b.sent();
                        throw new Error('User not found');
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    userSignIn: function (email, password) {
        return __awaiter(this, void 0, Promise, function () {
            var response, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetch("" + api_path_1.apiPath + api_path_1.signIn, {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ email: email, password: password })
                            })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [4 /*yield*/, Promise.reject(new Error(response.statusText))];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_12 = _a.sent();
                        throw new Error('Could not find user');
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    getWords: function (group, page) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var response, error_13;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetch("" + api_path_1.apiPath + api_path_1.wordsEndpoint + "?group=" + group + "&page=" + page, {
                                method: 'GET',
                                headers: {
                                    Authorization: "Bearer " + ((_a = storage_1.storage.user) === null || _a === void 0 ? void 0 : _a.token)
                                }
                            })];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, Promise.reject(new Error(response.statusText))];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_13 = _b.sent();
                        throw new Error("Can't get words");
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    getWord: function (id) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var response, error_14;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetch("" + api_path_1.apiPath + api_path_1.wordsEndpoint + "/" + id, {
                                method: 'GET',
                                headers: {
                                    Authorization: "Bearer " + ((_a = storage_1.storage.user) === null || _a === void 0 ? void 0 : _a.token)
                                }
                            })];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, Promise.reject(new Error(response.statusText))];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_14 = _b.sent();
                        throw new Error("Can't get word");
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
};
exports.api = api;
