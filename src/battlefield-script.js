const ValidMove = (_grid) => {
    return _grid
}

const UpdateGrid = (_grid_n, _grid_p, _playr_pos, _xy_grid) => {
    const row = Math.sqrt(xy_grid)

    for (let i=0; i < playr_pos.length; i++) {
        // L[0] R[1] U[2] D[3]
        let dir
        // ensure move is valid.
        while (!ValidMove(dir))
            dir = Math.ceil(Math.random() * 3)
        // make the move.
        if (dir == 0)      playr_pos[i] -= 1
        else if (dir == 1) playr_pos[i] += 1
        else if (dir == 2) playr_pos[i] -= row
        else               playr_pos[i] += row
        // update the naked grid.
        playr_pos.forEach((x, y) => {
            console.log(x,y)
        })



    }
}

export default UpdateGrid
