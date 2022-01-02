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

/***/ "./js/getDataDiff.js":
/*!***************************!*\
  !*** ./js/getDataDiff.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var https_moment_github_io_luxon_es6_luxon_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://moment.github.io/luxon/es6/luxon.min.js */ \"https://moment.github.io/luxon/es6/luxon.min.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_moment_github_io_luxon_es6_luxon_min_js__WEBPACK_IMPORTED_MODULE_0__]);\nhttps_moment_github_io_luxon_es6_luxon_min_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\nfunction getDataDiff(dateFrom, dateTo) {\n\n    const dataFormObj = https_moment_github_io_luxon_es6_luxon_min_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(dateFrom);\n    const dataToObj = https_moment_github_io_luxon_es6_luxon_min_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(dateTo);\n\n    return dataToObj.diff(dataFormObj, ['years', 'months', 'days']).toObject();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDataDiff);\n});\n\n//# sourceURL=webpack://hw/./js/getDataDiff.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _printRes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printRes.js */ \"./js/printRes.js\");\n/* harmony import */ var _getDataDiff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDataDiff.js */ \"./js/getDataDiff.js\");\n/* harmony import */ var _swipper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swipper.js */ \"./js/swipper.js\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer.js */ \"./js/timer.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getDataDiff_js__WEBPACK_IMPORTED_MODULE_1__]);\n_getDataDiff_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n//импорт функцкии переключения\n\n\nconst form = document.getElementById('datecalc'),\n    buttonRun = document.getElementById(\"button\"), // \n    swip = document.getElementById('swip'); // \n\n//переключатель\nswip.onclick = _swipper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n\n\n\nform.onsubmit = (e) => {\n    e.preventDefault();\n\n    const dataForm = new FormData(e.target);\n\n    const firstDate = dataForm.get('firstDate');\n    const secondDate = dataForm.get('secondDate');\n\n    if (!firstDate || !secondDate) {\n        (0,_printRes_js__WEBPACK_IMPORTED_MODULE_0__.printErr)('Error!!! Enter data');\n    } else {\n        const dataRes = (0,_getDataDiff_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(firstDate, secondDate);\n        (0,_printRes_js__WEBPACK_IMPORTED_MODULE_0__.printRes)(dataRes);\n    }\n    console.log(firstDate, secondDate);\n}\n\n\n\n\n///////////////////////////////////////////\n\n\nbuttonRun.addEventListener('click', _timer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n});\n\n//# sourceURL=webpack://hw/./js/index.js?");

/***/ }),

/***/ "./js/printRes.js":
/*!************************!*\
  !*** ./js/printRes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printErr\": () => (/* binding */ printErr),\n/* harmony export */   \"printRes\": () => (/* binding */ printRes)\n/* harmony export */ });\nconst result = document.getElementById('dateCalc__result');\n\nconst printErr = (errorText) => {\n    result.innerHTML = errorText;\n}\n\nconst printRes = ({\n    years,\n    months,\n    days\n}) => {\n    result.innerHTML = `Years: ${years} - Months: ${months} - Days: ${days}`\n}\n\n//# sourceURL=webpack://hw/./js/printRes.js?");

/***/ }),

/***/ "./js/swipper.js":
/*!***********************!*\
  !*** ./js/swipper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ swipper)\n/* harmony export */ });\nfunction swipper() {\n\n    let data = document.getElementById('datecalc'),\n        tmr = document.getElementById('timerDiv');\n\n\n    if (data.style.display == \"block\" && tmr.style.display === \"none\") {\n        data.style.display = \"none\";\n        tmr.style.display = \"block\";\n    } else {\n        data.style.display = \"block\";\n        tmr.style.display = \"none\";\n    }\n}\n\n//# sourceURL=webpack://hw/./js/swipper.js?");

/***/ }),

/***/ "./js/timer.js":
/*!*********************!*\
  !*** ./js/timer.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tikTac)\n/* harmony export */ });\nconst timerInput = document.getElementById(\"time\"),\n    timerShow = document.getElementById(\"timer\");\nvar timeMinut;\n\nfunction tikTac() {\n    timeMinut = parseInt(timerInput.value) * 60;\n\n    const timer = setInterval(function () {\n        let seconds = timeMinut % 60;\n        let minutes = timeMinut / 60 % 60;\n        let hour = timeMinut / 60 / 60 % 60;\n\n        if (timeMinut <= 0) {\n\n            clearInterval(timer);\n\n            timerShow.innerHTML = \"Время закончилось\";\n        } else if (!timeMinut) {\n            let strTimer = `Enter number`;\n\n            timerShow.innerHTML = strTimer;\n        } else {\n\n            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;\n\n            timerShow.innerHTML = strTimer;\n        }\n        --timeMinut;\n    }, 1000);\n};\n\n//# sourceURL=webpack://hw/./js/timer.js?");

/***/ }),

/***/ "https://moment.github.io/luxon/es6/luxon.min.js":
false

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;