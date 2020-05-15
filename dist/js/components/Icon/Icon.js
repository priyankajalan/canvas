"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _paths = _interopRequireDefault(require("./paths"));

var _colors = require("../../utils/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin:auto !important;\n    stroke: ", ";\n    fill: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: 1.5em;\n    width: 1.5em;\n    display: inline-block;\n    flex-shrink:0;\n    user-select:none;\n    margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var BrandNames = ['facebook', 'twitter', 'google', 'linkedin', 'youtube', 'instagram', 'pinterest', 'skype', 'android', 'dribble', 'vimeo', 'tumblr', 'flickr', 'yahoo', 'reddit', 'yammer', 'dropbox'];

var Icon = function Icon(props) {
  var name = props.name,
      _props$viewBox = props.viewBox,
      viewBox = _props$viewBox === void 0 ? BrandNames.includes(name) ? '0 0 600 650' : '0 0 24 24' : _props$viewBox;
  return /*#__PURE__*/_react.default.createElement(StyledSvgWrapper, _extends({
    viewBox: viewBox
  }, props), /*#__PURE__*/_react.default.createElement(StyledPath, _extends({
    d: _paths.default[name]
  }, props)));
};

Icon.propTypes = {
  name: _propTypes.default.string.isRequired,
  viewBox: _propTypes.default.string,
  inverted: _propTypes.default.bool,
  color: _propTypes.default.string,
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
var _default = Icon;
exports.default = _default;
var StyledSvgWrapper = (0, _styledComponents.default)('svg')(_templateObject());
var StyledPath = (0, _styledComponents.default)('path')(_templateObject2(), function (props) {
  return props.color ? _colors.COLORS[props.color][600] : '#000';
}, function (props) {
  return props.color ? _colors.COLORS[props.color][600] : '#000';
});
//# sourceMappingURL=Icon.js.map