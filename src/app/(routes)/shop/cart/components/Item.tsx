"use client";

import { useContext, useState } from "react";
import { CartContext } from "@/@context/Cart";
import { CartProductsType } from "@/@types/products";
import styles from "./Item.module.scss";

import Stars from "@/app/components/layout/Stars";
import Img from "@/app/components/utils/Img";
import HowMuch from "./HowMuch";
import Dialog from "@/app/components/utils/Dialog";

import { FaTrash } from "react-icons/fa6";

export default function Item({ data }: { data: CartProductsType }) {
  let event: NodeJS.Timeout;
  const { increaseItem, deleteItem } = useContext(CartContext);
  const [close, setClose] = useState(false);

  function decimal(num: number) {
    return num.toFixed(2);
  }

  function delayIncrease(howMany: number) {
    if (event) clearTimeout(event);

    event = setTimeout(() => {
      increaseItem({ id: data.id, howMany });
    }, 1000);
  }

  function deleteSome(bool: boolean) {
    if (bool) deleteItem(data.id);
    else setClose(false);
  }

  function toggleDialog() {
    setClose(true);
  }

  return (
    <div className={styles.card}>
      <div className={styles.card_wrapper}>
        <div className={styles.card_image}>
          <Img src={data.image} style={{ objectFit: "contain" }} />
        </div>
        <div className={styles.card_info}>
          <h1>{data.title}</h1>
          <Stars rate={data.rating.rate} count={data.rating.count} />
          <span>${decimal(data.price)}</span>
        </div>
      </div>
      
      <div className={styles.card_end}>
        <button onClick={toggleDialog} aria-label="Button to delete item">
          <FaTrash />
        </button>
        <HowMuch handleDelay={delayIncrease} inCart={data.howMany} />
      </div>
      {close && (
        <Dialog
          title="Are you sure?"
          text="Are you sure you want to delete this item?"
          handleDialog={deleteSome}
        />
      )}
    </div>
  );
}
