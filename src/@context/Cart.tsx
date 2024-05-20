"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { CartProductsType } from "@/@types/products";
import {
  deleteDBItem,
  getDBItems,
  addDBItem,
  increaseDBItem,
} from "@/utils/storage";

interface Context {
  total: number;
  increaseItem: (data: { id: number; howMany: number }) => void;
  deleteItem: (id: number) => void;
  addItem: (data: CartProductsType) => void;
  items: CartProductsType[];
}

export const CartContext = createContext<Context>({} as Context);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartProductsType[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const res = getDBItems();
    setItems(res);
  }, []);

  //Everytime the state items get update, the total will update as well.
  useEffect(() => {
    getTotal();
  }, [items]);

  function addItem(data: CartProductsType) {
    const res = items.filter((item) => item.id === data.id);
    if (res.length > 0) return null;
    data.howMany = 1;
    setItems((prevState) => [...prevState, data]);
    addDBItem(data);
  }

  function getTotal() {
    if (!items || items.length === 0) return;

    let subTotal = 0;

    items.forEach((item) => {
      const { price, howMany = 1 } = item;
      subTotal += price * howMany;
    });

    const fixed = Number(subTotal.toFixed(2));
    setTotal(fixed);
  }

  function increaseItem(data: { id: number; howMany: number }) {
    const res = increaseDBItem(data);
    setItems([...res]);
  }

  function deleteItem(id: number) {
    if (!items) return;
    const item = items.filter((item) => item.id !== id);
    deleteDBItem(id);
    setItems([...item]);
  }

  return (
    <CartContext.Provider
      value={{ total, increaseItem, deleteItem, addItem, items }}
    >
      {children}
    </CartContext.Provider>
  );
}
