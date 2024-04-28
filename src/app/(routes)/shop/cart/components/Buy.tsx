"use client";

import Button from "@/app/components/buttons/Button";
import styles from "./Buy.module.scss";
import { useContext } from "react";
import { CartContext } from "@/@context/Cart";

export default function Buy() {
  const { total } = useContext(CartContext);

  function decimal(num: number) {
    return num.toFixed(2);
  }

  function submit() {
    alert("How it is a fictional site, these items can't be bought.");
  }

  return (
    <div className={styles.buy}>
      <div className={styles.buy_price}>
        <span>Sub-total:</span>
        <span>${decimal(total)}</span>
      </div>
      <div className={styles.buy_button}>
        <Button text="BUY" handleClick={submit} />
      </div>
    </div>
  );
}
