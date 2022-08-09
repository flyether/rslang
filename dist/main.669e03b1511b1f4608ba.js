/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.sass":
/*!*******************************!*\
  !*** ./src/styles/style.sass ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/content.ts":
/*!***********************************!*\
  !*** ./src/components/content.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Content = {
    render: (customClass = '') => {
        return `<div class="content ${customClass}" id="content"></div>`;
    },
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
    render: (customClass = '') => {
        return `<footer class="footer ${customClass}">
              <div class="github-links">
                <a href="https://github.com/flyether" class="github-link">flyether<a>
                <a href="https://github.com/Darina992" class="github-link">Darina992<a>
                <a href="https://github.com/AlenaDoz" class="github-link">AlenaDoz<a>
              </div>
              <span>&#169; 2022</span>
              <a href="https://rs.school/js/" class="rs-link"></a>
            </footer>`;
    },
};
exports["default"] = Footer;


/***/ }),

/***/ "./src/components/header.ts":
/*!**********************************!*\
  !*** ./src/components/header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Header = {
    render: (customClass = '') => {
        return `
      <header class="header ${customClass}" id="header">
        <h1 class="header__logo"><a href="">RSLang</a></h1>
        <div class="header__auth"><button>Войти</button></div>
        <nav class="header__menu">
          <ul class="menu__list">
            <li class="menu__item menu__item_active"><a href="">Главная</a></li>
            <li class="menu__item"><a href="">Учебник</a></li>
            <li class="menu__item"><a href="">Статистика</a></li>
            <li class="menu__item"><a href="">Аудиовызов</a></li>
            <li class="menu__item"><a href="">Спринт</a></li>
            <li class="menu__item"><a href="">О команде</a></li>
          </ul>
        </nav>
      </header>
    `;
    },
};
exports["default"] = Header;


/***/ }),

/***/ "./src/controller/controller.ts":
/*!**************************************!*\
  !*** ./src/controller/controller.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class ModuleController {
    init(container, model) {
        this.myModuleContainer = container;
        this.myModuleModel = model;
        /*window.addEventListener('hashchange', () => {
          this.updateState();
        });*/
        this.updateState();
    }
    updateState() {
        const hashPageName = location.hash.slice(1).toLowerCase();
        this.myModuleModel.updateState(hashPageName);
    }
}
exports["default"] = ModuleController;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const components = {
    header: header_1.default,
    content: content_1.default,
    footer: footer_1.default,
};
const routes = {
    main: main_1.default,
    default: main_1.default,
};
const initialObj = {
    container: 'spa',
    routes: routes,
    components: components,
};
/* ----- spa init module --- */
const mySPA = (function () {
    let view;
    let model;
    let controller;
    return {
        init: function (obj) {
            this.renderComponents(obj.container, obj.components);
            const containerSPA = document.getElementById(obj.container);
            view = new view_1.default();
            model = new model_1.default();
            controller = new controller_1.default();
            view.init(containerSPA, routes);
            model.init(view);
            controller.init(containerSPA, model);
        },
        renderComponents: function (container, componentsObj) {
            const root = document.getElementById(container);
            const componentsList = Object.keys(componentsObj);
            for (const item of componentsList) {
                root.innerHTML += componentsObj[item].render();
            }
        },
    };
}());
/* ------ end app module ----- */
/*** --- init module --- ***/
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
}
exports["default"] = ModuleModel;


/***/ }),

