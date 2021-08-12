"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./KitButton.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KitButton = function KitButton(props) {
  var onClick = props.onClick,
      children = props.children,
      className = props.className,
      disabled = props.disabled;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "kit-button"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "kit-button__ ".concat(className !== null && className !== void 0 ? className : ''),
    type: "button",
    onClick: onClick,
    disabled: disabled
  }, children));
};

var _default = KitButton;
exports.default = _default;