"use client";

import { useContext } from "react";
import { CartContext } from "@/@context/Cart";
import styles from "./cart.module.scss";

import Container from "@/app/components/layout/Container";
import Item from "./components/Item";
import Buy from "./components/Buy";
import Link from "next/link";

export default function Cart() {
  const { items } = useContext(CartContext);

  return (
    <div className={styles.cart}>
      <Container>
        <div className={styles.cart_container}>
          {items.length > 0 ? (
            <>
              <div className={styles.cart_items}>
                {items.map((item) => (
                  <Item data={item} key={item.id} />
                ))}
              </div>
              <Buy />
            </>
          ) : (
            <div className={styles.cart_null}>
              <h1>You don&apos;t have any item in the cart.</h1>
              <Link href="/shop">Going Shopping</Link>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
