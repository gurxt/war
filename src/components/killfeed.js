/* external package imports */
import React from 'react'
/* css imports */
import KillfeedCSS from './../assets/styled/killfeed-css.js'
/* css renamed */
const CSS = KillfeedCSS()

/* component */
const Killfeed = ({ kills }) => {
    return (
        <CSS.C> 
        { kills.reverse().map((x, y) => {
            return (
                <CSS.Kill key={y}>
                    <CSS.Idx color={x.killer.color}>{x.idx[0]}</CSS.Idx>
                    &nbsp;
                    <CSS.KColor color={x.killer.color}>{x.killer.color}</CSS.KColor>
                    &nbsp;
                    <CSS.Slain>SLAIN</CSS.Slain>
                    &nbsp;
                    <CSS.KColor color={x.slain.color}>{x.slain.color}</CSS.KColor>
                    &nbsp;
                    <CSS.Idx color={x.slain.color}>{x.idx[1]}</CSS.Idx>
                </CSS.Kill>
            )
        })}
        </CSS.C> 
    )
}

export default Killfeed
