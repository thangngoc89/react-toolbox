'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsUtils = require('../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _styleClock = require('./style.clock');

var _styleClock2 = _interopRequireDefault(_styleClock);

var _ClockFace = require('./ClockFace');

var _ClockFace2 = _interopRequireDefault(_ClockFace);

var _ClockHand = require('./ClockHand');

var _ClockHand2 = _interopRequireDefault(_ClockHand);

var minutes = _utilsUtils2['default'].range(0, 60, 5);
var step = 360 / 60;

var Minutes = (function (_React$Component) {
  _inherits(Minutes, _React$Component);

  function Minutes() {
    var _this = this;

    _classCallCheck(this, Minutes);

    _get(Object.getPrototypeOf(Minutes.prototype), 'constructor', this).apply(this, arguments);

    this.handleHandMove = function (degrees) {
      _this.props.onChange(degrees / step);
    };

    this.handleMouseDown = function (event) {
      _this.refs.hand.mouseStart(event);
    };

    this.handleTouchStart = function (event) {
      _this.refs.hand.touchStart(event);
    };
  }

  _createClass(Minutes, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_ClockFace2['default'], {
          onTouchStart: this.handleTouchStart,
          onMouseDown: this.handleMouseDown,
          numbers: minutes,
          spacing: this.props.spacing,
          radius: this.props.radius,
          twoDigits: true,
          active: this.props.selected
        }),
        _react2['default'].createElement(_ClockHand2['default'], { ref: 'hand',
          className: minutes.indexOf(this.props.selected) === -1 ? _styleClock2['default'].small : '',
          angle: this.props.selected * step,
          length: this.props.radius - this.props.spacing,
          onMove: this.handleHandMove,
          origin: this.props.center,
          step: step
        })
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      center: _react2['default'].PropTypes.object,
      onChange: _react2['default'].PropTypes.func,
      radius: _react2['default'].PropTypes.number,
      selected: _react2['default'].PropTypes.number,
      spacing: _react2['default'].PropTypes.number
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      selected: 0,
      onChange: null
    },
    enumerable: true
  }]);

  return Minutes;
})(_react2['default'].Component);

exports['default'] = Minutes;
module.exports = exports['default'];