"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./KitTextField.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KitTextField = function KitTextField(props) {
  var onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      placeholder = props.placeholder,
      error = props.error,
      label = props.label,
      type = props.type,
      value = props.value;

  var renderLabel = function renderLabel() {
    if (!label) {
      return null;
    }

    return /*#__PURE__*/_react.default.createElement("span", {
      className: "kit-input-textfield__label"
    }, label, ":");
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "kit-input-textfield ".concat(error ? '__error' : '')
  }, renderLabel(), /*#__PURE__*/_react.default.createElement("input", {
    onChange: onChange,
    placeholder: placeholder,
    type: type !== null && type !== void 0 ? type : 'text',
    value: value,
    onFocus: onFocus,
    onBlur: onBlur
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "kit-input-textfield__error"
  }, error));
};

var _default = KitTextField;
exports.default = _default;