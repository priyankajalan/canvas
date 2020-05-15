import React from 'react'
import styled, { css } from 'styled-components';

import Icon from '../Icon';
import {
    alertButtonStylesMap, alertOutlinedButtonStylesMap, iconStylesMap
} from './styles';
import { COLORS } from '../../utils/colors';

interface ButtonProps {
    component?: string;
    children?: any;
    href?: string;
    text?: boolean;
    alert?: string;
    color?: string;
    outlined?: boolean;
    capsule?: boolean;
    darkTheme?: boolean;
    icon?: string;
    circular?: boolean;
}

const Button = (props: ButtonProps): JSX.Element => {

    const {
        component = 'button',
        icon,
        ...otherProps
    } = props;

    let Component = component;
    if (component === 'button' && otherProps.href) {
        Component = 'a'
    }

    return (
        <StyledButton Component={Component} icon={icon} {...otherProps}>
            {icon &&
                <StyledIcon name={icon} color={otherProps.outlined ? otherProps.color : 'white'} />}
            {otherProps.children}
        </StyledButton>
    )
}

export default Button

const StyledIcon = styled(Icon)`
    text-align: center;
`

const StyledButton = styled(
    ({ Component, outlined, capsule, darkTheme, text, icon, ...otherProps }) =>
        <Component {...otherProps} />
)`
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
        console.log(text)
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
        `
    }}
`
