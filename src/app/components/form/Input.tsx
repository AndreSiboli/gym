"use client";

import styles from "@/styles/form/Input.module.scss";
import { RefObject } from "react";

interface PropsType {
  label: string;
  type: string;
  min?: number;
  max?: number;
  id: string;
  refs: RefObject<HTMLInputElement>;
}

export default function Input(props: PropsType) {
  const { label, type, id, refs } = props;

  return (
    <div className={styles.input}>
      <input type={type} id={id} name={id} placeholder=" " ref={refs} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
