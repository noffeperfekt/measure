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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/measure.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/format.js":
/*!*******************************!*\
  !*** ./src/helpers/format.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Format; });\n/*jshint esversion: 6 */\r\n/**\r\n * Tools for formatting\r\n */\r\nclass Format{\r\n    syntaxHighlight(json) {\r\n        if (typeof json != 'string') {\r\n            json = JSON.stringify(json, undefined, 2);\r\n        }\r\n        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');\r\n        return json.replace(/(\"(\\\\u[a-zA-Z0-9]{4}|\\\\[^u]|[^\\\\\"])*\"(\\s*:)?|\\b(true|false|null)\\b|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?)/g, function (match) {\r\n            var cls = 'number';\r\n            if (/^\"/.test(match)) {\r\n                if (/:$/.test(match)) {\r\n                    cls = 'key';\r\n                } else {\r\n                    cls = 'string';\r\n                }\r\n            } else if (/true|false/.test(match)) {\r\n                cls = 'boolean';\r\n            } else if (/null/.test(match)) {\r\n                cls = 'null';\r\n            }\r\n            return '<span class=\"' + cls + '\">' + match + '</span>';\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/helpers/format.js?");

/***/ }),

/***/ "./src/measure.js":
/*!************************!*\
  !*** ./src/measure.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _measurements_bandwidth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./measurements/bandwidth */ \"./src/measurements/bandwidth.js\");\n/* harmony import */ var _measurements_sensors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./measurements/sensors */ \"./src/measurements/sensors.js\");\n/* harmony import */ var _measurements_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./measurements/time */ \"./src/measurements/time.js\");\n/* harmony import */ var _helpers_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/format */ \"./src/helpers/format.js\");\n/*jshint esversion: 6 */\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * \r\n * @param {URL} assetURI Image for measuing download speed\r\n * @param {HTMLElement} outputTo Element to output result to\r\n */\r\n((assetURI = \"http://\"+window.location.host+\"/images/internet.jpg\", outputTo=false) => {\r\n    let format = new _helpers_format__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n    document.addEventListener('DOMContentLoaded', function () {\r\n        this.bandwidth = new _measurements_bandwidth__WEBPACK_IMPORTED_MODULE_0__[\"default\"](assetURI);\r\n        this.sensors = new _measurements_sensors__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n        this.time = new _measurements_time__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    }, false);\r\n    /**\r\n     * handle measusrement-events and output findings\r\n     */\r\n    window.addEventListener('measurement_event', (e) => {\r\n        if(outputTo){ //AS HTML\r\n            outputTo.appendChild(document.createElement('h3')).innerHTML = e.detail.type;\r\n            outputTo.appendChild(document.createElement('pre')).innerHTML = format.syntaxHighlight(e.detail);\r\n        }\r\n        if(window.Measure){ //GLOBAL VARIABLE\r\n            window.Measure.push(e.detail);\r\n        }\r\n        else{  //GLOBAL VARIABLE\r\n            window.Measure = [];\r\n            window.Measure.push(e.detail);\r\n        }\r\n    }, false);\r\n})(undefined, document.querySelector('code'));\r\n// Measure(undefined, document.querySelector('code'));\r\n// Measure(undefined, false);\n\n//# sourceURL=webpack:///./src/measure.js?");

/***/ }),

