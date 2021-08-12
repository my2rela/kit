"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./KitContainer.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KitContainer = function KitContainer(props) {
  var children = props.children,
      className = props.className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "kit-container ".concat(className !== null && className !== void 0 ? className : '')
  }, children);
};

var _default = KitContainer;
exports.default = _default;