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

const players = (() => {
    const player1 = {
        name: 'player 1',
        marker: 'X',
        isFirstMove: false,
        positions: [],
        score: 0,
    }

    const player2 = {
        name: 'player 2',
        marker: 'O',
        isFirstMove: false,
        positions: [],
        score: 0,
    }

    const markers= [player1.marker, player2.marker];

    return {player1, player2, markers}
    
})();