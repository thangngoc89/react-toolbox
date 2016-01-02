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

var _utilsTime = require('../utils/time');

var _utilsTime2 = _interopRequireDefault(_utilsTime);

var _styleCalendar = require('./style.calendar');

var _styleCalendar2 = _interopRequireDefault(_styleCalendar);

var Day = (function (_React$Component) {
  _inherits(Day, _React$Component);

  function Day() {
    _classCallCheck(this, Day);

    _get(Object.getPrototypeOf(Day.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Day, [{
    key: 'dayStyle',
    value: function dayStyle() {
      if (this.props.day === 1) {
        return {
          marginLeft: _utilsTime2['default'].getFirstWeekDay(this.props.viewDate) * 100 / 7 + '%'
        };
      }
    }
  }, {
    key: 'isSelected',
    value: function isSelected() {
      var sameYear = this.props.viewDate.getFullYear() === this.props.selectedDate.getFullYear();
      var sameMonth = this.props.viewDate.getMonth() === this.props.selectedDate.getMonth();
      var sameDay = this.props.day === this.props.selectedDate.getDate();
      return sameYear && sameMonth && sameDay;
    }
  }, {
    key: 'render',
    value: function render() {
      var _ClassNames;

      var className = (0, _classnames2['default'])(_styleCalendar2['default'].day, (_ClassNames = {}, _defineProperty(_ClassNames, _styleCalendar2['default'].active, this.isSelected()), _defineProperty(_ClassNames, _styleCalendar2['default'].disabled, this.props.disabled), _ClassNames));

      return _react2['default'].createElement(
        'div',
        { 'data-react-toolbox': 'day', className: className, style: this.dayStyle() },
        _react2['default'].createElement(
          'span',
          { onClick: this.props.onClick },
          this.props.day
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      day: _react2['default'].PropTypes.number,
      disabled: _react2['default'].PropTypes.bool,
      onClick: _react2['default'].PropTypes.func,
      selectedDate: _react2['default'].PropTypes.object,
      viewDate: _react2['default'].PropTypes.object
    },
    enumerable: true
  }]);

  return Day;
})(_react2['default'].Component);

exports['default'] = Day;
module.exports = exports['default'];