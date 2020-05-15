(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Typography", "./Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Typography"), require("./Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Typography, global.Button);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Typography, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Button = exports.Typography = undefined;

  var _Typography2 = _interopRequireDefault(_Typography);

  var _Button2 = _interopRequireDefault(_Button);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.Typography = _Typography2.default;
  exports.Button = _Button2.default;
});
//# sourceMappingURL=index.js.map