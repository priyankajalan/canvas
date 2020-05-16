(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "react-dom", "./App", "./index.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("react-dom"), require("./App"), require("./index.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.reactDom, global.App, global.index);
    global.undefined = mod.exports;
  }
})(this, function (_react, _reactDom, _App) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _App2 = _interopRequireDefault(_App);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _reactDom2.default.render( /*#__PURE__*/_react2.default.createElement(_react2.default.StrictMode, null, /*#__PURE__*/_react2.default.createElement(_App2.default, null)), document.getElementById('root'));
});
//# sourceMappingURL=index.js.map