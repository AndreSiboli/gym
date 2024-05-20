"use client";

import { Radio_Canada } from "next/font/google";
import styles from "@/styles/form/Submit.module.scss";
import { CSSProperties, ChangeEvent, MouseEvent, useState } from "react";

const Radio = Radio_Canada({
  weight: ["500", "600", "700"],
  subsets: ["latin-ext"],
});

interface PropsTypes {
  text: string;
  style?: CSSProperties;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Submit(props: PropsTypes) {
  const { text, style = {}, handleClick } = props;
  const [loading, setLoading] = useState(false);

  function submit(e: MouseEvent<HTMLButtonElement>) {
    handleClick(e);
  }

  function delaySubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setLoading(true);
    setTimeout(() => {
      submit(e);
      setLoading(false);
    }, 1000);
  }

  return (
    <button
      className={`${Radio.className} ${styles.button}`}
      style={style}
      onClick={(e) => delaySubmit(e)}
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
