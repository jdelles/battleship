const ship = require("../src/ships");

test("ship - construction", () => {
    const testObject = {
        name: "test Ship",
        length: 4,
        damage: [0, 0, 0, 0],
    };

    const shipObject = ship("test Ship", 4);

    expect(shipObject.name).toBe(testObject.name);
    expect(shipObject.length).toBe(testObject.length);
    expect(shipObject.damage[0]).toBe(testObject.damage[0]);
    expect(shipObject.isSunk()).toBeFalsy();
});

test("ship - hits", () => {
    const shipObject = ship("test Ship", 4);

    // verify damage free ship!
    expect(shipObject.isSunk()).toBeFalsy();
    expect(shipObject.damage[0]).toBe(0);
    expect(shipObject.damage[1]).toBe(0);
    expect(shipObject.damage[2]).toBe(0);
    expect(shipObject.damage[3]).toBe(0);

    // hit position 0
    shipObject.hit(0);
    expect(shipObject.isSunk()).toBeFalsy();
    expect(shipObject.damage[0]).toBe(1);
    expect(shipObject.damage[1]).toBe(0);
    expect(shipObject.damage[2]).toBe(0);
    expect(shipObject.damage[3]).toBe(0);

    // hit position 3
    shipObject.hit(3);
    expect(shipObject.isSunk()).toBeFalsy();
    expect(shipObject.damage[0]).toBe(1);
    expect(shipObject.damage[1]).toBe(0);
    expect(shipObject.damage[2]).toBe(0);
    expect(shipObject.damage[3]).toBe(1);

    // hit position 1
    shipObject.hit(1);
    expect(shipObject.isSunk()).toBeFalsy();
    expect(shipObject.damage[0]).toBe(1);
    expect(shipObject.damage[1]).toBe(1);
    expect(shipObject.damage[2]).toBe(0);
    expect(shipObject.damage[3]).toBe(1);

    // hit position 2
    shipObject.hit(2);
    expect(shipObject.isSunk()).toBeTruthy();
    expect(shipObject.damage[0]).toBe(1);
    expect(shipObject.damage[1]).toBe(1);
    expect(shipObject.damage[2]).toBe(1);
    expect(shipObject.damage[3]).toBe(1);
});

test("ship - multiple ships", () => {
    const ship1 = ship("ship 1", 4);
    const ship2 = ship("ship 2", 5);

    expect(ship1.isSunk()).toBeFalsy();
    expect(ship2.isSunk()).toBeFalsy();

    expect(ship1.name).toBe("ship 1");
    expect(ship2.name).toBe("ship 2");

    ship1.hit(2);
    expect(ship1.damage[0]).toBe(0);
    expect(ship1.damage[1]).toBe(0);
    expect(ship1.damage[2]).toBe(1);
    expect(ship1.damage[3]).toBe(0);

    ship2.hit(3);
    expect(ship2.damage[0]).toBe(0);
    expect(ship2.damage[1]).toBe(0);
    expect(ship2.damage[2]).toBe(0);
    expect(ship2.damage[3]).toBe(1);
});
