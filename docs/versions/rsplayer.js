var RetailSpot;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CONFIG": () => (/* binding */ DEFAULT_CONFIG),
/* harmony export */   "FORMAT": () => (/* binding */ FORMAT),
/* harmony export */   "INGRID_DEFAULT_CONFIG": () => (/* binding */ INGRID_DEFAULT_CONFIG),
/* harmony export */   "INGRID_NATIVE_DEFAULT_CONFIG": () => (/* binding */ INGRID_NATIVE_DEFAULT_CONFIG),
/* harmony export */   "MEDIATYPE": () => (/* binding */ MEDIATYPE),
/* harmony export */   "VPAID_EVENTS": () => (/* binding */ VPAID_EVENTS)
/* harmony export */ });
var MEDIATYPE = {
  VIDEO: 'video',
  NATIVE: 'native',
  BANNER: 'banner'
};
var FORMAT = {
  AUTO: 'auto',
  AUTO_NO_SLIDER: 'autoNoSlider',
  SLIDER: 'slider',
  INTEXT: 'intext',
  INGRID: 'ingrid'
};
var DEFAULT_CONFIG = {
  closeButton: true,
  soundButton: true,
  height: 225,
  width: 400
};
var INGRID_NATIVE_DEFAULT_CONFIG = {
  expandImage: true,
  closeButton: false,
  soundButton: false,
  height: null,
  width: null
};
var INGRID_DEFAULT_CONFIG = {
  expandImage: true,
  closeButton: false,
  soundButton: true,
  height: null,
  width: null
};
var VPAID_EVENTS = {
  AdStarted: 'AdStarted',
  AdStopped: 'AdStopped',
  AdSkipped: 'AdSkipped',
  AdLoaded: 'AdLoaded',
  AdLinearChange: 'AdLinearChange',
  AdSizeChange: 'AdSizeChange',
  AdExpandedChange: 'AdExpandedChange',
  AdSkippableStateChange: 'AdSkippableStateChange',
  AdDurationChange: 'AdDurationChange',
  AdRemainingTimeChange: 'AdRemainingTimeChange',
  AdVolumeChange: 'AdVolumeChange',
  AdImpression: 'AdImpression',
  AdClickThru: 'AdClickThru',
  AdInteraction: 'AdInteraction',
  AdVideoStart: 'AdVideoStart',
  AdVideoFirstQuartile: 'AdVideoFirstQuartile',
  AdVideoMidpoint: 'AdVideoMidpoint',
  AdVideoThirdQuartile: 'AdVideoThirdQuartile',
  AdVideoComplete: 'AdVideoComplete',
  AdUserAcceptInvitation: 'AdUserAcceptInvitation',
  AdUserMinimize: 'AdUserMinimize',
  AdUserClose: 'AdUserClose',
  AdPaused: 'AdPaused',
  AdPlaying: 'AdPlaying',
  AdError: 'AdError',
  AdLog: 'AdLog',
  AdProgress: 'AdProgress'
};

/***/ }),

/***/ "./src/env.js":
/*!********************!*\
  !*** ./src/env.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseUrl": () => (/* binding */ baseUrl),
/* harmony export */   "env": () => (/* binding */ env),
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
/* eslint-disable */
var version = "1.4b-2-g0d463ff-dirty";
var env = "dev";
/* eslint-enable */

var base;
switch (env) {
  case 'preprod':
    base = 'https://preprod.retailspot.com/static/';
    break;
  case 'prod':
    base = 'https://retailspot.com/static/';
    break;
  default:
    base = 'http://localhost:3000/dist/';
}
var baseUrl = base;

/***/ }),

/***/ "./src/log.js":
/*!********************!*\
  !*** ./src/log.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOG_LEVEL": () => (/* binding */ LOG_LEVEL),
/* harmony export */   "logger": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _toolsbrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolsbrowser */ "./src/toolsbrowser.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./src/env.js");


var LOG_LEVEL = {
  WARN: 'warn',
  ERROR: 'error',
  DEFAULT: 'log'
};

/**
 * @param level     - [warn | error | log]
 * @param msg       - string to log
 * @param object... - none or more objects to log
 */
function logger() {
  var _console;
  var level = LOG_LEVEL.DEFAULT;
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if ([LOG_LEVEL.WARN, LOG_LEVEL.ERROR, LOG_LEVEL.DEFAULT].includes(args[0])) {
    level = args.shift();
  }

  // don't show verbose log in prod environment
  if (level === LOG_LEVEL.DEFAULT && _env__WEBPACK_IMPORTED_MODULE_1__.env === 'prod' && (0,_toolsbrowser__WEBPACK_IMPORTED_MODULE_0__.findGetParameter)('rsp_debug') !== 'true') {
    return;
  }
  var labelCSS = 'padding:2px 6px;border-radius:8px;background-color:#1a2691;color:white';

  /* eslint-disable-next-line no-console */
  (_console = console)[level].apply(_console, ['%cRetailSpot', labelCSS, args.shift()].concat(args));
}
logger("env : ".concat(_env__WEBPACK_IMPORTED_MODULE_1__.env));
logger("Script version: ".concat(_env__WEBPACK_IMPORTED_MODULE_1__.version));

/***/ }),

/***/ "./src/native/nativeadtools.js":
/*!*************************************!*\
  !*** ./src/native/nativeadtools.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAutoContainers": () => (/* binding */ createAutoContainers),
/* harmony export */   "createNativeContainer": () => (/* binding */ createNativeContainer),
/* harmony export */   "remoteNativeContainer": () => (/* binding */ remoteNativeContainer)
/* harmony export */ });
/* harmony import */ var _placeholders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeholders */ "./src/native/placeholders.js");
/* harmony import */ var _toolsretail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toolsretail */ "./src/toolsretail.js");



/**
 * analyse the page structure to find a list of sell items.
 * copy the item structure and returns a list of ready ad container for native
 *
 * @param {*} nOfItems
 * @param {*} frequency
 */
function createAutoContainers() {
  var nOfItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var frequency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var _finditemList = (0,_toolsretail__WEBPACK_IMPORTED_MODULE_1__.finditemList)(),
    itemList = _finditemList.itemList,
    gridProfile = _finditemList.gridProfile;
  var targets = [];
  var sourceEl = itemList.children[frequency - 1];
  var newElement = new _placeholders__WEBPACK_IMPORTED_MODULE_0__.PlaceholderElements(sourceEl.cloneNode(true));
  targets.push(newElement);
  itemList.insertBefore(targets[0].container, sourceEl.nextSibling);
  newElement.fetchElements();

  // treat elements css to enable smooth element insertion
  // case where the list is a grid
  if (gridProfile[0].length > 1) {
    var nOfCol = gridProfile[0].length;
    Array.from(itemList.children).forEach(function (itm, index) {
      // clear left on first element of each line
      itm.style.clear = index % nOfCol === 0 ? 'left' : 'none';
    });
  }
  return targets;
}

/**
 * copy the main item structure, increase its width if needed
 * and returns a list of ready ad container for native
 *
 * @param {HTMLElement} mainItem
 * @param {HTMLElement[]} itemList
 * @param {any[][]} gridProfile
 * @param {number} widthRatio - increase the item width, multiplying it by widthRatio
 */
function createNativeContainer(mainItem, itemList, gridProfile) {
  var widthRatio = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
  var newElement = new _placeholders__WEBPACK_IMPORTED_MODULE_0__.PlaceholderElements(mainItem.cloneNode(true));
  newElement.container.widthRatio = widthRatio;
  itemList.insertBefore(newElement.container, mainItem);
  newElement.fetchElements();
  if (widthRatio > 1) {
    newElement.scaleWidth(widthRatio);
  }

  // treat elements css to enable smooth element insertion
  // case where the list is a grid
  if (gridProfile[0].length > 1) {
    var nOfCol = gridProfile[0].length;
    var indexWithScaleOffset = 0; // keep track of offset due to scaling up elements
    Array.from(itemList.children).forEach(function (itm) {
      // clear left on first element of each line
      itm.style.clear = indexWithScaleOffset % nOfCol === 0 ? 'left' : 'none';
      indexWithScaleOffset += itm.widthRatio || 1;
    });
  }
  return newElement;
}

/**
 * copy the main item structure, increase its width if needed
 * and returns a list of ready ad container for native
 *
 * @param {HTMLElement} mainItem
 * @param {HTMLElement[]} itemList
 * @param {any[][]} gridProfile
 * @param {number} widthRatio - increase the item width, multiplying it by widthRatio
 */
function remoteNativeContainer(container, itemList, gridProfile) {
  container.parentElement.removeChild(container);

  // treat elements css to enable smooth element insertion
  // case where the list is a grid
  if (gridProfile[0].length > 1) {
    var nOfCol = gridProfile[0].length;
    Array.from(itemList.children).forEach(function (itm, index) {
      // clear left on first element of each line
      itm.style.clear = index % nOfCol === 0 ? 'left' : 'none';
    });
  }
}

/***/ }),

/***/ "./src/native/placeholders.js":
/*!************************************!*\
  !*** ./src/native/placeholders.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceholderElements": () => (/* binding */ PlaceholderElements)
/* harmony export */ });
/* harmony import */ var _src_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/log */ "./src/log.js");
/* harmony import */ var _toolsbrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toolsbrowser */ "./src/toolsbrowser.js");
/* harmony import */ var _toolsretail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toolsretail */ "./src/toolsretail.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




// keep a list of dom Element to receive asset data
var PlaceholderElements = /*#__PURE__*/function () {
  function PlaceholderElements(container) {
    _classCallCheck(this, PlaceholderElements);
    this.container = container;
    this.title = null; //  main text element
    this.desc = null; //  longest text
    this.ctatext = null; //  main button or tiertiary text
    this.sponsoredBy = null; //  can be a secondary text or secondary button
    this.price = null; // text with price value (short text with currency)
    this.img = null; // main img element
    this.brandImg = null; // secondary img element
    this.sponsoredLabel = null; // less important text (after all other insertion)

    // keep all text / buttons and imgs to sort elements and find the best display
    this.buttonsEls = []; // text element with different background set locally
    this.textEls = []; // all other pure text elements
    this.imgEls = []; // all IMG or divs with background urls
    this.pricesEls = []; // text element containing currencySymbols
    this.descEls = []; // text element containing multiple lines
    this.garbageEls = []; // elements that should be hidden

    // avoid event handling from cloned container
    // if click is set on this element (<a></a> for instance), our overlay won't avoid it.
    container.onclick = function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      event.stopPropagation();
    };
  }
  _createClass(PlaceholderElements, [{
    key: "isImg",
    value: function isImg(element) {
      var isSVGContainer = element.children.length === 1 && element.children[0].nodeName === 'svg';
      return isSVGContainer || element.nodeName === 'IMG' || element.nodeName === 'PICTURE' || element.style.background.includes('url(');
    }
  }, {
    key: "isText",
    value: function isText(element) {
      var result = false;
      // concat all text nodes content (measure  '"-""30""%"' length = 4)
      var textLength = 0;
      Array.from(element.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var _child$textContent;
          textLength += ((_child$textContent = child.textContent) === null || _child$textContent === void 0 ? void 0 : _child$textContent.trim().length) || 0;
        }
      });
      if (textLength > 1) {
        var _element$nextSibling;
        // with text content shown
        var onlyInline = true;
        Array.from(element.children).forEach(function (child) {
          // merge inline text into parent element
          var innerTextNodenames = ['SUP', 'EM', 'SPAN', 'A', 'STRONG'];
          if (!innerTextNodenames.includes(child.nodeName) || window.getComputedStyle(child).display === 'block') {
            onlyInline = false;
          }
        });
        if (onlyInline) {
          // remove inner inline elements
          element.innerHTML = element.innerText;
        }
        result = true;
        if (((_element$nextSibling = element.nextSibling) === null || _element$nextSibling === void 0 ? void 0 : _element$nextSibling.nodeName) === 'SUP') {
          // merge sup text to detect devise caracter if any
          element.innerHTML += element.nextSibling.innerText;
        }
      } else if (textLength === 1) {
        this.garbageEls.push(element);
      }
      return result;
    }
  }, {
    key: "isDesc",
    value: function isDesc(element) {
      // if multiple line shown:  keep that element for description
      return element.height >= 2 * element.lineHeight;
    }
  }, {
    key: "isButton",
    value: function isButton(element) {
      var result = false;
      var currentEl = element;
      while (!result && currentEl.children.length <= 1) {
        var style = window.getComputedStyle(currentEl);
        result = !style.background.includes('rgba(0, 0, 0, 0)') && !style.background.includes('url(');
        currentEl = currentEl.parentElement;
      }
      return result;
    }
  }, {
    key: "isPrice",
    value: function isPrice(element) {
      var value = element.innerText.replace('dès', '').replace('à partir de', '');
      // look at length to avoid "60% DE REMISE SUR LE 2ᵉ ACHETÉ !" to be detected as price
      return value.length <= 10 && !Number.isNaN(parseInt(value, 10)) && (0,_toolsretail__WEBPACK_IMPORTED_MODULE_2__.containPrice)(value);
    }
  }, {
    key: "isOrContainElements",
    value: function isOrContainElements(el) {
      return this.title && (this.title === el || el.contains(this.title)) || this.desc && (this.desc === el || el.contains(this.desc)) || this.ctatext && (this.ctatext === el || el.contains(this.ctatext)) || this.sponsoredBy && (this.sponsoredBy === el || el.contains(this.sponsoredBy)) || this.price && (this.price === el || el.contains(this.price)) || this.img && (this.img === el || el.contains(this.img)) || this.brandImg && (this.brandImg === el || el.contains(this.brandImg)) || this.sponsoredLabel && (this.sponsoredLabel === el || el.contains(this.sponsoredLabel));
    }
  }, {
    key: "removeLineThrough",
    value: function removeLineThrough(element) {
      var _this = this;
      (0,_toolsbrowser__WEBPACK_IMPORTED_MODULE_1__.executeForEachParent)(element, function (el) {
        var decorationRule = window.getComputedStyle(el).textDecoration;
        if (decorationRule.indexOf('line-through') === 0) {
          el.style.textDecoration = 'none';
        }
      }, function (elstop) {
        return elstop === _this.container;
      });
    }
  }, {
    key: "fetchElements",
    value: function fetchElements() {
      var _this2 = this;
      var allnodes = this.container.querySelectorAll('*');
      var allnodesArray = Array.from(allnodes);
      allnodesArray.forEach(function (element) {
        // hide aside svg :  if an element contain multiple elements but one of them is svg, hide it.
        if (element.childNodes.length > 1) {
          element.childNodes.forEach(function (el) {
            if (el.nodeName === 'svg') {
              el.style.visibility = 'hidden';
            }
          });
        }

        // hide and don't watch SUP element
        if (element.nodeName === 'SUP') {
          element.style.display = 'none';
        }

        // don't watch hidden elements
        if (!element.offsetParent) return;
        if (_this2.isText(element)) {
          var _textStyle$transform;
          var textStyle = window.getComputedStyle(element);
          element.fontSize = parseInt(textStyle.fontSize, 10);
          element.lineHeight = parseInt(textStyle.lineHeight, 10);
          element.height = parseInt(textStyle.height, 10);
          element.fontWeight = textStyle.fontWeight;

          // avoid line through text decoration
          _this2.removeLineThrough(element);

          // remove transformed elements
          element.rotate = (_textStyle$transform = textStyle.transform) === null || _textStyle$transform === void 0 ? void 0 : _textStyle$transform.includes('matrix');

          // exclude square element (we need to show text)
          element.isSquare = Math.abs(parseInt(textStyle.width, 10) - parseInt(textStyle.height, 10)) < 3;
          if (element.rotate || element.isSquare) {
            _this2.garbageEls.push(element); // set wrong elements to garbage list
          } else if (_this2.isPrice(element)) {
            _this2.pricesEls.push(element);
          } else if (_this2.isDesc(element)) {
            _this2.descEls.push(element);
          } else if (_this2.isButton(element)) {
            _this2.buttonsEls.push(element);
          } else {
            _this2.textEls.push(element);
          }
        } else if (_this2.isImg(element)) {
          var style = window.getComputedStyle(element);
          element.compWidth = style.width;
          element.compHeight = style.height;
          element.compBackground = style.background;
          element.compMargin = style.margin;
          element.compMarginLeft = style.marginLeft;
          element.compMarginRight = style.marginRight;
          element.area = parseInt(style.width, 10) * parseInt(style.height, 10);
          _this2.imgEls.push(element);
        } else {
          // hide polution text (text in non leaf element)
          // keep original computed height
          element.childNodes.forEach(function (el) {
            if (el.nodeType === 3) {
              if (!element.origHeight) {
                element.origHeight = window.getComputedStyle(element).height;
              }
              el.nodeValue = '';
            }
          });
          if (element.origHeight) {
            element.style.minHeight = element.origHeight;
          }
        }
      });

      // extract main and secondary images ( according to image size: w*h)
      this.imgEls.sort(function (a, b) {
        return b.area - a.area;
      });
      this.img = this.imgEls.shift();
      this.brandImg = this.imgEls.shift();

      // then sort according to font size and text position
      var sortTexts = function sortTexts(a, b) {
        if (!a.rotate && b.rotate) {
          return -1;
        }
        if (a.rotate && !b.rotate) {
          return 1;
        }
        var dif = 0;
        dif = b.fontSize - a.fontSize;
        if (dif === 0) {
          dif = b.fontWeight - a.fontWeight;
        }
        if (dif === 0) {
          dif = a.offsetTop - b.offsetTop;
        }
        return dif;
      };
      var sortPrices = function sortPrices(a, b) {
        if (a.innerText.includes('%') && !b.innerText.includes('%')) {
          return 1;
        }
        if (!a.innerText.includes('%') && b.innerText.includes('%')) {
          return -1;
        }
        return sortTexts(a, b);
      };
      (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVEL.DEBUG, 'All text Elmts : ', this.textEls);
      debugger;
      // extract main and seconary texts ( according to font size and length)
      this.textEls.sort(sortTexts);
      // as text are sorted by fontSize, the biggest one get the title
      // if bigger than body fontsize and if they are not several lines
      this.title = this.textEls.shift();
      this.sponsoredBy = this.textEls.shift();

      // sort long descs, pick the longest one
      this.descEls.sort(function (a, b) {
        return b.innerText.trim().length - a.innerText.trim().length;
      });
      this.desc = this.descEls.shift();
      if (!this.desc) {
        this.textEls.sort(function (a, b) {
          return b.innerText.trim().length - a.innerText.trim().length;
        });
        this.desc = this.textEls.shift();
      }

      // sort buttons with same criterions as texts
      this.buttonsEls.sort(sortTexts);
      // CTA on 'button like' elements
      this.ctatext = this.buttonsEls.shift();

      // sort and extract price elements
      this.pricesEls.sort(sortPrices);
      this.price = this.pricesEls.shift();

      // then hide non display elements
      this.garbageEls = this.garbageEls.concat(allnodesArray.filter(function (el) {
        var shouldBeHidden = true;
        shouldBeHidden = !_this2.isOrContainElements(el);
        return shouldBeHidden;
      }));

      // elments with shown original content or unused ('garbage') should be hidden
      this.hideUnused([].concat(_toConsumableArray(this.imgEls), _toConsumableArray(this.textEls), _toConsumableArray(this.pricesEls), _toConsumableArray(this.buttonsEls), _toConsumableArray(this.garbageEls)));
      (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVEL.DEBUG, 'title : ', this.title);
      (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVEL.DEBUG, 'description : ', this.desc);
      (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVEL.DEBUG, 'ctaText : ', this.ctatext);
      (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVEL.DEBUG, 'brand : ', this.sponsoredBy);
      (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVEL.DEBUG, 'price : ', this.price);
      (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVEL.DEBUG, 'img : ', this.img);
      (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVEL.DEBUG, 'brandImg : ', this.brandImg);
    }
  }, {
    key: "hideUnused",
    value: function hideUnused(arrayToHide) {
      var _this3 = this;
      arrayToHide.forEach(function (el) {
        (0,_toolsbrowser__WEBPACK_IMPORTED_MODULE_1__.executeForEachWrapper)(el, function (outerEl) {
          outerEl.style.visibility = 'hidden';
        }, _this3.container);
      });
    }

    /**
     * change the width of this element to  ratio * width
     * starts the process from the placeholder img.
     * (intended to create video placement inside item grid)
     * @param {integer} ratio
     */
  }, {
    key: "scaleWidth",
    value: function scaleWidth(ratio) {
      var _this4 = this;
      if (ratio > 1 && this.img) {
        (0,_toolsbrowser__WEBPACK_IMPORTED_MODULE_1__.executeForEachParent)(this.img, function (element) {
          var elRect = (0,_toolsbrowser__WEBPACK_IMPORTED_MODULE_1__.getInnerSize)(element);
          element.style.minWidth = "".concat(Math.floor(elRect.width * ratio), "px");
          // don't touch the height here.
        }, function (el) {
          return el === _this4.container;
        });
      }
    }
  }, {
    key: "fillText",
    value: function fillText(element, content) {
      if (element) {
        if (content) {
          element.innerText = content;
        } else {
          (0,_toolsbrowser__WEBPACK_IMPORTED_MODULE_1__.executeForEachWrapper)(element, function (el) {
            el.style.visibility = 'hidden';
          }, this.container);
        }
      }
    }
  }, {
    key: "fillImg",
    value: function fillImg(element, url) {
      var set = false;
      if (element) {
        if (url) {
          element.style.width = element.compWidth;
          element.style.height = element.compHeight;
          if (element.nodeName === 'IMG') {
            element.style.objectFit = 'cover';
            element.src = url;
            set = true;
          } else if (element.compBackground.includes('url(')) {
            element.style.background = element.compBackground.replace(/(.*url\()([^)"']*)(\).*)/, "$1".concat(url, "$3"));
            set = true;
          }
        }
        if (!set) {
          (0,_toolsbrowser__WEBPACK_IMPORTED_MODULE_1__.executeForEachWrapper)(element, function (el) {
            el.style.visibility = 'hidden';
          }, this.container);
        }
      }
    }

    /**
     * fill maximum of placeholder elements with actual campaign values.
     * hide components when no matching value is provided
     * @param {*} nativeJson
     */
  }, {
    key: "applyValues",
    value: function applyValues() {
      var _nativeJson$image, _nativeJson$brandLogo;
      var nativeJson = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.fillText(this.title, nativeJson.title);
      this.fillText(this.desc, nativeJson.desc);
      this.fillText(this.ctatext, nativeJson.ctatext);
      this.fillText(this.sponsoredBy, nativeJson.sponsoredBy || nativeJson.domain);
      this.fillText(this.price, nativeJson.price);
      this.fillText(this.sponsoredLabel, 'Sponsorisé');
      this.fillImg(this.img, (_nativeJson$image = nativeJson.image) === null || _nativeJson$image === void 0 ? void 0 : _nativeJson$image.url);
      this.fillImg(this.brandImg, (_nativeJson$brandLogo = nativeJson.brandLogo) === null || _nativeJson$brandLogo === void 0 ? void 0 : _nativeJson$brandLogo.url);
    }

    /**
     * show an HTML element above placement image
     * @param {*} element
     */
  }, {
    key: "replaceImg",
    value: function replaceImg(replacement) {
      var _this$img;
      var expand = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if ((_this$img = this.img) !== null && _this$img !== void 0 && _this$img.parentElement) {
        var element = document.createElement('DIV');
        var rect = this.img.getBoundingClientRect();
        var parent = this.img.parentElement;
        parent.replaceChild(element, this.img);
        element.style.width = "".concat(rect.width, "px");
        element.style.height = "".concat(rect.height, "px");
        element.style.position = this.img.style.position;
        element.style.left = this.img.style.left;
        element.style.top = this.img.style.top;
        element.style.right = this.img.style.right;
        element.style.bottom = this.img.style.bottom;
        replacement.style.width = "".concat(rect.width, "px");
        replacement.style.height = "".concat(rect.height, "px");

        // expand
        if (expand) {
          var newWidth = rect.width + parseInt(this.img.compMarginLeft, 10) + parseInt(this.img.compMarginRight, 10);
          element.style.width = "".concat(newWidth, "px");
          replacement.style.width = "".concat(newWidth, "px");
          element.style.left = '0px';
          element.style.right = '0px';
          element.style.margin = 'Opx auto';
          replacement.style.margin = '0px';
        } else {
          element.style.margin = this.img.compMargin === '0px' ? 'auto' : this.img.compMargin;
        }
        element.appendChild(replacement);
      }
    }

    /**
     * show ad elements in overlay (adchoice, click hander ...)
     * @param {object} nativeJson
     */
  }, {
    key: "setAdOverlay",
    value: function setAdOverlay(nativeJson) {
      var _this5 = this;
      // create the global overlay (handl click and contains mandatory display)
      this.overlay = document.createElement('div');
      if (!this.container.style.position) {
        this.container.style.position = 'relative';
      }
      var style = this.overlay.style;
      style.position = 'absolute';
      style.top = '0px';
      style.left = '0px';
      style.width = '100%';
      style.height = '100%';
      style.cursor = 'pointer';

      // handle clicka
      this.overlay.addEventListener('click', function (e) {
        if (nativeJson.url) {
          window.open(nativeJson.url, '_blank');
        }
        if (typeof _this5.onclick === 'function') {
          _this5.onclick(e);
        }
      });

      // add mandatory display if not already inserted
      if (!this.sponsoredLabel) {
        var sponsoredLabel = document.createElement('div');
        sponsoredLabel.style.color = '#505971';
        sponsoredLabel.style.position = 'absolute';
        sponsoredLabel.style.bottom = '10px';
        sponsoredLabel.style.width = '100%';
        sponsoredLabel.style.textAlign = 'center';
        sponsoredLabel.innerText = 'Sponsorisé';
        this.overlay.appendChild(sponsoredLabel);
      }
      if (nativeJson.privacyIcon) {
        var privacyIcon = document.createElement('img');
        privacyIcon.style.position = 'absolute';
        privacyIcon.style.top = '0px';
        privacyIcon.style.right = '0px';
        privacyIcon.style.width = '20px';
        privacyIcon.style.height = '20px';
        privacyIcon.src = nativeJson.privacyIcon;
        if (nativeJson.privacyUrl) {
          privacyIcon.addEventListener('click', function () {
            window.open(nativeJson.privacyUrl, '_blank');
          });
        }
        this.overlay.appendChild(privacyIcon);
      }
      // append it to ad container
      this.container.appendChild(this.overlay);
    }
  }, {
    key: "insertNativeAd",
    value: function insertNativeAd(nativeJson) {
      this.applyValues(nativeJson);
      this.setAdOverlay(nativeJson);
    }
  }, {
    key: "addOverlayElement",
    value: function addOverlayElement(element, adContRect) {
      if (element.parentElement !== null) {
        element.parentElement.removeChild(element);
      }
      this.overlay.appendChild(element);
      element.style.position = 'absolute'; // positionned inside the absolute overlay
      element.style.width = "".concat(adContRect.width, "px");
      element.style.height = "".concat(adContRect.height, "px");
      element.style.left = "".concat(adContRect.left, "px");
      element.style.top = "".concat(adContRect.top, "px");
    }
  }]);
  return PlaceholderElements;
}();

