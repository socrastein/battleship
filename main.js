/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/display/gameGrid.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/display/gameGrid.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#gridContainer {\\n  display: flex;\\n  flex-direction: column;\\n  flex-wrap: nowrap;\\n  background-image: linear-gradient(\\n    0deg,\\n    rgba(8, 8, 100, 0.8),\\n    rgba(8, 50, 150, 0.5)\\n  );\\n}\\n\\n.rowContainer {\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: nowrap;\\n  flex: 1;\\n  background-color: transparent;\\n}\\n\\n.gridSquare,\\n.gridLabel {\\n  /* box-shadow: 0 1px 1px 1px rgba(255,255,255,.5); */\\n  display: flex;\\n  flex: 1;\\n  justify-content: center;\\n  align-items: center;\\n  max-width: min(9vw, 50px);\\n  aspect-ratio: 1;\\n\\n  font-size: 0.75rem;\\n  color: rgba(255, 255, 255, 0.75);\\n\\n  border: solid rgba(var(--white), 0.5) 1px;\\n  border-radius: 4px;\\n}\\n\\n.highlight {\\n  background-color: rgba(var(--white), 0.75);\\n}\\n\\n.highlightError {\\n  background-color: rgba(255, 0, 0, 0.5);\\n}\\n\\n.gridLabel {\\n  border: none;\\n}\\n\\n.missedSquare {\\n  background-color: rgba(var(--white), 0.5);\\n  border-radius: 50%;\\n}\\n\\n.hitSquare {\\n  background-color: rgba(255, 0, 0, 0.5);\\n  border-radius: 50%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/display/gameGrid.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/display/ships.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/display/ships.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#shipPlacementContainer {\\n  padding: 0.5rem;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 6px;\\n}\\n\\n#placeShipText {\\n  text-align: center;\\n}\\n\\n.shipContainer {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 3rem;\\n}\\n\\n.ship {\\n  position: absolute;\\n  background-color: grey;\\n  border-radius: 1rem;\\n  border: solid black 2px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: .75rem;\\n}\\n\\n.vertical{\\n  writing-mode: vertical-rl;\\n  text-orientation: upright;\\n}\\n\\n.occupied {\\n\\n}\\n\\n#Carrier {\\n  height: 32px;\\n  width: 160px;\\n}\\n#Battleship {\\n}\\n#Destroyer {\\n}\\n#Submarine {\\n}\\n#Patrol {\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/display/ships.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/display/startScreen.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/display/startScreen.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#startContainer {\\n  height: 100dvh;\\n  width: 100dvw;\\n\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 2rem;\\n  padding: 1rem;\\n\\n  background-image: linear-gradient(lightblue, blue);\\n}\\n\\n#startTitleContainer {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n#startImage {\\n  max-width: 100%;\\n}\\n\\n#startTitle {\\n  text-align: center;\\n  font-size: 2.5rem;\\n  background-color: rgba(var(--white), 0.4);\\n  border-radius: 2rem;\\n  padding: 1rem 2rem;\\n  width: fit-content;\\n}\\n\\n#startInputContainer {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 1rem;\\n}\\n\\n#startNewButton {\\n  height: 4rem;\\n  width: 12rem;\\n  background-color: lightblue;\\n\\n  border: none;\\n  border-radius: 1rem;\\n\\n  font-size: 2rem;\\n  font-weight: bold;\\n}\\n\\n#startInputLabel {\\n  font-size: 1.25rem;\\n}\\n\\n#startInputField {\\n  text-align: center;\\n  font-size: 1.25rem;\\n  padding: 0.5rem;\\n  border: none;\\n  border-radius: 1rem;\\n  background-color: rgba(var(--white), 0.75);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/display/startScreen.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --white: 245, 245, 245;\\n  --black: 45, 45, 45;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  color: rgb(var(--black));\\n  background-color: transparent;\\n}\\n\\n@keyframes spinning {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n#mainContainer {\\n  max-height: 100dvh;\\n  max-width: 100dvw;\\n  display: flex;\\n  flex-direction: column;\\n  background-color: rgb(var(--white));\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display/gameGrid.js":
/*!*********************************!*\
  !*** ./src/display/gameGrid.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createGrid)\n/* harmony export */ });\n/* harmony import */ var _gameGrid_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameGrid.css */ \"./src/display/gameGrid.css\");\n/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameLoop */ \"./src/gameLoop.js\");\n\n\n\nconst columnLetters = \" ABCDEFGHIJ\";\n\nfunction createGrid(small = false) {\n  const gridContainer = document.createElement(\"div\");\n  gridContainer.id = \"gridContainer\";\n\n  gridContainer.appendChild(createColumnLabels());\n\n  for (let i = 1; i <= 10; i++) {\n    const rowContainer = createRowContainer();\n    for (let j = 0; j <= 11; j++) {\n      if (j === 0 || j === 11) {\n        rowContainer.append(createRowLabel(columnLetters[i]));\n        continue;\n      }\n      rowContainer.append(createGridSquare(columnLetters[i], j));\n    }\n    gridContainer.append(rowContainer);\n  }\n\n  gridContainer.appendChild(createColumnLabels());\n\n  return gridContainer;\n}\n\nconst createRowContainer = function () {\n  const rowContainer = document.createElement(\"div\");\n  rowContainer.classList.add(\"rowContainer\");\n  return rowContainer;\n};\n\n//Row with ABCDEFGHIJ across top of grid\nconst createColumnLabels = function () {\n  const rowContainer = createRowContainer();\n  for (let i = 0; i < 12; i++) {\n    const labelSquare = document.createElement(\"div\");\n    labelSquare.classList.add(\"gridLabel\");\n    if (i > 0 && i < 11) labelSquare.innerText = i;\n    rowContainer.append(labelSquare);\n  }\n  return rowContainer;\n};\n\nconst createRowLabel = function (letter) {\n  const newGridSquare = document.createElement(\"div\");\n  newGridSquare.classList.add(\"gridLabel\");\n  newGridSquare.innerText = letter;\n\n  return newGridSquare;\n};\n\nconst createGridSquare = function (column, row) {\n  const newGridSquare = document.createElement(\"div\");\n  newGridSquare.classList.add(\"gridSquare\");\n  newGridSquare.id = `${column}${row}`;\n  newGridSquare.addEventListener(\"click\", () => {\n    (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__.squareClicked)(newGridSquare.id);\n  });\n\n  return newGridSquare;\n};\n\nconst showMiss = function (squareID) {\n  const square = document.getElementById(squareID);\n  square.classList.add(\"missedSquare\");\n};\n\nconst showHit = function (squareID) {\n  const square = document.getElementById(squareID);\n  square.classList.add(\"hitSquare\");\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/display/gameGrid.js?");

