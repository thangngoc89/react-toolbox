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

var _font_icon = require('../font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var _ripple = require('../ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var IconButton = (function (_React$Component) {
  _inherits(IconButton, _React$Component);

  function IconButton() {
    var _this = this;

    _classCallCheck(this, IconButton);

    _get(Object.getPrototypeOf(IconButton.prototype), 'constructor', this).apply(this, arguments);

    this.handleMouseUp = function () {
      _this.refs.button.blur();
    };
  }

  _createClass(IconButton, [{
    key: 'render',
    value: function render() {
      var _ClassNames;

      var _props = this.props;
      var accent = _props.accent;
      var children = _props.children;
      var className = _props.className;
      var href = _props.href;
      var icon = _props.icon;
      var inverse = _props.inverse;
      var neutral = _props.neutral;
      var primary = _props.primary;

      var others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'href', 'icon', 'inverse', 'neutral', 'primary']);

      var element = href ? 'a' : 'button';
      var level = primary ? 'primary' : accent ? 'accent' : 'neutral';
      var classes = (0, _classnames2['default'])([_style2['default'].toggle], (_ClassNames = {}, _defineProperty(_ClassNames, _style2['default'][level], neutral), _defineProperty(_ClassNames, _style2['default'].inverse, inverse), _ClassNames), className);

      var props = _extends({}, others, {
        href: href,
        ref: 'button',
        className: classes,
        disabled: this.props.disabled,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseUp,
        'data-react-toolbox': 'button'
      });

      return _react2['default'].createElement(element, props, icon ? _react2['default'].createElement(_font_icon2['default'], { className: _style2['default'].icon, value: icon }) : null, children);
    }
  }], [{
    key: 'propTypes',
    value: {
      accent: _react2['default'].PropTypes.bool,
      children: _react2['default'].PropTypes.node,
      className: _react2['default'].PropTypes.string,
      disabled: _react2['default'].PropTypes.bool,
      href: _react2['default'].PropTypes.string,
      icon: _react2['default'].PropTypes.string,
      inverse: _react2['default'].PropTypes.bool,
      neutral: _react2['default'].PropTypes.bool,
      primary: _react2['default'].PropTypes.bool,
      type: _react2['default'].PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      accent: false,
      className: '',
      neutral: true,
      primary: false
    },
    enumerable: true
  }]);

  return IconButton;
})(_react2['default'].Component);

exports['default'] = (0, _ripple2['default'])({ centered: true })(IconButton);
module.exports = exports['default'];