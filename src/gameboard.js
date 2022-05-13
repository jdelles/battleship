const ship = require("../src/ships");

const gameBoard = () => {
    const boardSize = 10;
    const board = new Array(boardSize).fill(new Array(boardSize).fill(0));
    const horizontal = "horizontal";

    const counterCreator = () => {
        let count = 0;
        const incCounter = () => ++count;
        const getCounter = () => count;
        return {incCounter, getCounter};
    };

    const getPosition = (row, col) => board[row][col];

    const placeShip = (name, row, col, length, orientation) => {
        console.log(`${name}, ${row}, ${col}, ${length}, ${orientation}`);
        if (!checkValidPlacement(row, col, length, orientation)) return;
        console.log("passed validation");
        const shipToPlace = ship(name, length);
        console.log("Ship creation success");
        if (orientation === horizontal) {
            console.log("Horizontal");
            for (let i = 0; i < length; i++) {
                console.log(`Ship placed at ${row}, ${col + i}`);
                board[row][col + i] = {
                    ship: shipToPlace,
                    position: i,
                };
            }
        } else {
            console.log("Vertical");
            for (let i = 0; i < length; i++) {
                console.log(`Ship placed at ${row + i}, ${col}`);
                board[row + i][col] = {
                    ship: shipToPlace,
                    position: i,
                };
            }
        }
        console.log("placeShip - exit");
    };

    const checkValidPlacement = (row, col, length, orientation) => {
        if (orientation === horizontal) {
            if (col < 0 || col + length > boardSize - 1) return false;
            for (let i = col; i < col + length; i++) {
                if (board[row][i] !== 0) {
                    console.log(`Error: checkValidPlacement [${row}][${i}]`);
                    console.log(getPosition(row, i));
                    return false;
                }
            }
        } else {
            if (row < 0 || row + length > boardSize - 1) return false;
            for (let i = row; i < row + length; i++) {
                if (board[i][col] !== 0) {
                    console.log(`Error: checkValidPlacement [${i}][${col}]`);
                    console.log(getPosition(i, col));
                    return false;
                }
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

    return {
        getPosition,
        placeShip,
        receiveAttack,
        counterCreator,
    };
};

module.exports = gameBoard;
