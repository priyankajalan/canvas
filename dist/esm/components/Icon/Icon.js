import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import styled from 'styled-components';
import Iconpaths from './paths';
import { COLORS } from '../../utils/colors';
const BrandNames = ['facebook', 'twitter', 'google', 'linkedin', 'youtube', 'instagram', 'pinterest', 'skype', 'android', 'dribble', 'vimeo', 'tumblr', 'flickr', 'yahoo', 'reddit', 'yammer', 'dropbox'];

const Icon = props => {
  const {
    name,
    viewBox = BrandNames.includes(name) ? '0 0 600 650' : '0 0 24 24'
  } = props;
  return /*#__PURE__*/React.createElement(StyledSvgWrapper, _extends({
    viewBox: viewBox
  }, props), /*#__PURE__*/React.createElement(StyledPath, _extends({
    d: Iconpaths[name]
  }, props)));
};

Icon.propTypes = {
  name: _pt.string.isRequired,
  viewBox: _pt.string,
  inverted: _pt.bool,
  color: _pt.string,
  height: _pt.oneOfType([_pt.number, _pt.string]),
  width: _pt.oneOfType([_pt.number, _pt.string])
};
export default Icon;
const StyledSvgWrapper = styled('svg')`
    height: 1.5em;
    width: 1.5em;
    display: inline-block;
    flex-shrink:0;
    user-select:none;
    margin: auto;
`;
const StyledPath = styled('path')`
    margin:auto !important;
    stroke: ${props => props.color ? COLORS[props.color][600] : '#000'};
    fill: ${props => props.color ? COLORS[props.color][600] : '#000'};
`;
//# sourceMappingURL=Icon.js.map