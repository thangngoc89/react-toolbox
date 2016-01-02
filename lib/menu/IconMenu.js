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

var _button = require('../button');

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _styleIcon_menu = require('./style.icon_menu');

var _styleIcon_menu2 = _interopRequireDefault(_styleIcon_menu);

var IconMenu = (function (_React$Component) {
  _inherits(IconMenu, _React$Component);

  function IconMenu() {
    var _this = this;

    _classCallCheck(this, IconMenu);

    _get(Object.getPrototypeOf(IconMenu.prototype), 'constructor', this).apply(this, arguments);

    this.handleButtonClick = function () {
      _this.refs.menu.show();
      if (_this.props.onClick) _this.props.onClick();
    };
  }

  _createClass(IconMenu, [{
    key: 'render',
    value: function render() {
      var className = _styleIcon_menu2['default'].root;
      if (this.props.className) className += ' ' + this.props.className;

      return _react2['default'].createElement(
        'div',
        { className: className },
        _react2['default'].createElement(_button.IconButton, {
          className: _styleIcon_menu2['default'].icon,
          icon: this.props.icon,
          onClick: this.handleButtonClick,
          ripple: this.props.iconRipple
        }),
        _react2['default'].createElement(
          _Menu2['default'],
          {
            ref: 'menu',
            onHide: this.props.onHide,
            onSelect: this.props.onSelect,
            onShow: this.props.onShow,
            position: this.props.position,
            ripple: this.props.menuRipple,
            selectable: this.props.selectable,
            selected: this.props.selected
          },
          this.props.children
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      children: _react2['default'].PropTypes.node,
      className: _react2['default'].PropTypes.string,
      icon: _react2['default'].PropTypes.string,
      iconRipple: _react2['default'].PropTypes.bool,
      menuRipple: _react2['default'].PropTypes.bool,
      onClick: _react2['default'].PropTypes.func,
      onHide: _react2['default'].PropTypes.func,
      onSelect: _react2['default'].PropTypes.func,
      onShow: _react2['default'].PropTypes.func,
      position: _react2['default'].PropTypes.string,
      selectable: _react2['default'].PropTypes.bool,
      selected: _react2['default'].PropTypes.any
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: '',
      icon: 'more_vert',
      iconRipple: true,
      menuRipple: true,
      position: 'auto',
      selectable: false
    },
    enumerable: true
  }]);

  return IconMenu;
})(_react2['default'].Component);

exports['default'] = IconMenu;
module.exports = exports['default'];