const gameBoard = (() => {
    const squares = [];
    const grid = document.getElementById('grid-container');
    const gameBoardArray = [
        '', '','',
        '','','',
        '','',''
        ];

        gameBoardArray.forEach(function(tile, index) {
            let div = document.createElement('div');
            div.innerHTML = tile;
            div.classList.add('square');
            div.setAttribute('data-inside', 'empty');
            div.setAttribute('id', index);
            squares.push(div);
            grid.append(div);
        })

        return {squares}
}) ();