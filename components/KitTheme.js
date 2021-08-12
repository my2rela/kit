"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: {
      main: '#542574e0'
    },
    secondary: {
      main: '#9fa3a344'
    }
  }
});

var KitTheme = function KitTheme(props) {
  var children = props.children;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: theme
  }, children));
};

var _default = KitTheme;
exports.default = _default;