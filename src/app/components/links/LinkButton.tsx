import styles from "@/styles/links/LinkButton.module.scss";
import Link from "next/link";
import { Radio_Canada } from "next/font/google";
import { ComponentProps, CSSProperties } from "react";

const Radio = Radio_Canada({
  weight: ["500", "600", "700"],
  subsets: ["latin-ext"],
});

interface PropsType extends ComponentProps<"a"> {
  href: string;
  text: string;
  style?: CSSProperties;
  variant: "v1" | "v2";
}

export default function LinkButton(props: PropsType) {
  const { href, text, style, variant } = props;

  return (
    <Link
      {...props}
      href={href}
      className={`${styles.link} ${styles[variant]} ${Radio.className}`}
      style={style}
    >
      <span>{text}</span>
    </Link>
  );
}
