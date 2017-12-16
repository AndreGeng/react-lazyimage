module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var animDura = 200;

var LazyImage = function (_Component) {
  _inherits(LazyImage, _Component);

  function LazyImage(props) {
    _classCallCheck(this, LazyImage);

    var _this = _possibleConstructorReturn(this, (LazyImage.__proto__ || Object.getPrototypeOf(LazyImage)).call(this, props));

    _this.state = {
      visible: false
    };
    _this.onScroll = _this.onScroll.bind(_this);
    _this.isRequesting = false;
    return _this;
  }

  _createClass(LazyImage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener("scroll", this.onScroll);
      this.onScroll(); // in case page do not scroll
    }
  }, {
    key: 'onScroll',
    value: function onScroll() {
      if (!this.isRequesting && this.isInViewport) {
        this.fetch();
      }
    }
  }, {
    key: 'fetch',
    value: function fetch() {
      var _this2 = this;

      this.isRequesting = true;
      var targetSrc = this.props.targetSrc;

      var img = new Image();
      img.src = targetSrc;
      img.onload = function () {
        _this2.setState({
          visible: true
        });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          targetSrc = _props.targetSrc,
          defaultSrc = _props.defaultSrc,
          className = _props.className,
          height = _props.height;
      var visible = this.state.visible;

      var style = {
        height: height
      };
      return _react2.default.createElement(
        _reactTransitionGroup.CSSTransitionGroup,
        {
          transitionName: 'fade',
          transitionEnterTimeout: animDura,
          transitionLeaveTimeout: animDura,
          ref: function ref(ele) {
            return _this3.ele = ele;
          },
          className: 'lazyimage-holder',
          component: 'div',
          style: style
        },
        !visible ? _react2.default.createElement('img', { src: defaultSrc, alt: 'default icon', className: 'lazyimage-img' }) : null,
        visible ? _react2.default.createElement('img', { src: targetSrc, alt: 'icon', className: 'lazyimage-img' }) : null
      );
    }
  }, {
    key: 'isInViewport',
    get: function get() {
      // get element position in viewport
      var node = _reactDom2.default.findDOMNode(this.ele);
      var rect = node.getBoundingClientRect();
      // get viewport height and width
      var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      // check if the element is in the viewport (or near to them)
      return rect.bottom >= 0 - this.props.offset && rect.right >= 0 - this.props.offset && rect.top < viewportHeight + this.props.offset && rect.left < viewportWidth + this.props.offset;
    }
  }]);

  return LazyImage;
}(_react.Component);

// LazyImage.propTypes = {
//   targetSrc: PropTypes.string.isRequired,
//   defaultSrc: PropTypes.string.isRequired,
//   height: PropTypes.number.isRequired, // image height
//   offset: PropTypes.number,
// };
// LazyImage.defaultProps = {
//   offset: 100,
//   className: '',
// };

LazyImage.propTypes = {
  targetSrc: _propTypes2.default.string.isRequired,
  defaultSrc: _propTypes2.default.string.isRequired,
  height: _propTypes2.default.number.isRequired, // image height
  offset: _propTypes2.default.number
};
LazyImage.defaultProps = {
  offset: 100,
  className: ''
};
exports.default = LazyImage;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ })
/******/ ]);