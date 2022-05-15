const ship = require("../src/ships");

const gameBoard = () => {
    const boardSize = 10;
    const board = new Array();
    for (let i = 0; i < 10; i++) {
        board.push(new Array(boardSize).fill(0));
    }
    const horizontal = "horizontal";

    let _counter = 0;

    function getCounter() {
        return _counter;
    }

    function incCounter() {
        _counter++;
    }

    const placeShip = (name, row, col, length, orientation) => {
        if (!checkValidPlacement(row, col, length, orientation)) return;
        const shipToPlace = ship(name, length);
        if (orientation === horizontal) {
            for (let i = 0; i < length; i++) {
                board[row][col + i] = {
                    ship: shipToPlace,
                    position: i,
                };
            }
        } else {
            for (let i = 0; i < length; i++) {
                board[row + i][col] = {
                    ship: shipToPlace,
                    position: i,
                };
            }
        }
    };

    const checkValidPlacement = (row, col, length, orientation) => {
        if (orientation === horizontal) {
            if (col < 0 || col + length > boardSize - 1) return false;
            for (let i = 0; i < length; i++) {
                if (board[row][col + i] !== 0) return false;
            }
        } else {
            if (row < 0 || row + length > boardSize - 1) return false;
            for (let i = 0; i < length; i++) {
                if (board[row + i][col] !== 0) return false;
            }
        }
        return true;
    };

    const getPosition = (row, col) => board[row][col];

    const receiveAttack = (row, col) => {
        if (!checkValidAttack(row, col)) return false;
        const {ship, position} = board[row][col];
        ship.hit(position);
        return true;
    };

    const checkValidAttack = (row, col) => {
        if (board[row][col] === 0 || board[row][col] === 1) {
            board[row][col] = 1;
            return false;
        }
        return true;
    };

    const printGameBoard = () => {
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                console.log(`[${i}][${j}]: ${getPosition(i, j)} `);
            }
            console.log();
        }
    };

    return {
        getPosition,
        placeShip,
        receiveAttack,
        incCounter,
        getCounter,
        printGameBoard,
    };
};

module.exports = gameBoard;