/***/ "./src/measurements/bandwidth.js":
/*!***************************************!*\
  !*** ./src/measurements/bandwidth.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bandwidth; });\n/*jshint esversion: 6 */\r\nclass Bandwidth {\r\n    constructor(URI) {\r\n        this.type = \"Bandwidth (download)\";\r\n        this.uri = URI + \"?cacheBuster=\" + Math.random();\r\n        this.Mbps = 0;\r\n        this.kbps = 0;\r\n        this.bps = 0;\r\n        this.bits = this.filesize(this, this.startTest);\r\n        this.Bytes = 0;\r\n        this.kB = 0;\r\n        this.MB = 0;\r\n        this.start = (new Date()).getTime();\r\n        this.end = 0;\r\n        this.duration = 0;\r\n    }\r\n    filesize(bndwth, callback) {\r\n        let client = new XMLHttpRequest();\r\n        //get header in a async mannor\r\n        client.open(\"HEAD\", bndwth.uri, true);\r\n        client.onreadystatechange = function () {\r\n            if (this.readyState === this.DONE) {\r\n                try {\r\n                    bndwth.Bytes = parseInt(client.getResponseHeader(\"Content-Length\"), 10);\r\n                    bndwth.bits = bndwth.Bytes * 8; //one byte = 8 bits *duh*\r\n                    callback(bndwth);\r\n                } catch (error) {\r\n                    console.error(error);\r\n                }\r\n            }\r\n        };\r\n        client.send();\r\n    }\r\n    startTest(bndwth) {\r\n        let asset = new Image();\r\n        asset.onload = bndwth.stopTest(bndwth);\r\n        bndwth.start = (new Date()).getTime();\r\n        asset.src = bndwth.uri;\r\n    }\r\n    stopTest(bndwth) {\r\n        bndwth.end = (new Date()).getTime();\r\n        bndwth.duration = (bndwth.end - bndwth.start) / 1000;\r\n        bndwth.kB = (bndwth.Bytes / 1000).toFixed(2);\r\n        bndwth.MB = (bndwth.Bytes / 1000000).toFixed(2);\r\n        bndwth.bps = (bndwth.bits / bndwth.duration).toFixed(2);\r\n        bndwth.kbps = (bndwth.bps / 1024).toFixed(2);\r\n        bndwth.Mbps = (bndwth.kbps / 1024).toFixed(2);\r\n        let measurement_event = new CustomEvent('measurement_event', {\r\n            detail: bndwth\r\n        });\r\n        window.dispatchEvent(measurement_event);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/measurements/bandwidth.js?");

/***/ }),

/***/ "./src/measurements/sensors.js":
/*!*************************************!*\
  !*** ./src/measurements/sensors.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sensors; });\n/*jshint esversion: 6 */\r\nclass Sensors {\r\n    constructor() {\r\n        this.type = \"Sensors\";\r\n        this.amientLight = ('ondevicelight' in window);\r\n        this.orientation = ('deviceorientation' in window);\r\n        this.motion = ('devicemotion' in window);\r\n        this.fullScreen = this.fullScreen();\r\n        this.geolocation = (navigator.geolocation) ? true : false;\r\n        this.report(this);\r\n    }\r\n    /**\r\n     * Returns boolean depending on support or not\r\n     */\r\n    fullScreen() {\r\n        var doc = window.document;\r\n        var docEl = doc.documentElement;\r\n        var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;\r\n        return requestFullScreen && {}.toString.call(requestFullScreen) === '[object Function]';\r\n    }\r\n    /**\r\n     * Dispatch event for Measure to catch.\r\n     * @param {JSON data to go with the event and printed out in gui} data \r\n     */\r\n    report(data) {\r\n        let measurement_event = new CustomEvent('measurement_event', {\r\n            detail: data\r\n        });\r\n        window.dispatchEvent(measurement_event);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/measurements/sensors.js?");

/***/ }),

/***/ "./src/measurements/time.js":
/*!**********************************!*\
  !*** ./src/measurements/time.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Time; });\n/*jshint esversion: 6 */\r\nclass Time {\r\n    constructor() {\r\n        this.type = 'Time';\r\n        this.timeOfDay = this.dayPeriod();\r\n        this.day = (new Date()).getDay();\r\n        this.weekend = ((this.day === 6) || (this.day === 0));\r\n        this.report(this);\r\n    }\r\n    dayPeriod() {\r\n        let curHr = (new Date()).getHours(),\r\n            dayPeriod = '';\r\n        if (curHr < 3) {\r\n            dayPeriod = 'night';\r\n        } else if (curHr < 11) {\r\n            dayPeriod = 'morning';\r\n        } else if (curHr < 13) {\r\n            dayPeriod = 'midday';\r\n        } else if (curHr < 18) {\r\n            dayPeriod = 'afternoon';\r\n        } else {\r\n            dayPeriod = 'evening';\r\n        }\r\n        return dayPeriod;\r\n    }\r\n    report(data) {\r\n        let measurement_event = new CustomEvent('measurement_event', {\r\n            detail: data\r\n        });\r\n        window.dispatchEvent(measurement_event);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/measurements/time.js?");

/***/ })

/******/ });