const gameBoard = require("../src/gameboard");

test("gameboard - construction", () => {
    const testBoard = new gameBoard();

    expect(testBoard.board.length).toBe(10);
    expect(testBoard.board[0].length).toBe(10);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            expect(testBoard.board[i][j]).toBe(0);
        }
    }
});

test("gameboard - place ships", () => {
    const testBoard = new gameBoard();

    testBoard.placeShip(0, 0, 5, "horizontal");
    expect(testBoard.shipCount).toBe(1);
    const ship1 = `Ship-1`;

    expect(testBoard.board[0][0].ship.name).toBe(ship1);
    expect(testBoard.board[0][0].position).toBe(0);
    expect(testBoard.board[0][1].ship.name).toBe(ship1);
    expect(testBoard.board[0][1].position).toBe(1);
    expect(testBoard.board[0][2].ship.name).toBe(ship1);
    expect(testBoard.board[0][2].position).toBe(2);
    expect(testBoard.board[0][3].ship.name).toBe(ship1);
    expect(testBoard.board[0][3].position).toBe(3);
    expect(testBoard.board[0][4].ship.name).toBe(ship1);
    expect(testBoard.board[0][4].position).toBe(4);

    testBoard.placeShip(4, 3, 5, "horizontal");
    expect(testBoard.shipCount).toBe(2);
    const ship2 = `Ship-2`;

    expect(testBoard.board[4][3].ship.name).toBe(ship2);
    expect(testBoard.board[4][3].position).toBe(0);
    expect(testBoard.board[4][4].ship.name).toBe(ship2);
    expect(testBoard.board[4][4].position).toBe(1);
    expect(testBoard.board[4][5].ship.name).toBe(ship2);
    expect(testBoard.board[4][5].position).toBe(2);
    expect(testBoard.board[4][6].ship.name).toBe(ship2);
    expect(testBoard.board[4][6].position).toBe(3);
    expect(testBoard.board[4][7].ship.name).toBe(ship2);
    expect(testBoard.board[4][7].position).toBe(4);

    testBoard.placeShip(2, 2, 5, "vertical");
    const ship3 = `Ship-3`;

    expect(testBoard.board[2][2].ship.name).toBe(ship3);
    expect(testBoard.board[2][2].position).toBe(0); // 2
    expect(testBoard.board[3][2].ship.name).toBe(ship3);
    expect(testBoard.board[3][2].position).toBe(1); // 2
    expect(testBoard.board[4][2].ship.name).toBe(ship3);
    expect(testBoard.board[4][2].position).toBe(2); // 2
    expect(testBoard.board[5][2].ship.name).toBe(ship3);
    expect(testBoard.board[5][2].position).toBe(3); // 2
    expect(testBoard.board[6][2].ship.name).toBe(ship3);
    expect(testBoard.board[7][2].position).toBe(4); // 2
});

test("gameboard - receive attack", () => {});

test("gameboard - all ships sunk", () => {});
