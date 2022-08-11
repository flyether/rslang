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
               <img src="../assets/play.svg">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7Ozs7Ozs7Ozs7OztBQ3ZDeEIsTUFBTSxVQUFVO0lBT2QsSUFBSSxDQUFDLFNBQXNCLEVBQUUsTUFBYztRQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBZ0IsQ0FBQztRQUN4Rix1QkFBdUI7SUFDekIsQ0FBQztJQUVELGFBQWEsQ0FBQyxZQUFtQjtRQUMvQixJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDMUIsU0FBUyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM3RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQXlCLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqRCx1QkFBdUI7SUFDekIsQ0FBQztDQUtGO0FBRUQscUJBQWUsVUFBVSxDQUFDOzs7Ozs7O1VDN0IxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3MiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29tcG9uZW50cy9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb250cm9sbGVyL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9tb2RlbC9tb2RlbC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvcGFnZXMvbWFpbi50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvdmlldy92aWV3LnRzIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgQ29udGVudCA9IHtcclxuICByZW5kZXI6IChjdXN0b21DbGFzcyA9ICcnKTpzdHJpbmcgPT4gYDxkaXYgY2xhc3M9XCJjb250ZW50ICR7Y3VzdG9tQ2xhc3N9XCIgaWQ9XCJjb250ZW50XCI+PC9kaXY+YCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XHJcbiIsImNvbnN0IEZvb3RlciA9IHtcclxuICByZW5kZXI6IChjdXN0b21DbGFzcyA9ICcnKTpzdHJpbmcgPT4gYDxmb290ZXIgY2xhc3M9XCJmb290ZXIgJHtjdXN0b21DbGFzc31cIj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdpdGh1Yi1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9mbHlldGhlclwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5mbHlldGhlcjxhPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EYXJpbmE5OTJcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+RGFyaW5hOTkyPGE+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FsZW5hRG96XCIgY2xhc3M9XCJnaXRodWItbGlua1wiPkFsZW5hRG96PGE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4+JiMxNjk7IDIwMjI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcnMuc2Nob29sL2pzL1wiIGNsYXNzPVwicnMtbGlua1wiPjwvYT5cclxuICAgICAgICAgICAgPC9mb290ZXI+YCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiY29uc3QgSGVhZGVyID0ge1xyXG5cclxuICByZW5kZXI6IChjdXN0b21DbGFzcyA9ICcnKTpzdHJpbmcgPT4gYFxyXG4gICAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyICR7Y3VzdG9tQ2xhc3N9XCIgaWQ9XCJoZWFkZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJoZWFkZXJfX2xvZ29cIj48YSBocmVmPVwiXCI+UlNMYW5nPC9hPjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYXV0aFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImF1dGhvcml6YXRpb25cIj7QktC+0LnRgtC4PC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2F1dGhcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bmF2IGNsYXNzPVwiaGVhZGVyX19tZW51XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51X19saXN0XCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW0gbWVudV9faXRlbV9hY3RpdmVcIj48YSBocmVmPVwiXCI+0JPQu9Cw0LLQvdCw0Y88L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCJcIj7Qo9GH0LXQsdC90LjQujwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIlwiPtCh0YLQsNGC0LjRgdGC0LjQutCwPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiXCI+0JDRg9C00LjQvtCy0YvQt9C+0LI8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCJcIj7QodC/0YDQuNC90YI8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCJcIj7QniDQutC+0LzQsNC90LTQtTwvYT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICBgLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cclxuXHJcbmltcG9ydCBNb2R1bGVNb2RlbCBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcblxyXG5jbGFzcyBNb2R1bGVDb250cm9sbGVyIHtcclxuICBteU1vZHVsZUNvbnRhaW5lciE6SFRNTEVsZW1lbnQ7XHJcblxyXG4gIG15TW9kdWxlTW9kZWwhOiBNb2R1bGVNb2RlbDtcclxuXHJcbiAgaW5pdChjb250YWluZXI6SFRNTEVsZW1lbnQsIG1vZGVsOiBNb2R1bGVNb2RlbCk6dm9pZCB7XHJcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgdGhpcy5teU1vZHVsZU1vZGVsID0gbW9kZWw7XHJcbiAgICAvKiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xyXG4gICAgfSk7ICovXHJcblxyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3RhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBoYXNoUGFnZU5hbWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5teU1vZHVsZU1vZGVsLnVwZGF0ZVN0YXRlKGhhc2hQYWdlTmFtZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVDb250cm9sbGVyO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdC1tZW1iZXIgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cclxuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNhc3MnO1xyXG5cclxuaW1wb3J0IE1vZHVsZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgTW9kdWxlTW9kZWwgZnJvbSAnLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCBNb2R1bGVWaWV3IGZyb20gJy4vdmlldy92aWV3JztcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudHMsIFJvdXRlcywgSW5pdGlhbE9iaiB9IGZyb20gJy4vdHlwZXMvdHlwZXMnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInO1xyXG5cclxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vcGFnZXMvbWFpbic7XHJcblxyXG5jb25zdCBjb21wb25lbnRzOkNvbXBvbmVudHMgPSB7XHJcbiAgaGVhZGVyOiBIZWFkZXIsXHJcbiAgY29udGVudDogQ29udGVudCxcclxuICBmb290ZXI6IEZvb3RlcixcclxufTtcclxuXHJcbmNvbnN0IHJvdXRlczpSb3V0ZXMgPSB7XHJcbiAgbWFpbjogTWFpblBhZ2UsXHJcbiAgZGVmYXVsdDogTWFpblBhZ2UsXHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsT2JqOkluaXRpYWxPYmogPSB7XHJcbiAgY29udGFpbmVyOiAnc3BhJyxcclxuICByb3V0ZXMsXHJcbiAgY29tcG9uZW50cyxcclxufTtcclxuXHJcbi8qIC0tLS0tIHNwYSBpbml0IG1vZHVsZSAtLS0gKi9cclxuY29uc3QgbXlTUEEgPSAoKCkgPT4ge1xyXG4gIGxldCB2aWV3Ok1vZHVsZVZpZXc7XHJcbiAgbGV0IG1vZGVsOk1vZHVsZU1vZGVsO1xyXG4gIGxldCBjb250cm9sbGVyOk1vZHVsZUNvbnRyb2xsZXI7XHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQob2JqOkluaXRpYWxPYmopIHtcclxuICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnRzKG9iai5jb250YWluZXIsIG9iai5jb21wb25lbnRzKTtcclxuICAgICAgY29uc3QgY29udGFpbmVyU1BBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLmNvbnRhaW5lcikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHZpZXcgPSBuZXcgTW9kdWxlVmlldygpO1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2R1bGVNb2RlbCgpO1xyXG4gICAgICBjb250cm9sbGVyID0gbmV3IE1vZHVsZUNvbnRyb2xsZXIoKTtcclxuXHJcbiAgICAgIHZpZXcuaW5pdChjb250YWluZXJTUEEsIHJvdXRlcyk7XHJcbiAgICAgIG1vZGVsLmluaXQodmlldyk7XHJcbiAgICAgIGNvbnRyb2xsZXIuaW5pdChjb250YWluZXJTUEEsIG1vZGVsKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyQ29tcG9uZW50cyhjb250YWluZXI6c3RyaW5nLCBjb21wb25lbnRzT2JqOiBDb21wb25lbnRzKSB7XHJcbiAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBjb25zdCBjb21wb25lbnRzTGlzdCA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNPYmopO1xyXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGNvbXBvbmVudHNMaXN0KSB7XHJcbiAgICAgICAgcm9vdC5pbm5lckhUTUwgKz0gY29tcG9uZW50c09ialtpdGVtIGFzIGtleW9mIENvbXBvbmVudHNdLnJlbmRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG4vKiAtLS0tLS0gZW5kIGFwcCBtb2R1bGUgLS0tLS0gKi9cclxuXHJcbi8qKiAqIC0tLSBpbml0IG1vZHVsZSAtLS0gKiogKi9cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgbXlTUEEuaW5pdChpbml0aWFsT2JqKTtcclxufSk7XHJcbiIsImltcG9ydCBNb2RlbFZpZXcgZnJvbSAnLi4vdmlldy92aWV3JztcclxuXHJcbmNsYXNzIE1vZHVsZU1vZGVsIHtcclxuICBteU1vZHVsZVZpZXchOiBNb2RlbFZpZXc7XHJcblxyXG4gIGluaXQodmlldzogTW9kZWxWaWV3KTp2b2lkIHtcclxuICAgIHRoaXMubXlNb2R1bGVWaWV3ID0gdmlldztcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN0YXRlKHBhZ2VOYW1lOnN0cmluZyk6dm9pZCB7XHJcbiAgICB0aGlzLm15TW9kdWxlVmlldy5yZW5kZXJDb250ZW50KHBhZ2VOYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZHVsZU1vZGVsO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cclxuY29uc3QgTWFpblBhZ2UgPSB7XHJcbiAgaWQ6ICdtYWluJyxcclxuXHJcbiAgcmVuZGVyOiAoKTpzdHJpbmcgPT4gYFxyXG4gICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VcIj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj5UaGUgV29ybGQgaXMgWW91cnMgd2l0aCBSU0xhbmchPC9oMj5cclxuICAgICAgICAgICA8cD5SU0xhbmcg4oCUINGN0YLQviDRjdGE0YTQtdC60YLQuNCy0L3Ri9C5INGB0LXRgNCy0LjRgSDQtNC70Y8g0YPQstC70LXQutCw0YLQtdC70YzQvdC+0Lkg0L/RgNCw0LrRgtC40LrQuCDQsNC90LPQu9C40LnRgdC60L7Qs9C+INGP0LfRi9C60LAuINCf0YDQuNGB0L7QtdC00LjQvdGP0LnRgdGPIVxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3BhZ2VfX2FkdmFudGFnZXNcIj5cclxuICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPtCf0L7Rh9C10LzRgyBSU0xhbmc/PC9oMj5cclxuICAgICAgICAgICA8dWwgY2xhc3M9XCJhZHZhbnRhZ2VzX19saXN0XCI+XHJcbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL3BsYXkuc3ZnXCI+XHJcbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0JHQtdGB0L/Qu9Cw0YLQvdGL0Lkg0LTQvtGB0YLRg9C/PC9oMz5cclxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190ZXh0XCI+0J3QsNGI0LAg0LzQuNGB0YHQuNGPIOKAlCDRgdC00LXQu9Cw0YLRjCDQvtCx0YPRh9C10L3QuNGPINGP0LfRi9C60LDQvCDQtNC+0YHRgtGD0L/QvdGL0Lwg0LTQu9GPINC60LDQttC00L7Qs9C+PC9wPlxyXG4gICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIj5cclxuICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGl0bGVcIj7QodC70L7QstCw0YDRjDwvaDM+XHJcbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPtCp0LXQu9C60L3QuNGC0LUg0LvRjtCx0L7QtSDRgdC70L7QstC+LCDRh9GC0L7QsdGLINGD0LLQuNC00LXRgtGMINC+0L/RgNC10LTQtdC70LXQvdC40LUg0LIg0LjRgdGC0L7Rh9C90LjQutCw0YUsINC4INGB0L7RhdGA0LDQvdC40YLQtSDQtdCz0L4g0LIg0YHQstC+0LXQvCDRgdC/0LjRgdC60LUg0LrQsNGA0YLQvtGH0LXQujwvcD5cclxuICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCI+XHJcbiAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RpdGxlXCI+0JjQs9GA0LDQuSwg0YfRgtC+0LHRiyDRg9GH0LjRgtGM0YHRjzwvaDM+XHJcbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbV9fdGV4dFwiPtCY0LPRgNGLINCy0LrQu9GO0YfQsNGO0YIg0JDRg9C00LjQvtCy0YvQt9C+0LIs0KHQv9GA0LjQvdGCINC4INC80L3QvtCz0L7QtSDQtNGA0YPQs9C+0LUuLi48L3A+XHJcbiAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWR2YW50YWdlc19faXRlbVwiPlxyXG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiPlxyXG4gICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZHZhbnRhZ2VzX19pdGVtX190aXRsZVwiPtCj0YfQuNGC0LXRgdGMINC90LAg0YXQvtC00YM8L2gzPlxyXG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkdmFudGFnZXNfX2l0ZW1fX3RleHRcIj5SU0xhbmcg0LTQvtGB0YLRg9C/0L3QsCDQtNC70Y8g0LLQtdCxINC4INC80L7QsdC40LvRjNC90YvRhSDRg9GB0YLRgNC+0LnRgdGC0LIuINCj0YfQuNGC0LXRgdGMINC40Lcg0LvRjtCx0L7Qs9C+INC80LXRgdGC0LAhPC9wPlxyXG4gICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxufTtcclxuXHJcbi8vIGV4cG9ydCB7IE1haW5QYWdlIH07XHJcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XHJcblxyXG5jbGFzcyBNb2R1bGVWaWV3IHtcclxuICBteU1vZHVsZUNvbnRhaW5lciE6SFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnRlbnRDb250YWluZXIhOkhUTUxFbGVtZW50O1xyXG5cclxuICByb3V0ZXNPYmohOlJvdXRlcztcclxuXHJcbiAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50LCByb3V0ZXM6IFJvdXRlcyk6dm9pZCB7XHJcbiAgICB0aGlzLm15TW9kdWxlQ29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgdGhpcy5yb3V0ZXNPYmogPSByb3V0ZXM7XHJcbiAgICB0aGlzLmNvbnRlbnRDb250YWluZXIgPSB0aGlzLm15TW9kdWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAvLyB0aGlzLmZpbmRFbGVtZW50cygpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29udGVudChoYXNoUGFnZU5hbWU6c3RyaW5nKTp2b2lkIHtcclxuICAgIGxldCByb3V0ZU5hbWUgPSAnZGVmYXVsdCc7XHJcbiAgICByb3V0ZU5hbWUgPSAoaGFzaFBhZ2VOYW1lLmxlbmd0aCkgPyBoYXNoUGFnZU5hbWUgOiByb3V0ZU5hbWU7XHJcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMucm91dGVzT2JqW3JvdXRlTmFtZSBhcyBrZXlvZiBSb3V0ZXNdO1xyXG4gICAgdGhpcy5jb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IHJvdXRlLnJlbmRlcigpO1xyXG4gICAgLy8gdGhpcy5maW5kRWxlbWVudHMoKTtcclxuICB9XHJcblxyXG4gIC8qIGZpbmRFbGVtZW50cygpIHtcclxuXHJcbiAgfSAqL1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVWaWV3O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=