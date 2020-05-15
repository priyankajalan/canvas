"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colors = require("../../utils/colors");

var _styles = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            color: ", ";\n            font-weight: 300;\n            text-align: ", ";\n            ", "\n            ", "\n            ", "\n       "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var componentMapping = {
  p: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  span: 'span'
};
var variantMapping = {
  'display1': 'h4',
  'display2': 'h3',
  'display3': 'h2',
  'display4': 'h1',
  'subtitle': 'h6',
  'body': 'p'
};

var Typography = function Typography(props) {
  var _props$component = props.component,
      component = _props$component === void 0 ? 'span' : _props$component,
      variant = props.variant,
      otherProps = _objectWithoutProperties(props, ["component", "variant"]); // variant takes over component type


  var Component = variant ? variantMapping[variant] : component && componentMapping[component];
  return /*#__PURE__*/_react.default.createElement(StyledComponent, _extends({
    Component: Component,
    variant: variant
  }, otherProps));
};

Typography.propTypes = {
  component: _propTypes.default.string,
  variant: _propTypes.default.string,
  children: _propTypes.default.string,
  color: _propTypes.default.string,
  textAlign: _propTypes.default.string,
  fontWeight: _propTypes.default.string,
  effect: _propTypes.default.string
};
var _default = Typography; // Styles for the typography

exports.default = _default;
var StyledComponent = (0, _styledComponents.default)(function (_ref) {
  var Component = _ref.Component,
      textAlign = _ref.textAlign,
      color = _ref.color,
      variant = _ref.variant,
      fontWeight = _ref.fontWeight,
      otherProps = _objectWithoutProperties(_ref, ["Component", "textAlign", "color", "variant", "fontWeight"]);

  return /*#__PURE__*/_react.default.createElement(Component, otherProps);
})(_templateObject(), function (props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? 'black' : _props$color,
      _props$textAlign = props.textAlign,
      textAlign = _props$textAlign === void 0 ? 'left' : _props$textAlign,
      variant = props.variant,
      _props$fontWeight = props.fontWeight,
      fontWeight = _props$fontWeight === void 0 ? 'normal' : _props$fontWeight,
      _props$effect = props.effect,
      effect = _props$effect === void 0 ? 'none' : _props$effect;
  return (0, _styledComponents.css)(_templateObject2(), _colors.COLORS[color][600], textAlign, variant && _styles.VariantStylesMap[variant], fontWeight && _styles.fontWeightStylesMap[fontWeight], effect && _styles.effectStylesMap[effect]);
});
//# sourceMappingURL=Typography.js.map