/***/ }),

/***/ "./src/network/parser.js":
/*!*******************************!*\
  !*** ./src/network/parser.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseVastString": () => (/* binding */ parseVastString)
/* harmony export */ });
/* harmony import */ var _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dailymotion/vast-client */ "./node_modules/@dailymotion/vast-client/dist/vast-client.min.js");
/* harmony import */ var _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/log */ "./src/log.js");


function parseVastString(vastString) {
  var doc = new DOMParser().parseFromString(vastString, 'text/xml');
  return new _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_0__.VASTParser().parseVAST(doc)["catch"](function (err) {
    (0,_src_log__WEBPACK_IMPORTED_MODULE_1__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_1__.LOG_LEVEL.WARN, 'VAST Parse error.', err);
    throw err;
  });
}

/***/ }),

/***/ "./src/network/request.js":
/*!********************************!*\
  !*** ./src/network/request.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEquativeAd": () => (/* binding */ getEquativeAd),
/* harmony export */   "retryEquativeAd": () => (/* binding */ retryEquativeAd)
/* harmony export */ });
/* harmony import */ var _src_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/log */ "./src/log.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./src/network/parser.js");



/**
 * Send data as json format in a POST request
 * @param { string } url
 * @param { object } data
 */
function post(url, data) {
  return new Promise(function (resolve, reject) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error("POST request status code: ".concat(xhr.status)));
        }
      };
      xhr.send(JSON.stringify(data));
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * use 'post' to request an ad from Equative server
 */
function getEquativeAd(config, consent) {
  var outputType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'vast4';
  // read format "eq-123-456-789-246"
  var ids = config.placement.split('-');
  if (ids[0] !== 'eq') {
    throw new Error("Wrong placement id format: ".concat(config.placementId));
  }
  var networkId = ids[1];
  var siteId = ids[2];
  var pageId = ids[3];
  var formatId = ids[4];
  var reqBody = {
    timestamp: new Date().getTime(),
    networkId: networkId,
    siteId: siteId,
    pageId: pageId,
    master: 'm',
    screen: {
      height: window.screen.height,
      width: window.screen.width
    },
    ads: [{
      formatId: formatId
    }],
    output: outputType,
    gdpr_consent: consent.gdpr_consent_string
  };
  return new Promise(function (resolve, reject) {
    post('https://prg.smartadserver.com/genericpost', reqBody).then(function (response) {
      (0,_parser__WEBPACK_IMPORTED_MODULE_1__.parseVastString)(response).then(function (json) {
        resolve(json);
      })["catch"](function (err) {
        reject(err);
      });
    })["catch"](function (err) {
      reject(err);
    });
  });
}
function retryEquativeAd(config, consent) {
  var nOfTry = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVEL.WARN, "call with not : ".concat(nOfTry));
  return new Promise(function (resolve, reject) {
    getEquativeAd(config, consent).then(function (result) {
      var _result$ads;
      if (!((_result$ads = result.ads) !== null && _result$ads !== void 0 && _result$ads.length) && nOfTry > 0) {
        throw new Error('Vast Empty');
      } else {
        resolve(result);
      }
    })["catch"](function (err) {
      (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVEL.WARN, "Equative - no ad. retry : ".concat(nOfTry));
      if (nOfTry === 0) {
        reject(err);
      } else {
        setTimeout(function () {
          retryEquativeAd(config, consent, --nOfTry).then(function (result) {
            resolve(result);
          });
        }, 500);
      }
    });
  });
}

/***/ }),

/***/ "./src/network/vastloader.js":
/*!***********************************!*\
  !*** ./src/network/vastloader.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadVast": () => (/* binding */ loadVast)
/* harmony export */ });
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ "./src/network/parser.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ "./src/network/request.js");


function loadVast(config, consent, vastClient) {
  return new Promise(function (resolve, reject) {
    if (config.forceResponse) {
      (0,_parser__WEBPACK_IMPORTED_MODULE_0__.parseVastString)(config.forceResponse).then(function (json) {
        resolve(json);
      });
    } else if (config.vastUrl) {
      vastClient.get(config.vastUrl).then(function (json) {
        resolve(json);
      })["catch"](function (err) {
        reject(err);
      });
    } else if (config.placement) {
      (0,_request__WEBPACK_IMPORTED_MODULE_1__.retryEquativeAd)(config, consent, config.retryrequest).then(function (json) {
        resolve(json);
      })["catch"](function (err) {
        reject(err);
      });
    } else {
      reject(new Error('Missing Config.placement.'));
    }
  });
}

/***/ }),

/***/ "./src/openmeasurement.js":
/*!********************************!*\
  !*** ./src/openmeasurement.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenMeasurement": () => (/* binding */ OpenMeasurement)
/* harmony export */ });
/* harmony import */ var _src_toolsbrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/toolsbrowser */ "./src/toolsbrowser.js");
/* harmony import */ var _src_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/env */ "./src/env.js");
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/constants */ "./src/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var OpenMeasurement = /*#__PURE__*/function () {
  function OpenMeasurement() {
    _classCallCheck(this, OpenMeasurement);
    this.OM_SERVICE_URL = "".concat(_src_env__WEBPACK_IMPORTED_MODULE_1__.baseUrl, "omweb-v1.js");
    this.OM_SESSION_URL = "".concat(_src_env__WEBPACK_IMPORTED_MODULE_1__.baseUrl, "omid-session-client-v1.js");
  }
  _createClass(OpenMeasurement, [{
    key: "insertOMScript",
    value: function insertOMScript(callback) {
      var _this = this;
      var topWindow = (0,_src_toolsbrowser__WEBPACK_IMPORTED_MODULE_0__.getTopMostWindow)();
      if (topWindow.document.getElementsByClassName('rs-om-service').length > 0) {
        this.OmidSessionClient = topWindow.OmidSessionClient && topWindow.OmidSessionClient["default"];
        callback();
      } else {
        var serviceScript = document.createElement('script');
        serviceScript.className = 'ayl-om_service';
        serviceScript.type = 'text/javascript';
        serviceScript.setAttribute('src', this.OM_SERVICE_URL);
        serviceScript.addEventListener('load', function () {
          var sessionScript = document.createElement('script');
          sessionScript.className = 'ayl-om_service';
          sessionScript.type = 'text/javascript';
          sessionScript.setAttribute('src', _this.OM_SESSION_URL);
          sessionScript.addEventListener('load', function () {
            _this.OmidSessionClient = topWindow.OmidSessionClient && topWindow.OmidSessionClient["default"];
            callback();
          });
          topWindow.document.body.appendChild(sessionScript);
        });
        topWindow.document.head.appendChild(serviceScript);
      }
    }
  }, {
    key: "createOMSession",
    value: function createOMSession(ad, vpaid, video) {
      var _this2 = this;
      this.vpaid = vpaid;
      this.video = video;
      var topWindow = (0,_src_toolsbrowser__WEBPACK_IMPORTED_MODULE_0__.getTopMostWindow)();
      var CONTENT_URL = topWindow.document.URL;
      var PARTNER_NAME = 'RetailSpot';
      var PARTNER_VERSION = _src_env__WEBPACK_IMPORTED_MODULE_1__.version;
      var partner = new this.OmidSessionClient.Partner(PARTNER_NAME, PARTNER_VERSION);
      var resources = ad.adVerifications.map(function (verification) {
        var scriptUrl = verification.resource;
        var accessMode = 'full';
        return new _this2.OmidSessionClient.VerificationScriptResource(scriptUrl, verification.vendor, verification.verificationParameters, accessMode);
      });
      var context = new this.OmidSessionClient.Context(partner, resources, CONTENT_URL);
      context.setServiceWindow(topWindow);
      context.setVideoElement(video);
      this.adSession = new this.OmidSessionClient.AdSession(context);
      if (!this.adSession.isSupported()) {
        return;
      }
      this.adSession.setCreativeType('video');
      this.adEvents = new this.OmidSessionClient.AdEvents(this.adSession);
      this.mediaEvents = new this.OmidSessionClient.MediaEvents(this.adSession);
      this.adSession.start();
      this.addListeners();
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this3 = this;
      this.vpaid.subscribe(function () {
        var vastProperties = new _this3.OmidSessionClient.VastProperties(false, 0, true, 'standalone');
        _this3.adEvents.loaded(vastProperties);
      }, _src_constants__WEBPACK_IMPORTED_MODULE_2__.VPAID_EVENTS.AdLoaded);
      this.vpaid.subscribe(function () {
        _this3.adEvents.impressionOccurred();
        _this3.mediaEvents.start(_this3.video.duration, _this3.video.volume);
      }, _src_constants__WEBPACK_IMPORTED_MODULE_2__.VPAID_EVENTS.AdStarted);
      this.vpaid.subscribe(function () {
        _this3.mediaEvents.firstQuartile();
      }, _src_constants__WEBPACK_IMPORTED_MODULE_2__.VPAID_EVENTS.AdVideoFirstQuartile);
      this.vpaid.subscribe(function () {
        _this3.mediaEvents.midpoint();
      }, _src_constants__WEBPACK_IMPORTED_MODULE_2__.VPAID_EVENTS.AdVideoMidpoint);
      this.vpaid.subscribe(function () {
        _this3.mediaEvents.thirdQuartile();
      }, _src_constants__WEBPACK_IMPORTED_MODULE_2__.VPAID_EVENTS.AdVideoThirdQuartile);
      this.vpaid.subscribe(function () {
        _this3.mediaEvents.complete();
        setTimeout(function () {
          var _this3$adSession;
          (_this3$adSession = _this3.adSession) === null || _this3$adSession === void 0 ? void 0 : _this3$adSession.finish();
        }, 3000);
      }, _src_constants__WEBPACK_IMPORTED_MODULE_2__.VPAID_EVENTS.AdVideoComplete);
    }
  }]);
  return OpenMeasurement;
}();

/***/ }),

/***/ "./src/toolsbrowser.js":
/*!*****************************!*\
  !*** ./src/toolsbrowser.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InIframe": () => (/* binding */ InIframe),
/* harmony export */   "InSecuredIframe": () => (/* binding */ InSecuredIframe),
/* harmony export */   "closestToMiddle": () => (/* binding */ closestToMiddle),
/* harmony export */   "executeForEachParent": () => (/* binding */ executeForEachParent),
/* harmony export */   "executeForEachWrapper": () => (/* binding */ executeForEachWrapper),
/* harmony export */   "executeUntilTopMostWindow": () => (/* binding */ executeUntilTopMostWindow),
/* harmony export */   "findGetParameter": () => (/* binding */ findGetParameter),
/* harmony export */   "getInnerSize": () => (/* binding */ getInnerSize),
/* harmony export */   "getRelativeBoundingRect": () => (/* binding */ getRelativeBoundingRect),
/* harmony export */   "getSafeFrameEXT": () => (/* binding */ getSafeFrameEXT),
/* harmony export */   "getTopMostWindow": () => (/* binding */ getTopMostWindow),
/* harmony export */   "onScrollStop": () => (/* binding */ onScrollStop),
/* harmony export */   "pageOffset": () => (/* binding */ pageOffset),
/* harmony export */   "readConsent": () => (/* binding */ readConsent)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function findGetParameter(parameterName) {
  var result = null;
  var tmp = [];
  window.location.search.substring(1).split('&').forEach(function (item) {
    tmp = item.split('=');
    if (tmp[0].toLowerCase() === parameterName.toLowerCase()) result = decodeURIComponent(tmp[1]);
  });
  return result;
}
function pageOffset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
    right: rect.left + scrollLeft + rect.width,
    bottom: rect.top + scrollTop + rect.height
  };
}
function getRelativeBoundingRect(element, parent) {
  var parentPos = parent.getBoundingClientRect();
  var childPos = element.getBoundingClientRect();
  return {
    width: childPos.width,
    height: childPos.height,
    top: childPos.top - parentPos.top,
    right: childPos.right - parentPos.right,
    bottom: childPos.bottom - parentPos.bottom,
    left: childPos.left - parentPos.left
  };
}
function getInnerSize(elm) {
  var rect = elm.getBoundingClientRect();
  var computed = getComputedStyle(elm);
  var paddingV = parseInt(computed.paddingTop, 10) + parseInt(computed.paddingBottom, 10);
  var paddingH = parseInt(computed.paddingLeft, 10) + parseInt(computed.paddingRight, 10);
  return {
    width: Math.floor(rect.width) - paddingH,
    height: Math.floor(rect.height) - paddingV
  };
}
var scrollTimer = -1;

/**
 * callback when userr has stop scrolling
 * used in automatique positionning ( intext, ingrid)
 * @param {function} callback
 */
function onScrollStop(callback) {
  var onScroll = function onScroll() {
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(function () {
      callback();
      window.removeEventListener('scroll', onScroll);
    }, 500);
  };
  scrollTimer = window.setTimeout(function () {
    callback();
    window.removeEventListener('scroll', onScroll);
  }, 1000);
  window.addEventListener('scroll', onScroll);
}

/**
 * returns the closest element to viewport center
 * used in automatique positionning ( intext, ingrid)
 * @param {HTMLElement[]} array
 * @returns {HTMLElement} most centered element from the array
 */
function closestToMiddle(array) {
  var res = null;
  var minDist = window.innerHeight;
  array === null || array === void 0 ? void 0 : array.forEach(function (node) {
    var dist = Math.abs(node.getBoundingClientRect().bottom - window.innerHeight / 2);
    if (dist < minDist) {
      minDist = dist;
      res = node;
    }
  });
  return res;
}

/**
 * execute a function for the given element and for each parent, until a stopElement is reached
 * @param {HTMLElement} startElement
 * @param {function} callback
 * @param {function} stopFunc - stop if returns true
 */
function executeForEachParent(startElement, callback, stopFunc) {
  try {
    callback(startElement);
    if (!stopFunc(startElement) && startElement.parentElement) {
      executeForEachParent(startElement.parentElement, callback, stopFunc);
    }
  } catch (e) {
    // avoid minor dom browsing error to stop ad impression
  }
}

/**
 * execute a function for the given element and for each parent,
 * recursively as long as the current element IS THE ONLY CHILD
 * until a stopElement is reached
 * @param {HTMLElement} startElement
 * @param {function} callback
 * @param {HTMLElement} stopElement
 */
function executeForEachWrapper(startElement, callback, stopElement) {
  try {
    callback(startElement);
    if (startElement !== stopElement && startElement.parentElement && startElement.parentElement.childElementCount === 1) {
      executeForEachWrapper(startElement.parentElement, callback, stopElement);
    }
  } catch (e) {
    // avoid minor dom browsing error to stop ad impression
  }
}
function executeUntilTopMostWindow(callback) {
  var topWindow = window;
  try {
    callback(topWindow);
    // Trying to access the document of the parent
    while (topWindow.parent !== topWindow && topWindow.parent.document.location.href.toString()) {
      topWindow = topWindow.parent;
      callback(topWindow);
    }
    // eslint-disable-next-line
  } catch (e) {} // If there is a secured iframe, topWindow.parent will throw an error
}

function getTopMostWindow() {
  var topWindow = window;
  executeUntilTopMostWindow(function (currentWindow) {
    topWindow = currentWindow;
  });
  return topWindow;
}
var getSafeFrameEXT = function getSafeFrameEXT() {
  var sfEXT;
  executeUntilTopMostWindow(function (currentWindow) {
    if (!sfEXT) {
      var _currentWindow$$sf;
      sfEXT = currentWindow.sfAPI || ((_currentWindow$$sf = currentWindow.$sf) === null || _currentWindow$$sf === void 0 ? void 0 : _currentWindow$$sf.ext);
    }
  });
  return sfEXT;
};
var InIframe = function InIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};
var InSecuredIframe = function InSecuredIframe() {
  try {
    return InIframe() && typeof window.top.document.location.href.toString() !== 'string';
  } catch (e) {
    return true;
  }
};

// Method used to find the consent method referencing to the consentType where it's possible to find it
function searchConsentMethod(consentType) {
  var consentMethod;
  if (InIframe()) {
    // In case we are inside an iframe
    if (InSecuredIframe()) {
      // Which is sandboxed
      var safeFrameExt = getSafeFrameEXT();
      if (safeFrameExt) {
        // In case of a SafeFrame, we look for the method inside of it
        // We must look for the proxy methods as specified in the specifications
        switch (consentType) {
          case 'cmp':
            /**
               * On safeframes, the cmp must be defined inside of the ext object.
               * Since the safeframe already handles a callback mecanism, the cmp uses it.
               */
            if (safeFrameExt.cmp) {
              consentMethod = function consentMethod(command, parameter, callback) {
                safeFrameExt.register(300, 250, function (msgName, data) {
                  if (msgName === 'cmpReturn') {
                    callback(data, data.success);
                  }
                });
                safeFrameExt.cmp(command);
              };
            }
            break;
          case 'uspapi':
            // With the uspapi, a proxy method must be available from the safeframe
            consentMethod = window.__uspapi;
            break;
          case 'tcfapi':
            // No specification for this case, we try to read the same way as uspapi
            consentMethod = window.__tcfapi;
            break;
          default:
            break;
        }

        // If a consent method was found, we return it
        if (consentMethod) {
          return consentMethod;
        }
      }

      // If we are in a sandboxed iframe or in a safeframe without the consent proxy, we look for the postmessage way
      executeUntilTopMostWindow(function (inputWindow) {
        // We look for a frame whom to postmessage to
        var locatorFrame;
        var loopWindow = inputWindow;
        try {
          loopWindow = loopWindow.parent;
          locatorFrame = loopWindow.frames["__".concat(consentType, "Locator")];
        } catch (e) /* eslint-disable no-empty */{} /* eslint-enable no-empty */

        if (!consentMethod && locatorFrame) {
          var consentFrame = loopWindow;

          // Since we found a postmessage possibility, we create a method to handle the send/receive
          consentMethod = function consentMethod(command, parameter, callback) {
            var callId = "".concat(Math.random());
            var consentMessage = _defineProperty({}, "__".concat(consentType, "Call"), {
              command: command,
              parameter: parameter,
              callId: callId
            });

            // We send the correct message to the frame
            consentFrame.postMessage(consentMessage, '*');

            // We wait for a response and trigger our callback accordingly
            window.addEventListener('message', function (event) {
              var datatObject;
              try {
                datatObject = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
              } catch (err) {
                // we may be called on postMessage without valid JSON data
              }
              if (_typeof(datatObject) === 'object') {
                var consentReturn = datatObject["__".concat(consentType, "Return")];
                if (consentReturn && callId === consentReturn.callId) {
                  callback(consentReturn.returnValue, consentReturn.success);
                }
              }
            });
          };
        }
      });
    } else {
      // If not inside a sandboxed iframe
      executeUntilTopMostWindow(function (window) {
        // We look for the consent method inside of the window
        consentMethod = consentMethod || window["__".concat(consentType)];
      });
    }
  } else {
    // If not inside an iframe
    consentMethod = window["__".concat(consentType)];
  }
  return consentMethod;
}
function readConsent(callback, retried) {
  var tcf = searchConsentMethod('tcfapi');
  var cmp = searchConsentMethod('cmp');
  var usp = searchConsentMethod('uspapi');

  // Object to store all the consent datas that we may receive
  var consentData = {};
  if (!tcf && !cmp && !usp && !retried) {
    setTimeout(function () {
      readConsent(callback, true);
    }, 500);
    return;
  }
  if (tcf || cmp || usp) {
    var tcfReady = false;
    var cmpReady = false;
    var uspReady = false;
    var consentSent = false;
    var sendConsent = function sendConsent() {
      var isReady = !consentSent && (tcf && tcfReady || !tcf) && (cmp && cmpReady || !cmp) && (usp && uspReady || !usp);
      if (isReady) {
        consentSent = true;
        callback(consentData);
      }
    };
    setTimeout(function () {
      // On timeout, we force the ready states
      cmpReady = true;
      uspReady = true;
      tcfReady = true;
      sendConsent();
    }, 500);
    if (tcf) {
      // Handles TCF V2
      consentData.gdpr = true;
      consentData.gdpr_consent = false;
      tcf('getTCData', 2, function (tcfData) {
        // ignore call if tcfData is not set
        if (!tcfData) {
          return;
        }
        consentData.gdpr = typeof tcfData.gdprApplies === 'boolean' ? tcfData.gdprApplies : null;
        consentData.gdpr_consent_string = tcfData.tcString;
        delete consentData.gdpr_consent;
        tcfReady = true;
        sendConsent();
      });
    }
    if (cmp) {
      // Handles V1.1 cmp
      consentData.gdpr = true;
      consentData.gdpr_consent = false;
      cmp('getConsentData', null, function (input) {
        var cmpData = input;
        // ignore call if cmpData is not set
        if (!cmpData) {
          return;
        }
        cmpData = cmpData.VendorConsentData || cmpData;
        consentData.gdpr = typeof cmpData.gdprApplies === 'boolean' ? cmpData.gdprApplies : null;
        consentData.gdpr_consent_string = cmpData.consentData;
        delete consentData.gdpr_consent;
        cmpReady = true;
        sendConsent();
      });
    }
    if (usp) {
      usp('getUSPData', null, function (input, success) {
        var uspData = input;
        if (success && uspData) {
          uspData = uspData.VendorConsentData || uspData;
          consentData.usp_consent_string = uspData.uspString;
        }
        uspReady = true;
        sendConsent();
      });
    }
  } else {
    callback(consentData);
  }
}

/***/ }),

/***/ "./src/toolsretail.js":
/*!****************************!*\
  !*** ./src/toolsretail.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "containPrice": () => (/* binding */ containPrice),
/* harmony export */   "finditemList": () => (/* binding */ finditemList)
/* harmony export */ });
/* harmony import */ var _src_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/log */ "./src/log.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


