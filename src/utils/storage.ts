import { CartProductsType, ProductsType } from "@/@types/products";

function getAndConvert() {
  const items = localStorage.getItem("cart");
  const arr: CartProductsType[] = [];

  try {
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
  const sto = localStorage;
  const items = sto.getItem("cart");
  const arr: ProductsType[] = [];

  try {
    if (items) {
      const convert2Object = JSON.parse(items);
      arr.push(...convert2Object);
    }
  } catch (error) {
    throw new Error("An error has occured.");
  } finally {
    if (arr.filter((it) => it.id === item.id).length > 0) return;

    arr.push(item);
    const convert2JSON = JSON.stringify(arr);
    sto.setItem("cart", convert2JSON);
  }
}

export function getDBItems() {
  const get = localStorage.getItem("cart");

  if (!Array.isArray(get)) return;
  const conversion = JSON.parse(get);
  return conversion;
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
