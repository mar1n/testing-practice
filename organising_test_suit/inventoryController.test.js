const { inventory, addToInventory, getInventory } = require("./InventoryController");

beforeEach(() => inventory.clear());

test("inventory contents", () => {
  inventory
    .set("cheesecake", 1)
    .set("macarroon", 3)
    .set("croissant", 3)
    .set("eclarie", 7);

    const result = getInventory();
    expect(result).toEqual({
        cheesecake: 1,
        macarroon: 3,
        croissant: 3,
        eclarie: 7,
        generatedAt: expect.any(Date)
    });
});
test("returned value", () => {
  const result = addToInventory("cheesecake", 2);
  expect(result).toBeGreaterThan(1);
});
test("cancels opertaion for invalid quantities", () => {
  expect.hasAssertions(2);
  try {
    addToInventory("cheesecake", "not a number");
  } catch (error) {
    expect(inventory.get("cheesecake")).toBe(0);
  }

  expect(Array.from(inventory.entries())).toHaveLength(1);
});

test("cancels operation for invalid quantities", () => {
  expect(() => addToInventory("cheesecake", "not a number")).not.toThrow();
  expect(inventory.get("cheesecake")).toBe(0);
  expect(Array.from(inventory.entries())).toHaveLength(1);
});