/***/ }),

/***/ "./src/display/ships.js":
/*!******************************!*\
  !*** ./src/display/ships.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   placeableShips: () => (/* binding */ placeableShips),\n/* harmony export */   setShipDimensions: () => (/* binding */ setShipDimensions),\n/* harmony export */   toggleShipVertical: () => (/* binding */ toggleShipVertical)\n/* harmony export */ });\n/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameState */ \"./src/gameState.js\");\n/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gameState__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ships_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships.css */ \"./src/display/ships.css\");\n\n\n\nconst ships = [\n  {\n    name: \"Carrier\",\n    size: 5,\n  },\n  {\n    name: \"Battleship\",\n    size: 4,\n  },\n  {\n    name: \"Destroyer\",\n    size: 3,\n  },\n  {\n    name: \"Submarine\",\n    size: 3,\n  },\n  {\n    name: \"Patrol\",\n    size: 2,\n  },\n];\n\nconst rows = \" ABCDEFGHIJ\";\nlet mobile;\n\nwindow.addEventListener(\"load\", () => {\n  mobile = _gameState__WEBPACK_IMPORTED_MODULE_0__.gameState.isMobile;\n});\n\nconst placeableShips = function () {\n  const shipPlacementContainer = document.createElement(\"div\");\n  shipPlacementContainer.id = \"shipPlacementContainer\";\n\n  const placeShipText = document.createElement(\"div\");\n  placeShipText.id = \"placeShipText\";\n  placeShipText.innerText = \"Drag and drop to place your ships\";\n\n  shipPlacementContainer.append(placeShipText);\n\n  const length = ships.length;\n  for (let i = 0; i < length; i++) {\n    const shipContainer = document.createElement(\"div\");\n    shipContainer.classList.add(\"shipContainer\");\n\n    const ship = document.createElement(\"div\");\n    ship.classList.add(\"ship\");\n    ship.innerText = ships[i].name;\n\n    ship.id = ships[i].name;\n    ship.size = ships[i].size;\n\n    if (mobile) {\n      ship.addEventListener(\"contextmenu\", () => {\n        toggleShipVertical(ship);\n      });\n    } else {\n      ship.addEventListener(\"dblclick\", () => {\n        toggleShipVertical(ship);\n      });\n    }\n    shipContainer.append(ship);\n    shipPlacementContainer.append(shipContainer);\n  }\n  return shipPlacementContainer;\n};\n\nconst toggleShipVertical = function (ship) {\n  const gridSquare = document.getElementById(\"A1\");\n  const width = gridSquare.offsetWidth;\n\n  if (ship.classList.contains(\"vertical\")) {\n    ship.style.height = `${width * 0.8}px`;\n    ship.style.width = `${width * ship.size * 0.9}px`;\n    ship.classList.remove(\"vertical\");\n  } else {\n    ship.style.height = `${width * ship.size * 0.9}px`;\n    ship.style.width = `${width * 0.8}px`;\n    ship.classList.add(\"vertical\");\n  }\n};\n\nconst setShipDimensions = function () {\n  const gridSquare = document.getElementById(\"A1\");\n  const width = gridSquare.offsetWidth;\n  const shipElements = document.querySelectorAll(\".ship\");\n  const length = shipElements.length;\n\n  for (let i = 0; i < length; i++) {\n    const ship = shipElements[i];\n    ship.style.height = `${width * 0.8}px`;\n    ship.style.width = `${width * ships[i].size * 0.9}px`;\n    makeShipDraggable(ship);\n  }\n};\n\nfunction makeShipDraggable(ship) {\n  const origX = ship.getBoundingClientRect().left;\n  const origY = ship.getBoundingClientRect().top;\n  let pos1 = 0,\n    pos2 = 0,\n    pos3 = 0,\n    pos4 = 0;\n  ship.onmousedown = dragMouseDown;\n  ship.addEventListener(\"touchstart\", (event) => {\n    dragMouseDown(event);\n  });\n\n  function dragMouseDown(event) {\n    event = event || window.event;\n    // event.preventDefault();\n    if (mobile) {\n      pos3 = event.touches[0].pageX;\n      pos4 = event.touches[0].pageY;\n      document.ontouchend = closeDragElement;\n      document.ontouchmove = elementDrag;\n    } else {\n      pos3 = event.clientX;\n      pos4 = event.clientY;\n      document.onmouseup = closeDragElement;\n      document.onmousemove = elementDrag;\n    }\n  }\n\n  function elementDrag(event) {\n    event = event || window.event;\n    event.preventDefault();\n\n    highlightGrid(ship);\n\n    if (mobile) {\n      pos1 = pos3 - event.touches[0].pageX;\n      pos2 = pos4 - event.touches[0].pageY;\n      pos3 = event.touches[0].pageX;\n      pos4 = event.touches[0].pageY;\n    } else {\n      pos1 = pos3 - event.clientX;\n      pos2 = pos4 - event.clientY;\n      pos3 = event.clientX;\n      pos4 = event.clientY;\n    }\n\n    ship.style.top = ship.offsetTop - pos2 + \"px\";\n    ship.style.left = ship.offsetLeft - pos1 + \"px\";\n  }\n\n  function highlightGrid() {\n    removeHighlight();\n    const square = document.elementFromPoint(ship.offsetLeft, ship.offsetTop);\n    if (square === null) return;\n    if (!square.classList.contains(\"gridSquare\")) return;\n    let limit;\n    if (ship.classList.contains(\"vertical\")) {\n      //Get row letter\n      let row = square.id[0];\n      limit = rows.indexOf(row);\n    } else {\n      //Get column number\n      limit = square.id.slice(1);\n    }\n\n    if (limit <= 11 - ship.size) {\n      //Valid square to place ship\n      square.classList.add(\"highlight\");\n    } else {\n      //Invalid square to place ship\n      square.classList.add(\"highlightError\");\n    }\n  }\n\n  function removeHighlight() {\n    const previous = document.getElementsByClassName(\"highlight\");\n    if (previous.length > 0) previous[0].classList.remove(\"highlight\");\n    const errors = document.getElementsByClassName(\"highlightError\");\n    if (errors.length > 0) errors[0].classList.remove(\"highlightError\");\n  }\n\n  function closeDragElement() {\n    document.onmouseup = null;\n    document.onmousemove = null;\n    document.ontouchend = null;\n    document.ontouchmove = null;\n    snapToClosestSquare();\n  }\n\n  function snapToClosestSquare() {\n    let offsetX;\n    let offsetY;\n\n    let square = document.elementFromPoint(ship.offsetLeft, ship.offsetTop);\n    if (square === null || !square.classList.contains(\"gridSquare\")) {\n      if (ship.classList.contains(\"vertical\")) {\n        toggleShipVertical(ship);\n      }\n      returnShipToOriginalPosition();\n      return;\n    }\n\n    if (ship.classList.contains(\"vertical\")) {\n      offsetX = ship.offsetWidth * 0.1;\n      offsetY = ship.offsetHeight * 0.05;\n    } else {\n      offsetX = ship.offsetWidth * 0.05;\n      offsetY = ship.offsetHeight * 0.1;\n    }\n\n    if (square.classList.contains(\"highlightError\")) {\n      const column = square.id.slice(1);\n      const row = square.id[0];\n      if (ship.classList.contains(\"vertical\")) {\n        //Get closest valid square on that column\n        square = document.getElementById(`${rows[11 - ship.size]}${column}`);\n        console.log(square.id);\n      } else {\n        //Get closest valid square on that row\n        square = document.getElementById(`${row}${11 - ship.size}`);\n        console.log(square.id);\n      }\n    }\n    ship.style.top = square.offsetTop + offsetY + \"px\";\n    ship.style.left = square.offsetLeft + offsetX + \"px\";\n    removeHighlight();\n  }\n\n  function returnShipToOriginalPosition() {\n    ship.style.top = origY + \"px\";\n    ship.style.left = origX + \"px\";\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/display/ships.js?");

