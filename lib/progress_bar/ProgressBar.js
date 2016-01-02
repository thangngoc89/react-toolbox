'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _utilsPrefixer = require('../utils/prefixer');

var _utilsPrefixer2 = _interopRequireDefault(_utilsPrefixer);

var ProgressBar = (function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    _get(Object.getPrototypeOf(ProgressBar.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ProgressBar, [{
    key: 'calculateRatio',
    value: function calculateRatio(value) {
      if (value < this.props.min) return 0;
      if (value > this.props.max) return 1;
      return (value - this.props.min) / (this.props.max - this.props.min);
    }
  }, {
    key: 'circularStyle',
    value: function circularStyle() {
      if (this.props.mode !== 'indeterminate') {
        return { strokeDasharray: 2 * Math.PI * 25 * this.calculateRatio(this.props.value) + ', 400' };
      }
    }
  }, {
    key: 'linearStyle',
    value: function linearStyle() {
      if (this.props.mode !== 'indeterminate') {
        return {
          buffer: (0, _utilsPrefixer2['default'])({ transform: 'scaleX(' + this.calculateRatio(this.props.buffer) + ')' }),
          value: (0, _utilsPrefixer2['default'])({ transform: 'scaleX(' + this.calculateRatio(this.props.value) + ')' })
        };
      } else {
        return {};
      }
    }
  }, {
    key: 'renderCircular',
    value: function renderCircular() {
      return _react2['default'].createElement(
        'svg',
        { className: _style2['default'].circle },
        _react2['default'].createElement('circle', { className: _style2['default'].path, style: this.circularStyle(), cx: '30', cy: '30', r: '25' })
      );
    }
  }, {
    key: 'renderLinear',
    value: function renderLinear() {
      var _linearStyle = this.linearStyle();

      var buffer = _linearStyle.buffer;
      var value = _linearStyle.value;

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement('span', { ref: 'buffer', 'data-ref': 'buffer', className: _style2['default'].buffer, style: buffer }),
        _react2['default'].createElement('span', { ref: 'value', 'data-ref': 'value', className: _style2['default'].value, style: value })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _ClassNames;

      var className = (0, _classnames2['default'])(_style2['default'][this.props.type], (_ClassNames = {}, _defineProperty(_ClassNames, _style2['default'][this.props.mode], this.props.mode), _defineProperty(_ClassNames, _style2['default'].multicolor, this.props.multicolor), _ClassNames), this.props.className);

      return _react2['default'].createElement(
        'div',
        {
          'data-react-toolbox': 'progress-bar',
          'aria-valuenow': this.props.value,
          'aria-valuemin': this.props.min,
          'aria-valuemax': this.props.max,
          className: className
        },
        this.props.type === 'circular' ? this.renderCircular() : this.renderLinear()
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      buffer: _react2['default'].PropTypes.number,
      className: _react2['default'].PropTypes.string,
      max: _react2['default'].PropTypes.number,
      min: _react2['default'].PropTypes.number,
      mode: _react2['default'].PropTypes.string,
      multicolor: _react2['default'].PropTypes.bool,
      type: _react2['default'].PropTypes.oneOf(['linear', 'circular']),
      value: _react2['default'].PropTypes.number
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      buffer: 0,
      className: '',
      max: 100,
      min: 0,
      mode: 'indeterminate',
      multicolor: false,
      type: 'linear',
      value: 0
    },
    enumerable: true
  }]);

  return ProgressBar;
})(_react2['default'].Component);

exports['default'] = ProgressBar;
module.exports = exports['default'];