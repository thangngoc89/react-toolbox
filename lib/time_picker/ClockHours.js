'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsUtils = require('../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _ClockFace = require('./ClockFace');

var _ClockFace2 = _interopRequireDefault(_ClockFace);

var _ClockHand = require('./ClockHand');

var _ClockHand2 = _interopRequireDefault(_ClockHand);

var outerNumbers = [0].concat(_toConsumableArray(_utilsUtils2['default'].range(13, 24)));
var innerNumbers = [12].concat(_toConsumableArray(_utilsUtils2['default'].range(1, 12)));
var innerSpacing = 1.7;
var step = 360 / 12;

var Hours = (function (_React$Component) {
  _inherits(Hours, _React$Component);

  function Hours() {
    var _this = this;

    _classCallCheck(this, Hours);

    _get(Object.getPrototypeOf(Hours.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      inner: this.props.format === '24hr' && this.props.selected > 0 && this.props.selected <= 12
    };

    this.handleHandMove = function (degrees, radius) {
      var currentInner = radius < _this.props.radius - _this.props.spacing * innerSpacing;
      if (_this.props.format === '24hr' && _this.state.inner !== currentInner) {
        _this.setState({ inner: currentInner }, function () {
          _this.props.onChange(_this.valueFromDegrees(degrees));
        });
      } else {
        _this.props.onChange(_this.valueFromDegrees(degrees));
      }
    };

    this.handleMouseDown = function (event) {
      _this.refs.hand.mouseStart(event);
    };

    this.handleTouchStart = function (event) {
      _this.refs.hand.touchStart(event);
    };
  }

  _createClass(Hours, [{
    key: 'valueFromDegrees',
    value: function valueFromDegrees(degrees) {
      if (this.props.format === 'ampm' || this.props.format === '24hr' && this.state.inner) {
        return innerNumbers[degrees / step];
      } else {
        return outerNumbers[degrees / step];
      }
    }
  }, {
    key: 'renderInnerFace',
    value: function renderInnerFace(innerRadius) {
      if (this.props.format === '24hr') {
        return _react2['default'].createElement(_ClockFace2['default'], {
          onTouchStart: this.handleTouchStart,
          onMouseDown: this.handleMouseDown,
          numbers: innerNumbers,
          spacing: this.props.spacing,
          radius: innerRadius,
          active: this.props.selected
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var format = _props.format;
      var selected = _props.selected;
      var radius = _props.radius;
      var spacing = _props.spacing;
      var center = _props.center;
      var onHandMoved = _props.onHandMoved;

      var is24hr = format === '24hr';

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_ClockFace2['default'], {
          onTouchStart: this.handleTouchStart,
          onMouseDown: this.handleMouseDown,
          numbers: is24hr ? outerNumbers : innerNumbers,
          spacing: spacing,
          radius: radius,
          twoDigits: is24hr,
          active: is24hr ? selected : selected % 12 || 12
        }),
        this.renderInnerFace(radius - spacing * innerSpacing),
        _react2['default'].createElement(_ClockHand2['default'], { ref: 'hand',
          angle: selected * step,
          length: (this.state.inner ? radius - spacing * innerSpacing : radius) - spacing,
          onMove: this.handleHandMove,
          onMoved: onHandMoved,
          origin: center,
          step: step
        })
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      center: _react2['default'].PropTypes.object,
      format: _react2['default'].PropTypes.oneOf(['24hr', 'ampm']),
      onChange: _react2['default'].PropTypes.func,
      onHandMoved: _react2['default'].PropTypes.func,
      radius: _react2['default'].PropTypes.number,
      selected: _react2['default'].PropTypes.number,
      spacing: _react2['default'].PropTypes.number
    },
    enumerable: true
  }]);

  return Hours;
})(_react2['default'].Component);

exports['default'] = Hours;
module.exports = exports['default'];