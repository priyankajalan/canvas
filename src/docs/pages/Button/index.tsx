import React from 'react'
import ButtonDemo from './ButtonDemo'
import ColoredButtonDemo from './ColoredButtonDemo'
import DarkThemeButtonDemo from './DarkThemeButtonDemo'
import IconButtonDemo from './IconButtonDemo'
import TextButtonDemo from './TextButtonDemo'

const ButtonPage = () => {
    return (
        <div>
            <h3>Buttons</h3>
            <p>Buttons are used to submit forms, or interact with your website.</p>
            <ButtonDemo />
            <hr />
            <ColoredButtonDemo />
            <hr />
            <DarkThemeButtonDemo />
            <hr />
            {/* <IconButtonDemo /> */}
            <TextButtonDemo />
        </div>
    )
}

export default ButtonPage