/***/ "./src/pages/main.ts":
/*!***************************!*\
  !*** ./src/pages/main.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const MainPage = {
    id: 'main',
    render: () => {
        return `
       <div class="main__page">
         <div class="main__page__description">
           <h2 class="title">The World is Yours with RSLang!</h2>
           <p>RSLang — это эффективный сервис для увлекательной практики английского языка. Присоединяйся!
         </div>
         <div class="main__page__advantages">
           <h2 class="title">Почему RSLang?</h2>
           <ul class="advantages__list">
             <li class="advantages__item">
               <img src="../assets/phone.svg"> 
               <h3>Бесплатный доступ</h3>
               <p>Наша миссия — сделать обучения языкам доступным для каждого</p>
             </li>
             <li class="advantages__item">
               <h3>Словарь</h3>
               <p>Щелкните любое слово, чтобы увидеть определение в источниках, и сохраните его в своем списке карточек</p>
             </li>
             <li class="advantages__item">
               <h3>Играй, чтобы учиться</h3>
               <p>Игры включают Аудиовызов,Спринт и многое другое...</p>
             </li>
             <li class="advantages__item"s>
               <h3>Учитесь на ходу</h3>
               <p>RSLang доступна для веб и мобильных устройств. Учитесь из любого места!</p>
             </li>
           </ul>
         </div>
       </div>
    `;
    },
};
exports["default"] = MainPage;


/***/ }),

