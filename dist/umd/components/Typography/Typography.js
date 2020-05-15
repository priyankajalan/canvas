(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "styled-components", "../../utils/colors", "./styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("styled-components"), require("../../utils/colors"), require("./styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.styledComponents, global.colors, global.styles);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _styledComponents, _colors, _styles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

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

  const componentMapping = {
    p: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    span: 'span'
  };
  const variantMapping = {
    'display1': 'h4',
    'display2': 'h3',
    'display3': 'h2',
    'display4': 'h1',
    'subtitle': 'h6',
    'body': 'p'
  };

  const Typography = props => {
    const {
      component = 'span',
      variant
    } = props,
          otherProps = _objectWithoutProperties(props, ["component", "variant"]); // variant takes over component type


    const Component = variant ? variantMapping[variant] : component && componentMapping[component];
    return /*#__PURE__*/_react2.default.createElement(StyledComponent, _extends({
      Component: Component,
      variant: variant
    }, otherProps));
  };

  Typography.propTypes = {
    component: _propTypes2.default.string,
    variant: _propTypes2.default.string,
    children: _propTypes2.default.string,
    color: _propTypes2.default.string,
    textAlign: _propTypes2.default.string,
    fontWeight: _propTypes2.default.string,
    effect: _propTypes2.default.string
  };
  exports.default = Typography;
  // Styles for the typography
  const StyledComponent = (0, _styledComponents2.default)(_ref => {
    let {
      Component,
      textAlign,
      color,
      variant,
      fontWeight
    } = _ref,
        otherProps = _objectWithoutProperties(_ref, ["Component", "textAlign", "color", "variant", "fontWeight"]);

    return /*#__PURE__*/_react2.default.createElement(Component, otherProps);
  })`
    ${props => {
    const {
      color = 'black',
      textAlign = 'left',
      variant,
      fontWeight = 'normal',
      effect = 'none'
    } = props;
    return _styledComponents.css`
            color: ${_colors.COLORS[color][600]};
            font-weight: 300;
            text-align: ${textAlign};
            ${variant && _styles.VariantStylesMap[variant]}
            ${fontWeight && _styles.fontWeightStylesMap[fontWeight]}
            ${effect && _styles.effectStylesMap[effect]}
       `;
  }}
`;
});
//# sourceMappingURL=Typography.js.map