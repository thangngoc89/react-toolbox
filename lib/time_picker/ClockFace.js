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

var _styleClock = require('./style.clock');

var _styleClock2 = _interopRequireDefault(_styleClock);

var Face = (function (_React$Component) {
  _inherits(Face, _React$Component);

  function Face() {
    _classCallCheck(this, Face);

    _get(Object.getPrototypeOf(Face.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Face, [{
    key: 'numberStyle',
    value: function numberStyle(rad, num) {
      return {
        position: 'absolute',
        left: rad + rad * Math.sin(360 * (Math.PI / 180) / 12 * (num - 1)) + this.props.spacing,
        top: rad - rad * Math.cos(360 * (Math.PI / 180) / 12 * (num - 1)) + this.props.spacing
      };
    }
  }, {
    key: 'faceStyle',
    value: function faceStyle() {
      return {
        height: this.props.radius * 2,
        width: this.props.radius * 2
      };
    }
  }, {
    key: 'renderNumber',
    value: function renderNumber(number, idx) {
      var className = _styleClock2['default'].number;
      if (number === this.props.active) className += ' ' + _styleClock2['default'].active;
      return _react2['default'].createElement(
        'span',
        {
          className: className,
          style: this.numberStyle(this.props.radius - this.props.spacing, idx + 1),
          key: number
        },
        this.props.twoDigits ? ('0' + number).slice(-2) : number
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        {
          ref: 'root',
          className: _styleClock2['default'].face,
          onTouchStart: this.props.onTouchStart,
          onMouseDown: this.props.onMouseDown,
          style: this.faceStyle()
        },
        this.props.numbers.map(this.renderNumber.bind(this))
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      active: _react2['default'].PropTypes.number,
      numbers: _react2['default'].PropTypes.array,
      radius: _react2['default'].PropTypes.number,
      spacing: _react2['default'].PropTypes.number,
      twoDigits: _react2['default'].PropTypes.bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      active: null,
      numbers: [],
      radius: 0,
      twoDigits: false
    },
    enumerable: true
  }]);

  return Face;
})(_react2['default'].Component);

exports['default'] = Face;
module.exports = exports['default'];