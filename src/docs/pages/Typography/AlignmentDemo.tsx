import React from 'react'
import Typography from '../../../components/Typography'

const AlignmentDemo = (): JSX.Element => {
    return (
        <React.Fragment>
            <h3>Alignment</h3>
            <p>Setting alignment to the typography will set the horizontal alignment of the text.</p>
            <Typography component='p' textAlign='left'>This is a left aligned text</Typography>
            <Typography component='p' textAlign='right'>This is a right aligned text</Typography>
            <Typography component='p' textAlign='center'>This is a center aligned text</Typography>
        </React.Fragment>
    )
}

export default AlignmentDemo
