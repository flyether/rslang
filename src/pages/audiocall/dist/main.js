"use strict";
exports.__esModule = true;
exports.AudiocallGame = void 0;
var game_render_1 = require("./utils/game-render");
var supporting_func_1 = require("./utils/supporting-func");
var header_1 = require("../../components/header");
var AudiocallGame = {
    // hashes: {
    //   main: '#main',
    // },
    render: function () {
        supporting_func_1.support.printBtnString();
        return "\n    " + header_1["default"].render() + "\n       <div class = 'container'> \n       <a class=\"go-main \" href='#main' >\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</a> \n         <div class = 'game'> " + game_render_1.gameArea + " </div>\n         \n         \n         </div>\n      ";
    }
};
exports.AudiocallGame = AudiocallGame;
