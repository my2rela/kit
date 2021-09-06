"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _KitAlert = _interopRequireDefault(require("../KitAlert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(_react2.cleanup);

var handleClose = function handleClose() {// Close function
};

it('renders good', function () {
  var div = document.createElement('div');

  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_KitAlert.default, {
    type: "success",
    isOpen: true,
    onClose: handleClose
  }, "test"), div);
});
it('as expected snapshot', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_KitAlert.default, {
    type: "success",
    onClose: handleClose
  }, "test")).toJSON();

  expect(tree).toMatchSnapshot();
});