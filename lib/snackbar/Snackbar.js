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

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _font_icon = require('../font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var Snackbar = (function (_React$Component) {
  _inherits(Snackbar, _React$Component);

  function Snackbar() {
    _classCallCheck(this, Snackbar);

    _get(Object.getPrototypeOf(Snackbar.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Snackbar, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this = this;

      if (this.props.active && this.props.timeout) {
        setTimeout(function () {
          _this.props.onTimeout();
        }, this.props.timeout);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var action = _props.action;
      var active = _props.active;
      var icon = _props.icon;
      var label = _props.label;
      var onClick = _props.onClick;
      var type = _props.type;

      var className = (0, _classnames2['default'])([_style2['default'].root, _style2['default'][type]], _defineProperty({}, _style2['default'].active, active), this.props.className);

      return _react2['default'].createElement(
        _overlay2['default'],
        { invisible: true },
        _react2['default'].createElement(
          'div',
          { 'data-react-toolbox': 'snackbar', className: className },
          icon ? _react2['default'].createElement(_font_icon2['default'], { value: icon, className: _style2['default'].icon }) : null,
          _react2['default'].createElement(
            'span',
            { className: _style2['default'].label },
            label
          ),
          action ? _react2['default'].createElement(_button2['default'], { className: _style2['default'].button, label: action, onClick: onClick }) : null
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      action: _react2['default'].PropTypes.string,
      active: _react2['default'].PropTypes.bool,
      className: _react2['default'].PropTypes.string,
      icon: _react2['default'].PropTypes.string,
      label: _react2['default'].PropTypes.string.isRequired,
      onClick: _react2['default'].PropTypes.func,
      onTimeout: _react2['default'].PropTypes.func,
      timeout: _react2['default'].PropTypes.number,
      type: _react2['default'].PropTypes.string
    },
    enumerable: true
  }]);

  return Snackbar;
})(_react2['default'].Component);

exports['default'] = Snackbar;
module.exports = exports['default'];