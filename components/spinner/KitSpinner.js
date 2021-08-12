"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./KitSpinner.scss");

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KitSpinner = function KitSpinner(props) {
  var show = props.show,
      className = props.className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "kit-spinner ".concat(show ? 'kit-spinner__show' : '', " ").concat(className !== null && className !== void 0 ? className : '')
  }, /*#__PURE__*/_react.default.createElement(_CircularProgress.default, {
    color: "primary"
  }));
};

var _default = KitSpinner;
exports.default = _default;