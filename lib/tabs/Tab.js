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

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var TabHeader = (function (_React$Component) {
  _inherits(TabHeader, _React$Component);

  function TabHeader() {
    var _this = this;

    _classCallCheck(this, TabHeader);

    _get(Object.getPrototypeOf(TabHeader.prototype), 'constructor', this).apply(this, arguments);

    this.handleClick = function () {
      if (!_this.props.disabled && _this.props.onClick) {
        _this.props.onClick();
      }
    };
  }

  _createClass(TabHeader, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.active && this.props.active && this.props.onActive) {
        this.props.onActive();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _ClassNames;

      var className = (0, _classnames2['default'])(_style2['default'].label, (_ClassNames = {}, _defineProperty(_ClassNames, _style2['default'].active, this.props.active), _defineProperty(_ClassNames, _style2['default'].hidden, this.props.hidden), _defineProperty(_ClassNames, _style2['default'].disabled, this.props.disabled), _ClassNames), this.props.className);

      return _react2['default'].createElement(
        'label',
        { className: className, onClick: this.handleClick },
        this.props.label
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      active: _react2['default'].PropTypes.bool,
      className: _react2['default'].PropTypes.string,
      disabled: _react2['default'].PropTypes.bool,
      hidden: _react2['default'].PropTypes.bool,
      label: _react2['default'].PropTypes.any.isRequired,
      onActive: _react2['default'].PropTypes.func,
      onClick: _react2['default'].PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      active: false,
      className: '',
      disabled: false,
      hidden: false
    },
    enumerable: true
  }]);

  return TabHeader;
})(_react2['default'].Component);

exports['default'] = TabHeader;
module.exports = exports['default'];