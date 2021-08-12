"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Pagination = _interopRequireDefault(require("@material-ui/lab/Pagination"));

require("./KitPagination.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KitPagination = function KitPagination(props) {
  var total = props.total,
      actual = props.actual,
      onChange = props.onChange;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "kit-pagination"
  }, /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    count: total,
    page: actual,
    onChange: onChange,
    color: "primary"
  }));
};

var _default = KitPagination;
exports.default = _default;