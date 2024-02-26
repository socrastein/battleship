const { Ship, GameBoard } = require("./gameState");

describe("Ship: create and take hits", () => {
  test("Correctly sets name and size of new ship", () => {
    const testShip = new Ship("Test", 5);
    expect(testShip.name).toBe("Test");
    expect(testShip.size).toBe(5);
  });

  test("Correctly registers successfully fired shot", () => {
    const testShip = new Ship("Test", 3);
    expect(testShip.hits).toBe(0);
    testShip.takeHit();
    expect(testShip.hits).toBe(1);
  });

  test("Correctly registers sinking shot", () => {
    const testShip = new Ship("Test", 3);
    expect(testShip.isSunk).toBe(false);
    testShip.takeHit();
    testShip.takeHit();
    expect(testShip.isSunk).toBe(false);
    testShip.takeHit();
    expect(testShip.isSunk).toBe(true);
  });
});

describe("Ship: set grid location", () => {
  test("Correctly sets ship's grid location", () => {
    const testShip = new Ship("Test", 5);
    expect(testShip.size).toBe(5);
    testShip.setLocation(["A1", "A2", "A3", "A4", "A5"]);
    expect(testShip.squares).toEqual(["A1", "A2", "A3", "A4", "A5"]);
  });

  test("Correctly throws error if given incorrect number of squares", () => {
    const testShip = new Ship("Test", 5);
    expect(() => {
      testShip.setLocation(["A1", "A2", "A3", "A4"]);
    }).toThrow();
    expect(() => {
      testShip.setLocation(["A1", "A2", "A3", "A4", "A5", "A6"]);
    }).toThrow();
  });
});
