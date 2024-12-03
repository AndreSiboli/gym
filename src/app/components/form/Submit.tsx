"use client";

import { Radio_Canada } from "next/font/google";
import styles from "@/styles/form/Submit.module.scss";
import {
  ButtonHTMLAttributes,
  CSSProperties,
  ChangeEvent,
  ComponentProps,
  MouseEvent,
  useState,
} from "react";

const Radio = Radio_Canada({
  weight: ["500", "600", "700"],
  subsets: ["latin-ext"],
});

interface PropsTypes extends ComponentProps<"button"> {
  text: string;
  style?: CSSProperties;
  loading: boolean;
  variant: 'v1' | 'v2'
}

export default function Submit(props: PropsTypes) {
  const { text, style = {}, loading, variant } = props;

  return (
    <button
      {...props}
      className={`${Radio.className} ${styles.button} ${styles[variant]}`}
      style={style}
    >
      {!loading ? (
        <span>{text}</span>
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
