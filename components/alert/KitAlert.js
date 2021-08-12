"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _Alert = _interopRequireDefault(require("@material-ui/lab/Alert"));

require("./KitAlert.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KitAlert = function KitAlert(props) {
  var type = props.type,
      children = props.children,
      isOpen = props.isOpen,
      onClose = props.onClose;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "kit-alert"
  }, /*#__PURE__*/_react.default.createElement(_Snackbar.default, {
    open: isOpen,
    autoHideDuration: 6000,
    onClose: onClose
  }, /*#__PURE__*/_react.default.createElement(_Alert.default, {
    onClose: onClose,
    severity: type
  }, children)));
};

var _default = KitAlert;
exports.default = _default;