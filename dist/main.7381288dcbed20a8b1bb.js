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
        <div class="header__logo">RSLang</div>
        <div class="header__auth"><button>Войти</button></div>
        <nav class="header__menu">
          <ul class="menu__list">
            <li class="menu__item"><a href=""</a>Учебник</li>
            <li class="menu__item"><a href=""</a>Статистика</li>
            <li class="menu__item"><a href=""</a>Аудиовызов</li>
            <li class="menu__item"><a href=""</a>Спринт</li>
            <li class="menu__item"><a href=""</a>О команде</li>
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
       <div class="main-page">
        Content of main page
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWM7UUFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQWdCLENBQUM7UUFDeEYsc0JBQXNCO0lBQ3hCLENBQUM7SUFFRCxhQUFhLENBQUMsWUFBbUI7UUFDL0IsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzFCLFNBQVMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDN0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUF5QixDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDakQsc0JBQXNCO0lBRXhCLENBQUM7Q0FPRjtBQUVELHFCQUFlLFVBQVUsQ0FBQzs7Ozs7OztVQ2pDMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3N0eWxlcy9zdHlsZS5zYXNzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvbW9kZWwvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3BhZ2VzL21haW4udHMiLCJ3ZWJwYWNrOi8vcnNsZW5nLy4vc3JjL3ZpZXcvdmlldy50cyIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yc2xlbmcvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IENvbnRlbnQgPSB7XHJcbiAgcmVuZGVyOiAoY3VzdG9tQ2xhc3MgPSAnJykgPT4ge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY29udGVudCAke2N1c3RvbUNsYXNzfVwiIGlkPVwiY29udGVudFwiPjwvZGl2PmA7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XHJcbiIsImNvbnN0IEZvb3RlciA9IHtcclxuICByZW5kZXI6IChjdXN0b21DbGFzcyA9ICcnKSA9PiB7XHJcbiAgICByZXR1cm4gYDxmb290ZXIgY2xhc3M9XCJmb290ZXIgJHtjdXN0b21DbGFzc31cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2l0aHViLWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2ZseWV0aGVyXCIgY2xhc3M9XCJnaXRodWItbGlua1wiPmZseWV0aGVyPGE+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0RhcmluYTk5MlwiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIj5EYXJpbmE5OTI8YT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQWxlbmFEb3pcIiBjbGFzcz1cImdpdGh1Yi1saW5rXCI+QWxlbmFEb3o8YT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj4mIzE2OTsgMjAyMjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgY2xhc3M9XCJycy1saW5rXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5gO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImNvbnN0IEhlYWRlciA9IHtcclxuICByZW5kZXI6IChjdXN0b21DbGFzcyA9ICcnKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyICR7Y3VzdG9tQ2xhc3N9XCIgaWQ9XCJoZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19sb2dvXCI+UlNMYW5nPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYXV0aFwiPjxidXR0b24+0JLQvtC50YLQuDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgIDxuYXYgY2xhc3M9XCJoZWFkZXJfX21lbnVcIj5cclxuICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnVfX2xpc3RcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCJcIjwvYT7Qo9GH0LXQsdC90LjQujwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj48YSBocmVmPVwiXCI8L2E+0KHRgtCw0YLQuNGB0YLQuNC60LA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIlwiPC9hPtCQ0YPQtNC40L7QstGL0LfQvtCyPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPjxhIGhyZWY9XCJcIjwvYT7QodC/0YDQuNC90YI8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+PGEgaHJlZj1cIlwiPC9hPtCeINC60L7QvNCw0L3QtNC1PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgYDtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgIE1vZHVsZU1vZGVsICBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcblxyXG5jbGFzcyBNb2R1bGVDb250cm9sbGVyIHtcclxuICBteU1vZHVsZUNvbnRhaW5lciE6SFRNTEVsZW1lbnQ7XHJcblxyXG4gIG15TW9kdWxlTW9kZWwhOiBNb2R1bGVNb2RlbDtcclxuXHJcblxyXG4gIGluaXQoY29udGFpbmVyOkhUTUxFbGVtZW50LCBtb2RlbDogTW9kdWxlTW9kZWwpOnZvaWQge1xyXG4gICAgdGhpcy5teU1vZHVsZUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIHRoaXMubXlNb2R1bGVNb2RlbCA9IG1vZGVsO1xyXG4gICAgLyp3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xyXG4gICAgfSk7Ki9cclxuXHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTdGF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGhhc2hQYWdlTmFtZSA9IGxvY2F0aW9uLmhhc2guc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcclxuICAgIHRoaXMubXlNb2R1bGVNb2RlbC51cGRhdGVTdGF0ZShoYXNoUGFnZU5hbWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZHVsZUNvbnRyb2xsZXI7XHJcbiIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Fzcyc7XHJcblxyXG5pbXBvcnQgTW9kdWxlQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvY29udHJvbGxlcic7XHJcbmltcG9ydCBNb2R1bGVNb2RlbCBmcm9tICcuL21vZGVsL21vZGVsJztcclxuaW1wb3J0IE1vZHVsZVZpZXcgZnJvbSAnLi92aWV3L3ZpZXcnO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50cywgUm91dGVzLCBJbml0aWFsT2JqIH0gZnJvbSAnLi90eXBlcy90eXBlcyc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcblxyXG5pbXBvcnQgTWFpblBhZ2UgZnJvbSAnLi9wYWdlcy9tYWluJztcclxuXHJcbmNvbnN0IGNvbXBvbmVudHM6Q29tcG9uZW50cyA9IHtcclxuICBoZWFkZXI6IEhlYWRlcixcclxuICBjb250ZW50OiBDb250ZW50LFxyXG4gIGZvb3RlcjogRm9vdGVyLFxyXG59O1xyXG5cclxuY29uc3Qgcm91dGVzOlJvdXRlcyA9IHtcclxuICBtYWluOiBNYWluUGFnZSxcclxuICBkZWZhdWx0OiBNYWluUGFnZSxcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxPYmo6SW5pdGlhbE9iaiA9IHtcclxuICBjb250YWluZXI6ICdzcGEnLFxyXG4gIHJvdXRlczogcm91dGVzLFxyXG4gIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXHJcbn07XHJcblxyXG4vKiAtLS0tLSBzcGEgaW5pdCBtb2R1bGUgLS0tICovXHJcbmNvbnN0IG15U1BBID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgdmlldzpNb2R1bGVWaWV3O1xyXG4gIGxldCBtb2RlbDpNb2R1bGVNb2RlbDtcclxuICBsZXQgY29udHJvbGxlcjpNb2R1bGVDb250cm9sbGVyO1xyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAob2JqOkluaXRpYWxPYmopIHtcclxuICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnRzKG9iai5jb250YWluZXIsIG9iai5jb21wb25lbnRzKTtcclxuICAgICAgY29uc3QgY29udGFpbmVyU1BBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLmNvbnRhaW5lcikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHZpZXcgPSBuZXcgTW9kdWxlVmlldygpO1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2R1bGVNb2RlbCgpO1xyXG4gICAgICBjb250cm9sbGVyID0gbmV3IE1vZHVsZUNvbnRyb2xsZXIoKTtcclxuXHJcbiAgICAgIHZpZXcuaW5pdChjb250YWluZXJTUEEsIHJvdXRlcyk7XHJcbiAgICAgIG1vZGVsLmluaXQodmlldyk7XHJcbiAgICAgIGNvbnRyb2xsZXIuaW5pdChjb250YWluZXJTUEEsIG1vZGVsKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyQ29tcG9uZW50czogZnVuY3Rpb24gKGNvbnRhaW5lcjpzdHJpbmcsIGNvbXBvbmVudHNPYmo6IENvbXBvbmVudHMpIHtcclxuICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudHNMaXN0ID0gT2JqZWN0LmtleXMoY29tcG9uZW50c09iaik7XHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb21wb25lbnRzTGlzdCkge1xyXG4gICAgICAgIHJvb3QuaW5uZXJIVE1MICs9IGNvbXBvbmVudHNPYmpbaXRlbSBhcyBrZXlvZiBDb21wb25lbnRzXS5yZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG59KCkpO1xyXG5cclxuLyogLS0tLS0tIGVuZCBhcHAgbW9kdWxlIC0tLS0tICovXHJcblxyXG4vKioqIC0tLSBpbml0IG1vZHVsZSAtLS0gKioqL1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBteVNQQS5pbml0KGluaXRpYWxPYmopO1xyXG59KTtcclxuIiwiaW1wb3J0IE1vZGVsVmlldyBmcm9tICcuLi92aWV3L3ZpZXcnO1xyXG5cclxuXHJcbmNsYXNzIE1vZHVsZU1vZGVsIHtcclxuICBteU1vZHVsZVZpZXchOiBNb2RlbFZpZXc7XHJcblxyXG4gIGluaXQodmlldzogTW9kZWxWaWV3KSB7XHJcbiAgICB0aGlzLm15TW9kdWxlVmlldyA9IHZpZXc7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTdGF0ZShwYWdlTmFtZTpzdHJpbmcpIHtcclxuICAgIHRoaXMubXlNb2R1bGVWaWV3LnJlbmRlckNvbnRlbnQocGFnZU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZHVsZU1vZGVsO1xyXG4iLCJjb25zdCBNYWluUGFnZSA9IHtcclxuICBpZDogJ21haW4nLFxyXG4gIHJlbmRlcjogKCkgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXBhZ2VcIj5cclxuICAgICAgICBDb250ZW50IG9mIG1haW4gcGFnZVxyXG4gICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcclxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnXHJcblxyXG5jbGFzcyBNb2R1bGVWaWV3IHtcclxuICBteU1vZHVsZUNvbnRhaW5lciE6SFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnRlbnRDb250YWluZXIhOkhUTUxFbGVtZW50O1xyXG5cclxuICByb3V0ZXNPYmohOlJvdXRlcztcclxuXHJcblxyXG4gIGluaXQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcm91dGVzOiBSb3V0ZXMpIHtcclxuICAgIHRoaXMubXlNb2R1bGVDb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB0aGlzLnJvdXRlc09iaiA9IHJvdXRlcztcclxuICAgIHRoaXMuY29udGVudENvbnRhaW5lciA9IHRoaXMubXlNb2R1bGVDb250YWluZXIucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIC8vdGhpcy5maW5kRWxlbWVudHMoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbnRlbnQoaGFzaFBhZ2VOYW1lOnN0cmluZykge1xyXG4gICAgbGV0IHJvdXRlTmFtZSA9ICdkZWZhdWx0JztcclxuICAgIHJvdXRlTmFtZSA9IChoYXNoUGFnZU5hbWUubGVuZ3RoKSA/IGhhc2hQYWdlTmFtZSA6IHJvdXRlTmFtZTtcclxuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5yb3V0ZXNPYmpbcm91dGVOYW1lIGFzIGtleW9mIFJvdXRlc107XHJcbiAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gcm91dGUucmVuZGVyKCk7XHJcbiAgICAvL3RoaXMuZmluZEVsZW1lbnRzKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLypmaW5kRWxlbWVudHMoKSB7XHJcblxyXG4gIH0qL1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZHVsZVZpZXc7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==