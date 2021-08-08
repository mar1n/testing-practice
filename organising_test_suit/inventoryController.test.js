const { inventory, addToInventory } = require("./InventoryController");

beforeEach(()=> inventory.set("cheesecake", 0));

test("cancels opertaion for invalid quantities", () => {
    expect.hasAssertions(2);
    try {
        addToInventory("cheesecake", "not a number");
    } catch (error) {
        expect(inventory.get("cheesecake")).toBe(0);
    }

    expect(Array.from(inventory.entries())).toHaveLength(1);
})

test("cancels operation for invalid quantities", () => {
    expect(() => addToInventory("cheesecake", "not a number")).not.toThrow();
    expect(inventory.get("cheesecake")).toBe(0);
    expect(Array.from(inventory.entries())).toHaveLength(1);
})