/***/ "./src/view/view.ts":
/*!**************************!*\
  !*** ./src/view/view.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class ModuleView {
    init(container, routes) {
        this.myModuleContainer = container;
        this.routesObj = routes;
        this.contentContainer = this.myModuleContainer.querySelector('#content');
        //this.findElements();
    }
    renderContent(hashPageName) {
        let routeName = 'default';
        routeName = (hashPageName.length) ? hashPageName : routeName;
        const route = this.routesObj[routeName];
        this.contentContainer.innerHTML = route.render();
        //this.findElements();
    }
}
exports["default"] = ModuleView;


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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFRZCxJQUFJLENBQUMsU0FBc0IsRUFBRSxNQUFjO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFnQixDQUFDO1FBQ3hGLHNCQUFzQjtJQUN4QixDQUFDO0lBRUQsYUFBYSxDQUFDLFlBQW1CO1FBQy9CLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMxQixTQUFTLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzdELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBeUIsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pELHNCQUFzQjtJQUV4QixDQUFDO0NBT0Y7QUFFRCxxQkFBZSxVQUFVLENBQUM7Ozs7Ozs7VUNqQzFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JzbGVuZy8uL3NyYy9zdHlsZXMvc3R5bGUuc2FzcyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9jb250ZW50LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbnRyb2xsZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL21vZGVsL21vZGVsLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9tYWluLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy92aWV3L3ZpZXcudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBDb250ZW50ID0ge1xyXG4gIHJlbmRlcjogKGN1c3RvbUNsYXNzID0gJycpID0+IHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNvbnRlbnQgJHtjdXN0b21DbGFzc31cIiBpZD1cImNvbnRlbnRcIj48L2Rpdj5gO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xyXG4iLCJjb25zdCBGb290ZXIgPSB7XHJcbiAgcmVuZGVyOiAoY3VzdG9tQ2xhc3MgPSAnJykgPT4ge1xyXG4gICAgcmV0dXJuIGA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyICR7Y3VzdG9tQ2xhc3N9XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdpdGh1Yi1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9mbHlldGhlclwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5mbHlldGhlcjxhPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EYXJpbmE5OTJcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+RGFyaW5hOTkyPGE+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FsZW5hRG96XCIgY2xhc3M9XCJnaXRodWItbGlua1wiPkFsZW5hRG96PGE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4+JiMxNjk7IDIwMjI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcnMuc2Nob29sL2pzL1wiIGNsYXNzPVwicnMtbGlua1wiPjwvYT5cclxuICAgICAgICAgICAgPC9mb290ZXI+YDtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJjb25zdCBIZWFkZXIgPSB7XHJcbiAgcmVuZGVyOiAoY3VzdG9tQ2xhc3MgPSAnJykgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgPGhlYWRlciBjbGFzcz1cImhlYWRlciAke2N1c3RvbUNsYXNzfVwiIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGVyX19sb2dvXCI+PGEgaHJlZj1cIlwiPlJTTGFuZzwvYT48L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2F1dGhcIj48YnV0dG9uPtCS0L7QudGC0Lg8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICA8bmF2IGNsYXNzPVwiaGVhZGVyX19tZW51XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51X19saXN0XCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW0gbWVudV9faXRlbV9hY3RpdmVcIj48YSBocmVmPVwiXCI+0JPQu9Cw0LLQvdCw0Y88L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCJcIj7Qo9GH0LXQsdC90LjQujwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIlwiPtCh0YLQsNGC0LjRgdGC0LjQutCwPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiXCI+0JDRg9C00LjQvtCy0YvQt9C+0LI8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCJcIj7QodC/0YDQuNC90YI8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCJcIj7QniDQutC+0LzQsNC90LTQtTwvYT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICBgO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCAgTW9kdWxlTW9kZWwgIGZyb20gJy4uL21vZGVsL21vZGVsJztcclxuXHJcbmNsYXNzIE1vZHVsZUNvbnRyb2xsZXIge1xyXG4gIG15TW9kdWxlQ29udGFpbmVyITpIVE1MRWxlbWVudDtcclxuXHJcbiAgbXlNb2R1bGVNb2RlbCE6IE1vZHVsZU1vZGVsO1xyXG5cclxuXHJcbiAgaW5pdChjb250YWluZXI6SFRNTEVsZW1lbnQsIG1vZGVsOiBNb2R1bGVNb2RlbCk6dm9pZCB7XHJcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgdGhpcy5teU1vZHVsZU1vZGVsID0gbW9kZWw7XHJcbiAgICAvKndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgICB9KTsqL1xyXG5cclxuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN0YXRlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaGFzaFBhZ2VOYW1lID0gbG9jYXRpb24uaGFzaC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLnVwZGF0ZVN0YXRlKGhhc2hQYWdlTmFtZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlQ29udHJvbGxlcjtcclxuIiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zYXNzJztcclxuXHJcbmltcG9ydCBNb2R1bGVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci9jb250cm9sbGVyJztcclxuaW1wb3J0IE1vZHVsZU1vZGVsIGZyb20gJy4vbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgTW9kdWxlVmlldyBmcm9tICcuL3ZpZXcvdmlldyc7XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnRzLCBSb3V0ZXMsIEluaXRpYWxPYmogfSBmcm9tICcuL3R5cGVzL3R5cGVzJztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyJztcclxuXHJcbmltcG9ydCBNYWluUGFnZSBmcm9tICcuL3BhZ2VzL21haW4nO1xyXG5cclxuY29uc3QgY29tcG9uZW50czpDb21wb25lbnRzID0ge1xyXG4gIGhlYWRlcjogSGVhZGVyLFxyXG4gIGNvbnRlbnQ6IENvbnRlbnQsXHJcbiAgZm9vdGVyOiBGb290ZXIsXHJcbn07XHJcblxyXG5jb25zdCByb3V0ZXM6Um91dGVzID0ge1xyXG4gIG1haW46IE1haW5QYWdlLFxyXG4gIGRlZmF1bHQ6IE1haW5QYWdlLFxyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbE9iajpJbml0aWFsT2JqID0ge1xyXG4gIGNvbnRhaW5lcjogJ3NwYScsXHJcbiAgcm91dGVzOiByb3V0ZXMsXHJcbiAgY29tcG9uZW50czogY29tcG9uZW50cyxcclxufTtcclxuXHJcbi8qIC0tLS0tIHNwYSBpbml0IG1vZHVsZSAtLS0gKi9cclxuY29uc3QgbXlTUEEgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCB2aWV3Ok1vZHVsZVZpZXc7XHJcbiAgbGV0IG1vZGVsOk1vZHVsZU1vZGVsO1xyXG4gIGxldCBjb250cm9sbGVyOk1vZHVsZUNvbnRyb2xsZXI7XHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uIChvYmo6SW5pdGlhbE9iaikge1xyXG4gICAgICB0aGlzLnJlbmRlckNvbXBvbmVudHMob2JqLmNvbnRhaW5lciwgb2JqLmNvbXBvbmVudHMpO1xyXG4gICAgICBjb25zdCBjb250YWluZXJTUEEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmouY29udGFpbmVyKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgdmlldyA9IG5ldyBNb2R1bGVWaWV3KCk7XHJcbiAgICAgIG1vZGVsID0gbmV3IE1vZHVsZU1vZGVsKCk7XHJcbiAgICAgIGNvbnRyb2xsZXIgPSBuZXcgTW9kdWxlQ29udHJvbGxlcigpO1xyXG5cclxuICAgICAgdmlldy5pbml0KGNvbnRhaW5lclNQQSwgcm91dGVzKTtcclxuICAgICAgbW9kZWwuaW5pdCh2aWV3KTtcclxuICAgICAgY29udHJvbGxlci5pbml0KGNvbnRhaW5lclNQQSwgbW9kZWwpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXJDb21wb25lbnRzOiBmdW5jdGlvbiAoY29udGFpbmVyOnN0cmluZywgY29tcG9uZW50c09iajogQ29tcG9uZW50cykge1xyXG4gICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVyKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgY29uc3QgY29tcG9uZW50c0xpc3QgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzT2JqKTtcclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGNvbXBvbmVudHNMaXN0KSB7XHJcbiAgICAgICAgcm9vdC5pbm5lckhUTUwgKz0gY29tcG9uZW50c09ialtpdGVtIGFzIGtleW9mIENvbXBvbmVudHNdLnJlbmRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn0oKSk7XHJcblxyXG4vKiAtLS0tLS0gZW5kIGFwcCBtb2R1bGUgLS0tLS0gKi9cclxuXHJcbi8qKiogLS0tIGluaXQgbW9kdWxlIC0tLSAqKiovXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIG15U1BBLmluaXQoaW5pdGlhbE9iaik7XHJcbn0pO1xyXG4iLCJpbXBvcnQgTW9kZWxWaWV3IGZyb20gJy4uL3ZpZXcvdmlldyc7XHJcblxyXG5cclxuY2xhc3MgTW9kdWxlTW9kZWwge1xyXG4gIG15TW9kdWxlVmlldyE6IE1vZGVsVmlldztcclxuXHJcbiAgaW5pdCh2aWV3OiBNb2RlbFZpZXcpIHtcclxuICAgIHRoaXMubXlNb2R1bGVWaWV3ID0gdmlldztcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN0YXRlKHBhZ2VOYW1lOnN0cmluZykge1xyXG4gICAgdGhpcy5teU1vZHVsZVZpZXcucmVuZGVyQ29udGVudChwYWdlTmFtZSk7XHJcbiAgfVxyXG5cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlTW9kZWw7XHJcbiIsImNvbnN0IE1haW5QYWdlID0ge1xyXG4gIGlkOiAnbWFpbicsXHJcbiAgcmVuZGVyOiAoKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VcIj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj5UaGUgV29ybGQgaXMgWW91cnMgd2l0aCBSU0xhbmchPC9oMj5cclxuICAgICAgICAgICA8cD5SU0xhbmcg4oCUINGN0YLQviDRjdGE0YTQtdC60YLQuNCy0L3Ri9C5INGB0LXRgNCy0LjRgSDQtNC70Y8g0YPQstC70LXQutCw0YLQtdC70YzQvdC+0Lkg0L/RgNCw0LrRgtC40LrQuCDQsNC90LPQu9C40LnRgdC60L7Qs9C+INGP0LfRi9C60LAuINCf0YDQuNGB0L7QtdC00LjQvdGP0LnRgdGPIVxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VfX2FkdmFudGFnZXNcIj5cclxuICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPtCf0L7Rh9C10LzRgyBSU0xhbmc/PC9oMj5cclxuICAgICAgICAgICA8dWwgY2xhc3M9XCJhZHZhbnRhZ2VzX19saXN0XCI+XHJcbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL3Bob25lLnN2Z1wiPiBcclxuICAgICAgICAgICAgICAgPGgzPtCR0LXRgdC/0LvQsNGC0L3Ri9C5INC00L7RgdGC0YPQvzwvaDM+XHJcbiAgICAgICAgICAgICAgIDxwPtCd0LDRiNCwINC80LjRgdGB0LjRjyDigJQg0YHQtNC10LvQsNGC0Ywg0L7QsdGD0YfQtdC90LjRjyDRj9C30YvQutCw0Lwg0LTQvtGB0YLRg9C/0L3Ri9C8INC00LvRjyDQutCw0LbQtNC+0LPQvjwvcD5cclxuICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgIDxoMz7QodC70L7QstCw0YDRjDwvaDM+XHJcbiAgICAgICAgICAgICAgIDxwPtCp0LXQu9C60L3QuNGC0LUg0LvRjtCx0L7QtSDRgdC70L7QstC+LCDRh9GC0L7QsdGLINGD0LLQuNC00LXRgtGMINC+0L/RgNC10LTQtdC70LXQvdC40LUg0LIg0LjRgdGC0L7Rh9C90LjQutCw0YUsINC4INGB0L7RhdGA0LDQvdC40YLQtSDQtdCz0L4g0LIg0YHQstC+0LXQvCDRgdC/0LjRgdC60LUg0LrQsNGA0YLQvtGH0LXQujwvcD5cclxuICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgIDxoMz7QmNCz0YDQsNC5LCDRh9GC0L7QsdGLINGD0YfQuNGC0YzRgdGPPC9oMz5cclxuICAgICAgICAgICAgICAgPHA+0JjQs9GA0Ysg0LLQutC70Y7Rh9Cw0Y7RgiDQkNGD0LTQuNC+0LLRi9C30L7QsizQodC/0YDQuNC90YIg0Lgg0LzQvdC+0LPQvtC1INC00YDRg9Cz0L7QtS4uLjwvcD5cclxuICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCJzPlxyXG4gICAgICAgICAgICAgICA8aDM+0KPRh9C40YLQtdGB0Ywg0L3QsCDRhdC+0LTRgzwvaDM+XHJcbiAgICAgICAgICAgICAgIDxwPlJTTGFuZyDQtNC+0YHRgtGD0L/QvdCwINC00LvRjyDQstC10LEg0Lgg0LzQvtCx0LjQu9GM0L3Ri9GFINGD0YHRgtGA0L7QudGB0YLQsi4g0KPRh9C40YLQtdGB0Ywg0LjQtyDQu9GO0LHQvtCz0L4g0LzQtdGB0YLQsCE8L3A+XHJcbiAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcclxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnXHJcblxyXG5jbGFzcyBNb2R1bGVWaWV3IHtcclxuICBteU1vZHVsZUNvbnRhaW5lciE6SFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnRlbnRDb250YWluZXIhOkhUTUxFbGVtZW50O1xyXG5cclxuICByb3V0ZXNPYmohOlJvdXRlcztcclxuXHJcblxyXG4gIGluaXQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcm91dGVzOiBSb3V0ZXMpIHtcclxuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB0aGlzLnJvdXRlc09iaiA9IHJvdXRlcztcclxuICAgIHRoaXMuY29udGVudENvbnRhaW5lciA9IHRoaXMubXlNb2R1bGVDb250YWluZXIucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIC8vdGhpcy5maW5kRWxlbWVudHMoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbnRlbnQoaGFzaFBhZ2VOYW1lOnN0cmluZykge1xyXG4gICAgbGV0IHJvdXRlTmFtZSA9ICdkZWZhdWx0JztcclxuICAgIHJvdXRlTmFtZSA9IChoYXNoUGFnZU5hbWUubGVuZ3RoKSA/IGhhc2hQYWdlTmFtZSA6IHJvdXRlTmFtZTtcclxuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5yb3V0ZXNPYmpbcm91dGVOYW1lIGFzIGtleW9mIFJvdXRlc107XHJcbiAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gcm91dGUucmVuZGVyKCk7XHJcbiAgICAvL3RoaXMuZmluZEVsZW1lbnRzKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLypmaW5kRWxlbWVudHMoKSB7XHJcblxyXG4gIH0qL1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZHVsZVZpZXc7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==