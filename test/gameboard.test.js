const gameBoard = require("../src/gameboard");

test("gameboard - construction", () => {
    const testBoard = gameBoard();

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            expect(testBoard.getPosition(i, j)).toBe(-1);
        }
    }
});

test("gameboard - place ships", () => {
    const testBoard2 = gameBoard();

    const ship1 = `Ship-1`;
    testBoard2.placeShip(ship1, 0, 0, 5, "horizontal");

    expect(testBoard2.getPosition(0, 0).ship.name).toBe(ship1);
    expect(testBoard2.getPosition(0, 0).position).toBe(0);
    expect(testBoard2.getPosition(0, 1).ship.name).toBe(ship1);
    expect(testBoard2.getPosition(0, 1).position).toBe(1);
    expect(testBoard2.getPosition(0, 2).ship.name).toBe(ship1);
    expect(testBoard2.getPosition(0, 2).position).toBe(2);
    expect(testBoard2.getPosition(0, 3).ship.name).toBe(ship1);
    expect(testBoard2.getPosition(0, 3).position).toBe(3);
    expect(testBoard2.getPosition(0, 4).ship.name).toBe(ship1);
    expect(testBoard2.getPosition(0, 4).position).toBe(4);

    const ship2 = `Ship-2`;
    testBoard2.placeShip(ship2, 4, 3, 5, "horizontal");

    expect(testBoard2.getPosition(4, 3).ship.name).toBe(ship2);
    expect(testBoard2.getPosition(4, 3).position).toBe(0);
    expect(testBoard2.getPosition(4, 4).ship.name).toBe(ship2);
    expect(testBoard2.getPosition(4, 4).position).toBe(1);
    expect(testBoard2.getPosition(4, 5).ship.name).toBe(ship2);
    expect(testBoard2.getPosition(4, 5).position).toBe(2);
    expect(testBoard2.getPosition(4, 6).ship.name).toBe(ship2);
    expect(testBoard2.getPosition(4, 6).position).toBe(3);
    expect(testBoard2.getPosition(4, 7).ship.name).toBe(ship2);
    expect(testBoard2.getPosition(4, 7).position).toBe(4);

    const ship3 = `Ship-3`;
    testBoard2.placeShip(ship3, 2, 2, 5, "vertical");

    expect(testBoard2.getPosition(2, 2).ship.name).toBe(ship3);
    expect(testBoard2.getPosition(2, 2).position).toBe(0); // 2
    expect(testBoard2.getPosition(3, 2).ship.name).toBe(ship3);
    expect(testBoard2.getPosition(3, 2).position).toBe(1); // 2
    expect(testBoard2.getPosition(4, 2).ship.name).toBe(ship3);
    expect(testBoard2.getPosition(4, 2).position).toBe(2); // 2
    expect(testBoard2.getPosition(5, 2).ship.name).toBe(ship3);
    expect(testBoard2.getPosition(5, 2).position).toBe(3); // 2
    expect(testBoard2.getPosition(6, 2).ship.name).toBe(ship3);
    expect(testBoard2.getPosition(6, 2).position).toBe(4); // 2
});

test("gameboard - receive attack / all ships sunk", () => {
    const testBoard3 = gameBoard();
    testBoard3.placeShip("Ship-1", 0, 0, 5, "horizontal");
    testBoard3.placeShip("Ship-2", 4, 3, 5, "horizontal");
    testBoard3.placeShip("Ship-3", 2, 2, 5, "vertical");

    expect(testBoard3.checkAllShipsSunk()).toBeFalsy();

    // sink ship 1
    expect(testBoard3.getPosition(0, 0).ship.isSunk()).toBeFalsy();
    for (let i = 0; i < 5; i++) {
        testBoard3.receiveAttack(0, i);
    }
    expect(testBoard3.getPosition(0, 0).ship.isSunk()).toBeTruthy();
    expect(testBoard3.checkAllShipsSunk()).toBeFalsy();

    // sink ship 2
    expect(testBoard3.getPosition(4, 3).ship.isSunk()).toBeFalsy();
    for (let i = 0; i < 5; i++) {
        testBoard3.receiveAttack(4, 3 + i);
    }
    expect(testBoard3.getPosition(4, 3).ship.isSunk()).toBeTruthy();
    expect(testBoard3.checkAllShipsSunk()).toBeFalsy();

    // sink ship 3
    expect(testBoard3.getPosition(2, 2).ship.isSunk()).toBeFalsy();
    for (let i = 0; i < 5; i++) {
        testBoard3.receiveAttack(2 + i, 2);
    }
    expect(testBoard3.getPosition(2, 2).ship.isSunk()).toBeTruthy();
    expect(testBoard3.checkAllShipsSunk()).toBeTruthy();
});
