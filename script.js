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

const game = () => {
    const totalMoves = [];
    let turn = players.player1.isFirstMove === true ? players.player1 : players.player2;
    domEl.gameInfo.innerHTML = `${turn.name} goes first`;

    const isWinner = (playerArr) => {
        const winArr = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]];
        return winArr.some(winVal => winVal.every(winPos => playerArr.includes(winPos)));
    }

    const getResult = (player, square) => {
        const position = gameBoard.squares.indexOf(square);
        player.positions.push(position);
        if(isWinner(player.positions)) return `${player.name} is the winner!`;
        if(totalMoves.length >= 9) return "We have a Draw!";
        return "no result"
    }
}
