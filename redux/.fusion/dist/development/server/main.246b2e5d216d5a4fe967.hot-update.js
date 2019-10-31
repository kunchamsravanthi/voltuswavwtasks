
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  if (false) {
    throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);
  } else {
    console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');
    process.env.NODE_ENV = 'development';
  }
} else {
  process.env.NODE_ENV = 'development';
}
  
exports.id = "main";
exports.modules = {

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return start; });
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-react */ "fusion-react");
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/reducer.js");
/* harmony import */ var fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fusion-plugin-react-redux */ "fusion-plugin-react-redux");
/* harmony import */ var fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fusion_plugin_redux_action_emitter_enhancer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fusion-plugin-redux-action-emitter-enhancer */ "fusion-plugin-redux-action-emitter-enhancer");
/* harmony import */ var fusion_plugin_redux_action_emitter_enhancer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_redux_action_emitter_enhancer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root.js */ "./src/root.js");




 // import Styletron from 'fusion-plugin-styletron-react';


 // export default () => {
//   const app = new App(root);
//   app.register(Styletron);
//   app.register(Router);
//   return app;
// };

function start() {
  const app = new fusion_react__WEBPACK_IMPORTED_MODULE_0___default.a(_root_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  app.register(fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_3__["ReduxToken"], fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_3___default.a);
  app.register(fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_3__["ReducerToken"], _reducer__WEBPACK_IMPORTED_MODULE_2__["default"]);
  app.register(fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_3__["EnhancerToken"], fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_3___default.a);
   true && app.register(fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_3__["GetInitialStateToken"], async ctx => ({}));
  return app;
}
;

/***/ }),

/***/ "fusion-plugin-redux-action-emitter-enhancer":
/*!**************************************************************!*\
  !*** external "fusion-plugin-redux-action-emitter-enhancer" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fusion-plugin-redux-action-emitter-enhancer");

/***/ })

};
//# sourceMappingURL=main.246b2e5d216d5a4fe967.hot-update.js.map