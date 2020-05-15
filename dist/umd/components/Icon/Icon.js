(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "styled-components", "./paths", "../../utils/colors"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("styled-components"), require("./paths"), require("../../utils/colors"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.styledComponents, global.paths, global.colors);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _styledComponents, _paths, _colors) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _paths2 = _interopRequireDefault(_paths);

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

  const BrandNames = ['facebook', 'twitter', 'google', 'linkedin', 'youtube', 'instagram', 'pinterest', 'skype', 'android', 'dribble', 'vimeo', 'tumblr', 'flickr', 'yahoo', 'reddit', 'yammer', 'dropbox'];

  const Icon = props => {
    const {
      name,
      viewBox = BrandNames.includes(name) ? '0 0 600 650' : '0 0 24 24'
    } = props;
    return /*#__PURE__*/_react2.default.createElement(StyledSvgWrapper, _extends({
      viewBox: viewBox
    }, props), /*#__PURE__*/_react2.default.createElement(StyledPath, _extends({
      d: _paths2.default[name]
    }, props)));
  };

  Icon.propTypes = {
    name: _propTypes2.default.string.isRequired,
    viewBox: _propTypes2.default.string,
    inverted: _propTypes2.default.bool,
    color: _propTypes2.default.string,
    height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
  };
  exports.default = Icon;
  const StyledSvgWrapper = (0, _styledComponents2.default)('svg')`
    height: 1.5em;
    width: 1.5em;
    display: inline-block;
    flex-shrink:0;
    user-select:none;
    margin: auto;
`;
  const StyledPath = (0, _styledComponents2.default)('path')`
    margin:auto !important;
    stroke: ${props => props.color ? _colors.COLORS[props.color][600] : '#000'};
    fill: ${props => props.color ? _colors.COLORS[props.color][600] : '#000'};
`;
});
//# sourceMappingURL=Icon.js.map