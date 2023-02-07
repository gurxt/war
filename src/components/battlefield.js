/* external package imports */
/* external package imports */
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
/* css import */
import BattlefieldCSS from './../assets/styled/battlefield-css.js'
/* script import */
import SCRIPT from './../scripts/battlefield-script.js'

const Battlefield = ({ players }) => {
    /* declare global vars */
    const CSS = BattlefieldCSS()
    const xy_grid = 50**2
    const xy_dim = 100 / Math.ceil(Math.sqrt(xy_grid))
    const grid_n = Array.from({ length: xy_grid }, (_, i) => i + 1)
                        .map((x, y) => ({ occ: false, color: '#4449'}))
    /* state */
    const [grid, set_grid] = useState(grid_n)
    const [playr_loc, set_playr_loc] = useState([])
    const [running, set_running] = useState()
    const [iter, set_iter] = useState(0)

    const grid_n_populate = () => {
        for (let i=0; i < players; i++) {
            let pos_xy = Math.ceil(Math.random() * xy_grid - 1)
            while (grid[pos_xy].occ)
                pos_xy = Math.ceil(Math.random() * xy_grid - 1)
                set_playr_loc(prev => prev.concat([pos_xy]))
            set_grid(prev => prev.map((x, y) => {
                return y === pos_xy ? ({ occ: true, color: i % 2 === 0 ? '#000' : '#fff' }) : x 
            }))
        }
    }

    useEffect(() => grid_n_populate(), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])

    const handleStart = () => {
        set_running(
            setInterval(() => {
                const { _grid, _playr_loc } = SCRIPT(grid, playr_loc, xy_grid)
                set_playr_loc([..._playr_loc])
                set_grid([..._grid])
                set_iter(prev => prev += 1)
            }, 200)
        )
    }


    const handleStop = () => {
        clearInterval(running)
        set_running(false)
    }

    return (
        <CSS.C>
            <CSS.C1>
                <CSS.C1a><span style={{'color':'#fff','fontSize':'30px'}}>{ iter }</span></CSS.C1a>
                <CSS.C1b />
            </CSS.C1>
            <CSS.C2>
                <CSS.C2a>
                    { !running && <Button onClick={handleStart} variant='contained'>Start</Button> }
                    { running  && <Button onClick={handleStop} variant='contained'>Stop</Button> }
                </CSS.C2a>
                <CSS.C2b>
                    <CSS.G>
                    { grid.map((x, y) => {
                        return (
                            <CSS.Cell key={y} occ={true} xy_dim={xy_dim}>
                                { x.occ ? <CSS.Player bg={x.color} /> : <CSS.Empty /> }
                            </CSS.Cell>
                        )
                    })}
                    </CSS.G>
                </CSS.C2b>
            </CSS.C2>
            <CSS.C3>
                <CSS.C3a />
                <CSS.C3b />
            </CSS.C3>
        </CSS.C>
    )
}

export default Battlefield
