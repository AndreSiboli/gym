"use client";

import { useContext, useState } from "react";
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
  const [loading, setLoading] = useState(false);

  function submit() {
    const res = addItem(data);
    if (res === null) {
      changeMessage({
        title: "Já adicionado",
        text: "Produto já foi adicionado.",
      });
      return;
    }
    changeMessage({ title: "Adicionado", text: "Adicionado com sucesso." });
  }

  function delaySubmit() {
    setLoading(true);
    setTimeout(() => {
      submit();
      setLoading(false);
    }, 1000);
  }

  return (
    <button className={styles.button} onClick={() => delaySubmit()}>
      {!loading ? (
        <span>Add to Cart</span>
      ) : (
        <div className={styles.dot_container}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      )}
    </button>
  );
}
