/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _download = __webpack_require__(3);

var _download2 = _interopRequireDefault(_download);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = _small2.default;
document.body.appendChild(image);

var bigimage = document.createElement('img');
bigimage.src = _download2.default;
document.body.appendChild(bigimage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "105d6667fcc41ef7af7c8d3ca5ae5113.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(12, 32);

console.log(total);

/***/ }
/******/ ]);