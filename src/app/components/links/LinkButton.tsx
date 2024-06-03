import styles from "@/styles/links/LinkButton.module.scss";
import Link from "next/link";
import { Radio_Canada } from "next/font/google";
import { CSSProperties } from "react";

const Radio = Radio_Canada({
  weight: ["500", "600", "700"],
  subsets: ["latin-ext"],
});

interface PropsType {
  to: string;
  text: string;
  style?: CSSProperties;
}

export default function LinkButton(props: PropsType) {
  const { to, text, style } = props;

  return (
    <Link
      href={to}
      className={`${styles.link} ${Radio.className}`}
      style={style}
    >
      <span>{text}</span>
    </Link>
  );
}
