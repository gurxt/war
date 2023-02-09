/* external package imports */
import React from 'react'
/* css import */
import ScoreboardCSS from './../assets/styled/scoreboard-css.js'
/* css renamed and initialized */
const CSS = ScoreboardCSS()

/* component */
const Scoreboard = ({ kills, players }) => {
    return (
        <CSS.C>
            <CSS.Rem color="#000">
            { (players / 2 ) - kills.filter((x, y) => x.slain.color === '#000').length }
            </CSS.Rem> 
            <CSS.Rem color="#fff">
            { (players / 2 ) - kills.filter((x, y) => x.slain.color === '#fff').length }
            </CSS.Rem> 
        </CSS.C>
    )
}

export default Scoreboard
