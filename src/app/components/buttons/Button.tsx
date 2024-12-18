import { Radio_Canada } from "next/font/google";
import styles from "@/styles/buttons/Button.module.scss";
import { ComponentProps, CSSProperties } from "react";

const Radio = Radio_Canada({
  weight: ["500", "600", "700"],
  subsets: ["latin-ext"],
});

interface PropsTypes extends ComponentProps<"button"> {
  text: string;
  style?: CSSProperties;
  handleClick: () => void;
}

export default function Button(props: PropsTypes) {
  const { text, style = {}, handleClick } = props;

  return (
    <button
      {...props}
      className={`${Radio.className} ${styles.button}`}
      style={style}
      onClick={() => handleClick()}
    >
      <span>{text}</span>
    </button>
  );
}
