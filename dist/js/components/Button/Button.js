"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _styles = require("./styles");

var _colors = require("../../utils/colors");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            text-align:center;\n            min-height: 1em;\n            cursor: pointer;\n            padding: 0.7em 1em;\n            margin: 0.25em 0.25em 0.25em 0;\n            text-decoration:none;\n            font-weight: 600;\n            font-size: 1rem;\n            user-select: none;\n            -webkit-user-select: none;\n            border: none;\n            border-radius: 0.285rem;\n            box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;\n            -webkit-box-shadow:0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;\n            background: #e0e1e2;\n            &:hover{\n                background-color: #ddd;\n                opacity:.7;\n            }\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            &:focus{\n                outline:0;\n            }\n            &::-moz-focus-inner{\n                bordet-style:none;\n            }\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n   ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(props) {
  var _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      icon = props.icon,
      otherProps = _objectWithoutProperties(props, ["component", "icon"]);

  var Component = component;

  if (component === 'button' && otherProps.href) {
    Component = 'a';
  }

  return /*#__PURE__*/_react.default.createElement(StyledButton, _extends({
    Component: Component,
    icon: icon
  }, otherProps), icon && /*#__PURE__*/_react.default.createElement(StyledIcon, {
    name: icon,
    color: otherProps.outlined ? otherProps.color : 'white'
  }), otherProps.children);
};

Button.propTypes = {
  component: _propTypes.default.string,
  children: _propTypes.default.any,
  href: _propTypes.default.string,
  text: _propTypes.default.bool,
  alert: _propTypes.default.string,
  color: _propTypes.default.string,
  outlined: _propTypes.default.bool,
  capsule: _propTypes.default.bool,
  darkTheme: _propTypes.default.bool,
  icon: _propTypes.default.string,
  circular: _propTypes.default.bool
};
var _default = Button;
exports.default = _default;
var StyledIcon = (0, _styledComponents.default)(_Icon.default)(_templateObject());
var StyledButton = (0, _styledComponents.default)(function (_ref) {
  var Component = _ref.Component,
      outlined = _ref.outlined,
      capsule = _ref.capsule,
      darkTheme = _ref.darkTheme,
      text = _ref.text,
      icon = _ref.icon,
      otherProps = _objectWithoutProperties(_ref, ["Component", "outlined", "capsule", "darkTheme", "text", "icon"]);

  return /*#__PURE__*/_react.default.createElement(Component, otherProps);
})(_templateObject2(), function (props) {
  var alert = props.alert,
      _props$outlined = props.outlined,
      outlined = _props$outlined === void 0 ? false : _props$outlined,
      _props$capsule = props.capsule,
      capsule = _props$capsule === void 0 ? false : _props$capsule,
      _props$darkTheme = props.darkTheme,
      darkTheme = _props$darkTheme === void 0 ? false : _props$darkTheme,
      color = props.color,
      icon = props.icon,
      _props$circular = props.circular,
      circular = _props$circular === void 0 ? false : _props$circular,
      _props$text = props.text,
      text = _props$text === void 0 ? false : _props$text;
  console.log(text);
  return (0, _styledComponents.css)(_templateObject3(), alert && _styles.alertButtonStylesMap[alert], alert && outlined && _styles.alertOutlinedButtonStylesMap[alert], color && "\n                background-color: ".concat(_colors.COLORS[color][500], ";\n                color: ").concat(['lightGreen', 'yellow', 'lime', 'amber'].includes(color) ? '#000' : '#fff', ";\n                &:hover{\n                    background-color: ").concat(_colors.COLORS[color][300], ";\n                }\n            "), !alert && outlined && "\n                background-color: #fff;\n                color: ".concat(_colors.COLORS[color][500], ";\n                border: 1px solid ").concat(_colors.COLORS[color][500], ";\n                &:hover{\n                    background-color: ").concat(_colors.COLORS[color][500], ";\n                    color: ").concat(['lightGreen', 'yellow', 'lime', 'amber'].includes(color) ? '#000' : '#fff', ";\n                }\n            "), capsule && "border-radius: 1.5rem;", darkTheme && "\n                border: 1px solid #000;\n                color: ".concat(_colors.COLORS[color][300], ";\n                background-color: #000;\n                &:hover{\n                    border: 1px solid ").concat(_colors.COLORS[color][500], ";\n                    background-color: ").concat(_colors.COLORS[color][500], ";\n                    color: ").concat(['lightGreen', 'yellow', 'lime', 'amber'].includes(color) ? '#000' : '#fff', ";\n                }\n            "), icon && !color && _styles.iconStylesMap[icon], icon && circular && "\n                height: 3.8em;\n                width: 3.8em;\n                border-radius: 50%;\n                font-size: 1rem;\n            ", text && "\n                background-color: #fff;\n                border:none;\n                color: ".concat(color ? _colors.COLORS[color][500] : '#000', ";\n                &:hover{\n                    background-color: ").concat(color ? _colors.COLORS[color][500] : '#000', ";\n                    color: ").concat(['lightGreen', 'yellow', 'lime', 'amber'].includes(color) ? '#000' : '#fff', ";\n                    opacity:1;\n                }\n            "));
});
//# sourceMappingURL=Button.js.map