import styles from "@/styles/form/Textarea.module.scss";
import { RefObject } from "react";

interface PropsType {
  label: string;
  min?: number;
  max?: number;
  id: string;
  refs: RefObject<HTMLTextAreaElement>;
}

export default function Textarea(props: PropsType) {
  const { label, id, max, refs } = props;

  return (
    <div className={styles.textarea}>
      <textarea
        id={id}
        name={id}
        maxLength={max}
        placeholder=" "
        cols={30}
        rows={10}
        ref={refs}
      ></textarea>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
