const populate = (_players, _grid, _xy_grid, e_cell) => {
    // empty array to store players.
    const plyr_loc = []
    // iterate through the number of required players and lot a cell.
    for (let i=0; i < _players; i++) {
        let pos_xy = Math.ceil(Math.random() * _xy_grid - 1)
        // ensure the cell isn't occupied.
        while (_grid[pos_xy].occ)
            pos_xy = Math.ceil(Math.random() * _xy_grid - 1)
        // add player to arr.
        plyr_loc.push(pos_xy)
        // update location on grid.
        _grid = _grid.map((x, y) => {
            return y === pos_xy ? ({
                ...e_cell,
                occ: true, 
                color: i % 2 === 0 ? '#000' : '#fff' ,
            }) : x 
        })
    }

    return { _grid, plyr_loc }
}

const valid_moves = (_curr_pos, _grid, _xy_grid) => {
    const row = Math.sqrt(_xy_grid)
    const moves = []

    // check left.
    if (_curr_pos - 1 > 0) { // ensure not out of bounds.
        // check if next cell is enemy or empty.
        if ((_grid[_curr_pos].color !== _grid[_curr_pos - 1].color) &&
            (_grid[_curr_pos - 1].color !== '#4449')) { // enemy (declare war)
            moves.push({ value: -1, war: true })
            // war dec resolves when we arrive at the next cell.
        } else if (_grid[_curr_pos - 1].color === '#4449') { // empty cell.
            moves.push({ value: -1, war: false })
        }
    } 

    // check right
    if (_curr_pos + 1 < _xy_grid - 1) {
        // check if next cell is enemy or empty.
        if ((_grid[_curr_pos].color !== _grid[_curr_pos + 1].color) &&
            (_grid[_curr_pos + 1].color !== '#4449')) { // enemy (declare war)
            moves.push({ value: 1, war: true })
            // war dec resolves when we arrive at the next cell.
        } else if (_grid[_curr_pos + 1].color === '#4449') { // empty cell.
            moves.push({ value: 1, war: false })
        }
    }

    // check down
    if (_curr_pos - row > 0) {
        if ((_grid[_curr_pos].color !== _grid[_curr_pos - row].color) &&
            (_grid[_curr_pos - row].color !== '#4449')) { // enemy (declare war)
            moves.push({ value: -row, war: true })
            // war dec resolves when we arrive at the next cell.
        } else if (_grid[_curr_pos - row].color === '#4449') { // empty cell.
            moves.push({ value: -row, war: false })
        }
    }

    // check up
    if (_curr_pos + row < _xy_grid - 1) {
        if ((_grid[_curr_pos].color !== _grid[_curr_pos + row].color) &&
            (_grid[_curr_pos + row].color !== '#4449')) { // enemy (declare war)
            moves.push({ value: row, war: true })
            // war dec resolves when we arrive at the next cell.
        } else if (_grid[_curr_pos + row].color === '#4449') { // empty cell.
            moves.push({ value: row, war: false })
        }
    }

    return moves
}

const update_grid = (_grid, _playr_loc, _xy_grid, _e_cell, _kill) => {
    for (let i=0; i < _playr_loc.length; i++) {
        // store the data in the curr cell
        const prev = _playr_loc[i]
        // check if prev is not null
        if (prev) {
            const valid_moves_c = valid_moves(prev, _grid, _xy_grid)
            // get random move.
            if (valid_moves_c.length !== 0) {
                const next = valid_moves_c[Math.floor(Math.random() * valid_moves_c.length)]
                if (next.war) {
                    _kill.push({
                        killer: _grid[prev],
                        slain: _grid[next.value + prev],
                        idx: [prev, next.value + prev]
                    })
                    _grid[next.value + prev] = _grid[prev]
                    _grid[prev] = _e_cell
                    // set new player loc.
                    _playr_loc[i] = next.value + prev
                    _playr_loc[_playr_loc.indexOf(next.value + prev)] = null


                } else {
                    // update the grid.
                    _grid[next.value + prev] = _grid[prev]
                    _grid[prev] = _e_cell
                    // set new player loc.
                    _playr_loc[i] = next.value + prev
                }
            }
        }
    }

    return { _grid, _playr_loc, _kill }
}

export default { update_grid, populate }
