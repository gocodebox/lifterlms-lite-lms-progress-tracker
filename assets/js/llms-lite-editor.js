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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/editor.js":
/*!**************************!*\
  !*** ./src/js/editor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor/edit */ "./src/js/editor/edit.js");
/* harmony import */ var _editor_save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor/save */ "./src/js/editor/save.js");
/* harmony import */ var _scss_editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/editor.scss */ "./src/scss/editor.scss");
/* harmony import */ var _scss_editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_editor_scss__WEBPACK_IMPORTED_MODULE_4__);





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('llms-lite-lms/progress-tracker', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Lite LMS Progress Tracker by LifterLMS', 'lifterlms'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('A simple way to turn any WordPress post or page into a completable course.', 'lifterlms'),
  category: 'common',
  icon: {
    foreground: '#466dd8',
    src: 'yes-alt'
  },
  attributes: {
    completeMsg: {
      type: 'boolean',
      default: true
    },
    incompleteMsg: {
      type: 'boolean',
      default: true
    },
    allowReset: {
      type: 'boolean',
      default: false
    }
  },
  multiple: false,
  edit: _editor_edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _editor_save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/js/editor/edit.js":
/*!*******************************!*\
  !*** ./src/js/editor/edit.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspect */ "./src/js/editor/inspect.js");
/* harmony import */ var _get_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-class-names */ "./src/js/editor/get-class-names.js");






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var classes = Object(_get_class_names__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      allowReset = attributes.allowReset,
      incompleteMsg = attributes.incompleteMsg,
      completeMsg = attributes.completeMsg,
      template = [['core/paragraph', {
    className: classes[0],
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter a message to display when this item is incomplete.', 'lifterlms')
  }], ['core/button', {
    align: 'center',
    className: classes[1],
    text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mark Complete', 'lifterlms-lite-lms')
  }], ['core/paragraph', {
    className: classes[2],
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter a message to display when this item is complete.', 'lifterlms')
  }], ['core/button', {
    align: 'center',
    className: "".concat(classes[3], " is-style-outline"),
    text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mark Incomplete', 'lifterlms-lite-lms')
  }]];

  if (allowReset) {
    className += ' has-incomplete-btn';
  }

  if (incompleteMsg) {
    className += ' has-incomplete-msg';
  }

  if (completeMsg) {
    className += ' has-complete-msg';
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inspect__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
    template: template,
    templateLock: "all"
  })));
});

/***/ }),

/***/ "./src/js/editor/get-class-names.js":
/*!******************************************!*\
  !*** ./src/js/editor/get-class-names.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return ['llms-lite-lms-msg--incomplete', 'llms-lite-lms-btn--complete', 'llms-lite-lms-msg--complete', 'llms-lite-lms-btn--incomplete'];
});

/***/ }),

/***/ "./src/js/editor/inspect.js":
/*!**********************************!*\
  !*** ./src/js/editor/inspect.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var incompleteMsg = attributes.incompleteMsg,
      completeMsg = attributes.completeMsg,
      allowReset = attributes.allowReset;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('User Messages', 'lifterlms')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Incomplete message', 'lifterlms'),
    help: incompleteMsg ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show a message when the content is not complete.', 'lifterlms') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('No message.', 'lifterlms'),
    checked: incompleteMsg,
    onChange: function onChange() {
      return setAttributes({
        incompleteMsg: !incompleteMsg
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Completed message', 'lifterlms'),
    help: completeMsg ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show a message when the content has been completed.', 'lifterlms') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('No message.', 'lifterlms'),
    checked: completeMsg,
    onChange: function onChange() {
      return setAttributes({
        completeMsg: !completeMsg
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('User Progress Reset', 'lifterlms')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Progress Reset', 'lifterlms'),
    help: allowReset ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Completed content can be marked incomplete', 'lifterlms') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Completed content cannot be marked incomplete', 'lifterlms'),
    checked: allowReset,
    onChange: function onChange() {
      return setAttributes({
        allowReset: !allowReset
      });
    }
  })));
});

/***/ }),

/***/ "./src/js/editor/save.js":
/*!*******************************!*\
  !*** ./src/js/editor/save.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-class-names */ "./src/js/editor/get-class-names.js");




function getBlockClassName(attributes) {
  var allowReset = attributes.allowReset,
      incompleteMsg = attributes.incompleteMsg,
      completeMsg = attributes.completeMsg;
  var classNames = [];

  if (allowReset) {
    classNames.push('has-incomplete-btn');
  }

  if (incompleteMsg) {
    classNames.push('has-incomplete-msg');
  }

  if (completeMsg) {
    classNames.push('has-complete-msg');
  }

  return classNames.join(' ');
}

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var attributes = _ref.attributes,
      innerBlocks = _ref.innerBlocks;

  // Ensure that our "required" classes are not removed by a smart developer
  if (innerBlocks.length) {
    var classes = Object(_get_class_names__WEBPACK_IMPORTED_MODULE_2__["default"])();
    innerBlocks.forEach(function (innerBlock, index) {
      if (!innerBlock.attributes.className.includes(classes[index])) {
        innerBlocks[index].attributes.className = innerBlock.attributes.className ? " ".concat(classes[index]) : classes[index];
      }
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: getBlockClassName(attributes)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
});

/***/ }),

/***/ "./src/scss/editor.scss":
/*!******************************!*\
  !*** ./src/scss/editor.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=llms-lite-editor.js.map