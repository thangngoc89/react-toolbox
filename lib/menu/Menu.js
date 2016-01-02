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

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _utils = require('../utils');

var _styleMenu = require('./style.menu');

var _styleMenu2 = _interopRequireDefault(_styleMenu);

var POSITION = {
  AUTO: 'auto',
  STATIC: 'static',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right'
};

var Menu = (function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu() {
    var _this = this;

    _classCallCheck(this, Menu);

    _get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      active: this.props.active,
      rippled: false
    };

    this.handleDocumentClick = function (event) {
      if (_this.state.active && !_utils.events.targetIsDescendant(event, _reactDom2['default'].findDOMNode(_this))) {
        _this.setState({ active: false, rippled: false });
      }
    };

    this.handleSelect = function (item) {
      var _item$props = item.props;
      var value = _item$props.value;
      var onClick = _item$props.onClick;

      _this.setState({ active: false, rippled: _this.props.ripple }, function () {
        if (onClick) onClick();
        if (_this.props.onSelect) _this.props.onSelect(value);
      });
    };
  }

  _createClass(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _refs$menu$getBoundingClientRect = this.refs.menu.getBoundingClientRect();

      var width = _refs$menu$getBoundingClientRect.width;
      var height = _refs$menu$getBoundingClientRect.height;

      var position = this.props.position === POSITION.AUTO ? this.calculatePosition() : this.props.position;
      this.setState({ position: position, width: width, height: height });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.position !== nextProps.position) {
        var position = nextProps.position === POSITION.AUTO ? this.calculatePosition() : nextProps.position;
        this.setState({ position: position });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this2 = this;

      if (!this.state.active && nextState.active && this.props.position === POSITION.AUTO) {
        var position = this.calculatePosition();
        if (this.state.position !== position) {
          this.setState({ position: position, active: false }, function () {
            setTimeout(function () {
              _this2.setState({ active: true });
            }, 20);
          });
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(prevState, nextState) {
      if (!prevState.active && nextState.active) {
        _utils.events.addEventsToDocument({ click: this.handleDocumentClick });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.active && !this.state.active) {
        if (this.props.onHide) this.props.onHide();
        _utils.events.removeEventsFromDocument({ click: this.handleDocumentClick });
      } else if (!prevState.active && this.state.active && this.props.onShow) {
        this.props.onShow();
      }
    }
  }, {
    key: 'calculatePosition',
    value: function calculatePosition() {
      var _ReactDOM$findDOMNode$parentNode$getBoundingClientRect = _reactDom2['default'].findDOMNode(this).parentNode.getBoundingClientRect();

      var top = _ReactDOM$findDOMNode$parentNode$getBoundingClientRect.top;
      var left = _ReactDOM$findDOMNode$parentNode$getBoundingClientRect.left;
      var height = _ReactDOM$findDOMNode$parentNode$getBoundingClientRect.height;
      var width = _ReactDOM$findDOMNode$parentNode$getBoundingClientRect.width;

      var _utils$getViewport = _utils.utils.getViewport();

      var wh = _utils$getViewport.height;
      var ww = _utils$getViewport.width;

      var toTop = top < wh / 2 - height / 2;
      var toLeft = left < ww / 2 - width / 2;
      return (toTop ? 'top' : 'bottom') + '-' + (toLeft ? 'left' : 'right');
    }
  }, {
    key: 'getMenuStyle',
    value: function getMenuStyle() {
      var _state = this.state;
      var width = _state.width;
      var height = _state.height;
      var position = _state.position;

      if (position !== POSITION.STATIC) {
        if (this.state.active) {
          return { clip: 'rect(0 ' + width + 'px ' + height + 'px 0)' };
        } else if (position === POSITION.TOP_RIGHT) {
          return { clip: 'rect(0 ' + width + 'px 0 ' + width + 'px)' };
        } else if (position === POSITION.BOTTOM_RIGHT) {
          return { clip: 'rect(' + height + 'px ' + width + 'px ' + height + 'px ' + width + 'px)' };
        } else if (position === POSITION.BOTTOM_LEFT) {
          return { clip: 'rect(' + height + 'px 0 ' + height + 'px 0)' };
        } else if (position === POSITION.TOP_LEFT) {
          return { clip: 'rect(0 0 0 0)' };
        }
      }
    }
  }, {
    key: 'getRootStyle',
    value: function getRootStyle() {
      if (this.state.position !== POSITION.STATIC) {
        return { width: this.state.width, height: this.state.height };
      }
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this3 = this;

      return _react2['default'].Children.map(this.props.children, function (item) {
        if (item.type === _MenuItem2['default']) {
          return _react2['default'].cloneElement(item, {
            ripple: item.props.ripple || _this3.props.ripple,
            selected: item.props.value && _this3.props.selectable && item.props.value === _this3.props.selected,
            onClick: _this3.handleSelect.bind(_this3, item)
          });
        } else {
          return _react2['default'].cloneElement(item);
        }
      });
    }
  }, {
    key: 'show',
    value: function show() {
      this.setState({ active: true });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.setState({ active: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _ClassNames;

      var outlineStyle = { width: this.state.width, height: this.state.height };
      var className = (0, _classnames2['default'])([_styleMenu2['default'].root, _styleMenu2['default'][this.state.position]], (_ClassNames = {}, _defineProperty(_ClassNames, _styleMenu2['default'].active, this.state.active), _defineProperty(_ClassNames, _styleMenu2['default'].rippled, this.state.rippled), _ClassNames), this.props.className);

      return _react2['default'].createElement(
        'div',
        { className: className, style: this.getRootStyle() },
        this.props.outline ? _react2['default'].createElement('div', { className: _styleMenu2['default'].outline, style: outlineStyle }) : null,
        _react2['default'].createElement(
          'ul',
          { ref: 'menu', className: _styleMenu2['default'].menu, style: this.getMenuStyle() },
          this.renderItems()
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      active: _react2['default'].PropTypes.bool,
      children: _react2['default'].PropTypes.node,
      className: _react2['default'].PropTypes.string,
      onHide: _react2['default'].PropTypes.func,
      onSelect: _react2['default'].PropTypes.func,
      onShow: _react2['default'].PropTypes.func,
      outline: _react2['default'].PropTypes.bool,
      position: _react2['default'].PropTypes.string,
      ripple: _react2['default'].PropTypes.bool,
      selectable: _react2['default'].PropTypes.bool,
      selected: _react2['default'].PropTypes.any
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      active: false,
      outline: true,
      position: POSITION.STATIC,
      ripple: true,
      selectable: true
    },
    enumerable: true
  }]);

  return Menu;
})(_react2['default'].Component);

exports['default'] = Menu;
module.exports = exports['default'];