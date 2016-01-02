'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RadioButton = require('./RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var RadioGroup = (function (_React$Component) {
  _inherits(RadioGroup, _React$Component);

  function RadioGroup() {
    var _this = this;

    _classCallCheck(this, RadioGroup);

    _get(Object.getPrototypeOf(RadioGroup.prototype), 'constructor', this).apply(this, arguments);

    this.handleChange = function (value) {
      if (_this.props.onChange) _this.props.onChange(value);
    };
  }

  _createClass(RadioGroup, [{
    key: 'renderRadioButtons',
    value: function renderRadioButtons() {
      var _this2 = this;

      return _react2['default'].Children.map(this.props.children, function (radio, idx) {
        return _react2['default'].createElement(_RadioButton2['default'], _extends({}, radio.props, {
          checked: radio.props.value === _this2.props.value,
          disabled: _this2.props.disabled || radio.props.disabled,
          key: idx,
          label: radio.props.label,
          onChange: _this2.handleChange.bind(_this2, radio.props.value),
          value: radio.props.value
        }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: this.props.className },
        this.renderRadioButtons()
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      children: _react2['default'].PropTypes.node,
      className: _react2['default'].PropTypes.string,
      disabled: _react2['default'].PropTypes.bool,
      name: _react2['default'].PropTypes.string,
      onChange: _react2['default'].PropTypes.func,
      value: _react2['default'].PropTypes.any
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: '',
      disabled: false
    },
    enumerable: true
  }]);

  return RadioGroup;
})(_react2['default'].Component);

exports['default'] = RadioGroup;
module.exports = exports['default'];