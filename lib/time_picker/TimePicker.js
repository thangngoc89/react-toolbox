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

var _utilsEvents = require('../utils/events');

var _utilsEvents2 = _interopRequireDefault(_utilsEvents);

var _utilsTime = require('../utils/time');

var _utilsTime2 = _interopRequireDefault(_utilsTime);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _TimePickerDialog = require('./TimePickerDialog');

var _TimePickerDialog2 = _interopRequireDefault(_TimePickerDialog);

var TimePicker = (function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  function TimePicker() {
    var _this = this;

    _classCallCheck(this, TimePicker);

    _get(Object.getPrototypeOf(TimePicker.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      active: false
    };

    this.handleDismiss = function () {
      _this.setState({ active: false });
    };

    this.handleInputMouseDown = function (event) {
      _utilsEvents2['default'].pauseEvent(event);
      _this.setState({ active: true });
    };

    this.handleSelect = function (value, event) {
      if (_this.props.onChange) _this.props.onChange(value, event);
      _this.setState({ active: false });
    };
  }

  _createClass(TimePicker, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var value = _props.value;
      var format = _props.format;

      var formattedTime = value ? _utilsTime2['default'].formatTime(value, format) : null;
      return _react2['default'].createElement(
        'div',
        { 'data-react-toolbox': 'time-picker' },
        _react2['default'].createElement(_input2['default'], {
          className: _style2['default'].input,
          error: this.props.error,
          label: this.props.label,
          onMouseDown: this.handleInputMouseDown,
          readOnly: true,
          type: 'text',
          value: formattedTime
        }),
        _react2['default'].createElement(_TimePickerDialog2['default'], {
          active: this.state.active,
          className: this.props.className,
          format: format,
          onDismiss: this.handleDismiss,
          onSelect: this.handleSelect,
          value: this.props.value
        })
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      className: _react2['default'].PropTypes.string,
      error: _react2['default'].PropTypes.string,
      format: _react2['default'].PropTypes.oneOf(['24hr', 'ampm']),
      label: _react2['default'].PropTypes.string,
      onChange: _react2['default'].PropTypes.func,
      value: _react2['default'].PropTypes.object
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: '',
      format: '24hr'
    },
    enumerable: true
  }]);

  return TimePicker;
})(_react2['default'].Component);

exports['default'] = TimePicker;
module.exports = exports['default'];