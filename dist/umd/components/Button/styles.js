(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const alertButtonStylesMap = exports.alertButtonStylesMap = {
    success: `
        color: #fff;
        background-color: #4CAF50;
        &:hover{
            background-color: #46a049;
        }`,
    warning: `
        color: #fff;
        background-color: #ff9800;
        &:hover{
            background-color: #e68a00;
        }`,
    info: `
        color: #fff;
        background-color: #2196F3;
        &:hover{
            background-color: #0b7dda;
        }`,
    danger: `
        color: #fff;
        background-color: #f44336;
        &:hover{
            background-color: #da190b;
        }`
  };
  const alertOutlinedButtonStylesMap = exports.alertOutlinedButtonStylesMap = {
    success: `
        color: #4CAF50;
        border: 1px solid #4CAF50;
        background-color: #fff;
        &:hover{
            color: #fff;
            background-color: #46a049;
        }`,
    warning: `
        color: #ff9800;
        border: 1px solid #ff9800;
        background-color: #fff;
        &:hover{
            color: #fff;
            background-color: #e68a00;
        }`,
    info: `
        color: #2196F3;
        border: 1px solid #2196F3;
        background-color: #fff;
        &:hover{
            color: #fff;
            background-color: #0b7dda;
        }`,
    danger: `
        color: #f44336;
        border: 1px solid #f44336;
        background-color: #fff;
        &:hover{
            color: #fff;
            background-color: #da190b;
        }`
  };
  const iconStylesMap = exports.iconStylesMap = {
    facebook: `
        background: #3B5998;
        &:hover{
            background: #3B5998;
        }
    `,
    twitter: `
        background: #55ACEE;
        &:hover{
            background: #55ACEE;
        }
    `,
    google: `
        background: #dd4b39;
        &:hover{
            background: #dd4b39;
        }
    `,
    linkedin: `
        background: #007bb5;
        &:hover{
            background: #007bb5;
        }
    `,
    youtube: `
        background: #bb0000;
        &:hover{
            background: #bb0000;
        }
    `,
    instagram: `
        background: #125688;
        &:hover{
            background: #125688;
        }
    `,
    pinterest: `
        background: #cb2027;
        &:hover{
            background: #cb2027;
        }
    `,
    skype: `
        background: #00aff0;
        &:hover{
            background: #00aff0;
        }`,
    dribble: `
        background: #ea4c89;
        &:hover{
            background: #ea4c89;
        }`,
    vimeo: `
        background: #45bbff;
        &:hover{
            background: #45bbff;
        }`,
    tumblr: `
        background: #2c4762;
        &:hover{
            background: #2c4762;
        }`,
    flickr: `
        background: #f40083;
        &:hover{
            background: #f40083;
        }`,
    yahoo: `
        background: #430297;
        &:hover{
            background: #430297;
        }`,
    reddit: `
        background: #ff5700;
        &:hover{
            background: #ff5700;
        }`
  };
});
//# sourceMappingURL=styles.js.map