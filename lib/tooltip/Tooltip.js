'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var Tooltip = function Tooltip(ComposedComponent) {
  return (function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
      var _this = this;

      _classCallCheck(this, _class);

      _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);

      this.state = {
        active: false
      };

      this.handleMouseEnter = function () {
        if (_this.timeout) clearTimeout(_this.timeout);
        _this.timeout = setTimeout(function () {
          return _this.setState({ active: true });
        }, _this.props.tooltipDelay);
        if (_this.props.onMouseEnter) _this.props.onMouseEnter();
      };

      this.handleMouseLeave = function () {
        if (_this.timeout) clearTimeout(_this.timeout);
        if (_this.state.active) _this.setState({ active: false });
        if (_this.props.onMouseLeave) _this.props.onMouseLeave();
      };

      this.handleClick = function () {
        if (_this.timeout) clearTimeout(_this.timeout);
        if (_this.props.tooltipHideOnClick) _this.setState({ active: false });
        if (_this.props.onClick) _this.props.onClick();
      };
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var children = _props.children;
        var className = _props.className;
        var tooltip = _props.tooltip;
        var tooltipDelay = _props.tooltipDelay;
        var tooltipHideOnClick = _props.tooltipHideOnClick;

        var other = _objectWithoutProperties(_props, ['children', 'className', 'tooltip', 'tooltipDelay', 'tooltipHideOnClick']);

        var composedClassName = (0, _classnames2['default'])(_style2['default'].root, className);
        var tooltipClassName = (0, _classnames2['default'])(_style2['default'].tooltip, _defineProperty({}, _style2['default'].active, this.state.active));

        return _react2['default'].createElement(
          ComposedComponent,
          _extends({}, other, {
            className: composedClassName,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave
          }),
          children ? children : null,
          _react2['default'].createElement(
            'span',
            { 'data-react-toolbox': 'tooltip', className: tooltipClassName },
            tooltip
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react2['default'].PropTypes.any,
        className: _react2['default'].PropTypes.string,
        onClick: _react2['default'].PropTypes.func,
        onMouseEnter: _react2['default'].PropTypes.func,
        onMouseLeave: _react2['default'].PropTypes.func,
        tooltip: _react2['default'].PropTypes.string,
        tooltipDelay: _react2['default'].PropTypes.number,
        tooltipHideOnClick: _react2['default'].PropTypes.bool
      },
      enumerable: true
    }, {
      key: 'defaultProps',
      value: {
        className: '',
        tooltipDelay: 0,
        tooltipHideOnClick: true
      },
      enumerable: true
    }]);

    return _class;
  })(_react2['default'].Component);
};

exports['default'] = Tooltip;
module.exports = exports['default'];