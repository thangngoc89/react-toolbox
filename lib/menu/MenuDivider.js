'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleMenu_divider = require('./style.menu_divider');

var _styleMenu_divider2 = _interopRequireDefault(_styleMenu_divider);

var MenuDivider = function MenuDivider() {
  return _react2['default'].createElement('hr', { 'data-react-toolbox': 'menu-divider', className: _styleMenu_divider2['default'].root });
};

exports['default'] = MenuDivider;
module.exports = exports['default'];