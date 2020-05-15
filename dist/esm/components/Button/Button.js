import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../Icon';
import { alertButtonStylesMap, alertOutlinedButtonStylesMap, iconStylesMap } from './styles';
import { COLORS } from '../../utils/colors';

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

  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    Component: Component,
    icon: icon
  }, otherProps), icon && /*#__PURE__*/React.createElement(StyledIcon, {
    name: icon,
    color: otherProps.outlined ? otherProps.color : 'white'
  }), otherProps.children);
};

Button.propTypes = {
  component: _pt.string,
  children: _pt.any,
  href: _pt.string,
  text: _pt.bool,
  alert: _pt.string,
  color: _pt.string,
  outlined: _pt.bool,
  capsule: _pt.bool,
  darkTheme: _pt.bool,
  icon: _pt.string,
  circular: _pt.bool
};
export default Button;
const StyledIcon = styled(Icon)`
    text-align: center;
`;
const StyledButton = styled((_ref) => {
  let {
    Component,
    outlined,
    capsule,
    darkTheme,
    text,
    icon
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["Component", "outlined", "capsule", "darkTheme", "text", "icon"]);

  return /*#__PURE__*/React.createElement(Component, otherProps);
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
  return css`
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
            ${alert && alertButtonStylesMap[alert]}
            ${alert && outlined && alertOutlinedButtonStylesMap[alert]}
            ${color && `
                background-color: ${COLORS[color][500]};
                color: ${['lightGreen', 'yellow', 'lime', 'amber'].includes(color) ? '#000' : '#fff'};
                &:hover{
                    background-color: ${COLORS[color][300]};
                }
            `}
            ${!alert && outlined && `
                background-color: #fff;
                color: ${COLORS[color][500]};
                border: 1px solid ${COLORS[color][500]};
                &:hover{
                    background-color: ${COLORS[color][500]};
                    color: ${['lightGreen', 'yellow', 'lime', 'amber'].includes(color) ? '#000' : '#fff'};
                }
            `}
            ${capsule && `border-radius: 1.5rem;`}
            ${darkTheme && `
                border: 1px solid #000;
                color: ${COLORS[color][300]};
                background-color: #000;
                &:hover{
                    border: 1px solid ${COLORS[color][500]};
                    background-color: ${COLORS[color][500]};
                    color: ${['lightGreen', 'yellow', 'lime', 'amber'].includes(color) ? '#000' : '#fff'};
                }
            `}
            ${icon && !color && iconStylesMap[icon]}
            ${icon && circular && `
                height: 3.8em;
                width: 3.8em;
                border-radius: 50%;
                font-size: 1rem;
            `}
            ${text && `
                background-color: #fff;
                border:none;
                color: ${color ? COLORS[color][500] : '#000'};
                &:hover{
                    background-color: ${color ? COLORS[color][500] : '#000'};
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
//# sourceMappingURL=Button.js.map