import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../utils/colors';
import { VariantStylesMap, fontWeightStylesMap, effectStylesMap } from './styles';
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
  return /*#__PURE__*/React.createElement(StyledComponent, _extends({
    Component: Component,
    variant: variant
  }, otherProps));
};

Typography.propTypes = {
  component: _pt.string,
  variant: _pt.string,
  children: _pt.string,
  color: _pt.string,
  textAlign: _pt.string,
  fontWeight: _pt.string,
  effect: _pt.string
};
export default Typography; // Styles for the typography

const StyledComponent = styled((_ref) => {
  let {
    Component,
    textAlign,
    color,
    variant,
    fontWeight
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["Component", "textAlign", "color", "variant", "fontWeight"]);

  return /*#__PURE__*/React.createElement(Component, otherProps);
})`
    ${props => {
  const {
    color = 'black',
    textAlign = 'left',
    variant,
    fontWeight = 'normal',
    effect = 'none'
  } = props;
  return css`
            color: ${COLORS[color][600]};
            font-weight: 300;
            text-align: ${textAlign};
            ${variant && VariantStylesMap[variant]}
            ${fontWeight && fontWeightStylesMap[fontWeight]}
            ${effect && effectStylesMap[effect]}
       `;
}}
`;
//# sourceMappingURL=Typography.js.map