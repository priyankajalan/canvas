import React from 'react'
import styled from 'styled-components';

import Typography from '../../../components/Typography';

const ColorsDemo = (): JSX.Element => {
    return (
        <React.Fragment>
            <h3>Colored Typography</h3>
            <p>A good looking and high quality website is not always enough. Good website design plays a vital role of creating an emotional bond with your website. Based on internationally renowned person-centered design expert, canvas typography component supports the following colors.</p>
            <StyledTypography color='blue'>Blue</StyledTypography>
            <StyledTypography color='indigo'>Indigo</StyledTypography>
            <StyledTypography color='lightBlue'>Light Blue</StyledTypography>
            <StyledTypography color='red'>Red</StyledTypography>
            <StyledTypography color='pink'>Pink</StyledTypography>
            <StyledTypography color='purple'>Purple</StyledTypography>
            <StyledTypography color='deepPurple'>Deep purple</StyledTypography>
            <StyledTypography color='cyan'>Cyan</StyledTypography>
            <StyledTypography color='teal'>Teal</StyledTypography>
            <StyledTypography color='lightGreen'>Light Green</StyledTypography>
            <StyledTypography color='lime'>Lime</StyledTypography>
            <StyledTypography color='yellow'>Yellow</StyledTypography>
            <StyledTypography color='amber'>Amber</StyledTypography>
            <StyledTypography color='orange'>Orange</StyledTypography>
            <StyledTypography color='deepOrange'>Deep Orange</StyledTypography>
            <StyledTypography color='brown'>Brown</StyledTypography>
            <StyledTypography color='grey'>Grey</StyledTypography>
            <StyledTypography color='blueGrey'>Blue Grey</StyledTypography>
        </React.Fragment>
    )
}

export default ColorsDemo;

const StyledTypography = styled(Typography)`
    margin-left: 1rem;
`