// '%' to handle discount display too
var currencySymbols = ['€', '$', '£', '%'];
var currencyRegExp = new RegExp(currencySymbols.map(function (c) {
  return "\\".concat(c);
}).join('|'));

// save returned values to avoid seeking them twice
var savedItemList = null;
function containPrice(text) {
  return currencyRegExp.test(text);
}
function canBeAnItem(element, sibWidth, sibHeight) {
  // look for a valid DIV or LI element
  if (!element || element.nodeName !== 'A' && element.nodeName !== 'DIV' && element.nodeName !== 'LI' && element.nodeName !== 'ARTICLE') {
    return false;
  }
  var width = 0;
  var height = 0;
  var top = 0;

  // with same size as its siblings
  try {
    var style = getComputedStyle(element);
    width = Math.floor(parseInt(style.width, 10));
    height = Math.floor(parseInt(style.height, 10));
    top = Math.floor(element.offsetTop);

    // some items can have a few pixel different size (allow less than 10px dif)
    // allow different height
    if (sibWidth && Math.abs(width - sibWidth) > 10 && sibHeight && Math.abs(height - sibHeight) > 10) {
      return false;
    }
  } catch (err) {
    return false;
  }
  return {
    valid: containPrice(element.innerText),
    // find one of the currency symboles in innerText
    width: width,
    height: height,
    top: top
  };
}

/**
   * Tool for retail website
   * find the item list in the page
   * returns the direct parent div
   *
   * @param {HTMLElement} current
   * @param {HTMLElement} best
   * @returns
   */
function finditemList(insideElement) {
  // if findItemList has already been run on the whole page, return previous result
  if (!savedItemList || insideElement) {
    // list all possible parents ( divs, uls and sections)
    var currentCandidates = insideElement ? [insideElement] // dont look in whole page if target is given
    : [].concat(_toConsumableArray(document.getElementsByTagName('DIV')), _toConsumableArray(document.getElementsByTagName('UL')), _toConsumableArray(document.getElementsByTagName('SECTION')));
    var gridProfile = null;
    var currentCandidate = null;
    if (currentCandidates.length > 0) {
      // filter from the initial list according to several constraints
      currentCandidate = currentCandidates.find(function (candidate) {
        // don't dig into element with less than 4 children, or absolute/fixed elements
        if (candidate.childElementCount <= 4 || candidate.style.position === 'absolute' || candidate.style.position === 'fixed' || candidate.style.display === 'none' || candidate.offsetParent === null) return false;

        // can parent still be a sold items list ?
        var stillGood = 0;

        // keep track of grid information
        var currentGridProfile = [[]];
        var currentLineProfile = currentGridProfile[0];
        var lastWidth = 0;
        var lastHeight = 0;
        var child = candidate.firstElementChild;
        var lastTop = child.offsetTop;
        while (child && stillGood < 4 && stillGood >= 0 && child) {
          var childData = canBeAnItem(child, lastWidth, lastHeight);
          if (childData !== null && childData !== void 0 && childData.valid) {
            lastWidth = childData.width;
            lastHeight = childData.height;
            if (lastTop !== childData.top) {
              // new line !
              currentLineProfile = [];
              currentGridProfile.push(currentLineProfile);
              lastTop = childData.top;
            }
            currentLineProfile.push(childData);
            child = child.nextElementSibling;
            stillGood += 1;
          } else {
            stillGood = -1;
          }
        }
        gridProfile = currentGridProfile;
        return stillGood === 4;
      });
    }
    var itemList = currentCandidate;
    (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVEL.DEBUG, 'Retail tools, Found item grid: ', itemList);
    (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVEL.DEBUG, 'Grid: ', gridProfile);
    savedItemList = {
      itemList: itemList,
      gridProfile: gridProfile
    };
  }
  return savedItemList;
}

/***/ }),

/***/ "./src/vpaid/display/displaywrapper.js":
/*!*********************************************!*\
  !*** ./src/vpaid/display/displaywrapper.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayWrapper": () => (/* binding */ DisplayWrapper)
/* harmony export */ });
/* harmony import */ var _vpaidwrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vpaidwrapper */ "./src/vpaid/vpaidwrapper.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/vpaid/display/icons.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * plug the VASTTracker using a VPAID interface wrapper
 * */
var DisplayWrapper = /*#__PURE__*/function (_VPAIDWrapper) {
  _inherits(DisplayWrapper, _VPAIDWrapper);
  var _super = _createSuper(DisplayWrapper);
  /**
   * @param { VPAIDBase } vpaidCreative
   * @param { HTMLVideoElement } video
   * @param { HTMLElement } adContainer
   * @param { VASTTracker } tracker
   */
  function DisplayWrapper(vpaidCreative, video, adContainer, config) {
    var _this;
    _classCallCheck(this, DisplayWrapper);
    _this = _super.call(this, vpaidCreative, video, adContainer, config);
    _this.id = 'DisplayWrapper';
    _this.config = config;
    _this.currentVolume = 0;
    return _this;
  }
  _createClass(DisplayWrapper, [{
    key: "onAdLoaded",
    value: function onAdLoaded() {
      _get(_getPrototypeOf(DisplayWrapper.prototype), "onAdLoaded", this).call(this);
      var iconSize = 18; // should be 24
      if (this.playerWidth) {
        iconSize = Math.min(18, Math.min(32, this.playerWidth / 10));
      }
      if (this.config.closeButton) {
        // add Close icon
        var close = (0,_icons__WEBPACK_IMPORTED_MODULE_1__.getIcon)(_icons__WEBPACK_IMPORTED_MODULE_1__.ICON.CLOSE, iconSize, iconSize);
        close.onclick = this.handleClose.bind(this);
        close.style.position = 'absolute';
        close.style.right = '8px';
        close.style.top = '8px';
        close.style.cursor = 'pointer';
        this.adContainer.appendChild(close);
      }
      if (this.config.soundButton) {
        // add sound button, keep a reference on it to change the icon on volume change
        this.soundon = (0,_icons__WEBPACK_IMPORTED_MODULE_1__.getIcon)(_icons__WEBPACK_IMPORTED_MODULE_1__.ICON.SOUND_ON, iconSize, iconSize);
        this.soundon.onclick = this.handleToggleAdVolume.bind(this);
        this.soundon.style.position = 'absolute';
        this.soundon.style.right = '8px';
        this.soundon.style.bottom = '8px';
        this.soundon.style.cursor = 'pointer';
        this.soundon.style.display = 'none';
        this.soundon.style.lineHeight = '0px';
        this.soundon.style.backgroundColor = 'rgb(0 0 0 / 30%)';
        this.soundon.style.borderRadius = '50px';
        this.soundon.style.padding = '4px';
        this.adContainer.appendChild(this.soundon);
        this.soundoff = (0,_icons__WEBPACK_IMPORTED_MODULE_1__.getIcon)(_icons__WEBPACK_IMPORTED_MODULE_1__.ICON.SOUND_OFF, iconSize, iconSize);
        this.soundoff.onclick = this.handleToggleAdVolume.bind(this);
        this.soundoff.style.position = 'absolute';
        this.soundoff.style.right = '8px';
        this.soundoff.style.bottom = '8px';
        this.soundoff.style.cursor = 'pointer';
        this.soundoff.style.display = 'visible';
        this.soundoff.style.lineHeight = '0px';
        this.soundoff.style.backgroundColor = 'rgb(0 0 0 / 30%)';
        this.soundoff.style.borderRadius = '50px';
        this.soundoff.style.padding = '4px';
        this.adContainer.appendChild(this.soundoff);
      }
    }
  }, {
    key: "onAdStarted",
    value: function onAdStarted() {
      _get(_getPrototypeOf(DisplayWrapper.prototype), "onAdStarted", this).call(this);
      _get(_getPrototypeOf(DisplayWrapper.prototype), "setAdVolume", this).call(this, 0);
    }
  }, {
    key: "stopAd",
    value: function stopAd() {
      _get(_getPrototypeOf(DisplayWrapper.prototype), "stopAd", this).call(this);
    }
  }, {
    key: "handleClose",
    value: function handleClose(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      event.stopPropagation();
      this.stopAd();
    }
  }, {
    key: "handleToggleAdVolume",
    value: function handleToggleAdVolume(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      event.stopPropagation();
      var currentVol = this.getAdVolume();
      if (currentVol === 0) {
        this.soundon.style.display = '';
        this.soundoff.style.display = 'none';
        currentVol = 1;
      } else {
        this.soundon.style.display = 'none';
        this.soundoff.style.display = '';
        currentVol = 0;
      }
      _get(_getPrototypeOf(DisplayWrapper.prototype), "setAdVolume", this).call(this, currentVol);
    }
  }]);
  return DisplayWrapper;
}(_vpaidwrapper__WEBPACK_IMPORTED_MODULE_0__.VPAIDWrapper);

/***/ }),

/***/ "./src/vpaid/display/icons.js":
/*!************************************!*\
  !*** ./src/vpaid/display/icons.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICON": () => (/* binding */ ICON),
/* harmony export */   "getIcon": () => (/* binding */ getIcon)
/* harmony export */ });
/* eslint-disable max-len */
var ICON = {
  CLOSE: '<svg xmlns="http://www.w3.org/2000/svg" height="{{HEIGHT}}px" viewBox="0 0 24 24" width="{{WIDTH}}px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
  SOUND_OFF: '<svg xmlns="http://www.w3.org/2000/svg" height="{{HEIGHT}}px" viewBox="0 0 24 24" width="{{WIDTH}}px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>',
  SOUND_ON: '<svg xmlns="http://www.w3.org/2000/svg" height="{{HEIGHT}}px" viewBox="0 0 24 24" width="{{WIDTH}}px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>'
};
/* eslint-enable max-len */

function getIcon(svg, width, height) {
  var d = document.createElement('div');
  d.innerHTML = svg.replace('{{HEIGHT}}', height || 48).replace('{{WIDTH}}', width || 48);
  return d;
}

/***/ }),

/***/ "./src/vpaid/format/formatbase.js":
/*!****************************************!*\
  !*** ./src/vpaid/format/formatbase.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdFormat": () => (/* binding */ AdFormat)
/* harmony export */ });
/* harmony import */ var _vpaid_vpaidwrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vpaid/vpaidwrapper */ "./src/vpaid/vpaidwrapper.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AdFormat = /*#__PURE__*/function (_VPAIDWrapper) {
  _inherits(AdFormat, _VPAIDWrapper);
  var _super = _createSuper(AdFormat);
  /**
   * @param { object } vpaidCreative
   * @param { HTMLVideoElement } videoElement
   * @param { HTMLDivElement } adContainer
   */
  function AdFormat(vpaidCreative, videoElement, adContainer, config) {
    var _this;
    _classCallCheck(this, AdFormat);
    _this = _super.call(this, vpaidCreative, videoElement, adContainer);
    _this.id = 'AdFormat';
    _this.config = config;
    _this.video = videoElement;
    _this.adContainer = adContainer;

    // position the adContainer above the video
    _this.playerDiv = document.createElement('div');
    _this.playerDiv.setAttribute('id', 'rsplayer');
    _this.playerDiv.style.position = 'relative';
    _this.video.volume = 0;
    _this.video.style.width = '100%';
    _this.video.style.height = '100%';
    _this.video.style.position = 'absolute';
    _this.video.style.top = '0px';
    _this.video.style.left = '0px';
    _this.video.style.backgroundColor = config.bgColor || 'black';
    _this.adContainer.style.width = '100%';
    _this.adContainer.style.height = '100%';
    _this.adContainer.style.position = 'absolute';
    _this.adContainer.style.top = '0px';
    _this.adContainer.style.left = '0px';
    _this.playerDiv.appendChild(_this.video);
    _this.playerDiv.appendChild(_this.adContainer);
    window.setTimeout(function () {
      _this.insertPlayer(config.CSSSelector);
    }, 0);
    return _this;
  }
  _createClass(AdFormat, [{
    key: "insertPlayer",
    value: function insertPlayer(selector) {
      var target = window.document.querySelector(selector);
      if (target) {
        // add the player div to the page
        target.appendChild(this.playerDiv);
      }
    }
  }, {
    key: "initAd",
    value: function initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
      if (width) this.playerDiv.style.width = "".concat(width, "px");
      if (height) this.playerDiv.style.height = "".concat(height, "px");
      _get(_getPrototypeOf(AdFormat.prototype), "initAd", this).call(this);
    }
  }, {
    key: "resizeAd",
    value: function resizeAd(width, height, mode) {
      this.playerDiv.style.width = "".concat(width, "px");
      this.playerDiv.style.height = "".concat(height, "px");
      _get(_getPrototypeOf(AdFormat.prototype), "resizeAd", this).call(this, width, height, mode);
    }
  }, {
    key: "onAdLoaded",
    value: function onAdLoaded() {
      _get(_getPrototypeOf(AdFormat.prototype), "onAdLoaded", this).call(this);
      this.startAd();
    }
  }]);
  return AdFormat;
}(_vpaid_vpaidwrapper__WEBPACK_IMPORTED_MODULE_0__.VPAIDWrapper);

/***/ }),

/***/ "./src/vpaid/format/formatfactory.js":
/*!*******************************************!*\
  !*** ./src/vpaid/format/formatfactory.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultConfig": () => (/* binding */ getDefaultConfig),
/* harmony export */   "getFormat": () => (/* binding */ getFormat)
/* harmony export */ });
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/constants */ "./src/constants.js");
/* harmony import */ var _intext_intextformat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intext/intextformat */ "./src/vpaid/format/intext/intextformat.js");
/* harmony import */ var _sliderformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sliderformat */ "./src/vpaid/format/sliderformat.js");
/* harmony import */ var _formatbase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatbase */ "./src/vpaid/format/formatbase.js");
/* harmony import */ var _ingrid_ingridformat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ingrid/ingridformat */ "./src/vpaid/format/ingrid/ingridformat.js");
/* harmony import */ var _ingrid_ingridnative__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingrid/ingridnative */ "./src/vpaid/format/ingrid/ingridnative.js");






function getFormat() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _src_constants__WEBPACK_IMPORTED_MODULE_0__.FORMAT.AUTO;
  var mediatype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _src_constants__WEBPACK_IMPORTED_MODULE_0__.MEDIATYPE.VIDEO;
  switch (key) {
    case _src_constants__WEBPACK_IMPORTED_MODULE_0__.FORMAT.SLIDER:
      return _sliderformat__WEBPACK_IMPORTED_MODULE_2__.SliderFormat;
    case _src_constants__WEBPACK_IMPORTED_MODULE_0__.FORMAT.INTEXT:
      return _intext_intextformat__WEBPACK_IMPORTED_MODULE_1__.IntextFormat;
    case _src_constants__WEBPACK_IMPORTED_MODULE_0__.FORMAT.INGRID:
      return mediatype === _src_constants__WEBPACK_IMPORTED_MODULE_0__.MEDIATYPE.NATIVE ? _ingrid_ingridnative__WEBPACK_IMPORTED_MODULE_5__.IngridNative : _ingrid_ingridformat__WEBPACK_IMPORTED_MODULE_4__.IngridFormat;
    default:
      return _formatbase__WEBPACK_IMPORTED_MODULE_3__.AdFormat;
  }
}
function getDefaultConfig() {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _src_constants__WEBPACK_IMPORTED_MODULE_0__.FORMAT.AUTO;
  var mediatype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _src_constants__WEBPACK_IMPORTED_MODULE_0__.MEDIATYPE.VIDEO;
  if (format === _src_constants__WEBPACK_IMPORTED_MODULE_0__.FORMAT.INGRID) {
    if (mediatype === _src_constants__WEBPACK_IMPORTED_MODULE_0__.MEDIATYPE.NATIVE) {
      return _src_constants__WEBPACK_IMPORTED_MODULE_0__.INGRID_NATIVE_DEFAULT_CONFIG;
    } else {
      return _src_constants__WEBPACK_IMPORTED_MODULE_0__.INGRID_DEFAULT_CONFIG;
    }
  }
  return _src_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONFIG;
}

/***/ }),

/***/ "./src/vpaid/format/ingrid/ingridformat.js":
/*!*************************************************!*\
  !*** ./src/vpaid/format/ingrid/ingridformat.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngridFormat": () => (/* binding */ IngridFormat)
/* harmony export */ });
/* harmony import */ var _native_nativeadtools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @native/nativeadtools */ "./src/native/nativeadtools.js");
/* harmony import */ var _src_toolsretail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/toolsretail */ "./src/toolsretail.js");
/* harmony import */ var _src_toolsbrowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/toolsbrowser */ "./src/toolsbrowser.js");
/* harmony import */ var _src_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/log */ "./src/log.js");
/* harmony import */ var _formatbase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../formatbase */ "./src/vpaid/format/formatbase.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var IngridFormat = /*#__PURE__*/function (_AdFormat) {
  _inherits(IngridFormat, _AdFormat);
  var _super = _createSuper(IngridFormat);
  /**
   * @param { object } vpaidCreative
   * @param { HTMLVideoElement } videoElement
   * @param { HTMLDivElement } adContainer
   */
  function IngridFormat(vpaidCreative, videoElement, adContainer, config) {
    var _this;
    _classCallCheck(this, IngridFormat);
    _this = _super.call(this, vpaidCreative, videoElement, adContainer, config);
    _this.id = 'IngridFormat';
    _this.speed = 0.7;

    // position the adContainer inside an div
    _this.animatedDiv = document.createElement('div');
    _this.animatedDiv.style.overflow = 'hidden';
    _this.animatedDiv.style.height = '100%';
    _this.animatedDiv.style.width = '0px';
    _this.animatedDiv.style.transition = "width ease ".concat(_this.speed, "s");
    _this.waitToStart = false;
    _this.adLoaded = false;
    return _this;
  }
  _createClass(IngridFormat, [{
    key: "callStart",
    value: function callStart(mainElement, itemList, gridProfile) {
      this.placeholder = (0,_native_nativeadtools__WEBPACK_IMPORTED_MODULE_0__.createNativeContainer)(mainElement, itemList, gridProfile, this.config.ingridSize);

      // set new fix size container height
      var size = (0,_src_toolsbrowser__WEBPACK_IMPORTED_MODULE_2__.getInnerSize)(this.placeholder.container);
      this.resizeAd(size.width, size.height, 'normal');
      this.placeholder.container.style.minHeight = "".concat(size.height, "px");

      // Replace placeholder element
      this.placeholder.container.replaceChildren(this.animatedDiv);
      this.placeholder.applyValues(); // hide text element (here we could provide native video json information)

      // add the player div to the page in animated container
      this.playerDiv.style.margin = 'auto';
      this.animatedDiv.appendChild(this.playerDiv);
      this.startAd();
    }

    /** insert the player div in the dom tree using ingrid autoposition
     */
  }, {
    key: "insertPlayer",
    value: function insertPlayer(selector) {
      var _this2 = this;
      var grid = window.document.querySelector(selector);
      var _finditemList = (0,_src_toolsretail__WEBPACK_IMPORTED_MODULE_1__.finditemList)(grid),
        itemList = _finditemList.itemList,
        gridProfile = _finditemList.gridProfile;
      if (itemList) {
        (0,_src_toolsbrowser__WEBPACK_IMPORTED_MODULE_2__.onScrollStop)(function () {
          var arrayFirstElements = itemList; // full item list
          var nOfCol = gridProfile[0].length;
          var alignedIndex = 1; // default is left
          if (_this2.config.align === 'right') {
            alignedIndex = nOfCol - 2;
          } else if (_this2.config.align === 'center') {
            alignedIndex = Math.floor((nOfCol - 1) / 2);
          }
          if (nOfCol > 1) {
            arrayFirstElements = Array.from(itemList.children).filter(function (itm, index) {
              return index % nOfCol === alignedIndex;
            });
          }
          var mainElement = (0,_src_toolsbrowser__WEBPACK_IMPORTED_MODULE_2__.closestToMiddle)(arrayFirstElements);
          _this2.itemList = itemList;
          _this2.gridProfile = gridProfile;
          _this2.callStart(mainElement, itemList, gridProfile);
        });
      } else {
        (0,_src_log__WEBPACK_IMPORTED_MODULE_3__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_3__.LOG_LEVEL.DEBUG, 'Cannot find retail item grid.');
      }
    }
  }, {
    key: "initAd",
    value: function initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
      _get(_getPrototypeOf(IngridFormat.prototype), "initAd", this).call(this, width, height, viewMode, desiredBitrate, creativeData, environmentVars);
    }
  }, {
    key: "onAdLoaded",
    value: function onAdLoaded() {
      this.adLoaded = true;
      _get(_getPrototypeOf(IngridFormat.prototype), "onAdLoaded", this).call(this);
    }
  }, {
    key: "startAd",
    value: function startAd() {
      if (this.adLoaded) {
        _get(_getPrototypeOf(IngridFormat.prototype), "startAd", this).call(this);
      } else {
        this.waitToStart = true;
      }
    }
  }, {
    key: "onAdStarted",
    value: function onAdStarted() {
      _get(_getPrototypeOf(IngridFormat.prototype), "onAdStarted", this).call(this);
      this.open();
    }
  }, {
    key: "open",
    value: function open() {
      this.animatedDiv.style.width = this.playerDiv.style.width;
    }
  }, {
    key: "close",
    value: function close() {
      var _this3 = this;
      this.animatedDiv.style.width = '0px';
      window.setTimeout(function () {
        var _this3$placeholder$co;
        if ((_this3$placeholder$co = _this3.placeholder.container) !== null && _this3$placeholder$co !== void 0 && _this3$placeholder$co.parentElement) {
          (0,_native_nativeadtools__WEBPACK_IMPORTED_MODULE_0__.remoteNativeContainer)(_this3.placeholder.container, _this3.itemList, _this3.gridProfile);
        }
      }, 1000 * this.speed);
    }
  }, {
    key: "onAdStopped",
    value: function onAdStopped() {
      _get(_getPrototypeOf(IngridFormat.prototype), "onAdStopped", this).call(this);
      this.close();
    }
  }, {
    key: "onAdVideoComplete",
    value: function onAdVideoComplete() {
      _get(_getPrototypeOf(IngridFormat.prototype), "onAdVideoComplete", this).call(this);
      this.close();
    }
  }]);
  return IngridFormat;
}(_formatbase__WEBPACK_IMPORTED_MODULE_4__.AdFormat);

/***/ }),

/***/ "./src/vpaid/format/ingrid/ingridnative.js":
/*!*************************************************!*\
  !*** ./src/vpaid/format/ingrid/ingridnative.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngridNative": () => (/* binding */ IngridNative)
/* harmony export */ });
/* harmony import */ var _native_nativeadtools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../native/nativeadtools */ "./src/native/nativeadtools.js");
/* harmony import */ var _toolsbrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../toolsbrowser */ "./src/toolsbrowser.js");
/* harmony import */ var _ingridformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingridformat */ "./src/vpaid/format/ingrid/ingridformat.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var IngridNative = /*#__PURE__*/function (_IngridFormat) {
  _inherits(IngridNative, _IngridFormat);
  var _super = _createSuper(IngridNative);
  /**
   * @param { object } vpaidCreative
   * @param { HTMLVideoElement } videoElement
   * @param { HTMLDivElement } adContainer
   */
  function IngridNative(vpaidCreative, videoElement, adContainer, config) {
    var _this;
    _classCallCheck(this, IngridNative);
    _this = _super.call(this, vpaidCreative, videoElement, adContainer, _objectSpread(_objectSpread({}, config), {}, {
      bgColor: 'transparent'
    }));
    _this.id = 'IngridNativeFormat';
    return _this;
  }
  _createClass(IngridNative, [{
    key: "callStart",
    value: function callStart(mainElement, itemList, gridProfile) {
      var _this2 = this;
      this.placeholder = (0,_native_nativeadtools__WEBPACK_IMPORTED_MODULE_0__.createNativeContainer)(mainElement, itemList, gridProfile, this.config.ingridSize);

      // set new fix size container height
      var size = (0,_toolsbrowser__WEBPACK_IMPORTED_MODULE_1__.getInnerSize)(this.placeholder.container);
      this.resizeAd(size.width, size.height, 'normal');
      this.placeholder.container.style.minHeight = "".concat(size.height, "px");

      // show ad inside the native placeholder element
      this.placeholder.insertNativeAd({
        title: 'Galaxy Z Flip 5G',
        price: '999 €',
        desc: 'The shape of the future. Le Z FLip4 512Go au prix du 256Go !\nCoque au choix offerte',
        ctatext: 'En savoir plus',
        domain: 'Samsung',
        image: {
          url: 'https://imgart.casino.fr/imageserver/MC2/8/196608_M1_T1.jpg'
        },
        brandLogo: {
          url: null
        }
      });
      this.placeholder.onclick = function (e) {
        _this2.getInnerCreative().onAdClickThru();
      };

      // add the player div to the page
      this.placeholder.replaceImg(this.playerDiv, this.config.expandImage);
      var adContRect = (0,_toolsbrowser__WEBPACK_IMPORTED_MODULE_1__.getRelativeBoundingRect)(this.playerDiv, this.placeholder.container);
      this.placeholder.addOverlayElement(this.adContainer, adContRect);
      this.playerDiv.style.margin = 'auto';
      this.startAd();
    }
  }]);
  return IngridNative;
}(_ingridformat__WEBPACK_IMPORTED_MODULE_2__.IngridFormat);

