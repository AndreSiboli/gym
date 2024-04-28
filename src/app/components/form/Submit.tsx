import { Radio_Canada } from "next/font/google";
import styles from "@/styles/buttons/Button.module.scss";
import { CSSProperties, ChangeEvent, MouseEvent } from "react";

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

  function submit(e: MouseEvent<HTMLButtonElement>) {
    handleClick(e);
  }

  return (
    <button
      className={`${Radio.className} ${styles.button}`}
      style={style}
      onClick={(e) => submit(e)}
    >
      <span>{text}</span>
    </button>
  );
}
