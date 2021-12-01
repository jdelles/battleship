const gameboard = require("../src/gameboard");
const ship = require("../src/ships");

test("gameboard - construction", () => {
    const testBoard = gameboard();

    expect(testBoard.board.length).toBe(10);
    expect(testBoard.board[0].length).toBe(10);
});

test("gameboard - place ships", () => {
    const testBoard = gameboard();
    const ship1 = ship("ship 1", 5);

    testBoard.placeShip(ship1, 0, 0, "horizontal");

    expect(testBoard.board[0][0].shipname).toBe(ship1);
    expect(testBoard.board[0][0].shipposition).toBe(0);
    expect(testBoard.board[1][0].shipname).toBe(ship1);
    expect(testBoard.board[1][0].shipposition).toBe(1);
    expect(testBoard.board[2][0].shipname).toBe(ship1);
    expect(testBoard.board[2][0].shipposition).toBe(2);
    expect(testBoard.board[3][0].shipname).toBe(ship1);
    expect(testBoard.board[3][0].shipposition).toBe(3);
    expect(testBoard.board[4][0].shipname).toBe(ship1);
    expect(testBoard.board[4][0].shipposition).toBe(4);

    testBoard.placeShip(ship1, 2, 2, "vertical");

    expect(testBoard.board[2][2][0]).toBe(ship1);
    expect(testBoard.board[2][2][1]).toBe(0);
    expect(testBoard.board[2][3][0]).toBe(ship1);
    expect(testBoard.board[2][3][1]).toBe(1);
    expect(testBoard.board[2][4][0]).toBe(ship1);
    expect(testBoard.board[2][4][1]).toBe(2);
    expect(testBoard.board[2][5][0]).toBe(ship1);
    expect(testBoard.board[2][5][1]).toBe(3);
    expect(testBoard.board[2][6][0]).toBe(ship1);
    expect(testBoard.board[2][6][1]).toBe(4);
});

test("gameboard - receive attack", () => {});

test("gameboard - all ships sunk", () => {});
