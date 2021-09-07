"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _KitSelectField = _interopRequireDefault(require("../KitSelectField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = [{
  value: 1,
  text: 'one'
}, {
  value: 2,
  text: 'two'
}, {
  value: 3,
  text: 'three'
}];

var onchange = function onchange() {// onChange callback
};

afterEach(_react2.cleanup);
it('renders good', function () {
  var div = document.createElement('div');

  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_KitSelectField.default, {
    options: options,
    value: 1,
    label: "Test",
    onChange: onchange
  }), div);
});
it('as expected snapshot', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_KitSelectField.default, {
    options: options,
    value: 1,
    label: "Test",
    onChange: onchange
  })).toJSON();

  expect(tree).toMatchSnapshot();
});