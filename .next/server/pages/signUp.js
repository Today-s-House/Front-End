"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./hooks/useText.tsx":
/*!***************************!*\
  !*** ./hooks/useText.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst useText = initalValue => {\n  const {\n    0: value,\n    1: setValue\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initalValue);\n  const onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setValue(e.target.value);\n  }, []);\n  return {\n    value,\n    onChange\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useText);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VUZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxNQUFNRSxPQUFPLEdBQUlDLFdBQUQsSUFBd0I7QUFDcEMsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CTCwrQ0FBUSxDQUFDRyxXQUFELENBQWxDO0FBQ0EsUUFBTUcsUUFBUSxHQUFHTCxrREFBVyxDQUFFTSxDQUFELElBQTJDO0FBQ3BFRixJQUFBQSxRQUFRLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUFWLENBQVI7QUFDSCxHQUYyQixFQUV6QixFQUZ5QixDQUE1QjtBQUlBLFNBQU87QUFBRUEsSUFBQUEsS0FBRjtBQUFTRSxJQUFBQTtBQUFULEdBQVA7QUFDSCxDQVBEOztBQVNBLGlFQUFlSixPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXluZXh0Ly4vaG9va3MvdXNlVGV4dC50c3g/MmMyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHVzZVRleHQgPSAoaW5pdGFsVmFsdWU6c3RyaW5nKSA9PiB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0YWxWYWx1ZSk7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoZTpSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIG9uQ2hhbmdlIH0gXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VUZXh0OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlVGV4dCIsImluaXRhbFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useText.tsx\n");

/***/ }),

/***/ "./pages/signup/index.tsx":
/*!********************************!*\
  !*** ./pages/signup/index.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hooks_useText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useText */ \"./hooks/useText.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/yeonjaejeong/workspace/Next_Project/TodayHouse/Front-End/pages/signup/index.tsx\";\n\n\n\nconst SignUp = () => {\n  const userId = (0,_hooks_useText__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: \"\\uC544\\uC774\\uB514\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 11\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n      type: \"text\",\n      value: userId.value,\n      onChange: userId.onChange\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 11\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztBQUVBLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFFBQU1DLE1BQU0sR0FBR0YsMERBQU8sQ0FBQyxFQUFELENBQXRCO0FBRUEsc0JBQ0k7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsV0FBSyxFQUFFRSxNQUFNLENBQUNDLEtBQWpDO0FBQXdDLGNBQVEsRUFBRUQsTUFBTSxDQUFDRTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBTUgsQ0FURDs7QUFXQSxpRUFBZUgsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215bmV4dC8uL3BhZ2VzL3NpZ251cC9pbmRleC50c3g/ZDNjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlVGV4dCBmcm9tICcuLi8uLi9ob29rcy91c2VUZXh0JztcblxuY29uc3QgU2lnblVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJZCA9IHVzZVRleHQoJycpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD7slYTsnbTrlJQ8L3A+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VzZXJJZC52YWx1ZX0gb25DaGFuZ2U9e3VzZXJJZC5vbkNoYW5nZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnblVwOyJdLCJuYW1lcyI6WyJ1c2VUZXh0IiwiU2lnblVwIiwidXNlcklkIiwidmFsdWUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signup/index.tsx"));
module.exports = __webpack_exports__;

})();