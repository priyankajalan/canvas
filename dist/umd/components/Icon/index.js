(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Icon"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Icon"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Icon);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Icon) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Icon).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});
//# sourceMappingURL=index.js.map