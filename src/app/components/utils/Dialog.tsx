"use client";

import { MouseEvent } from "react";
import styles from "@/styles/utils/Dialog.module.scss";

import Button from "@/app/components/buttons/Button";

interface PropsType {
  title: string;
  text: string;
  handleDialog: (bool: boolean) => void;
}

export default function Dialog(props: PropsType) {
  const { handleDialog, text, title } = props;

  function choose(bool: boolean) {
    handleDialog(bool);
  }

  function outside(e: MouseEvent<HTMLDivElement>) {
    const id = (e.target as HTMLDivElement).id;
    if (id === "dialog") choose(false);
  }

  return (
    <div className={styles.dialog} id="dialog" onClick={(e) => outside(e)}>
      <div className={styles.dialog_card}>
        <div className={styles.dialog_text}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className={styles.dialog_button}>
          <Button handleClick={() => choose(true)} text="YES" />
          <Button handleClick={() => choose(false)} text="NO" />
        </div>
      </div>
    </div>
  );
}
