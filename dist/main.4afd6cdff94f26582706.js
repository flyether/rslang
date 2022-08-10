/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./api/autoriztion.ts":
/*!****************************!*\
  !*** ./api/autoriztion.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


/* eslint-disable linebreak-style */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.render = void 0;
const htmlAutorization = /* html */ `<div class="wrapper">
<form class="form-signin">       
  <h2 class="form-signin-heading">Please login</h2>
  <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
  <input type="password" class="form-control" name="password" placeholder="Password" required=""/>      
  <label class="checkbox">
    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
  </label>
  <button class="btn" id="autoriztionBtn" type="submit">Login</button>   
</form>
</div> `;
class Renderer {
    constructor() {
        this.divAutorization = document.querySelector('.autoriztion');
    }
    renderView() {
        this.divAutorization.innerHTML = htmlAutorization;
    }
}
exports.render = new Renderer();


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable linebreak-style */
const autoriztion_1 = __webpack_require__(/*! ../api/autoriztion */ "./api/autoriztion.ts");
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
autoriztion_1.render.renderView();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40YWZkNmNkZmY5NGYyNjU4MjcwNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQSxvQ0FBb0M7OztBQUVwQyxNQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQzs7Ozs7Ozs7OztRQVU1QixDQUFDO0FBQ1QsTUFBTSxRQUFRO0lBR1o7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFnQixDQUFDO0lBQy9FLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7SUFDcEQsQ0FBQztDQU1GO0FBQ1ksY0FBTSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7Ozs7Ozs7VUM3QnJDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BLG9DQUFvQztBQUNwQyw0RkFBNEM7QUFDNUMsNERBQXNCO0FBRXRCLG9CQUFNLENBQUMsVUFBVSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2xlbmcvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yc2xlbmcvLi9hcGkvYXV0b3JpenRpb24udHMiLCJ3ZWJwYWNrOi8vcnNsZW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzbGVuZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JzbGVuZy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmNvbnN0IGh0bWxBdXRvcml6YXRpb24gPSAvKiBodG1sICovIGA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG48Zm9ybSBjbGFzcz1cImZvcm0tc2lnbmluXCI+ICAgICAgIFxyXG4gIDxoMiBjbGFzcz1cImZvcm0tc2lnbmluLWhlYWRpbmdcIj5QbGVhc2UgbG9naW48L2gyPlxyXG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgcmVxdWlyZWQ9XCJcIiBhdXRvZm9jdXM9XCJcIiAvPlxyXG4gIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZD1cIlwiLz4gICAgICBcclxuICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveFwiPlxyXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwicmVtZW1iZXItbWVcIiBpZD1cInJlbWVtYmVyTWVcIiBuYW1lPVwicmVtZW1iZXJNZVwiPiBSZW1lbWJlciBtZVxyXG4gIDwvbGFiZWw+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGlkPVwiYXV0b3JpenRpb25CdG5cIiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj4gICBcclxuPC9mb3JtPlxyXG48L2Rpdj4gYDtcclxuY2xhc3MgUmVuZGVyZXIge1xyXG4gIGRpdkF1dG9yaXphdGlvbjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5kaXZBdXRvcml6YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0b3JpenRpb24nKSBhcyBIVE1MRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHJlbmRlclZpZXcoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpdkF1dG9yaXphdGlvbi5pbm5lckhUTUwgPSBodG1sQXV0b3JpemF0aW9uO1xyXG4gIH1cclxuXHJcbiAgLy8gYXN5bmMgYXV0b3JpenRpb24oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgLy8gICBjb25zdCBhdXRvcml6dGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRvcml6dGlvbkJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIC8vICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXNpZ25pbicpIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuICAvLyB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlbmRlciA9IG5ldyBSZW5kZXJlcigpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4uL2FwaS9hdXRvcml6dGlvbic7XHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuXHJcbnJlbmRlci5yZW5kZXJWaWV3KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==