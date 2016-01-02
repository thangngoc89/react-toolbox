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

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _animations = require('../animations');

var _button = require('../button');

var _CalendarMonth = require('./CalendarMonth');

var _CalendarMonth2 = _interopRequireDefault(_CalendarMonth);

var _utilsTime = require('../utils/time');

var _utilsTime2 = _interopRequireDefault(_utilsTime);

var _utilsUtils = require('../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _styleCalendar = require('./style.calendar');

var _styleCalendar2 = _interopRequireDefault(_styleCalendar);

var Calendar = (function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar() {
    var _this = this;

    _classCallCheck(this, Calendar);

    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      viewDate: this.props.selectedDate
    };

    this.handleDayClick = function (day) {
      _this.props.onChange(_utilsTime2['default'].setDay(_this.state.viewDate, day));
    };

    this.handleYearClick = function (year) {
      var viewDate = _utilsTime2['default'].setYear(_this.props.selectedDate, year);
      _this.setState({ viewDate: viewDate });
      _this.props.onChange(viewDate);
    };

    this.changeViewMonth = function (direction, step) {
      _this.setState({
        direction: direction,
        viewDate: _utilsTime2['default'].addMonths(_this.state.viewDate, step)
      });
    };
  }

  _createClass(Calendar, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.refs.activeYear) {
        this.scrollToActive();
      }
    }
  }, {
    key: 'scrollToActive',
    value: function scrollToActive() {
      this.refs.years.scrollTop = this.refs.activeYear.offsetTop - this.refs.years.offsetHeight / 2 + this.refs.activeYear.offsetHeight / 2;
    }
  }, {
    key: 'renderYear',
    value: function renderYear(year) {
      var props = {
        className: year === this.state.viewDate.getFullYear() ? _styleCalendar2['default'].active : '',
        key: year,
        onClick: this.handleYearClick.bind(this, year)
      };

      if (year === this.state.viewDate.getFullYear()) {
        props.ref = 'activeYear';
      }

      return _react2['default'].createElement(
        'li',
        props,
        year
      );
    }
  }, {
    key: 'renderYears',
    value: function renderYears() {
      var _this2 = this;

      return _react2['default'].createElement(
        'ul',
        { 'data-react-toolbox': 'years', ref: 'years', className: _styleCalendar2['default'].years },
        _utilsUtils2['default'].range(1900, 2100).map(function (i) {
          return _this2.renderYear(i);
        })
      );
    }
  }, {
    key: 'renderMonths',
    value: function renderMonths() {
      var animation = this.state.direction === 'left' ? _animations.SlideLeft : _animations.SlideRight;
      return _react2['default'].createElement(
        'div',
        { 'data-react-toolbox': 'calendar' },
        _react2['default'].createElement(_button.IconButton, { className: _styleCalendar2['default'].prev, icon: 'chevron_left', onClick: this.changeViewMonth.bind(this, 'left', -1) }),
        _react2['default'].createElement(_button.IconButton, { className: _styleCalendar2['default'].next, icon: 'chevron_right', onClick: this.changeViewMonth.bind(this, 'right', 1) }),
        _react2['default'].createElement(
          _reactAddonsCssTransitionGroup2['default'],
          { transitionName: animation, transitionEnterTimeout: 350, transitionLeaveTimeout: 350 },
          _react2['default'].createElement(_CalendarMonth2['default'], {
            key: this.state.viewDate.getMonth(),
            maxDate: this.props.maxDate,
            minDate: this.props.minDate,
            viewDate: this.state.viewDate,
            selectedDate: this.props.selectedDate,
            onDayClick: this.handleDayClick
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: _styleCalendar2['default'].root },
        this.props.display === 'months' ? this.renderMonths() : this.renderYears()
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      display: _react2['default'].PropTypes.oneOf(['months', 'years']),
      maxDate: _react2['default'].PropTypes.object,
      minDate: _react2['default'].PropTypes.object,
      onChange: _react2['default'].PropTypes.func,
      selectedDate: _react2['default'].PropTypes.object,
      viewDate: _react2['default'].PropTypes.object
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      display: 'months',
      selectedDate: new Date()
    },
    enumerable: true
  }]);

  return Calendar;
})(_react2['default'].Component);

exports['default'] = Calendar;
module.exports = exports['default'];