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

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _TabContent = require('./TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var Tabs = (function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _this = this;

    _classCallCheck(this, Tabs);

    _get(Object.getPrototypeOf(Tabs.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      pointer: {}
    };

    this.handleHeaderClick = function (idx) {
      if (_this.props.onChange) _this.props.onChange(idx);
    };
  }

  _createClass(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.updatePointer(_this2.props.index);
      }, 100);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updatePointer(nextProps.index);
    }
  }, {
    key: 'parseChildren',
    value: function parseChildren() {
      var headers = [];
      var contents = [];

      _react2['default'].Children.forEach(this.props.children, function (item) {
        if (item.type === _Tab2['default']) {
          headers.push(item);
          if (item.props.children) {
            contents.push(_react2['default'].createElement(_TabContent2['default'], { children: item.props.children }));
          }
        } else if (item.type === _TabContent2['default']) {
          contents.push(item);
        }
      });

      return { headers: headers, contents: contents };
    }
  }, {
    key: 'updatePointer',
    value: function updatePointer(idx) {
      var startPoint = this.refs.tabs.getBoundingClientRect().left;
      var label = this.refs.navigation.children[idx].getBoundingClientRect();
      this.setState({
        pointer: {
          top: this.refs.navigation.getBoundingClientRect().height + 'px',
          left: label.left - startPoint + 'px',
          width: label.width + 'px'
        }
      });
    }
  }, {
    key: 'renderHeaders',
    value: function renderHeaders(headers) {
      var _this3 = this;

      return headers.map(function (item, idx) {
        return _react2['default'].cloneElement(item, {
          key: idx,
          active: _this3.props.index === idx,
          onClick: _this3.handleHeaderClick.bind(_this3, idx, item)
        });
      });
    }
  }, {
    key: 'renderContents',
    value: function renderContents(contents) {
      var _this4 = this;

      return contents.map(function (item, idx) {
        return _react2['default'].cloneElement(item, {
          key: idx,
          active: _this4.props.index === idx,
          tabIndex: idx
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = _style2['default'].root;

      var _parseChildren = this.parseChildren();

      var headers = _parseChildren.headers;
      var contents = _parseChildren.contents;

      if (this.props.className) className += ' ' + this.props.className;

      return _react2['default'].createElement(
        'div',
        { ref: 'tabs', className: className },
        _react2['default'].createElement(
          'nav',
          { className: _style2['default'].navigation, ref: 'navigation' },
          this.renderHeaders(headers)
        ),
        _react2['default'].createElement('span', { className: _style2['default'].pointer, style: this.state.pointer }),
        this.renderContents(contents)
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      children: _react2['default'].PropTypes.node,
      className: _react2['default'].PropTypes.string,
      index: _react2['default'].PropTypes.number,
      onChange: _react2['default'].PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      index: 0
    },
    enumerable: true
  }]);

  return Tabs;
})(_react2['default'].Component);

exports['default'] = Tabs;
module.exports = exports['default'];