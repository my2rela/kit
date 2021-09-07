"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KitSelectField = function KitSelectField(props) {
  var options = props.options,
      onChange = props.onChange,
      label = props.label,
      value = props.value;

  var renderChild = function renderChild() {
    return options.map(function (option) {
      return /*#__PURE__*/_react.default.createElement("option", {
        value: option.value,
        key: option.value
      }, option.text);
    });
  };

  var renderLabel = function renderLabel() {
    if (!label) {
      return null;
    }

    return /*#__PURE__*/_react.default.createElement("span", {
      className: "kit-input-selectfield__label"
    }, label, ":");
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "kit-input-selectfield"
  }, renderLabel(), /*#__PURE__*/_react.default.createElement("select", {
    onChange: onChange,
    value: value
  }, renderChild())));
};

var _default = KitSelectField;
exports.default = _default;