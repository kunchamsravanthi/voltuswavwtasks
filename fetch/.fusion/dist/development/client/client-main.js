(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-tokens */ "./node_modules/fusion-tokens/dist/browser.es2017.es.js");
/* harmony import */ var _plugins_examples_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/examples.js */ "./src/plugins/examples.js");
/* harmony import */ var _plugins_foo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/foo.js */ "./src/plugins/foo.js");
// // // 
// import App from 'fusion-react';
// import Router from 'fusion-plugin-react-router';
// import Styletron from 'fusion-plugin-styletron-react';
// import root from './root.js';
// export default () => {
//   const app = new App(root);
//   app.register(Styletron);
//   app.register(Router);
//   return app;
// };
// import App from 'fusion-react';



/* harmony default export */ __webpack_exports__["default"] = (() => {
  var app = new App();
  app.register(fusion_tokens__WEBPACK_IMPORTED_MODULE_0__["LoggerToken"], console);
  app.register(_plugins_examples_js__WEBPACK_IMPORTED_MODULE_1__["ExampleToken"], _plugins_examples_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  app.register(_plugins_foo_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return app;
});

/***/ }),

/***/ "./src/plugins/examples.js":
/*!*********************************!*\
  !*** ./src/plugins/examples.js ***!
  \*********************************/
/*! exports provided: ExampleToken, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleToken", function() { return ExampleToken; });
/* harmony import */ var fusion_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-tokens */ "./node_modules/fusion-tokens/dist/browser.es2017.es.js");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-core */ "./node_modules/fusion-core/dist/browser.es2017.es.js");


var ExampleToken = Object(fusion_core__WEBPACK_IMPORTED_MODULE_1__["createToken"])('ExampleToken');
/* harmony default export */ __webpack_exports__["default"] = (createPlugin({
  deps: {
    logger: fusion_tokens__WEBPACK_IMPORTED_MODULE_0__["LoggerToken"]
  },

  provides(_ref) {
    var {
      logger
    } = _ref;
    return {
      sayHello() {
        logger.log('hello world');
      }

    };
  }

}));

/***/ }),

/***/ "./src/plugins/foo.js":
/*!****************************!*\
  !*** ./src/plugins/foo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-core */ "./node_modules/fusion-core/dist/browser.es2017.es.js");
/* harmony import */ var _examples_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples.js */ "./src/plugins/examples.js");


/* harmony default export */ __webpack_exports__["default"] = (createPlugin({
  deps: {
    example: _examples_js__WEBPACK_IMPORTED_MODULE_1__["ExampleToken"]
  },

  provides(_ref) {
    var {
      example
    } = _ref;
    example.sayHello();
  }

}));

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/fusion-cli/entries/client-public-path.js (webpack)-hot-middleware/client.js?name=client ./node_modules/fusion-cli/entries/client-entry.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/vw-lap-007/fetch/node_modules/fusion-cli/entries/client-public-path.js */"./node_modules/fusion-cli/entries/client-public-path.js");
__webpack_require__(/*! /home/vw-lap-007/fetch/node_modules/webpack-hot-middleware/client.js?name=client */"./node_modules/webpack-hot-middleware/client.js?name=client");
module.exports = __webpack_require__(/*! /home/vw-lap-007/fetch/node_modules/fusion-cli/entries/client-entry.js */"./node_modules/fusion-cli/entries/client-entry.js");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=client-main.js.map