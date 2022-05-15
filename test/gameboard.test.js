const gameBoard = require("../src/gameboard");

test("gameboard - construction", () => {
    console.log("gameboard - construction - enter");
    const testBoard = gameBoard();

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            expect(testBoard.getPosition(i, j)).toBe(0);
        }
    }
    console.log("gameboard - construction - exit");
});

test("gameboard - place ships", () => {
    console.log("gameboard - place ships - enter");
    const testBoard2 = gameBoard();

    console.log("gameboard - place ships - ship 1");
    testBoard2.incCounter();
    const name1 = `Ship-${testBoard2.getCounter()}`;
    const ship1 = `Ship-1`;
    testBoard2.placeShip(name1, 0, 0, 5, "horizontal");

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

    console.log("gameboard - place ships - ship 2");
    testBoard2.incCounter();
    const name2 = `Ship-${testBoard2.getCounter()}`;
    const ship2 = `Ship-2`;
    testBoard2.placeShip(name2, 4, 3, 5, "horizontal");

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

    console.log("gameboard - place ships - ship 3");
    testBoard2.incCounter();
    const name3 = `Ship-${testBoard2.getCounter()}`;
    const ship3 = `Ship-3`;
    testBoard2.placeShip(name3, 2, 2, 5, "vertical");

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
    console.log("gameboard - place ships - exit");
});

test("gameboard - receive attack", () => {});

test("gameboard - all ships sunk", () => {});
