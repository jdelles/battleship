const ship = require("../src/ships");

const gameBoard = () => {
    const HIT = 1;
    const MISS = 0;
    const UNDISCOVERED = -1;
    const boardSize = 10;
    const horizontal = "horizontal";

    const board = new Array(boardSize)
        .fill(null)
        .map(() => new Array(boardSize).fill(UNDISCOVERED));

    const hitOrMissBoard = new Array(boardSize)
        .fill(null)
        .map(() => new Array(boardSize).fill(UNDISCOVERED));

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
                if (board[row][col + i] !== UNDISCOVERED) return false;
            }
        } else {
            if (row < 0 || row + length > boardSize - 1) return false;
            for (let i = 0; i < length; i++) {
                if (board[row + i][col] !== UNDISCOVERED) return false;
            }
        }
        return true;
    };

    const getPosition = (row, col) => board[row][col];

    const receiveAttack = (row, col) => {
        if (checkValidAttack(row, col)) {
            const {ship, position} = board[row][col];
            ship.hit(position);
            hitOrMissBoard[row][col] = HIT;
            if (ship.isSunk()) {
                const index = getShipIndex(ship);
                ships.splice(index, 1);
            }
            return true;
        } else {
            hitOrMissBoard[row][col] = MISS;
            return false;
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
        if (row < 0 || col < 0 || row >= boardSize || col >= boardSize)
            return false;
        if (board[row][col] === UNDISCOVERED) return false;
        return true;
    };

    const aiCheckAttack = (row, col) => {
        return hitOrMissBoard[row][col] === UNDISCOVERED;
    };

    const getBoardSize = () => {
        return boardSize;
    };

    return {
        getPosition,
        placeShip,
        aiCheckAttack,
        receiveAttack,
        checkAllShipsSunk,
        getBoardSize,
    };
};

module.exports = gameBoard;
