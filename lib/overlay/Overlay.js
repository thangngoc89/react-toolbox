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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var Overlay = (function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay() {
    _classCallCheck(this, Overlay);

    _get(Object.getPrototypeOf(Overlay.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Overlay, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.app = document.querySelector('[data-react-toolbox="app"]') || document.body;
      this.node = document.createElement('div');
      this.node.setAttribute('data-react-toolbox', 'overlay');
      this.app.appendChild(this.node);
      this.handleRender();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.handleRender();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _reactDom2['default'].unmountComponentAtNode(this.node);
      this.app.removeChild(this.node);
    }
  }, {
    key: 'handleRender',
    value: function handleRender() {
      var _ClassNames;

      var className = (0, _classnames2['default'])(_style2['default'].root, (_ClassNames = {}, _defineProperty(_ClassNames, _style2['default'].active, this.props.active), _defineProperty(_ClassNames, _style2['default'].invisible, this.props.invisible), _ClassNames), this.props.className);

      _reactDom2['default'].render(_react2['default'].createElement(
        'div',
        { className: className },
        _react2['default'].createElement('div', { className: _style2['default'].overlay, onClick: this.props.onClick }),
        this.props.children
      ), this.node);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].DOM.noscript();
    }
  }], [{
    key: 'propTypes',
    value: {
      active: _react2['default'].PropTypes.bool,
      children: _react2['default'].PropTypes.node,
      className: _react2['default'].PropTypes.string,
      invisible: _react2['default'].PropTypes.bool,
      onClick: _react2['default'].PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      invisible: false
    },
    enumerable: true
  }]);

  return Overlay;
})(_react2['default'].Component);

exports['default'] = Overlay;
module.exports = exports['default'];