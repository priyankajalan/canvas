"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./pages/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import TypographyPage from './docs/pages/Typography';
// import IconPage from './docs/pages/Icon';
function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '70%',
      margin: 'auto',
      padding: '3rem 0'
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, null));
}

var _default = App;
exports.default = _default;
//# sourceMappingURL=App.js.map