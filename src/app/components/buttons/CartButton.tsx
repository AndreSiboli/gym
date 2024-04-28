"use client";

import { useContext } from "react";
import { CartContext } from "@/@context/Cart";
import { CartProductsType } from "@/@types/products";
import styles from "@/styles/buttons/CartButton.module.scss";
import { MessageContext } from "@/@context/Message";

interface PropsType {
  data: CartProductsType;
}

export default function CartButton(props: PropsType) {
  const { data } = props;
  const { addItem } = useContext(CartContext);
  const { changeMessage } = useContext(MessageContext);

  function submit() {
    const res = addItem(data);
    if (res === null) {
      changeMessage({ title: "Já adicionado", text: "Produto já foi adicionado." });
      return;
    }
    changeMessage({ title: "Adicionado", text: "Adicionado com sucesso." });
  }

  return (
    <button className={styles.button} onClick={() => submit()}>
      <span>Add to Cart</span>
    </button>
  );
}
