"use client";

import styles from "./Buy.module.scss";
import { useContext } from "react";
import { CartContext } from "@/@context/Cart";

import Button from "@/app/components/buttons/Button";

export default function Buy() {
  const { total, items } = useContext(CartContext);

  function decimal(num: number) {
    return num.toFixed(2);
  }

  function submit() {
    alert("How it is a fictional site, these items can't be bought.");
  }

  return (
    <aside className={styles.buy}>
      <header>
        <h1>Summary</h1>
      </header>

      <div className={styles.buy_body}>
        <div className={styles.body_row}>
          <span>Sub-total:</span>
          <span>${decimal(total)}</span>
        </div>
        <div className={styles.body_row}>
          <span>Total items:</span>
          <span>{items.reduce((prev, curr) => prev + curr.howMany, 0)}</span>
        </div>
        <div className={styles.body_row}>
          <span>Discount:</span>
          <span>$0</span>
        </div>
      </div>

      <footer className={styles.buy_footer}>
        <div className={styles.footer_total}>
          <div className={styles.total_row}>
            <span>Total:</span>
            <span>${decimal(total)}</span>
          </div>
        </div>

        <div className={styles.footer_button}>
          <Button
            text="BUY"
            handleClick={submit}
            style={{ background: "#000", color: "#fff" }}
          />
        </div>
      </footer>
    </aside>
  );
}
