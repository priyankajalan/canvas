import React from 'react'

import Typography from '../../../components/Typography';

const SizesDemo = (): JSX.Element => {
    return (
        <React.Fragment>
            <h3>Typing Effects</h3>
            <p>Reload page to preview typewritter effect</p>
            <Typography variant='display2' effect='typewritter'>Lorem ipsum typing effect!</Typography>
            <hr />
            <h3>Sizes</h3>
            <p>Too many sizes can be complicated to support different grids, layouts and screen sizes. We have limited support for sizes but off course all the basic headings are supported along with some other sizes</p>
            <Typography component='h1'>Heading 1</Typography>
            <Typography component='h2'>Heading 2</Typography>
            <Typography component='h3'>Heading 3</Typography>
            <Typography component='h4'>Heading 4</Typography>
            <Typography component='h5'>Heading 5</Typography>
            <Typography component='h6'>Heading 6</Typography>
            <hr />
            <h3>Display Variants</h3>
            <Typography variant='display4'>This is display 4</Typography>
            <Typography variant='display3'>This is display 3</Typography>
            <Typography variant='display2'>This is display 2</Typography>
            <Typography variant='display1'>This is display 1</Typography>
            <Typography variant='subtitle'>
                Subtitle: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs
            </Typography>
            <Typography variant='body'>
                Body: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs
            </Typography>
            <hr />
            <h3>Font weights</h3>
            <Typography variant='display2' fontWeight='thin'>This is a thin heading</Typography>
            <Typography variant='display2' fontWeight='normal'>This is a normal heading</Typography>
            <Typography variant='display2' fontWeight='bold'>This is a bold heading</Typography>
        </React.Fragment>
    )
}

export default SizesDemo;