/***/ }),

/***/ "./src/vpaid/format/intext/intextformat.js":
/*!*************************************************!*\
  !*** ./src/vpaid/format/intext/intextformat.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntextFormat": () => (/* binding */ IntextFormat)
/* harmony export */ });
/* harmony import */ var _src_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/log */ "./src/log.js");
/* harmony import */ var _positiontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positiontext */ "./src/vpaid/format/intext/positiontext.js");
/* harmony import */ var _formatbase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formatbase */ "./src/vpaid/format/formatbase.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var IntextFormat = /*#__PURE__*/function (_AdFormat) {
  _inherits(IntextFormat, _AdFormat);
  var _super = _createSuper(IntextFormat);
  /**
   * @param { object } vpaidCreative
   * @param { HTMLVideoElement } videoElement
   * @param { HTMLDivElement } adContainer
   */
  function IntextFormat(vpaidCreative, videoElement, adContainer, config) {
    var _this;
    _classCallCheck(this, IntextFormat);
    _this = _super.call(this, vpaidCreative, videoElement, adContainer, config);
    _this.id = 'IntextFormat';
    _this.speed = 0.7;

    // position the adContainer inside an div with animated height
    _this.animatedDiv = document.createElement('div');
    _this.animatedDiv.style.overflow = 'hidden';
    _this.animatedDiv.style.height = '0px';
    _this.animatedDiv.style.width = '100%';
    _this.animatedDiv.style.transition = "height ease ".concat(_this.speed, "s");
    _this.waitToStart = false;
    _this.adLoaded = false;
    return _this;
  }

  /** insert the player div in the do tree
   *  in case no target is found, start the autopositioning promise and delay the startAd call.
   */
  _createClass(IntextFormat, [{
    key: "insertPlayer",
    value: function insertPlayer(selector) {
      var _this2 = this;
      var callStart = function callStart(tDiv) {
        // add the player div to the page
        _this2.playerDiv.style.margin = 'auto';
        _this2.animatedDiv.appendChild(_this2.playerDiv);
        tDiv.appendChild(_this2.animatedDiv);
        _this2.startAd();
      };
      var target = window.document.querySelector(selector);
      if (target) {
        callStart(target);
      } else {
        (0,_positiontext__WEBPACK_IMPORTED_MODULE_1__.autoPositioning)().then(function (res) {
          (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVEL.DEBUG, 'Autopositioning : ', res);
          callStart(res);
        })["catch"](function (e) {
          (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVEL.DEBUG, e.message);
        });
      }
    }
  }, {
    key: "initAd",
    value: function initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
      _get(_getPrototypeOf(IntextFormat.prototype), "initAd", this).call(this, width, height, viewMode, desiredBitrate, creativeData, environmentVars);
    }
  }, {
    key: "onAdLoaded",
    value: function onAdLoaded() {
      this.adLoaded = true;
      _get(_getPrototypeOf(IntextFormat.prototype), "onAdLoaded", this).call(this);
    }
  }, {
    key: "startAd",
    value: function startAd() {
      if (this.animatedDiv.parentElement && this.adLoaded) {
        _get(_getPrototypeOf(IntextFormat.prototype), "startAd", this).call(this);
      } else {
        this.waitToStart = true;
      }
    }
  }, {
    key: "onAdStarted",
    value: function onAdStarted() {
      _get(_getPrototypeOf(IntextFormat.prototype), "onAdStarted", this).call(this);
      this.open();
    }
  }, {
    key: "open",
    value: function open() {
      this.animatedDiv.style.height = this.playerDiv.style.height;
    }
  }, {
    key: "close",
    value: function close() {
      var _this3 = this;
      this.animatedDiv.style.height = '0px';
      window.setTimeout(function () {
        if (_this3.animatedDiv.parentElement) {
          _this3.animatedDiv.parentElement.removeChild(_this3.animatedDiv);
        }
      }, 1000 * this.speed);
    }
  }, {
    key: "onAdStopped",
    value: function onAdStopped() {
      _get(_getPrototypeOf(IntextFormat.prototype), "onAdStopped", this).call(this);
      this.close();
    }
  }, {
    key: "onAdVideoComplete",
    value: function onAdVideoComplete() {
      _get(_getPrototypeOf(IntextFormat.prototype), "onAdVideoComplete", this).call(this);
      this.close();
    }
  }]);
  return IntextFormat;
}(_formatbase__WEBPACK_IMPORTED_MODULE_2__.AdFormat);

/***/ }),

/***/ "./src/vpaid/format/intext/positiontext.js":
/*!*************************************************!*\
  !*** ./src/vpaid/format/intext/positiontext.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "autoPositioning": () => (/* binding */ autoPositioning)
/* harmony export */ });
/* harmony import */ var _src_toolsbrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/toolsbrowser */ "./src/toolsbrowser.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 *  functions to find a target element inside the page.
 *  We are looking for a list of divs with a similar width above 50% of the page's width.
 *  Once this list is found, wait for the scroll to stop and start the ad on the most visible target
 * (bottom closest to the viewport center)
 */
function autoPositioning() {
  function getListInChildren(children, minWidth) {
    var currentArray = [];
    var currentWidth = -1;
    children.forEach(function (node) {
      var clientRect = node.getBoundingClientRect();
      if (clientRect && !['A'].includes(node.nodeName)) {
        // remove <a /> from possible targets
        var w = clientRect.width;
        var left = clientRect.x;
        var right = clientRect.x + clientRect.width;
        if (w > minWidth) {
          if (currentWidth === -1) {
            currentWidth = w;
          }
          if (w === currentWidth // we look for same width
          && left > -20 && right <= window.innerWidth + 20 // avoid elements outside the page
          && (0,_src_toolsbrowser__WEBPACK_IMPORTED_MODULE_0__.pageOffset)(node).bottom > window.innerHeight / 2) {
            // avoid elements in page header
            currentArray.push(node);
          }
        }
      }
    });
    return currentArray;
  }

  /**
   * returns a list of divs with same width,
   * bigger than 50% of window width and clientRect inside viewport width
   * looking in the whole current page
   */
  function lookforDivs(current, candidates) {
    var allCandidates = candidates;
    var widthThreeshold = parseInt(window.innerWidth, 10) / 2;
    var childrenArray = Array.from(current.children);
    var currentCandidates = getListInChildren(childrenArray, widthThreeshold);
    if (currentCandidates.length > 0) {
      var _allCandidates;
      // keep all the possible candidates
      (_allCandidates = allCandidates).push.apply(_allCandidates, _toConsumableArray(currentCandidates));
      childrenArray.forEach(function (node) {
        allCandidates = lookforDivs(node, allCandidates);
      });
    }
    return allCandidates;
  }
  return new Promise(function (resolve, reject) {
    var candidates = lookforDivs(window.document.body, []);
    if (candidates.length === 0) {
      reject(new Error('AutoPositioning: Target Not found.'));
    }
    (0,_src_toolsbrowser__WEBPACK_IMPORTED_MODULE_0__.onScrollStop)(function () {
      resolve((0,_src_toolsbrowser__WEBPACK_IMPORTED_MODULE_0__.closestToMiddle)(candidates));
    });
  });
}

/***/ }),

/***/ "./src/vpaid/format/sliderformat.js":
/*!******************************************!*\
  !*** ./src/vpaid/format/sliderformat.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderFormat": () => (/* binding */ SliderFormat)
/* harmony export */ });
/* harmony import */ var _formatbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatbase */ "./src/vpaid/format/formatbase.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SliderFormat = /*#__PURE__*/function (_AdFormat) {
  _inherits(SliderFormat, _AdFormat);
  var _super = _createSuper(SliderFormat);
  /**
   * @param { object } vpaidCreative
   * @param { HTMLVideoElement } videoElement
   * @param { HTMLDivElement } adContainer
   */
  function SliderFormat(vpaidCreative, videoElement, adContainer, config) {
    var _this;
    _classCallCheck(this, SliderFormat);
    _this = _super.call(this, vpaidCreative, videoElement, adContainer, config);
    _this.id = 'SliderFormat';
    _this.vmargin = typeof config.vmargin === 'number' ? config.vmargin : 30;
    _this.hmargin = typeof config.hmargin === 'number' ? config.hmargin : 30;
    _this.speed = 0.7;

    // position the adContainer outside the visible body
    _this.playerDiv.style.position = 'fixed';
    _this.playerDiv.style.zIndex = 1000000;
    _this.playerDiv.style.transition = "top ease ".concat(_this.speed, "s, left ease ").concat(_this.speed, "s, right ease ").concat(_this.speed, "s, bottom ease ").concat(_this.speed, "s");

    // create start and target position objects
    _this.setPositions(config);
    _this.applyPosition(_this.startPosition);
    return _this;
  }
  _createClass(SliderFormat, [{
    key: "insertPlayer",
    value: function insertPlayer(selector) {
      // ignore selector and insert in body
      window.document.body.appendChild(this.playerDiv);
    }
  }, {
    key: "setPositions",
    value: function setPositions(config) {
      var _config$align, _config$align2;
      var defaultAnim = 'right';
      if (this.vmargin < this.hmargin) defaultAnim = 'bottom';

      // default vertical align : bottom
      var top = window.innerHeight - config.height - this.vmargin;
      if (((_config$align = config.align) === null || _config$align === void 0 ? void 0 : _config$align.indexOf('top')) >= 0) {
        top = this.vmargin;
        if (this.vmargin < this.hmargin) defaultAnim = 'top';
      }

      // default horizontal align : right
      var left = window.innerWidth - config.width - this.hmargin;
      if (((_config$align2 = config.align) === null || _config$align2 === void 0 ? void 0 : _config$align2.indexOf('left')) >= 0) {
        left = this.hmargin;
        if (this.vmargin >= this.hmargin) defaultAnim = 'left';
      }
      this.targetPosition = {
        top: "".concat(top, "px"),
        left: "".concat(left, "px")
      };
      var animDirection = config.anim || defaultAnim;
      var animStart;
      switch (animDirection) {
        case 'top':
          animStart = {
            top: "".concat(-config.height, "px")
          };
          break;
        case 'left':
          animStart = {
            left: "".concat(-config.width, "px")
          };
          break;
        case 'bottom':
          animStart = {
            top: "".concat(parseInt(config.height, 10) + parseInt(window.innerHeight, 10), "px")
          };
          break;
        case 'right':
          animStart = {
            left: "".concat(parseInt(config.width, 10) + parseInt(window.innerWidth, 10), "px")
          };
          break;
        // no default
      }

      this.startPosition = _objectSpread(_objectSpread({}, this.targetPosition), animStart);
    }
  }, {
    key: "applyPosition",
    value: function applyPosition(style) {
      var _this2 = this;
      Object.keys(style).forEach(function (key) {
        _this2.playerDiv.style[key] = style[key];
      });
    }
  }, {
    key: "initAd",
    value: function initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
      _get(_getPrototypeOf(SliderFormat.prototype), "initAd", this).call(this, width, height, viewMode, desiredBitrate, creativeData, environmentVars);
    }
  }, {
    key: "onAdLoaded",
    value: function onAdLoaded() {
      _get(_getPrototypeOf(SliderFormat.prototype), "onAdLoaded", this).call(this);
      this.applyPosition(this.targetPosition);
    }
  }, {
    key: "close",
    value: function close() {
      var _this3 = this;
      this.applyPosition(this.startPosition);
      window.setTimeout(function () {
        window.document.body.removeChild(_this3.playerDiv);
      }, 1000 * this.speed);
    }
  }, {
    key: "onAdStopped",
    value: function onAdStopped() {
      _get(_getPrototypeOf(SliderFormat.prototype), "onAdStopped", this).call(this);
      this.close();
    }
  }, {
    key: "onAdVideoComplete",
    value: function onAdVideoComplete() {
      _get(_getPrototypeOf(SliderFormat.prototype), "onAdVideoComplete", this).call(this);
      this.close();
    }
  }]);
  return SliderFormat;
}(_formatbase__WEBPACK_IMPORTED_MODULE_0__.AdFormat);

/***/ }),

/***/ "./src/vpaid/media/videoplayer.js":
/*!****************************************!*\
  !*** ./src/vpaid/media/videoplayer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPlayer": () => (/* binding */ VideoPlayer)
/* harmony export */ });
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/constants */ "./src/constants.js");
/* harmony import */ var _vpaidbase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vpaidbase */ "./src/vpaid/vpaidbase.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var VideoPlayer = /*#__PURE__*/function (_VPAIDBase) {
  _inherits(VideoPlayer, _VPAIDBase);
  var _super = _createSuper(VideoPlayer);
  /**
  * constructor for VIDEO player with VPAID interface
  * @param { HTMLVideoElement } video
  * @param { HTMLElement } adContainer
  * @param { VastMediaFile[] } mediaFiles
  */
  function VideoPlayer(video, adContainer, mediafiles) {
    var _this;
    _classCallCheck(this, VideoPlayer);
    _this = _super.call(this, video, adContainer);
    _this.id = 'VideoPlayer';
    _this.mediaFiles = mediafiles;
    _this.timers = [];
    _this.lastProgress = 0;
    _this.started = false;
    return _this;
  }
  _createClass(VideoPlayer, [{
    key: "initAd",
    value: function initAd() {
      var _this2 = this;
      this.mediaFiles.forEach(function (file) {
        var source = document.createElement('source');
        source.src = file.fileURL;
        source.type = file.mimeType;
        _this2.video.appendChild(source);
      });

      // need to mute a video to enable autoplay (most browsers limitation)
      this.setAdVolume(0);
      this.addListeners();
    }
  }, {
    key: "startAd",
    value: function startAd() {
      if (this.video.isConnected) {
        this.triggerOnce(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdImpression);
      }
      this.video.play();
    }
  }, {
    key: "stopAd",
    value: function stopAd() {
      this.started = false;
      this.video.pause();
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdStopped);
    }
  }, {
    key: "resumeAd",
    value: function resumeAd() {
      this.video.play();
    }
  }, {
    key: "pauseAd",
    value: function pauseAd() {
      this.video.pause();
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this3 = this;
      this.video.addEventListener('loadeddata', function () {});
      this.video.addEventListener('durationchange', function (e) {
        _this3.duration = e.target.duration;
        _this3.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdDurationChange);
      });
      this.video.addEventListener('canplay', function () {
        _this3.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdLoaded);
        if (_this3.video.isConnected) {
          _this3.triggerOnce(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdImpression);
        }
      });
      this.video.addEventListener('play', function () {
        if (!_this3.started) {
          _this3.started = true;
          _this3.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdStarted);
        }
        _this3.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdPlaying);
      });
      this.video.addEventListener('pause', function () {
        if (_this3.started) {
          _this3.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdPaused);
        }
      });
      this.video.addEventListener('ended', function () {
        _this3.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdVideoComplete);
        _this3.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdStopped);
      });
      this.video.addEventListener('timeupdate', function (e) {
        var progress = Math.round(_this3.getAdElapsedTime());
        if (progress > _this3.lastProgress) {
          _this3.lastProgress = progress;
          _this3.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdProgress, progress);
        }
      });
      this.video.addEventListener('volumechange', function (e) {
        _this3.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdVolumeChange, e.target.volume);
      });
      this.video.addEventListener('error', function () {
        _this3.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdError, '405');
      });
    }
  }, {
    key: "getAdRemainingTime",
    value: function getAdRemainingTime() {
      return this.video.duration - this.video.currentTime;
    }
  }, {
    key: "getAdDuration",
    value: function getAdDuration() {
      return this.video.duration;
    }
  }, {
    key: "getAdVolume",
    value: function getAdVolume() {
      return this.video.volume;
    }
  }, {
    key: "setAdVolume",
    value: function setAdVolume(vol) {
      if (vol === 0) {
        this.video.volume = 0;
        this.video.muted = true;
        this.video.setAttribute('muted', '');
      } else {
        this.video.volume = vol;
        this.video.muted = false;
        this.video.removeAttribute('muted');
      }
    }
  }]);
  return VideoPlayer;
}(_vpaidbase__WEBPACK_IMPORTED_MODULE_1__.VPAIDBase);

/***/ }),

/***/ "./src/vpaid/media/vpaidplayer.js":
/*!****************************************!*\
  !*** ./src/vpaid/media/vpaidplayer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VPAIDPlayer": () => (/* binding */ VPAIDPlayer)
/* harmony export */ });
/* harmony import */ var _vpaidwrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vpaidwrapper */ "./src/vpaid/vpaidwrapper.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var VPAIDPlayer = /*#__PURE__*/function (_VPAIDWrapper) {
  _inherits(VPAIDPlayer, _VPAIDWrapper);
  var _super = _createSuper(VPAIDPlayer);
  /**
   * constructor for any VPAID player
   * @param { HTMLVideoElement } video
   * @param { HTMLElement } adContainer
   * @param { VastMediaFile } mediaFile
   * @param { String } adParameters
   */
  function VPAIDPlayer(video, adContainer, mediafile, adParameters) {
    var _this;
    _classCallCheck(this, VPAIDPlayer);
    _this = _super.call(this, video, adContainer);
    _this.id = 'VPAIDPlayer';
    _this.adParameters = adParameters;
    _this.mediaFile = mediafile;
    _this.iframe = null;
    _this.adLoaded = false;
    _this.adPlaying = false;
    _this.startOnReady = false;
    _this.hasCompletedOnce = false;

    // store every functions to be called on VPAID events
    _this.eventCallbacks = {};
    return _this;
  }
  _createClass(VPAIDPlayer, [{
    key: "initAd",
    value: function initAd() {
      var _this2 = this;
      this.iframe = document.createElement('iframe');
      this.iframe.src = 'about:blank';
      this.iframe.style.width = '100%';
      this.iframe.style.height = '100%';
      this.iframe.style.display = 'block';
      this.iframe.style.opacity = '0';
      this.iframe.style.border = 'none';
      var script = document.createElement('script');
      script.src = this.mediaFile.fileURL;
      this.iframe.addEventListener('load', function () {
        var frameBody = _this2.iframe.contentWindow.document.body;
        frameBody.style.margin = '0px';
        frameBody.appendChild(script);
      });
      script.addEventListener('load', function () {
        var slot = _this2.iframe.contentWindow.document.body;
        var rect = _this2.adContainer.parentElement.getBoundingClientRect();
        _this2.setVPAIDCreative(_this2.iframe.contentWindow.getVPAIDAd());
        _get(_getPrototypeOf(VPAIDPlayer.prototype), "initAd", _this2).call(_this2, rect.width, rect.height, 'normal', _this2.mediaFile.bitrate, {
          AdParameters: _this2.adParameters
        }, {
          slot: slot,
          videoSlot: _this2.video,
          videoSlotCanAutoPlay: true
        });
        _this2.mute(true);
      });
      this.adContainer.append(this.iframe);
    }
  }, {
    key: "startAd",
    value: function startAd() {
      if (this.adLoaded) {
        _get(_getPrototypeOf(VPAIDPlayer.prototype), "startAd", this).call(this);
        this.iframe.style.opacity = '1';
        this.creative.startAd();
      } else {
        this.startOnReady = true;
        if (this.hasCompletedOnce) {
          this.initAd();
        }
      }
    }
  }, {
    key: "stopAd",
    value: function stopAd() {
      _get(_getPrototypeOf(VPAIDPlayer.prototype), "stopAd", this).call(this);
      this.startOnReady = false;
      this.adLoaded = false;
      this.iframe.style.opacity = '0';
      this.iframe.remove(); // We must reset the iframe to ensure the replay can occur
    }
  }, {
    key: "resumeAd",
    value: function resumeAd() {
      if (this.creative && !this.adPlaying) {
        this.creative.resumeAd();
      }
    }
  }, {
    key: "pauseAd",
    value: function pauseAd() {
      if (this.creative && this.adPlaying) {
        this.creative.pauseAd();
      }
    }
  }, {
    key: "onAdLoaded",
    value: function onAdLoaded() {
      _get(_getPrototypeOf(VPAIDPlayer.prototype), "onAdLoaded", this).call(this);
      this.adLoaded = true;
      if (this.startOnReady) {
        this.startAd();
      }
    }
  }, {
    key: "onAdPlaying",
    value: function onAdPlaying() {
      _get(_getPrototypeOf(VPAIDPlayer.prototype), "onAdPlaying", this).call(this);
      this.adPlaying = true;
    }
  }, {
    key: "onAdPaused",
    value: function onAdPaused() {
      _get(_getPrototypeOf(VPAIDPlayer.prototype), "onAdPaused", this).call(this);
      this.adPlaying = false;
    }
  }, {
    key: "onAdStopped",
    value: function onAdStopped() {
      _get(_getPrototypeOf(VPAIDPlayer.prototype), "onAdStopped", this).call(this);
      this.adPlaying = false;
      if (!this.hasCompletedOnce) {
        this.hasCompletedOnce = true;
      }
    }
  }, {
    key: "onAdError",
    value: function onAdError() {
      _get(_getPrototypeOf(VPAIDPlayer.prototype), "onAdError", this).call(this);
      this.adPlaying = false;
    }
  }, {
    key: "getRemainingTime",
    value: function getRemainingTime() {
      return this.creative.getAdRemainingTime();
    }
  }, {
    key: "getAdDuration",
    value: function getAdDuration() {
      return this.creative.getAdDuration();
    }
  }, {
    key: "mute",
    value: function mute(muted) {
      this.creative.setAdVolume(muted ? 0 : 100);
      return this.creative.getAdVolume() === 0;
    }
  }, {
    key: "resize",
    value: function resize() {
      var rect = this.adContainer.parentElement.getBoundingClientRect();
      this.creative.resizeAd(rect.width, rect.height, 'normal');
    }
  }]);
  return VPAIDPlayer;
}(_vpaidwrapper__WEBPACK_IMPORTED_MODULE_0__.VPAIDWrapper);

/***/ }),

/***/ "./src/vpaid/tracking/networktools.js":
/*!********************************************!*\
  !*** ./src/vpaid/tracking/networktools.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pxl": () => (/* binding */ pxl)
/* harmony export */ });
function pxl(url, callback) {
  var img = document.createElement('img');
  img.setAttribute('style', 'position:absolute; width:1px; opacity: 0; height:1px; display:block;');
  var el = img;
  el.onload = function () {
    if (el.parentNode && el.tagName === 'img') {
      el.parentNode.removeChild(el);
    }
    if (callback) {
      callback();
    }
  };
  img.src = url;
}

/***/ }),

/***/ "./src/vpaid/tracking/quartiletimer.js":
/*!*********************************************!*\
  !*** ./src/vpaid/tracking/quartiletimer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuartileTimer": () => (/* binding */ QuartileTimer)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * a class to create a pausable timer with quartile events
 *
 * usage :
  const timer = new QuartileTimer({
    onFirstQuartile: () => {},
    onMidPoint: () => {},
    onThirdQuartile: () => {},
    onTimerEnd: () => {},
  }, 1000);

  timer.pause();
  timer.resume();
