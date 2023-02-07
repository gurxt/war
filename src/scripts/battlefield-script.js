const ValidMoves = (_curr_pos, _grid, _xy_grid) => {
    const row = Math.sqrt(_xy_grid)
    const moves = []
    // check left.
    if (_curr_pos - 1 > 0 && !_grid[_curr_pos - 1].occ)
        moves.push(-1)
    if (_curr_pos + 1 < _xy_grid - 1 && !_grid[_curr_pos + 1].occ)
        moves.push(1)
    if (_curr_pos - row > 0 && !_grid[_curr_pos - row].occ)
        moves.push(-row)
    if (_curr_pos + row < _xy_grid - 1 && !_grid[_curr_pos + row].occ)
        moves.push(row)
    return moves
}

const UpdateGrid = (_grid, _playr_loc, _xy_grid) => {
    const empty_cell = { occ: false, color: '#4449' }

    for (let i=0; i < _playr_loc.length; i++) {
        // store the data in the curr cell
        const prev = _playr_loc[i]
        // ensure move is valid.
        const valid_moves = ValidMoves(prev, _grid, _xy_grid)
        // get random move.
        if (valid_moves.length > 0) {
            const next = valid_moves[Math.floor(Math.random() * valid_moves.length)] + prev
            // update the grid.
            _grid[next] = _grid[prev]
            _grid[prev] = empty_cell
            // set new player loc.
            _playr_loc[i] = next
        }
    }

    return { _grid, _playr_loc }
}

export default UpdateGrid