/***/ }),

/***/ "./src/display/startScreen.js":
/*!************************************!*\
  !*** ./src/display/startScreen.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStartScreen: () => (/* binding */ createStartScreen)\n/* harmony export */ });\n/* harmony import */ var _startScreen_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startScreen.css */ \"./src/display/startScreen.css\");\n/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameState */ \"./src/gameState.js\");\n/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gameState__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gameLoop */ \"./src/gameLoop.js\");\n/* harmony import */ var _images_battleship_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/battleship.svg */ \"./src/images/battleship.svg\");\n\n\n\n\n\n\nconst createStartScreen = function () {\n  const startContainer = document.createElement(\"div\");\n  startContainer.id = \"startContainer\";\n\n  //Title image and text\n\n  const startTitleContainer = document.createElement(\"div\");\n  startTitleContainer.id = \"startTitleContainer\";\n\n  const startImage = document.createElement(\"img\");\n  startImage.id = \"startImage\";\n  startImage.src = _images_battleship_svg__WEBPACK_IMPORTED_MODULE_3__;\n\n  const startTitle = document.createElement(\"h1\");\n  startTitle.id = \"startTitle\";\n  startTitle.textContent = \"BATTLESHIP\";\n\n  startTitleContainer.append(startImage);\n  startTitleContainer.append(startTitle);\n\n  //Begin new game button\n\n  const startInputContainer = document.createElement(\"div\");\n  startInputContainer.id = \"startInputContainer\";\n\n  const startNewButton = document.createElement(\"button\");\n  startNewButton.id = \"startNewButton\";\n  startNewButton.textContent = \"New Game\";\n  startNewButton.addEventListener(\"click\", () => {\n    displayNameInput(1);\n  });\n\n  startInputContainer.append(startNewButton);\n\n  startContainer.append(startTitleContainer);\n  startContainer.append(startInputContainer);\n\n  return startContainer;\n};\n\nconst displayNameInput = function (playerNumber) {\n  //Get and clear input container\n  const inputContainer = document.getElementById(\"startInputContainer\");\n  inputContainer.innerHTML = \"\";\n\n  const label = document.createElement(\"label\");\n  label.textContent = `Enter name for Player ${playerNumber}`;\n  label.id = \"startInputLabel\";\n  label.for = \"startInputField\";\n\n  const field = document.createElement(\"input\");\n  field.id = \"startInputField\";\n  field.placeholder = `Player ${playerNumber}`;\n  field.addEventListener(\"keydown\", (key) => {\n    if (key.code === \"Enter\") {\n      if (field.value.length > 0) {\n        enterPlayerName(field.value.trim());\n      }\n    }\n  });\n\n  const button = document.createElement(\"button\");\n  button.id = \"startNewButton\";\n  button.textContent = \"Accept\";\n  button.addEventListener(\"click\", () => {\n    if (field.value.length > 0) {\n      enterPlayerName(field.value.trim());\n    }\n  });\n\n  inputContainer.append(label);\n  inputContainer.append(field);\n  field.focus();\n  inputContainer.append(button);\n};\n\nconst enterPlayerName = function (name) {\n  if (_gameState__WEBPACK_IMPORTED_MODULE_1__.gameState.player1Name === undefined) {\n    _gameState__WEBPACK_IMPORTED_MODULE_1__.gameState.player1Name = name;\n    displayNameInput(2);\n    return;\n  }\n  if (_gameState__WEBPACK_IMPORTED_MODULE_1__.gameState.player2Name === undefined) {\n    _gameState__WEBPACK_IMPORTED_MODULE_1__.gameState.player2Name = name;\n    (0,_gameLoop__WEBPACK_IMPORTED_MODULE_2__.startGame)();\n  }\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/display/startScreen.js?");

