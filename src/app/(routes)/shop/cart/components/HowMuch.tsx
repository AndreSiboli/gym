"use cleint";

import { ChangeEvent, useState } from "react";
import styles from "./HowMuch.module.scss";

import { FaPlus, FaMinus } from "react-icons/fa6";

interface PropsType {
  handleDelay: (howMany: number) => void;
  inCart: number;
}

export default function HowMuch(props: PropsType) {
  const { handleDelay, inCart = 1 } = props;
  const [state, setState] = useState(inCart);

  function insertByButton(add: 1 | -1) {
    let how = state + add;

    if (how > 99) how = 99;
    else if (how < 1) how = 1;

    setState(how);
    handleDelay(how);
  }

  function insertByInput(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    let number = 1;
    const regex = /[-e]/;

    if (!Number.isNaN(value) && !value.match(regex)) {
      number = parseInt(value);
      if (number > 99) number = 99;
      else if (number < 1) number = 1;
    }

    if (!number) number = 1;

    setState(number);
    handleDelay(number);
  }

  return (
    <div className={styles.howmuch}>
      <button
        onClick={() => insertByButton(-1)}
        aria-label="Button to decrease"
      >
        <FaMinus />
      </button>
      <input
        type="number"
        max={99}
        min={1}
        value={state}
        onChange={insertByInput}
        aria-label="How many items"
      />
      <button onClick={() => insertByButton(1)} aria-label="Button to increase">
        <FaPlus />
      </button>
    </div>
  );
}
