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

var _utilsEvents = require('../utils/events');

var _utilsEvents2 = _interopRequireDefault(_utilsEvents);

var _utilsPrefixer = require('../utils/prefixer');

var _utilsPrefixer2 = _interopRequireDefault(_utilsPrefixer);

var _utilsUtils = require('../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _progress_bar = require('../progress_bar');

var _progress_bar2 = _interopRequireDefault(_progress_bar);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var Slider = (function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider() {
    var _this = this;

    _classCallCheck(this, Slider);

    _get(Object.getPrototypeOf(Slider.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      inputFocused: false,
      inputValue: null,
      sliderLength: 0,
      sliderStart: 0
    };

    this.handleInputFocus = function () {
      _this.setState({
        inputFocused: true,
        inputValue: _this.valueForInput(_this.props.value)
      });
    };

    this.handleInputChange = function (event) {
      _this.setState({ inputValue: event.target.value });
    };

    this.handleInputBlur = function (event) {
      var value = _this.state.inputValue || 0;
      _this.setState({ inputFocused: false, inputValue: null }, function () {
        _this.props.onChange(_this.trimValue(value), event);
      });
    };

    this.handleKeyDown = function (event) {
      if ([13, 27].indexOf(event.keyCode) !== -1) {
        _this.refs.input.blur();
        _reactDom2['default'].findDOMNode(_this).blur();
      }
      if (event.keyCode === 38) _this.addToValue(_this.props.step);
      if (event.keyCode === 40) _this.addToValue(-_this.props.step);
    };

    this.handleMouseDown = function (event) {
      if (_this.state.inputFocused) _this.refs.input.blur();
      _utilsEvents2['default'].addEventsToDocument(_this.getMouseEventMap());
      _this.start(_utilsEvents2['default'].getMousePosition(event));
      _utilsEvents2['default'].pauseEvent(event);
    };

    this.handleMouseMove = function (event) {
      _utilsEvents2['default'].pauseEvent(event);
      _this.move(_utilsEvents2['default'].getMousePosition(event));
    };

    this.handleMouseUp = function () {
      _this.end(_this.getMouseEventMap());
    };

    this.handleResize = function (event, callback) {
      var _ReactDOM$findDOMNode$getBoundingClientRect = _reactDom2['default'].findDOMNode(_this.refs.progressbar).getBoundingClientRect();

      var left = _ReactDOM$findDOMNode$getBoundingClientRect.left;
      var right = _ReactDOM$findDOMNode$getBoundingClientRect.right;

      var cb = callback || function () {};
      _this.setState({ sliderStart: left, sliderLength: right - left }, cb);
    };

    this.handleSliderBlur = function () {
      _utilsEvents2['default'].removeEventsFromDocument(_this.getKeyboardEvents());
    };

    this.handleSliderFocus = function () {
      _utilsEvents2['default'].addEventsToDocument(_this.getKeyboardEvents());
    };

    this.handleTouchEnd = function () {
      _this.end(_this.getTouchEventMap());
    };

    this.handleTouchMove = function (event) {
      _this.move(_utilsEvents2['default'].getTouchPosition(event));
    };

    this.handleTouchStart = function (event) {
      if (_this.state.inputFocused) _this.refs.input.blur();
      _this.start(_utilsEvents2['default'].getTouchPosition(event));
      _utilsEvents2['default'].addEventsToDocument(_this.getTouchEventMap());
      _utilsEvents2['default'].pauseEvent(event);
    };
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (!this.state.inputFocused && nextState.inputFocused) return false;
      if (this.state.inputFocused && this.props.value !== nextProps.value) {
        this.setState({ inputValue: this.valueForInput(nextProps.value) });
        return false;
      }
      return true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'addToValue',
    value: function addToValue(increment) {
      var value = this.state.inputFocused ? parseFloat(this.state.inputValue) : this.props.value;
      value = this.trimValue(value + increment);
      if (value !== this.props.value) this.props.onChange(value);
    }
  }, {
    key: 'getKeyboardEvents',
    value: function getKeyboardEvents() {
      return {
        keydown: this.handleKeyDown
      };
    }
  }, {
    key: 'getMouseEventMap',
    value: function getMouseEventMap() {
      return {
        mousemove: this.handleMouseMove,
        mouseup: this.handleMouseUp
      };
    }
  }, {
    key: 'getTouchEventMap',
    value: function getTouchEventMap() {
      return {
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      };
    }
  }, {
    key: 'end',
    value: function end(revents) {
      _utilsEvents2['default'].removeEventsFromDocument(revents);
      this.setState({ pressed: false });
    }
  }, {
    key: 'knobOffset',
    value: function knobOffset() {
      var _props = this.props;
      var max = _props.max;
      var min = _props.min;

      return this.state.sliderLength * (this.props.value - min) / (max - min);
    }
  }, {
    key: 'move',
    value: function move(position) {
      var newValue = this.positionToValue(position);
      if (newValue !== this.props.value) this.props.onChange(newValue);
    }
  }, {
    key: 'positionToValue',
    value: function positionToValue(position) {
      var _state = this.state;
      var start = _state.sliderStart;
      var length = _state.sliderLength;
      var _props2 = this.props;
      var max = _props2.max;
      var min = _props2.min;

      return this.trimValue((position.x - start) / length * (max - min) + min);
    }
  }, {
    key: 'start',
    value: function start(position) {
      var _this2 = this;

      this.handleResize(null, function () {
        _this2.setState({ pressed: true });
        _this2.props.onChange(_this2.positionToValue(position));
      });
    }
  }, {
    key: 'stepDecimals',
    value: function stepDecimals() {
      return (this.props.step.toString().split('.')[1] || []).length;
    }
  }, {
    key: 'trimValue',
    value: function trimValue(value) {
      if (value < this.props.min) return this.props.min;
      if (value > this.props.max) return this.props.max;
      return _utilsUtils2['default'].round(value, this.stepDecimals());
    }
  }, {
    key: 'valueForInput',
    value: function valueForInput(value) {
      var decimals = this.stepDecimals();
      return decimals > 0 ? value.toFixed(decimals) : value.toString();
    }
  }, {
    key: 'renderSnaps',
    value: function renderSnaps() {
      if (this.props.snaps) {
        return _react2['default'].createElement(
          'div',
          { ref: 'snaps', className: _style2['default'].snaps },
          _utilsUtils2['default'].range(0, (this.props.max - this.props.min) / this.props.step).map(function (i) {
            return _react2['default'].createElement('div', { key: 'span-' + i, className: _style2['default'].snap });
          })
        );
      }
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      if (this.props.editable) {
        var value = this.state.inputFocused ? this.state.inputValue : this.valueForInput(this.props.value);
        return _react2['default'].createElement(_input2['default'], {
          ref: 'input',
          className: _style2['default'].input,
          onFocus: this.handleInputFocus,
          onChange: this.handleInputChange,
          onBlur: this.handleInputBlur,
          value: value
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _ClassNames;

      var knobStyles = (0, _utilsPrefixer2['default'])({ transform: 'translateX(' + this.knobOffset() + 'px)' });
      var className = (0, _classnames2['default'])(_style2['default'].root, (_ClassNames = {}, _defineProperty(_ClassNames, _style2['default'].editable, this.props.editable), _defineProperty(_ClassNames, _style2['default'].pinned, this.props.pinned), _defineProperty(_ClassNames, _style2['default'].pressed, this.state.pressed), _defineProperty(_ClassNames, _style2['default'].ring, this.props.value === this.props.min), _ClassNames), this.props.className);

      return _react2['default'].createElement(
        'div',
        {
          className: className,
          'data-react-toolbox': 'slider',
          onBlur: this.handleSliderBlur,
          onFocus: this.handleSliderFocus,
          tabIndex: '0'
        },
        _react2['default'].createElement(
          'div',
          {
            ref: 'slider',
            className: _style2['default'].container,
            onMouseDown: this.handleMouseDown,
            onTouchStart: this.handleTouchStart
          },
          _react2['default'].createElement(
            'div',
            {
              ref: 'knob',
              className: _style2['default'].knob,
              onMouseDown: this.handleMouseDown,
              onTouchStart: this.handleTouchStart,
              style: knobStyles
            },
            _react2['default'].createElement('div', { className: _style2['default'].innerknob, 'data-value': parseInt(this.props.value) })
          ),
          _react2['default'].createElement(
            'div',
            { className: _style2['default'].progress },
            _react2['default'].createElement(_progress_bar2['default'], {
              ref: 'progressbar',
              className: _style2['default'].innerprogress,
              max: this.props.max,
              min: this.props.min,
              mode: 'determinate',
              value: this.props.value
            }),
            this.renderSnaps()
          )
        ),
        this.renderInput()
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      className: _react2['default'].PropTypes.string,
      editable: _react2['default'].PropTypes.bool,
      max: _react2['default'].PropTypes.number,
      min: _react2['default'].PropTypes.number,
      onChange: _react2['default'].PropTypes.func,
      pinned: _react2['default'].PropTypes.bool,
      snaps: _react2['default'].PropTypes.bool,
      step: _react2['default'].PropTypes.number,
      value: _react2['default'].PropTypes.number
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: '',
      editable: false,
      max: 100,
      min: 0,
      pinned: false,
      snaps: false,
      step: 0.01,
      value: 0
    },
    enumerable: true
  }]);

  return Slider;
})(_react2['default'].Component);

exports['default'] = Slider;
module.exports = exports['default'];