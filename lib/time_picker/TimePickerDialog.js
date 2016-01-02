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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _utilsTime = require('../utils/time');

var _utilsTime2 = _interopRequireDefault(_utilsTime);

var _Clock = require('./Clock');

var _Clock2 = _interopRequireDefault(_Clock);

var _dialog = require('../dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var TimePickerDialog = (function (_React$Component) {
  _inherits(TimePickerDialog, _React$Component);

  function TimePickerDialog() {
    var _this = this;

    _classCallCheck(this, TimePickerDialog);

    _get(Object.getPrototypeOf(TimePickerDialog.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      display: 'hours',
      displayTime: this.props.value
    };

    this.handleClockChange = function (value) {
      _this.setState({ displayTime: value });
    };

    this.handleSelect = function (event) {
      _this.props.onSelect(_this.state.displayTime, event);
    };

    this.toggleTimeMode = function () {
      _this.setState({ displayTime: _utilsTime2['default'].toggleTimeMode(_this.state.displayTime) });
    };

    this.handleHandMoved = function () {
      if (_this.state.display === 'hours') _this.setState({ display: 'minutes' });
    };

    this.switchDisplay = function (display) {
      _this.setState({ display: display });
    };

    this.actions = [{ label: 'Cancel', className: _style2['default'].button, onClick: this.props.onDismiss }, { label: 'Ok', className: _style2['default'].button, onClick: this.handleSelect }];
  }

  _createClass(TimePickerDialog, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (!this.props.active && nextProps.active) {
        setTimeout(this.refs.clock.handleCalculateShape, 1000);
      }
    }
  }, {
    key: 'formatHours',
    value: function formatHours() {
      if (this.props.format === 'ampm') {
        return this.state.displayTime.getHours() % 12 || 12;
      } else {
        return this.state.displayTime.getHours();
      }
    }
  }, {
    key: 'renderAMPMLabels',
    value: function renderAMPMLabels() {
      if (this.props.format === 'ampm') {
        return _react2['default'].createElement(
          'div',
          { className: _style2['default'].ampm },
          _react2['default'].createElement(
            'span',
            { className: _style2['default'].am, onClick: this.toggleTimeMode },
            'AM'
          ),
          _react2['default'].createElement(
            'span',
            { className: _style2['default'].pm, onClick: this.toggleTimeMode },
            'PM'
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var display = 'display-' + this.state.display;
      var format = 'format-' + _utilsTime2['default'].getTimeMode(this.state.displayTime);
      var className = (0, _classnames2['default'])([_style2['default'].dialog, _style2['default'][display], _style2['default'][format]], this.props.className);
      return _react2['default'].createElement(
        _dialog2['default'],
        { active: this.props.active, className: className, actions: this.actions },
        _react2['default'].createElement(
          'header',
          { className: _style2['default'].header },
          _react2['default'].createElement(
            'span',
            { className: _style2['default'].hours, onClick: this.switchDisplay.bind(this, 'hours') },
            ('0' + this.formatHours()).slice(-2)
          ),
          _react2['default'].createElement(
            'span',
            { className: _style2['default'].separator },
            ':'
          ),
          _react2['default'].createElement(
            'span',
            { className: _style2['default'].minutes, onClick: this.switchDisplay.bind(this, 'minutes') },
            ('0' + this.state.displayTime.getMinutes()).slice(-2)
          ),
          this.renderAMPMLabels()
        ),
        _react2['default'].createElement(_Clock2['default'], {
          ref: 'clock',
          display: this.state.display,
          format: this.props.format,
          onChange: this.handleClockChange,
          onHandMoved: this.handleHandMoved,
          time: this.state.displayTime
        })
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      active: _react2['default'].PropTypes.bool,
      className: _react2['default'].PropTypes.string,
      format: _react2['default'].PropTypes.oneOf(['24hr', 'ampm']),
      onDismiss: _react2['default'].PropTypes.func,
      onSelect: _react2['default'].PropTypes.func,
      value: _react2['default'].PropTypes.object
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      active: false,
      format: '24hr',
      value: new Date()
    },
    enumerable: true
  }]);

  return TimePickerDialog;
})(_react2['default'].Component);

exports['default'] = TimePickerDialog;
module.exports = exports['default'];