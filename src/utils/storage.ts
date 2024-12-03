import { CartProductsType, ProductsType } from "@/@types/products";

function getAndConvert() {
  const arr: CartProductsType[] = [];

  try {
    const items = localStorage.getItem("cart");

    if (items) {
      const convert2Object = JSON.parse(items);
      arr.push(...convert2Object);
    }
  } catch (error) {
    return [];
  }

  return arr;
}

export function addDBItem(item: ProductsType) {
  const storage = localStorage;
  const items = storage.getItem("cart");
  const arr: ProductsType[] = [];

  try {
    if (items) {
      const converted2Object = JSON.parse(items);
      arr.push(...converted2Object);
    } else throw new Error("An error has occured.");
  } catch (error) {
    const err = error as Error;
    console.error(err.message);
  } finally {
    if (arr.filter((it) => it.id === item.id).length > 0) return;

    arr.push(item);
    const convert2JSON = JSON.stringify(arr);
    storage.setItem("cart", convert2JSON);
  }
}

export function getDBItems() {
  try {
    const get = localStorage.getItem("cart");
    if (!get) return [] as unknown as CartProductsType[];

    const converted = JSON.parse(get);
    if (Array.isArray(converted)) {
      return converted as unknown as CartProductsType[];
    }
    throw new Error("An error has ocurred");
  } catch (error) {
    const err = error as Error;
    console.error(err.message);
    return [] as unknown as CartProductsType[];
  }
}

export function increaseDBItem(data: { id: number; howMany: number }) {
  const { id, howMany } = data;
  const arr = getAndConvert();
  const item = arr.filter((item) => item.id === id)[0];
  item.howMany = howMany;

  const convert2JSON = JSON.stringify(arr);
  localStorage.setItem("cart", convert2JSON);
  return arr;
}

export function deleteDBItem(id: number) {
  const arr = getAndConvert();
  const item = arr.filter((item) => item.id !== id);
  const convert2JSON = JSON.stringify(item);
  localStorage.setItem("cart", convert2JSON);
}