*/
var QuartileTimer = /*#__PURE__*/function () {
  /** Quartile Timer constructor
   *
   * @param {object} callbackObject 4 functions to receive events: {onFirstQuartile, onMidPoint, onThirdQuartile, onTimerEnd}
   * @param {number} delay total duration in milliseconds
   */
  function QuartileTimer(callbackObject) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    _classCallCheck(this, QuartileTimer);
    Object.assign(this, callbackObject);
    this.start = 0;
    if (delay) {
      this.update(delay);
    }
  }
  _createClass(QuartileTimer, [{
    key: "update",
    value: function update(newDuration) {
      this.clearTimeouts();

      // setup timer for each event
      this.endRemaining = newDuration;
      this.firstRemaining = newDuration / 4;
      this.midRemaining = newDuration / 2;
      this.thirdRemaining = 3 * (newDuration / 4);
    }
  }, {
    key: "clearTimeouts",
    value: function clearTimeouts() {
      window.clearTimeout(this.endTimerId);
      window.clearTimeout(this.firstTimerId);
      window.clearTimeout(this.midTimerId);
      window.clearTimeout(this.thirdTimerId);
      this.endTimerId = 0;
      this.firstTimerId = 0;
      this.midTimerId = 0;
      this.thirdTimerId = 0;
    }
  }, {
    key: "pause",
    value: function pause() {
      this.clearTimeouts();
      var elapsed = Date.now() - this.start;
      this.firstRemaining -= elapsed;
      this.midRemaining -= elapsed;
      this.thirdRemaining -= elapsed;
      this.endRemaining -= elapsed;
    }
  }, {
    key: "resume",
    value: function resume() {
      if (this.endTimerId) {
        return;
      }
      this.start = Date.now();
      if (this.firstRemaining > 0) {
        this.firstTimerId = window.setTimeout(this.onFirstQuartile, this.firstRemaining);
      }
      if (this.midRemaining > 0) {
        this.midTimerId = window.setTimeout(this.onMidPoint, this.midRemaining);
      }
      if (this.thirdRemaining > 0) {
        this.thirdTimerId = window.setTimeout(this.onThirdQuartile, this.thirdRemaining);
      }
      if (this.endRemaining > 0) {
        this.endTimerId = window.setTimeout(this.onTimerEnd, this.endRemaining);
      }
    }
  }]);
  return QuartileTimer;
}();

/***/ }),

/***/ "./src/vpaid/tracking/trackerwrapper.js":
/*!**********************************************!*\
  !*** ./src/vpaid/tracking/trackerwrapper.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackerWrapper": () => (/* binding */ TrackerWrapper)
/* harmony export */ });
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/constants */ "./src/constants.js");
/* harmony import */ var _vpaidwrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vpaidwrapper */ "./src/vpaid/vpaidwrapper.js");
/* harmony import */ var _viewability__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewability */ "./src/vpaid/tracking/viewability.js");
/* harmony import */ var _networktools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./networktools */ "./src/vpaid/tracking/networktools.js");
/* harmony import */ var _quartiletimer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quartiletimer */ "./src/vpaid/tracking/quartiletimer.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 * plug the VASTTracker using a VPAID interface wrapper
 * implement viewability pause/resume + trackings
 * */
var TrackerWrapper = /*#__PURE__*/function (_VPAIDWrapper) {
  _inherits(TrackerWrapper, _VPAIDWrapper);
  var _super = _createSuper(TrackerWrapper);
  /**
   * @param { VPAIDBase } vpaidCreative
   * @param { HTMLVideoElement } video
   * @param { HTMLElement } adContainer
   * @param { VASTTracker } tracker
   */

  function TrackerWrapper(vpaidCreative, video, adContainer, tracker) {
    var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _this;
    _classCallCheck(this, TrackerWrapper);
    _this = _super.call(this, vpaidCreative, video, adContainer);
    _this.id = 'TrackerWrapper';
    _this.tracker = tracker;
    _this.tracker.on('clickthrough', _this.applyClick);
    adContainer.addEventListener('click', _this.onAdClickThru.bind(_assertThisInitialized(_this)));
    adContainer.addEventListener('touch', _this.onAdClickThru.bind(_assertThisInitialized(_this)));
    adContainer.style.cursor = 'pointer';
    _this.adLoaded = false;
    _this.adPlaying = false;
    _this.startOnReady = false;
    _this.hasCompletedOnce = false;
    _this.mrc_viewable_sent = false;
    _this.quartileTimer = new _quartiletimer__WEBPACK_IMPORTED_MODULE_4__.QuartileTimer({
      onFirstQuartile: function onFirstQuartile() {
        _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(TrackerWrapper.prototype)), "triggerOnce", _thisSuper).call(_thisSuper, _src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdVideoFirstQuartile);
      },
      onMidPoint: function onMidPoint() {
        _get((_thisSuper2 = _assertThisInitialized(_this), _getPrototypeOf(TrackerWrapper.prototype)), "triggerOnce", _thisSuper2).call(_thisSuper2, _src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdVideoMidpoint);
      },
      onThirdQuartile: function onThirdQuartile() {
        _get((_thisSuper3 = _assertThisInitialized(_this), _getPrototypeOf(TrackerWrapper.prototype)), "triggerOnce", _thisSuper3).call(_thisSuper3, _src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdVideoThirdQuartile);
      },
      onTimerEnd: function onTimerEnd() {
        _get((_thisSuper4 = _assertThisInitialized(_this), _getPrototypeOf(TrackerWrapper.prototype)), "triggerOnce", _thisSuper4).call(_thisSuper4, _src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdVideoComplete);
      }
    });
    return _this;
  }
  _createClass(TrackerWrapper, [{
    key: "onAdLoaded",
    value: function onAdLoaded() {
      this.tracker.emit(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdLoaded);
      _get(_getPrototypeOf(TrackerWrapper.prototype), "onAdLoaded", this).call(this);
    }
  }, {
    key: "onAdDurationChange",
    value: function onAdDurationChange() {
      _get(_getPrototypeOf(TrackerWrapper.prototype), "onAdDurationChange", this).call(this);
      this.tracker.setDuration(this.duration);
      if (this.duration > 0) {
        // setup timers for quartile events
        this.quartileTimer.update(this.duration * 1000);
      }
    }
  }, {
    key: "onAdRemainingTimeChange",
    value: function onAdRemainingTimeChange() {
      this.handleTimeEvent(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdRemainingTimeChange);
      _get(_getPrototypeOf(TrackerWrapper.prototype), "onAdRemainingTimeChange", this).call(this);
    }
  }, {
    key: "onAdStarted",
    value: function onAdStarted() {
      var _this2 = this;
      this.handleTimeEvent(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdVideoStart);
      _viewability__WEBPACK_IMPORTED_MODULE_2__.singleton.addListener(this.adContainer, function (status) {
        if (!_this2.mrc_viewable_sent) {
          if (status === _viewability__WEBPACK_IMPORTED_MODULE_2__.VIEW_STATUS.MRC_VIEWABLE) {
            var _this2$tracker$ad$vie;
            (_this2$tracker$ad$vie = _this2.tracker.ad.viewableImpression) === null || _this2$tracker$ad$vie === void 0 ? void 0 : _this2$tracker$ad$vie.forEach(function (obj) {
              (0,_networktools__WEBPACK_IMPORTED_MODULE_3__.pxl)(obj.viewable);
            });
            _this2.mrc_viewable_sent = true;
          }
        }
        if (status === _viewability__WEBPACK_IMPORTED_MODULE_2__.VIEW_STATUS.NOT_VIEWABLE) {
          _this2.pauseAd();
        } else if (status === _viewability__WEBPACK_IMPORTED_MODULE_2__.VIEW_STATUS.VIEWABLE) {
          _this2.resumeAd();
        }
      });
      this.adPlaying = true;
      _get(_getPrototypeOf(TrackerWrapper.prototype), "onAdStarted", this).call(this);
    }
  }, {
    key: "onAdVideoFirstQuartile",
    value: function onAdVideoFirstQuartile() {
      this.handleTimeEvent(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdVideoFirstQuartile);
      _get(_getPrototypeOf(TrackerWrapper.prototype), "onAdVideoFirstQuartile", this).call(this);
    }
  }, {
    key: "onAdVideoMidpoint",
    value: function onAdVideoMidpoint() {
      this.handleTimeEvent(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdVideoMidpoint);
      _get(_getPrototypeOf(TrackerWrapper.prototype), "onAdVideoMidpoint", this).call(this);
    }
  }, {
    key: "onAdVideoThirdQuartile",
    value: function onAdVideoThirdQuartile() {
      this.handleTimeEvent(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdVideoThirdQuartile);
      _get(_getPrototypeOf(TrackerWrapper.prototype), "onAdVideoThirdQuartile", this).call(this);
    }
  }, {
    key: "onAdProgress",
    value: function onAdProgress(sec) {
      this.tracker.setProgress(sec);
      _get(_getPrototypeOf(TrackerWrapper.prototype), "onAdProgress", this).call(this, sec);
    }
  }, {
    key: "handleTimeEvent",
    value: function handleTimeEvent(timeEvent) {
      this.tracker.setProgress(this.getAdElapsedTime());
      this.tracker.emit(timeEvent);
    }
  }, {
    key: "onAdImpression",
    value: function onAdImpression() {
      this.tracker.trackImpression();
      _get(_getPrototypeOf(TrackerWrapper.prototype), "onAdImpression", this).call(this);
    }
  }, {
    key: "onAdPlaying",
    value: function onAdPlaying() {
      this.adPlaying = true;
      if (!this.hasCompletedOnce) {
        this.tracker.setPaused(false);
      }
      this.tracker.emit(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdPlaying);
      _get(_getPrototypeOf(TrackerWrapper.prototype), "onAdPlaying", this).call(this);
      this.quartileTimer.resume();
    }
  }, {
    key: "onAdPaused",
    value: function onAdPaused() {
      this.adPlaying = false;
      if (!this.hasCompletedOnce) {
        this.tracker.setPaused(true);
      } else {
        this.tracker.emit(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdPaused);
      }
      _get(_getPrototypeOf(TrackerWrapper.prototype), "onAdPaused", this).call(this);
      this.quartileTimer.pause();
    }
  }, {
    key: "onAdStopped",
    value: function onAdStopped() {
      this.adPlaying = false;
      if (!this.mrc_viewable_sent) {
        var _this$tracker$ad$view;
        (_this$tracker$ad$view = this.tracker.ad.viewableImpression) === null || _this$tracker$ad$view === void 0 ? void 0 : _this$tracker$ad$view.forEach(function (obj) {
          (0,_networktools__WEBPACK_IMPORTED_MODULE_3__.pxl)(obj.notviewable);
        });
      }
      _get(_getPrototypeOf(TrackerWrapper.prototype), "onAdStopped", this).call(this);
      this.quartileTimer.pause();
    }
  }, {
    key: "onAdVideoComplete",
    value: function onAdVideoComplete() {
      this.adPlaying = false;
      if (!this.hasCompletedOnce) {
        this.tracker.complete();
        this.hasCompletedOnce = true;
      } else {
        this.tracker.emit(_src_constants__WEBPACK_IMPORTED_MODULE_0__.VPAID_EVENTS.AdVideoComplete);
      }
      _get(_getPrototypeOf(TrackerWrapper.prototype), "onAdVideoComplete", this).call(this);
    }
  }, {
    key: "onAdVolumeChange",
    value: function onAdVolumeChange() {
      this.tracker.setMuted(this.creative.getAdVolume() === 0);
      _get(_getPrototypeOf(TrackerWrapper.prototype), "onAdVolumeChange", this).call(this);
    }
  }, {
    key: "onAdClickThru",
    value: function onAdClickThru() {
      this.tracker.click();
      _get(_getPrototypeOf(TrackerWrapper.prototype), "onAdClickThru", this).call(this);
    }
  }, {
    key: "applyClick",
    value: function applyClick(url) {
      var _this3 = this;
      // as we register eventlistener on ad container and can receive this event from VPAID, avoid double handling
      if (!this.hasTriggerred) {
        this.hasTriggerred = true;
        window.open(url, '_blank');
        setTimeout(function () {
          _this3.hasTriggerred = false;
        }, 50);
      }
    }
  }, {
    key: "onAdError",
    value: function onAdError() {
      var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '900';
      this.adPlaying = false;
      this.tracker.error({
        ERRORCODE: code
      });
      _get(_getPrototypeOf(TrackerWrapper.prototype), "onAdError", this).call(this);
      this.quartileTimer.pause();
    }
  }]);
  return TrackerWrapper;
}(_vpaidwrapper__WEBPACK_IMPORTED_MODULE_1__.VPAIDWrapper);

/***/ }),

/***/ "./src/vpaid/tracking/viewability.js":
/*!*******************************************!*\
  !*** ./src/vpaid/tracking/viewability.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VIEW_STATUS": () => (/* binding */ VIEW_STATUS),
/* harmony export */   "singleton": () => (/* binding */ singleton)
/* harmony export */ });
/* harmony import */ var _src_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/log */ "./src/log.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var VIEW_STATUS = {
  VIEWABLE: 'viewable',
  NOT_VIEWABLE: 'not_viewable',
  VIEW_UNDETERMINED: 'undetermined',
  // visible for 2 continuous seconds -  see: https://www.iab.com/guidelines/mrc-viewable-impression-guidelines/
  MRC_VIEWABLE: 'mrc_video_viewable'
};
var RegisteredElement = /*#__PURE__*/function () {
  function RegisteredElement(callback) {
    _classCallCheck(this, RegisteredElement);
    this.callback = callback;
    this.mrc_sent = false;
    this.mrc_timeout = -1;
  }
  _createClass(RegisteredElement, [{
    key: "onViewabilityChange",
    value: function onViewabilityChange(isIntersecting, tracker) {
      var _this = this;
      this.callback(isIntersecting ? VIEW_STATUS.VIEWABLE : VIEW_STATUS.NOT_VIEWABLE);
      if (!this.mrc_sent) {
        if (isIntersecting) {
          if (this.mrc_timeout === -1) {
            this.mrc_timeout = window.setTimeout(function () {
              _this.callback(VIEW_STATUS.MRC_VIEWABLE, tracker);
              _this.mrc_sent = true;
            }, 2000);
          }
        } else if (this.mrc_timeout > -1) {
          window.clearTimeout(this.mrc_timeout);
          this.mrc_timeout = -1;
        }
      }
    }
  }]);
  return RegisteredElement;
}();
var Viewability = /*#__PURE__*/function () {
  function Viewability(target) {
    var _this2 = this;
    _classCallCheck(this, Viewability);
    /**
     * keep track on observed elements and each callback
     */
    this.registeredElement = {};
    this.observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        var _this2$registeredElem;
        (_this2$registeredElem = _this2.registeredElement[entry.target.id]) === null || _this2$registeredElem === void 0 ? void 0 : _this2$registeredElem.onViewabilityChange(entry.isIntersecting);
      });
    }, {
      threshold: 0.5
    });
  }
  _createClass(Viewability, [{
    key: "addListener",
    value: function addListener(target, callback) {
      if (!target.id) {
        (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVEL.WARN, 'Cannot register viewability without element id.');
        return;
      }
      this.registeredElement[target.id] = new RegisteredElement(callback);
      this.observer.observe(target);
    }
  }]);
  return Viewability;
}();
var singleton = new Viewability();

/***/ }),

/***/ "./src/vpaid/vpaidbase.js":
/*!********************************!*\
  !*** ./src/vpaid/vpaidbase.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VPAIDBase": () => (/* binding */ VPAIDBase)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var VPAIDBase = /*#__PURE__*/function () {
  /**
   * constructor for any VPAID player
   * @param { HTMLVideoElement } video
   * @param { HTMLElement } adContainer
   */
  function VPAIDBase(video, adContainer) {
    _classCallCheck(this, VPAIDBase);
    this.video = video;
    this.adContainer = adContainer;
    this.elapsed = 0;
    this.duration = -1;
    this.hasCompletedOnce = false;
    this.listeners = {};
    this.sentEvents = [];
  }
  _createClass(VPAIDBase, [{
    key: "handshakeVersion",
    value: function handshakeVersion() {
      return '2.0';
    }
  }, {
    key: "initAd",
    value: function initAd() {
      throw new Error('initAd not implemented');
    }
  }, {
    key: "startAd",
    value: function startAd() {
      this.video.style.display = '';
      this.adContainer.style.display = '';
    }
  }, {
    key: "stopAd",
    value: function stopAd() {
      throw new Error('stopAd not implemented');
    }
  }, {
    key: "skipAd",
    value: function skipAd() {
      throw new Error('skipAd not implemented');
    }
  }, {
    key: "pauseAd",
    value: function pauseAd() {
      throw new Error('pauseAd not implemented');
    }
  }, {
    key: "resumeAd",
    value: function resumeAd() {
      throw new Error('resumeAd not implemented');
    }
  }, {
    key: "getRemainingTime",
    value: function getRemainingTime() {
      return this.duration - this.elapsed;
    }
  }, {
    key: "mute",
    value: function mute(muted) {
      throw new Error('mute not implemented');
    }
  }, {
    key: "expandAd",
    value: function expandAd() {
      throw new Error('expandAd not implemented');
    }
  }, {
    key: "collapseAd",
    value: function collapseAd() {
      throw new Error('collapseAd not implemented');
    }
  }, {
    key: "getAdVolume",
    value: function getAdVolume() {
      throw new Error('getAdVolume not implemented');
    }
  }, {
    key: "getAdDuration",
    value: function getAdDuration() {
      throw new Error('getAdDuration not implemented');
    }
  }, {
    key: "getAdRemainingTime",
    value: function getAdRemainingTime() {
      throw new Error('getAdRemainingTime not implemented');
    }
  }, {
    key: "getAdElapsedTime",
    value: function getAdElapsedTime() {
      return this.getAdDuration() - this.getAdRemainingTime();
    }
  }, {
    key: "getAdProgress",
    value: function getAdProgress() {
      return Math.round((this.getAdElapsedTime() / this.getAdDuration() + Number.EPSILON) * 100);
    }
  }, {
    key: "resizeAd",
    value: function resizeAd() {
      // Default resize doesn't need to do anything
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback, eventName) {
      if (!this.listeners[eventName]) this.listeners[eventName] = [];
      if (typeof callback !== 'function') {
        throw new Error("Callback is not a function for event: ".concat(eventName));
      }
      this.listeners[eventName].push(callback);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(callback, eventName) {
      if (!this.listeners[eventName]) {
        return;
      }
      var index = this.listeners[eventName].indexOf(callback);
      if (index !== -1) {
        this.listeners[eventName].splice(index, 1);
      }
    }
  }, {
    key: "triggerEvent",
    value: function triggerEvent() {
      var _this$listeners$event;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var eventName = args.shift();
      (_this$listeners$event = this.listeners[eventName]) === null || _this$listeners$event === void 0 ? void 0 : _this$listeners$event.forEach(function (callback) {
        callback.apply(void 0, args);
      });
      this.sentEvents.push(eventName);
    }
  }, {
    key: "triggerOnce",
    value: function triggerOnce() {
      var eventName = arguments.length <= 0 ? undefined : arguments[0];
      if (!this.sentEvents.includes(eventName)) {
        this.triggerEvent.apply(this, arguments);
      }
    }
  }]);
  return VPAIDBase;
}();

/***/ }),

/***/ "./src/vpaid/vpaidwrapper.js":
/*!***********************************!*\
  !*** ./src/vpaid/vpaidwrapper.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VPAIDWrapper": () => (/* binding */ VPAIDWrapper)
/* harmony export */ });
/* harmony import */ var _src_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/log */ "./src/log.js");
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/constants */ "./src/constants.js");
/* harmony import */ var _vpaidbase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vpaidbase */ "./src/vpaid/vpaidbase.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