/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   squareClicked: () => (/* binding */ squareClicked),\n/* harmony export */   startGame: () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameState */ \"./src/gameState.js\");\n/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gameState__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _display_gameGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/gameGrid */ \"./src/display/gameGrid.js\");\n/* harmony import */ var _display_ships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/ships */ \"./src/display/ships.js\");\n\n\n\n\nconst mainContainer = document.getElementById(\"mainContainer\");\n\nconst startGame = function (test = false) {\n  if (test) {\n    _gameState__WEBPACK_IMPORTED_MODULE_0__.gameState.player1Name = \"Matt\";\n    _gameState__WEBPACK_IMPORTED_MODULE_0__.gameState.player2Name = \"Summer\";\n  }\n  console.log(\"Beginning new game!\");\n  console.log(`Player 1: ${_gameState__WEBPACK_IMPORTED_MODULE_0__.gameState.player1Name}`);\n  console.log(`Player 2: ${_gameState__WEBPACK_IMPORTED_MODULE_0__.gameState.player2Name}`);\n  _gameState__WEBPACK_IMPORTED_MODULE_0__.gameState.player1Board = new _gameState__WEBPACK_IMPORTED_MODULE_0__.GameBoard(_gameState__WEBPACK_IMPORTED_MODULE_0__.gameState.player1Name);\n  _gameState__WEBPACK_IMPORTED_MODULE_0__.gameState.player1Board = new _gameState__WEBPACK_IMPORTED_MODULE_0__.GameBoard(_gameState__WEBPACK_IMPORTED_MODULE_0__.gameState.player2Name);\n\n  mainContainer.append((0,_display_gameGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  mainContainer.append((0,_display_ships__WEBPACK_IMPORTED_MODULE_2__.placeableShips)())\n  ;(0,_display_ships__WEBPACK_IMPORTED_MODULE_2__.setShipDimensions)();\n\n};\n\nconst squareClicked = function (squareID) {\n  const square = document.getElementById(squareID);\n};\nconst gameLoop = function () {};\n\n\n//# sourceURL=webpack://to-do-list/./src/gameLoop.js?");

