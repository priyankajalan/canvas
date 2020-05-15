import React from 'react';
import styled from 'styled-components';

import Iconpaths from './paths';
import { COLORS } from '../../utils/colors';

const BrandNames = ['facebook', 'twitter', 'google', 'linkedin', 'youtube', 'instagram', 'pinterest', 'skype', 'android', 'dribble', 'vimeo', 'tumblr', 'flickr', 'yahoo', 'reddit', 'yammer', 'dropbox']

interface IconProps {
    name: string;
    viewBox?: string;
    inverted?: boolean;
    color?: string;
    height?: number | string;
    width?: number | string;
}

const Icon = (props: IconProps): JSX.Element => {
    const {
        name,
        viewBox = BrandNames.includes(name) ? '0 0 600 650' : '0 0 24 24'
    } = props;

    return (
        <StyledSvgWrapper viewBox={viewBox} {...props}>
            <StyledPath d={Iconpaths[name]} {...props} />
        </StyledSvgWrapper>
    )
}

export default Icon

const StyledSvgWrapper = styled('svg')`
    height: 1.5em;
    width: 1.5em;
    display: inline-block;
    flex-shrink:0;
    user-select:none;
    margin: auto;
`

const StyledPath = styled('path')`
    margin:auto !important;
    stroke: ${props => props.color ? COLORS[props.color][600] : '#000'};
    fill: ${props => props.color ? COLORS[props.color][600] : '#000'};
`
