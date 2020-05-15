(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Typography"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Typography"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Typography);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Typography) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Typography).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});
//# sourceMappingURL=index.js.map