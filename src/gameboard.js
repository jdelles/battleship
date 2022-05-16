const ship = require("../src/ships");

const gameBoard = () => {
    const boardSize = 10;
    const board = new Array(boardSize)
        .fill(null)
        .map(() => new Array(boardSize).fill(0));
    const horizontal = "horizontal";

    const hitOrMissBoard = new Array(boardSize)
        .fill(null)
        .map(() => new Array(boardSize).fill(-1));

    const ships = [];

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
        ships.push(shipToPlace);
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
        if (checkValidAttack(row, col)) {
            const {ship, position} = board[row][col];
            ship.hit(position);
            hitOrMissBoard[row][col] = 1;
            if (ship.isSunk()) {
                const index = getShipIndex(ship);
                ships.splice(index, 1);
            }
        } else {
            hitOrMissBoard[row][col] = 0;
        }
    };

    const getShipIndex = ship => {
        for (let i = 0; i < ships.length; i++) {
            if (ships[i].name === ship.name) return i;
        }
        return -1;
    };

    const checkAllShipsSunk = () => {
        return ships.length === 0;
    };

    const checkValidAttack = (row, col) => {
        if (board[row][col] === 0 || board[row][col] === 1) {
            board[row][col] = 1;
            return false;
        }
        return true;
    };

    return {
        getPosition,
        placeShip,
        receiveAttack,
        checkAllShipsSunk,
    };
};

module.exports = gameBoard;
