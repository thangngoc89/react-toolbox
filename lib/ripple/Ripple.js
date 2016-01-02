'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _utilsPrefixer = require('../utils/prefixer');

var _utilsPrefixer2 = _interopRequireDefault(_utilsPrefixer);

var defaults = {
  centered: false,
  className: '',
  spread: 2
};

var Ripple = function Ripple() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _extends2 = _extends({}, defaults, options);

  var defaultCentered = _extends2.centered;
  var defaultClassName = _extends2.className;
  var defaultSpread = _extends2.spread;

  return function (ComposedComponent) {
    return (function (_React$Component) {
      _inherits(RippledComponent, _React$Component);

      function RippledComponent() {
        var _this = this;

        _classCallCheck(this, RippledComponent);

        _get(Object.getPrototypeOf(RippledComponent.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
          active: false,
          left: null,
          restarting: false,
          top: null,
          width: null
        };

        this.handleEnd = function () {
          document.removeEventListener(_this.touch ? 'touchend' : 'mouseup', _this.handleEnd);
          _this.setState({ active: false });
        };

        this.start = function (_ref) {
          var pageX = _ref.pageX;
          var pageY = _ref.pageY;
          var touch = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

          if (!_this._isTouchRippleReceivingMouseEvent(touch)) {
            _this.touch = touch;
            document.addEventListener(_this.touch ? 'touchend' : 'mouseup', _this.handleEnd);

            var _getDescriptor2 = _this._getDescriptor(pageX, pageY);

            var _top = _getDescriptor2.top;
            var left = _getDescriptor2.left;
            var width = _getDescriptor2.width;

            _this.setState({ active: false, restarting: true, top: _top, left: left, width: width }, function () {
              _this.refs.ripple.offsetWidth; //eslint-disable-line no-unused-expressions
              _this.setState({ active: true, restarting: false });
            });
          }
        };

        this.handleMouseDown = function (event) {
          if (!_this.props.disabled) _this.start(event);
          if (_this.props.onMouseDown) _this.props.onMouseDown(event);
        };
      }

      _createClass(RippledComponent, [{
        key: '_isTouchRippleReceivingMouseEvent',
        value: function _isTouchRippleReceivingMouseEvent(touch) {
          return this.touch && !touch;
        }
      }, {
        key: '_getDescriptor',
        value: function _getDescriptor(pageX, pageY) {
          var _ReactDOM$findDOMNode$getBoundingClientRect = _reactDom2['default'].findDOMNode(this).getBoundingClientRect();

          var left = _ReactDOM$findDOMNode$getBoundingClientRect.left;
          var top = _ReactDOM$findDOMNode$getBoundingClientRect.top;
          var height = _ReactDOM$findDOMNode$getBoundingClientRect.height;
          var width = _ReactDOM$findDOMNode$getBoundingClientRect.width;
          var _props = this.props;
          var centered = _props.rippleCentered;
          var spread = _props.rippleSpread;

          return {
            left: centered ? 0 : pageX - left - width / 2 - window.scrollX,
            top: centered ? 0 : pageY - top - height / 2 - window.scrollY,
            width: width * spread
          };
        }
      }, {
        key: 'render',
        value: function render() {
          if (!this.props.ripple) {
            return _react2['default'].createElement(ComposedComponent, this.props);
          } else {
            var _ClassNames;

            var _props2 = this.props;
            var children = _props2.children;
            var ripple = _props2.ripple;
            var className = _props2.rippleClassName;
            var centered = _props2.rippleCentered;
            var spread = _props2.rippleSpread;

            var other = _objectWithoutProperties(_props2, ['children', 'ripple', 'rippleClassName', 'rippleCentered', 'rippleSpread']);

            var rippleClassName = (0, _classnames2['default'])(_style2['default'].normal, (_ClassNames = {}, _defineProperty(_ClassNames, _style2['default'].active, this.state.active), _defineProperty(_ClassNames, _style2['default'].restarting, this.state.restarting), _ClassNames), className);

            var _state = this.state;
            var left = _state.left;
            var _top2 = _state.top;
            var width = _state.width;

            var scale = this.state.restarting ? 0 : 1;
            var rippleStyle = (0, _utilsPrefixer2['default'])({
              transform: 'translate3d(' + (-width / 2 + left) + 'px, ' + (-width / 2 + _top2) + 'px, 0) scale(' + scale + ')'
            }, { width: width, height: width });

            return _react2['default'].createElement(
              ComposedComponent,
              _extends({}, other, { onMouseDown: this.handleMouseDown }),
              children ? children : null,
              _react2['default'].createElement(
                'span',
                { 'data-react-toolbox': 'ripple', className: _style2['default'].wrapper },
                _react2['default'].createElement('span', { ref: 'ripple', role: 'ripple', className: rippleClassName, style: rippleStyle })
              )
            );
          }
        }
      }], [{
        key: 'propTypes',
        value: {
          children: _react2['default'].PropTypes.any,
          disabled: _react2['default'].PropTypes.bool,
          ripple: _react2['default'].PropTypes.bool,
          rippleCentered: _react2['default'].PropTypes.bool,
          rippleClassName: _react2['default'].PropTypes.string,
          rippleSpread: _react2['default'].PropTypes.number
        },
        enumerable: true
      }, {
        key: 'defaultProps',
        value: {
          disabled: false,
          ripple: true,
          rippleCentered: defaultCentered,
          rippleClassName: defaultClassName,
          rippleSpread: defaultSpread
        },
        enumerable: true
      }]);

      return RippledComponent;
    })(_react2['default'].Component);
  };
};

exports['default'] = Ripple;
module.exports = exports['default'];