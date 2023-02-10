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

const valid_moves = (_curr_pos, _grid) => {
    const _xy_grid = _grid.length 
    const row = Math.ceil(Math.sqrt(_grid.length))
    console.log(row)
    const moves = []

    if (!_grid[_curr_pos])
        return []

    // check left.
    if (_curr_pos - 1 > 0 && _grid[_curr_pos - 1]) { // ensure not out of bounds.
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
    if (_curr_pos + 1 < _xy_grid - 1 && _grid[_curr_pos + 1]) {
        if ((_grid[_curr_pos].color !== _grid[_curr_pos + 1].color) &&
            (_grid[_curr_pos + 1].color !== '#4449')) { // enemy (declare war)
            moves.push({ value: 1, war: true })
            // war dec resolves when we arrive at the next cell.
        } else if (_grid[_curr_pos + 1].color === '#4449') { // empty cell.
            moves.push({ value: 1, war: false })
        }
    }

    // check down
    if (_curr_pos - row > 0 && _grid[_curr_pos - row]) {
        if ((_grid[_curr_pos].color !== _grid[_curr_pos - row].color) &&
            (_grid[_curr_pos - row].color !== '#4449')) { // enemy (declare war)
            moves.push({ value: -row, war: true })
            // war dec resolves when we arrive at the next cell.
        } else if (_grid[_curr_pos - row].color === '#4449') { // empty cell.
            moves.push({ value: -row, war: false })
        }
    }

    // check up
    if (_curr_pos + row < _xy_grid - 1 && _grid[_curr_pos + row]) {
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

const update_grid = (_grid, _playr_loc, _e_cell, _kills) => {
    const cell_del= _grid.pop()
    if (cell_del.occ) {
        _playr_loc[_playr_loc.indexOf(_grid.length)] = null
        _kills.push({
            killer: { color: '#0f0' },
            slain: cell_del,
            idx: [_grid.length, _grid.length]
        })
    }
        
    for (let i=0; i < _playr_loc.length; i++) {
        // store the data in the curr cell
        const prev = _playr_loc[i]
        // check if prev is not null
        if (prev) {
            const valid_moves_c = valid_moves(prev, _grid)
            // get random move.
            if (valid_moves_c.length !== 0) {
                const next = valid_moves_c[Math.floor(Math.random() * valid_moves_c.length)]
                if (next.war) {
                    _kills.push({
                        killer: _grid[prev],
                        slain: _grid[next.value + prev],
                        idx: [prev, next.value + prev]
                    })
                    _grid[next.value + prev] = {..._grid[prev], bg: true}
                    _grid[prev] = _e_cell
                    // set new player loc.
                    _playr_loc[_playr_loc.indexOf(next.value + prev)] = null
                    _playr_loc[i] = next.value + prev
                } else {
                    // update the grid.
                    _grid[next.value + prev] = {..._grid[prev], bg: false}
                    _grid[prev] = _e_cell
                    // set new player loc.
                    _playr_loc[i] = next.value + prev
                }
            }
        }
    }

    return { _grid, _playr_loc, _kills }
}

/* eslint-disable-next-line */
export default { update_grid, populate }
