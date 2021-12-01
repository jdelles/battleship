const ship = require("./ships");

function gameBoard() {
    const construct = {
        board: new Array(10).fill(new Array(10).fill(0)),
        sunkShips: 0,
        placeShip(ship, x, y, orientation) {
            // does place ship handle error checking or does the UI?

            if (orientation === "horizontal") {
                for (let i = 0; i < ship.size; i++) {
                    this.board[x][y + i] = [ship, i];
                }
            } else {
                for (let i = 0; i < ship.size; i++) {
                    this.board[x + i][y] = new Array[(ship, i)]();
                }
            }
        },
        receiveAttack(x, y) {
            if (this.board[x][y] === 0) {
                this.board[x][y] = 1;
            } else if (this.board[x][y] === 1) {
                // invalid guess - already tried
            } else {
                const hitShip = this.board[x][y][0];
                const index = this.board[x][y][1];
                hitShip.hit(index);
                if (hitShip.isSunk()) {
                    sunkShips++;
                    if (sunkShips > 5) {
                        // game over
                    }
                    // do something
                }
            }
        },
    };
    return construct;
}

module.exports = gameBoard;
