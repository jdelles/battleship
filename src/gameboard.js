const ship = require("../src/ships");

const gameBoard = () => {
    const boardSize = 10;
    const board = new Array(boardSize).fill(new Array(boardSize).fill(0));
    let shipCount = 0;
    const horizontal = "horizontal";

    const placeShip = (row, col, length, orientation) => {
        if (!checkValidPlacement(row, col, length, orientation)) return;

        shipCount += 1;
        const shipToPlace = ship(`Ship-${shipCount}`, length);

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
            for (let i = col; i < col + length; i++) {
                if (board[row][i] !== 0) return false;
            }
        } else {
            if (row < 0 || row + length > boardSize - 1) return false;
            for (let i = row; i < row + length; i++) {
                if (board[i][col] !== 0) return false;
            }
        }
        return true;
    };

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

    return {board, shipCount, placeShip, receiveAttack};
};

module.exports = gameBoard;
