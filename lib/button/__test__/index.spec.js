'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _buttonStyle = require('../../button/style');

var _buttonStyle2 = _interopRequireDefault(_buttonStyle);

var _utilsTesting = require('../../utils/testing');

var _utilsTesting2 = _interopRequireDefault(_utilsTesting);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

describe('Button', function () {
  var button = undefined;

  describe('#render', function () {
    it('uses flat and neutral styles by default', function () {
      button = _utilsTesting2['default'].shallowRenderComponent(_index2['default']);

      (0, _expect2['default'])(button.props.className).toContain(_buttonStyle2['default'].flat);
      (0, _expect2['default'])(button.props.className).toContain(_buttonStyle2['default'].neutral);
    });

    it('renders accent button with accent style', function () {
      button = _utilsTesting2['default'].shallowRenderComponent(_index2['default'], { accent: true });

      (0, _expect2['default'])(button.props.className).toContain(_buttonStyle2['default'].flat);
      (0, _expect2['default'])(button.props.className).toContain(_buttonStyle2['default'].accent);
    });

    it('renders mini button with mini style', function () {
      button = _utilsTesting2['default'].shallowRenderComponent(_index2['default'], { floating: true, mini: true });

      (0, _expect2['default'])(button.props.className).toContain(_buttonStyle2['default'].floating);
      (0, _expect2['default'])(button.props.className).toContain(_buttonStyle2['default'].neutral);
      (0, _expect2['default'])(button.props.className).toContain(_buttonStyle2['default'].mini);
    });

    it('renders mini accented button with both styles', function () {
      button = _utilsTesting2['default'].shallowRenderComponent(_index2['default'], { mini: true, accent: true });

      (0, _expect2['default'])(button.props.className).toContain(_buttonStyle2['default'].flat);
      (0, _expect2['default'])(button.props.className).toContain(_buttonStyle2['default'].accent);
      (0, _expect2['default'])(button.props.className).toContain(_buttonStyle2['default'].mini);
    });
  });
});