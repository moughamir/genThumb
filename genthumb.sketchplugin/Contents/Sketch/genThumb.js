var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/genThumb.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/genThumb.js":
/*!*************************!*\
  !*** ./src/genThumb.js ***!
  \*************************/
/*! exports provided: onStartup, onShutdown, onSupplyTitles, onSupplyImages, onSupplyIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStartup", function() { return onStartup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onShutdown", function() { return onShutdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyTitles", function() { return onSupplyTitles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyImages", function() { return onSupplyImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyIcons", function() { return onSupplyIcons; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);

function onStartup() {
  console.log('Startup genThumb');
  sketch__WEBPACK_IMPORTED_MODULE_0__["DataSupplier"].registerDataSupplier('public.text', 'Titles', 'SupplyTitles');
  sketch__WEBPACK_IMPORTED_MODULE_0__["DataSupplier"].registerDataSupplier('public.image', 'Background', 'SupplyImages');
  sketch__WEBPACK_IMPORTED_MODULE_0__["DataSupplier"].registerDataSupplier('public.image', 'Icons', 'SupplyIcons');
}
function onShutdown() {
  sketch__WEBPACK_IMPORTED_MODULE_0__["DataSupplier"].deregisterDataSuppliers();
}
function onSupplyTitles(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var Data = [];
  var dataIndex = 0;

  while (dataIndex < dataCount) {
    sketch__WEBPACK_IMPORTED_MODULE_0__["DataSupplier"].supplyDataAtIndex(dataKey, Data[dataIndex], dataIndex);
    dataIndex++;
  }
}
function onSupplyImages(context) {
  var sketch = context.api();
  var dataKey = context.data.key;
  var pictureNames = [];
  var arrayLength = pictureNames.length;
  var paths = [];

  for (var i = 0; i < arrayLength; i++) {
    paths.push(sketch.resourceNamed(pictureNames[i]).path());
  }

  sketch__WEBPACK_IMPORTED_MODULE_0__["DataSupplier"].supplyData(dataKey, paths);
}
function onSupplyIcons(context) {
  var sketch = context.api();
  var dataKey = context.data.key;
  var iconNames = [];
  var arrayLength = iconNames.length;
  var paths = [];

  for (var i = 0; i < arrayLength; i++) {
    paths.push(sketch.resourceNamed(iconNames[i]).path());
  }

  sketch__WEBPACK_IMPORTED_MODULE_0__["DataSupplier"].supplyData(dataKey, paths);
}

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onStartup'] = __skpm_run.bind(this, 'onStartup');
that['onShutdown'] = __skpm_run.bind(this, 'onShutdown');
that['onSupplyTitles'] = __skpm_run.bind(this, 'onSupplyTitles');
that['onSupplyImages'] = __skpm_run.bind(this, 'onSupplyImages');
that['onSupplyIcons'] = __skpm_run.bind(this, 'onSupplyIcons');
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=genThumb.js.map