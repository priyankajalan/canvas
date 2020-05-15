import React from 'react'
import Button from '../../../components/Button'

const AlertButtonDemo = (): JSX.Element => {
    return (
        <React.Fragment>
            <h3>Alert Buttons</h3>
            <Button alert='success'>Success</Button>
            <Button alert='warning'>Warning</Button>
            <Button alert='info'>Info</Button>
            <Button alert='danger'>Danger</Button>

            <h3>Outlined alert Buttons</h3>
            <Button outlined alert='success'>Success</Button>
            <Button outlined alert='warning'>Warning</Button>
            <Button outlined alert='info'>Info</Button>
            <Button outlined alert='danger'>Danger</Button>

            <h3>Capsule Alert Buttons</h3>
            <Button capsule alert='success'>Success</Button>
            <Button capsule alert='warning'>Warning</Button>
            <Button capsule alert='info'>Info</Button>
            <Button capsule alert='danger'>Danger</Button>

            <h3>Capsule Alert Outlined Buttons</h3>
            <Button capsule outlined alert='success'>Success</Button>
            <Button capsule outlined alert='warning'>Warning</Button>
            <Button capsule outlined alert='info'>Info</Button>
            <Button capsule outlined alert='danger'>Danger</Button>
        </React.Fragment>
    )
}

export default AlertButtonDemo
