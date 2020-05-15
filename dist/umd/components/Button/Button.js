(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "styled-components", "../Icon", "./styles", "../../utils/colors"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("styled-components"), require("../Icon"), require("./styles"), require("../../utils/colors"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.styledComponents, global.Icon, global.styles, global.colors);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _styledComponents, _Icon, _styles, _colors) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _Icon2 = _interopRequireDefault(_Icon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  const Button = props => {
    const {
      component = 'button',
      icon
    } = props,
          otherProps = _objectWithoutProperties(props, ["component", "icon"]);

    let Component = component;

    if (component === 'button' && otherProps.href) {
      Component = 'a';
    }

    return /*#__PURE__*/_react2.default.createElement(StyledButton, _extends({
      Component: Component,
      icon: icon
    }, otherProps), icon && /*#__PURE__*/_react2.default.createElement(StyledIcon, {
      name: icon,
      color: otherProps.outlined ? otherProps.color : 'white'
    }), otherProps.children);
  };

  Button.propTypes = {
    component: _propTypes2.default.string,
    children: _propTypes2.default.any,
    href: _propTypes2.default.string,
    text: _propTypes2.default.bool,
    alert: _propTypes2.default.string,
    color: _propTypes2.default.string,
    outlined: _propTypes2.default.bool,
    capsule: _propTypes2.default.bool,
    darkTheme: _propTypes2.default.bool,
    icon: _propTypes2.default.string,
    circular: _propTypes2.default.bool
  };
  exports.default = Button;
  const StyledIcon = (0, _styledComponents2.default)(_Icon2.default)`
    text-align: center;
`;
  const StyledButton = (0, _styledComponents2.default)(_ref => {
    let {
      Component,
      outlined,
      capsule,
      darkTheme,
      text,
      icon
    } = _ref,
        otherProps = _objectWithoutProperties(_ref, ["Component", "outlined", "capsule", "darkTheme", "text", "icon"]);

    return /*#__PURE__*/_react2.default.createElement(Component, otherProps);
  })`
   ${props => {
    const {
      alert,
      outlined = false,
      capsule = false,
      darkTheme = false,
      color,
      icon,
      circular = false,
      text = false
    } = props;
    console.log(text);
    return _styledComponents.css`
            text-align:center;
            min-height: 1em;
            cursor: pointer;
            padding: 0.7em 1em;
            margin: 0.25em 0.25em 0.25em 0;
            text-decoration:none;
            font-weight: 600;
            font-size: 1rem;
            user-select: none;
            -webkit-user-select: none;
            border: none;
            border-radius: 0.285rem;
            box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
            -webkit-box-shadow:0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
            background: #e0e1e2;
            &:hover{
                background-color: #ddd;
                opacity:.7;
            }
            ${alert && _styles.alertButtonStylesMap[alert]}
            ${alert && outlined && _styles.alertOutlinedButtonStylesMap[alert]}
            ${color && `
                background-color: ${_colors.COLORS[color][500]};
                color: ${['lightGreen', 'yellow', 'lime', 'amber'].includes(color) ? '#000' : '#fff'};
                &:hover{
                    background-color: ${_colors.COLORS[color][300]};
                }
            `}
            ${!alert && outlined && `
                background-color: #fff;
                color: ${_colors.COLORS[color][500]};
                border: 1px solid ${_colors.COLORS[color][500]};
                &:hover{
                    background-color: ${_colors.COLORS[color][500]};
                    color: ${['lightGreen', 'yellow', 'lime', 'amber'].includes(color) ? '#000' : '#fff'};
                }
            `}
            ${capsule && `border-radius: 1.5rem;`}
            ${darkTheme && `
                border: 1px solid #000;
                color: ${_colors.COLORS[color][300]};
                background-color: #000;
                &:hover{
                    border: 1px solid ${_colors.COLORS[color][500]};
                    background-color: ${_colors.COLORS[color][500]};
                    color: ${['lightGreen', 'yellow', 'lime', 'amber'].includes(color) ? '#000' : '#fff'};
                }
            `}
            ${icon && !color && _styles.iconStylesMap[icon]}
            ${icon && circular && `
                height: 3.8em;
                width: 3.8em;
                border-radius: 50%;
                font-size: 1rem;
            `}
            ${text && `
                background-color: #fff;
                border:none;
                color: ${color ? _colors.COLORS[color][500] : '#000'};
                &:hover{
                    background-color: ${color ? _colors.COLORS[color][500] : '#000'};
                    color: ${['lightGreen', 'yellow', 'lime', 'amber'].includes(color) ? '#000' : '#fff'};
                    opacity:1;
                }
            `}
            &:focus{
                outline:0;
            }
            &::-moz-focus-inner{
                bordet-style:none;
            }
        `;
  }}
`;
});
//# sourceMappingURL=Button.js.map