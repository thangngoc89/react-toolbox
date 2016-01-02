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

var _font_icon = require('../font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ripple = require('../ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _styleMenu_item = require('./style.menu_item');

var _styleMenu_item2 = _interopRequireDefault(_styleMenu_item);

var MenuItem = (function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem() {
    var _this = this;

    _classCallCheck(this, MenuItem);

    _get(Object.getPrototypeOf(MenuItem.prototype), 'constructor', this).apply(this, arguments);

    this.handleClick = function (event) {
      if (_this.props.onClick && !_this.props.disabled) {
        _this.props.onClick(event, _this);
      }
    };
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var _ClassNames;

      var _props = this.props;
      var icon = _props.icon;
      var caption = _props.caption;
      var children = _props.children;
      var shortcut = _props.shortcut;
      var selected = _props.selected;
      var disabled = _props.disabled;

      var others = _objectWithoutProperties(_props, ['icon', 'caption', 'children', 'shortcut', 'selected', 'disabled']);

      var className = (0, _classnames2['default'])(_styleMenu_item2['default'].root, (_ClassNames = {}, _defineProperty(_ClassNames, _styleMenu_item2['default'].selected, selected), _defineProperty(_ClassNames, _styleMenu_item2['default'].disabled, disabled), _ClassNames), this.props.className);

      return _react2['default'].createElement(
        'li',
        _extends({}, others, { 'data-react-toolbox': 'menu-item', className: className, onClick: this.handleClick }),
        icon ? _react2['default'].createElement(_font_icon2['default'], { value: icon, className: _styleMenu_item2['default'].icon }) : null,
        _react2['default'].createElement(
          'span',
          { className: _styleMenu_item2['default'].caption },
          caption
        ),
        shortcut ? _react2['default'].createElement(
          'small',
          { className: _styleMenu_item2['default'].shortcut },
          shortcut
        ) : null,
        children
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      caption: _react2['default'].PropTypes.string.isRequired,
      children: _react2['default'].PropTypes.any,
      className: _react2['default'].PropTypes.string,
      disabled: _react2['default'].PropTypes.bool,
      icon: _react2['default'].PropTypes.string,
      onClick: _react2['default'].PropTypes.func,
      selected: _react2['default'].PropTypes.bool,
      shortcut: _react2['default'].PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: '',
      disabled: false,
      selected: false
    },
    enumerable: true
  }]);

  return MenuItem;
})(_react2['default'].Component);

exports['default'] = (0, _ripple2['default'])({
  className: _styleMenu_item2['default'].ripple
})(MenuItem);
module.exports = exports['default'];