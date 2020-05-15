import React from 'react'
import styled, { css } from 'styled-components';

import { COLORS } from '../../utils/colors';
import { VariantStylesMap, fontWeightStylesMap, effectStylesMap } from './styles';

interface TypographyProps {
    component?: string,
    variant?: string,
    children?: string,
    color?: string,
    textAlign?: string,
    fontWeight?: string;
    effect?: string;
}

const componentMapping: { [key: string]: string } = {
    p: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    span: 'span'
}

const variantMapping: { [key: string]: string } = {
    'display1': 'h4',
    'display2': 'h3',
    'display3': 'h2',
    'display4': 'h1',
    'subtitle': 'h6',
    'body': 'p'
}

const Typography = (props: TypographyProps): JSX.Element => {

    const {
        component = 'span',
        variant,
        ...otherProps
    } = props;

    // variant takes over component type
    const Component = (variant
        ? variantMapping[variant]
        : component && componentMapping[component]
    ) as React.ElementType;

    return <StyledComponent Component={Component} variant={variant} {...otherProps} />
}

export default Typography;


// Styles for the typography
const StyledComponent = styled(({ Component, textAlign, color, variant, fontWeight, ...otherProps }) => {
    return <Component {...otherProps} />
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
       `
    }}
`
