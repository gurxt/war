/* external package imports */
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
/* internal package import */
import Killfeed from './killfeed'
import Scoreboard from './scoreboard'
/* css import */
import BattlefieldCSS from './../assets/styled/battlefield-css.js'
/* script import */
import SCRIPT from './../scripts/battlefield-script.js'
/* css renamed */
const CSS = BattlefieldCSS()

const Battlefield = ({ players }) => {
    /* declare global vars */
    const xy_grid = 40**2
    /* state */
    const [xy_dim, set_xy_dim] = useState(100 / Math.ceil(Math.sqrt(xy_grid)))
    const [grid, set_grid] = useState([])
    const [playr_loc, set_playr_loc] = useState([])
    const [running, set_running] = useState()
    const [iter, set_iter] = useState(0)
    const [kills, set_kills] = useState([])
    /* empty cell object */
    const e_cell = {
        occ: false, color: '#4449', bg: false
    }

    useEffect(() => {
        const grid_n = Array.from({ length: xy_grid }, (_, i) => i + 1)
                            .map((x, y) => e_cell)
        // prevents annoying re-render on save.
        if (playr_loc.length === 0) {
            const { _grid, plyr_loc } = SCRIPT.populate(players, grid_n, xy_grid, e_cell)
            set_grid([..._grid])
            set_playr_loc([...plyr_loc])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleStart = () => {
        set_running(
            setInterval(() => {
                const { _grid, _playr_loc, _kills } = 
                    SCRIPT.update_grid(grid, playr_loc, e_cell, kills)
                set_xy_dim(100 / Math.ceil(Math.sqrt(_grid.length)))
                set_kills([..._kills])
                set_playr_loc([..._playr_loc])
                set_grid([..._grid])
            }, 200)
        )
    }

    const handleStop = () => {
        clearInterval(running)
        set_running(false)
    }

    return (
        <CSS.B>
            <CSS.B1>
                <Scoreboard kills={kills} players={players} />
                <Killfeed kills={kills} />
            </CSS.B1>
            <CSS.B2>
                <CSS.B2a>
                    { !running && <Button onClick={handleStart} variant='contained'>Start</Button> }
                    { running  && <Button onClick={handleStop} variant='contained'>Stop</Button> }
                </CSS.B2a>
                <CSS.B2b>
                    <CSS.G>
                    { grid.map((x, y) => {
                        return (
                            <CSS.Cell key={y} occ={true} xy_dim={xy_dim} bg={x.bg}>
                                { x.occ ? <CSS.Player bg={x.color} /> : <CSS.Empty /> }
                            </CSS.Cell>
                        )
                    })}
                    </CSS.G>
                </CSS.B2b>
            </CSS.B2>
            <CSS.B3>
                <CSS.B3a>
                </CSS.B3a>
                <CSS.B3b />
            </CSS.B3>
        </CSS.B>
    )
}

export default Battlefield
