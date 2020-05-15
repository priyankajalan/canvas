import React from 'react'

import ColorsDemo from './ColorsDemo';
import SizesDemo from './SizesDemo';
import AlignmentDemo from './AlignmentDemo';


const TypographyPage = (): JSX.Element => {

    return (
        <div style={{ width: '70%', margin: 'auto', padding: '3rem 0' }}>
            <h1>Typography</h1>
            <h3 style={{ fontWeight: 'normal' }}>Typography is a powerful technique to hold readers attention to your website. It helps to build a recognition among your viewers and creates a harmony.</h3>
            <p><strong>Note : </strong>Canvas do not load any fonts by default. It is the responsibility of the developers to load their own choice of fonts.</p>
            <hr />
            <AlignmentDemo />
            <hr />
            <SizesDemo />
            <hr />
            <ColorsDemo />
        </div>
    )
}

export default TypographyPage;

