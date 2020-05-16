(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./pages/Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./pages/Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Button);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Button2 = _interopRequireDefault(_Button);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // import TypographyPage from './docs/pages/Typography';
  // import IconPage from './docs/pages/Icon';
  function App() {
    return /*#__PURE__*/_react2.default.createElement("div", {
      style: {
        width: '70%',
        margin: 'auto',
        padding: '3rem 0'
      }
    }, /*#__PURE__*/_react2.default.createElement(_Button2.default, null));
  }

  exports.default = App;
});
//# sourceMappingURL=App.js.map