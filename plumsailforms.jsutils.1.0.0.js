(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JSUtils"] = factory();
	else
		root["JSUtils"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CommandExecutor.ts":
/*!********************************!*\
  !*** ./src/CommandExecutor.ts ***!
  \********************************/
/*! exports provided: CommandExecutor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CommandExecutor\", function() { return CommandExecutor; });\n/* harmony import */ var _ShowCommandExecutor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowCommandExecutor */ \"./src/ShowCommandExecutor.ts\");\n/* harmony import */ var _ValidatorCommandExecutor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValidatorCommandExecutor */ \"./src/ValidatorCommandExecutor.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar CommandExecutor =\n/*#__PURE__*/\nfunction () {\n  function CommandExecutor(fd, $) {\n    _classCallCheck(this, CommandExecutor);\n\n    _defineProperty(this, \"fd\", void 0);\n\n    _defineProperty(this, \"$\", void 0);\n\n    this.fd = fd;\n    this.$ = $;\n  }\n\n  _createClass(CommandExecutor, [{\n    key: \"execute\",\n    value: function execute(config) {\n      var _this = this;\n\n      config.forEach(function (configItem) {\n        return _this.processConfigItem(configItem);\n      });\n    }\n  }, {\n    key: \"processConfigItem\",\n    value: function processConfigItem(configItem) {\n      if (Boolean(configItem.show)) {\n        var showCommandExecutor = new _ShowCommandExecutor__WEBPACK_IMPORTED_MODULE_0__[\"ShowCommandExecutor\"](this.fd, this.$, configItem);\n        showCommandExecutor.executeShowCommand(configItem);\n      }\n\n      if (Boolean(configItem.validate)) {\n        var validatorCommandExecutor = new _ValidatorCommandExecutor__WEBPACK_IMPORTED_MODULE_1__[\"ValidatorCommandExecutor\"](this.fd, this.$, configItem);\n        validatorCommandExecutor.executeValidateCommand(configItem);\n      }\n    }\n  }]);\n\n  return CommandExecutor;\n}();\n\n//# sourceURL=webpack://JSUtils/./src/CommandExecutor.ts?");

/***/ }),

/***/ "./src/ShowCommandExecutor.ts":
/*!************************************!*\
  !*** ./src/ShowCommandExecutor.ts ***!
  \************************************/
/*! exports provided: ShowCommandExecutor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShowCommandExecutor\", function() { return ShowCommandExecutor; });\n/* harmony import */ var _isFieldsComparisonConditionMet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFieldsComparisonConditionMet */ \"./src/isFieldsComparisonConditionMet.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar ShowCommandExecutor =\n/*#__PURE__*/\nfunction () {\n  function ShowCommandExecutor(fd, $, config) {\n    _classCallCheck(this, ShowCommandExecutor);\n\n    _defineProperty(this, \"fd\", void 0);\n\n    _defineProperty(this, \"$\", void 0);\n\n    _defineProperty(this, \"config\", void 0);\n\n    this.fd = fd;\n    this.$ = $;\n    this.config = config;\n    this.showOrHideField = this.showOrHideField.bind(this);\n    this.executeShow = this.executeShow.bind(this);\n  }\n\n  _createClass(ShowCommandExecutor, [{\n    key: \"executeShowCommand\",\n    value: function executeShowCommand(config) {\n      var hasShowField = Boolean(config.show);\n\n      if (!hasShowField) {\n        return;\n      }\n\n      this.handleShowCommandErrors(config);\n      this.fd.spRendered(this.executeShow);\n    }\n  }, {\n    key: \"executeShow\",\n    value: function executeShow() {\n      this.fd.field(this.config.srcField).$on('change', this.showOrHideField);\n      this.showOrHideField();\n    }\n  }, {\n    key: \"showOrHideField\",\n    value: function showOrHideField() {\n      var isComparisonConditionMet = Object(_isFieldsComparisonConditionMet__WEBPACK_IMPORTED_MODULE_0__[\"isFieldsComparisonConditionMet\"])(this.config.srcField, this.config.show.operator, this.config.show.value, this.fd);\n      var hasTargetField = Boolean(this.config.show.targetField);\n\n      if (isComparisonConditionMet) {\n        hasTargetField ? this.$(this.fd.field(this.config.show.targetField).$parent.$el).show() : this.$(this.config.show.targetClass).show();\n      } else {\n        hasTargetField ? this.$(this.fd.field(this.config.show.targetField).$parent.$el).hide() : this.$(this.config.show.targetClass).hide();\n      }\n    }\n  }, {\n    key: \"handleShowCommandErrors\",\n    value: function handleShowCommandErrors(config) {\n      if (!config.show.targetField || !config.show.targetClass) {\n        console.error('Missing required \"targetField\" or \"targetClass\" in show config');\n      }\n\n      if (!config.show.operator) {\n        console.error('Missing required \"operator\" field in show config');\n      }\n\n      if (!config.show.value) {\n        console.error('Missing required \"value\" field in show config');\n      }\n    }\n  }]);\n\n  return ShowCommandExecutor;\n}();\n\n//# sourceURL=webpack://JSUtils/./src/ShowCommandExecutor.ts?");

