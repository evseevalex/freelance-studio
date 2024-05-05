/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n\r\n\r\nclass App {\r\n\tconstructor() {\r\n\t\tnew _router__WEBPACK_IMPORTED_MODULE_0__.Router()\r\n\t}\r\n}\r\n\r\nnew App()\r\n\n\n//# sourceURL=webpack://frontend/./src/app.js?");

/***/ }),

/***/ "./src/components/dashboard.js":
/*!*************************************!*\
  !*** ./src/components/dashboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Dashboard: () => (/* binding */ Dashboard)\n/* harmony export */ });\nclass Dashboard {}\r\n\n\n//# sourceURL=webpack://frontend/./src/components/dashboard.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _components_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dashboard */ \"./src/components/dashboard.js\");\n\r\n\r\nclass Router {\r\n\tconstructor() {\r\n\t\tthis.titlePageElement = document.getElementById('page-title')\r\n\t\tthis.contentPageElement = document.getElementById('content')\r\n\r\n\t\tthis.initEvents()\r\n\t\tthis.routes = [\r\n\t\t\t{\r\n\t\t\t\troute: '/',\r\n\t\t\t\ttitle: 'Личный кабинет',\r\n\t\t\t\tfilePathTemplate: '/templates/dashboard.html',\r\n\t\t\t\tload: () => {\r\n\t\t\t\t\tnew _components_dashboard__WEBPACK_IMPORTED_MODULE_0__.Dashboard()\r\n\t\t\t\t},\r\n\t\t\t},\r\n\t\t\t{\r\n\t\t\t\troute: '/login',\r\n\t\t\t\ttitle: 'Авторизация',\r\n\t\t\t\tfilePathTemplate: '/templates/login.html',\r\n\t\t\t\tload: () => {},\r\n\t\t\t},\r\n\t\t\t{\r\n\t\t\t\troute: '/logout',\r\n\t\t\t\tload: () => {},\r\n\t\t\t},\r\n\t\t\t{\r\n\t\t\t\troute: '/signup',\r\n\t\t\t\ttitle: 'Регистрация',\r\n\t\t\t\tfilePathTemplate: '/templates/sign-up.html',\r\n\t\t\t\tload: () => {},\r\n\t\t\t},\r\n\t\t\t{\r\n\t\t\t\troute: '/refresh',\r\n\t\t\t\tload: () => {},\r\n\t\t\t},\r\n\t\t\t{\r\n\t\t\t\troute: '/404',\r\n\t\t\t\ttitle: 'Страница не найдена',\r\n\t\t\t\tfilePathTemplate: '/templates/404.html',\r\n\t\t\t\tload: () => {},\r\n\t\t\t},\r\n\t\t]\r\n\t}\r\n\r\n\tinitEvents() {\r\n\t\twindow.addEventListener(\r\n\t\t\t'DOMContentLoaded',\r\n\t\t\tthis.activateRoute.bind(this)\r\n\t\t)\r\n\t\twindow.addEventListener('popstate', this.activateRoute.bind(this))\r\n\t}\r\n\r\n\tasync activateRoute() {\r\n\t\tconst urlRoute = window.location.pathname\r\n\t\tconst newRoute = this.routes.find(item => item.route === urlRoute)\r\n\r\n\t\tif (newRoute) {\r\n\t\t\tif (newRoute.title) {\r\n\t\t\t\tthis.titlePageElement.innerText = newRoute.title + ' | Freelance Studio'\r\n\t\t\t}\r\n\r\n\t\t\tif (newRoute.filePathTemplate) {\r\n\t\t\t\tthis.contentPageElement.innerHTML = await fetch(\r\n\t\t\t\t\tnewRoute.filePathTemplate\r\n\t\t\t\t).then(result => result.text())\r\n\t\t\t}\r\n\r\n\t\t\tif (newRoute.load && typeof newRoute.load === 'function') {\r\n\t\t\t\tnewRoute.load()\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tthis.redirect('/404')\r\n\t\t}\r\n\t}\r\n\r\n\tredirect(route) {\r\n\t\twindow.location = route\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/router.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;