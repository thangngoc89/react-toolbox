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

var _Calendar = require('./Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _dialog = require('../dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _utilsTime = require('../utils/time');

var _utilsTime2 = _interopRequireDefault(_utilsTime);

var CalendarDialog = (function (_React$Component) {
  _inherits(CalendarDialog, _React$Component);

  function CalendarDialog() {
    var _this = this;

    _classCallCheck(this, CalendarDialog);

    _get(Object.getPrototypeOf(CalendarDialog.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      date: this.props.value,
      display: 'months'
    };

    this.handleCalendarChange = function (value) {
      var state = { display: 'months', date: value };
      if (_utilsTime2['default'].dateOutOfRange(value, _this.props.minDate, _this.props.maxDate)) {
        state.date = _this.props.maxDate || _this.props.minDate;
      }
      _this.setState(state);
    };

    this.handleSelect = function (event) {
      if (_this.props.onSelect) _this.props.onSelect(_this.state.date, event);
    };

    this.handleSwitchDisplay = function (display) {
      _this.setState({ display: display });
    };

    this.actions = [{ label: 'Cancel', className: _style2['default'].button, onClick: this.props.onDismiss }, { label: 'Ok', className: _style2['default'].button, onClick: this.handleSelect }];
  }

  _createClass(CalendarDialog, [{
    key: 'render',
    value: function render() {
      var display = 'display-' + this.state.display;
      var className = (0, _classnames2['default'])(_style2['default'].dialog, this.props.className);
      var headerClassName = (0, _classnames2['default'])(_style2['default'].header, _style2['default'][display]);

      return _react2['default'].createElement(
        _dialog2['default'],
        { active: this.props.active, type: 'custom', className: className, actions: this.actions },
        _react2['default'].createElement(
          'header',
          { className: headerClassName },
          _react2['default'].createElement(
            'span',
            { className: _style2['default'].year, onClick: this.handleSwitchDisplay.bind(this, 'years') },
            this.state.date.getFullYear()
          ),
          _react2['default'].createElement(
            'h3',
            { className: _style2['default'].date, onClick: this.handleSwitchDisplay.bind(this, 'months') },
            _utilsTime2['default'].getShortDayOfWeek(this.state.date.getDay()),
            ', ',
            _utilsTime2['default'].getShortMonth(this.state.date),
            ' ',
            this.state.date.getDate()
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: _style2['default'].wrapper },
          _react2['default'].createElement(_Calendar2['default'], {
            display: this.state.display,
            maxDate: this.props.maxDate,
            minDate: this.props.minDate,
            onChange: this.handleCalendarChange,
            selectedDate: this.state.date })
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      active: _react2['default'].PropTypes.bool,
      className: _react2['default'].PropTypes.string,
      maxDate: _react2['default'].PropTypes.object,
      minDate: _react2['default'].PropTypes.object,
      onDismiss: _react2['default'].PropTypes.func,
      onSelect: _react2['default'].PropTypes.func,
      value: _react2['default'].PropTypes.object
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      active: false,
      className: '',
      value: new Date()
    },
    enumerable: true
  }]);

  return CalendarDialog;
})(_react2['default'].Component);

exports['default'] = CalendarDialog;
module.exports = exports['default'];