/***/ }),

/***/ "./src/ValidatorCommandExecutor.ts":
/*!*****************************************!*\
  !*** ./src/ValidatorCommandExecutor.ts ***!
  \*****************************************/
/*! exports provided: ValidatorCommandExecutor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ValidatorCommandExecutor\", function() { return ValidatorCommandExecutor; });\n/* harmony import */ var _isValidatorConditionMet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isValidatorConditionMet */ \"./src/isValidatorConditionMet.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar ValidatorCommandExecutor =\n/*#__PURE__*/\nfunction () {\n  function ValidatorCommandExecutor(fd, $, config) {\n    _classCallCheck(this, ValidatorCommandExecutor);\n\n    _defineProperty(this, \"fd\", void 0);\n\n    _defineProperty(this, \"$\", void 0);\n\n    _defineProperty(this, \"config\", void 0);\n\n    this.fd = fd;\n    this.$ = $;\n    this.config = config;\n    this.validateField = this.validateField.bind(this);\n    this.executeValidate = this.executeValidate.bind(this);\n  }\n\n  _createClass(ValidatorCommandExecutor, [{\n    key: \"executeValidateCommand\",\n    value: function executeValidateCommand(config) {\n      this.handleValidateCommandErrors(config);\n      this.fd.spRendered(this.executeValidate);\n    }\n  }, {\n    key: \"executeValidate\",\n    value: function executeValidate() {\n      this.fd.field(this.config.validate.targetField).validators.push({\n        name: this.config.validate.name,\n        error: this.config.validate.error || '',\n        validate: this.validateField\n      });\n    }\n  }, {\n    key: \"validateField\",\n    value: function validateField(value) {\n      return Object(_isValidatorConditionMet__WEBPACK_IMPORTED_MODULE_0__[\"isValidatorConditionMet\"])(value, this.config.validate.compare, this.config.validate.validation, this.fd);\n    }\n  }, {\n    key: \"handleValidateCommandErrors\",\n    value: function handleValidateCommandErrors(config) {\n      if (!config.validate.targetField) {\n        console.error('Missing required \"targetField\" in validate config');\n      }\n\n      if (!config.validate.validation) {\n        console.error('Missing required \"validation\" field in validate config');\n      }\n    }\n  }]);\n\n  return ValidatorCommandExecutor;\n}();\n\n//# sourceURL=webpack://JSUtils/./src/ValidatorCommandExecutor.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: CommandExecutor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CommandExecutor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommandExecutor */ \"./src/CommandExecutor.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CommandExecutor\", function() { return _CommandExecutor__WEBPACK_IMPORTED_MODULE_0__[\"CommandExecutor\"]; });\n\n\n\n\n//# sourceURL=webpack://JSUtils/./src/index.ts?");

/***/ }),

/***/ "./src/isFieldsComparisonConditionMet.ts":
/*!***********************************************!*\
  !*** ./src/isFieldsComparisonConditionMet.ts ***!
  \***********************************************/
