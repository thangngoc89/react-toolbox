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

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _utilsUtils = require('../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var TableRow = (function (_React$Component) {
  _inherits(TableRow, _React$Component);

  function TableRow() {
    var _this = this;

    _classCallCheck(this, TableRow);

    _get(Object.getPrototypeOf(TableRow.prototype), 'constructor', this).apply(this, arguments);

    this.handleInputChange = function (key, type, event) {
      var value = type === 'checkbox' ? event.target.checked : event.target.value;
      _this.props.onChange(key, value);
    };
  }

  _createClass(TableRow, [{
    key: 'renderSelectCell',
    value: function renderSelectCell() {
      if (this.props.selectable) {
        return _react2['default'].createElement(
          'td',
          { className: _style2['default'].selectable },
          _react2['default'].createElement(_checkbox2['default'], { checked: this.props.selected, onChange: this.props.onSelect })
        );
      }
    }
  }, {
    key: 'renderCells',
    value: function renderCells() {
      var _this2 = this;

      return Object.keys(this.props.model).map(function (key) {
        return _react2['default'].createElement(
          'td',
          { key: key },
          _this2.renderCell(key)
        );
      });
    }
  }, {
    key: 'renderCell',
    value: function renderCell(key) {
      var value = this.props.data[key];
      if (value) {
        return value.toString();
      }
    }
  }, {
    key: 'renderInput',
    value: function renderInput(key, value) {
      var inputType = _utilsUtils2['default'].inputTypeForPrototype(this.props.model[key].type);
      var inputValue = _utilsUtils2['default'].prepareValueForInput(value, inputType);
      var checked = inputType === 'checkbox' && value ? true : null;
      return _react2['default'].createElement('input', {
        checked: checked,
        onChange: this.handleInputChange.bind(null, key, inputType),
        type: inputType,
        value: inputValue
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _ClassNames;

      var className = (0, _classnames2['default'])(_style2['default'].row, (_ClassNames = {}, _defineProperty(_ClassNames, _style2['default'].editable, this.props.onChange), _defineProperty(_ClassNames, _style2['default'].selected, this.props.selected), _ClassNames));

      return _react2['default'].createElement(
        'tr',
        { 'data-react-toolbox-table': 'row', className: className },
        this.renderSelectCell(),
        this.renderCells()
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      data: _react2['default'].PropTypes.object,
      model: _react2['default'].PropTypes.object,
      onChange: _react2['default'].PropTypes.func,
      onSelect: _react2['default'].PropTypes.func,
      selectable: _react2['default'].PropTypes.bool,
      selected: _react2['default'].PropTypes.bool
    },
    enumerable: true
  }]);

  return TableRow;
})(_react2['default'].Component);

exports['default'] = TableRow;
module.exports = exports['default'];