// This class is meant to be part of the video player that interacts with the Ad.
// It takes the VPAID creative as a parameter in its contructor.
var VPAIDWrapper = /*#__PURE__*/function (_VPAIDBase) {
  _inherits(VPAIDWrapper, _VPAIDBase);
  var _super = _createSuper(VPAIDWrapper);
  function VPAIDWrapper() {
    var _this;
    _classCallCheck(this, VPAIDWrapper);
    var vpaid = null;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args[0] && VPAIDWrapper.checkVPAIDInterface(args[0])) {
      vpaid = args.shift();
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.id = 'VPAIDWrapper';
    if (vpaid) _this.setVPAIDCreative(vpaid);
    return _this;
  }
  _createClass(VPAIDWrapper, [{
    key: "setVPAIDCreative",
    value: function setVPAIDCreative(creative) {
      this.creative = creative;
      if (!VPAIDWrapper.checkVPAIDInterface(creative)) {
        // The VPAIDCreative doesn't conform to the VPAID spec
        (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVEL.ERROR, 'VPAIDCreative doesn\'t conform to the VPAID spec');
        return;
      }
      this.setCallbacksForCreative();
    }
  }, {
    key: "setCallbacksForCreative",
    value:
    // This function registers the callbacks of each of the events
    function setCallbacksForCreative() {
      var _this2 = this;
      // The key of the object is the event name and the value is a reference to the callback function that is registered with the creative
      var callbacks = {
        AdStarted: this.onAdStarted,
        AdStopped: this.onAdStopped,
        AdSkipped: this.onAdSkipped,
        AdLoaded: this.onAdLoaded,
        AdLinearChange: this.onAdLinearChange,
        AdSizeChange: this.onAdSizeChange,
        AdExpandedChange: this.onAdExpandedChange,
        AdSkippableStateChange: this.onAdSkippableStateChange,
        AdDurationChange: this.onAdDurationChange,
        AdRemainingTimeChange: this.onAdRemainingTimeChange,
        AdVolumeChange: this.onAdVolumeChange,
        AdImpression: this.onAdImpression,
        AdClickThru: this.onAdClickThru,
        AdInteraction: this.onAdInteraction,
        AdVideoStart: this.onAdVideoStart,
        AdVideoFirstQuartile: this.onAdVideoFirstQuartile,
        AdVideoMidpoint: this.onAdVideoMidpoint,
        AdVideoThirdQuartile: this.onAdVideoThirdQuartile,
        AdVideoComplete: this.onAdVideoComplete,
        AdUserAcceptInvitation: this.onAdUserAcceptInvitation,
        AdUserMinimize: this.onAdUserMinimize,
        AdUserClose: this.onAdUserClose,
        AdPaused: this.onAdPaused,
        AdPlaying: this.onAdPlaying,
        AdError: this.onAdError,
        AdLog: this.onAdLog,
        AdProgress: this.onAdProgress
      };
      // Looping through the object and registering each of the callbacks with the creative

      Object.keys(callbacks).forEach(function (eventName) {
        _this2.creative.subscribe(callbacks[eventName].bind(_this2), eventName, _this2);
      });
    }

    // Pass through for initAd - when the video player wants to call the ad
  }, {
    key: "initAd",
    value: function initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
      this.playerWidth = width;
      this.playerHeight = height;
      this.creative.initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars);
    }
  }, {
    key: "getInnerCreative",
    value: function getInnerCreative() {
      var _this$creative;
      if (typeof ((_this$creative = this.creative) === null || _this$creative === void 0 ? void 0 : _this$creative.getInnerCreative) === 'function') {
        return this.creative.getInnerCreative();
      } else {
        return this;
      }
    }

    // Callback for AdPaused
  }, {
    key: "onAdPaused",
    value: function onAdPaused() {
      this.log('onAdPaused');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdPaused);
    }

    // Callback for AdPlaying
  }, {
    key: "onAdPlaying",
    value: function onAdPlaying() {
      this.log('onAdPlaying');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdPlaying);
    }

    // Callback for AdError
  }, {
    key: "onAdError",
    value: function onAdError(message) {
      (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)("onAdError: ".concat(message));
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdError, message);
    }

    // Callback for AdLog
  }, {
    key: "onAdLog",
    value: function onAdLog(message) {
      this.log("onAdLog: ".concat(message));
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdLog, message);
    }

    // Callback for AdProgress
  }, {
    key: "onAdProgress",
    value: function onAdProgress(time) {
      this.log("onAdProgress: ".concat(time));
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdProgress, time);
    }

    // Callback for AdUserAcceptInvitation
  }, {
    key: "onAdUserAcceptInvitation",
    value: function onAdUserAcceptInvitation() {
      this.log('onAdUserAcceptInvitation');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdUserAcceptInvitation);
    }

    // Callback for AdUserMinimize
  }, {
    key: "onAdUserMinimize",
    value: function onAdUserMinimize() {
      this.log('onAdUserMinimize');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdUserMinimize);
    }

    // Callback for AdUserClose
  }, {
    key: "onAdUserClose",
    value: function onAdUserClose() {
      this.log('onAdUserClose');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdUserClose);
    }

    // Callback for AdUserClose
  }, {
    key: "onAdSkippableStateChange",
    value: function onAdSkippableStateChange() {
      this.log("Ad Skippable State Changed to: ".concat(this.creative.getAdSkippableState()));
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdSkippableStateChange);
    }

    // Callback for AdUserClose
  }, {
    key: "onAdExpandedChange",
    value: function onAdExpandedChange() {
      this.log("Ad Expanded Changed to: ".concat(this.creative.getAdExpanded()));
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdExpandedChange);
    }

    // Pass through for getAdExpanded
  }, {
    key: "getAdExpanded",
    value: function getAdExpanded() {
      this.log('getAdExpanded');
      return this.creative.getAdExpanded();
    }

    // Pass through for getAdSkippableState
  }, {
    key: "getAdSkippableState",
    value: function getAdSkippableState() {
      this.log('getAdSkippableState');
      return this.creative.getAdSkippableState();
    }

    // Callback for AdSizeChange
  }, {
    key: "onAdSizeChange",
    value: function onAdSizeChange() {
      this.log("Ad size changed to: w=".concat(this.creative.getAdWidth(), " h =").concat(this.creative.getAdHeight()));
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      this.triggerEvent.apply(this, [_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdSizeChange].concat(args));
    }

    // Callback for AdDurationChange
  }, {
    key: "onAdDurationChange",
    value: function onAdDurationChange() {
      this.log("Ad Duration Changed to: ".concat(this.creative.getAdDuration()));
      this.duration = this.getAdDuration();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      this.triggerEvent.apply(this, [_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdDurationChange].concat(args));
    }

    // Callback for AdRemainingTimeChange
  }, {
    key: "onAdRemainingTimeChange",
    value: function onAdRemainingTimeChange() {
      (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)("Ad Remaining Time Changed to: ".concat(this.creative.getAdRemainingTime()));
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      this.triggerEvent.apply(this, [_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdRemainingTimeChange].concat(args));
    }

    // Pass through for getAdRemainingTime
  }, {
    key: "getAdRemainingTime",
    value: function getAdRemainingTime() {
      return this.creative.getAdRemainingTime();
    }

    // Pass through for getAdDuration
  }, {
    key: "getAdDuration",
    value: function getAdDuration() {
      return this.creative.getAdDuration();
    }

    // Callback for AdImpression
  }, {
    key: "onAdImpression",
    value: function onAdImpression() {
      this.log('Ad Impression');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdImpression);
    }

    // Callback for AdClickThru
  }, {
    key: "onAdClickThru",
    value: function onAdClickThru(url, id, playerHandles) {
      this.log('Clickthrough portion of the ad was clicked');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdClickThru);
    }

    // Callback for AdInteraction
  }, {
    key: "onAdInteraction",
    value: function onAdInteraction(id) {
      this.log('A non-clickthrough event has occured');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdInteraction);
    }

    // Callback for AdUserClose
  }, {
    key: "onAdVideoStart",
    value: function onAdVideoStart() {
      this.log('Video 0% completed');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdVideoStart);
    }

    // Callback for AdUserClose
  }, {
    key: "onAdVideoFirstQuartile",
    value: function onAdVideoFirstQuartile() {
      this.log('Video 25% completed');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdVideoFirstQuartile);
    }

    // Callback for AdUserClose
  }, {
    key: "onAdVideoMidpoint",
    value: function onAdVideoMidpoint() {
      this.log('Video 50% completed');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdVideoMidpoint);
    }

    // Callback for AdUserClose
  }, {
    key: "onAdVideoThirdQuartile",
    value: function onAdVideoThirdQuartile() {
      this.log('Video 75% completed');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdVideoThirdQuartile);
    }

    // Callback for AdVideoComplete
  }, {
    key: "onAdVideoComplete",
    value: function onAdVideoComplete() {
      this.log('Video 100% completed');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdVideoComplete);
    }

    // Callback for AdLinearChange
  }, {
    key: "onAdLinearChange",
    value: function onAdLinearChange() {
      this.log("Ad linear has changed: ".concat(this.creative.getAdLinear()));
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      this.triggerEvent.apply(this, [_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdLinearChange].concat(args));
    }

    // Pass through for getAdLinear
  }, {
    key: "getAdLinear",
    value: function getAdLinear() {
      this.log('getAdLinear');
      return this.creative.getAdLinear();
    }

    // Pass through for startAd()
  }, {
    key: "startAd",
    value: function startAd() {
      this.log('startAd');
      this.creative.startAd();
    }

    // Callback for AdLoaded
  }, {
    key: "onAdLoaded",
    value: function onAdLoaded() {
      this.log('Ad has been loaded');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdLoaded);
    }

    // Callback for StartAd()
  }, {
    key: "onAdStarted",
    value: function onAdStarted() {
      this.log('Ad has started');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdStarted);
    }

    // Pass through for stopAd()
  }, {
    key: "stopAd",
    value: function stopAd() {
      this.creative.stopAd();
    }

    // Callback for AdUserClose
  }, {
    key: "onAdStopped",
    value: function onAdStopped() {
      this.log('Ad has stopped');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdStopped);
    }

    // Callback for AdUserClose
  }, {
    key: "onAdSkipped",
    value: function onAdSkipped() {
      this.log('Ad was skipped');
      this.triggerEvent(_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdSkipped);
    }

    // Passthrough for setAdVolume
  }, {
    key: "setAdVolume",
    value: function setAdVolume(val) {
      this.creative.setAdVolume(val);
    }

    // Passthrough for getAdVolume
  }, {
    key: "getAdVolume",
    value: function getAdVolume() {
      return this.creative.getAdVolume();
    }

    // Callback for AdVolumeChange
  }, {
    key: "onAdVolumeChange",
    value: function onAdVolumeChange() {
      this.log("Ad Volume has changed to - ".concat(this.creative.getAdVolume()));
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      this.triggerEvent.apply(this, [_src_constants__WEBPACK_IMPORTED_MODULE_1__.VPAID_EVENTS.AdVolumeChange].concat(args));
    }

    // Passthrough for resizeAd
  }, {
    key: "resizeAd",
    value: function resizeAd(width, height, viewMode) {
      this.creative.resizeAd(width, height, viewMode);
    }

    // Passthrough for pauseAd()
  }, {
    key: "pauseAd",
    value: function pauseAd() {
      this.creative.pauseAd();
    }

    // Passthrough for resumeAd()
  }, {
    key: "resumeAd",
    value: function resumeAd() {
      this.creative.resumeAd();
    }

    // Passthrough for expandAd()
  }, {
    key: "expandAd",
    value: function expandAd() {
      this.creative.expandAd();
    }

    // Passthrough for collapseAd()
  }, {
    key: "collapseAd",
    value: function collapseAd() {
      this.creative.collapseAd();
    }
  }, {
    key: "log",
    value: function log(message) {
      (0,_src_log__WEBPACK_IMPORTED_MODULE_0__.logger)("[".concat(this.id.substring(0, 11), "] \t- ").concat(message));
    }
  }], [{
    key: "checkVPAIDInterface",
    value: function checkVPAIDInterface(VPAIDCreative) {
      if (VPAIDCreative.handshakeVersion && typeof VPAIDCreative.handshakeVersion === 'function' && VPAIDCreative.initAd && typeof VPAIDCreative.initAd === 'function' && VPAIDCreative.startAd && typeof VPAIDCreative.startAd === 'function' && VPAIDCreative.stopAd && typeof VPAIDCreative.stopAd === 'function' && VPAIDCreative.skipAd && typeof VPAIDCreative.skipAd === 'function' && VPAIDCreative.resizeAd && typeof VPAIDCreative.resizeAd === 'function' && VPAIDCreative.pauseAd && typeof VPAIDCreative.pauseAd === 'function' && VPAIDCreative.resumeAd && typeof VPAIDCreative.resumeAd === 'function' && VPAIDCreative.expandAd && typeof VPAIDCreative.expandAd === 'function' && VPAIDCreative.collapseAd && typeof VPAIDCreative.collapseAd === 'function' && VPAIDCreative.subscribe && typeof VPAIDCreative.subscribe === 'function' && VPAIDCreative.unsubscribe && typeof VPAIDCreative.unsubscribe === 'function') {
        return true;
      }
      return false;
    }
  }]);
  return VPAIDWrapper;
}(_vpaidbase__WEBPACK_IMPORTED_MODULE_2__.VPAIDBase);

/***/ }),

/***/ "./node_modules/@dailymotion/vast-client/dist/vast-client.min.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@dailymotion/vast-client/dist/vast-client.min.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