/*! exports provided: isFieldsComparisonConditionMet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFieldsComparisonConditionMet\", function() { return isFieldsComparisonConditionMet; });\nvar Operators;\n\n(function (Operators) {\n  Operators[\"Equals\"] = \"==\";\n  Operators[\"GreaterOrEqual\"] = \">==\";\n  Operators[\"LesserOrEqual\"] = \"<==\";\n  Operators[\"Greater\"] = \">\";\n  Operators[\"Lesser\"] = \"<\";\n  Operators[\"IsBetween\"] = \"isBetween\";\n  Operators[\"StartsWith\"] = \"^=\";\n  Operators[\"EndsWith\"] = \"=^\";\n})(Operators || (Operators = {}));\n\nfunction isFieldsComparisonConditionMet(srcField, operator, value, fd) {\n  var srcFieldValue = fd.field(srcField).value;\n\n  switch (operator) {\n    case Operators.Equals:\n      return srcFieldValue === value;\n\n    case Operators.Greater:\n      return srcFieldValue > value;\n\n    case Operators.GreaterOrEqual:\n      return srcFieldValue >= value;\n\n    case Operators.Lesser:\n      return srcFieldValue < value;\n\n    case Operators.LesserOrEqual:\n      return srcFieldValue <= value;\n\n    case Operators.IsBetween:\n      return srcFieldValue < value.max && srcFieldValue > value.min;\n\n    case Operators.StartsWith:\n      return srcFieldValue.startsWith(value);\n\n    case Operators.EndsWith:\n      return srcFieldValue.endsWith(value);\n\n    default:\n      return false;\n  }\n}\n\n//# sourceURL=webpack://JSUtils/./src/isFieldsComparisonConditionMet.ts?");

/***/ }),

/***/ "./src/isValidatorConditionMet.ts":
/*!****************************************!*\
  !*** ./src/isValidatorConditionMet.ts ***!
  \****************************************/
/*! exports provided: isValidatorConditionMet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidatorConditionMet\", function() { return isValidatorConditionMet; });\nvar Operators;\n\n(function (Operators) {\n  Operators[\"Equals\"] = \"==\";\n  Operators[\"GreaterOrEqual\"] = \">==\";\n  Operators[\"LesserOrEqual\"] = \"<==\";\n  Operators[\"Greater\"] = \">\";\n  Operators[\"Lesser\"] = \"<\";\n  Operators[\"IsBetween\"] = \"isBetween\";\n  Operators[\"StartsWith\"] = \"^=\";\n  Operators[\"EndsWith\"] = \"=^\";\n  Operators[\"RegEx\"] = \"regEx\";\n  Operators[\"Contains\"] = \"contains\";\n  Operators[\"DoesntContain\"] = \"doesntContain\";\n})(Operators || (Operators = {}));\n\nfunction containsValues(srcFieldValue, compareArray) {\n  return compareArray.every(function (compareItem) {\n    return srcFieldValue.includes(compareItem);\n  });\n}\n\nfunction doesntContainValues(srcFieldValue, compareArray) {\n  return !compareArray.some(function (compareItem) {\n    return srcFieldValue.includes(compareItem);\n  });\n}\n\nfunction isValidatorConditionMet(targetFieldValue, operator, compare, fd) {\n  switch (operator) {\n    case Operators.Equals:\n      return targetFieldValue === compare;\n\n    case Operators.Greater:\n      return targetFieldValue > compare;\n\n    case Operators.GreaterOrEqual:\n      return targetFieldValue >= compare;\n\n    case Operators.Lesser:\n      return targetFieldValue < compare;\n\n    case Operators.LesserOrEqual:\n      return targetFieldValue <= compare;\n\n    case Operators.IsBetween:\n      return targetFieldValue < compare.max && targetFieldValue > compare.min;\n\n    case Operators.StartsWith:\n      return targetFieldValue.startsWith(compare);\n\n    case Operators.EndsWith:\n      return targetFieldValue.endsWith(compare);\n\n    case Operators.RegEx:\n      return compare.test(targetFieldValue);\n\n    case Operators.Contains:\n      return containsValues(targetFieldValue, compare);\n\n    case Operators.DoesntContain:\n      return doesntContainValues(targetFieldValue, compare);\n\n    default:\n      return containsValues(targetFieldValue, compare);\n  }\n}\n\n//# sourceURL=webpack://JSUtils/./src/isValidatorConditionMet.ts?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\u5150728\\Downloads\\PlumsailUtils\\sp.dmc.plumsailforms\\JSUtils\\src\\index.ts */\"./src/index.ts\");\n\n\n//# sourceURL=webpack://JSUtils/multi_./src/index.ts?");

/***/ })

/******/ });
});