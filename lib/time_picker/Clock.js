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

var _styleClock = require('./style.clock');

var _styleClock2 = _interopRequireDefault(_styleClock);

var _utilsTime = require('../utils/time');

var _utilsTime2 = _interopRequireDefault(_utilsTime);

var _ClockHours = require('./ClockHours');

var _ClockHours2 = _interopRequireDefault(_ClockHours);

var _ClockMinutes = require('./ClockMinutes');

var _ClockMinutes2 = _interopRequireDefault(_ClockMinutes);

var Clock = (function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock() {
    var _this = this;

    _classCallCheck(this, Clock);

    _get(Object.getPrototypeOf(Clock.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      center: { x: null, y: null },
      radius: 0
    };

    this.handleHourChange = function (hours) {
      if (_this.props.time.getHours() !== hours) {
        _this.props.onChange(_utilsTime2['default'].setHours(_this.props.time, _this.adaptHourToFormat(hours)));
      }
    };

    this.handleMinuteChange = function (minutes) {
      if (_this.props.time.getMinutes() !== minutes) {
        _this.props.onChange(_utilsTime2['default'].setMinutes(_this.props.time, minutes));
      }
    };

    this.handleCalculateShape = function () {
      var _refs$placeholder$getBoundingClientRect = _this.refs.placeholder.getBoundingClientRect();

      var top = _refs$placeholder$getBoundingClientRect.top;
      var left = _refs$placeholder$getBoundingClientRect.left;
      var width = _refs$placeholder$getBoundingClientRect.width;

      _this.setState({
        center: { x: left + width / 2, y: top + width / 2 },
        radius: width / 2
      });
    };
  }

  _createClass(Clock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleCalculateShape);
      this.handleCalculateShape();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleCalculateShape);
    }
  }, {
    key: 'adaptHourToFormat',
    value: function adaptHourToFormat(hour) {
      if (this.props.format === 'ampm') {
        if (_utilsTime2['default'].getTimeMode(this.props.time) === 'pm') {
          return hour < 12 ? hour + 12 : hour;
        } else {
          return hour === 12 ? 0 : hour;
        }
      } else {
        return hour;
      }
    }
  }, {
    key: 'renderHours',
    value: function renderHours() {
      return _react2['default'].createElement(_ClockHours2['default'], {
        center: this.state.center,
        format: this.props.format,
        onChange: this.handleHourChange,
        radius: this.state.radius,
        selected: this.props.time.getHours(),
        spacing: this.state.radius * 0.18,
        onHandMoved: this.props.onHandMoved
      });
    }
  }, {
    key: 'renderMinutes',
    value: function renderMinutes() {
      return _react2['default'].createElement(_ClockMinutes2['default'], {
        center: this.state.center,
        onChange: this.handleMinuteChange,
        radius: this.state.radius,
        selected: this.props.time.getMinutes(),
        spacing: this.state.radius * 0.18,
        onHandMoved: this.props.onHandMoved
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var animation = this.props.display === 'hours' ? _animations.ZoomOut : _animations.ZoomIn;
      return _react2['default'].createElement(
        'div',
        { 'data-react-toolbox': 'clock', className: _styleClock2['default'].root },
        _react2['default'].createElement(
          'div',
          { ref: 'placeholder', className: _styleClock2['default'].placeholder, style: { height: this.state.radius * 2 } },
          _react2['default'].createElement(
            _reactAddonsCssTransitionGroup2['default'],
            { transitionName: animation, transitionEnterTimeout: 500, transitionLeaveTimeout: 500 },
            _react2['default'].createElement(
              'div',
              { key: this.props.display, className: _styleClock2['default'].wrapper, style: { height: this.state.radius * 2 } },
              this.props.display === 'hours' ? this.renderHours() : null,
              this.props.display === 'minutes' ? this.renderMinutes() : null
            )
          )
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      className: _react2['default'].PropTypes.string,
      display: _react2['default'].PropTypes.oneOf(['hours', 'minutes']),
      format: _react2['default'].PropTypes.oneOf(['24hr', 'ampm']),
      onChange: _react2['default'].PropTypes.func,
      onHandMoved: _react2['default'].PropTypes.func,
      time: _react2['default'].PropTypes.object
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: '',
      display: 'hours',
      format: '24hr',
      time: new Date()
    },
    enumerable: true
  }]);

  return Clock;
})(_react2['default'].Component);

exports['default'] = Clock;
module.exports = exports['default'];