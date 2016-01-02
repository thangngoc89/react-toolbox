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

var _autocomplete = require('../autocomplete');

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _date_picker = require('../date_picker');

var _date_picker2 = _interopRequireDefault(_date_picker);

var _dropdown = require('../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _radioRadioGroup = require('../radio/RadioGroup');

var _radioRadioGroup2 = _interopRequireDefault(_radioRadioGroup);

var _slider = require('../slider');

var _slider2 = _interopRequireDefault(_slider);

var _switch = require('../switch');

var _switch2 = _interopRequireDefault(_switch);

var _time_picker = require('../time_picker');

var _time_picker2 = _interopRequireDefault(_time_picker);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var Component = {
  'autocomplete': _autocomplete2['default'],
  'button': _button2['default'],
  'checkbox': _checkbox2['default'],
  'datepicker': _date_picker2['default'],
  'dropdown': _dropdown2['default'],
  'input': _input2['default'],
  'radioGroup': _radioRadioGroup2['default'],
  'slider': _slider2['default'],
  'switch': _switch2['default'],
  'timepicker': _time_picker2['default']
};

var Form = (function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    var _this = this;

    _classCallCheck(this, Form);

    _get(Object.getPrototypeOf(Form.prototype), 'constructor', this).apply(this, arguments);

    this.onSubmit = function (event) {
      event.preventDefault();
      if (_this.props.onSubmit) _this.props.onSubmit(event);
    };

    this.onChange = function (field, value, event) {
      if (_this.props.onChange) _this.props.onChange(field, value, event);
    };
  }

  _createClass(Form, [{
    key: 'renderFields',
    value: function renderFields() {
      var _this2 = this;

      return Object.keys(this.props.model).map(function (field, index) {
        var properties = _this2.props.model[field];
        var Field = Component[properties.kind.toLowerCase()];
        return _react2['default'].createElement(Field, _extends({ key: index }, properties, { onChange: _this2.onChange.bind(_this2, field) }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = _style2['default'].root + ' ' + this.props.className;

      return _react2['default'].createElement(
        'form',
        { 'data-react-toolbox': 'form', className: className, onSubmit: this.onSubmit },
        this.renderFields(),
        this.props.children
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      attributes: _react2['default'].PropTypes.array,
      children: _react2['default'].PropTypes.node,
      className: _react2['default'].PropTypes.string,
      model: _react2['default'].PropTypes.object,
      onChange: _react2['default'].PropTypes.func,
      onError: _react2['default'].PropTypes.func,
      onSubmit: _react2['default'].PropTypes.func,
      onValid: _react2['default'].PropTypes.func,
      storage: _react2['default'].PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      attributes: [],
      className: ''
    },
    enumerable: true
  }]);

  return Form;
})(_react2['default'].Component);

exports['default'] = Form;
module.exports = exports['default'];