"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _Alert = _interopRequireDefault(require("@material-ui/lab/Alert"));

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

require("./KitAlert.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var KitAlert = function KitAlert(props) {
  var type = props.type,
      children = props.children,
      isOpen = props.isOpen,
      onClose = props.onClose;

  var slideTransition = function slideTransition(p) {
    return /*#__PURE__*/_react.default.createElement(_Slide.default, _extends({}, p, {
      direction: "up"
    }));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "kit-alert"
  }, /*#__PURE__*/_react.default.createElement(_Snackbar.default, {
    open: isOpen,
    autoHideDuration: 6000,
    onClose: onClose,
    TransitionComponent: slideTransition
  }, /*#__PURE__*/_react.default.createElement(_Alert.default, {
    onClose: onClose,
    severity: type
  }, children)));
};

var _default = KitAlert;
exports.default = _default;