/***/ }),

/***/ "./src/gameState.js":
/*!**************************!*\
  !*** ./src/gameState.js ***!
  \**************************/
/***/ ((module) => {

eval("const gameState = {\n  isMobile: undefined,\n  player1Name: undefined,\n  player1Board: undefined,\n\n  player2Name: undefined,\n  player2Board: undefined,\n\n  playerTurn: undefined,\n};\n\n//Gameboard objects\n//#region\n\nconst GameBoard = function (ownerName) {\n  this.owner = ownerName;\n  this.ships = [];\n  this.shotsFired = [];\n  this.shotsTaken = [];\n};\n\nGameBoard.prototype.addShip = function (name, size, locationArray) {\n  const ship = new Ship(name, size);\n  ship.setLocation(locationArray);\n  this.ships.push(ship);\n};\n\nGameBoard.prototype.receiveAttack = function (square) {\n  if (this.shotsTaken.includes(square)) {\n    throw console.error(\"This square has already been fired upon.\");\n  }\n  this.shotsTaken.push(square);\n  this.ships.forEach((ship) => {\n    if (ship.includes(square)) {\n      ship.takeHit();\n      return true;\n    } else return false;\n  });\n};\n\nGameBoard.prototype.sendAttack = function (gameboard, square) {\n  if (this.shotsFired.includes(square)) {\n    throw console.error(\"This square has already been fired upon.\");\n  }\n  this.shotsFired.push(square);\n  gameboard.receiveAttack(square);\n};\n\nGameBoard.prototype.shipsAreSunk = function () {\n  this.ships.forEach((ship) => {\n    if (!ship.isSunk) return false;\n  });\n  return true;\n};\n\n//#endregion\n\n//Ship objects\n//#region\n\nconst Ship = function (name, size) {\n  this.name = name;\n  this.size = size;\n  this.squares = [];\n  this.hits = 0;\n  this.isSunk = false;\n};\n\nShip.prototype.takeHit = function () {\n  if (this.isSunk) {\n    throw console.error(\"Ship has already been sunk.\");\n  }\n  this.hits += 1;\n  if (this.hits === this.size) {\n    this.isSunk = true;\n  }\n};\n\nShip.prototype.setLocation = function (squares) {\n  if (squares.length !== this.size) {\n    throw console.error(\"Ship needs to occupy as many squares as its size.\");\n  }\n  this.squares = [...squares];\n};\n\n//#endregion\n\nmodule.exports = { Ship, GameBoard, gameState };\n\n\n//# sourceURL=webpack://to-do-list/./src/gameState.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _display_startScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/startScreen */ \"./src/display/startScreen.js\");\n/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameLoop */ \"./src/gameLoop.js\");\n/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameState */ \"./src/gameState.js\");\n/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gameState__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst mainContainer = document.getElementById(\"mainContainer\");\n\nconst isMobile = () => {\n  if (\n    navigator.userAgent.match(/Android/i) ||\n    navigator.userAgent.match(/webOS/i) ||\n    navigator.userAgent.match(/iPhone/i) ||\n    navigator.userAgent.match(/iPad/i) ||\n    navigator.userAgent.match(/iPod/i) ||\n    navigator.userAgent.match(/BlackBerry/i) ||\n    navigator.userAgent.match(/Windows Phone/i)\n  ) {\n    return true;\n  } else return false;\n};\n\nif(isMobile()){\n    _gameState__WEBPACK_IMPORTED_MODULE_3__.gameState.isMobile = true;\n} else {\n    _gameState__WEBPACK_IMPORTED_MODULE_3__.gameState.isMobile = false;\n}\nconsole.log(\"Mobile: \" + _gameState__WEBPACK_IMPORTED_MODULE_3__.gameState.isMobile);\n(0,_gameLoop__WEBPACK_IMPORTED_MODULE_2__.startGame)(true);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/display/gameGrid.css":
/*!**********************************!*\
  !*** ./src/display/gameGrid.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameGrid_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gameGrid.css */ \"./node_modules/css-loader/dist/cjs.js!./src/display/gameGrid.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameGrid_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameGrid_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_gameGrid_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_gameGrid_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/display/gameGrid.css?");

/***/ }),

/***/ "./src/display/ships.css":
/*!*******************************!*\
  !*** ./src/display/ships.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ships_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./ships.css */ \"./node_modules/css-loader/dist/cjs.js!./src/display/ships.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ships_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ships_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_ships_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_ships_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/display/ships.css?");

/***/ }),

/***/ "./src/display/startScreen.css":
/*!*************************************!*\
  !*** ./src/display/startScreen.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_startScreen_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./startScreen.css */ \"./node_modules/css-loader/dist/cjs.js!./src/display/startScreen.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_startScreen_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_startScreen_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_startScreen_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_startScreen_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/display/startScreen.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./src/images/battleship.svg":
/*!***********************************!*\
  !*** ./src/images/battleship.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"320fc33a124f0ddf0253.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/images/battleship.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;