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

/***/ "./src/components/header.ts":
/*!**********************************!*\
  !*** ./src/components/header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Header = {
    render: (customClass = '') => `
      <header class="header ${customClass}" id="header">
        <h1 class="header__logo"><a href="">RSLang</a></h1>
        <div class="header__auth">
          <button class="authorization">Войти</button>
          <div class="modal__auth"></div>
        </div>
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
    `,
};
exports["default"] = Header;


/***/ }),

/***/ "./src/controller/controller.ts":
/*!**************************************!*\
  !*** ./src/controller/controller.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


/* eslint-disable no-restricted-globals */
Object.defineProperty(exports, "__esModule", ({ value: true }));
class ModuleController {
    init(container, model) {
        this.myModuleContainer = container;
        this.myModuleModel = model;
        /* window.addEventListener('hashchange', () => {
          this.updateState();
        }); */
        this.updateState();
    }
    updateState() {
        const hashPageName = window.location.hash.slice(1).toLowerCase();
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
}
exports["default"] = ModuleModel;


/***/ }),

/***/ "./src/pages/main.ts":
/*!***************************!*\
  !*** ./src/pages/main.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
const MainPage = {
    id: 'main',
    render: () => `
       <div class="main__page">
         <div class="main__page__description">
           <h2 class="title">The World is Yours with RSLang!</h2>
           <p>RSLang — это эффективный сервис для увлекательной практики английского языка. Присоединяйся!
         </div>
         <div class="main__page__advantages">
           <h2 class="title">Почему RSLang?</h2>
           <ul class="advantages__list">
             <li class="advantages__item">
               <img src="">
               <h3 class="advantages__item__title">Бесплатный доступ</h3>
               <p class="advantages__item__text">Наша миссия — сделать обучения языкам доступным для каждого</p>
             </li>
             <li class="advantages__item">
               <img src="">
               <h3 class="advantages__item__title">Словарь</h3>
               <p class="advantages__item__text">Щелкните любое слово, чтобы увидеть определение в источниках, и сохраните его в своем списке карточек</p>
             </li>
             <li class="advantages__item">
               <img src="">
               <h3 class="advantages__item__title">Играй, чтобы учиться</h3>
               <p class="advantages__item__text">Игры включают Аудиовызов,Спринт и многое другое...</p>
             </li>
             <li class="advantages__item">
               <img src="">
               <h3 class="advantages__item__title">Учитесь на ходу</h3>
               <p class="advantages__item__text">RSLang доступна для веб и мобильных устройств. Учитесь из любого места!</p>
             </li>
           </ul>
         </div>
       </div>
    `,
};
// export { MainPage };
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
        // this.findElements();
    }
    renderContent(hashPageName) {
        let routeName = 'default';
        routeName = (hashPageName.length) ? hashPageName : routeName;
        const route = this.routesObj[routeName];
        this.contentContainer.innerHTML = route.render();
        // this.findElements();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7Ozs7Ozs7Ozs7OztBQ3ZDeEIsTUFBTSxVQUFVO0lBT2QsSUFBSSxDQUFDLFNBQXNCLEVBQUUsTUFBYztRQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBZ0IsQ0FBQztRQUN4Rix1QkFBdUI7SUFDekIsQ0FBQztJQUVELGFBQWEsQ0FBQyxZQUFtQjtRQUMvQixJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDMUIsU0FBUyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM3RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQXlCLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqRCx1QkFBdUI7SUFDekIsQ0FBQztDQUtGO0FBRUQscUJBQWUsVUFBVSxDQUFDOzs7Ozs7O1VDN0IxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3M/YWFhZiIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9jb250ZW50LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbnRyb2xsZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL21vZGVsL21vZGVsLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9wYWdlcy9tYWluLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy92aWV3L3ZpZXcudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBDb250ZW50ID0ge1xyXG4gIHJlbmRlcjogKGN1c3RvbUNsYXNzID0gJycpOnN0cmluZyA9PiBgPGRpdiBjbGFzcz1cImNvbnRlbnQgJHtjdXN0b21DbGFzc31cIiBpZD1cImNvbnRlbnRcIj48L2Rpdj5gLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcclxuIiwiY29uc3QgRm9vdGVyID0ge1xyXG4gIHJlbmRlcjogKGN1c3RvbUNsYXNzID0gJycpOnN0cmluZyA9PiBgPGZvb3RlciBjbGFzcz1cImZvb3RlciAke2N1c3RvbUNsYXNzfVwiPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2l0aHViLWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2ZseWV0aGVyXCIgY2xhc3M9XCJnaXRodWItbGlua1wiPmZseWV0aGVyPGE+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0RhcmluYTk5MlwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5EYXJpbmE5OTI8YT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQWxlbmFEb3pcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+QWxlbmFEb3o8YT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj4mIzE2OTsgMjAyMjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgY2xhc3M9XCJycy1saW5rXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5gLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJjb25zdCBIZWFkZXIgPSB7XHJcblxyXG4gIHJlbmRlcjogKGN1c3RvbUNsYXNzID0gJycpOnN0cmluZyA9PiBgXHJcbiAgICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXIgJHtjdXN0b21DbGFzc31cIiBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cImhlYWRlcl9fbG9nb1wiPjxhIGhyZWY9XCJcIj5SU0xhbmc8L2E+PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19hdXRoXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYXV0aG9yaXphdGlvblwiPtCS0L7QudGC0Lg8L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fYXV0aFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxuYXYgY2xhc3M9XCJoZWFkZXJfX21lbnVcIj5cclxuICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnVfX2xpc3RcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbSBtZW51X19pdGVtX2FjdGl2ZVwiPjxhIGhyZWY9XCJcIj7Qk9C70LDQstC90LDRjzwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIlwiPtCj0YfQtdCx0L3QuNC6PC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiXCI+0KHRgtCw0YLQuNGB0YLQuNC60LA8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCJcIj7QkNGD0LTQuNC+0LLRi9C30L7QsjwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIlwiPtCh0L/RgNC40L3RgjwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIlwiPtCeINC60L7QvNCw0L3QtNC1PC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgIGAsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xyXG5cclxuaW1wb3J0IE1vZHVsZU1vZGVsIGZyb20gJy4uL21vZGVsL21vZGVsJztcclxuXHJcbmNsYXNzIE1vZHVsZUNvbnRyb2xsZXIge1xyXG4gIG15TW9kdWxlQ29udGFpbmVyITpIVE1MRWxlbWVudDtcclxuXHJcbiAgbXlNb2R1bGVNb2RlbCE6IE1vZHVsZU1vZGVsO1xyXG5cclxuICBpbml0KGNvbnRhaW5lcjpIVE1MRWxlbWVudCwgbW9kZWw6IE1vZHVsZU1vZGVsKTp2b2lkIHtcclxuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwgPSBtb2RlbDtcclxuICAgIC8qIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgICB9KTsgKi9cclxuXHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTdGF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGhhc2hQYWdlTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB0aGlzLm15TW9kdWxlTW9kZWwudXBkYXRlU3RhdGUoaGFzaFBhZ2VOYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZHVsZUNvbnRyb2xsZXI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1uYW1lZC1hcy1kZWZhdWx0LW1lbWJlciAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Fzcyc7XHJcblxyXG5pbXBvcnQgTW9kdWxlQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvY29udHJvbGxlcic7XHJcbmltcG9ydCBNb2R1bGVNb2RlbCBmcm9tICcuL21vZGVsL21vZGVsJztcclxuaW1wb3J0IE1vZHVsZVZpZXcgZnJvbSAnLi92aWV3L3ZpZXcnO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50cywgUm91dGVzLCBJbml0aWFsT2JqIH0gZnJvbSAnLi90eXBlcy90eXBlcyc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcblxyXG5pbXBvcnQgTWFpblBhZ2UgZnJvbSAnLi9wYWdlcy9tYWluJztcclxuXHJcbmNvbnN0IGNvbXBvbmVudHM6Q29tcG9uZW50cyA9IHtcclxuICBoZWFkZXI6IEhlYWRlcixcclxuICBjb250ZW50OiBDb250ZW50LFxyXG4gIGZvb3RlcjogRm9vdGVyLFxyXG59O1xyXG5cclxuY29uc3Qgcm91dGVzOlJvdXRlcyA9IHtcclxuICBtYWluOiBNYWluUGFnZSxcclxuICBkZWZhdWx0OiBNYWluUGFnZSxcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxPYmo6SW5pdGlhbE9iaiA9IHtcclxuICBjb250YWluZXI6ICdzcGEnLFxyXG4gIHJvdXRlcyxcclxuICBjb21wb25lbnRzLFxyXG59O1xyXG5cclxuLyogLS0tLS0gc3BhIGluaXQgbW9kdWxlIC0tLSAqL1xyXG5jb25zdCBteVNQQSA9ICgoKSA9PiB7XHJcbiAgbGV0IHZpZXc6TW9kdWxlVmlldztcclxuICBsZXQgbW9kZWw6TW9kdWxlTW9kZWw7XHJcbiAgbGV0IGNvbnRyb2xsZXI6TW9kdWxlQ29udHJvbGxlcjtcclxuICByZXR1cm4ge1xyXG4gICAgaW5pdChvYmo6SW5pdGlhbE9iaikge1xyXG4gICAgICB0aGlzLnJlbmRlckNvbXBvbmVudHMob2JqLmNvbnRhaW5lciwgb2JqLmNvbXBvbmVudHMpO1xyXG4gICAgICBjb25zdCBjb250YWluZXJTUEEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmouY29udGFpbmVyKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgdmlldyA9IG5ldyBNb2R1bGVWaWV3KCk7XHJcbiAgICAgIG1vZGVsID0gbmV3IE1vZHVsZU1vZGVsKCk7XHJcbiAgICAgIGNvbnRyb2xsZXIgPSBuZXcgTW9kdWxlQ29udHJvbGxlcigpO1xyXG5cclxuICAgICAgdmlldy5pbml0KGNvbnRhaW5lclNQQSwgcm91dGVzKTtcclxuICAgICAgbW9kZWwuaW5pdCh2aWV3KTtcclxuICAgICAgY29udHJvbGxlci5pbml0KGNvbnRhaW5lclNQQSwgbW9kZWwpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXJDb21wb25lbnRzKGNvbnRhaW5lcjpzdHJpbmcsIGNvbXBvbmVudHNPYmo6IENvbXBvbmVudHMpIHtcclxuICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudHNMaXN0ID0gT2JqZWN0LmtleXMoY29tcG9uZW50c09iaik7XHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29tcG9uZW50c0xpc3QpIHtcclxuICAgICAgICByb290LmlubmVySFRNTCArPSBjb21wb25lbnRzT2JqW2l0ZW0gYXMga2V5b2YgQ29tcG9uZW50c10ucmVuZGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxufSkoKTtcclxuXHJcbi8qIC0tLS0tLSBlbmQgYXBwIG1vZHVsZSAtLS0tLSAqL1xyXG5cclxuLyoqICogLS0tIGluaXQgbW9kdWxlIC0tLSAqKiAqL1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBteVNQQS5pbml0KGluaXRpYWxPYmopO1xyXG59KTtcclxuIiwiaW1wb3J0IE1vZGVsVmlldyBmcm9tICcuLi92aWV3L3ZpZXcnO1xyXG5cclxuY2xhc3MgTW9kdWxlTW9kZWwge1xyXG4gIG15TW9kdWxlVmlldyE6IE1vZGVsVmlldztcclxuXHJcbiAgaW5pdCh2aWV3OiBNb2RlbFZpZXcpOnZvaWQge1xyXG4gICAgdGhpcy5teU1vZHVsZVZpZXcgPSB2aWV3O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3RhdGUocGFnZU5hbWU6c3RyaW5nKTp2b2lkIHtcclxuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlckNvbnRlbnQocGFnZU5hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlTW9kZWw7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xyXG5jb25zdCBNYWluUGFnZSA9IHtcclxuICBpZDogJ21haW4nLFxyXG5cclxuICByZW5kZXI6ICgpOnN0cmluZyA9PiBgXHJcbiAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fcGFnZVwiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fcGFnZV9fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPlRoZSBXb3JsZCBpcyBZb3VycyB3aXRoIFJTTGFuZyE8L2gyPlxyXG4gICAgICAgICAgIDxwPlJTTGFuZyDigJQg0Y3RgtC+INGN0YTRhNC10LrRgtC40LLQvdGL0Lkg0YHQtdGA0LLQuNGBINC00LvRjyDRg9Cy0LvQtdC60LDRgtC10LvRjNC90L7QuSDQv9GA0LDQutGC0LjQutC4INCw0L3Qs9C70LjQudGB0LrQvtCz0L4g0Y/Qt9GL0LrQsC4g0J/RgNC40YHQvtC10LTQuNC90Y/QudGB0Y8hXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fcGFnZV9fYWR2YW50YWdlc1wiPlxyXG4gICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+0J/QvtGH0LXQvNGDIFJTTGFuZz88L2gyPlxyXG4gICAgICAgICAgIDx1bCBjbGFzcz1cImFkdmFudGFnZXNfX2xpc3RcIj5cclxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIj5cclxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7QkdC10YHQv9C70LDRgtC90YvQuSDQtNC+0YHRgtGD0L88L2gzPlxyXG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RleHRcIj7QndCw0YjQsCDQvNC40YHRgdC40Y8g4oCUINGB0LTQtdC70LDRgtGMINC+0LHRg9GH0LXQvdC40Y8g0Y/Qt9GL0LrQsNC8INC00L7RgdGC0YPQv9C90YvQvCDQtNC70Y8g0LrQsNC20LTQvtCz0L48L3A+XHJcbiAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbVwiPlxyXG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiPlxyXG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCh0LvQvtCy0LDRgNGMPC9oMz5cclxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+0KnQtdC70LrQvdC40YLQtSDQu9GO0LHQvtC1INGB0LvQvtCy0L4sINGH0YLQvtCx0Ysg0YPQstC40LTQtdGC0Ywg0L7Qv9GA0LXQtNC10LvQtdC90LjQtSDQsiDQuNGB0YLQvtGH0L3QuNC60LDRhSwg0Lgg0YHQvtGF0YDQsNC90LjRgtC1INC10LPQviDQsiDRgdCy0L7QtdC8INGB0L/QuNGB0LrQtSDQutCw0YDRgtC+0YfQtdC6PC9wPlxyXG4gICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIj5cclxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7QmNCz0YDQsNC5LCDRh9GC0L7QsdGLINGD0YfQuNGC0YzRgdGPPC9oMz5cclxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+0JjQs9GA0Ysg0LLQutC70Y7Rh9Cw0Y7RgiDQkNGD0LTQuNC+0LLRi9C30L7QsizQodC/0YDQuNC90YIg0Lgg0LzQvdC+0LPQvtC1INC00YDRg9Cz0L7QtS4uLjwvcD5cclxuICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCI+XHJcbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0KPRh9C40YLQtdGB0Ywg0L3QsCDRhdC+0LTRgzwvaDM+XHJcbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPlJTTGFuZyDQtNC+0YHRgtGD0L/QvdCwINC00LvRjyDQstC10LEg0Lgg0LzQvtCx0LjQu9GM0L3Ri9GFINGD0YHRgtGA0L7QudGB0YLQsi4g0KPRh9C40YLQtdGB0Ywg0LjQtyDQu9GO0LHQvtCz0L4g0LzQtdGB0YLQsCE8L3A+XHJcbiAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG59O1xyXG5cclxuLy8gZXhwb3J0IHsgTWFpblBhZ2UgfTtcclxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2U7XHJcbiIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcclxuXHJcbmNsYXNzIE1vZHVsZVZpZXcge1xyXG4gIG15TW9kdWxlQ29udGFpbmVyITpIVE1MRWxlbWVudDtcclxuXHJcbiAgY29udGVudENvbnRhaW5lciE6SFRNTEVsZW1lbnQ7XHJcblxyXG4gIHJvdXRlc09iaiE6Um91dGVzO1xyXG5cclxuICBpbml0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHJvdXRlczogUm91dGVzKTp2b2lkIHtcclxuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB0aGlzLnJvdXRlc09iaiA9IHJvdXRlcztcclxuICAgIHRoaXMuY29udGVudENvbnRhaW5lciA9IHRoaXMubXlNb2R1bGVDb250YWluZXIucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIC8vIHRoaXMuZmluZEVsZW1lbnRzKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJDb250ZW50KGhhc2hQYWdlTmFtZTpzdHJpbmcpOnZvaWQge1xyXG4gICAgbGV0IHJvdXRlTmFtZSA9ICdkZWZhdWx0JztcclxuICAgIHJvdXRlTmFtZSA9IChoYXNoUGFnZU5hbWUubGVuZ3RoKSA/IGhhc2hQYWdlTmFtZSA6IHJvdXRlTmFtZTtcclxuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5yb3V0ZXNPYmpbcm91dGVOYW1lIGFzIGtleW9mIFJvdXRlc107XHJcbiAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gcm91dGUucmVuZGVyKCk7XHJcbiAgICAvLyB0aGlzLmZpbmRFbGVtZW50cygpO1xyXG4gIH1cclxuXHJcbiAgLyogZmluZEVsZW1lbnRzKCkge1xyXG5cclxuICB9ICovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZHVsZVZpZXc7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==