!function(e,t){ true?t(exports):0}(this,(function(e){"use strict";function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function r(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?t(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=u(e);if(t){var n=u(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return d(this,r)}}function h(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{id:e.id||null,adId:e.adId||null,sequence:e.sequence||null,apiFramework:e.apiFramework||null,universalAdIds:[],creativeExtensions:[]}}var m=["ADCATEGORIES","ADCOUNT","ADPLAYHEAD","ADSERVINGID","ADTYPE","APIFRAMEWORKS","APPBUNDLE","ASSETURI","BLOCKEDADCATEGORIES","BREAKMAXADLENGTH","BREAKMAXADS","BREAKMAXDURATION","BREAKMINADLENGTH","BREAKMINDURATION","BREAKPOSITION","CLICKPOS","CLICKTYPE","CLIENTUA","CONTENTID","CONTENTPLAYHEAD","CONTENTURI","DEVICEIP","DEVICEUA","DOMAIN","EXTENSIONS","GDPRCONSENT","IFA","IFATYPE","INVENTORYSTATE","LATLONG","LIMITADTRACKING","MEDIAMIME","MEDIAPLAYHEAD","OMIDPARTNER","PAGEURL","PLACEMENTTYPE","PLAYERCAPABILITIES","PLAYERSIZE","PLAYERSTATE","PODSEQUENCE","REGULATIONS","SERVERSIDE","SERVERUA","TRANSACTIONID","UNIVERSALADID","VASTVERSIONS","VERIFICATIONVENDORS"];function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=[],n=A(e);for(var a in!t.ERRORCODE||r.isCustomCode||/^[0-9]{3}$/.test(t.ERRORCODE)||(t.ERRORCODE=900),t.CACHEBUSTING=E(Math.round(1e8*Math.random())),t.TIMESTAMP=(new Date).toISOString(),t.RANDOM=t.random=t.CACHEBUSTING,t)t[a]=b(t[a]);for(var o in n){var s=n[o];"string"==typeof s&&i.push(y(s,t))}return i}function y(e,t){var r=(e=T(e,t)).match(/[^[\]]+(?=])/g);if(!r)return e;var i=r.filter((function(e){return m.indexOf(e)>-1}));return 0===i.length?e:T(e,i=i.reduce((function(e,t){return e[t]=-1,e}),{}))}function T(e,t){var r=e;for(var i in t){var n=t[i];r=r.replace(new RegExp("(?:\\[|%%)(".concat(i,")(?:\\]|%%)"),"g"),n)}return r}function A(e){return Array.isArray(e)?e.map((function(e){return e&&e.hasOwnProperty("url")?e.url:e})):e}function k(e,t){for(var r=0;r<t.length;r++)if(R(t[r],e))return!0;return!1}function R(e,t){if(e&&t){var r=Object.getOwnPropertyNames(e),i=Object.getOwnPropertyNames(t);return r.length===i.length&&(e.id===t.id&&e.url===t.url)}return!1}function b(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16))}))}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return e.toString().padStart(t,"0")}var N={track:function(e,t,r){g(e,t,r).forEach((function(e){"undefined"!=typeof window&&null!==window&&((new Image).src=e)}))},resolveURLTemplates:g,extractURLsFromTemplates:A,containsTemplateObject:k,isTemplateObjectEqual:R,encodeURIComponentRFC3986:b,replaceUrlMacros:y,isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},flatten:function e(t){return t.reduce((function(t,r){return t.concat(Array.isArray(r)?e(r):r)}),[])},joinArrayOfUniqueTemplateObjs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Array.isArray(e)?e:[],i=Array.isArray(t)?t:[],n=r.concat(i);return n.reduce((function(e,t){return k(t,e)||e.push(t),e}),[])},isValidTimeValue:function(e){return Number.isFinite(e)&&e>=-2},addLeadingZeros:E};function L(e){return-1!==["true","TRUE","True","1"].indexOf(e)}var w={childByName:function(e,t){var r=e.childNodes;for(var i in r){var n=r[i];if(n.nodeName===t)return n}},childrenByName:function(e,t){var r=[],i=e.childNodes;for(var n in i){var a=i[n];a.nodeName===t&&r.push(a)}return r},resolveVastAdTagURI:function(e,t){if(!t)return e;if(0===e.indexOf("//")){var r=location.protocol;return"".concat(r).concat(e)}if(-1===e.indexOf("://")){var i=t.slice(0,t.lastIndexOf("/"));return"".concat(i,"/").concat(e)}return e},parseBoolean:L,parseNodeText:function(e){return e&&(e.textContent||e.text||"").trim()},copyNodeAttribute:function(e,t,r){var i=t.getAttribute(e);i&&r.setAttribute(e,i)},parseAttributes:function(e){for(var t=e.attributes,r={},i=0;i<t.length;i++)r[t[i].nodeName]=t[i].nodeValue;return r},parseDuration:function(e){if(null==e)return-1;if(N.isNumeric(e))return parseInt(e);var t=e.split(":");if(3!==t.length)return-1;var r=t[2].split("."),i=parseInt(r[0]);2===r.length&&(i+=parseFloat("0.".concat(r[1])));var n=parseInt(60*t[1]),a=parseInt(60*t[0]*60);return isNaN(a)||isNaN(n)||isNaN(i)||n>3600||i>60?-1:a+n+i},splitVAST:function(e){var t=[],r=null;return e.forEach((function(i,n){if(i.sequence&&(i.sequence=parseInt(i.sequence,10)),i.sequence>1){var a=e[n-1];if(a&&a.sequence===i.sequence-1)return void(r&&r.push(i));delete i.sequence}r=[i],t.push(r)})),t},assignAttributes:function(e,t){if(e)for(var r in e){var i=e[r];if(i.nodeName&&i.nodeValue&&t.hasOwnProperty(i.nodeName)){var n=i.nodeValue;"boolean"==typeof t[i.nodeName]&&(n=L(n)),t[i.nodeName]=n}}},mergeWrapperAdData:function(e,t){e.errorURLTemplates=t.errorURLTemplates.concat(e.errorURLTemplates),e.impressionURLTemplates=t.impressionURLTemplates.concat(e.impressionURLTemplates),e.extensions=t.extensions.concat(e.extensions),t.viewableImpression.length>0&&(e.viewableImpression=[].concat(h(e.viewableImpression),h(t.viewableImpression))),e.followAdditionalWrappers=t.followAdditionalWrappers,e.allowMultipleAds=t.allowMultipleAds,e.fallbackOnNoAd=t.fallbackOnNoAd;var r=(t.creatives||[]).filter((function(e){return e&&"companion"===e.type})),i=r.reduce((function(e,t){return(t.variations||[]).forEach((function(t){(t.companionClickTrackingURLTemplates||[]).forEach((function(t){N.containsTemplateObject(t,e)||e.push(t)}))})),e}),[]);e.creatives=r.concat(e.creatives);var n=t.videoClickTrackingURLTemplates&&t.videoClickTrackingURLTemplates.length,a=t.videoCustomClickURLTemplates&&t.videoCustomClickURLTemplates.length;e.creatives.forEach((function(e){if(t.trackingEvents&&t.trackingEvents[e.type])for(var r in t.trackingEvents[e.type]){var o=t.trackingEvents[e.type][r];Array.isArray(e.trackingEvents[r])||(e.trackingEvents[r]=[]),e.trackingEvents[r]=e.trackingEvents[r].concat(o)}"linear"===e.type&&(n&&(e.videoClickTrackingURLTemplates=e.videoClickTrackingURLTemplates.concat(t.videoClickTrackingURLTemplates)),a&&(e.videoCustomClickURLTemplates=e.videoCustomClickURLTemplates.concat(t.videoCustomClickURLTemplates)),!t.videoClickThroughURLTemplate||null!==e.videoClickThroughURLTemplate&&void 0!==e.videoClickThroughURLTemplate||(e.videoClickThroughURLTemplate=t.videoClickThroughURLTemplate)),"companion"===e.type&&i.length&&(e.variations||[]).forEach((function(e){e.companionClickTrackingURLTemplates=N.joinArrayOfUniqueTemplateObjs(e.companionClickTrackingURLTemplates,i)}))})),t.adVerifications&&(e.adVerifications=e.adVerifications.concat(t.adVerifications)),t.blockedAdCategories&&(e.blockedAdCategories=e.blockedAdCategories.concat(t.blockedAdCategories))}};function U(e,t){var r=function(){var e=f(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),t=e.id,r=e.adId,i=e.sequence,n=e.apiFramework;return{id:t,adId:r,sequence:i,apiFramework:n,type:"companion",required:null,variations:[]}}(t);return r.required=e.getAttribute("required")||null,r.variations=w.childrenByName(e,"Companion").map((function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{id:e.id||null,adType:"companionAd",width:e.width||0,height:e.height||0,assetWidth:e.assetWidth||null,assetHeight:e.assetHeight||null,expandedWidth:e.expandedWidth||null,expandedHeight:e.expandedHeight||null,apiFramework:e.apiFramework||null,adSlotID:e.adSlotID||null,pxratio:e.pxratio||"1",renderingMode:e.renderingMode||"default",staticResources:[],htmlResources:[],iframeResources:[],adParameters:null,xmlEncoded:null,altText:null,companionClickThroughURLTemplate:null,companionClickTrackingURLTemplates:[],trackingEvents:{}}}(w.parseAttributes(e));t.htmlResources=w.childrenByName(e,"HTMLResource").reduce((function(e,t){var r=w.parseNodeText(t);return r?e.concat(r):e}),[]),t.iframeResources=w.childrenByName(e,"IFrameResource").reduce((function(e,t){var r=w.parseNodeText(t);return r?e.concat(r):e}),[]),t.staticResources=w.childrenByName(e,"StaticResource").reduce((function(e,t){var r=w.parseNodeText(t);return r?e.concat({url:r,creativeType:t.getAttribute("creativeType")||null}):e}),[]),t.altText=w.parseNodeText(w.childByName(e,"AltText"))||null;var r=w.childByName(e,"TrackingEvents");r&&w.childrenByName(r,"Tracking").forEach((function(e){var r=e.getAttribute("event"),i=w.parseNodeText(e);r&&i&&(Array.isArray(t.trackingEvents[r])||(t.trackingEvents[r]=[]),t.trackingEvents[r].push(i))})),t.companionClickTrackingURLTemplates=w.childrenByName(e,"CompanionClickTracking").map((function(e){return{id:e.getAttribute("id")||null,url:w.parseNodeText(e)}})),t.companionClickThroughURLTemplate=w.parseNodeText(w.childByName(e,"CompanionClickThrough"))||null;var i=w.childByName(e,"AdParameters");return i&&(t.adParameters=w.parseNodeText(i),t.xmlEncoded=i.getAttribute("xmlEncoded")||null),t})),r}function C(e){return"linear"===e.type}function I(e,t){var r,i=function(){var e=f(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),t=e.id,r=e.adId,i=e.sequence,n=e.apiFramework;return{id:t,adId:r,sequence:i,apiFramework:n,type:"linear",duration:0,skipDelay:null,mediaFiles:[],mezzanine:null,interactiveCreativeFile:null,closedCaptionFiles:[],videoClickThroughURLTemplate:null,videoClickTrackingURLTemplates:[],videoCustomClickURLTemplates:[],adParameters:null,icons:[],trackingEvents:{}}}(t);i.duration=w.parseDuration(w.parseNodeText(w.childByName(e,"Duration")));var n=e.getAttribute("skipoffset");if(null==n)i.skipDelay=null;else if("%"===n.charAt(n.length-1)&&-1!==i.duration){var a=parseInt(n,10);i.skipDelay=i.duration*(a/100)}else i.skipDelay=w.parseDuration(n);var o=w.childByName(e,"VideoClicks");if(o){var s=w.childByName(o,"ClickThrough");i.videoClickThroughURLTemplate=s?{id:s.getAttribute("id")||null,url:w.parseNodeText(s)}:null,w.childrenByName(o,"ClickTracking").forEach((function(e){i.videoClickTrackingURLTemplates.push({id:e.getAttribute("id")||null,url:w.parseNodeText(e)})})),w.childrenByName(o,"CustomClick").forEach((function(e){i.videoCustomClickURLTemplates.push({id:e.getAttribute("id")||null,url:w.parseNodeText(e)})}))}var l=w.childByName(e,"AdParameters");l&&(i.adParameters=w.parseNodeText(l)),w.childrenByName(e,"TrackingEvents").forEach((function(e){w.childrenByName(e,"Tracking").forEach((function(e){var t=e.getAttribute("event"),n=w.parseNodeText(e);if(t&&n){if("progress"===t){if(!(r=e.getAttribute("offset")))return;t="%"===r.charAt(r.length-1)?"progress-".concat(r):"progress-".concat(Math.round(w.parseDuration(r)))}Array.isArray(i.trackingEvents[t])||(i.trackingEvents[t]=[]),i.trackingEvents[t].push(n)}}))})),w.childrenByName(e,"MediaFiles").forEach((function(e){w.childrenByName(e,"MediaFile").forEach((function(e){i.mediaFiles.push(function(e){var t={id:null,fileURL:null,fileSize:0,deliveryType:"progressive",mimeType:null,mediaType:null,codec:null,bitrate:0,minBitrate:0,maxBitrate:0,width:0,height:0,apiFramework:null,scalable:null,maintainAspectRatio:null};t.id=e.getAttribute("id"),t.fileURL=w.parseNodeText(e),t.deliveryType=e.getAttribute("delivery"),t.codec=e.getAttribute("codec"),t.mimeType=e.getAttribute("type"),t.mediaType=e.getAttribute("mediaType")||"2D",t.apiFramework=e.getAttribute("apiFramework"),t.fileSize=parseInt(e.getAttribute("fileSize")||0),t.bitrate=parseInt(e.getAttribute("bitrate")||0),t.minBitrate=parseInt(e.getAttribute("minBitrate")||0),t.maxBitrate=parseInt(e.getAttribute("maxBitrate")||0),t.width=parseInt(e.getAttribute("width")||0),t.height=parseInt(e.getAttribute("height")||0);var r=e.getAttribute("scalable");r&&"string"==typeof r&&(t.scalable=w.parseBoolean(r));var i=e.getAttribute("maintainAspectRatio");i&&"string"==typeof i&&(t.maintainAspectRatio=w.parseBoolean(i));return t}(e))}));var t=w.childByName(e,"InteractiveCreativeFile");t&&(i.interactiveCreativeFile=function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:e.type||null,apiFramework:e.apiFramework||null,variableDuration:w.parseBoolean(e.variableDuration),fileURL:null}}(w.parseAttributes(e));return t.fileURL=w.parseNodeText(e),t}(t));var r=w.childByName(e,"ClosedCaptionFiles");r&&w.childrenByName(r,"ClosedCaptionFile").forEach((function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:e.type||null,language:e.language||null,fileURL:null}}(w.parseAttributes(e));t.fileURL=w.parseNodeText(e),i.closedCaptionFiles.push(t)}));var n,a,o,s=w.childByName(e,"Mezzanine"),l=(n=s,a={},o=!1,["delivery","type","width","height"].forEach((function(e){n&&n.getAttribute(e)?a[e]=n.getAttribute(e):o=!0})),o?null:a);if(l){var u={id:null,fileURL:null,delivery:null,codec:null,type:null,width:0,height:0,fileSize:0,mediaType:"2D"};u.id=s.getAttribute("id"),u.fileURL=w.parseNodeText(s),u.delivery=l.delivery,u.codec=s.getAttribute("codec"),u.type=l.type,u.width=parseInt(l.width,10),u.height=parseInt(l.height,10),u.fileSize=parseInt(s.getAttribute("fileSize"),10),u.mediaType=s.getAttribute("mediaType")||"2D",i.mezzanine=u}}));var u=w.childByName(e,"Icons");return u&&w.childrenByName(u,"Icon").forEach((function(e){i.icons.push(function(e){var t={program:null,height:0,width:0,xPosition:0,yPosition:0,apiFramework:null,offset:null,duration:0,type:null,staticResource:null,htmlResource:null,iframeResource:null,pxratio:"1",iconClickThroughURLTemplate:null,iconClickTrackingURLTemplates:[],iconViewTrackingURLTemplate:null};t.program=e.getAttribute("program"),t.height=parseInt(e.getAttribute("height")||0),t.width=parseInt(e.getAttribute("width")||0),t.xPosition=function(e){if(-1!==["left","right"].indexOf(e))return e;return parseInt(e||0)}(e.getAttribute("xPosition")),t.yPosition=function(e){if(-1!==["top","bottom"].indexOf(e))return e;return parseInt(e||0)}(e.getAttribute("yPosition")),t.apiFramework=e.getAttribute("apiFramework"),t.pxratio=e.getAttribute("pxratio")||"1",t.offset=w.parseDuration(e.getAttribute("offset")),t.duration=w.parseDuration(e.getAttribute("duration")),w.childrenByName(e,"HTMLResource").forEach((function(e){t.type=e.getAttribute("creativeType")||"text/html",t.htmlResource=w.parseNodeText(e)})),w.childrenByName(e,"IFrameResource").forEach((function(e){t.type=e.getAttribute("creativeType")||0,t.iframeResource=w.parseNodeText(e)})),w.childrenByName(e,"StaticResource").forEach((function(e){t.type=e.getAttribute("creativeType")||0,t.staticResource=w.parseNodeText(e)}));var r=w.childByName(e,"IconClicks");r&&(t.iconClickThroughURLTemplate=w.parseNodeText(w.childByName(r,"IconClickThrough")),w.childrenByName(r,"IconClickTracking").forEach((function(e){t.iconClickTrackingURLTemplates.push({id:e.getAttribute("id")||null,url:w.parseNodeText(e)})})));return t.iconViewTrackingURLTemplate=w.parseNodeText(w.childByName(e,"IconViewTracking")),t}(e))})),i}function x(e,t){var r=function(){var e=f(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),t=e.id,r=e.adId,i=e.sequence,n=e.apiFramework;return{id:t,adId:r,sequence:i,apiFramework:n,type:"nonlinear",variations:[],trackingEvents:{}}}(t);return w.childrenByName(e,"TrackingEvents").forEach((function(e){var t,i;w.childrenByName(e,"Tracking").forEach((function(e){t=e.getAttribute("event"),i=w.parseNodeText(e),t&&i&&(Array.isArray(r.trackingEvents[t])||(r.trackingEvents[t]=[]),r.trackingEvents[t].push(i))}))})),w.childrenByName(e,"NonLinear").forEach((function(e){var t={id:null,width:0,height:0,expandedWidth:0,expandedHeight:0,scalable:!0,maintainAspectRatio:!0,minSuggestedDuration:0,apiFramework:"static",adType:"nonLinearAd",type:null,staticResource:null,htmlResource:null,iframeResource:null,nonlinearClickThroughURLTemplate:null,nonlinearClickTrackingURLTemplates:[],adParameters:null};t.id=e.getAttribute("id")||null,t.width=e.getAttribute("width"),t.height=e.getAttribute("height"),t.expandedWidth=e.getAttribute("expandedWidth"),t.expandedHeight=e.getAttribute("expandedHeight"),t.scalable=w.parseBoolean(e.getAttribute("scalable")),t.maintainAspectRatio=w.parseBoolean(e.getAttribute("maintainAspectRatio")),t.minSuggestedDuration=w.parseDuration(e.getAttribute("minSuggestedDuration")),t.apiFramework=e.getAttribute("apiFramework"),w.childrenByName(e,"HTMLResource").forEach((function(e){t.type=e.getAttribute("creativeType")||"text/html",t.htmlResource=w.parseNodeText(e)})),w.childrenByName(e,"IFrameResource").forEach((function(e){t.type=e.getAttribute("creativeType")||0,t.iframeResource=w.parseNodeText(e)})),w.childrenByName(e,"StaticResource").forEach((function(e){t.type=e.getAttribute("creativeType")||0,t.staticResource=w.parseNodeText(e)}));var i=w.childByName(e,"AdParameters");i&&(t.adParameters=w.parseNodeText(i)),t.nonlinearClickThroughURLTemplate=w.parseNodeText(w.childByName(e,"NonLinearClickThrough")),w.childrenByName(e,"NonLinearClickTracking").forEach((function(e){t.nonlinearClickTrackingURLTemplates.push({id:e.getAttribute("id")||null,url:w.parseNodeText(e)})})),r.variations.push(t)})),r}function S(e){var t=[];return e.forEach((function(e){var r=O(e);r&&t.push(r)})),t}function O(e){if("#comment"===e.nodeName)return null;var t,r={name:null,value:null,attributes:{},children:[]},i=e.attributes,n=e.childNodes;if(r.name=e.nodeName,e.attributes)for(var a in i)if(i.hasOwnProperty(a)){var o=i[a];o.nodeName&&o.nodeValue&&(r.attributes[o.nodeName]=o.nodeValue)}for(var s in n)if(n.hasOwnProperty(s)){var l=O(n[s]);l&&r.children.push(l)}if(0===r.children.length||1===r.children.length&&["#cdata-section","#text"].indexOf(r.children[0].name)>=0){var u=w.parseNodeText(e);""!==u&&(r.value=u),r.children=[]}return null===(t=r).value&&0===Object.keys(t.attributes).length&&0===t.children.length?null:r}function D(e){var t=[];return e.forEach((function(e){var r,i={id:e.getAttribute("id")||null,adId:V(e),sequence:e.getAttribute("sequence")||null,apiFramework:e.getAttribute("apiFramework")||null},n=[];w.childrenByName(e,"UniversalAdId").forEach((function(e){var t={idRegistry:e.getAttribute("idRegistry")||"unknown",value:w.parseNodeText(e)};n.push(t)}));var a=w.childByName(e,"CreativeExtensions");for(var o in a&&(r=S(w.childrenByName(a,"CreativeExtension"))),e.childNodes){var s=e.childNodes[o],l=void 0;switch(s.nodeName){case"Linear":l=I(s,i);break;case"NonLinearAds":l=x(s,i);break;case"CompanionAds":l=U(s,i)}l&&(n&&(l.universalAdIds=n),r&&(l.creativeExtensions=r),t.push(l))}})),t}function V(e){return e.getAttribute("AdID")||e.getAttribute("adID")||e.getAttribute("adId")||null}var P={Wrapper:{subElements:["VASTAdTagURI","Impression"]},BlockedAdCategories:{attributes:["authority"]},InLine:{subElements:["AdSystem","AdTitle","Impression","AdServingId","Creatives"]},Category:{attributes:["authority"]},Pricing:{attributes:["model","currency"]},Verification:{oneOfinLineResources:["JavaScriptResource","ExecutableResource"],attributes:["vendor"]},UniversalAdId:{attributes:["idRegistry"]},JavaScriptResource:{attributes:["apiFramework","browserOptional"]},ExecutableResource:{attributes:["apiFramework","type"]},Tracking:{attributes:["event"]},Creatives:{subElements:["Creative"]},Creative:{subElements:["UniversalAdId"]},Linear:{subElements:["MediaFiles","Duration"]},MediaFiles:{subElements:["MediaFile"]},MediaFile:{attributes:["delivery","type","width","height"]},Mezzanine:{attributes:["delivery","type","width","height"]},NonLinear:{oneOfinLineResources:["StaticResource","IFrameResource","HTMLResource"],attributes:["width","height"]},Companion:{oneOfinLineResources:["StaticResource","IFrameResource","HTMLResource"],attributes:["width","height"]},StaticResource:{attributes:["creativeType"]},Icons:{subElements:["Icon"]},Icon:{oneOfinLineResources:["StaticResource","IFrameResource","HTMLResource"]}};function B(e,t){if(P[e.nodeName]&&P[e.nodeName].attributes){var r=P[e.nodeName].attributes.filter((function(t){return!e.getAttribute(t)}));r.length>0&&j({name:e.nodeName,parentName:e.parentNode.nodeName,attributes:r},t)}}function F(e,t,r){var i=P[e.nodeName],n=!r&&"Wrapper"!==e.nodeName;if(i&&!n){if(i.subElements){var a=i.subElements.filter((function(t){return!w.childByName(e,t)}));a.length>0&&j({name:e.nodeName,parentName:e.parentNode.nodeName,subElements:a},t)}if(r&&i.oneOfinLineResources)i.oneOfinLineResources.some((function(t){return w.childByName(e,t)}))||j({name:e.nodeName,parentName:e.parentNode.nodeName,oneOfResources:i.oneOfinLineResources},t)}}function M(e){return e.children&&0!==e.children.length}function j(e,t){var r=e.name,i=e.parentName,n=e.attributes,a=e.subElements,o=e.oneOfResources,s="Element '".concat(r,"'");t("VAST-warning",{message:s+=n?" missing required attribute(s) '".concat(n.join(", "),"' "):a?" missing required sub element(s) '".concat(a.join(", "),"' "):o?" must provide one of the following '".concat(o.join(", "),"' "):" is empty",parentElement:i,specVersion:4.1})}var W={verifyRequiredValues:function e(t,r,i){if(t&&t.nodeName)if("InLine"===t.nodeName&&(i=!0),B(t,r),M(t)){F(t,r,i);for(var n=0;n<t.children.length;n++)e(t.children[n],r,i)}else 0===w.parseNodeText(t).length&&j({name:t.nodeName,parentName:t.parentNode.nodeName},r)},hasSubElements:M,emitMissingValueWarning:j,verifyRequiredAttributes:B,verifyRequiredSubElements:F};function q(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.allowMultipleAds,n=r.followAdditionalWrappers,a=e.childNodes;for(var o in a){var s=a[o];if(-1!==["Wrapper","InLine"].indexOf(s.nodeName)&&("Wrapper"!==s.nodeName||!1!==n)){if(w.copyNodeAttribute("id",e,s),w.copyNodeAttribute("sequence",e,s),w.copyNodeAttribute("adType",e,s),"Wrapper"===s.nodeName)return{ad:G(s,t),type:"WRAPPER"};if("InLine"===s.nodeName)return{ad:H(s,t,{allowMultipleAds:i}),type:"INLINE"}}}}function H(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.allowMultipleAds;return!1===i&&e.getAttribute("sequence")?null:_(e,t)}function _(e,t){var r=[];t&&W.verifyRequiredValues(e,t);var i=e.childNodes,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{id:e.id||null,sequence:e.sequence||null,adType:e.adType||null,adServingId:null,categories:[],expires:null,viewableImpression:[],system:null,title:null,description:null,advertiser:null,pricing:null,survey:null,errorURLTemplates:[],impressionURLTemplates:[],creatives:[],extensions:[],adVerifications:[],blockedAdCategories:[],followAdditionalWrappers:!0,allowMultipleAds:!1,fallbackOnNoAd:null}}(w.parseAttributes(e));for(var a in i){var o=i[a];switch(o.nodeName){case"Error":n.errorURLTemplates.push(w.parseNodeText(o));break;case"Impression":n.impressionURLTemplates.push({id:o.getAttribute("id")||null,url:w.parseNodeText(o)});break;case"Creatives":n.creatives=D(w.childrenByName(o,"Creative"));break;case"Extensions":var s=w.childrenByName(o,"Extension");n.extensions=S(s),n.adVerifications.length||(r=Y(s));break;case"AdVerifications":n.adVerifications=z(w.childrenByName(o,"Verification"));break;case"AdSystem":n.system={value:w.parseNodeText(o),version:o.getAttribute("version")||null};break;case"AdTitle":n.title=w.parseNodeText(o);break;case"AdServingId":n.adServingId=w.parseNodeText(o);break;case"Category":n.categories.push({authority:o.getAttribute("authority")||null,value:w.parseNodeText(o)});break;case"Expires":n.expires=parseInt(w.parseNodeText(o),10);break;case"ViewableImpression":n.viewableImpression.push(X(o));break;case"Description":n.description=w.parseNodeText(o);break;case"Advertiser":n.advertiser={id:o.getAttribute("id")||null,value:w.parseNodeText(o)};break;case"Pricing":n.pricing={value:w.parseNodeText(o),model:o.getAttribute("model")||null,currency:o.getAttribute("currency")||null};break;case"Survey":n.survey=w.parseNodeText(o);break;case"BlockedAdCategories":n.blockedAdCategories.push({authority:o.getAttribute("authority")||null,value:w.parseNodeText(o)})}}return r.length&&(n.adVerifications=n.adVerifications.concat(r)),n}function G(e,t){var r=_(e,t),i=e.getAttribute("followAdditionalWrappers"),n=e.getAttribute("allowMultipleAds"),a=e.getAttribute("fallbackOnNoAd");r.followAdditionalWrappers=!i||w.parseBoolean(i),r.allowMultipleAds=!!n&&w.parseBoolean(n),r.fallbackOnNoAd=a?w.parseBoolean(a):null;var o=w.childByName(e,"VASTAdTagURI");if(o?r.nextWrapperURL=w.parseNodeText(o):(o=w.childByName(e,"VASTAdTagURL"))&&(r.nextWrapperURL=w.parseNodeText(w.childByName(o,"URL"))),r.creatives.forEach((function(e){if(-1!==["linear","nonlinear"].indexOf(e.type)){if(e.trackingEvents){r.trackingEvents||(r.trackingEvents={}),r.trackingEvents[e.type]||(r.trackingEvents[e.type]={});var t=function(t){var i=e.trackingEvents[t];Array.isArray(r.trackingEvents[e.type][t])||(r.trackingEvents[e.type][t]=[]),i.forEach((function(i){r.trackingEvents[e.type][t].push(i)}))};for(var i in e.trackingEvents)t(i)}e.videoClickTrackingURLTemplates&&(Array.isArray(r.videoClickTrackingURLTemplates)||(r.videoClickTrackingURLTemplates=[]),e.videoClickTrackingURLTemplates.forEach((function(e){r.videoClickTrackingURLTemplates.push(e)}))),e.videoClickThroughURLTemplate&&(r.videoClickThroughURLTemplate=e.videoClickThroughURLTemplate),e.videoCustomClickURLTemplates&&(Array.isArray(r.videoCustomClickURLTemplates)||(r.videoCustomClickURLTemplates=[]),e.videoCustomClickURLTemplates.forEach((function(e){r.videoCustomClickURLTemplates.push(e)})))}})),r.nextWrapperURL)return r}function z(e){var t=[];return e.forEach((function(e){var r={resource:null,vendor:null,browserOptional:!1,apiFramework:null,type:null,parameters:null,trackingEvents:{}},i=e.childNodes;for(var n in w.assignAttributes(e.attributes,r),i){var a=i[n];switch(a.nodeName){case"JavaScriptResource":case"ExecutableResource":r.resource=w.parseNodeText(a),w.assignAttributes(a.attributes,r);break;case"VerificationParameters":r.parameters=w.parseNodeText(a)}}var o=w.childByName(e,"TrackingEvents");o&&w.childrenByName(o,"Tracking").forEach((function(e){var t=e.getAttribute("event"),i=w.parseNodeText(e);t&&i&&(Array.isArray(r.trackingEvents[t])||(r.trackingEvents[t]=[]),r.trackingEvents[t].push(i))})),t.push(r)})),t}function Y(e){var t=null,r=[];return e.some((function(e){return t=w.childByName(e,"AdVerifications")})),t&&(r=z(w.childrenByName(t,"Verification"))),r}function X(e){var t={};t.id=e.getAttribute("id")||null;var r=e.childNodes;for(var i in r){var n=r[i],a=n.nodeName,o=w.parseNodeText(n);if(("Viewable"===a||"NotViewable"===a||"ViewUndetermined"===a)&&o){var s=a.toLowerCase();Array.isArray(t[s])||(t[s]=[]),t[s].push(o)}}return t}var K=function(){function e(){n(this,e),this._handlers=[]}return o(e,[{key:"on",value:function(e,t){if("function"!=typeof t)throw new TypeError("The handler argument must be of type Function. Received type ".concat(i(t)));if(!e)throw new TypeError("The event argument must be of type String. Received type ".concat(i(e)));return this._handlers.push({event:e,handler:t}),this}},{key:"once",value:function(e,t){return this.on(e,function(e,t,r){var i={fired:!1,wrapFn:void 0};function n(){i.fired||(e.off(t,i.wrapFn),i.fired=!0,r.bind(e).apply(void 0,arguments))}return i.wrapFn=n,n}(this,e,t))}},{key:"off",value:function(e,t){return this._handlers=this._handlers.filter((function(r){return r.event!==e||r.handler!==t})),this}},{key:"emit",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var n=!1;return this._handlers.forEach((function(t){"*"===t.event&&(n=!0,t.handler.apply(t,[e].concat(r))),t.event===e&&(n=!0,t.handler.apply(t,r))})),n}},{key:"removeAllListeners",value:function(e){return e?(this._handlers=this._handlers.filter((function(t){return t.event!==e})),this):(this._handlers=[],this)}},{key:"listenerCount",value:function(e){return this._handlers.filter((function(t){return t.event===e})).length}},{key:"listeners",value:function(e){return this._handlers.reduce((function(t,r){return r.event===e&&t.push(r.handler),t}),[])}},{key:"eventNames",value:function(){return this._handlers.map((function(e){return e.event}))}}]),e}();var Q={get:function(e,t,r){r(new Error("Please bundle the library for node to use the node urlHandler"))}},Z=12e4;function J(){try{var e=new window.XMLHttpRequest;return"withCredentials"in e?e:null}catch(e){return null}}function $(e,t,r){var i=r?408:e.status,n=r?"XHRURLHandler: Request timed out after ".concat(e.timeout," ms (").concat(i,")"):"XHRURLHandler: ".concat(e.statusText," (").concat(i,")");t(new Error(n),null,{statusCode:i})}var ee={get:function(e,t,r){if("https:"===window.location.protocol&&0===e.indexOf("http://"))return r(new Error("XHRURLHandler: Cannot go from HTTPS to HTTP."));try{var i=J();i.open("GET",e),i.timeout=t.timeout||Z,i.withCredentials=t.withCredentials||!1,i.overrideMimeType&&i.overrideMimeType("text/xml"),i.onload=function(){return function(e,t){200===e.status?t(null,e.responseXML,{byteLength:e.response.length,statusCode:e.status}):$(e,t,!1)}(i,r)},i.onerror=function(){return $(i,r,!1)},i.onabort=function(){return $(i,r,!1)},i.ontimeout=function(){return $(i,r,!0)},i.send()}catch(e){r(new Error("XHRURLHandler: Unexpected error"))}},supported:function(){return!!J()}};var te={get:function(e,t,r){return r||("function"==typeof t&&(r=t),t={}),"undefined"==typeof window||null===window?Q.get(e,t,r):ee.supported()?ee.get(e,t,r):r(new Error("Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"))}};var re=0,ie=0,ne=function(e,t){!e||!t||e<=0||t<=0||(ie=(ie*re+8*e/t)/++re)},ae={ERRORCODE:900,extensions:[]},oe=function(e){l(r,e);var t=p(r);function r(){var e;return n(this,r),(e=t.call(this)).remainingAds=[],e.parentURLs=[],e.errorURLTemplates=[],e.rootErrorURLTemplates=[],e.maxWrapperDepth=null,e.URLTemplateFilters=[],e.fetchingOptions={},e.parsingOptions={},e}return o(r,[{key:"addURLTemplateFilter",value:function(e){"function"==typeof e&&this.URLTemplateFilters.push(e)}},{key:"removeURLTemplateFilter",value:function(){this.URLTemplateFilters.pop()}},{key:"countURLTemplateFilters",value:function(){return this.URLTemplateFilters.length}},{key:"clearURLTemplateFilters",value:function(){this.URLTemplateFilters=[]}},{key:"trackVastError",value:function(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];this.emit("VAST-error",Object.assign.apply(Object,[{},ae,t].concat(i))),N.track(e,t)}},{key:"getErrorURLTemplates",value:function(){return this.rootErrorURLTemplates.concat(this.errorURLTemplates)}},{key:"getEstimatedBitrate",value:function(){return ie}},{key:"fetchVAST",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return new Promise((function(a,o){t.URLTemplateFilters.forEach((function(t){e=t(e)})),t.parentURLs.push(e);var s=Date.now();t.emit("VAST-resolving",{url:e,previousUrl:i,wrapperDepth:r,maxWrapperDepth:t.maxWrapperDepth,timeout:t.fetchingOptions.timeout,wrapperAd:n}),t.urlHandler.get(e,t.fetchingOptions,(function(n,l){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=Math.round(Date.now()-s),d=Object.assign({url:e,previousUrl:i,wrapperDepth:r,error:n,duration:c},u);t.emit("VAST-resolved",d),ne(u.byteLength,c),n?o(n):a(l)}))}))}},{key:"initParsingStatus",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.errorURLTemplates=[],this.fetchingOptions={timeout:e.timeout||Z,withCredentials:e.withCredentials},this.maxWrapperDepth=e.wrapperLimit||10,this.parentURLs=[],this.parsingOptions={allowMultipleAds:e.allowMultipleAds},this.remainingAds=[],this.rootErrorURLTemplates=[],this.rootURL="",this.urlHandler=e.urlHandler||e.urlhandler||te,this.vastVersion=null,ne(e.byteLength,e.requestDuration)}},{key:"getRemainingAds",value:function(e){var t=this;if(0===this.remainingAds.length)return Promise.reject(new Error("No more ads are available for the given VAST"));var r=e?N.flatten(this.remainingAds):this.remainingAds.shift();return this.errorURLTemplates=[],this.parentURLs=[],this.resolveAds(r,{wrapperDepth:0,url:this.rootURL}).then((function(e){return t.buildVASTResponse(e)}))}},{key:"getAndParseVAST",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.initParsingStatus(r),this.URLTemplateFilters.forEach((function(t){e=t(e)})),this.rootURL=e,this.fetchVAST(e).then((function(i){return r.previousUrl=e,r.isRootVAST=!0,r.url=e,t.parse(i,r).then((function(e){return t.buildVASTResponse(e)}))}))}},{key:"parseVAST",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.initParsingStatus(r),r.isRootVAST=!0,this.parse(e,r).then((function(e){return t.buildVASTResponse(e)}))}},{key:"buildVASTResponse",value:function(e){var t,r={ads:(t={ads:e,errorURLTemplates:this.getErrorURLTemplates(),version:this.vastVersion}).ads||[],errorURLTemplates:t.errorURLTemplates||[],version:t.version||null};return this.completeWrapperResolving(r),r}},{key:"parseVastXml",value:function(e,t){var r=t.isRootVAST,i=void 0!==r&&r,n=t.url,a=void 0===n?null:n,o=t.wrapperDepth,s=void 0===o?0:o,l=t.allowMultipleAds,u=t.followAdditionalWrappers;if(!e||!e.documentElement||"VAST"!==e.documentElement.nodeName)throw this.emit("VAST-ad-parsed",{type:"ERROR",url:a,wrapperDepth:s}),new Error("Invalid VAST XMLDocument");var c=[],d=e.documentElement.childNodes,p=e.documentElement.getAttribute("version");for(var h in i&&p&&(this.vastVersion=p),d){var v=d[h];if("Error"===v.nodeName){var f=w.parseNodeText(v);i?this.rootErrorURLTemplates.push(f):this.errorURLTemplates.push(f)}else if("Ad"===v.nodeName){if(this.vastVersion&&parseFloat(this.vastVersion)<3)l=!0;else if(!1===l&&c.length>1)break;var m=q(v,this.emit.bind(this),{allowMultipleAds:l,followAdditionalWrappers:u});m.ad?(c.push(m.ad),this.emit("VAST-ad-parsed",{type:m.type,url:a,wrapperDepth:s,adIndex:c.length-1,vastVersion:p})):this.trackVastError(this.getErrorURLTemplates(),{ERRORCODE:101})}}return c}},{key:"parse",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.url,i=void 0===r?null:r,n=t.resolveAll,a=void 0===n||n,o=t.wrapperSequence,s=void 0===o?null:o,l=t.previousUrl,u=void 0===l?null:l,c=t.wrapperDepth,d=void 0===c?0:c,p=t.isRootVAST,h=void 0!==p&&p,v=t.followAdditionalWrappers,f=t.allowMultipleAds,m=[];this.vastVersion&&parseFloat(this.vastVersion)<3&&h&&(f=!0);try{m=this.parseVastXml(e,{isRootVAST:h,url:i,wrapperDepth:d,allowMultipleAds:f,followAdditionalWrappers:v})}catch(e){return Promise.reject(e)}return 1===m.length&&null!=s&&(m[0].sequence=s),!1===a&&(this.remainingAds=w.splitVAST(m),m=this.remainingAds.shift()),this.resolveAds(m,{wrapperDepth:d,previousUrl:u,url:i})}},{key:"resolveAds",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0,i=r.wrapperDepth,n=r.previousUrl,a=r.url,o=[];return n=a,t.forEach((function(t){var r=e.resolveWrappers(t,i,n);o.push(r)})),Promise.all(o).then((function(t){var r=N.flatten(t);if(!r&&e.remainingAds.length>0){var o=e.remainingAds.shift();return e.resolveAds(o,{wrapperDepth:i,previousUrl:n,url:a})}return r}))}},{key:"resolveWrappers",value:function(e,t,r){var i=this;return new Promise((function(n){var a;if(t++,!e.nextWrapperURL)return delete e.nextWrapperURL,n(e);if(t>=i.maxWrapperDepth||-1!==i.parentURLs.indexOf(e.nextWrapperURL))return e.errorCode=302,delete e.nextWrapperURL,n(e);e.nextWrapperURL=w.resolveVastAdTagURI(e.nextWrapperURL,r),i.URLTemplateFilters.forEach((function(t){e.nextWrapperURL=t(e.nextWrapperURL)}));var o=null!==(a=i.parsingOptions.allowMultipleAds)&&void 0!==a?a:e.allowMultipleAds,s=e.sequence;i.fetchVAST(e.nextWrapperURL,t,r,e).then((function(a){return i.parse(a,{url:e.nextWrapperURL,previousUrl:r,wrapperSequence:s,wrapperDepth:t,followAdditionalWrappers:e.followAdditionalWrappers,allowMultipleAds:o}).then((function(t){if(delete e.nextWrapperURL,0===t.length)return e.creatives=[],n(e);t.forEach((function(t){t&&w.mergeWrapperAdData(t,e)})),n(t)}))})).catch((function(t){e.errorCode=301,e.errorMessage=t.message,n(e)}))}))}},{key:"completeWrapperResolving",value:function(e){if(0===e.ads.length)this.trackVastError(e.errorURLTemplates,{ERRORCODE:303});else for(var t=e.ads.length-1;t>=0;t--){var r=e.ads[t];(r.errorCode||0===r.creatives.length)&&(this.trackVastError(r.errorURLTemplates.concat(e.errorURLTemplates),{ERRORCODE:r.errorCode||303},{ERRORMESSAGE:r.errorMessage||""},{extensions:r.extensions},{system:r.system}),e.ads.splice(t,1))}}}]),r}(K),se=null,le={data:{},length:0,getItem:function(e){return this.data[e]},setItem:function(e,t){this.data[e]=t,this.length=Object.keys(this.data).length},removeItem:function(e){delete this.data[e],this.length=Object.keys(this.data).length},clear:function(){this.data={},this.length=0}},ue=function(){function e(){n(this,e),this.storage=this.initStorage()}return o(e,[{key:"initStorage",value:function(){if(se)return se;try{se="undefined"!=typeof window&&null!==window?window.localStorage||window.sessionStorage:null}catch(e){se=null}return se&&!this.isStorageDisabled(se)||(se=le).clear(),se}},{key:"isStorageDisabled",value:function(e){var t="__VASTStorage__";try{if(e.setItem(t,t),e.getItem(t)!==t)return e.removeItem(t),!0}catch(e){return!0}return e.removeItem(t),!1}},{key:"getItem",value:function(e){return this.storage.getItem(e)}},{key:"setItem",value:function(e,t){return this.storage.setItem(e,t)}},{key:"removeItem",value:function(e){return this.storage.removeItem(e)}},{key:"clear",value:function(){return this.storage.clear()}}]),e}(),ce=function(){function e(t,r,i){n(this,e),this.cappingFreeLunch=t||0,this.cappingMinimumTimeInterval=r||0,this.defaultOptions={withCredentials:!1,timeout:0},this.vastParser=new oe,this.storage=i||new ue,void 0===this.lastSuccessfulAd&&(this.lastSuccessfulAd=0),void 0===this.totalCalls&&(this.totalCalls=0),void 0===this.totalCallsTimeout&&(this.totalCallsTimeout=0)}return o(e,[{key:"getParser",value:function(){return this.vastParser}},{key:"lastSuccessfulAd",get:function(){return this.storage.getItem("vast-client-last-successful-ad")},set:function(e){this.storage.setItem("vast-client-last-successful-ad",e)}},{key:"totalCalls",get:function(){return this.storage.getItem("vast-client-total-calls")},set:function(e){this.storage.setItem("vast-client-total-calls",e)}},{key:"totalCallsTimeout",get:function(){return this.storage.getItem("vast-client-total-calls-timeout")},set:function(e){this.storage.setItem("vast-client-total-calls-timeout",e)}},{key:"hasRemainingAds",value:function(){return this.vastParser.remainingAds.length>0}},{key:"getNextAds",value:function(e){return this.vastParser.getRemainingAds(e)}},{key:"get",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=Date.now();return(r=Object.assign({},this.defaultOptions,r)).hasOwnProperty("resolveAll")||(r.resolveAll=!1),this.totalCallsTimeout<i?(this.totalCalls=1,this.totalCallsTimeout=i+36e5):this.totalCalls++,new Promise((function(n,a){if(t.cappingFreeLunch>=t.totalCalls)return a(new Error("VAST call canceled – FreeLunch capping not reached yet ".concat(t.totalCalls,"/").concat(t.cappingFreeLunch)));var o=i-t.lastSuccessfulAd;if(o<0)t.lastSuccessfulAd=0;else if(o<t.cappingMinimumTimeInterval)return a(new Error("VAST call canceled – (".concat(t.cappingMinimumTimeInterval,")ms minimum interval reached")));t.vastParser.getAndParseVAST(e,r).then((function(e){return n(e)})).catch((function(e){return a(e)}))}))}}]),e}(),de=function(e){l(a,e);var t=p(a);function a(e,r,i){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;for(var l in n(this,a),(o=t.call(this)).ad=r,o.creative=i,o.variation=s,o.muted=!1,o.impressed=!1,o.skippable=!1,o.trackingEvents={},o.lastPercentage=0,o._alreadyTriggeredQuartiles={},o.emitAlwaysEvents=["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","resume","pause","rewind","skip","closeLinear","close"],o.creative.trackingEvents){var u=o.creative.trackingEvents[l];o.trackingEvents[l]=u.slice(0)}return C(o.creative)?o._initLinearTracking():o._initVariationTracking(),e&&o.on("start",(function(){e.lastSuccessfulAd=Date.now()})),o}return o(a,[{key:"_initLinearTracking",value:function(){this.linear=!0,this.skipDelay=this.creative.skipDelay,this.setDuration(this.creative.duration),this.clickThroughURLTemplate=this.creative.videoClickThroughURLTemplate,this.clickTrackingURLTemplates=this.creative.videoClickTrackingURLTemplates}},{key:"_initVariationTracking",value:function(){if(this.linear=!1,this.skipDelay=-1,this.variation){for(var e in this.variation.trackingEvents){var t=this.variation.trackingEvents[e];this.trackingEvents[e]?this.trackingEvents[e]=this.trackingEvents[e].concat(t.slice(0)):this.trackingEvents[e]=t.slice(0)}"nonLinearAd"===this.variation.adType?(this.clickThroughURLTemplate=this.variation.nonlinearClickThroughURLTemplate,this.clickTrackingURLTemplates=this.variation.nonlinearClickTrackingURLTemplates,this.setDuration(this.variation.minSuggestedDuration)):function(e){return"companionAd"===e.adType}(this.variation)&&(this.clickThroughURLTemplate=this.variation.companionClickThroughURLTemplate,this.clickTrackingURLTemplates=this.variation.companionClickTrackingURLTemplates)}}},{key:"setDuration",value:function(e){N.isValidTimeValue(e)&&(this.assetDuration=e,this.quartiles={firstQuartile:Math.round(25*this.assetDuration)/100,midpoint:Math.round(50*this.assetDuration)/100,thirdQuartile:Math.round(75*this.assetDuration)/100})}},{key:"setProgress",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(N.isValidTimeValue(e)&&"object"===i(r)){var n=this.skipDelay||-1;if(-1===n||this.skippable||(n>e?this.emit("skip-countdown",n-e):(this.skippable=!0,this.emit("skip-countdown",0))),this.assetDuration>0){var a=Math.round(e/this.assetDuration*100),o=[];if(e>0){o.push("start");for(var s=this.lastPercentage;s<a;s++)o.push("progress-".concat(s+1,"%"));for(var l in o.push("progress-".concat(Math.round(e))),this.quartiles)this.isQuartileReached(l,this.quartiles[l],e)&&(o.push(l),this._alreadyTriggeredQuartiles[l]=!0);this.lastPercentage=a}o.forEach((function(e){t.track(e,{macros:r,once:!0})})),e<this.progress&&this.track("rewind",{macros:r})}this.progress=e}}},{key:"isQuartileReached",value:function(e,t,r){var i=!1;return t<=r&&!this._alreadyTriggeredQuartiles[e]&&(i=!0),i}},{key:"setMuted",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"boolean"==typeof e&&"object"===i(t)&&(this.muted!==e&&this.track(e?"mute":"unmute",{macros:t}),this.muted=e)}},{key:"setPaused",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"boolean"==typeof e&&"object"===i(t)&&(this.paused!==e&&this.track(e?"pause":"resume",{macros:t}),this.paused=e)}},{key:"setFullscreen",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"boolean"==typeof e&&"object"===i(t)&&(this.fullscreen!==e&&this.track(e?"fullscreen":"exitFullscreen",{macros:t}),this.fullscreen=e)}},{key:"setExpand",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"boolean"==typeof e&&"object"===i(t)&&(this.expanded!==e&&(this.track(e?"expand":"collapse",{macros:t}),this.track(e?"playerExpand":"playerCollapse",{macros:t})),this.expanded=e)}},{key:"setSkipDelay",value:function(e){N.isValidTimeValue(e)&&(this.skipDelay=e)}},{key:"trackImpression",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&(this.impressed||(this.impressed=!0,this.trackURLs(this.ad.impressionURLTemplates,e),this.track("creativeView",{macros:e})))}},{key:"error",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];"object"===i(e)&&"boolean"==typeof t&&this.trackURLs(this.ad.errorURLTemplates,e,{isCustomCode:t})}},{key:"errorWithCode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];"string"==typeof e&&"boolean"==typeof t&&(this.error({ERRORCODE:e},t),console.log("The method errorWithCode is deprecated, please use vast tracker error method instead"))}},{key:"complete",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("complete",{macros:e})}},{key:"notUsed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&(this.track("notUsed",{macros:e}),this.trackingEvents=[])}},{key:"otherAdInteraction",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("otherAdInteraction",{macros:e})}},{key:"acceptInvitation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("acceptInvitation",{macros:e})}},{key:"adExpand",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("adExpand",{macros:e})}},{key:"adCollapse",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("adCollapse",{macros:e})}},{key:"minimize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("minimize",{macros:e})}},{key:"verificationNotExecuted",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof e&&"object"===i(t)){if(!this.ad||!this.ad.adVerifications||!this.ad.adVerifications.length)throw new Error("No adVerifications provided");if(!e)throw new Error("No vendor provided, unable to find associated verificationNotExecuted");var r=this.ad.adVerifications.find((function(t){return t.vendor===e}));if(!r)throw new Error("No associated verification element found for vendor: ".concat(e));var n=r.trackingEvents;if(n&&n.verificationNotExecuted){var a=n.verificationNotExecuted;this.trackURLs(a,t),this.emit("verificationNotExecuted",{trackingURLTemplates:a})}}}},{key:"overlayViewDuration",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"string"==typeof e&&"object"===i(t)&&(t.ADPLAYHEAD=e,this.track("overlayViewDuration",{macros:t}))}},{key:"close",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track(this.linear?"closeLinear":"close",{macros:e})}},{key:"skip",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("skip",{macros:e})}},{key:"load",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("loaded",{macros:e})}},{key:"click",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((null===e||"string"==typeof e)&&"object"===i(t)){this.clickTrackingURLTemplates&&this.clickTrackingURLTemplates.length&&this.trackURLs(this.clickTrackingURLTemplates,t);var n=this.clickThroughURLTemplate||e,a=r({},t);if(n){this.progress&&(a.ADPLAYHEAD=this.progressFormatted());var o=N.resolveURLTemplates([n],a)[0];this.emit("clickthrough",o)}}}},{key:"track",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.macros,n=void 0===r?{}:r,a=t.once,o=void 0!==a&&a;if("object"===i(n)){"closeLinear"===e&&!this.trackingEvents[e]&&this.trackingEvents.close&&(e="close");var s=this.trackingEvents[e],l=this.emitAlwaysEvents.indexOf(e)>-1;s?(this.emit(e,{trackingURLTemplates:s}),this.trackURLs(s,n)):l&&this.emit(e,null),o&&(delete this.trackingEvents[e],l&&this.emitAlwaysEvents.splice(this.emitAlwaysEvents.indexOf(e),1))}}},{key:"trackURLs",value:function(e){var t,i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r({},n);this.linear&&(this.creative&&this.creative.mediaFiles&&this.creative.mediaFiles[0]&&this.creative.mediaFiles[0].fileURL&&(o.ASSETURI=this.creative.mediaFiles[0].fileURL),this.progress&&(o.ADPLAYHEAD=this.progressFormatted())),null!==(t=this.creative)&&void 0!==t&&null!==(i=t.universalAdIds)&&void 0!==i&&i.length&&(o.UNIVERSALADID=this.creative.universalAdIds.map((function(e){return e.idRegistry.concat(" ",e.value)})).join(",")),this.ad&&(this.ad.sequence&&(o.PODSEQUENCE=this.ad.sequence),this.ad.adType&&(o.ADTYPE=this.ad.adType),this.ad.adServingId&&(o.ADSERVINGID=this.ad.adServingId),this.ad.categories&&this.ad.categories.length&&(o.ADCATEGORIES=this.ad.categories.map((function(e){return e.value})).join(",")),this.ad.blockedAdCategories&&this.ad.blockedAdCategories.length&&(o.BLOCKEDADCATEGORIES=this.ad.blockedAdCategories)),N.track(e,o,a)}},{key:"convertToTimecode",value:function(e){if(!N.isValidTimeValue(e))return"";var t=1e3*e,r=Math.floor(t/36e5),i=Math.floor(t/6e4%60),n=Math.floor(t/1e3%60),a=Math.floor(t%1e3);return"".concat(N.addLeadingZeros(r,2),":").concat(N.addLeadingZeros(i,2),":").concat(N.addLeadingZeros(n,2),".").concat(N.addLeadingZeros(a,3))}},{key:"progressFormatted",value:function(){return this.convertToTimecode(this.progress)}}]),a}(K);e.VASTClient=ce,e.VASTParser=oe,e.VASTTracker=de,Object.defineProperty(e,"__esModule",{value:!0})}));


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FORMAT": () => (/* reexport safe */ _src_constants__WEBPACK_IMPORTED_MODULE_6__.FORMAT),
/* harmony export */   "VPAID_EVENTS": () => (/* reexport safe */ _src_constants__WEBPACK_IMPORTED_MODULE_6__.VPAID_EVENTS),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "version": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_10__.version)
/* harmony export */ });
/* harmony import */ var _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dailymotion/vast-client */ "./node_modules/@dailymotion/vast-client/dist/vast-client.min.js");
/* harmony import */ var _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vpaid_media_vpaidplayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vpaid/media/vpaidplayer */ "./src/vpaid/media/vpaidplayer.js");
/* harmony import */ var _vpaid_media_videoplayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vpaid/media/videoplayer */ "./src/vpaid/media/videoplayer.js");
/* harmony import */ var _vpaid_tracking_trackerwrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vpaid/tracking/trackerwrapper */ "./src/vpaid/tracking/trackerwrapper.js");
/* harmony import */ var _src_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/log */ "./src/log.js");
/* harmony import */ var _vpaid_format_formatfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vpaid/format/formatfactory */ "./src/vpaid/format/formatfactory.js");
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/constants */ "./src/constants.js");
/* harmony import */ var _openmeasurement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./openmeasurement */ "./src/openmeasurement.js");
/* harmony import */ var _vpaid_display_displaywrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vpaid/display/displaywrapper */ "./src/vpaid/display/displaywrapper.js");
/* harmony import */ var _network_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./network/request */ "./src/network/request.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./env */ "./src/env.js");
/* harmony import */ var _toolsbrowser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toolsbrowser */ "./src/toolsbrowser.js");
/* harmony import */ var _native_nativeadtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./native/nativeadtools */ "./src/native/nativeadtools.js");
/* harmony import */ var _network_vastloader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./network/vastloader */ "./src/network/vastloader.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }















// entry point for vast player loading vast and showing the ad according to the given config.
function showVideoAd(config, callback, consentData) {
  // load the VAST from config.vastURL
  var vastClient = new _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_0__.VASTClient();
  (0,_network_vastloader__WEBPACK_IMPORTED_MODULE_13__.loadVast)(config, consentData, vastClient).then(function (vastJson) {
    var _vastJson$ads;
    // VAST is loaded and parsed
    if (!((_vastJson$ads = vastJson.ads) !== null && _vastJson$ads !== void 0 && _vastJson$ads.length)) {
      (0,_src_log__WEBPACK_IMPORTED_MODULE_4__.logger)('No ad.');
      if (callback) callback(null);
      return;
    }

    // init needed entities
    var videoElement = document.createElement('video');
    videoElement.setAttribute('playsinline', 'true');
    videoElement.setAttribute('webkit-playsinline', 'true');
    var adContainer = document.createElement('div');
    // id is needed to registrer several containers in viewability module
    adContainer.id = "RS-ad-".concat(Math.round(Math.random() * 10000));
    var ad;
    var creative;
    var tracker;
    var VPAIDCreative;

    // find mediafiles and init VASTTracker
    try {
      ad = vastJson.ads[0];
      creative = ad.creatives.find(function (innerCrea) {
        var _innerCrea$mediaFiles;
        return ((_innerCrea$mediaFiles = innerCrea.mediaFiles) === null || _innerCrea$mediaFiles === void 0 ? void 0 : _innerCrea$mediaFiles.length) > 0;
      });
      tracker = new _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_0__.VASTTracker(vastClient, ad, creative);
    } catch (e) {
      (0,_src_log__WEBPACK_IMPORTED_MODULE_4__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_4__.LOG_LEVEL.WARN, 'Error retreiving creative. ', e);
      if (callback) callback(null);
    }

    // select a mediafile and init VPAID creative
    // (VPAID wrapper for vpaid mediafile, VPAID Video player for video)
    var VPAIDFiles = [];
    var videoFiles = [];
    creative.mediaFiles.forEach(function (mediaFile) {
      if (mediaFile.apiFramework === 'VPAID' && mediaFile.mimeType !== 'application/x-shockwave-flash') {
        VPAIDFiles.push(mediaFile);
      } else {
        videoFiles.push(mediaFile);
      }
    });
    if (VPAIDFiles.length > 0) {
      VPAIDCreative = new _vpaid_media_vpaidplayer__WEBPACK_IMPORTED_MODULE_1__.VPAIDPlayer(videoElement, adContainer, VPAIDFiles[0], creative.adParameters);
    } else if (videoFiles.length > 0) {
      VPAIDCreative = new _vpaid_media_videoplayer__WEBPACK_IMPORTED_MODULE_2__.VideoPlayer(videoElement, adContainer, videoFiles);
    } else {
      (0,_src_log__WEBPACK_IMPORTED_MODULE_4__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_4__.LOG_LEVEL.WARN, 'No mediafile to play for vast');
    }

    // wrap our vpaid creative with the tracker wrapper (init tracking events)
    VPAIDCreative = new _vpaid_tracking_trackerwrapper__WEBPACK_IMPORTED_MODULE_3__.TrackerWrapper(VPAIDCreative, videoElement, adContainer, tracker);

    // wrap our vpaid creative with a display format (intext, slider... )
    var AdFormat = (0,_vpaid_format_formatfactory__WEBPACK_IMPORTED_MODULE_5__.getFormat)(config.format, config.mediatype);
    VPAIDCreative = new AdFormat(VPAIDCreative, videoElement, adContainer, config);

    // wrap with our display elements (buttons...)
    VPAIDCreative = new _vpaid_display_displaywrapper__WEBPACK_IMPORTED_MODULE_8__.DisplayWrapper(VPAIDCreative, videoElement, adContainer, config);

    // If there is an adVerification, we load the OpenMeasurement module
    if (tracker.ad.adVerifications.length > 0) {
      var om = new _openmeasurement__WEBPACK_IMPORTED_MODULE_7__.OpenMeasurement();
      try {
        om.insertOMScript(function () {
          try {
            om.createOMSession(tracker.ad, VPAIDCreative, videoElement);
          } catch (e) {
            (0,_src_log__WEBPACK_IMPORTED_MODULE_4__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_4__.LOG_LEVEL.INFO, 'Couldn\'t create OM session');
          }

          // start ad loading
          VPAIDCreative.initAd(config.width, config.height, 'normal', null, {}, config);
        });
      } catch (e) {
        (0,_src_log__WEBPACK_IMPORTED_MODULE_4__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_4__.LOG_LEVEL.INFO, 'Couldn\'t insert OM script');
      }
    } else {
      // start ad loading
      VPAIDCreative.initAd(config.width, config.height, 'normal', null, {}, config);
    }
    if (typeof callback === 'function') {
      callback(VPAIDCreative);
    }
  })["catch"](function (err) {
    (0,_src_log__WEBPACK_IMPORTED_MODULE_4__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_4__.LOG_LEVEL.WARN, "Error loading vast file. ".concat(err.stack));
  });
}
function showNativeAd(config, callback, consentData) {
  // load a native ad from ad server
  (0,_network_request__WEBPACK_IMPORTED_MODULE_9__.getEquativeAd)(config, consentData, 'json') // no VAST in native
  .then(function (nativeJson) {
    if (!nativeJson.ad) {
      (0,_src_log__WEBPACK_IMPORTED_MODULE_4__.logger)('No ad.');
      if (callback) callback(null);
    }
    nativeJson = {
      title: 'ZOE E-TECH Electrique',
      price: '33 700 €',
      desc: 'Essayez la nouvelle Zoe 100% électrique',
      ctatext: 'En savoir plus',
      url: 'https://www.renault.fr/vehicules-electriques/zoe/prix-versions.html',
      domain: 'renault.fr',
      image: {
        url: 'http://localhost:3000/docs/sample/zoe.jpeg'
      },
      brandLogo: {
        url: 'http://no.link.no'
      },
      privacyIcon: 'https://static.criteo.net/flash/icon/privacy_small.svg',
      privacyUrl: 'https://www.amazon.fr/adprefs/ref=cs_aap_584215806745266336'
    };

    // init needed placeholder containers
    var placeholderContainer = _native_nativeadtools__WEBPACK_IMPORTED_MODULE_12__.createAutoContainers(1, 1)[0];
    // id is needed to registrer several containers in viewability module
    placeholderContainer.container.id = "RS-ad-".concat(Math.round(Math.random() * 10000));
    placeholderContainer.insertNativeAd(nativeJson);
  })["catch"](function (err) {
    (0,_src_log__WEBPACK_IMPORTED_MODULE_4__.logger)(_src_log__WEBPACK_IMPORTED_MODULE_4__.LOG_LEVEL.WARN, "Error loading native ad. ".concat(err.stack));
  });
}
function showAdByMediatype(bidRequest, callback, consentData) {
  // add config default values
  var config = _objectSpread(_objectSpread({}, (0,_vpaid_format_formatfactory__WEBPACK_IMPORTED_MODULE_5__.getDefaultConfig)(bidRequest.format)), bidRequest);
  if (config.mediatype === 'native' && config.hasNative) {
    // always false "hasNative" is fake field
    showNativeAd(config, callback, consentData);
  } else {
    showVideoAd(config, callback, consentData);
  }
}
function init(config, callback) {
  (0,_toolsbrowser__WEBPACK_IMPORTED_MODULE_11__.readConsent)(function (consentData) {
    (0,_src_log__WEBPACK_IMPORTED_MODULE_4__.logger)('Show ad with config:', config);
    if (consentData) {
      (0,_src_log__WEBPACK_IMPORTED_MODULE_4__.logger)('Consent:', consentData);
    }
    if (Array.isArray(config)) {
      config.forEach(function (itm) {
        return showAdByMediatype(itm);
      });
    } else {
      showAdByMediatype(config, callback, consentData);
    }
  });
}
if (window.RetailSpotConfig) {
  init(window.RetailSpotConfig);
}

// export api in window.RetailSpot object

})();

RetailSpot = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=rsplayer.js.map