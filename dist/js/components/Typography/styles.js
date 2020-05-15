"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.effectStylesMap = exports.fontWeightStylesMap = exports.VariantStylesMap = void 0;
var VariantStylesMap = {
  display4: "\n        line-height: 1.16;\n        letter-spacing: -0.015em;\n        font-size: 6rem;\n    ",
  display3: "\n        font-size: 3.75rem;\n        line-height: 1.2;\n        letter-spacing: -0.008em;\n    ",
  display2: "\n        font-weight:400;\n        font-size: 3rem;\n        line-height: 1.167;\n        letter-spacing: 0em;\n    ",
  display1: "\n        font-size: 2.125rem;\n        font-weight:400;\n        line-height: 1.235;\n        letter-spacing: 0.007358em;\n    ",
  subtitle: "\n        font-size: 1.5rem;\n        line-height: 1.75;\n        letter-spacing: 0.00938em;\n    ",
  body: "\n        font-size: 1.25rem;\n        line-height: 1.5;\n        letter-spacing: 0.00938em;\n    "
};
exports.VariantStylesMap = VariantStylesMap;
var fontWeightStylesMap = {
  thin: "font-weight: 300;",
  normal: "font-weight: 500;",
  bold: "font-weight: 600;"
};
exports.fontWeightStylesMap = fontWeightStylesMap;
var effectStylesMap = {
  typewritter: "\n        overflow: hidden; /* Ensures the content is not revealed until the animation */\n        white-space: nowrap;   /* Keeps the content on a single line */ \n        letter-spacing: .15em; \n        animation: \n            typing 3.5s steps(40, end),\n            blink-caret .75s step-end infinite;\n\n        /* The typing effect */\n        @keyframes typing {\n            from { width: 0 }\n            to { width: 100% }\n        }\n        /* The typewriter cursor effect */\n        @keyframes blink-caret {\n            from, to { border-color: transparent }\n            50% { border-color: orange; }\n        }\n    "
};
exports.effectStylesMap = effectStylesMap;
//# sourceMappingURL=styles.js.map