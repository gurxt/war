import React, { useState } from 'react'
/* css import */
import AppCSS from './assets/styled/application-css'
/* custom component imports */
import Battlefield from './components/battlefield.js'
import Player from './components/player.js'

const CSS = AppCSS()

const Application = () => {
    return (
        <CSS.C>
            <Battlefield players={50} />
        </CSS.C>
    )
}

export default Application
