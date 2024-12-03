// import { getDBItems, increaseDBItem } from "@/utils/storage";

import { increaseDBItem, deleteDBItem } from "@/utils/storage";

describe("Getting cart's storage function", () => {
  it("should return the items", () => {
    Storage.prototype.getItem = jest.fn().mockReturnValue("[]");
    const storage = require("../../src/utils/storage");
    const res = storage.getDBItems();

    expect(res).toEqual([]);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith("cart");
  });

  it("should be an empty array when capture in catch", () => {
    Storage.prototype.getItem = jest.fn().mockReturnValue("a");
    const storage = require("../../src/utils/storage");
    const res = storage.getDBItems();

    expect(res).toEqual([]);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith("cart");
  });

  it("should be an empty array when the value is empty", () => {
    Storage.prototype.getItem = jest.fn().mockReturnValue("");
    const storage = require("../../src/utils/storage");
    const res = storage.getDBItems();

    expect(res).toEqual([]);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith("cart");
  });
});

describe("Add cart's function", () => {
  it("should return a item", () => {
    const value = { id: 1, name: "shirt" };
    Storage.prototype.getItem = jest.fn();
    Storage.prototype.setItem = jest.fn();
    const { addDBItem } = require("../../src/utils/storage");

    addDBItem(value);

    expect(localStorage.getItem).toHaveBeenCalledWith("cart");
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cart",
      JSON.stringify([value])
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});

describe("Increase cart's function", () => {
  it("should return the item with a new howMany", () => {
    const data = { id: 1, howMany: 1 };

    Storage.prototype.getItem = jest
      .fn()
      .mockReturnValue(JSON.stringify([data]));
    Storage.prototype.setItem = jest.fn();

    const res = increaseDBItem({ ...data, howMany: 2 });

    expect(res).toEqual([{ id: 1, howMany: 2 }]);
    expect(localStorage.getItem).toHaveBeenCalledWith("cart");
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cart",
      JSON.stringify([{ id: 1, howMany: 2 }])
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it("should check if the function was called with the correct parameters", () => {
    jest.mock("../../src/utils/storage", () => ({
      ...jest.requireActual("../../src/utils/storage"),
      increaseDBItem: jest.fn(),
    }));

    const { increaseDBItem } = require("../../src/utils/storage");
    const data = { id: 1, howMany: 2 };
    increaseDBItem(data);
    expect(increaseDBItem).toHaveBeenCalledWith(data);
    expect(increaseDBItem).toHaveBeenCalledTimes(1);
  });
});

describe("Delete cart's function", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should delete an item", () => {
    Storage.prototype.getItem = jest
      .fn()
      .mockReturnValue(JSON.stringify([{ id: 1 }, { id: 2 }]));
    Storage.prototype.setItem = jest.fn();
    const { deleteDBItem } = require("../../src/utils/storage");

    const id = 1;
    deleteDBItem(id);

    expect(localStorage.getItem).toHaveBeenCalledWith("cart");
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cart",
      JSON.stringify([{ id: 2 }])
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it("should check if the value has been called with the correct parameter", () => {
    jest.mock("../../src/utils/storage", () => ({
      ...jest.requireActual("../../src/utils/storage"),
      deleteDBItem: jest.fn(),
    }));

    const { deleteDBItem } = require("../../src/utils/storage");

    const id = 1;
    deleteDBItem(id);

    expect(deleteDBItem).toHaveBeenCalledWith(id);
    expect(deleteDBItem).toHaveBeenCalledTimes(1);
  });
});
